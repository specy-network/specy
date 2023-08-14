package specy_test

import (
	"testing"

	keepertest "github.com/specy-network/specy/testutil/keeper"
	"github.com/specy-network/specy/testutil/nullify"
	"github.com/specy-network/specy/x/specy"
	"github.com/specy-network/specy/x/specy/types"
	"github.com/stretchr/testify/require"
)

func TestGenesis(t *testing.T) {
	genesisState := types.GenesisState{
		Params: types.DefaultParams(),

		TaskList: []types.Task{
			{
				Owner: "0",
				Name:  "0",
			},
			{
				Owner: "1",
				Name:  "1",
			},
		},
		ExecutorList: []types.Executor{
			{
				Address: "0",
			},
			{
				Address: "1",
			},
		},
		DepositList: []types.Deposit{
			{
				Address: "0",
			},
			{
				Address: "1",
			},
		},
		CurrentExecutorStatus: &types.CurrentExecutorStatus{
			CurrentExecutor: "46",
			ChangeHeight:    2,
		},
		// this line is used by starport scaffolding # genesis/test/state
	}

	k, ctx := keepertest.SpecyKeeper(t)
	specy.InitGenesis(ctx, *k, genesisState)
	got := specy.ExportGenesis(ctx, *k)
	require.NotNil(t, got)

	nullify.Fill(&genesisState)
	nullify.Fill(got)

	require.ElementsMatch(t, genesisState.TaskList, got.TaskList)
	require.ElementsMatch(t, genesisState.ExecutorList, got.ExecutorList)
	require.ElementsMatch(t, genesisState.DepositList, got.DepositList)
	require.Equal(t, genesisState.CurrentExecutorStatus, got.CurrentExecutorStatus)
	// this line is used by starport scaffolding # genesis/test/assert
}
