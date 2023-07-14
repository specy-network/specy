package types

const (
	EventTypeCreateTask = "create_task"
	EventTypeCancelTask = "cancel_task"
	EventTypeEditTask   = "edit_task"

	EventTypeCreateExecutor = "create_executor"
	EventTypeCancelExecutor = "cancel_executor"
	EventTypeEditExecutor   = "cancel_executor"
	EventTypeExecuteTask    = "execute_task"
)
const (
	AttributeKeyCreator = "creator"

	AttributeKeyTaskName           = "task_name"
	AttributeKeyTaskHash           = "task_hash"
	AttributeKeyConnectId          = "connect_id"
	AttributeKeyTaskMsgs           = "task_msgs"
	AttributeKeyTaskRuleFile       = "task_rule_file"
	AttributeKeyTaskType           = "task_type"
	AttributeKeyTaskIntervalType   = "task_interval_type"
	AttributeKeyTaskIntervalNumber = "task_interval_number"

	AttributeKeyExecutorAddress   = "executor_address"
	AttributeKeyExecutorIasReport = "executor_ias_report"
	AttributeKeyExecutorEnclavePK = "executor_enclave_pk"
	AttributeKeyExecutorValAddr   = "executor_validator_address"

	AttributeValueCategory = ModuleName
)
