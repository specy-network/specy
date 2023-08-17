package cli

import (
	"strconv"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
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
			argMsg := args[2]
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

			msg, err := types.NewMsgEditTask(
				clientCtx.GetFromAddress().String(),
				argName,
				argConnectId,
				argMsg,
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
