import { createApp } from 'vue'
import App from './app.vue'
import { SyButton } from '@saury/components'
// import { SyButton } from 'saury-ui'
import '@saury/theme-chalk'
var a = 12
const app = createApp(App)
app.use(SyButton)
app.mount('#app')
