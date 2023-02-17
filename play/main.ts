import { createApp } from 'vue'
import App from './app.vue'
import { SyButton } from '@saury/components'


const app = createApp(App)
app.use(SyButton)
app.mount('#app')
