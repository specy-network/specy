<template>
  <div class="container pt-5">
    <div class="pl-4">
      <router-link to="/home" class="text-dark"
        ><i class="fas fa-arrow-circle-left"
          ><span class="ml-2">Home</span></i
        ></router-link
      >
    </div>
    <div v-if="loaded">
      <InterChainAccount :connection-id="connectionId" />
      <CreateTaskFrom :connection-id="connectionId" />
    </div>
  </div>
</template>
  <script setup lang="ts">
import InterChainAccount from "../components/task/InterchainAccount.vue";
import CreateTaskFrom from "../components/task/CreateTaskFrom.vue";
import { useStore } from "vuex";
import { ref, watch, onMounted } from "vue";
import { icaAddress } from "../api/ica";
//util
let store = useStore();

//state
let loaded = ref(false);
let connectionId = ref("connection-0");

//watch
watch(
  () => store.state.common.address,
  (newVal, oldVal) => {
    icaAddress(newVal, connectionId.value)
      .then((response) => {
        let icaAddressInfo = response.interchain_account_address;
        store.dispatch("common/setIcaAddress", icaAddressInfo);
      })
      .catch((error) => {
        // console.error("Error fetching data:", error);
        store.dispatch("common/setIcaAddress", "");
      });
  }
);

//mounted
onMounted(() => {
  if (store.state.common.address != "") {
    icaAddress(store.state.common.address, connectionId.value)
      .then((response) => {
        store.dispatch(
          "common/setIcaAddress",
          response.interchain_account_address
        );
        loaded.value = true;
      })
      .catch((error) => {
        store.dispatch("common/setIcaAddress", "");
        loaded.value = true;
      });
  }
});
</script>
  <style>
</style>