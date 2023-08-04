package keeper

import (
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/specy-network/specy/x/specy/types"
)

// SetDeposit set a specific deposit in the store from its index
func (k Keeper) SetDeposit(ctx sdk.Context, deposit types.Deposit) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.DepositKeyPrefix))
	b := k.cdc.MustMarshal(&deposit)
	store.Set(types.DepositKey(
		deposit.Address,
	), b)
}

// GetDeposit returns a deposit from its index
func (k Keeper) GetDeposit(
	ctx sdk.Context,
	address string,

) (val types.Deposit, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.DepositKeyPrefix))

	b := store.Get(types.DepositKey(
		address,
	))
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveDeposit removes a deposit from the store
func (k Keeper) RemoveDeposit(
	ctx sdk.Context,
	address string,

) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.DepositKeyPrefix))
	store.Delete(types.DepositKey(
		address,
	))
}

// GetAllDeposit returns all deposit
func (k Keeper) GetAllDeposit(ctx sdk.Context) (list []types.Deposit) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.DepositKeyPrefix))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.Deposit
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}

// check deposit denom equal params set  commissionDenom
func CheckDenom(ctx sdk.Context, keeper Keeper, denom string) bool {
	param := keeper.GetParams(ctx)
	return param.CommissionDenom == denom
}

//
func (k Keeper) SubFee(
	ctx sdk.Context,
	taskOwner string,

) error {

	deposit, found := k.GetDeposit(ctx, taskOwner)
	if !found {
		return types.ErrDepositNotExsit
	}
	//calculate fee amount from module parmas
	params := k.GetParams(ctx)
	amount := sdk.NewInt64Coin(params.CommissionDenom, int64(params.Amount))
	//user deposit need gte fee amount
	check := deposit.Balance.IsGTE(amount)
	if !check {
		return types.ErrDepositBalanceNotEnough
	}
	//send fee amount to reward pool ,and send  reward to distribution module pool when after block
	err := k.bankKeeper.SendCoinsFromModuleToModule(ctx, types.BalancePoolName, types.RewardPoolName, sdk.NewCoins().Add(amount))
	//pool balance err
	if err != nil {
		panic(types.ErrPoolBalance)
	}
	deposit.Balance, err = deposit.Balance.SafeSub(amount)
	if err != nil {
		return err
	}
	k.SetDeposit(ctx, deposit)
	return nil
}
