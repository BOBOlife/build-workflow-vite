import { link } from 'fs'
import { text } from 'stream/consumers'
import { DefaultTheme, defineConfig } from 'vitepress'

export default defineConfig({
  // lang: "zh-CN",
  title: 'Hello UI',
  description: '搭建UI组件库',
  themeConfig: {
    sidebar: getSideBar()
  }
})

function getSideBar(): DefaultTheme.Sidebar {
  return [
    {
      text: 'Hello UI',
      collapsible: true,
      items: [
        {
          text: '快速开始',
          link: '/'
        }
      ]
    },
    {
      text: 'Button按钮',
      collapsible: true,
      items: [
        {
          text: '基础按钮',
          link: '/components/button/'
        }
      ]
    }
  ]

}