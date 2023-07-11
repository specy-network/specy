package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/specy-network/specy/x/specy/types"
)

func (k msgServer) WithdrawBalance(goCtx context.Context, msg *types.MsgWithdrawBalance) (*types.MsgWithdrawBalanceResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: Handling the message
	_ = ctx

	return &types.MsgWithdrawBalanceResponse{}, nil
}
