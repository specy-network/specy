package types

import "encoding/binary"

var _ binary.ByteOrder

const (
	// TaskKeyPrefix is the prefix to retrieve all Task
	TaskKeyPrefix = "Task/value/"
)

// TaskKey returns the store key to retrieve a Task from the index fields
func TaskKey(
	owner string,
	name string,
) []byte {
	var key []byte

	ownerBytes := []byte(owner)
	key = append(key, ownerBytes...)
	key = append(key, []byte("/")...)

	nameBytes := []byte(name)
	key = append(key, nameBytes...)
	key = append(key, []byte("/")...)

	return key
}
