package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/specy-network/specy/x/specy/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) ExecuteRecordAllByOwnerAndName(goCtx context.Context, req *types.QueryExecuteRecordAllByOwnerAndNameRequest) (*types.QueryExecuteRecordAllByOwnerAndNameResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(goCtx)
	records := k.GetAllExecuteRecordByOwnerAndName(ctx, req.Owner, req.Name)

	return &types.QueryExecuteRecordAllByOwnerAndNameResponse{Records: records}, nil
}
