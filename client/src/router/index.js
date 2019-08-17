import Vue from "vue";
import VueRouter from "vue-router";

import Home from "@/components/Home.vue";
import Register from "@/components/Register.vue";
import Login from "@/components/Login.vue";
import Songs from "@/components/Songs.vue";
import CreateSong from "@/components/CreateSong.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/", name: "home", component: Home },
  { path: "/register", component: Register },
  { path: "/login", component: Login },
  { path: "/songs", component: Songs },
  { path: "/songs/create", component: CreateSong }
];

const router = new VueRouter({
  routes // short for `routes: routes`
});

export default router;
