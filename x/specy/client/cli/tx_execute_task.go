package cli

import (
	"strconv"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/specy-network/specy/x/specy/types"
	"github.com/spf13/cobra"
)

var _ = strconv.Itoa(0)

func CmdExecuteTask() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "execute-task [owner] [name] [cproof] [perform-data]",
		Short: "Broadcast message execute-task",
		Args:  cobra.ExactArgs(4),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			argOwner := args[0]
			argName := args[1]
			argCproof := args[2]
			argPerformData := args[3]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgExecuteTask(
				clientCtx.GetFromAddress().String(),
				argOwner,
				argName,
				argCproof,
				argPerformData,
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
