package keeper

import (
	"context"

	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/query"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
	"specy/x/rewards/types"
)

func (k Keeper) MerkelAll(c context.Context, req *types.QueryAllMerkelRequest) (*types.QueryAllMerkelResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var merkels []types.Merkel
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	merkelStore := prefix.NewStore(store, types.KeyPrefix(types.MerkelKeyPrefix))

	pageRes, err := query.Paginate(merkelStore, req.Pagination, func(key []byte, value []byte) error {
		var merkel types.Merkel
		if err := k.cdc.Unmarshal(value, &merkel); err != nil {
			return err
		}

		merkels = append(merkels, merkel)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllMerkelResponse{Merkel: merkels, Pagination: pageRes}, nil
}

func (k Keeper) Merkel(c context.Context, req *types.QueryGetMerkelRequest) (*types.QueryGetMerkelResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}
	ctx := sdk.UnwrapSDKContext(c)

	val, found := k.GetMerkel(
		ctx,
		req.Datahash,
	)
	if !found {
		return nil, status.Error(codes.NotFound, "not found")
	}

	return &types.QueryGetMerkelResponse{Merkel: val}, nil
}
