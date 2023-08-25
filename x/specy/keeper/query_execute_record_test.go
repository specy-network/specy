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
	"github.com/specy-network/specy/x/specy/types"
)

// Prevent strconv unused error
var _ = strconv.IntSize

func TestExecuteRecordQuerySingle(t *testing.T) {
	keeper, ctx := keepertest.SpecyKeeper(t)
	wctx := sdk.WrapSDKContext(ctx)
	msgs := createNExecuteRecord(keeper, ctx, 2)
	for _, tc := range []struct {
		desc     string
		request  *types.QueryGetExecuteRecordRequest
		response *types.QueryGetExecuteRecordResponse
		err      error
	}{
		{
			desc: "First",
			request: &types.QueryGetExecuteRecordRequest{
				Owner:    msgs[0].Owner,
				Name:     msgs[0].Name,
				Position: msgs[0].Position,
			},
			response: &types.QueryGetExecuteRecordResponse{ExecuteRecord: msgs[0]},
		},
		{
			desc: "Second",
			request: &types.QueryGetExecuteRecordRequest{
				Owner:    msgs[1].Owner,
				Name:     msgs[1].Name,
				Position: msgs[1].Position,
			},
			response: &types.QueryGetExecuteRecordResponse{ExecuteRecord: msgs[1]},
		},
		{
			desc: "KeyNotFound",
			request: &types.QueryGetExecuteRecordRequest{
				Owner:    strconv.Itoa(100000),
				Name:     strconv.Itoa(100000),
				Position: 100000,
			},
			err: status.Error(codes.NotFound, "not found"),
		},
		{
			desc: "InvalidRequest",
			err:  status.Error(codes.InvalidArgument, "invalid request"),
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			response, err := keeper.ExecuteRecord(wctx, tc.request)
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

func TestExecuteRecordQueryPaginated(t *testing.T) {
	keeper, ctx := keepertest.SpecyKeeper(t)
	wctx := sdk.WrapSDKContext(ctx)
	msgs := createNExecuteRecord(keeper, ctx, 5)

	request := func(next []byte, offset, limit uint64, total bool) *types.QueryAllExecuteRecordRequest {
		return &types.QueryAllExecuteRecordRequest{
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
			resp, err := keeper.ExecuteRecordAll(wctx, request(nil, uint64(i), uint64(step), false))
			require.NoError(t, err)
			require.LessOrEqual(t, len(resp.ExecuteRecord), step)
			require.Subset(t,
				nullify.Fill(msgs),
				nullify.Fill(resp.ExecuteRecord),
			)
		}
	})
	t.Run("ByKey", func(t *testing.T) {
		step := 2
		var next []byte
		for i := 0; i < len(msgs); i += step {
			resp, err := keeper.ExecuteRecordAll(wctx, request(next, 0, uint64(step), false))
			require.NoError(t, err)
			require.LessOrEqual(t, len(resp.ExecuteRecord), step)
			require.Subset(t,
				nullify.Fill(msgs),
				nullify.Fill(resp.ExecuteRecord),
			)
			next = resp.Pagination.NextKey
		}
	})
	t.Run("Total", func(t *testing.T) {
		resp, err := keeper.ExecuteRecordAll(wctx, request(nil, 0, 0, true))
		require.NoError(t, err)
		require.Equal(t, len(msgs), int(resp.Pagination.Total))
		require.ElementsMatch(t,
			nullify.Fill(msgs),
			nullify.Fill(resp.ExecuteRecord),
		)
	})
	t.Run("InvalidRequest", func(t *testing.T) {
		_, err := keeper.ExecuteRecordAll(wctx, nil)
		require.ErrorIs(t, err, status.Error(codes.InvalidArgument, "invalid request"))
	})
}
