// Dipendenza

import Vue from 'vue';
import VueRouter from 'vue-router';


//Componenti per rotte
import Servizi from './components/Servizi.vue'
import Jumbo from './components/Jumbo.vue'
import Presentazione from './components/Presentazione.vue'
import Download from './components/Download.vue'


Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    linkExactActiveClass: 'active',
    routes : [
        {
            path: '/',
            name: 'jumbo',
            component: Jumbo,
        },
        {
            path: '/servizi',
            name: 'servizi',
            component: Servizi,
        },
        {
            path: '/presentazione',
            name: 'presentazione',
            component: Presentazione,
        },
        {
            path: '/letture',
            name: 'letture',
            component: Download,
        },
        // {
        //     path: '/servizi',
        //     name: 'servizi',
        //     component: Servizi,
        // }
    ]
});

export default router;