import { defineComponent as d, openBlock as m, createElementBlock as f, normalizeClass as y, createElementVNode as b, renderSlot as _ } from "vue";
const $ = ["primary", "success ", "warning ", "danger", "info", "text"], S = ["medium", "small ", "mini"], g = {
  disabled: {
    type: Boolean,
    default: !1
  },
  round: {
    type: Boolean,
    default: !1
  },
  icon: {
    type: String
  },
  onClick: {
    type: Function
  },
  type: {
    type: String,
    default: "default",
    validator: (t) => $.includes(t)
  },
  loading: {
    type: Boolean,
    default: !1
  },
  color: {
    type: String
  },
  size: {
    type: String,
    default: "medium",
    validator: (t) => S.includes(t)
  }
}, i = "sy", k = "is-", u = (t, e, n, o, s) => {
  let l = `${t}-${e}`;
  return n && (l += `-${n}`), o && (l += `__${o}`), s && (l += `--${s}`), l;
}, B = (t) => {
  const e = t;
  return {
    b: (c = "") => u(i, e, c),
    e: (c) => {
    },
    m: (c) => c ? u(i, e, "", "", c) : "",
    be: () => {
    },
    em: () => {
    },
    bm: () => {
    },
    bem: () => {
    },
    is: (c, p = !0) => c && p ? `${k}${c}` : ""
  };
}, v = d({
  name: "SyButton",
  props: g,
  setup(t) {
    const { type: e, onClick: n } = t, o = B("btn"), s = (a, r) => {
      a(r);
    };
    return { type: e, ns: o, handleClick: (a) => {
      s(n, a);
    } };
  }
});
const C = (t, e) => {
  const n = t.__vccOpts || t;
  for (const [o, s] of e)
    n[o] = s;
  return n;
};
function h(t, e, n, o, s, l) {
  return m(), f("button", {
    onclick: "handleClick",
    class: y([t.ns.b(), t.ns.m(t.type)])
  }, [
    b("span", null, [
      _(t.$slots, "default")
    ])
  ], 2);
}
const N = /* @__PURE__ */ C(v, [["render", h]]), z = (t) => (t.install = (e) => {
  e.component(t.name, t);
}, t), w = z(N);
export {
  w as SyButton
};
