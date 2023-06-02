package keeper_test

import (
	"strconv"
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/stretchr/testify/require"
	keepertest "specy/testutil/keeper"
	"specy/testutil/nullify"
	"specy/x/specy/keeper"
	"specy/x/specy/types"
)

// Prevent strconv unused error
var _ = strconv.IntSize

func createNExecutor(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.Executor {
	items := make([]types.Executor, n)
	for i := range items {
		items[i].Address = strconv.Itoa(i)

		keeper.SetExecutor(ctx, items[i])
	}
	return items
}

func TestExecutorGet(t *testing.T) {
	keeper, ctx := keepertest.SpecyKeeper(t)
	items := createNExecutor(keeper, ctx, 10)
	for _, item := range items {
		rst, found := keeper.GetExecutor(ctx,
			item.Address,
		)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&rst),
		)
	}
}
func TestExecutorRemove(t *testing.T) {
	keeper, ctx := keepertest.SpecyKeeper(t)
	items := createNExecutor(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveExecutor(ctx,
			item.Address,
		)
		_, found := keeper.GetExecutor(ctx,
			item.Address,
		)
		require.False(t, found)
	}
}

func TestExecutorGetAll(t *testing.T) {
	keeper, ctx := keepertest.SpecyKeeper(t)
	items := createNExecutor(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllExecutor(ctx)),
	)
}
