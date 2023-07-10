import { ref, defineComponent, withModifiers } from "vue"
// 1. 函数组件
// export default () => <div>test</div>

// 2. defineComponent
// export default defineComponent({
//   render() {
//     return <div>test</div>
//   }
// })

// 3. defineComponent({setup(){}})
// 摒弃this
// vue独特概念：修饰符、slots、directive、emit
export default defineComponent({
  name: "Test",
  directives: {
    focus: {
      mounted(el) {
        el.focus()
      }
    }
  },
  emits: ["click"],
  setup(props, { slots, emit }) {
    const list = ref<string[]>(["a", "b", "c"])
    const count = ref(0)
    const inc = () => {
      count.value++
      emit("click")
    }
    return () => {
      return (
        <div>
          <input type="text" v-focus v-model={count.value} />
          {/* v-for循环 */}
          <ul>
            {list.value.map(str => (
              <li key={str}>{str}</li>
            ))}
          </ul>
          {/* 修饰符：等价于 v-on:click.self */}
          <div onClick={withModifiers(inc, ["self"])}>test: {count.value}</div>
          {/* 默认插槽 */}
          <div>{slots.default ? slots.default() : "default slots"}</div>
          {/* 具名插槽 */}
          <div>{slots.title ? slots.title() : "title slots"}</div>
        </div>
      )
    }
  }
})
