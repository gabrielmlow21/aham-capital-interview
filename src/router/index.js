import { createRouter, createWebHistory } from "vue-router";
import Funds from "../views/funds/Funds.vue";
import FundDetails from "../views/funds/FundDetails.vue";

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
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
