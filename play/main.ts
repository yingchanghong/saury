import { createApp } from 'vue'
import App from './app.vue'
import { SyButton, SyIcon, SyTab } from '@saury/components'
import SvgIcon from './src/components/SvgIcon/index.vue'
import '@saury/icon'
// import { SyButton } from 'saury-ui'
import '@saury/theme-chalk'
const app = createApp(App)
app.use(SyButton)
app.use(SyIcon)
app.use(SyTab)
app.component('svg-icon', SvgIcon) // 注册称为全局组件
app.mount('#app')
