package keeper_test

import (
	"testing"

	"github.com/stretchr/testify/require"
	testkeeper "specy/testutil/keeper"
	"specy/x/specy/types"
)

func TestGetParams(t *testing.T) {
	k, ctx := testkeeper.SpecyKeeper(t)
	params := types.DefaultParams()

	k.SetParams(ctx, params)

	require.EqualValues(t, params, k.GetParams(ctx))
}
