package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgSetRewardList = "set_reward_list"

var _ sdk.Msg = &MsgSetRewardList{}

func NewMsgSetRewardList(creator string, list []string) *MsgSetRewardList {
	return &MsgSetRewardList{
		Creator: creator,
		List:    list,
	}
}

func (msg *MsgSetRewardList) Route() string {
	return RouterKey
}

func (msg *MsgSetRewardList) Type() string {
	return TypeMsgSetRewardList
}

func (msg *MsgSetRewardList) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgSetRewardList) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgSetRewardList) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
