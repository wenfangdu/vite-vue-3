import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/main.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

import { sample } from 'lodash-es'

const a = sample([1]) // 👈 this can't be `undefined` even though `strictNullChecks` is on

console.log(+a)
