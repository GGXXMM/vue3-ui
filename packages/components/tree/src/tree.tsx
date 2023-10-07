import { defineComponent, toRefs } from "vue"
import { TreeProps, treeProps } from "./tree-type"
import { useTree } from "../hooks/useTree"

export default defineComponent({
  name: "UTree",
  props: treeProps,
  setup(props: TreeProps, { slots }) {
    const { innerData } = useTree(props.data)
    return () => {
      return (
        <div class="u-tree">
          {innerData.map(item => (
            <div
              style={{
                paddingLeft: `${10 * (item.level - 1)}px`
              }}
            >
              {item.label}
            </div>
          ))}
        </div>
      )
    }
  }
})
