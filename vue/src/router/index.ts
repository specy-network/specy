import { createRouter, createWebHistory } from "vue-router";

import DataView from "../views/DataView.vue";
import PortfolioView from "../views/PortfolioView.vue";
import DetailView from "../views/DetailTaskView.vue"
import HomeView from "../views/HomeView.vue"
import CreateTaskView from "@/views/TaskView.vue";

const routerHistory = createWebHistory();
const routes = [
  { path: "/", component: HomeView },
  // { path: "/data", component: DataView },
  { path: "/home", component: HomeView },
  { path: "/task", component: CreateTaskView },
  { path: "/detail", component: DetailView }
];

const router = createRouter({
  history: routerHistory,
  routes,
});

export default router;
