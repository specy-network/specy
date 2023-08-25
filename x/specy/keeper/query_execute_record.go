package keeper

import (
	"context"

	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/query"
	"github.com/specy-network/specy/x/specy/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) ExecuteRecordAll(goCtx context.Context, req *types.QueryAllExecuteRecordRequest) (*types.QueryAllExecuteRecordResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var executeRecords []types.ExecuteRecord
	ctx := sdk.UnwrapSDKContext(goCtx)

	store := ctx.KVStore(k.storeKey)
	executeRecordStore := prefix.NewStore(store, types.KeyPrefix(types.ExecuteRecordKeyPrefix))

	pageRes, err := query.Paginate(executeRecordStore, req.Pagination, func(key []byte, value []byte) error {
		var executeRecord types.ExecuteRecord
		if err := k.cdc.Unmarshal(value, &executeRecord); err != nil {
			return err
		}

		executeRecords = append(executeRecords, executeRecord)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllExecuteRecordResponse{ExecuteRecord: executeRecords, Pagination: pageRes}, nil
}

func (k Keeper) ExecuteRecord(goCtx context.Context, req *types.QueryGetExecuteRecordRequest) (*types.QueryGetExecuteRecordResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}
	ctx := sdk.UnwrapSDKContext(goCtx)

	val, found := k.GetExecuteRecord(
		ctx,
		req.Owner,
		req.Name,
		req.Position,
	)
	if !found {
		return nil, status.Error(codes.NotFound, "not found")
	}

	return &types.QueryGetExecuteRecordResponse{ExecuteRecord: val}, nil
}
