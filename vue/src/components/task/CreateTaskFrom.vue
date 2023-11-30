<template>
  <div class="container mt-3 pt-5">
    <div class="row">
      <p class="col-md-7 text-lg pt-2">Create New Automation Task</p>
      <p class="col-md-2 text-lg pt-1">Msg Type:</p>
      <div class="col-md-3">
        <select class="form-select" aria-label="" v-model="msgType">
          <option selected value="1">Send</option>
          <option value="2">Contract</option>
          <option value="3">Staking</option>
        </select>
      </div>
    </div>

    <div v-if="msgType == '1'">
      <div class="row">
        <div class="form col-md-6">
          <SendFrom :connection-id="props.connectionId"></SendFrom>
        </div>
        <div class="col-md-5 ml-20">
          <AutomationTriggers></AutomationTriggers>
        </div>
      </div>
    </div>
    <div v-if="msgType == '2'">
      <div class="row">
        <div class="form col-md-6">
          <ContractForm :connection-id="props.connectionId"></ContractForm>
        </div>
        <div class="col-md-5 ml-20">
          <AutomationTriggers></AutomationTriggers>
        </div>
      </div>
    </div>
  </div>
</template>
      
  <script setup lang="ts">
import { ref } from "vue";
import SendFrom from "../osmosis/SendForm.vue";
import ContractForm from "../osmosis/ContractForm.vue";
import AutomationTriggers from "./AutomationTriggers.vue";

const props = defineProps({
  connectionId: {
    type: String,
    required: true, // You can adjust the default value
  },
});

let msgType = ref("1");
</script>
  <style scoped>
</style>