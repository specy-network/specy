package types

import "encoding/binary"

var _ binary.ByteOrder

const (
	// ExecutorKeyPrefix is the prefix to retrieve all Executor
	ExecutorKeyPrefix = "Executor/value/"
)

// ExecutorKey returns the store key to retrieve a Executor from the index fields
func ExecutorKey(
	address string,
) []byte {
	var key []byte

	addressBytes := []byte(address)
	key = append(key, addressBytes...)
	key = append(key, []byte("/")...)

	return key
}
