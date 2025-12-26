import { createRouter, createWebHistory } from 'vue-router';
import Index from '../views/Index.vue';
import Create from '../views/Create.vue';
import Register from '../views/Register.vue';
import Affecter from '../views/Affecter.vue';

const routes = [
  { path: '/', name: 'Index', component: Index },
  { path: '/create', name: 'Create', component: Create },
  { path: '/register', name: 'Register', component: Register },
  { path: '/affecter', name: 'Affecter', component: Affecter },

];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
