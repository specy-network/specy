package types

import "encoding/binary"

var _ binary.ByteOrder

const (
	// MerkelKeyPrefix is the prefix to retrieve all Merkel
	MerkelKeyPrefix = "Merkel/value/"
)

// MerkelKey returns the store key to retrieve a Merkel from the index fields
func MerkelKey(
	datahash string,
) []byte {
	var key []byte

	datahashBytes := []byte(datahash)
	key = append(key, datahashBytes...)
	key = append(key, []byte("/")...)

	return key
}
