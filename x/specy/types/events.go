package types

const (
	EventTypeCreateTask     = "create_task"
	EventTypeCreateExecutor = "create_executor"
	EventTypeExecuteTask    = "execute_task"
)
const (
	AttributeKeyTaskHash        = "task_hash"
	AttributeKeyContractAddress = "task_contract_address"
	AttributeKeyMethod          = "task_method"
	AttributeKeyCalldata        = "task_calldata"
	AttributeKeySingle          = "task_single"
	AttributeKeyRuleFile        = "task_rule_file"
	AttributeKeyCreator         = "task_creator"
	AttributeKeyExecutor        = "task_executor"

	AttributeKeyExecutorAddress   = "executor_address"
	AttributeKeyExecutorIasReport = "executor_ias_report"
	AttributeKeyExecutorEnclavePK = "executor_enclave_pk"

	AttributeValueCategory = ModuleName
)
