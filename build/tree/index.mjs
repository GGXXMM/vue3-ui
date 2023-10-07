import { unref as u, defineComponent as f, createVNode as s } from "vue";
const p = "u", a = "_Vue3UI", g = (e, n, r) => {
  P(e, r), e.component(n.name, n);
}, P = (e, n = { classPrefix: p }) => {
  e.config.globalProperties[a] = {
    ...e.config.globalProperties[a] ?? {},
    classPrefix: n.classPrefix
  };
}, m = {
  data: {
    type: Object,
    required: !0
  }
};
function c(e = [], n = 0, r = null) {
  return n++, e.reduce((o, i) => {
    const t = { ...i };
    if (t.level = n, t.parentId = r, t.children) {
      const l = t.id, d = c(t.children, n, l);
      return delete t.children, o.concat(t, d);
    } else
      return t.isLeaf = !0, o.concat(t);
  }, []);
}
function x(e) {
  return {
    innerData: c(u(e))
  };
}
const I = /* @__PURE__ */ f({
  name: "UTree",
  props: m,
  setup(e, {
    slots: n
  }) {
    const {
      innerData: r
    } = x(e.data);
    return () => s("div", {
      class: "u-tree"
    }, [r.map((o) => s("div", {
      style: {
        paddingLeft: `${10 * (o.level - 1)}px`
      }
    }, [o.label]))]);
  }
}), C = {
  install(e, n) {
    g(e, I, n);
  }
};
export {
  I as Tree,
  C as default
};
