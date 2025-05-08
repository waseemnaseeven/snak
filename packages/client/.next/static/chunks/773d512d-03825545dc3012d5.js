'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [200],
  {
    292: (
      __unused_webpack___webpack_module__,
      __webpack_exports__,
      __webpack_require__
    ) => {
      let src_url_equal_anchor, current_component;
      __webpack_require__.d(__webpack_exports__, { N: () => connect });
      var Q,
        q,
        R,
        B,
        Y,
        J,
        K,
        Z,
        C,
        T,
        P,
        $,
        ee,
        k,
        F,
        process = __webpack_require__(7811);
      function noop() {}
      function run(e) {
        return e();
      }
      function blank_object() {
        return Object.create(null);
      }
      function run_all(e) {
        e.forEach(run);
      }
      function is_function(e) {
        return 'function' == typeof e;
      }
      function safe_not_equal(e, t) {
        return e != e
          ? t == t
          : e !== t || (e && 'object' == typeof e) || 'function' == typeof e;
      }
      function src_url_equal(e, t) {
        return (
          src_url_equal_anchor ||
            (src_url_equal_anchor = document.createElement('a')),
          (src_url_equal_anchor.href = t),
          e === src_url_equal_anchor.href
        );
      }
      function is_empty(e) {
        return 0 === Object.keys(e).length;
      }
      function null_to_empty(e) {
        return null == e ? '' : e;
      }
      function append(e, t) {
        e.appendChild(t);
      }
      function append_styles(e, t, r) {
        let n = get_root_for_style(e);
        if (!n.getElementById(t)) {
          let e = element('style');
          (e.id = t), (e.textContent = r), append_stylesheet(n, e);
        }
      }
      function get_root_for_style(e) {
        if (!e) return document;
        let t = e.getRootNode ? e.getRootNode() : e.ownerDocument;
        return t && t.host ? t : e.ownerDocument;
      }
      function append_stylesheet(e, t) {
        return append(e.head || e, t), t.sheet;
      }
      function insert(e, t, r) {
        e.insertBefore(t, r || null);
      }
      function detach(e) {
        e.parentNode && e.parentNode.removeChild(e);
      }
      function destroy_each(e, t) {
        for (let r = 0; r < e.length; r += 1) e[r] && e[r].d(t);
      }
      function element(e) {
        return document.createElement(e);
      }
      function text(e) {
        return document.createTextNode(e);
      }
      function space() {
        return text(' ');
      }
      function listen(e, t, r, n) {
        return (
          e.addEventListener(t, r, n), () => e.removeEventListener(t, r, n)
        );
      }
      function attr(e, t, r) {
        null == r
          ? e.removeAttribute(t)
          : e.getAttribute(t) !== r && e.setAttribute(t, r);
      }
      function children(e) {
        return Array.from(e.childNodes);
      }
      function set_data(e, t) {
        (t = '' + t), e.data !== t && (e.data = t);
      }
      function set_current_component(e) {
        current_component = e;
      }
      function get_current_component() {
        if (!current_component)
          throw Error('Function called outside component initialization');
        return current_component;
      }
      function onMount(e) {
        get_current_component().$$.on_mount.push(e);
      }
      let dirty_components = [],
        binding_callbacks = [],
        render_callbacks = [],
        flush_callbacks = [],
        resolved_promise = Promise.resolve(),
        update_scheduled = !1;
      function schedule_update() {
        update_scheduled ||
          ((update_scheduled = !0), resolved_promise.then(flush));
      }
      function add_render_callback(e) {
        render_callbacks.push(e);
      }
      let seen_callbacks = new Set(),
        flushidx = 0;
      function flush() {
        if (0 !== flushidx) return;
        let e = current_component;
        do {
          try {
            for (; flushidx < dirty_components.length; ) {
              let e = dirty_components[flushidx];
              flushidx++, set_current_component(e), update(e.$$);
            }
          } catch (e) {
            throw ((dirty_components.length = 0), (flushidx = 0), e);
          }
          for (
            set_current_component(null),
              dirty_components.length = 0,
              flushidx = 0;
            binding_callbacks.length;

          )
            binding_callbacks.pop()();
          for (let e = 0; e < render_callbacks.length; e += 1) {
            let t = render_callbacks[e];
            seen_callbacks.has(t) || (seen_callbacks.add(t), t());
          }
          render_callbacks.length = 0;
        } while (dirty_components.length);
        for (; flush_callbacks.length; ) flush_callbacks.pop()();
        (update_scheduled = !1),
          seen_callbacks.clear(),
          set_current_component(e);
      }
      function update(e) {
        if (null !== e.fragment) {
          e.update(), run_all(e.before_update);
          let t = e.dirty;
          (e.dirty = [-1]),
            e.fragment && e.fragment.p(e.ctx, t),
            e.after_update.forEach(add_render_callback);
        }
      }
      function flush_render_callbacks(e) {
        let t = [],
          r = [];
        render_callbacks.forEach((n) =>
          -1 === e.indexOf(n) ? t.push(n) : r.push(n)
        ),
          r.forEach((e) => e()),
          (render_callbacks = t);
      }
      let outroing = new Set();
      function transition_in(e, t) {
        e && e.i && (outroing.delete(e), e.i(t));
      }
      function mount_component(e, t, r, n) {
        let { fragment: o, after_update: i } = e.$$;
        o && o.m(t, r),
          n ||
            add_render_callback(() => {
              let t = e.$$.on_mount.map(run).filter(is_function);
              e.$$.on_destroy ? e.$$.on_destroy.push(...t) : run_all(t),
                (e.$$.on_mount = []);
            }),
          i.forEach(add_render_callback);
      }
      function destroy_component(e, t) {
        let r = e.$$;
        null !== r.fragment &&
          (flush_render_callbacks(r.after_update),
          run_all(r.on_destroy),
          r.fragment && r.fragment.d(t),
          (r.on_destroy = r.fragment = null),
          (r.ctx = []));
      }
      function make_dirty(e, t) {
        -1 === e.$$.dirty[0] &&
          (dirty_components.push(e), schedule_update(), e.$$.dirty.fill(0)),
          (e.$$.dirty[(t / 31) | 0] |= 1 << t % 31);
      }
      function init$1(e, t, r, n, o, i, s, a = [-1]) {
        let l = current_component;
        set_current_component(e);
        let c = (e.$$ = {
          fragment: null,
          ctx: [],
          props: i,
          update: noop,
          not_equal: o,
          bound: blank_object(),
          on_mount: [],
          on_destroy: [],
          on_disconnect: [],
          before_update: [],
          after_update: [],
          context: new Map(t.context || (l ? l.$$.context : [])),
          callbacks: blank_object(),
          dirty: a,
          skip_bound: !1,
          root: t.target || l.$$.root,
        });
        s && s(c.root);
        let u = !1;
        if (
          ((c.ctx = r
            ? r(e, t.props || {}, (t, r, ...n) => {
                let i = n.length ? n[0] : r;
                return (
                  c.ctx &&
                    o(c.ctx[t], (c.ctx[t] = i)) &&
                    (!c.skip_bound && c.bound[t] && c.bound[t](i),
                    u && make_dirty(e, t)),
                  r
                );
              })
            : []),
          c.update(),
          (u = !0),
          run_all(c.before_update),
          (c.fragment = !!n && n(c.ctx)),
          t.target)
        ) {
          if (t.hydrate) {
            let e = children(t.target);
            c.fragment && c.fragment.l(e), e.forEach(detach);
          } else c.fragment && c.fragment.c();
          t.intro && transition_in(e.$$.fragment),
            mount_component(e, t.target, t.anchor, t.customElement),
            flush();
        }
        set_current_component(l);
      }
      class SvelteComponent {
        $destroy() {
          destroy_component(this, 1), (this.$destroy = noop);
        }
        $on(e, t) {
          if (!is_function(t)) return noop;
          let r = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
          return (
            r.push(t),
            () => {
              let e = r.indexOf(t);
              -1 !== e && r.splice(e, 1);
            }
          );
        }
        $set(e) {
          this.$$set &&
            !is_empty(e) &&
            ((this.$$.skip_bound = !0),
            this.$$set(e),
            (this.$$.skip_bound = !1));
        }
      }
      function add_css(e) {
        append_styles(
          e,
          'svelte-j32xt0',
          `.sr-only.svelte-j32xt0{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}.fixed.svelte-j32xt0{position:fixed}.inset-0.svelte-j32xt0{inset:0px}.z-40.svelte-j32xt0{z-index:40}.z-50.svelte-j32xt0{z-index:50}.mx-6.svelte-j32xt0{margin-left:1.5rem;margin-right:1.5rem}.mb-4.svelte-j32xt0{margin-bottom:1rem}.flex.svelte-j32xt0{display:flex}.h-8.svelte-j32xt0{height:2rem}.w-8.svelte-j32xt0{width:2rem}.w-full.svelte-j32xt0{width:100%}.max-w-\\[500px\\].svelte-j32xt0{max-width:500px}@keyframes svelte-j32xt0-spin{to{transform:rotate(360deg)}}.animate-spin.svelte-j32xt0{animation:svelte-j32xt0-spin 1s linear infinite}.cursor-pointer.svelte-j32xt0{cursor:pointer}.flex-col.svelte-j32xt0{flex-direction:column}.items-center.svelte-j32xt0{align-items:center}.justify-center.svelte-j32xt0{justify-content:center}.justify-between.svelte-j32xt0{justify-content:space-between}.gap-3.svelte-j32xt0{gap:0.75rem}.rounded-full.svelte-j32xt0{border-radius:9999px}.rounded-md.svelte-j32xt0{border-radius:0.375rem}.bg-black\\/25.svelte-j32xt0{background-color:rgb(0 0 0 / 0.25)}.bg-slate-100.svelte-j32xt0{--tw-bg-opacity:1;background-color:rgb(241 245 249 / var(--tw-bg-opacity, 1))}.bg-slate-50.svelte-j32xt0{--tw-bg-opacity:1;background-color:rgb(248 250 252 / var(--tw-bg-opacity, 1))}.fill-neutral-600.svelte-j32xt0{fill:#525252}.p-3.svelte-j32xt0{padding:0.75rem}.p-4.svelte-j32xt0{padding:1rem}.text-center.svelte-j32xt0{text-align:center}.text-xl.svelte-j32xt0{font-size:1.25rem;line-height:1.75rem}.text-neutral-300.svelte-j32xt0{--tw-text-opacity:1;color:rgb(212 212 212 / var(--tw-text-opacity, 1))}.antialiased.svelte-j32xt0{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.shadow.svelte-j32xt0{--tw-shadow:0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);--tw-shadow-colored:0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}.shadow-sm.svelte-j32xt0{--tw-shadow:0 1px 2px 0 rgb(0 0 0 / 0.05);--tw-shadow-colored:0 1px 2px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}.filter.svelte-j32xt0{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.backdrop-blur-sm.svelte-j32xt0{--tw-backdrop-blur:blur(4px);-webkit-backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia)}.transition-colors.svelte-j32xt0{transition-property:color, background-color, border-color, text-decoration-color, fill, stroke;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms}.svelte-j32xt0,.svelte-j32xt0::before,.svelte-j32xt0::after{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x:  ;--tw-pan-y:  ;--tw-pinch-zoom:  ;--tw-scroll-snap-strictness:proximity;--tw-gradient-from-position:  ;--tw-gradient-via-position:  ;--tw-gradient-to-position:  ;--tw-ordinal:  ;--tw-slashed-zero:  ;--tw-numeric-figure:  ;--tw-numeric-spacing:  ;--tw-numeric-fraction:  ;--tw-ring-inset:  ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgb(59 130 246 / 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur:  ;--tw-brightness:  ;--tw-contrast:  ;--tw-grayscale:  ;--tw-hue-rotate:  ;--tw-invert:  ;--tw-saturate:  ;--tw-sepia:  ;--tw-drop-shadow:  ;--tw-backdrop-blur:  ;--tw-backdrop-brightness:  ;--tw-backdrop-contrast:  ;--tw-backdrop-grayscale:  ;--tw-backdrop-hue-rotate:  ;--tw-backdrop-invert:  ;--tw-backdrop-opacity:  ;--tw-backdrop-saturate:  ;--tw-backdrop-sepia:  ;--tw-contain-size:  ;--tw-contain-layout:  ;--tw-contain-paint:  ;--tw-contain-style:  }.svelte-j32xt0::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x:  ;--tw-pan-y:  ;--tw-pinch-zoom:  ;--tw-scroll-snap-strictness:proximity;--tw-gradient-from-position:  ;--tw-gradient-via-position:  ;--tw-gradient-to-position:  ;--tw-ordinal:  ;--tw-slashed-zero:  ;--tw-numeric-figure:  ;--tw-numeric-spacing:  ;--tw-numeric-fraction:  ;--tw-ring-inset:  ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgb(59 130 246 / 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur:  ;--tw-brightness:  ;--tw-contrast:  ;--tw-grayscale:  ;--tw-hue-rotate:  ;--tw-invert:  ;--tw-saturate:  ;--tw-sepia:  ;--tw-drop-shadow:  ;--tw-backdrop-blur:  ;--tw-backdrop-brightness:  ;--tw-backdrop-contrast:  ;--tw-backdrop-grayscale:  ;--tw-backdrop-hue-rotate:  ;--tw-backdrop-invert:  ;--tw-backdrop-opacity:  ;--tw-backdrop-saturate:  ;--tw-backdrop-sepia:  ;--tw-contain-size:  ;--tw-contain-layout:  ;--tw-contain-paint:  ;--tw-contain-style:  }.svelte-j32xt0,.svelte-j32xt0::before,.svelte-j32xt0::after{box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}.svelte-j32xt0::before,.svelte-j32xt0::after{--tw-content:''}:host{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;font-family:ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";font-feature-settings:normal;font-variation-settings:normal;-webkit-tap-highlight-color:transparent}h1.svelte-j32xt0{font-size:inherit;font-weight:inherit}a.svelte-j32xt0{color:inherit;text-decoration:inherit}.svelte-j32xt0:-moz-focusring{outline:auto}.svelte-j32xt0:-moz-ui-invalid{box-shadow:none}.svelte-j32xt0::-webkit-inner-spin-button,.svelte-j32xt0::-webkit-outer-spin-button{height:auto}.svelte-j32xt0::-webkit-search-decoration{-webkit-appearance:none}.svelte-j32xt0::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}h1.svelte-j32xt0{margin:0}ul.svelte-j32xt0{list-style:none;margin:0;padding:0}[role="button"].svelte-j32xt0{cursor:pointer}.svelte-j32xt0:disabled{cursor:default}img.svelte-j32xt0,svg.svelte-j32xt0{display:block;vertical-align:middle}img.svelte-j32xt0{max-width:100%;height:auto}.svelte-j32xt0{font-family:Nunito, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
      Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
      sans-serif;-webkit-font-smoothing:antialiased}.hover\\:bg-slate-200.svelte-j32xt0:hover{--tw-bg-opacity:1;background-color:rgb(226 232 240 / var(--tw-bg-opacity, 1))}.dark\\:border-neutral-600.svelte-j32xt0:is(.dark *){--tw-border-opacity:1;border-color:rgb(82 82 82 / var(--tw-border-opacity, 1))}.dark\\:bg-neutral-800.svelte-j32xt0:is(.dark *){--tw-bg-opacity:1;background-color:rgb(38 38 38 / var(--tw-bg-opacity, 1))}.dark\\:bg-neutral-900.svelte-j32xt0:is(.dark *){--tw-bg-opacity:1;background-color:rgb(23 23 23 / var(--tw-bg-opacity, 1))}.dark\\:fill-neutral-300.svelte-j32xt0:is(.dark *){fill:#d4d4d4}.dark\\:text-neutral-600.svelte-j32xt0:is(.dark *){--tw-text-opacity:1;color:rgb(82 82 82 / var(--tw-text-opacity, 1))}.dark\\:text-white.svelte-j32xt0:is(.dark *){--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.dark\\:hover\\:bg-neutral-700.svelte-j32xt0:hover:is(.dark *){--tw-bg-opacity:1;background-color:rgb(64 64 64 / var(--tw-bg-opacity, 1))}`
        );
      }
      function get_each_context(e, t, r) {
        let n = e.slice();
        return (n[20] = t[r]), n;
      }
      function get_each_context_1(e, t, r) {
        let n = e.slice();
        return (n[23] = t[r]), n;
      }
      function create_else_block(e) {
        let t, r;
        return {
          c() {
            attr((t = element('img')), 'alt', e[23].name),
              src_url_equal(t.src, (r = e[23].icon)) || attr(t, 'src', r),
              attr(t, 'class', 'w-8 h-8 rounded-full svelte-j32xt0');
          },
          m(e, r) {
            insert(e, t, r);
          },
          p: noop,
          d(e) {
            e && detach(t);
          },
        };
      }
      function create_if_block(e) {
        let t;
        return {
          c() {
            ((t = element('div')).innerHTML =
              `<svg aria-hidden="true" class="w-8 h-8 text-neutral-300 animate-spin dark:text-neutral-600 fill-neutral-600 dark:fill-neutral-300 svelte-j32xt0" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" class="svelte-j32xt0"></path><path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" class="svelte-j32xt0"></path></svg> 
              <span class="sr-only svelte-j32xt0">Loading...</span>`),
              attr(t, 'role', 'status'),
              attr(t, 'class', 'svelte-j32xt0');
          },
          m(e, r) {
            insert(e, t, r);
          },
          p: noop,
          d(e) {
            e && detach(t);
          },
        };
      }
      function create_each_block_1(e) {
        let t,
          r = e[23].name + '',
          n,
          o,
          i,
          s;
        function a(e, t) {
          return e[1] === e[23].id ? create_if_block : create_else_block;
        }
        let l = a(e),
          c = l(e);
        function u() {
          return e[12](e[23]);
        }
        function d(...t) {
          return e[13](e[23], ...t);
        }
        return {
          c() {
            (t = element('li')),
              (n = text(r)),
              (o = space()),
              c.c(),
              attr(
                t,
                'class',
                'flex justify-between items-center p-3 bg-slate-100 rounded-md cursor-pointer shadow-sm hover:bg-slate-200 transition-colors dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:border-neutral-600 dark:text-white svelte-j32xt0'
              );
          },
          m(e, r) {
            insert(e, t, r),
              append(t, n),
              append(t, o),
              c.m(t, null),
              i ||
                ((s = [listen(t, 'click', u), listen(t, 'keyup', d)]),
                (i = !0));
          },
          p(r, n) {
            l === (l = a((e = r))) && c
              ? c.p(e, n)
              : (c.d(1), (c = l(e)) && (c.c(), c.m(t, null)));
          },
          d(e) {
            e && detach(t), c.d(), (i = !1), run_all(s);
          },
        };
      }
      function create_each_block(e) {
        let t,
          r,
          n = e[20].name + '',
          o,
          i,
          s,
          a,
          l,
          c,
          u,
          d,
          h,
          f;
        return {
          c() {
            (t = element('a')),
              (r = element('li')),
              (o = text(n)),
              (i = space()),
              (s = element('img')),
              (c = space()),
              attr(s, 'alt', (a = e[20].name)),
              src_url_equal(s.src, (l = e[20].icon)) || attr(s, 'src', l),
              attr(s, 'class', 'w-8 h-8 rounded-full svelte-j32xt0'),
              attr(
                r,
                'class',
                'flex justify-between items-center p-3 bg-slate-100 rounded-md shadow-sm cursor-pointer hover:bg-slate-200 transition-colors dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:border-neutral-600 dark:text-white svelte-j32xt0'
              ),
              attr(t, 'alt', (u = e[20].name + ' download link')),
              attr(t, 'href', (d = e[20].download)),
              attr(t, 'target', '_blank'),
              attr(t, 'rel', 'noopener noreferrer'),
              attr(t, 'class', 'svelte-j32xt0');
          },
          m(n, a) {
            insert(n, t, a),
              append(t, r),
              append(r, o),
              append(r, i),
              append(r, s),
              append(t, c),
              h ||
                ((f = [listen(r, 'click', e[14]), listen(r, 'keyup', e[15])]),
                (h = !0));
          },
          p(e, r) {
            1 & r && n !== (n = e[20].name + '') && set_data(o, n),
              1 & r && a !== (a = e[20].name) && attr(s, 'alt', a),
              1 & r &&
                !src_url_equal(s.src, (l = e[20].icon)) &&
                attr(s, 'src', l),
              1 & r &&
                u !== (u = e[20].name + ' download link') &&
                attr(t, 'alt', u),
              1 & r && d !== (d = e[20].download) && attr(t, 'href', d);
          },
          d(e) {
            e && detach(t), (h = !1), run_all(f);
          },
        };
      }
      function create_fragment(e) {
        let t,
          r,
          n,
          o,
          i,
          s,
          a,
          l,
          c,
          u,
          d,
          h,
          f = e[4],
          g = [];
        for (let t = 0; t < f.length; t += 1)
          g[t] = create_each_block_1(get_each_context_1(e, f, t));
        let p = e[0],
          m = [];
        for (let t = 0; t < p.length; t += 1)
          m[t] = create_each_block(get_each_context(e, p, t));
        return {
          c() {
            (t = element('div')),
              (r = element('main')),
              (n = element('header')),
              ((o = element('h1')).textContent = 'Connect a wallet'),
              (i = space()),
              ((s = element('span')).innerHTML =
                '<svg xmlns="http://www.w3.org/2000/svg" height="24px" width="24px" viewBox="0 0 24 24" fill="currentColor" class="svelte-j32xt0"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" class="svelte-j32xt0"></path></svg>'),
              (a = space()),
              (l = element('ul'));
            for (let e = 0; e < g.length; e += 1) g[e].c();
            c = space();
            for (let e = 0; e < m.length; e += 1) m[e].c();
            attr(o, 'class', 'text-xl svelte-j32xt0'),
              attr(s, 'role', 'button'),
              attr(s, 'alt', 'Close'),
              attr(s, 'class', 'cursor-pointer svelte-j32xt0'),
              attr(
                n,
                'class',
                'flex items-center justify-between mb-4 svelte-j32xt0'
              ),
              attr(l, 'class', 'flex flex-col gap-3 svelte-j32xt0'),
              attr(r, 'role', 'dialog'),
              attr(
                r,
                'class',
                null_to_empty(
                  'bg-slate-50 rounded-md shadow w-full max-w-[500px] mx-6 p-4 text-center z-50 dark:bg-neutral-900 dark:text-white'
                ) + ' svelte-j32xt0'
              ),
              attr(
                t,
                'class',
                (u =
                  null_to_empty(
                    'backdrop-blur-sm fixed inset-0 flex items-center justify-center bg-black/25 z-40 ' +
                      e[2]
                  ) + ' svelte-j32xt0')
              );
          },
          m(u, f) {
            insert(u, t, f),
              append(t, r),
              append(r, n),
              append(n, o),
              append(n, i),
              append(n, s),
              append(r, a),
              append(r, l);
            for (let e = 0; e < g.length; e += 1) g[e] && g[e].m(l, null);
            append(l, c);
            for (let e = 0; e < m.length; e += 1) m[e] && m[e].m(l, null);
            d ||
              ((h = [
                listen(s, 'click', e[10]),
                listen(s, 'keyup', e[11]),
                listen(r, 'click', click_handler_3),
                listen(r, 'keyup', keyup_handler_3),
                listen(t, 'click', e[16]),
                listen(t, 'keyup', e[17]),
              ]),
              (d = !0));
          },
          p(e, [r]) {
            if (26 & r) {
              let t;
              for (t = 0, f = e[4]; t < f.length; t += 1) {
                let n = get_each_context_1(e, f, t);
                g[t]
                  ? g[t].p(n, r)
                  : ((g[t] = create_each_block_1(n)), g[t].c(), g[t].m(l, c));
              }
              for (; t < g.length; t += 1) g[t].d(1);
              g.length = f.length;
            }
            if (9 & r) {
              let t;
              for (t = 0, p = e[0]; t < p.length; t += 1) {
                let n = get_each_context(e, p, t);
                m[t]
                  ? m[t].p(n, r)
                  : ((m[t] = create_each_block(n)), m[t].c(), m[t].m(l, null));
              }
              for (; t < m.length; t += 1) m[t].d(1);
              m.length = p.length;
            }
            4 & r &&
              u !==
                (u =
                  null_to_empty(
                    'backdrop-blur-sm fixed inset-0 flex items-center justify-center bg-black/25 z-40 ' +
                      e[2]
                  ) + ' svelte-j32xt0') &&
              attr(t, 'class', u);
          },
          i: noop,
          o: noop,
          d(e) {
            e && detach(t),
              destroy_each(g, e),
              destroy_each(m, e),
              (d = !1),
              run_all(h);
          },
        };
      }
      let click_handler_3 = (e) => e.stopPropagation(),
        keyup_handler_3 = (e) => e.stopPropagation();
      function instance(e, t, r) {
        let n = 'u' > typeof window ? window : null,
          { lastWallet: o = null } = t,
          { installedWallets: i = [] } = t,
          { authorizedWallets: s = [] } = t,
          { discoveryWallets: a = [] } = t,
          { callback: l = async () => {} } = t,
          { theme: c = null } = t,
          u = !1,
          d = async (e) => {
            var t;
            r(1, (u = null != (t = null == e ? void 0 : e.id) && t)),
              await l(e).catch(() => {}),
              r(1, (u = !1));
          },
          h = '';
        h =
          'dark' === c ||
          (null === c &&
            (null == n
              ? void 0
              : n.matchMedia('(prefers-color-scheme: dark)').matches))
            ? 'dark'
            : '';
        let f = (e) => {
          r(2, (h = e.matches ? 'dark' : ''));
        };
        onMount(() => {
          if (null === c)
            return (
              null == n ||
                n
                  .matchMedia('(prefers-color-scheme: dark)')
                  .addEventListener('change', f),
              () => {
                null == n ||
                  n
                    .matchMedia('(prefers-color-scheme: dark)')
                    .removeEventListener('change', f);
              }
            );
        });
        let g = [o, ...s, ...i].filter(Boolean),
          p = () => d(null),
          m = (e) => {
            'Enter' === e.key && d(null);
          },
          M = (e) => d(e),
          b = (e, t) => {
            'Enter' === t.key && d(e);
          },
          w = () => d(null),
          y = (e) => {
            'Enter' === e.key && d(null);
          },
          I = () => d(null),
          A = (e) => {
            'Escape' === e.key && d(null);
          };
        return (
          (e.$$set = (e) => {
            'lastWallet' in e && r(5, (o = e.lastWallet)),
              'installedWallets' in e && r(6, (i = e.installedWallets)),
              'authorizedWallets' in e && r(7, (s = e.authorizedWallets)),
              'discoveryWallets' in e && r(0, (a = e.discoveryWallets)),
              'callback' in e && r(8, (l = e.callback)),
              'theme' in e && r(9, (c = e.theme));
          }),
          [a, u, h, d, g, o, i, s, l, c, p, m, M, b, w, y, I, A]
        );
      }
      class Modal extends SvelteComponent {
        constructor(e) {
          super(),
            init$1(
              this,
              e,
              instance,
              create_fragment,
              safe_not_equal,
              {
                lastWallet: 5,
                installedWallets: 6,
                authorizedWallets: 7,
                discoveryWallets: 0,
                callback: 8,
                theme: 9,
              },
              add_css
            );
        }
      }
      function excludeWallets(e, t) {
        return e.filter((e) => !t.some((t) => t.id === e.id));
      }
      async function show({
        discoveryWallets: e,
        installedWallets: t,
        lastWallet: r,
        authorizedWallets: n,
        enable: o,
        modalOptions: i,
      }) {
        return new Promise((s) => {
          var a;
          let l = [r].filter(Boolean);
          (n = excludeWallets(n, l)),
            (t = excludeWallets(t, [...l, ...n])),
            (e = excludeWallets(e, [...l, ...t, ...n]));
          let c = new Modal({
            target: document.body,
            props: {
              callback: async (e) => {
                var t;
                let r = null != (t = await (null == o ? void 0 : o(e))) ? t : e;
                c.$destroy(), s(r);
              },
              lastWallet: r,
              installedWallets: t,
              authorizedWallets: n,
              discoveryWallets: e,
              theme:
                (null == i ? void 0 : i.theme) === 'system'
                  ? null
                  : null != (a = null == i ? void 0 : i.theme)
                    ? a
                    : null,
            },
          });
        });
      }
      var te = Object.defineProperty,
        re = (e, t, r) =>
          t in e
            ? te(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        O = (e, t, r) => (re(e, 'symbol' != typeof t ? t + '' : t, r), r),
        X = (e, t, r) => {
          if (!t.has(e)) throw TypeError('Cannot ' + r);
        },
        v = (e, t, r) => (
          X(e, t, 'read from private field'), r ? r.call(e) : t.get(e)
        ),
        x = (e, t, r) => {
          if (t.has(e))
            throw TypeError(
              'Cannot add the same private member more than once'
            );
          t instanceof WeakSet ? t.add(e) : t.set(e, r);
        },
        H = (e, t, r, n) => (
          X(e, t, 'write to private field'), n ? n.call(e, r) : t.set(e, r), r
        ),
        j = (e, t, r) => (X(e, t, 'access private method'), r);
      let generateUID = () =>
          `${Date.now()}-${Math.floor(0x82f79cd8fff * Math.random()) + 1e12}`,
        shuffle = (e) => {
          for (let t = e.length - 1; t > 0; t--) {
            let r = Math.floor(Math.random() * (t + 1));
            [e[t], e[r]] = [e[r], e[t]];
          }
          return e;
        },
        pipe$1 =
          (...e) =>
          (t) =>
            e.reduce((e, t) => e.then(t), Promise.resolve(t));
      function ensureKeysArray(e) {
        return Object.keys(e);
      }
      let ssrSafeWindow$1 = 'u' > typeof window ? window : null;
      function getBuilderId() {
        return 'u' > typeof FEDERATION_BUILD_IDENTIFIER
          ? FEDERATION_BUILD_IDENTIFIER
          : '';
      }
      function isDebugMode$1() {
        return !1;
      }
      function isBrowserEnv$1() {
        return 'u' > typeof window;
      }
      let LOG_CATEGORY$1 = '[ Federation Runtime ]';
      function assert(e, t) {
        e || error(t);
      }
      function error(e) {
        throw e instanceof Error
          ? ((e.message = `${LOG_CATEGORY$1}: ${e.message}`), e)
          : Error(`${LOG_CATEGORY$1}: ${e}`);
      }
      function warn$1(e) {
        e instanceof Error
          ? ((e.message = `${LOG_CATEGORY$1}: ${e.message}`), console.warn(e))
          : console.warn(`${LOG_CATEGORY$1}: ${e}`);
      }
      function addUniqueItem(e, t) {
        return -1 === e.findIndex((e) => e === t) && e.push(t), e;
      }
      function getFMId(e) {
        return 'version' in e && e.version
          ? `${e.name}:${e.version}`
          : 'entry' in e && e.entry
            ? `${e.name}:${e.entry}`
            : `${e.name}`;
      }
      function isRemoteInfoWithEntry(e) {
        return 'u' > typeof e.entry;
      }
      function isPureRemoteEntry(e) {
        return !e.entry.includes('.json') && e.entry.includes('.js');
      }
      function safeToString$1(e) {
        try {
          return JSON.stringify(e, null, 2);
        } catch {
          return '';
        }
      }
      function isObject(e) {
        return e && 'object' == typeof e;
      }
      let objectToString = Object.prototype.toString;
      function isPlainObject(e) {
        return '[object Object]' === objectToString.call(e);
      }
      function arrayOptions(e) {
        return Array.isArray(e) ? e : [e];
      }
      function _extends$1$1() {
        return (_extends$1$1 =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t];
              for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
          }).apply(this, arguments);
      }
      function _object_without_properties_loose$1(e, t) {
        if (null == e) return {};
        var r,
          n,
          o = {},
          i = Object.keys(e);
        for (n = 0; n < i.length; n++)
          (r = i[n]), t.indexOf(r) >= 0 || (o[r] = e[r]);
        return o;
      }
      let nativeGlobal = (() => {
          try {
            return Function('return this')();
          } catch {
            return globalThis;
          }
        })(),
        Global = nativeGlobal;
      function definePropertyGlobalVal(e, t, r) {
        Object.defineProperty(e, t, {
          value: r,
          configurable: !1,
          writable: !0,
        });
      }
      function includeOwnProperty(e, t) {
        return Object.hasOwnProperty.call(e, t);
      }
      includeOwnProperty(globalThis, '__GLOBAL_LOADING_REMOTE_ENTRY__') ||
        definePropertyGlobalVal(
          globalThis,
          '__GLOBAL_LOADING_REMOTE_ENTRY__',
          {}
        );
      let globalLoading = globalThis.__GLOBAL_LOADING_REMOTE_ENTRY__;
      function setGlobalDefaultVal(e) {
        var t, r, n, o, i, s;
        includeOwnProperty(e, '__VMOK__') &&
          !includeOwnProperty(e, '__FEDERATION__') &&
          definePropertyGlobalVal(e, '__FEDERATION__', e.__VMOK__),
          includeOwnProperty(e, '__FEDERATION__') ||
            (definePropertyGlobalVal(e, '__FEDERATION__', {
              __GLOBAL_PLUGIN__: [],
              __INSTANCES__: [],
              moduleInfo: {},
              __SHARE__: {},
              __MANIFEST_LOADING__: {},
              __PRELOADED_MAP__: new Map(),
            }),
            definePropertyGlobalVal(e, '__VMOK__', e.__FEDERATION__)),
          null != (t = e.__FEDERATION__).__GLOBAL_PLUGIN__ ||
            (t.__GLOBAL_PLUGIN__ = []),
          null != (r = e.__FEDERATION__).__INSTANCES__ ||
            (r.__INSTANCES__ = []),
          null != (n = e.__FEDERATION__).moduleInfo || (n.moduleInfo = {}),
          null != (o = e.__FEDERATION__).__SHARE__ || (o.__SHARE__ = {}),
          null != (i = e.__FEDERATION__).__MANIFEST_LOADING__ ||
            (i.__MANIFEST_LOADING__ = {}),
          null != (s = e.__FEDERATION__).__PRELOADED_MAP__ ||
            (s.__PRELOADED_MAP__ = new Map());
      }
      function getGlobalFederationInstance(e, t) {
        let r = getBuilderId();
        return globalThis.__FEDERATION__.__INSTANCES__.find(
          (n) =>
            !!(
              (r && n.options.id === getBuilderId()) ||
              (n.options.name === e && !n.options.version && !t) ||
              (n.options.name === e && t && n.options.version === t)
            )
        );
      }
      function setGlobalFederationInstance(e) {
        globalThis.__FEDERATION__.__INSTANCES__.push(e);
      }
      function getGlobalFederationConstructor() {
        return globalThis.__FEDERATION__.__DEBUG_CONSTRUCTOR__;
      }
      function setGlobalFederationConstructor(e, t = isDebugMode$1()) {
        t &&
          ((globalThis.__FEDERATION__.__DEBUG_CONSTRUCTOR__ = e),
          (globalThis.__FEDERATION__.__DEBUG_CONSTRUCTOR_VERSION__ = '0.1.21'));
      }
      function getInfoWithoutType(e, t) {
        if ('string' == typeof t) {
          if (e[t]) return { value: e[t], key: t };
          for (let r of Object.keys(e)) {
            let [n, o] = r.split(':'),
              i = `${n}:${t}`,
              s = e[i];
            if (s) return { value: s, key: i };
          }
          return { value: void 0, key: t };
        }
        throw Error('key must be string');
      }
      setGlobalDefaultVal(globalThis), setGlobalDefaultVal(nativeGlobal);
      let getGlobalSnapshot = () => nativeGlobal.__FEDERATION__.moduleInfo,
        getTargetSnapshotInfoByModuleInfo = (e, t) => {
          let r = getInfoWithoutType(t, getFMId(e)).value;
          if (
            (r &&
              !r.version &&
              'version' in e &&
              e.version &&
              (r.version = e.version),
            r)
          )
            return r;
          if ('version' in e && e.version) {
            let { version: t } = e,
              r = getFMId(_object_without_properties_loose$1(e, ['version'])),
              n = getInfoWithoutType(
                nativeGlobal.__FEDERATION__.moduleInfo,
                r
              ).value;
            if ((null == n ? void 0 : n.version) === t) return n;
          }
        },
        getGlobalSnapshotInfoByModuleInfo = (e) =>
          getTargetSnapshotInfoByModuleInfo(
            e,
            nativeGlobal.__FEDERATION__.moduleInfo
          ),
        setGlobalSnapshotInfoByModuleInfo = (e, t) => {
          let r = getFMId(e);
          return (
            (nativeGlobal.__FEDERATION__.moduleInfo[r] = t),
            nativeGlobal.__FEDERATION__.moduleInfo
          );
        },
        addGlobalSnapshot = (e) => (
          (nativeGlobal.__FEDERATION__.moduleInfo = _extends$1$1(
            {},
            nativeGlobal.__FEDERATION__.moduleInfo,
            e
          )),
          () => {
            for (let t of Object.keys(e))
              delete nativeGlobal.__FEDERATION__.moduleInfo[t];
          }
        ),
        getRemoteEntryExports = (e, t) => {
          let r = t || `__FEDERATION_${e}:custom__`,
            n = globalThis[r];
          return { remoteEntryKey: r, entryExports: n };
        },
        getGlobalHostPlugins = () =>
          nativeGlobal.__FEDERATION__.__GLOBAL_PLUGIN__,
        getPreloaded = (e) =>
          globalThis.__FEDERATION__.__PRELOADED_MAP__.get(e),
        setPreloaded = (e) =>
          globalThis.__FEDERATION__.__PRELOADED_MAP__.set(e, !0),
        DEFAULT_SCOPE = 'default',
        DEFAULT_REMOTE_TYPE = 'global',
        buildIdentifier = '[0-9A-Za-z-]+',
        build = `(?:\\+(${buildIdentifier}(?:\\.${buildIdentifier})*))`,
        numericIdentifier = '0|[1-9]\\d*',
        numericIdentifierLoose = '[0-9]+',
        nonNumericIdentifier = '\\d*[a-zA-Z-][a-zA-Z0-9-]*',
        preReleaseIdentifierLoose = `(?:${numericIdentifierLoose}|${nonNumericIdentifier})`,
        preReleaseLoose = `(?:-?(${preReleaseIdentifierLoose}(?:\\.${preReleaseIdentifierLoose})*))`,
        preReleaseIdentifier = `(?:${numericIdentifier}|${nonNumericIdentifier})`,
        preRelease = `(?:-(${preReleaseIdentifier}(?:\\.${preReleaseIdentifier})*))`,
        xRangeIdentifier = `${numericIdentifier}|x|X|\\*`,
        xRangePlain = `[v=\\s]*(${xRangeIdentifier})(?:\\.(${xRangeIdentifier})(?:\\.(${xRangeIdentifier})(?:${preRelease})?${build}?)?)?`,
        hyphenRange = `^\\s*(${xRangePlain})\\s+-\\s+(${xRangePlain})\\s*$`,
        mainVersionLoose = `(${numericIdentifierLoose})\\.(${numericIdentifierLoose})\\.(${numericIdentifierLoose})`,
        loosePlain = `[v=\\s]*${mainVersionLoose}${preReleaseLoose}?${build}?`,
        gtlt = '((?:<|>)?=?)',
        comparatorTrim = `(\\s*)${gtlt}\\s*(${loosePlain}|${xRangePlain})`,
        loneTilde = '(?:~>?)',
        tildeTrim = `(\\s*)${loneTilde}\\s+`,
        loneCaret = '(?:\\^)',
        caretTrim = `(\\s*)${loneCaret}\\s+`,
        star = '(<|>)?=?\\s*\\*',
        caret = `^${loneCaret}${xRangePlain}$`,
        mainVersion = `(${numericIdentifier})\\.(${numericIdentifier})\\.(${numericIdentifier})`,
        fullPlain = `v?${mainVersion}${preRelease}?${build}?`,
        tilde = `^${loneTilde}${xRangePlain}$`,
        xRange = `^${gtlt}\\s*${xRangePlain}$`,
        comparator = `^${gtlt}\\s*(${fullPlain})$|^$`,
        gte0 = '^\\s*>=\\s*0.0.0\\s*$';
      function parseRegex(e) {
        return new RegExp(e);
      }
      function isXVersion(e) {
        return !e || 'x' === e.toLowerCase() || '*' === e;
      }
      function pipe(...e) {
        return (t) => e.reduce((e, t) => t(e), t);
      }
      function extractComparator(e) {
        return e.match(parseRegex(comparator));
      }
      function combineVersion(e, t, r, n) {
        let o = `${e}.${t}.${r}`;
        return n ? `${o}-${n}` : o;
      }
      function parseHyphen(e) {
        return e.replace(
          parseRegex(hyphenRange),
          (e, t, r, n, o, i, s, a, l, c, u, d) => (
            (t = isXVersion(r)
              ? ''
              : isXVersion(n)
                ? `>=${r}.0.0`
                : isXVersion(o)
                  ? `>=${r}.${n}.0`
                  : `>=${t}`),
            (a = isXVersion(l)
              ? ''
              : isXVersion(c)
                ? `<${Number(l) + 1}.0.0-0`
                : isXVersion(u)
                  ? `<${l}.${Number(c) + 1}.0-0`
                  : d
                    ? `<=${l}.${c}.${u}-${d}`
                    : `<=${a}`),
            `${t} ${a}`.trim()
          )
        );
      }
      function parseComparatorTrim(e) {
        return e.replace(parseRegex(comparatorTrim), '$1$2$3');
      }
      function parseTildeTrim(e) {
        return e.replace(parseRegex(tildeTrim), '$1~');
      }
      function parseCaretTrim(e) {
        return e.replace(parseRegex(caretTrim), '$1^');
      }
      function parseCarets(e) {
        return e
          .trim()
          .split(/\s+/)
          .map((e) =>
            e.replace(parseRegex(caret), (e, t, r, n, o) =>
              isXVersion(t)
                ? ''
                : isXVersion(r)
                  ? `>=${t}.0.0 <${Number(t) + 1}.0.0-0`
                  : isXVersion(n)
                    ? '0' === t
                      ? `>=${t}.${r}.0 <${t}.${Number(r) + 1}.0-0`
                      : `>=${t}.${r}.0 <${Number(t) + 1}.0.0-0`
                    : o
                      ? '0' === t
                        ? '0' === r
                          ? `>=${t}.${r}.${n}-${o} <${t}.${r}.${Number(n) + 1}-0`
                          : `>=${t}.${r}.${n}-${o} <${t}.${Number(r) + 1}.0-0`
                        : `>=${t}.${r}.${n}-${o} <${Number(t) + 1}.0.0-0`
                      : '0' === t
                        ? '0' === r
                          ? `>=${t}.${r}.${n} <${t}.${r}.${Number(n) + 1}-0`
                          : `>=${t}.${r}.${n} <${t}.${Number(r) + 1}.0-0`
                        : `>=${t}.${r}.${n} <${Number(t) + 1}.0.0-0`
            )
          )
          .join(' ');
      }
      function parseTildes(e) {
        return e
          .trim()
          .split(/\s+/)
          .map((e) =>
            e.replace(parseRegex(tilde), (e, t, r, n, o) =>
              isXVersion(t)
                ? ''
                : isXVersion(r)
                  ? `>=${t}.0.0 <${Number(t) + 1}.0.0-0`
                  : isXVersion(n)
                    ? `>=${t}.${r}.0 <${t}.${Number(r) + 1}.0-0`
                    : o
                      ? `>=${t}.${r}.${n}-${o} <${t}.${Number(r) + 1}.0-0`
                      : `>=${t}.${r}.${n} <${t}.${Number(r) + 1}.0-0`
            )
          )
          .join(' ');
      }
      function parseXRanges(e) {
        return e
          .split(/\s+/)
          .map((e) =>
            e.trim().replace(parseRegex(xRange), (e, t, r, n, o, i) => {
              let s = isXVersion(r),
                a = s || isXVersion(n),
                l = a || isXVersion(o);
              return (
                '=' === t && l && (t = ''),
                (i = ''),
                s
                  ? '>' === t || '<' === t
                    ? '<0.0.0-0'
                    : '*'
                  : t && l
                    ? (a && (n = 0),
                      (o = 0),
                      '>' === t
                        ? ((t = '>='),
                          a
                            ? ((r = Number(r) + 1), (n = 0))
                            : (n = Number(n) + 1),
                          (o = 0))
                        : '<=' === t &&
                          ((t = '<'),
                          a ? (r = Number(r) + 1) : (n = Number(n) + 1)),
                      '<' === t && (i = '-0'),
                      `${t + r}.${n}.${o}${i}`)
                    : a
                      ? `>=${r}.0.0${i} <${Number(r) + 1}.0.0-0`
                      : l
                        ? `>=${r}.${n}.0${i} <${r}.${Number(n) + 1}.0-0`
                        : e
              );
            })
          )
          .join(' ');
      }
      function parseStar(e) {
        return e.trim().replace(parseRegex(star), '');
      }
      function parseGTE0(e) {
        return e.trim().replace(parseRegex(gte0), '');
      }
      function compareAtom(e, t) {
        return (e = Number(e) || e) > (t = Number(t) || t)
          ? 1
          : e === t
            ? 0
            : -1;
      }
      function comparePreRelease(e, t) {
        let { preRelease: r } = e,
          { preRelease: n } = t;
        if (void 0 === r && n) return 1;
        if (r && void 0 === n) return -1;
        if (void 0 === r && void 0 === n) return 0;
        for (let e = 0, t = r.length; e <= t; e++) {
          let t = r[e],
            o = n[e];
          if (t !== o)
            return void 0 === t && void 0 === o
              ? 0
              : t
                ? o
                  ? compareAtom(t, o)
                  : -1
                : 1;
        }
        return 0;
      }
      function compareVersion(e, t) {
        return (
          compareAtom(e.major, t.major) ||
          compareAtom(e.minor, t.minor) ||
          compareAtom(e.patch, t.patch) ||
          comparePreRelease(e, t)
        );
      }
      function eq(e, t) {
        return e.version === t.version;
      }
      function compare(e, t) {
        switch (e.operator) {
          case '':
          case '=':
            return eq(e, t);
          case '>':
            return 0 > compareVersion(e, t);
          case '>=':
            return eq(e, t) || 0 > compareVersion(e, t);
          case '<':
            return compareVersion(e, t) > 0;
          case '<=':
            return eq(e, t) || compareVersion(e, t) > 0;
          case void 0:
            return !0;
          default:
            return !1;
        }
      }
      function parseComparatorString(e) {
        return pipe(parseCarets, parseTildes, parseXRanges, parseStar)(e);
      }
      function parseRange(e) {
        return pipe(
          parseHyphen,
          parseComparatorTrim,
          parseTildeTrim,
          parseCaretTrim
        )(e.trim())
          .split(/\s+/)
          .join(' ');
      }
      function satisfy(e, t) {
        if (!e) return !1;
        let r = parseRange(t)
            .split(' ')
            .map((e) => parseComparatorString(e))
            .join(' ')
            .split(/\s+/)
            .map((e) => parseGTE0(e)),
          n = extractComparator(e);
        if (!n) return !1;
        let [, o, , i, s, a, l] = n,
          c = {
            operator: o,
            version: combineVersion(i, s, a, l),
            major: i,
            minor: s,
            patch: a,
            preRelease: null == l ? void 0 : l.split('.'),
          };
        for (let e of r) {
          let t = extractComparator(e);
          if (!t) return !1;
          let [, r, , n, o, i, s] = t;
          if (
            !compare(
              {
                operator: r,
                version: combineVersion(n, o, i, s),
                major: n,
                minor: o,
                patch: i,
                preRelease: null == s ? void 0 : s.split('.'),
              },
              c
            )
          )
            return !1;
        }
        return !0;
      }
      function _extends$8() {
        return (_extends$8 =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t];
              for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
          }).apply(this, arguments);
      }
      function formatShare(e, t, r) {
        var n, o;
        let i;
        return (
          (i =
            'get' in e
              ? e.get
              : 'lib' in e
                ? () => Promise.resolve(e.lib)
                : () =>
                    Promise.resolve(() => {
                      throw Error(`Can not get shared '${r}'!`);
                    })),
          _extends$8({ deps: [], useIn: [], from: t, loading: null }, e, {
            shareConfig: _extends$8(
              {
                requiredVersion: `^${e.version}`,
                singleton: !1,
                eager: !1,
                strictVersion: !1,
              },
              e.shareConfig
            ),
            get: i,
            loaded: 'lib' in e || void 0,
            version: null != (n = e.version) ? n : '0',
            scope: Array.isArray(e.scope)
              ? e.scope
              : [null != (o = e.scope) ? o : 'default'],
            strategy: e.strategy || 'version-first',
          })
        );
      }
      function formatShareConfigs(e, t) {
        let r = t.shared || {},
          n = t.name,
          o = Object.keys(r).reduce((e, t) => {
            let o = arrayOptions(r[t]);
            return (
              (e[t] = e[t] || []),
              o.forEach((r) => {
                e[t].push(formatShare(r, n, t));
              }),
              e
            );
          }, {}),
          i = _extends$8({}, e.shared);
        return (
          Object.keys(o).forEach((e) => {
            i[e]
              ? o[e].forEach((t) => {
                  i[e].find((e) => e.version === t.version) || i[e].push(t);
                })
              : (i[e] = o[e]);
          }),
          { shared: i, shareInfos: o }
        );
      }
      function versionLt(e, t) {
        let r = (e) => {
          if (!Number.isNaN(Number(e))) {
            let t = e.split('.'),
              r = e;
            for (let e = 0; e < 3 - t.length; e++) r += '.0';
            return r;
          }
          return e;
        };
        return !!satisfy(r(e), `<=${r(t)}`);
      }
      let findVersion = (e, t) => {
          let r =
            t ||
            function (e, t) {
              return versionLt(e, t);
            };
          return Object.keys(e).reduce(
            (e, t) => (!e || r(e, t) || '0' === e ? t : e),
            0
          );
        },
        isLoaded = (e) => !!e.loaded || 'function' == typeof e.lib;
      function findSingletonVersionOrderByVersion(e, t, r) {
        let n = e[t][r],
          o = function (e, t) {
            return !isLoaded(n[e]) && versionLt(e, t);
          };
        return findVersion(e[t][r], o);
      }
      function findSingletonVersionOrderByLoaded(e, t, r) {
        let n = e[t][r],
          o = function (e, t) {
            return isLoaded(n[t])
              ? !isLoaded(n[e]) || !!versionLt(e, t)
              : !isLoaded(n[e]) && versionLt(e, t);
          };
        return findVersion(e[t][r], o);
      }
      function getFindShareFunction(e) {
        return 'loaded-first' === e
          ? findSingletonVersionOrderByLoaded
          : findSingletonVersionOrderByVersion;
      }
      function getRegisteredShare(e, t, r, n) {
        if (!e) return;
        let { shareConfig: o, scope: i = DEFAULT_SCOPE, strategy: s } = r;
        for (let a of Array.isArray(i) ? i : [i])
          if (o && e[a] && e[a][t]) {
            let { requiredVersion: i } = o,
              l = getFindShareFunction(s)(e, a, t),
              c = () => {
                if (o.singleton) {
                  if ('string' == typeof i && !satisfy(l, i)) {
                    let n = `Version ${l} from ${l && e[a][t][l].from} of shared singleton module ${t} does not satisfy the requirement of ${r.from} which needs ${i})`;
                    o.strictVersion ? error(n) : warn$1(n);
                  }
                  return e[a][t][l];
                }
                if (!1 === i || '*' === i || satisfy(l, i)) return e[a][t][l];
                for (let [r, n] of Object.entries(e[a][t]))
                  if (satisfy(r, i)) return n;
              },
              u = {
                shareScopeMap: e,
                scope: a,
                pkgName: t,
                version: l,
                GlobalFederation: Global.__FEDERATION__,
                resolver: c,
              };
            return (n.emit(u) || u).resolver();
          }
      }
      function getGlobalShareScope() {
        return Global.__FEDERATION__.__SHARE__;
      }
      function getTargetSharedOptions(e) {
        var t;
        let { pkgName: r, extraOptions: n, shareInfos: o } = e,
          i = (e) => {
            if (!e) return;
            let t = {};
            e.forEach((e) => {
              t[e.version] = e;
            });
            let r = findVersion(t, function (e, r) {
              return !isLoaded(t[e]) && versionLt(e, r);
            });
            return t[r];
          };
        return Object.assign(
          {},
          (null != (t = null == n ? void 0 : n.resolver) ? t : i)(o[r]),
          null == n ? void 0 : n.customShareInfo
        );
      }
      function _define_property$4(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      var _obj,
        _obj1,
        MANIFEST_EXT = '.json',
        BROWSER_LOG_KEY = 'FEDERATION_DEBUG',
        BROWSER_LOG_VALUE = '1',
        NameTransformSymbol = { AT: '@', HYPHEN: '-', SLASH: '/' },
        NameTransformMap =
          ((_obj = {}),
          _define_property$4(_obj, NameTransformSymbol.AT, 'scope_'),
          _define_property$4(_obj, NameTransformSymbol.HYPHEN, '_'),
          _define_property$4(_obj, NameTransformSymbol.SLASH, '__'),
          _obj);
      (_obj1 = {}),
        _define_property$4(
          _obj1,
          NameTransformMap[NameTransformSymbol.AT],
          NameTransformSymbol.AT
        ),
        _define_property$4(
          _obj1,
          NameTransformMap[NameTransformSymbol.HYPHEN],
          NameTransformSymbol.HYPHEN
        ),
        _define_property$4(
          _obj1,
          NameTransformMap[NameTransformSymbol.SLASH],
          NameTransformSymbol.SLASH
        );
      var SEPARATOR = ':';
      function isBrowserEnv() {
        return 'u' > typeof window;
      }
      function isDebugMode() {
        return 'u' > typeof process &&
          process.env &&
          process.env.FEDERATION_DEBUG
          ? !!process.env.FEDERATION_DEBUG
          : 'u' > typeof FEDERATION_DEBUG && !!FEDERATION_DEBUG;
      }
      function _array_like_to_array$2(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      function _array_without_holes(e) {
        if (Array.isArray(e)) return _array_like_to_array$2(e);
      }
      function _class_call_check(e, t) {
        if (!(e instanceof t))
          throw TypeError('Cannot call a class as a function');
      }
      function _defineProperties(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            'value' in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n);
        }
      }
      function _create_class(e, t, r) {
        return (
          t && _defineProperties(e.prototype, t),
          r && _defineProperties(e, r),
          e
        );
      }
      function _define_property$3(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      function _iterable_to_array$1(e) {
        if (
          ('u' > typeof Symbol && null != e[Symbol.iterator]) ||
          null != e['@@iterator']
        )
          return Array.from(e);
      }
      function _non_iterable_spread() {
        throw TypeError(
          'Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
        );
      }
      function _to_consumable_array(e) {
        return (
          _array_without_holes(e) ||
          _iterable_to_array$1(e) ||
          _unsupported_iterable_to_array$2(e) ||
          _non_iterable_spread()
        );
      }
      function _unsupported_iterable_to_array$2(e, t) {
        if (e) {
          if ('string' == typeof e) return _array_like_to_array$2(e, t);
          var r = Object.prototype.toString.call(e).slice(8, -1);
          if (
            ('Object' === r && e.constructor && (r = e.constructor.name),
            'Map' === r || 'Set' === r)
          )
            return Array.from(r);
          if (
            'Arguments' === r ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
          )
            return _array_like_to_array$2(e, t);
        }
      }
      function safeToString(e) {
        try {
          return JSON.stringify(e, null, 2);
        } catch {
          return '';
        }
      }
      var DEBUG_LOG = '[ FEDERATION DEBUG ]';
      function safeGetLocalStorageItem() {
        try {
          if ('u' > typeof window && window.localStorage)
            return localStorage.getItem(BROWSER_LOG_KEY) === BROWSER_LOG_VALUE;
        } catch {
          return 'u' > typeof document;
        }
        return !1;
      }
      var Logger = (function () {
          function e(t) {
            _class_call_check(this, e),
              _define_property$3(this, 'enable', !1),
              _define_property$3(this, 'identifier', void 0),
              (this.identifier = t || DEBUG_LOG),
              isBrowserEnv() && safeGetLocalStorageItem()
                ? (this.enable = !0)
                : isDebugMode() && (this.enable = !0);
          }
          return (
            _create_class(e, [
              {
                key: 'info',
                value: function (e, t) {
                  if (this.enable) {
                    var r = safeToString(t) || '';
                    isBrowserEnv()
                      ? console.info(
                          '%c '
                            .concat(this.identifier, ': ')
                            .concat(e, ' ')
                            .concat(r),
                          'color:#3300CC'
                        )
                      : console.info(
                          '\x1b[34m%s',
                          ''
                            .concat(this.identifier, ': ')
                            .concat(e, ' ')
                            .concat(
                              r
                                ? `
`.concat(r)
                                : ''
                            )
                        );
                  }
                },
              },
              {
                key: 'logOriginalInfo',
                value: function () {
                  for (
                    var e, t, r = arguments.length, n = Array(r), o = 0;
                    o < r;
                    o++
                  )
                    n[o] = arguments[o];
                  this.enable &&
                    (isBrowserEnv()
                      ? (console.info(
                          '%c '.concat(this.identifier, ': OriginalInfo'),
                          'color:#3300CC'
                        ),
                        (e = console).log.apply(e, _to_consumable_array(n)))
                      : (console.info(
                          '%c '.concat(this.identifier, ': OriginalInfo'),
                          'color:#3300CC'
                        ),
                        (t = console).log.apply(t, _to_consumable_array(n))));
                },
              },
            ]),
            e
          );
        })(),
        LOG_CATEGORY = '[ Federation Runtime ]';
      new Logger();
      var composeKeyWithSeparator = function () {
          for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
            t[r] = arguments[r];
          return t.length
            ? t.reduce(function (e, t) {
                return t
                  ? e
                    ? ''.concat(e).concat(SEPARATOR).concat(t)
                    : t
                  : e;
              }, '')
            : '';
        },
        getResourceUrl = function (e, t) {
          if (!('getPublicPath' in e))
            return 'publicPath' in e
              ? ''.concat(e.publicPath).concat(t)
              : (console.warn(
                  'Can not get resource url, if in debug mode, please ignore',
                  e,
                  t
                ),
                '');
          var r = Function(e.getPublicPath)();
          return ''.concat(r).concat(t);
        },
        warn = function (e) {
          console.warn(''.concat(LOG_CATEGORY, ': ').concat(e));
        };
      function _define_property$2(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      function _object_spread$2(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
          'function' == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
              Object.getOwnPropertySymbols(r).filter(function (e) {
                return Object.getOwnPropertyDescriptor(r, e).enumerable;
              })
            )),
            n.forEach(function (t) {
              _define_property$2(e, t, r[t]);
            });
        }
        return e;
      }
      function ownKeys(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function _object_spread_props(e, t) {
        return (
          (t = null != t ? t : {}),
          Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : ownKeys(Object(t)).forEach(function (r) {
                Object.defineProperty(
                  e,
                  r,
                  Object.getOwnPropertyDescriptor(t, r)
                );
              }),
          e
        );
      }
      var simpleJoinRemoteEntry = function (e, t) {
        if (!e) return t;
        var r = (function (e) {
          if ('.' === e) return '';
          if (e.startsWith('./')) return e.replace('./', '');
          if (e.startsWith('/')) {
            var t = e.slice(1);
            return t.endsWith('/') ? t.slice(0, -1) : t;
          }
          return e;
        })(e);
        return r
          ? r.endsWith('/')
            ? ''.concat(r).concat(t)
            : ''.concat(r, '/').concat(t)
          : t;
      };
      function inferAutoPublicPath(e) {
        return e
          .replace(/#.*$/, '')
          .replace(/\?.*$/, '')
          .replace(/\/[^\/]+$/, '/');
      }
      function generateSnapshotFromManifest(e) {
        var t,
          r,
          n,
          o =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          i = o.remotes,
          s = void 0 === i ? {} : i,
          a = o.overrides,
          l = void 0 === a ? {} : a,
          c = o.version,
          u = function () {
            return 'publicPath' in e.metaData
              ? 'auto' === e.metaData.publicPath && c
                ? inferAutoPublicPath(c)
                : e.metaData.publicPath
              : e.metaData.getPublicPath;
          },
          d = Object.keys(l),
          h = {};
        Object.keys(s).length ||
          (h =
            (null === (t = e.remotes) || void 0 === t
              ? void 0
              : t.reduce(function (e, t) {
                  var r,
                    n = t.federationContainerName;
                  return (
                    (r = d.includes(n)
                      ? l[n]
                      : 'version' in t
                        ? t.version
                        : t.entry),
                    (e[n] = { matchedVersion: r }),
                    e
                  );
                }, {})) || {}),
          Object.keys(s).forEach(function (e) {
            return (h[e] = { matchedVersion: d.includes(e) ? l[e] : s[e] });
          });
        var f = e.metaData,
          g = f.remoteEntry,
          p = g.path,
          m = g.name,
          M = g.type,
          b = f.types,
          w = f.buildInfo.buildVersion,
          y = f.globalName,
          I = e.exposes,
          A = {
            version: c || '',
            buildVersion: w,
            globalName: y,
            remoteEntry: simpleJoinRemoteEntry(p, m),
            remoteEntryType: M,
            remoteTypes: simpleJoinRemoteEntry(b.path, b.name),
            remoteTypesZip: b.zip || '',
            remoteTypesAPI: b.api || '',
            remotesInfo: h,
            shared:
              null == e
                ? void 0
                : e.shared.map(function (e) {
                    return {
                      assets: e.assets,
                      sharedName: e.name,
                      version: e.version,
                    };
                  }),
            modules:
              null == I
                ? void 0
                : I.map(function (e) {
                    return {
                      moduleName: e.name,
                      modulePath: e.path,
                      assets: e.assets,
                    };
                  }),
          };
        if (
          !(null === (r = e.metaData) || void 0 === r) &&
          r.prefetchInterface
        ) {
          var v = e.metaData.prefetchInterface;
          A = _object_spread_props(_object_spread$2({}, A), {
            prefetchInterface: v,
          });
        }
        if (!(null === (n = e.metaData) || void 0 === n) && n.prefetchEntry) {
          var N = e.metaData.prefetchEntry,
            j = N.path,
            D = N.name,
            x = N.type;
          A = _object_spread_props(_object_spread$2({}, A), {
            prefetchEntry: simpleJoinRemoteEntry(j, D),
            prefetchEntryType: x,
          });
        }
        return 'publicPath' in e.metaData
          ? _object_spread_props(_object_spread$2({}, A), { publicPath: u() })
          : _object_spread_props(_object_spread$2({}, A), {
              getPublicPath: u(),
            });
      }
      function isManifestProvider(e) {
        return !!('remoteEntry' in e && e.remoteEntry.includes(MANIFEST_EXT));
      }
      function asyncGeneratorStep$1(e, t, r, n, o, i, s) {
        try {
          var a = e[i](s),
            l = a.value;
        } catch (e) {
          r(e);
          return;
        }
        a.done ? t(l) : Promise.resolve(l).then(n, o);
      }
      function _async_to_generator$1(e) {
        return function () {
          var t = this,
            r = arguments;
          return new Promise(function (n, o) {
            var i = e.apply(t, r);
            function s(e) {
              asyncGeneratorStep$1(i, n, o, s, a, 'next', e);
            }
            function a(e) {
              asyncGeneratorStep$1(i, n, o, s, a, 'throw', e);
            }
            s(void 0);
          });
        };
      }
      function _define_property$1(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      function _instanceof(e, t) {
        return null != t && 'u' > typeof Symbol && t[Symbol.hasInstance]
          ? !!t[Symbol.hasInstance](e)
          : e instanceof t;
      }
      function _object_spread$1(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
          'function' == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
              Object.getOwnPropertySymbols(r).filter(function (e) {
                return Object.getOwnPropertyDescriptor(r, e).enumerable;
              })
            )),
            n.forEach(function (t) {
              _define_property$1(e, t, r[t]);
            });
        }
        return e;
      }
      function _type_of$2(e) {
        return e && 'u' > typeof Symbol && e.constructor === Symbol
          ? 'symbol'
          : typeof e;
      }
      function _ts_generator$1(e, t) {
        var r,
          n,
          o,
          i,
          s = {
            label: 0,
            sent: function () {
              if (1 & o[0]) throw o[1];
              return o[1];
            },
            trys: [],
            ops: [],
          };
        return (
          (i = { next: a(0), throw: a(1), return: a(2) }),
          'function' == typeof Symbol &&
            (i[Symbol.iterator] = function () {
              return this;
            }),
          i
        );
        function a(e) {
          return function (t) {
            return l([e, t]);
          };
        }
        function l(i) {
          if (r) throw TypeError('Generator is already executing.');
          for (; s; )
            try {
              if (
                ((r = 1),
                n &&
                  (o =
                    2 & i[0]
                      ? n.return
                      : i[0]
                        ? n.throw || ((o = n.return) && o.call(n), 0)
                        : n.next) &&
                  !(o = o.call(n, i[1])).done)
              )
                return o;
              switch (((n = 0), o && (i = [2 & i[0], o.value]), i[0])) {
                case 0:
                case 1:
                  o = i;
                  break;
                case 4:
                  return s.label++, { value: i[1], done: !1 };
                case 5:
                  s.label++, (n = i[1]), (i = [0]);
                  continue;
                case 7:
                  (i = s.ops.pop()), s.trys.pop();
                  continue;
                default:
                  if (
                    !(o = (o = s.trys).length > 0 && o[o.length - 1]) &&
                    (6 === i[0] || 2 === i[0])
                  ) {
                    s = 0;
                    continue;
                  }
                  if (3 === i[0] && (!o || (i[1] > o[0] && i[1] < o[3]))) {
                    s.label = i[1];
                    break;
                  }
                  if (6 === i[0] && s.label < o[1]) {
                    (s.label = o[1]), (o = i);
                    break;
                  }
                  if (o && s.label < o[2]) {
                    (s.label = o[2]), s.ops.push(i);
                    break;
                  }
                  o[2] && s.ops.pop(), s.trys.pop();
                  continue;
              }
              i = t.call(e, s);
            } catch (e) {
              (i = [6, e]), (n = 0);
            } finally {
              r = o = 0;
            }
          if (5 & i[0]) throw i[1];
          return { value: i[0] ? i[1] : void 0, done: !0 };
        }
      }
      function safeWrapper(e, t) {
        return _safeWrapper.apply(this, arguments);
      }
      function _safeWrapper() {
        return (_safeWrapper = _async_to_generator$1(function (e, t) {
          var r;
          return _ts_generator$1(this, function (n) {
            switch (n.label) {
              case 0:
                return n.trys.push([0, 2, , 3]), [4, e()];
              case 1:
                return [2, n.sent()];
              case 2:
                return (r = n.sent()), t || warn(r), [2];
              case 3:
                return [2];
            }
          });
        })).apply(this, arguments);
      }
      function isStaticResourcesEqual(e, t) {
        var r = /^(https?:)?\/\//i;
        return (
          e.replace(r, '').replace(/\/$/, '') ===
          t.replace(r, '').replace(/\/$/, '')
        );
      }
      function createScript(e) {
        for (
          var t,
            r = null,
            n = !0,
            o = 2e4,
            i = document.getElementsByTagName('script'),
            s = 0;
          s < i.length;
          s++
        ) {
          var a = i[s],
            l = a.getAttribute('src');
          if (l && isStaticResourcesEqual(l, e.url)) {
            (r = a), (n = !1);
            break;
          }
        }
        if (!r) {
          if (
            (((r = document.createElement('script')).type = 'text/javascript'),
            (r.src = e.url),
            e.createScriptHook)
          ) {
            var c = e.createScriptHook(e.url);
            _instanceof(c, HTMLScriptElement)
              ? (r = c)
              : (typeof c > 'u' ? 'undefined' : _type_of$2(c)) === 'object' &&
                (c.script && (r = c.script), c.timeout && (o = c.timeout));
          }
          var u = e.attrs;
          u &&
            Object.keys(u).forEach(function (e) {
              r &&
                ('async' === e || 'defer' === e
                  ? (r[e] = u[e])
                  : r.getAttribute(e) || r.setAttribute(e, u[e]));
            });
        }
        var d = function (n, o) {
          var i;
          if (
            (clearTimeout(t),
            r &&
              ((r.onerror = null),
              (r.onload = null),
              safeWrapper(function () {
                var t = e.needDeleteScript;
                (void 0 === t || t) &&
                  null != r &&
                  r.parentNode &&
                  r.parentNode.removeChild(r);
              }),
              n))
          ) {
            var s,
              a = n(o);
            return (
              null == e || null === (s = e.cb) || void 0 === s || s.call(e), a
            );
          }
          null == e || null === (i = e.cb) || void 0 === i || i.call(e);
        };
        return (
          (r.onerror = d.bind(null, r.onerror)),
          (r.onload = d.bind(null, r.onload)),
          (t = setTimeout(function () {
            d(null, Error('Remote script "'.concat(e.url, '" time-outed.')));
          }, o)),
          { script: r, needAttach: n }
        );
      }
      function createLink(e) {
        for (
          var t = null,
            r = !0,
            n = document.getElementsByTagName('link'),
            o = 0;
          o < n.length;
          o++
        ) {
          var i = n[o],
            s = i.getAttribute('href'),
            a = i.getAttribute('ref');
          if (s && isStaticResourcesEqual(s, e.url) && a === e.attrs.ref) {
            (t = i), (r = !1);
            break;
          }
        }
        if (!t) {
          if (
            ((t = document.createElement('link')).setAttribute('href', e.url),
            e.createLinkHook)
          ) {
            var l = e.createLinkHook(e.url);
            _instanceof(l, HTMLLinkElement) && (t = l);
          }
          var c = e.attrs;
          c &&
            Object.keys(c).forEach(function (e) {
              t && !t.getAttribute(e) && t.setAttribute(e, c[e]);
            });
        }
        var u = function (r, n) {
          if (
            t &&
            ((t.onerror = null),
            (t.onload = null),
            safeWrapper(function () {
              var r = e.needDeleteLink;
              (void 0 === r || r) &&
                null != t &&
                t.parentNode &&
                t.parentNode.removeChild(t);
            }),
            r)
          ) {
            var o = r(n);
            return e.cb(), o;
          }
          e.cb();
        };
        return (
          (t.onerror = u.bind(null, t.onerror)),
          (t.onload = u.bind(null, t.onload)),
          { link: t, needAttach: r }
        );
      }
      function loadScript(e, t) {
        var r = t.attrs,
          n = void 0 === r ? {} : r,
          o = t.createScriptHook;
        return new Promise(function (t, r) {
          var i = createScript({
              url: e,
              cb: t,
              attrs: _object_spread$1(
                { crossorigin: 'anonymous', fetchpriority: 'high' },
                n
              ),
              createScriptHook: o,
              needDeleteScript: !0,
            }),
            s = i.script;
          i.needAttach && document.head.appendChild(s);
        });
      }
      function _array_like_to_array(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      function _array_with_holes(e) {
        if (Array.isArray(e)) return e;
      }
      function asyncGeneratorStep(e, t, r, n, o, i, s) {
        try {
          var a = e[i](s),
            l = a.value;
        } catch (e) {
          r(e);
          return;
        }
        a.done ? t(l) : Promise.resolve(l).then(n, o);
      }
      function _async_to_generator(e) {
        return function () {
          var t = this,
            r = arguments;
          return new Promise(function (n, o) {
            var i = e.apply(t, r);
            function s(e) {
              asyncGeneratorStep(i, n, o, s, a, 'next', e);
            }
            function a(e) {
              asyncGeneratorStep(i, n, o, s, a, 'throw', e);
            }
            s(void 0);
          });
        };
      }
      function _iterable_to_array_limit(e, t) {
        var r =
          null == e
            ? null
            : ('u' > typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
        if (null != r) {
          var n,
            o,
            i = [],
            s = !0,
            a = !1;
          try {
            for (
              r = r.call(e);
              !(s = (n = r.next()).done) &&
              (i.push(n.value), !(t && i.length === t));
              s = !0
            );
          } catch (e) {
            (a = !0), (o = e);
          } finally {
            try {
              s || null == r.return || r.return();
            } finally {
              if (a) throw o;
            }
          }
          return i;
        }
      }
      function _non_iterable_rest() {
        throw TypeError(
          'Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
        );
      }
      function _sliced_to_array(e, t) {
        return (
          _array_with_holes(e) ||
          _iterable_to_array_limit(e, t) ||
          _unsupported_iterable_to_array(e, t) ||
          _non_iterable_rest()
        );
      }
      function _type_of$1(e) {
        return e && 'u' > typeof Symbol && e.constructor === Symbol
          ? 'symbol'
          : typeof e;
      }
      function _unsupported_iterable_to_array(e, t) {
        if (e) {
          if ('string' == typeof e) return _array_like_to_array(e, t);
          var r = Object.prototype.toString.call(e).slice(8, -1);
          if (
            ('Object' === r && e.constructor && (r = e.constructor.name),
            'Map' === r || 'Set' === r)
          )
            return Array.from(r);
          if (
            'Arguments' === r ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
          )
            return _array_like_to_array(e, t);
        }
      }
      function _ts_generator(e, t) {
        var r,
          n,
          o,
          i,
          s = {
            label: 0,
            sent: function () {
              if (1 & o[0]) throw o[1];
              return o[1];
            },
            trys: [],
            ops: [],
          };
        return (
          (i = { next: a(0), throw: a(1), return: a(2) }),
          'function' == typeof Symbol &&
            (i[Symbol.iterator] = function () {
              return this;
            }),
          i
        );
        function a(e) {
          return function (t) {
            return l([e, t]);
          };
        }
        function l(i) {
          if (r) throw TypeError('Generator is already executing.');
          for (; s; )
            try {
              if (
                ((r = 1),
                n &&
                  (o =
                    2 & i[0]
                      ? n.return
                      : i[0]
                        ? n.throw || ((o = n.return) && o.call(n), 0)
                        : n.next) &&
                  !(o = o.call(n, i[1])).done)
              )
                return o;
              switch (((n = 0), o && (i = [2 & i[0], o.value]), i[0])) {
                case 0:
                case 1:
                  o = i;
                  break;
                case 4:
                  return s.label++, { value: i[1], done: !1 };
                case 5:
                  s.label++, (n = i[1]), (i = [0]);
                  continue;
                case 7:
                  (i = s.ops.pop()), s.trys.pop();
                  continue;
                default:
                  if (
                    !(o = (o = s.trys).length > 0 && o[o.length - 1]) &&
                    (6 === i[0] || 2 === i[0])
                  ) {
                    s = 0;
                    continue;
                  }
                  if (3 === i[0] && (!o || (i[1] > o[0] && i[1] < o[3]))) {
                    s.label = i[1];
                    break;
                  }
                  if (6 === i[0] && s.label < o[1]) {
                    (s.label = o[1]), (o = i);
                    break;
                  }
                  if (o && s.label < o[2]) {
                    (s.label = o[2]), s.ops.push(i);
                    break;
                  }
                  o[2] && s.ops.pop(), s.trys.pop();
                  continue;
              }
              i = t.call(e, s);
            } catch (e) {
              (i = [6, e]), (n = 0);
            } finally {
              r = o = 0;
            }
          if (5 & i[0]) throw i[1];
          return { value: i[0] ? i[1] : void 0, done: !0 };
        }
      }
      function importNodeModule(e) {
        if (!e) throw Error('import specifier is required');
        return Function(
          'name',
          'return import(name)'
        )(e)
          .then(function (e) {
            return e.default;
          })
          .catch(function (t) {
            throw (
              (console.error('Error importing module '.concat(e, ':'), t), t)
            );
          });
      }
      function createScriptNode(url, cb, attrs, createScriptHook) {
        if (createScriptHook) {
          var urlObj,
            hookResult = createScriptHook(url);
          hookResult &&
            (typeof hookResult > 'u' ? 'undefined' : _type_of$1(hookResult)) ===
              'object' &&
            'url' in hookResult &&
            (url = hookResult.url);
        }
        try {
          urlObj = new URL(url);
        } catch (t) {
          console.error('Error constructing URL:', t),
            cb(Error('Invalid URL: '.concat(t)));
          return;
        }
        var getFetch = (function () {
          var e = _async_to_generator(function () {
            var e;
            return _ts_generator(this, function (t) {
              switch (t.label) {
                case 0:
                  return typeof fetch > 'u'
                    ? [4, importNodeModule('node-fetch')]
                    : [3, 2];
                case 1:
                  return [
                    2,
                    (null == (e = t.sent()) ? void 0 : e.default) || e,
                  ];
                case 2:
                  return [2, fetch];
                case 3:
                  return [2];
              }
            });
          });
          return function () {
            return e.apply(this, arguments);
          };
        })();
        console.log('fetching', urlObj.href),
          getFetch().then(function (f) {
            f(urlObj.href)
              .then(function (e) {
                return e.text();
              })
              .then(
                (function () {
                  var _ref = _async_to_generator(function (data) {
                    var _ref,
                      path,
                      vm,
                      scriptContext,
                      urlDirname,
                      filename,
                      script,
                      exportedInterface,
                      container;
                    return _ts_generator(this, function (_state) {
                      switch (_state.label) {
                        case 0:
                          return [
                            4,
                            Promise.all([
                              importNodeModule('path'),
                              importNodeModule('vm'),
                            ]),
                          ];
                        case 1:
                          (_ref = _sliced_to_array.apply(void 0, [
                            _state.sent(),
                            2,
                          ])),
                            (path = _ref[0]),
                            (vm = _ref[1]),
                            (scriptContext = {
                              exports: {},
                              module: { exports: {} },
                            }),
                            (urlDirname = urlObj.pathname
                              .split('/')
                              .slice(0, -1)
                              .join('/')),
                            (filename = path.basename(urlObj.pathname));
                          try {
                            if (
                              ((script = new vm.Script(
                                '(function(exports, module, require, __dirname, __filename) {'.concat(
                                  data,
                                  `
})`
                                ),
                                filename
                              )),
                              script.runInThisContext()(
                                scriptContext.exports,
                                scriptContext.module,
                                eval('require'),
                                urlDirname,
                                filename
                              ),
                              (exportedInterface =
                                scriptContext.module.exports ||
                                scriptContext.exports),
                              attrs && exportedInterface && attrs.globalName)
                            )
                              return (
                                (container =
                                  exportedInterface[attrs.globalName] ||
                                  exportedInterface),
                                cb(void 0, container),
                                [2]
                              );
                            cb(void 0, exportedInterface);
                          } catch (t) {
                            cb(Error('Script execution error: '.concat(t)));
                          }
                          return [2];
                      }
                    });
                  });
                  return function (e) {
                    return _ref.apply(this, arguments);
                  };
                })()
              )
              .catch(function (e) {
                cb(e);
              });
          });
      }
      function loadScriptNode(e, t) {
        return new Promise(function (r, n) {
          createScriptNode(
            e,
            function (e, o) {
              if (e) n(e);
              else {
                var i,
                  s,
                  a =
                    (null == t || null === (i = t.attrs) || void 0 === i
                      ? void 0
                      : i.globalName) ||
                    '__FEDERATION_'.concat(
                      null == t || null === (s = t.attrs) || void 0 === s
                        ? void 0
                        : s.name,
                      ':custom__'
                    );
                r((globalThis[a] = o));
              }
            },
            t.attrs,
            t.createScriptHook
          );
        });
      }
      function matchRemoteWithNameAndExpose(e, t) {
        for (let r of e) {
          let e = t.startsWith(r.name),
            n = t.replace(r.name, '');
          if (e) {
            if (n.startsWith('/'))
              return {
                pkgNameOrAlias: r.name,
                expose: (n = `.${n}`),
                remote: r,
              };
            if ('' === n)
              return { pkgNameOrAlias: r.name, expose: '.', remote: r };
          }
          let o = r.alias && t.startsWith(r.alias),
            i = r.alias && t.replace(r.alias, '');
          if (r.alias && o) {
            if (i && i.startsWith('/'))
              return {
                pkgNameOrAlias: r.alias,
                expose: (i = `.${i}`),
                remote: r,
              };
            if ('' === i)
              return { pkgNameOrAlias: r.alias, expose: '.', remote: r };
          }
        }
      }
      function matchRemote(e, t) {
        for (let r of e)
          if (t === r.name || (r.alias && t === r.alias)) return r;
      }
      function registerPlugins$1(e, t) {
        let r = getGlobalHostPlugins();
        return (
          r.length > 0 &&
            r.forEach((t) => {
              null != e && e.find((e) => e.name !== t.name) && e.push(t);
            }),
          e &&
            e.length > 0 &&
            e.forEach((e) => {
              t.forEach((t) => {
                t.applyPlugin(e);
              });
            }),
          e
        );
      }
      function _extends$7() {
        return (_extends$7 =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t];
              for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
          }).apply(this, arguments);
      }
      async function loadEsmEntry({ entry: e, remoteEntryExports: t }) {
        return new Promise((r, n) => {
          try {
            t
              ? r(t)
              : Function(
                  'callbacks',
                  `import("${e}").then(callbacks[0]).catch(callbacks[1])`
                )([r, n]);
          } catch (e) {
            n(e);
          }
        });
      }
      async function loadEntryScript({
        name: e,
        globalName: t,
        entry: r,
        createScriptHook: n,
      }) {
        let { entryExports: o } = getRemoteEntryExports(e, t);
        return (
          o ||
          (typeof document > 'u'
            ? loadScriptNode(r, {
                attrs: { name: e, globalName: t },
                createScriptHook: n,
              })
                .then(() => {
                  let { remoteEntryKey: n, entryExports: o } =
                    getRemoteEntryExports(e, t);
                  return (
                    assert(
                      o,
                      `
        Unable to use the ${e}'s '${r}' URL with ${n}'s globalName to get remoteEntry exports.
        Possible reasons could be:

        1. '${r}' is not the correct URL, or the remoteEntry resource or name is incorrect.

        2. ${n} cannot be used to get remoteEntry exports in the window object.
      `
                    ),
                    o
                  );
                })
                .catch((e) => {
                  throw e;
                })
            : loadScript(r, { attrs: {}, createScriptHook: n })
                .then(() => {
                  let { remoteEntryKey: n, entryExports: o } =
                    getRemoteEntryExports(e, t);
                  return (
                    assert(
                      o,
                      `
      Unable to use the ${e}'s '${r}' URL with ${n}'s globalName to get remoteEntry exports.
      Possible reasons could be:

      1. '${r}' is not the correct URL, or the remoteEntry resource or name is incorrect.

      2. ${n} cannot be used to get remoteEntry exports in the window object.
    `
                    ),
                    o
                  );
                })
                .catch((e) => {
                  throw e;
                }))
        );
      }
      function getRemoteEntryUniqueKey(e) {
        let { entry: t, name: r } = e;
        return composeKeyWithSeparator(r, t);
      }
      async function getRemoteEntry({
        remoteEntryExports: e,
        remoteInfo: t,
        createScriptHook: r,
      }) {
        let { entry: n, name: o, type: i, entryGlobalName: s } = t,
          a = getRemoteEntryUniqueKey(t);
        return (
          e ||
          (globalLoading[a] ||
            (['esm', 'module'].includes(i)
              ? (globalLoading[a] = loadEsmEntry({
                  entry: n,
                  remoteEntryExports: e,
                }))
              : (globalLoading[a] = loadEntryScript({
                  name: o,
                  globalName: s,
                  entry: n,
                  createScriptHook: r,
                }))),
          globalLoading[a])
        );
      }
      function getRemoteInfo(e) {
        return _extends$7({}, e, {
          entry: 'entry' in e ? e.entry : '',
          type: e.type || DEFAULT_REMOTE_TYPE,
          entryGlobalName: e.entryGlobalName || e.name,
          shareScope: e.shareScope || DEFAULT_SCOPE,
        });
      }
      function _extends$6() {
        return (_extends$6 =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t];
              for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
          }).apply(this, arguments);
      }
      let Module = class {
        async getEntry() {
          if (this.remoteEntryExports) return this.remoteEntryExports;
          let e = await getRemoteEntry({
            remoteInfo: this.remoteInfo,
            remoteEntryExports: this.remoteEntryExports,
            createScriptHook: (e) => {
              let t = this.host.loaderHook.lifecycle.createScript.emit({
                url: e,
              });
              if (
                t &&
                (typeof document > 'u' ||
                  t instanceof HTMLScriptElement ||
                  'script' in t ||
                  'timeout' in t)
              )
                return t;
            },
          });
          return (
            assert(
              e,
              `remoteEntryExports is undefined 
 ${safeToString$1(this.remoteInfo)}`
            ),
            (this.remoteEntryExports = e),
            this.remoteEntryExports
          );
        }
        async get(e, t, r) {
          let { loadFactory: n = !0 } = r || { loadFactory: !0 },
            o = await this.getEntry();
          if (!this.inited) {
            let e = this.host.shareScopeMap,
              t = this.remoteInfo.shareScope || 'default';
            e[t] || (e[t] = {});
            let r = e[t],
              n = [],
              i = { version: this.remoteInfo.version || '' };
            Object.defineProperty(i, 'shareScopeMap', {
              value: e,
              enumerable: !1,
            });
            let s = await this.host.hooks.lifecycle.beforeInitContainer.emit({
              shareScope: r,
              remoteEntryInitOptions: i,
              initScope: n,
              remoteInfo: this.remoteInfo,
              origin: this.host,
            });
            await o.init(s.shareScope, s.initScope, s.remoteEntryInitOptions),
              await this.host.hooks.lifecycle.initContainer.emit(
                _extends$6({}, s, { remoteEntryExports: o })
              );
          }
          (this.lib = o), (this.inited = !0);
          let i = await o.get(t);
          assert(i, `${getFMId(this.remoteInfo)} remote don't export ${t}.`);
          let s = this.wraperFactory(i, e);
          return n ? await s() : s;
        }
        wraperFactory(e, t) {
          function r(e, t) {
            e &&
              'object' == typeof e &&
              Object.isExtensible(e) &&
              !Object.getOwnPropertyDescriptor(e, Symbol.for('mf_module_id')) &&
              Object.defineProperty(e, Symbol.for('mf_module_id'), {
                value: t,
                enumerable: !1,
              });
          }
          return e instanceof Promise
            ? async () => {
                let n = await e();
                return r(n, t), n;
              }
            : () => {
                let n = e();
                return r(n, t), n;
              };
        }
        constructor({ remoteInfo: e, host: t }) {
          (this.inited = !1),
            (this.lib = void 0),
            (this.remoteInfo = e),
            (this.host = t);
        }
      };
      class SyncHook {
        on(e) {
          'function' == typeof e && this.listeners.add(e);
        }
        once(e) {
          let t = this;
          this.on(function r(...n) {
            return t.remove(r), e.apply(null, n);
          });
        }
        emit(...e) {
          let t;
          return (
            this.listeners.size > 0 &&
              this.listeners.forEach((r) => {
                t = r(...e);
              }),
            t
          );
        }
        remove(e) {
          this.listeners.delete(e);
        }
        removeAll() {
          this.listeners.clear();
        }
        constructor(e) {
          (this.type = ''), (this.listeners = new Set()), e && (this.type = e);
        }
      }
      class AsyncHook extends SyncHook {
        emit(...e) {
          let t;
          let r = Array.from(this.listeners);
          if (r.length > 0) {
            let n = 0,
              o = (t) =>
                !1 !== t &&
                (n < r.length
                  ? Promise.resolve(r[n++].apply(null, e)).then(o)
                  : t);
            t = o();
          }
          return Promise.resolve(t);
        }
      }
      function checkReturnData(e, t) {
        if (!isObject(t)) return !1;
        if (e !== t) {
          for (let r in e) if (!(r in t)) return !1;
        }
        return !0;
      }
      class SyncWaterfallHook extends SyncHook {
        emit(e) {
          for (let t of (isObject(e) ||
            error(`The data for the "${this.type}" hook should be an object.`),
          this.listeners))
            try {
              let r = t(e);
              if (checkReturnData(e, r)) e = r;
              else {
                this.onerror(
                  `A plugin returned an unacceptable value for the "${this.type}" type.`
                );
                break;
              }
            } catch (e) {
              warn$1(e), this.onerror(e);
            }
          return e;
        }
        constructor(e) {
          super(), (this.onerror = error), (this.type = e);
        }
      }
      class AsyncWaterfallHook extends SyncHook {
        emit(e) {
          isObject(e) ||
            error(
              `The response data for the "${this.type}" hook must be an object.`
            );
          let t = Array.from(this.listeners);
          if (t.length > 0) {
            let r = 0,
              n = (t) => (warn$1(t), this.onerror(t), e),
              o = (i) => {
                if (checkReturnData(e, i)) {
                  if (((e = i), r < t.length))
                    try {
                      return Promise.resolve(t[r++](e)).then(o, n);
                    } catch (e) {
                      return n(e);
                    }
                } else
                  this.onerror(
                    `A plugin returned an incorrect value for the "${this.type}" type.`
                  );
                return e;
              };
            return Promise.resolve(o(e));
          }
          return Promise.resolve(e);
        }
        constructor(e) {
          super(), (this.onerror = error), (this.type = e);
        }
      }
      class PluginSystem {
        applyPlugin(e) {
          assert(isPlainObject(e), 'Plugin configuration is invalid.');
          let t = e.name;
          assert(t, 'A name must be provided by the plugin.'),
            this.registerPlugins[t] ||
              ((this.registerPlugins[t] = e),
              Object.keys(this.lifecycle).forEach((t) => {
                let r = e[t];
                r && this.lifecycle[t].on(r);
              }));
        }
        removePlugin(e) {
          assert(e, 'A name is required.');
          let t = this.registerPlugins[e];
          assert(t, `The plugin "${e}" is not registered.`),
            Object.keys(t).forEach((e) => {
              'name' !== e && this.lifecycle[e].remove(t[e]);
            });
        }
        inherit({ lifecycle: e, registerPlugins: t }) {
          Object.keys(e).forEach((t) => {
            assert(
              !this.lifecycle[t],
              `The hook "${t}" has a conflict and cannot be inherited.`
            ),
              (this.lifecycle[t] = e[t]);
          }),
            Object.keys(t).forEach((e) => {
              assert(
                !this.registerPlugins[e],
                `The plugin "${e}" has a conflict and cannot be inherited.`
              ),
                this.applyPlugin(t[e]);
            });
        }
        constructor(e) {
          (this.registerPlugins = {}),
            (this.lifecycle = e),
            (this.lifecycleKeys = Object.keys(e));
        }
      }
      function _extends$5() {
        return (_extends$5 =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t];
              for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
          }).apply(this, arguments);
      }
      function defaultPreloadArgs(e) {
        return _extends$5(
          {
            resourceCategory: 'sync',
            share: !0,
            depsRemote: !0,
            prefetchInterface: !1,
          },
          e
        );
      }
      function formatPreloadArgs(e, t) {
        return t.map((t) => {
          let r = matchRemote(e, t.nameOrAlias);
          return (
            assert(
              r,
              `Unable to preload ${t.nameOrAlias} as it is not included in ${!r && safeToString$1({ remoteInfo: r, remotes: e })}`
            ),
            { remote: r, preloadConfig: defaultPreloadArgs(t) }
          );
        });
      }
      function normalizePreloadExposes(e) {
        return e
          ? e.map((e) =>
              '.' === e ? e : e.startsWith('./') ? e.replace('./', '') : e
            )
          : [];
      }
      function preloadAssets(e, t, r, n = !0) {
        let { cssAssets: o, jsAssetsWithoutEntry: i, entryAssets: s } = r;
        t.options.inBrowser &&
          (s.forEach((r) => {
            let { moduleInfo: n } = r,
              o = t.moduleCache.get(e.name);
            getRemoteEntry(
              o
                ? {
                    remoteInfo: n,
                    remoteEntryExports: o.remoteEntryExports,
                    createScriptHook: (e) => {
                      let r = t.loaderHook.lifecycle.createScript.emit({
                        url: e,
                      });
                      if (
                        r &&
                        (typeof document > 'u' ||
                          r instanceof HTMLScriptElement ||
                          'script' in r ||
                          'timeout' in r)
                      )
                        return r;
                    },
                  }
                : {
                    remoteInfo: n,
                    remoteEntryExports: void 0,
                    createScriptHook: (e) => {
                      let r = t.loaderHook.lifecycle.createScript.emit({
                        url: e,
                      });
                      if (
                        r &&
                        (typeof document > 'u' ||
                          r instanceof HTMLScriptElement ||
                          'script' in r ||
                          'timeout' in r)
                      )
                        return r;
                    },
                  }
            );
          }),
          n
            ? o.forEach((e) => {
                let { link: r, needAttach: n } = createLink({
                  url: e,
                  cb: () => {},
                  attrs: {
                    rel: 'preload',
                    as: 'style',
                    crossorigin: 'anonymous',
                  },
                  createLinkHook: (e) => {
                    let r = t.loaderHook.lifecycle.createLink.emit({ url: e });
                    if (r instanceof HTMLLinkElement) return r;
                  },
                });
                n && document.head.appendChild(r);
              })
            : o.forEach((e) => {
                let { link: r, needAttach: n } = createLink({
                  url: e,
                  cb: () => {},
                  attrs: { rel: 'stylesheet', type: 'text/css' },
                  createLinkHook: (e) => {
                    let r = t.loaderHook.lifecycle.createLink.emit({ url: e });
                    if (r instanceof HTMLLinkElement) return r;
                  },
                  needDeleteLink: !1,
                });
                n && document.head.appendChild(r);
              }),
          n
            ? i.forEach((e) => {
                let { link: r, needAttach: n } = createLink({
                  url: e,
                  cb: () => {},
                  attrs: {
                    rel: 'preload',
                    as: 'script',
                    crossorigin: 'anonymous',
                  },
                  createLinkHook: (e) => {
                    let r = t.loaderHook.lifecycle.createLink.emit({ url: e });
                    if (r instanceof HTMLLinkElement) return r;
                  },
                });
                n && document.head.appendChild(r);
              })
            : i.forEach((e) => {
                let { script: r, needAttach: n } = createScript({
                  url: e,
                  cb: () => {},
                  attrs: { crossorigin: 'anonymous', fetchpriority: 'high' },
                  createScriptHook: (e) => {
                    let r = t.loaderHook.lifecycle.createScript.emit({
                      url: e,
                    });
                    if (r instanceof HTMLScriptElement) return r;
                  },
                  needDeleteScript: !0,
                });
                n && document.head.appendChild(r);
              }));
      }
      function _extends$4() {
        return (_extends$4 =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t];
              for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
          }).apply(this, arguments);
      }
      function assignRemoteInfo(e, t) {
        ('remoteEntry' in t && t.remoteEntry) ||
          error(`The attribute remoteEntry of ${name} must not be undefined.`);
        let { remoteEntry: r } = t,
          n = getResourceUrl(t, r);
        isBrowserEnv$1() || n.startsWith('http') || (n = `https:${n}`),
          (e.type = t.remoteEntryType),
          (e.entryGlobalName = t.globalName),
          (e.entry = n),
          (e.version = t.version),
          (e.buildVersion = t.buildVersion);
      }
      function snapshotPlugin() {
        return {
          name: 'snapshot-plugin',
          async afterResolve(e) {
            let {
              remote: t,
              pkgNameOrAlias: r,
              expose: n,
              origin: o,
              remoteInfo: i,
            } = e;
            if (!isRemoteInfoWithEntry(t) || !isPureRemoteEntry(t)) {
              let { remoteSnapshot: s, globalSnapshot: a } =
                await o.snapshotHandler.loadRemoteSnapshotInfo(t);
              assignRemoteInfo(i, s);
              let l = {
                  remote: t,
                  preloadConfig: {
                    nameOrAlias: r,
                    exposes: [n],
                    resourceCategory: 'sync',
                    share: !1,
                    depsRemote: !1,
                  },
                },
                c =
                  await o.remoteHandler.hooks.lifecycle.generatePreloadAssets.emit(
                    {
                      origin: o,
                      preloadOptions: l,
                      remoteInfo: i,
                      remote: t,
                      remoteSnapshot: s,
                      globalSnapshot: a,
                    }
                  );
              return (
                c && preloadAssets(i, o, c, !1),
                _extends$4({}, e, { remoteSnapshot: s })
              );
            }
            return e;
          },
        };
      }
      function splitId(e) {
        let t = e.split(':');
        return 1 === t.length
          ? { name: t[0], version: void 0 }
          : 2 === t.length
            ? { name: t[0], version: t[1] }
            : { name: t[1], version: t[2] };
      }
      function traverseModuleInfo(e, t, r, n, o = {}, i) {
        let { value: s } = getInfoWithoutType(e, getFMId(t)),
          a = i || s;
        if (a && !isManifestProvider(a) && (r(a, t, n), a.remotesInfo))
          for (let t of Object.keys(a.remotesInfo)) {
            if (o[t]) continue;
            o[t] = !0;
            let n = splitId(t),
              i = a.remotesInfo[t];
            traverseModuleInfo(
              e,
              { name: n.name, version: i.matchedVersion },
              r,
              !1,
              o,
              void 0
            );
          }
      }
      function generatePreloadAssets(e, t, r, n, o) {
        let i = [],
          s = [],
          a = [],
          l = new Set(),
          c = new Set(),
          { options: u } = e,
          { preloadConfig: d } = t,
          { depsRemote: h } = d;
        if (
          (traverseModuleInfo(
            n,
            r,
            (t, r, n) => {
              let o;
              if (n) o = d;
              else if (Array.isArray(h)) {
                let e = h.find(
                  (e) => e.nameOrAlias === r.name || e.nameOrAlias === r.alias
                );
                if (!e) return;
                o = defaultPreloadArgs(e);
              } else {
                if (!0 !== h) return;
                o = d;
              }
              let l = getResourceUrl(
                t,
                'remoteEntry' in t ? t.remoteEntry : ''
              );
              l &&
                a.push({
                  name: r.name,
                  moduleInfo: {
                    name: r.name,
                    entry: l,
                    type: 'remoteEntryType' in t ? t.remoteEntryType : 'global',
                    entryGlobalName: 'globalName' in t ? t.globalName : r.name,
                    shareScope: '',
                    version: 'version' in t ? t.version : void 0,
                  },
                  url: l,
                });
              let c = 'modules' in t ? t.modules : [],
                u = normalizePreloadExposes(o.exposes);
              if (u.length && 'modules' in t) {
                var f;
                c =
                  null == t || null == (f = t.modules)
                    ? void 0
                    : f.reduce(
                        (e, t) => (
                          (null == u ? void 0 : u.indexOf(t.moduleName)) !==
                            -1 && e.push(t),
                          e
                        ),
                        []
                      );
              }
              function g(e) {
                let r = e.map((e) => getResourceUrl(t, e));
                return o.filter ? r.filter(o.filter) : r;
              }
              if (c) {
                let n = c.length;
                for (let a = 0; a < n; a++) {
                  let n = c[a],
                    l = `${r.name}/${n.moduleName}`;
                  e.remoteHandler.hooks.lifecycle.handlePreloadModule.emit({
                    id: '.' === n.moduleName ? r.name : l,
                    name: r.name,
                    remoteSnapshot: t,
                    preloadConfig: o,
                    remote: r,
                    origin: e,
                  }),
                    getPreloaded(l) ||
                      ('all' === o.resourceCategory
                        ? (i.push(...g(n.assets.css.async)),
                          i.push(...g(n.assets.css.sync)),
                          s.push(...g(n.assets.js.async)))
                        : ((o.resourceCategory = 'sync'),
                          i.push(...g(n.assets.css.sync))),
                      s.push(...g(n.assets.js.sync)),
                      setPreloaded(l));
                }
              }
            },
            !0,
            {},
            o
          ),
          o.shared)
        ) {
          let t = (t, r) => {
            let n = getRegisteredShare(
              e.shareScopeMap,
              r.sharedName,
              t,
              e.sharedHandler.hooks.lifecycle.resolveShare
            );
            n &&
              'function' == typeof n.lib &&
              (r.assets.js.sync.forEach((e) => {
                l.add(e);
              }),
              r.assets.css.sync.forEach((e) => {
                c.add(e);
              }));
          };
          o.shared.forEach((e) => {
            var r;
            let n = null == (r = u.shared) ? void 0 : r[e.sharedName];
            if (!n) return;
            let o = e.version ? n.find((t) => t.version === e.version) : n;
            o &&
              arrayOptions(o).forEach((r) => {
                t(r, e);
              });
          });
        }
        let f = s.filter((e) => !l.has(e));
        return {
          cssAssets: i.filter((e) => !c.has(e)),
          jsAssetsWithoutEntry: f,
          entryAssets: a,
        };
      }
      let generatePreloadAssetsPlugin = function () {
        return {
          name: 'generate-preload-assets-plugin',
          async generatePreloadAssets(e) {
            let {
              origin: t,
              preloadOptions: r,
              remoteInfo: n,
              remote: o,
              globalSnapshot: i,
              remoteSnapshot: s,
            } = e;
            return isRemoteInfoWithEntry(o) && isPureRemoteEntry(o)
              ? {
                  cssAssets: [],
                  jsAssetsWithoutEntry: [],
                  entryAssets: [
                    {
                      name: o.name,
                      url: o.entry,
                      moduleInfo: {
                        name: n.name,
                        entry: o.entry,
                        type: 'global',
                        entryGlobalName: '',
                        shareScope: '',
                      },
                    },
                  ],
                }
              : (assignRemoteInfo(n, s), generatePreloadAssets(t, r, n, i, s));
          },
        };
      };
      function _extends$3() {
        return (_extends$3 =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t];
              for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
          }).apply(this, arguments);
      }
      class SnapshotHandler {
        async loadSnapshot(e) {
          let { options: t } = this.HostInstance,
            {
              hostGlobalSnapshot: r,
              remoteSnapshot: n,
              globalSnapshot: o,
            } = this.getGlobalRemoteInfo(e),
            { remoteSnapshot: i, globalSnapshot: s } =
              await this.hooks.lifecycle.loadSnapshot.emit({
                options: t,
                moduleInfo: e,
                hostGlobalSnapshot: r,
                remoteSnapshot: n,
                globalSnapshot: o,
              });
          return { remoteSnapshot: i, globalSnapshot: s };
        }
        async loadRemoteSnapshotInfo(e) {
          let { options: t } = this.HostInstance;
          await this.hooks.lifecycle.beforeLoadRemoteSnapshot.emit({
            options: t,
            moduleInfo: e,
          });
          let r = getGlobalSnapshotInfoByModuleInfo({
            name: this.HostInstance.options.name,
            version: this.HostInstance.options.version,
          });
          r ||
            ((r = {
              version: this.HostInstance.options.version || '',
              remoteEntry: '',
              remotesInfo: {},
            }),
            addGlobalSnapshot({ [this.HostInstance.options.name]: r })),
            r &&
              'remotesInfo' in r &&
              !getInfoWithoutType(r.remotesInfo, e.name).value &&
              ('version' in e || 'entry' in e) &&
              (r.remotesInfo = _extends$3(
                {},
                null == r ? void 0 : r.remotesInfo,
                {
                  [e.name]: {
                    matchedVersion: 'version' in e ? e.version : e.entry,
                  },
                }
              ));
          let {
              hostGlobalSnapshot: n,
              remoteSnapshot: o,
              globalSnapshot: i,
            } = this.getGlobalRemoteInfo(e),
            { remoteSnapshot: s, globalSnapshot: a } =
              await this.hooks.lifecycle.loadSnapshot.emit({
                options: t,
                moduleInfo: e,
                hostGlobalSnapshot: n,
                remoteSnapshot: o,
                globalSnapshot: i,
              });
          if (s) {
            if (isManifestProvider(s)) {
              let t = await this.getManifestJson(s.remoteEntry, e, {}),
                r = setGlobalSnapshotInfoByModuleInfo(
                  _extends$3({}, e, { entry: s.remoteEntry }),
                  t
                );
              return { remoteSnapshot: t, globalSnapshot: r };
            }
            {
              let { remoteSnapshot: t } =
                await this.hooks.lifecycle.loadRemoteSnapshot.emit({
                  options: this.HostInstance.options,
                  moduleInfo: e,
                  remoteSnapshot: s,
                  from: 'global',
                });
              return { remoteSnapshot: t, globalSnapshot: a };
            }
          }
          if (isRemoteInfoWithEntry(e)) {
            let t = await this.getManifestJson(e.entry, e, {}),
              r = setGlobalSnapshotInfoByModuleInfo(e, t),
              { remoteSnapshot: n } =
                await this.hooks.lifecycle.loadRemoteSnapshot.emit({
                  options: this.HostInstance.options,
                  moduleInfo: e,
                  remoteSnapshot: t,
                  from: 'global',
                });
            return { remoteSnapshot: n, globalSnapshot: r };
          }
          error(`
          Cannot get remoteSnapshot with the name: '${e.name}', version: '${e.version}' from __FEDERATION__.moduleInfo. The following reasons may be causing the problem:

          1. The Deploy platform did not deliver the correct data. You can use __FEDERATION__.moduleInfo to check the remoteInfo.

          2. The remote '${e.name}' version '${e.version}' is not released.

          The transformed module info: ${JSON.stringify(a)}
        `);
        }
        getGlobalRemoteInfo(e) {
          let t = getGlobalSnapshotInfoByModuleInfo({
              name: this.HostInstance.options.name,
              version: this.HostInstance.options.version,
            }),
            r =
              t &&
              'remotesInfo' in t &&
              t.remotesInfo &&
              getInfoWithoutType(t.remotesInfo, e.name).value;
          return r && r.matchedVersion
            ? {
                hostGlobalSnapshot: t,
                globalSnapshot: getGlobalSnapshot(),
                remoteSnapshot: getGlobalSnapshotInfoByModuleInfo({
                  name: e.name,
                  version: r.matchedVersion,
                }),
              }
            : {
                hostGlobalSnapshot: void 0,
                globalSnapshot: getGlobalSnapshot(),
                remoteSnapshot: getGlobalSnapshotInfoByModuleInfo({
                  name: e.name,
                  version: 'version' in e ? e.version : void 0,
                }),
              };
        }
        async getManifestJson(e, t, r) {
          let n = async () => {
              let r = this.manifestCache.get(e);
              if (r) return r;
              try {
                let t = await this.loaderHook.lifecycle.fetch.emit(e, {});
                return (
                  (t && t instanceof Response) || (t = await fetch(e, {})),
                  (r = await t.json()),
                  assert(
                    r.metaData && r.exposes && r.shared,
                    `${e} is not a federation manifest`
                  ),
                  this.manifestCache.set(e, r),
                  r
                );
              } catch (r) {
                error(`Failed to get manifestJson for ${t.name}. The manifest URL is ${e}. Please ensure that the manifestUrl is accessible.
          
 Error message:
          
 ${r}`);
              }
            },
            o = async () => {
              let r = await n(),
                o = generateSnapshotFromManifest(r, { version: e }),
                { remoteSnapshot: i } =
                  await this.hooks.lifecycle.loadRemoteSnapshot.emit({
                    options: this.HostInstance.options,
                    moduleInfo: t,
                    manifestJson: r,
                    remoteSnapshot: o,
                    manifestUrl: e,
                    from: 'manifest',
                  });
              return i;
            };
          return (
            this.manifestLoading[e] ||
              (this.manifestLoading[e] = o().then((e) => e)),
            this.manifestLoading[e]
          );
        }
        constructor(e) {
          (this.loadingHostSnapshot = null),
            (this.manifestCache = new Map()),
            (this.hooks = new PluginSystem({
              beforeLoadRemoteSnapshot: new AsyncHook(
                'beforeLoadRemoteSnapshot'
              ),
              loadSnapshot: new AsyncWaterfallHook('loadGlobalSnapshot'),
              loadRemoteSnapshot: new AsyncWaterfallHook('loadRemoteSnapshot'),
            })),
            (this.manifestLoading = Global.__FEDERATION__.__MANIFEST_LOADING__),
            (this.HostInstance = e),
            (this.loaderHook = e.loaderHook);
        }
      }
      function _extends$2() {
        return (_extends$2 =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t];
              for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
          }).apply(this, arguments);
      }
      function _object_without_properties_loose(e, t) {
        if (null == e) return {};
        var r,
          n,
          o = {},
          i = Object.keys(e);
        for (n = 0; n < i.length; n++)
          (r = i[n]), t.indexOf(r) >= 0 || (o[r] = e[r]);
        return o;
      }
      class SharedHandler {
        registerShared(e, t) {
          let { shareInfos: r, shared: n } = formatShareConfigs(e, t);
          return (
            Object.keys(r).forEach((e) => {
              r[e].forEach((r) => {
                !getRegisteredShare(
                  this.shareScopeMap,
                  e,
                  r,
                  this.hooks.lifecycle.resolveShare
                ) &&
                  r &&
                  r.lib &&
                  this.setShared({
                    pkgName: e,
                    lib: r.lib,
                    get: r.get,
                    loaded: !0,
                    shared: r,
                    from: t.name,
                  });
              });
            }),
            { shareInfos: r, shared: n }
          );
        }
        async loadShare(e, t) {
          let { host: r } = this,
            n = getTargetSharedOptions({
              pkgName: e,
              extraOptions: t,
              shareInfos: r.options.shared,
            });
          null != n &&
            n.scope &&
            (await Promise.all(
              n.scope.map(async (e) => {
                await Promise.all(this.initializeSharing(e, n.strategy));
              })
            ));
          let { shareInfo: o } =
            await this.hooks.lifecycle.beforeLoadShare.emit({
              pkgName: e,
              shareInfo: n,
              shared: r.options.shared,
              origin: r,
            });
          assert(
            o,
            `Cannot find ${e} Share in the ${r.options.name}. Please ensure that the ${e} Share parameters have been injected`
          );
          let i = getRegisteredShare(
              this.shareScopeMap,
              e,
              o,
              this.hooks.lifecycle.resolveShare
            ),
            s = (e) => {
              e.useIn || (e.useIn = []), addUniqueItem(e.useIn, r.options.name);
            };
          if (i && i.lib) return s(i), i.lib;
          if (i && i.loading && !i.loaded) {
            let e = await i.loading;
            return (i.loaded = !0), i.lib || (i.lib = e), s(i), e;
          }
          if (i) {
            let t = (async () => {
              let t = await i.get();
              (o.lib = t), (o.loaded = !0), s(o);
              let r = getRegisteredShare(
                this.shareScopeMap,
                e,
                o,
                this.hooks.lifecycle.resolveShare
              );
              return r && ((r.lib = t), (r.loaded = !0)), t;
            })();
            return (
              this.setShared({
                pkgName: e,
                loaded: !1,
                shared: i,
                from: r.options.name,
                lib: null,
                loading: t,
              }),
              t
            );
          }
          {
            if (null != t && t.customShareInfo) return !1;
            let n = (async () => {
              let t = await o.get();
              (o.lib = t), (o.loaded = !0), s(o);
              let r = getRegisteredShare(
                this.shareScopeMap,
                e,
                o,
                this.hooks.lifecycle.resolveShare
              );
              return r && ((r.lib = t), (r.loaded = !0)), t;
            })();
            return (
              this.setShared({
                pkgName: e,
                loaded: !1,
                shared: o,
                from: r.options.name,
                lib: null,
                loading: n,
              }),
              n
            );
          }
        }
        initializeSharing(e = DEFAULT_SCOPE, t) {
          let { host: r } = this,
            n = this.shareScopeMap,
            o = r.options.name;
          n[e] || (n[e] = {});
          let i = n[e],
            s = (e, t) => {
              var r;
              let { version: n, eager: s } = t;
              i[e] = i[e] || {};
              let a = i[e],
                l = a[n],
                c = !!(
                  l &&
                  (l.eager || (null == (r = l.shareConfig) ? void 0 : r.eager))
                );
              (!l ||
                ('loaded-first' !== l.strategy &&
                  !l.loaded &&
                  (!s != !c ? s : o > l.from))) &&
                (a[n] = t);
            },
            a = [],
            l = (t) => t && t.init && t.init(n[e]),
            c = async (e) => {
              let { module: t } =
                await r.remoteHandler.getRemoteModuleAndOptions({ id: e });
              if (t.getEntry) {
                let e = await t.getEntry();
                t.inited || (l(e), (t.inited = !0));
              }
            };
          return (
            Object.keys(r.options.shared).forEach((t) => {
              r.options.shared[t].forEach((r) => {
                r.scope.includes(e) && s(t, r);
              });
            }),
            'version-first' === t &&
              r.options.remotes.forEach((t) => {
                t.shareScope === e && a.push(c(t.name));
              }),
            a
          );
        }
        loadShareSync(e, t) {
          let { host: r } = this,
            n = getTargetSharedOptions({
              pkgName: e,
              extraOptions: t,
              shareInfos: r.options.shared,
            });
          null != n &&
            n.scope &&
            n.scope.forEach((e) => {
              this.initializeSharing(e, n.strategy);
            });
          let o = getRegisteredShare(
              this.shareScopeMap,
              e,
              n,
              this.hooks.lifecycle.resolveShare
            ),
            i = (e) => {
              e.useIn || (e.useIn = []), addUniqueItem(e.useIn, r.options.name);
            };
          if (o) {
            if ('function' == typeof o.lib)
              return (
                i(o),
                o.loaded ||
                  ((o.loaded = !0),
                  o.from === r.options.name && (n.loaded = !0)),
                o.lib
              );
            if ('function' == typeof o.get) {
              let t = o.get();
              if (!(t instanceof Promise))
                return (
                  i(o),
                  this.setShared({
                    pkgName: e,
                    loaded: !0,
                    from: r.options.name,
                    lib: t,
                    shared: o,
                  }),
                  t
                );
            }
          }
          if (n.lib) return n.loaded || (n.loaded = !0), n.lib;
          if (n.get) {
            let t = n.get();
            if (t instanceof Promise)
              throw Error(`
        The loadShareSync function was unable to load ${e}. The ${e} could not be found in ${r.options.name}.
        Possible reasons for failure: 

        1. The ${e} share was registered with the 'get' attribute, but loadShare was not used beforehand.

        2. The ${e} share was not registered with the 'lib' attribute.

      `);
            return (
              (n.lib = t),
              this.setShared({
                pkgName: e,
                loaded: !0,
                from: r.options.name,
                lib: n.lib,
                shared: n,
              }),
              n.lib
            );
          }
          throw Error(`
        The loadShareSync function was unable to load ${e}. The ${e} could not be found in ${r.options.name}.
        Possible reasons for failure: 

        1. The ${e} share was registered with the 'get' attribute, but loadShare was not used beforehand.

        2. The ${e} share was not registered with the 'lib' attribute.

      `);
        }
        initShareScopeMap(e, t, r = {}) {
          let { host: n } = this;
          (this.shareScopeMap[e] = t),
            this.hooks.lifecycle.initContainerShareScopeMap.emit({
              shareScope: t,
              options: n.options,
              origin: n,
              scopeName: e,
              hostShareScopeMap: r.hostShareScopeMap,
            });
        }
        setShared({
          pkgName: e,
          shared: t,
          from: r,
          lib: n,
          loading: o,
          loaded: i,
          get: s,
        }) {
          let { version: a, scope: l = 'default' } = t,
            c = _object_without_properties_loose(t, ['version', 'scope']);
          (Array.isArray(l) ? l : [l]).forEach((t) => {
            this.shareScopeMap[t] || (this.shareScopeMap[t] = {}),
              this.shareScopeMap[t][e] || (this.shareScopeMap[t][e] = {}),
              !this.shareScopeMap[t][e][a] &&
                ((this.shareScopeMap[t][e][a] = _extends$2(
                  { version: a, scope: ['default'] },
                  c,
                  { lib: n, loaded: i, loading: o }
                )),
                s && (this.shareScopeMap[t][e][a].get = s));
          });
        }
        _setGlobalShareScopeMap(e) {
          let t = getGlobalShareScope(),
            r = e.id || e.name;
          r && !t[r] && (t[r] = this.shareScopeMap);
        }
        constructor(e) {
          (this.hooks = new PluginSystem({
            afterResolve: new AsyncWaterfallHook('afterResolve'),
            beforeLoadShare: new AsyncWaterfallHook('beforeLoadShare'),
            loadShare: new AsyncHook(),
            resolveShare: new SyncWaterfallHook('resolveShare'),
            initContainerShareScopeMap: new SyncWaterfallHook(
              'initContainerShareScopeMap'
            ),
          })),
            (this.host = e),
            (this.shareScopeMap = {}),
            this._setGlobalShareScopeMap(e.options);
        }
      }
      function _extends$1() {
        return (_extends$1 =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t];
              for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
          }).apply(this, arguments);
      }
      class RemoteHandler {
        formatAndRegisterRemote(e, t) {
          return (t.remotes || []).reduce(
            (e, t) => (this.registerRemote(t, e, { force: !1 }), e),
            e.remotes
          );
        }
        async loadRemote(e, t) {
          let { host: r } = this;
          try {
            let { loadFactory: n = !0 } = t || { loadFactory: !0 },
              {
                module: o,
                moduleOptions: i,
                remoteMatchInfo: s,
              } = await this.getRemoteModuleAndOptions({ id: e }),
              { pkgNameOrAlias: a, remote: l, expose: c, id: u } = s,
              d = await o.get(u, c, t),
              h = await this.hooks.lifecycle.onLoad.emit({
                id: u,
                pkgNameOrAlias: a,
                expose: c,
                exposeModule: n ? d : void 0,
                exposeModuleFactory: n ? void 0 : d,
                remote: l,
                options: i,
                moduleInstance: o,
                origin: r,
              });
            return 'function' == typeof h ? h : d;
          } catch (i) {
            let { from: n = 'runtime' } = t || { from: 'runtime' },
              o = await this.hooks.lifecycle.errorLoadRemote.emit({
                id: e,
                error: i,
                from: n,
                lifecycle: 'onLoad',
                origin: r,
              });
            if (!o) throw i;
            return o;
          }
        }
        async preloadRemote(e) {
          let { host: t } = this;
          await this.hooks.lifecycle.beforePreloadRemote.emit({
            preloadOps: e,
            options: t.options,
            origin: t,
          });
          let r = formatPreloadArgs(t.options.remotes, e);
          await Promise.all(
            r.map(async (e) => {
              let { remote: r } = e,
                n = getRemoteInfo(r),
                { globalSnapshot: o, remoteSnapshot: i } =
                  await t.snapshotHandler.loadRemoteSnapshotInfo(r),
                s = await this.hooks.lifecycle.generatePreloadAssets.emit({
                  origin: t,
                  preloadOptions: e,
                  remote: r,
                  remoteInfo: n,
                  globalSnapshot: o,
                  remoteSnapshot: i,
                });
              s && preloadAssets(n, t, s);
            })
          );
        }
        registerRemotes(e, t) {
          let { host: r } = this;
          e.forEach((e) => {
            this.registerRemote(e, r.options.remotes, {
              force: null == t ? void 0 : t.force,
            });
          });
        }
        async getRemoteModuleAndOptions(e) {
          let t;
          let { host: r } = this,
            { id: n } = e;
          try {
            t = await this.hooks.lifecycle.beforeRequest.emit({
              id: n,
              options: r.options,
              origin: r,
            });
          } catch (e) {
            if (
              !(t = await this.hooks.lifecycle.errorLoadRemote.emit({
                id: n,
                options: r.options,
                origin: r,
                from: 'runtime',
                error: e,
                lifecycle: 'beforeRequest',
              }))
            )
              throw e;
          }
          let { id: o } = t,
            i = matchRemoteWithNameAndExpose(r.options.remotes, o);
          assert(
            i,
            `
        Unable to locate ${o} in ${r.options.name}. Potential reasons for failure include:

        1. ${o} was not included in the 'remotes' parameter of ${r.options.name || 'the host'}.

        2. ${o} could not be found in the 'remotes' of ${r.options.name} with either 'name' or 'alias' attributes.
        3. ${o} is not online, injected, or loaded.
        4. ${o}  cannot be accessed on the expected.
        5. The 'beforeRequest' hook was provided but did not return the correct 'remoteInfo' when attempting to load ${o}.
      `
          );
          let { remote: s } = i,
            a = getRemoteInfo(s),
            l = await r.sharedHandler.hooks.lifecycle.afterResolve.emit(
              _extends$1({ id: o }, i, {
                options: r.options,
                origin: r,
                remoteInfo: a,
              })
            ),
            { remote: c, expose: u } = l;
          assert(
            c && u,
            `The 'beforeRequest' hook was executed, but it failed to return the correct 'remote' and 'expose' values while loading ${o}.`
          );
          let d = r.moduleCache.get(c.name),
            h = { host: r, remoteInfo: a };
          return (
            d || ((d = new Module(h)), r.moduleCache.set(c.name, d)),
            { module: d, moduleOptions: h, remoteMatchInfo: l }
          );
        }
        registerRemote(e, t, r) {
          let { host: n } = this,
            o = () => {
              if (e.alias) {
                let r = t.find((t) => {
                  var r;
                  return (
                    e.alias &&
                    (t.name.startsWith(e.alias) ||
                      (null == (r = t.alias) ? void 0 : r.startsWith(e.alias)))
                  );
                });
                assert(
                  !r,
                  `The alias ${e.alias} of remote ${e.name} is not allowed to be the prefix of ${r && r.name} name or alias`
                );
              }
              'entry' in e &&
                isBrowserEnv() &&
                !e.entry.startsWith('http') &&
                (e.entry = new URL(e.entry, window.location.origin).href),
                e.shareScope || (e.shareScope = DEFAULT_SCOPE),
                e.type || (e.type = DEFAULT_REMOTE_TYPE);
            },
            i = t.find((t) => t.name === e.name);
          if (i) {
            let s = [
              `The remote "${e.name}" is already registered.`,
              null != r && r.force
                ? 'Hope you have known that OVERRIDE it may have some unexpected errors'
                : 'If you want to merge the remote, you can set "force: true".',
            ];
            null != r &&
              r.force &&
              (this.removeRemote(i),
              o(),
              t.push(e),
              this.hooks.lifecycle.registerRemote.emit({
                remote: e,
                origin: n,
              })),
              warn(s.join(' '));
          } else
            o(),
              t.push(e),
              this.hooks.lifecycle.registerRemote.emit({
                remote: e,
                origin: n,
              });
        }
        removeRemote(e) {
          let { host: t } = this,
            { name: r } = e,
            n = t.options.remotes.findIndex((e) => e.name === r);
          -1 !== n && t.options.remotes.splice(n, 1);
          let o = t.moduleCache.get(e.name);
          if (o) {
            var i;
            let r = o.remoteInfo,
              n = r.entryGlobalName;
            globalThis[n] &&
              (null == (i = Object.getOwnPropertyDescriptor(globalThis, n))
                ? void 0
                : i.configurable) &&
              delete globalThis[n];
            let s = getRemoteEntryUniqueKey(o.remoteInfo);
            globalLoading[s] && delete globalLoading[s];
            let a = r.buildVersion
                ? composeKeyWithSeparator(r.name, r.buildVersion)
                : r.name,
              l = globalThis.__FEDERATION__.__INSTANCES__.findIndex((e) =>
                r.buildVersion ? e.options.id === a : e.name === a
              );
            if (-1 !== l) {
              let e = globalThis.__FEDERATION__.__INSTANCES__[l];
              a = e.options.id || a;
              let t = getGlobalShareScope(),
                n = !0,
                o = [];
              Object.keys(t).forEach((e) => {
                Object.keys(t[e]).forEach((i) => {
                  Object.keys(t[e][i]).forEach((s) => {
                    Object.keys(t[e][i][s]).forEach((a) => {
                      let l = t[e][i][s][a];
                      l.from === r.name &&
                        (l.loaded || l.loading
                          ? ((l.useIn = l.useIn.filter((e) => e !== r.name)),
                            l.useIn.length ? (n = !1) : o.push([e, i, s, a]))
                          : o.push([e, i, s, a]));
                    });
                  });
                });
              }),
                n && ((e.shareScopeMap = {}), delete t[a]),
                o.forEach(([e, r, n, o]) => {
                  var i, s, a;
                  null == (a = t[e]) ||
                    null == (s = a[r]) ||
                    null == (i = s[n]) ||
                    delete i[o];
                }),
                globalThis.__FEDERATION__.__INSTANCES__.splice(l, 1);
            }
            t.moduleCache.delete(e.name);
          }
        }
        constructor(e) {
          (this.hooks = new PluginSystem({
            registerRemote: new SyncWaterfallHook('registerRemote'),
            beforeRequest: new AsyncWaterfallHook('beforeRequest'),
            onLoad: new AsyncHook('onLoad'),
            handlePreloadModule: new SyncHook('handlePreloadModule'),
            errorLoadRemote: new AsyncHook('errorLoadRemote'),
            beforePreloadRemote: new AsyncHook('beforePreloadRemote'),
            generatePreloadAssets: new AsyncHook('generatePreloadAssets'),
            afterPreloadRemote: new AsyncHook(),
          })),
            (this.host = e);
        }
      }
      function _extends() {
        return (_extends =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t];
              for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
          }).apply(this, arguments);
      }
      class FederationHost {
        initOptions(e) {
          this.registerPlugins(e.plugins);
          let t = this.formatOptions(this.options, e);
          return (this.options = t), t;
        }
        async loadShare(e, t) {
          return this.sharedHandler.loadShare(e, t);
        }
        loadShareSync(e, t) {
          return this.sharedHandler.loadShareSync(e, t);
        }
        initializeSharing(e = DEFAULT_SCOPE, t) {
          return this.sharedHandler.initializeSharing(e, t);
        }
        initRawContainer(e, t, r) {
          let n = new Module({
            host: this,
            remoteInfo: getRemoteInfo({ name: e, entry: t }),
          });
          return (n.remoteEntryExports = r), this.moduleCache.set(e, n), n;
        }
        async loadRemote(e, t) {
          return this.remoteHandler.loadRemote(e, t);
        }
        async preloadRemote(e) {
          return this.remoteHandler.preloadRemote(e);
        }
        initShareScopeMap(e, t, r = {}) {
          this.sharedHandler.initShareScopeMap(e, t, r);
        }
        formatOptions(e, t) {
          let { shared: r } = formatShareConfigs(e, t),
            { userOptions: n, options: o } =
              this.hooks.lifecycle.beforeInit.emit({
                origin: this,
                userOptions: t,
                options: e,
                shareInfo: r,
              }),
            i = this.remoteHandler.formatAndRegisterRemote(o, n),
            { shared: s } = this.sharedHandler.registerShared(o, n),
            a = [...o.plugins];
          n.plugins &&
            n.plugins.forEach((e) => {
              a.includes(e) || a.push(e);
            });
          let l = _extends({}, e, t, { plugins: a, remotes: i, shared: s });
          return (
            this.hooks.lifecycle.init.emit({ origin: this, options: l }), l
          );
        }
        registerPlugins(e) {
          let t = registerPlugins$1(e, [
            this.hooks,
            this.remoteHandler.hooks,
            this.sharedHandler.hooks,
            this.snapshotHandler.hooks,
            this.loaderHook,
          ]);
          this.options.plugins = this.options.plugins.reduce(
            (e, t) => (
              t && e && !e.find((e) => e.name === t.name) && e.push(t), e
            ),
            t || []
          );
        }
        registerRemotes(e, t) {
          return this.remoteHandler.registerRemotes(e, t);
        }
        constructor(e) {
          (this.hooks = new PluginSystem({
            beforeInit: new SyncWaterfallHook('beforeInit'),
            init: new SyncHook(),
            beforeInitContainer: new AsyncWaterfallHook('beforeInitContainer'),
            initContainer: new AsyncWaterfallHook('initContainer'),
          })),
            (this.version = '0.1.21'),
            (this.moduleCache = new Map()),
            (this.loaderHook = new PluginSystem({
              getModuleInfo: new SyncHook(),
              createScript: new SyncHook(),
              createLink: new SyncHook(),
              fetch: new AsyncHook('fetch'),
            }));
          let t = {
            id: getBuilderId(),
            name: e.name,
            plugins: [snapshotPlugin(), generatePreloadAssetsPlugin()],
            remotes: [],
            shared: {},
            inBrowser: isBrowserEnv$1(),
          };
          (this.name = e.name),
            (this.options = t),
            (this.snapshotHandler = new SnapshotHandler(this)),
            (this.sharedHandler = new SharedHandler(this)),
            (this.remoteHandler = new RemoteHandler(this)),
            (this.shareScopeMap = this.sharedHandler.shareScopeMap),
            this.registerPlugins([...t.plugins, ...(e.plugins || [])]),
            (this.options = this.formatOptions(t, e));
        }
      }
      let FederationInstance = null;
      function init(e) {
        let t = getGlobalFederationInstance(e.name, e.version);
        return t
          ? (t.initOptions(e),
            FederationInstance || (FederationInstance = t),
            t)
          : (setGlobalFederationInstance(
              (FederationInstance = new (getGlobalFederationConstructor() ||
                FederationHost)(e))
            ),
            FederationInstance);
      }
      function loadRemote(...e) {
        return (
          assert(FederationInstance, 'Please call init first'),
          FederationInstance.loadRemote.apply(FederationInstance, e)
        );
      }
      function __awaiter(e, t, r, n) {
        function o(e) {
          return e instanceof r
            ? e
            : new r(function (t) {
                t(e);
              });
        }
        return new (r || (r = Promise))(function (r, i) {
          function s(e) {
            try {
              l(n.next(e));
            } catch (e) {
              i(e);
            }
          }
          function a(e) {
            try {
              l(n.throw(e));
            } catch (e) {
              i(e);
            }
          }
          function l(e) {
            e.done ? r(e.value) : o(e.value).then(s, a);
          }
          l((n = n.apply(e, t || [])).next());
        });
      }
      function __generator(e, t) {
        var r,
          n,
          o,
          i = {
            label: 0,
            sent: function () {
              if (1 & o[0]) throw o[1];
              return o[1];
            },
            trys: [],
            ops: [],
          },
          s = Object.create(
            ('function' == typeof Iterator ? Iterator : Object).prototype
          );
        return (
          (s.next = a(0)),
          (s.throw = a(1)),
          (s.return = a(2)),
          'function' == typeof Symbol &&
            (s[Symbol.iterator] = function () {
              return this;
            }),
          s
        );
        function a(e) {
          return function (t) {
            return l([e, t]);
          };
        }
        function l(a) {
          if (r) throw TypeError('Generator is already executing.');
          for (; s && ((s = 0), a[0] && (i = 0)), i; )
            try {
              if (
                ((r = 1),
                n &&
                  (o =
                    2 & a[0]
                      ? n.return
                      : a[0]
                        ? n.throw || ((o = n.return) && o.call(n), 0)
                        : n.next) &&
                  !(o = o.call(n, a[1])).done)
              )
                return o;
              switch (((n = 0), o && (a = [2 & a[0], o.value]), a[0])) {
                case 0:
                case 1:
                  o = a;
                  break;
                case 4:
                  return i.label++, { value: a[1], done: !1 };
                case 5:
                  i.label++, (n = a[1]), (a = [0]);
                  continue;
                case 7:
                  (a = i.ops.pop()), i.trys.pop();
                  continue;
                default:
                  if (
                    !(o = (o = i.trys).length > 0 && o[o.length - 1]) &&
                    (6 === a[0] || 2 === a[0])
                  ) {
                    i = 0;
                    continue;
                  }
                  if (3 === a[0] && (!o || (a[1] > o[0] && a[1] < o[3]))) {
                    i.label = a[1];
                    break;
                  }
                  if (6 === a[0] && i.label < o[1]) {
                    (i.label = o[1]), (o = a);
                    break;
                  }
                  if (o && i.label < o[2]) {
                    (i.label = o[2]), i.ops.push(a);
                    break;
                  }
                  o[2] && i.ops.pop(), i.trys.pop();
                  continue;
              }
              a = t.call(e, i);
            } catch (e) {
              (a = [6, e]), (n = 0);
            } finally {
              r = o = 0;
            }
          if (5 & a[0]) throw a[1];
          return { value: a[0] ? a[1] : void 0, done: !0 };
        }
      }
      setGlobalFederationConstructor(FederationHost);
      var E_CANCELED = Error('request for lock canceled'),
        Semaphore = (function () {
          function e(e, t) {
            void 0 === t && (t = E_CANCELED),
              (this._value = e),
              (this._cancelError = t),
              (this._queue = []),
              (this._weightedWaiters = []);
          }
          return (
            (e.prototype.acquire = function (e, t) {
              var r = this;
              if ((void 0 === e && (e = 1), void 0 === t && (t = 0), e <= 0))
                throw Error('invalid weight '.concat(e, ': must be positive'));
              return new Promise(function (n, o) {
                var i = { resolve: n, reject: o, weight: e, priority: t },
                  s = findIndexFromEnd(r._queue, function (e) {
                    return t <= e.priority;
                  });
                -1 === s && e <= r._value
                  ? r._dispatchItem(i)
                  : r._queue.splice(s + 1, 0, i);
              });
            }),
            (e.prototype.runExclusive = function (e) {
              return __awaiter(this, arguments, void 0, function (e, t, r) {
                var n, o, i;
                return (
                  void 0 === t && (t = 1),
                  void 0 === r && (r = 0),
                  __generator(this, function (s) {
                    switch (s.label) {
                      case 0:
                        return [4, this.acquire(t, r)];
                      case 1:
                        (o = (n = s.sent())[0]), (i = n[1]), (s.label = 2);
                      case 2:
                        return s.trys.push([2, , 4, 5]), [4, e(o)];
                      case 3:
                        return [2, s.sent()];
                      case 4:
                        return i(), [7];
                      case 5:
                        return [2];
                    }
                  })
                );
              });
            }),
            (e.prototype.waitForUnlock = function (e, t) {
              var r = this;
              if ((void 0 === e && (e = 1), void 0 === t && (t = 0), e <= 0))
                throw Error('invalid weight '.concat(e, ': must be positive'));
              return this._couldLockImmediately(e, t)
                ? Promise.resolve()
                : new Promise(function (n) {
                    r._weightedWaiters[e - 1] ||
                      (r._weightedWaiters[e - 1] = []),
                      insertSorted(r._weightedWaiters[e - 1], {
                        resolve: n,
                        priority: t,
                      });
                  });
            }),
            (e.prototype.isLocked = function () {
              return this._value <= 0;
            }),
            (e.prototype.getValue = function () {
              return this._value;
            }),
            (e.prototype.setValue = function (e) {
              (this._value = e), this._dispatchQueue();
            }),
            (e.prototype.release = function (e) {
              if ((void 0 === e && (e = 1), e <= 0))
                throw Error('invalid weight '.concat(e, ': must be positive'));
              (this._value += e), this._dispatchQueue();
            }),
            (e.prototype.cancel = function () {
              var e = this;
              this._queue.forEach(function (t) {
                return t.reject(e._cancelError);
              }),
                (this._queue = []);
            }),
            (e.prototype._dispatchQueue = function () {
              for (
                this._drainUnlockWaiters();
                this._queue.length > 0 && this._queue[0].weight <= this._value;

              )
                this._dispatchItem(this._queue.shift()),
                  this._drainUnlockWaiters();
            }),
            (e.prototype._dispatchItem = function (e) {
              var t = this._value;
              (this._value -= e.weight),
                e.resolve([t, this._newReleaser(e.weight)]);
            }),
            (e.prototype._newReleaser = function (e) {
              var t = this,
                r = !1;
              return function () {
                r || ((r = !0), t.release(e));
              };
            }),
            (e.prototype._drainUnlockWaiters = function () {
              if (0 === this._queue.length)
                for (var e = this._value; e > 0; e--) {
                  var t = this._weightedWaiters[e - 1];
                  t &&
                    (t.forEach(function (e) {
                      return e.resolve();
                    }),
                    (this._weightedWaiters[e - 1] = []));
                }
              else
                for (
                  var r = this._queue[0].priority, e = this._value;
                  e > 0;
                  e--
                ) {
                  var t = this._weightedWaiters[e - 1];
                  if (t) {
                    var n = t.findIndex(function (e) {
                      return e.priority <= r;
                    });
                    (-1 === n ? t : t.splice(0, n)).forEach(function (e) {
                      return e.resolve();
                    });
                  }
                }
            }),
            (e.prototype._couldLockImmediately = function (e, t) {
              return (
                (0 === this._queue.length || this._queue[0].priority < t) &&
                e <= this._value
              );
            }),
            e
          );
        })();
      function insertSorted(e, t) {
        var r = findIndexFromEnd(e, function (e) {
          return t.priority <= e.priority;
        });
        e.splice(r + 1, 0, t);
      }
      function findIndexFromEnd(e, t) {
        for (var r = e.length - 1; r >= 0; r--) if (t(e[r])) return r;
        return -1;
      }
      var Mutex = (function () {
        function e(e) {
          this._semaphore = new Semaphore(1, e);
        }
        return (
          (e.prototype.acquire = function () {
            return __awaiter(this, arguments, void 0, function (e) {
              return (
                void 0 === e && (e = 0),
                __generator(this, function (t) {
                  switch (t.label) {
                    case 0:
                      return [4, this._semaphore.acquire(1, e)];
                    case 1:
                      return [2, t.sent()[1]];
                  }
                })
              );
            });
          }),
          (e.prototype.runExclusive = function (e, t) {
            return (
              void 0 === t && (t = 0),
              this._semaphore.runExclusive(
                function () {
                  return e();
                },
                1,
                t
              )
            );
          }),
          (e.prototype.isLocked = function () {
            return this._semaphore.isLocked();
          }),
          (e.prototype.waitForUnlock = function (e) {
            return void 0 === e && (e = 0), this._semaphore.waitForUnlock(1, e);
          }),
          (e.prototype.release = function () {
            this._semaphore.isLocked() && this._semaphore.release();
          }),
          (e.prototype.cancel = function () {
            return this._semaphore.cancel();
          }),
          e
        );
      })();
      function isMetaMaskProvider(e) {
        return (
          null !== e &&
          'object' == typeof e &&
          e.hasOwnProperty('isMetaMask') &&
          e.hasOwnProperty('request')
        );
      }
      function detectMetaMaskProvider(e, { timeout: t = 3e3 } = {}) {
        let r = !1;
        return new Promise((n) => {
          let o = (e) => {
            let { info: t, provider: o } = e.detail;
            ('io.metamask' === t.rdns || 'io.metamask.flask' === t.rdns) &&
              isMetaMaskProvider(o) &&
              (n(o), (r = !0));
          };
          'function' == typeof e.addEventListener &&
            e.addEventListener('eip6963:announceProvider', o),
            setTimeout(() => {
              r || n(null);
            }, t),
            'function' == typeof e.dispatchEvent &&
              e.dispatchEvent(new Event('eip6963:requestProvider'));
        });
      }
      async function waitForMetaMaskProvider(e, t = {}) {
        let { timeout: r = 3e3, retries: n = 0 } = t,
          o = null;
        try {
          o = await detectMetaMaskProvider(e, { timeout: r });
        } catch {}
        return (
          o ||
          (0 === n
            ? null
            : (o = await waitForMetaMaskProvider({
                timeout: r,
                retries: n - 1,
              })))
        );
      }
      async function detectMetamaskSupport(e) {
        return await waitForMetaMaskProvider(e, { retries: 3 });
      }
      class MetaMaskVirtualWallet {
        constructor() {
          x(this, Q),
            x(this, R),
            x(this, Y),
            O(this, 'id', 'metamask'),
            O(this, 'name', 'MetaMask'),
            O(
              this,
              'icon',
              'data:image/svg+xml;utf8;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMTIiIGhlaWdodD0iMTg5IiB2aWV3Qm94PSIwIDAgMjEyIDE4OSI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cG9seWdvbiBmaWxsPSIjQ0RCREIyIiBwb2ludHM9IjYwLjc1IDE3My4yNSA4OC4zMTMgMTgwLjU2MyA4OC4zMTMgMTcxIDkwLjU2MyAxNjguNzUgMTA2LjMxMyAxNjguNzUgMTA2LjMxMyAxODAgMTA2LjMxMyAxODcuODc1IDg5LjQzOCAxODcuODc1IDY4LjYyNSAxNzguODc1Ii8+PHBvbHlnb24gZmlsbD0iI0NEQkRCMiIgcG9pbnRzPSIxMDUuNzUgMTczLjI1IDEzMi43NSAxODAuNTYzIDEzMi43NSAxNzEgMTM1IDE2OC43NSAxNTAuNzUgMTY4Ljc1IDE1MC43NSAxODAgMTUwLjc1IDE4Ny44NzUgMTMzLjg3NSAxODcuODc1IDExMy4wNjMgMTc4Ljg3NSIgdHJhbnNmb3JtPSJtYXRyaXgoLTEgMCAwIDEgMjU2LjUgMCkiLz48cG9seWdvbiBmaWxsPSIjMzkzOTM5IiBwb2ludHM9IjkwLjU2MyAxNTIuNDM4IDg4LjMxMyAxNzEgOTEuMTI1IDE2OC43NSAxMjAuMzc1IDE2OC43NSAxMjMuNzUgMTcxIDEyMS41IDE1Mi40MzggMTE3IDE0OS42MjUgOTQuNSAxNTAuMTg4Ii8+PHBvbHlnb24gZmlsbD0iI0Y4OUMzNSIgcG9pbnRzPSI3NS4zNzUgMjcgODguODc1IDU4LjUgOTUuMDYzIDE1MC4xODggMTE3IDE1MC4xODggMTIzLjc1IDU4LjUgMTM2LjEyNSAyNyIvPjxwb2x5Z29uIGZpbGw9IiNGODlEMzUiIHBvaW50cz0iMTYuMzEzIDk2LjE4OCAuNTYzIDE0MS43NSAzOS45MzggMTM5LjUgNjUuMjUgMTM5LjUgNjUuMjUgMTE5LjgxMyA2NC4xMjUgNzkuMzEzIDU4LjUgODMuODEzIi8+PHBvbHlnb24gZmlsbD0iI0Q4N0MzMCIgcG9pbnRzPSI0Ni4xMjUgMTAxLjI1IDkyLjI1IDEwMi4zNzUgODcuMTg4IDEyNiA2NS4yNSAxMjAuMzc1Ii8+PHBvbHlnb24gZmlsbD0iI0VBOEQzQSIgcG9pbnRzPSI0Ni4xMjUgMTAxLjgxMyA2NS4yNSAxMTkuODEzIDY1LjI1IDEzNy44MTMiLz48cG9seWdvbiBmaWxsPSIjRjg5RDM1IiBwb2ludHM9IjY1LjI1IDEyMC4zNzUgODcuNzUgMTI2IDk1LjA2MyAxNTAuMTg4IDkwIDE1MyA2NS4yNSAxMzguMzc1Ii8+PHBvbHlnb24gZmlsbD0iI0VCOEYzNSIgcG9pbnRzPSI2NS4yNSAxMzguMzc1IDYwLjc1IDE3My4yNSA5MC41NjMgMTUyLjQzOCIvPjxwb2x5Z29uIGZpbGw9IiNFQThFM0EiIHBvaW50cz0iOTIuMjUgMTAyLjM3NSA5NS4wNjMgMTUwLjE4OCA4Ni42MjUgMTI1LjcxOSIvPjxwb2x5Z29uIGZpbGw9IiNEODdDMzAiIHBvaW50cz0iMzkuMzc1IDEzOC45MzggNjUuMjUgMTM4LjM3NSA2MC43NSAxNzMuMjUiLz48cG9seWdvbiBmaWxsPSIjRUI4RjM1IiBwb2ludHM9IjEyLjkzOCAxODguNDM4IDYwLjc1IDE3My4yNSAzOS4zNzUgMTM4LjkzOCAuNTYzIDE0MS43NSIvPjxwb2x5Z29uIGZpbGw9IiNFODgyMUUiIHBvaW50cz0iODguODc1IDU4LjUgNjQuNjg4IDc4Ljc1IDQ2LjEyNSAxMDEuMjUgOTIuMjUgMTAyLjkzOCIvPjxwb2x5Z29uIGZpbGw9IiNERkNFQzMiIHBvaW50cz0iNjAuNzUgMTczLjI1IDkwLjU2MyAxNTIuNDM4IDg4LjMxMyAxNzAuNDM4IDg4LjMxMyAxODAuNTYzIDY4LjA2MyAxNzYuNjI1Ii8+PHBvbHlnb24gZmlsbD0iI0RGQ0VDMyIgcG9pbnRzPSIxMjEuNSAxNzMuMjUgMTUwLjc1IDE1Mi40MzggMTQ4LjUgMTcwLjQzOCAxNDguNSAxODAuNTYzIDEyOC4yNSAxNzYuNjI1IiB0cmFuc2Zvcm09Im1hdHJpeCgtMSAwIDAgMSAyNzIuMjUgMCkiLz48cG9seWdvbiBmaWxsPSIjMzkzOTM5IiBwb2ludHM9IjcwLjMxMyAxMTIuNSA2NC4xMjUgMTI1LjQzOCA4Ni4wNjMgMTE5LjgxMyIgdHJhbnNmb3JtPSJtYXRyaXgoLTEgMCAwIDEgMTUwLjE4OCAwKSIvPjxwb2x5Z29uIGZpbGw9IiNFODhGMzUiIHBvaW50cz0iMTIuMzc1IC41NjMgODguODc1IDU4LjUgNzUuOTM4IDI3Ii8+PHBhdGggZmlsbD0iIzhFNUEzMCIgZD0iTTEyLjM3NTAwMDIsMC41NjI1MDAwMDggTDIuMjUwMDAwMDMsMzEuNTAwMDAwNSBMNy44NzUwMDAxMiw2NS4yNTAwMDEgTDMuOTM3NTAwMDYsNjcuNTAwMDAxIEw5LjU2MjUwMDE0LDcyLjU2MjUgTDUuMDYyNTAwMDgsNzYuNTAwMDAxMSBMMTEuMjUsODIuMTI1MDAxMiBMNy4zMTI1MDAxMSw4NS41MDAwMDEzIEwxNi4zMTI1MDAyLDk2Ljc1MDAwMTQgTDU4LjUwMDAwMDksODMuODEyNTAxMiBDNzkuMTI1MDAxMiw2Ny4zMTI1MDA0IDg5LjI1MDAwMTMsNTguODc1MDAwMyA4OC44NzUwMDEzLDU4LjUwMDAwMDkgQzg4LjUwMDAwMTMsNTguMTI1MDAwOSA2My4wMDAwMDA5LDM4LjgxMjUwMDYgMTIuMzc1MDAwMiwwLjU2MjUwMDAwOCBaIi8+PGcgdHJhbnNmb3JtPSJtYXRyaXgoLTEgMCAwIDEgMjExLjUgMCkiPjxwb2x5Z29uIGZpbGw9IiNGODlEMzUiIHBvaW50cz0iMTYuMzEzIDk2LjE4OCAuNTYzIDE0MS43NSAzOS45MzggMTM5LjUgNjUuMjUgMTM5LjUgNjUuMjUgMTE5LjgxMyA2NC4xMjUgNzkuMzEzIDU4LjUgODMuODEzIi8+PHBvbHlnb24gZmlsbD0iI0Q4N0MzMCIgcG9pbnRzPSI0Ni4xMjUgMTAxLjI1IDkyLjI1IDEwMi4zNzUgODcuMTg4IDEyNiA2NS4yNSAxMjAuMzc1Ii8+PHBvbHlnb24gZmlsbD0iI0VBOEQzQSIgcG9pbnRzPSI0Ni4xMjUgMTAxLjgxMyA2NS4yNSAxMTkuODEzIDY1LjI1IDEzNy44MTMiLz48cG9seWdvbiBmaWxsPSIjRjg5RDM1IiBwb2ludHM9IjY1LjI1IDEyMC4zNzUgODcuNzUgMTI2IDk1LjA2MyAxNTAuMTg4IDkwIDE1MyA2NS4yNSAxMzguMzc1Ii8+PHBvbHlnb24gZmlsbD0iI0VCOEYzNSIgcG9pbnRzPSI2NS4yNSAxMzguMzc1IDYwLjc1IDE3My4yNSA5MCAxNTMiLz48cG9seWdvbiBmaWxsPSIjRUE4RTNBIiBwb2ludHM9IjkyLjI1IDEwMi4zNzUgOTUuMDYzIDE1MC4xODggODYuNjI1IDEyNS43MTkiLz48cG9seWdvbiBmaWxsPSIjRDg3QzMwIiBwb2ludHM9IjM5LjM3NSAxMzguOTM4IDY1LjI1IDEzOC4zNzUgNjAuNzUgMTczLjI1Ii8+PHBvbHlnb24gZmlsbD0iI0VCOEYzNSIgcG9pbnRzPSIxMi45MzggMTg4LjQzOCA2MC43NSAxNzMuMjUgMzkuMzc1IDEzOC45MzggLjU2MyAxNDEuNzUiLz48cG9seWdvbiBmaWxsPSIjRTg4MjFFIiBwb2ludHM9Ijg4Ljg3NSA1OC41IDY0LjY4OCA3OC43NSA0Ni4xMjUgMTAxLjI1IDkyLjI1IDEwMi45MzgiLz48cG9seWdvbiBmaWxsPSIjMzkzOTM5IiBwb2ludHM9IjcwLjMxMyAxMTIuNSA2NC4xMjUgMTI1LjQzOCA4Ni4wNjMgMTE5LjgxMyIgdHJhbnNmb3JtPSJtYXRyaXgoLTEgMCAwIDEgMTUwLjE4OCAwKSIvPjxwb2x5Z29uIGZpbGw9IiNFODhGMzUiIHBvaW50cz0iMTIuMzc1IC41NjMgODguODc1IDU4LjUgNzUuOTM4IDI3Ii8+PHBhdGggZmlsbD0iIzhFNUEzMCIgZD0iTTEyLjM3NTAwMDIsMC41NjI1MDAwMDggTDIuMjUwMDAwMDMsMzEuNTAwMDAwNSBMNy44NzUwMDAxMiw2NS4yNTAwMDEgTDMuOTM3NTAwMDYsNjcuNTAwMDAxIEw5LjU2MjUwMDE0LDcyLjU2MjUgTDUuMDYyNTAwMDgsNzYuNTAwMDAxMSBMMTEuMjUsODIuMTI1MDAxMiBMNy4zMTI1MDAxMSw4NS41MDAwMDEzIEwxNi4zMTI1MDAyLDk2Ljc1MDAwMTQgTDU4LjUwMDAwMDksODMuODEyNTAxMiBDNzkuMTI1MDAxMiw2Ny4zMTI1MDA0IDg5LjI1MDAwMTMsNTguODc1MDAwMyA4OC44NzUwMDEzLDU4LjUwMDAwMDkgQzg4LjUwMDAwMTMsNTguMTI1MDAwOSA2My4wMDAwMDA5LDM4LjgxMjUwMDYgMTIuMzc1MDAwMiwwLjU2MjUwMDAwOCBaIi8+PC9nPjwvZz48L3N2Zz4='
            ),
            O(this, 'windowKey', 'starknet_metamask'),
            O(this, 'provider', null),
            O(this, 'swo', null),
            O(this, 'lock'),
            O(this, 'version', 'v2.0.0'),
            (this.lock = new Mutex());
        }
        async loadWallet(e) {
          return await j(this, R, B).call(this, e), this;
        }
        async hasSupport(e) {
          return (
            (this.provider = await detectMetamaskSupport(e)),
            null !== this.provider
          );
        }
        async request(e) {
          return j(this, R, B)
            .call(this)
            .then((t) => t.request(e));
        }
        on(e, t) {
          j(this, R, B)
            .call(this)
            .then((r) => r.on(e, t));
        }
        off(e, t) {
          j(this, R, B)
            .call(this)
            .then((r) => r.off(e, t));
        }
      }
      (Q = new WeakSet()),
        (q = async function (e) {
          this.provider || (this.provider = await detectMetamaskSupport(e)),
            await init({
              name: 'MetaMaskStarknetSnapWallet',
              remotes: [
                {
                  name: 'MetaMaskStarknetSnapWallet',
                  alias: 'MetaMaskStarknetSnapWallet',
                  entry: `https://snaps.consensys.io/starknet/get-starknet/v1/remoteEntry.js?ts=${Date.now()}`,
                },
              ],
            });
          let t = await loadRemote('MetaMaskStarknetSnapWallet/index');
          if (!t) throw Error('Failed to load MetaMask Wallet');
          return new t.MetaMaskSnapWallet(this.provider, '*');
        }),
        (R = new WeakSet()),
        (B = async function (e = window) {
          return this.lock.runExclusive(
            async () => (
              this.swo ||
                ((this.swo = await j(this, Q, q).call(this, e)),
                j(this, Y, J).call(this)),
              this.swo
            )
          );
        }),
        (Y = new WeakSet()),
        (J = function () {
          this.swo &&
            ((this.version = this.swo.version),
            (this.name = this.swo.name),
            (this.id = this.swo.id),
            (this.icon = this.swo.icon));
        });
      let metaMaskVirtualWallet = new MetaMaskVirtualWallet(),
        wallets = [
          {
            id: 'argentX',
            name: 'Argent X',
            icon: 'data:image/svg+xml;base64,Cjxzdmcgd2lkdGg9IjQwIiBoZWlnaHQ9IjM2IiB2aWV3Qm94PSIwIDAgNDAgMzYiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0yNC43NTgyIC0zLjk3MzY0ZS0wN0gxNC42MjM4QzE0LjI4NTEgLTMuOTczNjRlLTA3IDE0LjAxMzggMC4yODExNzggMTQuMDA2NCAwLjYzMDY4M0MxMy44MDE3IDEwLjQ1NDkgOC44MjIzNCAxOS43NzkyIDAuMjUxODkzIDI2LjM4MzdDLTAuMDIwMjA0NiAyNi41OTMzIC0wLjA4MjE5NDYgMjYuOTg3MiAwLjExNjczNCAyNy4yNzA5TDYuMDQ2MjMgMzUuNzM0QzYuMjQ3OTYgMzYuMDIyIDYuNjQwOTkgMzYuMDg3IDYuOTE3NjYgMzUuODc1NEMxMi4yNzY1IDMxLjc3MjggMTYuNTg2OSAyNi44MjM2IDE5LjY5MSAyMS4zMzhDMjIuNzk1MSAyNi44MjM2IDI3LjEwNTcgMzEuNzcyOCAzMi40NjQ2IDM1Ljg3NTRDMzIuNzQxIDM2LjA4NyAzMy4xMzQxIDM2LjAyMiAzMy4zMzYxIDM1LjczNEwzOS4yNjU2IDI3LjI3MDlDMzkuNDY0MiAyNi45ODcyIDM5LjQwMjIgMjYuNTkzMyAzOS4xMzA0IDI2LjM4MzdDMzAuNTU5NyAxOS43NzkyIDI1LjU4MDQgMTAuNDU0OSAyNS4zNzU5IDAuNjMwNjgzQzI1LjM2ODUgMC4yODExNzggMjUuMDk2OSAtMy45NzM2NGUtMDcgMjQuNzU4MiAtMy45NzM2NGUtMDdaIiBmaWxsPSIjRkY4NzVCIi8+Cjwvc3ZnPgo=',
            downloads: {
              chrome:
                'https://chrome.google.com/webstore/detail/argent-x-starknet-wallet/dlcobpjiigpikoobohmabehhmhfoodbb',
              firefox:
                'https://addons.mozilla.org/en-US/firefox/addon/argent-x',
              edge: 'https://microsoftedge.microsoft.com/addons/detail/argent-x/ajcicjlkibolbeaaagejfhnofogocgcj',
            },
          },
          {
            id: 'braavos',
            name: 'Braavos',
            icon: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgICA8cGF0aAogICAgICAgIGQ9Ik02Mi43MDUgMTMuOTExNkM2Mi44MzU5IDE0LjEzMzMgNjIuNjYyMSAxNC40MDcgNjIuNDAzOSAxNC40MDdDNTcuMTgwNyAxNC40MDcgNTIuOTM0OCAxOC41NDI3IDUyLjgzNTEgMjMuNjgxN0M1MS4wNDY1IDIzLjM0NzcgNDkuMTkzMyAyMy4zMjI2IDQ3LjM2MjYgMjMuNjMxMUM0Ny4yMzYxIDE4LjUxNTYgNDMuMDAwOSAxNC40MDcgMzcuNzk0OCAxNC40MDdDMzcuNTM2NSAxNC40MDcgMzcuMzYyNSAxNC4xMzMxIDM3LjQ5MzUgMTMuOTExMkM0MC4wMjE3IDkuNjI4MDkgNDQuNzIwNCA2Ljc1IDUwLjA5OTEgNi43NUM1NS40NzgxIDYuNzUgNjAuMTc2OSA5LjYyODI2IDYyLjcwNSAxMy45MTE2WiIKICAgICAgICBmaWxsPSJ1cmwoI3BhaW50MF9saW5lYXJfMzcyXzQwMjU5KSIgLz4KICAgIDxwYXRoCiAgICAgICAgZD0iTTc4Ljc2MDYgNDUuODcxOEM4MC4yNzI1IDQ2LjMyOTcgODEuNzAyNSA0NS4wMDU1IDgxLjE3MTQgNDMuNTIyMkM3Ni40MTM3IDMwLjIzMzQgNjEuMzkxMSAyNC44MDM5IDUwLjAyNzcgMjQuODAzOUMzOC42NDQyIDI0LjgwMzkgMjMuMjg2OCAzMC40MDcgMTguODc1NCA0My41OTEyQzE4LjM4MjQgNDUuMDY0NSAxOS44MDgzIDQ2LjM0NDYgMjEuMjk3OCA0NS44ODgxTDQ4Ljg3MiAzNy40MzgxQzQ5LjUzMzEgMzcuMjM1NSA1MC4yMzk5IDM3LjIzNDQgNTAuOTAxNyAzNy40MzQ4TDc4Ljc2MDYgNDUuODcxOFoiCiAgICAgICAgZmlsbD0idXJsKCNwYWludDFfbGluZWFyXzM3Ml80MDI1OSkiIC8+CiAgICA8cGF0aAogICAgICAgIGQ9Ik0xOC44MTMyIDQ4LjE3MDdMNDguODkzNSAzOS4wNDcyQzQ5LjU1MDYgMzguODQ3OCA1MC4yNTI0IDM4Ljg0NzMgNTAuOTA5OCAzOS4wNDU2TDgxLjE3ODEgNDguMTc1MkM4My42OTEyIDQ4LjkzMzIgODUuNDExIDUxLjI0ODMgODUuNDExIDUzLjg3MzVWODEuMjIzM0M4NS4yOTQ0IDg3Ljg5OTEgNzkuMjk3NyA5My4yNSA3Mi42MjQ1IDkzLjI1SDYxLjU0MDZDNjAuNDQ0OSA5My4yNSA1OS41NTc3IDkyLjM2MzcgNTkuNTU3NyA5MS4yNjhWODEuNjc4OUM1OS41NTc3IDc3LjkwMzEgNjEuNzkyMSA3NC40ODU1IDY1LjI0OTggNzIuOTcyOUM2OS44ODQ5IDcwLjk0NTQgNzUuMzY4MSA2OC4yMDI4IDc2LjM5OTQgNjIuNjk5MkM3Ni43MzIzIDYwLjkyMjkgNzUuNTc0MSA1OS4yMDk0IDczLjgwMjQgNTguODU3M0M2OS4zMjI2IDU3Ljk2NjcgNjQuMzU2MiA1OC4zMTA3IDYwLjE1NjQgNjAuMTg5M0M1NS4zODg3IDYyLjMyMTkgNTQuMTQxNSA2NS44Njk0IDUzLjY3OTcgNzAuNjMzN0w1My4xMjAxIDc1Ljc2NjJDNTIuOTQ5MSA3Ny4zMzQ5IDUxLjQ3ODUgNzguNTM2NiA0OS45MDE0IDc4LjUzNjZDNDguMjY5OSA3OC41MzY2IDQ3LjA0NjUgNzcuMjk0IDQ2Ljg2OTYgNzUuNjcxMkw0Ni4zMjA0IDcwLjYzMzdDNDUuOTI0OSA2Ni41NTI5IDQ1LjIwNzkgNjIuNTg4NyA0MC45ODk1IDYwLjcwMThDMzYuMTc3NiA1OC41NDk0IDMxLjM0MTkgNTcuODM0NyAyNi4xOTc2IDU4Ljg1NzNDMjQuNDI2IDU5LjIwOTQgMjMuMjY3OCA2MC45MjI5IDIzLjYwMDcgNjIuNjk5MkMyNC42NDEgNjguMjUwNyAzMC4wODEyIDcwLjkzMDUgMzQuNzUwMyA3Mi45NzI5QzM4LjIwOCA3NC40ODU1IDQwLjQ0MjQgNzcuOTAzMSA0MC40NDI0IDgxLjY3ODlWOTEuMjY2M0M0MC40NDI0IDkyLjM2MiAzOS41NTU1IDkzLjI1IDM4LjQ1OTkgOTMuMjVIMjcuMzc1NkMyMC43MDI0IDkzLjI1IDE0LjcwNTcgODcuODk5MSAxNC41ODkxIDgxLjIyMzNWNTMuODY2M0MxNC41ODkxIDUxLjI0NDYgMTYuMzA0NSA0OC45MzE2IDE4LjgxMzIgNDguMTcwN1oiCiAgICAgICAgZmlsbD0idXJsKCNwYWludDJfbGluZWFyXzM3Ml80MDI1OSkiIC8+CiAgICA8ZGVmcz4KICAgICAgICA8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50MF9saW5lYXJfMzcyXzQwMjU5IiB4MT0iNDkuMzA1NyIgeTE9IjIuMDc5IiB4Mj0iODAuMzYyNyIgeTI9IjkzLjY1OTciCiAgICAgICAgICAgIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iI0Y1RDQ1RSIgLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjRkY5NjAwIiAvPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICAgICAgPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDFfbGluZWFyXzM3Ml80MDI1OSIgeDE9IjQ5LjMwNTciIHkxPSIyLjA3OSIgeDI9IjgwLjM2MjciIHkyPSI5My42NTk3IgogICAgICAgICAgICBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiNGNUQ0NUUiIC8+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI0ZGOTYwMCIgLz4KICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQyX2xpbmVhcl8zNzJfNDAyNTkiIHgxPSI0OS4zMDU3IiB5MT0iMi4wNzkiIHgyPSI4MC4zNjI3IiB5Mj0iOTMuNjU5NyIKICAgICAgICAgICAgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjRjVENDVFIiAvPgogICAgICAgICAgICA8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNGRjk2MDAiIC8+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgIDwvZGVmcz4KPC9zdmc+',
            downloads: {
              chrome:
                'https://chrome.google.com/webstore/detail/braavos-wallet/jnlgamecbpmbajjfhmmmlhejkemejdma',
              firefox:
                'https://addons.mozilla.org/en-US/firefox/addon/braavos-wallet',
              edge: 'https://microsoftedge.microsoft.com/addons/detail/braavos-wallet/hkkpjehhcnhgefhbdcgfkeegglpjchdc',
              ios: `https://link.braavos.app/dapp/${null == (K = null == ssrSafeWindow$1 ? void 0 : ssrSafeWindow$1.location) ? void 0 : K.host}`,
              android: `https://link.braavos.app/dapp/${null == (Z = null == ssrSafeWindow$1 ? void 0 : ssrSafeWindow$1.location) ? void 0 : Z.host}`,
            },
          },
          {
            id: metaMaskVirtualWallet.id,
            name: metaMaskVirtualWallet.name,
            icon: metaMaskVirtualWallet.icon,
            downloads: {
              chrome:
                'https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn',
              firefox:
                'https://addons.mozilla.org/en-US/firefox/addon/ether-metamask/',
              edge: 'https://microsoftedge.microsoft.com/addons/detail/metamask/ejbalbakoplchlghecdalmeeeajnimhm?hl=en-US',
            },
          },
          {
            id: 'okxwallet',
            name: 'OKX Wallet',
            icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJDSURBVHgB7Zq9jtpAEMfHlhEgQLiioXEkoAGECwoKxMcTRHmC5E3IoyRPkPAEkI7unJYmTgEFTYwA8a3NTKScLnCHN6c9r1e3P2llWQy7M/s1Gv1twCP0ej37dDq9x+Zut1t3t9vZjDEHIiSRSPg4ZpDL5fxkMvn1cDh8m0wmfugfO53OoFQq/crn8wxfY9EymQyrVCqMfHvScZx1p9ls3pFxXBy/bKlUipGPrVbLuQqAfsCliq3zl0H84zwtjQrOw4Mt1W63P5LvBm2d+Xz+YzqdgkqUy+WgWCy+Mc/nc282m4FqLBYL+3g8fjDxenq72WxANZbLJeA13zDX67UDioL5ybXwafMYu64Ltn3bdDweQ5R97fd7GyhBQMipx4POeEDHIu2LfDdBIGGz+hJ9CQ1ABjoA2egAZPM6AgiCAEQhsi/C4jHyPA/6/f5NG3Ks2+3CYDC4aTccDrn6ojG54MnEvG00GoVmWLIRNZ7wTCwDHYBsdACy0QHIhiuRETxlICWpMMhGZHmqS8qH6JLyGegAZKMDkI0uKf8X4SWlaZo+Pp1bRrwlJU8ZKLIvUjKh0WiQ3sRUbNVq9c5Ebew7KEo2m/1p4jJ4qAmDaqDQBzj5XyiAT4VCQezJigAU+IDU+z8vJFnGWeC+bKQV/5VZ71FV6L7PA3gg3tXrdQ+DgLhC+75Wq3no69P3MC0NFQpx2lL04Ql9gHK1bRDjsSBIvScBnDTk1WrlGIZBorIDEYJj+rhdgnQ67VmWRe0zlplXl81vcyEt0rSoYDUAAAAASUVORK5CYII=',
            downloads: {
              chrome:
                'https://chrome.google.com/webstore/detail/mcohilncbfahbmgdjkbpemcciiolgcge',
              firefox:
                'https://addons.mozilla.org/en-US/firefox/addon/okexwallet',
              edge: 'https://microsoftedge.microsoft.com/addons/detail/%E6%AC%A7%E6%98%93-web3-%E9%92%B1%E5%8C%85/pbpjkcldjiffchgbbndmhojiacbgflha',
              safari: 'https://apps.apple.com/us/app/okx-wallet/id6463797825',
            },
          },
          {
            id: 'keplr',
            name: 'Keplr',
            icon: 'data:image/png;base64,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',
            downloads: {
              chrome:
                'https://chrome.google.com/webstore/detail/keplr/dmkamcknogkgcdfhhbddcghachkejeap',
              firefox: 'https://addons.mozilla.org/en-US/firefox/addon/keplr',
              edge: 'https://microsoftedge.microsoft.com/addons/detail/keplr/ocodgmmffbkkeecmadcijjhkmeohinei',
            },
          },
          {
            id: 'fordefi',
            name: 'Fordefi',
            icon: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzEzNDk0XzY2MjU0KSI+CjxwYXRoIGQ9Ik0xMC44NzY5IDE1LjYzNzhIMS41VjE4LjM5OUMxLjUgMTkuODAxMyAyLjYzNDQ3IDIwLjkzOCA0LjAzMzkyIDIwLjkzOEg4LjI0OTkyTDEwLjg3NjkgMTUuNjM3OFoiIGZpbGw9IiM3OTk0RkYiLz4KPHBhdGggZD0iTTEuNSA5Ljc3NTUxSDE5LjA1MTZMMTcuMDEzOSAxMy44NzExSDEuNVY5Ljc3NTUxWiIgZmlsbD0iIzQ4NkRGRiIvPgo8cGF0aCBkPSJNNy42NTk5NiAzSDEuNTI0NDFWOC4wMDcwNEgyMi40NjEyVjNIMTYuMzI1NlY2LjczOTQ0SDE1LjA2MDZWM0g4LjkyNTAyVjYuNzM5NDRINy42NTk5NlYzWiIgZmlsbD0iIzVDRDFGQSIvPgo8L2c+CjxkZWZzPgo8Y2xpcFBhdGggaWQ9ImNsaXAwXzEzNDk0XzY2MjU0Ij4KPHJlY3Qgd2lkdGg9IjIxIiBoZWlnaHQ9IjE4IiBmaWxsPSJ3aGl0ZSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMS41IDMpIi8+CjwvY2xpcFBhdGg+CjwvZGVmcz4KPC9zdmc+Cg==',
            downloads: {
              chrome:
                'https://chrome.google.com/webstore/detail/fordefi/hcmehenccjdmfbojapcbcofkgdpbnlle',
            },
          },
        ];
      class LocalStorageWrapper {
        constructor(e) {
          x(this, $),
            x(this, k),
            x(this, C, !1),
            x(this, T, void 0),
            x(this, P, void 0),
            O(this, 'value'),
            H(this, P, e),
            j(this, k, F).call(this);
        }
        set(e) {
          return (
            !!(v(this, C) || j(this, k, F).call(this)) &&
            (this.delete(),
            (this.value = e),
            e &&
              (H(this, T, `${v(this, P)}-${generateUID()}`),
              localStorage.setItem(v(this, T), e)),
            !0)
          );
        }
        get() {
          return j(this, $, ee).call(this), this.value;
        }
        delete() {
          return (
            !!(v(this, C) || j(this, k, F).call(this)) &&
            ((this.value = null),
            v(this, T) && localStorage.removeItem(v(this, T)),
            !0)
          );
        }
      }
      (C = new WeakMap()),
        (T = new WeakMap()),
        (P = new WeakMap()),
        ($ = new WeakSet()),
        (ee = function () {
          this.value && this.set(this.value);
        }),
        (k = new WeakSet()),
        (F = function () {
          try {
            !v(this, C) &&
              'u' > typeof window &&
              (H(
                this,
                T,
                Object.keys(localStorage).find((e) => e.startsWith(v(this, P)))
              ),
              H(this, C, !0),
              v(this, T) && this.set(localStorage.getItem(v(this, T))));
          } catch (e) {
            console.warn(e);
          }
          return v(this, C);
        });
      let Permission = { ACCOUNTS: 'accounts' };
      function filterBy(e, t) {
        var r, n;
        if (null != (r = null == t ? void 0 : t.include) && r.length) {
          let r = new Set(t.include);
          return e.filter((e) => r.has(e.id));
        }
        if (null != (n = null == t ? void 0 : t.exclude) && n.length) {
          let r = new Set(t.exclude);
          return e.filter((e) => !r.has(e.id));
        }
        return e;
      }
      let filterByAuthorized = async (e) => {
          let t = await Promise.all(
            e.map(async (e) => {
              try {
                return (
                  await e.request({ type: 'wallet_getPermissions' })
                ).includes(Permission.ACCOUNTS);
              } catch {
                return !1;
              }
            })
          );
          return e.filter((e, r) => t[r]);
        },
        virtualWalletKeys = ensureKeysArray({
          id: !0,
          name: !0,
          icon: !0,
          windowKey: !0,
          loadWallet: !0,
          hasSupport: !0,
        }),
        fullWalletKeys = ensureKeysArray({
          id: !0,
          name: !0,
          version: !0,
          icon: !0,
          request: !0,
          on: !0,
          off: !0,
        });
      function createWalletGuard(e) {
        return function (t) {
          return null !== t && 'object' == typeof t && e.every((e) => e in t);
        };
      }
      let isFullWallet = createWalletGuard(fullWalletKeys),
        isVirtualWallet = createWalletGuard(virtualWalletKeys);
      function isWalletObject(e) {
        try {
          return isFullWallet(e) || isVirtualWallet(e);
        } catch {}
        return !1;
      }
      function scanObjectForWallets(e, t) {
        return Object.values(
          Object.getOwnPropertyNames(e).reduce((r, n) => {
            if (n.startsWith('starknet')) {
              let o = e[n];
              t(o) && !r[o.id] && (r[o.id] = o);
            }
            return r;
          }, {})
        );
      }
      let sortBy = (e, t) => {
          if (!(t && Array.isArray(t))) return shuffle(e);
          {
            e.sort((e, r) => t.indexOf(e.id) - t.indexOf(r.id));
            let r = e.length - t.length;
            return [...e.slice(r), ...shuffle(e.slice(0, r))];
          }
        },
        virtualWallets = [metaMaskVirtualWallet];
      function initiateVirtualWallets(e) {
        virtualWallets.forEach(async (t) => {
          t.windowKey in e || ((await t.hasSupport(e)) && (e[t.windowKey] = t));
        });
      }
      let virtualWalletsMap = {};
      async function resolveVirtualWallet(e, t) {
        let r = virtualWalletsMap[t.id];
        return (
          r || ((r = await t.loadWallet(e)), (virtualWalletsMap[t.id] = r)), r
        );
      }
      let defaultOptions = {
        windowObject: null != ssrSafeWindow$1 ? ssrSafeWindow$1 : {},
        isWalletObject,
        storageFactoryImplementation: (e) => new LocalStorageWrapper(e),
      };
      function getStarknet(e = {}) {
        let {
            storageFactoryImplementation: t,
            windowObject: r,
            isWalletObject: n,
          } = { ...defaultOptions, ...e },
          o = t('gsw-last');
        return (
          initiateVirtualWallets(r),
          {
            getAvailableWallets: async (e = {}) => {
              let t = scanObjectForWallets(r, n);
              return pipe$1(
                (t) => filterBy(t, e),
                (t) => sortBy(t, e.sort)
              )(t);
            },
            getAuthorizedWallets: async (e = {}) => {
              let t = scanObjectForWallets(r, n);
              return pipe$1(
                (e) => filterByAuthorized(e),
                (t) => filterBy(t, e),
                (t) => sortBy(t, e.sort)
              )(t);
            },
            getDiscoveryWallets: async (e = {}) =>
              pipe$1(
                (t) => filterBy(t, e),
                (t) => sortBy(t, e.sort)
              )(wallets),
            getLastConnectedWallet: async () => {
              let e = o.get(),
                t = scanObjectForWallets(r, n).find((t) => t.id === e),
                [i] = await filterByAuthorized(t ? [t] : []);
              return i || (o.delete(), null);
            },
            discoverVirtualWallets: async (e = []) => {
              let t = new Set(e),
                n =
                  t.size > 0
                    ? virtualWallets.filter((e) => t.has(e.name) || t.has(e.id))
                    : virtualWallets;
              await Promise.all(
                n.map(async (e) => {
                  (await e.hasSupport(r)) && (r[e.windowKey] = e);
                })
              );
            },
            enable: async (e, t) => {
              let n;
              if (isVirtualWallet(e)) n = await resolveVirtualWallet(r, e);
              else if (isFullWallet(e)) n = e;
              else throw Error('Invalid wallet object');
              await n.request({
                type: 'wallet_requestAccounts',
                params: { silent_mode: null == t ? void 0 : t.silent_mode },
              });
              let i = await n.request({ type: 'wallet_getPermissions' });
              if (!(null != i && i.includes(Permission.ACCOUNTS)))
                throw Error('Failed to connect to wallet');
              return o.set(n.id), n;
            },
            disconnect: async ({ clearLastWallet: e } = {}) => {
              e && o.delete();
            },
          }
        );
      }
      let main = getStarknet(),
        BROWSER_ALIASES_MAP = {
          'Amazon Silk': 'amazon_silk',
          'Android Browser': 'android',
          Bada: 'bada',
          BlackBerry: 'blackberry',
          Chrome: 'chrome',
          Chromium: 'chromium',
          Electron: 'electron',
          Epiphany: 'epiphany',
          Firefox: 'firefox',
          Focus: 'focus',
          Generic: 'generic',
          'Google Search': 'google_search',
          Googlebot: 'googlebot',
          'Internet Explorer': 'ie',
          'K-Meleon': 'k_meleon',
          Maxthon: 'maxthon',
          'Microsoft Edge': 'edge',
          'MZ Browser': 'mz',
          'NAVER Whale Browser': 'naver',
          Opera: 'opera',
          'Opera Coast': 'opera_coast',
          PhantomJS: 'phantomjs',
          Puffin: 'puffin',
          QupZilla: 'qupzilla',
          QQ: 'qq',
          QQLite: 'qqlite',
          Safari: 'safari',
          Sailfish: 'sailfish',
          'Samsung Internet for Android': 'samsung_internet',
          SeaMonkey: 'seamonkey',
          Sleipnir: 'sleipnir',
          Swing: 'swing',
          Tizen: 'tizen',
          'UC Browser': 'uc',
          Vivaldi: 'vivaldi',
          'WebOS Browser': 'webos',
          WeChat: 'wechat',
          'Yandex Browser': 'yandex',
          Roku: 'roku',
        },
        BROWSER_MAP = {
          amazon_silk: 'Amazon Silk',
          android: 'Android Browser',
          bada: 'Bada',
          blackberry: 'BlackBerry',
          chrome: 'Chrome',
          chromium: 'Chromium',
          electron: 'Electron',
          epiphany: 'Epiphany',
          firefox: 'Firefox',
          focus: 'Focus',
          generic: 'Generic',
          googlebot: 'Googlebot',
          google_search: 'Google Search',
          ie: 'Internet Explorer',
          k_meleon: 'K-Meleon',
          maxthon: 'Maxthon',
          edge: 'Microsoft Edge',
          mz: 'MZ Browser',
          naver: 'NAVER Whale Browser',
          opera: 'Opera',
          opera_coast: 'Opera Coast',
          phantomjs: 'PhantomJS',
          puffin: 'Puffin',
          qupzilla: 'QupZilla',
          qq: 'QQ Browser',
          qqlite: 'QQ Browser Lite',
          safari: 'Safari',
          sailfish: 'Sailfish',
          samsung_internet: 'Samsung Internet for Android',
          seamonkey: 'SeaMonkey',
          sleipnir: 'Sleipnir',
          swing: 'Swing',
          tizen: 'Tizen',
          uc: 'UC Browser',
          vivaldi: 'Vivaldi',
          webos: 'WebOS Browser',
          wechat: 'WeChat',
          yandex: 'Yandex Browser',
        },
        PLATFORMS_MAP = {
          tablet: 'tablet',
          mobile: 'mobile',
          desktop: 'desktop',
          tv: 'tv',
        },
        OS_MAP = {
          WindowsPhone: 'Windows Phone',
          Windows: 'Windows',
          MacOS: 'macOS',
          iOS: 'iOS',
          Android: 'Android',
          WebOS: 'WebOS',
          BlackBerry: 'BlackBerry',
          Bada: 'Bada',
          Tizen: 'Tizen',
          Linux: 'Linux',
          ChromeOS: 'Chrome OS',
          PlayStation4: 'PlayStation 4',
          Roku: 'Roku',
        },
        ENGINE_MAP = {
          EdgeHTML: 'EdgeHTML',
          Blink: 'Blink',
          Trident: 'Trident',
          Presto: 'Presto',
          Gecko: 'Gecko',
          WebKit: 'WebKit',
        };
      class Utils {
        static getFirstMatch(e, t) {
          let r = t.match(e);
          return (r && r.length > 0 && r[1]) || '';
        }
        static getSecondMatch(e, t) {
          let r = t.match(e);
          return (r && r.length > 1 && r[2]) || '';
        }
        static matchAndReturnConst(e, t, r) {
          if (e.test(t)) return r;
        }
        static getWindowsVersionName(e) {
          switch (e) {
            case 'NT':
              return 'NT';
            case 'XP':
            case 'NT 5.1':
              return 'XP';
            case 'NT 5.0':
              return '2000';
            case 'NT 5.2':
              return '2003';
            case 'NT 6.0':
              return 'Vista';
            case 'NT 6.1':
              return '7';
            case 'NT 6.2':
              return '8';
            case 'NT 6.3':
              return '8.1';
            case 'NT 10.0':
              return '10';
            default:
              return;
          }
        }
        static getMacOSVersionName(e) {
          let t = e
            .split('.')
            .splice(0, 2)
            .map((e) => parseInt(e, 10) || 0);
          if ((t.push(0), 10 === t[0]))
            switch (t[1]) {
              case 5:
                return 'Leopard';
              case 6:
                return 'Snow Leopard';
              case 7:
                return 'Lion';
              case 8:
                return 'Mountain Lion';
              case 9:
                return 'Mavericks';
              case 10:
                return 'Yosemite';
              case 11:
                return 'El Capitan';
              case 12:
                return 'Sierra';
              case 13:
                return 'High Sierra';
              case 14:
                return 'Mojave';
              case 15:
                return 'Catalina';
              default:
                return;
            }
        }
        static getAndroidVersionName(e) {
          let t = e
            .split('.')
            .splice(0, 2)
            .map((e) => parseInt(e, 10) || 0);
          if ((t.push(0), !(1 === t[0] && t[1] < 5))) {
            if (1 === t[0] && t[1] < 6) return 'Cupcake';
            if (1 === t[0] && t[1] >= 6) return 'Donut';
            if (2 === t[0] && t[1] < 2) return 'Eclair';
            if (2 === t[0] && 2 === t[1]) return 'Froyo';
            if (2 === t[0] && t[1] > 2) return 'Gingerbread';
            if (3 === t[0]) return 'Honeycomb';
            if (4 === t[0] && t[1] < 1) return 'Ice Cream Sandwich';
            if (4 === t[0] && t[1] < 4) return 'Jelly Bean';
            if (4 === t[0] && t[1] >= 4) return 'KitKat';
            if (5 === t[0]) return 'Lollipop';
            if (6 === t[0]) return 'Marshmallow';
            if (7 === t[0]) return 'Nougat';
            if (8 === t[0]) return 'Oreo';
            if (9 === t[0]) return 'Pie';
          }
        }
        static getVersionPrecision(e) {
          return e.split('.').length;
        }
        static compareVersions(e, t, r = !1) {
          let n = Utils.getVersionPrecision(e),
            o = Utils.getVersionPrecision(t),
            i = Math.max(n, o),
            s = 0,
            a = Utils.map([e, t], (e) => {
              let t = i - Utils.getVersionPrecision(e),
                r = e + Array(t + 1).join('.0');
              return Utils.map(
                r.split('.'),
                (e) => Array(20 - e.length).join('0') + e
              ).reverse();
            });
          for (r && (s = i - Math.min(n, o)), i -= 1; i >= s; ) {
            if (a[0][i] > a[1][i]) return 1;
            if (a[0][i] === a[1][i]) {
              if (i === s) return 0;
              i -= 1;
            } else if (a[0][i] < a[1][i]) return -1;
          }
        }
        static map(e, t) {
          let r;
          let n = [];
          if (Array.prototype.map) return Array.prototype.map.call(e, t);
          for (r = 0; r < e.length; r += 1) n.push(t(e[r]));
          return n;
        }
        static find(e, t) {
          let r, n;
          if (Array.prototype.find) return Array.prototype.find.call(e, t);
          for (r = 0, n = e.length; r < n; r += 1) {
            let n = e[r];
            if (t(n, r)) return n;
          }
        }
        static assign(e, ...t) {
          let r, n;
          let o = e;
          if (Object.assign) return Object.assign(e, ...t);
          for (r = 0, n = t.length; r < n; r += 1) {
            let e = t[r];
            'object' == typeof e &&
              null !== e &&
              Object.keys(e).forEach((t) => {
                o[t] = e[t];
              });
          }
          return e;
        }
        static getBrowserAlias(e) {
          return BROWSER_ALIASES_MAP[e];
        }
        static getBrowserTypeByAlias(e) {
          return BROWSER_MAP[e] || '';
        }
      }
      let commonVersionIdentifier = /version\/(\d+(\.?_?\d+)+)/i,
        browsersList = [
          {
            test: [/googlebot/i],
            describe(e) {
              let t = { name: 'Googlebot' },
                r =
                  Utils.getFirstMatch(/googlebot\/(\d+(\.\d+))/i, e) ||
                  Utils.getFirstMatch(commonVersionIdentifier, e);
              return r && (t.version = r), t;
            },
          },
          {
            test: [/opera/i],
            describe(e) {
              let t = { name: 'Opera' },
                r =
                  Utils.getFirstMatch(commonVersionIdentifier, e) ||
                  Utils.getFirstMatch(/(?:opera)[\s/](\d+(\.?_?\d+)+)/i, e);
              return r && (t.version = r), t;
            },
          },
          {
            test: [/opr\/|opios/i],
            describe(e) {
              let t = { name: 'Opera' },
                r =
                  Utils.getFirstMatch(/(?:opr|opios)[\s/](\S+)/i, e) ||
                  Utils.getFirstMatch(commonVersionIdentifier, e);
              return r && (t.version = r), t;
            },
          },
          {
            test: [/SamsungBrowser/i],
            describe(e) {
              let t = { name: 'Samsung Internet for Android' },
                r =
                  Utils.getFirstMatch(commonVersionIdentifier, e) ||
                  Utils.getFirstMatch(
                    /(?:SamsungBrowser)[\s/](\d+(\.?_?\d+)+)/i,
                    e
                  );
              return r && (t.version = r), t;
            },
          },
          {
            test: [/Whale/i],
            describe(e) {
              let t = { name: 'NAVER Whale Browser' },
                r =
                  Utils.getFirstMatch(commonVersionIdentifier, e) ||
                  Utils.getFirstMatch(/(?:whale)[\s/](\d+(?:\.\d+)+)/i, e);
              return r && (t.version = r), t;
            },
          },
          {
            test: [/MZBrowser/i],
            describe(e) {
              let t = { name: 'MZ Browser' },
                r =
                  Utils.getFirstMatch(
                    /(?:MZBrowser)[\s/](\d+(?:\.\d+)+)/i,
                    e
                  ) || Utils.getFirstMatch(commonVersionIdentifier, e);
              return r && (t.version = r), t;
            },
          },
          {
            test: [/focus/i],
            describe(e) {
              let t = { name: 'Focus' },
                r =
                  Utils.getFirstMatch(/(?:focus)[\s/](\d+(?:\.\d+)+)/i, e) ||
                  Utils.getFirstMatch(commonVersionIdentifier, e);
              return r && (t.version = r), t;
            },
          },
          {
            test: [/swing/i],
            describe(e) {
              let t = { name: 'Swing' },
                r =
                  Utils.getFirstMatch(/(?:swing)[\s/](\d+(?:\.\d+)+)/i, e) ||
                  Utils.getFirstMatch(commonVersionIdentifier, e);
              return r && (t.version = r), t;
            },
          },
          {
            test: [/coast/i],
            describe(e) {
              let t = { name: 'Opera Coast' },
                r =
                  Utils.getFirstMatch(commonVersionIdentifier, e) ||
                  Utils.getFirstMatch(/(?:coast)[\s/](\d+(\.?_?\d+)+)/i, e);
              return r && (t.version = r), t;
            },
          },
          {
            test: [/opt\/\d+(?:.?_?\d+)+/i],
            describe(e) {
              let t = { name: 'Opera Touch' },
                r =
                  Utils.getFirstMatch(/(?:opt)[\s/](\d+(\.?_?\d+)+)/i, e) ||
                  Utils.getFirstMatch(commonVersionIdentifier, e);
              return r && (t.version = r), t;
            },
          },
          {
            test: [/yabrowser/i],
            describe(e) {
              let t = { name: 'Yandex Browser' },
                r =
                  Utils.getFirstMatch(
                    /(?:yabrowser)[\s/](\d+(\.?_?\d+)+)/i,
                    e
                  ) || Utils.getFirstMatch(commonVersionIdentifier, e);
              return r && (t.version = r), t;
            },
          },
          {
            test: [/ucbrowser/i],
            describe(e) {
              let t = { name: 'UC Browser' },
                r =
                  Utils.getFirstMatch(commonVersionIdentifier, e) ||
                  Utils.getFirstMatch(/(?:ucbrowser)[\s/](\d+(\.?_?\d+)+)/i, e);
              return r && (t.version = r), t;
            },
          },
          {
            test: [/Maxthon|mxios/i],
            describe(e) {
              let t = { name: 'Maxthon' },
                r =
                  Utils.getFirstMatch(commonVersionIdentifier, e) ||
                  Utils.getFirstMatch(
                    /(?:Maxthon|mxios)[\s/](\d+(\.?_?\d+)+)/i,
                    e
                  );
              return r && (t.version = r), t;
            },
          },
          {
            test: [/epiphany/i],
            describe(e) {
              let t = { name: 'Epiphany' },
                r =
                  Utils.getFirstMatch(commonVersionIdentifier, e) ||
                  Utils.getFirstMatch(/(?:epiphany)[\s/](\d+(\.?_?\d+)+)/i, e);
              return r && (t.version = r), t;
            },
          },
          {
            test: [/puffin/i],
            describe(e) {
              let t = { name: 'Puffin' },
                r =
                  Utils.getFirstMatch(commonVersionIdentifier, e) ||
                  Utils.getFirstMatch(/(?:puffin)[\s/](\d+(\.?_?\d+)+)/i, e);
              return r && (t.version = r), t;
            },
          },
          {
            test: [/sleipnir/i],
            describe(e) {
              let t = { name: 'Sleipnir' },
                r =
                  Utils.getFirstMatch(commonVersionIdentifier, e) ||
                  Utils.getFirstMatch(/(?:sleipnir)[\s/](\d+(\.?_?\d+)+)/i, e);
              return r && (t.version = r), t;
            },
          },
          {
            test: [/k-meleon/i],
            describe(e) {
              let t = { name: 'K-Meleon' },
                r =
                  Utils.getFirstMatch(commonVersionIdentifier, e) ||
                  Utils.getFirstMatch(/(?:k-meleon)[\s/](\d+(\.?_?\d+)+)/i, e);
              return r && (t.version = r), t;
            },
          },
          {
            test: [/micromessenger/i],
            describe(e) {
              let t = { name: 'WeChat' },
                r =
                  Utils.getFirstMatch(
                    /(?:micromessenger)[\s/](\d+(\.?_?\d+)+)/i,
                    e
                  ) || Utils.getFirstMatch(commonVersionIdentifier, e);
              return r && (t.version = r), t;
            },
          },
          {
            test: [/qqbrowser/i],
            describe(e) {
              let t = {
                  name: /qqbrowserlite/i.test(e)
                    ? 'QQ Browser Lite'
                    : 'QQ Browser',
                },
                r =
                  Utils.getFirstMatch(
                    /(?:qqbrowserlite|qqbrowser)[/](\d+(\.?_?\d+)+)/i,
                    e
                  ) || Utils.getFirstMatch(commonVersionIdentifier, e);
              return r && (t.version = r), t;
            },
          },
          {
            test: [/msie|trident/i],
            describe(e) {
              let t = { name: 'Internet Explorer' },
                r = Utils.getFirstMatch(/(?:msie |rv:)(\d+(\.?_?\d+)+)/i, e);
              return r && (t.version = r), t;
            },
          },
          {
            test: [/\sedg\//i],
            describe(e) {
              let t = { name: 'Microsoft Edge' },
                r = Utils.getFirstMatch(/\sedg\/(\d+(\.?_?\d+)+)/i, e);
              return r && (t.version = r), t;
            },
          },
          {
            test: [/edg([ea]|ios)/i],
            describe(e) {
              let t = { name: 'Microsoft Edge' },
                r = Utils.getSecondMatch(/edg([ea]|ios)\/(\d+(\.?_?\d+)+)/i, e);
              return r && (t.version = r), t;
            },
          },
          {
            test: [/vivaldi/i],
            describe(e) {
              let t = { name: 'Vivaldi' },
                r = Utils.getFirstMatch(/vivaldi\/(\d+(\.?_?\d+)+)/i, e);
              return r && (t.version = r), t;
            },
          },
          {
            test: [/seamonkey/i],
            describe(e) {
              let t = { name: 'SeaMonkey' },
                r = Utils.getFirstMatch(/seamonkey\/(\d+(\.?_?\d+)+)/i, e);
              return r && (t.version = r), t;
            },
          },
          {
            test: [/sailfish/i],
            describe(e) {
              let t = { name: 'Sailfish' },
                r = Utils.getFirstMatch(
                  /sailfish\s?browser\/(\d+(\.\d+)?)/i,
                  e
                );
              return r && (t.version = r), t;
            },
          },
          {
            test: [/silk/i],
            describe(e) {
              let t = { name: 'Amazon Silk' },
                r = Utils.getFirstMatch(/silk\/(\d+(\.?_?\d+)+)/i, e);
              return r && (t.version = r), t;
            },
          },
          {
            test: [/phantom/i],
            describe(e) {
              let t = { name: 'PhantomJS' },
                r = Utils.getFirstMatch(/phantomjs\/(\d+(\.?_?\d+)+)/i, e);
              return r && (t.version = r), t;
            },
          },
          {
            test: [/slimerjs/i],
            describe(e) {
              let t = { name: 'SlimerJS' },
                r = Utils.getFirstMatch(/slimerjs\/(\d+(\.?_?\d+)+)/i, e);
              return r && (t.version = r), t;
            },
          },
          {
            test: [/blackberry|\bbb\d+/i, /rim\stablet/i],
            describe(e) {
              let t = { name: 'BlackBerry' },
                r =
                  Utils.getFirstMatch(commonVersionIdentifier, e) ||
                  Utils.getFirstMatch(/blackberry[\d]+\/(\d+(\.?_?\d+)+)/i, e);
              return r && (t.version = r), t;
            },
          },
          {
            test: [/(web|hpw)[o0]s/i],
            describe(e) {
              let t = { name: 'WebOS Browser' },
                r =
                  Utils.getFirstMatch(commonVersionIdentifier, e) ||
                  Utils.getFirstMatch(
                    /w(?:eb)?[o0]sbrowser\/(\d+(\.?_?\d+)+)/i,
                    e
                  );
              return r && (t.version = r), t;
            },
          },
          {
            test: [/bada/i],
            describe(e) {
              let t = { name: 'Bada' },
                r = Utils.getFirstMatch(/dolfin\/(\d+(\.?_?\d+)+)/i, e);
              return r && (t.version = r), t;
            },
          },
          {
            test: [/tizen/i],
            describe(e) {
              let t = { name: 'Tizen' },
                r =
                  Utils.getFirstMatch(
                    /(?:tizen\s?)?browser\/(\d+(\.?_?\d+)+)/i,
                    e
                  ) || Utils.getFirstMatch(commonVersionIdentifier, e);
              return r && (t.version = r), t;
            },
          },
          {
            test: [/qupzilla/i],
            describe(e) {
              let t = { name: 'QupZilla' },
                r =
                  Utils.getFirstMatch(
                    /(?:qupzilla)[\s/](\d+(\.?_?\d+)+)/i,
                    e
                  ) || Utils.getFirstMatch(commonVersionIdentifier, e);
              return r && (t.version = r), t;
            },
          },
          {
            test: [/firefox|iceweasel|fxios/i],
            describe(e) {
              let t = { name: 'Firefox' },
                r = Utils.getFirstMatch(
                  /(?:firefox|iceweasel|fxios)[\s/](\d+(\.?_?\d+)+)/i,
                  e
                );
              return r && (t.version = r), t;
            },
          },
          {
            test: [/electron/i],
            describe(e) {
              let t = { name: 'Electron' },
                r = Utils.getFirstMatch(/(?:electron)\/(\d+(\.?_?\d+)+)/i, e);
              return r && (t.version = r), t;
            },
          },
          {
            test: [/MiuiBrowser/i],
            describe(e) {
              let t = { name: 'Miui' },
                r = Utils.getFirstMatch(
                  /(?:MiuiBrowser)[\s/](\d+(\.?_?\d+)+)/i,
                  e
                );
              return r && (t.version = r), t;
            },
          },
          {
            test: [/chromium/i],
            describe(e) {
              let t = { name: 'Chromium' },
                r =
                  Utils.getFirstMatch(
                    /(?:chromium)[\s/](\d+(\.?_?\d+)+)/i,
                    e
                  ) || Utils.getFirstMatch(commonVersionIdentifier, e);
              return r && (t.version = r), t;
            },
          },
          {
            test: [/chrome|crios|crmo/i],
            describe(e) {
              let t = { name: 'Chrome' },
                r = Utils.getFirstMatch(
                  /(?:chrome|crios|crmo)\/(\d+(\.?_?\d+)+)/i,
                  e
                );
              return r && (t.version = r), t;
            },
          },
          {
            test: [/GSA/i],
            describe(e) {
              let t = { name: 'Google Search' },
                r = Utils.getFirstMatch(/(?:GSA)\/(\d+(\.?_?\d+)+)/i, e);
              return r && (t.version = r), t;
            },
          },
          {
            test(e) {
              let t = !e.test(/like android/i),
                r = e.test(/android/i);
              return t && r;
            },
            describe(e) {
              let t = { name: 'Android Browser' },
                r = Utils.getFirstMatch(commonVersionIdentifier, e);
              return r && (t.version = r), t;
            },
          },
          {
            test: [/playstation 4/i],
            describe(e) {
              let t = { name: 'PlayStation 4' },
                r = Utils.getFirstMatch(commonVersionIdentifier, e);
              return r && (t.version = r), t;
            },
          },
          {
            test: [/safari|applewebkit/i],
            describe(e) {
              let t = { name: 'Safari' },
                r = Utils.getFirstMatch(commonVersionIdentifier, e);
              return r && (t.version = r), t;
            },
          },
          {
            test: [/.*/i],
            describe(e) {
              let t = /^(.*)\/(.*) /,
                r = /^(.*)\/(.*)[ \t]\((.*)/,
                n = -1 !== e.search('\\(') ? r : t;
              return {
                name: Utils.getFirstMatch(n, e),
                version: Utils.getSecondMatch(n, e),
              };
            },
          },
        ],
        osParsersList = [
          {
            test: [/Roku\/DVP/],
            describe(e) {
              let t = Utils.getFirstMatch(/Roku\/DVP-(\d+\.\d+)/i, e);
              return { name: OS_MAP.Roku, version: t };
            },
          },
          {
            test: [/windows phone/i],
            describe(e) {
              let t = Utils.getFirstMatch(
                /windows phone (?:os)?\s?(\d+(\.\d+)*)/i,
                e
              );
              return { name: OS_MAP.WindowsPhone, version: t };
            },
          },
          {
            test: [/windows /i],
            describe(e) {
              let t = Utils.getFirstMatch(/Windows ((NT|XP)( \d\d?.\d)?)/i, e),
                r = Utils.getWindowsVersionName(t);
              return { name: OS_MAP.Windows, version: t, versionName: r };
            },
          },
          {
            test: [/Macintosh(.*?) FxiOS(.*?)\//],
            describe(e) {
              let t = { name: OS_MAP.iOS },
                r = Utils.getSecondMatch(/(Version\/)(\d[\d.]+)/, e);
              return r && (t.version = r), t;
            },
          },
          {
            test: [/macintosh/i],
            describe(e) {
              let t = Utils.getFirstMatch(
                  /mac os x (\d+(\.?_?\d+)+)/i,
                  e
                ).replace(/[_\s]/g, '.'),
                r = Utils.getMacOSVersionName(t),
                n = { name: OS_MAP.MacOS, version: t };
              return r && (n.versionName = r), n;
            },
          },
          {
            test: [/(ipod|iphone|ipad)/i],
            describe(e) {
              let t = Utils.getFirstMatch(
                /os (\d+([_\s]\d+)*) like mac os x/i,
                e
              ).replace(/[_\s]/g, '.');
              return { name: OS_MAP.iOS, version: t };
            },
          },
          {
            test(e) {
              let t = !e.test(/like android/i),
                r = e.test(/android/i);
              return t && r;
            },
            describe(e) {
              let t = Utils.getFirstMatch(/android[\s/-](\d+(\.\d+)*)/i, e),
                r = Utils.getAndroidVersionName(t),
                n = { name: OS_MAP.Android, version: t };
              return r && (n.versionName = r), n;
            },
          },
          {
            test: [/(web|hpw)[o0]s/i],
            describe(e) {
              let t = Utils.getFirstMatch(
                  /(?:web|hpw)[o0]s\/(\d+(\.\d+)*)/i,
                  e
                ),
                r = { name: OS_MAP.WebOS };
              return t && t.length && (r.version = t), r;
            },
          },
          {
            test: [/blackberry|\bbb\d+/i, /rim\stablet/i],
            describe(e) {
              let t =
                Utils.getFirstMatch(/rim\stablet\sos\s(\d+(\.\d+)*)/i, e) ||
                Utils.getFirstMatch(/blackberry\d+\/(\d+([_\s]\d+)*)/i, e) ||
                Utils.getFirstMatch(/\bbb(\d+)/i, e);
              return { name: OS_MAP.BlackBerry, version: t };
            },
          },
          {
            test: [/bada/i],
            describe(e) {
              let t = Utils.getFirstMatch(/bada\/(\d+(\.\d+)*)/i, e);
              return { name: OS_MAP.Bada, version: t };
            },
          },
          {
            test: [/tizen/i],
            describe(e) {
              let t = Utils.getFirstMatch(/tizen[/\s](\d+(\.\d+)*)/i, e);
              return { name: OS_MAP.Tizen, version: t };
            },
          },
          { test: [/linux/i], describe: () => ({ name: OS_MAP.Linux }) },
          { test: [/CrOS/], describe: () => ({ name: OS_MAP.ChromeOS }) },
          {
            test: [/PlayStation 4/],
            describe(e) {
              let t = Utils.getFirstMatch(
                /PlayStation 4[/\s](\d+(\.\d+)*)/i,
                e
              );
              return { name: OS_MAP.PlayStation4, version: t };
            },
          },
        ],
        platformParsersList = [
          {
            test: [/googlebot/i],
            describe: () => ({ type: 'bot', vendor: 'Google' }),
          },
          {
            test: [/huawei/i],
            describe(e) {
              let t = Utils.getFirstMatch(/(can-l01)/i, e) && 'Nova',
                r = { type: PLATFORMS_MAP.mobile, vendor: 'Huawei' };
              return t && (r.model = t), r;
            },
          },
          {
            test: [/nexus\s*(?:7|8|9|10).*/i],
            describe: () => ({ type: PLATFORMS_MAP.tablet, vendor: 'Nexus' }),
          },
          {
            test: [/ipad/i],
            describe: () => ({
              type: PLATFORMS_MAP.tablet,
              vendor: 'Apple',
              model: 'iPad',
            }),
          },
          {
            test: [/Macintosh(.*?) FxiOS(.*?)\//],
            describe: () => ({
              type: PLATFORMS_MAP.tablet,
              vendor: 'Apple',
              model: 'iPad',
            }),
          },
          {
            test: [/kftt build/i],
            describe: () => ({
              type: PLATFORMS_MAP.tablet,
              vendor: 'Amazon',
              model: 'Kindle Fire HD 7',
            }),
          },
          {
            test: [/silk/i],
            describe: () => ({ type: PLATFORMS_MAP.tablet, vendor: 'Amazon' }),
          },
          {
            test: [/tablet(?! pc)/i],
            describe: () => ({ type: PLATFORMS_MAP.tablet }),
          },
          {
            test(e) {
              let t = e.test(/ipod|iphone/i),
                r = e.test(/like (ipod|iphone)/i);
              return t && !r;
            },
            describe(e) {
              let t = Utils.getFirstMatch(/(ipod|iphone)/i, e);
              return { type: PLATFORMS_MAP.mobile, vendor: 'Apple', model: t };
            },
          },
          {
            test: [/nexus\s*[0-6].*/i, /galaxy nexus/i],
            describe: () => ({ type: PLATFORMS_MAP.mobile, vendor: 'Nexus' }),
          },
          {
            test: [/[^-]mobi/i],
            describe: () => ({ type: PLATFORMS_MAP.mobile }),
          },
          {
            test: (e) => 'blackberry' === e.getBrowserName(!0),
            describe: () => ({
              type: PLATFORMS_MAP.mobile,
              vendor: 'BlackBerry',
            }),
          },
          {
            test: (e) => 'bada' === e.getBrowserName(!0),
            describe: () => ({ type: PLATFORMS_MAP.mobile }),
          },
          {
            test: (e) => 'windows phone' === e.getBrowserName(),
            describe: () => ({
              type: PLATFORMS_MAP.mobile,
              vendor: 'Microsoft',
            }),
          },
          {
            test(e) {
              let t = Number(String(e.getOSVersion()).split('.')[0]);
              return 'android' === e.getOSName(!0) && t >= 3;
            },
            describe: () => ({ type: PLATFORMS_MAP.tablet }),
          },
          {
            test: (e) => 'android' === e.getOSName(!0),
            describe: () => ({ type: PLATFORMS_MAP.mobile }),
          },
          {
            test: (e) => 'macos' === e.getOSName(!0),
            describe: () => ({ type: PLATFORMS_MAP.desktop, vendor: 'Apple' }),
          },
          {
            test: (e) => 'windows' === e.getOSName(!0),
            describe: () => ({ type: PLATFORMS_MAP.desktop }),
          },
          {
            test: (e) => 'linux' === e.getOSName(!0),
            describe: () => ({ type: PLATFORMS_MAP.desktop }),
          },
          {
            test: (e) => 'playstation 4' === e.getOSName(!0),
            describe: () => ({ type: PLATFORMS_MAP.tv }),
          },
          {
            test: (e) => 'roku' === e.getOSName(!0),
            describe: () => ({ type: PLATFORMS_MAP.tv }),
          },
        ],
        enginesParsersList = [
          {
            test: (e) => 'microsoft edge' === e.getBrowserName(!0),
            describe(e) {
              if (/\sedg\//i.test(e)) return { name: ENGINE_MAP.Blink };
              let t = Utils.getFirstMatch(/edge\/(\d+(\.?_?\d+)+)/i, e);
              return { name: ENGINE_MAP.EdgeHTML, version: t };
            },
          },
          {
            test: [/trident/i],
            describe(e) {
              let t = { name: ENGINE_MAP.Trident },
                r = Utils.getFirstMatch(/trident\/(\d+(\.?_?\d+)+)/i, e);
              return r && (t.version = r), t;
            },
          },
          {
            test: (e) => e.test(/presto/i),
            describe(e) {
              let t = { name: ENGINE_MAP.Presto },
                r = Utils.getFirstMatch(/presto\/(\d+(\.?_?\d+)+)/i, e);
              return r && (t.version = r), t;
            },
          },
          {
            test(e) {
              let t = e.test(/gecko/i),
                r = e.test(/like gecko/i);
              return t && !r;
            },
            describe(e) {
              let t = { name: ENGINE_MAP.Gecko },
                r = Utils.getFirstMatch(/gecko\/(\d+(\.?_?\d+)+)/i, e);
              return r && (t.version = r), t;
            },
          },
          {
            test: [/(apple)?webkit\/537\.36/i],
            describe: () => ({ name: ENGINE_MAP.Blink }),
          },
          {
            test: [/(apple)?webkit/i],
            describe(e) {
              let t = { name: ENGINE_MAP.WebKit },
                r = Utils.getFirstMatch(/webkit\/(\d+(\.?_?\d+)+)/i, e);
              return r && (t.version = r), t;
            },
          },
        ];
      class Parser {
        constructor(e, t = !1) {
          if (null == e || '' === e)
            throw Error("UserAgent parameter can't be empty");
          (this._ua = e), (this.parsedResult = {}), !0 !== t && this.parse();
        }
        getUA() {
          return this._ua;
        }
        test(e) {
          return e.test(this._ua);
        }
        parseBrowser() {
          this.parsedResult.browser = {};
          let e = Utils.find(browsersList, (e) => {
            if ('function' == typeof e.test) return e.test(this);
            if (e.test instanceof Array)
              return e.test.some((e) => this.test(e));
            throw Error("Browser's test function is not valid");
          });
          return (
            e && (this.parsedResult.browser = e.describe(this.getUA())),
            this.parsedResult.browser
          );
        }
        getBrowser() {
          return this.parsedResult.browser
            ? this.parsedResult.browser
            : this.parseBrowser();
        }
        getBrowserName(e) {
          return e
            ? String(this.getBrowser().name).toLowerCase() || ''
            : this.getBrowser().name || '';
        }
        getBrowserVersion() {
          return this.getBrowser().version;
        }
        getOS() {
          return this.parsedResult.os ? this.parsedResult.os : this.parseOS();
        }
        parseOS() {
          this.parsedResult.os = {};
          let e = Utils.find(osParsersList, (e) => {
            if ('function' == typeof e.test) return e.test(this);
            if (e.test instanceof Array)
              return e.test.some((e) => this.test(e));
            throw Error("Browser's test function is not valid");
          });
          return (
            e && (this.parsedResult.os = e.describe(this.getUA())),
            this.parsedResult.os
          );
        }
        getOSName(e) {
          let { name: t } = this.getOS();
          return e ? String(t).toLowerCase() || '' : t || '';
        }
        getOSVersion() {
          return this.getOS().version;
        }
        getPlatform() {
          return this.parsedResult.platform
            ? this.parsedResult.platform
            : this.parsePlatform();
        }
        getPlatformType(e = !1) {
          let { type: t } = this.getPlatform();
          return e ? String(t).toLowerCase() || '' : t || '';
        }
        parsePlatform() {
          this.parsedResult.platform = {};
          let e = Utils.find(platformParsersList, (e) => {
            if ('function' == typeof e.test) return e.test(this);
            if (e.test instanceof Array)
              return e.test.some((e) => this.test(e));
            throw Error("Browser's test function is not valid");
          });
          return (
            e && (this.parsedResult.platform = e.describe(this.getUA())),
            this.parsedResult.platform
          );
        }
        getEngine() {
          return this.parsedResult.engine
            ? this.parsedResult.engine
            : this.parseEngine();
        }
        getEngineName(e) {
          return e
            ? String(this.getEngine().name).toLowerCase() || ''
            : this.getEngine().name || '';
        }
        parseEngine() {
          this.parsedResult.engine = {};
          let e = Utils.find(enginesParsersList, (e) => {
            if ('function' == typeof e.test) return e.test(this);
            if (e.test instanceof Array)
              return e.test.some((e) => this.test(e));
            throw Error("Browser's test function is not valid");
          });
          return (
            e && (this.parsedResult.engine = e.describe(this.getUA())),
            this.parsedResult.engine
          );
        }
        parse() {
          return (
            this.parseBrowser(),
            this.parseOS(),
            this.parsePlatform(),
            this.parseEngine(),
            this
          );
        }
        getResult() {
          return Utils.assign({}, this.parsedResult);
        }
        satisfies(e) {
          let t = {},
            r = 0,
            n = {},
            o = 0;
          if (
            (Object.keys(e).forEach((i) => {
              let s = e[i];
              'string' == typeof s
                ? ((n[i] = s), (o += 1))
                : 'object' == typeof s && ((t[i] = s), (r += 1));
            }),
            r > 0)
          ) {
            let e = Object.keys(t),
              r = Utils.find(e, (e) => this.isOS(e));
            if (r) {
              let e = this.satisfies(t[r]);
              if (void 0 !== e) return e;
            }
            let n = Utils.find(e, (e) => this.isPlatform(e));
            if (n) {
              let e = this.satisfies(t[n]);
              if (void 0 !== e) return e;
            }
          }
          if (o > 0) {
            let e = Object.keys(n),
              t = Utils.find(e, (e) => this.isBrowser(e, !0));
            if (void 0 !== t) return this.compareVersion(n[t]);
          }
        }
        isBrowser(e, t = !1) {
          let r = this.getBrowserName().toLowerCase(),
            n = e.toLowerCase(),
            o = Utils.getBrowserTypeByAlias(n);
          return t && o && (n = o.toLowerCase()), n === r;
        }
        compareVersion(e) {
          let t = [0],
            r = e,
            n = !1,
            o = this.getBrowserVersion();
          if ('string' == typeof o)
            return (
              '>' === e[0] || '<' === e[0]
                ? ((r = e.substr(1)),
                  '=' === e[1] ? ((n = !0), (r = e.substr(2))) : (t = []),
                  '>' === e[0] ? t.push(1) : t.push(-1))
                : '=' === e[0]
                  ? (r = e.substr(1))
                  : '~' === e[0] && ((n = !0), (r = e.substr(1))),
              t.indexOf(Utils.compareVersions(o, r, n)) > -1
            );
        }
        isOS(e) {
          return this.getOSName(!0) === String(e).toLowerCase();
        }
        isPlatform(e) {
          return this.getPlatformType(!0) === String(e).toLowerCase();
        }
        isEngine(e) {
          return this.getEngineName(!0) === String(e).toLowerCase();
        }
        is(e, t = !1) {
          return this.isBrowser(e, t) || this.isOS(e) || this.isPlatform(e);
        }
        some(e = []) {
          return e.some((e) => this.is(e));
        }
      }
      class Bowser {
        static getParser(e, t = !1) {
          if ('string' != typeof e) throw Error('UserAgent should be a string');
          return new Parser(e, t);
        }
        static parse(e) {
          return new Parser(e).getResult();
        }
        static get BROWSER_MAP() {
          return BROWSER_MAP;
        }
        static get ENGINE_MAP() {
          return ENGINE_MAP;
        }
        static get OS_MAP() {
          return OS_MAP;
        }
        static get PLATFORMS_MAP() {
          return PLATFORMS_MAP;
        }
      }
      let ssrSafeWindow = 'u' > typeof window ? window : null;
      function getBrowserStoreVersionFromBrowser() {
        var e;
        switch (
          null ==
          (e = Bowser.getParser(
            null == ssrSafeWindow ? void 0 : ssrSafeWindow.navigator.userAgent
          ).getBrowserName())
            ? void 0
            : e.toLowerCase()
        ) {
          case 'firefox':
            return 'firefox';
          case 'microsoft edge':
            return 'edge';
          case 'android browser':
          case 'chrome':
          case 'chromium':
          case 'electron':
          case 'opera':
          case 'vivaldi':
            return 'chrome';
          case 'safari':
            return 'safari';
          default:
            return null;
        }
      }
      function getOperatingSystemStoreVersionFromBrowser() {
        var e, t, r;
        let n =
          null !=
          (r =
            null ==
            (t =
              null ==
              (e = Bowser.getParser(
                null == ssrSafeWindow
                  ? void 0
                  : ssrSafeWindow.navigator.userAgent
              ).getOS())
                ? void 0
                : e.name)
              ? void 0
              : t.toLowerCase())
            ? r
            : null;
        switch (n) {
          case 'ios':
          case 'android':
            return n;
          default:
            return null;
        }
      }
      let enableWithVersion = async (e, t) =>
          e ? main.enable(e, t).catch(() => null) : null,
        connect = async ({
          modalMode: e = 'canAsk',
          storeVersion: t = getBrowserStoreVersionFromBrowser(),
          osVersion: r = getOperatingSystemStoreVersionFromBrowser(),
          modalTheme: n,
          ...o
        } = {}) => {
          var i, s;
          let a = await main.getAuthorizedWallets({ ...o }),
            l = await main.getLastConnectedWallet();
          if ('neverAsk' === e)
            return enableWithVersion(
              null != (i = a.find((e) => e.id === (null == l ? void 0 : l.id)))
                ? i
                : a[0],
              { silent_mode: !0 }
            );
          let c = await main.getAvailableWallets(o);
          if ('canAsk' === e && l) {
            let e =
              null != (s = a.find((e) => e.id === (null == l ? void 0 : l.id)))
                ? s
                : 1 === c.length
                  ? c[0]
                  : void 0;
            if (e) return enableWithVersion(e);
          }
          return show({
            lastWallet: l,
            authorizedWallets: a,
            installedWallets: c,
            discoveryWallets: (await main.getDiscoveryWallets(o)).reduce(
              (e, n) => {
                let o = n.downloads[r] || n.downloads[t];
                if (o) {
                  let t = Object.keys(n.downloads).find(
                      (e) => n.downloads[e] === o
                    ),
                    r =
                      'android' === t || 'ios' === t
                        ? `${n.name} Mobile`
                        : `Install ${n.name}`;
                  e.push({ ...n, name: r, download: o });
                }
                return e;
              },
              []
            ),
            enable: enableWithVersion,
            modalOptions: { theme: n },
          });
        };
      function disconnect(e = {}) {
        return main.disconnect(e);
      }
    },
  },
]);
