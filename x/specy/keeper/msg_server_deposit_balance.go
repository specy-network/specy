package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/specy-network/specy/x/specy/types"
)

func (k msgServer) DepositBalance(goCtx context.Context, msg *types.MsgDepositBalance) (*types.MsgDepositBalanceResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	accAddr, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return nil, err
	}
	//move deposit coin from user address to module balance pool
	err = k.bankKeeper.SendCoinsFromAccountToModule(ctx, accAddr, types.BalancePoolName, sdk.NewCoins(msg.Amount))
	if err != nil {
		return nil, err
	}
	deposit, found := k.GetDeposit(ctx, msg.Creator)
	if found {
		deposit.Balance = deposit.Balance.Add(msg.Amount)
		k.SetDeposit(ctx, deposit)
		return nil, nil
	}
	deposit = types.Deposit{
		Address: msg.Creator,
		Balance: msg.Amount,
	}
	k.SetDeposit(ctx, deposit)

	ctx.EventManager().EmitEvents(sdk.Events{
		sdk.NewEvent(
			types.EventTypeDepositBalance,
			sdk.NewAttribute(types.AttributeKeyCreator, msg.Creator),
			sdk.NewAttribute(sdk.AttributeKeyAmount, msg.Amount.String()),
		),
	})
	return &types.MsgDepositBalanceResponse{}, nil
}
