import Vue from "vue";
import router from "./router";
import App from "./App";
import vuetify from "./plugins/vuetify";

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  vuetify,
  router,
  components: { App }
}).$mount("#app");
