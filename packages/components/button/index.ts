import { App } from "vue"
import { Vue3UIOption, installComponent } from "@vue3-ui/utils"
import Button from "./src/button"

// 具名导出
export { Button }

// 导出插件
export default {
  install(app: App, options?: Vue3UIOption) {
    installComponent(app, Button, options)
  }
}
