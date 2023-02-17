import { createRouter, createWebHistory } from 'vue-router';

import FilesAddView from './components/files/FilesAdd.vue';

import FilesListView from './components/files/FilesList.vue'

const router = createRouter({ 
  history: createWebHistory(),
  routes: [
    { path: '/', component: FilesAddView },
    { path: '/register', component: FilesListView },
  ],
  linkActiveClass: 'active'
});

export default router;