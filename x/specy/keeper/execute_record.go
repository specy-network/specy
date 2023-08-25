package keeper

import (
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/specy-network/specy/x/specy/types"
)

// SetExecuteRecord set a specific executeRecord in the store from its index
func (k Keeper) SetExecuteRecord(ctx sdk.Context, executeRecord types.ExecuteRecord) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ExecuteRecordKeyPrefix))
	b := k.cdc.MustMarshal(&executeRecord)
	store.Set(types.ExecuteRecordKey(
		executeRecord.Owner,
		executeRecord.Name,
		executeRecord.Position,
	), b)
}

// GetExecuteRecord returns a executeRecord from its index
func (k Keeper) GetExecuteRecord(
	ctx sdk.Context,
	owner string,
	name string,
	position uint64,

) (val types.ExecuteRecord, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ExecuteRecordKeyPrefix))

	b := store.Get(types.ExecuteRecordKey(
		owner,
		name,
		position,
	))
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveExecuteRecord removes a executeRecord from the store
func (k Keeper) RemoveExecuteRecord(
	ctx sdk.Context,
	owner string,
	name string,
	position uint64,

) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ExecuteRecordKeyPrefix))
	store.Delete(types.ExecuteRecordKey(
		owner,
		name,
		position,
	))
}

// GetAllExecuteRecord returns all executeRecord
func (k Keeper) GetAllExecuteRecord(ctx sdk.Context) (list []types.ExecuteRecord) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ExecuteRecordKeyPrefix))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.ExecuteRecord
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}
