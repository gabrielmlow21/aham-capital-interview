import { createRouter, createWebHistory } from "vue-router";
import FundsList from "../views/FundsList.vue";

const routes = [{ path: "/", name: "FundsList", component: FundsList }];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
