import { App } from "vue"
import { Vue3UIOption, installComponent } from "@pc-vue3-ui/utils"
import Tree from "./src/tree"

// 具名导出
export { Tree }

// 导出插件
export default {
  install(app: App, options?: Vue3UIOption) {
    installComponent(app, Tree, options)
  }
}
