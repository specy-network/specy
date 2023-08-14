package types

import (
	"testing"

	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/specy-network/specy/testutil/sample"
	"github.com/stretchr/testify/require"
)

func TestMsgEditTask_ValidateBasic(t *testing.T) {
	tests := []struct {
		name string
		msg  MsgEditTask
		err  error
	}{
		{
			name: "invalid address",
			msg: MsgEditTask{
				Creator: "invalid_address",
			},
			err: sdkerrors.ErrInvalidAddress,
		}, {
			name: "valid address",
			msg: MsgEditTask{
				Creator: sample.AccAddress(),
			},
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			err := tt.msg.ValidateBasic()
			if tt.err != nil {
				require.ErrorIs(t, err, tt.err)
				return
			}
			require.NoError(t, err)
		})
	}
}
