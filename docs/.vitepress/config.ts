import sidebar from './config/sidebar';
import demoblock from 'vitepress-theme-demoblock'

export default {
  title: "sauryUI",
  base: "/saury/",
  description: "vue3 ui",
  themeConfig: {
    logo: "/logo/svg",
    nav: [
      { text: "指南", link: "/guide/install" },
      { text: "组件", link: "/document/button" },
      { text: "关于", link: "/about/" },
    ],
    sidebar,
  },
  markdown: {
    lineNumbers: true,
    config(md) {
      md.use(demoblock,{customClass: 'demoblock-custom'})
    }
  }
};