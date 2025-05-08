(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [177],
  {
    3145: (e, t, r) => {
      Promise.resolve().then(r.t.bind(r, 9825, 23)),
        Promise.resolve().then(r.t.bind(r, 8851, 23)),
        Promise.resolve().then(r.t.bind(r, 124, 23)),
        Promise.resolve().then(r.t.bind(r, 5931, 23)),
        Promise.resolve().then(r.bind(r, 2464));
    },
    9825: (e, t, r) => {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        Object.defineProperty(t, 'default', {
          enumerable: !0,
          get: function () {
            return m;
          },
        });
      let n = r(3907),
        o = r(516),
        a = n._(r(7960)),
        l = r(7353),
        s = r(3119),
        i = r(2208),
        u = r(7382),
        c = r(2098),
        f = r(3523),
        d = r(9037);
      function p(e, t, r) {
        'undefined' != typeof window &&
          (async () => e.prefetch(t, r))().catch((e) => {});
      }
      function h(e) {
        return 'string' == typeof e ? e : (0, l.formatUrl)(e);
      }
      r(4594);
      let m = a.default.forwardRef(function (e, t) {
        let r, n;
        let {
          href: l,
          as: m,
          children: y,
          prefetch: g = null,
          passHref: b,
          replace: x,
          shallow: v,
          scroll: j,
          onClick: k,
          onMouseEnter: P,
          onTouchStart: _,
          legacyBehavior: w = !1,
          ...E
        } = e;
        (r = y),
          w &&
            ('string' == typeof r || 'number' == typeof r) &&
            (r = (0, o.jsx)('a', { children: r }));
        let N = a.default.useContext(s.AppRouterContext),
          O = !1 !== g,
          C = null === g ? u.PrefetchKind.AUTO : u.PrefetchKind.FULL,
          { href: M, as: I } = a.default.useMemo(() => {
            let e = h(l);
            return { href: e, as: m ? h(m) : e };
          }, [l, m]),
          S = a.default.useRef(M),
          A = a.default.useRef(I);
        w && (n = a.default.Children.only(r));
        let T = w ? n && 'object' == typeof n && n.ref : t,
          [F, R, U] = (0, i.useIntersection)({ rootMargin: '200px' }),
          L = a.default.useCallback(
            (e) => {
              (A.current !== I || S.current !== M) &&
                (U(), (A.current = I), (S.current = M)),
                F(e);
            },
            [I, M, U, F]
          ),
          z = (0, c.useMergedRef)(L, T);
        a.default.useEffect(() => {
          N && R && O && p(N, M, { kind: C });
        }, [I, M, R, O, N, C]);
        let D = {
          ref: z,
          onClick(e) {
            w || 'function' != typeof k || k(e),
              w &&
                n.props &&
                'function' == typeof n.props.onClick &&
                n.props.onClick(e),
              N &&
                !e.defaultPrevented &&
                (function (e, t, r, n, o, l, s) {
                  let { nodeName: i } = e.currentTarget;
                  ('A' === i.toUpperCase() &&
                    (function (e) {
                      let t = e.currentTarget.getAttribute('target');
                      return (
                        (t && '_self' !== t) ||
                        e.metaKey ||
                        e.ctrlKey ||
                        e.shiftKey ||
                        e.altKey ||
                        (e.nativeEvent && 2 === e.nativeEvent.which)
                      );
                    })(e)) ||
                    (e.preventDefault(),
                    a.default.startTransition(() => {
                      let e = null == s || s;
                      'beforePopState' in t
                        ? t[o ? 'replace' : 'push'](r, n, {
                            shallow: l,
                            scroll: e,
                          })
                        : t[o ? 'replace' : 'push'](n || r, { scroll: e });
                    }));
                })(e, N, M, I, x, v, j);
          },
          onMouseEnter(e) {
            w || 'function' != typeof P || P(e),
              w &&
                n.props &&
                'function' == typeof n.props.onMouseEnter &&
                n.props.onMouseEnter(e),
              N && O && p(N, M, { kind: C });
          },
          onTouchStart: function (e) {
            w || 'function' != typeof _ || _(e),
              w &&
                n.props &&
                'function' == typeof n.props.onTouchStart &&
                n.props.onTouchStart(e),
              N && O && p(N, M, { kind: C });
          },
        };
        return (
          (0, f.isAbsoluteUrl)(I)
            ? (D.href = I)
            : (w && !b && ('a' !== n.type || 'href' in n.props)) ||
              (D.href = (0, d.addBasePath)(I)),
          w
            ? a.default.cloneElement(n, D)
            : (0, o.jsx)('a', { ...E, ...D, children: r })
        );
      });
      ('function' == typeof t.default ||
        ('object' == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, '__esModule', { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    1346: (e, t) => {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          cancelIdleCallback: function () {
            return n;
          },
          requestIdleCallback: function () {
            return r;
          },
        });
      let r =
          ('undefined' != typeof self &&
            self.requestIdleCallback &&
            self.requestIdleCallback.bind(window)) ||
          function (e) {
            let t = Date.now();
            return self.setTimeout(function () {
              e({
                didTimeout: !1,
                timeRemaining: function () {
                  return Math.max(0, 50 - (Date.now() - t));
                },
              });
            }, 1);
          },
        n =
          ('undefined' != typeof self &&
            self.cancelIdleCallback &&
            self.cancelIdleCallback.bind(window)) ||
          function (e) {
            return clearTimeout(e);
          };
      ('function' == typeof t.default ||
        ('object' == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, '__esModule', { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    2208: (e, t, r) => {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        Object.defineProperty(t, 'useIntersection', {
          enumerable: !0,
          get: function () {
            return i;
          },
        });
      let n = r(7960),
        o = r(1346),
        a = 'function' == typeof IntersectionObserver,
        l = new Map(),
        s = [];
      function i(e) {
        let { rootRef: t, rootMargin: r, disabled: i } = e,
          u = i || !a,
          [c, f] = (0, n.useState)(!1),
          d = (0, n.useRef)(null),
          p = (0, n.useCallback)((e) => {
            d.current = e;
          }, []);
        return (
          (0, n.useEffect)(() => {
            if (a) {
              if (u || c) return;
              let e = d.current;
              if (e && e.tagName)
                return (function (e, t, r) {
                  let {
                    id: n,
                    observer: o,
                    elements: a,
                  } = (function (e) {
                    let t;
                    let r = {
                        root: e.root || null,
                        margin: e.rootMargin || '',
                      },
                      n = s.find(
                        (e) => e.root === r.root && e.margin === r.margin
                      );
                    if (n && (t = l.get(n))) return t;
                    let o = new Map();
                    return (
                      (t = {
                        id: r,
                        observer: new IntersectionObserver((e) => {
                          e.forEach((e) => {
                            let t = o.get(e.target),
                              r = e.isIntersecting || e.intersectionRatio > 0;
                            t && r && t(r);
                          });
                        }, e),
                        elements: o,
                      }),
                      s.push(r),
                      l.set(r, t),
                      t
                    );
                  })(r);
                  return (
                    a.set(e, t),
                    o.observe(e),
                    function () {
                      if ((a.delete(e), o.unobserve(e), 0 === a.size)) {
                        o.disconnect(), l.delete(n);
                        let e = s.findIndex(
                          (e) => e.root === n.root && e.margin === n.margin
                        );
                        e > -1 && s.splice(e, 1);
                      }
                    }
                  );
                })(e, (e) => e && f(e), {
                  root: null == t ? void 0 : t.current,
                  rootMargin: r,
                });
            } else if (!c) {
              let e = (0, o.requestIdleCallback)(() => f(!0));
              return () => (0, o.cancelIdleCallback)(e);
            }
          }, [u, r, t, c, d.current]),
          [
            p,
            c,
            (0, n.useCallback)(() => {
              f(!1);
            }, []),
          ]
        );
      }
      ('function' == typeof t.default ||
        ('object' == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, '__esModule', { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    7353: (e, t, r) => {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          formatUrl: function () {
            return a;
          },
          formatWithValidation: function () {
            return s;
          },
          urlObjectKeys: function () {
            return l;
          },
        });
      let n = r(3800)._(r(6391)),
        o = /https?|ftp|gopher|file/;
      function a(e) {
        let { auth: t, hostname: r } = e,
          a = e.protocol || '',
          l = e.pathname || '',
          s = e.hash || '',
          i = e.query || '',
          u = !1;
        (t = t ? encodeURIComponent(t).replace(/%3A/i, ':') + '@' : ''),
          e.host
            ? (u = t + e.host)
            : r &&
              ((u = t + (~r.indexOf(':') ? '[' + r + ']' : r)),
              e.port && (u += ':' + e.port)),
          i &&
            'object' == typeof i &&
            (i = String(n.urlQueryToSearchParams(i)));
        let c = e.search || (i && '?' + i) || '';
        return (
          a && !a.endsWith(':') && (a += ':'),
          e.slashes || ((!a || o.test(a)) && !1 !== u)
            ? ((u = '//' + (u || '')), l && '/' !== l[0] && (l = '/' + l))
            : u || (u = ''),
          s && '#' !== s[0] && (s = '#' + s),
          c && '?' !== c[0] && (c = '?' + c),
          '' +
            a +
            u +
            (l = l.replace(/[?#]/g, encodeURIComponent)) +
            (c = c.replace('#', '%23')) +
            s
        );
      }
      let l = [
        'auth',
        'hash',
        'host',
        'hostname',
        'href',
        'path',
        'pathname',
        'port',
        'protocol',
        'query',
        'search',
        'slashes',
      ];
      function s(e) {
        return a(e);
      }
    },
    6391: (e, t) => {
      'use strict';
      function r(e) {
        let t = {};
        return (
          e.forEach((e, r) => {
            void 0 === t[r]
              ? (t[r] = e)
              : Array.isArray(t[r])
                ? t[r].push(e)
                : (t[r] = [t[r], e]);
          }),
          t
        );
      }
      function n(e) {
        return 'string' != typeof e &&
          ('number' != typeof e || isNaN(e)) &&
          'boolean' != typeof e
          ? ''
          : String(e);
      }
      function o(e) {
        let t = new URLSearchParams();
        return (
          Object.entries(e).forEach((e) => {
            let [r, o] = e;
            Array.isArray(o)
              ? o.forEach((e) => t.append(r, n(e)))
              : t.set(r, n(o));
          }),
          t
        );
      }
      function a(e) {
        for (
          var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), n = 1;
          n < t;
          n++
        )
          r[n - 1] = arguments[n];
        return (
          r.forEach((t) => {
            Array.from(t.keys()).forEach((t) => e.delete(t)),
              t.forEach((t, r) => e.append(r, t));
          }),
          e
        );
      }
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          assign: function () {
            return a;
          },
          searchParamsToUrlQuery: function () {
            return r;
          },
          urlQueryToSearchParams: function () {
            return o;
          },
        });
    },
    3523: (e, t) => {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          DecodeError: function () {
            return h;
          },
          MiddlewareNotFoundError: function () {
            return b;
          },
          MissingStaticPage: function () {
            return g;
          },
          NormalizeError: function () {
            return m;
          },
          PageNotFoundError: function () {
            return y;
          },
          SP: function () {
            return d;
          },
          ST: function () {
            return p;
          },
          WEB_VITALS: function () {
            return r;
          },
          execOnce: function () {
            return n;
          },
          getDisplayName: function () {
            return i;
          },
          getLocationOrigin: function () {
            return l;
          },
          getURL: function () {
            return s;
          },
          isAbsoluteUrl: function () {
            return a;
          },
          isResSent: function () {
            return u;
          },
          loadGetInitialProps: function () {
            return f;
          },
          normalizeRepeatedSlashes: function () {
            return c;
          },
          stringifyError: function () {
            return x;
          },
        });
      let r = ['CLS', 'FCP', 'FID', 'INP', 'LCP', 'TTFB'];
      function n(e) {
        let t,
          r = !1;
        return function () {
          for (var n = arguments.length, o = Array(n), a = 0; a < n; a++)
            o[a] = arguments[a];
          return r || ((r = !0), (t = e(...o))), t;
        };
      }
      let o = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/,
        a = (e) => o.test(e);
      function l() {
        let { protocol: e, hostname: t, port: r } = window.location;
        return e + '//' + t + (r ? ':' + r : '');
      }
      function s() {
        let { href: e } = window.location,
          t = l();
        return e.substring(t.length);
      }
      function i(e) {
        return 'string' == typeof e ? e : e.displayName || e.name || 'Unknown';
      }
      function u(e) {
        return e.finished || e.headersSent;
      }
      function c(e) {
        let t = e.split('?');
        return (
          t[0].replace(/\\/g, '/').replace(/\/\/+/g, '/') +
          (t[1] ? '?' + t.slice(1).join('?') : '')
        );
      }
      async function f(e, t) {
        let r = t.res || (t.ctx && t.ctx.res);
        if (!e.getInitialProps)
          return t.ctx && t.Component
            ? { pageProps: await f(t.Component, t.ctx) }
            : {};
        let n = await e.getInitialProps(t);
        if (r && u(r)) return n;
        if (!n)
          throw Error(
            '"' +
              i(e) +
              '.getInitialProps()" should resolve to an object. But found "' +
              n +
              '" instead.'
          );
        return n;
      }
      let d = 'undefined' != typeof performance,
        p =
          d &&
          ['mark', 'measure', 'getEntriesByName'].every(
            (e) => 'function' == typeof performance[e]
          );
      class h extends Error {}
      class m extends Error {}
      class y extends Error {
        constructor(e) {
          super(),
            (this.code = 'ENOENT'),
            (this.name = 'PageNotFoundError'),
            (this.message = 'Cannot find module for page: ' + e);
        }
      }
      class g extends Error {
        constructor(e, t) {
          super(),
            (this.message =
              'Failed to load static file for page: ' + e + ' ' + t);
        }
      }
      class b extends Error {
        constructor() {
          super(),
            (this.code = 'ENOENT'),
            (this.message = 'Cannot find the middleware module');
        }
      }
      function x(e) {
        return JSON.stringify({ message: e.message, stack: e.stack });
      }
    },
    2464: (e, t, r) => {
      'use strict';
      r.d(t, { default: () => f });
      var n = r(516),
        o = r(7960),
        a = r(9970),
        l = r(9825),
        s = r.n(l),
        i = r(2168);
      let u = (0, i.A)('X', [
          ['path', { d: 'M18 6 6 18', key: '1bl5f8' }],
          ['path', { d: 'm6 6 12 12', key: 'd8bk6v' }],
        ]),
        c = (0, i.A)('Menu', [
          ['line', { x1: '4', x2: '20', y1: '12', y2: '12', key: '1e0a9i' }],
          ['line', { x1: '4', x2: '20', y1: '6', y2: '6', key: '1owob3' }],
          ['line', { x1: '4', x2: '20', y1: '18', y2: '18', key: 'yk5zj1' }],
        ]),
        f = () => {
          let [e, t] = (0, o.useState)(!1);
          return (0, n.jsx)('header', {
            className: 'w-full',
            children: (0, n.jsxs)('nav', {
              className: 'h-20 px-4 md:px-6',
              children: [
                (0, n.jsxs)('div', {
                  className: 'flex items-center justify-between h-full',
                  children: [
                    (0, n.jsx)('div', {
                      className: 'flex items-center',
                      children: (0, n.jsx)(s(), {
                        href: 'https://kasar.io',
                        className: 'flex items-center',
                        children: (0, n.jsx)(a.default, {
                          src: 'https://kasar.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FkasarLogo.0513044c.png&w=640&q=75',
                          alt: 'Logo',
                          className: 'w-11 h-11 rounded-full',
                          width: 44,
                          height: 44,
                        }),
                      }),
                    }),
                    (0, n.jsxs)('div', {
                      className: 'hidden md:flex items-center gap-8',
                      children: [
                        (0, n.jsx)(s(), {
                          href: '/about',
                          className:
                            'text-gray-300 hover:text-white font-medium text-lg hover:scale-105 transition-all',
                          children: 'About',
                        }),
                        (0, n.jsx)(s(), {
                          href: '/docs',
                          className:
                            'text-gray-300 hover:text-white font-medium text-lg hover:scale-105 transition-all',
                          children: 'Docs',
                        }),
                        (0, n.jsx)('a', {
                          href: 'https://github.com/kasarlabs/snak',
                          target: '_blank',
                          rel: 'noopener noreferrer',
                          className:
                            'text-gray-300 hover:text-white font-medium text-lg hover:scale-105 transition-all',
                          children: 'GitHub',
                        }),
                      ],
                    }),
                    (0, n.jsx)('button', {
                      className: 'md:hidden p-2 text-gray-300 hover:text-white',
                      onClick: () => {
                        t(!e);
                      },
                      'aria-label': 'Toggle menu',
                      children: e
                        ? (0, n.jsx)(u, { size: 28 })
                        : (0, n.jsx)(c, { size: 28 }),
                    }),
                  ],
                }),
                e &&
                  (0, n.jsxs)('div', {
                    className:
                      'md:hidden absolute top-20 left-0 right-0 bg-neutral-900 border-b border-neutral-800 py-4 px-6 space-y-4',
                    children: [
                      (0, n.jsx)(s(), {
                        href: '/about',
                        className:
                          'block text-gray-300 hover:text-white font-medium text-lg hover:bg-neutral-800 py-2 px-4 rounded-lg transition-all',
                        children: 'About',
                      }),
                      (0, n.jsx)(s(), {
                        href: '/docs',
                        className:
                          'block text-gray-300 hover:text-white font-medium text-lg hover:bg-neutral-800 py-2 px-4 rounded-lg transition-all',
                        children: 'Docs',
                      }),
                      (0, n.jsx)('a', {
                        href: 'https://github.com/kasarlabs/snak',
                        target: '_blank',
                        rel: 'noopener noreferrer',
                        className:
                          'block text-gray-300 hover:text-white font-medium text-lg hover:bg-neutral-800 py-2 px-4 rounded-lg transition-all',
                        children: 'GitHub',
                      }),
                    ],
                  }),
              ],
            }),
          });
        };
    },
    5931: () => {},
    124: (e) => {
      e.exports = {
        style: { fontFamily: "'Inter', 'Inter Fallback'", fontStyle: 'normal' },
        className: '__className_d65c78',
      };
    },
  },
  (e) => {
    var t = (t) => e((e.s = t));
    e.O(0, [79, 621, 379, 487, 358], () => t(3145)), (_N_E = e.O());
  },
]);
