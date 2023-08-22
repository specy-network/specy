<template>
  <div>
    <transition name="dropdown-fade">
      <div
        v-if="showDefault"
        class="top-20 right-8 shadow-std bg-white-1000 rounded absolute max-w-xs p-7 z-50 w-full box-border acc-dd"
      >
        <span
          class="text-sm leading-normal text-gray-660 mb-3 block text-[13px]"
          >Connected wallet</span
        >
        <div class="mb-3 flex items-center">
          <IgntProfileIcon :address="address" />
          <div class="flex flex-col ml-3">
            <span class="text-[13px] font-bold">
              {{ accName }}
            </span>
            <span
              class="text-[13px] leading-normal text-gray-660 copy-address flex items-center"
              title="Copy address"
              @click="copy(address)"
            >
              {{ shortAddress }}
              <IgntCopyIcon class="ml-2 cursor-pointer hover:text-black" />
            </span>
          </div>
        </div>
        <div
          class="flex justify-between items-center cursor-pointer hover:text-gray-660"
          @click="$emit('disconnect')"
        >
          <span> Disconnect wallet </span>
        </div>
        <hr class="divide-y my-3 -mx-7" />

        <div
          class="flex justify-between items-center cursor-pointer hover:text-gray-660"
        >
          <div>
            <i class="fas fa-coins text-lg"></i>
            <span class="ml-3"> {{ deposit?.balance?.amount }} </span>
          </div>

          <i class="fas fa-chevron-down" @click="deposit_show"></i>
        </div>
        <div
          v-if="depositInputShow"
          class="fade"
          :class="{ show: depositInputShow }"
        >
          <hr class="divide-y my-3 -mx-7" />

          <div
            class="flex justify-between items-center cursor-pointer hover:text-gray-660"
          >
            <span> Amount:</span>
            <input
              type="text"
              class="form-control-sm border border-right border-dark ml-1"
              v-model="depositAmount"
            />
            <i class="fas fa-check-circle" @click="submit_deposit"></i>
          </div>
        </div>

        <hr class="divide-y my-3 -mx-7" />
        <div
          class="flex justify-between items-center cursor-pointer hover:text-gray-660"
          @click="switchToSettings"
        >
          <span> Settings </span>
          <IgntChevronRightIcon class="text-sm" />
        </div>

        <!-- <a
        href="#"
        class="flex justify-between items-center mb-3 cursor-pointer hover:text-gray-660"
      >
        <span> Support </span>
        <IgntExternalArrowIcon class="text-xs" />
      </a>
      <a
        href="#"
        class="flex justify-between items-center mb-3 cursor-pointer hover:text-gray-660"
      >
        <span> Twitter </span>
        <IgntExternalArrowIcon class="text-xs" />
      </a>
      <a
        href="#"
        class="flex justify-between items-center mb-3 cursor-pointer hover:text-gray-660"
      >
        <span> Telegram </span>
        <IgntExternalArrowIcon class="text-xs" />
      </a> -->
        <!-- <div style="text-align: center; margin-top: 2rem">
        <a href="#" class="text-sm leading-normal text-gray-660 terms-link mr-2 cursor-pointer">Privacy</a>•
        <a href="#" class="text-sm leading-normal text-gray-660 terms-link mr-2 ml-1 cursor-pointer">Terms of use</a>•
        <a href="#" class="text-sm leading-normal text-gray-660 terms-link ml-1 cursor-pointer">Cookies</a>
      </div> -->
      </div>
      <div
        v-else-if="showSettings"
        class="top-20 right-8 shadow-std bg-white rounded absolute max-w-xs p-7 z-50 w-full box-border acc-dd"
      >
        <header class="flex items-center -mx-7 -mt-7 px-3 pt-3 pb-7">
          <div class="cursor-pointer" @click="switchToDefault">
            <svg
              width="22"
              height="20"
              viewBox="0 0 22 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.5 10L1 10M1 10L9.53125 19M1 10L9.53125 1"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <div class="text-xl font-semibold text-center flex-1">Settings</div>
        </header>

        <div class="flex justify-between items-center mb-3">
          <span> Chain </span>
          <span> {{ chainId }} </span>
        </div>
        <hr class="divide-y -mx-7 my-3" />

        <div class="flex justify-between items-center mb-3">
          <span> Cosmos SDK API </span>
          <span> {{ apiConnected ? "connected" : "disconnected" }} </span>
        </div>
        <hr class="divide-y -mx-7 my-3" />

        <div class="flex justify-between items-center mb-3">
          <span> Tendermint RPC </span>
          <span> {{ rpcConnected ? "connected" : "disconnected" }} </span>
        </div>
        <hr class="divide-y -mx-7 my-3" />

        <div class="flex justify-between items-center">
          <span> WebSocket </span>
          <span> {{ wsConnected ? "connected" : "disconnected" }} </span>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import useCosmosBaseTendermintV1Beta1 from "@/composables/useCosmosBaseTendermintV1Beta1";
