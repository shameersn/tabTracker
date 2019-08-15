import Vue from "vue";
import VueRouter from "vue-router";

import Home from "@/components/Home.vue";
import Register from "@/components/Register.vue";
import Login from "@/components/Login.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/", name: "home", component: Home },
  { path: "/register", component: Register },
  { path: "/login", component: Login }
];

const router = new VueRouter({
  routes // short for `routes: routes`
});

export default router;
