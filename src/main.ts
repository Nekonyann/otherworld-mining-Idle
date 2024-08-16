import { createApp } from 'vue'
import '@/style/style.css'
import store from "./store";
import i18n from './locales'
import App from './App.vue'

import '@/style/index.scss'

//引入全局组件
// import globalComponent from '@/layout/components'

const app = createApp(App)
app
    .use(store)
    .use(i18n)
    .mount('#app')