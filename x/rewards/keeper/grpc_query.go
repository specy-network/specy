package keeper

import (
	"github.com/specy-network/specy/x/rewards/types"
)

var _ types.QueryServer = Keeper{}
