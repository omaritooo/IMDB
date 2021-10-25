import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/tailwind.css";
import axios from "axios";
import VueAxios from "vue-axios";
Vue.use(VueAxios, axios);

import VueScrollProgressBar from "@guillaumebriday/vue-scroll-progress-bar";

Vue.use(VueScrollProgressBar);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
