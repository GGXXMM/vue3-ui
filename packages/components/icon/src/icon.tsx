import { PropType, computed, defineComponent } from "vue"
export default defineComponent({
  name: "UIcon",
  props: {
    name: {
      type: String,
      default: ""
    },
    size: {
      type: [String, Number] as PropType<string | number>,
      default: "inherit"
    },
    color: {
      type: String,
      default: "inherit"
    }
  },
  setup(props, { attrs }) {
    // 获取尺寸
    const iconSize = computed(() => {
      return typeof props.size === "number" ? `${props.size}px` : props.size
    })
    const imgIcon = (
      <img
        src={props.name}
        {...attrs}
        style={{
          width: iconSize.value,
          verticalAlign: "middle"
        }}
      />
    )
    const fontIcon = (
      <i
        class={["u-icon-" + props.name]}
        style={{
          fontSize: iconSize.value,
          color: props.color
        }}
      ></i>
    )
    const icon = /http|https/.test(props.name) ? imgIcon : fontIcon
    return () => icon
  }
})
