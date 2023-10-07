;(function (r, o) {
  typeof exports == "object" && typeof module < "u"
    ? o(exports, require("vue"))
    : typeof define == "function" && define.amd
    ? define(["exports", "vue"], o)
    : ((r = typeof globalThis < "u" ? globalThis : r || self),
      o((r.index = {}), r.vue))
})(this, function (r, o) {
  "use strict"
  const a = "u",
    c = "_Vue3UI",
    l = (e, n, i) => {
      f(e, i), e.component(n.name, n)
    },
    f = (e, n = { classPrefix: a }) => {
      e.config.globalProperties[c] = {
        ...(e.config.globalProperties[c] ?? {}),
        classPrefix: n.classPrefix
      }
    },
    p = { data: { type: Object, required: !0 } }
  function d(e = [], n = 0, i = null) {
    return (
      n++,
      e.reduce((s, T) => {
        const t = { ...T }
        if (((t.level = n), (t.parentId = i), t.children)) {
          const b = t.id,
            h = d(t.children, n, b)
          return delete t.children, s.concat(t, h)
        } else return (t.isLeaf = !0), s.concat(t)
      }, [])
    )
  }
  function g(e) {
    return { innerData: d(o.unref(e)) }
  }
  const u = o.defineComponent({
      name: "UTree",
      props: p,
      setup(e, { slots: n }) {
        const { innerData: i } = g(e.data)
        return () =>
          o.createVNode("div", { class: "u-tree" }, [
            i.map(s =>
              o.createVNode(
                "div",
                { style: { paddingLeft: `${10 * (s.level - 1)}px` } },
                [s.label]
              )
            )
          ])
      }
    }),
    P = {
      install(e, n) {
        l(e, u, n)
      }
    }
  ;(r.Tree = u),
    (r.default = P),
    Object.defineProperties(r, {
      __esModule: { value: !0 },
      [Symbol.toStringTag]: { value: "Module" }
    })
})
