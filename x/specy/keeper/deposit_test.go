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

func createNDeposit(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.Deposit {
	items := make([]types.Deposit, n)
	for i := range items {
		items[i].Address = strconv.Itoa(i)

		keeper.SetDeposit(ctx, items[i])
	}
	return items
}

func TestDepositGet(t *testing.T) {
	keeper, ctx := keepertest.SpecyKeeper(t)
	items := createNDeposit(keeper, ctx, 10)
	for _, item := range items {
		rst, found := keeper.GetDeposit(ctx,
			item.Address,
		)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&rst),
		)
	}
}
func TestDepositRemove(t *testing.T) {
	keeper, ctx := keepertest.SpecyKeeper(t)
	items := createNDeposit(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveDeposit(ctx,
			item.Address,
		)
		_, found := keeper.GetDeposit(ctx,
			item.Address,
		)
		require.False(t, found)
	}
}

func TestDepositGetAll(t *testing.T) {
	keeper, ctx := keepertest.SpecyKeeper(t)
	items := createNDeposit(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllDeposit(ctx)),
	)
}
