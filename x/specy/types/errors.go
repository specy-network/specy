package types

// DONTCOVER

import (
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

// x/specy module sentinel errors
var (
	ErrExecutorIsExsit = sdkerrors.Register(ModuleName, 1, "create executor error , already exsit")
	ErrTaskIsExsit     = sdkerrors.Register(ModuleName, 2, "create task error , already exsit")
)
