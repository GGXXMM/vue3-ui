# 按钮 - Button

::: demo 使用`type`、`plain`、`circle`等属性来设置样式
```vue
<template>
  <div>
    <UButton>默认按钮</UButton>
    <UButton type="primary">主要按钮</UButton>
    <UButton type="success">成功按钮</UButton>
    <UButton type="info">信息按钮</UButton>
    <UButton type="warning">警告按钮</UButton>
    <UButton type="danger">危险按钮</UButton>
  </div>
</template>
```
:::

## Button Attributes

| Name              | Description                                                             | Type                                                                            | Default |
| ----------------- | ----------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------- |
| size              | button size                                                             | `'large'\| 'default'\| 'small'`                                          | —       |
| type              | button type                                                             |`'primary'\| 'success'\| 'warning'\| 'danger'\| 'info'\` | —       |
