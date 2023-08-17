<script setup lang="ts">
import { RouterView } from "vue-router";
import IgntHeader from "./components/IgntHeader.vue";
import FooterNavigation from "./components/common/FooterNavigation.vue";

const headerLinks = [
  { text: "Home", url: "/" },
  { text: "Create Tasks", url: "/about" },
];
const siteName = "SPECY NETWORK";

</script>

<template>
  <IgntHeader :links="headerLinks" :siteName="siteName"></IgntHeader>
  <RouterView />
  <FooterNavigation />
</template>

