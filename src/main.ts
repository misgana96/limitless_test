import './assets/main.css'
import './assets/all.min.css'
import './assets/inter.css'
import './assets/styles.min.css'
import { createApp } from 'vue'
import router from './router'
import { createPinia } from 'pinia'
import App from '@/App.vue'

createApp(App)
.use(createPinia)
.use(router)
.mount('#app')
