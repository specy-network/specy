package specy

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/specy-network/specy/x/specy/keeper"
	"github.com/specy-network/specy/x/specy/types"
)

// InitGenesis initializes the module's state from a provided genesis state.
func InitGenesis(ctx sdk.Context, k keeper.Keeper, genState types.GenesisState) {
	// Set all the task
	for _, elem := range genState.TaskList {
		k.SetTask(ctx, elem)
	}
	// Set all the executor
	for _, elem := range genState.ExecutorList {
		k.SetExecutor(ctx, elem)
	}
	// Set all the deposit
	for _, elem := range genState.DepositList {
		k.SetDeposit(ctx, elem)
	}
	// Set if defined
	if genState.CurrentExecutorStatus != nil {
		k.SetCurrentExecutorStatus(ctx, *genState.CurrentExecutorStatus)
	}
	// Set if defined
	if genState.HistoryExecuteCount != nil {
		k.SetHistoryExecuteCount(ctx, *genState.HistoryExecuteCount)
	}
	// this line is used by starport scaffolding # genesis/module/init
	k.SetParams(ctx, genState.Params)
}

// ExportGenesis returns the module's exported genesis
func ExportGenesis(ctx sdk.Context, k keeper.Keeper) *types.GenesisState {
	genesis := types.DefaultGenesis()
	genesis.Params = k.GetParams(ctx)

	genesis.TaskList = k.GetAllTask(ctx)
	genesis.ExecutorList = k.GetAllExecutor(ctx)
	genesis.DepositList = k.GetAllDeposit(ctx)
	// Get all currentExecutorStatus
	currentExecutorStatus, found := k.GetCurrentExecutorStatus(ctx)
	if found {
		genesis.CurrentExecutorStatus = &currentExecutorStatus
	}
	// Get all historyExecuteCount
	historyExecuteCount, found := k.GetHistoryExecuteCount(ctx)
	if found {
		genesis.HistoryExecuteCount = &historyExecuteCount
	}
	// this line is used by starport scaffolding # genesis/module/export

	return genesis
}
