import { createApp } from 'vue';

import App from './App.vue';

import router from './router';

import TheNavbar from './components/reusable/TheNavbar.vue';

import "bootstrap/dist/css/bootstrap.min.css";

import 'bootstrap/dist/js/bootstrap.bundle';

const app = createApp(App);

app.component('the-navbar', TheNavbar);

app.use(router);

app.mount('#app');
