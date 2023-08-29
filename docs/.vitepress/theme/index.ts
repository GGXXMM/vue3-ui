import Theme from 'vitepress/theme'
import './demo-block.scss'
import { registerComponents } from './register-components'
import Vue3UI from '@pc-vue3-ui/components'
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
