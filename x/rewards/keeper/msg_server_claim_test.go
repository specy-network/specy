package keeper_test

import (
	"fmt"
	keepertest "specy/testutil/keeper"
	"testing"
	"time"

	"github.com/tendermint/tendermint/crypto/tmhash"
)

func TestClaim(t *testing.T) {
	keeper, ctx := keepertest.RewardsKeeper(t)

	currentTime := time.Now()

	// 将时间戳截断到天
	truncatedTime := time.Date(currentTime.Year(), currentTime.Month(), currentTime.Day(), 0, 0, 0, 0, currentTime.Location())

	// 获取时间戳
	timestamp := truncatedTime.Unix()

	addrs := []string{"cosmos17teac5cla5j886k4pyr4xhyz252llnr09x4gdu", "cosmos17teac5cla5j886k4pyr4xhyz252llnr09x4gdi", "cosmos17teac5cla5j886k4pyr4xhyz252llnr09x4gduo", "cosmos17teac5cla5j886k4pyr4xhyz252llnr09x4gduy"}

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
