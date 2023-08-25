package cli

import (
	"strconv"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/specy-network/specy/x/specy/types"
	"github.com/spf13/cobra"
)

var _ = strconv.Itoa(0)

func CmdExecuteRecordAllByOwnerAndName() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "execute-record-all-by-owner-and-name [owner] [name]",
		Short: "Query ExecuteRecordAllByOwnerAndName",
		Args:  cobra.ExactArgs(2),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			reqOwner := args[0]
			reqName := args[1]

			clientCtx, err := client.GetClientQueryContext(cmd)
			if err != nil {
				return err
			}

			queryClient := types.NewQueryClient(clientCtx)

			params := &types.QueryExecuteRecordAllByOwnerAndNameRequest{

				Owner: reqOwner,
				Name:  reqName,
			}

			res, err := queryClient.ExecuteRecordAllByOwnerAndName(cmd.Context(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}
