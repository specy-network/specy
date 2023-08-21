<template>
  <div class="container mt-3 pt-5">
    <div>
      <p class="text-xl">Create New Automation Task</p>
    </div>
    <form class="row g-3">
      <div class="col-md-6">
        <label for="inputEmail4" class="form-label">Email</label>
        <input type="email" class="form-control" id="inputEmail4" />
      </div>
      <div class="col-md-6">
        <label for="inputPassword4" class="form-label">Password</label>
        <input type="password" class="form-control" id="inputPassword4" />
      </div>
      <div class="col-12">
        <label for="inputAddress" class="form-label">Address</label>
        <input
          type="text"
          class="form-control"
          id="inputAddress"
          placeholder="1234 Main St"
        />
      </div>
      <div class="col-12">
        <label for="inputAddress2" class="form-label">Address 2</label>
        <input
          type="text"
          class="form-control"
          id="inputAddress2"
          placeholder="Apartment, studio, or floor"
        />
      </div>
      <div class="col-md-6">
        <label for="inputCity" class="form-label">City</label>
        <input type="text" class="form-control" id="inputCity" />
      </div>
      <div class="col-md-4">
        <label for="inputState" class="form-label">State</label>
        <select id="inputState" class="form-select">
          <option selected>Choose...</option>
          <option>...</option>
        </select>
      </div>
      <div class="col-md-2">
        <label for="inputZip" class="form-label">Zip</label>
        <input type="text" class="form-control" id="inputZip" />
      </div>
      <div class="col-12">
        <div class="form-check">
          <input class="form-check-input" type="checkbox" id="gridCheck" />
          <label class="form-check-label" for="gridCheck"> Check me out </label>
        </div>
      </div>
      <div class="col-12">
        <button type="submit" class="btn btn-primary">Sign in</button>
      </div>
    </form>
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
</style>