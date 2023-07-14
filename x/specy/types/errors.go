package types

// DONTCOVER

import (
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

// x/specy module sentinel errors
var (
	ErrPoolBalance            = sdkerrors.Register(ModuleName, 1100, "The pool balance is inconsistent with the total account balance")
	ErrExecutorIsExsit        = sdkerrors.Register(ModuleName, 1001, "create executor error , already exsit")
	ErrTaskIsExsit            = sdkerrors.Register(ModuleName, 1002, "create task error , already exsit")
	ErrTaskPortParse          = sdkerrors.Register(ModuleName, 1003, "task port parse error , error")
	ErrTaskInterMsgsUnmarshal = sdkerrors.Register(ModuleName, 1004, "task inter msgs unmarshal error , error")
	ErrTaskNotExsit           = sdkerrors.Register(ModuleName, 1005, "process task error,not exsit")

	ErrExecutorNotExsit     = sdkerrors.Register(ModuleName, 1006, "process executor error,not exsit")
	ErrExecutorNotValidator = sdkerrors.Register(ModuleName, 1007, "create executor error, not in validator list")

	ErrDepositNotExsit          = sdkerrors.Register(ModuleName, 1008, "withdraw balance failed, deposit not exsit")
	ErrWithdrawBalanceNotEnough = sdkerrors.Register(ModuleName, 1009, "withdraw balance failed, balance not enough")
)
