
import Home from "./views/Home.vue";
import Doc from "./views/Doc.vue";
import Switch from "./components/Switch.vue";
import Dialog from "./components/Dialog.vue";
import Button from "./components/Button.vue";
import Tabs from "./components/Tabs.vue";
import DefaultDoc from "./components/DefaultDoc.vue";
import { createWebHistory, createRouter } from "vue-router";


const history = createWebHistory();
export const router = createRouter({
    history: history,
    routes:[
        {path: "/", component:Home},
        {path:"/doc", component:Doc,
            children:[
                {path:"", component:DefaultDoc},
                {path:"switch", component:Switch},
                {path:"button", component:Button},
                {path:"tabs", component:Tabs},
                {path:"dialog", component:Dialog},
            ]
        },
    ]
})
