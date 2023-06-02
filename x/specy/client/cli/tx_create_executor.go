package cli

import (
	"strconv"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/spf13/cobra"
	"specy/x/specy/types"
)

var _ = strconv.Itoa(0)

func CmdCreateExecutor() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "create-executor [staking] [ias-attestation-report] [enclave-pk]",
		Short: "Broadcast message create-executor",
		Args:  cobra.ExactArgs(3),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			argStaking, err := sdk.ParseCoinNormalized(args[0])
			if err != nil {
				return err
			}
			argIasAttestationReport := args[1]
			argEnclavePk := args[2]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgCreateExecutor(
				clientCtx.GetFromAddress().String(),
				argStaking,
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
