package keeper

import (
	"context"
	"fmt"
	"time"

	sdk "github.com/cosmos/cosmos-sdk/types"
	icatypes "github.com/cosmos/ibc-go/v6/modules/apps/27-interchain-accounts/types"
	goproto "github.com/gogo/protobuf/proto"
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
	}
	k.SetTask(ctx, *task)

	ctx.EventManager().EmitEvents(sdk.Events{
		sdk.NewEvent(
			types.EventTypeCreateTask,
			sdk.NewAttribute(types.AttributeKeyCreator, msg.Creator),
			sdk.NewAttribute(types.AttributeKeyTaskName, msg.Name),
			sdk.NewAttribute(types.AttributeKeyTaskHash, task.Hash),
			sdk.NewAttribute(types.AttributeKeyConnectId, msg.ConnectionId),
			sdk.NewAttribute(types.AttributeKeyTaskMsgs, task.Msg.String()),
			sdk.NewAttribute(types.AttributeKeyTaskRuleFile, task.RuleFiles),
			sdk.NewAttribute(types.AttributeKeyTaskType, string(rune(task.TaskType))),
			sdk.NewAttribute(types.AttributeKeyTaskIntervalType, string(rune(task.ScheduleType.IntervalType))),
			sdk.NewAttribute(types.AttributeKeyTaskIntervalNumber, string(rune(task.ScheduleType.Number))),
		),
	})

	return &types.MsgCreateTaskResponse{}, nil
}

func (k msgServer) SendInterMsg(goCtx context.Context, task *types.Task) error {
	ctx := sdk.UnwrapSDKContext(goCtx)
	portID, err := icatypes.NewControllerPortID(task.Owner)
	if err != nil {
		return types.ErrTaskPortParse
	}
	sdkMsg, ok := task.Msg.GetCachedValue().(sdk.Msg)
	if !ok {
		return nil
	}

	data, err := icatypes.SerializeCosmosTx(k.cdc, []goproto.Message{sdkMsg})
	if err != nil {
		return err
	}

	packetData := icatypes.InterchainAccountPacketData{
		Type: icatypes.EXECUTE_TX,
		Data: data,
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
