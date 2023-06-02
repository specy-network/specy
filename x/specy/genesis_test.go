package specy_test

import (
	"testing"

	"github.com/stretchr/testify/require"
	keepertest "specy/testutil/keeper"
	"specy/testutil/nullify"
	"specy/x/specy"
	"specy/x/specy/types"
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
		// this line is used by starport scaffolding # genesis/test/state
	}

	k, ctx := keepertest.SpecyKeeper(t)
	specy.InitGenesis(ctx, *k, genesisState)
	got := specy.ExportGenesis(ctx, *k)
	require.NotNil(t, got)

	nullify.Fill(&genesisState)
	nullify.Fill(got)

	require.ElementsMatch(t, genesisState.ExecutorList, got.ExecutorList)
	// this line is used by starport scaffolding # genesis/test/assert
}
