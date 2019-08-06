import Vue from "vue";
import App from "./app.vue";
import router from "./router";
import store from "./store";

import Element from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import "./assets/css/main.less";
import i18n from "./lang";

Vue.prototype.$ELEMENT = {
  size: localStorage.getItem("size") || "medium",
  i18n: (key, value) => i18n.t(key, value)
};

Vue.use(Element);

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router,
  store,
  i18n,
  render: h => h(App)
})
