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

func CmdCreateTask() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "create-task [name] [connection-id] [msg] [rule-files] [task-type] [interval-type] [number] [check-data]",
		Short: "Broadcast message create-task",
		Args:  cobra.ExactArgs(8),
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
			argCheckData := args[7]
			if err != nil {
				return err
			}

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg, err := types.NewMsgCreateTask(
				clientCtx.GetFromAddress().String(),
				argName,
				argConnectId,
				argMsg,
				argRuleFiles,
				argTaskType,
				argIntervalType,
				argNumber,
				argCheckData,
			)
			if err != nil {
				return err
			}
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}
