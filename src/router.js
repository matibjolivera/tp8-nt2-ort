import Vue from 'vue'
import VueRouter from 'vue-router'
import Form from "./components/Form";
import Users from "./components/Users";

Vue.use(VueRouter)

export const router = new VueRouter({
    mode: "history",
    routes: [
        {path: '/form', component: Form},
        {path: '/users', component: Users},
    ]
})