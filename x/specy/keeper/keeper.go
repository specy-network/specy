package keeper

import (
	"fmt"

	"github.com/cosmos/cosmos-sdk/codec"
	storetypes "github.com/cosmos/cosmos-sdk/store/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	paramtypes "github.com/cosmos/cosmos-sdk/x/params/types"
	icacontrollerkeeper "github.com/cosmos/ibc-go/v6/modules/apps/27-interchain-accounts/controller/keeper"
	"github.com/specy-network/specy/x/specy/types"
	"github.com/tendermint/tendermint/libs/log"
)

type (
	Keeper struct {
		cdc                 codec.BinaryCodec
		storeKey            storetypes.StoreKey
		memKey              storetypes.StoreKey
		paramstore          paramtypes.Subspace
		authKeeper          types.AccountKeeper
		bankKeeper          types.BankKeeper
		stakingKeeper       types.StakingKeeper
		icaControllerKeeper icacontrollerkeeper.Keeper

		feeCollectorName string // name of the FeeCollector ModuleAccount

	}
)

func NewKeeper(
	cdc codec.BinaryCodec,
	storeKey,
	memKey storetypes.StoreKey,
	ps paramtypes.Subspace,
	authKeeper types.AccountKeeper,
	bankKeeper types.BankKeeper,
	stakingKeeper types.StakingKeeper,
	iaKeeper icacontrollerkeeper.Keeper,
	feeCollectorName string,
) *Keeper {
	// set KeyTable if it has not already been set
	if !ps.HasKeyTable() {
		ps = ps.WithKeyTable(types.ParamKeyTable())
	}

	return &Keeper{
		cdc:                 cdc,
		storeKey:            storeKey,
		memKey:              memKey,
		paramstore:          ps,
		authKeeper:          authKeeper,
		bankKeeper:          bankKeeper,
		stakingKeeper:       stakingKeeper,
		icaControllerKeeper: iaKeeper,
		feeCollectorName:    feeCollectorName,
	}
}

func (k Keeper) Logger(ctx sdk.Context) log.Logger {
	return ctx.Logger().With("module", fmt.Sprintf("x/%s", types.ModuleName))
}

func (k Keeper) GetStakingKeeper() types.StakingKeeper {
	return k.stakingKeeper
}
func (k Keeper) SendFeeToDistributionCollected(ctx sdk.Context) error {
	feeCollector := k.authKeeper.GetModuleAccount(ctx, types.RewardPoolName)
	feeCollectedInt := k.bankKeeper.GetAllBalances(ctx, feeCollector.GetAddress())
	return k.bankKeeper.SendCoinsFromModuleToModule(ctx, types.RewardPoolName, k.feeCollectorName, feeCollectedInt)
}
