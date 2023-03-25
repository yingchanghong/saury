;(function (d, n) {
  typeof exports == 'object' && typeof module < 'u'
    ? n(exports, require('vue'))
    : typeof define == 'function' && define.amd
    ? define(['exports', 'vue'], n)
    : ((d = typeof globalThis < 'u' ? globalThis : d || self), n((d['saury-ui'] = {}), d.Vue))
})(this, function (d, n) {
  'use strict'
  const S = ['primary', 'success', 'warning', 'error', 'info', 'text', 'default'],
    $ = ['large', 'small ', 'default'],
    B = {
      disabled: { type: Boolean, default: !1 },
      round: { type: Boolean, default: !1 },
      icon: { type: String },
      onClick: { type: Function },
      type: { type: String, default: 'default', validator: (e) => S.includes(e) },
      loading: { type: Boolean, default: !1 },
      color: { type: String },
      size: { type: String, default: 'default', validator: (e) => $.includes(e) },
      text: { type: Boolean, default: !1 },
    },
    c = 'sy',
    k = 'is-',
    f = (e, t, s, l, i) => {
      let a = `${e}-${t}`
      return s && (a += `-${s}`), l && (a += `__${l}`), i && (a += `--${i}`), a
    },
    p = (e) => {
      const t = e
      return {
        b: (o = '') => f(c, t, o),
        e: (o) => {},
        m: (o) => (o ? f(c, t, '', '', o) : ''),
        be: () => {},
        em: () => {},
        bm: () => {},
        bem: () => {},
        is: (o, r = !0) => (o && r ? `${k}${o}` : ''),
      }
    },
    g = n.defineComponent({
      name: 'SyButton',
      props: B,
      setup(e) {
        const { type: t, onClick: s, round: l, disabled: i, text: a } = e,
          u = p('btn'),
          m = p('round'),
          y = (r, z) => {
            r(z)
          },
          b = n.computed(() => t === 'text' || a)
        return {
          type: t,
          ns: u,
          handleClick: (r) => {
            s && y(s, r)
          },
          is: m,
          round: l,
          disabled: i,
          isText: b,
        }
      },
    }),
    C = (e, t) => {
      const s = e.__vccOpts || e
      for (const [l, i] of t) s[l] = i
      return s
    },
    h = ['disabled']
  function T(e, t, s, l, i, a) {
    return (
      n.openBlock(),
      n.createElementBlock(
        'button',
        {
          onClick: t[0] || (t[0] = (...u) => e.handleClick && e.handleClick(...u)),
          class: n.normalizeClass([
            e.ns.b(),
            e.ns.m(e.type),
            e.round ? e.is.is('round') : '',
            e.isText ? e.is.is('text') : '',
            e.disabled ? e.is.is('disabled') : '',
          ]),
          disabled: e.disabled,
        },
        [n.createElementVNode('span', null, [n.renderSlot(e.$slots, 'default')])],
        10,
        h
      )
    )
  }
  const N = ((e) => (
    (e.install = (t) => {
      t.component(e.name, e)
    }),
    e
  ))(C(g, [['render', T]]))
  ;(d.SyButton = N), Object.defineProperty(d, Symbol.toStringTag, { value: 'Module' })
})
