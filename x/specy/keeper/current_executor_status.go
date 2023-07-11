package keeper

import (
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/specy-network/specy/x/specy/types"
)

// SetCurrentExecutorStatus set currentExecutorStatus in the store
func (k Keeper) SetCurrentExecutorStatus(ctx sdk.Context, currentExecutorStatus types.CurrentExecutorStatus) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.CurrentExecutorStatusKey))
	b := k.cdc.MustMarshal(&currentExecutorStatus)
	store.Set([]byte{0}, b)
}

// GetCurrentExecutorStatus returns currentExecutorStatus
func (k Keeper) GetCurrentExecutorStatus(ctx sdk.Context) (val types.CurrentExecutorStatus, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.CurrentExecutorStatusKey))

	b := store.Get([]byte{0})
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveCurrentExecutorStatus removes currentExecutorStatus from the store
func (k Keeper) RemoveCurrentExecutorStatus(ctx sdk.Context) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.CurrentExecutorStatusKey))
	store.Delete([]byte{0})
}
