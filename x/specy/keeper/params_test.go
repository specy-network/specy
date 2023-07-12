package keeper_test

import (
	"testing"

	testkeeper "github.com/specy-network/specy/testutil/keeper"
	"github.com/specy-network/specy/x/specy/types"
	"github.com/stretchr/testify/require"
)

func TestGetParams(t *testing.T) {
	k, ctx := testkeeper.SpecyKeeper(t)
	params := types.DefaultParams()

	k.SetParams(ctx, params)

	require.EqualValues(t, params, k.GetParams(ctx))
	require.EqualValues(t, params.IntervalBlock, k.IntervalBlock(ctx))
	require.EqualValues(t, params.CommissionDenom, k.CommissionDenom(ctx))
	require.EqualValues(t, params.Amount, k.Amount(ctx))
}
