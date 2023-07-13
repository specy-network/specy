package keeper

import (
	"context"
	"fmt"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/specy-network/specy/x/specy/types"
	"github.com/tendermint/tendermint/crypto/tmhash"
)

func (k msgServer) CancelTask(goCtx context.Context, msg *types.MsgCancelTask) (*types.MsgCancelTaskResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	_, found := k.GetTask(ctx, msg.Creator, msg.Name)
	if !found {
		return nil, types.ErrTaskNotExsit
	}

	k.RemoveTask(ctx, msg.Creator, msg.Name)

	ctx.EventManager().EmitEvents(sdk.Events{
		sdk.NewEvent(
			types.EventTypeCancelTask,
			sdk.NewAttribute(types.AttributeKeyCreator, msg.Creator),
			sdk.NewAttribute(types.AttributeKeyTaskName, msg.Name),
			sdk.NewAttribute(types.AttributeKeyTaskHash, fmt.Sprintf(string(tmhash.Sum([]byte(msg.Creator+msg.Name))))),
		),
	})

	return &types.MsgCancelTaskResponse{}, nil
}
