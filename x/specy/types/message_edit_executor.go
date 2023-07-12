package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgEditExecutor = "edit_executor"

var _ sdk.Msg = &MsgEditExecutor{}

func NewMsgEditExecutor(creator string, iasAttestationReport string, enclavePk string) *MsgEditExecutor {
	return &MsgEditExecutor{
		Creator:              creator,
		IasAttestationReport: iasAttestationReport,
		EnclavePk:            enclavePk,
	}
}

func (msg *MsgEditExecutor) Route() string {
	return RouterKey
}

func (msg *MsgEditExecutor) Type() string {
	return TypeMsgEditExecutor
}

func (msg *MsgEditExecutor) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgEditExecutor) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgEditExecutor) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
