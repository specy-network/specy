package types

const (
	EventTypeCreateTask     = "create_task"
	EventTypeCreateExecutor = "create_executor"
	EventTypeExecuteTask    = "execute_task"
)
const (
	AttributeKeyCreator = "task_creator"

	AttributeKeyTaskName = "task_name"
	AttributeKeyTaskHash = "task_hash"

	AttributeKeyConnectId    = "connect_id"
	AttributeKeyTaskMsgs     = "task_msgs"
	AttributeKeyTaskRuleFile = "task_rule_file"

	AttributeKeyTaskType = "task_type"

	AttributeKeyTaskIntervalType   = "task_interval_type"
	AttributeKeyTaskIntervalNumber = "task_interval_number"

	AttributeKeyExecutor = "task_executor"

	AttributeKeyExecutorAddress   = "executor_address"
	AttributeKeyExecutorIasReport = "executor_ias_report"
	AttributeKeyExecutorEnclavePK = "executor_enclave_pk"

	AttributeValueCategory = ModuleName
)
