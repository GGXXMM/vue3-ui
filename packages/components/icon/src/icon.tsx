import { PropType, computed, defineComponent } from "vue"
export default defineComponent({
  name: "UIcon",
  props: {
    name: {
      type: String,
      default: ""
    },
    prefix: {
      type: String,
      default: "icon"
    },
    size: {
      type: [String, Number] as PropType<string | number>,
      default: "inherit"
    },
    color: {
      type: String,
      default: "inherit"
    },
    component: {
      type: String,
      default: null
    }
  },
  setup(props, { attrs }) {
    // 获取尺寸
    const iconSize = computed(() => {
      return typeof props.size === "number" ? `${props.size}px` : props.size
    })
    // 图片显示 <img src="">
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
    // 字体显示 <i class="">
    const fontIcon = (
      <span
        class={[props.prefix, props.prefix + "-" + props.name]}
        style={{ fontSize: iconSize.value, color: props.color }}
      ></span>
    )

    // svg 显示
    const svgIcon = (
      <svg
        class="icon"
        style={{ width: iconSize.value, height: iconSize.value }}
      >
        <use
          xlink:href={`#${props.prefix}-${props.component}`}
          fill={props.color}
        ></use>
      </svg>
    )

    const icon = props.component
      ? svgIcon
      : /http|https/.test(props.name)
      ? imgIcon
      : fontIcon // 正则检测 prop.name 是否为网络链接，还是 fontIcon 类名
    return () => icon
  }
})
