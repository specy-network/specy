package keeper

import (
	"context"
	"fmt"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/specy-network/specy/x/specy/types"
	"github.com/tendermint/tendermint/crypto/tmhash"
)

func (k msgServer) CreateTask(goCtx context.Context, msg *types.MsgCreateTask) (*types.MsgCreateTaskResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	_, found := k.GetTask(ctx, msg.Creator, msg.Name)
	if found {
		return nil, types.ErrTaskIsExsit
	}
	task := &types.Task{
		Owner:        msg.Creator,
		Name:         msg.Name,
		Hash:         fmt.Sprintf("%x", tmhash.Sum([]byte(msg.Creator+msg.Name))),
		ConnectionId: msg.ConnectionId,
		Msg:          msg.Msg,
		RuleFiles:    msg.RuleFiles,
		TaskType:     msg.TaskType,
		ScheduleType: &types.Condition{IntervalType: msg.IntervalType, Number: msg.Number},
		CheckData:    msg.CheckData,
	}
	k.SetTask(ctx, *task)
	ctx.EventManager().EmitEvents(sdk.Events{
		sdk.NewEvent(
			types.EventTypeCreateTask,
			sdk.NewAttribute(types.AttributeKeyCreator, msg.Creator),
			sdk.NewAttribute(types.AttributeKeyTaskName, msg.Name),
			sdk.NewAttribute(types.AttributeKeyTaskHash, task.Hash),
			sdk.NewAttribute(types.AttributeKeyConnectId, msg.ConnectionId),
			sdk.NewAttribute(types.AttributeKeyTaskMsgs, task.Msg),
			sdk.NewAttribute(types.AttributeKeyTaskRuleFile, task.RuleFiles),
			sdk.NewAttribute(types.AttributeKeyTaskType, string(rune(task.TaskType))),
			sdk.NewAttribute(types.AttributeKeyTaskIntervalType, string(rune(task.ScheduleType.IntervalType))),
			sdk.NewAttribute(types.AttributeKeyTaskIntervalNumber, string(rune(task.ScheduleType.Number))),
			sdk.NewAttribute(types.AttributeKeyTaskCheckData, msg.CheckData),
		),
	})

	return &types.MsgCreateTaskResponse{}, nil
}
