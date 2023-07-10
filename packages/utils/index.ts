import type { App } from "vue"

const CLASS_PREFIX = "u"
export interface Vue3UIOption {
  componentPrefix?: string
}

// 注册插件
export const installComponent = (
  app: App,
  component: any,
  options?: Vue3UIOption
) => {
  app.component(component.name, component)
}

// 拼装组件className
export const getComponentCls = (componentName: string): string => {
  return `${CLASS_PREFIX}-${componentName}`
}
