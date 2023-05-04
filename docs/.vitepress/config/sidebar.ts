export default {
  '/guide/': getGuideSidebar(),
  '/document/': getcomponentsSidebar(),
}

function getcomponentsSidebar() {
  return [
    {
      text: 'Basic 基础组件',
      collapsible: true,
      collapsed: true,
      items: [
        { text: 'Button', link: '/document/button' },
        { text: 'Input', link: '/document/input' },
      ],
    },
  ]
}

function getGuideSidebar() {
  return [
    {
      text: '基础',
      collapsible: true,
      collapsed: true,
      items: [
        { text: '安装', link: '/guide/install' },
        { text: '快速开始', link: '/guide/start' },
      ],
    },
  ]
}
