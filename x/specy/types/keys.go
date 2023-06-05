package types

import (
	"github.com/cosmos/cosmos-sdk/types/address"
)

const (
	// ModuleName defines the module name
	ModuleName = "specy"

	// StoreKey defines the primary module store key
	StoreKey = ModuleName

	// RouterKey defines the module's message routing key
	RouterKey = ModuleName

	// MemStoreKey defines the in-memory store key
	MemStoreKey = "mem_specy"
)

var (
	TasksPrefix = []byte{0x02}
)

func KeyPrefix(p string) []byte {
	return []byte(p)
}

func CreateAccountTasksPrefix(addr []byte) []byte {
	return append(TasksPrefix, address.MustLengthPrefix(addr)...)
}
