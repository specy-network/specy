package specy

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/specy-network/specy/x/specy/keeper"
	abci "github.com/tendermint/tendermint/abci/types"
)

// BeginBlocker will switch executor if arrived block height
func BeginBlocker(ctx sdk.Context, req abci.RequestBeginBlock, k keeper.Keeper) {
	//switch currentExecutor
	consAddr := sdk.ConsAddress(req.Header.ProposerAddress)
	sk := k.GetStakingKeeper()
	proposerValidator := sk.ValidatorByConsAddr(ctx, consAddr)
	k.ExecutorSelection(ctx, proposerValidator)

}
