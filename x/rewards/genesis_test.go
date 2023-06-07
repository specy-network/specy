package rewards_test

import (
	"testing"

	"github.com/stretchr/testify/require"
	keepertest "specy/testutil/keeper"
	"specy/testutil/nullify"
	"specy/x/rewards"
	"specy/x/rewards/types"
)

func TestGenesis(t *testing.T) {
	genesisState := types.GenesisState{
		Params: types.DefaultParams(),

		MerkelList: []types.Merkel{
			{
				Datahash: "0",
			},
			{
				Datahash: "1",
			},
		},
		// this line is used by starport scaffolding # genesis/test/state
	}

	k, ctx := keepertest.RewardsKeeper(t)
	rewards.InitGenesis(ctx, *k, genesisState)
	got := rewards.ExportGenesis(ctx, *k)
	require.NotNil(t, got)

	nullify.Fill(&genesisState)
	nullify.Fill(got)

	require.ElementsMatch(t, genesisState.MerkelList, got.MerkelList)
	// this line is used by starport scaffolding # genesis/test/assert
}
