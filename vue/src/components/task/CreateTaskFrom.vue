<template>
  <div class="container mt-3 pt-5">
    <div class="row">
      <p class="col-md-7 text-lg pt-2">Create New Automation Task</p>
      <p class="col-md-2 text-lg pt-1">Msg Type:</p>
      <div class="col-md-3">
        <select class="form-select" aria-label="" v-model="msgType">
          <option selected value="1">Send</option>
          <option value="2">Swap</option>
          <option value="3">Staking</option>
        </select>
      </div>
    </div>

    <div v-if="msgType == '1'">
      <div class="row">
        <div class="form col-md-6">
          <SendFrom
            :icaAddress="initialState.icaAddress"
            :connection-id="initialState.connectionId"
          ></SendFrom>
        </div>
        <div class="col-md-5 ml-20">
          <AutomationTriggers></AutomationTriggers>
        </div>
      </div>
    </div>
  </div>
</template>
      
  <script setup lang="ts">
import { useAddress } from "../../def-composables/useAddress";
import { icaAddress } from "../../def-composables/icaAddress";
import { computed, onBeforeUnmount, onMounted, reactive } from "vue";
import { ref } from "vue";
import SendFrom from "../osmosis/SendForm.vue";
import AutomationTriggers from "./AutomationTriggers.vue";
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
let msgType = ref("1");

let { addressInfo } = icaAddress(initialState.connectionId);
if (addressInfo != null) {
  initialState.icaAddress = addressInfo.value || "";
}

onMounted(() => {});
</script>
  <style scoped>
</style>