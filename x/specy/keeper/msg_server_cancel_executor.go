package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/specy-network/specy/x/specy/types"
)

func (k msgServer) CancelExecutor(goCtx context.Context, msg *types.MsgCancelExecutor) (*types.MsgCancelExecutorResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	_, found := k.GetExecutor(ctx, msg.Creator)
	if !found {
		return nil, types.ErrExecutorNotExsit
	}

	k.RemoveExecutor(ctx, msg.Creator)
	ctx.EventManager().EmitEvents(sdk.Events{
		sdk.NewEvent(
			types.EventTypeCancelExecutor,
			sdk.NewAttribute(types.AttributeKeyCreator, msg.Creator),
		),
	})

	return &types.MsgCancelExecutorResponse{}, nil
}
