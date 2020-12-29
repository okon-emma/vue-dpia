import Vue from "vue";
import App from "./App";
import router from "./router/index";

import PaperDashboard from "./plugins/paperDashboard";
import "vue-notifyjs/themes/default.css";

import "./assets/css/formulate.css";
import VueFormulate from '@braid/vue-formulate';

Vue.use(PaperDashboard);
Vue.use(VueFormulate);

/* eslint-disable no-new */
new Vue({
    router,
    render: h => h(App)
}).$mount("#app");