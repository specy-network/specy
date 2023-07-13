package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/specy-network/specy/x/specy/types"
)

func (k msgServer) CreateExecutor(goCtx context.Context, msg *types.MsgCreateExecutor) (*types.MsgCreateExecutorResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)
	//executor must is a validator
	valAddress, err := sdk.ValAddressFromHex(msg.Creator)
	if err != nil {
		return nil, err
	}
	_, found := k.stakingKeeper.GetValidator(ctx, valAddress)
	if !found {
		return nil, types.ErrExecutorNotValidator
	}
	_, found = k.GetExecutor(ctx, msg.Creator)
	if found {
		return nil, types.ErrExecutorIsExsit
	}

	executor := &types.Executor{
		Address:              msg.Creator,
		EnclavePk:            msg.EnclavePk,
		IasAttestationReport: msg.IasAttestationReport,
	}

	k.SetExecutor(ctx, *executor)

	ctx.EventManager().EmitEvents(sdk.Events{
		sdk.NewEvent(
			types.EventTypeCreateExecutor,
			sdk.NewAttribute(types.AttributeKeyCreator, msg.Creator),
			sdk.NewAttribute(types.AttributeKeyExecutorIasReport, msg.IasAttestationReport),
			sdk.NewAttribute(types.AttributeKeyExecutorEnclavePK, msg.EnclavePk),
		),
	})

	return &types.MsgCreateExecutorResponse{}, nil
}
