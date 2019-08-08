import Vue from "vue";
import VueRouter from "vue-router";

import HelloWorld from "@/components/HelloWorld.vue";
import Register from "@/components/Register.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/", component: HelloWorld },
  { path: "/register", component: Register }
];

const router = new VueRouter({
  routes // short for `routes: routes`
});

export default router;
