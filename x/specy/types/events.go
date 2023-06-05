package types

const (
	EventTypeCreateTask     = "create_task"
	EventTypeCreateExecutor = "create_executor"
)
const (
	AttributeKeyTaskHash        = "task_hash"
	AttributeKeyContractAddress = "task_contract_address"
	AttributeKeyMethod          = "task_method"
	AttributeKeyCalldata        = "task_calldata"
	AttributeKeySingle          = "task_single"
	AttributeKeyRuleFile        = "task_rule_file"
	AttributeKeyCreator         = "task_creator"

	AttributeValueCategory = ModuleName
)
