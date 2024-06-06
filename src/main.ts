import { createPinia } from 'pinia';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './style.css';

// 实例化 Pinia
const pinia = createPinia();
const app = createApp(App);

app.use(router).use(pinia).mount('#app');
