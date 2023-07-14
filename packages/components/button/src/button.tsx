import { computed, defineComponent, toRefs } from "vue"
import { buttonProps, ButtonProps } from "./button-type"
import { getComponentCls } from "@pc-vue3-ui/utils"

export default defineComponent({
  name: "UButton",
  props: buttonProps,
  setup(props: ButtonProps, { slots }) {
    const { type, size, disabled } = toRefs(props)
    // class处理
    const prefixCls = getComponentCls("button")
    const classes = computed(() => [
      prefixCls,
      `${prefixCls}--${type.value}`,
      `${prefixCls}--${size.value}`,
      disabled.value ? "is-disabled" : ""
    ])
    return () => {
      const { tag: Component } = props
      const defaultSlot = slots.default ? slots.default() : "按钮"
      return (
        <Component disabled={disabled.value} class={classes.value}>
          {defaultSlot}
        </Component>
      )
    }
  }
})
