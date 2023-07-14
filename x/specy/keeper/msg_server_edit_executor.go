package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/specy-network/specy/x/specy/types"
)

func (k msgServer) EditExecutor(goCtx context.Context, msg *types.MsgEditExecutor) (*types.MsgEditExecutorResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	executor, found := k.GetExecutor(ctx, msg.Creator)
	if !found {
		return nil, types.ErrExecutorNotExsit
	}

	executor.EnclavePk = msg.EnclavePk
	executor.IasAttestationReport = msg.IasAttestationReport

	k.SetExecutor(ctx, executor)

	ctx.EventManager().EmitEvents(sdk.Events{
		sdk.NewEvent(
			types.EventTypeEditExecutor,
			sdk.NewAttribute(types.AttributeKeyCreator, msg.Creator),
			sdk.NewAttribute(types.AttributeKeyExecutorIasReport, msg.IasAttestationReport),
			sdk.NewAttribute(types.AttributeKeyExecutorEnclavePK, msg.EnclavePk),
			sdk.NewAttribute(types.AttributeKeyExecutorValAddr, executor.ValAddr),
		),
	})
	return &types.MsgEditExecutorResponse{}, nil
}
