package keeper_test

import (
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/stretchr/testify/require"

	keepertest "github.com/specy-network/specy/testutil/keeper"
	"github.com/specy-network/specy/testutil/nullify"
	"github.com/specy-network/specy/x/specy/keeper"
	"github.com/specy-network/specy/x/specy/types"
)

func createTestHistoryExecuteCount(keeper *keeper.Keeper, ctx sdk.Context) types.HistoryExecuteCount {
	item := types.HistoryExecuteCount{}
	keeper.SetHistoryExecuteCount(ctx, item)
	return item
}

func TestHistoryExecuteCountGet(t *testing.T) {
	keeper, ctx := keepertest.SpecyKeeper(t)
	item := createTestHistoryExecuteCount(keeper, ctx)
	rst, found := keeper.GetHistoryExecuteCount(ctx)
	require.True(t, found)
	require.Equal(t,
		nullify.Fill(&item),
		nullify.Fill(&rst),
	)
}

func TestHistoryExecuteCountRemove(t *testing.T) {
	keeper, ctx := keepertest.SpecyKeeper(t)
	createTestHistoryExecuteCount(keeper, ctx)
	keeper.RemoveHistoryExecuteCount(ctx)
	_, found := keeper.GetHistoryExecuteCount(ctx)
	require.False(t, found)
}
