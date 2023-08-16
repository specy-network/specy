package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgEditTask = "edit_task"

var _ sdk.Msg = &MsgEditTask{}

func NewMsgEditTask(creator string, name string, connectionId string, msg string, ruleFiles string, taskType uint64, intervalType uint64, number uint64) (*MsgEditTask, error) {

	return &MsgEditTask{
		Creator:      creator,
		Name:         name,
		ConnectionId: connectionId,
		Msg:          msg,
		RuleFiles:    ruleFiles,
		TaskType:     taskType,
		IntervalType: intervalType,
		Number:       number,
	}, nil
}

func (msg *MsgEditTask) Route() string {
	return RouterKey
}

func (msg *MsgEditTask) Type() string {
	return TypeMsgEditTask
}

func (msg *MsgEditTask) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgEditTask) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgEditTask) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
