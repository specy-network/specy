package cli

import (
	"context"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/specy-network/specy/x/specy/types"
	"github.com/spf13/cobra"
)

func CmdShowHistoryExecuteCount() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "show-history-execute-count",
		Short: "shows historyExecuteCount",
		Args:  cobra.NoArgs,
		RunE: func(cmd *cobra.Command, args []string) error {
			clientCtx := client.GetClientContextFromCmd(cmd)

			queryClient := types.NewQueryClient(clientCtx)

			params := &types.QueryGetHistoryExecuteCountRequest{}

			res, err := queryClient.HistoryExecuteCount(context.Background(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}
