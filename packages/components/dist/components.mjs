import { defineComponent as k, computed as r, openBlock as u, createElementBlock as p, normalizeClass as B, createElementVNode as g, renderSlot as C, unref as d, normalizeStyle as x } from "vue";
const E = ["primary", "success", "warning", "error", "info", "text", "default"], I = ["large", "small ", "default"], N = {
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
    validator: (e) => E.includes(e)
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
    default: "default",
    validator: (e) => I.includes(e)
  },
  text: {
    type: Boolean,
    default: !1
  }
}, _ = "sy", z = "is-", b = (e, t, n, s, o) => {
  let l = `${e}-${t}`;
  return n && (l += `-${n}`), s && (l += `__${s}`), o && (l += `--${o}`), l;
}, $ = (e) => {
  const t = e;
  return {
    b: (a = "") => b(_, t, a),
    e: (a) => {
    },
    m: (a) => a ? b(_, t, "", "", a) : "",
    be: () => {
    },
    em: () => {
    },
    bm: () => {
    },
    bem: () => {
    },
    is: (a, i = !0) => a && i ? `${z}${a}` : ""
  };
}, P = k({
  name: "SyButton",
  props: N,
  setup(e) {
    const { type: t, onClick: n, round: s, disabled: o, text: l } = e, c = $("btn"), f = $("round"), m = (i, h) => {
      i(h);
    }, y = r(() => t === "text" || l);
    return { type: t, ns: c, handleClick: (i) => {
      n && m(n, i);
    }, is: f, round: s, disabled: o, isText: y };
  }
}), S = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [s, o] of t)
    n[s] = o;
  return n;
}, T = ["disabled"];
function w(e, t, n, s, o, l) {
  return u(), p("button", {
    onClick: t[0] || (t[0] = (...c) => e.handleClick && e.handleClick(...c)),
    class: B([
      e.ns.b(),
      e.ns.m(e.type),
      e.round ? e.is.is("round") : "",
      e.isText ? e.is.is("text") : "",
      e.disabled ? e.is.is("disabled") : ""
    ]),
    disabled: e.disabled
  }, [
    g("span", null, [
      C(e.$slots, "default")
    ])
  ], 10, T);
}
const F = /* @__PURE__ */ S(P, [["render", w]]), v = (e) => (e.install = (t) => {
  t.component(e.name, e);
}, e), J = v(F), O = (e) => /^(https?:|mailto:|tel:)/.test(e), V = {
  icon: {
    type: String,
    default: ""
  },
  className: {
    type: String,
    default: ""
  }
}, j = {
  key: 1,
  class: "svg-icon icon",
  "aria-hidden": "true"
}, q = ["xlink-href"], A = {
  name: "SyIcon"
}, D = /* @__PURE__ */ k({
  ...A,
  props: V,
  setup(e) {
    const t = e, n = r(() => O(t.icon)), s = r(() => ({
      mask: `url(${t.icon}) no-repeat 50% 50%`,
      "-webkit-mask": `url(${t.icon}) no-repeat 50% 50%`
    })), o = r(() => `#icon-${t.icon}`);
    return (l, c) => d(n) ? (u(), p("div", {
      key: 0,
      class: "icon svg-icon svg-external-icon",
      style: x(d(s))
    }, null, 4)) : (u(), p("svg", j, [
      g("use", { "xlink-href": d(o) }, null, 8, q)
    ]));
  }
});
const G = /* @__PURE__ */ S(D, [["__scopeId", "data-v-e3ac4067"]]), K = v(G);
export {
  J as SyButton,
  K as SyIcon
};
