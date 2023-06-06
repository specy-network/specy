package types

import (
	"github.com/cosmos/cosmos-sdk/codec"
	cdctypes "github.com/cosmos/cosmos-sdk/codec/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/msgservice"
)

func RegisterCodec(cdc *codec.LegacyAmino) {
	cdc.RegisterConcrete(&MsgCreateExecutor{}, "specy/CreateExecutor", nil)
	cdc.RegisterConcrete(&MsgCreateTask{}, "specy/CreateTask", nil)
	cdc.RegisterConcrete(&MsgExecuteTask{}, "specy/ExecuteTask", nil)
	// this line is used by starport scaffolding # 2
}

func RegisterInterfaces(registry cdctypes.InterfaceRegistry) {
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateExecutor{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateTask{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgExecuteTask{},
	)
	// this line is used by starport scaffolding # 3

	msgservice.RegisterMsgServiceDesc(registry, &_Msg_serviceDesc)
}

var (
	Amino     = codec.NewLegacyAmino()
	ModuleCdc = codec.NewProtoCodec(cdctypes.NewInterfaceRegistry())
)
