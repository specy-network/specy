package types

// DONTCOVER

import (
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

// x/rewards module sentinel errors
var (
	ErrSample           = sdkerrors.Register(ModuleName, 1100, "sample error")
	ErrMerkelNotExsit   = sdkerrors.Register(ModuleName, 1, "Merkel root not exsit")
	ErrMerkelProofParse = sdkerrors.Register(ModuleName, 2, "Proof path parse error")
)
