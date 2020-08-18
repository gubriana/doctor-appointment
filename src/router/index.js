import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from '@/components/Login';
import DoctorAppointment from '@/components/DoctorAppointment';
import ReservarHora from '@/components/ReservarHora';
import NoEncontrada from '@/components/NoEncontrada';

Vue.use(VueRouter); 

const router = new VueRouter({
    routes: [
        {
            path: '/', 
            component: DoctorAppointment,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/login',
            component: Login
        },
        {
            path: '/reservar', 
            component: ReservarHora,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '*',
            component: NoEncontrada
        }
    ]
})

export default router;