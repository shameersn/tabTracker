import Vue from "vue";
import VueRouter from "vue-router";

import Home from "@/components/Home.vue";
import Register from "@/components/Register.vue";
import Login from "@/components/Login.vue";
import Songs from "@/components/Songs.vue";
import CreateSong from "@/components/CreateSong.vue";
import ViewSong from "@/components/ViewSong.vue";
import NotFound from "@/components/NotFound.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/", name: "home", component: Home },
  { path: "/register", component: Register },
  { path: "/login", component: Login },
  { path: "/songs", name: "songs", component: Songs },
  { path: "/songs/create", component: CreateSong },
  { path: "/songs/:songId", component: ViewSong },
  { path: "/songs/:songId/edit", component: CreateSong },
  { path: "**", component: NotFound }
];

const router = new VueRouter({
  routes // short for `routes: routes`
});

export default router;
