import { createRouter, createWebHistory } from 'vue-router';

import CsvJsonFormatView from './components/files/csv/JsonFormat.vue';

import CsvTableFormatView from './components/files/csv/TableFormat.vue';

import PrnFileView from './components/files/PrnFile.vue'

const router = createRouter({ 
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/files/csv/table" },
    { path: '/files', children: [
      { path: 'csv', children: [
        { path: 'json', component: CsvJsonFormatView },
        { path: 'table', component: CsvTableFormatView },
      ]},
      { path: 'prn', component: PrnFileView },
    ] }
  ],
  linkActiveClass: 'active'
});

export default router;