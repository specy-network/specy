package keeper_test

import (
	"strconv"
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	keepertest "github.com/specy-network/specy/testutil/keeper"
	"github.com/specy-network/specy/testutil/nullify"
	"github.com/specy-network/specy/x/specy/keeper"
	"github.com/specy-network/specy/x/specy/types"
	"github.com/stretchr/testify/require"
)

// Prevent strconv unused error
var _ = strconv.IntSize

func createNTask(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.Task {
	items := make([]types.Task, n)
	for i := range items {
		items[i].TaskHash = strconv.Itoa(i)

		keeper.SetTask(ctx, items[i])
	}
	return items
}

func TestTaskGet(t *testing.T) {
	keeper, ctx := keepertest.SpecyKeeper(t)
	items := createNTask(keeper, ctx, 10)
	for _, item := range items {
		rst, found := keeper.GetTask(ctx,
			item.TaskHash,
		)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&rst),
		)
	}
}
func TestTaskRemove(t *testing.T) {
	keeper, ctx := keepertest.SpecyKeeper(t)
	items := createNTask(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveTask(ctx,
			item.TaskHash,
		)
		_, found := keeper.GetTask(ctx,
			item.TaskHash,
		)
		require.False(t, found)
	}
}

func TestTaskGetAll(t *testing.T) {
	keeper, ctx := keepertest.SpecyKeeper(t)
	items := createNTask(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllTask(ctx)),
	)
}
