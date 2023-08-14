package types

import (
	fmt "fmt"

	codectypes "github.com/cosmos/cosmos-sdk/codec/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	proto "github.com/gogo/protobuf/proto"
)

const TypeMsgCreateTask = "create_task"

var _ sdk.Msg = &MsgCreateTask{}

func NewMsgCreateTask(creator string, name string, connectionId string, msg sdk.Msg, ruleFiles string, taskType uint64, intervalType uint64, number uint64) (*MsgCreateTask, error) {
	any, err := PackTxMsgAny(msg)
	if err != nil {
		return nil, err
	}
	return &MsgCreateTask{
		Creator:      creator,
		Name:         name,
		ConnectionId: connectionId,
		Msg:          any,
		RuleFiles:    ruleFiles,
		TaskType:     taskType,
		IntervalType: intervalType,
		Number:       number,
	}, nil
}

// PackTxMsgAny marshals the sdk.Msg payload to a protobuf Any type
func PackTxMsgAny(sdkMsg sdk.Msg) (*codectypes.Any, error) {
	msg, ok := sdkMsg.(proto.Message)
	if !ok {
		return nil, fmt.Errorf("can't proto marshal %T", sdkMsg)
	}

	any, err := codectypes.NewAnyWithValue(msg)
	if err != nil {
		return nil, err
	}

	return any, nil
}

// UnpackInterfaces implements codectypes.UnpackInterfacesMessage
func (msg MsgCreateTask) UnpackInterfaces(unpacker codectypes.AnyUnpacker) error {
	var sdkMsg sdk.Msg

	return unpacker.UnpackAny(msg.Msg, &sdkMsg)
}
func (msg *MsgCreateTask) Route() string {
	return RouterKey
}

func (msg *MsgCreateTask) Type() string {
	return TypeMsgCreateTask
}

func (msg *MsgCreateTask) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateTask) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateTask) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

// GetTxMsg fetches the cached any message
func (msg *MsgCreateTask) GetTxMsg() sdk.Msg {
	sdkMsg, ok := msg.Msg.GetCachedValue().(sdk.Msg)
	if !ok {
		return nil
	}

	return sdkMsg
}
