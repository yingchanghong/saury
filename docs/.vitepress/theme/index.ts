import theme from 'vitepress/theme'
import * as components from '@saury/components';
import demo from 'vitepress-theme-demoblock/dist/client/components/Demo.vue';
import DemoBlock from 'vitepress-theme-demoblock/dist/client/components/DemoBlock.vue';
import 'vitepress-theme-demoblock/dist/theme/styles/index.css'
import '@saury/theme-chalk';
import './index.css'
// import 'unocss'

export default {
  ...theme,
  enhanceApp({ app }) {
    // eslint-disable-next-line no-restricted-syntax
    for (const name of Object.keys(components)) {
      if (name.startsWith('S'))
        app.component(name, components[name])
    }
    app.component('Demo', demo)
    app.component('DemoBlock',DemoBlock)
  },
}
