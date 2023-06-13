package keeper

import (
	"context"
	"encoding/json"
	"reflect"

	"github.com/specy-network/specy/x/specy/types"

	sdk "github.com/cosmos/cosmos-sdk/types"
)

type CallData struct {
	Params []interface{} `json:"params" yaml:"params"`
	Index  int           `json:"index" yaml:"index"`
}

func (k msgServer) ExecuteTask(goCtx context.Context, msg *types.MsgExecuteTask) (*types.MsgExecuteTaskResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	task, found := k.GetTask(ctx, msg.TaskHash)
	if !found {
		return nil, types.ErrExecutorIsExsit
	}

	//TODO add executor power check

	//TODO add signature and rulefile hash check

	keeper := k.router.routes[task.ContractAddress]
	value := reflect.ValueOf(keeper)
	method := value.MethodByName(task.Method)

	calldata, err := parseCallData(msg.Calldata)
	if err != nil {
		return nil, types.ErrExecutorIsExsit
	}
	numParams := len(calldata.Params)
	methodParams := make([]reflect.Value, numParams+1)
	methodParams[0] = reflect.ValueOf(ctx)
	for i := 0; i < numParams; i++ {
		methodParams[i+1] = reflect.ValueOf(calldata.Params[i])
	}
	method.Call(methodParams)

	ctx.EventManager().EmitEvents(sdk.Events{
		sdk.NewEvent(
			types.EventTypeExecuteTask,
			sdk.NewAttribute(types.AttributeKeyTaskHash, msg.TaskHash),
			sdk.NewAttribute(types.AttributeKeyContractAddress, task.ContractAddress),
			sdk.NewAttribute(types.AttributeKeyMethod, task.Method),
			sdk.NewAttribute(types.AttributeKeyCalldata, msg.Calldata),
			sdk.NewAttribute(types.AttributeKeyRuleFile, msg.RuleFileHash),
			sdk.NewAttribute(types.AttributeKeyExecutor, msg.Creator),
		),
	})

	return &types.MsgExecuteTaskResponse{}, nil
}

func parseCallData(content string) (CallData, error) {
	var callData CallData
	if err := json.Unmarshal([]byte(content), &callData); err != nil {
		return callData, err
	} else {
		return callData, nil
	}
}
