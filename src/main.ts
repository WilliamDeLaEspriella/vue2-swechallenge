import './assets/main.css'
import Skeleton from '@brayamvalero/vue3-skeleton'
import '@brayamvalero/vue3-skeleton/dist/style.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(Skeleton)
app.use(createPinia())
app.use(router)

app.mount('#app')
