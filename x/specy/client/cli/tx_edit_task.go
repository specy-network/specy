package cli

import (
	"os"
	"strconv"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/cosmos/cosmos-sdk/codec"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/pkg/errors"
	"github.com/specy-network/specy/x/specy/types"
	"github.com/spf13/cast"
	"github.com/spf13/cobra"
)

var _ = strconv.Itoa(0)

func CmdEditTask() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "edit-task [name] [connection-id] [msgs] [rule-files] [task-type] [interval-type] [number]",
		Short: "Broadcast message edit-task",
		Args:  cobra.ExactArgs(7),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			argName := args[0]
			argConnectId := args[1]
			if err != nil {
				return err
			}
			argRuleFiles := args[3]
			argTaskType, err := cast.ToUint64E(args[4])
			if err != nil {
				return err
			}
			argIntervalType, err := cast.ToUint64E(args[5])
			if err != nil {
				return err
			}
			argNumber, err := cast.ToUint64E(args[6])
			if err != nil {
				return err
			}

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			cdc := codec.NewProtoCodec(clientCtx.InterfaceRegistry)

			var txMsg sdk.Msg
			if err := cdc.UnmarshalInterfaceJSON([]byte(args[2]), &txMsg); err != nil {

				// check for file path if JSON input is not provided
				contents, err := os.ReadFile(args[2])
				if err != nil {
					return errors.Wrap(err, "neither JSON input nor path to .json file for sdk msg were provided")
				}

				if err := cdc.UnmarshalInterfaceJSON(contents, &txMsg); err != nil {
					return errors.Wrap(err, "error unmarshalling sdk msg file")
				}
			}

			msg, err := types.NewMsgEditTask(
				clientCtx.GetFromAddress().String(),
				argName,
				argConnectId,
				txMsg,
				argRuleFiles,
				argTaskType,
				argIntervalType,
				argNumber,
			)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}
