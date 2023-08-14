package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgCancelExecutor = "cancel_executor"

var _ sdk.Msg = &MsgCancelExecutor{}

func NewMsgCancelExecutor(creator string) *MsgCancelExecutor {
	return &MsgCancelExecutor{
		Creator: creator,
	}
}

func (msg *MsgCancelExecutor) Route() string {
	return RouterKey
}

func (msg *MsgCancelExecutor) Type() string {
	return TypeMsgCancelExecutor
}

func (msg *MsgCancelExecutor) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCancelExecutor) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCancelExecutor) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
