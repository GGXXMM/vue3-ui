import { computed, defineComponent } from "vue"
import UIcon from "../../icon/src/icon"
import { IInnerTreeNode, TreeProps, treeProps } from "./tree-type"
import { useTree } from "../hooks/useTree"

export default defineComponent({
  name: "UTree",
  props: treeProps,
  setup(props: TreeProps, { slots }) {
    const { innerData } = useTree(props.data)
    // 展开/折叠
    const toggleNode = (node: IInnerTreeNode) => {
      console.log("toggle:", node)
      const cur = innerData.value.find(item => item.id === node.id)
      if (cur) {
        cur.expanded = !cur.expanded
      }
    }
    // 获取展开列表数据（排除掉折叠子节点）
    const expandData = computed(() => {
      let excludeNodes: IInnerTreeNode[] = []
      let result = []
      for (let item of innerData.value) {
        // 判断当前数据是否在排除列表
        if (excludeNodes.includes(item)) {
          continue
        }
        // 当前节点处于折叠状态，它的子节点要被排除
        if (item.expanded !== true) {
          excludeNodes = getChildren(item)
        }
        result.push(item)
      }
      return result
    })
    const getChildren = (node: IInnerTreeNode) => {
      const startIndex = innerData.value.findIndex(item => item.id === node.id)
      let result = []
      // 找到node节点后面所有子节点（level更大的）
      for (
        let i = startIndex + 1;
        i < innerData.value.length && innerData.value[i].level > node.level;
        i++
      ) {
        result.push(innerData.value[i])
      }
      return result
    }
    return () => {
      return (
        <div class="u-tree">
          {expandData.value.map(item => (
            <div
              style={{
                paddingLeft: `${20 * (item.level - 1)}px`
              }}
            >
              {/* 1.折叠图标 */}
              {/* 判断是否是叶子节点，非叶子节点才有折叠图标 */}
              {item.isLeaf ? (
                <span style={{ display: "inline-block", width: "24px" }}></span>
              ) : (
                <span onClick={() => toggleNode(item)}>
                  <UIcon
                    name={item.expanded ? "caret-bottom" : "caret-right"}
                    size={14}
                    color="gray"
                  />
                </span>
              )}
              {/* 2.标签 */}
              {item.label}
            </div>
          ))}
        </div>
      )
    }
  }
})
