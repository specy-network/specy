package keeper_test

import (
	"strconv"
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/query"
	"github.com/stretchr/testify/require"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"

	keepertest "github.com/specy-network/specy/testutil/keeper"
	"github.com/specy-network/specy/testutil/nullify"
	"github.com/specy-network/specy/x/rewards/types"
)

// Prevent strconv unused error
var _ = strconv.IntSize

func TestMerkelQuerySingle(t *testing.T) {
	keeper, ctx := keepertest.RewardsKeeper(t)
	wctx := sdk.WrapSDKContext(ctx)
	msgs := createNMerkel(keeper, ctx, 2)
	for _, tc := range []struct {
		desc     string
		request  *types.QueryGetMerkelRequest
		response *types.QueryGetMerkelResponse
		err      error
	}{
		{
			desc: "First",
			request: &types.QueryGetMerkelRequest{
				Datahash: msgs[0].Datahash,
			},
			response: &types.QueryGetMerkelResponse{Merkel: msgs[0]},
		},
		{
			desc: "Second",
			request: &types.QueryGetMerkelRequest{
				Datahash: msgs[1].Datahash,
			},
			response: &types.QueryGetMerkelResponse{Merkel: msgs[1]},
		},
		{
			desc: "KeyNotFound",
			request: &types.QueryGetMerkelRequest{
				Datahash: strconv.Itoa(100000),
			},
			err: status.Error(codes.NotFound, "not found"),
		},
		{
			desc: "InvalidRequest",
			err:  status.Error(codes.InvalidArgument, "invalid request"),
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			response, err := keeper.Merkel(wctx, tc.request)
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

func TestMerkelQueryPaginated(t *testing.T) {
	keeper, ctx := keepertest.RewardsKeeper(t)
	wctx := sdk.WrapSDKContext(ctx)
	msgs := createNMerkel(keeper, ctx, 5)

	request := func(next []byte, offset, limit uint64, total bool) *types.QueryAllMerkelRequest {
		return &types.QueryAllMerkelRequest{
			Pagination: &query.PageRequest{
				Key:        next,
				Offset:     offset,
				Limit:      limit,
				CountTotal: total,
			},
		}
	}
	t.Run("ByOffset", func(t *testing.T) {
		step := 2
		for i := 0; i < len(msgs); i += step {
			resp, err := keeper.MerkelAll(wctx, request(nil, uint64(i), uint64(step), false))
			require.NoError(t, err)
			require.LessOrEqual(t, len(resp.Merkel), step)
			require.Subset(t,
				nullify.Fill(msgs),
				nullify.Fill(resp.Merkel),
			)
		}
	})
	t.Run("ByKey", func(t *testing.T) {
		step := 2
		var next []byte
		for i := 0; i < len(msgs); i += step {
			resp, err := keeper.MerkelAll(wctx, request(next, 0, uint64(step), false))
			require.NoError(t, err)
			require.LessOrEqual(t, len(resp.Merkel), step)
			require.Subset(t,
				nullify.Fill(msgs),
				nullify.Fill(resp.Merkel),
			)
			next = resp.Pagination.NextKey
		}
	})
	t.Run("Total", func(t *testing.T) {
		resp, err := keeper.MerkelAll(wctx, request(nil, 0, 0, true))
		require.NoError(t, err)
		require.Equal(t, len(msgs), int(resp.Pagination.Total))
		require.ElementsMatch(t,
			nullify.Fill(msgs),
			nullify.Fill(resp.Merkel),
		)
	})
	t.Run("InvalidRequest", func(t *testing.T) {
		_, err := keeper.MerkelAll(wctx, nil)
		require.ErrorIs(t, err, status.Error(codes.InvalidArgument, "invalid request"))
	})
}
