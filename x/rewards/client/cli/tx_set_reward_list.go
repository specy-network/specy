package cli

import (
	"strconv"

	"strings"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/specy-network/specy/x/rewards/types"
	"github.com/spf13/cobra"
)

var _ = strconv.Itoa(0)

func CmdSetRewardList() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "set-reward-list [list]",
		Short: "Broadcast message set-reward-list",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			argList := strings.Split(args[0], listSeparator)

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgSetRewardList(
				clientCtx.GetFromAddress().String(),
				argList,
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
