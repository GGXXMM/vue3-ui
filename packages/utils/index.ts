import type { App } from "vue"

const CLASS_PREFIX = "u"
const GLOBAL_CONFIG_NAME = "_Vue3UI"
export interface Vue3UIOption {
  classPrefix?: string
  componentPrefix?: string
}

// 注册插件
export const installComponent = (
  app: App,
  component: any,
  options?: Vue3UIOption
) => {
  setGlobalConfig(app, options)
  app.component(component.name, component)
}

// 注入全局app属性
export const setGlobalConfig = (
  app: App,
  options: Vue3UIOption = { classPrefix: CLASS_PREFIX }
) => {
  app.config.globalProperties[GLOBAL_CONFIG_NAME] = {
    ...(app.config.globalProperties[GLOBAL_CONFIG_NAME] ?? {}),
    classPrefix: options.classPrefix
  }
}

// 拼装组件className
export const getComponentCls = (componentName: string): string =>
  `${CLASS_PREFIX}-${componentName}`
