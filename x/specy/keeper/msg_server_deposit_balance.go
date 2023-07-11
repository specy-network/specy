package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/specy-network/specy/x/specy/types"
)

func (k msgServer) DepositBalance(goCtx context.Context, msg *types.MsgDepositBalance) (*types.MsgDepositBalanceResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: Handling the message
	_ = ctx

	return &types.MsgDepositBalanceResponse{}, nil
}
