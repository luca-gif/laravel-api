window.Vue = require("vue");

import App from "./App.vue";

window.axios = require("axios");

const app = new Vue({
    el: "#app",

    render: (h) => h(App),
});
