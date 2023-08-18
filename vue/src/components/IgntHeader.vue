<template>
  <header class="header navbar navbar-expand-md navbar-light bg-light">
    <div class="container">
      <div class="logo-site-container">
        <div class="logo">
          <!-- <img src="/path/to/your/logo.png" alt="Logo" class="logo-image" /> -->
          <i class="fas fa-star logo-icon"></i>
        </div>
        <a class="navbar-brand site-name" href="#">
          {{ siteName }}
        </a>
      </div>
      <!-- <nav class="navigation">
        <ul class="nav-list">
          <li v-for="(link, index) in links" :key="index">
            <a :href="link.url" class="nav-link ">{{ link.text }}</a>
          </li>
        </ul>
      </nav> -->
      <IgntAcc />
    </div>
  </header>
</template>

<script>
import IgntAcc from "@/components/IgntAcc.vue";

export default {
  components: {
    IgntAcc,
  },
  props: {
    links: {
      type: Array,
      required: true,
    },
    siteName: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.header {
  background-color: #ffffff !important;
  /* Light gray background */
  padding: 15px 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  height: 94px;
}

.logo-image {
  width: 50px;
  height: 50px;
}

.logo-site-container {
  display: flex;
  align-items: center;
}

.site-name {
  font-weight: bold;
  font-size: 1.4rem;
  color: #333;
  /* Dark text color */
  margin-left: 10px;
}

.navigation ul.nav-list {
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
}

.navigation li {
  margin: 0 15px;
}

.navigation a {
  text-decoration: none;
  color: #666;
  /* Gray link color */
  font-weight: bold;
  font-size: larger;
}

.navigation a:hover {
  color: #000000;
  /* Blue link color on hover */
}

/* You can add more specific Bootstrap classes here */
</style>
