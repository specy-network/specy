package types

import (
	"fmt"

	paramtypes "github.com/cosmos/cosmos-sdk/x/params/types"
	"gopkg.in/yaml.v2"
)

var _ paramtypes.ParamSet = (*Params)(nil)

var (
	KeyIntervalBlock = []byte("IntervalBlock")
	// TODO: Determine the default value
	DefaultIntervalBlock uint64 = 100
)

var (
	KeyCommissionDenom = []byte("CommissionDenom")
	// TODO: Determine the default value
	DefaultCommissionDenom string = "stake"
)

var (
	KeyAmount = []byte("Amount")
	// TODO: Determine the default value
	DefaultAmount uint64 = 0
)

// ParamKeyTable the param key table for launch module
func ParamKeyTable() paramtypes.KeyTable {
	return paramtypes.NewKeyTable().RegisterParamSet(&Params{})
}

// NewParams creates a new Params instance
func NewParams(
	intervalBlock uint64,
	commissionDenom string,
	amount uint64,
) Params {
	return Params{
		IntervalBlock:   intervalBlock,
		CommissionDenom: commissionDenom,
		Amount:          amount,
	}
}

// DefaultParams returns a default set of parameters
func DefaultParams() Params {
	return NewParams(
		DefaultIntervalBlock,
		DefaultCommissionDenom,
		DefaultAmount,
	)
}

// ParamSetPairs get the params.ParamSet
func (p *Params) ParamSetPairs() paramtypes.ParamSetPairs {
	return paramtypes.ParamSetPairs{
		paramtypes.NewParamSetPair(KeyIntervalBlock, &p.IntervalBlock, validateIntervalBlock),
		paramtypes.NewParamSetPair(KeyCommissionDenom, &p.CommissionDenom, validateCommissionDenom),
		paramtypes.NewParamSetPair(KeyAmount, &p.Amount, validateAmount),
	}
}

// Validate validates the set of params
func (p Params) Validate() error {
	if err := validateIntervalBlock(p.IntervalBlock); err != nil {
		return err
	}

	if err := validateCommissionDenom(p.CommissionDenom); err != nil {
		return err
	}

	if err := validateAmount(p.Amount); err != nil {
		return err
	}

	return nil
}

// String implements the Stringer interface.
func (p Params) String() string {
	out, _ := yaml.Marshal(p)
	return string(out)
}

// validateIntervalBlock validates the IntervalBlock param
func validateIntervalBlock(v interface{}) error {
	intervalBlock, ok := v.(uint64)
	if !ok {
		return fmt.Errorf("invalid parameter type: %T", v)
	}

	// TODO implement validation
	_ = intervalBlock

	return nil
}

// validateCommissionDenom validates the CommissionDenom param
func validateCommissionDenom(v interface{}) error {
	commissionDenom, ok := v.(string)
	if !ok {
		return fmt.Errorf("invalid parameter type: %T", v)
	}

	// TODO implement validation
	_ = commissionDenom

	return nil
}

// validateAmount validates the Amount param
func validateAmount(v interface{}) error {
	amount, ok := v.(uint64)
	if !ok {
		return fmt.Errorf("invalid parameter type: %T", v)
	}

	// TODO implement validation
	_ = amount

	return nil
}
