package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/specy-network/specy/x/specy/types"
)

func (k msgServer) EditExecutor(goCtx context.Context, msg *types.MsgEditExecutor) (*types.MsgEditExecutorResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	_, found := k.GetExecutor(ctx, msg.Creator)
	if !found {
		return nil, types.ErrExecutorNotExsit
	}

	executor := &types.Executor{
		Address:              msg.Creator,
		EnclavePk:            msg.EnclavePk,
		IasAttestationReport: msg.IasAttestationReport,
	}

	k.SetExecutor(ctx, *executor)

	ctx.EventManager().EmitEvents(sdk.Events{
		sdk.NewEvent(
			types.EventTypeEditExecutor,
			sdk.NewAttribute(types.AttributeKeyCreator, msg.Creator),
			sdk.NewAttribute(types.AttributeKeyExecutorIasReport, msg.IasAttestationReport),
			sdk.NewAttribute(types.AttributeKeyExecutorEnclavePK, msg.EnclavePk),
		),
	})
	return &types.MsgEditExecutorResponse{}, nil
}
