import Theme from 'vitepress/theme'
import Demo from 'vitepress-theme-demoblock/components/Demo.vue'
import DemoBlock from 'vitepress-theme-demoblock/components/DemoBlock.vue'
import type {App} from 'vue'

export default {
  ...Theme,
  // 扩展应用程序实例
  enhanceApp({app}:{app:App<never>}) {
    // 注册组件
    app.component('Demo', Demo)
    app.component('DemoBlock', DemoBlock)
  }
}
