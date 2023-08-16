package cli

import (
	"fmt"
	"os"
	"strconv"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/specy-network/specy/x/specy/types"
	"github.com/spf13/cobra"

	"github.com/cosmos/cosmos-sdk/codec"
	icatypes "github.com/cosmos/ibc-go/v6/modules/apps/27-interchain-accounts/types"
)

var _ = strconv.Itoa(0)

func CmdExecuteTask() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "execute-task [owner] [name] [cproof] [packet-data]",
		Short: "Broadcast message execute-task",
		Args:  cobra.ExactArgs(4),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			argOwner := args[0]
			argName := args[1]
			argCproof := args[2]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}
			cdc := codec.NewProtoCodec(clientCtx.InterfaceRegistry)

			// attempt to unmarshal ica msg data argument
			var icaMsgData icatypes.InterchainAccountPacketData
			msgContentOrFileName := args[3]
			if err := cdc.UnmarshalJSON([]byte(msgContentOrFileName), &icaMsgData); err != nil {

				// check for file path if JSON input is not provided
				contents, err := os.ReadFile(msgContentOrFileName)
				if err != nil {
					return fmt.Errorf("neither JSON input nor path to .json file for packet data with messages were provided: %w", err)
				}

				if err := cdc.UnmarshalJSON(contents, &icaMsgData); err != nil {
					return fmt.Errorf("error unmarshalling packet data with messages file: %w", err)
				}
			}
			msg := types.NewMsgExecuteTask(
				clientCtx.GetFromAddress().String(),
				argOwner,
				argName,
				argCproof,
				icaMsgData,
			)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			if msg.PacketData.ValidateBasic() != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}
