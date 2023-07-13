package types

// DONTCOVER

import (
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

// x/specy module sentinel errors
var (
	ErrSample          = sdkerrors.Register(ModuleName, 1100, "sample error")
	ErrExecutorIsExsit = sdkerrors.Register(ModuleName, 1, "create executor error , already exsit")
	ErrTaskIsExsit     = sdkerrors.Register(ModuleName, 2, "create task error , already exsit")
	ErrTaskPortParse   = sdkerrors.Register(ModuleName, 3, "task port parse error , error")

	ErrTaskInterMsgsUnmarshal = sdkerrors.Register(ModuleName, 4, "task inter msgs unmarshal error , error")
)
