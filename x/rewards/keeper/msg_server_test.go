package keeper_test

import (
	"context"
	"testing"

	keepertest "specy/testutil/keeper"
	"specy/x/rewards/keeper"
	"specy/x/rewards/types"

	sdk "github.com/cosmos/cosmos-sdk/types"
)

func setupMsgServer(t testing.TB) (types.MsgServer, context.Context) {
	k, ctx := keepertest.RewardsKeeper(t)
	return keeper.NewMsgServerImpl(*k), sdk.WrapSDKContext(ctx)
}
