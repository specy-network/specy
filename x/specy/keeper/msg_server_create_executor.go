package keeper

import (
	"context"

	"specy/x/specy/types"

	sdk "github.com/cosmos/cosmos-sdk/types"
)

func (k msgServer) CreateExecutor(goCtx context.Context, msg *types.MsgCreateExecutor) (*types.MsgCreateExecutorResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)
	_, found := k.GetExecutor(ctx, msg.Creator)
	if found {
		return nil, types.ErrExecutorIsExsit
	}

	executor := &types.Executor{
		Address:              msg.Creator,
		Staking:              msg.Staking,
		IasAttestationReport: msg.IasAttestationReport,
		EnclavePk:            msg.EnclavePk,
	}
	executor_account, _ := sdk.AccAddressFromBech32(msg.Creator)
	error := k.bankKeeper.SendCoinsFromAccountToModule(ctx, executor_account, types.ModuleName, sdk.NewCoins(msg.Staking))
	if error != nil {
		k.Logger(ctx).Info("send coin from account to module error", "Cause:", error)
		return nil, error
	}
	k.SetExecutor(ctx, *executor)

	return &types.MsgCreateExecutorResponse{}, nil
}