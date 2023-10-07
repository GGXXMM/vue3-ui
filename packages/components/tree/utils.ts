import { ITreeNode, IInnerTreeNode } from "./src/tree-type"

export function generateInnerTree(
  tree = [] as ITreeNode[],
  level = 0, // 当前数据所在层级
  parentId = null as number | null
): IInnerTreeNode[] {
  level++
  return tree.reduce((prev, cur) => {
    const o = { ...cur } as IInnerTreeNode
    o.level = level
    o.parentId = parentId
    // 先将数据拍平（树形 -> 扁平）
    if (o.children) {
      const parentId = o.id
      const childrens = generateInnerTree(o.children, level, parentId)
      delete o.children
      return prev.concat(o, childrens)
    } else {
      // 叶子节点
      o.isLeaf = true
      return prev.concat(o)
    }
  }, [] as IInnerTreeNode[])
}
