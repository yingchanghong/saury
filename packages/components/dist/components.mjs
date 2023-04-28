import { defineComponent as g, computed as b, openBlock as u, createElementBlock as p, normalizeClass as _, createElementVNode as f, renderSlot as B, unref as y, normalizeStyle as h, ref as w, watch as V, nextTick as N, Fragment as T, renderList as E, toDisplayString as I } from "vue";
const P = ["primary", "success", "warning", "error", "info", "text", "default"], z = ["large", "small ", "default"], F = {
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
    validator: (e) => P.includes(e)
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
    validator: (e) => z.includes(e)
  },
  text: {
    type: Boolean,
    default: !1
  }
}, S = "sy", L = "is-", k = (e, t, n, s, o) => {
  let l = `${e}-${t}`;
  return n && (l += `-${n}`), s && (l += `__${s}`), o && (l += `--${o}`), l;
}, $ = (e) => {
  const t = e;
  return {
    b: (a = "") => k(S, t, a),
    e: (a) => {
    },
    m: (a) => a ? k(S, t, "", "", a) : "",
    be: () => {
    },
    em: () => {
    },
    bm: () => {
    },
    bem: () => {
    },
    is: (a, m = !0) => a && m ? `${L}${a}` : ""
  };
}, q = g({
  name: "SyButton",
  props: F,
  setup(e) {
    const { type: t, onClick: n, round: s, disabled: o, text: l } = e, c = $("btn"), r = $("round"), i = (m, x) => {
      m(x);
    }, d = b(() => t === "text" || l);
    return { type: t, ns: c, handleClick: (m) => {
      n && i(n, m);
    }, is: r, round: s, disabled: o, isText: d };
  }
}), C = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [s, o] of t)
    n[s] = o;
  return n;
}, A = ["disabled"];
function D(e, t, n, s, o, l) {
  return u(), p("button", {
    onClick: t[0] || (t[0] = (...c) => e.handleClick && e.handleClick(...c)),
    class: _([
      e.ns.b(),
      e.ns.m(e.type),
      e.round ? e.is.is("round") : "",
      e.isText ? e.is.is("text") : "",
      e.disabled ? e.is.is("disabled") : ""
    ]),
    disabled: e.disabled
  }, [
    f("span", null, [
      B(e.$slots, "default")
    ])
  ], 10, A);
}
const O = /* @__PURE__ */ C(q, [["render", D]]), v = (e) => (e.install = (t) => {
  t.component(e.name, e);
}, e), ee = v(O), X = (e) => /^(https?:|mailto:|tel:)/.test(e), j = {
  icon: {
    type: String,
    default: ""
  },
  className: {
    type: String,
    default: ""
  }
}, G = {
  key: 1,
  class: "svg-icon icon",
  "aria-hidden": "true"
}, H = ["xlink-href"], J = {
  name: "SyIcon"
}, K = /* @__PURE__ */ g({
  ...J,
  props: j,
  setup(e) {
    const t = e, n = b(() => X(t.icon)), s = b(() => ({
      mask: `url(${t.icon}) no-repeat 50% 50%`,
      "-webkit-mask": `url(${t.icon}) no-repeat 50% 50%`
    })), o = b(() => `#icon-${t.icon}`);
    return (l, c) => y(n) ? (u(), p("div", {
      key: 0,
      class: "icon svg-icon svg-external-icon",
      style: h(y(s))
    }, null, 4)) : (u(), p("svg", G, [
      f("use", { "xlink-href": y(o) }, null, 8, H)
    ]));
  }
});
const M = /* @__PURE__ */ C(K, [["__scopeId", "data-v-e3ac4067"]]), te = v(M), Q = {
  modelValue: String,
  list: {
    type: Array,
    default: () => []
  }
}, R = { class: "sy-tab-bar" }, U = ["onClick"], W = {
  name: "SyTab"
}, Y = /* @__PURE__ */ g({
  ...W,
  props: Q,
  emits: ["update:modelValue", "change"],
  setup(e, { emit: t }) {
    const n = e, s = $("tab"), o = (c) => {
      t("update:modelValue", c);
    }, l = w({});
    return V(() => n.modelValue, (c) => {
      N(() => {
        const r = document.querySelector(".active"), i = window.getComputedStyle(r), d = i.getPropertyValue("width"), a = i.getPropertyValue("padding-left");
        l.value = {
          transform: `translateX(${r.offsetLeft + Number(a.replace("px", ""))}px)`,
          width: `${d}`
        };
      });
    }), (c, r) => (u(), p("div", R, [
      f("div", {
        class: _([y(s).b()])
      }, [
        (u(!0), p(T, null, E(c.list, (i, d) => (u(), p("div", {
          class: _([y(s).b("item"), i.value === c.modelValue ? "active" : ""]),
          key: d,
          onClick: (a) => o(i.value)
        }, [
          f("span", null, I(i.label), 1)
        ], 10, U))), 128)),
        f("div", {
          class: "sy-tab--line",
          style: h(l.value)
        }, null, 4)
      ], 2)
    ]));
  }
}), ne = v(Y);
export {
  ee as SyButton,
  te as SyIcon,
  ne as SyTab
};
