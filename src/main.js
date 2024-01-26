import { createApp } from 'vue';
import App from './App.vue';
import HomeScreen from './screens/HomeScreen.vue';
import DetailScreen from './screens/DetailScreen.vue';
import CreateRecipe from './screens/CreateRecipe.vue';
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: HomeScreen },
    { path: '/recipes/:id', component: DetailScreen, props: true },
    { path: '/recipes/create', component: CreateRecipe }
  ]
});

const app = createApp(App);
app.use(router);
app.mount('#app');
