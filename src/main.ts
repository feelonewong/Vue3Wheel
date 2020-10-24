import { createApp } from 'vue';
import App from './App.vue';
import './index.css';
import Fee from "./components/Fee.vue";
import Fee2 from "./components/Fee2.vue";

import { createWebHistory, createRouter } from "vue-router";


const history = createWebHistory();
const router = createRouter({
    history: history,
    routes:[
        {path: "/", component:Fee},
        {path:"/xxx", component:Fee2}
    ]
})
const app = createApp(App);
app.use(router);
app.mount("#app");
