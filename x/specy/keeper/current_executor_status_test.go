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

func createTestCurrentExecutorStatus(keeper *keeper.Keeper, ctx sdk.Context) types.CurrentExecutorStatus {
	item := types.CurrentExecutorStatus{}
	keeper.SetCurrentExecutorStatus(ctx, item)
	return item
}

func TestCurrentExecutorStatusGet(t *testing.T) {
	keeper, ctx := keepertest.SpecyKeeper(t)
	item := createTestCurrentExecutorStatus(keeper, ctx)
	rst, found := keeper.GetCurrentExecutorStatus(ctx)
	require.True(t, found)
	require.Equal(t,
		nullify.Fill(&item),
		nullify.Fill(&rst),
	)
}

func TestCurrentExecutorStatusRemove(t *testing.T) {
	keeper, ctx := keepertest.SpecyKeeper(t)
	createTestCurrentExecutorStatus(keeper, ctx)
	keeper.RemoveCurrentExecutorStatus(ctx)
	_, found := keeper.GetCurrentExecutorStatus(ctx)
	require.False(t, found)
}
