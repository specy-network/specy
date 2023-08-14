package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgWithdrawBalance = "withdraw_balance"

var _ sdk.Msg = &MsgWithdrawBalance{}

func NewMsgWithdrawBalance(creator string, amount sdk.Coin) *MsgWithdrawBalance {
	return &MsgWithdrawBalance{
		Creator: creator,
		Amount:  amount,
	}
}

func (msg *MsgWithdrawBalance) Route() string {
	return RouterKey
}

func (msg *MsgWithdrawBalance) Type() string {
	return TypeMsgWithdrawBalance
}

func (msg *MsgWithdrawBalance) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgWithdrawBalance) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgWithdrawBalance) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
