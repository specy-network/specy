package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/specy-network/specy/x/specy/types"
)

func (k msgServer) ExecuteTask(goCtx context.Context, msg *types.MsgExecuteTask) (*types.MsgExecuteTaskResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)
	task, found := k.GetTask(ctx, msg.Owner, msg.Name)
	//TODO check executor auth

	if !found {
		return nil, types.ErrTaskNotExsit
	}

	err := k.SendInterMsg(ctx, task)
	if err != nil {
		return nil, err
	}
	ctx.EventManager().EmitEvents(sdk.Events{
		sdk.NewEvent(
			types.EventTypeExecuteTask,
			sdk.NewAttribute(types.AttributeKeyCreator, msg.Creator),
			sdk.NewAttribute(types.AttributeKeyTaskName, msg.Name),
			sdk.NewAttribute(types.AttributeKeyTaskHash, task.Hash),
			sdk.NewAttribute(types.AttributeKeyConnectId, task.ConnectionId),
			sdk.NewAttribute(types.AttributeKeyTaskMsgs, task.Msg.String()),
			sdk.NewAttribute(types.AttributeKeyTaskRuleFile, task.RuleFiles),
			sdk.NewAttribute(types.AttributeKeyTaskType, string(rune(task.TaskType))),
			sdk.NewAttribute(types.AttributeKeyTaskIntervalType, string(rune(task.ScheduleType.IntervalType))),
			sdk.NewAttribute(types.AttributeKeyTaskIntervalNumber, string(rune(task.ScheduleType.Number))),
		),
	})
	return &types.MsgExecuteTaskResponse{}, nil
}
