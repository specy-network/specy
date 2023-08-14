package keeper

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	authtypes "github.com/cosmos/cosmos-sdk/x/auth/types"
	"github.com/specy-network/specy/x/specy/types"
)

// GetBalancePool returns the total deposit tokens pool's module account
func (k Keeper) GetBalancePool(ctx sdk.Context) (balancePoolAcc authtypes.ModuleAccountI) {
	return k.authKeeper.GetModuleAccount(ctx, types.BalancePoolName)
}

// GetRewardPool returns the total current reward tokens pool's module account
func (k Keeper) GetRewardPool(ctx sdk.Context) (rewardPoolAcc authtypes.ModuleAccountI) {
	return k.authKeeper.GetModuleAccount(ctx, types.RewardPoolName)
}
