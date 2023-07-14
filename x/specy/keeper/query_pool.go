package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/specy-network/specy/x/specy/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) Pool(goCtx context.Context, req *types.QueryPoolRequest) (*types.QueryPoolResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(goCtx)
	param := k.GetParams(ctx)
	balancesPoolMacc := k.GetBalancePool(ctx)
	currentExecutorRewardMacc := k.GetRewardPool(ctx)
	totalBalance := k.bankKeeper.GetBalance(ctx, balancesPoolMacc.GetAddress(), param.CommissionDenom)

	currentExecutorReward := k.bankKeeper.GetBalance(ctx, currentExecutorRewardMacc.GetAddress(), param.CommissionDenom)
	reqponse := &types.QueryPoolResponse{
		TotalDeposit:  totalBalance,
		CurrentReward: currentExecutorReward,
	}

	return reqponse, nil
}
