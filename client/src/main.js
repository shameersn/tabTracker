import Vue from "vue";
import router from "./router";
import { sync } from "vuex-router-sync";
import App from "./App";
import vuetify from "./plugins/vuetify";
import store from "@/store/store";

Vue.config.productionTip = false;

sync(store, router);

new Vue({
  render: h => h(App),
  store,
  vuetify,
  router,
  components: { App }
}).$mount("#app");
