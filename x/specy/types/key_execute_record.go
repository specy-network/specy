package types

import "encoding/binary"

var _ binary.ByteOrder

const (
	// ExecuteRecordKeyPrefix is the prefix to retrieve all ExecuteRecord
	ExecuteRecordKeyPrefix = "ExecuteRecord/value/"
)

// ExecuteRecordKey returns the store key to retrieve a ExecuteRecord from the index fields
func ExecuteRecordKey(
	owner string,
	name string,
	position uint64,
) []byte {
	var key []byte

	ownerBytes := []byte(owner)
	key = append(key, ownerBytes...)
	key = append(key, []byte("/")...)

	nameBytes := []byte(name)
	key = append(key, nameBytes...)
	key = append(key, []byte("/")...)

	positionBytes := make([]byte, 8)
	binary.BigEndian.PutUint64(positionBytes, position)
	key = append(key, positionBytes...)
	key = append(key, []byte("/")...)

	return key
}
