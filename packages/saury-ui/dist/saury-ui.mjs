import { defineComponent as y, computed as $, openBlock as k, createElementBlock as S, normalizeClass as B, createElementVNode as C, renderSlot as g } from "vue";
const v = ["primary", "success", "warning", "error", "info", "text", "default"], h = ["large", "small ", "default"], N = {
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
    validator: (e) => v.includes(e)
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
    validator: (e) => h.includes(e)
  },
  text: {
    type: Boolean,
    default: !1
  }
}, p = "sy", z = "is-", f = (e, t, n, o, l) => {
  let a = `${e}-${t}`;
  return n && (a += `-${n}`), o && (a += `__${o}`), l && (a += `--${l}`), a;
}, m = (e) => {
  const t = e;
  return {
    b: (s = "") => f(p, t, s),
    e: (s) => {
    },
    m: (s) => s ? f(p, t, "", "", s) : "",
    be: () => {
    },
    em: () => {
    },
    bm: () => {
    },
    bem: () => {
    },
    is: (s, i = !0) => s && i ? `${z}${s}` : ""
  };
}, E = y({
  name: "SyButton",
  props: N,
  setup(e) {
    const { type: t, onClick: n, round: o, disabled: l, text: a } = e, r = m("btn"), d = m("round"), c = (i, b) => {
      i(b);
    }, u = $(() => t === "text" || a);
    return { type: t, ns: r, handleClick: (i) => {
      n && c(n, i);
    }, is: d, round: o, disabled: l, isText: u };
  }
}), T = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, l] of t)
    n[o] = l;
  return n;
}, P = ["disabled"];
function w(e, t, n, o, l, a) {
  return k(), S("button", {
    onClick: t[0] || (t[0] = (...r) => e.handleClick && e.handleClick(...r)),
    class: B([e.ns.b(), e.ns.m(e.type), e.round ? e.is.is("round") : "", e.isText ? e.is.is("text") : "", e.disabled ? e.is.is("disabled") : ""]),
    disabled: e.disabled
  }, [
    C("span", null, [
      g(e.$slots, "default")
    ])
  ], 10, P);
}
const F = /* @__PURE__ */ T(E, [["render", w]]), I = (e) => (e.install = (t) => {
  t.component(e.name, e);
}, e), V = I(F);
export {
  V as SyButton
};
