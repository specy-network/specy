package specy_test

import (
	"testing"

	keepertest "specy/testutil/keeper"
	"specy/testutil/nullify"
	"specy/x/specy"
	"specy/x/specy/types"

	"github.com/stretchr/testify/require"
)

func TestGenesis(t *testing.T) {
	genesisState := types.GenesisState{
		Params: types.DefaultParams(),

		ExecutorList: []types.Executor{
			{
				Address: "0",
			},
			{
				Address: "1",
			},
		},
		TaskList: []types.Task{
			{
				TaskHash: "0",
			},
			{
				TaskHash: "1",
			},
		},
		// this line is used by starport scaffolding # genesis/test/state
	}

	k, ctx := keepertest.SpecyKeeper(t)
	specy.InitGenesis(ctx, *k, genesisState)
	got := specy.ExportGenesis(ctx, *k)
	require.NotNil(t, got)

	nullify.Fill(&genesisState)
	nullify.Fill(got)

	require.ElementsMatch(t, genesisState.ExecutorList, got.ExecutorList)
	require.ElementsMatch(t, genesisState.TaskList, got.TaskList)
	// this line is used by starport scaffolding # genesis/test/assert
}
