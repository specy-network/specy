package keeper_test

import (
	"fmt"
	"testing"
	"time"

	keepertest "github.com/specy-network/specy/testutil/keeper"

	"github.com/tendermint/tendermint/crypto/tmhash"
)

func TestClaim(t *testing.T) {
	keeper, ctx := keepertest.RewardsKeeper(t)

	currentTime := time.Now()
	truncatedTime := time.Date(currentTime.Year(), currentTime.Month(), currentTime.Day(), 0, 0, 0, 0, currentTime.Location())
	timestamp := truncatedTime.Unix()

	addrs := []string{"cosmos1zaavvzxez0elundtn32qnk9lkm8kmcszzsv80v", "cosmos1zaavvzxez0elundtn32qnk9lkm8kmcszzsv801", "cosmos1zaavvzxez0elundtn32qnk9lkm8kmcszzsv802", "cosmos1zaavvzxez0elundtn32qnk9lkm8kmcszzsv803"}

	//leaf node hash
	h0 := tmhash.Sum([]byte(addrs[0]))
	t.Logf(fmt.Sprintf("h0:%x", h0))
	h1 := tmhash.Sum([]byte(addrs[1]))
	t.Logf(fmt.Sprintf("h1:%x", h1))
	h2 := tmhash.Sum([]byte(addrs[2]))
	t.Logf(fmt.Sprintf("h2:%x", h2))
	h3 := tmhash.Sum([]byte(addrs[3]))
	t.Logf(fmt.Sprintf("h3:%x", h3))

	//1
	d1h0 := innerHash(h0, h1)
	t.Logf(fmt.Sprintf("d1h0%x", d1h0))
	d1h1 := innerHash(h2, h3)
	t.Logf(fmt.Sprintf("d1h1:%x", d1h1))

	//2
	d2h0 := innerHash(d1h0, d1h1)
	t.Logf(fmt.Sprintf("d2h0:%x", d2h0))

	t.Logf(fmt.Sprint(timestamp))
	keeper.SetRewards(ctx, fmt.Sprint(timestamp), fmt.Sprintf("%x", d2h0))

	merkel, found := keeper.GetMerkel(ctx, fmt.Sprint(timestamp))
	if found != true {
		t.Errorf("SetRewards error")
	}
	if merkel.MerkelRoot != fmt.Sprintf("%x", d2h0) {
		t.Errorf("returned %s, expected %s", merkel.MerkelRoot, fmt.Sprintf("%x", d2h0))
	}

}
func innerHash(left []byte, right []byte) []byte {
	return tmhash.Sum(append(left, right...))
}
