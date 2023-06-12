package keeper

import (
	"context"
	"strings"

	"specy/x/rewards/types"

	sdk "github.com/cosmos/cosmos-sdk/types"
)

func (k msgServer) SetRewardList(goCtx context.Context, msg *types.MsgSetRewardList) (*types.MsgSetRewardListResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: Handling the message
	_ = ctx
	store := ctx.KVStore(k.storeKey)
	stringList := strings.Join(msg.List, ",")
	store.Set([]byte("rewards_list"), []byte(stringList))

	ctx.EventManager().EmitEvents(sdk.Events{
		sdk.NewEvent(
			types.EventTypeSetRewardList,
			sdk.NewAttribute(types.AttributeKeyRewardList, stringList),
		),
	})
	return &types.MsgSetRewardListResponse{}, nil
}
