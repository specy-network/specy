package keeper

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/specy-network/specy/x/specy/types"
)

// GetParams get all parameters as types.Params
func (k Keeper) GetParams(ctx sdk.Context) types.Params {
	return types.NewParams(
		k.IntervalBlock(ctx),
		k.CommissionDenom(ctx),
		k.Amount(ctx),
	)
}

// SetParams set the params
func (k Keeper) SetParams(ctx sdk.Context, params types.Params) {
	k.paramstore.SetParamSet(ctx, &params)
}

// IntervalBlock returns the IntervalBlock param
func (k Keeper) IntervalBlock(ctx sdk.Context) (res uint64) {
	k.paramstore.Get(ctx, types.KeyIntervalBlock, &res)
	return
}

// CommissionDenom returns the CommissionDenom param
func (k Keeper) CommissionDenom(ctx sdk.Context) (res string) {
	k.paramstore.Get(ctx, types.KeyCommissionDenom, &res)
	return
}

// Amount returns the Amount param
func (k Keeper) Amount(ctx sdk.Context) (res uint64) {
	k.paramstore.Get(ctx, types.KeyAmount, &res)
	return
}
