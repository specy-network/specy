package keeper_test

import (
	"context"
	"testing"

	keepertest "github.com/specy-network/specy/testutil/keeper"
	"github.com/specy-network/specy/x/specy/keeper"
	"github.com/specy-network/specy/x/specy/types"

	sdk "github.com/cosmos/cosmos-sdk/types"
)

func setupMsgServer(t testing.TB) (types.MsgServer, context.Context) {
	k, ctx := keepertest.SpecyKeeper(t)
	return keeper.NewMsgServerImpl(*k), sdk.WrapSDKContext(ctx)
}
