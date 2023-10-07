;(function (r, n) {
  typeof exports == "object" && typeof module < "u"
    ? n(exports, require("vue"))
    : typeof define == "function" && define.amd
    ? define(["exports", "vue"], n)
    : ((r = typeof globalThis < "u" ? globalThis : r || self),
      n((r["pc-vue3-ui"] = {}), r.vue))
})(this, function (r, n) {
  "use strict"
  const d = "u",
    f = "_Vue3UI",
    g = (e, t, s) => {
      y(e, s), e.component(t.name, t)
    },
    y = (e, t = { classPrefix: d }) => {
      e.config.globalProperties[f] = {
        ...(e.config.globalProperties[f] ?? {}),
        classPrefix: t.classPrefix
      }
    },
    m = e => `${d}-${e}`,
    C = {
      type: { type: String, default: "default" },
      size: { type: String, default: "default" },
      disabled: { type: Boolean, default: !1 },
      tag: { type: String, default: "button" },
      onClick: { type: Function }
    }
  function S(e) {
    return (
      typeof e == "function" ||
      (Object.prototype.toString.call(e) === "[object Object]" && !n.isVNode(e))
    )
  }
  const p = n.defineComponent({
      name: "UButton",
      props: C,
      setup(e, { slots: t }) {
        const { type: s, size: i, disabled: a } = n.toRefs(e),
          o = m("button"),
          l = n.computed(() => [
            o,
            `${o}--${s.value}`,
            `${o}--${i.value}`,
            a.value ? "is-disabled" : ""
          ])
        return () => {
          const { tag: c } = e,
            u = t.default ? t.default() : "按钮"
          return n.createVNode(
            c,
            { disabled: a.value, class: l.value },
            S(u) ? u : { default: () => [u] }
          )
        }
      }
    }),
    P = { data: { type: Object, required: !0 } }
  function b(e = [], t = 0, s = null) {
    return (
      t++,
      e.reduce((i, a) => {
        const o = { ...a }
        if (((o.level = t), (o.parentId = s), o.children)) {
          const l = o.id,
            c = b(o.children, t, l)
          return delete o.children, i.concat(o, c)
        } else return (o.isLeaf = !0), i.concat(o)
      }, [])
    )
  }
  function h(e) {
    return { innerData: b(n.unref(e)) }
  }
  const T = [
      p,
      n.defineComponent({
        name: "UTree",
        props: P,
        setup(e, { slots: t }) {
          const { innerData: s } = h(e.data)
          return () =>
            n.createVNode("div", { class: "u-tree" }, [
              s.map(i =>
                n.createVNode(
                  "div",
                  { style: { paddingLeft: `${10 * (i.level - 1)}px` } },
                  [i.label]
                )
              )
            ])
        }
      })
    ],
    I = {
      install(e, t) {
        T.forEach(s => {
          g(e, s, t)
        })
      }
    }
  ;(r.Button = p),
    (r.default = I),
    Object.defineProperties(r, {
      __esModule: { value: !0 },
      [Symbol.toStringTag]: { value: "Module" }
    })
})
