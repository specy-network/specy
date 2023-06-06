package keeper

import (
	"context"
	"encoding/json"
	"reflect"

	"specy/x/specy/types"

	sdk "github.com/cosmos/cosmos-sdk/types"
)

type CallData struct {
	Params []interface{}
	Index  int
}

func (k msgServer) ExecuteTask(goCtx context.Context, msg *types.MsgExecuteTask) (*types.MsgExecuteTaskResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	task, found := k.GetTask(ctx, msg.TaskHash)
	if !found {
		return nil, types.ErrExecutorIsExsit
	}

	keeper := k.router.routes[task.ContractAddress]
	value := reflect.ValueOf(keeper)
	method := value.MethodByName(task.Method)

	calldata, err := parseCallData(msg.Calldata)
	if err != nil {
		return nil, types.ErrExecutorIsExsit
	}
	numParams := len(calldata.Params)
	methodParams := make([]reflect.Value, numParams)
	for i := 0; i < numParams; i++ {
		methodParams[i] = reflect.ValueOf(calldata.Params[i])
	}
	method.Call(methodParams)

	return &types.MsgExecuteTaskResponse{}, nil
}

func parseCallData(content string) (CallData, error) {
	var callData CallData
	if err := json.Unmarshal([]byte(content), &callData); err != nil {
		return callData, nil
	} else {
		return callData, err
	}
}
