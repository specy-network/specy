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

func CmdCreateExecutor() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "create-executor [ias-attestation-report] [enclave-pk]",
		Short: "Broadcast message create-executor",
		Args:  cobra.ExactArgs(2),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			argIasAttestationReport := args[0]
			argEnclavePk := args[1]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgCreateExecutor(
				clientCtx.GetFromAddress().String(),
				argIasAttestationReport,
				argEnclavePk,
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
