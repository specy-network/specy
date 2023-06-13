package cli

import (
	"context"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/specy-network/specy/x/rewards/types"
	"github.com/spf13/cobra"
)

func CmdListMerkel() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "list-merkel",
		Short: "list all merkel",
		RunE: func(cmd *cobra.Command, args []string) error {
			clientCtx := client.GetClientContextFromCmd(cmd)

			pageReq, err := client.ReadPageRequest(cmd.Flags())
			if err != nil {
				return err
			}

			queryClient := types.NewQueryClient(clientCtx)

			params := &types.QueryAllMerkelRequest{
				Pagination: pageReq,
			}

			res, err := queryClient.MerkelAll(context.Background(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddPaginationFlagsToCmd(cmd, cmd.Use)
	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}

func CmdShowMerkel() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "show-merkel [datahash]",
		Short: "shows a merkel",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			clientCtx := client.GetClientContextFromCmd(cmd)

			queryClient := types.NewQueryClient(clientCtx)

			argDatahash := args[0]

			params := &types.QueryGetMerkelRequest{
				Datahash: argDatahash,
			}

			res, err := queryClient.Merkel(context.Background(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}
