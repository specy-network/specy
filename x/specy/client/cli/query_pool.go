package cli

import (
	"strconv"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/specy-network/specy/x/specy/types"
	"github.com/spf13/cobra"
)

var _ = strconv.Itoa(0)

func CmdPool() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "pool",
		Short: "Query total user deposit and pending rewards for current executor.",
		Args:  cobra.ExactArgs(0),
		RunE: func(cmd *cobra.Command, args []string) (err error) {

			clientCtx, err := client.GetClientQueryContext(cmd)
			if err != nil {
				return err
			}

			queryClient := types.NewQueryClient(clientCtx)

			params := &types.QueryPoolRequest{}

			res, err := queryClient.Pool(cmd.Context(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}
