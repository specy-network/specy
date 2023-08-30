import { createRouter, createWebHistory } from "vue-router";

import DataView from "../views/DataView.vue";
import PortfolioView from "../views/PortfolioView.vue";
import HomeView from "../views/HomeView.vue"
import CreateTaskView from "@/views/TaskView.vue";

const routerHistory = createWebHistory();
const routes = [
  { path: "/", component: PortfolioView },
  { path: "/data", component: DataView },
  { path: "/home", component: HomeView },
  { path: "/task", component: CreateTaskView }
];

const router = createRouter({
  history: routerHistory,
  routes,
});

export default router;
