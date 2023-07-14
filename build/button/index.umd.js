;(function (o, t) {
  typeof exports == "object" && typeof module < "u"
    ? t(exports, require("vue"))
    : typeof define == "function" && define.amd
    ? define(["exports", "vue"], t)
    : ((o = typeof globalThis < "u" ? globalThis : o || self),
      t((o.index = {}), o.vue))
})(this, function (o, t) {
  "use strict"
  const u = "u",
    a = "_Vue3UI",
    c = (e, n, s) => {
      r(e, s), e.component(n.name, n)
    },
    r = (e, n = { classPrefix: u }) => {
      e.config.globalProperties[a] = {
        ...(e.config.globalProperties[a] ?? {}),
        classPrefix: n.classPrefix
      }
    },
    p = e => `${u}-${e}`,
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
  const d = t.defineComponent({
      name: "UButton",
      props: b,
      setup(e, { slots: n }) {
        const { type: s, size: m, disabled: f } = t.toRefs(e),
          l = p("button"),
          C = t.computed(() => [
            l,
            `${l}--${s.value}`,
            `${l}--${m.value}`,
            f.value ? "is-disabled" : ""
          ])
        return () => {
          const { tag: S } = e,
            i = n.default ? n.default() : "按钮"
          return t.createVNode(
            S,
            { disabled: f.value, class: C.value },
            g(i) ? i : { default: () => [i] }
          )
        }
      }
    }),
    y = {
      install(e, n) {
        c(e, d, n)
      }
    }
  ;(o.Button = d),
    (o.default = y),
    Object.defineProperties(o, {
      __esModule: { value: !0 },
      [Symbol.toStringTag]: { value: "Module" }
    })
})
