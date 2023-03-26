import { createApp } from 'vue'
import App from './app.vue'
import { SyButton, SyIcon } from '@saury/components'
// import 'virtual:svg-icons-register'
import SvgIcon from './src/components/SvgIcon/index.vue'
// import { SyButton } from 'saury-ui'
import '@saury/theme-chalk'
var a = 12
const app = createApp(App)
app.use(SyButton)
app.use(SyIcon)
app.component('svg-icon', SvgIcon) // 注册称为全局组件
app.mount('#app')
