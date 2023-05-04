;(function (d, e) {
  typeof exports == 'object' && typeof module < 'u'
    ? e(exports, require('vue'))
    : typeof define == 'function' && define.amd
    ? define(['exports', 'vue'], e)
    : ((d = typeof globalThis < 'u' ? globalThis : d || self), e((d['@saury/components'] = {}), d.Vue))
})(this, function (d, e) {
  'use strict'
  const S = ['primary', 'success', 'warning', 'error', 'info', 'text', 'default'],
    g = ['large', 'small ', 'default'],
    B = {
      disabled: { type: Boolean, default: !1 },
      round: { type: Boolean, default: !1 },
      icon: { type: String },
      onClick: { type: Function },
      type: { type: String, default: 'default', validator: (t) => S.includes(t) },
      loading: { type: Boolean, default: !1 },
      color: { type: String },
      size: { type: String, default: 'default', validator: (t) => g.includes(t) },
      text: { type: Boolean, default: !1 },
    },
    b = 'sy',
    h = 'is-',
    k = (t, n, s, a, o) => {
      let r = `${t}-${n}`
      return s && (r += `-${s}`), a && (r += `__${a}`), o && (r += `--${o}`), r
    },
    u = (t) => {
      const n = t
      return {
        b: (i = '') => k(b, n, i),
        e: (i) => k(b, n, '', i),
        m: (i) => (i ? k(b, n, '', '', i) : ''),
        be: () => {},
        em: () => {},
        bm: () => {},
        bem: () => {},
        is: (i, m = !0) => (i && m ? `${h}${i}` : ''),
      }
    },
    $ = e.defineComponent({
      name: 'SyButton',
      props: B,
      setup(t) {
        const { type: n, onClick: s, round: a, disabled: o, text: r } = t,
          l = u('btn'),
          f = u('round'),
          p = (m, K) => {
            m(K)
          },
          c = e.computed(() => n === 'text' || r)
        return {
          type: n,
          ns: l,
          handleClick: (m) => {
            s && p(s, m)
          },
          is: f,
          round: a,
          disabled: o,
          isText: c,
        }
      },
    }),
    _ = (t, n) => {
      const s = t.__vccOpts || t
      for (const [a, o] of n) s[a] = o
      return s
    },
    C = ['disabled']
  function E(t, n, s, a, o, r) {
    return (
      e.openBlock(),
      e.createElementBlock(
        'button',
        {
          onClick: n[0] || (n[0] = (...l) => t.handleClick && t.handleClick(...l)),
          class: e.normalizeClass([
            t.ns.b(),
            t.ns.m(t.type),
            t.round ? t.is.is('round') : '',
            t.isText ? t.is.is('text') : '',
            t.disabled ? t.is.is('disabled') : '',
          ]),
          disabled: t.disabled,
        },
        [e.createElementVNode('span', null, [e.renderSlot(t.$slots, 'default')])],
        10,
        C
      )
    )
  }
  const V = _($, [['render', E]]),
    y = (t) => (
      (t.install = (n) => {
        n.component(t.name, t)
      }),
      t
    ),
    N = y(V),
    I = (t) => /^(https?:|mailto:|tel:)/.test(t),
    T = { icon: { type: String, default: '' }, className: { type: String, default: '' } },
    P = { key: 1, class: 'svg-icon icon', 'aria-hidden': 'true' },
    z = ['xlink-href'],
    w = { name: 'SyIcon' },
    x = e.defineComponent({
      ...w,
      props: T,
      setup(t) {
        const n = t,
          s = e.computed(() => I(n.icon)),
          a = e.computed(() => ({
            mask: `url(${n.icon}) no-repeat 50% 50%`,
            '-webkit-mask': `url(${n.icon}) no-repeat 50% 50%`,
          })),
          o = e.computed(() => `#icon-${n.icon}`)
        return (r, l) =>
          e.unref(s)
            ? (e.openBlock(),
              e.createElementBlock(
                'div',
                { key: 0, class: 'icon svg-icon svg-external-icon', style: e.normalizeStyle(e.unref(a)) },
                null,
                4
              ))
            : (e.openBlock(),
              e.createElementBlock('svg', P, [e.createElementVNode('use', { 'xlink-href': e.unref(o) }, null, 8, z)]))
      },
    }),
    Q = '',
    F = y(_(x, [['__scopeId', 'data-v-e3ac4067']])),
    j = { modelValue: String, list: { type: Array, default: () => [] } },
    O = { class: 'sy-tab-bar' },
    q = ['onClick'],
    A = { name: 'SyTab' },
    L = e.defineComponent({
      ...A,
      props: j,
      emits: ['update:modelValue', 'change'],
      setup(t, { emit: n }) {
        const s = t,
          a = u('tab'),
          o = (l) => {
            n('update:modelValue', l)
          },
          r = e.ref({})
        return (
          e.watch(
            () => s.modelValue,
            () => {
              e.nextTick(() => {
                const l = document.querySelector('.active'),
                  f = window.getComputedStyle(l),
                  p = f.getPropertyValue('width'),
                  c = f.getPropertyValue('padding-left')
                r.value = { transform: `translateX(${l.offsetLeft + Number(c.replace('px', ''))}px)`, width: p }
              })
            }
          ),
          (l, f) => (
            e.openBlock(),
            e.createElementBlock('div', O, [
              e.createElementVNode(
                'div',
                { class: e.normalizeClass([e.unref(a).b()]) },
                [
                  (e.openBlock(!0),
                  e.createElementBlock(
                    e.Fragment,
                    null,
                    e.renderList(
                      l.list,
                      (p, c) => (
                        e.openBlock(),
                        e.createElementBlock(
                          'div',
                          {
                            class: e.normalizeClass([e.unref(a).b('item'), p.value === l.modelValue ? 'active' : '']),
                            key: c,
                            onClick: (i) => o(p.value),
                          },
                          [e.createElementVNode('span', null, e.toDisplayString(p.label), 1)],
                          10,
                          q
                        )
                      )
                    ),
                    128
                  )),
                  e.createElementVNode('div', { class: 'sy-tab--line', style: e.normalizeStyle(r.value) }, null, 4),
                ],
                2
              ),
            ])
          )
        )
      },
    }),
    D = y(L),
    M = {
      placeholder: { type: String, default: '' },
      type: { type: String, default: 'text' },
      modelValue: { type: ((t) => t)([String, Number, Object]), default: '' },
      disabled: { type: Boolean, default: !1 },
      clearble: { type: Boolean, default: !1 },
    },
    X = ['value', 'disabled', 'placeholder', 'type'],
    G = e.defineComponent({ name: 'SyInput' }),
    H = e.defineComponent({
      ...G,
      props: M,
      emits: ['update:modelValue', 'change'],
      setup(t, { emit: n }) {
        const s = t,
          a = e.useAttrs(),
          o = u('input'),
          r = (c) => {
            n('update:modelValue', c.target.value)
          },
          l = e.ref(!1),
          f = () => {
            l.value = !1
          },
          p = () => {
            l.value = !0
          }
        return (c, i) => (
          e.openBlock(),
          e.createElementBlock(
            'div',
            { class: e.normalizeClass([e.unref(o).b(), c.disabled ? e.unref(o).is('disabled') : '']) },
            [
              c.type !== 'textarea'
                ? (e.openBlock(),
                  e.createElementBlock(
                    'div',
                    { key: 0, class: e.normalizeClass([e.unref(o).b('wrap'), l.value ? 'is-focus' : '']) },
                    [
                      e.createElementVNode(
                        'input',
                        e.mergeProps({ value: s.modelValue, class: [e.unref(o).b('inner')] }, e.unref(a), {
                          disabled: c.disabled,
                          placeholder: c.placeholder,
                          type: c.type,
                          onInput: r,
                          onBlur: f,
                          onFocus: p,
                        }),
                        null,
                        16,
                        X
                      ),
                      c.clearble
                        ? (e.openBlock(),
                          e.createElementBlock(
                            'div',
                            { key: 0, class: e.normalizeClass([e.unref(o).b('clear')]) },
                            'x',
                            2
                          ))
                        : e.createCommentVNode('', !0),
                    ],
                    2
                  ))
                : (e.openBlock(), e.createElementBlock(e.Fragment, { key: 1 }, [], 64)),
            ],
            2
          )
        )
      },
    }),
    J = y(H)
  ;(d.SyButton = N),
    (d.SyIcon = F),
    (d.SyInput = J),
    (d.SyTab = D),
    Object.defineProperty(d, Symbol.toStringTag, { value: 'Module' })
})
