<template>
  <div>
    <Introduction
      :projectName="projectName"
      :projectDescription="projectDescription"
    />
    <ShowTasks title="My tasks" :itemsPerPage="5" />
  </div>
</template>
  
<script setup>
import Introduction from "../components/home/Introduction.vue";
import ShowTasks from "../components/home/ShowTasks.vue";
import { useAddress } from "../def-composables/useAddress";

import { useStore } from "vuex";
import { ref } from "vue";
let address = ref("");
let projectName = ref("Specy  Automation");
let projectDescription = ref(
  "Automate your Cosmos ecosystem TX with the Specy Network."
);
</script>
  
<style>
</style>
  