package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/specy-network/specy/x/specy/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) TaskAllByOwner(goCtx context.Context, req *types.QueryTaskAllByOwnerRequest) (*types.QueryTaskAllByOwnerResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: Process the query
	tasks := k.GetAllTaskByOwner(ctx, []byte(req.Owner))

	return &types.QueryTaskAllByOwnerResponse{Tasks: tasks}, nil
}
