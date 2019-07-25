import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import VueAxios from "vue-axios";
import axios from "axios";

Vue.use(VueAxios, axios);

// Add new bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

Vue.config.productionTip = false;

// Change title page
router.beforeEach((to, from, next) => {
  document.title = to.meta.title + " | Stock Application";
  next();
});
/// End change title page

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
