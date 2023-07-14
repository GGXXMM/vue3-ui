;(function (o, t) {
  typeof exports == "object" && typeof module < "u"
    ? t(exports, require("vue"))
    : typeof define == "function" && define.amd
    ? define(["exports", "vue"], t)
    : ((o = typeof globalThis < "u" ? globalThis : o || self),
      t((o["pc-vue3-ui"] = {}), o.vue))
})(this, function (o, t) {
  "use strict"
  const i = "u",
    a = "_Vue3UI",
    d = (e, n, s) => {
      r(e, s), e.component(n.name, n)
    },
    r = (e, n = { classPrefix: i }) => {
      e.config.globalProperties[a] = {
        ...(e.config.globalProperties[a] ?? {}),
        classPrefix: n.classPrefix
      }
    },
    p = e => `${i}-${e}`,
    b = {
      type: { type: String, default: "default" },
      size: { type: String, default: "default" },
      disabled: { type: Boolean, default: !1 },
      tag: { type: String, default: "button" },
      onClick: { type: Function }
    }
  function g(e) {
    return (
      typeof e == "function" ||
      (Object.prototype.toString.call(e) === "[object Object]" && !t.isVNode(e))
    )
  }
  const c = t.defineComponent({
      name: "UButton",
      props: b,
      setup(e, { slots: n }) {
        const { type: s, size: C, disabled: f } = t.toRefs(e),
          l = p("button"),
          S = t.computed(() => [
            l,
            `${l}--${s.value}`,
            `${l}--${C.value}`,
            f.value ? "is-disabled" : ""
          ])
        return () => {
          const { tag: P } = e,
            u = n.default ? n.default() : "按钮"
          return t.createVNode(
            P,
            { disabled: f.value, class: S.value },
            g(u) ? u : { default: () => [u] }
          )
        }
      }
    }),
    y = [c],
    m = {
      install(e, n) {
        y.forEach(s => {
          d(e, s, n)
        })
      }
    }
  ;(o.Button = c),
    (o.default = m),
    Object.defineProperties(o, {
      __esModule: { value: !0 },
      [Symbol.toStringTag]: { value: "Module" }
    })
})
