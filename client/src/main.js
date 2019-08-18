import Vue from "vue";
import router from "./router";
import { sync } from "vuex-router-sync";
import App from "./App";
import vuetify from "./plugins/vuetify";
import store from "@/store/store";

import VueYouTubeEmbed from "vue-youtube-embed";
// if you don't want install the component globally
Vue.use(VueYouTubeEmbed);

Vue.config.productionTip = false;

sync(store, router);

new Vue({
  render: h => h(App),
  store,
  router,
  vuetify,
  components: { App }
}).$mount("#app");
