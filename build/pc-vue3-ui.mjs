import { defineComponent as d, toRefs as b, computed as g, createVNode as u, isVNode as m, unref as y } from "vue";
const f = "u", i = "_Vue3UI", C = (e, t, o) => {
  P(e, o), e.component(t.name, t);
}, P = (e, t = { classPrefix: f }) => {
  e.config.globalProperties[i] = {
    ...e.config.globalProperties[i] ?? {},
    classPrefix: t.classPrefix
  };
}, S = (e) => `${f}-${e}`, I = {
  type: {
    type: String,
    default: "default"
  },
  size: {
    type: String,
    default: "default"
  },
  disabled: {
    type: Boolean,
    default: !1
  },
  tag: {
    type: String,
    default: "button"
  },
  onClick: {
    type: Function
  }
};
function $(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !m(e);
}
const v = /* @__PURE__ */ d({
  name: "UButton",
  props: I,
  setup(e, {
    slots: t
  }) {
    const {
      type: o,
      size: s,
      disabled: r
    } = b(e), n = S("button"), a = g(() => [n, `${n}--${o.value}`, `${n}--${s.value}`, r.value ? "is-disabled" : ""]);
    return () => {
      const {
        tag: l
      } = e, c = t.default ? t.default() : "按钮";
      return u(l, {
        disabled: r.value,
        class: a.value
      }, $(c) ? c : {
        default: () => [c]
      });
    };
  }
}), x = {
  data: {
    type: Object,
    required: !0
  }
};
function p(e = [], t = 0, o = null) {
  return t++, e.reduce((s, r) => {
    const n = { ...r };
    if (n.level = t, n.parentId = o, n.children) {
      const a = n.id, l = p(n.children, t, a);
      return delete n.children, s.concat(n, l);
    } else
      return n.isLeaf = !0, s.concat(n);
  }, []);
}
function h(e) {
  return {
    innerData: p(y(e))
  };
}
const L = /* @__PURE__ */ d({
  name: "UTree",
  props: x,
  setup(e, {
    slots: t
  }) {
    const {
      innerData: o
    } = h(e.data);
    return () => u("div", {
      class: "u-tree"
    }, [o.map((s) => u("div", {
      style: {
        paddingLeft: `${10 * (s.level - 1)}px`
      }
    }, [s.label]))]);
  }
}), O = [v, L], j = {
  install(e, t) {
    O.forEach((o) => {
      C(e, o, t);
    });
  }
};
export {
  v as Button,
  j as default
};
