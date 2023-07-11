package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/specy-network/specy/x/specy/types"
)

func (k msgServer) CancelExecutor(goCtx context.Context, msg *types.MsgCancelExecutor) (*types.MsgCancelExecutorResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: Handling the message
	_ = ctx

	return &types.MsgCancelExecutorResponse{}, nil
}
