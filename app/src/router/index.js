import Vue from 'vue';
import Router from 'vue-router';
import ItemList from '../components/List_Projects.vue';
import Register from '../components/Register.vue';
import Login from '../components/Login.vue';
import List_job from '../components/List_job.vue';

Vue.use(Router);

const router = new Router({
    mode: 'history',
    routes: [{
            path: '/',
            redirect: '/login'
        },
        {
            path: '/register',
            name: 'Register',
            component: Register
        },
        {
            path: '/login',
            name: 'Login',
            component: Login
        },
        {
            path: '/projects',
            name: 'ItemList',
            component: ItemList,
            meta: { requiresAuth: true }
        },
        {
            path: '/jobs',
            name: 'Listjob',
            component: List_job,
            meta: { requiresAuth: true }
        }
    ]
});

// Navigation guard to check if user is logged in before accessing routes that require authentication
router.beforeEach((to, from, next) => {
    const isLoggedIn = JSON.parse(localStorage.getItem('isLoggedIn')) || false;

    // If the route requires authentication and the user is not logged in, redirect to login
    if (to.matched.some(record => record.meta.requiresAuth) && !isLoggedIn) {
        next('/login');
    } else {
        next();
    }
});

export default router;