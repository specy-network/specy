package cli

import (
	"strconv"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/spf13/cast"
	"github.com/spf13/cobra"
	"specy/x/specy/types"
)

var _ = strconv.Itoa(0)

func CmdCreateTask() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "create-task [contract-address] [method] [calldata] [single] [rule-file]",
		Short: "Broadcast message create-task",
		Args:  cobra.ExactArgs(5),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			argContractAddress := args[0]
			argMethod := args[1]
			argCalldata := args[2]
			argSingle, err := cast.ToBoolE(args[3])
			if err != nil {
				return err
			}
			argRuleFile := args[4]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgCreateTask(
				clientCtx.GetFromAddress().String(),
				argContractAddress,
				argMethod,
				argCalldata,
				argSingle,
				argRuleFile,
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
