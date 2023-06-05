import './assets/main.css'
import './assets/all.min.css'
import './assets/inter.css'
import './assets/styles.min.css'
import { createApp } from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {faCircleUser} from '@fortawesome/free-solid-svg-icons'
import PhosphorIcons from "@phosphor-icons/vue"
import router from './router'
import { createPinia } from 'pinia'
import App from '@/App.vue'

library.add(faCircleUser)
createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.use(createPinia)
.use(PhosphorIcons)
.use(router)
.mount('#app')
