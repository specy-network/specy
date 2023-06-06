package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgExecuteTask = "execute_task"

var _ sdk.Msg = &MsgExecuteTask{}

func NewMsgExecuteTask(creator string, taskHash string, calldata string) *MsgExecuteTask {
	return &MsgExecuteTask{
		Creator:  creator,
		TaskHash: taskHash,
		Calldata: calldata,
	}
}

func (msg *MsgExecuteTask) Route() string {
	return RouterKey
}

func (msg *MsgExecuteTask) Type() string {
	return TypeMsgExecuteTask
}

func (msg *MsgExecuteTask) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgExecuteTask) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgExecuteTask) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
