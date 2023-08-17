package keeper

import (
	"context"
	"time"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/specy-network/specy/x/specy/types"

	icatypes "github.com/cosmos/ibc-go/v6/modules/apps/27-interchain-accounts/types"
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

	err = k.SendTaskMsg(ctx, task, msg.PacketData)
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
			sdk.NewAttribute(types.AttributeKeyTaskMsgs, task.Msg),
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
func (k msgServer) SendTaskMsg(goCtx context.Context, task types.Task, packetData icatypes.InterchainAccountPacketData) error {
	ctx := sdk.UnwrapSDKContext(goCtx)

	portID, err := icatypes.NewControllerPortID(task.Owner)
	if err != nil {
		return types.ErrTaskPortParse
	}

	// timeoutTimestamp set to max value with the unsigned bit shifted to sastisfy hermes timestamp conversion
	// it is the responsibility of the auth module developer to ensure an appropriate timeout timestamp
	timeoutTimestamp := ctx.BlockTime().Add(time.Minute).UnixNano()
	_, err = k.icaControllerKeeper.SendTx(ctx, nil, task.ConnectionId, portID, packetData, uint64(timeoutTimestamp)) //nolint:staticcheck //
	if err != nil {
		return err
	}
	return nil
	//
}
