package keeper_test

import (
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/stretchr/testify/require"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"

	keepertest "github.com/specy-network/specy/testutil/keeper"
	"github.com/specy-network/specy/testutil/nullify"
	"github.com/specy-network/specy/x/specy/types"
)

func TestCurrentExecutorStatusQuery(t *testing.T) {
	keeper, ctx := keepertest.SpecyKeeper(t)
	wctx := sdk.WrapSDKContext(ctx)
	item := createTestCurrentExecutorStatus(keeper, ctx)
	for _, tc := range []struct {
		desc     string
		request  *types.QueryGetCurrentExecutorStatusRequest
		response *types.QueryGetCurrentExecutorStatusResponse
		err      error
	}{
		{
			desc:     "First",
			request:  &types.QueryGetCurrentExecutorStatusRequest{},
			response: &types.QueryGetCurrentExecutorStatusResponse{CurrentExecutorStatus: item},
		},
		{
			desc: "InvalidRequest",
			err:  status.Error(codes.InvalidArgument, "invalid request"),
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			response, err := keeper.CurrentExecutorStatus(wctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
				require.Equal(t,
					nullify.Fill(tc.response),
					nullify.Fill(response),
				)
			}
		})
	}
}
