package types

import (
	"fmt"

	types "github.com/cosmos/cosmos-sdk/types"
	paramtypes "github.com/cosmos/cosmos-sdk/x/params/types"
	"gopkg.in/yaml.v2"
)

var _ paramtypes.ParamSet = (*Params)(nil)

var (
	KeyIntervalBlock = []byte("IntervalBlock")
	// TODO: Determine the default value
	DefaultIntervalBlock uint64 = 0
)

var (
	KeyPrice = []byte("Price")
	// TODO: Determine the default value
	DefaultPrice *types.Coin = &types.Coin{}
)

// ParamKeyTable the param key table for launch module
func ParamKeyTable() paramtypes.KeyTable {
	return paramtypes.NewKeyTable().RegisterParamSet(&Params{})
}

// NewParams creates a new Params instance
func NewParams(
	intervalBlock uint64,
	price *types.Coin,
) Params {
	return Params{
		IntervalBlock: intervalBlock,
		Price:         price,
	}
}

// DefaultParams returns a default set of parameters
func DefaultParams() Params {
	return NewParams(
		DefaultIntervalBlock,
		DefaultPrice,
	)
}

// ParamSetPairs get the params.ParamSet
func (p *Params) ParamSetPairs() paramtypes.ParamSetPairs {
	return paramtypes.ParamSetPairs{
		paramtypes.NewParamSetPair(KeyIntervalBlock, &p.IntervalBlock, validateIntervalBlock),
		paramtypes.NewParamSetPair(KeyPrice, &p.Price, validatePrice),
	}
}

// Validate validates the set of params
func (p Params) Validate() error {
	if err := validateIntervalBlock(p.IntervalBlock); err != nil {
		return err
	}

	if err := validatePrice(p.Price); err != nil {
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

// validatePrice validates the Price param
func validatePrice(v interface{}) error {
	price, ok := v.(*types.Coin)
	if !ok {
		return fmt.Errorf("invalid parameter type: %T", v)
	}

	// TODO implement validation
	_ = price

	return nil
}
