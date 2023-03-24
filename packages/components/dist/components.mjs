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
}, p = "sy", z = "is-", f = (e, t, n, s, l) => {
  let a = `${e}-${t}`;
  return n && (a += `-${n}`), s && (a += `__${s}`), l && (a += `--${l}`), a;
}, m = (e) => {
  const t = e;
  return {
    b: (o = "") => f(p, t, o),
    e: (o) => {
    },
    m: (o) => o ? f(p, t, "", "", o) : "",
    be: () => {
    },
    em: () => {
    },
    bm: () => {
    },
    bem: () => {
    },
    is: (o, r = !0) => o && r ? `${z}${o}` : ""
  };
}, E = y({
  name: "SyButton",
  props: N,
  setup(e) {
    const { type: t, onClick: n, round: s, disabled: l, text: a } = e, i = m("btn"), c = m("round"), d = (r, b) => {
      r(b);
    }, u = $(() => t === "text" || a);
    return { type: t, ns: i, handleClick: (r) => {
      n && d(n, r);
    }, is: c, round: s, disabled: l, isText: u };
  }
}), T = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [s, l] of t)
    n[s] = l;
  return n;
}, P = ["disabled"];
function w(e, t, n, s, l, a) {
  return k(), S("button", {
    onClick: t[0] || (t[0] = (...i) => e.handleClick && e.handleClick(...i)),
    class: B([e.ns.b(), e.ns.m(e.type), e.round ? e.is.is("round") : "", e.isText ? e.is.is("text") : ""]),
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
