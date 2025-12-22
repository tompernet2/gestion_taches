import { createRouter, createWebHistory } from 'vue-router';
import Index from '../views/Index.vue';
import Create from '../views/Create.vue';

const routes = [
  { path: '/', name: 'Index', component: Index },
  { path: '/create', name: 'Create', component: Create },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
