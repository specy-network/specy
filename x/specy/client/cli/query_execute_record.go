package cli

import (
	"context"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/specy-network/specy/x/specy/types"
	"github.com/spf13/cast"
	"github.com/spf13/cobra"
)

func CmdListExecuteRecord() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "list-execute-record",
		Short: "list all executeRecord",
		RunE: func(cmd *cobra.Command, args []string) error {
			clientCtx := client.GetClientContextFromCmd(cmd)

			pageReq, err := client.ReadPageRequest(cmd.Flags())
			if err != nil {
				return err
			}

			queryClient := types.NewQueryClient(clientCtx)

			params := &types.QueryAllExecuteRecordRequest{
				Pagination: pageReq,
			}

			res, err := queryClient.ExecuteRecordAll(context.Background(), params)
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

func CmdShowExecuteRecord() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "show-execute-record [owner] [name] [position]",
		Short: "shows a executeRecord",
		Args:  cobra.ExactArgs(3),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			clientCtx := client.GetClientContextFromCmd(cmd)

			queryClient := types.NewQueryClient(clientCtx)

			argOwner := args[0]
			argName := args[1]
			argPosition, err := cast.ToUint64E(args[2])
			if err != nil {
				return err
			}

			params := &types.QueryGetExecuteRecordRequest{
				Owner:    argOwner,
				Name:     argName,
				Position: argPosition,
			}

			res, err := queryClient.ExecuteRecord(context.Background(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}
