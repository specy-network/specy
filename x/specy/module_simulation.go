package specy

import (
	"math/rand"

	"github.com/cosmos/cosmos-sdk/baseapp"
	simappparams "github.com/cosmos/cosmos-sdk/simapp/params"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/module"
	simtypes "github.com/cosmos/cosmos-sdk/types/simulation"
	"github.com/cosmos/cosmos-sdk/x/simulation"
	"github.com/specy-network/specy/testutil/sample"
	specysimulation "github.com/specy-network/specy/x/specy/simulation"
	"github.com/specy-network/specy/x/specy/types"
)

// avoid unused import issue
var (
	_ = sample.AccAddress
	_ = specysimulation.FindAccount
	_ = simappparams.StakePerAccount
	_ = simulation.MsgEntryKind
	_ = baseapp.Paramspace
)

const (
	opWeightMsgCreateTask = "op_weight_msg_create_task"
	// TODO: Determine the simulation weight value
	defaultWeightMsgCreateTask int = 100

	opWeightMsgCancelTask = "op_weight_msg_cancel_task"
	// TODO: Determine the simulation weight value
	defaultWeightMsgCancelTask int = 100

	opWeightMsgEditTask = "op_weight_msg_edit_task"
	// TODO: Determine the simulation weight value
	defaultWeightMsgEditTask int = 100

	opWeightMsgCreateExecutor = "op_weight_msg_create_executor"
	// TODO: Determine the simulation weight value
	defaultWeightMsgCreateExecutor int = 100

	opWeightMsgCancelExecutor = "op_weight_msg_cancel_executor"
	// TODO: Determine the simulation weight value
	defaultWeightMsgCancelExecutor int = 100

	opWeightMsgDepositBalance = "op_weight_msg_deposit_balance"
	// TODO: Determine the simulation weight value
	defaultWeightMsgDepositBalance int = 100

	opWeightMsgWithdrawBalance = "op_weight_msg_withdraw_balance"
	// TODO: Determine the simulation weight value
	defaultWeightMsgWithdrawBalance int = 100

	// this line is used by starport scaffolding # simapp/module/const
)

// GenerateGenesisState creates a randomized GenState of the module
func (AppModule) GenerateGenesisState(simState *module.SimulationState) {
	accs := make([]string, len(simState.Accounts))
	for i, acc := range simState.Accounts {
		accs[i] = acc.Address.String()
	}
	specyGenesis := types.GenesisState{
		Params: types.DefaultParams(),
		// this line is used by starport scaffolding # simapp/module/genesisState
	}
	simState.GenState[types.ModuleName] = simState.Cdc.MustMarshalJSON(&specyGenesis)
}

// ProposalContents doesn't return any content functions for governance proposals
func (AppModule) ProposalContents(_ module.SimulationState) []simtypes.WeightedProposalContent {
	return nil
}

// RandomizedParams creates randomized  param changes for the simulator
func (am AppModule) RandomizedParams(_ *rand.Rand) []simtypes.ParamChange {
	specyParams := types.DefaultParams()
	return []simtypes.ParamChange{
		simulation.NewSimParamChange(types.ModuleName, string(types.KeyIntervalBlock), func(r *rand.Rand) string {
			return string(types.Amino.MustMarshalJSON(specyParams.IntervalBlock))
		}),
		simulation.NewSimParamChange(types.ModuleName, string(types.KeyPrice), func(r *rand.Rand) string {
			return string(types.Amino.MustMarshalJSON(specyParams.Price))
		}),
	}
}

// RegisterStoreDecoder registers a decoder
func (am AppModule) RegisterStoreDecoder(_ sdk.StoreDecoderRegistry) {}

// WeightedOperations returns the all the gov module operations with their respective weights.
func (am AppModule) WeightedOperations(simState module.SimulationState) []simtypes.WeightedOperation {
	operations := make([]simtypes.WeightedOperation, 0)

	var weightMsgCreateTask int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgCreateTask, &weightMsgCreateTask, nil,
		func(_ *rand.Rand) {
			weightMsgCreateTask = defaultWeightMsgCreateTask
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgCreateTask,
		specysimulation.SimulateMsgCreateTask(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgCancelTask int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgCancelTask, &weightMsgCancelTask, nil,
		func(_ *rand.Rand) {
			weightMsgCancelTask = defaultWeightMsgCancelTask
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgCancelTask,
		specysimulation.SimulateMsgCancelTask(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgEditTask int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgEditTask, &weightMsgEditTask, nil,
		func(_ *rand.Rand) {
			weightMsgEditTask = defaultWeightMsgEditTask
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgEditTask,
		specysimulation.SimulateMsgEditTask(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgCreateExecutor int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgCreateExecutor, &weightMsgCreateExecutor, nil,
		func(_ *rand.Rand) {
			weightMsgCreateExecutor = defaultWeightMsgCreateExecutor
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgCreateExecutor,
		specysimulation.SimulateMsgCreateExecutor(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgCancelExecutor int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgCancelExecutor, &weightMsgCancelExecutor, nil,
		func(_ *rand.Rand) {
			weightMsgCancelExecutor = defaultWeightMsgCancelExecutor
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgCancelExecutor,
		specysimulation.SimulateMsgCancelExecutor(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgDepositBalance int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgDepositBalance, &weightMsgDepositBalance, nil,
		func(_ *rand.Rand) {
			weightMsgDepositBalance = defaultWeightMsgDepositBalance
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgDepositBalance,
		specysimulation.SimulateMsgDepositBalance(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgWithdrawBalance int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgWithdrawBalance, &weightMsgWithdrawBalance, nil,
		func(_ *rand.Rand) {
			weightMsgWithdrawBalance = defaultWeightMsgWithdrawBalance
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgWithdrawBalance,
		specysimulation.SimulateMsgWithdrawBalance(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	// this line is used by starport scaffolding # simapp/module/operation

	return operations
}
