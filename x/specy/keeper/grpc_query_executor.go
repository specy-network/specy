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

func (k Keeper) ExecutorAll(c context.Context, req *types.QueryAllExecutorRequest) (*types.QueryAllExecutorResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var executors []types.Executor
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	executorStore := prefix.NewStore(store, types.KeyPrefix(types.ExecutorKeyPrefix))

	pageRes, err := query.Paginate(executorStore, req.Pagination, func(key []byte, value []byte) error {
		var executor types.Executor
		if err := k.cdc.Unmarshal(value, &executor); err != nil {
			return err
		}

		executors = append(executors, executor)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllExecutorResponse{Executor: executors, Pagination: pageRes}, nil
}

func (k Keeper) Executor(c context.Context, req *types.QueryGetExecutorRequest) (*types.QueryGetExecutorResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}
	ctx := sdk.UnwrapSDKContext(c)

	val, found := k.GetExecutor(
		ctx,
		req.Address,
	)
	if !found {
		return nil, status.Error(codes.NotFound, "not found")
	}

	return &types.QueryGetExecutorResponse{Executor: val}, nil
}
