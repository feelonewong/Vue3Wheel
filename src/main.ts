import { createApp } from 'vue';
import App from './App.vue';
import './index.scss';
import Fee from "./components/Fee.vue";
import Fee2 from "./components/Fee2.vue";
import Home from "./views/Home.vue";
import Doc from "./views/Doc.vue";

import { createWebHistory, createRouter } from "vue-router";


const history = createWebHistory();
const router = createRouter({
    history: history,
    routes:[
        {path: "/", component:Home},
        {path:"/doc", component:Doc}
    ]
})
const app = createApp(App);
app.use(router);
app.mount("#app");
