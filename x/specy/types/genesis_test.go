package types_test

import (
	"testing"

	"github.com/specy-network/specy/x/specy/types"
	"github.com/stretchr/testify/require"
)

func TestGenesisState_Validate(t *testing.T) {
	for _, tc := range []struct {
		desc     string
		genState *types.GenesisState
		valid    bool
	}{
		{
			desc:     "default is valid",
			genState: types.DefaultGenesis(),
			valid:    true,
		},
		{
			desc: "valid genesis state",
			genState: &types.GenesisState{

				TaskList: []types.Task{
					{
						Owner: "0",
						Name:  "0",
					},
					{
						Owner: "1",
						Name:  "1",
					},
				},
				ExecutorList: []types.Executor{
					{
						Address: "0",
					},
					{
						Address: "1",
					},
				},
				DepositList: []types.Deposit{
					{
						Address: "0",
					},
					{
						Address: "1",
					},
				},
				CurrentExecutorStatus: &types.CurrentExecutorStatus{
					CurrentExecutor: "57",
					ChangeHeight:    92,
				},
				HistoryExecuteCount: &types.HistoryExecuteCount{
					Count: 78,
				},
				ExecuteRecordList: []types.ExecuteRecord{
					{
						Owner:    "0",
						Name:     "0",
						Position: 0,
					},
					{
						Owner:    "1",
						Name:     "1",
						Position: 1,
					},
				},
				// this line is used by starport scaffolding # types/genesis/validField
			},
			valid: true,
		},
		{
			desc: "duplicated task",
			genState: &types.GenesisState{
				TaskList: []types.Task{
					{
						Owner: "0",
						Name:  "0",
					},
					{
						Owner: "0",
						Name:  "0",
					},
				},
			},
			valid: false,
		},
		{
			desc: "duplicated executor",
			genState: &types.GenesisState{
				ExecutorList: []types.Executor{
					{
						Address: "0",
					},
					{
						Address: "0",
					},
				},
			},
			valid: false,
		},
		{
			desc: "duplicated deposit",
			genState: &types.GenesisState{
				DepositList: []types.Deposit{
					{
						Address: "0",
					},
					{
						Address: "0",
					},
				},
			},
			valid: false,
		},
		{
			desc: "duplicated executeRecord",
			genState: &types.GenesisState{
				ExecuteRecordList: []types.ExecuteRecord{
					{
						Owner:    "0",
						Name:     "0",
						Position: 0,
					},
					{
						Owner:    "0",
						Name:     "0",
						Position: 0,
					},
				},
			},
			valid: false,
		},
		// this line is used by starport scaffolding # types/genesis/testcase
	} {
		t.Run(tc.desc, func(t *testing.T) {
			err := tc.genState.Validate()
			if tc.valid {
				require.NoError(t, err)
			} else {
				require.Error(t, err)
			}
		})
	}
}
