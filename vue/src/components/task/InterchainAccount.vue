<template>
  <div class="container mt-3 pt-5">
    <div class="row rounded-lg shadow-sm p-4">
      <div class="col-md-1 text-center">
        <img src="/logo-s.png" class="mb-1 hover" width="80" height="80" />
        <div class="mt-3">Specy</div>
      </div>

      <div class="col-md-4 col d-flex align-items-center pb-4">
        <div class="line-block gradient"></div>
      </div>
      <div class="col-md-1 text-center mr-5">
        <img src="/osmosislogo.png" class="mb-1 hover" width="80" height="80" />
        <div class="mt-3 fw-400">{{ initialState.targetChain.name }}</div>
      </div>
      <div class="col-md-4 p-2 ml-5">
        <div><span>Interchain Account</span></div>

        <div class="mt-4 font-main-color" v-if="icaAddress.length != 0">
          <i class="fas fa-wallet"
            ><span class="ml-1"
              >{{ icaAddress.substring(0, 10) }}...{{
                icaAddress.substring(61, 65)
              }}</span
            ></i
          >
        </div>
        <button
          class="main-btn mt-3 p-2"
          v-if="icaAddress == 0"
          @click="createIca"
        >
          Create An ICA Account
        </button>
      </div>
    </div>
  </div>
</template>
    
<script setup lang="ts">
import { useAddress } from "../../def-composables/useAddress";
import type { Amount } from "@/utils/interfaces";
import { useClient } from "@/composables/useClient";
import { onMounted, reactive, computed } from "vue";
import { ElNotification } from "element-plus";
import { useStore } from "vuex";
//props
const props = defineProps({
  connectionId: {
    type: String,
    required: true, // You can adjust the default value
  },
});
//state
export interface State {
  targetChain: { logoUrl: string; name: string };
}
let initialState = reactive({
  targetChain: {
    logoUrl: "https://www.mintscan.io/assets/chains/svg/osmosis.svg",
    name: "Osmosis",
  },
});

let store = useStore();

//computed
let icaAddress = computed(() => {
  return store.state.common.icaAddress;
});

const client = useClient();
const registerIcaAccount =
  client.IbcApplicationsInterchainAccountsControllerV1.tx
    .sendMsgRegisterInterchainAccount;

//function
const notification = (status: Boolean) => {
  if (status) {
    ElNotification({
      title: "Success",
      message: "TX successed!",
      type: "success",
    });
  } else {
    ElNotification({
      title: "Error",
      message: "TX failed!",
      type: "error",
    });
  }
};

const createIca = async (): Promise<void> => {
  let { address } = useAddress();
  let send;
  const fee: Array<Amount> = [
    {
      denom: "stake",
      amount: "0",
    },
  ];

  let payload: any = {
    owner: address.value,
    connectionId: props.connectionId,
    version: 0,
  };

  try {
    send = () =>
      registerIcaAccount({
        value: payload,
        fee: { amount: fee as Readonly<Amount[]>, gas: "200000" },
        memo: "",
      });

    const txResult = await send();
    if (txResult.code) {
      throw new Error();
    }
    notification(true);
  } catch (e) {
    notification(false);
    console.error(e);
  }
};
onMounted(() => {});
</script>
<style lang="scss">
.fw-400 {
  font-weight: 400;
}
.font-main-color {
  color: rgb(45, 114, 179);
}
.main-btn {
  background-color: rgb(45, 114, 179);
  color: #fff;
  border: 2px solid rgb(45, 114, 179);
  border-radius: 5px;
  &:hover {
    background-color: rgb(20, 101, 176);
  }
}
.light-line {
  width: 320px;
  height: 320px;
}

/* 渐变流光效果线条，要将横向宽度设置为超过100%的值，否则无动画效果 */
.line-block {
  position: relative;
  width: 100%;
  height: 6px;
  border-radius: 3px;
  background: linear-gradient(
    -90deg,
    #e1e3e5 1%,
    #2d9bbc 4%,
    transparent 12%,
    transparent 16%,
    #e1e3e5 16%,
    #2d9bbc 19%,
    transparent 27%,
    transparent 33%,
    #e1e3e5 33%,
    #2d9bbc 36%,
    transparent 44%,
    transparent 50%,
    #e1e3e5 50%,
    #2d9bbc 53%,
    transparent 61%,
    transparent 66%,
    #e1e3e5 66%,
    #2d9bbc 69%,
    transparent 77%,
    transparent 84%,
    #e1e3e5 84%,
    #2d9bbc 87%,
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