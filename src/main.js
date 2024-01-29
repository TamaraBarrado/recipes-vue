import { createApp } from 'vue';
import App from './App.vue';
import HomeScreen from './components/HomeScreen.vue';
import DetailScreen from './components/DetailScreen.vue';
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: HomeScreen },
    { path: '/recipes/:id', component: DetailScreen, props: true },
  ]
});

const app = createApp(App);
app.use(router);
app.mount('#app');
