package cli_test

import (
	"fmt"
	"testing"

	clitestutil "github.com/cosmos/cosmos-sdk/testutil/cli"
	"github.com/stretchr/testify/require"
	tmcli "github.com/tendermint/tendermint/libs/cli"
	"google.golang.org/grpc/status"

	"github.com/specy-network/specy/testutil/network"
	"github.com/specy-network/specy/testutil/nullify"
	"github.com/specy-network/specy/x/specy/client/cli"
	"github.com/specy-network/specy/x/specy/types"
)

func networkWithCurrentExecutorStatusObjects(t *testing.T) (*network.Network, types.CurrentExecutorStatus) {
	t.Helper()
	cfg := network.DefaultConfig()
	state := types.GenesisState{}
	require.NoError(t, cfg.Codec.UnmarshalJSON(cfg.GenesisState[types.ModuleName], &state))

	currentExecutorStatus := &types.CurrentExecutorStatus{}
	nullify.Fill(&currentExecutorStatus)
	state.CurrentExecutorStatus = currentExecutorStatus
	buf, err := cfg.Codec.MarshalJSON(&state)
	require.NoError(t, err)
	cfg.GenesisState[types.ModuleName] = buf
	return network.New(t, cfg), *state.CurrentExecutorStatus
}

func TestShowCurrentExecutorStatus(t *testing.T) {
	net, obj := networkWithCurrentExecutorStatusObjects(t)

	ctx := net.Validators[0].ClientCtx
	common := []string{
		fmt.Sprintf("--%s=json", tmcli.OutputFlag),
	}
	for _, tc := range []struct {
		desc string
		args []string
		err  error
		obj  types.CurrentExecutorStatus
	}{
		{
			desc: "get",
			args: common,
			obj:  obj,
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			var args []string
			args = append(args, tc.args...)
			out, err := clitestutil.ExecTestCLICmd(ctx, cli.CmdShowCurrentExecutorStatus(), args)
			if tc.err != nil {
				stat, ok := status.FromError(tc.err)
				require.True(t, ok)
				require.ErrorIs(t, stat.Err(), tc.err)
			} else {
				require.NoError(t, err)
				var resp types.QueryGetCurrentExecutorStatusResponse
				require.NoError(t, net.Config.Codec.UnmarshalJSON(out.Bytes(), &resp))
				require.NotNil(t, resp.CurrentExecutorStatus)
				require.Equal(t,
					nullify.Fill(&tc.obj),
					nullify.Fill(&resp.CurrentExecutorStatus),
				)
			}
		})
	}
}
