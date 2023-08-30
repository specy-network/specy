package keeper

import (
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/specy-network/specy/x/specy/types"
)

// SetHistoryExecuteCount set historyExecuteCount in the store
func (k Keeper) SetHistoryExecuteCount(ctx sdk.Context, historyExecuteCount types.HistoryExecuteCount) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.HistoryExecuteCountKey))
	b := k.cdc.MustMarshal(&historyExecuteCount)
	store.Set([]byte{0}, b)
}

// GetHistoryExecuteCount returns historyExecuteCount
func (k Keeper) GetHistoryExecuteCount(ctx sdk.Context) (val types.HistoryExecuteCount, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.HistoryExecuteCountKey))

	b := store.Get([]byte{0})
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveHistoryExecuteCount removes historyExecuteCount from the store
func (k Keeper) RemoveHistoryExecuteCount(ctx sdk.Context) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.HistoryExecuteCountKey))
	store.Delete([]byte{0})
}
