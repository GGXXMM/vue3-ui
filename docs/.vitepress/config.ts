import { defineConfig } from 'vitepress'
// import vueJsx from '@vitejs/plugin-vue-jsx'
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Vue3 UI",
  description: "A UI Framework base on Vue3",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Docs", link: "/components/button/" }
    ],

    sidebar: [
      {
        text: "通用",
        items: [
          { text: "按钮 Button", link: "/components/button/" },
          { text: "树形控件 Tree", link: "/components/tree/" },
          { text: "图标 Icon", link: "/components/icon/" }
        ]
      }
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/GGXXMM/vue3-ui" }
    ]
  },
  markdown: {
    config(md) {
      // 这里可以使用markdown-it插件
      const { demoBlockPlugin } = require('vitepress-theme-demoblock')
      md.use(demoBlockPlugin, {
        cssPreprocessor: 'scss'
      })
    }
  }
})
