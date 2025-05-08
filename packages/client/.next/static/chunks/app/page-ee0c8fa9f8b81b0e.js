(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [974],
  {
    2134: (e, t, a) => {
      Promise.resolve().then(a.bind(a, 7277));
    },
    7277: (e, t, a) => {
      'use strict';
      a.d(t, { default: () => Y });
      var r = a(516),
        s = a(7960),
        l = a(9970),
        n = a(3292),
        o = a(2088),
        i = a(9262),
        d = a(2735);
      function c() {
        for (var e = arguments.length, t = Array(e), a = 0; a < e; a++)
          t[a] = arguments[a];
        return (0, d.QP)((0, i.$)(t));
      }
      let u = s.forwardRef((e, t) => {
        let { className: a, type: s, ...l } = e;
        return (0, r.jsx)('input', {
          type: s,
          className: c(
            'flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
            a
          ),
          ref: t,
          ...l,
        });
      });
      u.displayName = 'Input';
      var p = a(8875),
        f = a(9776);
      let m = (0, f.F)(
          'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
          {
            variants: {
              variant: {
                default: 'text-primary-foreground shadow',
                destructive:
                  'bg-destructive text-destructive-foreground shadow-sm',
                outline:
                  'border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground',
                secondary:
                  'bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80',
                ghost: 'hover:bg-accent hover:text-accent-foreground',
                link: 'text-primary underline-offset-4 hover:underline',
              },
              size: {
                default: 'h-9 px-4 py-2',
                sm: 'h-8 rounded-md px-3 text-xs',
                lg: 'h-10 rounded-md px-8',
                icon: 'h-9 w-9',
              },
            },
            defaultVariants: { variant: 'default', size: 'default' },
          }
        ),
        x = s.forwardRef((e, t) => {
          let { className: a, variant: s, size: l, asChild: n = !1, ...o } = e,
            i = n ? p.DX : 'button';
          return (0, r.jsx)(i, {
            className: c(m({ variant: s, size: l, className: a })),
            ref: t,
            ...o,
          });
        });
      x.displayName = 'Button';
      let h = s.forwardRef((e, t) => {
        let { className: a, ...s } = e;
        return (0, r.jsx)('div', {
          ref: t,
          className: c(
            'rounded-xl border bg-card text-card-foreground shadow',
            a
          ),
          ...s,
        });
      });
      (h.displayName = 'Card'),
        (s.forwardRef((e, t) => {
          let { className: a, ...s } = e;
          return (0, r.jsx)('div', {
            ref: t,
            className: c('flex flex-col space-y-1.5 p-6', a),
            ...s,
          });
        }).displayName = 'CardHeader'),
        (s.forwardRef((e, t) => {
          let { className: a, ...s } = e;
          return (0, r.jsx)('div', {
            ref: t,
            className: c('font-semibold leading-none tracking-tight', a),
            ...s,
          });
        }).displayName = 'CardTitle'),
        (s.forwardRef((e, t) => {
          let { className: a, ...s } = e;
          return (0, r.jsx)('div', {
            ref: t,
            className: c('text-sm text-muted-foreground', a),
            ...s,
          });
        }).displayName = 'CardDescription');
      let g = s.forwardRef((e, t) => {
        let { className: a, ...s } = e;
        return (0, r.jsx)('div', { ref: t, className: c('p-6 pt-0', a), ...s });
      });
      (g.displayName = 'CardContent'),
        (s.forwardRef((e, t) => {
          let { className: a, ...s } = e;
          return (0, r.jsx)('div', {
            ref: t,
            className: c('flex items-center p-6 pt-0', a),
            ...s,
          });
        }).displayName = 'CardFooter');
      let y = (0, f.F)(
          'relative w-full rounded-lg border px-4 py-3 text-sm [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground [&>svg~*]:pl-7',
          {
            variants: {
              variant: {
                default: 'bg-background text-foreground',
                destructive:
                  'border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive',
              },
            },
            defaultVariants: { variant: 'default' },
          }
        ),
        w = s.forwardRef((e, t) => {
          let { className: a, variant: s, ...l } = e;
          return (0, r.jsx)('div', {
            ref: t,
            role: 'alert',
            className: c(y({ variant: s }), a),
            ...l,
          });
        });
      (w.displayName = 'Alert'),
        (s.forwardRef((e, t) => {
          let { className: a, ...s } = e;
          return (0, r.jsx)('h5', {
            ref: t,
            className: c('mb-1 font-medium leading-none tracking-tight', a),
            ...s,
          });
        }).displayName = 'AlertTitle');
      let b = s.forwardRef((e, t) => {
        let { className: a, ...s } = e;
        return (0, r.jsx)('div', {
          ref: t,
          className: c('text-sm [&_p]:leading-relaxed', a),
          ...s,
        });
      });
      b.displayName = 'AlertDescription';
      var v = a(292),
        N = a(3666),
        j = a(7811);
      let E = async () => {
        try {
          let e = j.env.NEXT_PUBLIC_STARKNET_RPC_URL;
          if (null == e)
            throw Error(
              'The Rpc account is not setup in the front-end .env file '
            );
          let t = new N.bd({ nodeUrl: e }),
            a = await (0, v.N)({ modalMode: 'alwaysAsk', modalTheme: 'dark' });
          if (null == a) throw Error('Error with your selected wallet ');
          return await N.fg.connect(t, a);
        } catch (e) {
          console.log('Error :', e);
          return;
        }
      };
      var _ = a(6713);
      let T = (e) => (
        console.log(e),
        e.results.map(
          (e) => (
            console.log(
              'Transaction processed:',
              JSON.stringify(e.transactions)
            ),
            {
              contractAddress: e.transactions.contractAddress,
              entrypoint: e.transactions.entrypoint,
              calldata: e.transactions.calldata,
            }
          )
        )
      );
      var k = a(7811);
      let A = async (e, t, a, r, s, l) => {
        try {
          if (!r || !s || !l) throw Error('Invalid CREDENTIALS');
          let n = 'Deploy '
            .concat(a, ' Account publickey: ')
            .concat(r, ' private key: ')
            .concat(s, ' address: ')
            .concat(l);
          if (!(await e.execute(t)))
            throw Error(
              'The Transfer for fund the new account fail check your balance'
            );
          await new Promise((e) => setTimeout(e, 2e4));
          let o = await fetch('/api/wallet/request', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'x-api-key': k.env.NEXT_PUBLIC_SERVER_API_KEY || '',
              },
              body: JSON.stringify({ request: n }),
              credentials: 'include',
            }),
            i = await o.json(),
            d =
              'failure' === i.status
                ? i.status
                : '✅ Your '
                    .concat(a, ' account has been succesfully deploy at ')
                    .concat(i.contract_address, ' transaction_hash : ')
                    .concat(i.transaction_hash, ', Private key : ')
                    .concat(s);
          return console.log(d), d;
        } catch (e) {
          return e;
        }
      };
      var C = a(1497),
        R = a(2132),
        P = a(4725),
        S = a(6134);
      let I = C.bL,
        O = C.YJ,
        D = C.WT,
        z = s.forwardRef((e, t) => {
          let { className: a, children: s, ...l } = e;
          return (0, r.jsxs)(C.l9, {
            ref: t,
            className: c(
              'flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1',
              a
            ),
            ...l,
            children: [
              s,
              (0, r.jsx)(C.In, {
                asChild: !0,
                children: (0, r.jsx)(R.A, { className: 'h-4 w-4 opacity-50' }),
              }),
            ],
          });
        });
      z.displayName = C.l9.displayName;
      let U = s.forwardRef((e, t) => {
        let { className: a, ...s } = e;
        return (0, r.jsx)(C.PP, {
          ref: t,
          className: c(
            'flex cursor-default items-center justify-center py-1',
            a
          ),
          ...s,
          children: (0, r.jsx)(P.A, { className: 'h-4 w-4' }),
        });
      });
      U.displayName = C.PP.displayName;
      let L = s.forwardRef((e, t) => {
        let { className: a, ...s } = e;
        return (0, r.jsx)(C.wn, {
          ref: t,
          className: c(
            'flex cursor-default items-center justify-center py-1',
            a
          ),
          ...s,
          children: (0, r.jsx)(R.A, { className: 'h-4 w-4' }),
        });
      });
      L.displayName = C.wn.displayName;
      let F = s.forwardRef((e, t) => {
        let { className: a, children: s, position: l = 'popper', ...n } = e;
        return (0, r.jsx)(C.ZL, {
          children: (0, r.jsxs)(C.UC, {
            ref: t,
            className: c(
              'relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
              'popper' === l &&
                'data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1',
              a
            ),
            position: l,
            ...n,
            children: [
              (0, r.jsx)(U, {}),
              (0, r.jsx)(C.LM, {
                className: c(
                  'p-1',
                  'popper' === l &&
                    'h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]'
                ),
                children: s,
              }),
              (0, r.jsx)(L, {}),
            ],
          }),
        });
      });
      (F.displayName = C.UC.displayName),
        (s.forwardRef((e, t) => {
          let { className: a, ...s } = e;
          return (0, r.jsx)(C.JU, {
            ref: t,
            className: c('px-2 py-1.5 text-sm font-semibold', a),
            ...s,
          });
        }).displayName = C.JU.displayName);
      let V = s.forwardRef((e, t) => {
        let { className: a, children: s, ...l } = e;
        return (0, r.jsxs)(C.q7, {
          ref: t,
          className: c(
            'relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
            a
          ),
          ...l,
          children: [
            (0, r.jsx)('span', {
              className:
                'absolute right-2 flex h-3.5 w-3.5 items-center justify-center',
              children: (0, r.jsx)(C.VF, {
                children: (0, r.jsx)(S.A, { className: 'h-4 w-4' }),
              }),
            }),
            (0, r.jsx)(C.p4, { children: s }),
          ],
        });
      });
      (V.displayName = C.q7.displayName),
        (s.forwardRef((e, t) => {
          let { className: a, ...s } = e;
          return (0, r.jsx)(C.wv, {
            ref: t,
            className: c('-mx-1 my-1 h-px bg-muted', a),
            ...s,
          });
        }).displayName = C.wv.displayName);
      var J = a(7675);
      let K = (e, t) => {
          e(null), t(null);
        },
        q = (e) => {
          let { fileInfo: t, setFileInfo: a, setSelectedFile: l } = e,
            n = (0, s.useMemo)(
              () => [
                'application/json',
                'application/zip',
                'application/x-zip-compressed',
                'image/jpeg',
                'image/jpg',
                'image/png',
              ],
              []
            ),
            o = (0, s.useCallback)(
              (e) => {
                let t = ['zip', 'json', 'jpg', 'jpeg', 'png'].includes(
                    e.name.toLowerCase().split('.').pop() || ''
                  ),
                  a = n.includes(e.type);
                return t && a;
              },
              [n]
            ),
            i = (0, s.useCallback)(
              (e) => {
                if (!o(e)) {
                  alert('Only .zip, .json, jpg and png files are accepted');
                  return;
                }
                l(e), a({ name: e.name, size: e.size, type: e.type });
              },
              [l, a, o]
            ),
            d = (0, s.useCallback)(
              (e) => {
                e.preventDefault(), i(e.dataTransfer.files[0]);
              },
              [i]
            );
          return (0, r.jsx)('div', {
            onDrop: d,
            onDragOver: (e) => e.preventDefault(),
            className:
              'border-2 border-dashed border-neutral-700 rounded-lg p-4 text-center '.concat(
                t ? 'bg-neutral-800' : 'bg-neutral-900'
              ),
            children: t
              ? (0, r.jsxs)('div', {
                  className: 'flex flex-col items-center gap-2',
                  children: [
                    (0, r.jsx)('p', {
                      className: 'text-sm text-neutral-300',
                      children: t.name,
                    }),
                    (0, r.jsxs)('p', {
                      className: 'text-xs text-neutral-400',
                      children: [(t.size / 1024).toFixed(2), ' KB'],
                    }),
                    (0, r.jsx)(x, {
                      onClick: () => {
                        K(l, a);
                      },
                      variant: 'destructive',
                      size: 'sm',
                      className: 'mt-2',
                      children: 'Remove File',
                    }),
                  ],
                })
              : (0, r.jsx)(r.Fragment, {
                  children: (0, r.jsxs)('label', {
                    htmlFor: 'file-upload',
                    className: 'cursor-pointer',
                    children: [
                      (0, r.jsxs)('div', {
                        className:
                          'flex flex-row justify-center items-center gap-2',
                        children: [
                          (0, r.jsx)(J.A, {
                            className: 'w-6 h-6 text-neutral-400',
                          }),
                          (0, r.jsx)('p', {
                            className: 'text-sm text-neutral-300',
                            children:
                              'Upload a .zip, .json, jpg or png file here or click to download',
                          }),
                        ],
                      }),
                      (0, r.jsx)('input', {
                        id: 'file-upload',
                        type: 'file',
                        onChange: (e) => {
                          var t;
                          let a =
                            null === (t = e.target.files) || void 0 === t
                              ? void 0
                              : t[0];
                          a && i(a);
                        },
                        accept: '.json,.zip,.jpg,.jpeg,.png',
                        className: 'hidden',
                      }),
                    ],
                  }),
                }),
          });
        };
      var B = a(7811);
      let Y = () => {
        let [e, t] = (0, s.useState)(''),
          [a, i] = (0, s.useState)(null),
          [d, c] = (0, s.useState)(!1),
          [p, f] = (0, s.useState)(!1),
          [m, y] = (0, s.useState)(!1),
          [v, N] = (0, s.useState)(null),
          [j, k] = (0, s.useState)(!1),
          [C, R] = (0, s.useState)('normal'),
          [P, S] = (0, s.useState)(null),
          [U, L] = (0, s.useState)(null);
        (0, s.useEffect)(() => {
          let e;
          return (
            d
              ? (e = setTimeout(() => {
                  f(!0);
                }, 5e3))
              : f(!1),
            () => {
              e && clearTimeout(e);
            }
          );
        }, [d]);
        let J = async () => {
            try {
              let e = await E();
              if (void 0 == e) throw Error('wallet connect fail');
              y(!0), N(e), console.log('Connected');
            } catch (e) {
              console.log('Error', e);
            }
          },
          K = (e) => '0x'.concat(e.slice(2, 4), '...').concat(e.slice(-3)),
          Y = (e) => {
            try {
              let { hostname: t } = new URL(e);
              return ''.concat(t, '/...');
            } catch (t) {
              return e;
            }
          },
          X = async (e) => ('only-value' === C ? e : e.replace(/\\/g, '')),
          W = async (e) => {
            console.log(e);
            let t = await X(e.text),
              a = 0,
              r = setInterval(() => {
                i((e) =>
                  e
                    ? {
                        ...e,
                        text: t.slice(0, a + 1),
                        isTyping: a < t.length - 1,
                      }
                    : e
                ),
                  ++a >= t.length && clearInterval(r);
              }, 10);
          },
          M = async (a) => {
            if ((a.preventDefault(), !e.trim())) return;
            c(!0), f(!1);
            let r = { text: '', timestamp: Date.now(), isTyping: !0 };
            i(r);
            try {
              let t;
              if (P) {
                let e = new FormData();
                e.append('file', P);
                let t = await fetch('/api/wallet/upload_large_file', {
                  method: 'POST',
                  headers: {
                    'x-api-key': B.env.NEXT_PUBLIC_SERVER_API_KEY || '',
                  },
                  body: e,
                });
                if (!t.ok) {
                  let e = await t.text();
                  throw (
                    (console.error('API Error:', {
                      status: t.status,
                      statusText: t.statusText,
                      body: e,
                    }),
                    Error(e))
                  );
                }
              }
              let a = await fetch('/api/wallet/request', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                  'x-api-key': B.env.NEXT_PUBLIC_SERVER_API_KEY || '',
                },
                body: JSON.stringify({ request: e }),
                credentials: 'include',
              });
              if (!a.ok) throw Error('HTTP error! status: '.concat(a.status));
              if (!v)
                throw Error(
                  'Wallet not initialized. Please connect your wallet.'
                );
              if (
                P &&
                !(
                  await fetch('api/wallet/delete_large_file', {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json',
                      'x-api-key': B.env.NEXT_PUBLIC_SERVER_API_KEY || '',
                    },
                    body: JSON.stringify({ filename: P.name }),
                    credentials: 'include',
                  })
                ).ok
              ) {
                let e = await a.text();
                console.error('API error:', {
                  status: a.status,
                  statusText: a.statusText,
                  body: e,
                });
              }
              let s = await a.json();
              if ('INVOKE' === s.transaction_type) {
                let e = s.results[0].additional_data;
                if (!(t = T(s)))
                  throw Error(
                    'The Invoke transaction is in the wrong format. Check the API Response'
                  );
                let a = await v.execute(t);
                W({
                  ...r,
                  text: JSON.stringify({
                    tx: t,
                    transaction_hash: a,
                    additional_data: e || void 0,
                  }),
                });
              } else if ('READ' === s.transaction_type)
                W({ ...r, text: JSON.stringify(JSON.stringify(s)) });
              else if (
                'CREATE_ACCOUNT' === s.transaction_type &&
                'success' === s.status
              ) {
                if (!s) throw Error('Account not set');
                let e = {
                    contractAddress:
                      '0x49d36570d4e46f48e99674bd3fcc84644ddd6b96f7c741b1562b82f9e004dc7',
                    entrypoint: 'transfer',
                    calldata: [s.contractAddress, s.deployFee, '0x0'],
                  },
                  t = A(
                    v,
                    e,
                    s.wallet,
                    s.publicKey,
                    s.privateKey,
                    s.contractAddress
                  );
                W({ ...r, text: await t });
              }
              if (
                !t &&
                'READ' != s.transaction_type &&
                'CREATE_ACCOUNT' != s.transaction_type
              )
                throw Error(
                  'The transactions has to be an INVOKE or DeployAccount transaction'
                );
            } catch (t) {
              console.error('Request error:', t);
              let e =
                t instanceof Error ? t.message : 'An unexpected error occurred';
              W({
                ...r,
                text: 'Error: '.concat(
                  e,
                  '\nPlease try again or contact support if the issue persists.'
                ),
              });
            } finally {
              c(!1), t('');
            }
          },
          H = async (a) => {
            if ((a.preventDefault(), !e.trim())) return;
            c(!0), f(!1);
            let r = { text: '', timestamp: Date.now(), isTyping: !0 };
            i(r);
            try {
              if (P) {
                let e = new FormData();
                e.append('file', P);
                let t = await fetch('/api/key/upload_large_file', {
                  method: 'POST',
                  headers: {
                    'x-api-key': B.env.NEXT_PUBLIC_SERVER_API_KEY || '',
                  },
                  body: e,
                });
                if (!t.ok) {
                  let e = await t.text();
                  throw (
                    (console.error('API Error:', {
                      status: t.status,
                      statusText: t.statusText,
                      body: e,
                    }),
                    Error(e))
                  );
                }
              }
              let t = await fetch('/api/key/request', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                  'x-api-key': B.env.NEXT_PUBLIC_SERVER_API_KEY || '',
                },
                body: JSON.stringify({ request: e }),
                credentials: 'include',
              });
              if (!t.ok) {
                let e = await t.text();
                throw (
                  (console.error('API Error:', {
                    status: t.status,
                    statusText: t.statusText,
                    body: e,
                  }),
                  Error(e))
                );
              }
              let a = await t.json();
              if (!a || 'object' != typeof a)
                throw Error('Invalid response format from server');
              let s = a.output[0].text;
              if (!s) throw Error('No text response');
              if (
                ((s = 'failure' === a.output[0].status ? '❌ ' + s : '✅ ' + s),
                W({ ...r, text: s }),
                P &&
                  !(
                    await fetch('api/key/delete_large_file', {
                      method: 'POST',
                      headers: {
                        'Content-Type': 'application/json',
                        'x-api-key': B.env.NEXT_PUBLIC_SERVER_API_KEY || '',
                      },
                      body: JSON.stringify({ filename: P.name }),
                      credentials: 'include',
                    })
                  ).ok)
              ) {
                let e = await t.text();
                console.error('API error:', {
                  status: t.status,
                  statusText: t.statusText,
                  body: e,
                });
              }
            } catch (t) {
              console.error('Request error:', t);
              let e =
                t instanceof Error ? t.message : 'An unexpected error occurred';
              W({
                ...r,
                text: 'Error: '.concat(
                  e,
                  '\nPlease try again or contact support if the issue persists.'
                ),
              });
            } finally {
              c(!1), t('');
            }
          };
        return (0, r.jsx)('div', {
          className:
            'min-h-screen bg-neutral-950 text-neutral-50 flex items-center justify-center px-4',
          children: (0, r.jsxs)('div', {
            className: 'w-full max-w-lg -mt-32 flex flex-col gap-4 md:gap-8',
            children: [
              (0, r.jsxs)('div', {
                className: 'flex items-center gap-3 md:gap-4 px-2 md:px-0',
                children: [
                  (0, r.jsx)('div', {
                    className: 'relative w-8 h-8 md:w-10 md:h-10',
                    children: (0, r.jsx)(l.default, {
                      src: 'https://pbs.twimg.com/profile_images/1834202903189618688/N4J8emeY_400x400.png',
                      alt: 'Starknet Logo',
                      fill: !0,
                      className: 'rounded-full object-cover',
                    }),
                  }),
                  (0, r.jsx)('h1', {
                    className: 'text-lg md:text-2xl font-semibold text-white',
                    children: 'Starknet Agent',
                  }),
                ],
              }),
              m
                ? (0, r.jsx)(h, {
                    className:
                      'w-full bg-neutral-900 border-neutral-800 shadow-xl',
                    children: (0, r.jsxs)(g, {
                      className: 'p-3 md:p-6 space-y-4 md:space-y-6',
                      children: [
                        (0, r.jsxs)('div', {
                          className: 'flex justify-between items-start',
                          children: [
                            (0, r.jsxs)('div', {
                              className: 'flex items-center gap-3',
                              children: [
                                (0, r.jsx)('button', {
                                  onClick: () => {
                                    k(!j);
                                  },
                                  className:
                                    '\n                    relative flex items-center w-16 h-8 rounded-full \n                    transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2\n                    '.concat(
                                      j
                                        ? 'bg-blue-500 focus:ring-blue-500'
                                        : 'bg-gray-200 focus:ring-gray-500',
                                      '\n                  '
                                    ),
                                  'aria-pressed': j,
                                  title: j
                                    ? 'Desactivate the signature'
                                    : 'Activate the signature',
                                  children: (0, r.jsx)('span', {
                                    className:
                                      '\n                      absolute flex items-center justify-center\n                      w-6 h-6 rounded-full bg-white shadow-md\n                      transition-transform duration-300 ease-in-out\n                      '.concat(
                                        j ? 'translate-x-9' : 'translate-x-1',
                                        '\n                    '
                                      ),
                                    children: j
                                      ? (0, r.jsx)(_.a_f, {
                                          className: 'w-4 h-4 text-blue-500',
                                        })
                                      : (0, r.jsx)(_.t$T, {
                                          className: 'w-4 h-4 text-gray-400',
                                        }),
                                  }),
                                }),
                                (0, r.jsx)('span', {
                                  className: 'text-sm '.concat(
                                    j ? 'text-blue-500' : 'text-gray-500'
                                  ),
                                  children: j
                                    ? 'Signature activate'
                                    : 'Signature desactivate',
                                }),
                              ],
                            }),
                            (0, r.jsxs)(I, {
                              value: C,
                              onValueChange: R,
                              children: [
                                (0, r.jsx)(z, {
                                  className: 'w-[180px] text-white',
                                  children: (0, r.jsx)(D, {
                                    placeholder: 'Choose Style',
                                  }),
                                }),
                                (0, r.jsx)(F, {
                                  className: 'text-white bg-black',
                                  children: (0, r.jsxs)(O, {
                                    children: [
                                      (0, r.jsx)(V, {
                                        value: 'normal',
                                        children: 'Normal',
                                      }),
                                      (0, r.jsx)(V, {
                                        value: 'only-value',
                                        children: 'Only-Value',
                                      }),
                                    ],
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, r.jsxs)('form', {
                          onSubmit: (e) => {
                            e.preventDefault(),
                              console.log(j),
                              !0 === j ? M(e) : H(e);
                          },
                          className: 'relative',
                          children: [
                            (0, r.jsx)(u, {
                              type: 'text',
                              value: e,
                              onChange: (e) => t(e.target.value),
                              className:
                                'w-full bg-neutral-800 border-neutral-700 text-neutral-100 pr-12 focus:ring-2 focus:ring-blue-500 text-sm md:text-base py-2 md:py-3',
                              placeholder: 'Type your request...',
                              disabled: d,
                            }),
                            (0, r.jsx)(x, {
                              type: 'submit',
                              size: 'sm',
                              className:
                                'absolute right-2 top-1/2 -translate-y-1/2 hover:scale-110 transition-all',
                              disabled: d,
                              children: d
                                ? (0, r.jsx)(n.A, {
                                    className:
                                      'h-3 w-3 md:h-4 md:w-4 animate-spin',
                                  })
                                : (0, r.jsx)(o.A, {
                                    className: 'h-3 w-3 md:h-4 md:w-4',
                                  }),
                            }),
                          ],
                        }),
                        (0, r.jsx)(q, {
                          fileInfo: U,
                          setFileInfo: L,
                          setSelectedFile: S,
                        }),
                        a &&
                          (0, r.jsx)(w, {
                            className: 'bg-neutral-800 border-neutral-700',
                            children: (0, r.jsxs)(b, {
                              className:
                                'text-xs md:text-sm text-neutral-200 font-mono whitespace-pre-wrap break-words leading-relaxed',
                              children: [
                                p
                                  ? 'Processing...'
                                  : ((e) => {
                                      let t;
                                      let a =
                                          /((?:https?:\/\/starkscan\.co\/tx\/0x[a-fA-F0-9]{64})|0x[a-fA-F0-9]{64}|https?:\/\/[^\s]+)/g,
                                        s = [],
                                        l = 0;
                                      for (; null !== (t = a.exec(e)); ) {
                                        let o = t[0],
                                          i = t.index,
                                          d = a.lastIndex;
                                        if (
                                          (s.push(e.slice(l, i)),
                                          o.startsWith('0x') && 66 === o.length)
                                        ) {
                                          let e = K(o);
                                          s.push(
                                            (0, r.jsx)(
                                              'a',
                                              {
                                                href: 'https://starkscan.co/contract/'.concat(
                                                  o
                                                ),
                                                target: '_blank',
                                                rel: 'noreferrer',
                                                className:
                                                  'text-blue-500 underline',
                                                children: e,
                                              },
                                              i
                                            )
                                          );
                                        } else if (
                                          o.includes('starkscan.co/tx/0x')
                                        ) {
                                          var n;
                                          let e =
                                              null !==
                                                (n = o.split('/tx/')[1]) &&
                                              void 0 !== n
                                                ? n
                                                : '',
                                            t =
                                              e.startsWith('0x') &&
                                              66 === e.length
                                                ? K(e)
                                                : Y(o);
                                          s.push(
                                            (0, r.jsx)(
                                              'a',
                                              {
                                                href: o,
                                                target: '_blank',
                                                rel: 'noreferrer',
                                                className:
                                                  'text-blue-500 underline',
                                                children: t,
                                              },
                                              i
                                            )
                                          );
                                        } else
                                          o.startsWith('http')
                                            ? s.push(
                                                (0, r.jsx)(
                                                  'a',
                                                  {
                                                    href: o,
                                                    target: '_blank',
                                                    rel: 'noreferrer',
                                                    className:
                                                      'text-blue-500 underline',
                                                    children: Y(o),
                                                  },
                                                  i
                                                )
                                              )
                                            : s.push(o);
                                        l = d;
                                      }
                                      return s.push(e.slice(l)), s;
                                    })(a.text),
                                (a.isTyping || d) &&
                                  (0, r.jsx)('span', {
                                    className: 'animate-pulse ml-1',
                                    children: '▋',
                                  }),
                              ],
                            }),
                          }),
                      ],
                    }),
                  })
                : (0, r.jsx)('button', {
                    onClick: J,
                    className:
                      'bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded',
                    children: 'ConnectWallet',
                  }),
            ],
          }),
        });
      };
    },
  },
  (e) => {
    var t = (t) => e((e.s = t));
    e.O(0, [821, 751, 6, 200, 621, 947, 379, 487, 358], () => t(2134)),
      (_N_E = e.O());
  },
]);
