package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/specy-network/specy/x/specy/types"
	"github.com/tendermint/tendermint/crypto/tmhash"
)

func (k msgServer) CreateTask(goCtx context.Context, msg *types.MsgCreateTask) (*types.MsgCreateTaskResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	_, find := k.GetTask(ctx, msg.Creator, msg.Name)
	if find {
		return nil, types.ErrTaskIsExsit
	}
	task := &types.Task{
		Owner:        msg.Creator,
		Name:         msg.Name,
		Hash:         string(tmhash.Sum([]byte(msg.String()))),
		ConnectId:    msg.ConnectId,
		Msgs:         msg.Msgs,
		RuleFiles:    msg.RuleFiles,
		TaskType:     msg.TaskType,
		ScheduleType: &types.Condition{IntervalType: msg.IntervalType, Number: msg.Number},
	}
	k.SetTask(ctx, *task)
	ctx.EventManager().EmitEvents(sdk.Events{
		sdk.NewEvent(
			types.EventTypeCreateTask,
			sdk.NewAttribute(types.AttributeKeyCreator, msg.Creator),
			sdk.NewAttribute(types.AttributeKeyTaskName, msg.Name),
			sdk.NewAttribute(types.AttributeKeyTaskHash, task.Hash),
			sdk.NewAttribute(types.AttributeKeyConnectId, string(rune(msg.ConnectId))),
			sdk.NewAttribute(types.AttributeKeyTaskMsgs, task.Msgs),
			sdk.NewAttribute(types.AttributeKeyTaskRuleFile, task.RuleFiles),
			sdk.NewAttribute(types.AttributeKeyTaskType, string(rune(task.TaskType))),
			sdk.NewAttribute(types.AttributeKeyTaskIntervalType, string(rune(task.ScheduleType.IntervalType))),
			sdk.NewAttribute(types.AttributeKeyTaskIntervalNumber, string(rune(task.ScheduleType.Number))),
		),
	})

	return &types.MsgCreateTaskResponse{}, nil
}
