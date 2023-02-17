import { createRouter, createWebHistory } from 'vue-router';

import FilesList2View from './components/files/FilesList2.vue';

import FilesListView from './components/files/FilesList.vue'

const router = createRouter({ 
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/files/csv" },
    { path: '/files', children: [
      { path: 'csv', component: FilesList2View, name: 'readCsv' },
      { path: 'prn', component: FilesListView, name: 'readPrn' },
    ] }
  ],
  linkActiveClass: 'active'
});

export default router;