import { useConnectionStatus } from "@/def-composables/useConnectionStatus";
import { computed, onBeforeUnmount, onMounted, reactive } from "vue";
import { useAddress } from "../../../def-composables/useAddress";
import { useClipboard } from "../../../def-composables/useClipboard";
import { IgntChevronRightIcon } from "@ignt/vue-library";
import { IgntExternalArrowIcon } from "@ignt/vue-library";
import { IgntProfileIcon } from "@ignt/vue-library";
import { IgntCopyIcon } from "@ignt/vue-library";
import { userDeposit } from "../../../def-composables/userDeposit";
import type { Amount } from "@/utils/interfaces";
import { ref } from "vue";
import { useClient } from "@/composables/useClient";
import { ElNotification } from "element-plus";
enum UI_STATE {
  "DEFAULT" = 1,

  "SETTINGS" = 2,
}
interface State {
  currentUIState: UI_STATE;
}

const initialState: State = {
  currentUIState: UI_STATE.DEFAULT,
};
let depositAmount = ref(0);
let depositInputShow = ref(false);
defineProps({
  wallet: {
    type: Object,
    required: true,
  },

  accName: {
    type: String,
    required: true,
  },
});
const emit = defineEmits(["disconnect", "close"]);

// composables
let { address, shortAddress } = useAddress();

let { copy } = useClipboard();
// computed
const query = useCosmosBaseTendermintV1Beta1();
const nodeInfo = query.ServiceGetNodeInfo({});
const chainId = computed(
  () => nodeInfo.data?.value?.default_node_info?.network ?? ""
);
const { apiConnected, rpcConnected, wsConnected } = useConnectionStatus();
let showDefault = computed<boolean>(
  () => state.currentUIState === UI_STATE.DEFAULT
);
let showSettings = computed<boolean>(
  () => state.currentUIState === UI_STATE.SETTINGS
);

// state
let state: State = reactive(initialState);
let { deposit } = userDeposit();
const client = useClient();
const depositBalance = client.SpecynetworkSpecySpecy.tx.sendMsgDepositBalance;
// methods
let clickOutsideHandler = (evt: MouseEvent) => {
  let dropdownEl = document.querySelector(".acc-dd");
  let dropdownButtonEl = document.querySelector(".acc-dd-btn");
  if (
    !dropdownEl?.contains(evt.target as Node) &&
    !dropdownButtonEl?.contains(evt.target as Node)
  ) {
    emit("close");
    state.currentUIState = UI_STATE.DEFAULT;
  }
};
let switchToSettings = () => {
  state.currentUIState = UI_STATE.SETTINGS;
};
let switchToDefault = () => {
  state.currentUIState = UI_STATE.DEFAULT;
};

let deposit_show = () => {
  depositInputShow.value = !depositInputShow.value;
  console.log(depositInputShow);
};
const submit_deposit = async (): Promise<void> => {
  const amount: Amount = {
    denom: "stake",
    amount: "" + depositAmount.value,
  };
  let send;
  const fee: Array<Amount> = [
    {
      denom: "stake",
      amount: "0",
    },
  ];

  let payload: any = {
    creator: address.value,
    amount: amount,
  };

  try {
    send = () =>
      depositBalance({
        value: payload,
        fee: { amount: fee as Readonly<Amount[]>, gas: "200000" },
        memo: "deposit",
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
// lh
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

onMounted(() => {
  document.addEventListener("click", clickOutsideHandler);
});
onBeforeUnmount(() => {
  document.removeEventListener("click", clickOutsideHandler);
});
</script>

<style lang="scss">
</style>