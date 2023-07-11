package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/specy-network/specy/x/specy/types"
)

func (k msgServer) CreateExecutor(goCtx context.Context, msg *types.MsgCreateExecutor) (*types.MsgCreateExecutorResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: Handling the message
	_ = ctx

	return &types.MsgCreateExecutorResponse{}, nil
}
