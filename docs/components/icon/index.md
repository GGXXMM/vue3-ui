# 图标-icon
## 基本用法
设置图标字体中 name 或者远程资源地址url 即可使用图标。
::: demo
  ```vue
  <template>
    <u-icon name="https://vitejs.cn/vite3-cn/logo.svg" :size="25"></u-icon>
  </template>
  ```
:::

## svg 图标
设置 component 可以显示 svg 图标
::: demo
  ```vue
  <template>
    <u-icon component="react" :size="25">
  </template>
  ```
:::