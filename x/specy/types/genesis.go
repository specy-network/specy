package types

import (
	"fmt"
)

// DefaultIndex is the default global index
const DefaultIndex uint64 = 1

// DefaultGenesis returns the default genesis state
func DefaultGenesis() *GenesisState {
	return &GenesisState{
		TaskList:              []Task{},
		ExecutorList:          []Executor{},
		DepositList:           []Deposit{},
		CurrentExecutorStatus: nil,
		HistoryExecuteCount:   nil,
		ExecuteRecordList:     []ExecuteRecord{},
		// this line is used by starport scaffolding # genesis/types/default
		Params: DefaultParams(),
	}
}

// Validate performs basic genesis state validation returning an error upon any
// failure.
func (gs GenesisState) Validate() error {
	// Check for duplicated index in task
	taskIndexMap := make(map[string]struct{})

	for _, elem := range gs.TaskList {
		index := string(TaskKey(elem.Owner, elem.Name))
		if _, ok := taskIndexMap[index]; ok {
			return fmt.Errorf("duplicated index for task")
		}
		taskIndexMap[index] = struct{}{}
	}
	// Check for duplicated index in executor
	executorIndexMap := make(map[string]struct{})

	for _, elem := range gs.ExecutorList {
		index := string(ExecutorKey(elem.Address))
		if _, ok := executorIndexMap[index]; ok {
			return fmt.Errorf("duplicated index for executor")
		}
		executorIndexMap[index] = struct{}{}
	}
	// Check for duplicated index in deposit
	depositIndexMap := make(map[string]struct{})

	for _, elem := range gs.DepositList {
		index := string(DepositKey(elem.Address))
		if _, ok := depositIndexMap[index]; ok {
			return fmt.Errorf("duplicated index for deposit")
		}
		depositIndexMap[index] = struct{}{}
	}
	// Check for duplicated index in executeRecord
	executeRecordIndexMap := make(map[string]struct{})

	for _, elem := range gs.ExecuteRecordList {
		index := string(ExecuteRecordKey(elem.Owner, elem.Name, elem.Position))
		if _, ok := executeRecordIndexMap[index]; ok {
			return fmt.Errorf("duplicated index for executeRecord")
		}
		executeRecordIndexMap[index] = struct{}{}
	}
	// this line is used by starport scaffolding # genesis/types/validate

	return gs.Params.Validate()
}
