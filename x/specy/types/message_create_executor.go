package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgCreateExecutor = "create_executor"

var _ sdk.Msg = &MsgCreateExecutor{}

func NewMsgCreateExecutor(creator string, iasAttestationReport string, enclavePk string) *MsgCreateExecutor {
	return &MsgCreateExecutor{
		Creator:              creator,
		IasAttestationReport: iasAttestationReport,
		EnclavePk:            enclavePk,
	}
}

func (msg *MsgCreateExecutor) Route() string {
	return RouterKey
}

func (msg *MsgCreateExecutor) Type() string {
	return TypeMsgCreateExecutor
}

func (msg *MsgCreateExecutor) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateExecutor) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateExecutor) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
