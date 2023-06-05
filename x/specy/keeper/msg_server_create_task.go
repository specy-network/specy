package keeper

import (
	"context"
	"crypto/sha256"
	"encoding/hex"
	"strconv"

	"specy/x/specy/types"

	sdk "github.com/cosmos/cosmos-sdk/types"
)

func (k msgServer) CreateTask(goCtx context.Context, msg *types.MsgCreateTask) (*types.MsgCreateTaskResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	hash := sha256.New()
	hash.Write([]byte(msg.String()))
	taskHash := hash.Sum(nil)
	hashString := hex.EncodeToString(taskHash[:])

	_, found := k.GetTask(ctx, hashString)
	if found {
		return nil, types.ErrTaskIsExsit
	}
	//todo 从deposit中减去base price
	task := &types.Task{
		TaskHash:        hashString,
		ContractAddress: msg.ContractAddress,
		Method:          msg.Method,
		Calldata:        msg.Calldata,
		Single:          msg.Single,
		RuleFile:        msg.RuleFile,
	}
	taskCreator, _ := sdk.AccAddressFromBech32(msg.Creator)
	accountStore := k.getAccountStore(ctx, taskCreator)

	k.SetTask(ctx, *task)
	taskByte, err := task.Marshal()
	if err != nil {
		return nil, err
	}
	accountStore.Set([]byte(hashString), taskByte)

	ctx.EventManager().EmitEvents(sdk.Events{
		sdk.NewEvent(
			types.EventTypeCreateTask,
			sdk.NewAttribute(types.AttributeKeyTaskHash, hashString),
			sdk.NewAttribute(types.AttributeKeyContractAddress, msg.ContractAddress),
			sdk.NewAttribute(types.AttributeKeyMethod, msg.Method),
			sdk.NewAttribute(types.AttributeKeyCalldata, msg.Calldata),
			sdk.NewAttribute(types.AttributeKeySingle, strconv.FormatBool(msg.Single)),
			sdk.NewAttribute(types.AttributeKeyRuleFile, msg.RuleFile),
			sdk.NewAttribute(types.AttributeKeyCreator, msg.Creator),
		),
	})

	return &types.MsgCreateTaskResponse{}, nil
}
