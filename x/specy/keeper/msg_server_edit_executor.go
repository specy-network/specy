package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/specy-network/specy/x/specy/types"
)

func (k msgServer) EditExecutor(goCtx context.Context, msg *types.MsgEditExecutor) (*types.MsgEditExecutorResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: Handling the message
	_ = ctx

	return &types.MsgEditExecutorResponse{}, nil
}
