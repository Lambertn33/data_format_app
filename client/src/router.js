import { createRouter, createWebHistory } from 'vue-router';

import CsvJsonFormatView from './components/files/csv/JsonFormat.vue';

import CsvTableFormatView from './components/files/csv/TableFormat.vue';

import PrnJsonFormatView from './components/files/prn-format/JsonFormat.vue';

import PrnTableFormatView from './components/files/prn-format/TableFormat.vue';


const router = createRouter({ 
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/files/csv/table" },
    { path: '/files', children: [
      { path: 'csv', children: [
        { path: 'json', component: CsvJsonFormatView },
        { path: 'table', component: CsvTableFormatView },
      ]},
      { path: 'prn', children: [
        { path: 'json', component: PrnJsonFormatView },
        { path: 'table', component: PrnTableFormatView },
      ]},
    ] }
  ],
  linkActiveClass: 'active'
});

export default router;