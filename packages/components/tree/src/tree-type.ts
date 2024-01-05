import { ExtractPropTypes, PropType } from "vue"

// 树形数据
export interface ITreeNode {
  label: string
  id: number
  children?: ITreeNode[] // 表示树形结构
  /**操作状态 */
  selected?: boolean // 是否选中
  checked?: boolean // 是否勾选
  expanded?: boolean // 是否展开/折叠：true展开、false 折叠
  /**禁用操作开关 */
  disableSelect?: boolean
  disableChecked?: boolean
  disableExpanded?: boolean
}

// 拍平数据
export interface IInnerTreeNode extends ITreeNode {
  parentId?: number | null // 父节点ID
  level: number // 当前数据层级（解决嵌套关系）
  isLeaf?: boolean // 是否是叶子节点
}

export const treeProps = {
  data: {
    type: Object as PropType<Array<ITreeNode>>,
    required: true
  }
} as const

export type TreeProps = ExtractPropTypes<typeof treeProps>
