package cli

import (
	"strconv"

	"specy/x/specy/types"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/spf13/cobra"
)

var _ = strconv.Itoa(0)

func CmdExecuteTask() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "execute-task [task-hash] [calldata]",
		Short: "Broadcast message execute-task",
		Args:  cobra.ExactArgs(4),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			argTaskHash := args[0]
			argCalldata := args[1]
			argRuleFileHash := args[2]
			argSignature := args[3]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgExecuteTask(
				clientCtx.GetFromAddress().String(),
				argTaskHash,
				argCalldata,
				argRuleFileHash,
				argSignature,
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
