<template>
  <div class="container mt-3 pt-5">
    <div class="row rounded-lg shadow-sm p-4">
      <div class="col-md-1 text-center">
        <img
          src="https://www.mintscan.io/assets/chains/svg/cosmos.svg"
          class="mb-1 hover"
          width="80"
          height="80"
        />
        <div class="mt-3">Specy</div>
      </div>

      <div class="col-md-4 col d-flex align-items-center pb-4">
        <div class="line-block gradient"></div>
      </div>
      <div class="col-md-1 text-center mr-5">
        <img
          :src="initialState.targetChain.logoUrl"
          class="mb-1 hover"
          width="80"
          height="80"
        />
        <div class="mt-3">{{ initialState.targetChain.name }}</div>
      </div>
      <div class="col-md-4 p-2 ml-5">
        <div><span>Interchain Account</span></div>

        <div class="mt-4" v-if="initialState.icaAddress != ''">
          <i class="fas fa-wallet"
            ><span class="ml-1"
              >{{ initialState.icaAddress.substring(0, 10) }}...{{
                initialState.icaAddress.substring(61, 65)
              }}</span
            ></i
          >
        </div>
        <button class="btn btn-dark mt-3" v-if="initialState.icaAddress == ''">
          Create An ICA Account
        </button>
      </div>
    </div>
  </div>
</template>
    
<script setup lang="ts">
import { useAddress } from "../../def-composables/useAddress";
import { icaAddress } from "../../def-composables/icaAddress";
import { computed, onBeforeUnmount, onMounted, reactive } from "vue";

export interface State {
  userAddress: string;
  connectionId: string;
  icaAddress: string;
  targetChain: { logoUrl: string; name: string };
}

let initialState: State = {
  userAddress: "",
  connectionId: "connection-0",
  icaAddress: "",
  targetChain: {
    logoUrl: "https://www.mintscan.io/assets/chains/svg/osmosis.svg",
    name: "Osmosis",
  },
};

let { addressInfo } = icaAddress(initialState.connectionId);
if (addressInfo != null) {
  initialState.icaAddress = addressInfo.value || "";
}

onMounted(() => {});
</script>
<style>
.light-line {
  width: 320px;
  height: 320px;
}

/* 渐变流光效果线条，要将横向宽度设置为超过100%的值，否则无动画效果 */
.line-block {
  position: relative;
  width: 100%;
  height: 6px;
  background: linear-gradient(
    -90deg,
    #ffefca 1%,
    #ffbb1f 4%,
    transparent 12%,
    transparent 16%,
    #ffefca 16%,
    #ffbb1f 19%,
    transparent 27%,
    transparent 33%,
    #ffefca 33%,
    #ffbb1f 36%,
    transparent 44%,
    transparent 50%,
    #ffefca 50%,
    #ffbb1f 53%,
    transparent 61%,
    transparent 66%,
    #ffefca 66%,
    #ffbb1f 69%,
    transparent 77%,
    transparent 84%,
    #ffefca 84%,
    #ffbb1f 87%,
    transparent 95%,
    transparent 100%
  );
  background-size: 200% 100%;
}

/* 指定使用Gradient动画，5s完成一次动画，匀速，无限循环 */
.gradient {
  animation: Gradient 5s linear infinite;
  -webkit-animation: Gradient 5s linear infinite;
  -moz-animation: Gradient 5s linear infinite;
}

/* 定义Gradient动画效果：初始时显示最右端，结束时显示最左端（向右滚动） */
@keyframes Gradient {
  0% {
    background-position: 100% 100%;
  }
  100% {
    background-position: 0% 100%;
  }
}

/* 兼容写法.. */
@-webkit-keyframes Gradient {
  0% {
    background-position: 100% 100%;
  }
  100% {
    background-position: 0% 100%;
  }
}

/* 兼容写法.. */
@-moz-keyframes Gradient {
  0% {
    background-position: 100% 100%;
  }
  100% {
    background-position: 0% 100%;
  }
}
</style>