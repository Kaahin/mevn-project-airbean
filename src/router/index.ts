import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Landing from "../views/Landing.vue";
import About from "../views/About.vue";
import Menu from "../views/Menu.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/landing",
    name: "Landing",
    component: Landing,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/menu",
    name: "Menu",
    component: Menu,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
