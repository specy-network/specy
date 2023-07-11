package types

import "encoding/binary"

var _ binary.ByteOrder

const (
	// DepositKeyPrefix is the prefix to retrieve all Deposit
	DepositKeyPrefix = "Deposit/value/"
)

// DepositKey returns the store key to retrieve a Deposit from the index fields
func DepositKey(
	address string,
) []byte {
	var key []byte

	addressBytes := []byte(address)
	key = append(key, addressBytes...)
	key = append(key, []byte("/")...)

	return key
}
