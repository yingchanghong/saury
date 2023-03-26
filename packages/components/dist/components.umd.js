;(function (a, t) {
  typeof exports == 'object' && typeof module < 'u'
    ? t(exports, require('vue'))
    : typeof define == 'function' && define.amd
    ? define(['exports', 'vue'], t)
    : ((a = typeof globalThis < 'u' ? globalThis : a || self), t((a['@saury/components'] = {}), a.Vue))
})(this, function (a, t) {
  'use strict'
  const S = ['primary', 'success', 'warning', 'error', 'info', 'text', 'default'],
    $ = ['large', 'small ', 'default'],
    g = {
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
    u = 'sy',
    h = 'is-',
    p = (e, n, o, s, l) => {
      let c = `${e}-${n}`
      return o && (c += `-${o}`), s && (c += `__${s}`), l && (c += `--${l}`), c
    },
    f = (e) => {
      const n = e
      return {
        b: (i = '') => p(u, n, i),
        e: (i) => {},
        m: (i) => (i ? p(u, n, '', '', i) : ''),
        be: () => {},
        em: () => {},
        bm: () => {},
        bem: () => {},
        is: (i, d = !0) => (i && d ? `${h}${i}` : ''),
      }
    },
    B = t.defineComponent({
      name: 'SyButton',
      props: g,
      setup(e) {
        const { type: n, onClick: o, round: s, disabled: l, text: c } = e,
          r = f('btn'),
          b = f('round'),
          _ = (d, O) => {
            d(O)
          },
          k = t.computed(() => n === 'text' || c)
        return {
          type: n,
          ns: r,
          handleClick: (d) => {
            o && _(o, d)
          },
          is: b,
          round: s,
          disabled: l,
          isText: k,
        }
      },
    }),
    m = (e, n) => {
      const o = e.__vccOpts || e
      for (const [s, l] of n) o[s] = l
      return o
    },
    C = ['disabled']
  function E(e, n, o, s, l, c) {
    return (
      t.openBlock(),
      t.createElementBlock(
        'button',
        {
          onClick: n[0] || (n[0] = (...r) => e.handleClick && e.handleClick(...r)),
          class: t.normalizeClass([
            e.ns.b(),
            e.ns.m(e.type),
            e.round ? e.is.is('round') : '',
            e.isText ? e.is.is('text') : '',
            e.disabled ? e.is.is('disabled') : '',
          ]),
          disabled: e.disabled,
        },
        [t.createElementVNode('span', null, [t.renderSlot(e.$slots, 'default')])],
        10,
        C
      )
    )
  }
  const I = m(B, [['render', E]]),
    y = (e) => (
      (e.install = (n) => {
        n.component(e.name, e)
      }),
      e
    ),
    x = y(I),
    N = (e) => /^(https?:|mailto:|tel:)/.test(e),
    T = { icon: { type: String, default: '' }, className: { type: String, default: '' } },
    z = { key: 1, class: 'svg-icon icon', 'aria-hidden': 'true' },
    P = ['xlink-href'],
    V = { name: 'SyIcon' },
    j = t.defineComponent({
      ...V,
      props: T,
      setup(e) {
        const n = e,
          o = t.computed(() => N(n.icon)),
          s = t.computed(() => ({
            mask: `url(${n.icon}) no-repeat 50% 50%`,
            '-webkit-mask': `url(${n.icon}) no-repeat 50% 50%`,
          })),
          l = t.computed(() => `#icon-${n.icon}`)
        return (c, r) =>
          t.unref(o)
            ? (t.openBlock(),
              t.createElementBlock(
                'div',
                { key: 0, class: 'icon svg-icon svg-external-icon', style: t.normalizeStyle(t.unref(s)) },
                null,
                4
              ))
            : (t.openBlock(),
              t.createElementBlock('svg', z, [t.createElementVNode('use', { 'xlink-href': t.unref(l) }, null, 8, P)]))
      },
    }),
    q = '',
    w = y(m(j, [['__scopeId', 'data-v-e3ac4067']]))
  ;(a.SyButton = x), (a.SyIcon = w), Object.defineProperty(a, Symbol.toStringTag, { value: 'Module' })
})
