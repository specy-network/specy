package keeper

import (
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/specy-network/specy/x/specy/types"
)

// SetTask set a specific task in the store from its index
func (k Keeper) SetTask(ctx sdk.Context, task types.Task) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.TaskKeyPrefix))
	b := k.cdc.MustMarshal(&task)
	store.Set(types.TaskKey(
		task.Owner,
		task.Name,
	), b)
}

// GetTask returns a task from its index
func (k Keeper) GetTask(
	ctx sdk.Context,
	owner string,
	name string,

) (val types.Task, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.TaskKeyPrefix))

	b := store.Get(types.TaskKey(
		owner,
		name,
	))
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveTask removes a task from the store
func (k Keeper) RemoveTask(
	ctx sdk.Context,
	owner string,
	name string,

) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.TaskKeyPrefix))
	store.Delete(types.TaskKey(
		owner,
		name,
	))
}

// GetAllTask returns all task
func (k Keeper) GetAllTask(ctx sdk.Context) (list []types.Task) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.TaskKeyPrefix))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.Task
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}
func (k Keeper) GetAllTaskByOwner(ctx sdk.Context, owner []byte) (list []types.Task) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.TaskKeyPrefix))
	iterator := sdk.KVStorePrefixIterator(store, owner)

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.Task
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}
