package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/specy-network/specy/x/specy/types"
)

func (k msgServer) WithdrawBalance(goCtx context.Context, msg *types.MsgWithdrawBalance) (*types.MsgWithdrawBalanceResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	deposit, found := k.GetDeposit(ctx, msg.Creator)
	if !found {
		return nil, types.ErrDepositNotExsit
	}

	check := deposit.Balance.IsGTE(msg.Amount)
	if !check {
		return nil, types.ErrWithdrawBalanceNotEnough
	}

	accAddr, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return nil, err
	}
	err = k.bankKeeper.SendCoinsFromModuleToAccount(ctx, types.BalancePoolName, accAddr, sdk.NewCoins(msg.Amount))
	//pool balance err
	if err != nil {
		panic(types.ErrPoolBalance)
	}
	deposit.Balance, err = deposit.Balance.SafeSub(msg.Amount)
	if err != nil {
		return nil, err
	}
	k.SetDeposit(ctx, deposit)

	ctx.EventManager().EmitEvents(sdk.Events{
		sdk.NewEvent(
			types.EventTypeWithdrawBalance,
			sdk.NewAttribute(types.AttributeKeyCreator, msg.Creator),
			sdk.NewAttribute(sdk.AttributeKeyAmount, msg.Amount.String()),
		),
	})
	return &types.MsgWithdrawBalanceResponse{}, nil
}
