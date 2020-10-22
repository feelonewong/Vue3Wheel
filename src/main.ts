import { createApp } from 'vue';
import App from './App.vue';
import './index.css';
import Fee from "./components/Fee.vue";
import { createWebHistory, createRouter } from "vue-router";


const history = createWebHistory();
const router = createRouter({
    history: history,
    routes:[
        {path: "/", component:Fee}
    ]
})
const app = createApp(App);
app.use(router);
app.mount("#app");
