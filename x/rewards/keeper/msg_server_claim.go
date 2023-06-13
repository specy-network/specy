package keeper

import (
	"context"
	"encoding/hex"
	"fmt"
	"time"

	"github.com/specy-network/specy/x/rewards/types"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/tendermint/tendermint/crypto/tmhash"
)

func (k msgServer) Claim(goCtx context.Context, msg *types.MsgClaim) (*types.MsgClaimResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	//TODO check proof and send coin
	souceHash := tmhash.Sum([]byte(msg.Creator))
	//path is hex strings
	for _, value := range msg.Path {
		byteFromHex, err := hex.DecodeString(value)
		if err != nil {
			return nil, types.ErrMerkelNotExsit
		}
		souceHash = innerHash(souceHash[:], byteFromHex)
	}
	merkel, found := k.GetMerkel(ctx, getDayTime())
	if !found {
		return nil, types.ErrMerkelNotExsit
	}
	if fmt.Sprintf("%x", souceHash) != merkel.MerkelRoot {
		k.Logger(ctx).Info("claim rewards check proof failed")

	} else {
		//TODO  send coin
		k.Logger(ctx).Info("claim rewards check proof successed")
	}

	return &types.MsgClaimResponse{}, nil
}

func innerHash(left []byte, right []byte) []byte {
	return tmhash.Sum(append(left, right...))
}

func getDayTime() string {
	currentTime := time.Now()
	truncatedTime := time.Date(currentTime.Year(), currentTime.Month(), currentTime.Day(), 0, 0, 0, 0, currentTime.Location())
	timestamp := truncatedTime.Unix()
	return fmt.Sprint(timestamp)
}
