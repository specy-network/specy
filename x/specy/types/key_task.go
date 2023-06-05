package types

import "encoding/binary"

var _ binary.ByteOrder

const (
	// TaskKeyPrefix is the prefix to retrieve all Task
	TaskKeyPrefix = "Task/value/"
)

// TaskKey returns the store key to retrieve a Task from the index fields
func TaskKey(
	taskHash string,
) []byte {
	var key []byte

	taskHashBytes := []byte(taskHash)
	key = append(key, taskHashBytes...)
	key = append(key, []byte("/")...)

	return key
}
