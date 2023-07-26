package specy

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/specy-network/specy/x/specy/keeper"
)

// BeginBlocker will switch executor if arrived block height
func BeginBlocker(ctx sdk.Context, k keeper.Keeper) {

	//check
	currentExecutor, found := k.GetCurrentExecutorStatus(ctx)
	if (found && currentExecutor.ChangeHeight == ctx.BlockHeight()) || (!found && len(k.GetAllExecutor(ctx)) != 0) {
		k.ExecutorSelection(ctx)
	}

}
