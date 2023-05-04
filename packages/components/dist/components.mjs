import { defineComponent as _, computed as v, openBlock as d, createElementBlock as p, normalizeClass as y, createElementVNode as m, renderSlot as N, unref as i, normalizeStyle as k, ref as C, watch as P, nextTick as w, Fragment as V, renderList as T, toDisplayString as x, useAttrs as E, mergeProps as z, createCommentVNode as F } from "vue";
const A = ["primary", "success", "warning", "error", "info", "text", "default"], L = ["large", "small ", "default"], O = {
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
    validator: (e) => A.includes(e)
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
    validator: (e) => L.includes(e)
  },
  text: {
    type: Boolean,
    default: !1
  }
}, S = "sy", j = "is-", $ = (e, t, o, l, n) => {
  let c = `${e}-${t}`;
  return o && (c += `-${o}`), l && (c += `__${l}`), n && (c += `--${n}`), c;
}, g = (e) => {
  const t = e;
  return {
    b: (r = "") => $(S, t, r),
    e: (r) => $(S, t, "", r),
    m: (r) => r ? $(S, t, "", "", r) : "",
    be: () => {
    },
    em: () => {
    },
    bm: () => {
    },
    bem: () => {
    },
    is: (r, b = !0) => r && b ? `${j}${r}` : ""
  };
}, q = _({
  name: "SyButton",
  props: O,
  setup(e) {
    const { type: t, onClick: o, round: l, disabled: n, text: c } = e, s = g("btn"), f = g("round"), u = (b, I) => {
      b(I);
    }, a = v(() => t === "text" || c);
    return { type: t, ns: s, handleClick: (b) => {
      o && u(o, b);
    }, is: f, round: l, disabled: n, isText: a };
  }
}), B = (e, t) => {
  const o = e.__vccOpts || e;
  for (const [l, n] of t)
    o[l] = n;
  return o;
}, D = ["disabled"];
function X(e, t, o, l, n, c) {
  return d(), p("button", {
    onClick: t[0] || (t[0] = (...s) => e.handleClick && e.handleClick(...s)),
    class: y([
      e.ns.b(),
      e.ns.m(e.type),
      e.round ? e.is.is("round") : "",
      e.isText ? e.is.is("text") : "",
      e.disabled ? e.is.is("disabled") : ""
    ]),
    disabled: e.disabled
  }, [
    m("span", null, [
      N(e.$slots, "default")
    ])
  ], 10, D);
}
const G = /* @__PURE__ */ B(q, [["render", X]]), h = (e) => (e.install = (t) => {
  t.component(e.name, e);
}, e), re = h(G), H = (e) => /^(https?:|mailto:|tel:)/.test(e), J = {
  icon: {
    type: String,
    default: ""
  },
  className: {
    type: String,
    default: ""
  }
}, K = {
  key: 1,
  class: "svg-icon icon",
  "aria-hidden": "true"
}, M = ["xlink-href"], Q = {
  name: "SyIcon"
}, R = /* @__PURE__ */ _({
  ...Q,
  props: J,
  setup(e) {
    const t = e, o = v(() => H(t.icon)), l = v(() => ({
      mask: `url(${t.icon}) no-repeat 50% 50%`,
      "-webkit-mask": `url(${t.icon}) no-repeat 50% 50%`
    })), n = v(() => `#icon-${t.icon}`);
    return (c, s) => i(o) ? (d(), p("div", {
      key: 0,
      class: "icon svg-icon svg-external-icon",
      style: k(i(l))
    }, null, 4)) : (d(), p("svg", K, [
      m("use", { "xlink-href": i(n) }, null, 8, M)
    ]));
  }
});
const U = /* @__PURE__ */ B(R, [["__scopeId", "data-v-e3ac4067"]]), ie = h(U), W = {
  modelValue: String,
  list: {
    type: Array,
    default: () => []
  }
}, Y = { class: "sy-tab-bar" }, Z = ["onClick"], ee = {
  name: "SyTab"
}, te = /* @__PURE__ */ _({
  ...ee,
  props: W,
  emits: ["update:modelValue", "change"],
  setup(e, { emit: t }) {
    const o = e, l = g("tab"), n = (s) => {
      t("update:modelValue", s);
    }, c = C({});
    return P(
      () => o.modelValue,
      () => {
        w(() => {
          const s = document.querySelector(".active"), f = window.getComputedStyle(s), u = f.getPropertyValue("width"), a = f.getPropertyValue("padding-left");
          c.value = {
            transform: `translateX(${s.offsetLeft + Number(a.replace("px", ""))}px)`,
            width: u
          };
        });
      }
    ), (s, f) => (d(), p("div", Y, [
      m("div", {
        class: y([i(l).b()])
      }, [
        (d(!0), p(V, null, T(s.list, (u, a) => (d(), p("div", {
          class: y([i(l).b("item"), u.value === s.modelValue ? "active" : ""]),
          key: a,
          onClick: (r) => n(u.value)
        }, [
          m("span", null, x(u.label), 1)
        ], 10, Z))), 128)),
        m("div", {
          class: "sy-tab--line",
          style: k(c.value)
        }, null, 4)
      ], 2)
    ]));
  }
}), ue = h(te), ne = (e) => e, se = {
  placeholder: {
    type: String,
    default: ""
  },
  type: {
    type: String,
    default: "text"
  },
  modelValue: {
    type: ne([String, Number, Object]),
    default: ""
  },
  disabled: {
    type: Boolean,
    default: !1
  },
  clearble: {
    type: Boolean,
    default: !1
  }
}, oe = ["value", "disabled", "placeholder", "type"], le = _({
  name: "SyInput"
}), ae = /* @__PURE__ */ _({
  ...le,
  props: se,
  emits: ["update:modelValue", "change"],
  setup(e, { emit: t }) {
    const o = e, l = E(), n = g("input"), c = (a) => {
      t("update:modelValue", a.target.value);
    }, s = C(!1), f = () => {
      s.value = !1;
    }, u = () => {
      s.value = !0;
    };
    return (a, r) => (d(), p("div", {
      class: y([i(n).b(), a.disabled ? i(n).is("disabled") : ""])
    }, [
      a.type !== "textarea" ? (d(), p("div", {
        key: 0,
        class: y([i(n).b("wrap"), s.value ? "is-focus" : ""])
      }, [
        m("input", z({
          value: o.modelValue,
          class: [i(n).b("inner")]
        }, i(l), {
          disabled: a.disabled,
          placeholder: a.placeholder,
          type: a.type,
          onInput: c,
          onBlur: f,
          onFocus: u
        }), null, 16, oe),
        a.clearble ? (d(), p("div", {
          key: 0,
          class: y([i(n).b("clear")])
        }, "x", 2)) : F("", !0)
      ], 2)) : (d(), p(V, { key: 1 }, [], 64))
    ], 2));
  }
}), de = h(ae);
export {
  re as SyButton,
  ie as SyIcon,
  de as SyInput,
  ue as SyTab
};
