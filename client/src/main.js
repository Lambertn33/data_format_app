import { createApp } from 'vue';

import App from './App.vue';

import router from './router';

import store from './store';

import TheHeader from './components/reusable/TheHeader.vue';

import TheNavbar from './components/reusable/TheNavbar.vue';

import TheSpinner from './components/reusable/TheSpinner.vue';

import TheTable from './components/reusable/TheTable.vue';

import "bootstrap/dist/css/bootstrap.min.css";

import 'bootstrap/dist/js/bootstrap.bundle';

const app = createApp(App);

app.component('the-header', TheHeader);

app.component('the-navbar', TheNavbar);

app.component('the-table', TheTable);

app.component('the-spinner', TheSpinner);

app.use(router);

app.use(store);

app.mount('#app');
