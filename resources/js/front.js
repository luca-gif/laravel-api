window.Vue = require("vue");

import App from "./App.vue";

window.axios = require("axios"); //importo axios globalmente

const app = new Vue({
    el: "#app",

    render: (h) => h(App), //formula per innestare App.vue in #app
});