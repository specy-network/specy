<template>
  <div class="container pt-5">
    <div class="pl-4">
      <router-link to="/home" class="text-dark"
        ><i class="fas fa-arrow-circle-left"
          ><span class="ml-2">Home</span></i
        ></router-link
      >
    </div>
    <InterChainAccount />
    <CreateTaskFrom />
  </div>
</template>
  <script>
import InterChainAccount from "../components/task/InterchainAccount.vue";
import CreateTaskFrom from "../components/task/CreateTaskFrom.vue";
export default {
  components: {
    InterChainAccount,
    CreateTaskFrom,
  },
};
</script>
  <style>
</style>