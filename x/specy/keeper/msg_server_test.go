package keeper_test

import (
	"context"
	"testing"

	keepertest "specy/testutil/keeper"
	"specy/x/specy/keeper"
	"specy/x/specy/types"

	sdk "github.com/cosmos/cosmos-sdk/types"
)

func setupMsgServer(t testing.TB) (types.MsgServer, context.Context) {
	k, ctx := keepertest.SpecyKeeper(t)
	return keeper.NewMsgServerImpl(*k), sdk.WrapSDKContext(ctx)
}
