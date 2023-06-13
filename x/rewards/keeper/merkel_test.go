package keeper_test

import (
	"strconv"
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	keepertest "github.com/specy-network/specy/testutil/keeper"
	"github.com/specy-network/specy/testutil/nullify"
	"github.com/specy-network/specy/x/rewards/keeper"
	"github.com/specy-network/specy/x/rewards/types"
	"github.com/stretchr/testify/require"
)

// Prevent strconv unused error
var _ = strconv.IntSize

func createNMerkel(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.Merkel {
	items := make([]types.Merkel, n)
	for i := range items {
		items[i].Datahash = strconv.Itoa(i)

		keeper.SetMerkel(ctx, items[i])
	}
	return items
}

func TestMerkelGet(t *testing.T) {
	keeper, ctx := keepertest.RewardsKeeper(t)
	items := createNMerkel(keeper, ctx, 10)
	for _, item := range items {
		rst, found := keeper.GetMerkel(ctx,
			item.Datahash,
		)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&rst),
		)
	}
}
func TestMerkelRemove(t *testing.T) {
	keeper, ctx := keepertest.RewardsKeeper(t)
	items := createNMerkel(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveMerkel(ctx,
			item.Datahash,
		)
		_, found := keeper.GetMerkel(ctx,
			item.Datahash,
		)
		require.False(t, found)
	}
}

func TestMerkelGetAll(t *testing.T) {
	keeper, ctx := keepertest.RewardsKeeper(t)
	items := createNMerkel(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllMerkel(ctx)),
	)
}
