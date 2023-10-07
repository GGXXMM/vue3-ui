import Theme from 'vitepress/theme'
import './demo-block.scss'
import "@pc-vue3-ui/theme-chalk/src/index.scss"
import Vue3UI from '@pc-vue3-ui/components'
import { registerComponents } from './register-components'
import type {App} from 'vue'

export default {
  ...Theme,
  // 扩展应用程序实例
  enhanceApp({app}: {app:App<never>}) {
    // 注册组件
    registerComponents(app)
    app.use(Vue3UI)
  }
}
