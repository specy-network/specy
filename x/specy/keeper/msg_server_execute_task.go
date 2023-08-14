package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/specy-network/specy/x/specy/types"
)

func (k msgServer) ExecuteTask(goCtx context.Context, msg *types.MsgExecuteTask) (*types.MsgExecuteTaskResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)
	task, found := k.GetTask(ctx, msg.Owner, msg.Name)

	if !found {
		return nil, types.ErrTaskNotExsit
	}
	//check executor auth
	err := checkExecutorAuth(ctx, msg.Creator, k.Keeper)
	if err != nil {
		return nil, types.ErrExecutorAuthCheck
	}

	//handle fee
	err = k.SubFee(ctx, task.Owner)
	if err != nil {
		return nil, err
	}

	err = k.SendInterMsg(ctx, task)
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

func checkExecutorAuth(goCtx context.Context, creator string, k Keeper) error {
	ctx := sdk.UnwrapSDKContext(goCtx)
	accAddr, err := sdk.AccAddressFromBech32(creator)
	if err != nil {
		return err
	}
	valAddr := sdk.ValAddress(accAddr)
	currentExecutor, found := k.GetCurrentExecutorStatus(ctx)
	if !found || currentExecutor.CurrentExecutor != valAddr.String() {
		return types.ErrExecutorAuthCheck
	}
	return nil
}
