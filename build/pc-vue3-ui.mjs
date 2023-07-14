import { defineComponent as r, toRefs as d, computed as p, createVNode as b, isVNode as g } from "vue";
const c = "u", a = "_Vue3UI", m = (t, e, o) => {
  C(t, o), t.component(e.name, e);
}, C = (t, e = { classPrefix: c }) => {
  t.config.globalProperties[a] = {
    ...t.config.globalProperties[a] ?? {},
    classPrefix: e.classPrefix
  };
}, y = (t) => `${c}-${t}`, S = {
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
function P(t) {
  return typeof t == "function" || Object.prototype.toString.call(t) === "[object Object]" && !g(t);
}
const $ = /* @__PURE__ */ r({
  name: "UButton",
  props: S,
  setup(t, {
    slots: e
  }) {
    const {
      type: o,
      size: u,
      disabled: s
    } = d(t), n = y("button"), i = p(() => [n, `${n}--${o.value}`, `${n}--${u.value}`, s.value ? "is-disabled" : ""]);
    return () => {
      const {
        tag: f
      } = t, l = e.default ? e.default() : "按钮";
      return b(f, {
        disabled: s.value,
        class: i.value
      }, P(l) ? l : {
        default: () => [l]
      });
    };
  }
}), v = [$], _ = {
  install(t, e) {
    v.forEach((o) => {
      m(t, o, e);
    });
  }
};
export {
  $ as Button,
  _ as default
};
