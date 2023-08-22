<script setup lang="ts">
import { RouterView } from "vue-router";
import IgntHeader from "./components/common/header/IgntHeader.vue";
import FooterNavigation from "./components/common/FooterNavigation.vue";

const headerLinks = [
  { text: "Home", url: "/home" },
  { text: "Create Tasks", url: "/about" },
];
const siteName = "SPECY NETWORK";
</script>

<template>
  <div class="common-layout">
    <IgntHeader :links="headerLinks" :siteName="siteName"></IgntHeader>
    <div class="content">
      <RouterView />
    </div>
    <FooterNavigation></FooterNavigation>
  </div>
</template>

<style>
a {
  text-decoration: none;
}
* {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  margin: 0;
  padding: 0;
}
.content {
  min-height: calc(100vh - 30px);
}
</style>