package keeper

import (
	"context"
	"fmt"

	"specy/x/rewards/types"

	sdk "github.com/cosmos/cosmos-sdk/types"
)

func (k msgServer) Claim(goCtx context.Context, msg *types.MsgClaim) (*types.MsgClaimResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	//TODO check proof and send coin

	fmt.Println(ctx)

	return &types.MsgClaimResponse{}, nil
}
