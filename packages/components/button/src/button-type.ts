import { ExtractPropTypes, PropType } from "vue"
export type buttonType =
  | "default"
  | "primary"
  | "success"
  | "info"
  | "warning"
  | "danger"

export type buttonSize = "small" | "default" | "large"

export const buttonProps = {
  type: {
    type: String as PropType<buttonType>,
    default: "default"
  },
  size: {
    type: String as PropType<buttonSize>,
    default: "default"
  },
  disabled: {
    type: Boolean,
    default: false
  },
  tag: {
    type: String as PropType<keyof HTMLElementTagNameMap>,
    default: "button"
  },
  onClick: {
    type: Function
  }
}

export type ButtonProps = ExtractPropTypes<typeof buttonProps>
