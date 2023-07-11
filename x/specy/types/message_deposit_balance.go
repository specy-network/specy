package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgDepositBalance = "deposit_balance"

var _ sdk.Msg = &MsgDepositBalance{}

func NewMsgDepositBalance(creator string, amount sdk.Coin) *MsgDepositBalance {
	return &MsgDepositBalance{
		Creator: creator,
		Amount:  amount,
	}
}

func (msg *MsgDepositBalance) Route() string {
	return RouterKey
}

func (msg *MsgDepositBalance) Type() string {
	return TypeMsgDepositBalance
}

func (msg *MsgDepositBalance) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgDepositBalance) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDepositBalance) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
