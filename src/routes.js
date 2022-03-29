import Vue from 'vue';
import VueRouter from 'vue-router';


Vue.use(VueRouter);

const router = new VueRouter({
    moode: 'history',
    linkExactActiveClass: 'active',
    routes : [
        {
            path: '/',
            name: 'home',
            component: Home,
        }
    ]
});

export default router;