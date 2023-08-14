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

func (k Keeper) TaskAll(goCtx context.Context, req *types.QueryAllTaskRequest) (*types.QueryAllTaskResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var tasks []types.Task
	ctx := sdk.UnwrapSDKContext(goCtx)

	store := ctx.KVStore(k.storeKey)
	taskStore := prefix.NewStore(store, types.KeyPrefix(types.TaskKeyPrefix))

	pageRes, err := query.Paginate(taskStore, req.Pagination, func(key []byte, value []byte) error {
		var task types.Task
		if err := k.cdc.Unmarshal(value, &task); err != nil {
			return err
		}

		tasks = append(tasks, task)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllTaskResponse{Task: tasks, Pagination: pageRes}, nil
}

func (k Keeper) Task(goCtx context.Context, req *types.QueryGetTaskRequest) (*types.QueryGetTaskResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}
	ctx := sdk.UnwrapSDKContext(goCtx)

	val, found := k.GetTask(
		ctx,
		req.Owner,
		req.Name,
	)
	if !found {
		return nil, status.Error(codes.NotFound, "not found")
	}

	return &types.QueryGetTaskResponse{Task: val}, nil
}
