import { createRouter, createWebHistory } from "vue-router";
import Funds from "../views/funds/Funds.vue";
import FundDetails from "../views/funds/FundDetails.vue";
import NotFound from "../views/NotFound.vue";

const routes = [
  { path: "/", name: "Funds", component: Funds },
  {
    path: "/funds",
    name: "Funds",
    component: Funds,
  },
  {
    path: "/funds/:id",
    name: "FundDetails",
    component: FundDetails,
    props: true,
  },
  // 404 catchall
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
