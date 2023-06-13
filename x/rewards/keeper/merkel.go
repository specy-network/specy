package keeper

import (
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/specy-network/specy/x/rewards/types"
)

// SetMerkel set a specific merkel in the store from its index
func (k Keeper) SetMerkel(ctx sdk.Context, merkel types.Merkel) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.MerkelKeyPrefix))
	b := k.cdc.MustMarshal(&merkel)
	store.Set(types.MerkelKey(
		merkel.Datahash,
	), b)
}

// GetMerkel returns a merkel from its index
func (k Keeper) GetMerkel(
	ctx sdk.Context,
	datahash string,

) (val types.Merkel, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.MerkelKeyPrefix))

	b := store.Get(types.MerkelKey(
		datahash,
	))
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveMerkel removes a merkel from the store
func (k Keeper) RemoveMerkel(
	ctx sdk.Context,
	datahash string,

) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.MerkelKeyPrefix))
	store.Delete(types.MerkelKey(
		datahash,
	))
}

// GetAllMerkel returns all merkel
func (k Keeper) GetAllMerkel(ctx sdk.Context) (list []types.Merkel) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.MerkelKeyPrefix))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.Merkel
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}
