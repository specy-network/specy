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

func createNExecuteRecord(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.ExecuteRecord {
	items := make([]types.ExecuteRecord, n)
	for i := range items {
		items[i].Owner = strconv.Itoa(i)
		items[i].Name = strconv.Itoa(i)
		items[i].Position = uint64(i)

		keeper.SetExecuteRecord(ctx, items[i])
	}
	return items
}

func TestExecuteRecordGet(t *testing.T) {
	keeper, ctx := keepertest.SpecyKeeper(t)
	items := createNExecuteRecord(keeper, ctx, 10)
	for _, item := range items {
		rst, found := keeper.GetExecuteRecord(ctx,
			item.Owner,
			item.Name,
			item.Position,
		)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&rst),
		)
	}
}
func TestExecuteRecordRemove(t *testing.T) {
	keeper, ctx := keepertest.SpecyKeeper(t)
	items := createNExecuteRecord(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveExecuteRecord(ctx,
			item.Owner,
			item.Name,
			item.Position,
		)
		_, found := keeper.GetExecuteRecord(ctx,
			item.Owner,
			item.Name,
			item.Position,
		)
		require.False(t, found)
	}
}

func TestExecuteRecordGetAll(t *testing.T) {
	keeper, ctx := keepertest.SpecyKeeper(t)
	items := createNExecuteRecord(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllExecuteRecord(ctx)),
	)
}
