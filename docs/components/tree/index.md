# 树形控件-Tree

## 基础用法

::: demo 使用样例
```vue
  <template>
    <div>
      <u-tree :data="treeData"></u-tree>
    </div>
  </template>
  <script setup lang="ts">
  import { ref } from 'vue'
  interface ITreeNode {
    label: string
    id: number
    children?: ITreeNode[] // 表示树形结构
    /**操作状态 */
    selected?: boolean // 是否选中
    checked?: boolean // 是否勾选
    expanded?: boolean // 是否展开
    /**禁用操作开关 */
    disableSelect?: boolean
    disableChecked?: boolean
    disableExpanded?: boolean
  }
  const treeData = ref<ITreeNode[]>([
    {
      id: 1,
      label: "父节点",
      children: [
        {
          id: 2,
          label: "子节点1",
          children: [
            {
              id: 3,
              label: "子节点1_1"
            }
          ]
        }
      ]
    }
  ])
  </script>
```
:::
