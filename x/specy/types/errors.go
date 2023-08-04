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

	ErrDepositNotExsit         = sdkerrors.Register(ModuleName, 1008, "deposit not exsit")
	ErrDepositBalanceNotEnough = sdkerrors.Register(ModuleName, 1009, "deposit balance not enough")
	ErrDepositDenomInvalid     = sdkerrors.Register(ModuleName, 1010, "deposit balance failed, denom is invalid")

	ErrMsgGetCachedValue    = sdkerrors.Register(ModuleName, 1011, "msg  get chched value from task error ")
	ErrExecutorAuthCheck    = sdkerrors.Register(ModuleName, 1012, "executor permission verification failed ")
	ErrDeductExecuteTaskFee = sdkerrors.Register(ModuleName, 1013, "failed to deduct task execution fee ")
)
