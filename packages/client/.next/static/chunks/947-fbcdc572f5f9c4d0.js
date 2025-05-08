(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [947],
  {
    5327: (e, t) => {
      'use strict';
      (t.byteLength = function (e) {
        var t = l(e),
          o = t[0],
          a = t[1];
        return ((o + a) * 3) / 4 - a;
      }),
        (t.toByteArray = function (e) {
          var t,
            o,
            r = l(e),
            i = r[0],
            s = r[1],
            u = new n(((i + s) * 3) / 4 - s),
            c = 0,
            p = s > 0 ? i - 4 : i;
          for (o = 0; o < p; o += 4)
            (t =
              (a[e.charCodeAt(o)] << 18) |
              (a[e.charCodeAt(o + 1)] << 12) |
              (a[e.charCodeAt(o + 2)] << 6) |
              a[e.charCodeAt(o + 3)]),
              (u[c++] = (t >> 16) & 255),
              (u[c++] = (t >> 8) & 255),
              (u[c++] = 255 & t);
          return (
            2 === s &&
              ((t = (a[e.charCodeAt(o)] << 2) | (a[e.charCodeAt(o + 1)] >> 4)),
              (u[c++] = 255 & t)),
            1 === s &&
              ((t =
                (a[e.charCodeAt(o)] << 10) |
                (a[e.charCodeAt(o + 1)] << 4) |
                (a[e.charCodeAt(o + 2)] >> 2)),
              (u[c++] = (t >> 8) & 255),
              (u[c++] = 255 & t)),
            u
          );
        }),
        (t.fromByteArray = function (e) {
          for (
            var t, a = e.length, n = a % 3, r = [], i = 0, s = a - n;
            i < s;
            i += 16383
          )
            r.push(
              (function (e, t, a) {
                for (var n, r = [], i = t; i < a; i += 3)
                  r.push(
                    o[
                      ((n =
                        ((e[i] << 16) & 0xff0000) +
                        ((e[i + 1] << 8) & 65280) +
                        (255 & e[i + 2])) >>
                        18) &
                        63
                    ] +
                      o[(n >> 12) & 63] +
                      o[(n >> 6) & 63] +
                      o[63 & n]
                  );
                return r.join('');
              })(e, i, i + 16383 > s ? s : i + 16383)
            );
          return (
            1 === n
              ? r.push(o[(t = e[a - 1]) >> 2] + o[(t << 4) & 63] + '==')
              : 2 === n &&
                r.push(
                  o[(t = (e[a - 2] << 8) + e[a - 1]) >> 10] +
                    o[(t >> 4) & 63] +
                    o[(t << 2) & 63] +
                    '='
                ),
            r.join('')
          );
        });
      for (
        var o = [],
          a = [],
          n = 'undefined' != typeof Uint8Array ? Uint8Array : Array,
          r =
            'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',
          i = 0,
          s = r.length;
        i < s;
        ++i
      )
        (o[i] = r[i]), (a[r.charCodeAt(i)] = i);
      function l(e) {
        var t = e.length;
        if (t % 4 > 0)
          throw Error('Invalid string. Length must be a multiple of 4');
        var o = e.indexOf('=');
        -1 === o && (o = t);
        var a = o === t ? 0 : 4 - (o % 4);
        return [o, a];
      }
      (a['-'.charCodeAt(0)] = 62), (a['_'.charCodeAt(0)] = 63);
    },
    6567: (e, t, o) => {
      'use strict';
      let a = o(5327),
        n = o(3850),
        r =
          'function' == typeof Symbol && 'function' == typeof Symbol.for
            ? Symbol.for('nodejs.util.inspect.custom')
            : null;
      function i(e) {
        if (e > 0x7fffffff)
          throw RangeError(
            'The value "' + e + '" is invalid for option "size"'
          );
        let t = new Uint8Array(e);
        return Object.setPrototypeOf(t, s.prototype), t;
      }
      function s(e, t, o) {
        if ('number' == typeof e) {
          if ('string' == typeof t)
            throw TypeError(
              'The "string" argument must be of type string. Received type number'
            );
          return c(e);
        }
        return l(e, t, o);
      }
      function l(e, t, o) {
        if ('string' == typeof e)
          return (function (e, t) {
            if (
              (('string' != typeof t || '' === t) && (t = 'utf8'),
              !s.isEncoding(t))
            )
              throw TypeError('Unknown encoding: ' + t);
            let o = 0 | f(e, t),
              a = i(o),
              n = a.write(e, t);
            return n !== o && (a = a.slice(0, n)), a;
          })(e, t);
        if (ArrayBuffer.isView(e))
          return (function (e) {
            if (D(e, Uint8Array)) {
              let t = new Uint8Array(e);
              return m(t.buffer, t.byteOffset, t.byteLength);
            }
            return p(e);
          })(e);
        if (null == e)
          throw TypeError(
            'The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type ' +
              typeof e
          );
        if (
          D(e, ArrayBuffer) ||
          (e && D(e.buffer, ArrayBuffer)) ||
          ('undefined' != typeof SharedArrayBuffer &&
            (D(e, SharedArrayBuffer) || (e && D(e.buffer, SharedArrayBuffer))))
        )
          return m(e, t, o);
        if ('number' == typeof e)
          throw TypeError(
            'The "value" argument must not be of type number. Received type number'
          );
        let a = e.valueOf && e.valueOf();
        if (null != a && a !== e) return s.from(a, t, o);
        let n = (function (e) {
          var t;
          if (s.isBuffer(e)) {
            let t = 0 | d(e.length),
              o = i(t);
            return 0 === o.length || e.copy(o, 0, 0, t), o;
          }
          return void 0 !== e.length
            ? 'number' != typeof e.length || (t = e.length) != t
              ? i(0)
              : p(e)
            : 'Buffer' === e.type && Array.isArray(e.data)
              ? p(e.data)
              : void 0;
        })(e);
        if (n) return n;
        if (
          'undefined' != typeof Symbol &&
          null != Symbol.toPrimitive &&
          'function' == typeof e[Symbol.toPrimitive]
        )
          return s.from(e[Symbol.toPrimitive]('string'), t, o);
        throw TypeError(
          'The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type ' +
            typeof e
        );
      }
      function u(e) {
        if ('number' != typeof e)
          throw TypeError('"size" argument must be of type number');
        if (e < 0)
          throw RangeError(
            'The value "' + e + '" is invalid for option "size"'
          );
      }
      function c(e) {
        return u(e), i(e < 0 ? 0 : 0 | d(e));
      }
      function p(e) {
        let t = e.length < 0 ? 0 : 0 | d(e.length),
          o = i(t);
        for (let a = 0; a < t; a += 1) o[a] = 255 & e[a];
        return o;
      }
      function m(e, t, o) {
        let a;
        if (t < 0 || e.byteLength < t)
          throw RangeError('"offset" is outside of buffer bounds');
        if (e.byteLength < t + (o || 0))
          throw RangeError('"length" is outside of buffer bounds');
        return (
          Object.setPrototypeOf(
            (a =
              void 0 === t && void 0 === o
                ? new Uint8Array(e)
                : void 0 === o
                  ? new Uint8Array(e, t)
                  : new Uint8Array(e, t, o)),
            s.prototype
          ),
          a
        );
      }
      function d(e) {
        if (e >= 0x7fffffff)
          throw RangeError(
            'Attempt to allocate Buffer larger than maximum size: 0x7fffffff bytes'
          );
        return 0 | e;
      }
      function f(e, t) {
        if (s.isBuffer(e)) return e.length;
        if (ArrayBuffer.isView(e) || D(e, ArrayBuffer)) return e.byteLength;
        if ('string' != typeof e)
          throw TypeError(
            'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' +
              typeof e
          );
        let o = e.length,
          a = arguments.length > 2 && !0 === arguments[2];
        if (!a && 0 === o) return 0;
        let n = !1;
        for (;;)
          switch (t) {
            case 'ascii':
            case 'latin1':
            case 'binary':
              return o;
            case 'utf8':
            case 'utf-8':
              return T(e).length;
            case 'ucs2':
            case 'ucs-2':
            case 'utf16le':
            case 'utf-16le':
              return 2 * o;
            case 'hex':
              return o >>> 1;
            case 'base64':
              return L(e).length;
            default:
              if (n) return a ? -1 : T(e).length;
              (t = ('' + t).toLowerCase()), (n = !0);
          }
      }
      function h(e, t, o) {
        let n = !1;
        if (
          ((void 0 === t || t < 0) && (t = 0),
          t > this.length ||
            ((void 0 === o || o > this.length) && (o = this.length),
            o <= 0 || (o >>>= 0) <= (t >>>= 0)))
        )
          return '';
        for (e || (e = 'utf8'); ; )
          switch (e) {
            case 'hex':
              return (function (e, t, o) {
                let a = e.length;
                (!t || t < 0) && (t = 0), (!o || o < 0 || o > a) && (o = a);
                let n = '';
                for (let a = t; a < o; ++a) n += U[e[a]];
                return n;
              })(this, t, o);
            case 'utf8':
            case 'utf-8':
              return b(this, t, o);
            case 'ascii':
              return (function (e, t, o) {
                let a = '';
                o = Math.min(e.length, o);
                for (let n = t; n < o; ++n)
                  a += String.fromCharCode(127 & e[n]);
                return a;
              })(this, t, o);
            case 'latin1':
            case 'binary':
              return (function (e, t, o) {
                let a = '';
                o = Math.min(e.length, o);
                for (let n = t; n < o; ++n) a += String.fromCharCode(e[n]);
                return a;
              })(this, t, o);
            case 'base64':
              var r, i;
              return (
                (r = t),
                (i = o),
                0 === r && i === this.length
                  ? a.fromByteArray(this)
                  : a.fromByteArray(this.slice(r, i))
              );
            case 'ucs2':
            case 'ucs-2':
            case 'utf16le':
            case 'utf-16le':
              return (function (e, t, o) {
                let a = e.slice(t, o),
                  n = '';
                for (let e = 0; e < a.length - 1; e += 2)
                  n += String.fromCharCode(a[e] + 256 * a[e + 1]);
                return n;
              })(this, t, o);
            default:
              if (n) throw TypeError('Unknown encoding: ' + e);
              (e = (e + '').toLowerCase()), (n = !0);
          }
      }
      function g(e, t, o) {
        let a = e[t];
        (e[t] = e[o]), (e[o] = a);
      }
      function y(e, t, o, a, n) {
        var r;
        if (0 === e.length) return -1;
        if (
          ('string' == typeof o
            ? ((a = o), (o = 0))
            : o > 0x7fffffff
              ? (o = 0x7fffffff)
              : o < -0x80000000 && (o = -0x80000000),
          (r = o = +o) != r && (o = n ? 0 : e.length - 1),
          o < 0 && (o = e.length + o),
          o >= e.length)
        ) {
          if (n) return -1;
          o = e.length - 1;
        } else if (o < 0) {
          if (!n) return -1;
          o = 0;
        }
        if (('string' == typeof t && (t = s.from(t, a)), s.isBuffer(t)))
          return 0 === t.length ? -1 : k(e, t, o, a, n);
        if ('number' == typeof t)
          return ((t &= 255), 'function' == typeof Uint8Array.prototype.indexOf)
            ? n
              ? Uint8Array.prototype.indexOf.call(e, t, o)
              : Uint8Array.prototype.lastIndexOf.call(e, t, o)
            : k(e, [t], o, a, n);
        throw TypeError('val must be string, number or Buffer');
      }
      function k(e, t, o, a, n) {
        let r,
          i = 1,
          s = e.length,
          l = t.length;
        if (
          void 0 !== a &&
          ('ucs2' === (a = String(a).toLowerCase()) ||
            'ucs-2' === a ||
            'utf16le' === a ||
            'utf-16le' === a)
        ) {
          if (e.length < 2 || t.length < 2) return -1;
          (i = 2), (s /= 2), (l /= 2), (o /= 2);
        }
        function u(e, t) {
          return 1 === i ? e[t] : e.readUInt16BE(t * i);
        }
        if (n) {
          let a = -1;
          for (r = o; r < s; r++)
            if (u(e, r) === u(t, -1 === a ? 0 : r - a)) {
              if ((-1 === a && (a = r), r - a + 1 === l)) return a * i;
            } else -1 !== a && (r -= r - a), (a = -1);
        } else
          for (o + l > s && (o = s - l), r = o; r >= 0; r--) {
            let o = !0;
            for (let a = 0; a < l; a++)
              if (u(e, r + a) !== u(t, a)) {
                o = !1;
                break;
              }
            if (o) return r;
          }
        return -1;
      }
      function b(e, t, o) {
        o = Math.min(e.length, o);
        let a = [],
          n = t;
        for (; n < o; ) {
          let t = e[n],
            r = null,
            i = t > 239 ? 4 : t > 223 ? 3 : t > 191 ? 2 : 1;
          if (n + i <= o) {
            let o, a, s, l;
            switch (i) {
              case 1:
                t < 128 && (r = t);
                break;
              case 2:
                (192 & (o = e[n + 1])) == 128 &&
                  (l = ((31 & t) << 6) | (63 & o)) > 127 &&
                  (r = l);
                break;
              case 3:
                (o = e[n + 1]),
                  (a = e[n + 2]),
                  (192 & o) == 128 &&
                    (192 & a) == 128 &&
                    (l = ((15 & t) << 12) | ((63 & o) << 6) | (63 & a)) >
                      2047 &&
                    (l < 55296 || l > 57343) &&
                    (r = l);
                break;
              case 4:
                (o = e[n + 1]),
                  (a = e[n + 2]),
                  (s = e[n + 3]),
                  (192 & o) == 128 &&
                    (192 & a) == 128 &&
                    (192 & s) == 128 &&
                    (l =
                      ((15 & t) << 18) |
                      ((63 & o) << 12) |
                      ((63 & a) << 6) |
                      (63 & s)) > 65535 &&
                    l < 1114112 &&
                    (r = l);
            }
          }
          null === r
            ? ((r = 65533), (i = 1))
            : r > 65535 &&
              ((r -= 65536),
              a.push(((r >>> 10) & 1023) | 55296),
              (r = 56320 | (1023 & r))),
            a.push(r),
            (n += i);
        }
        return (function (e) {
          let t = e.length;
          if (t <= 4096) return String.fromCharCode.apply(String, e);
          let o = '',
            a = 0;
          for (; a < t; )
            o += String.fromCharCode.apply(String, e.slice(a, (a += 4096)));
          return o;
        })(a);
      }
      function w(e, t, o) {
        if (e % 1 != 0 || e < 0) throw RangeError('offset is not uint');
        if (e + t > o)
          throw RangeError('Trying to access beyond buffer length');
      }
      function j(e, t, o, a, n, r) {
        if (!s.isBuffer(e))
          throw TypeError('"buffer" argument must be a Buffer instance');
        if (t > n || t < r)
          throw RangeError('"value" argument is out of bounds');
        if (o + a > e.length) throw RangeError('Index out of range');
      }
      function v(e, t, o, a, n) {
        I(t, a, n, e, o, 7);
        let r = Number(t & BigInt(0xffffffff));
        (e[o++] = r),
          (r >>= 8),
          (e[o++] = r),
          (r >>= 8),
          (e[o++] = r),
          (r >>= 8),
          (e[o++] = r);
        let i = Number((t >> BigInt(32)) & BigInt(0xffffffff));
        return (
          (e[o++] = i),
          (i >>= 8),
          (e[o++] = i),
          (i >>= 8),
          (e[o++] = i),
          (i >>= 8),
          (e[o++] = i),
          o
        );
      }
      function z(e, t, o, a, n) {
        I(t, a, n, e, o, 7);
        let r = Number(t & BigInt(0xffffffff));
        (e[o + 7] = r),
          (r >>= 8),
          (e[o + 6] = r),
          (r >>= 8),
          (e[o + 5] = r),
          (r >>= 8),
          (e[o + 4] = r);
        let i = Number((t >> BigInt(32)) & BigInt(0xffffffff));
        return (
          (e[o + 3] = i),
          (i >>= 8),
          (e[o + 2] = i),
          (i >>= 8),
          (e[o + 1] = i),
          (i >>= 8),
          (e[o] = i),
          o + 8
        );
      }
      function x(e, t, o, a, n, r) {
        if (o + a > e.length || o < 0) throw RangeError('Index out of range');
      }
      function E(e, t, o, a, r) {
        return (
          (t = +t),
          (o >>>= 0),
          r || x(e, t, o, 4, 34028234663852886e22, -34028234663852886e22),
          n.write(e, t, o, a, 23, 4),
          o + 4
        );
      }
      function A(e, t, o, a, r) {
        return (
          (t = +t),
          (o >>>= 0),
          r || x(e, t, o, 8, 17976931348623157e292, -17976931348623157e292),
          n.write(e, t, o, a, 52, 8),
          o + 8
        );
      }
      (t.hp = s),
        (t.IS = 50),
        (s.TYPED_ARRAY_SUPPORT = (function () {
          try {
            let e = new Uint8Array(1),
              t = {
                foo: function () {
                  return 42;
                },
              };
            return (
              Object.setPrototypeOf(t, Uint8Array.prototype),
              Object.setPrototypeOf(e, t),
              42 === e.foo()
            );
          } catch (e) {
            return !1;
          }
        })()),
        s.TYPED_ARRAY_SUPPORT ||
          'undefined' == typeof console ||
          'function' != typeof console.error ||
          console.error(
            'This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.'
          ),
        Object.defineProperty(s.prototype, 'parent', {
          enumerable: !0,
          get: function () {
            if (s.isBuffer(this)) return this.buffer;
          },
        }),
        Object.defineProperty(s.prototype, 'offset', {
          enumerable: !0,
          get: function () {
            if (s.isBuffer(this)) return this.byteOffset;
          },
        }),
        (s.poolSize = 8192),
        (s.from = function (e, t, o) {
          return l(e, t, o);
        }),
        Object.setPrototypeOf(s.prototype, Uint8Array.prototype),
        Object.setPrototypeOf(s, Uint8Array),
        (s.alloc = function (e, t, o) {
          return (u(e), e <= 0)
            ? i(e)
            : void 0 !== t
              ? 'string' == typeof o
                ? i(e).fill(t, o)
                : i(e).fill(t)
              : i(e);
        }),
        (s.allocUnsafe = function (e) {
          return c(e);
        }),
        (s.allocUnsafeSlow = function (e) {
          return c(e);
        }),
        (s.isBuffer = function (e) {
          return null != e && !0 === e._isBuffer && e !== s.prototype;
        }),
        (s.compare = function (e, t) {
          if (
            (D(e, Uint8Array) && (e = s.from(e, e.offset, e.byteLength)),
            D(t, Uint8Array) && (t = s.from(t, t.offset, t.byteLength)),
            !s.isBuffer(e) || !s.isBuffer(t))
          )
            throw TypeError(
              'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
            );
          if (e === t) return 0;
          let o = e.length,
            a = t.length;
          for (let n = 0, r = Math.min(o, a); n < r; ++n)
            if (e[n] !== t[n]) {
              (o = e[n]), (a = t[n]);
              break;
            }
          return o < a ? -1 : a < o ? 1 : 0;
        }),
        (s.isEncoding = function (e) {
          switch (String(e).toLowerCase()) {
            case 'hex':
            case 'utf8':
            case 'utf-8':
            case 'ascii':
            case 'latin1':
            case 'binary':
            case 'base64':
            case 'ucs2':
            case 'ucs-2':
            case 'utf16le':
            case 'utf-16le':
              return !0;
            default:
              return !1;
          }
        }),
        (s.concat = function (e, t) {
          let o;
          if (!Array.isArray(e))
            throw TypeError('"list" argument must be an Array of Buffers');
          if (0 === e.length) return s.alloc(0);
          if (void 0 === t)
            for (o = 0, t = 0; o < e.length; ++o) t += e[o].length;
          let a = s.allocUnsafe(t),
            n = 0;
          for (o = 0; o < e.length; ++o) {
            let t = e[o];
            if (D(t, Uint8Array))
              n + t.length > a.length
                ? (s.isBuffer(t) || (t = s.from(t)), t.copy(a, n))
                : Uint8Array.prototype.set.call(a, t, n);
            else if (s.isBuffer(t)) t.copy(a, n);
            else throw TypeError('"list" argument must be an Array of Buffers');
            n += t.length;
          }
          return a;
        }),
        (s.byteLength = f),
        (s.prototype._isBuffer = !0),
        (s.prototype.swap16 = function () {
          let e = this.length;
          if (e % 2 != 0)
            throw RangeError('Buffer size must be a multiple of 16-bits');
          for (let t = 0; t < e; t += 2) g(this, t, t + 1);
          return this;
        }),
        (s.prototype.swap32 = function () {
          let e = this.length;
          if (e % 4 != 0)
            throw RangeError('Buffer size must be a multiple of 32-bits');
          for (let t = 0; t < e; t += 4)
            g(this, t, t + 3), g(this, t + 1, t + 2);
          return this;
        }),
        (s.prototype.swap64 = function () {
          let e = this.length;
          if (e % 8 != 0)
            throw RangeError('Buffer size must be a multiple of 64-bits');
          for (let t = 0; t < e; t += 8)
            g(this, t, t + 7),
              g(this, t + 1, t + 6),
              g(this, t + 2, t + 5),
              g(this, t + 3, t + 4);
          return this;
        }),
        (s.prototype.toString = function () {
          let e = this.length;
          return 0 === e
            ? ''
            : 0 == arguments.length
              ? b(this, 0, e)
              : h.apply(this, arguments);
        }),
        (s.prototype.toLocaleString = s.prototype.toString),
        (s.prototype.equals = function (e) {
          if (!s.isBuffer(e)) throw TypeError('Argument must be a Buffer');
          return this === e || 0 === s.compare(this, e);
        }),
        (s.prototype.inspect = function () {
          let e = '',
            o = t.IS;
          return (
            (e = this.toString('hex', 0, o)
              .replace(/(.{2})/g, '$1 ')
              .trim()),
            this.length > o && (e += ' ... '),
            '<Buffer ' + e + '>'
          );
        }),
        r && (s.prototype[r] = s.prototype.inspect),
        (s.prototype.compare = function (e, t, o, a, n) {
          if (
            (D(e, Uint8Array) && (e = s.from(e, e.offset, e.byteLength)),
            !s.isBuffer(e))
          )
            throw TypeError(
              'The "target" argument must be one of type Buffer or Uint8Array. Received type ' +
                typeof e
            );
          if (
            (void 0 === t && (t = 0),
            void 0 === o && (o = e ? e.length : 0),
            void 0 === a && (a = 0),
            void 0 === n && (n = this.length),
            t < 0 || o > e.length || a < 0 || n > this.length)
          )
            throw RangeError('out of range index');
          if (a >= n && t >= o) return 0;
          if (a >= n) return -1;
          if (t >= o) return 1;
          if (((t >>>= 0), (o >>>= 0), (a >>>= 0), (n >>>= 0), this === e))
            return 0;
          let r = n - a,
            i = o - t,
            l = Math.min(r, i),
            u = this.slice(a, n),
            c = e.slice(t, o);
          for (let e = 0; e < l; ++e)
            if (u[e] !== c[e]) {
              (r = u[e]), (i = c[e]);
              break;
            }
          return r < i ? -1 : i < r ? 1 : 0;
        }),
        (s.prototype.includes = function (e, t, o) {
          return -1 !== this.indexOf(e, t, o);
        }),
        (s.prototype.indexOf = function (e, t, o) {
          return y(this, e, t, o, !0);
        }),
        (s.prototype.lastIndexOf = function (e, t, o) {
          return y(this, e, t, o, !1);
        }),
        (s.prototype.write = function (e, t, o, a) {
          var n, r, i, s, l, u, c, p;
          if (void 0 === t) (a = 'utf8'), (o = this.length), (t = 0);
          else if (void 0 === o && 'string' == typeof t)
            (a = t), (o = this.length), (t = 0);
          else if (isFinite(t))
            (t >>>= 0),
              isFinite(o)
                ? ((o >>>= 0), void 0 === a && (a = 'utf8'))
                : ((a = o), (o = void 0));
          else
            throw Error(
              'Buffer.write(string, encoding, offset[, length]) is no longer supported'
            );
          let m = this.length - t;
          if (
            ((void 0 === o || o > m) && (o = m),
            (e.length > 0 && (o < 0 || t < 0)) || t > this.length)
          )
            throw RangeError('Attempt to write outside buffer bounds');
          a || (a = 'utf8');
          let d = !1;
          for (;;)
            switch (a) {
              case 'hex':
                return (function (e, t, o, a) {
                  let n;
                  o = Number(o) || 0;
                  let r = e.length - o;
                  a ? (a = Number(a)) > r && (a = r) : (a = r);
                  let i = t.length;
                  for (a > i / 2 && (a = i / 2), n = 0; n < a; ++n) {
                    let a = parseInt(t.substr(2 * n, 2), 16);
                    if (a != a) break;
                    e[o + n] = a;
                  }
                  return n;
                })(this, e, t, o);
              case 'utf8':
              case 'utf-8':
                return (n = t), (r = o), N(T(e, this.length - n), this, n, r);
              case 'ascii':
              case 'latin1':
              case 'binary':
                return (
                  (i = t),
                  (s = o),
                  N(
                    (function (e) {
                      let t = [];
                      for (let o = 0; o < e.length; ++o)
                        t.push(255 & e.charCodeAt(o));
                      return t;
                    })(e),
                    this,
                    i,
                    s
                  )
                );
              case 'base64':
                return (l = t), (u = o), N(L(e), this, l, u);
              case 'ucs2':
              case 'ucs-2':
              case 'utf16le':
              case 'utf-16le':
                return (
                  (c = t),
                  (p = o),
                  N(
                    (function (e, t) {
                      let o, a;
                      let n = [];
                      for (let r = 0; r < e.length && !((t -= 2) < 0); ++r)
                        (a = (o = e.charCodeAt(r)) >> 8),
                          n.push(o % 256),
                          n.push(a);
                      return n;
                    })(e, this.length - c),
                    this,
                    c,
                    p
                  )
                );
              default:
                if (d) throw TypeError('Unknown encoding: ' + a);
                (a = ('' + a).toLowerCase()), (d = !0);
            }
        }),
        (s.prototype.toJSON = function () {
          return {
            type: 'Buffer',
            data: Array.prototype.slice.call(this._arr || this, 0),
          };
        }),
        (s.prototype.slice = function (e, t) {
          let o = this.length;
          (e = ~~e),
            (t = void 0 === t ? o : ~~t),
            e < 0 ? (e += o) < 0 && (e = 0) : e > o && (e = o),
            t < 0 ? (t += o) < 0 && (t = 0) : t > o && (t = o),
            t < e && (t = e);
          let a = this.subarray(e, t);
          return Object.setPrototypeOf(a, s.prototype), a;
        }),
        (s.prototype.readUintLE = s.prototype.readUIntLE =
          function (e, t, o) {
            (e >>>= 0), (t >>>= 0), o || w(e, t, this.length);
            let a = this[e],
              n = 1,
              r = 0;
            for (; ++r < t && (n *= 256); ) a += this[e + r] * n;
            return a;
          }),
        (s.prototype.readUintBE = s.prototype.readUIntBE =
          function (e, t, o) {
            (e >>>= 0), (t >>>= 0), o || w(e, t, this.length);
            let a = this[e + --t],
              n = 1;
            for (; t > 0 && (n *= 256); ) a += this[e + --t] * n;
            return a;
          }),
        (s.prototype.readUint8 = s.prototype.readUInt8 =
          function (e, t) {
            return (e >>>= 0), t || w(e, 1, this.length), this[e];
          }),
        (s.prototype.readUint16LE = s.prototype.readUInt16LE =
          function (e, t) {
            return (
              (e >>>= 0),
              t || w(e, 2, this.length),
              this[e] | (this[e + 1] << 8)
            );
          }),
        (s.prototype.readUint16BE = s.prototype.readUInt16BE =
          function (e, t) {
            return (
              (e >>>= 0),
              t || w(e, 2, this.length),
              (this[e] << 8) | this[e + 1]
            );
          }),
        (s.prototype.readUint32LE = s.prototype.readUInt32LE =
          function (e, t) {
            return (
              (e >>>= 0),
              t || w(e, 4, this.length),
              (this[e] | (this[e + 1] << 8) | (this[e + 2] << 16)) +
                0x1000000 * this[e + 3]
            );
          }),
        (s.prototype.readUint32BE = s.prototype.readUInt32BE =
          function (e, t) {
            return (
              (e >>>= 0),
              t || w(e, 4, this.length),
              0x1000000 * this[e] +
                ((this[e + 1] << 16) | (this[e + 2] << 8) | this[e + 3])
            );
          }),
        (s.prototype.readBigUInt64LE = F(function (e) {
          P((e >>>= 0), 'offset');
          let t = this[e],
            o = this[e + 7];
          (void 0 === t || void 0 === o) && B(e, this.length - 8);
          let a =
              t + 256 * this[++e] + 65536 * this[++e] + 0x1000000 * this[++e],
            n = this[++e] + 256 * this[++e] + 65536 * this[++e] + 0x1000000 * o;
          return BigInt(a) + (BigInt(n) << BigInt(32));
        })),
        (s.prototype.readBigUInt64BE = F(function (e) {
          P((e >>>= 0), 'offset');
          let t = this[e],
            o = this[e + 7];
          (void 0 === t || void 0 === o) && B(e, this.length - 8);
          let a =
              0x1000000 * t + 65536 * this[++e] + 256 * this[++e] + this[++e],
            n = 0x1000000 * this[++e] + 65536 * this[++e] + 256 * this[++e] + o;
          return (BigInt(a) << BigInt(32)) + BigInt(n);
        })),
        (s.prototype.readIntLE = function (e, t, o) {
          (e >>>= 0), (t >>>= 0), o || w(e, t, this.length);
          let a = this[e],
            n = 1,
            r = 0;
          for (; ++r < t && (n *= 256); ) a += this[e + r] * n;
          return a >= (n *= 128) && (a -= Math.pow(2, 8 * t)), a;
        }),
        (s.prototype.readIntBE = function (e, t, o) {
          (e >>>= 0), (t >>>= 0), o || w(e, t, this.length);
          let a = t,
            n = 1,
            r = this[e + --a];
          for (; a > 0 && (n *= 256); ) r += this[e + --a] * n;
          return r >= (n *= 128) && (r -= Math.pow(2, 8 * t)), r;
        }),
        (s.prototype.readInt8 = function (e, t) {
          return ((e >>>= 0), t || w(e, 1, this.length), 128 & this[e])
            ? -((255 - this[e] + 1) * 1)
            : this[e];
        }),
        (s.prototype.readInt16LE = function (e, t) {
          (e >>>= 0), t || w(e, 2, this.length);
          let o = this[e] | (this[e + 1] << 8);
          return 32768 & o ? 0xffff0000 | o : o;
        }),
        (s.prototype.readInt16BE = function (e, t) {
          (e >>>= 0), t || w(e, 2, this.length);
          let o = this[e + 1] | (this[e] << 8);
          return 32768 & o ? 0xffff0000 | o : o;
        }),
        (s.prototype.readInt32LE = function (e, t) {
          return (
            (e >>>= 0),
            t || w(e, 4, this.length),
            this[e] |
              (this[e + 1] << 8) |
              (this[e + 2] << 16) |
              (this[e + 3] << 24)
          );
        }),
        (s.prototype.readInt32BE = function (e, t) {
          return (
            (e >>>= 0),
            t || w(e, 4, this.length),
            (this[e] << 24) |
              (this[e + 1] << 16) |
              (this[e + 2] << 8) |
              this[e + 3]
          );
        }),
        (s.prototype.readBigInt64LE = F(function (e) {
          P((e >>>= 0), 'offset');
          let t = this[e],
            o = this[e + 7];
          return (
            (void 0 === t || void 0 === o) && B(e, this.length - 8),
            (BigInt(
              this[e + 4] + 256 * this[e + 5] + 65536 * this[e + 6] + (o << 24)
            ) <<
              BigInt(32)) +
              BigInt(
                t + 256 * this[++e] + 65536 * this[++e] + 0x1000000 * this[++e]
              )
          );
        })),
        (s.prototype.readBigInt64BE = F(function (e) {
          P((e >>>= 0), 'offset');
          let t = this[e],
            o = this[e + 7];
          return (
            (void 0 === t || void 0 === o) && B(e, this.length - 8),
            (BigInt(
              (t << 24) + 65536 * this[++e] + 256 * this[++e] + this[++e]
            ) <<
              BigInt(32)) +
              BigInt(
                0x1000000 * this[++e] + 65536 * this[++e] + 256 * this[++e] + o
              )
          );
        })),
        (s.prototype.readFloatLE = function (e, t) {
          return (
            (e >>>= 0), t || w(e, 4, this.length), n.read(this, e, !0, 23, 4)
          );
        }),
        (s.prototype.readFloatBE = function (e, t) {
          return (
            (e >>>= 0), t || w(e, 4, this.length), n.read(this, e, !1, 23, 4)
          );
        }),
        (s.prototype.readDoubleLE = function (e, t) {
          return (
            (e >>>= 0), t || w(e, 8, this.length), n.read(this, e, !0, 52, 8)
          );
        }),
        (s.prototype.readDoubleBE = function (e, t) {
          return (
            (e >>>= 0), t || w(e, 8, this.length), n.read(this, e, !1, 52, 8)
          );
        }),
        (s.prototype.writeUintLE = s.prototype.writeUIntLE =
          function (e, t, o, a) {
            if (((e = +e), (t >>>= 0), (o >>>= 0), !a)) {
              let a = Math.pow(2, 8 * o) - 1;
              j(this, e, t, o, a, 0);
            }
            let n = 1,
              r = 0;
            for (this[t] = 255 & e; ++r < o && (n *= 256); )
              this[t + r] = (e / n) & 255;
            return t + o;
          }),
        (s.prototype.writeUintBE = s.prototype.writeUIntBE =
          function (e, t, o, a) {
            if (((e = +e), (t >>>= 0), (o >>>= 0), !a)) {
              let a = Math.pow(2, 8 * o) - 1;
              j(this, e, t, o, a, 0);
            }
            let n = o - 1,
              r = 1;
            for (this[t + n] = 255 & e; --n >= 0 && (r *= 256); )
              this[t + n] = (e / r) & 255;
            return t + o;
          }),
        (s.prototype.writeUint8 = s.prototype.writeUInt8 =
          function (e, t, o) {
            return (
              (e = +e),
              (t >>>= 0),
              o || j(this, e, t, 1, 255, 0),
              (this[t] = 255 & e),
              t + 1
            );
          }),
        (s.prototype.writeUint16LE = s.prototype.writeUInt16LE =
          function (e, t, o) {
            return (
              (e = +e),
              (t >>>= 0),
              o || j(this, e, t, 2, 65535, 0),
              (this[t] = 255 & e),
              (this[t + 1] = e >>> 8),
              t + 2
            );
          }),
        (s.prototype.writeUint16BE = s.prototype.writeUInt16BE =
          function (e, t, o) {
            return (
              (e = +e),
              (t >>>= 0),
              o || j(this, e, t, 2, 65535, 0),
              (this[t] = e >>> 8),
              (this[t + 1] = 255 & e),
              t + 2
            );
          }),
        (s.prototype.writeUint32LE = s.prototype.writeUInt32LE =
          function (e, t, o) {
            return (
              (e = +e),
              (t >>>= 0),
              o || j(this, e, t, 4, 0xffffffff, 0),
              (this[t + 3] = e >>> 24),
              (this[t + 2] = e >>> 16),
              (this[t + 1] = e >>> 8),
              (this[t] = 255 & e),
              t + 4
            );
          }),
        (s.prototype.writeUint32BE = s.prototype.writeUInt32BE =
          function (e, t, o) {
            return (
              (e = +e),
              (t >>>= 0),
              o || j(this, e, t, 4, 0xffffffff, 0),
              (this[t] = e >>> 24),
              (this[t + 1] = e >>> 16),
              (this[t + 2] = e >>> 8),
              (this[t + 3] = 255 & e),
              t + 4
            );
          }),
        (s.prototype.writeBigUInt64LE = F(function (e, t = 0) {
          return v(this, e, t, BigInt(0), BigInt('0xffffffffffffffff'));
        })),
        (s.prototype.writeBigUInt64BE = F(function (e, t = 0) {
          return z(this, e, t, BigInt(0), BigInt('0xffffffffffffffff'));
        })),
        (s.prototype.writeIntLE = function (e, t, o, a) {
          if (((e = +e), (t >>>= 0), !a)) {
            let a = Math.pow(2, 8 * o - 1);
            j(this, e, t, o, a - 1, -a);
          }
          let n = 0,
            r = 1,
            i = 0;
          for (this[t] = 255 & e; ++n < o && (r *= 256); )
            e < 0 && 0 === i && 0 !== this[t + n - 1] && (i = 1),
              (this[t + n] = (((e / r) >> 0) - i) & 255);
          return t + o;
        }),
        (s.prototype.writeIntBE = function (e, t, o, a) {
          if (((e = +e), (t >>>= 0), !a)) {
            let a = Math.pow(2, 8 * o - 1);
            j(this, e, t, o, a - 1, -a);
          }
          let n = o - 1,
            r = 1,
            i = 0;
          for (this[t + n] = 255 & e; --n >= 0 && (r *= 256); )
            e < 0 && 0 === i && 0 !== this[t + n + 1] && (i = 1),
              (this[t + n] = (((e / r) >> 0) - i) & 255);
          return t + o;
        }),
        (s.prototype.writeInt8 = function (e, t, o) {
          return (
            (e = +e),
            (t >>>= 0),
            o || j(this, e, t, 1, 127, -128),
            e < 0 && (e = 255 + e + 1),
            (this[t] = 255 & e),
            t + 1
          );
        }),
        (s.prototype.writeInt16LE = function (e, t, o) {
          return (
            (e = +e),
            (t >>>= 0),
            o || j(this, e, t, 2, 32767, -32768),
            (this[t] = 255 & e),
            (this[t + 1] = e >>> 8),
            t + 2
          );
        }),
        (s.prototype.writeInt16BE = function (e, t, o) {
          return (
            (e = +e),
            (t >>>= 0),
            o || j(this, e, t, 2, 32767, -32768),
            (this[t] = e >>> 8),
            (this[t + 1] = 255 & e),
            t + 2
          );
        }),
        (s.prototype.writeInt32LE = function (e, t, o) {
          return (
            (e = +e),
            (t >>>= 0),
            o || j(this, e, t, 4, 0x7fffffff, -0x80000000),
            (this[t] = 255 & e),
            (this[t + 1] = e >>> 8),
            (this[t + 2] = e >>> 16),
            (this[t + 3] = e >>> 24),
            t + 4
          );
        }),
        (s.prototype.writeInt32BE = function (e, t, o) {
          return (
            (e = +e),
            (t >>>= 0),
            o || j(this, e, t, 4, 0x7fffffff, -0x80000000),
            e < 0 && (e = 0xffffffff + e + 1),
            (this[t] = e >>> 24),
            (this[t + 1] = e >>> 16),
            (this[t + 2] = e >>> 8),
            (this[t + 3] = 255 & e),
            t + 4
          );
        }),
        (s.prototype.writeBigInt64LE = F(function (e, t = 0) {
          return v(
            this,
            e,
            t,
            -BigInt('0x8000000000000000'),
            BigInt('0x7fffffffffffffff')
          );
        })),
        (s.prototype.writeBigInt64BE = F(function (e, t = 0) {
          return z(
            this,
            e,
            t,
            -BigInt('0x8000000000000000'),
            BigInt('0x7fffffffffffffff')
          );
        })),
        (s.prototype.writeFloatLE = function (e, t, o) {
          return E(this, e, t, !0, o);
        }),
        (s.prototype.writeFloatBE = function (e, t, o) {
          return E(this, e, t, !1, o);
        }),
        (s.prototype.writeDoubleLE = function (e, t, o) {
          return A(this, e, t, !0, o);
        }),
        (s.prototype.writeDoubleBE = function (e, t, o) {
          return A(this, e, t, !1, o);
        }),
        (s.prototype.copy = function (e, t, o, a) {
          if (!s.isBuffer(e)) throw TypeError('argument should be a Buffer');
          if (
            (o || (o = 0),
            a || 0 === a || (a = this.length),
            t >= e.length && (t = e.length),
            t || (t = 0),
            a > 0 && a < o && (a = o),
            a === o || 0 === e.length || 0 === this.length)
          )
            return 0;
          if (t < 0) throw RangeError('targetStart out of bounds');
          if (o < 0 || o >= this.length) throw RangeError('Index out of range');
          if (a < 0) throw RangeError('sourceEnd out of bounds');
          a > this.length && (a = this.length),
            e.length - t < a - o && (a = e.length - t + o);
          let n = a - o;
          return (
            this === e && 'function' == typeof Uint8Array.prototype.copyWithin
              ? this.copyWithin(t, o, a)
              : Uint8Array.prototype.set.call(e, this.subarray(o, a), t),
            n
          );
        }),
        (s.prototype.fill = function (e, t, o, a) {
          let n;
          if ('string' == typeof e) {
            if (
              ('string' == typeof t
                ? ((a = t), (t = 0), (o = this.length))
                : 'string' == typeof o && ((a = o), (o = this.length)),
              void 0 !== a && 'string' != typeof a)
            )
              throw TypeError('encoding must be a string');
            if ('string' == typeof a && !s.isEncoding(a))
              throw TypeError('Unknown encoding: ' + a);
            if (1 === e.length) {
              let t = e.charCodeAt(0);
              (('utf8' === a && t < 128) || 'latin1' === a) && (e = t);
            }
          } else
            'number' == typeof e
              ? (e &= 255)
              : 'boolean' == typeof e && (e = Number(e));
          if (t < 0 || this.length < t || this.length < o)
            throw RangeError('Out of range index');
          if (o <= t) return this;
          if (
            ((t >>>= 0),
            (o = void 0 === o ? this.length : o >>> 0),
            e || (e = 0),
            'number' == typeof e)
          )
            for (n = t; n < o; ++n) this[n] = e;
          else {
            let r = s.isBuffer(e) ? e : s.from(e, a),
              i = r.length;
            if (0 === i)
              throw TypeError(
                'The value "' + e + '" is invalid for argument "value"'
              );
            for (n = 0; n < o - t; ++n) this[n + t] = r[n % i];
          }
          return this;
        });
      let S = {};
      function O(e, t, o) {
        S[e] = class extends o {
          constructor() {
            super(),
              Object.defineProperty(this, 'message', {
                value: t.apply(this, arguments),
                writable: !0,
                configurable: !0,
              }),
              (this.name = `${this.name} [${e}]`),
              this.stack,
              delete this.name;
          }
          get code() {
            return e;
          }
          set code(e) {
            Object.defineProperty(this, 'code', {
              configurable: !0,
              enumerable: !0,
              value: e,
              writable: !0,
            });
          }
          toString() {
            return `${this.name} [${e}]: ${this.message}`;
          }
        };
      }
      function C(e) {
        let t = '',
          o = e.length,
          a = '-' === e[0] ? 1 : 0;
        for (; o >= a + 4; o -= 3) t = `_${e.slice(o - 3, o)}${t}`;
        return `${e.slice(0, o)}${t}`;
      }
      function I(e, t, o, a, n, r) {
        if (e > o || e < t) {
          let a;
          let n = 'bigint' == typeof t ? 'n' : '';
          throw (
            ((a =
              r > 3
                ? 0 === t || t === BigInt(0)
                  ? `>= 0${n} and < 2${n} ** ${(r + 1) * 8}${n}`
                  : `>= -(2${n} ** ${(r + 1) * 8 - 1}${n}) and < 2 ** ${(r + 1) * 8 - 1}${n}`
                : `>= ${t}${n} and <= ${o}${n}`),
            new S.ERR_OUT_OF_RANGE('value', a, e))
          );
        }
        P(n, 'offset'),
          (void 0 === a[n] || void 0 === a[n + r]) && B(n, a.length - (r + 1));
      }
      function P(e, t) {
        if ('number' != typeof e)
          throw new S.ERR_INVALID_ARG_TYPE(t, 'number', e);
      }
      function B(e, t, o) {
        if (Math.floor(e) !== e)
          throw (
            (P(e, o), new S.ERR_OUT_OF_RANGE(o || 'offset', 'an integer', e))
          );
        if (t < 0) throw new S.ERR_BUFFER_OUT_OF_BOUNDS();
        throw new S.ERR_OUT_OF_RANGE(
          o || 'offset',
          `>= ${o ? 1 : 0} and <= ${t}`,
          e
        );
      }
      O(
        'ERR_BUFFER_OUT_OF_BOUNDS',
        function (e) {
          return e
            ? `${e} is outside of buffer bounds`
            : 'Attempt to access memory outside buffer bounds';
        },
        RangeError
      ),
        O(
          'ERR_INVALID_ARG_TYPE',
          function (e, t) {
            return `The "${e}" argument must be of type number. Received type ${typeof t}`;
          },
          TypeError
        ),
        O(
          'ERR_OUT_OF_RANGE',
          function (e, t, o) {
            let a = `The value of "${e}" is out of range.`,
              n = o;
            return (
              Number.isInteger(o) && Math.abs(o) > 0x100000000
                ? (n = C(String(o)))
                : 'bigint' == typeof o &&
                  ((n = String(o)),
                  (o > BigInt(2) ** BigInt(32) ||
                    o < -(BigInt(2) ** BigInt(32))) &&
                    (n = C(n)),
                  (n += 'n')),
              (a += ` It must be ${t}. Received ${n}`)
            );
          },
          RangeError
        );
      let R = /[^+/0-9A-Za-z-_]/g;
      function T(e, t) {
        let o;
        t = t || 1 / 0;
        let a = e.length,
          n = null,
          r = [];
        for (let i = 0; i < a; ++i) {
          if ((o = e.charCodeAt(i)) > 55295 && o < 57344) {
            if (!n) {
              if (o > 56319 || i + 1 === a) {
                (t -= 3) > -1 && r.push(239, 191, 189);
                continue;
              }
              n = o;
              continue;
            }
            if (o < 56320) {
              (t -= 3) > -1 && r.push(239, 191, 189), (n = o);
              continue;
            }
            o = (((n - 55296) << 10) | (o - 56320)) + 65536;
          } else n && (t -= 3) > -1 && r.push(239, 191, 189);
          if (((n = null), o < 128)) {
            if ((t -= 1) < 0) break;
            r.push(o);
          } else if (o < 2048) {
            if ((t -= 2) < 0) break;
            r.push((o >> 6) | 192, (63 & o) | 128);
          } else if (o < 65536) {
            if ((t -= 3) < 0) break;
            r.push((o >> 12) | 224, ((o >> 6) & 63) | 128, (63 & o) | 128);
          } else if (o < 1114112) {
            if ((t -= 4) < 0) break;
            r.push(
              (o >> 18) | 240,
              ((o >> 12) & 63) | 128,
              ((o >> 6) & 63) | 128,
              (63 & o) | 128
            );
          } else throw Error('Invalid code point');
        }
        return r;
      }
      function L(e) {
        return a.toByteArray(
          (function (e) {
            if ((e = (e = e.split('=')[0]).trim().replace(R, '')).length < 2)
              return '';
            for (; e.length % 4 != 0; ) e += '=';
            return e;
          })(e)
        );
      }
      function N(e, t, o, a) {
        let n;
        for (n = 0; n < a && !(n + o >= t.length) && !(n >= e.length); ++n)
          t[n + o] = e[n];
        return n;
      }
      function D(e, t) {
        return (
          e instanceof t ||
          (null != e &&
            null != e.constructor &&
            null != e.constructor.name &&
            e.constructor.name === t.name)
        );
      }
      let U = (function () {
        let e = '0123456789abcdef',
          t = Array(256);
        for (let o = 0; o < 16; ++o) {
          let a = 16 * o;
          for (let n = 0; n < 16; ++n) t[a + n] = e[o] + e[n];
        }
        return t;
      })();
      function F(e) {
        return 'undefined' == typeof BigInt ? M : e;
      }
      function M() {
        throw Error('BigInt not supported');
      }
    },
    1683: (e, t, o) => {
      'use strict';
      var a = o(3790),
        n = o(4045),
        r = o(6223),
        i = o(7220);
      e.exports = i || a.call(r, n);
    },
    1930: (e, t, o) => {
      'use strict';
      var a = o(3790),
        n = o(4045),
        r = o(1683);
      e.exports = function () {
        return r(a, n, arguments);
      };
    },
    4045: (e) => {
      'use strict';
      e.exports = Function.prototype.apply;
    },
    6223: (e) => {
      'use strict';
      e.exports = Function.prototype.call;
    },
    8561: (e, t, o) => {
      'use strict';
      var a = o(3790),
        n = o(3170),
        r = o(6223),
        i = o(1683);
      e.exports = function (e) {
        if (e.length < 1 || 'function' != typeof e[0])
          throw new n('a function is required');
        return i(a, r, e);
      };
    },
    7220: (e) => {
      'use strict';
      e.exports = 'undefined' != typeof Reflect && Reflect && Reflect.apply;
    },
    4973: (e, t, o) => {
      'use strict';
      var a = o(4597),
        n = o(7540),
        r = o(8561),
        i = o(1930);
      (e.exports = function (e) {
        var t = r(arguments),
          o = e.length - (arguments.length - 1);
        return a(t, 1 + (o > 0 ? o : 0), !0);
      }),
        n ? n(e.exports, 'apply', { value: i }) : (e.exports.apply = i);
    },
    1963: (e, t, o) => {
      'use strict';
      var a = o(2206),
        n = o(8561),
        r = n([a('%String.prototype.indexOf%')]);
      e.exports = function (e, t) {
        var o = a(e, !!t);
        return 'function' == typeof o && r(e, '.prototype.') > -1 ? n([o]) : o;
      };
    },
    6404: (e, t, o) => {
      'use strict';
      var a = o(7540),
        n = o(6701),
        r = o(3170),
        i = o(7061);
      e.exports = function (e, t, o) {
        if (!e || ('object' != typeof e && 'function' != typeof e))
          throw new r('`obj` must be an object or a function`');
        if ('string' != typeof t && 'symbol' != typeof t)
          throw new r('`property` must be a string or a symbol`');
        if (
          arguments.length > 3 &&
          'boolean' != typeof arguments[3] &&
          null !== arguments[3]
        )
          throw new r(
            '`nonEnumerable`, if provided, must be a boolean or null'
          );
        if (
          arguments.length > 4 &&
          'boolean' != typeof arguments[4] &&
          null !== arguments[4]
        )
          throw new r('`nonWritable`, if provided, must be a boolean or null');
        if (
          arguments.length > 5 &&
          'boolean' != typeof arguments[5] &&
          null !== arguments[5]
        )
          throw new r(
            '`nonConfigurable`, if provided, must be a boolean or null'
          );
        if (arguments.length > 6 && 'boolean' != typeof arguments[6])
          throw new r('`loose`, if provided, must be a boolean');
        var s = arguments.length > 3 ? arguments[3] : null,
          l = arguments.length > 4 ? arguments[4] : null,
          u = arguments.length > 5 ? arguments[5] : null,
          c = arguments.length > 6 && arguments[6],
          p = !!i && i(e, t);
        if (a)
          a(e, t, {
            configurable: null === u && p ? p.configurable : !u,
            enumerable: null === s && p ? p.enumerable : !s,
            value: o,
            writable: null === l && p ? p.writable : !l,
          });
        else if (!c && (s || l || u))
          throw new n(
            'This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.'
          );
        else e[t] = o;
      };
    },
    1928: (e, t, o) => {
      'use strict';
      var a,
        n = o(8561),
        r = o(7061);
      try {
        a = [].__proto__ === Array.prototype;
      } catch (e) {
        if (
          !e ||
          'object' != typeof e ||
          !('code' in e) ||
          'ERR_PROTO_ACCESS' !== e.code
        )
          throw e;
      }
      var i = !!a && r && r(Object.prototype, '__proto__'),
        s = Object,
        l = s.getPrototypeOf;
      e.exports =
        i && 'function' == typeof i.get
          ? n([i.get])
          : 'function' == typeof l &&
            function (e) {
              return l(null == e ? e : s(e));
            };
    },
    7540: (e) => {
      'use strict';
      var t = Object.defineProperty || !1;
      if (t)
        try {
          t({}, 'a', { value: 1 });
        } catch (e) {
          t = !1;
        }
      e.exports = t;
    },
    4628: (e) => {
      'use strict';
      e.exports = EvalError;
    },
    3646: (e) => {
      'use strict';
      e.exports = Error;
    },
    3331: (e) => {
      'use strict';
      e.exports = RangeError;
    },
    4323: (e) => {
      'use strict';
      e.exports = ReferenceError;
    },
    6701: (e) => {
      'use strict';
      e.exports = SyntaxError;
    },
    3170: (e) => {
      'use strict';
      e.exports = TypeError;
    },
    7560: (e) => {
      'use strict';
      e.exports = URIError;
    },
    3115: (e) => {
      'use strict';
      e.exports = Object;
    },
    3082: (e, t, o) => {
      'use strict';
      var a = o(262),
        n = Object.prototype.toString,
        r = Object.prototype.hasOwnProperty,
        i = function (e, t, o) {
          for (var a = 0, n = e.length; a < n; a++)
            r.call(e, a) && (null == o ? t(e[a], a, e) : t.call(o, e[a], a, e));
        },
        s = function (e, t, o) {
          for (var a = 0, n = e.length; a < n; a++)
            null == o ? t(e.charAt(a), a, e) : t.call(o, e.charAt(a), a, e);
        },
        l = function (e, t, o) {
          for (var a in e)
            r.call(e, a) && (null == o ? t(e[a], a, e) : t.call(o, e[a], a, e));
        };
      e.exports = function (e, t, o) {
        var r;
        if (!a(t)) throw TypeError('iterator must be a function');
        (arguments.length >= 3 && (r = o), '[object Array]' === n.call(e))
          ? i(e, t, r)
          : 'string' == typeof e
            ? s(e, t, r)
            : l(e, t, r);
      };
    },
    2800: (e) => {
      'use strict';
      var t = Object.prototype.toString,
        o = Math.max,
        a = function (e, t) {
          for (var o = [], a = 0; a < e.length; a += 1) o[a] = e[a];
          for (var n = 0; n < t.length; n += 1) o[n + e.length] = t[n];
          return o;
        },
        n = function (e, t) {
          for (var o = [], a = t || 0, n = 0; a < e.length; a += 1, n += 1)
            o[n] = e[a];
          return o;
        },
        r = function (e, t) {
          for (var o = '', a = 0; a < e.length; a += 1)
            (o += e[a]), a + 1 < e.length && (o += t);
          return o;
        };
      e.exports = function (e) {
        var i,
          s = this;
        if ('function' != typeof s || '[object Function]' !== t.apply(s))
          throw TypeError(
            'Function.prototype.bind called on incompatible ' + s
          );
        for (
          var l = n(arguments, 1), u = o(0, s.length - l.length), c = [], p = 0;
          p < u;
          p++
        )
          c[p] = '$' + p;
        if (
          ((i = Function(
            'binder',
            'return function (' +
              r(c, ',') +
              '){ return binder.apply(this,arguments); }'
          )(function () {
            if (this instanceof i) {
              var t = s.apply(this, a(l, arguments));
              return Object(t) === t ? t : this;
            }
            return s.apply(e, a(l, arguments));
          })),
          s.prototype)
        ) {
          var m = function () {};
          (m.prototype = s.prototype),
            (i.prototype = new m()),
            (m.prototype = null);
        }
        return i;
      };
    },
    3790: (e, t, o) => {
      'use strict';
      var a = o(2800);
      e.exports = Function.prototype.bind || a;
    },
    2206: (e, t, o) => {
      'use strict';
      var a,
        n = o(3115),
        r = o(3646),
        i = o(4628),
        s = o(3331),
        l = o(4323),
        u = o(6701),
        c = o(3170),
        p = o(7560),
        m = o(1294),
        d = o(1296),
        f = o(3688),
        h = o(8994),
        g = o(3624),
        y = o(2998),
        k = o(2075),
        b = Function,
        w = function (e) {
          try {
            return b('"use strict"; return (' + e + ').constructor;')();
          } catch (e) {}
        },
        j = o(7061),
        v = o(7540),
        z = function () {
          throw new c();
        },
        x = j
          ? (function () {
              try {
                return arguments.callee, z;
              } catch (e) {
                try {
                  return j(arguments, 'callee').get;
                } catch (e) {
                  return z;
                }
              }
            })()
          : z,
        E = o(2184)(),
        A = o(506),
        S = o(6090),
        O = o(1076),
        C = o(4045),
        I = o(6223),
        P = {},
        B = 'undefined' != typeof Uint8Array && A ? A(Uint8Array) : a,
        R = {
          __proto__: null,
          '%AggregateError%':
            'undefined' == typeof AggregateError ? a : AggregateError,
          '%Array%': Array,
          '%ArrayBuffer%': 'undefined' == typeof ArrayBuffer ? a : ArrayBuffer,
          '%ArrayIteratorPrototype%': E && A ? A([][Symbol.iterator]()) : a,
          '%AsyncFromSyncIteratorPrototype%': a,
          '%AsyncFunction%': P,
          '%AsyncGenerator%': P,
          '%AsyncGeneratorFunction%': P,
          '%AsyncIteratorPrototype%': P,
          '%Atomics%': 'undefined' == typeof Atomics ? a : Atomics,
          '%BigInt%': 'undefined' == typeof BigInt ? a : BigInt,
          '%BigInt64Array%':
            'undefined' == typeof BigInt64Array ? a : BigInt64Array,
          '%BigUint64Array%':
            'undefined' == typeof BigUint64Array ? a : BigUint64Array,
          '%Boolean%': Boolean,
          '%DataView%': 'undefined' == typeof DataView ? a : DataView,
          '%Date%': Date,
          '%decodeURI%': decodeURI,
          '%decodeURIComponent%': decodeURIComponent,
          '%encodeURI%': encodeURI,
          '%encodeURIComponent%': encodeURIComponent,
          '%Error%': r,
          '%eval%': eval,
          '%EvalError%': i,
          '%Float16Array%':
            'undefined' == typeof Float16Array ? a : Float16Array,
          '%Float32Array%':
            'undefined' == typeof Float32Array ? a : Float32Array,
          '%Float64Array%':
            'undefined' == typeof Float64Array ? a : Float64Array,
          '%FinalizationRegistry%':
            'undefined' == typeof FinalizationRegistry
              ? a
              : FinalizationRegistry,
          '%Function%': b,
          '%GeneratorFunction%': P,
          '%Int8Array%': 'undefined' == typeof Int8Array ? a : Int8Array,
          '%Int16Array%': 'undefined' == typeof Int16Array ? a : Int16Array,
          '%Int32Array%': 'undefined' == typeof Int32Array ? a : Int32Array,
          '%isFinite%': isFinite,
          '%isNaN%': isNaN,
          '%IteratorPrototype%': E && A ? A(A([][Symbol.iterator]())) : a,
          '%JSON%': 'object' == typeof JSON ? JSON : a,
          '%Map%': 'undefined' == typeof Map ? a : Map,
          '%MapIteratorPrototype%':
            'undefined' != typeof Map && E && A
              ? A(new Map()[Symbol.iterator]())
              : a,
          '%Math%': Math,
          '%Number%': Number,
          '%Object%': n,
          '%Object.getOwnPropertyDescriptor%': j,
          '%parseFloat%': parseFloat,
          '%parseInt%': parseInt,
          '%Promise%': 'undefined' == typeof Promise ? a : Promise,
          '%Proxy%': 'undefined' == typeof Proxy ? a : Proxy,
          '%RangeError%': s,
          '%ReferenceError%': l,
          '%Reflect%': 'undefined' == typeof Reflect ? a : Reflect,
          '%RegExp%': RegExp,
          '%Set%': 'undefined' == typeof Set ? a : Set,
          '%SetIteratorPrototype%':
            'undefined' != typeof Set && E && A
              ? A(new Set()[Symbol.iterator]())
              : a,
          '%SharedArrayBuffer%':
            'undefined' == typeof SharedArrayBuffer ? a : SharedArrayBuffer,
          '%String%': String,
          '%StringIteratorPrototype%': E && A ? A(''[Symbol.iterator]()) : a,
          '%Symbol%': E ? Symbol : a,
          '%SyntaxError%': u,
          '%ThrowTypeError%': x,
          '%TypedArray%': B,
          '%TypeError%': c,
          '%Uint8Array%': 'undefined' == typeof Uint8Array ? a : Uint8Array,
          '%Uint8ClampedArray%':
            'undefined' == typeof Uint8ClampedArray ? a : Uint8ClampedArray,
          '%Uint16Array%': 'undefined' == typeof Uint16Array ? a : Uint16Array,
          '%Uint32Array%': 'undefined' == typeof Uint32Array ? a : Uint32Array,
          '%URIError%': p,
          '%WeakMap%': 'undefined' == typeof WeakMap ? a : WeakMap,
          '%WeakRef%': 'undefined' == typeof WeakRef ? a : WeakRef,
          '%WeakSet%': 'undefined' == typeof WeakSet ? a : WeakSet,
          '%Function.prototype.call%': I,
          '%Function.prototype.apply%': C,
          '%Object.defineProperty%': v,
          '%Object.getPrototypeOf%': S,
          '%Math.abs%': m,
          '%Math.floor%': d,
          '%Math.max%': f,
          '%Math.min%': h,
          '%Math.pow%': g,
          '%Math.round%': y,
          '%Math.sign%': k,
          '%Reflect.getPrototypeOf%': O,
        };
      if (A)
        try {
          null.error;
        } catch (e) {
          var T = A(A(e));
          R['%Error.prototype%'] = T;
        }
      var L = function e(t) {
          var o;
          if ('%AsyncFunction%' === t) o = w('async function () {}');
          else if ('%GeneratorFunction%' === t) o = w('function* () {}');
          else if ('%AsyncGeneratorFunction%' === t)
            o = w('async function* () {}');
          else if ('%AsyncGenerator%' === t) {
            var a = e('%AsyncGeneratorFunction%');
            a && (o = a.prototype);
          } else if ('%AsyncIteratorPrototype%' === t) {
            var n = e('%AsyncGenerator%');
            n && A && (o = A(n.prototype));
          }
          return (R[t] = o), o;
        },
        N = {
          __proto__: null,
          '%ArrayBufferPrototype%': ['ArrayBuffer', 'prototype'],
          '%ArrayPrototype%': ['Array', 'prototype'],
          '%ArrayProto_entries%': ['Array', 'prototype', 'entries'],
          '%ArrayProto_forEach%': ['Array', 'prototype', 'forEach'],
          '%ArrayProto_keys%': ['Array', 'prototype', 'keys'],
          '%ArrayProto_values%': ['Array', 'prototype', 'values'],
          '%AsyncFunctionPrototype%': ['AsyncFunction', 'prototype'],
          '%AsyncGenerator%': ['AsyncGeneratorFunction', 'prototype'],
          '%AsyncGeneratorPrototype%': [
            'AsyncGeneratorFunction',
            'prototype',
            'prototype',
          ],
          '%BooleanPrototype%': ['Boolean', 'prototype'],
          '%DataViewPrototype%': ['DataView', 'prototype'],
          '%DatePrototype%': ['Date', 'prototype'],
          '%ErrorPrototype%': ['Error', 'prototype'],
          '%EvalErrorPrototype%': ['EvalError', 'prototype'],
          '%Float32ArrayPrototype%': ['Float32Array', 'prototype'],
          '%Float64ArrayPrototype%': ['Float64Array', 'prototype'],
          '%FunctionPrototype%': ['Function', 'prototype'],
          '%Generator%': ['GeneratorFunction', 'prototype'],
          '%GeneratorPrototype%': [
            'GeneratorFunction',
            'prototype',
            'prototype',
          ],
          '%Int8ArrayPrototype%': ['Int8Array', 'prototype'],
          '%Int16ArrayPrototype%': ['Int16Array', 'prototype'],
          '%Int32ArrayPrototype%': ['Int32Array', 'prototype'],
          '%JSONParse%': ['JSON', 'parse'],
          '%JSONStringify%': ['JSON', 'stringify'],
          '%MapPrototype%': ['Map', 'prototype'],
          '%NumberPrototype%': ['Number', 'prototype'],
          '%ObjectPrototype%': ['Object', 'prototype'],
          '%ObjProto_toString%': ['Object', 'prototype', 'toString'],
          '%ObjProto_valueOf%': ['Object', 'prototype', 'valueOf'],
          '%PromisePrototype%': ['Promise', 'prototype'],
          '%PromiseProto_then%': ['Promise', 'prototype', 'then'],
          '%Promise_all%': ['Promise', 'all'],
          '%Promise_reject%': ['Promise', 'reject'],
          '%Promise_resolve%': ['Promise', 'resolve'],
          '%RangeErrorPrototype%': ['RangeError', 'prototype'],
          '%ReferenceErrorPrototype%': ['ReferenceError', 'prototype'],
          '%RegExpPrototype%': ['RegExp', 'prototype'],
          '%SetPrototype%': ['Set', 'prototype'],
          '%SharedArrayBufferPrototype%': ['SharedArrayBuffer', 'prototype'],
          '%StringPrototype%': ['String', 'prototype'],
          '%SymbolPrototype%': ['Symbol', 'prototype'],
          '%SyntaxErrorPrototype%': ['SyntaxError', 'prototype'],
          '%TypedArrayPrototype%': ['TypedArray', 'prototype'],
          '%TypeErrorPrototype%': ['TypeError', 'prototype'],
          '%Uint8ArrayPrototype%': ['Uint8Array', 'prototype'],
          '%Uint8ClampedArrayPrototype%': ['Uint8ClampedArray', 'prototype'],
          '%Uint16ArrayPrototype%': ['Uint16Array', 'prototype'],
          '%Uint32ArrayPrototype%': ['Uint32Array', 'prototype'],
          '%URIErrorPrototype%': ['URIError', 'prototype'],
          '%WeakMapPrototype%': ['WeakMap', 'prototype'],
          '%WeakSetPrototype%': ['WeakSet', 'prototype'],
        },
        D = o(3790),
        U = o(812),
        F = D.call(I, Array.prototype.concat),
        M = D.call(C, Array.prototype.splice),
        _ = D.call(I, String.prototype.replace),
        q = D.call(I, String.prototype.slice),
        $ = D.call(I, RegExp.prototype.exec),
        H =
          /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,
        V = /\\(\\)?/g,
        W = function (e) {
          var t = q(e, 0, 1),
            o = q(e, -1);
          if ('%' === t && '%' !== o)
            throw new u('invalid intrinsic syntax, expected closing `%`');
          if ('%' === o && '%' !== t)
            throw new u('invalid intrinsic syntax, expected opening `%`');
          var a = [];
          return (
            _(e, H, function (e, t, o, n) {
              a[a.length] = o ? _(n, V, '$1') : t || e;
            }),
            a
          );
        },
        G = function (e, t) {
          var o,
            a = e;
          if ((U(N, a) && (a = '%' + (o = N[a])[0] + '%'), U(R, a))) {
            var n = R[a];
            if ((n === P && (n = L(a)), void 0 === n && !t))
              throw new c(
                'intrinsic ' +
                  e +
                  ' exists, but is not available. Please file an issue!'
              );
            return { alias: o, name: a, value: n };
          }
          throw new u('intrinsic ' + e + ' does not exist!');
        };
      e.exports = function (e, t) {
        if ('string' != typeof e || 0 === e.length)
          throw new c('intrinsic name must be a non-empty string');
        if (arguments.length > 1 && 'boolean' != typeof t)
          throw new c('"allowMissing" argument must be a boolean');
        if (null === $(/^%?[^%]*%?$/, e))
          throw new u(
            '`%` may not be present anywhere but at the beginning and end of the intrinsic name'
          );
        var o = W(e),
          a = o.length > 0 ? o[0] : '',
          n = G('%' + a + '%', t),
          r = n.name,
          i = n.value,
          s = !1,
          l = n.alias;
        l && ((a = l[0]), M(o, F([0, 1], l)));
        for (var p = 1, m = !0; p < o.length; p += 1) {
          var d = o[p],
            f = q(d, 0, 1),
            h = q(d, -1);
          if (
            ('"' === f ||
              "'" === f ||
              '`' === f ||
              '"' === h ||
              "'" === h ||
              '`' === h) &&
            f !== h
          )
            throw new u('property names with quotes must have matching quotes');
          if (
            (('constructor' !== d && m) || (s = !0),
            (a += '.' + d),
            U(R, (r = '%' + a + '%')))
          )
            i = R[r];
          else if (null != i) {
            if (!(d in i)) {
              if (!t)
                throw new c(
                  'base intrinsic for ' +
                    e +
                    ' exists, but the property is not available.'
                );
              return;
            }
            if (j && p + 1 >= o.length) {
              var g = j(i, d);
              i =
                (m = !!g) && 'get' in g && !('originalValue' in g.get)
                  ? g.get
                  : i[d];
            } else (m = U(i, d)), (i = i[d]);
            m && !s && (R[r] = i);
          }
        }
        return i;
      };
    },
    6090: (e, t, o) => {
      'use strict';
      var a = o(3115);
      e.exports = a.getPrototypeOf || null;
    },
    1076: (e) => {
      'use strict';
      e.exports =
        ('undefined' != typeof Reflect && Reflect.getPrototypeOf) || null;
    },
    506: (e, t, o) => {
      'use strict';
      var a = o(1076),
        n = o(6090),
        r = o(1928);
      e.exports = a
        ? function (e) {
            return a(e);
          }
        : n
          ? function (e) {
              if (!e || ('object' != typeof e && 'function' != typeof e))
                throw TypeError('getProto: not an object');
              return n(e);
            }
          : r
            ? function (e) {
                return r(e);
              }
            : null;
    },
    8089: (e) => {
      'use strict';
      e.exports = Object.getOwnPropertyDescriptor;
    },
    7061: (e, t, o) => {
      'use strict';
      var a = o(8089);
      if (a)
        try {
          a([], 'length');
        } catch (e) {
          a = null;
        }
      e.exports = a;
    },
    9557: (e, t, o) => {
      'use strict';
      var a = o(7540),
        n = function () {
          return !!a;
        };
      (n.hasArrayLengthDefineBug = function () {
        if (!a) return null;
        try {
          return 1 !== a([], 'length', { value: 1 }).length;
        } catch (e) {
          return !0;
        }
      }),
        (e.exports = n);
    },
    2184: (e, t, o) => {
      'use strict';
      var a = 'undefined' != typeof Symbol && Symbol,
        n = o(1866);
      e.exports = function () {
        return (
          'function' == typeof a &&
          'function' == typeof Symbol &&
          'symbol' == typeof a('foo') &&
          'symbol' == typeof Symbol('bar') &&
          n()
        );
      };
    },
    1866: (e) => {
      'use strict';
      e.exports = function () {
        if (
          'function' != typeof Symbol ||
          'function' != typeof Object.getOwnPropertySymbols
        )
          return !1;
        if ('symbol' == typeof Symbol.iterator) return !0;
        var e = {},
          t = Symbol('test'),
          o = Object(t);
        if (
          'string' == typeof t ||
          '[object Symbol]' !== Object.prototype.toString.call(t) ||
          '[object Symbol]' !== Object.prototype.toString.call(o)
        )
          return !1;
        for (var a in ((e[t] = 42), e)) return !1;
        if (
          ('function' == typeof Object.keys && 0 !== Object.keys(e).length) ||
          ('function' == typeof Object.getOwnPropertyNames &&
            0 !== Object.getOwnPropertyNames(e).length)
        )
          return !1;
        var n = Object.getOwnPropertySymbols(e);
        if (
          1 !== n.length ||
          n[0] !== t ||
          !Object.prototype.propertyIsEnumerable.call(e, t)
        )
          return !1;
        if ('function' == typeof Object.getOwnPropertyDescriptor) {
          var r = Object.getOwnPropertyDescriptor(e, t);
          if (42 !== r.value || !0 !== r.enumerable) return !1;
        }
        return !0;
      };
    },
    4552: (e, t, o) => {
      'use strict';
      var a = o(1866);
      e.exports = function () {
        return a() && !!Symbol.toStringTag;
      };
    },
    812: (e, t, o) => {
      'use strict';
      var a = Function.prototype.call,
        n = Object.prototype.hasOwnProperty,
        r = o(3790);
      e.exports = r.call(a, n);
    },
    3850: (e, t) => {
      (t.read = function (e, t, o, a, n) {
        var r,
          i,
          s = 8 * n - a - 1,
          l = (1 << s) - 1,
          u = l >> 1,
          c = -7,
          p = o ? n - 1 : 0,
          m = o ? -1 : 1,
          d = e[t + p];
        for (
          p += m, r = d & ((1 << -c) - 1), d >>= -c, c += s;
          c > 0;
          r = 256 * r + e[t + p], p += m, c -= 8
        );
        for (
          i = r & ((1 << -c) - 1), r >>= -c, c += a;
          c > 0;
          i = 256 * i + e[t + p], p += m, c -= 8
        );
        if (0 === r) r = 1 - u;
        else {
          if (r === l) return i ? NaN : (1 / 0) * (d ? -1 : 1);
          (i += Math.pow(2, a)), (r -= u);
        }
        return (d ? -1 : 1) * i * Math.pow(2, r - a);
      }),
        (t.write = function (e, t, o, a, n, r) {
          var i,
            s,
            l,
            u = 8 * r - n - 1,
            c = (1 << u) - 1,
            p = c >> 1,
            m = 23 === n ? 5960464477539062e-23 : 0,
            d = a ? 0 : r - 1,
            f = a ? 1 : -1,
            h = t < 0 || (0 === t && 1 / t < 0) ? 1 : 0;
          for (
            isNaN((t = Math.abs(t))) || t === 1 / 0
              ? ((s = isNaN(t) ? 1 : 0), (i = c))
              : ((i = Math.floor(Math.log(t) / Math.LN2)),
                t * (l = Math.pow(2, -i)) < 1 && (i--, (l *= 2)),
                i + p >= 1 ? (t += m / l) : (t += m * Math.pow(2, 1 - p)),
                t * l >= 2 && (i++, (l /= 2)),
                i + p >= c
                  ? ((s = 0), (i = c))
                  : i + p >= 1
                    ? ((s = (t * l - 1) * Math.pow(2, n)), (i += p))
                    : ((s = t * Math.pow(2, p - 1) * Math.pow(2, n)), (i = 0)));
            n >= 8;
            e[o + d] = 255 & s, d += f, s /= 256, n -= 8
          );
          for (
            i = (i << n) | s, u += n;
            u > 0;
            e[o + d] = 255 & i, d += f, i /= 256, u -= 8
          );
          e[o + d - f] |= 128 * h;
        });
    },
    9073: (e) => {
      'function' == typeof Object.create
        ? (e.exports = function (e, t) {
            t &&
              ((e.super_ = t),
              (e.prototype = Object.create(t.prototype, {
                constructor: {
                  value: e,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              })));
          })
        : (e.exports = function (e, t) {
            if (t) {
              e.super_ = t;
              var o = function () {};
              (o.prototype = t.prototype),
                (e.prototype = new o()),
                (e.prototype.constructor = e);
            }
          });
    },
    6109: (e, t, o) => {
      'use strict';
      var a = o(4552)(),
        n = o(1963)('Object.prototype.toString'),
        r = function (e) {
          return (
            (!a || !e || 'object' != typeof e || !(Symbol.toStringTag in e)) &&
            '[object Arguments]' === n(e)
          );
        },
        i = function (e) {
          return (
            !!r(e) ||
            (null !== e &&
              'object' == typeof e &&
              'length' in e &&
              'number' == typeof e.length &&
              e.length >= 0 &&
              '[object Array]' !== n(e) &&
              'callee' in e &&
              '[object Function]' === n(e.callee))
          );
        },
        s = (function () {
          return r(arguments);
        })();
      (r.isLegacyArguments = i), (e.exports = s ? r : i);
    },
    262: (e) => {
      'use strict';
      var t,
        o,
        a = Function.prototype.toString,
        n = 'object' == typeof Reflect && null !== Reflect && Reflect.apply;
      if ('function' == typeof n && 'function' == typeof Object.defineProperty)
        try {
          (t = Object.defineProperty({}, 'length', {
            get: function () {
              throw o;
            },
          })),
            (o = {}),
            n(
              function () {
                throw 42;
              },
              null,
              t
            );
        } catch (e) {
          e !== o && (n = null);
        }
      else n = null;
      var r = /^\s*class\b/,
        i = function (e) {
          try {
            var t = a.call(e);
            return r.test(t);
          } catch (e) {
            return !1;
          }
        },
        s = function (e) {
          try {
            if (i(e)) return !1;
            return a.call(e), !0;
          } catch (e) {
            return !1;
          }
        },
        l = Object.prototype.toString,
        u = 'function' == typeof Symbol && !!Symbol.toStringTag,
        c = !(0 in [,]),
        p = function () {
          return !1;
        };
      if ('object' == typeof document) {
        var m = document.all;
        l.call(m) === l.call(document.all) &&
          (p = function (e) {
            if ((c || !e) && (void 0 === e || 'object' == typeof e))
              try {
                var t = l.call(e);
                return (
                  ('[object HTMLAllCollection]' === t ||
                    '[object HTML document.all class]' === t ||
                    '[object HTMLCollection]' === t ||
                    '[object Object]' === t) &&
                  null == e('')
                );
              } catch (e) {}
            return !1;
          });
      }
      e.exports = n
        ? function (e) {
            if (p(e)) return !0;
            if (!e || ('function' != typeof e && 'object' != typeof e))
              return !1;
            try {
              n(e, null, t);
            } catch (e) {
              if (e !== o) return !1;
            }
            return !i(e) && s(e);
          }
        : function (e) {
            if (p(e)) return !0;
            if (!e || ('function' != typeof e && 'object' != typeof e))
              return !1;
            if (u) return s(e);
            if (i(e)) return !1;
            var t = l.call(e);
            return (
              !!(
                '[object Function]' === t ||
                '[object GeneratorFunction]' === t ||
                /^\[object HTML/.test(t)
              ) && s(e)
            );
          };
    },
    6094: (e, t, o) => {
      'use strict';
      var a,
        n = o(1963),
        r = o(7456)(/^\s*(?:function)?\*/),
        i = o(4552)(),
        s = o(506),
        l = n('Object.prototype.toString'),
        u = n('Function.prototype.toString'),
        c = function () {
          if (!i) return !1;
          try {
            return Function('return function*() {}')();
          } catch (e) {}
        };
      e.exports = function (e) {
        if ('function' != typeof e) return !1;
        if (r(u(e))) return !0;
        if (!i) return '[object GeneratorFunction]' === l(e);
        if (!s) return !1;
        if (void 0 === a) {
          var t = c();
          a = !!t && s(t);
        }
        return s(e) === a;
      };
    },
    2698: (e, t, o) => {
      'use strict';
      var a,
        n = o(1963),
        r = o(4552)(),
        i = o(812),
        s = o(7061);
      if (r) {
        var l = n('RegExp.prototype.exec'),
          u = {},
          c = function () {
            throw u;
          },
          p = { toString: c, valueOf: c };
        'symbol' == typeof Symbol.toPrimitive && (p[Symbol.toPrimitive] = c),
          (a = function (e) {
            if (!e || 'object' != typeof e) return !1;
            var t = s(e, 'lastIndex');
            if (!(t && i(t, 'value'))) return !1;
            try {
              l(e, p);
            } catch (e) {
              return e === u;
            }
          });
      } else {
        var m = n('Object.prototype.toString');
        a = function (e) {
          return (
            !!e &&
            ('object' == typeof e || 'function' == typeof e) &&
            '[object RegExp]' === m(e)
          );
        };
      }
      e.exports = a;
    },
    6774: (e, t, o) => {
      'use strict';
      var a = o(6196);
      e.exports = function (e) {
        return !!a(e);
      };
    },
    4105: (e, t, o) => {
      o(4128), (e.exports = self.fetch.bind(self));
    },
    6134: (e, t, o) => {
      'use strict';
      o.d(t, { A: () => a });
      let a = (0, o(2168).A)('Check', [
        ['path', { d: 'M20 6 9 17l-5-5', key: '1gmf2c' }],
      ]);
    },
    2132: (e, t, o) => {
      'use strict';
      o.d(t, { A: () => a });
      let a = (0, o(2168).A)('ChevronDown', [
        ['path', { d: 'm6 9 6 6 6-6', key: 'qrunsl' }],
      ]);
    },
    4725: (e, t, o) => {
      'use strict';
      o.d(t, { A: () => a });
      let a = (0, o(2168).A)('ChevronUp', [
        ['path', { d: 'm18 15-6-6-6 6', key: '153udz' }],
      ]);
    },
    3292: (e, t, o) => {
      'use strict';
      o.d(t, { A: () => a });
      let a = (0, o(2168).A)('LoaderCircle', [
        ['path', { d: 'M21 12a9 9 0 1 1-6.219-8.56', key: '13zald' }],
      ]);
    },
    2088: (e, t, o) => {
      'use strict';
      o.d(t, { A: () => a });
      let a = (0, o(2168).A)('Send', [
        [
          'path',
          {
            d: 'M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z',
            key: '1ffxy3',
          },
        ],
        ['path', { d: 'm21.854 2.147-10.94 10.939', key: '12cjpa' }],
      ]);
    },
    7675: (e, t, o) => {
      'use strict';
      o.d(t, { A: () => a });
      let a = (0, o(2168).A)('Upload', [
        [
          'path',
          { d: 'M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4', key: 'ih7n3h' },
        ],
        ['polyline', { points: '17 8 12 3 7 8', key: 't8dd8p' }],
        ['line', { x1: '12', x2: '12', y1: '3', y2: '15', key: 'widbto' }],
      ]);
    },
    1294: (e) => {
      'use strict';
      e.exports = Math.abs;
    },
    1296: (e) => {
      'use strict';
      e.exports = Math.floor;
    },
    4279: (e) => {
      'use strict';
      e.exports =
        Number.isNaN ||
        function (e) {
          return e != e;
        };
    },
    3688: (e) => {
      'use strict';
      e.exports = Math.max;
    },
    8994: (e) => {
      'use strict';
      e.exports = Math.min;
    },
    3624: (e) => {
      'use strict';
      e.exports = Math.pow;
    },
    2998: (e) => {
      'use strict';
      e.exports = Math.round;
    },
    2075: (e, t, o) => {
      'use strict';
      var a = o(4279);
      e.exports = function (e) {
        return a(e) || 0 === e ? e : e < 0 ? -1 : 1;
      };
    },
    4128: (e, t) => {
      'use strict';
      (t.Headers = self.Headers),
        (t.Request = self.Request),
        (t.Response = self.Response),
        (t.fetch = self.fetch);
    },
    3408: (e) => {
      'use strict';
      e.exports = [
        'Float16Array',
        'Float32Array',
        'Float64Array',
        'Int8Array',
        'Int16Array',
        'Int32Array',
        'Uint8Array',
        'Uint8ClampedArray',
        'Uint16Array',
        'Uint32Array',
        'BigInt64Array',
        'BigUint64Array',
      ];
    },
    8011: (e, t, o) => {
      'use strict';
      o.r(t),
        o.d(t, {
          decode: () => h,
          default: () => b,
          encode: () => g,
          toASCII: () => k,
          toUnicode: () => y,
          ucs2decode: () => p,
          ucs2encode: () => m,
        });
      let a = /^xn--/,
        n = /[^\0-\x7F]/,
        r = /[\x2E\u3002\uFF0E\uFF61]/g,
        i = {
          overflow: 'Overflow: input needs wider integers to process',
          'not-basic': 'Illegal input >= 0x80 (not a basic code point)',
          'invalid-input': 'Invalid input',
        },
        s = Math.floor,
        l = String.fromCharCode;
      function u(e) {
        throw RangeError(i[e]);
      }
      function c(e, t) {
        let o = e.split('@'),
          a = '';
        return (
          o.length > 1 && ((a = o[0] + '@'), (e = o[1])),
          a +
            (function (e, t) {
              let o = [],
                a = e.length;
              for (; a--; ) o[a] = t(e[a]);
              return o;
            })((e = e.replace(r, '.')).split('.'), t).join('.')
        );
      }
      function p(e) {
        let t = [],
          o = 0,
          a = e.length;
        for (; o < a; ) {
          let n = e.charCodeAt(o++);
          if (n >= 55296 && n <= 56319 && o < a) {
            let a = e.charCodeAt(o++);
            (64512 & a) == 56320
              ? t.push(((1023 & n) << 10) + (1023 & a) + 65536)
              : (t.push(n), o--);
          } else t.push(n);
        }
        return t;
      }
      let m = (e) => String.fromCodePoint(...e),
        d = function (e, t) {
          return e + 22 + 75 * (e < 26) - ((0 != t) << 5);
        },
        f = function (e, t, o) {
          let a = 0;
          for (e = o ? s(e / 700) : e >> 1, e += s(e / t); e > 455; a += 36)
            e = s(e / 35);
          return s(a + (36 * e) / (e + 38));
        },
        h = function (e) {
          let t = [],
            o = e.length,
            a = 0,
            n = 128,
            r = 72,
            i = e.lastIndexOf('-');
          i < 0 && (i = 0);
          for (let o = 0; o < i; ++o)
            e.charCodeAt(o) >= 128 && u('not-basic'), t.push(e.charCodeAt(o));
          for (let c = i > 0 ? i + 1 : 0; c < o; ) {
            let i = a;
            for (let t = 1, n = 36; ; n += 36) {
              var l;
              c >= o && u('invalid-input');
              let i =
                (l = e.charCodeAt(c++)) >= 48 && l < 58
                  ? 26 + (l - 48)
                  : l >= 65 && l < 91
                    ? l - 65
                    : l >= 97 && l < 123
                      ? l - 97
                      : 36;
              i >= 36 && u('invalid-input'),
                i > s((0x7fffffff - a) / t) && u('overflow'),
                (a += i * t);
              let p = n <= r ? 1 : n >= r + 26 ? 26 : n - r;
              if (i < p) break;
              let m = 36 - p;
              t > s(0x7fffffff / m) && u('overflow'), (t *= m);
            }
            let p = t.length + 1;
            (r = f(a - i, p, 0 == i)),
              s(a / p) > 0x7fffffff - n && u('overflow'),
              (n += s(a / p)),
              (a %= p),
              t.splice(a++, 0, n);
          }
          return String.fromCodePoint(...t);
        },
        g = function (e) {
          let t = [],
            o = (e = p(e)).length,
            a = 128,
            n = 0,
            r = 72;
          for (let o of e) o < 128 && t.push(l(o));
          let i = t.length,
            c = i;
          for (i && t.push('-'); c < o; ) {
            let o = 0x7fffffff;
            for (let t of e) t >= a && t < o && (o = t);
            let p = c + 1;
            for (let m of (o - a > s((0x7fffffff - n) / p) && u('overflow'),
            (n += (o - a) * p),
            (a = o),
            e))
              if ((m < a && ++n > 0x7fffffff && u('overflow'), m === a)) {
                let e = n;
                for (let o = 36; ; o += 36) {
                  let a = o <= r ? 1 : o >= r + 26 ? 26 : o - r;
                  if (e < a) break;
                  let n = e - a,
                    i = 36 - a;
                  t.push(l(d(a + (n % i), 0))), (e = s(n / i));
                }
                t.push(l(d(e, 0))), (r = f(n, p, c === i)), (n = 0), ++c;
              }
            ++n, ++a;
          }
          return t.join('');
        },
        y = function (e) {
          return c(e, function (e) {
            return a.test(e) ? h(e.slice(4).toLowerCase()) : e;
          });
        },
        k = function (e) {
          return c(e, function (e) {
            return n.test(e) ? 'xn--' + g(e) : e;
          });
        },
        b = {
          version: '2.3.1',
          ucs2: { decode: p, encode: m },
          decode: h,
          encode: g,
          toASCII: k,
          toUnicode: y,
        };
    },
    7704: (e, t) => {
      'use strict';
      var o,
        a = Object.prototype.hasOwnProperty;
      function n(e) {
        try {
          return decodeURIComponent(e.replace(/\+/g, ' '));
        } catch (e) {
          return null;
        }
      }
      function r(e) {
        try {
          return encodeURIComponent(e);
        } catch (e) {
          return null;
        }
      }
      (t.stringify = function (e, t) {
        var n,
          i,
          s = [];
        for (i in ('string' != typeof (t = t || '') && (t = '?'), e))
          if (a.call(e, i)) {
            if (
              (!(n = e[i]) && (null === n || n === o || isNaN(n)) && (n = ''),
              (i = r(i)),
              (n = r(n)),
              null === i || null === n)
            )
              continue;
            s.push(i + '=' + n);
          }
        return s.length ? t + s.join('&') : '';
      }),
        (t.parse = function (e) {
          for (var t, o = /([^=?#&]+)=?([^&]*)/g, a = {}; (t = o.exec(e)); ) {
            var r = n(t[1]),
              i = n(t[2]);
            null === r || null === i || r in a || (a[r] = i);
          }
          return a;
        });
    },
    353: (e) => {
      'use strict';
      e.exports = function (e, t) {
        if (((t = t.split(':')[0]), !(e = +e))) return !1;
        switch (t) {
          case 'http':
          case 'ws':
            return 80 !== e;
          case 'https':
          case 'wss':
            return 443 !== e;
          case 'ftp':
            return 21 !== e;
          case 'gopher':
            return 70 !== e;
          case 'file':
            return !1;
        }
        return 0 !== e;
      };
    },
    7456: (e, t, o) => {
      'use strict';
      var a = o(1963),
        n = o(2698),
        r = a('RegExp.prototype.exec'),
        i = o(3170);
      e.exports = function (e) {
        if (!n(e)) throw new i('`regex` must be a RegExp');
        return function (t) {
          return null !== r(e, t);
        };
      };
    },
    3691: (e) => {
      'use strict';
      var t = { decodeValues: !0, map: !1, silent: !1 };
      function o(e) {
        return 'string' == typeof e && !!e.trim();
      }
      function a(e, a) {
        var n,
          r,
          i,
          s,
          l = e.split(';').filter(o),
          u =
            ((n = l.shift()),
            (r = ''),
            (i = ''),
            (s = n.split('=')).length > 1
              ? ((r = s.shift()), (i = s.join('=')))
              : (i = n),
            { name: r, value: i }),
          c = u.name,
          p = u.value;
        a = a ? Object.assign({}, t, a) : t;
        try {
          p = a.decodeValues ? decodeURIComponent(p) : p;
        } catch (e) {
          console.error(
            "set-cookie-parser encountered an error while decoding a cookie with value '" +
              p +
              "'. Set options.decodeValues to false to disable this feature.",
            e
          );
        }
        var m = { name: c, value: p };
        return (
          l.forEach(function (e) {
            var t = e.split('='),
              o = t.shift().trimLeft().toLowerCase(),
              a = t.join('=');
            'expires' === o
              ? (m.expires = new Date(a))
              : 'max-age' === o
                ? (m.maxAge = parseInt(a, 10))
                : 'secure' === o
                  ? (m.secure = !0)
                  : 'httponly' === o
                    ? (m.httpOnly = !0)
                    : 'samesite' === o
                      ? (m.sameSite = a)
                      : 'partitioned' === o
                        ? (m.partitioned = !0)
                        : (m[o] = a);
          }),
          m
        );
      }
      function n(e, n) {
        if (((n = n ? Object.assign({}, t, n) : t), !e)) return n.map ? {} : [];
        if (e.headers) {
          if ('function' == typeof e.headers.getSetCookie)
            e = e.headers.getSetCookie();
          else if (e.headers['set-cookie']) e = e.headers['set-cookie'];
          else {
            var r =
              e.headers[
                Object.keys(e.headers).find(function (e) {
                  return 'set-cookie' === e.toLowerCase();
                })
              ];
            r ||
              !e.headers.cookie ||
              n.silent ||
              console.warn(
                'Warning: set-cookie-parser appears to have been called on a request object. It is designed to parse Set-Cookie headers from responses, not Cookie headers from requests. Set the option {silent: true} to suppress this warning.'
              ),
              (e = r);
          }
        }
        return (Array.isArray(e) || (e = [e]), n.map)
          ? e.filter(o).reduce(function (e, t) {
              var o = a(t, n);
              return (e[o.name] = o), e;
            }, {})
          : e.filter(o).map(function (e) {
              return a(e, n);
            });
      }
      (e.exports = n),
        (e.exports.parse = n),
        (e.exports.parseString = a),
        (e.exports.splitCookiesString = function (e) {
          if (Array.isArray(e)) return e;
          if ('string' != typeof e) return [];
          var t,
            o,
            a,
            n,
            r,
            i = [],
            s = 0;
          function l() {
            for (; s < e.length && /\s/.test(e.charAt(s)); ) s += 1;
            return s < e.length;
          }
          for (; s < e.length; ) {
            for (t = s, r = !1; l(); )
              if (',' === (o = e.charAt(s))) {
                for (
                  a = s, s += 1, l(), n = s;
                  s < e.length &&
                  '=' !== (o = e.charAt(s)) &&
                  ';' !== o &&
                  ',' !== o;

                )
                  s += 1;
                s < e.length && '=' === e.charAt(s)
                  ? ((r = !0), (s = n), i.push(e.substring(t, a)), (t = s))
                  : (s = a + 1);
              } else s += 1;
            (!r || s >= e.length) && i.push(e.substring(t, e.length));
          }
          return i;
        });
    },
    4597: (e, t, o) => {
      'use strict';
      var a = o(2206),
        n = o(6404),
        r = o(9557)(),
        i = o(7061),
        s = o(3170),
        l = a('%Math.floor%');
      e.exports = function (e, t) {
        if ('function' != typeof e) throw new s('`fn` is not a function');
        if ('number' != typeof t || t < 0 || t > 0xffffffff || l(t) !== t)
          throw new s('`length` must be a positive 32-bit integer');
        var o = arguments.length > 2 && !!arguments[2],
          a = !0,
          u = !0;
        if ('length' in e && i) {
          var c = i(e, 'length');
          c && !c.configurable && (a = !1), c && !c.writable && (u = !1);
        }
        return (
          (a || u || !o) && (r ? n(e, 'length', t, !0, !0) : n(e, 'length', t)),
          e
        );
      };
    },
    1275: (e, t, o) => {
      'use strict';
      let a = o(8011),
        n = o(2045),
        r = o(2515),
        i = o(6566).i,
        s = o(3343).n,
        l = o(4339).z,
        u = o(8318),
        c = o(5611),
        { fromCallback: p } = o(9629),
        { getCustomInspectSymbol: m } = o(9165),
        d = /^[\x21\x23-\x2B\x2D-\x3A\x3C-\x5B\x5D-\x7E]+$/,
        f = /[\x00-\x1F]/,
        h = ['\n', '\r', '\0'],
        g = /[\x20-\x3A\x3C-\x7E]+/,
        y = /[\x09\x20-\x2F\x3B-\x40\x5B-\x60\x7B-\x7E]/,
        k = {
          jan: 0,
          feb: 1,
          mar: 2,
          apr: 3,
          may: 4,
          jun: 5,
          jul: 6,
          aug: 7,
          sep: 8,
          oct: 9,
          nov: 10,
          dec: 11,
        },
        b =
          'Invalid sameSiteContext option for getCookies(); expected one of "strict", "lax", or "none"';
      function w(e) {
        u.validate(u.isNonEmptyString(e), e);
        let t = String(e).toLowerCase();
        return 'none' === t || 'lax' === t || 'strict' === t ? t : null;
      }
      let j = Object.freeze({
          SILENT: 'silent',
          STRICT: 'strict',
          DISABLED: 'unsafe-disabled',
        }),
        v =
          /(?:^(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}$)|(?:^(?:(?:[a-f\d]{1,4}:){7}(?:[a-f\d]{1,4}|:)|(?:[a-f\d]{1,4}:){6}(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|:[a-f\d]{1,4}|:)|(?:[a-f\d]{1,4}:){5}(?::(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[a-f\d]{1,4}){1,2}|:)|(?:[a-f\d]{1,4}:){4}(?:(?::[a-f\d]{1,4}){0,1}:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[a-f\d]{1,4}){1,3}|:)|(?:[a-f\d]{1,4}:){3}(?:(?::[a-f\d]{1,4}){0,2}:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[a-f\d]{1,4}){1,4}|:)|(?:[a-f\d]{1,4}:){2}(?:(?::[a-f\d]{1,4}){0,3}:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[a-f\d]{1,4}){1,5}|:)|(?:[a-f\d]{1,4}:){1}(?:(?::[a-f\d]{1,4}){0,4}:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[a-f\d]{1,4}){1,6}|:)|(?::(?:(?::[a-f\d]{1,4}){0,5}:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[a-f\d]{1,4}){1,7}|:)))$)/,
        z = `
\\[?(?:
(?:[a-fA-F\\d]{1,4}:){7}(?:[a-fA-F\\d]{1,4}|:)|
(?:[a-fA-F\\d]{1,4}:){6}(?:(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}|:[a-fA-F\\d]{1,4}|:)|
(?:[a-fA-F\\d]{1,4}:){5}(?::(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}|(?::[a-fA-F\\d]{1,4}){1,2}|:)|
(?:[a-fA-F\\d]{1,4}:){4}(?:(?::[a-fA-F\\d]{1,4}){0,1}:(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}|(?::[a-fA-F\\d]{1,4}){1,3}|:)|
(?:[a-fA-F\\d]{1,4}:){3}(?:(?::[a-fA-F\\d]{1,4}){0,2}:(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}|(?::[a-fA-F\\d]{1,4}){1,4}|:)|
(?:[a-fA-F\\d]{1,4}:){2}(?:(?::[a-fA-F\\d]{1,4}){0,3}:(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}|(?::[a-fA-F\\d]{1,4}){1,5}|:)|
(?:[a-fA-F\\d]{1,4}:){1}(?:(?::[a-fA-F\\d]{1,4}){0,4}:(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}|(?::[a-fA-F\\d]{1,4}){1,6}|:)|
(?::(?:(?::[a-fA-F\\d]{1,4}){0,5}:(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}|(?::[a-fA-F\\d]{1,4}){1,7}|:))
)(?:%[0-9a-zA-Z]{1,})?\\]?
`
          .replace(/\s*\/\/.*$/gm, '')
          .replace(/\n/g, '')
          .trim(),
        x = RegExp(`^${z}$`);
      function E(e, t, o, a) {
        let n = 0;
        for (; n < e.length; ) {
          let t = e.charCodeAt(n);
          if (t <= 47 || t >= 58) break;
          n++;
        }
        return n < t || n > o || (!a && n != e.length)
          ? null
          : parseInt(e.substr(0, n), 10);
      }
      function A(e) {
        if (!e) return;
        let t = e.split(y);
        if (!t) return;
        let o = null,
          a = null,
          n = null,
          r = null,
          i = null,
          s = null;
        for (let e = 0; e < t.length; e++) {
          let l;
          let u = t[e].trim();
          if (u.length) {
            if (
              null === n &&
              (l = (function (e) {
                let t = e.split(':'),
                  o = [0, 0, 0];
                if (3 !== t.length) return null;
                for (let e = 0; e < 3; e++) {
                  let a = 2 == e,
                    n = E(t[e], 1, 2, a);
                  if (null === n) return null;
                  o[e] = n;
                }
                return o;
              })(u))
            ) {
              (o = l[0]), (a = l[1]), (n = l[2]);
              continue;
            }
            if (null === r && null !== (l = E(u, 1, 2, !0))) {
              r = l;
              continue;
            }
            if (
              null === i &&
              null !==
                (l = (function (e) {
                  let t = k[(e = String(e).substr(0, 3).toLowerCase())];
                  return t >= 0 ? t : null;
                })(u))
            ) {
              i = l;
              continue;
            }
            null === s &&
              null !== (l = E(u, 2, 4, !0)) &&
              ((s = l) >= 70 && s <= 99
                ? (s += 1900)
                : s >= 0 && s <= 69 && (s += 2e3));
          }
        }
        if (
          null !== r &&
          null !== i &&
          null !== s &&
          null !== n &&
          !(r < 1) &&
          !(r > 31) &&
          !(s < 1601) &&
          !(o > 23) &&
          !(a > 59) &&
          !(n > 59)
        )
          return new Date(Date.UTC(s, i, r, o, a, n));
      }
      function S(e) {
        return u.validate(u.isDate(e), e), e.toUTCString();
      }
      function O(e) {
        return null == e
          ? null
          : ((e = e.trim().replace(/^\./, '')),
            x.test(e) && (e = e.replace('[', '').replace(']', '')),
            a && /[^\u0001-\u007f]/.test(e) && (e = a.toASCII(e)),
            e.toLowerCase());
      }
      function C(e, t, o) {
        if (null == e || null == t) return null;
        if ((!1 !== o && ((e = O(e)), (t = O(t))), e == t)) return !0;
        let a = e.lastIndexOf(t);
        return !(
          a <= 0 ||
          e.length !== t.length + a ||
          '.' !== e.substr(a - 1, 1) ||
          v.test(e)
        );
      }
      function I(e) {
        if (!e || '/' !== e.substr(0, 1)) return '/';
        if ('/' === e) return e;
        let t = e.lastIndexOf('/');
        return 0 === t ? '/' : e.slice(0, t);
      }
      function P(e, t) {
        if (
          ((t && 'object' == typeof t) || (t = {}),
          u.isEmptyString(e) || !u.isString(e))
        )
          return null;
        let o = (e = e.trim()).indexOf(';'),
          a = (function (e, t) {
            let o, a;
            (e = (function (e) {
              if (u.isEmptyString(e)) return e;
              for (let t = 0; t < h.length; t++) {
                let o = e.indexOf(h[t]);
                -1 !== o && (e = e.substr(0, o));
              }
              return e;
            })(e)),
              u.validate(u.isString(e), e);
            let n = e.indexOf('=');
            if (t) 0 === n && (n = (e = e.substr(1)).indexOf('='));
            else if (n <= 0) return;
            if (
              (n <= 0
                ? ((o = ''), (a = e.trim()))
                : ((o = e.substr(0, n).trim()), (a = e.substr(n + 1).trim())),
              f.test(o) || f.test(a))
            )
              return;
            let r = new D();
            return (r.key = o), (r.value = a), r;
          })(-1 === o ? e : e.substr(0, o), !!t.loose);
        if (!a) return;
        if (-1 === o) return a;
        let n = e.slice(o + 1).trim();
        if (0 === n.length) return a;
        let r = n.split(';');
        for (; r.length; ) {
          let e, t;
          let o = r.shift().trim();
          if (0 === o.length) continue;
          let n = o.indexOf('=');
          switch (
            (-1 === n
              ? ((e = o), (t = null))
              : ((e = o.substr(0, n)), (t = o.substr(n + 1))),
            (e = e.trim().toLowerCase()),
            t && (t = t.trim()),
            e)
          ) {
            case 'expires':
              if (t) {
                let e = A(t);
                e && (a.expires = e);
              }
              break;
            case 'max-age':
              if (t && /^-?[0-9]+$/.test(t)) {
                let e = parseInt(t, 10);
                a.setMaxAge(e);
              }
              break;
            case 'domain':
              if (t) {
                let e = t.trim().replace(/^\./, '');
                e && (a.domain = e.toLowerCase());
              }
              break;
            case 'path':
              a.path = t && '/' === t[0] ? t : null;
              break;
            case 'secure':
              a.secure = !0;
              break;
            case 'httponly':
              a.httpOnly = !0;
              break;
            case 'samesite':
              switch (t ? t.toLowerCase() : '') {
                case 'strict':
                  a.sameSite = 'strict';
                  break;
                case 'lax':
                  a.sameSite = 'lax';
                  break;
                case 'none':
                  a.sameSite = 'none';
                  break;
                default:
                  a.sameSite = void 0;
              }
              break;
            default:
              (a.extensions = a.extensions || []), a.extensions.push(o);
          }
        }
        return a;
      }
      function B(e) {
        let t;
        try {
          t = JSON.parse(e);
        } catch (e) {
          return e;
        }
        return t;
      }
      function R(e) {
        let t;
        if (!e || u.isEmptyString(e)) return null;
        if ('string' == typeof e) {
          if ((t = B(e)) instanceof Error) return null;
        } else t = e;
        let o = new D();
        for (let e = 0; e < D.serializableProperties.length; e++) {
          let a = D.serializableProperties[e];
          void 0 !== t[a] &&
            t[a] !== N[a] &&
            ('expires' === a || 'creation' === a || 'lastAccessed' === a
              ? null === t[a]
                ? (o[a] = null)
                : (o[a] = 'Infinity' == t[a] ? 'Infinity' : new Date(t[a]))
              : (o[a] = t[a]));
        }
        return o;
      }
      function T(e, t) {
        u.validate(u.isObject(e), e), u.validate(u.isObject(t), t);
        let o = 0,
          a = e.path ? e.path.length : 0;
        return 0 != (o = (t.path ? t.path.length : 0) - a)
          ? o
          : 0 !=
              (o =
                (e.creation ? e.creation.getTime() : 2147483647e3) -
                (t.creation ? t.creation.getTime() : 2147483647e3))
            ? o
            : (o = e.creationIndex - t.creationIndex);
      }
      function L(e) {
        if (e instanceof Object) return e;
        try {
          e = decodeURI(e);
        } catch (e) {}
        return n(e);
      }
      let N = {
        key: '',
        value: '',
        expires: 'Infinity',
        maxAge: null,
        domain: null,
        path: null,
        secure: !1,
        httpOnly: !1,
        extensions: null,
        hostOnly: null,
        pathIsDefault: null,
        creation: null,
        lastAccessed: null,
        sameSite: void 0,
      };
      class D {
        constructor(e = {}) {
          let t = m();
          t && (this[t] = this.inspect),
            Object.assign(this, N, e),
            (this.creation = this.creation || new Date()),
            Object.defineProperty(this, 'creationIndex', {
              configurable: !1,
              enumerable: !1,
              writable: !0,
              value: ++D.cookiesCreated,
            });
        }
        inspect() {
          let e = Date.now(),
            t = null != this.hostOnly ? this.hostOnly : '?',
            o = this.creation ? `${e - this.creation.getTime()}ms` : '?',
            a = this.lastAccessed
              ? `${e - this.lastAccessed.getTime()}ms`
              : '?';
          return `Cookie="${this.toString()}; hostOnly=${t}; aAge=${a}; cAge=${o}"`;
        }
        toJSON() {
          let e = {};
          for (let t of D.serializableProperties)
            this[t] !== N[t] &&
              ('expires' === t || 'creation' === t || 'lastAccessed' === t
                ? null === this[t]
                  ? (e[t] = null)
                  : (e[t] =
                      'Infinity' == this[t]
                        ? 'Infinity'
                        : this[t].toISOString())
                : 'maxAge' === t
                  ? null !== this[t] &&
                    (e[t] =
                      this[t] == 1 / 0 || this[t] == -1 / 0
                        ? this[t].toString()
                        : this[t])
                  : this[t] !== N[t] && (e[t] = this[t]));
          return e;
        }
        clone() {
          return R(this.toJSON());
        }
        validate() {
          if (
            !d.test(this.value) ||
            (this.expires != 1 / 0 &&
              !(this.expires instanceof Date) &&
              !A(this.expires)) ||
            (null != this.maxAge && this.maxAge <= 0) ||
            (null != this.path && !g.test(this.path))
          )
            return !1;
          let e = this.cdomain();
          return !(e && (e.match(/\.$/) || null == r.getPublicSuffix(e)));
        }
        setExpires(e) {
          e instanceof Date
            ? (this.expires = e)
            : (this.expires = A(e) || 'Infinity');
        }
        setMaxAge(e) {
          e === 1 / 0 || e === -1 / 0
            ? (this.maxAge = e.toString())
            : (this.maxAge = e);
        }
        cookieString() {
          let e = this.value;
          return (null == e && (e = ''), '' === this.key)
            ? e
            : `${this.key}=${e}`;
        }
        toString() {
          let e = this.cookieString();
          if (
            (this.expires != 1 / 0 &&
              (this.expires instanceof Date
                ? (e += `; Expires=${S(this.expires)}`)
                : (e += `; Expires=${this.expires}`)),
            null != this.maxAge &&
              this.maxAge != 1 / 0 &&
              (e += `; Max-Age=${this.maxAge}`),
            this.domain && !this.hostOnly && (e += `; Domain=${this.domain}`),
            this.path && (e += `; Path=${this.path}`),
            this.secure && (e += '; Secure'),
            this.httpOnly && (e += '; HttpOnly'),
            this.sameSite && 'none' !== this.sameSite)
          ) {
            let t = D.sameSiteCanonical[this.sameSite.toLowerCase()];
            e += `; SameSite=${t || this.sameSite}`;
          }
          return (
            this.extensions &&
              this.extensions.forEach((t) => {
                e += `; ${t}`;
              }),
            e
          );
        }
        TTL(e) {
          if (null != this.maxAge)
            return this.maxAge <= 0 ? 0 : 1e3 * this.maxAge;
          let t = this.expires;
          return t != 1 / 0
            ? (t instanceof Date || (t = A(t) || 1 / 0), t == 1 / 0)
              ? 1 / 0
              : t.getTime() - (e || Date.now())
            : 1 / 0;
        }
        expiryTime(e) {
          if (null != this.maxAge) {
            let t = e || this.creation || new Date(),
              o = this.maxAge <= 0 ? -1 / 0 : 1e3 * this.maxAge;
            return t.getTime() + o;
          }
          return this.expires == 1 / 0 ? 1 / 0 : this.expires.getTime();
        }
        expiryDate(e) {
          let t = this.expiryTime(e);
          return new Date(t == 1 / 0 ? 2147483647e3 : t == -1 / 0 ? 0 : t);
        }
        isPersistent() {
          return null != this.maxAge || this.expires != 1 / 0;
        }
        canonicalizedDomain() {
          return null == this.domain ? null : O(this.domain);
        }
        cdomain() {
          return this.canonicalizedDomain();
        }
      }
      function U(e) {
        if (null != e) {
          let t = e.toLowerCase();
          switch (t) {
            case j.STRICT:
            case j.SILENT:
            case j.DISABLED:
              return t;
          }
        }
        return j.SILENT;
      }
      (D.cookiesCreated = 0),
        (D.parse = P),
        (D.fromJSON = R),
        (D.serializableProperties = Object.keys(N)),
        (D.sameSiteLevel = { strict: 3, lax: 2, none: 1 }),
        (D.sameSiteCanonical = { strict: 'Strict', lax: 'Lax' });
      class F {
        constructor(e, t = { rejectPublicSuffixes: !0 }) {
          'boolean' == typeof t && (t = { rejectPublicSuffixes: t }),
            u.validate(u.isObject(t), t),
            (this.rejectPublicSuffixes = t.rejectPublicSuffixes),
            (this.enableLooseMode = !!t.looseMode),
            (this.allowSpecialUseDomain =
              'boolean' != typeof t.allowSpecialUseDomain ||
              t.allowSpecialUseDomain),
            (this.store = e || new s()),
            (this.prefixSecurity = U(t.prefixSecurity)),
            (this._cloneSync = M('clone')),
            (this._importCookiesSync = M('_importCookies')),
            (this.getCookiesSync = M('getCookies')),
            (this.getCookieStringSync = M('getCookieString')),
            (this.getSetCookieStringsSync = M('getSetCookieStrings')),
            (this.removeAllCookiesSync = M('removeAllCookies')),
            (this.setCookieSync = M('setCookie')),
            (this.serializeSync = M('serialize'));
        }
        setCookie(e, t, o, a) {
          let n;
          if ((u.validate(u.isUrlStringOrObject(t), a, o), u.isFunction(t)))
            return (a = t)(Error('No URL was specified'));
          let i = L(t);
          if (
            (u.isFunction(o) && ((a = o), (o = {})),
            u.validate(u.isFunction(a), a),
            !u.isNonEmptyString(e) &&
              !u.isObject(e) &&
              e instanceof String &&
              0 == e.length)
          )
            return a(null);
          let s = O(i.hostname),
            l = o.loose || this.enableLooseMode,
            c = null;
          if (o.sameSiteContext && !(c = w(o.sameSiteContext)))
            return a(Error(b));
          if ('string' == typeof e || e instanceof String) {
            if (!(e = D.parse(e, { loose: l })))
              return (
                (n = Error('Cookie failed to parse')),
                a(o.ignoreError ? null : n)
              );
          } else if (!(e instanceof D))
            return (
              (n = Error(
                'First argument to setCookie must be a Cookie object or string'
              )),
              a(o.ignoreError ? null : n)
            );
          let p = o.now || new Date();
          if (
            this.rejectPublicSuffixes &&
            e.domain &&
            null ==
              r.getPublicSuffix(e.cdomain(), {
                allowSpecialUseDomain: this.allowSpecialUseDomain,
                ignoreError: o.ignoreError,
              }) &&
            !x.test(e.domain)
          )
            return (
              (n = Error('Cookie has domain set to a public suffix')),
              a(o.ignoreError ? null : n)
            );
          if (e.domain) {
            if (!C(s, e.cdomain(), !1))
              return (
                (n = Error(
                  `Cookie not in this host's domain. Cookie:${e.cdomain()} Request:${s}`
                )),
                a(o.ignoreError ? null : n)
              );
            null == e.hostOnly && (e.hostOnly = !1);
          } else (e.hostOnly = !0), (e.domain = s);
          if (
            ((e.path && '/' === e.path[0]) ||
              ((e.path = I(i.pathname)), (e.pathIsDefault = !0)),
            !1 === o.http && e.httpOnly)
          )
            return (
              (n = Error("Cookie is HttpOnly and this isn't an HTTP API")),
              a(o.ignoreError ? null : n)
            );
          if (
            'none' !== e.sameSite &&
            void 0 !== e.sameSite &&
            c &&
            'none' === c
          )
            return (
              (n = Error(
                'Cookie is SameSite but this is a cross-origin request'
              )),
              a(o.ignoreError ? null : n)
            );
          let m = this.prefixSecurity === j.SILENT;
          if (this.prefixSecurity !== j.DISABLED) {
            var d, f;
            let t,
              n = !1;
            if (
              (((d = e),
              u.validate(u.isObject(d), d),
              !d.key.startsWith('__Secure-') || d.secure)
                ? ((f = e),
                  u.validate(u.isObject(f)),
                  !f.key.startsWith('__Host-') ||
                    (f.secure &&
                      f.hostOnly &&
                      null != f.path &&
                      '/' === f.path) ||
                    ((n = !0),
                    (t =
                      "Cookie has __Host prefix but either Secure or HostOnly attribute is not set or Path is not '/'")))
                : ((n = !0),
                  (t =
                    'Cookie has __Secure prefix but Secure attribute is not set')),
              n)
            )
              return a(o.ignoreError || m ? null : Error(t));
          }
          let h = this.store;
          h.updateCookie ||
            (h.updateCookie = function (e, t, o) {
              this.putCookie(t, o);
            }),
            h.findCookie(e.domain, e.path, e.key, function (t, n) {
              if (t) return a(t);
              let r = function (t) {
                if (t) return a(t);
                a(null, e);
              };
              if (n) {
                if (!1 === o.http && n.httpOnly)
                  return (
                    (t = Error(
                      "old Cookie is HttpOnly and this isn't an HTTP API"
                    )),
                    a(o.ignoreError ? null : t)
                  );
                (e.creation = n.creation),
                  (e.creationIndex = n.creationIndex),
                  (e.lastAccessed = p),
                  h.updateCookie(n, e, r);
              } else (e.creation = e.lastAccessed = p), h.putCookie(e, r);
            });
        }
        getCookies(e, t, o) {
          u.validate(u.isUrlStringOrObject(e), o, e);
          let a = L(e);
          u.isFunction(t) && ((o = t), (t = {})),
            u.validate(u.isObject(t), o, t),
            u.validate(u.isFunction(o), o);
          let n = O(a.hostname),
            r = a.pathname || '/',
            i = t.secure;
          null == i &&
            a.protocol &&
            ('https:' == a.protocol || 'wss:' == a.protocol) &&
            (i = !0);
          let s = 0;
          if (t.sameSiteContext) {
            let e = w(t.sameSiteContext);
            if (!(s = D.sameSiteLevel[e])) return o(Error(b));
          }
          let c = t.http;
          null == c && (c = !0);
          let p = t.now || Date.now(),
            m = !1 !== t.expire,
            d = !!t.allPaths,
            f = this.store;
          function h(e) {
            if (e.hostOnly) {
              if (e.domain != n) return !1;
            } else if (!C(n, e.domain, !1)) return !1;
            return (
              (!!d || !!l(r, e.path)) &&
              (!e.secure || !!i) &&
              (!e.httpOnly || !!c) &&
              (!s || !(D.sameSiteLevel[e.sameSite || 'none'] > s)) &&
              (!(m && e.expiryTime() <= p) ||
                (f.removeCookie(e.domain, e.path, e.key, () => {}), !1))
            );
          }
          f.findCookies(n, d ? null : r, this.allowSpecialUseDomain, (e, a) => {
            if (e) return o(e);
            (a = a.filter(h)), !1 !== t.sort && (a = a.sort(T));
            let n = new Date();
            for (let e of a) e.lastAccessed = n;
            o(null, a);
          });
        }
        getCookieString(...e) {
          let t = e.pop();
          u.validate(u.isFunction(t), t),
            e.push(function (e, o) {
              e
                ? t(e)
                : t(
                    null,
                    o
                      .sort(T)
                      .map((e) => e.cookieString())
                      .join('; ')
                  );
            }),
            this.getCookies.apply(this, e);
        }
        getSetCookieStrings(...e) {
          let t = e.pop();
          u.validate(u.isFunction(t), t),
            e.push(function (e, o) {
              e
                ? t(e)
                : t(
                    null,
                    o.map((e) => e.toString())
                  );
            }),
            this.getCookies.apply(this, e);
        }
        serialize(e) {
          u.validate(u.isFunction(e), e);
          let t = this.store.constructor.name;
          u.isObject(t) && (t = null);
          let o = {
            version: `tough-cookie@${c}`,
            storeType: t,
            rejectPublicSuffixes: !!this.rejectPublicSuffixes,
            enableLooseMode: !!this.enableLooseMode,
            allowSpecialUseDomain: !!this.allowSpecialUseDomain,
            prefixSecurity: U(this.prefixSecurity),
            cookies: [],
          };
          if (
            !(
              this.store.getAllCookies &&
              'function' == typeof this.store.getAllCookies
            )
          )
            return e(
              Error(
                'store does not support getAllCookies and cannot be serialized'
              )
            );
          this.store.getAllCookies((t, a) =>
            t
              ? e(t)
              : ((o.cookies = a.map(
                  (e) => (
                    (e = e instanceof D ? e.toJSON() : e),
                    delete e.creationIndex,
                    e
                  )
                )),
                e(null, o))
          );
        }
        toJSON() {
          return this.serializeSync();
        }
        _importCookies(e, t) {
          let o = e.cookies;
          if (!o || !Array.isArray(o))
            return t(Error('serialized jar has no cookies array'));
          o = o.slice();
          let a = (e) => {
            let n;
            if (e) return t(e);
            if (!o.length) return t(e, this);
            try {
              n = R(o.shift());
            } catch (e) {
              return t(e);
            }
            if (null === n) return a(null);
            this.store.putCookie(n, a);
          };
          a();
        }
        clone(e, t) {
          1 == arguments.length && ((t = e), (e = null)),
            this.serialize((o, a) => {
              if (o) return t(o);
              F.deserialize(a, e, t);
            });
        }
        cloneSync(e) {
          if (0 == arguments.length) return this._cloneSync();
          if (!e.synchronous)
            throw Error(
              'CookieJar clone destination store is not synchronous; use async API instead.'
            );
          return this._cloneSync(e);
        }
        removeAllCookies(e) {
          u.validate(u.isFunction(e), e);
          let t = this.store;
          if (
            'function' == typeof t.removeAllCookies &&
            t.removeAllCookies !== i.prototype.removeAllCookies
          )
            return t.removeAllCookies(e);
          t.getAllCookies((o, a) => {
            if (o) return e(o);
            if (0 === a.length) return e(null);
            let n = 0,
              r = [];
            function i(t) {
              if ((t && r.push(t), ++n === a.length))
                return e(r.length ? r[0] : null);
            }
            a.forEach((e) => {
              t.removeCookie(e.domain, e.path, e.key, i);
            });
          });
        }
        static deserialize(e, t, o) {
          let a;
          if (
            (3 != arguments.length && ((o = t), (t = null)),
            u.validate(u.isFunction(o), o),
            'string' == typeof e)
          ) {
            if ((a = B(e)) instanceof Error) return o(a);
          } else a = e;
          let n = new F(t, {
            rejectPublicSuffixes: a.rejectPublicSuffixes,
            looseMode: a.enableLooseMode,
            allowSpecialUseDomain: a.allowSpecialUseDomain,
            prefixSecurity: a.prefixSecurity,
          });
          n._importCookies(a, (e) => {
            if (e) return o(e);
            o(null, n);
          });
        }
        static deserializeSync(e, t) {
          let o = 'string' == typeof e ? JSON.parse(e) : e,
            a = new F(t, {
              rejectPublicSuffixes: o.rejectPublicSuffixes,
              looseMode: o.enableLooseMode,
            });
          if (!a.store.synchronous)
            throw Error(
              'CookieJar store is not synchronous; use async API instead.'
            );
          return a._importCookiesSync(o), a;
        }
      }
      function M(e) {
        return function (...t) {
          let o, a;
          if (!this.store.synchronous)
            throw Error(
              'CookieJar store is not synchronous; use async API instead.'
            );
          if (
            (this[e](...t, (e, t) => {
              (o = e), (a = t);
            }),
            o)
          )
            throw o;
          return a;
        };
      }
      (F.fromJSON = F.deserializeSync),
        [
          '_importCookies',
          'clone',
          'getCookies',
          'getCookieString',
          'getSetCookieStrings',
          'removeAllCookies',
          'serialize',
          'setCookie',
        ].forEach((e) => {
          F.prototype[e] = p(F.prototype[e]);
        }),
        (F.deserialize = p(F.deserialize)),
        (t.version = c),
        (t.CookieJar = F),
        (t.Cookie = D),
        (t.Store = i),
        (t.MemoryCookieStore = s),
        (t.parseDate = A),
        (t.formatDate = S),
        (t.parse = P),
        (t.fromJSON = R),
        (t.domainMatch = C),
        (t.defaultPath = I),
        (t.pathMatch = l),
        (t.getPublicSuffix = r.getPublicSuffix),
        (t.cookieCompare = T),
        (t.permuteDomain = o(1193).permuteDomain),
        (t.permutePath = function (e) {
          if ((u.validate(u.isString(e)), '/' === e)) return ['/'];
          let t = [e];
          for (; e.length > 1; ) {
            let o = e.lastIndexOf('/');
            if (0 === o) break;
            (e = e.substr(0, o)), t.push(e);
          }
          return t.push('/'), t;
        }),
        (t.canonicalDomain = O),
        (t.PrefixSecurityEnum = j),
        (t.ParameterError = u.ParameterError);
    },
    3343: (e, t, o) => {
      'use strict';
      let { fromCallback: a } = o(9629),
        n = o(6566).i,
        r = o(1193).permuteDomain,
        i = o(4339).z,
        { getCustomInspectSymbol: s, getUtilInspect: l } = o(9165);
      class u extends n {
        constructor() {
          super(), (this.synchronous = !0), (this.idx = Object.create(null));
          let e = s();
          e && (this[e] = this.inspect);
        }
        inspect() {
          let e = { inspect: l(c) };
          return `{ idx: ${e.inspect(this.idx, !1, 2)} }`;
        }
        findCookie(e, t, o, a) {
          return this.idx[e] && this.idx[e][t]
            ? a(null, this.idx[e][t][o] || null)
            : a(null, void 0);
        }
        findCookies(e, t, o, a) {
          let n;
          let s = [];
          if (('function' == typeof o && ((a = o), (o = !0)), !e))
            return a(null, []);
          n = t
            ? function (e) {
                Object.keys(e).forEach((o) => {
                  if (i(t, o)) {
                    let t = e[o];
                    for (let e in t) s.push(t[e]);
                  }
                });
              }
            : function (e) {
                for (let t in e) {
                  let o = e[t];
                  for (let e in o) s.push(o[e]);
                }
              };
          let l = r(e, o) || [e],
            u = this.idx;
          l.forEach((e) => {
            let t = u[e];
            t && n(t);
          }),
            a(null, s);
        }
        putCookie(e, t) {
          this.idx[e.domain] || (this.idx[e.domain] = Object.create(null)),
            this.idx[e.domain][e.path] ||
              (this.idx[e.domain][e.path] = Object.create(null)),
            (this.idx[e.domain][e.path][e.key] = e),
            t(null);
        }
        updateCookie(e, t, o) {
          this.putCookie(t, o);
        }
        removeCookie(e, t, o, a) {
          this.idx[e] &&
            this.idx[e][t] &&
            this.idx[e][t][o] &&
            delete this.idx[e][t][o],
            a(null);
        }
        removeCookies(e, t, o) {
          return (
            this.idx[e] && (t ? delete this.idx[e][t] : delete this.idx[e]),
            o(null)
          );
        }
        removeAllCookies(e) {
          return (this.idx = Object.create(null)), e(null);
        }
        getAllCookies(e) {
          let t = [],
            o = this.idx;
          Object.keys(o).forEach((e) => {
            Object.keys(o[e]).forEach((a) => {
              Object.keys(o[e][a]).forEach((n) => {
                null !== n && t.push(o[e][a][n]);
              });
            });
          }),
            t.sort((e, t) => (e.creationIndex || 0) - (t.creationIndex || 0)),
            e(null, t);
        }
      }
      function c(e) {
        let t = Object.keys(e);
        if (0 === t.length) return '[Object: null prototype] {}';
        let o = '[Object: null prototype] {\n';
        return (
          Object.keys(e).forEach((a, n) => {
            var r;
            let i;
            (o +=
              ((r = e[a]),
              (i = `  '${a}': [Object: null prototype] {
`),
              Object.keys(r).forEach((e, t, o) => {
                (i += (function (e, t) {
                  let o = '    ',
                    a = `${o}'${e}': [Object: null prototype] {
`;
                  return (
                    Object.keys(t).forEach((e, o, n) => {
                      let r = t[e];
                      (a += `      ${e}: ${r.inspect()}`),
                        o < n.length - 1 && (a += ','),
                        (a += '\n');
                    }),
                    (a += `${o}}`)
                  );
                })(e, r[e])),
                  t < o.length - 1 && (i += ','),
                  (i += '\n');
              }),
              (i += '  }'))),
              n < t.length - 1 && (o += ','),
              (o += '\n');
          }),
          (o += '}')
        );
      }
      [
        'findCookie',
        'findCookies',
        'putCookie',
        'updateCookie',
        'removeCookie',
        'removeCookies',
        'removeAllCookies',
        'getAllCookies',
      ].forEach((e) => {
        u.prototype[e] = a(u.prototype[e]);
      }),
        (t.n = u);
    },
    4339: (e, t) => {
      'use strict';
      t.z = function (e, t) {
        return (
          t === e ||
          (0 === e.indexOf(t) &&
            ('/' === t.substr(-1) || '/' === e.substr(t.length, 1)))
        );
      };
    },
    1193: (e, t, o) => {
      'use strict';
      let a = o(2515);
      t.permuteDomain = function (e, t) {
        let o = a.getPublicSuffix(e, { allowSpecialUseDomain: t });
        if (!o) return null;
        if (o == e) return [e];
        '.' == e.slice(-1) && (e = e.slice(0, -1));
        let n = e
            .slice(0, -(o.length + 1))
            .split('.')
            .reverse(),
          r = o,
          i = [r];
        for (; n.length; ) i.push((r = `${n.shift()}.${r}`));
        return i;
      };
    },
    2515: (e, t, o) => {
      'use strict';
      let a = o(6904),
        n = ['local', 'example', 'invalid', 'localhost', 'test'],
        r = ['localhost', 'invalid'];
      t.getPublicSuffix = function (e, t = {}) {
        let o = e.split('.'),
          i = o[o.length - 1],
          s = !!t.allowSpecialUseDomain,
          l = !!t.ignoreError;
        if (s && n.includes(i)) {
          if (o.length > 1) {
            let e = o[o.length - 2];
            return `${e}.${i}`;
          }
          if (r.includes(i)) return `${i}`;
        }
        if (!l && n.includes(i))
          throw Error(
            `Cookie has domain set to the public suffix "${i}" which is a special use domain. To allow this, configure your CookieJar with {allowSpecialUseDomain:true, rejectPublicSuffixes: false}.`
          );
        return a.get(e);
      };
    },
    6566: (e, t) => {
      'use strict';
      class o {
        constructor() {
          this.synchronous = !1;
        }
        findCookie(e, t, o, a) {
          throw Error('findCookie is not implemented');
        }
        findCookies(e, t, o, a) {
          throw Error('findCookies is not implemented');
        }
        putCookie(e, t) {
          throw Error('putCookie is not implemented');
        }
        updateCookie(e, t, o) {
          throw Error('updateCookie is not implemented');
        }
        removeCookie(e, t, o, a) {
          throw Error('removeCookie is not implemented');
        }
        removeCookies(e, t, o) {
          throw Error('removeCookies is not implemented');
        }
        removeAllCookies(e) {
          throw Error('removeAllCookies is not implemented');
        }
        getAllCookies(e) {
          throw Error(
            'getAllCookies is not implemented (therefore jar cannot be serialized)'
          );
        }
      }
      t.i = o;
    },
    9165: (e, t, o) => {
      function a() {
        try {
          return o(5078);
        } catch (e) {
          return null;
        }
      }
      (t.getUtilInspect = function (e, t = {}) {
        let o = (t.requireUtil || a)();
        return function (t, a, n) {
          return o ? o.inspect(t, a, n) : e(t);
        };
      }),
        (t.getCustomInspectSymbol = function (e = {}) {
          return (
            (
              e.lookupCustomInspectSymbol ||
              function () {
                return Symbol.for('nodejs.util.inspect.custom');
              }
            )() ||
            (function (e) {
              let t = (e.requireUtil || a)();
              return t ? t.inspect.custom : null;
            })(e)
          );
        });
    },
    8318: (e, t) => {
      'use strict';
      let o = Object.prototype.toString;
      function a(e) {
        return 'function' == typeof e;
      }
      function n(e) {
        return r(e) && '' !== e;
      }
      function r(e) {
        return 'string' == typeof e || e instanceof String;
      }
      function i(e) {
        return '[object Object]' === o.call(e);
      }
      function s(e, t) {
        try {
          return e instanceof t;
        } catch (e) {
          return !1;
        }
      }
      class l extends Error {
        constructor(...e) {
          super(...e);
        }
      }
      (t.ParameterError = l),
        (t.isFunction = a),
        (t.isNonEmptyString = n),
        (t.isDate = function (e) {
          var t;
          return (
            s(e, Date) && 'number' == typeof (t = e.getTime()) && t % 1 == 0
          );
        }),
        (t.isEmptyString = function (e) {
          return '' === e || (e instanceof String && '' === e.toString());
        }),
        (t.isString = r),
        (t.isObject = i),
        (t.isUrlStringOrObject = function (e) {
          return (
            n(e) ||
            (i(e) && 'hostname' in e && 'pathname' in e && 'protocol' in e) ||
            s(e, URL)
          );
        }),
        (t.validate = function (e, t, o) {
          if (
            (a(t) || ((o = t), (t = null)),
            i(o) || (o = { Error: 'Failed Check' }),
            !e)
          ) {
            if (t) t(new l(o));
            else throw new l(o);
          }
        });
    },
    5611: (e) => {
      e.exports = '4.1.4';
    },
    4649: (e, t, o) => {
      'use strict';
      o.d(t, { c_: () => z });
      let a = (e, t, o = []) => {
          let a = Object.getOwnPropertyDescriptors(t);
          for (let e of o) delete a[e];
          Object.defineProperties(e, a);
        },
        n = (e, t = [e]) => {
          let o = Object.getPrototypeOf(e);
          return null === o ? t : n(o, [...t, o]);
        },
        r = (...e) => {
          let t;
          if (0 === e.length) return;
          let o = e.map((e) => n(e));
          for (; o.every((e) => e.length > 0); ) {
            let e = o.map((e) => e.pop()),
              a = e[0];
            if (e.every((e) => e === a)) t = a;
            else break;
          }
          return t;
        },
        i = (e, t, o = []) => {
          var i;
          let s = null !== (i = r(...e)) && void 0 !== i ? i : Object.prototype,
            l = Object.create(s),
            u = n(s);
          for (let t of e) {
            let e = n(t);
            for (let t = e.length - 1; t >= 0; t--) {
              let n = e[t];
              -1 === u.indexOf(n) &&
                (a(l, n, ['constructor', ...o]), u.push(n));
            }
          }
          return (l.constructor = t), l;
        },
        s = (e) => e.filter((t, o) => e.indexOf(t) == o),
        l = (e, t) => {
          let o = t.map((e) => n(e)),
            a = 0,
            r = !0;
          for (; r; ) {
            r = !1;
            for (let n = t.length - 1; n >= 0; n--) {
              let t = o[n][a];
              if (
                null != t &&
                ((r = !0), void 0 != Object.getOwnPropertyDescriptor(t, e))
              )
                return o[n][0];
            }
            a++;
          }
        },
        u = (e, t = Object.prototype) =>
          new Proxy(
            {},
            {
              getPrototypeOf: () => t,
              setPrototypeOf() {
                throw Error(
                  'Cannot set prototype of Proxies created by ts-mixer'
                );
              },
              getOwnPropertyDescriptor: (t, o) =>
                Object.getOwnPropertyDescriptor(l(o, e) || {}, o),
              defineProperty() {
                throw Error(
                  'Cannot define new properties on Proxies created by ts-mixer'
                );
              },
              has: (o, a) => void 0 !== l(a, e) || void 0 !== t[a],
              get: (o, a) => (l(a, e) || t)[a],
              set(t, o, a) {
                let n = l(o, e);
                if (void 0 === n)
                  throw Error(
                    'Cannot set new properties on Proxies created by ts-mixer'
                  );
                return (n[o] = a), !0;
              },
              deleteProperty() {
                throw Error(
                  'Cannot delete properties on Proxies created by ts-mixer'
                );
              },
              ownKeys: () =>
                e
                  .map(Object.getOwnPropertyNames)
                  .reduce((e, t) =>
                    t.concat(e.filter((e) => 0 > t.indexOf(e)))
                  ),
            }
          ),
        c = (e, t) => u([...e, { constructor: t }]),
        p = {
          initFunction: null,
          staticsStrategy: 'copy',
          prototypeStrategy: 'copy',
          decoratorInheritance: 'deep',
        },
        m = new WeakMap(),
        d = (e) => m.get(e),
        f = (e, t) => m.set(e, t),
        h = (e, t) => {
          var o, a;
          let n = s([
              ...Object.getOwnPropertyNames(e),
              ...Object.getOwnPropertyNames(t),
            ]),
            r = {};
          for (let i of n)
            r[i] = s([
              ...(null !== (o = null == e ? void 0 : e[i]) && void 0 !== o
                ? o
                : []),
              ...(null !== (a = null == t ? void 0 : t[i]) && void 0 !== a
                ? a
                : []),
            ]);
          return r;
        },
        g = (e, t) => {
          var o, a, n, r;
          return {
            property: h(
              null !== (o = null == e ? void 0 : e.property) && void 0 !== o
                ? o
                : {},
              null !== (a = null == t ? void 0 : t.property) && void 0 !== a
                ? a
                : {}
            ),
            method: h(
              null !== (n = null == e ? void 0 : e.method) && void 0 !== n
                ? n
                : {},
              null !== (r = null == t ? void 0 : t.method) && void 0 !== r
                ? r
                : {}
            ),
          };
        },
        y = (e, t) => {
          var o, a, n, r, i, l;
          return {
            class: s([
              ...(null !== (o = null == e ? void 0 : e.class) && void 0 !== o
                ? o
                : []),
              ...(null !== (a = null == t ? void 0 : t.class) && void 0 !== a
                ? a
                : []),
            ]),
            static: g(
              null !== (n = null == e ? void 0 : e.static) && void 0 !== n
                ? n
                : {},
              null !== (r = null == t ? void 0 : t.static) && void 0 !== r
                ? r
                : {}
            ),
            instance: g(
              null !== (i = null == e ? void 0 : e.instance) && void 0 !== i
                ? i
                : {},
              null !== (l = null == t ? void 0 : t.instance) && void 0 !== l
                ? l
                : {}
            ),
          };
        },
        k = new Map(),
        b = (...e) => {
          var t;
          let o = new Set(),
            a = new Set([...e]);
          for (; a.size > 0; )
            for (let e of a) {
              for (let r of [
                ...n(e.prototype).map((e) => e.constructor),
                ...(null !== (t = d(e)) && void 0 !== t ? t : []),
              ].filter((e) => !o.has(e)))
                a.add(r);
              o.add(e), a.delete(e);
            }
          return [...o];
        },
        w = (...e) => {
          let t = b(...e)
            .map((e) => k.get(e))
            .filter((e) => !!e);
          return 0 == t.length
            ? {}
            : 1 == t.length
              ? t[0]
              : t.reduce((e, t) => y(e, t));
        },
        j = (...e) => {
          let t = e.map((e) => v(e));
          return 0 === t.length
            ? {}
            : 1 === t.length
              ? t[0]
              : t.reduce((e, t) => y(e, t));
        },
        v = (e) => {
          let t = k.get(e);
          return t || ((t = {}), k.set(e, t)), t;
        };
      function z(...e) {
        var t, o, n;
        let r = e.map((e) => e.prototype),
          s = p.initFunction;
        if (null !== s) {
          let e = r.map((e) => e[s]).filter((e) => 'function' == typeof e);
          r.push({
            [s]: function (...t) {
              for (let o of e) o.apply(this, t);
            },
          });
        }
        function l(...t) {
          for (let o of e) a(this, new o(...t));
          null !== s && 'function' == typeof this[s] && this[s].apply(this, t);
        }
        (l.prototype = 'copy' === p.prototypeStrategy ? i(r, l) : c(r, l)),
          Object.setPrototypeOf(
            l,
            'copy' === p.staticsStrategy
              ? i(e, null, ['prototype'])
              : u(e, Function.prototype)
          );
        let m = l;
        if ('none' !== p.decoratorInheritance) {
          let a = 'deep' === p.decoratorInheritance ? w(...e) : j(...e);
          for (let e of null !== (t = null == a ? void 0 : a.class) &&
          void 0 !== t
            ? t
            : []) {
            let t = e(m);
            t && (m = t);
          }
          x(
            null !== (o = null == a ? void 0 : a.static) && void 0 !== o
              ? o
              : {},
            m
          ),
            x(
              null !== (n = null == a ? void 0 : a.instance) && void 0 !== n
                ? n
                : {},
              m.prototype
            );
        }
        return f(m, e), m;
      }
      let x = (e, t) => {
        let o = e.property,
          a = e.method;
        if (o) for (let e in o) for (let a of o[e]) a(t, e);
        if (a)
          for (let e in a)
            for (let o of a[e]) o(t, e, Object.getOwnPropertyDescriptor(t, e));
      };
    },
    9629: (e, t) => {
      'use strict';
      (t.fromCallback = function (e) {
        return Object.defineProperty(
          function () {
            if ('function' != typeof arguments[arguments.length - 1])
              return new Promise((t, o) => {
                (arguments[arguments.length] = (e, a) => {
                  if (e) return o(e);
                  t(a);
                }),
                  arguments.length++,
                  e.apply(this, arguments);
              });
            e.apply(this, arguments);
          },
          'name',
          { value: e.name }
        );
      }),
        (t.fromPromise = function (e) {
          return Object.defineProperty(
            function () {
              let t = arguments[arguments.length - 1];
              if ('function' != typeof t) return e.apply(this, arguments);
              delete arguments[arguments.length - 1],
                arguments.length--,
                e.apply(this, arguments).then((e) => t(null, e), t);
            },
            'name',
            { value: e.name }
          );
        });
    },
    2045: (e, t, o) => {
      'use strict';
      var a = o(353),
        n = o(7704),
        r =
          /^[\x00-\x20\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]+/,
        i = /[\n\r\t]/g,
        s = /^[A-Za-z][A-Za-z0-9+-.]*:\/\//,
        l = /:\d+$/,
        u = /^([a-z][a-z0-9.+-]*:)?(\/\/)?([\\/]+)?([\S\s]*)/i,
        c = /^[a-zA-Z]:/;
      function p(e) {
        return (e || '').toString().replace(r, '');
      }
      var m = [
          ['#', 'hash'],
          ['?', 'query'],
          function (e, t) {
            return h(t.protocol) ? e.replace(/\\/g, '/') : e;
          },
          ['/', 'pathname'],
          ['@', 'auth', 1],
          [NaN, 'host', void 0, 1, 1],
          [/:(\d*)$/, 'port', void 0, 1],
          [NaN, 'hostname', void 0, 1, 1],
        ],
        d = { hash: 1, query: 1 };
      function f(e) {
        'undefined' != typeof window
          ? (t = window)
          : void 0 !== o.g
            ? (t = o.g)
            : 'undefined' != typeof self
              ? (t = self)
              : (t = {});
        var t,
          a,
          n = t.location || {},
          r = {},
          i = typeof (e = e || n);
        if ('blob:' === e.protocol) r = new y(unescape(e.pathname), {});
        else if ('string' === i) for (a in ((r = new y(e, {})), d)) delete r[a];
        else if ('object' === i) {
          for (a in e) a in d || (r[a] = e[a]);
          void 0 === r.slashes && (r.slashes = s.test(e.href));
        }
        return r;
      }
      function h(e) {
        return (
          'file:' === e ||
          'ftp:' === e ||
          'http:' === e ||
          'https:' === e ||
          'ws:' === e ||
          'wss:' === e
        );
      }
      function g(e, t) {
        (e = (e = p(e)).replace(i, '')), (t = t || {});
        var o,
          a = u.exec(e),
          n = a[1] ? a[1].toLowerCase() : '',
          r = !!a[2],
          s = !!a[3],
          l = 0;
        return (
          r
            ? s
              ? ((o = a[2] + a[3] + a[4]), (l = a[2].length + a[3].length))
              : ((o = a[2] + a[4]), (l = a[2].length))
            : s
              ? ((o = a[3] + a[4]), (l = a[3].length))
              : (o = a[4]),
          'file:' === n
            ? l >= 2 && (o = o.slice(2))
            : h(n)
              ? (o = a[4])
              : n
                ? r && (o = o.slice(2))
                : l >= 2 && h(t.protocol) && (o = a[4]),
          { protocol: n, slashes: r || h(n), slashesCount: l, rest: o }
        );
      }
      function y(e, t, o) {
        if (((e = (e = p(e)).replace(i, '')), !(this instanceof y)))
          return new y(e, t, o);
        var r,
          s,
          l,
          u,
          d,
          k,
          b = m.slice(),
          w = typeof t,
          j = 0;
        for (
          'object' !== w && 'string' !== w && ((o = t), (t = null)),
            o && 'function' != typeof o && (o = n.parse),
            r = !(s = g(e || '', (t = f(t)))).protocol && !s.slashes,
            this.slashes = s.slashes || (r && t.slashes),
            this.protocol = s.protocol || t.protocol || '',
            e = s.rest,
            (('file:' === s.protocol && (2 !== s.slashesCount || c.test(e))) ||
              (!s.slashes &&
                (s.protocol || s.slashesCount < 2 || !h(this.protocol)))) &&
              (b[3] = [/(.*)/, 'pathname']);
          j < b.length;
          j++
        ) {
          if ('function' == typeof (u = b[j])) {
            e = u(e, this);
            continue;
          }
          (l = u[0]),
            (k = u[1]),
            l != l
              ? (this[k] = e)
              : 'string' == typeof l
                ? ~(d = '@' === l ? e.lastIndexOf(l) : e.indexOf(l)) &&
                  ('number' == typeof u[2]
                    ? ((this[k] = e.slice(0, d)), (e = e.slice(d + u[2])))
                    : ((this[k] = e.slice(d)), (e = e.slice(0, d))))
                : (d = l.exec(e)) &&
                  ((this[k] = d[1]), (e = e.slice(0, d.index))),
            (this[k] = this[k] || (r && u[3] && t[k]) || ''),
            u[4] && (this[k] = this[k].toLowerCase());
        }
        o && (this.query = o(this.query)),
          r &&
            t.slashes &&
            '/' !== this.pathname.charAt(0) &&
            ('' !== this.pathname || '' !== t.pathname) &&
            (this.pathname = (function (e, t) {
              if ('' === e) return t;
              for (
                var o = (t || '/').split('/').slice(0, -1).concat(e.split('/')),
                  a = o.length,
                  n = o[a - 1],
                  r = !1,
                  i = 0;
                a--;

              )
                '.' === o[a]
                  ? o.splice(a, 1)
                  : '..' === o[a]
                    ? (o.splice(a, 1), i++)
                    : i && (0 === a && (r = !0), o.splice(a, 1), i--);
              return (
                r && o.unshift(''),
                ('.' === n || '..' === n) && o.push(''),
                o.join('/')
              );
            })(this.pathname, t.pathname)),
          '/' !== this.pathname.charAt(0) &&
            h(this.protocol) &&
            (this.pathname = '/' + this.pathname),
          a(this.port, this.protocol) ||
            ((this.host = this.hostname), (this.port = '')),
          (this.username = this.password = ''),
          this.auth &&
            (~(d = this.auth.indexOf(':'))
              ? ((this.username = this.auth.slice(0, d)),
                (this.username = encodeURIComponent(
                  decodeURIComponent(this.username)
                )),
                (this.password = this.auth.slice(d + 1)),
                (this.password = encodeURIComponent(
                  decodeURIComponent(this.password)
                )))
              : (this.username = encodeURIComponent(
                  decodeURIComponent(this.auth)
                )),
            (this.auth = this.password
              ? this.username + ':' + this.password
              : this.username)),
          (this.origin =
            'file:' !== this.protocol && h(this.protocol) && this.host
              ? this.protocol + '//' + this.host
              : 'null'),
          (this.href = this.toString());
      }
      (y.prototype = {
        set: function (e, t, o) {
          switch (e) {
            case 'query':
              'string' == typeof t && t.length && (t = (o || n.parse)(t)),
                (this[e] = t);
              break;
            case 'port':
              (this[e] = t),
                a(t, this.protocol)
                  ? t && (this.host = this.hostname + ':' + t)
                  : ((this.host = this.hostname), (this[e] = ''));
              break;
            case 'hostname':
              (this[e] = t),
                this.port && (t += ':' + this.port),
                (this.host = t);
              break;
            case 'host':
              (this[e] = t),
                l.test(t)
                  ? ((t = t.split(':')),
                    (this.port = t.pop()),
                    (this.hostname = t.join(':')))
                  : ((this.hostname = t), (this.port = ''));
              break;
            case 'protocol':
              (this.protocol = t.toLowerCase()), (this.slashes = !o);
              break;
            case 'pathname':
            case 'hash':
              if (t) {
                var r = 'pathname' === e ? '/' : '#';
                this[e] = t.charAt(0) !== r ? r + t : t;
              } else this[e] = t;
              break;
            case 'username':
            case 'password':
              this[e] = encodeURIComponent(t);
              break;
            case 'auth':
              var i = t.indexOf(':');
              ~i
                ? ((this.username = t.slice(0, i)),
                  (this.username = encodeURIComponent(
                    decodeURIComponent(this.username)
                  )),
                  (this.password = t.slice(i + 1)),
                  (this.password = encodeURIComponent(
                    decodeURIComponent(this.password)
                  )))
                : (this.username = encodeURIComponent(decodeURIComponent(t)));
          }
          for (var s = 0; s < m.length; s++) {
            var u = m[s];
            u[4] && (this[u[1]] = this[u[1]].toLowerCase());
          }
          return (
            (this.auth = this.password
              ? this.username + ':' + this.password
              : this.username),
            (this.origin =
              'file:' !== this.protocol && h(this.protocol) && this.host
                ? this.protocol + '//' + this.host
                : 'null'),
            (this.href = this.toString()),
            this
          );
        },
        toString: function (e) {
          (e && 'function' == typeof e) || (e = n.stringify);
          var t,
            o = this.host,
            a = this.protocol;
          a && ':' !== a.charAt(a.length - 1) && (a += ':');
          var r =
            a +
            ((this.protocol && this.slashes) || h(this.protocol) ? '//' : '');
          return (
            this.username
              ? ((r += this.username),
                this.password && (r += ':' + this.password),
                (r += '@'))
              : this.password
                ? ((r += ':' + this.password), (r += '@'))
                : 'file:' !== this.protocol &&
                  h(this.protocol) &&
                  !o &&
                  '/' !== this.pathname &&
                  (r += '@'),
            (':' === o[o.length - 1] ||
              (l.test(this.hostname) && !this.port)) &&
              (o += ':'),
            (r += o + this.pathname),
            (t = 'object' == typeof this.query ? e(this.query) : this.query) &&
              (r += '?' !== t.charAt(0) ? '?' + t : t),
            this.hash && (r += this.hash),
            r
          );
        },
      }),
        (y.extractProtocol = g),
        (y.location = f),
        (y.trimLeft = p),
        (y.qs = n),
        (e.exports = y);
    },
    3284: (e) => {
      e.exports = function (e) {
        return (
          e &&
          'object' == typeof e &&
          'function' == typeof e.copy &&
          'function' == typeof e.fill &&
          'function' == typeof e.readUInt8
        );
      };
    },
    9284: (e, t, o) => {
      'use strict';
      var a = o(6109),
        n = o(6094),
        r = o(6196),
        i = o(6774);
      function s(e) {
        return e.call.bind(e);
      }
      var l = 'undefined' != typeof BigInt,
        u = 'undefined' != typeof Symbol,
        c = s(Object.prototype.toString),
        p = s(Number.prototype.valueOf),
        m = s(String.prototype.valueOf),
        d = s(Boolean.prototype.valueOf);
      if (l) var f = s(BigInt.prototype.valueOf);
      if (u) var h = s(Symbol.prototype.valueOf);
      function g(e, t) {
        if ('object' != typeof e) return !1;
        try {
          return t(e), !0;
        } catch (e) {
          return !1;
        }
      }
      function y(e) {
        return '[object Map]' === c(e);
      }
      function k(e) {
        return '[object Set]' === c(e);
      }
      function b(e) {
        return '[object WeakMap]' === c(e);
      }
      function w(e) {
        return '[object WeakSet]' === c(e);
      }
      function j(e) {
        return '[object ArrayBuffer]' === c(e);
      }
      function v(e) {
        return (
          'undefined' != typeof ArrayBuffer &&
          (j.working ? j(e) : e instanceof ArrayBuffer)
        );
      }
      function z(e) {
        return '[object DataView]' === c(e);
      }
      function x(e) {
        return (
          'undefined' != typeof DataView &&
          (z.working ? z(e) : e instanceof DataView)
        );
      }
      (t.isArgumentsObject = a),
        (t.isGeneratorFunction = n),
        (t.isTypedArray = i),
        (t.isPromise = function (e) {
          return (
            ('undefined' != typeof Promise && e instanceof Promise) ||
            (null !== e &&
              'object' == typeof e &&
              'function' == typeof e.then &&
              'function' == typeof e.catch)
          );
        }),
        (t.isArrayBufferView = function (e) {
          return 'undefined' != typeof ArrayBuffer && ArrayBuffer.isView
            ? ArrayBuffer.isView(e)
            : i(e) || x(e);
        }),
        (t.isUint8Array = function (e) {
          return 'Uint8Array' === r(e);
        }),
        (t.isUint8ClampedArray = function (e) {
          return 'Uint8ClampedArray' === r(e);
        }),
        (t.isUint16Array = function (e) {
          return 'Uint16Array' === r(e);
        }),
        (t.isUint32Array = function (e) {
          return 'Uint32Array' === r(e);
        }),
        (t.isInt8Array = function (e) {
          return 'Int8Array' === r(e);
        }),
        (t.isInt16Array = function (e) {
          return 'Int16Array' === r(e);
        }),
        (t.isInt32Array = function (e) {
          return 'Int32Array' === r(e);
        }),
        (t.isFloat32Array = function (e) {
          return 'Float32Array' === r(e);
        }),
        (t.isFloat64Array = function (e) {
          return 'Float64Array' === r(e);
        }),
        (t.isBigInt64Array = function (e) {
          return 'BigInt64Array' === r(e);
        }),
        (t.isBigUint64Array = function (e) {
          return 'BigUint64Array' === r(e);
        }),
        (y.working = 'undefined' != typeof Map && y(new Map())),
        (t.isMap = function (e) {
          return (
            'undefined' != typeof Map && (y.working ? y(e) : e instanceof Map)
          );
        }),
        (k.working = 'undefined' != typeof Set && k(new Set())),
        (t.isSet = function (e) {
          return (
            'undefined' != typeof Set && (k.working ? k(e) : e instanceof Set)
          );
        }),
        (b.working = 'undefined' != typeof WeakMap && b(new WeakMap())),
        (t.isWeakMap = function (e) {
          return (
            'undefined' != typeof WeakMap &&
            (b.working ? b(e) : e instanceof WeakMap)
          );
        }),
        (w.working = 'undefined' != typeof WeakSet && w(new WeakSet())),
        (t.isWeakSet = function (e) {
          return w(e);
        }),
        (j.working = 'undefined' != typeof ArrayBuffer && j(new ArrayBuffer())),
        (t.isArrayBuffer = v),
        (z.working =
          'undefined' != typeof ArrayBuffer &&
          'undefined' != typeof DataView &&
          z(new DataView(new ArrayBuffer(1), 0, 1))),
        (t.isDataView = x);
      var E =
        'undefined' != typeof SharedArrayBuffer ? SharedArrayBuffer : void 0;
      function A(e) {
        return '[object SharedArrayBuffer]' === c(e);
      }
      function S(e) {
        return (
          void 0 !== E &&
          (void 0 === A.working && (A.working = A(new E())),
          A.working ? A(e) : e instanceof E)
        );
      }
      function O(e) {
        return g(e, p);
      }
      function C(e) {
        return g(e, m);
      }
      function I(e) {
        return g(e, d);
      }
      function P(e) {
        return l && g(e, f);
      }
      function B(e) {
        return u && g(e, h);
      }
      (t.isSharedArrayBuffer = S),
        (t.isAsyncFunction = function (e) {
          return '[object AsyncFunction]' === c(e);
        }),
        (t.isMapIterator = function (e) {
          return '[object Map Iterator]' === c(e);
        }),
        (t.isSetIterator = function (e) {
          return '[object Set Iterator]' === c(e);
        }),
        (t.isGeneratorObject = function (e) {
          return '[object Generator]' === c(e);
        }),
        (t.isWebAssemblyCompiledModule = function (e) {
          return '[object WebAssembly.Module]' === c(e);
        }),
        (t.isNumberObject = O),
        (t.isStringObject = C),
        (t.isBooleanObject = I),
        (t.isBigIntObject = P),
        (t.isSymbolObject = B),
        (t.isBoxedPrimitive = function (e) {
          return O(e) || C(e) || I(e) || P(e) || B(e);
        }),
        (t.isAnyArrayBuffer = function (e) {
          return 'undefined' != typeof Uint8Array && (v(e) || S(e));
        }),
        ['isProxy', 'isExternal', 'isModuleNamespaceObject'].forEach(
          function (e) {
            Object.defineProperty(t, e, {
              enumerable: !1,
              value: function () {
                throw Error(e + ' is not supported in userland');
              },
            });
          }
        );
    },
    5078: (e, t, o) => {
      var a = o(7811),
        n =
          Object.getOwnPropertyDescriptors ||
          function (e) {
            for (var t = Object.keys(e), o = {}, a = 0; a < t.length; a++)
              o[t[a]] = Object.getOwnPropertyDescriptor(e, t[a]);
            return o;
          },
        r = /%[sdj%]/g;
      (t.format = function (e) {
        if (!b(e)) {
          for (var t = [], o = 0; o < arguments.length; o++)
            t.push(u(arguments[o]));
          return t.join(' ');
        }
        for (
          var o = 1,
            a = arguments,
            n = a.length,
            i = String(e).replace(r, function (e) {
              if ('%%' === e) return '%';
              if (o >= n) return e;
              switch (e) {
                case '%s':
                  return String(a[o++]);
                case '%d':
                  return Number(a[o++]);
                case '%j':
                  try {
                    return JSON.stringify(a[o++]);
                  } catch (e) {
                    return '[Circular]';
                  }
                default:
                  return e;
              }
            }),
            s = a[o];
          o < n;
          s = a[++o]
        )
          y(s) || !v(s) ? (i += ' ' + s) : (i += ' ' + u(s));
        return i;
      }),
        (t.deprecate = function (e, o) {
          if (void 0 !== a && !0 === a.noDeprecation) return e;
          if (void 0 === a)
            return function () {
              return t.deprecate(e, o).apply(this, arguments);
            };
          var n = !1;
          return function () {
            if (!n) {
              if (a.throwDeprecation) throw Error(o);
              a.traceDeprecation ? console.trace(o) : console.error(o),
                (n = !0);
            }
            return e.apply(this, arguments);
          };
        });
      var i = {},
        s = /^$/;
      if (a.env.NODE_DEBUG) {
        var l = a.env.NODE_DEBUG;
        s = RegExp(
          '^' +
            (l = l
              .replace(/[|\\{}()[\]^$+?.]/g, '\\$&')
              .replace(/\*/g, '.*')
              .replace(/,/g, '$|^')
              .toUpperCase()) +
            '$',
          'i'
        );
      }
      function u(e, o) {
        var a = { seen: [], stylize: p };
        return (
          arguments.length >= 3 && (a.depth = arguments[2]),
          arguments.length >= 4 && (a.colors = arguments[3]),
          g(o) ? (a.showHidden = o) : o && t._extend(a, o),
          w(a.showHidden) && (a.showHidden = !1),
          w(a.depth) && (a.depth = 2),
          w(a.colors) && (a.colors = !1),
          w(a.customInspect) && (a.customInspect = !0),
          a.colors && (a.stylize = c),
          m(a, e, a.depth)
        );
      }
      function c(e, t) {
        var o = u.styles[t];
        return o
          ? '\x1b[' + u.colors[o][0] + 'm' + e + '\x1b[' + u.colors[o][1] + 'm'
          : e;
      }
      function p(e, t) {
        return e;
      }
      function m(e, o, a) {
        if (
          e.customInspect &&
          o &&
          E(o.inspect) &&
          o.inspect !== t.inspect &&
          !(o.constructor && o.constructor.prototype === o)
        ) {
          var n,
            r,
            i,
            s,
            l,
            u = o.inspect(a, e);
          return b(u) || (u = m(e, u, a)), u;
        }
        var c = (function (e, t) {
          if (w(t)) return e.stylize('undefined', 'undefined');
          if (b(t)) {
            var o =
              "'" +
              JSON.stringify(t)
                .replace(/^"|"$/g, '')
                .replace(/'/g, "\\'")
                .replace(/\\"/g, '"') +
              "'";
            return e.stylize(o, 'string');
          }
          return k(t)
            ? e.stylize('' + t, 'number')
            : g(t)
              ? e.stylize('' + t, 'boolean')
              : y(t)
                ? e.stylize('null', 'null')
                : void 0;
        })(e, o);
        if (c) return c;
        var p = Object.keys(o),
          v =
            ((s = {}),
            p.forEach(function (e, t) {
              s[e] = !0;
            }),
            s);
        if (
          (e.showHidden && (p = Object.getOwnPropertyNames(o)),
          x(o) && (p.indexOf('message') >= 0 || p.indexOf('description') >= 0))
        )
          return d(o);
        if (0 === p.length) {
          if (E(o)) {
            var A = o.name ? ': ' + o.name : '';
            return e.stylize('[Function' + A + ']', 'special');
          }
          if (j(o))
            return e.stylize(RegExp.prototype.toString.call(o), 'regexp');
          if (z(o)) return e.stylize(Date.prototype.toString.call(o), 'date');
          if (x(o)) return d(o);
        }
        var S = '',
          O = !1,
          I = ['{', '}'];
        return (h(o) && ((O = !0), (I = ['[', ']'])),
        E(o) && (S = ' [Function' + (o.name ? ': ' + o.name : '') + ']'),
        j(o) && (S = ' ' + RegExp.prototype.toString.call(o)),
        z(o) && (S = ' ' + Date.prototype.toUTCString.call(o)),
        x(o) && (S = ' ' + d(o)),
        0 !== p.length || (O && 0 != o.length))
          ? a < 0
            ? j(o)
              ? e.stylize(RegExp.prototype.toString.call(o), 'regexp')
              : e.stylize('[Object]', 'special')
            : (e.seen.push(o),
              (l = O
                ? (function (e, t, o, a, n) {
                    for (var r = [], i = 0, s = t.length; i < s; ++i)
                      C(t, String(i))
                        ? r.push(f(e, t, o, a, String(i), !0))
                        : r.push('');
                    return (
                      n.forEach(function (n) {
                        n.match(/^\d+$/) || r.push(f(e, t, o, a, n, !0));
                      }),
                      r
                    );
                  })(e, o, a, v, p)
                : p.map(function (t) {
                    return f(e, o, a, v, t, O);
                  })),
              e.seen.pop(),
              (n = S),
              (r = I),
              (i = 0),
              l.reduce(function (e, t) {
                return (
                  i++,
                  t.indexOf('\n') >= 0 && i++,
                  e + t.replace(/\u001b\[\d\d?m/g, '').length + 1
                );
              }, 0) > 60
                ? r[0] +
                  ('' === n ? '' : n + '\n ') +
                  ' ' +
                  l.join(',\n  ') +
                  ' ' +
                  r[1]
                : r[0] + n + ' ' + l.join(', ') + ' ' + r[1])
          : I[0] + S + I[1];
      }
      function d(e) {
        return '[' + Error.prototype.toString.call(e) + ']';
      }
      function f(e, t, o, a, n, r) {
        var i, s, l;
        if (
          ((l = Object.getOwnPropertyDescriptor(t, n) || { value: t[n] }).get
            ? (s = l.set
                ? e.stylize('[Getter/Setter]', 'special')
                : e.stylize('[Getter]', 'special'))
            : l.set && (s = e.stylize('[Setter]', 'special')),
          C(a, n) || (i = '[' + n + ']'),
          !s &&
            (0 > e.seen.indexOf(l.value)
              ? (s = y(o) ? m(e, l.value, null) : m(e, l.value, o - 1)).indexOf(
                  '\n'
                ) > -1 &&
                (s = r
                  ? s
                      .split('\n')
                      .map(function (e) {
                        return '  ' + e;
                      })
                      .join('\n')
                      .slice(2)
                  : '\n' +
                    s
                      .split('\n')
                      .map(function (e) {
                        return '   ' + e;
                      })
                      .join('\n'))
              : (s = e.stylize('[Circular]', 'special'))),
          w(i))
        ) {
          if (r && n.match(/^\d+$/)) return s;
          (i = JSON.stringify('' + n)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)
            ? ((i = i.slice(1, -1)), (i = e.stylize(i, 'name')))
            : ((i = i
                .replace(/'/g, "\\'")
                .replace(/\\"/g, '"')
                .replace(/(^"|"$)/g, "'")),
              (i = e.stylize(i, 'string')));
        }
        return i + ': ' + s;
      }
      function h(e) {
        return Array.isArray(e);
      }
      function g(e) {
        return 'boolean' == typeof e;
      }
      function y(e) {
        return null === e;
      }
      function k(e) {
        return 'number' == typeof e;
      }
      function b(e) {
        return 'string' == typeof e;
      }
      function w(e) {
        return void 0 === e;
      }
      function j(e) {
        return v(e) && '[object RegExp]' === A(e);
      }
      function v(e) {
        return 'object' == typeof e && null !== e;
      }
      function z(e) {
        return v(e) && '[object Date]' === A(e);
      }
      function x(e) {
        return v(e) && ('[object Error]' === A(e) || e instanceof Error);
      }
      function E(e) {
        return 'function' == typeof e;
      }
      function A(e) {
        return Object.prototype.toString.call(e);
      }
      function S(e) {
        return e < 10 ? '0' + e.toString(10) : e.toString(10);
      }
      (t.debuglog = function (e) {
        if (!i[(e = e.toUpperCase())]) {
          if (s.test(e)) {
            var o = a.pid;
            i[e] = function () {
              var a = t.format.apply(t, arguments);
              console.error('%s %d: %s', e, o, a);
            };
          } else i[e] = function () {};
        }
        return i[e];
      }),
        (t.inspect = u),
        (u.colors = {
          bold: [1, 22],
          italic: [3, 23],
          underline: [4, 24],
          inverse: [7, 27],
          white: [37, 39],
          grey: [90, 39],
          black: [30, 39],
          blue: [34, 39],
          cyan: [36, 39],
          green: [32, 39],
          magenta: [35, 39],
          red: [31, 39],
          yellow: [33, 39],
        }),
        (u.styles = {
          special: 'cyan',
          number: 'yellow',
          boolean: 'yellow',
          undefined: 'grey',
          null: 'bold',
          string: 'green',
          date: 'magenta',
          regexp: 'red',
        }),
        (t.types = o(9284)),
        (t.isArray = h),
        (t.isBoolean = g),
        (t.isNull = y),
        (t.isNullOrUndefined = function (e) {
          return null == e;
        }),
        (t.isNumber = k),
        (t.isString = b),
        (t.isSymbol = function (e) {
          return 'symbol' == typeof e;
        }),
        (t.isUndefined = w),
        (t.isRegExp = j),
        (t.types.isRegExp = j),
        (t.isObject = v),
        (t.isDate = z),
        (t.types.isDate = z),
        (t.isError = x),
        (t.types.isNativeError = x),
        (t.isFunction = E),
        (t.isPrimitive = function (e) {
          return (
            null === e ||
            'boolean' == typeof e ||
            'number' == typeof e ||
            'string' == typeof e ||
            'symbol' == typeof e ||
            void 0 === e
          );
        }),
        (t.isBuffer = o(3284));
      var O = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ];
      function C(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }
      (t.log = function () {
        var e, o;
        console.log(
          '%s - %s',
          ((o = [
            S((e = new Date()).getHours()),
            S(e.getMinutes()),
            S(e.getSeconds()),
          ].join(':')),
          [e.getDate(), O[e.getMonth()], o].join(' ')),
          t.format.apply(t, arguments)
        );
      }),
        (t.inherits = o(9073)),
        (t._extend = function (e, t) {
          if (!t || !v(t)) return e;
          for (var o = Object.keys(t), a = o.length; a--; ) e[o[a]] = t[o[a]];
          return e;
        });
      var I =
        'undefined' != typeof Symbol ? Symbol('util.promisify.custom') : void 0;
      function P(e, t) {
        if (!e) {
          var o = Error('Promise was rejected with a falsy value');
          (o.reason = e), (e = o);
        }
        return t(e);
      }
      (t.promisify = function (e) {
        if ('function' != typeof e)
          throw TypeError('The "original" argument must be of type Function');
        if (I && e[I]) {
          var t = e[I];
          if ('function' != typeof t)
            throw TypeError(
              'The "util.promisify.custom" argument must be of type Function'
            );
          return (
            Object.defineProperty(t, I, {
              value: t,
              enumerable: !1,
              writable: !1,
              configurable: !0,
            }),
            t
          );
        }
        function t() {
          for (
            var t,
              o,
              a = new Promise(function (e, a) {
                (t = e), (o = a);
              }),
              n = [],
              r = 0;
            r < arguments.length;
            r++
          )
            n.push(arguments[r]);
          n.push(function (e, a) {
            e ? o(e) : t(a);
          });
          try {
            e.apply(this, n);
          } catch (e) {
            o(e);
          }
          return a;
        }
        return (
          Object.setPrototypeOf(t, Object.getPrototypeOf(e)),
          I &&
            Object.defineProperty(t, I, {
              value: t,
              enumerable: !1,
              writable: !1,
              configurable: !0,
            }),
          Object.defineProperties(t, n(e))
        );
      }),
        (t.promisify.custom = I),
        (t.callbackify = function (e) {
          if ('function' != typeof e)
            throw TypeError('The "original" argument must be of type Function');
          function t() {
            for (var t = [], o = 0; o < arguments.length; o++)
              t.push(arguments[o]);
            var n = t.pop();
            if ('function' != typeof n)
              throw TypeError('The last argument must be of type Function');
            var r = this,
              i = function () {
                return n.apply(r, arguments);
              };
            e.apply(this, t).then(
              function (e) {
                a.nextTick(i.bind(null, null, e));
              },
              function (e) {
                a.nextTick(P.bind(null, e, i));
              }
            );
          }
          return (
            Object.setPrototypeOf(t, Object.getPrototypeOf(e)),
            Object.defineProperties(t, n(e)),
            t
          );
        });
    },
    6196: (e, t, o) => {
      'use strict';
      var a = o(3082),
        n = o(322),
        r = o(4973),
        i = o(1963),
        s = o(7061),
        l = o(506),
        u = i('Object.prototype.toString'),
        c = o(4552)(),
        p = 'undefined' == typeof globalThis ? o.g : globalThis,
        m = n(),
        d = i('String.prototype.slice'),
        f =
          i('Array.prototype.indexOf', !0) ||
          function (e, t) {
            for (var o = 0; o < e.length; o += 1) if (e[o] === t) return o;
            return -1;
          },
        h = { __proto__: null };
      c && s && l
        ? a(m, function (e) {
            var t = new p[e]();
            if (Symbol.toStringTag in t && l) {
              var o = l(t),
                a = s(o, Symbol.toStringTag);
              !a && o && (a = s(l(o), Symbol.toStringTag)),
                (h['$' + e] = r(a.get));
            }
          })
        : a(m, function (e) {
            var t = new p[e](),
              o = t.slice || t.set;
            o && (h['$' + e] = r(o));
          });
      var g = function (e) {
          var t = !1;
          return (
            a(h, function (o, a) {
              if (!t)
                try {
                  '$' + o(e) === a && (t = d(a, 1));
                } catch (e) {}
            }),
            t
          );
        },
        y = function (e) {
          var t = !1;
          return (
            a(h, function (o, a) {
              if (!t)
                try {
                  o(e), (t = d(a, 1));
                } catch (e) {}
            }),
            t
          );
        };
      e.exports = function (e) {
        if (!e || 'object' != typeof e) return !1;
        if (!c) {
          var t = d(u(e), 8, -1);
          return f(m, t) > -1 ? t : 'Object' === t && y(e);
        }
        return s ? g(e) : null;
      };
    },
    322: (e, t, o) => {
      'use strict';
      var a = o(3408),
        n = 'undefined' == typeof globalThis ? o.g : globalThis;
      e.exports = function () {
        for (var e = [], t = 0; t < a.length; t++)
          'function' == typeof n[a[t]] && (e[e.length] = a[t]);
        return e;
      };
    },
    6904: (e, t) => {
      'use strict';
      var o, a;
      Object.defineProperties(t, {
        __esModule: { value: !0 },
        [Symbol.toStringTag]: { value: 'Module' },
      });
      let n = (function (e) {
          return e &&
            e.__esModule &&
            Object.prototype.hasOwnProperty.call(e, 'default')
            ? e.default
            : e;
        })(
          (function () {
            if (a) return o;
            a = 1;
            let e = /^xn--/,
              t = /[^\0-\x7F]/,
              n = /[\x2E\u3002\uFF0E\uFF61]/g,
              r = {
                overflow: 'Overflow: input needs wider integers to process',
                'not-basic': 'Illegal input >= 0x80 (not a basic code point)',
                'invalid-input': 'Invalid input',
              },
              i = Math.floor,
              s = String.fromCharCode;
            function l(e) {
              throw RangeError(r[e]);
            }
            function u(e, t) {
              let o = e.split('@'),
                a = '';
              return (
                o.length > 1 && ((a = o[0] + '@'), (e = o[1])),
                a +
                  (function (e, t) {
                    let o = [],
                      a = e.length;
                    for (; a--; ) o[a] = t(e[a]);
                    return o;
                  })((e = e.replace(n, '.')).split('.'), t).join('.')
              );
            }
            function c(e) {
              let t = [],
                o = 0,
                a = e.length;
              for (; o < a; ) {
                let n = e.charCodeAt(o++);
                if (n >= 55296 && n <= 56319 && o < a) {
                  let a = e.charCodeAt(o++);
                  (64512 & a) == 56320
                    ? t.push(((1023 & n) << 10) + (1023 & a) + 65536)
                    : (t.push(n), o--);
                } else t.push(n);
              }
              return t;
            }
            let p = function (e, t) {
                return e + 22 + 75 * (e < 26) - ((0 != t) << 5);
              },
              m = function (e, t, o) {
                let a = 0;
                for (
                  e = o ? i(e / 700) : e >> 1, e += i(e / t);
                  e > 455;
                  a += 36
                )
                  e = i(e / 35);
                return i(a + (36 * e) / (e + 38));
              },
              d = function (e) {
                let t = [],
                  o = e.length,
                  a = 0,
                  n = 128,
                  r = 72,
                  s = e.lastIndexOf('-');
                s < 0 && (s = 0);
                for (let o = 0; o < s; ++o)
                  e.charCodeAt(o) >= 128 && l('not-basic'),
                    t.push(e.charCodeAt(o));
                for (let c = s > 0 ? s + 1 : 0; c < o; ) {
                  let s = a;
                  for (let t = 1, n = 36; ; n += 36) {
                    var u;
                    c >= o && l('invalid-input');
                    let s =
                      (u = e.charCodeAt(c++)) >= 48 && u < 58
                        ? 26 + (u - 48)
                        : u >= 65 && u < 91
                          ? u - 65
                          : u >= 97 && u < 123
                            ? u - 97
                            : 36;
                    s >= 36 && l('invalid-input'),
                      s > i((0x7fffffff - a) / t) && l('overflow'),
                      (a += s * t);
                    let p = n <= r ? 1 : n >= r + 26 ? 26 : n - r;
                    if (s < p) break;
                    let m = 36 - p;
                    t > i(0x7fffffff / m) && l('overflow'), (t *= m);
                  }
                  let p = t.length + 1;
                  (r = m(a - s, p, 0 == s)),
                    i(a / p) > 0x7fffffff - n && l('overflow'),
                    (n += i(a / p)),
                    (a %= p),
                    t.splice(a++, 0, n);
                }
                return String.fromCodePoint(...t);
              },
              f = function (e) {
                let t = [],
                  o = (e = c(e)).length,
                  a = 128,
                  n = 0,
                  r = 72;
                for (let o of e) o < 128 && t.push(s(o));
                let u = t.length,
                  d = u;
                for (u && t.push('-'); d < o; ) {
                  let o = 0x7fffffff;
                  for (let t of e) t >= a && t < o && (o = t);
                  let c = d + 1;
                  for (let f of (o - a > i((0x7fffffff - n) / c) &&
                    l('overflow'),
                  (n += (o - a) * c),
                  (a = o),
                  e))
                    if ((f < a && ++n > 0x7fffffff && l('overflow'), f === a)) {
                      let e = n;
                      for (let o = 36; ; o += 36) {
                        let a = o <= r ? 1 : o >= r + 26 ? 26 : o - r;
                        if (e < a) break;
                        let n = e - a,
                          l = 36 - a;
                        t.push(s(p(a + (n % l), 0))), (e = i(n / l));
                      }
                      t.push(s(p(e, 0))), (r = m(n, c, d === u)), (n = 0), ++d;
                    }
                  ++n, ++a;
                }
                return t.join('');
              };
            return (o = {
              version: '2.3.1',
              ucs2: { decode: c, encode: (e) => String.fromCodePoint(...e) },
              decode: d,
              encode: f,
              toASCII: function (e) {
                return u(e, function (e) {
                  return t.test(e) ? 'xn--' + f(e) : e;
                });
              },
              toUnicode: function (t) {
                return u(t, function (t) {
                  return e.test(t) ? d(t.slice(4).toLowerCase()) : t;
                });
              },
            });
          })()
        ),
        r = [
          'ac',
          'com.ac',
          'edu.ac',
          'gov.ac',
          'mil.ac',
          'net.ac',
          'org.ac',
          'ad',
          'ae',
          'ac.ae',
          'co.ae',
          'gov.ae',
          'mil.ae',
          'net.ae',
          'org.ae',
          'sch.ae',
          'aero',
          'airline.aero',
          'airport.aero',
          'accident-investigation.aero',
          'accident-prevention.aero',
          'aerobatic.aero',
          'aeroclub.aero',
          'aerodrome.aero',
          'agents.aero',
          'air-surveillance.aero',
          'air-traffic-control.aero',
          'aircraft.aero',
          'airtraffic.aero',
          'ambulance.aero',
          'association.aero',
          'author.aero',
          'ballooning.aero',
          'broker.aero',
          'caa.aero',
          'cargo.aero',
          'catering.aero',
          'certification.aero',
          'championship.aero',
          'charter.aero',
          'civilaviation.aero',
          'club.aero',
          'conference.aero',
          'consultant.aero',
          'consulting.aero',
          'control.aero',
          'council.aero',
          'crew.aero',
          'design.aero',
          'dgca.aero',
          'educator.aero',
          'emergency.aero',
          'engine.aero',
          'engineer.aero',
          'entertainment.aero',
          'equipment.aero',
          'exchange.aero',
          'express.aero',
          'federation.aero',
          'flight.aero',
          'freight.aero',
          'fuel.aero',
          'gliding.aero',
          'government.aero',
          'groundhandling.aero',
          'group.aero',
          'hanggliding.aero',
          'homebuilt.aero',
          'insurance.aero',
          'journal.aero',
          'journalist.aero',
          'leasing.aero',
          'logistics.aero',
          'magazine.aero',
          'maintenance.aero',
          'marketplace.aero',
          'media.aero',
          'microlight.aero',
          'modelling.aero',
          'navigation.aero',
          'parachuting.aero',
          'paragliding.aero',
          'passenger-association.aero',
          'pilot.aero',
          'press.aero',
          'production.aero',
          'recreation.aero',
          'repbody.aero',
          'res.aero',
          'research.aero',
          'rotorcraft.aero',
          'safety.aero',
          'scientist.aero',
          'services.aero',
          'show.aero',
          'skydiving.aero',
          'software.aero',
          'student.aero',
          'taxi.aero',
          'trader.aero',
          'trading.aero',
          'trainer.aero',
          'union.aero',
          'workinggroup.aero',
          'works.aero',
          'af',
          'com.af',
          'edu.af',
          'gov.af',
          'net.af',
          'org.af',
          'ag',
          'co.ag',
          'com.ag',
          'net.ag',
          'nom.ag',
          'org.ag',
          'ai',
          'com.ai',
          'net.ai',
          'off.ai',
          'org.ai',
          'al',
          'com.al',
          'edu.al',
          'gov.al',
          'mil.al',
          'net.al',
          'org.al',
          'am',
          'co.am',
          'com.am',
          'commune.am',
          'net.am',
          'org.am',
          'ao',
          'co.ao',
          'ed.ao',
          'edu.ao',
          'gov.ao',
          'gv.ao',
          'it.ao',
          'og.ao',
          'org.ao',
          'pb.ao',
          'aq',
          'ar',
          'bet.ar',
          'com.ar',
          'coop.ar',
          'edu.ar',
          'gob.ar',
          'gov.ar',
          'int.ar',
          'mil.ar',
          'musica.ar',
          'mutual.ar',
          'net.ar',
          'org.ar',
          'senasa.ar',
          'tur.ar',
          'arpa',
          'e164.arpa',
          'home.arpa',
          'in-addr.arpa',
          'ip6.arpa',
          'iris.arpa',
          'uri.arpa',
          'urn.arpa',
          'as',
          'gov.as',
          'asia',
          'at',
          'ac.at',
          'sth.ac.at',
          'co.at',
          'gv.at',
          'or.at',
          'au',
          'asn.au',
          'com.au',
          'edu.au',
          'gov.au',
          'id.au',
          'net.au',
          'org.au',
          'conf.au',
          'oz.au',
          'act.au',
          'nsw.au',
          'nt.au',
          'qld.au',
          'sa.au',
          'tas.au',
          'vic.au',
          'wa.au',
          'act.edu.au',
          'catholic.edu.au',
          'nsw.edu.au',
          'nt.edu.au',
          'qld.edu.au',
          'sa.edu.au',
          'tas.edu.au',
          'vic.edu.au',
          'wa.edu.au',
          'qld.gov.au',
          'sa.gov.au',
          'tas.gov.au',
          'vic.gov.au',
          'wa.gov.au',
          'schools.nsw.edu.au',
          'aw',
          'com.aw',
          'ax',
          'az',
          'biz.az',
          'com.az',
          'edu.az',
          'gov.az',
          'info.az',
          'int.az',
          'mil.az',
          'name.az',
          'net.az',
          'org.az',
          'pp.az',
          'pro.az',
          'ba',
          'com.ba',
          'edu.ba',
          'gov.ba',
          'mil.ba',
          'net.ba',
          'org.ba',
          'bb',
          'biz.bb',
          'co.bb',
          'com.bb',
          'edu.bb',
          'gov.bb',
          'info.bb',
          'net.bb',
          'org.bb',
          'store.bb',
          'tv.bb',
          '*.bd',
          'be',
          'ac.be',
          'bf',
          'gov.bf',
          'bg',
          '0.bg',
          '1.bg',
          '2.bg',
          '3.bg',
          '4.bg',
          '5.bg',
          '6.bg',
          '7.bg',
          '8.bg',
          '9.bg',
          'a.bg',
          'b.bg',
          'c.bg',
          'd.bg',
          'e.bg',
          'f.bg',
          'g.bg',
          'h.bg',
          'i.bg',
          'j.bg',
          'k.bg',
          'l.bg',
          'm.bg',
          'n.bg',
          'o.bg',
          'p.bg',
          'q.bg',
          'r.bg',
          's.bg',
          't.bg',
          'u.bg',
          'v.bg',
          'w.bg',
          'x.bg',
          'y.bg',
          'z.bg',
          'bh',
          'com.bh',
          'edu.bh',
          'gov.bh',
          'net.bh',
          'org.bh',
          'bi',
          'co.bi',
          'com.bi',
          'edu.bi',
          'or.bi',
          'org.bi',
          'biz',
          'bj',
          'africa.bj',
          'agro.bj',
          'architectes.bj',
          'assur.bj',
          'avocats.bj',
          'co.bj',
          'com.bj',
          'eco.bj',
          'econo.bj',
          'edu.bj',
          'info.bj',
          'loisirs.bj',
          'money.bj',
          'net.bj',
          'org.bj',
          'ote.bj',
          'restaurant.bj',
          'resto.bj',
          'tourism.bj',
          'univ.bj',
          'bm',
          'com.bm',
          'edu.bm',
          'gov.bm',
          'net.bm',
          'org.bm',
          'bn',
          'com.bn',
          'edu.bn',
          'gov.bn',
          'net.bn',
          'org.bn',
          'bo',
          'com.bo',
          'edu.bo',
          'gob.bo',
          'int.bo',
          'mil.bo',
          'net.bo',
          'org.bo',
          'tv.bo',
          'web.bo',
          'academia.bo',
          'agro.bo',
          'arte.bo',
          'blog.bo',
          'bolivia.bo',
          'ciencia.bo',
          'cooperativa.bo',
          'democracia.bo',
          'deporte.bo',
          'ecologia.bo',
          'economia.bo',
          'empresa.bo',
          'indigena.bo',
          'industria.bo',
          'info.bo',
          'medicina.bo',
          'movimiento.bo',
          'musica.bo',
          'natural.bo',
          'nombre.bo',
          'noticias.bo',
          'patria.bo',
          'plurinacional.bo',
          'politica.bo',
          'profesional.bo',
          'pueblo.bo',
          'revista.bo',
          'salud.bo',
          'tecnologia.bo',
          'tksat.bo',
          'transporte.bo',
          'wiki.bo',
          'br',
          '9guacu.br',
          'abc.br',
          'adm.br',
          'adv.br',
          'agr.br',
          'aju.br',
          'am.br',
          'anani.br',
          'aparecida.br',
          'app.br',
          'arq.br',
          'art.br',
          'ato.br',
          'b.br',
          'barueri.br',
          'belem.br',
          'bet.br',
          'bhz.br',
          'bib.br',
          'bio.br',
          'blog.br',
          'bmd.br',
          'boavista.br',
          'bsb.br',
          'campinagrande.br',
          'campinas.br',
          'caxias.br',
          'cim.br',
          'cng.br',
          'cnt.br',
          'com.br',
          'contagem.br',
          'coop.br',
          'coz.br',
          'cri.br',
          'cuiaba.br',
          'curitiba.br',
          'def.br',
          'des.br',
          'det.br',
          'dev.br',
          'ecn.br',
          'eco.br',
          'edu.br',
          'emp.br',
          'enf.br',
          'eng.br',
          'esp.br',
          'etc.br',
          'eti.br',
          'far.br',
          'feira.br',
          'flog.br',
          'floripa.br',
          'fm.br',
          'fnd.br',
          'fortal.br',
          'fot.br',
          'foz.br',
          'fst.br',
          'g12.br',
          'geo.br',
          'ggf.br',
          'goiania.br',
          'gov.br',
          'ac.gov.br',
          'al.gov.br',
          'am.gov.br',
          'ap.gov.br',
          'ba.gov.br',
          'ce.gov.br',
          'df.gov.br',
          'es.gov.br',
          'go.gov.br',
          'ma.gov.br',
          'mg.gov.br',
          'ms.gov.br',
          'mt.gov.br',
          'pa.gov.br',
          'pb.gov.br',
          'pe.gov.br',
          'pi.gov.br',
          'pr.gov.br',
          'rj.gov.br',
          'rn.gov.br',
          'ro.gov.br',
          'rr.gov.br',
          'rs.gov.br',
          'sc.gov.br',
          'se.gov.br',
          'sp.gov.br',
          'to.gov.br',
          'gru.br',
          'imb.br',
          'ind.br',
          'inf.br',
          'jab.br',
          'jampa.br',
          'jdf.br',
          'joinville.br',
          'jor.br',
          'jus.br',
          'leg.br',
          'leilao.br',
          'lel.br',
          'log.br',
          'londrina.br',
          'macapa.br',
          'maceio.br',
          'manaus.br',
          'maringa.br',
          'mat.br',
          'med.br',
          'mil.br',
          'morena.br',
          'mp.br',
          'mus.br',
          'natal.br',
          'net.br',
          'niteroi.br',
          '*.nom.br',
          'not.br',
          'ntr.br',
          'odo.br',
          'ong.br',
          'org.br',
          'osasco.br',
          'palmas.br',
          'poa.br',
          'ppg.br',
          'pro.br',
          'psc.br',
          'psi.br',
          'pvh.br',
          'qsl.br',
          'radio.br',
          'rec.br',
          'recife.br',
          'rep.br',
          'ribeirao.br',
          'rio.br',
          'riobranco.br',
          'riopreto.br',
          'salvador.br',
          'sampa.br',
          'santamaria.br',
          'santoandre.br',
          'saobernardo.br',
          'saogonca.br',
          'seg.br',
          'sjc.br',
          'slg.br',
          'slz.br',
          'sorocaba.br',
          'srv.br',
          'taxi.br',
          'tc.br',
          'tec.br',
          'teo.br',
          'the.br',
          'tmp.br',
          'trd.br',
          'tur.br',
          'tv.br',
          'udi.br',
          'vet.br',
          'vix.br',
          'vlog.br',
          'wiki.br',
          'zlg.br',
          'bs',
          'com.bs',
          'edu.bs',
          'gov.bs',
          'net.bs',
          'org.bs',
          'bt',
          'com.bt',
          'edu.bt',
          'gov.bt',
          'net.bt',
          'org.bt',
          'bv',
          'bw',
          'co.bw',
          'org.bw',
          'by',
          'gov.by',
          'mil.by',
          'com.by',
          'of.by',
          'bz',
          'co.bz',
          'com.bz',
          'edu.bz',
          'gov.bz',
          'net.bz',
          'org.bz',
          'ca',
          'ab.ca',
          'bc.ca',
          'mb.ca',
          'nb.ca',
          'nf.ca',
          'nl.ca',
          'ns.ca',
          'nt.ca',
          'nu.ca',
          'on.ca',
          'pe.ca',
          'qc.ca',
          'sk.ca',
          'yk.ca',
          'gc.ca',
          'cat',
          'cc',
          'cd',
          'gov.cd',
          'cf',
          'cg',
          'ch',
          'ci',
          'ac.ci',
          'a\xe9roport.ci',
          'asso.ci',
          'co.ci',
          'com.ci',
          'ed.ci',
          'edu.ci',
          'go.ci',
          'gouv.ci',
          'int.ci',
          'net.ci',
          'or.ci',
          'org.ci',
          '*.ck',
          '!www.ck',
          'cl',
          'co.cl',
          'gob.cl',
          'gov.cl',
          'mil.cl',
          'cm',
          'co.cm',
          'com.cm',
          'gov.cm',
          'net.cm',
          'cn',
          'ac.cn',
          'com.cn',
          'edu.cn',
          'gov.cn',
          'mil.cn',
          'net.cn',
          'org.cn',
          '公司.cn',
          '網絡.cn',
          '网络.cn',
          'ah.cn',
          'bj.cn',
          'cq.cn',
          'fj.cn',
          'gd.cn',
          'gs.cn',
          'gx.cn',
          'gz.cn',
          'ha.cn',
          'hb.cn',
          'he.cn',
          'hi.cn',
          'hk.cn',
          'hl.cn',
          'hn.cn',
          'jl.cn',
          'js.cn',
          'jx.cn',
          'ln.cn',
          'mo.cn',
          'nm.cn',
          'nx.cn',
          'qh.cn',
          'sc.cn',
          'sd.cn',
          'sh.cn',
          'sn.cn',
          'sx.cn',
          'tj.cn',
          'tw.cn',
          'xj.cn',
          'xz.cn',
          'yn.cn',
          'zj.cn',
          'co',
          'com.co',
          'edu.co',
          'gov.co',
          'mil.co',
          'net.co',
          'nom.co',
          'org.co',
          'com',
          'coop',
          'cr',
          'ac.cr',
          'co.cr',
          'ed.cr',
          'fi.cr',
          'go.cr',
          'or.cr',
          'sa.cr',
          'cu',
          'com.cu',
          'edu.cu',
          'gob.cu',
          'inf.cu',
          'nat.cu',
          'net.cu',
          'org.cu',
          'cv',
          'com.cv',
          'edu.cv',
          'id.cv',
          'int.cv',
          'net.cv',
          'nome.cv',
          'org.cv',
          'publ.cv',
          'cw',
          'com.cw',
          'edu.cw',
          'net.cw',
          'org.cw',
          'cx',
          'gov.cx',
          'cy',
          'ac.cy',
          'biz.cy',
          'com.cy',
          'ekloges.cy',
          'gov.cy',
          'ltd.cy',
          'mil.cy',
          'net.cy',
          'org.cy',
          'press.cy',
          'pro.cy',
          'tm.cy',
          'cz',
          'de',
          'dj',
          'dk',
          'dm',
          'co.dm',
          'com.dm',
          'edu.dm',
          'gov.dm',
          'net.dm',
          'org.dm',
          'do',
          'art.do',
          'com.do',
          'edu.do',
          'gob.do',
          'gov.do',
          'mil.do',
          'net.do',
          'org.do',
          'sld.do',
          'web.do',
          'dz',
          'art.dz',
          'asso.dz',
          'com.dz',
          'edu.dz',
          'gov.dz',
          'net.dz',
          'org.dz',
          'pol.dz',
          'soc.dz',
          'tm.dz',
          'ec',
          'com.ec',
          'edu.ec',
          'fin.ec',
          'gob.ec',
          'gov.ec',
          'info.ec',
          'k12.ec',
          'med.ec',
          'mil.ec',
          'net.ec',
          'org.ec',
          'pro.ec',
          'edu',
          'ee',
          'aip.ee',
          'com.ee',
          'edu.ee',
          'fie.ee',
          'gov.ee',
          'lib.ee',
          'med.ee',
          'org.ee',
          'pri.ee',
          'riik.ee',
          'eg',
          'ac.eg',
          'com.eg',
          'edu.eg',
          'eun.eg',
          'gov.eg',
          'info.eg',
          'me.eg',
          'mil.eg',
          'name.eg',
          'net.eg',
          'org.eg',
          'sci.eg',
          'sport.eg',
          'tv.eg',
          '*.er',
          'es',
          'com.es',
          'edu.es',
          'gob.es',
          'nom.es',
          'org.es',
          'et',
          'biz.et',
          'com.et',
          'edu.et',
          'gov.et',
          'info.et',
          'name.et',
          'net.et',
          'org.et',
          'eu',
          'fi',
          'aland.fi',
          'fj',
          'ac.fj',
          'biz.fj',
          'com.fj',
          'gov.fj',
          'info.fj',
          'mil.fj',
          'name.fj',
          'net.fj',
          'org.fj',
          'pro.fj',
          '*.fk',
          'fm',
          'com.fm',
          'edu.fm',
          'net.fm',
          'org.fm',
          'fo',
          'fr',
          'asso.fr',
          'com.fr',
          'gouv.fr',
          'nom.fr',
          'prd.fr',
          'tm.fr',
          'avoues.fr',
          'cci.fr',
          'greta.fr',
          'huissier-justice.fr',
          'ga',
          'gb',
          'gd',
          'edu.gd',
          'gov.gd',
          'ge',
          'com.ge',
          'edu.ge',
          'gov.ge',
          'net.ge',
          'org.ge',
          'pvt.ge',
          'school.ge',
          'gf',
          'gg',
          'co.gg',
          'net.gg',
          'org.gg',
          'gh',
          'com.gh',
          'edu.gh',
          'gov.gh',
          'mil.gh',
          'org.gh',
          'gi',
          'com.gi',
          'edu.gi',
          'gov.gi',
          'ltd.gi',
          'mod.gi',
          'org.gi',
          'gl',
          'co.gl',
          'com.gl',
          'edu.gl',
          'net.gl',
          'org.gl',
          'gm',
          'gn',
          'ac.gn',
          'com.gn',
          'edu.gn',
          'gov.gn',
          'net.gn',
          'org.gn',
          'gov',
          'gp',
          'asso.gp',
          'com.gp',
          'edu.gp',
          'mobi.gp',
          'net.gp',
          'org.gp',
          'gq',
          'gr',
          'com.gr',
          'edu.gr',
          'gov.gr',
          'net.gr',
          'org.gr',
          'gs',
          'gt',
          'com.gt',
          'edu.gt',
          'gob.gt',
          'ind.gt',
          'mil.gt',
          'net.gt',
          'org.gt',
          'gu',
          'com.gu',
          'edu.gu',
          'gov.gu',
          'guam.gu',
          'info.gu',
          'net.gu',
          'org.gu',
          'web.gu',
          'gw',
          'gy',
          'co.gy',
          'com.gy',
          'edu.gy',
          'gov.gy',
          'net.gy',
          'org.gy',
          'hk',
          'com.hk',
          'edu.hk',
          'gov.hk',
          'idv.hk',
          'net.hk',
          'org.hk',
          '个人.hk',
          '個人.hk',
          '公司.hk',
          '政府.hk',
          '敎育.hk',
          '教育.hk',
          '箇人.hk',
          '組織.hk',
          '組织.hk',
          '網絡.hk',
          '網络.hk',
          '组織.hk',
          '组织.hk',
          '网絡.hk',
          '网络.hk',
          'hm',
          'hn',
          'com.hn',
          'edu.hn',
          'gob.hn',
          'mil.hn',
          'net.hn',
          'org.hn',
          'hr',
          'com.hr',
          'from.hr',
          'iz.hr',
          'name.hr',
          'ht',
          'adult.ht',
          'art.ht',
          'asso.ht',
          'com.ht',
          'coop.ht',
          'edu.ht',
          'firm.ht',
          'gouv.ht',
          'info.ht',
          'med.ht',
          'net.ht',
          'org.ht',
          'perso.ht',
          'pol.ht',
          'pro.ht',
          'rel.ht',
          'shop.ht',
          'hu',
          '2000.hu',
          'agrar.hu',
          'bolt.hu',
          'casino.hu',
          'city.hu',
          'co.hu',
          'erotica.hu',
          'erotika.hu',
          'film.hu',
          'forum.hu',
          'games.hu',
          'hotel.hu',
          'info.hu',
          'ingatlan.hu',
          'jogasz.hu',
          'konyvelo.hu',
          'lakas.hu',
          'media.hu',
          'news.hu',
          'org.hu',
          'priv.hu',
          'reklam.hu',
          'sex.hu',
          'shop.hu',
          'sport.hu',
          'suli.hu',
          'szex.hu',
          'tm.hu',
          'tozsde.hu',
          'utazas.hu',
          'video.hu',
          'id',
          'ac.id',
          'biz.id',
          'co.id',
          'desa.id',
          'go.id',
          'mil.id',
          'my.id',
          'net.id',
          'or.id',
          'ponpes.id',
          'sch.id',
          'web.id',
          'ie',
          'gov.ie',
          'il',
          'ac.il',
          'co.il',
          'gov.il',
          'idf.il',
          'k12.il',
          'muni.il',
          'net.il',
          'org.il',
          'ישראל',
          'אקדמיה.ישראל',
          'ישוב.ישראל',
          'צהל.ישראל',
          'ממשל.ישראל',
          'im',
          'ac.im',
          'co.im',
          'ltd.co.im',
          'plc.co.im',
          'com.im',
          'net.im',
          'org.im',
          'tt.im',
          'tv.im',
          'in',
          '5g.in',
          '6g.in',
          'ac.in',
          'ai.in',
          'am.in',
          'bihar.in',
          'biz.in',
          'business.in',
          'ca.in',
          'cn.in',
          'co.in',
          'com.in',
          'coop.in',
          'cs.in',
          'delhi.in',
          'dr.in',
          'edu.in',
          'er.in',
          'firm.in',
          'gen.in',
          'gov.in',
          'gujarat.in',
          'ind.in',
          'info.in',
          'int.in',
          'internet.in',
          'io.in',
          'me.in',
          'mil.in',
          'net.in',
          'nic.in',
          'org.in',
          'pg.in',
          'post.in',
          'pro.in',
          'res.in',
          'travel.in',
          'tv.in',
          'uk.in',
          'up.in',
          'us.in',
          'info',
          'int',
          'eu.int',
          'io',
          'co.io',
          'com.io',
          'edu.io',
          'gov.io',
          'mil.io',
          'net.io',
          'nom.io',
          'org.io',
          'iq',
          'com.iq',
          'edu.iq',
          'gov.iq',
          'mil.iq',
          'net.iq',
          'org.iq',
          'ir',
          'ac.ir',
          'co.ir',
          'gov.ir',
          'id.ir',
          'net.ir',
          'org.ir',
          'sch.ir',
          'ایران.ir',
          'ايران.ir',
          'is',
          'it',
          'edu.it',
          'gov.it',
          'abr.it',
          'abruzzo.it',
          'aosta-valley.it',
          'aostavalley.it',
          'bas.it',
          'basilicata.it',
          'cal.it',
          'calabria.it',
          'cam.it',
          'campania.it',
          'emilia-romagna.it',
          'emiliaromagna.it',
          'emr.it',
          'friuli-v-giulia.it',
          'friuli-ve-giulia.it',
          'friuli-vegiulia.it',
          'friuli-venezia-giulia.it',
          'friuli-veneziagiulia.it',
          'friuli-vgiulia.it',
          'friuliv-giulia.it',
          'friulive-giulia.it',
          'friulivegiulia.it',
          'friulivenezia-giulia.it',
          'friuliveneziagiulia.it',
          'friulivgiulia.it',
          'fvg.it',
          'laz.it',
          'lazio.it',
          'lig.it',
          'liguria.it',
          'lom.it',
          'lombardia.it',
          'lombardy.it',
          'lucania.it',
          'mar.it',
          'marche.it',
          'mol.it',
          'molise.it',
          'piedmont.it',
          'piemonte.it',
          'pmn.it',
          'pug.it',
          'puglia.it',
          'sar.it',
          'sardegna.it',
          'sardinia.it',
          'sic.it',
          'sicilia.it',
          'sicily.it',
          'taa.it',
          'tos.it',
          'toscana.it',
          'trentin-sud-tirol.it',
          'trentin-s\xfcd-tirol.it',
          'trentin-sudtirol.it',
          'trentin-s\xfcdtirol.it',
          'trentin-sued-tirol.it',
          'trentin-suedtirol.it',
          'trentino.it',
          'trentino-a-adige.it',
          'trentino-aadige.it',
          'trentino-alto-adige.it',
          'trentino-altoadige.it',
          'trentino-s-tirol.it',
          'trentino-stirol.it',
          'trentino-sud-tirol.it',
          'trentino-s\xfcd-tirol.it',
          'trentino-sudtirol.it',
          'trentino-s\xfcdtirol.it',
          'trentino-sued-tirol.it',
          'trentino-suedtirol.it',
          'trentinoa-adige.it',
          'trentinoaadige.it',
          'trentinoalto-adige.it',
          'trentinoaltoadige.it',
          'trentinos-tirol.it',
          'trentinostirol.it',
          'trentinosud-tirol.it',
          'trentinos\xfcd-tirol.it',
          'trentinosudtirol.it',
          'trentinos\xfcdtirol.it',
          'trentinosued-tirol.it',
          'trentinosuedtirol.it',
          'trentinsud-tirol.it',
          'trentins\xfcd-tirol.it',
          'trentinsudtirol.it',
          'trentins\xfcdtirol.it',
          'trentinsued-tirol.it',
          'trentinsuedtirol.it',
          'tuscany.it',
          'umb.it',
          'umbria.it',
          'val-d-aosta.it',
          'val-daosta.it',
          'vald-aosta.it',
          'valdaosta.it',
          'valle-aosta.it',
          'valle-d-aosta.it',
          'valle-daosta.it',
          'valleaosta.it',
          'valled-aosta.it',
          'valledaosta.it',
          'vallee-aoste.it',
          'vall\xe9e-aoste.it',
          'vallee-d-aoste.it',
          'vall\xe9e-d-aoste.it',
          'valleeaoste.it',
          'vall\xe9eaoste.it',
          'valleedaoste.it',
          'vall\xe9edaoste.it',
          'vao.it',
          'vda.it',
          'ven.it',
          'veneto.it',
          'ag.it',
          'agrigento.it',
          'al.it',
          'alessandria.it',
          'alto-adige.it',
          'altoadige.it',
          'an.it',
          'ancona.it',
          'andria-barletta-trani.it',
          'andria-trani-barletta.it',
          'andriabarlettatrani.it',
          'andriatranibarletta.it',
          'ao.it',
          'aosta.it',
          'aoste.it',
          'ap.it',
          'aq.it',
          'aquila.it',
          'ar.it',
          'arezzo.it',
          'ascoli-piceno.it',
          'ascolipiceno.it',
          'asti.it',
          'at.it',
          'av.it',
          'avellino.it',
          'ba.it',
          'balsan.it',
          'balsan-sudtirol.it',
          'balsan-s\xfcdtirol.it',
          'balsan-suedtirol.it',
          'bari.it',
          'barletta-trani-andria.it',
          'barlettatraniandria.it',
          'belluno.it',
          'benevento.it',
          'bergamo.it',
          'bg.it',
          'bi.it',
          'biella.it',
          'bl.it',
          'bn.it',
          'bo.it',
          'bologna.it',
          'bolzano.it',
          'bolzano-altoadige.it',
          'bozen.it',
          'bozen-sudtirol.it',
          'bozen-s\xfcdtirol.it',
          'bozen-suedtirol.it',
          'br.it',
          'brescia.it',
          'brindisi.it',
          'bs.it',
          'bt.it',
          'bulsan.it',
          'bulsan-sudtirol.it',
          'bulsan-s\xfcdtirol.it',
          'bulsan-suedtirol.it',
          'bz.it',
          'ca.it',
          'cagliari.it',
          'caltanissetta.it',
          'campidano-medio.it',
          'campidanomedio.it',
          'campobasso.it',
          'carbonia-iglesias.it',
          'carboniaiglesias.it',
          'carrara-massa.it',
          'carraramassa.it',
          'caserta.it',
          'catania.it',
          'catanzaro.it',
          'cb.it',
          'ce.it',
          'cesena-forli.it',
          'cesena-forl\xec.it',
          'cesenaforli.it',
          'cesenaforl\xec.it',
          'ch.it',
          'chieti.it',
          'ci.it',
          'cl.it',
          'cn.it',
          'co.it',
          'como.it',
          'cosenza.it',
          'cr.it',
          'cremona.it',
          'crotone.it',
          'cs.it',
          'ct.it',
          'cuneo.it',
          'cz.it',
          'dell-ogliastra.it',
          'dellogliastra.it',
          'en.it',
          'enna.it',
          'fc.it',
          'fe.it',
          'fermo.it',
          'ferrara.it',
          'fg.it',
          'fi.it',
          'firenze.it',
          'florence.it',
          'fm.it',
          'foggia.it',
          'forli-cesena.it',
          'forl\xec-cesena.it',
          'forlicesena.it',
          'forl\xeccesena.it',
          'fr.it',
          'frosinone.it',
          'ge.it',
          'genoa.it',
          'genova.it',
          'go.it',
          'gorizia.it',
          'gr.it',
          'grosseto.it',
          'iglesias-carbonia.it',
          'iglesiascarbonia.it',
          'im.it',
          'imperia.it',
          'is.it',
          'isernia.it',
          'kr.it',
          'la-spezia.it',
          'laquila.it',
          'laspezia.it',
          'latina.it',
          'lc.it',
          'le.it',
          'lecce.it',
          'lecco.it',
          'li.it',
          'livorno.it',
          'lo.it',
          'lodi.it',
          'lt.it',
          'lu.it',
          'lucca.it',
          'macerata.it',
          'mantova.it',
          'massa-carrara.it',
          'massacarrara.it',
          'matera.it',
          'mb.it',
          'mc.it',
          'me.it',
          'medio-campidano.it',
          'mediocampidano.it',
          'messina.it',
          'mi.it',
          'milan.it',
          'milano.it',
          'mn.it',
          'mo.it',
          'modena.it',
          'monza.it',
          'monza-brianza.it',
          'monza-e-della-brianza.it',
          'monzabrianza.it',
          'monzaebrianza.it',
          'monzaedellabrianza.it',
          'ms.it',
          'mt.it',
          'na.it',
          'naples.it',
          'napoli.it',
          'no.it',
          'novara.it',
          'nu.it',
          'nuoro.it',
          'og.it',
          'ogliastra.it',
          'olbia-tempio.it',
          'olbiatempio.it',
          'or.it',
          'oristano.it',
          'ot.it',
          'pa.it',
          'padova.it',
          'padua.it',
          'palermo.it',
          'parma.it',
          'pavia.it',
          'pc.it',
          'pd.it',
          'pe.it',
          'perugia.it',
          'pesaro-urbino.it',
          'pesarourbino.it',
          'pescara.it',
          'pg.it',
          'pi.it',
          'piacenza.it',
          'pisa.it',
          'pistoia.it',
          'pn.it',
          'po.it',
          'pordenone.it',
          'potenza.it',
          'pr.it',
          'prato.it',
          'pt.it',
          'pu.it',
          'pv.it',
          'pz.it',
          'ra.it',
          'ragusa.it',
          'ravenna.it',
          'rc.it',
          're.it',
          'reggio-calabria.it',
          'reggio-emilia.it',
          'reggiocalabria.it',
          'reggioemilia.it',
          'rg.it',
          'ri.it',
          'rieti.it',
          'rimini.it',
          'rm.it',
          'rn.it',
          'ro.it',
          'roma.it',
          'rome.it',
          'rovigo.it',
          'sa.it',
          'salerno.it',
          'sassari.it',
          'savona.it',
          'si.it',
          'siena.it',
          'siracusa.it',
          'so.it',
          'sondrio.it',
          'sp.it',
          'sr.it',
          'ss.it',
          's\xfcdtirol.it',
          'suedtirol.it',
          'sv.it',
          'ta.it',
          'taranto.it',
          'te.it',
          'tempio-olbia.it',
          'tempioolbia.it',
          'teramo.it',
          'terni.it',
          'tn.it',
          'to.it',
          'torino.it',
          'tp.it',
          'tr.it',
          'trani-andria-barletta.it',
          'trani-barletta-andria.it',
          'traniandriabarletta.it',
          'tranibarlettaandria.it',
          'trapani.it',
          'trento.it',
          'treviso.it',
          'trieste.it',
          'ts.it',
          'turin.it',
          'tv.it',
          'ud.it',
          'udine.it',
          'urbino-pesaro.it',
          'urbinopesaro.it',
          'va.it',
          'varese.it',
          'vb.it',
          'vc.it',
          've.it',
          'venezia.it',
          'venice.it',
          'verbania.it',
          'vercelli.it',
          'verona.it',
          'vi.it',
          'vibo-valentia.it',
          'vibovalentia.it',
          'vicenza.it',
          'viterbo.it',
          'vr.it',
          'vs.it',
          'vt.it',
          'vv.it',
          'je',
          'co.je',
          'net.je',
          'org.je',
          '*.jm',
          'jo',
          'agri.jo',
          'ai.jo',
          'com.jo',
          'edu.jo',
          'eng.jo',
          'fm.jo',
          'gov.jo',
          'mil.jo',
          'net.jo',
          'org.jo',
          'per.jo',
          'phd.jo',
          'sch.jo',
          'tv.jo',
          'jobs',
          'jp',
          'ac.jp',
          'ad.jp',
          'co.jp',
          'ed.jp',
          'go.jp',
          'gr.jp',
          'lg.jp',
          'ne.jp',
          'or.jp',
          'aichi.jp',
          'akita.jp',
          'aomori.jp',
          'chiba.jp',
          'ehime.jp',
          'fukui.jp',
          'fukuoka.jp',
          'fukushima.jp',
          'gifu.jp',
          'gunma.jp',
          'hiroshima.jp',
          'hokkaido.jp',
          'hyogo.jp',
          'ibaraki.jp',
          'ishikawa.jp',
          'iwate.jp',
          'kagawa.jp',
          'kagoshima.jp',
          'kanagawa.jp',
          'kochi.jp',
          'kumamoto.jp',
          'kyoto.jp',
          'mie.jp',
          'miyagi.jp',
          'miyazaki.jp',
          'nagano.jp',
          'nagasaki.jp',
          'nara.jp',
          'niigata.jp',
          'oita.jp',
          'okayama.jp',
          'okinawa.jp',
          'osaka.jp',
          'saga.jp',
          'saitama.jp',
          'shiga.jp',
          'shimane.jp',
          'shizuoka.jp',
          'tochigi.jp',
          'tokushima.jp',
          'tokyo.jp',
          'tottori.jp',
          'toyama.jp',
          'wakayama.jp',
          'yamagata.jp',
          'yamaguchi.jp',
          'yamanashi.jp',
          '三重.jp',
          '京都.jp',
          '佐賀.jp',
          '兵庫.jp',
          '北海道.jp',
          '千葉.jp',
          '和歌山.jp',
          '埼玉.jp',
          '大分.jp',
          '大阪.jp',
          '奈良.jp',
          '宮城.jp',
          '宮崎.jp',
          '富山.jp',
          '山口.jp',
          '山形.jp',
          '山梨.jp',
          '岐阜.jp',
          '岡山.jp',
          '岩手.jp',
          '島根.jp',
          '広島.jp',
          '徳島.jp',
          '愛媛.jp',
          '愛知.jp',
          '新潟.jp',
          '東京.jp',
          '栃木.jp',
          '沖縄.jp',
          '滋賀.jp',
          '熊本.jp',
          '石川.jp',
          '神奈川.jp',
          '福井.jp',
          '福岡.jp',
          '福島.jp',
          '秋田.jp',
          '群馬.jp',
          '茨城.jp',
          '長崎.jp',
          '長野.jp',
          '青森.jp',
          '静岡.jp',
          '香川.jp',
          '高知.jp',
          '鳥取.jp',
          '鹿児島.jp',
          '*.kawasaki.jp',
          '!city.kawasaki.jp',
          '*.kitakyushu.jp',
          '!city.kitakyushu.jp',
          '*.kobe.jp',
          '!city.kobe.jp',
          '*.nagoya.jp',
          '!city.nagoya.jp',
          '*.sapporo.jp',
          '!city.sapporo.jp',
          '*.sendai.jp',
          '!city.sendai.jp',
          '*.yokohama.jp',
          '!city.yokohama.jp',
          'aisai.aichi.jp',
          'ama.aichi.jp',
          'anjo.aichi.jp',
          'asuke.aichi.jp',
          'chiryu.aichi.jp',
          'chita.aichi.jp',
          'fuso.aichi.jp',
          'gamagori.aichi.jp',
          'handa.aichi.jp',
          'hazu.aichi.jp',
          'hekinan.aichi.jp',
          'higashiura.aichi.jp',
          'ichinomiya.aichi.jp',
          'inazawa.aichi.jp',
          'inuyama.aichi.jp',
          'isshiki.aichi.jp',
          'iwakura.aichi.jp',
          'kanie.aichi.jp',
          'kariya.aichi.jp',
          'kasugai.aichi.jp',
          'kira.aichi.jp',
          'kiyosu.aichi.jp',
          'komaki.aichi.jp',
          'konan.aichi.jp',
          'kota.aichi.jp',
          'mihama.aichi.jp',
          'miyoshi.aichi.jp',
          'nishio.aichi.jp',
          'nisshin.aichi.jp',
          'obu.aichi.jp',
          'oguchi.aichi.jp',
          'oharu.aichi.jp',
          'okazaki.aichi.jp',
          'owariasahi.aichi.jp',
          'seto.aichi.jp',
          'shikatsu.aichi.jp',
          'shinshiro.aichi.jp',
          'shitara.aichi.jp',
          'tahara.aichi.jp',
          'takahama.aichi.jp',
          'tobishima.aichi.jp',
          'toei.aichi.jp',
          'togo.aichi.jp',
          'tokai.aichi.jp',
          'tokoname.aichi.jp',
          'toyoake.aichi.jp',
          'toyohashi.aichi.jp',
          'toyokawa.aichi.jp',
          'toyone.aichi.jp',
          'toyota.aichi.jp',
          'tsushima.aichi.jp',
          'yatomi.aichi.jp',
          'akita.akita.jp',
          'daisen.akita.jp',
          'fujisato.akita.jp',
          'gojome.akita.jp',
          'hachirogata.akita.jp',
          'happou.akita.jp',
          'higashinaruse.akita.jp',
          'honjo.akita.jp',
          'honjyo.akita.jp',
          'ikawa.akita.jp',
          'kamikoani.akita.jp',
          'kamioka.akita.jp',
          'katagami.akita.jp',
          'kazuno.akita.jp',
          'kitaakita.akita.jp',
          'kosaka.akita.jp',
          'kyowa.akita.jp',
          'misato.akita.jp',
          'mitane.akita.jp',
          'moriyoshi.akita.jp',
          'nikaho.akita.jp',
          'noshiro.akita.jp',
          'odate.akita.jp',
          'oga.akita.jp',
          'ogata.akita.jp',
          'semboku.akita.jp',
          'yokote.akita.jp',
          'yurihonjo.akita.jp',
          'aomori.aomori.jp',
          'gonohe.aomori.jp',
          'hachinohe.aomori.jp',
          'hashikami.aomori.jp',
          'hiranai.aomori.jp',
          'hirosaki.aomori.jp',
          'itayanagi.aomori.jp',
          'kuroishi.aomori.jp',
          'misawa.aomori.jp',
          'mutsu.aomori.jp',
          'nakadomari.aomori.jp',
          'noheji.aomori.jp',
          'oirase.aomori.jp',
          'owani.aomori.jp',
          'rokunohe.aomori.jp',
          'sannohe.aomori.jp',
          'shichinohe.aomori.jp',
          'shingo.aomori.jp',
          'takko.aomori.jp',
          'towada.aomori.jp',
          'tsugaru.aomori.jp',
          'tsuruta.aomori.jp',
          'abiko.chiba.jp',
          'asahi.chiba.jp',
          'chonan.chiba.jp',
          'chosei.chiba.jp',
          'choshi.chiba.jp',
          'chuo.chiba.jp',
          'funabashi.chiba.jp',
          'futtsu.chiba.jp',
          'hanamigawa.chiba.jp',
          'ichihara.chiba.jp',
          'ichikawa.chiba.jp',
          'ichinomiya.chiba.jp',
          'inzai.chiba.jp',
          'isumi.chiba.jp',
          'kamagaya.chiba.jp',
          'kamogawa.chiba.jp',
          'kashiwa.chiba.jp',
          'katori.chiba.jp',
          'katsuura.chiba.jp',
          'kimitsu.chiba.jp',
          'kisarazu.chiba.jp',
          'kozaki.chiba.jp',
          'kujukuri.chiba.jp',
          'kyonan.chiba.jp',
          'matsudo.chiba.jp',
          'midori.chiba.jp',
          'mihama.chiba.jp',
          'minamiboso.chiba.jp',
          'mobara.chiba.jp',
          'mutsuzawa.chiba.jp',
          'nagara.chiba.jp',
          'nagareyama.chiba.jp',
          'narashino.chiba.jp',
          'narita.chiba.jp',
          'noda.chiba.jp',
          'oamishirasato.chiba.jp',
          'omigawa.chiba.jp',
          'onjuku.chiba.jp',
          'otaki.chiba.jp',
          'sakae.chiba.jp',
          'sakura.chiba.jp',
          'shimofusa.chiba.jp',
          'shirako.chiba.jp',
          'shiroi.chiba.jp',
          'shisui.chiba.jp',
          'sodegaura.chiba.jp',
          'sosa.chiba.jp',
          'tako.chiba.jp',
          'tateyama.chiba.jp',
          'togane.chiba.jp',
          'tohnosho.chiba.jp',
          'tomisato.chiba.jp',
          'urayasu.chiba.jp',
          'yachimata.chiba.jp',
          'yachiyo.chiba.jp',
          'yokaichiba.chiba.jp',
          'yokoshibahikari.chiba.jp',
          'yotsukaido.chiba.jp',
          'ainan.ehime.jp',
          'honai.ehime.jp',
          'ikata.ehime.jp',
          'imabari.ehime.jp',
          'iyo.ehime.jp',
          'kamijima.ehime.jp',
          'kihoku.ehime.jp',
          'kumakogen.ehime.jp',
          'masaki.ehime.jp',
          'matsuno.ehime.jp',
          'matsuyama.ehime.jp',
          'namikata.ehime.jp',
          'niihama.ehime.jp',
          'ozu.ehime.jp',
          'saijo.ehime.jp',
          'seiyo.ehime.jp',
          'shikokuchuo.ehime.jp',
          'tobe.ehime.jp',
          'toon.ehime.jp',
          'uchiko.ehime.jp',
          'uwajima.ehime.jp',
          'yawatahama.ehime.jp',
          'echizen.fukui.jp',
          'eiheiji.fukui.jp',
          'fukui.fukui.jp',
          'ikeda.fukui.jp',
          'katsuyama.fukui.jp',
          'mihama.fukui.jp',
          'minamiechizen.fukui.jp',
          'obama.fukui.jp',
          'ohi.fukui.jp',
          'ono.fukui.jp',
          'sabae.fukui.jp',
          'sakai.fukui.jp',
          'takahama.fukui.jp',
          'tsuruga.fukui.jp',
          'wakasa.fukui.jp',
          'ashiya.fukuoka.jp',
          'buzen.fukuoka.jp',
          'chikugo.fukuoka.jp',
          'chikuho.fukuoka.jp',
          'chikujo.fukuoka.jp',
          'chikushino.fukuoka.jp',
          'chikuzen.fukuoka.jp',
          'chuo.fukuoka.jp',
          'dazaifu.fukuoka.jp',
          'fukuchi.fukuoka.jp',
          'hakata.fukuoka.jp',
          'higashi.fukuoka.jp',
          'hirokawa.fukuoka.jp',
          'hisayama.fukuoka.jp',
          'iizuka.fukuoka.jp',
          'inatsuki.fukuoka.jp',
          'kaho.fukuoka.jp',
          'kasuga.fukuoka.jp',
          'kasuya.fukuoka.jp',
          'kawara.fukuoka.jp',
          'keisen.fukuoka.jp',
          'koga.fukuoka.jp',
          'kurate.fukuoka.jp',
          'kurogi.fukuoka.jp',
          'kurume.fukuoka.jp',
          'minami.fukuoka.jp',
          'miyako.fukuoka.jp',
          'miyama.fukuoka.jp',
          'miyawaka.fukuoka.jp',
          'mizumaki.fukuoka.jp',
          'munakata.fukuoka.jp',
          'nakagawa.fukuoka.jp',
          'nakama.fukuoka.jp',
          'nishi.fukuoka.jp',
          'nogata.fukuoka.jp',
          'ogori.fukuoka.jp',
          'okagaki.fukuoka.jp',
          'okawa.fukuoka.jp',
          'oki.fukuoka.jp',
          'omuta.fukuoka.jp',
          'onga.fukuoka.jp',
          'onojo.fukuoka.jp',
          'oto.fukuoka.jp',
          'saigawa.fukuoka.jp',
          'sasaguri.fukuoka.jp',
          'shingu.fukuoka.jp',
          'shinyoshitomi.fukuoka.jp',
          'shonai.fukuoka.jp',
          'soeda.fukuoka.jp',
          'sue.fukuoka.jp',
          'tachiarai.fukuoka.jp',
          'tagawa.fukuoka.jp',
          'takata.fukuoka.jp',
          'toho.fukuoka.jp',
          'toyotsu.fukuoka.jp',
          'tsuiki.fukuoka.jp',
          'ukiha.fukuoka.jp',
          'umi.fukuoka.jp',
          'usui.fukuoka.jp',
          'yamada.fukuoka.jp',
          'yame.fukuoka.jp',
          'yanagawa.fukuoka.jp',
          'yukuhashi.fukuoka.jp',
          'aizubange.fukushima.jp',
          'aizumisato.fukushima.jp',
          'aizuwakamatsu.fukushima.jp',
          'asakawa.fukushima.jp',
          'bandai.fukushima.jp',
          'date.fukushima.jp',
          'fukushima.fukushima.jp',
          'furudono.fukushima.jp',
          'futaba.fukushima.jp',
          'hanawa.fukushima.jp',
          'higashi.fukushima.jp',
          'hirata.fukushima.jp',
          'hirono.fukushima.jp',
          'iitate.fukushima.jp',
          'inawashiro.fukushima.jp',
          'ishikawa.fukushima.jp',
          'iwaki.fukushima.jp',
          'izumizaki.fukushima.jp',
          'kagamiishi.fukushima.jp',
          'kaneyama.fukushima.jp',
          'kawamata.fukushima.jp',
          'kitakata.fukushima.jp',
          'kitashiobara.fukushima.jp',
          'koori.fukushima.jp',
          'koriyama.fukushima.jp',
          'kunimi.fukushima.jp',
          'miharu.fukushima.jp',
          'mishima.fukushima.jp',
          'namie.fukushima.jp',
          'nango.fukushima.jp',
          'nishiaizu.fukushima.jp',
          'nishigo.fukushima.jp',
          'okuma.fukushima.jp',
          'omotego.fukushima.jp',
          'ono.fukushima.jp',
          'otama.fukushima.jp',
          'samegawa.fukushima.jp',
          'shimogo.fukushima.jp',
          'shirakawa.fukushima.jp',
          'showa.fukushima.jp',
          'soma.fukushima.jp',
          'sukagawa.fukushima.jp',
          'taishin.fukushima.jp',
          'tamakawa.fukushima.jp',
          'tanagura.fukushima.jp',
          'tenei.fukushima.jp',
          'yabuki.fukushima.jp',
          'yamato.fukushima.jp',
          'yamatsuri.fukushima.jp',
          'yanaizu.fukushima.jp',
          'yugawa.fukushima.jp',
          'anpachi.gifu.jp',
          'ena.gifu.jp',
          'gifu.gifu.jp',
          'ginan.gifu.jp',
          'godo.gifu.jp',
          'gujo.gifu.jp',
          'hashima.gifu.jp',
          'hichiso.gifu.jp',
          'hida.gifu.jp',
          'higashishirakawa.gifu.jp',
          'ibigawa.gifu.jp',
          'ikeda.gifu.jp',
          'kakamigahara.gifu.jp',
          'kani.gifu.jp',
          'kasahara.gifu.jp',
          'kasamatsu.gifu.jp',
          'kawaue.gifu.jp',
          'kitagata.gifu.jp',
          'mino.gifu.jp',
          'minokamo.gifu.jp',
          'mitake.gifu.jp',
          'mizunami.gifu.jp',
          'motosu.gifu.jp',
          'nakatsugawa.gifu.jp',
          'ogaki.gifu.jp',
          'sakahogi.gifu.jp',
          'seki.gifu.jp',
          'sekigahara.gifu.jp',
          'shirakawa.gifu.jp',
          'tajimi.gifu.jp',
          'takayama.gifu.jp',
          'tarui.gifu.jp',
          'toki.gifu.jp',
          'tomika.gifu.jp',
          'wanouchi.gifu.jp',
          'yamagata.gifu.jp',
          'yaotsu.gifu.jp',
          'yoro.gifu.jp',
          'annaka.gunma.jp',
          'chiyoda.gunma.jp',
          'fujioka.gunma.jp',
          'higashiagatsuma.gunma.jp',
          'isesaki.gunma.jp',
          'itakura.gunma.jp',
          'kanna.gunma.jp',
          'kanra.gunma.jp',
          'katashina.gunma.jp',
          'kawaba.gunma.jp',
          'kiryu.gunma.jp',
          'kusatsu.gunma.jp',
          'maebashi.gunma.jp',
          'meiwa.gunma.jp',
          'midori.gunma.jp',
          'minakami.gunma.jp',
          'naganohara.gunma.jp',
          'nakanojo.gunma.jp',
          'nanmoku.gunma.jp',
          'numata.gunma.jp',
          'oizumi.gunma.jp',
          'ora.gunma.jp',
          'ota.gunma.jp',
          'shibukawa.gunma.jp',
          'shimonita.gunma.jp',
          'shinto.gunma.jp',
          'showa.gunma.jp',
          'takasaki.gunma.jp',
          'takayama.gunma.jp',
          'tamamura.gunma.jp',
          'tatebayashi.gunma.jp',
          'tomioka.gunma.jp',
          'tsukiyono.gunma.jp',
          'tsumagoi.gunma.jp',
          'ueno.gunma.jp',
          'yoshioka.gunma.jp',
          'asaminami.hiroshima.jp',
          'daiwa.hiroshima.jp',
          'etajima.hiroshima.jp',
          'fuchu.hiroshima.jp',
          'fukuyama.hiroshima.jp',
          'hatsukaichi.hiroshima.jp',
          'higashihiroshima.hiroshima.jp',
          'hongo.hiroshima.jp',
          'jinsekikogen.hiroshima.jp',
          'kaita.hiroshima.jp',
          'kui.hiroshima.jp',
          'kumano.hiroshima.jp',
          'kure.hiroshima.jp',
          'mihara.hiroshima.jp',
          'miyoshi.hiroshima.jp',
          'naka.hiroshima.jp',
          'onomichi.hiroshima.jp',
          'osakikamijima.hiroshima.jp',
          'otake.hiroshima.jp',
          'saka.hiroshima.jp',
          'sera.hiroshima.jp',
          'seranishi.hiroshima.jp',
          'shinichi.hiroshima.jp',
          'shobara.hiroshima.jp',
          'takehara.hiroshima.jp',
          'abashiri.hokkaido.jp',
          'abira.hokkaido.jp',
          'aibetsu.hokkaido.jp',
          'akabira.hokkaido.jp',
          'akkeshi.hokkaido.jp',
          'asahikawa.hokkaido.jp',
          'ashibetsu.hokkaido.jp',
          'ashoro.hokkaido.jp',
          'assabu.hokkaido.jp',
          'atsuma.hokkaido.jp',
          'bibai.hokkaido.jp',
          'biei.hokkaido.jp',
          'bifuka.hokkaido.jp',
          'bihoro.hokkaido.jp',
          'biratori.hokkaido.jp',
          'chippubetsu.hokkaido.jp',
          'chitose.hokkaido.jp',
          'date.hokkaido.jp',
          'ebetsu.hokkaido.jp',
          'embetsu.hokkaido.jp',
          'eniwa.hokkaido.jp',
          'erimo.hokkaido.jp',
          'esan.hokkaido.jp',
          'esashi.hokkaido.jp',
          'fukagawa.hokkaido.jp',
          'fukushima.hokkaido.jp',
          'furano.hokkaido.jp',
          'furubira.hokkaido.jp',
          'haboro.hokkaido.jp',
          'hakodate.hokkaido.jp',
          'hamatonbetsu.hokkaido.jp',
          'hidaka.hokkaido.jp',
          'higashikagura.hokkaido.jp',
          'higashikawa.hokkaido.jp',
          'hiroo.hokkaido.jp',
          'hokuryu.hokkaido.jp',
          'hokuto.hokkaido.jp',
          'honbetsu.hokkaido.jp',
          'horokanai.hokkaido.jp',
          'horonobe.hokkaido.jp',
          'ikeda.hokkaido.jp',
          'imakane.hokkaido.jp',
          'ishikari.hokkaido.jp',
          'iwamizawa.hokkaido.jp',
          'iwanai.hokkaido.jp',
          'kamifurano.hokkaido.jp',
          'kamikawa.hokkaido.jp',
          'kamishihoro.hokkaido.jp',
          'kamisunagawa.hokkaido.jp',
          'kamoenai.hokkaido.jp',
          'kayabe.hokkaido.jp',
          'kembuchi.hokkaido.jp',
          'kikonai.hokkaido.jp',
          'kimobetsu.hokkaido.jp',
          'kitahiroshima.hokkaido.jp',
          'kitami.hokkaido.jp',
          'kiyosato.hokkaido.jp',
          'koshimizu.hokkaido.jp',
          'kunneppu.hokkaido.jp',
          'kuriyama.hokkaido.jp',
          'kuromatsunai.hokkaido.jp',
          'kushiro.hokkaido.jp',
          'kutchan.hokkaido.jp',
          'kyowa.hokkaido.jp',
          'mashike.hokkaido.jp',
          'matsumae.hokkaido.jp',
          'mikasa.hokkaido.jp',
          'minamifurano.hokkaido.jp',
          'mombetsu.hokkaido.jp',
          'moseushi.hokkaido.jp',
          'mukawa.hokkaido.jp',
          'muroran.hokkaido.jp',
          'naie.hokkaido.jp',
          'nakagawa.hokkaido.jp',
          'nakasatsunai.hokkaido.jp',
          'nakatombetsu.hokkaido.jp',
          'nanae.hokkaido.jp',
          'nanporo.hokkaido.jp',
          'nayoro.hokkaido.jp',
          'nemuro.hokkaido.jp',
          'niikappu.hokkaido.jp',
          'niki.hokkaido.jp',
          'nishiokoppe.hokkaido.jp',
          'noboribetsu.hokkaido.jp',
          'numata.hokkaido.jp',
          'obihiro.hokkaido.jp',
          'obira.hokkaido.jp',
          'oketo.hokkaido.jp',
          'okoppe.hokkaido.jp',
          'otaru.hokkaido.jp',
          'otobe.hokkaido.jp',
          'otofuke.hokkaido.jp',
          'otoineppu.hokkaido.jp',
          'oumu.hokkaido.jp',
          'ozora.hokkaido.jp',
          'pippu.hokkaido.jp',
          'rankoshi.hokkaido.jp',
          'rebun.hokkaido.jp',
          'rikubetsu.hokkaido.jp',
          'rishiri.hokkaido.jp',
          'rishirifuji.hokkaido.jp',
          'saroma.hokkaido.jp',
          'sarufutsu.hokkaido.jp',
          'shakotan.hokkaido.jp',
          'shari.hokkaido.jp',
          'shibecha.hokkaido.jp',
          'shibetsu.hokkaido.jp',
          'shikabe.hokkaido.jp',
          'shikaoi.hokkaido.jp',
          'shimamaki.hokkaido.jp',
          'shimizu.hokkaido.jp',
          'shimokawa.hokkaido.jp',
          'shinshinotsu.hokkaido.jp',
          'shintoku.hokkaido.jp',
          'shiranuka.hokkaido.jp',
          'shiraoi.hokkaido.jp',
          'shiriuchi.hokkaido.jp',
          'sobetsu.hokkaido.jp',
          'sunagawa.hokkaido.jp',
          'taiki.hokkaido.jp',
          'takasu.hokkaido.jp',
          'takikawa.hokkaido.jp',
          'takinoue.hokkaido.jp',
          'teshikaga.hokkaido.jp',
          'tobetsu.hokkaido.jp',
          'tohma.hokkaido.jp',
          'tomakomai.hokkaido.jp',
          'tomari.hokkaido.jp',
          'toya.hokkaido.jp',
          'toyako.hokkaido.jp',
          'toyotomi.hokkaido.jp',
          'toyoura.hokkaido.jp',
          'tsubetsu.hokkaido.jp',
          'tsukigata.hokkaido.jp',
          'urakawa.hokkaido.jp',
          'urausu.hokkaido.jp',
          'uryu.hokkaido.jp',
          'utashinai.hokkaido.jp',
          'wakkanai.hokkaido.jp',
          'wassamu.hokkaido.jp',
          'yakumo.hokkaido.jp',
          'yoichi.hokkaido.jp',
          'aioi.hyogo.jp',
          'akashi.hyogo.jp',
          'ako.hyogo.jp',
          'amagasaki.hyogo.jp',
          'aogaki.hyogo.jp',
          'asago.hyogo.jp',
          'ashiya.hyogo.jp',
          'awaji.hyogo.jp',
          'fukusaki.hyogo.jp',
          'goshiki.hyogo.jp',
          'harima.hyogo.jp',
          'himeji.hyogo.jp',
          'ichikawa.hyogo.jp',
          'inagawa.hyogo.jp',
          'itami.hyogo.jp',
          'kakogawa.hyogo.jp',
          'kamigori.hyogo.jp',
          'kamikawa.hyogo.jp',
          'kasai.hyogo.jp',
          'kasuga.hyogo.jp',
          'kawanishi.hyogo.jp',
          'miki.hyogo.jp',
          'minamiawaji.hyogo.jp',
          'nishinomiya.hyogo.jp',
          'nishiwaki.hyogo.jp',
          'ono.hyogo.jp',
          'sanda.hyogo.jp',
          'sannan.hyogo.jp',
          'sasayama.hyogo.jp',
          'sayo.hyogo.jp',
          'shingu.hyogo.jp',
          'shinonsen.hyogo.jp',
          'shiso.hyogo.jp',
          'sumoto.hyogo.jp',
          'taishi.hyogo.jp',
          'taka.hyogo.jp',
          'takarazuka.hyogo.jp',
          'takasago.hyogo.jp',
          'takino.hyogo.jp',
          'tamba.hyogo.jp',
          'tatsuno.hyogo.jp',
          'toyooka.hyogo.jp',
          'yabu.hyogo.jp',
          'yashiro.hyogo.jp',
          'yoka.hyogo.jp',
          'yokawa.hyogo.jp',
          'ami.ibaraki.jp',
          'asahi.ibaraki.jp',
          'bando.ibaraki.jp',
          'chikusei.ibaraki.jp',
          'daigo.ibaraki.jp',
          'fujishiro.ibaraki.jp',
          'hitachi.ibaraki.jp',
          'hitachinaka.ibaraki.jp',
          'hitachiomiya.ibaraki.jp',
          'hitachiota.ibaraki.jp',
          'ibaraki.ibaraki.jp',
          'ina.ibaraki.jp',
          'inashiki.ibaraki.jp',
          'itako.ibaraki.jp',
          'iwama.ibaraki.jp',
          'joso.ibaraki.jp',
          'kamisu.ibaraki.jp',
          'kasama.ibaraki.jp',
          'kashima.ibaraki.jp',
          'kasumigaura.ibaraki.jp',
          'koga.ibaraki.jp',
          'miho.ibaraki.jp',
          'mito.ibaraki.jp',
          'moriya.ibaraki.jp',
          'naka.ibaraki.jp',
          'namegata.ibaraki.jp',
          'oarai.ibaraki.jp',
          'ogawa.ibaraki.jp',
          'omitama.ibaraki.jp',
          'ryugasaki.ibaraki.jp',
          'sakai.ibaraki.jp',
          'sakuragawa.ibaraki.jp',
          'shimodate.ibaraki.jp',
          'shimotsuma.ibaraki.jp',
          'shirosato.ibaraki.jp',
          'sowa.ibaraki.jp',
          'suifu.ibaraki.jp',
          'takahagi.ibaraki.jp',
          'tamatsukuri.ibaraki.jp',
          'tokai.ibaraki.jp',
          'tomobe.ibaraki.jp',
          'tone.ibaraki.jp',
          'toride.ibaraki.jp',
          'tsuchiura.ibaraki.jp',
          'tsukuba.ibaraki.jp',
          'uchihara.ibaraki.jp',
          'ushiku.ibaraki.jp',
          'yachiyo.ibaraki.jp',
          'yamagata.ibaraki.jp',
          'yawara.ibaraki.jp',
          'yuki.ibaraki.jp',
          'anamizu.ishikawa.jp',
          'hakui.ishikawa.jp',
          'hakusan.ishikawa.jp',
          'kaga.ishikawa.jp',
          'kahoku.ishikawa.jp',
          'kanazawa.ishikawa.jp',
          'kawakita.ishikawa.jp',
          'komatsu.ishikawa.jp',
          'nakanoto.ishikawa.jp',
          'nanao.ishikawa.jp',
          'nomi.ishikawa.jp',
          'nonoichi.ishikawa.jp',
          'noto.ishikawa.jp',
          'shika.ishikawa.jp',
          'suzu.ishikawa.jp',
          'tsubata.ishikawa.jp',
          'tsurugi.ishikawa.jp',
          'uchinada.ishikawa.jp',
          'wajima.ishikawa.jp',
          'fudai.iwate.jp',
          'fujisawa.iwate.jp',
          'hanamaki.iwate.jp',
          'hiraizumi.iwate.jp',
          'hirono.iwate.jp',
          'ichinohe.iwate.jp',
          'ichinoseki.iwate.jp',
          'iwaizumi.iwate.jp',
          'iwate.iwate.jp',
          'joboji.iwate.jp',
          'kamaishi.iwate.jp',
          'kanegasaki.iwate.jp',
          'karumai.iwate.jp',
          'kawai.iwate.jp',
          'kitakami.iwate.jp',
          'kuji.iwate.jp',
          'kunohe.iwate.jp',
          'kuzumaki.iwate.jp',
          'miyako.iwate.jp',
          'mizusawa.iwate.jp',
          'morioka.iwate.jp',
          'ninohe.iwate.jp',
          'noda.iwate.jp',
          'ofunato.iwate.jp',
          'oshu.iwate.jp',
          'otsuchi.iwate.jp',
          'rikuzentakata.iwate.jp',
          'shiwa.iwate.jp',
          'shizukuishi.iwate.jp',
          'sumita.iwate.jp',
          'tanohata.iwate.jp',
          'tono.iwate.jp',
          'yahaba.iwate.jp',
          'yamada.iwate.jp',
          'ayagawa.kagawa.jp',
          'higashikagawa.kagawa.jp',
          'kanonji.kagawa.jp',
          'kotohira.kagawa.jp',
          'manno.kagawa.jp',
          'marugame.kagawa.jp',
          'mitoyo.kagawa.jp',
          'naoshima.kagawa.jp',
          'sanuki.kagawa.jp',
          'tadotsu.kagawa.jp',
          'takamatsu.kagawa.jp',
          'tonosho.kagawa.jp',
          'uchinomi.kagawa.jp',
          'utazu.kagawa.jp',
          'zentsuji.kagawa.jp',
          'akune.kagoshima.jp',
          'amami.kagoshima.jp',
          'hioki.kagoshima.jp',
          'isa.kagoshima.jp',
          'isen.kagoshima.jp',
          'izumi.kagoshima.jp',
          'kagoshima.kagoshima.jp',
          'kanoya.kagoshima.jp',
          'kawanabe.kagoshima.jp',
          'kinko.kagoshima.jp',
          'kouyama.kagoshima.jp',
          'makurazaki.kagoshima.jp',
          'matsumoto.kagoshima.jp',
          'minamitane.kagoshima.jp',
          'nakatane.kagoshima.jp',
          'nishinoomote.kagoshima.jp',
          'satsumasendai.kagoshima.jp',
          'soo.kagoshima.jp',
          'tarumizu.kagoshima.jp',
          'yusui.kagoshima.jp',
          'aikawa.kanagawa.jp',
          'atsugi.kanagawa.jp',
          'ayase.kanagawa.jp',
          'chigasaki.kanagawa.jp',
          'ebina.kanagawa.jp',
          'fujisawa.kanagawa.jp',
          'hadano.kanagawa.jp',
          'hakone.kanagawa.jp',
          'hiratsuka.kanagawa.jp',
          'isehara.kanagawa.jp',
          'kaisei.kanagawa.jp',
          'kamakura.kanagawa.jp',
          'kiyokawa.kanagawa.jp',
          'matsuda.kanagawa.jp',
          'minamiashigara.kanagawa.jp',
          'miura.kanagawa.jp',
          'nakai.kanagawa.jp',
          'ninomiya.kanagawa.jp',
          'odawara.kanagawa.jp',
          'oi.kanagawa.jp',
          'oiso.kanagawa.jp',
          'sagamihara.kanagawa.jp',
          'samukawa.kanagawa.jp',
          'tsukui.kanagawa.jp',
          'yamakita.kanagawa.jp',
          'yamato.kanagawa.jp',
          'yokosuka.kanagawa.jp',
          'yugawara.kanagawa.jp',
          'zama.kanagawa.jp',
          'zushi.kanagawa.jp',
          'aki.kochi.jp',
          'geisei.kochi.jp',
          'hidaka.kochi.jp',
          'higashitsuno.kochi.jp',
          'ino.kochi.jp',
          'kagami.kochi.jp',
          'kami.kochi.jp',
          'kitagawa.kochi.jp',
          'kochi.kochi.jp',
          'mihara.kochi.jp',
          'motoyama.kochi.jp',
          'muroto.kochi.jp',
          'nahari.kochi.jp',
          'nakamura.kochi.jp',
          'nankoku.kochi.jp',
          'nishitosa.kochi.jp',
          'niyodogawa.kochi.jp',
          'ochi.kochi.jp',
          'okawa.kochi.jp',
          'otoyo.kochi.jp',
          'otsuki.kochi.jp',
          'sakawa.kochi.jp',
          'sukumo.kochi.jp',
          'susaki.kochi.jp',
          'tosa.kochi.jp',
          'tosashimizu.kochi.jp',
          'toyo.kochi.jp',
          'tsuno.kochi.jp',
          'umaji.kochi.jp',
          'yasuda.kochi.jp',
          'yusuhara.kochi.jp',
          'amakusa.kumamoto.jp',
          'arao.kumamoto.jp',
          'aso.kumamoto.jp',
          'choyo.kumamoto.jp',
          'gyokuto.kumamoto.jp',
          'kamiamakusa.kumamoto.jp',
          'kikuchi.kumamoto.jp',
          'kumamoto.kumamoto.jp',
          'mashiki.kumamoto.jp',
          'mifune.kumamoto.jp',
          'minamata.kumamoto.jp',
          'minamioguni.kumamoto.jp',
          'nagasu.kumamoto.jp',
          'nishihara.kumamoto.jp',
          'oguni.kumamoto.jp',
          'ozu.kumamoto.jp',
          'sumoto.kumamoto.jp',
          'takamori.kumamoto.jp',
          'uki.kumamoto.jp',
          'uto.kumamoto.jp',
          'yamaga.kumamoto.jp',
          'yamato.kumamoto.jp',
          'yatsushiro.kumamoto.jp',
          'ayabe.kyoto.jp',
          'fukuchiyama.kyoto.jp',
          'higashiyama.kyoto.jp',
          'ide.kyoto.jp',
          'ine.kyoto.jp',
          'joyo.kyoto.jp',
          'kameoka.kyoto.jp',
          'kamo.kyoto.jp',
          'kita.kyoto.jp',
          'kizu.kyoto.jp',
          'kumiyama.kyoto.jp',
          'kyotamba.kyoto.jp',
          'kyotanabe.kyoto.jp',
          'kyotango.kyoto.jp',
          'maizuru.kyoto.jp',
          'minami.kyoto.jp',
          'minamiyamashiro.kyoto.jp',
          'miyazu.kyoto.jp',
          'muko.kyoto.jp',
          'nagaokakyo.kyoto.jp',
          'nakagyo.kyoto.jp',
          'nantan.kyoto.jp',
          'oyamazaki.kyoto.jp',
          'sakyo.kyoto.jp',
          'seika.kyoto.jp',
          'tanabe.kyoto.jp',
          'uji.kyoto.jp',
          'ujitawara.kyoto.jp',
          'wazuka.kyoto.jp',
          'yamashina.kyoto.jp',
          'yawata.kyoto.jp',
          'asahi.mie.jp',
          'inabe.mie.jp',
          'ise.mie.jp',
          'kameyama.mie.jp',
          'kawagoe.mie.jp',
          'kiho.mie.jp',
          'kisosaki.mie.jp',
          'kiwa.mie.jp',
          'komono.mie.jp',
          'kumano.mie.jp',
          'kuwana.mie.jp',
          'matsusaka.mie.jp',
          'meiwa.mie.jp',
          'mihama.mie.jp',
          'minamiise.mie.jp',
          'misugi.mie.jp',
          'miyama.mie.jp',
          'nabari.mie.jp',
          'shima.mie.jp',
          'suzuka.mie.jp',
          'tado.mie.jp',
          'taiki.mie.jp',
          'taki.mie.jp',
          'tamaki.mie.jp',
          'toba.mie.jp',
          'tsu.mie.jp',
          'udono.mie.jp',
          'ureshino.mie.jp',
          'watarai.mie.jp',
          'yokkaichi.mie.jp',
          'furukawa.miyagi.jp',
          'higashimatsushima.miyagi.jp',
          'ishinomaki.miyagi.jp',
          'iwanuma.miyagi.jp',
          'kakuda.miyagi.jp',
          'kami.miyagi.jp',
          'kawasaki.miyagi.jp',
          'marumori.miyagi.jp',
          'matsushima.miyagi.jp',
          'minamisanriku.miyagi.jp',
          'misato.miyagi.jp',
          'murata.miyagi.jp',
          'natori.miyagi.jp',
          'ogawara.miyagi.jp',
          'ohira.miyagi.jp',
          'onagawa.miyagi.jp',
          'osaki.miyagi.jp',
          'rifu.miyagi.jp',
          'semine.miyagi.jp',
          'shibata.miyagi.jp',
          'shichikashuku.miyagi.jp',
          'shikama.miyagi.jp',
          'shiogama.miyagi.jp',
          'shiroishi.miyagi.jp',
          'tagajo.miyagi.jp',
          'taiwa.miyagi.jp',
          'tome.miyagi.jp',
          'tomiya.miyagi.jp',
          'wakuya.miyagi.jp',
          'watari.miyagi.jp',
          'yamamoto.miyagi.jp',
          'zao.miyagi.jp',
          'aya.miyazaki.jp',
          'ebino.miyazaki.jp',
          'gokase.miyazaki.jp',
          'hyuga.miyazaki.jp',
          'kadogawa.miyazaki.jp',
          'kawaminami.miyazaki.jp',
          'kijo.miyazaki.jp',
          'kitagawa.miyazaki.jp',
          'kitakata.miyazaki.jp',
          'kitaura.miyazaki.jp',
          'kobayashi.miyazaki.jp',
          'kunitomi.miyazaki.jp',
          'kushima.miyazaki.jp',
          'mimata.miyazaki.jp',
          'miyakonojo.miyazaki.jp',
          'miyazaki.miyazaki.jp',
          'morotsuka.miyazaki.jp',
          'nichinan.miyazaki.jp',
          'nishimera.miyazaki.jp',
          'nobeoka.miyazaki.jp',
          'saito.miyazaki.jp',
          'shiiba.miyazaki.jp',
          'shintomi.miyazaki.jp',
          'takaharu.miyazaki.jp',
          'takanabe.miyazaki.jp',
          'takazaki.miyazaki.jp',
          'tsuno.miyazaki.jp',
          'achi.nagano.jp',
          'agematsu.nagano.jp',
          'anan.nagano.jp',
          'aoki.nagano.jp',
          'asahi.nagano.jp',
          'azumino.nagano.jp',
          'chikuhoku.nagano.jp',
          'chikuma.nagano.jp',
          'chino.nagano.jp',
          'fujimi.nagano.jp',
          'hakuba.nagano.jp',
          'hara.nagano.jp',
          'hiraya.nagano.jp',
          'iida.nagano.jp',
          'iijima.nagano.jp',
          'iiyama.nagano.jp',
          'iizuna.nagano.jp',
          'ikeda.nagano.jp',
          'ikusaka.nagano.jp',
          'ina.nagano.jp',
          'karuizawa.nagano.jp',
          'kawakami.nagano.jp',
          'kiso.nagano.jp',
          'kisofukushima.nagano.jp',
          'kitaaiki.nagano.jp',
          'komagane.nagano.jp',
          'komoro.nagano.jp',
          'matsukawa.nagano.jp',
          'matsumoto.nagano.jp',
          'miasa.nagano.jp',
          'minamiaiki.nagano.jp',
          'minamimaki.nagano.jp',
          'minamiminowa.nagano.jp',
          'minowa.nagano.jp',
          'miyada.nagano.jp',
          'miyota.nagano.jp',
          'mochizuki.nagano.jp',
          'nagano.nagano.jp',
          'nagawa.nagano.jp',
          'nagiso.nagano.jp',
          'nakagawa.nagano.jp',
          'nakano.nagano.jp',
          'nozawaonsen.nagano.jp',
          'obuse.nagano.jp',
          'ogawa.nagano.jp',
          'okaya.nagano.jp',
          'omachi.nagano.jp',
          'omi.nagano.jp',
          'ookuwa.nagano.jp',
          'ooshika.nagano.jp',
          'otaki.nagano.jp',
          'otari.nagano.jp',
          'sakae.nagano.jp',
          'sakaki.nagano.jp',
          'saku.nagano.jp',
          'sakuho.nagano.jp',
          'shimosuwa.nagano.jp',
          'shinanomachi.nagano.jp',
          'shiojiri.nagano.jp',
          'suwa.nagano.jp',
          'suzaka.nagano.jp',
          'takagi.nagano.jp',
          'takamori.nagano.jp',
          'takayama.nagano.jp',
          'tateshina.nagano.jp',
          'tatsuno.nagano.jp',
          'togakushi.nagano.jp',
          'togura.nagano.jp',
          'tomi.nagano.jp',
          'ueda.nagano.jp',
          'wada.nagano.jp',
          'yamagata.nagano.jp',
          'yamanouchi.nagano.jp',
          'yasaka.nagano.jp',
          'yasuoka.nagano.jp',
          'chijiwa.nagasaki.jp',
          'futsu.nagasaki.jp',
          'goto.nagasaki.jp',
          'hasami.nagasaki.jp',
          'hirado.nagasaki.jp',
          'iki.nagasaki.jp',
          'isahaya.nagasaki.jp',
          'kawatana.nagasaki.jp',
          'kuchinotsu.nagasaki.jp',
          'matsuura.nagasaki.jp',
          'nagasaki.nagasaki.jp',
          'obama.nagasaki.jp',
          'omura.nagasaki.jp',
          'oseto.nagasaki.jp',
          'saikai.nagasaki.jp',
          'sasebo.nagasaki.jp',
          'seihi.nagasaki.jp',
          'shimabara.nagasaki.jp',
          'shinkamigoto.nagasaki.jp',
          'togitsu.nagasaki.jp',
          'tsushima.nagasaki.jp',
          'unzen.nagasaki.jp',
          'ando.nara.jp',
          'gose.nara.jp',
          'heguri.nara.jp',
          'higashiyoshino.nara.jp',
          'ikaruga.nara.jp',
          'ikoma.nara.jp',
          'kamikitayama.nara.jp',
          'kanmaki.nara.jp',
          'kashiba.nara.jp',
          'kashihara.nara.jp',
          'katsuragi.nara.jp',
          'kawai.nara.jp',
          'kawakami.nara.jp',
          'kawanishi.nara.jp',
          'koryo.nara.jp',
          'kurotaki.nara.jp',
          'mitsue.nara.jp',
          'miyake.nara.jp',
          'nara.nara.jp',
          'nosegawa.nara.jp',
          'oji.nara.jp',
          'ouda.nara.jp',
          'oyodo.nara.jp',
          'sakurai.nara.jp',
          'sango.nara.jp',
          'shimoichi.nara.jp',
          'shimokitayama.nara.jp',
          'shinjo.nara.jp',
          'soni.nara.jp',
          'takatori.nara.jp',
          'tawaramoto.nara.jp',
          'tenkawa.nara.jp',
          'tenri.nara.jp',
          'uda.nara.jp',
          'yamatokoriyama.nara.jp',
          'yamatotakada.nara.jp',
          'yamazoe.nara.jp',
          'yoshino.nara.jp',
          'aga.niigata.jp',
          'agano.niigata.jp',
          'gosen.niigata.jp',
          'itoigawa.niigata.jp',
          'izumozaki.niigata.jp',
          'joetsu.niigata.jp',
          'kamo.niigata.jp',
          'kariwa.niigata.jp',
          'kashiwazaki.niigata.jp',
          'minamiuonuma.niigata.jp',
          'mitsuke.niigata.jp',
          'muika.niigata.jp',
          'murakami.niigata.jp',
          'myoko.niigata.jp',
          'nagaoka.niigata.jp',
          'niigata.niigata.jp',
          'ojiya.niigata.jp',
          'omi.niigata.jp',
          'sado.niigata.jp',
          'sanjo.niigata.jp',
          'seiro.niigata.jp',
          'seirou.niigata.jp',
          'sekikawa.niigata.jp',
          'shibata.niigata.jp',
          'tagami.niigata.jp',
          'tainai.niigata.jp',
          'tochio.niigata.jp',
          'tokamachi.niigata.jp',
          'tsubame.niigata.jp',
          'tsunan.niigata.jp',
          'uonuma.niigata.jp',
          'yahiko.niigata.jp',
          'yoita.niigata.jp',
          'yuzawa.niigata.jp',
          'beppu.oita.jp',
          'bungoono.oita.jp',
          'bungotakada.oita.jp',
          'hasama.oita.jp',
          'hiji.oita.jp',
          'himeshima.oita.jp',
          'hita.oita.jp',
          'kamitsue.oita.jp',
          'kokonoe.oita.jp',
          'kuju.oita.jp',
          'kunisaki.oita.jp',
          'kusu.oita.jp',
          'oita.oita.jp',
          'saiki.oita.jp',
          'taketa.oita.jp',
          'tsukumi.oita.jp',
          'usa.oita.jp',
          'usuki.oita.jp',
          'yufu.oita.jp',
          'akaiwa.okayama.jp',
          'asakuchi.okayama.jp',
          'bizen.okayama.jp',
          'hayashima.okayama.jp',
          'ibara.okayama.jp',
          'kagamino.okayama.jp',
          'kasaoka.okayama.jp',
          'kibichuo.okayama.jp',
          'kumenan.okayama.jp',
          'kurashiki.okayama.jp',
          'maniwa.okayama.jp',
          'misaki.okayama.jp',
          'nagi.okayama.jp',
          'niimi.okayama.jp',
          'nishiawakura.okayama.jp',
          'okayama.okayama.jp',
          'satosho.okayama.jp',
          'setouchi.okayama.jp',
          'shinjo.okayama.jp',
          'shoo.okayama.jp',
          'soja.okayama.jp',
          'takahashi.okayama.jp',
          'tamano.okayama.jp',
          'tsuyama.okayama.jp',
          'wake.okayama.jp',
          'yakage.okayama.jp',
          'aguni.okinawa.jp',
          'ginowan.okinawa.jp',
          'ginoza.okinawa.jp',
          'gushikami.okinawa.jp',
          'haebaru.okinawa.jp',
          'higashi.okinawa.jp',
          'hirara.okinawa.jp',
          'iheya.okinawa.jp',
          'ishigaki.okinawa.jp',
          'ishikawa.okinawa.jp',
          'itoman.okinawa.jp',
          'izena.okinawa.jp',
          'kadena.okinawa.jp',
          'kin.okinawa.jp',
          'kitadaito.okinawa.jp',
          'kitanakagusuku.okinawa.jp',
          'kumejima.okinawa.jp',
          'kunigami.okinawa.jp',
          'minamidaito.okinawa.jp',
          'motobu.okinawa.jp',
          'nago.okinawa.jp',
          'naha.okinawa.jp',
          'nakagusuku.okinawa.jp',
          'nakijin.okinawa.jp',
          'nanjo.okinawa.jp',
          'nishihara.okinawa.jp',
          'ogimi.okinawa.jp',
          'okinawa.okinawa.jp',
          'onna.okinawa.jp',
          'shimoji.okinawa.jp',
          'taketomi.okinawa.jp',
          'tarama.okinawa.jp',
          'tokashiki.okinawa.jp',
          'tomigusuku.okinawa.jp',
          'tonaki.okinawa.jp',
          'urasoe.okinawa.jp',
          'uruma.okinawa.jp',
          'yaese.okinawa.jp',
          'yomitan.okinawa.jp',
          'yonabaru.okinawa.jp',
          'yonaguni.okinawa.jp',
          'zamami.okinawa.jp',
          'abeno.osaka.jp',
          'chihayaakasaka.osaka.jp',
          'chuo.osaka.jp',
          'daito.osaka.jp',
          'fujiidera.osaka.jp',
          'habikino.osaka.jp',
          'hannan.osaka.jp',
          'higashiosaka.osaka.jp',
          'higashisumiyoshi.osaka.jp',
          'higashiyodogawa.osaka.jp',
          'hirakata.osaka.jp',
          'ibaraki.osaka.jp',
          'ikeda.osaka.jp',
          'izumi.osaka.jp',
          'izumiotsu.osaka.jp',
          'izumisano.osaka.jp',
          'kadoma.osaka.jp',
          'kaizuka.osaka.jp',
          'kanan.osaka.jp',
          'kashiwara.osaka.jp',
          'katano.osaka.jp',
          'kawachinagano.osaka.jp',
          'kishiwada.osaka.jp',
          'kita.osaka.jp',
          'kumatori.osaka.jp',
          'matsubara.osaka.jp',
          'minato.osaka.jp',
          'minoh.osaka.jp',
          'misaki.osaka.jp',
          'moriguchi.osaka.jp',
          'neyagawa.osaka.jp',
          'nishi.osaka.jp',
          'nose.osaka.jp',
          'osakasayama.osaka.jp',
          'sakai.osaka.jp',
          'sayama.osaka.jp',
          'sennan.osaka.jp',
          'settsu.osaka.jp',
          'shijonawate.osaka.jp',
          'shimamoto.osaka.jp',
          'suita.osaka.jp',
          'tadaoka.osaka.jp',
          'taishi.osaka.jp',
          'tajiri.osaka.jp',
          'takaishi.osaka.jp',
          'takatsuki.osaka.jp',
          'tondabayashi.osaka.jp',
          'toyonaka.osaka.jp',
          'toyono.osaka.jp',
          'yao.osaka.jp',
          'ariake.saga.jp',
          'arita.saga.jp',
          'fukudomi.saga.jp',
          'genkai.saga.jp',
          'hamatama.saga.jp',
          'hizen.saga.jp',
          'imari.saga.jp',
          'kamimine.saga.jp',
          'kanzaki.saga.jp',
          'karatsu.saga.jp',
          'kashima.saga.jp',
          'kitagata.saga.jp',
          'kitahata.saga.jp',
          'kiyama.saga.jp',
          'kouhoku.saga.jp',
          'kyuragi.saga.jp',
          'nishiarita.saga.jp',
          'ogi.saga.jp',
          'omachi.saga.jp',
          'ouchi.saga.jp',
          'saga.saga.jp',
          'shiroishi.saga.jp',
          'taku.saga.jp',
          'tara.saga.jp',
          'tosu.saga.jp',
          'yoshinogari.saga.jp',
          'arakawa.saitama.jp',
          'asaka.saitama.jp',
          'chichibu.saitama.jp',
          'fujimi.saitama.jp',
          'fujimino.saitama.jp',
          'fukaya.saitama.jp',
          'hanno.saitama.jp',
          'hanyu.saitama.jp',
          'hasuda.saitama.jp',
          'hatogaya.saitama.jp',
          'hatoyama.saitama.jp',
          'hidaka.saitama.jp',
          'higashichichibu.saitama.jp',
          'higashimatsuyama.saitama.jp',
          'honjo.saitama.jp',
          'ina.saitama.jp',
          'iruma.saitama.jp',
          'iwatsuki.saitama.jp',
          'kamiizumi.saitama.jp',
          'kamikawa.saitama.jp',
          'kamisato.saitama.jp',
          'kasukabe.saitama.jp',
          'kawagoe.saitama.jp',
          'kawaguchi.saitama.jp',
          'kawajima.saitama.jp',
          'kazo.saitama.jp',
          'kitamoto.saitama.jp',
          'koshigaya.saitama.jp',
          'kounosu.saitama.jp',
          'kuki.saitama.jp',
          'kumagaya.saitama.jp',
          'matsubushi.saitama.jp',
          'minano.saitama.jp',
          'misato.saitama.jp',
          'miyashiro.saitama.jp',
          'miyoshi.saitama.jp',
          'moroyama.saitama.jp',
          'nagatoro.saitama.jp',
          'namegawa.saitama.jp',
          'niiza.saitama.jp',
          'ogano.saitama.jp',
          'ogawa.saitama.jp',
          'ogose.saitama.jp',
          'okegawa.saitama.jp',
          'omiya.saitama.jp',
          'otaki.saitama.jp',
          'ranzan.saitama.jp',
          'ryokami.saitama.jp',
          'saitama.saitama.jp',
          'sakado.saitama.jp',
          'satte.saitama.jp',
          'sayama.saitama.jp',
          'shiki.saitama.jp',
          'shiraoka.saitama.jp',
          'soka.saitama.jp',
          'sugito.saitama.jp',
          'toda.saitama.jp',
          'tokigawa.saitama.jp',
          'tokorozawa.saitama.jp',
          'tsurugashima.saitama.jp',
          'urawa.saitama.jp',
          'warabi.saitama.jp',
          'yashio.saitama.jp',
          'yokoze.saitama.jp',
          'yono.saitama.jp',
          'yorii.saitama.jp',
          'yoshida.saitama.jp',
          'yoshikawa.saitama.jp',
          'yoshimi.saitama.jp',
          'aisho.shiga.jp',
          'gamo.shiga.jp',
          'higashiomi.shiga.jp',
          'hikone.shiga.jp',
          'koka.shiga.jp',
          'konan.shiga.jp',
          'kosei.shiga.jp',
          'koto.shiga.jp',
          'kusatsu.shiga.jp',
          'maibara.shiga.jp',
          'moriyama.shiga.jp',
          'nagahama.shiga.jp',
          'nishiazai.shiga.jp',
          'notogawa.shiga.jp',
          'omihachiman.shiga.jp',
          'otsu.shiga.jp',
          'ritto.shiga.jp',
          'ryuoh.shiga.jp',
          'takashima.shiga.jp',
          'takatsuki.shiga.jp',
          'torahime.shiga.jp',
          'toyosato.shiga.jp',
          'yasu.shiga.jp',
          'akagi.shimane.jp',
          'ama.shimane.jp',
          'gotsu.shimane.jp',
          'hamada.shimane.jp',
          'higashiizumo.shimane.jp',
          'hikawa.shimane.jp',
          'hikimi.shimane.jp',
          'izumo.shimane.jp',
          'kakinoki.shimane.jp',
          'masuda.shimane.jp',
          'matsue.shimane.jp',
          'misato.shimane.jp',
          'nishinoshima.shimane.jp',
          'ohda.shimane.jp',
          'okinoshima.shimane.jp',
          'okuizumo.shimane.jp',
          'shimane.shimane.jp',
          'tamayu.shimane.jp',
          'tsuwano.shimane.jp',
          'unnan.shimane.jp',
          'yakumo.shimane.jp',
          'yasugi.shimane.jp',
          'yatsuka.shimane.jp',
          'arai.shizuoka.jp',
          'atami.shizuoka.jp',
          'fuji.shizuoka.jp',
          'fujieda.shizuoka.jp',
          'fujikawa.shizuoka.jp',
          'fujinomiya.shizuoka.jp',
          'fukuroi.shizuoka.jp',
          'gotemba.shizuoka.jp',
          'haibara.shizuoka.jp',
          'hamamatsu.shizuoka.jp',
          'higashiizu.shizuoka.jp',
          'ito.shizuoka.jp',
          'iwata.shizuoka.jp',
          'izu.shizuoka.jp',
          'izunokuni.shizuoka.jp',
          'kakegawa.shizuoka.jp',
          'kannami.shizuoka.jp',
          'kawanehon.shizuoka.jp',
          'kawazu.shizuoka.jp',
          'kikugawa.shizuoka.jp',
          'kosai.shizuoka.jp',
          'makinohara.shizuoka.jp',
          'matsuzaki.shizuoka.jp',
          'minamiizu.shizuoka.jp',
          'mishima.shizuoka.jp',
          'morimachi.shizuoka.jp',
          'nishiizu.shizuoka.jp',
          'numazu.shizuoka.jp',
          'omaezaki.shizuoka.jp',
          'shimada.shizuoka.jp',
          'shimizu.shizuoka.jp',
          'shimoda.shizuoka.jp',
          'shizuoka.shizuoka.jp',
          'susono.shizuoka.jp',
          'yaizu.shizuoka.jp',
          'yoshida.shizuoka.jp',
          'ashikaga.tochigi.jp',
          'bato.tochigi.jp',
          'haga.tochigi.jp',
          'ichikai.tochigi.jp',
          'iwafune.tochigi.jp',
          'kaminokawa.tochigi.jp',
          'kanuma.tochigi.jp',
          'karasuyama.tochigi.jp',
          'kuroiso.tochigi.jp',
          'mashiko.tochigi.jp',
          'mibu.tochigi.jp',
          'moka.tochigi.jp',
          'motegi.tochigi.jp',
          'nasu.tochigi.jp',
          'nasushiobara.tochigi.jp',
          'nikko.tochigi.jp',
          'nishikata.tochigi.jp',
          'nogi.tochigi.jp',
          'ohira.tochigi.jp',
          'ohtawara.tochigi.jp',
          'oyama.tochigi.jp',
          'sakura.tochigi.jp',
          'sano.tochigi.jp',
          'shimotsuke.tochigi.jp',
          'shioya.tochigi.jp',
          'takanezawa.tochigi.jp',
          'tochigi.tochigi.jp',
          'tsuga.tochigi.jp',
          'ujiie.tochigi.jp',
          'utsunomiya.tochigi.jp',
          'yaita.tochigi.jp',
          'aizumi.tokushima.jp',
          'anan.tokushima.jp',
          'ichiba.tokushima.jp',
          'itano.tokushima.jp',
          'kainan.tokushima.jp',
          'komatsushima.tokushima.jp',
          'matsushige.tokushima.jp',
          'mima.tokushima.jp',
          'minami.tokushima.jp',
          'miyoshi.tokushima.jp',
          'mugi.tokushima.jp',
          'nakagawa.tokushima.jp',
          'naruto.tokushima.jp',
          'sanagochi.tokushima.jp',
          'shishikui.tokushima.jp',
          'tokushima.tokushima.jp',
          'wajiki.tokushima.jp',
          'adachi.tokyo.jp',
          'akiruno.tokyo.jp',
          'akishima.tokyo.jp',
          'aogashima.tokyo.jp',
          'arakawa.tokyo.jp',
          'bunkyo.tokyo.jp',
          'chiyoda.tokyo.jp',
          'chofu.tokyo.jp',
          'chuo.tokyo.jp',
          'edogawa.tokyo.jp',
          'fuchu.tokyo.jp',
          'fussa.tokyo.jp',
          'hachijo.tokyo.jp',
          'hachioji.tokyo.jp',
          'hamura.tokyo.jp',
          'higashikurume.tokyo.jp',
          'higashimurayama.tokyo.jp',
          'higashiyamato.tokyo.jp',
          'hino.tokyo.jp',
          'hinode.tokyo.jp',
          'hinohara.tokyo.jp',
          'inagi.tokyo.jp',
          'itabashi.tokyo.jp',
          'katsushika.tokyo.jp',
          'kita.tokyo.jp',
          'kiyose.tokyo.jp',
          'kodaira.tokyo.jp',
          'koganei.tokyo.jp',
          'kokubunji.tokyo.jp',
          'komae.tokyo.jp',
          'koto.tokyo.jp',
          'kouzushima.tokyo.jp',
          'kunitachi.tokyo.jp',
          'machida.tokyo.jp',
          'meguro.tokyo.jp',
          'minato.tokyo.jp',
          'mitaka.tokyo.jp',
          'mizuho.tokyo.jp',
          'musashimurayama.tokyo.jp',
          'musashino.tokyo.jp',
          'nakano.tokyo.jp',
          'nerima.tokyo.jp',
          'ogasawara.tokyo.jp',
          'okutama.tokyo.jp',
          'ome.tokyo.jp',
          'oshima.tokyo.jp',
          'ota.tokyo.jp',
          'setagaya.tokyo.jp',
          'shibuya.tokyo.jp',
          'shinagawa.tokyo.jp',
          'shinjuku.tokyo.jp',
          'suginami.tokyo.jp',
          'sumida.tokyo.jp',
          'tachikawa.tokyo.jp',
          'taito.tokyo.jp',
          'tama.tokyo.jp',
          'toshima.tokyo.jp',
          'chizu.tottori.jp',
          'hino.tottori.jp',
          'kawahara.tottori.jp',
          'koge.tottori.jp',
          'kotoura.tottori.jp',
          'misasa.tottori.jp',
          'nanbu.tottori.jp',
          'nichinan.tottori.jp',
          'sakaiminato.tottori.jp',
          'tottori.tottori.jp',
          'wakasa.tottori.jp',
          'yazu.tottori.jp',
          'yonago.tottori.jp',
          'asahi.toyama.jp',
          'fuchu.toyama.jp',
          'fukumitsu.toyama.jp',
          'funahashi.toyama.jp',
          'himi.toyama.jp',
          'imizu.toyama.jp',
          'inami.toyama.jp',
          'johana.toyama.jp',
          'kamiichi.toyama.jp',
          'kurobe.toyama.jp',
          'nakaniikawa.toyama.jp',
          'namerikawa.toyama.jp',
          'nanto.toyama.jp',
          'nyuzen.toyama.jp',
          'oyabe.toyama.jp',
          'taira.toyama.jp',
          'takaoka.toyama.jp',
          'tateyama.toyama.jp',
          'toga.toyama.jp',
          'tonami.toyama.jp',
          'toyama.toyama.jp',
          'unazuki.toyama.jp',
          'uozu.toyama.jp',
          'yamada.toyama.jp',
          'arida.wakayama.jp',
          'aridagawa.wakayama.jp',
          'gobo.wakayama.jp',
          'hashimoto.wakayama.jp',
          'hidaka.wakayama.jp',
          'hirogawa.wakayama.jp',
          'inami.wakayama.jp',
          'iwade.wakayama.jp',
          'kainan.wakayama.jp',
          'kamitonda.wakayama.jp',
          'katsuragi.wakayama.jp',
          'kimino.wakayama.jp',
          'kinokawa.wakayama.jp',
          'kitayama.wakayama.jp',
          'koya.wakayama.jp',
          'koza.wakayama.jp',
          'kozagawa.wakayama.jp',
          'kudoyama.wakayama.jp',
          'kushimoto.wakayama.jp',
          'mihama.wakayama.jp',
          'misato.wakayama.jp',
          'nachikatsuura.wakayama.jp',
          'shingu.wakayama.jp',
          'shirahama.wakayama.jp',
          'taiji.wakayama.jp',
          'tanabe.wakayama.jp',
          'wakayama.wakayama.jp',
          'yuasa.wakayama.jp',
          'yura.wakayama.jp',
          'asahi.yamagata.jp',
          'funagata.yamagata.jp',
          'higashine.yamagata.jp',
          'iide.yamagata.jp',
          'kahoku.yamagata.jp',
          'kaminoyama.yamagata.jp',
          'kaneyama.yamagata.jp',
          'kawanishi.yamagata.jp',
          'mamurogawa.yamagata.jp',
          'mikawa.yamagata.jp',
          'murayama.yamagata.jp',
          'nagai.yamagata.jp',
          'nakayama.yamagata.jp',
          'nanyo.yamagata.jp',
          'nishikawa.yamagata.jp',
          'obanazawa.yamagata.jp',
          'oe.yamagata.jp',
          'oguni.yamagata.jp',
          'ohkura.yamagata.jp',
          'oishida.yamagata.jp',
          'sagae.yamagata.jp',
          'sakata.yamagata.jp',
          'sakegawa.yamagata.jp',
          'shinjo.yamagata.jp',
          'shirataka.yamagata.jp',
          'shonai.yamagata.jp',
          'takahata.yamagata.jp',
          'tendo.yamagata.jp',
          'tozawa.yamagata.jp',
          'tsuruoka.yamagata.jp',
          'yamagata.yamagata.jp',
          'yamanobe.yamagata.jp',
          'yonezawa.yamagata.jp',
          'yuza.yamagata.jp',
          'abu.yamaguchi.jp',
          'hagi.yamaguchi.jp',
          'hikari.yamaguchi.jp',
          'hofu.yamaguchi.jp',
          'iwakuni.yamaguchi.jp',
          'kudamatsu.yamaguchi.jp',
          'mitou.yamaguchi.jp',
          'nagato.yamaguchi.jp',
          'oshima.yamaguchi.jp',
          'shimonoseki.yamaguchi.jp',
          'shunan.yamaguchi.jp',
          'tabuse.yamaguchi.jp',
          'tokuyama.yamaguchi.jp',
          'toyota.yamaguchi.jp',
          'ube.yamaguchi.jp',
          'yuu.yamaguchi.jp',
          'chuo.yamanashi.jp',
          'doshi.yamanashi.jp',
          'fuefuki.yamanashi.jp',
          'fujikawa.yamanashi.jp',
          'fujikawaguchiko.yamanashi.jp',
          'fujiyoshida.yamanashi.jp',
          'hayakawa.yamanashi.jp',
          'hokuto.yamanashi.jp',
          'ichikawamisato.yamanashi.jp',
          'kai.yamanashi.jp',
          'kofu.yamanashi.jp',
          'koshu.yamanashi.jp',
          'kosuge.yamanashi.jp',
          'minami-alps.yamanashi.jp',
          'minobu.yamanashi.jp',
          'nakamichi.yamanashi.jp',
          'nanbu.yamanashi.jp',
          'narusawa.yamanashi.jp',
          'nirasaki.yamanashi.jp',
          'nishikatsura.yamanashi.jp',
          'oshino.yamanashi.jp',
          'otsuki.yamanashi.jp',
          'showa.yamanashi.jp',
          'tabayama.yamanashi.jp',
          'tsuru.yamanashi.jp',
          'uenohara.yamanashi.jp',
          'yamanakako.yamanashi.jp',
          'yamanashi.yamanashi.jp',
          'ke',
          'ac.ke',
          'co.ke',
          'go.ke',
          'info.ke',
          'me.ke',
          'mobi.ke',
          'ne.ke',
          'or.ke',
          'sc.ke',
          'kg',
          'com.kg',
          'edu.kg',
          'gov.kg',
          'mil.kg',
          'net.kg',
          'org.kg',
          '*.kh',
          'ki',
          'biz.ki',
          'com.ki',
          'edu.ki',
          'gov.ki',
          'info.ki',
          'net.ki',
          'org.ki',
          'km',
          'ass.km',
          'com.km',
          'edu.km',
          'gov.km',
          'mil.km',
          'nom.km',
          'org.km',
          'prd.km',
          'tm.km',
          'asso.km',
          'coop.km',
          'gouv.km',
          'medecin.km',
          'notaires.km',
          'pharmaciens.km',
          'presse.km',
          'veterinaire.km',
          'kn',
          'edu.kn',
          'gov.kn',
          'net.kn',
          'org.kn',
          'kp',
          'com.kp',
          'edu.kp',
          'gov.kp',
          'org.kp',
          'rep.kp',
          'tra.kp',
          'kr',
          'ac.kr',
          'co.kr',
          'es.kr',
          'go.kr',
          'hs.kr',
          'kg.kr',
          'mil.kr',
          'ms.kr',
          'ne.kr',
          'or.kr',
          'pe.kr',
          're.kr',
          'sc.kr',
          'busan.kr',
          'chungbuk.kr',
          'chungnam.kr',
          'daegu.kr',
          'daejeon.kr',
          'gangwon.kr',
          'gwangju.kr',
          'gyeongbuk.kr',
          'gyeonggi.kr',
          'gyeongnam.kr',
          'incheon.kr',
          'jeju.kr',
          'jeonbuk.kr',
          'jeonnam.kr',
          'seoul.kr',
          'ulsan.kr',
          'kw',
          'com.kw',
          'edu.kw',
          'emb.kw',
          'gov.kw',
          'ind.kw',
          'net.kw',
          'org.kw',
          'ky',
          'com.ky',
          'edu.ky',
          'net.ky',
          'org.ky',
          'kz',
          'com.kz',
          'edu.kz',
          'gov.kz',
          'mil.kz',
          'net.kz',
          'org.kz',
          'la',
          'com.la',
          'edu.la',
          'gov.la',
          'info.la',
          'int.la',
          'net.la',
          'org.la',
          'per.la',
          'lb',
          'com.lb',
          'edu.lb',
          'gov.lb',
          'net.lb',
          'org.lb',
          'lc',
          'co.lc',
          'com.lc',
          'edu.lc',
          'gov.lc',
          'net.lc',
          'org.lc',
          'li',
          'lk',
          'ac.lk',
          'assn.lk',
          'com.lk',
          'edu.lk',
          'gov.lk',
          'grp.lk',
          'hotel.lk',
          'int.lk',
          'ltd.lk',
          'net.lk',
          'ngo.lk',
          'org.lk',
          'sch.lk',
          'soc.lk',
          'web.lk',
          'lr',
          'com.lr',
          'edu.lr',
          'gov.lr',
          'net.lr',
          'org.lr',
          'ls',
          'ac.ls',
          'biz.ls',
          'co.ls',
          'edu.ls',
          'gov.ls',
          'info.ls',
          'net.ls',
          'org.ls',
          'sc.ls',
          'lt',
          'gov.lt',
          'lu',
          'lv',
          'asn.lv',
          'com.lv',
          'conf.lv',
          'edu.lv',
          'gov.lv',
          'id.lv',
          'mil.lv',
          'net.lv',
          'org.lv',
          'ly',
          'com.ly',
          'edu.ly',
          'gov.ly',
          'id.ly',
          'med.ly',
          'net.ly',
          'org.ly',
          'plc.ly',
          'sch.ly',
          'ma',
          'ac.ma',
          'co.ma',
          'gov.ma',
          'net.ma',
          'org.ma',
          'press.ma',
          'mc',
          'asso.mc',
          'tm.mc',
          'md',
          'me',
          'ac.me',
          'co.me',
          'edu.me',
          'gov.me',
          'its.me',
          'net.me',
          'org.me',
          'priv.me',
          'mg',
          'co.mg',
          'com.mg',
          'edu.mg',
          'gov.mg',
          'mil.mg',
          'nom.mg',
          'org.mg',
          'prd.mg',
          'mh',
          'mil',
          'mk',
          'com.mk',
          'edu.mk',
          'gov.mk',
          'inf.mk',
          'name.mk',
          'net.mk',
          'org.mk',
          'ml',
          'com.ml',
          'edu.ml',
          'gouv.ml',
          'gov.ml',
          'net.ml',
          'org.ml',
          'presse.ml',
          '*.mm',
          'mn',
          'edu.mn',
          'gov.mn',
          'org.mn',
          'mo',
          'com.mo',
          'edu.mo',
          'gov.mo',
          'net.mo',
          'org.mo',
          'mobi',
          'mp',
          'mq',
          'mr',
          'gov.mr',
          'ms',
          'com.ms',
          'edu.ms',
          'gov.ms',
          'net.ms',
          'org.ms',
          'mt',
          'com.mt',
          'edu.mt',
          'net.mt',
          'org.mt',
          'mu',
          'ac.mu',
          'co.mu',
          'com.mu',
          'gov.mu',
          'net.mu',
          'or.mu',
          'org.mu',
          'museum',
          'mv',
          'aero.mv',
          'biz.mv',
          'com.mv',
          'coop.mv',
          'edu.mv',
          'gov.mv',
          'info.mv',
          'int.mv',
          'mil.mv',
          'museum.mv',
          'name.mv',
          'net.mv',
          'org.mv',
          'pro.mv',
          'mw',
          'ac.mw',
          'biz.mw',
          'co.mw',
          'com.mw',
          'coop.mw',
          'edu.mw',
          'gov.mw',
          'int.mw',
          'net.mw',
          'org.mw',
          'mx',
          'com.mx',
          'edu.mx',
          'gob.mx',
          'net.mx',
          'org.mx',
          'my',
          'biz.my',
          'com.my',
          'edu.my',
          'gov.my',
          'mil.my',
          'name.my',
          'net.my',
          'org.my',
          'mz',
          'ac.mz',
          'adv.mz',
          'co.mz',
          'edu.mz',
          'gov.mz',
          'mil.mz',
          'net.mz',
          'org.mz',
          'na',
          'alt.na',
          'co.na',
          'com.na',
          'gov.na',
          'net.na',
          'org.na',
          'name',
          'nc',
          'asso.nc',
          'nom.nc',
          'ne',
          'net',
          'nf',
          'arts.nf',
          'com.nf',
          'firm.nf',
          'info.nf',
          'net.nf',
          'other.nf',
          'per.nf',
          'rec.nf',
          'store.nf',
          'web.nf',
          'ng',
          'com.ng',
          'edu.ng',
          'gov.ng',
          'i.ng',
          'mil.ng',
          'mobi.ng',
          'name.ng',
          'net.ng',
          'org.ng',
          'sch.ng',
          'ni',
          'ac.ni',
          'biz.ni',
          'co.ni',
          'com.ni',
          'edu.ni',
          'gob.ni',
          'in.ni',
          'info.ni',
          'int.ni',
          'mil.ni',
          'net.ni',
          'nom.ni',
          'org.ni',
          'web.ni',
          'nl',
          'no',
          'fhs.no',
          'folkebibl.no',
          'fylkesbibl.no',
          'idrett.no',
          'museum.no',
          'priv.no',
          'vgs.no',
          'dep.no',
          'herad.no',
          'kommune.no',
          'mil.no',
          'stat.no',
          'aa.no',
          'ah.no',
          'bu.no',
          'fm.no',
          'hl.no',
          'hm.no',
          'jan-mayen.no',
          'mr.no',
          'nl.no',
          'nt.no',
          'of.no',
          'ol.no',
          'oslo.no',
          'rl.no',
          'sf.no',
          'st.no',
          'svalbard.no',
          'tm.no',
          'tr.no',
          'va.no',
          'vf.no',
          'gs.aa.no',
          'gs.ah.no',
          'gs.bu.no',
          'gs.fm.no',
          'gs.hl.no',
          'gs.hm.no',
          'gs.jan-mayen.no',
          'gs.mr.no',
          'gs.nl.no',
          'gs.nt.no',
          'gs.of.no',
          'gs.ol.no',
          'gs.oslo.no',
          'gs.rl.no',
          'gs.sf.no',
          'gs.st.no',
          'gs.svalbard.no',
          'gs.tm.no',
          'gs.tr.no',
          'gs.va.no',
          'gs.vf.no',
          'akrehamn.no',
          '\xe5krehamn.no',
          'algard.no',
          '\xe5lg\xe5rd.no',
          'arna.no',
          'bronnoysund.no',
          'br\xf8nn\xf8ysund.no',
          'brumunddal.no',
          'bryne.no',
          'drobak.no',
          'dr\xf8bak.no',
          'egersund.no',
          'fetsund.no',
          'floro.no',
          'flor\xf8.no',
          'fredrikstad.no',
          'hokksund.no',
          'honefoss.no',
          'h\xf8nefoss.no',
          'jessheim.no',
          'jorpeland.no',
          'j\xf8rpeland.no',
          'kirkenes.no',
          'kopervik.no',
          'krokstadelva.no',
          'langevag.no',
          'langev\xe5g.no',
          'leirvik.no',
          'mjondalen.no',
          'mj\xf8ndalen.no',
          'mo-i-rana.no',
          'mosjoen.no',
          'mosj\xf8en.no',
          'nesoddtangen.no',
          'orkanger.no',
          'osoyro.no',
          'os\xf8yro.no',
          'raholt.no',
          'r\xe5holt.no',
          'sandnessjoen.no',
          'sandnessj\xf8en.no',
          'skedsmokorset.no',
          'slattum.no',
          'spjelkavik.no',
          'stathelle.no',
          'stavern.no',
          'stjordalshalsen.no',
          'stj\xf8rdalshalsen.no',
          'tananger.no',
          'tranby.no',
          'vossevangen.no',
          'aarborte.no',
          'aejrie.no',
          'afjord.no',
          '\xe5fjord.no',
          'agdenes.no',
          'nes.akershus.no',
          'aknoluokta.no',
          '\xe1kŋoluokta.no',
          'al.no',
          '\xe5l.no',
          'alaheadju.no',
          '\xe1laheadju.no',
          'alesund.no',
          '\xe5lesund.no',
          'alstahaug.no',
          'alta.no',
          '\xe1lt\xe1.no',
          'alvdal.no',
          'amli.no',
          '\xe5mli.no',
          'amot.no',
          '\xe5mot.no',
          'andasuolo.no',
          'andebu.no',
          'andoy.no',
          'and\xf8y.no',
          'ardal.no',
          '\xe5rdal.no',
          'aremark.no',
          'arendal.no',
          '\xe5s.no',
          'aseral.no',
          '\xe5seral.no',
          'asker.no',
          'askim.no',
          'askoy.no',
          'ask\xf8y.no',
          'askvoll.no',
          'asnes.no',
          '\xe5snes.no',
          'audnedaln.no',
          'aukra.no',
          'aure.no',
          'aurland.no',
          'aurskog-holand.no',
          'aurskog-h\xf8land.no',
          'austevoll.no',
          'austrheim.no',
          'averoy.no',
          'aver\xf8y.no',
          'badaddja.no',
          'b\xe5d\xe5ddj\xe5.no',
          'b\xe6rum.no',
          'bahcavuotna.no',
          'b\xe1hcavuotna.no',
          'bahccavuotna.no',
          'b\xe1hccavuotna.no',
          'baidar.no',
          'b\xe1id\xe1r.no',
          'bajddar.no',
          'b\xe1jddar.no',
          'balat.no',
          'b\xe1l\xe1t.no',
          'balestrand.no',
          'ballangen.no',
          'balsfjord.no',
          'bamble.no',
          'bardu.no',
          'barum.no',
          'batsfjord.no',
          'b\xe5tsfjord.no',
          'bearalvahki.no',
          'bearalv\xe1hki.no',
          'beardu.no',
          'beiarn.no',
          'berg.no',
          'bergen.no',
          'berlevag.no',
          'berlev\xe5g.no',
          'bievat.no',
          'biev\xe1t.no',
          'bindal.no',
          'birkenes.no',
          'bjarkoy.no',
          'bjark\xf8y.no',
          'bjerkreim.no',
          'bjugn.no',
          'bodo.no',
          'bod\xf8.no',
          'bokn.no',
          'bomlo.no',
          'b\xf8mlo.no',
          'bremanger.no',
          'bronnoy.no',
          'br\xf8nn\xf8y.no',
          'budejju.no',
          'nes.buskerud.no',
          'bygland.no',
          'bykle.no',
          'cahcesuolo.no',
          'č\xe1hcesuolo.no',
          'davvenjarga.no',
          'davvenj\xe1rga.no',
          'davvesiida.no',
          'deatnu.no',
          'dielddanuorri.no',
          'divtasvuodna.no',
          'divttasvuotna.no',
          'donna.no',
          'd\xf8nna.no',
          'dovre.no',
          'drammen.no',
          'drangedal.no',
          'dyroy.no',
          'dyr\xf8y.no',
          'eid.no',
          'eidfjord.no',
          'eidsberg.no',
          'eidskog.no',
          'eidsvoll.no',
          'eigersund.no',
          'elverum.no',
          'enebakk.no',
          'engerdal.no',
          'etne.no',
          'etnedal.no',
          'evenassi.no',
          'even\xe1šši.no',
          'evenes.no',
          'evje-og-hornnes.no',
          'farsund.no',
          'fauske.no',
          'fedje.no',
          'fet.no',
          'finnoy.no',
          'finn\xf8y.no',
          'fitjar.no',
          'fjaler.no',
          'fjell.no',
          'fla.no',
          'fl\xe5.no',
          'flakstad.no',
          'flatanger.no',
          'flekkefjord.no',
          'flesberg.no',
          'flora.no',
          'folldal.no',
          'forde.no',
          'f\xf8rde.no',
          'forsand.no',
          'fosnes.no',
          'fr\xe6na.no',
          'frana.no',
          'frei.no',
          'frogn.no',
          'froland.no',
          'frosta.no',
          'froya.no',
          'fr\xf8ya.no',
          'fuoisku.no',
          'fuossko.no',
          'fusa.no',
          'fyresdal.no',
          'gaivuotna.no',
          'g\xe1ivuotna.no',
          'galsa.no',
          'g\xe1ls\xe1.no',
          'gamvik.no',
          'gangaviika.no',
          'g\xe1ŋgaviika.no',
          'gaular.no',
          'gausdal.no',
          'giehtavuoatna.no',
          'gildeskal.no',
          'gildesk\xe5l.no',
          'giske.no',
          'gjemnes.no',
          'gjerdrum.no',
          'gjerstad.no',
          'gjesdal.no',
          'gjovik.no',
          'gj\xf8vik.no',
          'gloppen.no',
          'gol.no',
          'gran.no',
          'grane.no',
          'granvin.no',
          'gratangen.no',
          'grimstad.no',
          'grong.no',
          'grue.no',
          'gulen.no',
          'guovdageaidnu.no',
          'ha.no',
          'h\xe5.no',
          'habmer.no',
          'h\xe1bmer.no',
          'hadsel.no',
          'h\xe6gebostad.no',
          'hagebostad.no',
          'halden.no',
          'halsa.no',
          'hamar.no',
          'hamaroy.no',
          'hammarfeasta.no',
          'h\xe1mm\xe1rfeasta.no',
          'hammerfest.no',
          'hapmir.no',
          'h\xe1pmir.no',
          'haram.no',
          'hareid.no',
          'harstad.no',
          'hasvik.no',
          'hattfjelldal.no',
          'haugesund.no',
          'os.hedmark.no',
          'valer.hedmark.no',
          'v\xe5ler.hedmark.no',
          'hemne.no',
          'hemnes.no',
          'hemsedal.no',
          'hitra.no',
          'hjartdal.no',
          'hjelmeland.no',
          'hobol.no',
          'hob\xf8l.no',
          'hof.no',
          'hol.no',
          'hole.no',
          'holmestrand.no',
          'holtalen.no',
          'holt\xe5len.no',
          'os.hordaland.no',
          'hornindal.no',
          'horten.no',
          'hoyanger.no',
          'h\xf8yanger.no',
          'hoylandet.no',
          'h\xf8ylandet.no',
          'hurdal.no',
          'hurum.no',
          'hvaler.no',
          'hyllestad.no',
          'ibestad.no',
          'inderoy.no',
          'inder\xf8y.no',
          'iveland.no',
          'ivgu.no',
          'jevnaker.no',
          'jolster.no',
          'j\xf8lster.no',
          'jondal.no',
          'kafjord.no',
          'k\xe5fjord.no',
          'karasjohka.no',
          'k\xe1r\xe1šjohka.no',
          'karasjok.no',
          'karlsoy.no',
          'karmoy.no',
          'karm\xf8y.no',
          'kautokeino.no',
          'klabu.no',
          'kl\xe6bu.no',
          'klepp.no',
          'kongsberg.no',
          'kongsvinger.no',
          'kraanghke.no',
          'kr\xe5anghke.no',
          'kragero.no',
          'krager\xf8.no',
          'kristiansand.no',
          'kristiansund.no',
          'krodsherad.no',
          'kr\xf8dsherad.no',
          'kv\xe6fjord.no',
          'kv\xe6nangen.no',
          'kvafjord.no',
          'kvalsund.no',
          'kvam.no',
          'kvanangen.no',
          'kvinesdal.no',
          'kvinnherad.no',
          'kviteseid.no',
          'kvitsoy.no',
          'kvits\xf8y.no',
          'laakesvuemie.no',
          'l\xe6rdal.no',
          'lahppi.no',
          'l\xe1hppi.no',
          'lardal.no',
          'larvik.no',
          'lavagis.no',
          'lavangen.no',
          'leangaviika.no',
          'leaŋgaviika.no',
          'lebesby.no',
          'leikanger.no',
          'leirfjord.no',
          'leka.no',
          'leksvik.no',
          'lenvik.no',
          'lerdal.no',
          'lesja.no',
          'levanger.no',
          'lier.no',
          'lierne.no',
          'lillehammer.no',
          'lillesand.no',
          'lindas.no',
          'lind\xe5s.no',
          'lindesnes.no',
          'loabat.no',
          'loab\xe1t.no',
          'lodingen.no',
          'l\xf8dingen.no',
          'lom.no',
          'loppa.no',
          'lorenskog.no',
          'l\xf8renskog.no',
          'loten.no',
          'l\xf8ten.no',
          'lund.no',
          'lunner.no',
          'luroy.no',
          'lur\xf8y.no',
          'luster.no',
          'lyngdal.no',
          'lyngen.no',
          'malatvuopmi.no',
          'm\xe1latvuopmi.no',
          'malselv.no',
          'm\xe5lselv.no',
          'malvik.no',
          'mandal.no',
          'marker.no',
          'marnardal.no',
          'masfjorden.no',
          'masoy.no',
          'm\xe5s\xf8y.no',
          'matta-varjjat.no',
          'm\xe1tta-v\xe1rjjat.no',
          'meland.no',
          'meldal.no',
          'melhus.no',
          'meloy.no',
          'mel\xf8y.no',
          'meraker.no',
          'mer\xe5ker.no',
          'midsund.no',
          'midtre-gauldal.no',
          'moareke.no',
          'mo\xe5reke.no',
          'modalen.no',
          'modum.no',
          'molde.no',
          'heroy.more-og-romsdal.no',
          'sande.more-og-romsdal.no',
          'her\xf8y.m\xf8re-og-romsdal.no',
          'sande.m\xf8re-og-romsdal.no',
          'moskenes.no',
          'moss.no',
          'mosvik.no',
          'muosat.no',
          'muos\xe1t.no',
          'naamesjevuemie.no',
          'n\xe5\xe5mesjevuemie.no',
          'n\xe6r\xf8y.no',
          'namdalseid.no',
          'namsos.no',
          'namsskogan.no',
          'nannestad.no',
          'naroy.no',
          'narviika.no',
          'narvik.no',
          'naustdal.no',
          'navuotna.no',
          'n\xe1vuotna.no',
          'nedre-eiker.no',
          'nesna.no',
          'nesodden.no',
          'nesseby.no',
          'nesset.no',
          'nissedal.no',
          'nittedal.no',
          'nord-aurdal.no',
          'nord-fron.no',
          'nord-odal.no',
          'norddal.no',
          'nordkapp.no',
          'bo.nordland.no',
          'b\xf8.nordland.no',
          'heroy.nordland.no',
          'her\xf8y.nordland.no',
          'nordre-land.no',
          'nordreisa.no',
          'nore-og-uvdal.no',
          'notodden.no',
          'notteroy.no',
          'n\xf8tter\xf8y.no',
          'odda.no',
          'oksnes.no',
          '\xf8ksnes.no',
          'omasvuotna.no',
          'oppdal.no',
          'oppegard.no',
          'oppeg\xe5rd.no',
          'orkdal.no',
          'orland.no',
          '\xf8rland.no',
          'orskog.no',
          '\xf8rskog.no',
          'orsta.no',
          '\xf8rsta.no',
          'osen.no',
          'osteroy.no',
          'oster\xf8y.no',
          'valer.ostfold.no',
          'v\xe5ler.\xf8stfold.no',
          'ostre-toten.no',
          '\xf8stre-toten.no',
          'overhalla.no',
          'ovre-eiker.no',
          '\xf8vre-eiker.no',
          'oyer.no',
          '\xf8yer.no',
          'oygarden.no',
          '\xf8ygarden.no',
          'oystre-slidre.no',
          '\xf8ystre-slidre.no',
          'porsanger.no',
          'porsangu.no',
          'pors\xe1ŋgu.no',
          'porsgrunn.no',
          'rade.no',
          'r\xe5de.no',
          'radoy.no',
          'rad\xf8y.no',
          'r\xe6lingen.no',
          'rahkkeravju.no',
          'r\xe1hkker\xe1vju.no',
          'raisa.no',
          'r\xe1isa.no',
          'rakkestad.no',
          'ralingen.no',
          'rana.no',
          'randaberg.no',
          'rauma.no',
          'rendalen.no',
          'rennebu.no',
          'rennesoy.no',
          'rennes\xf8y.no',
          'rindal.no',
          'ringebu.no',
          'ringerike.no',
          'ringsaker.no',
          'risor.no',
          'ris\xf8r.no',
          'rissa.no',
          'roan.no',
          'rodoy.no',
          'r\xf8d\xf8y.no',
          'rollag.no',
          'romsa.no',
          'romskog.no',
          'r\xf8mskog.no',
          'roros.no',
          'r\xf8ros.no',
          'rost.no',
          'r\xf8st.no',
          'royken.no',
          'r\xf8yken.no',
          'royrvik.no',
          'r\xf8yrvik.no',
          'ruovat.no',
          'rygge.no',
          'salangen.no',
          'salat.no',
          's\xe1lat.no',
          's\xe1l\xe1t.no',
          'saltdal.no',
          'samnanger.no',
          'sandefjord.no',
          'sandnes.no',
          'sandoy.no',
          'sand\xf8y.no',
          'sarpsborg.no',
          'sauda.no',
          'sauherad.no',
          'sel.no',
          'selbu.no',
          'selje.no',
          'seljord.no',
          'siellak.no',
          'sigdal.no',
          'siljan.no',
          'sirdal.no',
          'skanit.no',
          'sk\xe1nit.no',
          'skanland.no',
          'sk\xe5nland.no',
          'skaun.no',
          'skedsmo.no',
          'ski.no',
          'skien.no',
          'skierva.no',
          'skierv\xe1.no',
          'skiptvet.no',
          'skjak.no',
          'skj\xe5k.no',
          'skjervoy.no',
          'skjerv\xf8y.no',
          'skodje.no',
          'smola.no',
          'sm\xf8la.no',
          'snaase.no',
          'sn\xe5ase.no',
          'snasa.no',
          'sn\xe5sa.no',
          'snillfjord.no',
          'snoasa.no',
          'sogndal.no',
          'sogne.no',
          's\xf8gne.no',
          'sokndal.no',
          'sola.no',
          'solund.no',
          'somna.no',
          's\xf8mna.no',
          'sondre-land.no',
          's\xf8ndre-land.no',
          'songdalen.no',
          'sor-aurdal.no',
          's\xf8r-aurdal.no',
          'sor-fron.no',
          's\xf8r-fron.no',
          'sor-odal.no',
          's\xf8r-odal.no',
          'sor-varanger.no',
          's\xf8r-varanger.no',
          'sorfold.no',
          's\xf8rfold.no',
          'sorreisa.no',
          's\xf8rreisa.no',
          'sortland.no',
          'sorum.no',
          's\xf8rum.no',
          'spydeberg.no',
          'stange.no',
          'stavanger.no',
          'steigen.no',
          'steinkjer.no',
          'stjordal.no',
          'stj\xf8rdal.no',
          'stokke.no',
          'stor-elvdal.no',
          'stord.no',
          'stordal.no',
          'storfjord.no',
          'strand.no',
          'stranda.no',
          'stryn.no',
          'sula.no',
          'suldal.no',
          'sund.no',
          'sunndal.no',
          'surnadal.no',
          'sveio.no',
          'svelvik.no',
          'sykkylven.no',
          'tana.no',
          'bo.telemark.no',
          'b\xf8.telemark.no',
          'time.no',
          'tingvoll.no',
          'tinn.no',
          'tjeldsund.no',
          'tjome.no',
          'tj\xf8me.no',
          'tokke.no',
          'tolga.no',
          'tonsberg.no',
          't\xf8nsberg.no',
          'torsken.no',
          'tr\xe6na.no',
          'trana.no',
          'tranoy.no',
          'tran\xf8y.no',
          'troandin.no',
          'trogstad.no',
          'tr\xf8gstad.no',
          'tromsa.no',
          'tromso.no',
          'troms\xf8.no',
          'trondheim.no',
          'trysil.no',
          'tvedestrand.no',
          'tydal.no',
          'tynset.no',
          'tysfjord.no',
          'tysnes.no',
          'tysv\xe6r.no',
          'tysvar.no',
          'ullensaker.no',
          'ullensvang.no',
          'ulvik.no',
          'unjarga.no',
          'unj\xe1rga.no',
          'utsira.no',
          'vaapste.no',
          'vadso.no',
          'vads\xf8.no',
          'v\xe6r\xf8y.no',
          'vaga.no',
          'v\xe5g\xe5.no',
          'vagan.no',
          'v\xe5gan.no',
          'vagsoy.no',
          'v\xe5gs\xf8y.no',
          'vaksdal.no',
          'valle.no',
          'vang.no',
          'vanylven.no',
          'vardo.no',
          'vard\xf8.no',
          'varggat.no',
          'v\xe1rgg\xe1t.no',
          'varoy.no',
          'vefsn.no',
          'vega.no',
          'vegarshei.no',
          'veg\xe5rshei.no',
          'vennesla.no',
          'verdal.no',
          'verran.no',
          'vestby.no',
          'sande.vestfold.no',
          'vestnes.no',
          'vestre-slidre.no',
          'vestre-toten.no',
          'vestvagoy.no',
          'vestv\xe5g\xf8y.no',
          'vevelstad.no',
          'vik.no',
          'vikna.no',
          'vindafjord.no',
          'voagat.no',
          'volda.no',
          'voss.no',
          '*.np',
          'nr',
          'biz.nr',
          'com.nr',
          'edu.nr',
          'gov.nr',
          'info.nr',
          'net.nr',
          'org.nr',
          'nu',
          'nz',
          'ac.nz',
          'co.nz',
          'cri.nz',
          'geek.nz',
          'gen.nz',
          'govt.nz',
          'health.nz',
          'iwi.nz',
          'kiwi.nz',
          'maori.nz',
          'māori.nz',
          'mil.nz',
          'net.nz',
          'org.nz',
          'parliament.nz',
          'school.nz',
          'om',
          'co.om',
          'com.om',
          'edu.om',
          'gov.om',
          'med.om',
          'museum.om',
          'net.om',
          'org.om',
          'pro.om',
          'onion',
          'org',
          'pa',
          'abo.pa',
          'ac.pa',
          'com.pa',
          'edu.pa',
          'gob.pa',
          'ing.pa',
          'med.pa',
          'net.pa',
          'nom.pa',
          'org.pa',
          'sld.pa',
          'pe',
          'com.pe',
          'edu.pe',
          'gob.pe',
          'mil.pe',
          'net.pe',
          'nom.pe',
          'org.pe',
          'pf',
          'com.pf',
          'edu.pf',
          'org.pf',
          '*.pg',
          'ph',
          'com.ph',
          'edu.ph',
          'gov.ph',
          'i.ph',
          'mil.ph',
          'net.ph',
          'ngo.ph',
          'org.ph',
          'pk',
          'ac.pk',
          'biz.pk',
          'com.pk',
          'edu.pk',
          'fam.pk',
          'gkp.pk',
          'gob.pk',
          'gog.pk',
          'gok.pk',
          'gon.pk',
          'gop.pk',
          'gos.pk',
          'gov.pk',
          'net.pk',
          'org.pk',
          'web.pk',
          'pl',
          'com.pl',
          'net.pl',
          'org.pl',
          'agro.pl',
          'aid.pl',
          'atm.pl',
          'auto.pl',
          'biz.pl',
          'edu.pl',
          'gmina.pl',
          'gsm.pl',
          'info.pl',
          'mail.pl',
          'media.pl',
          'miasta.pl',
          'mil.pl',
          'nieruchomosci.pl',
          'nom.pl',
          'pc.pl',
          'powiat.pl',
          'priv.pl',
          'realestate.pl',
          'rel.pl',
          'sex.pl',
          'shop.pl',
          'sklep.pl',
          'sos.pl',
          'szkola.pl',
          'targi.pl',
          'tm.pl',
          'tourism.pl',
          'travel.pl',
          'turystyka.pl',
          'gov.pl',
          'ap.gov.pl',
          'griw.gov.pl',
          'ic.gov.pl',
          'is.gov.pl',
          'kmpsp.gov.pl',
          'konsulat.gov.pl',
          'kppsp.gov.pl',
          'kwp.gov.pl',
          'kwpsp.gov.pl',
          'mup.gov.pl',
          'mw.gov.pl',
          'oia.gov.pl',
          'oirm.gov.pl',
          'oke.gov.pl',
          'oow.gov.pl',
          'oschr.gov.pl',
          'oum.gov.pl',
          'pa.gov.pl',
          'pinb.gov.pl',
          'piw.gov.pl',
          'po.gov.pl',
          'pr.gov.pl',
          'psp.gov.pl',
          'psse.gov.pl',
          'pup.gov.pl',
          'rzgw.gov.pl',
          'sa.gov.pl',
          'sdn.gov.pl',
          'sko.gov.pl',
          'so.gov.pl',
          'sr.gov.pl',
          'starostwo.gov.pl',
          'ug.gov.pl',
          'ugim.gov.pl',
          'um.gov.pl',
          'umig.gov.pl',
          'upow.gov.pl',
          'uppo.gov.pl',
          'us.gov.pl',
          'uw.gov.pl',
          'uzs.gov.pl',
          'wif.gov.pl',
          'wiih.gov.pl',
          'winb.gov.pl',
          'wios.gov.pl',
          'witd.gov.pl',
          'wiw.gov.pl',
          'wkz.gov.pl',
          'wsa.gov.pl',
          'wskr.gov.pl',
          'wsse.gov.pl',
          'wuoz.gov.pl',
          'wzmiuw.gov.pl',
          'zp.gov.pl',
          'zpisdn.gov.pl',
          'augustow.pl',
          'babia-gora.pl',
          'bedzin.pl',
          'beskidy.pl',
          'bialowieza.pl',
          'bialystok.pl',
          'bielawa.pl',
          'bieszczady.pl',
          'boleslawiec.pl',
          'bydgoszcz.pl',
          'bytom.pl',
          'cieszyn.pl',
          'czeladz.pl',
          'czest.pl',
          'dlugoleka.pl',
          'elblag.pl',
          'elk.pl',
          'glogow.pl',
          'gniezno.pl',
          'gorlice.pl',
          'grajewo.pl',
          'ilawa.pl',
          'jaworzno.pl',
          'jelenia-gora.pl',
          'jgora.pl',
          'kalisz.pl',
          'karpacz.pl',
          'kartuzy.pl',
          'kaszuby.pl',
          'katowice.pl',
          'kazimierz-dolny.pl',
          'kepno.pl',
          'ketrzyn.pl',
          'klodzko.pl',
          'kobierzyce.pl',
          'kolobrzeg.pl',
          'konin.pl',
          'konskowola.pl',
          'kutno.pl',
          'lapy.pl',
          'lebork.pl',
          'legnica.pl',
          'lezajsk.pl',
          'limanowa.pl',
          'lomza.pl',
          'lowicz.pl',
          'lubin.pl',
          'lukow.pl',
          'malbork.pl',
          'malopolska.pl',
          'mazowsze.pl',
          'mazury.pl',
          'mielec.pl',
          'mielno.pl',
          'mragowo.pl',
          'naklo.pl',
          'nowaruda.pl',
          'nysa.pl',
          'olawa.pl',
          'olecko.pl',
          'olkusz.pl',
          'olsztyn.pl',
          'opoczno.pl',
          'opole.pl',
          'ostroda.pl',
          'ostroleka.pl',
          'ostrowiec.pl',
          'ostrowwlkp.pl',
          'pila.pl',
          'pisz.pl',
          'podhale.pl',
          'podlasie.pl',
          'polkowice.pl',
          'pomorskie.pl',
          'pomorze.pl',
          'prochowice.pl',
          'pruszkow.pl',
          'przeworsk.pl',
          'pulawy.pl',
          'radom.pl',
          'rawa-maz.pl',
          'rybnik.pl',
          'rzeszow.pl',
          'sanok.pl',
          'sejny.pl',
          'skoczow.pl',
          'slask.pl',
          'slupsk.pl',
          'sosnowiec.pl',
          'stalowa-wola.pl',
          'starachowice.pl',
          'stargard.pl',
          'suwalki.pl',
          'swidnica.pl',
          'swiebodzin.pl',
          'swinoujscie.pl',
          'szczecin.pl',
          'szczytno.pl',
          'tarnobrzeg.pl',
          'tgory.pl',
          'turek.pl',
          'tychy.pl',
          'ustka.pl',
          'walbrzych.pl',
          'warmia.pl',
          'warszawa.pl',
          'waw.pl',
          'wegrow.pl',
          'wielun.pl',
          'wlocl.pl',
          'wloclawek.pl',
          'wodzislaw.pl',
          'wolomin.pl',
          'wroclaw.pl',
          'zachpomor.pl',
          'zagan.pl',
          'zarow.pl',
          'zgora.pl',
          'zgorzelec.pl',
          'pm',
          'pn',
          'co.pn',
          'edu.pn',
          'gov.pn',
          'net.pn',
          'org.pn',
          'post',
          'pr',
          'biz.pr',
          'com.pr',
          'edu.pr',
          'gov.pr',
          'info.pr',
          'isla.pr',
          'name.pr',
          'net.pr',
          'org.pr',
          'pro.pr',
          'ac.pr',
          'est.pr',
          'prof.pr',
          'pro',
          'aaa.pro',
          'aca.pro',
          'acct.pro',
          'avocat.pro',
          'bar.pro',
          'cpa.pro',
          'eng.pro',
          'jur.pro',
          'law.pro',
          'med.pro',
          'recht.pro',
          'ps',
          'com.ps',
          'edu.ps',
          'gov.ps',
          'net.ps',
          'org.ps',
          'plo.ps',
          'sec.ps',
          'pt',
          'com.pt',
          'edu.pt',
          'gov.pt',
          'int.pt',
          'net.pt',
          'nome.pt',
          'org.pt',
          'publ.pt',
          'pw',
          'belau.pw',
          'co.pw',
          'ed.pw',
          'go.pw',
          'or.pw',
          'py',
          'com.py',
          'coop.py',
          'edu.py',
          'gov.py',
          'mil.py',
          'net.py',
          'org.py',
          'qa',
          'com.qa',
          'edu.qa',
          'gov.qa',
          'mil.qa',
          'name.qa',
          'net.qa',
          'org.qa',
          'sch.qa',
          're',
          'asso.re',
          'com.re',
          'ro',
          'arts.ro',
          'com.ro',
          'firm.ro',
          'info.ro',
          'nom.ro',
          'nt.ro',
          'org.ro',
          'rec.ro',
          'store.ro',
          'tm.ro',
          'www.ro',
          'rs',
          'ac.rs',
          'co.rs',
          'edu.rs',
          'gov.rs',
          'in.rs',
          'org.rs',
          'ru',
          'rw',
          'ac.rw',
          'co.rw',
          'coop.rw',
          'gov.rw',
          'mil.rw',
          'net.rw',
          'org.rw',
          'sa',
          'com.sa',
          'edu.sa',
          'gov.sa',
          'med.sa',
          'net.sa',
          'org.sa',
          'pub.sa',
          'sch.sa',
          'sb',
          'com.sb',
          'edu.sb',
          'gov.sb',
          'net.sb',
          'org.sb',
          'sc',
          'com.sc',
          'edu.sc',
          'gov.sc',
          'net.sc',
          'org.sc',
          'sd',
          'com.sd',
          'edu.sd',
          'gov.sd',
          'info.sd',
          'med.sd',
          'net.sd',
          'org.sd',
          'tv.sd',
          'se',
          'a.se',
          'ac.se',
          'b.se',
          'bd.se',
          'brand.se',
          'c.se',
          'd.se',
          'e.se',
          'f.se',
          'fh.se',
          'fhsk.se',
          'fhv.se',
          'g.se',
          'h.se',
          'i.se',
          'k.se',
          'komforb.se',
          'kommunalforbund.se',
          'komvux.se',
          'l.se',
          'lanbib.se',
          'm.se',
          'n.se',
          'naturbruksgymn.se',
          'o.se',
          'org.se',
          'p.se',
          'parti.se',
          'pp.se',
          'press.se',
          'r.se',
          's.se',
          't.se',
          'tm.se',
          'u.se',
          'w.se',
          'x.se',
          'y.se',
          'z.se',
          'sg',
          'com.sg',
          'edu.sg',
          'gov.sg',
          'net.sg',
          'org.sg',
          'sh',
          'com.sh',
          'gov.sh',
          'mil.sh',
          'net.sh',
          'org.sh',
          'si',
          'sj',
          'sk',
          'sl',
          'com.sl',
          'edu.sl',
          'gov.sl',
          'net.sl',
          'org.sl',
          'sm',
          'sn',
          'art.sn',
          'com.sn',
          'edu.sn',
          'gouv.sn',
          'org.sn',
          'perso.sn',
          'univ.sn',
          'so',
          'com.so',
          'edu.so',
          'gov.so',
          'me.so',
          'net.so',
          'org.so',
          'sr',
          'ss',
          'biz.ss',
          'co.ss',
          'com.ss',
          'edu.ss',
          'gov.ss',
          'me.ss',
          'net.ss',
          'org.ss',
          'sch.ss',
          'st',
          'co.st',
          'com.st',
          'consulado.st',
          'edu.st',
          'embaixada.st',
          'mil.st',
          'net.st',
          'org.st',
          'principe.st',
          'saotome.st',
          'store.st',
          'su',
          'sv',
          'com.sv',
          'edu.sv',
          'gob.sv',
          'org.sv',
          'red.sv',
          'sx',
          'gov.sx',
          'sy',
          'com.sy',
          'edu.sy',
          'gov.sy',
          'mil.sy',
          'net.sy',
          'org.sy',
          'sz',
          'ac.sz',
          'co.sz',
          'org.sz',
          'tc',
          'td',
          'tel',
          'tf',
          'tg',
          'th',
          'ac.th',
          'co.th',
          'go.th',
          'in.th',
          'mi.th',
          'net.th',
          'or.th',
          'tj',
          'ac.tj',
          'biz.tj',
          'co.tj',
          'com.tj',
          'edu.tj',
          'go.tj',
          'gov.tj',
          'int.tj',
          'mil.tj',
          'name.tj',
          'net.tj',
          'nic.tj',
          'org.tj',
          'test.tj',
          'web.tj',
          'tk',
          'tl',
          'gov.tl',
          'tm',
          'co.tm',
          'com.tm',
          'edu.tm',
          'gov.tm',
          'mil.tm',
          'net.tm',
          'nom.tm',
          'org.tm',
          'tn',
          'com.tn',
          'ens.tn',
          'fin.tn',
          'gov.tn',
          'ind.tn',
          'info.tn',
          'intl.tn',
          'mincom.tn',
          'nat.tn',
          'net.tn',
          'org.tn',
          'perso.tn',
          'tourism.tn',
          'to',
          'com.to',
          'edu.to',
          'gov.to',
          'mil.to',
          'net.to',
          'org.to',
          'tr',
          'av.tr',
          'bbs.tr',
          'bel.tr',
          'biz.tr',
          'com.tr',
          'dr.tr',
          'edu.tr',
          'gen.tr',
          'gov.tr',
          'info.tr',
          'k12.tr',
          'kep.tr',
          'mil.tr',
          'name.tr',
          'net.tr',
          'org.tr',
          'pol.tr',
          'tel.tr',
          'tsk.tr',
          'tv.tr',
          'web.tr',
          'nc.tr',
          'gov.nc.tr',
          'tt',
          'biz.tt',
          'co.tt',
          'com.tt',
          'edu.tt',
          'gov.tt',
          'info.tt',
          'mil.tt',
          'name.tt',
          'net.tt',
          'org.tt',
          'pro.tt',
          'tv',
          'tw',
          'club.tw',
          'com.tw',
          'ebiz.tw',
          'edu.tw',
          'game.tw',
          'gov.tw',
          'idv.tw',
          'mil.tw',
          'net.tw',
          'org.tw',
          'tz',
          'ac.tz',
          'co.tz',
          'go.tz',
          'hotel.tz',
          'info.tz',
          'me.tz',
          'mil.tz',
          'mobi.tz',
          'ne.tz',
          'or.tz',
          'sc.tz',
          'tv.tz',
          'ua',
          'com.ua',
          'edu.ua',
          'gov.ua',
          'in.ua',
          'net.ua',
          'org.ua',
          'cherkassy.ua',
          'cherkasy.ua',
          'chernigov.ua',
          'chernihiv.ua',
          'chernivtsi.ua',
          'chernovtsy.ua',
          'ck.ua',
          'cn.ua',
          'cr.ua',
          'crimea.ua',
          'cv.ua',
          'dn.ua',
          'dnepropetrovsk.ua',
          'dnipropetrovsk.ua',
          'donetsk.ua',
          'dp.ua',
          'if.ua',
          'ivano-frankivsk.ua',
          'kh.ua',
          'kharkiv.ua',
          'kharkov.ua',
          'kherson.ua',
          'khmelnitskiy.ua',
          'khmelnytskyi.ua',
          'kiev.ua',
          'kirovograd.ua',
          'km.ua',
          'kr.ua',
          'kropyvnytskyi.ua',
          'krym.ua',
          'ks.ua',
          'kv.ua',
          'kyiv.ua',
          'lg.ua',
          'lt.ua',
          'lugansk.ua',
          'luhansk.ua',
          'lutsk.ua',
          'lv.ua',
          'lviv.ua',
          'mk.ua',
          'mykolaiv.ua',
          'nikolaev.ua',
          'od.ua',
          'odesa.ua',
          'odessa.ua',
          'pl.ua',
          'poltava.ua',
          'rivne.ua',
          'rovno.ua',
          'rv.ua',
          'sb.ua',
          'sebastopol.ua',
          'sevastopol.ua',
          'sm.ua',
          'sumy.ua',
          'te.ua',
          'ternopil.ua',
          'uz.ua',
          'uzhgorod.ua',
          'uzhhorod.ua',
          'vinnica.ua',
          'vinnytsia.ua',
          'vn.ua',
          'volyn.ua',
          'yalta.ua',
          'zakarpattia.ua',
          'zaporizhzhe.ua',
          'zaporizhzhia.ua',
          'zhitomir.ua',
          'zhytomyr.ua',
          'zp.ua',
          'zt.ua',
          'ug',
          'ac.ug',
          'co.ug',
          'com.ug',
          'go.ug',
          'ne.ug',
          'or.ug',
          'org.ug',
          'sc.ug',
          'uk',
          'ac.uk',
          'co.uk',
          'gov.uk',
          'ltd.uk',
          'me.uk',
          'net.uk',
          'nhs.uk',
          'org.uk',
          'plc.uk',
          'police.uk',
          '*.sch.uk',
          'us',
          'dni.us',
          'fed.us',
          'isa.us',
          'kids.us',
          'nsn.us',
          'ak.us',
          'al.us',
          'ar.us',
          'as.us',
          'az.us',
          'ca.us',
          'co.us',
          'ct.us',
          'dc.us',
          'de.us',
          'fl.us',
          'ga.us',
          'gu.us',
          'hi.us',
          'ia.us',
          'id.us',
          'il.us',
          'in.us',
          'ks.us',
          'ky.us',
          'la.us',
          'ma.us',
          'md.us',
          'me.us',
          'mi.us',
          'mn.us',
          'mo.us',
          'ms.us',
          'mt.us',
          'nc.us',
          'nd.us',
          'ne.us',
          'nh.us',
          'nj.us',
          'nm.us',
          'nv.us',
          'ny.us',
          'oh.us',
          'ok.us',
          'or.us',
          'pa.us',
          'pr.us',
          'ri.us',
          'sc.us',
          'sd.us',
          'tn.us',
          'tx.us',
          'ut.us',
          'va.us',
          'vi.us',
          'vt.us',
          'wa.us',
          'wi.us',
          'wv.us',
          'wy.us',
          'k12.ak.us',
          'k12.al.us',
          'k12.ar.us',
          'k12.as.us',
          'k12.az.us',
          'k12.ca.us',
          'k12.co.us',
          'k12.ct.us',
          'k12.dc.us',
          'k12.fl.us',
          'k12.ga.us',
          'k12.gu.us',
          'k12.ia.us',
          'k12.id.us',
          'k12.il.us',
          'k12.in.us',
          'k12.ks.us',
          'k12.ky.us',
          'k12.la.us',
          'k12.ma.us',
          'k12.md.us',
          'k12.me.us',
          'k12.mi.us',
          'k12.mn.us',
          'k12.mo.us',
          'k12.ms.us',
          'k12.mt.us',
          'k12.nc.us',
          'k12.ne.us',
          'k12.nh.us',
          'k12.nj.us',
          'k12.nm.us',
          'k12.nv.us',
          'k12.ny.us',
          'k12.oh.us',
          'k12.ok.us',
          'k12.or.us',
          'k12.pa.us',
          'k12.pr.us',
          'k12.sc.us',
          'k12.tn.us',
          'k12.tx.us',
          'k12.ut.us',
          'k12.va.us',
          'k12.vi.us',
          'k12.vt.us',
          'k12.wa.us',
          'k12.wi.us',
          'cc.ak.us',
          'lib.ak.us',
          'cc.al.us',
          'lib.al.us',
          'cc.ar.us',
          'lib.ar.us',
          'cc.as.us',
          'lib.as.us',
          'cc.az.us',
          'lib.az.us',
          'cc.ca.us',
          'lib.ca.us',
          'cc.co.us',
          'lib.co.us',
          'cc.ct.us',
          'lib.ct.us',
          'cc.dc.us',
          'lib.dc.us',
          'cc.de.us',
          'cc.fl.us',
          'cc.ga.us',
          'cc.gu.us',
          'cc.hi.us',
          'cc.ia.us',
          'cc.id.us',
          'cc.il.us',
          'cc.in.us',
          'cc.ks.us',
          'cc.ky.us',
          'cc.la.us',
          'cc.ma.us',
          'cc.md.us',
          'cc.me.us',
          'cc.mi.us',
          'cc.mn.us',
          'cc.mo.us',
          'cc.ms.us',
          'cc.mt.us',
          'cc.nc.us',
          'cc.nd.us',
          'cc.ne.us',
          'cc.nh.us',
          'cc.nj.us',
          'cc.nm.us',
          'cc.nv.us',
          'cc.ny.us',
          'cc.oh.us',
          'cc.ok.us',
          'cc.or.us',
          'cc.pa.us',
          'cc.pr.us',
          'cc.ri.us',
          'cc.sc.us',
          'cc.sd.us',
          'cc.tn.us',
          'cc.tx.us',
          'cc.ut.us',
          'cc.va.us',
          'cc.vi.us',
          'cc.vt.us',
          'cc.wa.us',
          'cc.wi.us',
          'cc.wv.us',
          'cc.wy.us',
          'k12.wy.us',
          'lib.fl.us',
          'lib.ga.us',
          'lib.gu.us',
          'lib.hi.us',
          'lib.ia.us',
          'lib.id.us',
          'lib.il.us',
          'lib.in.us',
          'lib.ks.us',
          'lib.ky.us',
          'lib.la.us',
          'lib.ma.us',
          'lib.md.us',
          'lib.me.us',
          'lib.mi.us',
          'lib.mn.us',
          'lib.mo.us',
          'lib.ms.us',
          'lib.mt.us',
          'lib.nc.us',
          'lib.nd.us',
          'lib.ne.us',
          'lib.nh.us',
          'lib.nj.us',
          'lib.nm.us',
          'lib.nv.us',
          'lib.ny.us',
          'lib.oh.us',
          'lib.ok.us',
          'lib.or.us',
          'lib.pa.us',
          'lib.pr.us',
          'lib.ri.us',
          'lib.sc.us',
          'lib.sd.us',
          'lib.tn.us',
          'lib.tx.us',
          'lib.ut.us',
          'lib.va.us',
          'lib.vi.us',
          'lib.vt.us',
          'lib.wa.us',
          'lib.wi.us',
          'lib.wy.us',
          'chtr.k12.ma.us',
          'paroch.k12.ma.us',
          'pvt.k12.ma.us',
          'ann-arbor.mi.us',
          'cog.mi.us',
          'dst.mi.us',
          'eaton.mi.us',
          'gen.mi.us',
          'mus.mi.us',
          'tec.mi.us',
          'washtenaw.mi.us',
          'uy',
          'com.uy',
          'edu.uy',
          'gub.uy',
          'mil.uy',
          'net.uy',
          'org.uy',
          'uz',
          'co.uz',
          'com.uz',
          'net.uz',
          'org.uz',
          'va',
          'vc',
          'com.vc',
          'edu.vc',
          'gov.vc',
          'mil.vc',
          'net.vc',
          'org.vc',
          've',
          'arts.ve',
          'bib.ve',
          'co.ve',
          'com.ve',
          'e12.ve',
          'edu.ve',
          'firm.ve',
          'gob.ve',
          'gov.ve',
          'info.ve',
          'int.ve',
          'mil.ve',
          'net.ve',
          'nom.ve',
          'org.ve',
          'rar.ve',
          'rec.ve',
          'store.ve',
          'tec.ve',
          'web.ve',
          'vg',
          'vi',
          'co.vi',
          'com.vi',
          'k12.vi',
          'net.vi',
          'org.vi',
          'vn',
          'ac.vn',
          'ai.vn',
          'biz.vn',
          'com.vn',
          'edu.vn',
          'gov.vn',
          'health.vn',
          'id.vn',
          'info.vn',
          'int.vn',
          'io.vn',
          'name.vn',
          'net.vn',
          'org.vn',
          'pro.vn',
          'angiang.vn',
          'bacgiang.vn',
          'backan.vn',
          'baclieu.vn',
          'bacninh.vn',
          'baria-vungtau.vn',
          'bentre.vn',
          'binhdinh.vn',
          'binhduong.vn',
          'binhphuoc.vn',
          'binhthuan.vn',
          'camau.vn',
          'cantho.vn',
          'caobang.vn',
          'daklak.vn',
          'daknong.vn',
          'danang.vn',
          'dienbien.vn',
          'dongnai.vn',
          'dongthap.vn',
          'gialai.vn',
          'hagiang.vn',
          'haiduong.vn',
          'haiphong.vn',
          'hanam.vn',
          'hanoi.vn',
          'hatinh.vn',
          'haugiang.vn',
          'hoabinh.vn',
          'hungyen.vn',
          'khanhhoa.vn',
          'kiengiang.vn',
          'kontum.vn',
          'laichau.vn',
          'lamdong.vn',
          'langson.vn',
          'laocai.vn',
          'longan.vn',
          'namdinh.vn',
          'nghean.vn',
          'ninhbinh.vn',
          'ninhthuan.vn',
          'phutho.vn',
          'phuyen.vn',
          'quangbinh.vn',
          'quangnam.vn',
          'quangngai.vn',
          'quangninh.vn',
          'quangtri.vn',
          'soctrang.vn',
          'sonla.vn',
          'tayninh.vn',
          'thaibinh.vn',
          'thainguyen.vn',
          'thanhhoa.vn',
          'thanhphohochiminh.vn',
          'thuathienhue.vn',
          'tiengiang.vn',
          'travinh.vn',
          'tuyenquang.vn',
          'vinhlong.vn',
          'vinhphuc.vn',
          'yenbai.vn',
          'vu',
          'com.vu',
          'edu.vu',
          'net.vu',
          'org.vu',
          'wf',
          'ws',
          'com.ws',
          'edu.ws',
          'gov.ws',
          'net.ws',
          'org.ws',
          'yt',
          'امارات',
          'հայ',
          'বাংলা',
          'бг',
          'البحرين',
          'бел',
          '中国',
          '中國',
          'الجزائر',
          'مصر',
          'ею',
          'ευ',
          'موريتانيا',
          'გე',
          'ελ',
          '香港',
          '個人.香港',
          '公司.香港',
          '政府.香港',
          '教育.香港',
          '組織.香港',
          '網絡.香港',
          'ಭಾರತ',
          'ଭାରତ',
          'ভাৰত',
          'भारतम्',
          'भारोत',
          'ڀارت',
          'ഭാരതം',
          'भारत',
          'بارت',
          'بھارت',
          'భారత్',
          'ભારત',
          'ਭਾਰਤ',
          'ভারত',
          'இந்தியா',
          'ایران',
          'ايران',
          'عراق',
          'الاردن',
          '한국',
          'қаз',
          'ລາວ',
          'ලංකා',
          'இலங்கை',
          'المغرب',
          'мкд',
          'мон',
          '澳門',
          '澳门',
          'مليسيا',
          'عمان',
          'پاکستان',
          'پاكستان',
          'فلسطين',
          'срб',
          'ак.срб',
          'обр.срб',
          'од.срб',
          'орг.срб',
          'пр.срб',
          'упр.срб',
          'рф',
          'قطر',
          'السعودية',
          'السعودیة',
          'السعودیۃ',
          'السعوديه',
          'سودان',
          '新加坡',
          'சிங்கப்பூர்',
          'سورية',
          'سوريا',
          'ไทย',
          'ทหาร.ไทย',
          'ธุรกิจ.ไทย',
          'เน็ต.ไทย',
          'รัฐบาล.ไทย',
          'ศึกษา.ไทย',
          'องค์กร.ไทย',
          'تونس',
          '台灣',
          '台湾',
          '臺灣',
          'укр',
          'اليمن',
          'xxx',
          'ye',
          'com.ye',
          'edu.ye',
          'gov.ye',
          'mil.ye',
          'net.ye',
          'org.ye',
          'ac.za',
          'agric.za',
          'alt.za',
          'co.za',
          'edu.za',
          'gov.za',
          'grondar.za',
          'law.za',
          'mil.za',
          'net.za',
          'ngo.za',
          'nic.za',
          'nis.za',
          'nom.za',
          'org.za',
          'school.za',
          'tm.za',
          'web.za',
          'zm',
          'ac.zm',
          'biz.zm',
          'co.zm',
          'com.zm',
          'edu.zm',
          'gov.zm',
          'info.zm',
          'mil.zm',
          'net.zm',
          'org.zm',
          'sch.zm',
          'zw',
          'ac.zw',
          'co.zw',
          'gov.zw',
          'mil.zw',
          'org.zw',
          'aaa',
          'aarp',
          'abb',
          'abbott',
          'abbvie',
          'abc',
          'able',
          'abogado',
          'abudhabi',
          'academy',
          'accenture',
          'accountant',
          'accountants',
          'aco',
          'actor',
          'ads',
          'adult',
          'aeg',
          'aetna',
          'afl',
          'africa',
          'agakhan',
          'agency',
          'aig',
          'airbus',
          'airforce',
          'airtel',
          'akdn',
          'alibaba',
          'alipay',
          'allfinanz',
          'allstate',
          'ally',
          'alsace',
          'alstom',
          'amazon',
          'americanexpress',
          'americanfamily',
          'amex',
          'amfam',
          'amica',
          'amsterdam',
          'analytics',
          'android',
          'anquan',
          'anz',
          'aol',
          'apartments',
          'app',
          'apple',
          'aquarelle',
          'arab',
          'aramco',
          'archi',
          'army',
          'art',
          'arte',
          'asda',
          'associates',
          'athleta',
          'attorney',
          'auction',
          'audi',
          'audible',
          'audio',
          'auspost',
          'author',
          'auto',
          'autos',
          'aws',
          'axa',
          'azure',
          'baby',
          'baidu',
          'banamex',
          'band',
          'bank',
          'bar',
          'barcelona',
          'barclaycard',
          'barclays',
          'barefoot',
          'bargains',
          'baseball',
          'basketball',
          'bauhaus',
          'bayern',
          'bbc',
          'bbt',
          'bbva',
          'bcg',
          'bcn',
          'beats',
          'beauty',
          'beer',
          'bentley',
          'berlin',
          'best',
          'bestbuy',
          'bet',
          'bharti',
          'bible',
          'bid',
          'bike',
          'bing',
          'bingo',
          'bio',
          'black',
          'blackfriday',
          'blockbuster',
          'blog',
          'bloomberg',
          'blue',
          'bms',
          'bmw',
          'bnpparibas',
          'boats',
          'boehringer',
          'bofa',
          'bom',
          'bond',
          'boo',
          'book',
          'booking',
          'bosch',
          'bostik',
          'boston',
          'bot',
          'boutique',
          'box',
          'bradesco',
          'bridgestone',
          'broadway',
          'broker',
          'brother',
          'brussels',
          'build',
          'builders',
          'business',
          'buy',
          'buzz',
          'bzh',
          'cab',
          'cafe',
          'cal',
          'call',
          'calvinklein',
          'cam',
          'camera',
          'camp',
          'canon',
          'capetown',
          'capital',
          'capitalone',
          'car',
          'caravan',
          'cards',
          'care',
          'career',
          'careers',
          'cars',
          'casa',
          'case',
          'cash',
          'casino',
          'catering',
          'catholic',
          'cba',
          'cbn',
          'cbre',
          'center',
          'ceo',
          'cern',
          'cfa',
          'cfd',
          'chanel',
          'channel',
          'charity',
          'chase',
          'chat',
          'cheap',
          'chintai',
          'christmas',
          'chrome',
          'church',
          'cipriani',
          'circle',
          'cisco',
          'citadel',
          'citi',
          'citic',
          'city',
          'claims',
          'cleaning',
          'click',
          'clinic',
          'clinique',
          'clothing',
          'cloud',
          'club',
          'clubmed',
          'coach',
          'codes',
          'coffee',
          'college',
          'cologne',
          'commbank',
          'community',
          'company',
          'compare',
          'computer',
          'comsec',
          'condos',
          'construction',
          'consulting',
          'contact',
          'contractors',
          'cooking',
          'cool',
          'corsica',
          'country',
          'coupon',
          'coupons',
          'courses',
          'cpa',
          'credit',
          'creditcard',
          'creditunion',
          'cricket',
          'crown',
          'crs',
          'cruise',
          'cruises',
          'cuisinella',
          'cymru',
          'cyou',
          'dad',
          'dance',
          'data',
          'date',
          'dating',
          'datsun',
          'day',
          'dclk',
          'dds',
          'deal',
          'dealer',
          'deals',
          'degree',
          'delivery',
          'dell',
          'deloitte',
          'delta',
          'democrat',
          'dental',
          'dentist',
          'desi',
          'design',
          'dev',
          'dhl',
          'diamonds',
          'diet',
          'digital',
          'direct',
          'directory',
          'discount',
          'discover',
          'dish',
          'diy',
          'dnp',
          'docs',
          'doctor',
          'dog',
          'domains',
          'dot',
          'download',
          'drive',
          'dtv',
          'dubai',
          'dunlop',
          'dupont',
          'durban',
          'dvag',
          'dvr',
          'earth',
          'eat',
          'eco',
          'edeka',
          'education',
          'email',
          'emerck',
          'energy',
          'engineer',
          'engineering',
          'enterprises',
          'epson',
          'equipment',
          'ericsson',
          'erni',
          'esq',
          'estate',
          'eurovision',
          'eus',
          'events',
          'exchange',
          'expert',
          'exposed',
          'express',
          'extraspace',
          'fage',
          'fail',
          'fairwinds',
          'faith',
          'family',
          'fan',
          'fans',
          'farm',
          'farmers',
          'fashion',
          'fast',
          'fedex',
          'feedback',
          'ferrari',
          'ferrero',
          'fidelity',
          'fido',
          'film',
          'final',
          'finance',
          'financial',
          'fire',
          'firestone',
          'firmdale',
          'fish',
          'fishing',
          'fit',
          'fitness',
          'flickr',
          'flights',
          'flir',
          'florist',
          'flowers',
          'fly',
          'foo',
          'food',
          'football',
          'ford',
          'forex',
          'forsale',
          'forum',
          'foundation',
          'fox',
          'free',
          'fresenius',
          'frl',
          'frogans',
          'frontier',
          'ftr',
          'fujitsu',
          'fun',
          'fund',
          'furniture',
          'futbol',
          'fyi',
          'gal',
          'gallery',
          'gallo',
          'gallup',
          'game',
          'games',
          'gap',
          'garden',
          'gay',
          'gbiz',
          'gdn',
          'gea',
          'gent',
          'genting',
          'george',
          'ggee',
          'gift',
          'gifts',
          'gives',
          'giving',
          'glass',
          'gle',
          'global',
          'globo',
          'gmail',
          'gmbh',
          'gmo',
          'gmx',
          'godaddy',
          'gold',
          'goldpoint',
          'golf',
          'goo',
          'goodyear',
          'goog',
          'google',
          'gop',
          'got',
          'grainger',
          'graphics',
          'gratis',
          'green',
          'gripe',
          'grocery',
          'group',
          'gucci',
          'guge',
          'guide',
          'guitars',
          'guru',
          'hair',
          'hamburg',
          'hangout',
          'haus',
          'hbo',
          'hdfc',
          'hdfcbank',
          'health',
          'healthcare',
          'help',
          'helsinki',
          'here',
          'hermes',
          'hiphop',
          'hisamitsu',
          'hitachi',
          'hiv',
          'hkt',
          'hockey',
          'holdings',
          'holiday',
          'homedepot',
          'homegoods',
          'homes',
          'homesense',
          'honda',
          'horse',
          'hospital',
          'host',
          'hosting',
          'hot',
          'hotels',
          'hotmail',
          'house',
          'how',
          'hsbc',
          'hughes',
          'hyatt',
          'hyundai',
          'ibm',
          'icbc',
          'ice',
          'icu',
          'ieee',
          'ifm',
          'ikano',
          'imamat',
          'imdb',
          'immo',
          'immobilien',
          'inc',
          'industries',
          'infiniti',
          'ing',
          'ink',
          'institute',
          'insurance',
          'insure',
          'international',
          'intuit',
          'investments',
          'ipiranga',
          'irish',
          'ismaili',
          'ist',
          'istanbul',
          'itau',
          'itv',
          'jaguar',
          'java',
          'jcb',
          'jeep',
          'jetzt',
          'jewelry',
          'jio',
          'jll',
          'jmp',
          'jnj',
          'joburg',
          'jot',
          'joy',
          'jpmorgan',
          'jprs',
          'juegos',
          'juniper',
          'kaufen',
          'kddi',
          'kerryhotels',
          'kerrylogistics',
          'kerryproperties',
          'kfh',
          'kia',
          'kids',
          'kim',
          'kindle',
          'kitchen',
          'kiwi',
          'koeln',
          'komatsu',
          'kosher',
          'kpmg',
          'kpn',
          'krd',
          'kred',
          'kuokgroup',
          'kyoto',
          'lacaixa',
          'lamborghini',
          'lamer',
          'lancaster',
          'land',
          'landrover',
          'lanxess',
          'lasalle',
          'lat',
          'latino',
          'latrobe',
          'law',
          'lawyer',
          'lds',
          'lease',
          'leclerc',
          'lefrak',
          'legal',
          'lego',
          'lexus',
          'lgbt',
          'lidl',
          'life',
          'lifeinsurance',
          'lifestyle',
          'lighting',
          'like',
          'lilly',
          'limited',
          'limo',
          'lincoln',
          'link',
          'lipsy',
          'live',
          'living',
          'llc',
          'llp',
          'loan',
          'loans',
          'locker',
          'locus',
          'lol',
          'london',
          'lotte',
          'lotto',
          'love',
          'lpl',
          'lplfinancial',
          'ltd',
          'ltda',
          'lundbeck',
          'luxe',
          'luxury',
          'madrid',
          'maif',
          'maison',
          'makeup',
          'man',
          'management',
          'mango',
          'map',
          'market',
          'marketing',
          'markets',
          'marriott',
          'marshalls',
          'mattel',
          'mba',
          'mckinsey',
          'med',
          'media',
          'meet',
          'melbourne',
          'meme',
          'memorial',
          'men',
          'menu',
          'merck',
          'merckmsd',
          'miami',
          'microsoft',
          'mini',
          'mint',
          'mit',
          'mitsubishi',
          'mlb',
          'mls',
          'mma',
          'mobile',
          'moda',
          'moe',
          'moi',
          'mom',
          'monash',
          'money',
          'monster',
          'mormon',
          'mortgage',
          'moscow',
          'moto',
          'motorcycles',
          'mov',
          'movie',
          'msd',
          'mtn',
          'mtr',
          'music',
          'nab',
          'nagoya',
          'navy',
          'nba',
          'nec',
          'netbank',
          'netflix',
          'network',
          'neustar',
          'new',
          'news',
          'next',
          'nextdirect',
          'nexus',
          'nfl',
          'ngo',
          'nhk',
          'nico',
          'nike',
          'nikon',
          'ninja',
          'nissan',
          'nissay',
          'nokia',
          'norton',
          'now',
          'nowruz',
          'nowtv',
          'nra',
          'nrw',
          'ntt',
          'nyc',
          'obi',
          'observer',
          'office',
          'okinawa',
          'olayan',
          'olayangroup',
          'ollo',
          'omega',
          'one',
          'ong',
          'onl',
          'online',
          'ooo',
          'open',
          'oracle',
          'orange',
          'organic',
          'origins',
          'osaka',
          'otsuka',
          'ott',
          'ovh',
          'page',
          'panasonic',
          'paris',
          'pars',
          'partners',
          'parts',
          'party',
          'pay',
          'pccw',
          'pet',
          'pfizer',
          'pharmacy',
          'phd',
          'philips',
          'phone',
          'photo',
          'photography',
          'photos',
          'physio',
          'pics',
          'pictet',
          'pictures',
          'pid',
          'pin',
          'ping',
          'pink',
          'pioneer',
          'pizza',
          'place',
          'play',
          'playstation',
          'plumbing',
          'plus',
          'pnc',
          'pohl',
          'poker',
          'politie',
          'porn',
          'pramerica',
          'praxi',
          'press',
          'prime',
          'prod',
          'productions',
          'prof',
          'progressive',
          'promo',
          'properties',
          'property',
          'protection',
          'pru',
          'prudential',
          'pub',
          'pwc',
          'qpon',
          'quebec',
          'quest',
          'racing',
          'radio',
          'read',
          'realestate',
          'realtor',
          'realty',
          'recipes',
          'red',
          'redstone',
          'redumbrella',
          'rehab',
          'reise',
          'reisen',
          'reit',
          'reliance',
          'ren',
          'rent',
          'rentals',
          'repair',
          'report',
          'republican',
          'rest',
          'restaurant',
          'review',
          'reviews',
          'rexroth',
          'rich',
          'richardli',
          'ricoh',
          'ril',
          'rio',
          'rip',
          'rocks',
          'rodeo',
          'rogers',
          'room',
          'rsvp',
          'rugby',
          'ruhr',
          'run',
          'rwe',
          'ryukyu',
          'saarland',
          'safe',
          'safety',
          'sakura',
          'sale',
          'salon',
          'samsclub',
          'samsung',
          'sandvik',
          'sandvikcoromant',
          'sanofi',
          'sap',
          'sarl',
          'sas',
          'save',
          'saxo',
          'sbi',
          'sbs',
          'scb',
          'schaeffler',
          'schmidt',
          'scholarships',
          'school',
          'schule',
          'schwarz',
          'science',
          'scot',
          'search',
          'seat',
          'secure',
          'security',
          'seek',
          'select',
          'sener',
          'services',
          'seven',
          'sew',
          'sex',
          'sexy',
          'sfr',
          'shangrila',
          'sharp',
          'shell',
          'shia',
          'shiksha',
          'shoes',
          'shop',
          'shopping',
          'shouji',
          'show',
          'silk',
          'sina',
          'singles',
          'site',
          'ski',
          'skin',
          'sky',
          'skype',
          'sling',
          'smart',
          'smile',
          'sncf',
          'soccer',
          'social',
          'softbank',
          'software',
          'sohu',
          'solar',
          'solutions',
          'song',
          'sony',
          'soy',
          'spa',
          'space',
          'sport',
          'spot',
          'srl',
          'stada',
          'staples',
          'star',
          'statebank',
          'statefarm',
          'stc',
          'stcgroup',
          'stockholm',
          'storage',
          'store',
          'stream',
          'studio',
          'study',
          'style',
          'sucks',
          'supplies',
          'supply',
          'support',
          'surf',
          'surgery',
          'suzuki',
          'swatch',
          'swiss',
          'sydney',
          'systems',
          'tab',
          'taipei',
          'talk',
          'taobao',
          'target',
          'tatamotors',
          'tatar',
          'tattoo',
          'tax',
          'taxi',
          'tci',
          'tdk',
          'team',
          'tech',
          'technology',
          'temasek',
          'tennis',
          'teva',
          'thd',
          'theater',
          'theatre',
          'tiaa',
          'tickets',
          'tienda',
          'tips',
          'tires',
          'tirol',
          'tjmaxx',
          'tjx',
          'tkmaxx',
          'tmall',
          'today',
          'tokyo',
          'tools',
          'top',
          'toray',
          'toshiba',
          'total',
          'tours',
          'town',
          'toyota',
          'toys',
          'trade',
          'trading',
          'training',
          'travel',
          'travelers',
          'travelersinsurance',
          'trust',
          'trv',
          'tube',
          'tui',
          'tunes',
          'tushu',
          'tvs',
          'ubank',
          'ubs',
          'unicom',
          'university',
          'uno',
          'uol',
          'ups',
          'vacations',
          'vana',
          'vanguard',
          'vegas',
          'ventures',
          'verisign',
          'versicherung',
          'vet',
          'viajes',
          'video',
          'vig',
          'viking',
          'villas',
          'vin',
          'vip',
          'virgin',
          'visa',
          'vision',
          'viva',
          'vivo',
          'vlaanderen',
          'vodka',
          'volvo',
          'vote',
          'voting',
          'voto',
          'voyage',
          'wales',
          'walmart',
          'walter',
          'wang',
          'wanggou',
          'watch',
          'watches',
          'weather',
          'weatherchannel',
          'webcam',
          'weber',
          'website',
          'wed',
          'wedding',
          'weibo',
          'weir',
          'whoswho',
          'wien',
          'wiki',
          'williamhill',
          'win',
          'windows',
          'wine',
          'winners',
          'wme',
          'wolterskluwer',
          'woodside',
          'work',
          'works',
          'world',
          'wow',
          'wtc',
          'wtf',
          'xbox',
          'xerox',
          'xihuan',
          'xin',
          'कॉम',
          'セール',
          '佛山',
          '慈善',
          '集团',
          '在线',
          '点看',
          'คอม',
          '八卦',
          'موقع',
          '公益',
          '公司',
          '香格里拉',
          '网站',
          '移动',
          '我爱你',
          'москва',
          'католик',
          'онлайн',
          'сайт',
          '联通',
          'קום',
          '时尚',
          '微博',
          '淡马锡',
          'ファッション',
          'орг',
          'नेट',
          'ストア',
          'アマゾン',
          '삼성',
          '商标',
          '商店',
          '商城',
          'дети',
          'ポイント',
          '新闻',
          '家電',
          'كوم',
          '中文网',
          '中信',
          '娱乐',
          '谷歌',
          '電訊盈科',
          '购物',
          'クラウド',
          '通販',
          '网店',
          'संगठन',
          '餐厅',
          '网络',
          'ком',
          '亚马逊',
          '食品',
          '飞利浦',
          '手机',
          'ارامكو',
          'العليان',
          'بازار',
          'ابوظبي',
          'كاثوليك',
          'همراه',
          '닷컴',
          '政府',
          'شبكة',
          'بيتك',
          'عرب',
          '机构',
          '组织机构',
          '健康',
          '招聘',
          'рус',
          '大拿',
          'みんな',
          'グーグル',
          '世界',
          '書籍',
          '网址',
          '닷넷',
          'コム',
          '天主教',
          '游戏',
          'verm\xf6gensberater',
          'verm\xf6gensberatung',
          '企业',
          '信息',
          '嘉里大酒店',
          '嘉里',
          '广东',
          '政务',
          'xyz',
          'yachts',
          'yahoo',
          'yamaxun',
          'yandex',
          'yodobashi',
          'yoga',
          'yokohama',
          'you',
          'youtube',
          'yun',
          'zappos',
          'zara',
          'zero',
          'zip',
          'zone',
          'zuerich',
          'co.krd',
          'edu.krd',
          'art.pl',
          'gliwice.pl',
          'krakow.pl',
          'poznan.pl',
          'wroc.pl',
          'zakopane.pl',
          'lib.de.us',
          '12chars.dev',
          '12chars.it',
          '12chars.pro',
          'cc.ua',
          'inf.ua',
          'ltd.ua',
          '611.to',
          'a2hosted.com',
          'cpserver.com',
          'aaa.vodka',
          '*.on-acorn.io',
          'activetrail.biz',
          'adaptable.app',
          'adobeaemcloud.com',
          '*.dev.adobeaemcloud.com',
          'aem.live',
          'hlx.live',
          'adobeaemcloud.net',
          'aem.page',
          'hlx.page',
          'hlx3.page',
          'adobeio-static.net',
          'adobeioruntime.net',
          'africa.com',
          'beep.pl',
          'airkitapps.com',
          'airkitapps-au.com',
          'airkitapps.eu',
          'aivencloud.com',
          'akadns.net',
          'akamai.net',
          'akamai-staging.net',
          'akamaiedge.net',
          'akamaiedge-staging.net',
          'akamaihd.net',
          'akamaihd-staging.net',
          'akamaiorigin.net',
          'akamaiorigin-staging.net',
          'akamaized.net',
          'akamaized-staging.net',
          'edgekey.net',
          'edgekey-staging.net',
          'edgesuite.net',
          'edgesuite-staging.net',
          'barsy.ca',
          '*.compute.estate',
          '*.alces.network',
          'kasserver.com',
          'altervista.org',
          'alwaysdata.net',
          'myamaze.net',
          'execute-api.cn-north-1.amazonaws.com.cn',
          'execute-api.cn-northwest-1.amazonaws.com.cn',
          'execute-api.af-south-1.amazonaws.com',
          'execute-api.ap-east-1.amazonaws.com',
          'execute-api.ap-northeast-1.amazonaws.com',
          'execute-api.ap-northeast-2.amazonaws.com',
          'execute-api.ap-northeast-3.amazonaws.com',
          'execute-api.ap-south-1.amazonaws.com',
          'execute-api.ap-south-2.amazonaws.com',
          'execute-api.ap-southeast-1.amazonaws.com',
          'execute-api.ap-southeast-2.amazonaws.com',
          'execute-api.ap-southeast-3.amazonaws.com',
          'execute-api.ap-southeast-4.amazonaws.com',
          'execute-api.ap-southeast-5.amazonaws.com',
          'execute-api.ca-central-1.amazonaws.com',
          'execute-api.ca-west-1.amazonaws.com',
          'execute-api.eu-central-1.amazonaws.com',
          'execute-api.eu-central-2.amazonaws.com',
          'execute-api.eu-north-1.amazonaws.com',
          'execute-api.eu-south-1.amazonaws.com',
          'execute-api.eu-south-2.amazonaws.com',
          'execute-api.eu-west-1.amazonaws.com',
          'execute-api.eu-west-2.amazonaws.com',
          'execute-api.eu-west-3.amazonaws.com',
          'execute-api.il-central-1.amazonaws.com',
          'execute-api.me-central-1.amazonaws.com',
          'execute-api.me-south-1.amazonaws.com',
          'execute-api.sa-east-1.amazonaws.com',
          'execute-api.us-east-1.amazonaws.com',
          'execute-api.us-east-2.amazonaws.com',
          'execute-api.us-gov-east-1.amazonaws.com',
          'execute-api.us-gov-west-1.amazonaws.com',
          'execute-api.us-west-1.amazonaws.com',
          'execute-api.us-west-2.amazonaws.com',
          'cloudfront.net',
          'auth.af-south-1.amazoncognito.com',
          'auth.ap-east-1.amazoncognito.com',
          'auth.ap-northeast-1.amazoncognito.com',
          'auth.ap-northeast-2.amazoncognito.com',
          'auth.ap-northeast-3.amazoncognito.com',
          'auth.ap-south-1.amazoncognito.com',
          'auth.ap-south-2.amazoncognito.com',
          'auth.ap-southeast-1.amazoncognito.com',
          'auth.ap-southeast-2.amazoncognito.com',
          'auth.ap-southeast-3.amazoncognito.com',
          'auth.ap-southeast-4.amazoncognito.com',
          'auth.ca-central-1.amazoncognito.com',
          'auth.ca-west-1.amazoncognito.com',
          'auth.eu-central-1.amazoncognito.com',
          'auth.eu-central-2.amazoncognito.com',
          'auth.eu-north-1.amazoncognito.com',
          'auth.eu-south-1.amazoncognito.com',
          'auth.eu-south-2.amazoncognito.com',
          'auth.eu-west-1.amazoncognito.com',
          'auth.eu-west-2.amazoncognito.com',
          'auth.eu-west-3.amazoncognito.com',
          'auth.il-central-1.amazoncognito.com',
          'auth.me-central-1.amazoncognito.com',
          'auth.me-south-1.amazoncognito.com',
          'auth.sa-east-1.amazoncognito.com',
          'auth.us-east-1.amazoncognito.com',
          'auth-fips.us-east-1.amazoncognito.com',
          'auth.us-east-2.amazoncognito.com',
          'auth-fips.us-east-2.amazoncognito.com',
          'auth-fips.us-gov-west-1.amazoncognito.com',
          'auth.us-west-1.amazoncognito.com',
          'auth-fips.us-west-1.amazoncognito.com',
          'auth.us-west-2.amazoncognito.com',
          'auth-fips.us-west-2.amazoncognito.com',
          '*.compute.amazonaws.com.cn',
          '*.compute.amazonaws.com',
          '*.compute-1.amazonaws.com',
          'us-east-1.amazonaws.com',
          'emrappui-prod.cn-north-1.amazonaws.com.cn',
          'emrnotebooks-prod.cn-north-1.amazonaws.com.cn',
          'emrstudio-prod.cn-north-1.amazonaws.com.cn',
          'emrappui-prod.cn-northwest-1.amazonaws.com.cn',
          'emrnotebooks-prod.cn-northwest-1.amazonaws.com.cn',
          'emrstudio-prod.cn-northwest-1.amazonaws.com.cn',
          'emrappui-prod.af-south-1.amazonaws.com',
          'emrnotebooks-prod.af-south-1.amazonaws.com',
          'emrstudio-prod.af-south-1.amazonaws.com',
          'emrappui-prod.ap-east-1.amazonaws.com',
          'emrnotebooks-prod.ap-east-1.amazonaws.com',
          'emrstudio-prod.ap-east-1.amazonaws.com',
          'emrappui-prod.ap-northeast-1.amazonaws.com',
          'emrnotebooks-prod.ap-northeast-1.amazonaws.com',
          'emrstudio-prod.ap-northeast-1.amazonaws.com',
          'emrappui-prod.ap-northeast-2.amazonaws.com',
          'emrnotebooks-prod.ap-northeast-2.amazonaws.com',
          'emrstudio-prod.ap-northeast-2.amazonaws.com',
          'emrappui-prod.ap-northeast-3.amazonaws.com',
          'emrnotebooks-prod.ap-northeast-3.amazonaws.com',
          'emrstudio-prod.ap-northeast-3.amazonaws.com',
          'emrappui-prod.ap-south-1.amazonaws.com',
          'emrnotebooks-prod.ap-south-1.amazonaws.com',
          'emrstudio-prod.ap-south-1.amazonaws.com',
          'emrappui-prod.ap-south-2.amazonaws.com',
          'emrnotebooks-prod.ap-south-2.amazonaws.com',
          'emrstudio-prod.ap-south-2.amazonaws.com',
          'emrappui-prod.ap-southeast-1.amazonaws.com',
          'emrnotebooks-prod.ap-southeast-1.amazonaws.com',
          'emrstudio-prod.ap-southeast-1.amazonaws.com',
          'emrappui-prod.ap-southeast-2.amazonaws.com',
          'emrnotebooks-prod.ap-southeast-2.amazonaws.com',
          'emrstudio-prod.ap-southeast-2.amazonaws.com',
          'emrappui-prod.ap-southeast-3.amazonaws.com',
          'emrnotebooks-prod.ap-southeast-3.amazonaws.com',
          'emrstudio-prod.ap-southeast-3.amazonaws.com',
          'emrappui-prod.ap-southeast-4.amazonaws.com',
          'emrnotebooks-prod.ap-southeast-4.amazonaws.com',
          'emrstudio-prod.ap-southeast-4.amazonaws.com',
          'emrappui-prod.ca-central-1.amazonaws.com',
          'emrnotebooks-prod.ca-central-1.amazonaws.com',
          'emrstudio-prod.ca-central-1.amazonaws.com',
          'emrappui-prod.ca-west-1.amazonaws.com',
          'emrnotebooks-prod.ca-west-1.amazonaws.com',
          'emrstudio-prod.ca-west-1.amazonaws.com',
          'emrappui-prod.eu-central-1.amazonaws.com',
          'emrnotebooks-prod.eu-central-1.amazonaws.com',
          'emrstudio-prod.eu-central-1.amazonaws.com',
          'emrappui-prod.eu-central-2.amazonaws.com',
          'emrnotebooks-prod.eu-central-2.amazonaws.com',
          'emrstudio-prod.eu-central-2.amazonaws.com',
          'emrappui-prod.eu-north-1.amazonaws.com',
          'emrnotebooks-prod.eu-north-1.amazonaws.com',
          'emrstudio-prod.eu-north-1.amazonaws.com',
          'emrappui-prod.eu-south-1.amazonaws.com',
          'emrnotebooks-prod.eu-south-1.amazonaws.com',
          'emrstudio-prod.eu-south-1.amazonaws.com',
          'emrappui-prod.eu-south-2.amazonaws.com',
          'emrnotebooks-prod.eu-south-2.amazonaws.com',
          'emrstudio-prod.eu-south-2.amazonaws.com',
          'emrappui-prod.eu-west-1.amazonaws.com',
          'emrnotebooks-prod.eu-west-1.amazonaws.com',
          'emrstudio-prod.eu-west-1.amazonaws.com',
          'emrappui-prod.eu-west-2.amazonaws.com',
          'emrnotebooks-prod.eu-west-2.amazonaws.com',
          'emrstudio-prod.eu-west-2.amazonaws.com',
          'emrappui-prod.eu-west-3.amazonaws.com',
          'emrnotebooks-prod.eu-west-3.amazonaws.com',
          'emrstudio-prod.eu-west-3.amazonaws.com',
          'emrappui-prod.il-central-1.amazonaws.com',
          'emrnotebooks-prod.il-central-1.amazonaws.com',
          'emrstudio-prod.il-central-1.amazonaws.com',
          'emrappui-prod.me-central-1.amazonaws.com',
          'emrnotebooks-prod.me-central-1.amazonaws.com',
          'emrstudio-prod.me-central-1.amazonaws.com',
          'emrappui-prod.me-south-1.amazonaws.com',
          'emrnotebooks-prod.me-south-1.amazonaws.com',
          'emrstudio-prod.me-south-1.amazonaws.com',
          'emrappui-prod.sa-east-1.amazonaws.com',
          'emrnotebooks-prod.sa-east-1.amazonaws.com',
          'emrstudio-prod.sa-east-1.amazonaws.com',
          'emrappui-prod.us-east-1.amazonaws.com',
          'emrnotebooks-prod.us-east-1.amazonaws.com',
          'emrstudio-prod.us-east-1.amazonaws.com',
          'emrappui-prod.us-east-2.amazonaws.com',
          'emrnotebooks-prod.us-east-2.amazonaws.com',
          'emrstudio-prod.us-east-2.amazonaws.com',
          'emrappui-prod.us-gov-east-1.amazonaws.com',
          'emrnotebooks-prod.us-gov-east-1.amazonaws.com',
          'emrstudio-prod.us-gov-east-1.amazonaws.com',
          'emrappui-prod.us-gov-west-1.amazonaws.com',
          'emrnotebooks-prod.us-gov-west-1.amazonaws.com',
          'emrstudio-prod.us-gov-west-1.amazonaws.com',
          'emrappui-prod.us-west-1.amazonaws.com',
          'emrnotebooks-prod.us-west-1.amazonaws.com',
          'emrstudio-prod.us-west-1.amazonaws.com',
          'emrappui-prod.us-west-2.amazonaws.com',
          'emrnotebooks-prod.us-west-2.amazonaws.com',
          'emrstudio-prod.us-west-2.amazonaws.com',
          '*.cn-north-1.airflow.amazonaws.com.cn',
          '*.cn-northwest-1.airflow.amazonaws.com.cn',
          '*.af-south-1.airflow.amazonaws.com',
          '*.ap-east-1.airflow.amazonaws.com',
          '*.ap-northeast-1.airflow.amazonaws.com',
          '*.ap-northeast-2.airflow.amazonaws.com',
          '*.ap-northeast-3.airflow.amazonaws.com',
          '*.ap-south-1.airflow.amazonaws.com',
          '*.ap-south-2.airflow.amazonaws.com',
          '*.ap-southeast-1.airflow.amazonaws.com',
          '*.ap-southeast-2.airflow.amazonaws.com',
          '*.ap-southeast-3.airflow.amazonaws.com',
          '*.ap-southeast-4.airflow.amazonaws.com',
          '*.ca-central-1.airflow.amazonaws.com',
          '*.ca-west-1.airflow.amazonaws.com',
          '*.eu-central-1.airflow.amazonaws.com',
          '*.eu-central-2.airflow.amazonaws.com',
          '*.eu-north-1.airflow.amazonaws.com',
          '*.eu-south-1.airflow.amazonaws.com',
          '*.eu-south-2.airflow.amazonaws.com',
          '*.eu-west-1.airflow.amazonaws.com',
          '*.eu-west-2.airflow.amazonaws.com',
          '*.eu-west-3.airflow.amazonaws.com',
          '*.il-central-1.airflow.amazonaws.com',
          '*.me-central-1.airflow.amazonaws.com',
          '*.me-south-1.airflow.amazonaws.com',
          '*.sa-east-1.airflow.amazonaws.com',
          '*.us-east-1.airflow.amazonaws.com',
          '*.us-east-2.airflow.amazonaws.com',
          '*.us-west-1.airflow.amazonaws.com',
          '*.us-west-2.airflow.amazonaws.com',
          's3.dualstack.cn-north-1.amazonaws.com.cn',
          's3-accesspoint.dualstack.cn-north-1.amazonaws.com.cn',
          's3-website.dualstack.cn-north-1.amazonaws.com.cn',
          's3.cn-north-1.amazonaws.com.cn',
          's3-accesspoint.cn-north-1.amazonaws.com.cn',
          's3-deprecated.cn-north-1.amazonaws.com.cn',
          's3-object-lambda.cn-north-1.amazonaws.com.cn',
          's3-website.cn-north-1.amazonaws.com.cn',
          's3.dualstack.cn-northwest-1.amazonaws.com.cn',
          's3-accesspoint.dualstack.cn-northwest-1.amazonaws.com.cn',
          's3.cn-northwest-1.amazonaws.com.cn',
          's3-accesspoint.cn-northwest-1.amazonaws.com.cn',
          's3-object-lambda.cn-northwest-1.amazonaws.com.cn',
          's3-website.cn-northwest-1.amazonaws.com.cn',
          's3.dualstack.af-south-1.amazonaws.com',
          's3-accesspoint.dualstack.af-south-1.amazonaws.com',
          's3-website.dualstack.af-south-1.amazonaws.com',
          's3.af-south-1.amazonaws.com',
          's3-accesspoint.af-south-1.amazonaws.com',
          's3-object-lambda.af-south-1.amazonaws.com',
          's3-website.af-south-1.amazonaws.com',
          's3.dualstack.ap-east-1.amazonaws.com',
          's3-accesspoint.dualstack.ap-east-1.amazonaws.com',
          's3.ap-east-1.amazonaws.com',
          's3-accesspoint.ap-east-1.amazonaws.com',
          's3-object-lambda.ap-east-1.amazonaws.com',
          's3-website.ap-east-1.amazonaws.com',
          's3.dualstack.ap-northeast-1.amazonaws.com',
          's3-accesspoint.dualstack.ap-northeast-1.amazonaws.com',
          's3-website.dualstack.ap-northeast-1.amazonaws.com',
          's3.ap-northeast-1.amazonaws.com',
          's3-accesspoint.ap-northeast-1.amazonaws.com',
          's3-object-lambda.ap-northeast-1.amazonaws.com',
          's3-website.ap-northeast-1.amazonaws.com',
          's3.dualstack.ap-northeast-2.amazonaws.com',
          's3-accesspoint.dualstack.ap-northeast-2.amazonaws.com',
          's3-website.dualstack.ap-northeast-2.amazonaws.com',
          's3.ap-northeast-2.amazonaws.com',
          's3-accesspoint.ap-northeast-2.amazonaws.com',
          's3-object-lambda.ap-northeast-2.amazonaws.com',
          's3-website.ap-northeast-2.amazonaws.com',
          's3.dualstack.ap-northeast-3.amazonaws.com',
          's3-accesspoint.dualstack.ap-northeast-3.amazonaws.com',
          's3-website.dualstack.ap-northeast-3.amazonaws.com',
          's3.ap-northeast-3.amazonaws.com',
          's3-accesspoint.ap-northeast-3.amazonaws.com',
          's3-object-lambda.ap-northeast-3.amazonaws.com',
          's3-website.ap-northeast-3.amazonaws.com',
          's3.dualstack.ap-south-1.amazonaws.com',
          's3-accesspoint.dualstack.ap-south-1.amazonaws.com',
          's3-website.dualstack.ap-south-1.amazonaws.com',
          's3.ap-south-1.amazonaws.com',
          's3-accesspoint.ap-south-1.amazonaws.com',
          's3-object-lambda.ap-south-1.amazonaws.com',
          's3-website.ap-south-1.amazonaws.com',
          's3.dualstack.ap-south-2.amazonaws.com',
          's3-accesspoint.dualstack.ap-south-2.amazonaws.com',
          's3-website.dualstack.ap-south-2.amazonaws.com',
          's3.ap-south-2.amazonaws.com',
          's3-accesspoint.ap-south-2.amazonaws.com',
          's3-object-lambda.ap-south-2.amazonaws.com',
          's3-website.ap-south-2.amazonaws.com',
          's3.dualstack.ap-southeast-1.amazonaws.com',
          's3-accesspoint.dualstack.ap-southeast-1.amazonaws.com',
          's3-website.dualstack.ap-southeast-1.amazonaws.com',
          's3.ap-southeast-1.amazonaws.com',
          's3-accesspoint.ap-southeast-1.amazonaws.com',
          's3-object-lambda.ap-southeast-1.amazonaws.com',
          's3-website.ap-southeast-1.amazonaws.com',
          's3.dualstack.ap-southeast-2.amazonaws.com',
          's3-accesspoint.dualstack.ap-southeast-2.amazonaws.com',
          's3-website.dualstack.ap-southeast-2.amazonaws.com',
          's3.ap-southeast-2.amazonaws.com',
          's3-accesspoint.ap-southeast-2.amazonaws.com',
          's3-object-lambda.ap-southeast-2.amazonaws.com',
          's3-website.ap-southeast-2.amazonaws.com',
          's3.dualstack.ap-southeast-3.amazonaws.com',
          's3-accesspoint.dualstack.ap-southeast-3.amazonaws.com',
          's3-website.dualstack.ap-southeast-3.amazonaws.com',
          's3.ap-southeast-3.amazonaws.com',
          's3-accesspoint.ap-southeast-3.amazonaws.com',
          's3-object-lambda.ap-southeast-3.amazonaws.com',
          's3-website.ap-southeast-3.amazonaws.com',
          's3.dualstack.ap-southeast-4.amazonaws.com',
          's3-accesspoint.dualstack.ap-southeast-4.amazonaws.com',
          's3-website.dualstack.ap-southeast-4.amazonaws.com',
          's3.ap-southeast-4.amazonaws.com',
          's3-accesspoint.ap-southeast-4.amazonaws.com',
          's3-object-lambda.ap-southeast-4.amazonaws.com',
          's3-website.ap-southeast-4.amazonaws.com',
          's3.dualstack.ap-southeast-5.amazonaws.com',
          's3-accesspoint.dualstack.ap-southeast-5.amazonaws.com',
          's3-website.dualstack.ap-southeast-5.amazonaws.com',
          's3.ap-southeast-5.amazonaws.com',
          's3-accesspoint.ap-southeast-5.amazonaws.com',
          's3-deprecated.ap-southeast-5.amazonaws.com',
          's3-object-lambda.ap-southeast-5.amazonaws.com',
          's3-website.ap-southeast-5.amazonaws.com',
          's3.dualstack.ca-central-1.amazonaws.com',
          's3-accesspoint.dualstack.ca-central-1.amazonaws.com',
          's3-accesspoint-fips.dualstack.ca-central-1.amazonaws.com',
          's3-fips.dualstack.ca-central-1.amazonaws.com',
          's3-website.dualstack.ca-central-1.amazonaws.com',
          's3.ca-central-1.amazonaws.com',
          's3-accesspoint.ca-central-1.amazonaws.com',
          's3-accesspoint-fips.ca-central-1.amazonaws.com',
          's3-fips.ca-central-1.amazonaws.com',
          's3-object-lambda.ca-central-1.amazonaws.com',
          's3-website.ca-central-1.amazonaws.com',
          's3.dualstack.ca-west-1.amazonaws.com',
          's3-accesspoint.dualstack.ca-west-1.amazonaws.com',
          's3-accesspoint-fips.dualstack.ca-west-1.amazonaws.com',
          's3-fips.dualstack.ca-west-1.amazonaws.com',
          's3-website.dualstack.ca-west-1.amazonaws.com',
          's3.ca-west-1.amazonaws.com',
          's3-accesspoint.ca-west-1.amazonaws.com',
          's3-accesspoint-fips.ca-west-1.amazonaws.com',
          's3-fips.ca-west-1.amazonaws.com',
          's3-object-lambda.ca-west-1.amazonaws.com',
          's3-website.ca-west-1.amazonaws.com',
          's3.dualstack.eu-central-1.amazonaws.com',
          's3-accesspoint.dualstack.eu-central-1.amazonaws.com',
          's3-website.dualstack.eu-central-1.amazonaws.com',
          's3.eu-central-1.amazonaws.com',
          's3-accesspoint.eu-central-1.amazonaws.com',
          's3-object-lambda.eu-central-1.amazonaws.com',
          's3-website.eu-central-1.amazonaws.com',
          's3.dualstack.eu-central-2.amazonaws.com',
          's3-accesspoint.dualstack.eu-central-2.amazonaws.com',
          's3-website.dualstack.eu-central-2.amazonaws.com',
          's3.eu-central-2.amazonaws.com',
          's3-accesspoint.eu-central-2.amazonaws.com',
          's3-object-lambda.eu-central-2.amazonaws.com',
          's3-website.eu-central-2.amazonaws.com',
          's3.dualstack.eu-north-1.amazonaws.com',
          's3-accesspoint.dualstack.eu-north-1.amazonaws.com',
          's3.eu-north-1.amazonaws.com',
          's3-accesspoint.eu-north-1.amazonaws.com',
          's3-object-lambda.eu-north-1.amazonaws.com',
          's3-website.eu-north-1.amazonaws.com',
          's3.dualstack.eu-south-1.amazonaws.com',
          's3-accesspoint.dualstack.eu-south-1.amazonaws.com',
          's3-website.dualstack.eu-south-1.amazonaws.com',
          's3.eu-south-1.amazonaws.com',
          's3-accesspoint.eu-south-1.amazonaws.com',
          's3-object-lambda.eu-south-1.amazonaws.com',
          's3-website.eu-south-1.amazonaws.com',
          's3.dualstack.eu-south-2.amazonaws.com',
          's3-accesspoint.dualstack.eu-south-2.amazonaws.com',
          's3-website.dualstack.eu-south-2.amazonaws.com',
          's3.eu-south-2.amazonaws.com',
          's3-accesspoint.eu-south-2.amazonaws.com',
          's3-object-lambda.eu-south-2.amazonaws.com',
          's3-website.eu-south-2.amazonaws.com',
          's3.dualstack.eu-west-1.amazonaws.com',
          's3-accesspoint.dualstack.eu-west-1.amazonaws.com',
          's3-website.dualstack.eu-west-1.amazonaws.com',
          's3.eu-west-1.amazonaws.com',
          's3-accesspoint.eu-west-1.amazonaws.com',
          's3-deprecated.eu-west-1.amazonaws.com',
          's3-object-lambda.eu-west-1.amazonaws.com',
          's3-website.eu-west-1.amazonaws.com',
          's3.dualstack.eu-west-2.amazonaws.com',
          's3-accesspoint.dualstack.eu-west-2.amazonaws.com',
          's3.eu-west-2.amazonaws.com',
          's3-accesspoint.eu-west-2.amazonaws.com',
          's3-object-lambda.eu-west-2.amazonaws.com',
          's3-website.eu-west-2.amazonaws.com',
          's3.dualstack.eu-west-3.amazonaws.com',
          's3-accesspoint.dualstack.eu-west-3.amazonaws.com',
          's3-website.dualstack.eu-west-3.amazonaws.com',
          's3.eu-west-3.amazonaws.com',
          's3-accesspoint.eu-west-3.amazonaws.com',
          's3-object-lambda.eu-west-3.amazonaws.com',
          's3-website.eu-west-3.amazonaws.com',
          's3.dualstack.il-central-1.amazonaws.com',
          's3-accesspoint.dualstack.il-central-1.amazonaws.com',
          's3-website.dualstack.il-central-1.amazonaws.com',
          's3.il-central-1.amazonaws.com',
          's3-accesspoint.il-central-1.amazonaws.com',
          's3-object-lambda.il-central-1.amazonaws.com',
          's3-website.il-central-1.amazonaws.com',
          's3.dualstack.me-central-1.amazonaws.com',
          's3-accesspoint.dualstack.me-central-1.amazonaws.com',
          's3-website.dualstack.me-central-1.amazonaws.com',
          's3.me-central-1.amazonaws.com',
          's3-accesspoint.me-central-1.amazonaws.com',
          's3-object-lambda.me-central-1.amazonaws.com',
          's3-website.me-central-1.amazonaws.com',
          's3.dualstack.me-south-1.amazonaws.com',
          's3-accesspoint.dualstack.me-south-1.amazonaws.com',
          's3.me-south-1.amazonaws.com',
          's3-accesspoint.me-south-1.amazonaws.com',
          's3-object-lambda.me-south-1.amazonaws.com',
          's3-website.me-south-1.amazonaws.com',
          's3.amazonaws.com',
          's3-1.amazonaws.com',
          's3-ap-east-1.amazonaws.com',
          's3-ap-northeast-1.amazonaws.com',
          's3-ap-northeast-2.amazonaws.com',
          's3-ap-northeast-3.amazonaws.com',
          's3-ap-south-1.amazonaws.com',
          's3-ap-southeast-1.amazonaws.com',
          's3-ap-southeast-2.amazonaws.com',
          's3-ca-central-1.amazonaws.com',
          's3-eu-central-1.amazonaws.com',
          's3-eu-north-1.amazonaws.com',
          's3-eu-west-1.amazonaws.com',
          's3-eu-west-2.amazonaws.com',
          's3-eu-west-3.amazonaws.com',
          's3-external-1.amazonaws.com',
          's3-fips-us-gov-east-1.amazonaws.com',
          's3-fips-us-gov-west-1.amazonaws.com',
          'mrap.accesspoint.s3-global.amazonaws.com',
          's3-me-south-1.amazonaws.com',
          's3-sa-east-1.amazonaws.com',
          's3-us-east-2.amazonaws.com',
          's3-us-gov-east-1.amazonaws.com',
          's3-us-gov-west-1.amazonaws.com',
          's3-us-west-1.amazonaws.com',
          's3-us-west-2.amazonaws.com',
          's3-website-ap-northeast-1.amazonaws.com',
          's3-website-ap-southeast-1.amazonaws.com',
          's3-website-ap-southeast-2.amazonaws.com',
          's3-website-eu-west-1.amazonaws.com',
          's3-website-sa-east-1.amazonaws.com',
          's3-website-us-east-1.amazonaws.com',
          's3-website-us-gov-west-1.amazonaws.com',
          's3-website-us-west-1.amazonaws.com',
          's3-website-us-west-2.amazonaws.com',
          's3.dualstack.sa-east-1.amazonaws.com',
          's3-accesspoint.dualstack.sa-east-1.amazonaws.com',
          's3-website.dualstack.sa-east-1.amazonaws.com',
          's3.sa-east-1.amazonaws.com',
          's3-accesspoint.sa-east-1.amazonaws.com',
          's3-object-lambda.sa-east-1.amazonaws.com',
          's3-website.sa-east-1.amazonaws.com',
          's3.dualstack.us-east-1.amazonaws.com',
          's3-accesspoint.dualstack.us-east-1.amazonaws.com',
          's3-accesspoint-fips.dualstack.us-east-1.amazonaws.com',
          's3-fips.dualstack.us-east-1.amazonaws.com',
          's3-website.dualstack.us-east-1.amazonaws.com',
          's3.us-east-1.amazonaws.com',
          's3-accesspoint.us-east-1.amazonaws.com',
          's3-accesspoint-fips.us-east-1.amazonaws.com',
          's3-deprecated.us-east-1.amazonaws.com',
          's3-fips.us-east-1.amazonaws.com',
          's3-object-lambda.us-east-1.amazonaws.com',
          's3-website.us-east-1.amazonaws.com',
          's3.dualstack.us-east-2.amazonaws.com',
          's3-accesspoint.dualstack.us-east-2.amazonaws.com',
          's3-accesspoint-fips.dualstack.us-east-2.amazonaws.com',
          's3-fips.dualstack.us-east-2.amazonaws.com',
          's3-website.dualstack.us-east-2.amazonaws.com',
          's3.us-east-2.amazonaws.com',
          's3-accesspoint.us-east-2.amazonaws.com',
          's3-accesspoint-fips.us-east-2.amazonaws.com',
          's3-deprecated.us-east-2.amazonaws.com',
          's3-fips.us-east-2.amazonaws.com',
          's3-object-lambda.us-east-2.amazonaws.com',
          's3-website.us-east-2.amazonaws.com',
          's3.dualstack.us-gov-east-1.amazonaws.com',
          's3-accesspoint.dualstack.us-gov-east-1.amazonaws.com',
          's3-accesspoint-fips.dualstack.us-gov-east-1.amazonaws.com',
          's3-fips.dualstack.us-gov-east-1.amazonaws.com',
          's3.us-gov-east-1.amazonaws.com',
          's3-accesspoint.us-gov-east-1.amazonaws.com',
          's3-accesspoint-fips.us-gov-east-1.amazonaws.com',
          's3-fips.us-gov-east-1.amazonaws.com',
          's3-object-lambda.us-gov-east-1.amazonaws.com',
          's3-website.us-gov-east-1.amazonaws.com',
          's3.dualstack.us-gov-west-1.amazonaws.com',
          's3-accesspoint.dualstack.us-gov-west-1.amazonaws.com',
          's3-accesspoint-fips.dualstack.us-gov-west-1.amazonaws.com',
          's3-fips.dualstack.us-gov-west-1.amazonaws.com',
          's3.us-gov-west-1.amazonaws.com',
          's3-accesspoint.us-gov-west-1.amazonaws.com',
          's3-accesspoint-fips.us-gov-west-1.amazonaws.com',
          's3-fips.us-gov-west-1.amazonaws.com',
          's3-object-lambda.us-gov-west-1.amazonaws.com',
          's3-website.us-gov-west-1.amazonaws.com',
          's3.dualstack.us-west-1.amazonaws.com',
          's3-accesspoint.dualstack.us-west-1.amazonaws.com',
          's3-accesspoint-fips.dualstack.us-west-1.amazonaws.com',
          's3-fips.dualstack.us-west-1.amazonaws.com',
          's3-website.dualstack.us-west-1.amazonaws.com',
          's3.us-west-1.amazonaws.com',
          's3-accesspoint.us-west-1.amazonaws.com',
          's3-accesspoint-fips.us-west-1.amazonaws.com',
          's3-fips.us-west-1.amazonaws.com',
          's3-object-lambda.us-west-1.amazonaws.com',
          's3-website.us-west-1.amazonaws.com',
          's3.dualstack.us-west-2.amazonaws.com',
          's3-accesspoint.dualstack.us-west-2.amazonaws.com',
          's3-accesspoint-fips.dualstack.us-west-2.amazonaws.com',
          's3-fips.dualstack.us-west-2.amazonaws.com',
          's3-website.dualstack.us-west-2.amazonaws.com',
          's3.us-west-2.amazonaws.com',
          's3-accesspoint.us-west-2.amazonaws.com',
          's3-accesspoint-fips.us-west-2.amazonaws.com',
          's3-deprecated.us-west-2.amazonaws.com',
          's3-fips.us-west-2.amazonaws.com',
          's3-object-lambda.us-west-2.amazonaws.com',
          's3-website.us-west-2.amazonaws.com',
          'labeling.ap-northeast-1.sagemaker.aws',
          'labeling.ap-northeast-2.sagemaker.aws',
          'labeling.ap-south-1.sagemaker.aws',
          'labeling.ap-southeast-1.sagemaker.aws',
          'labeling.ap-southeast-2.sagemaker.aws',
          'labeling.ca-central-1.sagemaker.aws',
          'labeling.eu-central-1.sagemaker.aws',
          'labeling.eu-west-1.sagemaker.aws',
          'labeling.eu-west-2.sagemaker.aws',
          'labeling.us-east-1.sagemaker.aws',
          'labeling.us-east-2.sagemaker.aws',
          'labeling.us-west-2.sagemaker.aws',
          'notebook.af-south-1.sagemaker.aws',
          'notebook.ap-east-1.sagemaker.aws',
          'notebook.ap-northeast-1.sagemaker.aws',
          'notebook.ap-northeast-2.sagemaker.aws',
          'notebook.ap-northeast-3.sagemaker.aws',
          'notebook.ap-south-1.sagemaker.aws',
          'notebook.ap-south-2.sagemaker.aws',
          'notebook.ap-southeast-1.sagemaker.aws',
          'notebook.ap-southeast-2.sagemaker.aws',
          'notebook.ap-southeast-3.sagemaker.aws',
          'notebook.ap-southeast-4.sagemaker.aws',
          'notebook.ca-central-1.sagemaker.aws',
          'notebook-fips.ca-central-1.sagemaker.aws',
          'notebook.ca-west-1.sagemaker.aws',
          'notebook-fips.ca-west-1.sagemaker.aws',
          'notebook.eu-central-1.sagemaker.aws',
          'notebook.eu-central-2.sagemaker.aws',
          'notebook.eu-north-1.sagemaker.aws',
          'notebook.eu-south-1.sagemaker.aws',
          'notebook.eu-south-2.sagemaker.aws',
          'notebook.eu-west-1.sagemaker.aws',
          'notebook.eu-west-2.sagemaker.aws',
          'notebook.eu-west-3.sagemaker.aws',
          'notebook.il-central-1.sagemaker.aws',
          'notebook.me-central-1.sagemaker.aws',
          'notebook.me-south-1.sagemaker.aws',
          'notebook.sa-east-1.sagemaker.aws',
          'notebook.us-east-1.sagemaker.aws',
          'notebook-fips.us-east-1.sagemaker.aws',
          'notebook.us-east-2.sagemaker.aws',
          'notebook-fips.us-east-2.sagemaker.aws',
          'notebook.us-gov-east-1.sagemaker.aws',
          'notebook-fips.us-gov-east-1.sagemaker.aws',
          'notebook.us-gov-west-1.sagemaker.aws',
          'notebook-fips.us-gov-west-1.sagemaker.aws',
          'notebook.us-west-1.sagemaker.aws',
          'notebook-fips.us-west-1.sagemaker.aws',
          'notebook.us-west-2.sagemaker.aws',
          'notebook-fips.us-west-2.sagemaker.aws',
          'notebook.cn-north-1.sagemaker.com.cn',
          'notebook.cn-northwest-1.sagemaker.com.cn',
          'studio.af-south-1.sagemaker.aws',
          'studio.ap-east-1.sagemaker.aws',
          'studio.ap-northeast-1.sagemaker.aws',
          'studio.ap-northeast-2.sagemaker.aws',
          'studio.ap-northeast-3.sagemaker.aws',
          'studio.ap-south-1.sagemaker.aws',
          'studio.ap-southeast-1.sagemaker.aws',
          'studio.ap-southeast-2.sagemaker.aws',
          'studio.ap-southeast-3.sagemaker.aws',
          'studio.ca-central-1.sagemaker.aws',
          'studio.eu-central-1.sagemaker.aws',
          'studio.eu-north-1.sagemaker.aws',
          'studio.eu-south-1.sagemaker.aws',
          'studio.eu-south-2.sagemaker.aws',
          'studio.eu-west-1.sagemaker.aws',
          'studio.eu-west-2.sagemaker.aws',
          'studio.eu-west-3.sagemaker.aws',
          'studio.il-central-1.sagemaker.aws',
          'studio.me-central-1.sagemaker.aws',
          'studio.me-south-1.sagemaker.aws',
          'studio.sa-east-1.sagemaker.aws',
          'studio.us-east-1.sagemaker.aws',
          'studio.us-east-2.sagemaker.aws',
          'studio.us-gov-east-1.sagemaker.aws',
          'studio-fips.us-gov-east-1.sagemaker.aws',
          'studio.us-gov-west-1.sagemaker.aws',
          'studio-fips.us-gov-west-1.sagemaker.aws',
          'studio.us-west-1.sagemaker.aws',
          'studio.us-west-2.sagemaker.aws',
          'studio.cn-north-1.sagemaker.com.cn',
          'studio.cn-northwest-1.sagemaker.com.cn',
          '*.experiments.sagemaker.aws',
          'analytics-gateway.ap-northeast-1.amazonaws.com',
          'analytics-gateway.ap-northeast-2.amazonaws.com',
          'analytics-gateway.ap-south-1.amazonaws.com',
          'analytics-gateway.ap-southeast-1.amazonaws.com',
          'analytics-gateway.ap-southeast-2.amazonaws.com',
          'analytics-gateway.eu-central-1.amazonaws.com',
          'analytics-gateway.eu-west-1.amazonaws.com',
          'analytics-gateway.us-east-1.amazonaws.com',
          'analytics-gateway.us-east-2.amazonaws.com',
          'analytics-gateway.us-west-2.amazonaws.com',
          'amplifyapp.com',
          '*.awsapprunner.com',
          'webview-assets.aws-cloud9.af-south-1.amazonaws.com',
          'vfs.cloud9.af-south-1.amazonaws.com',
          'webview-assets.cloud9.af-south-1.amazonaws.com',
          'webview-assets.aws-cloud9.ap-east-1.amazonaws.com',
          'vfs.cloud9.ap-east-1.amazonaws.com',
          'webview-assets.cloud9.ap-east-1.amazonaws.com',
          'webview-assets.aws-cloud9.ap-northeast-1.amazonaws.com',
          'vfs.cloud9.ap-northeast-1.amazonaws.com',
          'webview-assets.cloud9.ap-northeast-1.amazonaws.com',
          'webview-assets.aws-cloud9.ap-northeast-2.amazonaws.com',
          'vfs.cloud9.ap-northeast-2.amazonaws.com',
          'webview-assets.cloud9.ap-northeast-2.amazonaws.com',
          'webview-assets.aws-cloud9.ap-northeast-3.amazonaws.com',
          'vfs.cloud9.ap-northeast-3.amazonaws.com',
          'webview-assets.cloud9.ap-northeast-3.amazonaws.com',
          'webview-assets.aws-cloud9.ap-south-1.amazonaws.com',
          'vfs.cloud9.ap-south-1.amazonaws.com',
          'webview-assets.cloud9.ap-south-1.amazonaws.com',
          'webview-assets.aws-cloud9.ap-southeast-1.amazonaws.com',
          'vfs.cloud9.ap-southeast-1.amazonaws.com',
          'webview-assets.cloud9.ap-southeast-1.amazonaws.com',
          'webview-assets.aws-cloud9.ap-southeast-2.amazonaws.com',
          'vfs.cloud9.ap-southeast-2.amazonaws.com',
          'webview-assets.cloud9.ap-southeast-2.amazonaws.com',
          'webview-assets.aws-cloud9.ca-central-1.amazonaws.com',
          'vfs.cloud9.ca-central-1.amazonaws.com',
          'webview-assets.cloud9.ca-central-1.amazonaws.com',
          'webview-assets.aws-cloud9.eu-central-1.amazonaws.com',
          'vfs.cloud9.eu-central-1.amazonaws.com',
          'webview-assets.cloud9.eu-central-1.amazonaws.com',
          'webview-assets.aws-cloud9.eu-north-1.amazonaws.com',
          'vfs.cloud9.eu-north-1.amazonaws.com',
          'webview-assets.cloud9.eu-north-1.amazonaws.com',
          'webview-assets.aws-cloud9.eu-south-1.amazonaws.com',
          'vfs.cloud9.eu-south-1.amazonaws.com',
          'webview-assets.cloud9.eu-south-1.amazonaws.com',
          'webview-assets.aws-cloud9.eu-west-1.amazonaws.com',
          'vfs.cloud9.eu-west-1.amazonaws.com',
          'webview-assets.cloud9.eu-west-1.amazonaws.com',
          'webview-assets.aws-cloud9.eu-west-2.amazonaws.com',
          'vfs.cloud9.eu-west-2.amazonaws.com',
          'webview-assets.cloud9.eu-west-2.amazonaws.com',
          'webview-assets.aws-cloud9.eu-west-3.amazonaws.com',
          'vfs.cloud9.eu-west-3.amazonaws.com',
          'webview-assets.cloud9.eu-west-3.amazonaws.com',
          'webview-assets.aws-cloud9.il-central-1.amazonaws.com',
          'vfs.cloud9.il-central-1.amazonaws.com',
          'webview-assets.aws-cloud9.me-south-1.amazonaws.com',
          'vfs.cloud9.me-south-1.amazonaws.com',
          'webview-assets.cloud9.me-south-1.amazonaws.com',
          'webview-assets.aws-cloud9.sa-east-1.amazonaws.com',
          'vfs.cloud9.sa-east-1.amazonaws.com',
          'webview-assets.cloud9.sa-east-1.amazonaws.com',
          'webview-assets.aws-cloud9.us-east-1.amazonaws.com',
          'vfs.cloud9.us-east-1.amazonaws.com',
          'webview-assets.cloud9.us-east-1.amazonaws.com',
          'webview-assets.aws-cloud9.us-east-2.amazonaws.com',
          'vfs.cloud9.us-east-2.amazonaws.com',
          'webview-assets.cloud9.us-east-2.amazonaws.com',
          'webview-assets.aws-cloud9.us-west-1.amazonaws.com',
          'vfs.cloud9.us-west-1.amazonaws.com',
          'webview-assets.cloud9.us-west-1.amazonaws.com',
          'webview-assets.aws-cloud9.us-west-2.amazonaws.com',
          'vfs.cloud9.us-west-2.amazonaws.com',
          'webview-assets.cloud9.us-west-2.amazonaws.com',
          'awsapps.com',
          'cn-north-1.eb.amazonaws.com.cn',
          'cn-northwest-1.eb.amazonaws.com.cn',
          'elasticbeanstalk.com',
          'af-south-1.elasticbeanstalk.com',
          'ap-east-1.elasticbeanstalk.com',
          'ap-northeast-1.elasticbeanstalk.com',
          'ap-northeast-2.elasticbeanstalk.com',
          'ap-northeast-3.elasticbeanstalk.com',
          'ap-south-1.elasticbeanstalk.com',
          'ap-southeast-1.elasticbeanstalk.com',
          'ap-southeast-2.elasticbeanstalk.com',
          'ap-southeast-3.elasticbeanstalk.com',
          'ca-central-1.elasticbeanstalk.com',
          'eu-central-1.elasticbeanstalk.com',
          'eu-north-1.elasticbeanstalk.com',
          'eu-south-1.elasticbeanstalk.com',
          'eu-west-1.elasticbeanstalk.com',
          'eu-west-2.elasticbeanstalk.com',
          'eu-west-3.elasticbeanstalk.com',
          'il-central-1.elasticbeanstalk.com',
          'me-south-1.elasticbeanstalk.com',
          'sa-east-1.elasticbeanstalk.com',
          'us-east-1.elasticbeanstalk.com',
          'us-east-2.elasticbeanstalk.com',
          'us-gov-east-1.elasticbeanstalk.com',
          'us-gov-west-1.elasticbeanstalk.com',
          'us-west-1.elasticbeanstalk.com',
          'us-west-2.elasticbeanstalk.com',
          '*.elb.amazonaws.com.cn',
          '*.elb.amazonaws.com',
          'awsglobalaccelerator.com',
          '*.private.repost.aws',
          'eero.online',
          'eero-stage.online',
          'apigee.io',
          'panel.dev',
          'siiites.com',
          'appspacehosted.com',
          'appspaceusercontent.com',
          'appudo.net',
          'on-aptible.com',
          'f5.si',
          'arvanedge.ir',
          'user.aseinet.ne.jp',
          'gv.vc',
          'd.gv.vc',
          'user.party.eus',
          'pimienta.org',
          'poivron.org',
          'potager.org',
          'sweetpepper.org',
          'myasustor.com',
          'cdn.prod.atlassian-dev.net',
          'translated.page',
          'myfritz.link',
          'myfritz.net',
          'onavstack.net',
          '*.awdev.ca',
          '*.advisor.ws',
          'ecommerce-shop.pl',
          'b-data.io',
          'balena-devices.com',
          'base.ec',
          'official.ec',
          'buyshop.jp',
          'fashionstore.jp',
          'handcrafted.jp',
          'kawaiishop.jp',
          'supersale.jp',
          'theshop.jp',
          'shopselect.net',
          'base.shop',
          'beagleboard.io',
          '*.beget.app',
          'pages.gay',
          'bnr.la',
          'bitbucket.io',
          'blackbaudcdn.net',
          'of.je',
          'bluebite.io',
          'boomla.net',
          'boutir.com',
          'boxfuse.io',
          'square7.ch',
          'bplaced.com',
          'bplaced.de',
          'square7.de',
          'bplaced.net',
          'square7.net',
          '*.s.brave.io',
          'shop.brendly.hr',
          'shop.brendly.rs',
          'browsersafetymark.io',
          'radio.am',
          'radio.fm',
          'uk0.bigv.io',
          'dh.bytemark.co.uk',
          'vm.bytemark.co.uk',
          'cafjs.com',
          'canva-apps.cn',
          '*.my.canvasite.cn',
          'canva-apps.com',
          '*.my.canva.site',
          'drr.ac',
          'uwu.ai',
          'carrd.co',
          'crd.co',
          'ju.mp',
          'api.gov.uk',
          'cdn77-storage.com',
          'rsc.contentproxy9.cz',
          'r.cdn77.net',
          'cdn77-ssl.net',
          'c.cdn77.org',
          'rsc.cdn77.org',
          'ssl.origin.cdn77-secure.org',
          'za.bz',
          'br.com',
          'cn.com',
          'de.com',
          'eu.com',
          'jpn.com',
          'mex.com',
          'ru.com',
          'sa.com',
          'uk.com',
          'us.com',
          'za.com',
          'com.de',
          'gb.net',
          'hu.net',
          'jp.net',
          'se.net',
          'uk.net',
          'ae.org',
          'com.se',
          'cx.ua',
          'discourse.group',
          'discourse.team',
          'clerk.app',
          'clerkstage.app',
          '*.lcl.dev',
          '*.lclstage.dev',
          '*.stg.dev',
          '*.stgstage.dev',
          'cleverapps.cc',
          '*.services.clever-cloud.com',
          'cleverapps.io',
          'cleverapps.tech',
          'clickrising.net',
          'cloudns.asia',
          'cloudns.be',
          'cloud-ip.biz',
          'cloudns.biz',
          'cloudns.cc',
          'cloudns.ch',
          'cloudns.cl',
          'cloudns.club',
          'dnsabr.com',
          'ip-ddns.com',
          'cloudns.cx',
          'cloudns.eu',
          'cloudns.in',
          'cloudns.info',
          'ddns-ip.net',
          'dns-cloud.net',
          'dns-dynamic.net',
          'cloudns.nz',
          'cloudns.org',
          'ip-dynamic.org',
          'cloudns.ph',
          'cloudns.pro',
          'cloudns.pw',
          'cloudns.us',
          'c66.me',
          'cloud66.ws',
          'cloud66.zone',
          'jdevcloud.com',
          'wpdevcloud.com',
          'cloudaccess.host',
          'freesite.host',
          'cloudaccess.net',
          '*.cloudera.site',
          'cf-ipfs.com',
          'cloudflare-ipfs.com',
          'trycloudflare.com',
          'pages.dev',
          'r2.dev',
          'workers.dev',
          'cloudflare.net',
          'cdn.cloudflare.net',
          'cdn.cloudflareanycast.net',
          'cdn.cloudflarecn.net',
          'cdn.cloudflareglobal.net',
          'cust.cloudscale.ch',
          'objects.lpg.cloudscale.ch',
          'objects.rma.cloudscale.ch',
          'wnext.app',
          'cnpy.gdn',
          '*.otap.co',
          'co.ca',
          'co.com',
          'codeberg.page',
          'csb.app',
          'preview.csb.app',
          'co.nl',
          'co.no',
          'webhosting.be',
          'hosting-cluster.nl',
          'ctfcloud.net',
          'convex.site',
          'ac.ru',
          'edu.ru',
          'gov.ru',
          'int.ru',
          'mil.ru',
          'test.ru',
          'dyn.cosidns.de',
          'dnsupdater.de',
          'dynamisches-dns.de',
          'internet-dns.de',
          'l-o-g-i-n.de',
          'dynamic-dns.info',
          'feste-ip.net',
          'knx-server.net',
          'static-access.net',
          'craft.me',
          'realm.cz',
          'on.crisp.email',
          '*.cryptonomic.net',
          'curv.dev',
          'cfolks.pl',
          'cyon.link',
          'cyon.site',
          'platform0.app',
          'fnwk.site',
          'folionetwork.site',
          'biz.dk',
          'co.dk',
          'firm.dk',
          'reg.dk',
          'store.dk',
          'dyndns.dappnode.io',
          'builtwithdark.com',
          'darklang.io',
          'demo.datadetect.com',
          'instance.datadetect.com',
          'edgestack.me',
          'dattolocal.com',
          'dattorelay.com',
          'dattoweb.com',
          'mydatto.com',
          'dattolocal.net',
          'mydatto.net',
          'ddnss.de',
          'dyn.ddnss.de',
          'dyndns.ddnss.de',
          'dyn-ip24.de',
          'dyndns1.de',
          'home-webserver.de',
          'dyn.home-webserver.de',
          'myhome-server.de',
          'ddnss.org',
          'debian.net',
          'definima.io',
          'definima.net',
          'deno.dev',
          'deno-staging.dev',
          'dedyn.io',
          'deta.app',
          'deta.dev',
          'dfirma.pl',
          'dkonto.pl',
          'you2.pl',
          'ondigitalocean.app',
          '*.digitaloceanspaces.com',
          'us.kg',
          'rss.my.id',
          'diher.solutions',
          'discordsays.com',
          'discordsez.com',
          'jozi.biz',
          'dnshome.de',
          'online.th',
          'shop.th',
          'drayddns.com',
          'shoparena.pl',
          'dreamhosters.com',
          'durumis.com',
          'mydrobo.com',
          'drud.io',
          'drud.us',
          'duckdns.org',
          'dy.fi',
          'tunk.org',
          'dyndns.biz',
          'for-better.biz',
          'for-more.biz',
          'for-some.biz',
          'for-the.biz',
          'selfip.biz',
          'webhop.biz',
          'ftpaccess.cc',
          'game-server.cc',
          'myphotos.cc',
          'scrapping.cc',
          'blogdns.com',
          'cechire.com',
          'dnsalias.com',
          'dnsdojo.com',
          'doesntexist.com',
          'dontexist.com',
          'doomdns.com',
          'dyn-o-saur.com',
          'dynalias.com',
          'dyndns-at-home.com',
          'dyndns-at-work.com',
          'dyndns-blog.com',
          'dyndns-free.com',
          'dyndns-home.com',
          'dyndns-ip.com',
          'dyndns-mail.com',
          'dyndns-office.com',
          'dyndns-pics.com',
          'dyndns-remote.com',
          'dyndns-server.com',
          'dyndns-web.com',
          'dyndns-wiki.com',
          'dyndns-work.com',
          'est-a-la-maison.com',
          'est-a-la-masion.com',
          'est-le-patron.com',
          'est-mon-blogueur.com',
          'from-ak.com',
          'from-al.com',
          'from-ar.com',
          'from-ca.com',
          'from-ct.com',
          'from-dc.com',
          'from-de.com',
          'from-fl.com',
          'from-ga.com',
          'from-hi.com',
          'from-ia.com',
          'from-id.com',
          'from-il.com',
          'from-in.com',
          'from-ks.com',
          'from-ky.com',
          'from-ma.com',
          'from-md.com',
          'from-mi.com',
          'from-mn.com',
          'from-mo.com',
          'from-ms.com',
          'from-mt.com',
          'from-nc.com',
          'from-nd.com',
          'from-ne.com',
          'from-nh.com',
          'from-nj.com',
          'from-nm.com',
          'from-nv.com',
          'from-oh.com',
          'from-ok.com',
          'from-or.com',
          'from-pa.com',
          'from-pr.com',
          'from-ri.com',
          'from-sc.com',
          'from-sd.com',
          'from-tn.com',
          'from-tx.com',
          'from-ut.com',
          'from-va.com',
          'from-vt.com',
          'from-wa.com',
          'from-wi.com',
          'from-wv.com',
          'from-wy.com',
          'getmyip.com',
          'gotdns.com',
          'hobby-site.com',
          'homelinux.com',
          'homeunix.com',
          'iamallama.com',
          'is-a-anarchist.com',
          'is-a-blogger.com',
          'is-a-bookkeeper.com',
          'is-a-bulls-fan.com',
          'is-a-caterer.com',
          'is-a-chef.com',
          'is-a-conservative.com',
          'is-a-cpa.com',
          'is-a-cubicle-slave.com',
          'is-a-democrat.com',
          'is-a-designer.com',
          'is-a-doctor.com',
          'is-a-financialadvisor.com',
          'is-a-geek.com',
          'is-a-green.com',
          'is-a-guru.com',
          'is-a-hard-worker.com',
          'is-a-hunter.com',
          'is-a-landscaper.com',
          'is-a-lawyer.com',
          'is-a-liberal.com',
          'is-a-libertarian.com',
          'is-a-llama.com',
          'is-a-musician.com',
          'is-a-nascarfan.com',
          'is-a-nurse.com',
          'is-a-painter.com',
          'is-a-personaltrainer.com',
          'is-a-photographer.com',
          'is-a-player.com',
          'is-a-republican.com',
          'is-a-rockstar.com',
          'is-a-socialist.com',
          'is-a-student.com',
          'is-a-teacher.com',
          'is-a-techie.com',
          'is-a-therapist.com',
          'is-an-accountant.com',
          'is-an-actor.com',
          'is-an-actress.com',
          'is-an-anarchist.com',
          'is-an-artist.com',
          'is-an-engineer.com',
          'is-an-entertainer.com',
          'is-certified.com',
          'is-gone.com',
          'is-into-anime.com',
          'is-into-cars.com',
          'is-into-cartoons.com',
          'is-into-games.com',
          'is-leet.com',
          'is-not-certified.com',
          'is-slick.com',
          'is-uberleet.com',
          'is-with-theband.com',
          'isa-geek.com',
          'isa-hockeynut.com',
          'issmarterthanyou.com',
          'likes-pie.com',
          'likescandy.com',
          'neat-url.com',
          'saves-the-whales.com',
          'selfip.com',
          'sells-for-less.com',
          'sells-for-u.com',
          'servebbs.com',
          'simple-url.com',
          'space-to-rent.com',
          'teaches-yoga.com',
          'writesthisblog.com',
          'ath.cx',
          'fuettertdasnetz.de',
          'isteingeek.de',
          'istmein.de',
          'lebtimnetz.de',
          'leitungsen.de',
          'traeumtgerade.de',
          'barrel-of-knowledge.info',
          'barrell-of-knowledge.info',
          'dyndns.info',
          'for-our.info',
          'groks-the.info',
          'groks-this.info',
          'here-for-more.info',
          'knowsitall.info',
          'selfip.info',
          'webhop.info',
          'forgot.her.name',
          'forgot.his.name',
          'at-band-camp.net',
          'blogdns.net',
          'broke-it.net',
          'buyshouses.net',
          'dnsalias.net',
          'dnsdojo.net',
          'does-it.net',
          'dontexist.net',
          'dynalias.net',
          'dynathome.net',
          'endofinternet.net',
          'from-az.net',
          'from-co.net',
          'from-la.net',
          'from-ny.net',
          'gets-it.net',
          'ham-radio-op.net',
          'homeftp.net',
          'homeip.net',
          'homelinux.net',
          'homeunix.net',
          'in-the-band.net',
          'is-a-chef.net',
          'is-a-geek.net',
          'isa-geek.net',
          'kicks-ass.net',
          'office-on-the.net',
          'podzone.net',
          'scrapper-site.net',
          'selfip.net',
          'sells-it.net',
          'servebbs.net',
          'serveftp.net',
          'thruhere.net',
          'webhop.net',
          'merseine.nu',
          'mine.nu',
          'shacknet.nu',
          'blogdns.org',
          'blogsite.org',
          'boldlygoingnowhere.org',
          'dnsalias.org',
          'dnsdojo.org',
          'doesntexist.org',
          'dontexist.org',
          'doomdns.org',
          'dvrdns.org',
          'dynalias.org',
          'dyndns.org',
          'go.dyndns.org',
          'home.dyndns.org',
          'endofinternet.org',
          'endoftheinternet.org',
          'from-me.org',
          'game-host.org',
          'gotdns.org',
          'hobby-site.org',
          'homedns.org',
          'homeftp.org',
          'homelinux.org',
          'homeunix.org',
          'is-a-bruinsfan.org',
          'is-a-candidate.org',
          'is-a-celticsfan.org',
          'is-a-chef.org',
          'is-a-geek.org',
          'is-a-knight.org',
          'is-a-linux-user.org',
          'is-a-patsfan.org',
          'is-a-soxfan.org',
          'is-found.org',
          'is-lost.org',
          'is-saved.org',
          'is-very-bad.org',
          'is-very-evil.org',
          'is-very-good.org',
          'is-very-nice.org',
          'is-very-sweet.org',
          'isa-geek.org',
          'kicks-ass.org',
          'misconfused.org',
          'podzone.org',
          'readmyblog.org',
          'selfip.org',
          'sellsyourhome.org',
          'servebbs.org',
          'serveftp.org',
          'servegame.org',
          'stuff-4-sale.org',
          'webhop.org',
          'better-than.tv',
          'dyndns.tv',
          'on-the-web.tv',
          'worse-than.tv',
          'is-by.us',
          'land-4-sale.us',
          'stuff-4-sale.us',
          'dyndns.ws',
          'mypets.ws',
          'ddnsfree.com',
          'ddnsgeek.com',
          'giize.com',
          'gleeze.com',
          'kozow.com',
          'loseyourip.com',
          'ooguy.com',
          'theworkpc.com',
          'casacam.net',
          'dynu.net',
          'accesscam.org',
          'camdvr.org',
          'freeddns.org',
          'mywire.org',
          'webredirect.org',
          'myddns.rocks',
          'dynv6.net',
          'e4.cz',
          'easypanel.app',
          'easypanel.host',
          '*.ewp.live',
          'twmail.cc',
          'twmail.net',
          'twmail.org',
          'mymailer.com.tw',
          'url.tw',
          'at.emf.camp',
          'rt.ht',
          'elementor.cloud',
          'elementor.cool',
          'en-root.fr',
          'mytuleap.com',
          'tuleap-partners.com',
          'encr.app',
          'encoreapi.com',
          'eu.encoway.cloud',
          'eu.org',
          'al.eu.org',
          'asso.eu.org',
          'at.eu.org',
          'au.eu.org',
          'be.eu.org',
          'bg.eu.org',
          'ca.eu.org',
          'cd.eu.org',
          'ch.eu.org',
          'cn.eu.org',
          'cy.eu.org',
          'cz.eu.org',
          'de.eu.org',
          'dk.eu.org',
          'edu.eu.org',
          'ee.eu.org',
          'es.eu.org',
          'fi.eu.org',
          'fr.eu.org',
          'gr.eu.org',
          'hr.eu.org',
          'hu.eu.org',
          'ie.eu.org',
          'il.eu.org',
          'in.eu.org',
          'int.eu.org',
          'is.eu.org',
          'it.eu.org',
          'jp.eu.org',
          'kr.eu.org',
          'lt.eu.org',
          'lu.eu.org',
          'lv.eu.org',
          'me.eu.org',
          'mk.eu.org',
          'mt.eu.org',
          'my.eu.org',
          'net.eu.org',
          'ng.eu.org',
          'nl.eu.org',
          'no.eu.org',
          'nz.eu.org',
          'pl.eu.org',
          'pt.eu.org',
          'ro.eu.org',
          'ru.eu.org',
          'se.eu.org',
          'si.eu.org',
          'sk.eu.org',
          'tr.eu.org',
          'uk.eu.org',
          'us.eu.org',
          'eurodir.ru',
          'eu-1.evennode.com',
          'eu-2.evennode.com',
          'eu-3.evennode.com',
          'eu-4.evennode.com',
          'us-1.evennode.com',
          'us-2.evennode.com',
          'us-3.evennode.com',
          'us-4.evennode.com',
          'relay.evervault.app',
          'relay.evervault.dev',
          'expo.app',
          'staging.expo.app',
          'onfabrica.com',
          'ru.net',
          'adygeya.ru',
          'bashkiria.ru',
          'bir.ru',
          'cbg.ru',
          'com.ru',
          'dagestan.ru',
          'grozny.ru',
          'kalmykia.ru',
          'kustanai.ru',
          'marine.ru',
          'mordovia.ru',
          'msk.ru',
          'mytis.ru',
          'nalchik.ru',
          'nov.ru',
          'pyatigorsk.ru',
          'spb.ru',
          'vladikavkaz.ru',
          'vladimir.ru',
          'abkhazia.su',
          'adygeya.su',
          'aktyubinsk.su',
          'arkhangelsk.su',
          'armenia.su',
          'ashgabad.su',
          'azerbaijan.su',
          'balashov.su',
          'bashkiria.su',
          'bryansk.su',
          'bukhara.su',
          'chimkent.su',
          'dagestan.su',
          'east-kazakhstan.su',
          'exnet.su',
          'georgia.su',
          'grozny.su',
          'ivanovo.su',
          'jambyl.su',
          'kalmykia.su',
          'kaluga.su',
          'karacol.su',
          'karaganda.su',
          'karelia.su',
          'khakassia.su',
          'krasnodar.su',
          'kurgan.su',
          'kustanai.su',
          'lenug.su',
          'mangyshlak.su',
          'mordovia.su',
          'msk.su',
          'murmansk.su',
          'nalchik.su',
          'navoi.su',
          'north-kazakhstan.su',
          'nov.su',
          'obninsk.su',
          'penza.su',
          'pokrovsk.su',
          'sochi.su',
          'spb.su',
          'tashkent.su',
          'termez.su',
          'togliatti.su',
          'troitsk.su',
          'tselinograd.su',
          'tula.su',
          'tuva.su',
          'vladikavkaz.su',
          'vladimir.su',
          'vologda.su',
          'channelsdvr.net',
          'u.channelsdvr.net',
          'edgecompute.app',
          'fastly-edge.com',
          'fastly-terrarium.com',
          'freetls.fastly.net',
          'map.fastly.net',
          'a.prod.fastly.net',
          'global.prod.fastly.net',
          'a.ssl.fastly.net',
          'b.ssl.fastly.net',
          'global.ssl.fastly.net',
          'fastlylb.net',
          'map.fastlylb.net',
          '*.user.fm',
          'fastvps-server.com',
          'fastvps.host',
          'myfast.host',
          'fastvps.site',
          'myfast.space',
          'conn.uk',
          'copro.uk',
          'hosp.uk',
          'fedorainfracloud.org',
          'fedorapeople.org',
          'cloud.fedoraproject.org',
          'app.os.fedoraproject.org',
          'app.os.stg.fedoraproject.org',
          'mydobiss.com',
          'fh-muenster.io',
          'filegear.me',
          'firebaseapp.com',
          'fldrv.com',
          'flutterflow.app',
          'fly.dev',
          'shw.io',
          'edgeapp.net',
          'forgeblocks.com',
          'id.forgerock.io',
          'framer.ai',
          'framer.app',
          'framercanvas.com',
          'framer.media',
          'framer.photos',
          'framer.website',
          'framer.wiki',
          '0e.vc',
          'freebox-os.com',
          'freeboxos.com',
          'fbx-os.fr',
          'fbxos.fr',
          'freebox-os.fr',
          'freeboxos.fr',
          'freedesktop.org',
          'freemyip.com',
          '*.frusky.de',
          'wien.funkfeuer.at',
          'daemon.asia',
          'dix.asia',
          'mydns.bz',
          '0am.jp',
          '0g0.jp',
          '0j0.jp',
          '0t0.jp',
          'mydns.jp',
          'pgw.jp',
          'wjg.jp',
          'keyword-on.net',
          'live-on.net',
          'server-on.net',
          'mydns.tw',
          'mydns.vc',
          '*.futurecms.at',
          '*.ex.futurecms.at',
          '*.in.futurecms.at',
          'futurehosting.at',
          'futuremailing.at',
          '*.ex.ortsinfo.at',
          '*.kunden.ortsinfo.at',
          '*.statics.cloud',
          'aliases121.com',
          'campaign.gov.uk',
          'service.gov.uk',
          'independent-commission.uk',
          'independent-inquest.uk',
          'independent-inquiry.uk',
          'independent-panel.uk',
          'independent-review.uk',
          'public-inquiry.uk',
          'royal-commission.uk',
          'gehirn.ne.jp',
          'usercontent.jp',
          'gentapps.com',
          'gentlentapis.com',
          'lab.ms',
          'cdn-edges.net',
          'localcert.net',
          'localhostcert.net',
          'gsj.bz',
          'githubusercontent.com',
          'githubpreview.dev',
          'github.io',
          'gitlab.io',
          'gitapp.si',
          'gitpage.si',
          'glitch.me',
          'nog.community',
          'co.ro',
          'shop.ro',
          'lolipop.io',
          'angry.jp',
          'babyblue.jp',
          'babymilk.jp',
          'backdrop.jp',
          'bambina.jp',
          'bitter.jp',
          'blush.jp',
          'boo.jp',
          'boy.jp',
          'boyfriend.jp',
          'but.jp',
          'candypop.jp',
          'capoo.jp',
          'catfood.jp',
          'cheap.jp',
          'chicappa.jp',
          'chillout.jp',
          'chips.jp',
          'chowder.jp',
          'chu.jp',
          'ciao.jp',
          'cocotte.jp',
          'coolblog.jp',
          'cranky.jp',
          'cutegirl.jp',
          'daa.jp',
          'deca.jp',
          'deci.jp',
          'digick.jp',
          'egoism.jp',
          'fakefur.jp',
          'fem.jp',
          'flier.jp',
          'floppy.jp',
          'fool.jp',
          'frenchkiss.jp',
          'girlfriend.jp',
          'girly.jp',
          'gloomy.jp',
          'gonna.jp',
          'greater.jp',
          'hacca.jp',
          'heavy.jp',
          'her.jp',
          'hiho.jp',
          'hippy.jp',
          'holy.jp',
          'hungry.jp',
          'icurus.jp',
          'itigo.jp',
          'jellybean.jp',
          'kikirara.jp',
          'kill.jp',
          'kilo.jp',
          'kuron.jp',
          'littlestar.jp',
          'lolipopmc.jp',
          'lolitapunk.jp',
          'lomo.jp',
          'lovepop.jp',
          'lovesick.jp',
          'main.jp',
          'mods.jp',
          'mond.jp',
          'mongolian.jp',
          'moo.jp',
          'namaste.jp',
          'nikita.jp',
          'nobushi.jp',
          'noor.jp',
          'oops.jp',
          'parallel.jp',
          'parasite.jp',
          'pecori.jp',
          'peewee.jp',
          'penne.jp',
          'pepper.jp',
          'perma.jp',
          'pigboat.jp',
          'pinoko.jp',
          'punyu.jp',
          'pupu.jp',
          'pussycat.jp',
          'pya.jp',
          'raindrop.jp',
          'readymade.jp',
          'sadist.jp',
          'schoolbus.jp',
          'secret.jp',
          'staba.jp',
          'stripper.jp',
          'sub.jp',
          'sunnyday.jp',
          'thick.jp',
          'tonkotsu.jp',
          'under.jp',
          'upper.jp',
          'velvet.jp',
          'verse.jp',
          'versus.jp',
          'vivian.jp',
          'watson.jp',
          'weblike.jp',
          'whitesnow.jp',
          'zombie.jp',
          'heteml.net',
          'graphic.design',
          'goip.de',
          'blogspot.ae',
          'blogspot.al',
          'blogspot.am',
          '*.hosted.app',
          '*.run.app',
          'web.app',
          'blogspot.com.ar',
          'blogspot.co.at',
          'blogspot.com.au',
          'blogspot.ba',
          'blogspot.be',
          'blogspot.bg',
          'blogspot.bj',
          'blogspot.com.br',
          'blogspot.com.by',
          'blogspot.ca',
          'blogspot.cf',
          'blogspot.ch',
          'blogspot.cl',
          'blogspot.com.co',
          '*.0emm.com',
          'appspot.com',
          '*.r.appspot.com',
          'blogspot.com',
          'codespot.com',
          'googleapis.com',
          'googlecode.com',
          'pagespeedmobilizer.com',
          'withgoogle.com',
          'withyoutube.com',
          'blogspot.cv',
          'blogspot.com.cy',
          'blogspot.cz',
          'blogspot.de',
          '*.gateway.dev',
          'blogspot.dk',
          'blogspot.com.ee',
          'blogspot.com.eg',
          'blogspot.com.es',
          'blogspot.fi',
          'blogspot.fr',
          'cloud.goog',
          'translate.goog',
          '*.usercontent.goog',
          'blogspot.gr',
          'blogspot.hk',
          'blogspot.hr',
          'blogspot.hu',
          'blogspot.co.id',
          'blogspot.ie',
          'blogspot.co.il',
          'blogspot.in',
          'blogspot.is',
          'blogspot.it',
          'blogspot.jp',
          'blogspot.co.ke',
          'blogspot.kr',
          'blogspot.li',
          'blogspot.lt',
          'blogspot.lu',
          'blogspot.md',
          'blogspot.mk',
          'blogspot.com.mt',
          'blogspot.mx',
          'blogspot.my',
          'cloudfunctions.net',
          'blogspot.com.ng',
          'blogspot.nl',
          'blogspot.no',
          'blogspot.co.nz',
          'blogspot.pe',
          'blogspot.pt',
          'blogspot.qa',
          'blogspot.re',
          'blogspot.ro',
          'blogspot.rs',
          'blogspot.ru',
          'blogspot.se',
          'blogspot.sg',
          'blogspot.si',
          'blogspot.sk',
          'blogspot.sn',
          'blogspot.td',
          'blogspot.com.tr',
          'blogspot.tw',
          'blogspot.ug',
          'blogspot.co.uk',
          'blogspot.com.uy',
          'blogspot.vn',
          'blogspot.co.za',
          'goupile.fr',
          'pymnt.uk',
          'cloudapps.digital',
          'london.cloudapps.digital',
          'gov.nl',
          'grafana-dev.net',
          'grayjayleagues.com',
          'g\xfcnstigbestellen.de',
          'g\xfcnstigliefern.de',
          'fin.ci',
          'free.hr',
          'caa.li',
          'ua.rs',
          'conf.se',
          'h\xe4kkinen.fi',
          'hrsn.dev',
          'hashbang.sh',
          'hasura.app',
          'hasura-app.io',
          'hatenablog.com',
          'hatenadiary.com',
          'hateblo.jp',
          'hatenablog.jp',
          'hatenadiary.jp',
          'hatenadiary.org',
          'pages.it.hs-heilbronn.de',
          'pages-research.it.hs-heilbronn.de',
          'heiyu.space',
          'helioho.st',
          'heliohost.us',
          'hepforge.org',
          'herokuapp.com',
          'herokussl.com',
          'heyflow.page',
          'heyflow.site',
          'ravendb.cloud',
          'ravendb.community',
          'development.run',
          'ravendb.run',
          'homesklep.pl',
          '*.kin.one',
          '*.id.pub',
          '*.kin.pub',
          'secaas.hk',
          'hoplix.shop',
          'orx.biz',
          'biz.gl',
          'biz.ng',
          'co.biz.ng',
          'dl.biz.ng',
          'go.biz.ng',
          'lg.biz.ng',
          'on.biz.ng',
          'col.ng',
          'firm.ng',
          'gen.ng',
          'ltd.ng',
          'ngo.ng',
          'plc.ng',
          'ie.ua',
          'hostyhosting.io',
          'hf.space',
          'static.hf.space',
          'hypernode.io',
          'iobb.net',
          'co.cz',
          '*.moonscale.io',
          'moonscale.net',
          'gr.com',
          'iki.fi',
          'ibxos.it',
          'iliadboxos.it',
          'smushcdn.com',
          'wphostedmail.com',
          'wpmucdn.com',
          'tempurl.host',
          'wpmudev.host',
          'dyn-berlin.de',
          'in-berlin.de',
          'in-brb.de',
          'in-butter.de',
          'in-dsl.de',
          'in-vpn.de',
          'in-dsl.net',
          'in-vpn.net',
          'in-dsl.org',
          'in-vpn.org',
          'biz.at',
          'info.at',
          'info.cx',
          'ac.leg.br',
          'al.leg.br',
          'am.leg.br',
          'ap.leg.br',
          'ba.leg.br',
          'ce.leg.br',
          'df.leg.br',
          'es.leg.br',
          'go.leg.br',
          'ma.leg.br',
          'mg.leg.br',
          'ms.leg.br',
          'mt.leg.br',
          'pa.leg.br',
          'pb.leg.br',
          'pe.leg.br',
          'pi.leg.br',
          'pr.leg.br',
          'rj.leg.br',
          'rn.leg.br',
          'ro.leg.br',
          'rr.leg.br',
          'rs.leg.br',
          'sc.leg.br',
          'se.leg.br',
          'sp.leg.br',
          'to.leg.br',
          'pixolino.com',
          'na4u.ru',
          'apps-1and1.com',
          'live-website.com',
          'apps-1and1.net',
          'websitebuilder.online',
          'app-ionos.space',
          'iopsys.se',
          '*.dweb.link',
          'ipifony.net',
          'ir.md',
          'is-a-good.dev',
          'is-a.dev',
          'iservschule.de',
          'mein-iserv.de',
          'schulplattform.de',
          'schulserver.de',
          'test-iserv.de',
          'iserv.dev',
          'mel.cloudlets.com.au',
          'cloud.interhostsolutions.be',
          'alp1.ae.flow.ch',
          'appengine.flow.ch',
          'es-1.axarnet.cloud',
          'diadem.cloud',
          'vip.jelastic.cloud',
          'jele.cloud',
          'it1.eur.aruba.jenv-aruba.cloud',
          'it1.jenv-aruba.cloud',
          'keliweb.cloud',
          'cs.keliweb.cloud',
          'oxa.cloud',
          'tn.oxa.cloud',
          'uk.oxa.cloud',
          'primetel.cloud',
          'uk.primetel.cloud',
          'ca.reclaim.cloud',
          'uk.reclaim.cloud',
          'us.reclaim.cloud',
          'ch.trendhosting.cloud',
          'de.trendhosting.cloud',
          'jele.club',
          'dopaas.com',
          'paas.hosted-by-previder.com',
          'rag-cloud.hosteur.com',
          'rag-cloud-ch.hosteur.com',
          'jcloud.ik-server.com',
          'jcloud-ver-jpc.ik-server.com',
          'demo.jelastic.com',
          'paas.massivegrid.com',
          'jed.wafaicloud.com',
          'ryd.wafaicloud.com',
          'j.scaleforce.com.cy',
          'jelastic.dogado.eu',
          'fi.cloudplatform.fi',
          'demo.datacenter.fi',
          'paas.datacenter.fi',
          'jele.host',
          'mircloud.host',
          'paas.beebyte.io',
          'sekd1.beebyteapp.io',
          'jele.io',
          'jc.neen.it',
          'jcloud.kz',
          'cloudjiffy.net',
          'fra1-de.cloudjiffy.net',
          'west1-us.cloudjiffy.net',
          'jls-sto1.elastx.net',
          'jls-sto2.elastx.net',
          'jls-sto3.elastx.net',
          'fr-1.paas.massivegrid.net',
          'lon-1.paas.massivegrid.net',
          'lon-2.paas.massivegrid.net',
          'ny-1.paas.massivegrid.net',
          'ny-2.paas.massivegrid.net',
          'sg-1.paas.massivegrid.net',
          'jelastic.saveincloud.net',
          'nordeste-idc.saveincloud.net',
          'j.scaleforce.net',
          'sdscloud.pl',
          'unicloud.pl',
          'mircloud.ru',
          'enscaled.sg',
          'jele.site',
          'jelastic.team',
          'orangecloud.tn',
          'j.layershift.co.uk',
          'phx.enscaled.us',
          'mircloud.us',
          'myjino.ru',
          '*.hosting.myjino.ru',
          '*.landing.myjino.ru',
          '*.spectrum.myjino.ru',
          '*.vps.myjino.ru',
          'jotelulu.cloud',
          'webadorsite.com',
          'jouwweb.site',
          '*.cns.joyent.com',
          '*.triton.zone',
          'js.org',
          'kaas.gg',
          'khplay.nl',
          'kapsi.fi',
          'ezproxy.kuleuven.be',
          'kuleuven.cloud',
          'keymachine.de',
          'kinghost.net',
          'uni5.net',
          'knightpoint.systems',
          'koobin.events',
          'webthings.io',
          'krellian.net',
          'oya.to',
          'git-repos.de',
          'lcube-server.de',
          'svn-repos.de',
          'leadpages.co',
          'lpages.co',
          'lpusercontent.com',
          'lelux.site',
          'libp2p.direct',
          'runcontainers.dev',
          'co.business',
          'co.education',
          'co.events',
          'co.financial',
          'co.network',
          'co.place',
          'co.technology',
          'linkyard-cloud.ch',
          'linkyard.cloud',
          'members.linode.com',
          '*.nodebalancer.linode.com',
          '*.linodeobjects.com',
          'ip.linodeusercontent.com',
          'we.bs',
          'filegear-sg.me',
          'ggff.net',
          '*.user.localcert.dev',
          'lodz.pl',
          'pabianice.pl',
          'plock.pl',
          'sieradz.pl',
          'skierniewice.pl',
          'zgierz.pl',
          'loginline.app',
          'loginline.dev',
          'loginline.io',
          'loginline.services',
          'loginline.site',
          'lohmus.me',
          'servers.run',
          'krasnik.pl',
          'leczna.pl',
          'lubartow.pl',
          'lublin.pl',
          'poniatowa.pl',
          'swidnik.pl',
          'glug.org.uk',
          'lug.org.uk',
          'lugs.org.uk',
          'barsy.bg',
          'barsy.club',
          'barsycenter.com',
          'barsyonline.com',
          'barsy.de',
          'barsy.dev',
          'barsy.eu',
          'barsy.gr',
          'barsy.in',
          'barsy.info',
          'barsy.io',
          'barsy.me',
          'barsy.menu',
          'barsyonline.menu',
          'barsy.mobi',
          'barsy.net',
          'barsy.online',
          'barsy.org',
          'barsy.pro',
          'barsy.pub',
          'barsy.ro',
          'barsy.rs',
          'barsy.shop',
          'barsyonline.shop',
          'barsy.site',
          'barsy.store',
          'barsy.support',
          'barsy.uk',
          'barsy.co.uk',
          'barsyonline.co.uk',
          '*.magentosite.cloud',
          'hb.cldmail.ru',
          'matlab.cloud',
          'modelscape.com',
          'mwcloudnonprod.com',
          'polyspace.com',
          'mayfirst.info',
          'mayfirst.org',
          'mazeplay.com',
          'mcdir.me',
          'mcdir.ru',
          'vps.mcdir.ru',
          'mcpre.ru',
          'mediatech.by',
          'mediatech.dev',
          'hra.health',
          'medusajs.app',
          'miniserver.com',
          'memset.net',
          'messerli.app',
          'atmeta.com',
          'apps.fbsbx.com',
          '*.cloud.metacentrum.cz',
          'custom.metacentrum.cz',
          'flt.cloud.muni.cz',
          'usr.cloud.muni.cz',
          'meteorapp.com',
          'eu.meteorapp.com',
          'co.pl',
          '*.azurecontainer.io',
          'azure-api.net',
          'azure-mobile.net',
          'azureedge.net',
          'azurefd.net',
          'azurestaticapps.net',
          '1.azurestaticapps.net',
          '2.azurestaticapps.net',
          '3.azurestaticapps.net',
          '4.azurestaticapps.net',
          '5.azurestaticapps.net',
          '6.azurestaticapps.net',
          '7.azurestaticapps.net',
          'centralus.azurestaticapps.net',
          'eastasia.azurestaticapps.net',
          'eastus2.azurestaticapps.net',
          'westeurope.azurestaticapps.net',
          'westus2.azurestaticapps.net',
          'azurewebsites.net',
          'cloudapp.net',
          'trafficmanager.net',
          'blob.core.windows.net',
          'servicebus.windows.net',
          'routingthecloud.com',
          'sn.mynetname.net',
          'routingthecloud.net',
          'routingthecloud.org',
          'csx.cc',
          'mydbserver.com',
          'webspaceconfig.de',
          'mittwald.info',
          'mittwaldserver.info',
          'typo3server.info',
          'project.space',
          'modx.dev',
          'bmoattachments.org',
          'net.ru',
          'org.ru',
          'pp.ru',
          'hostedpi.com',
          'caracal.mythic-beasts.com',
          'customer.mythic-beasts.com',
          'fentiger.mythic-beasts.com',
          'lynx.mythic-beasts.com',
          'ocelot.mythic-beasts.com',
          'oncilla.mythic-beasts.com',
          'onza.mythic-beasts.com',
          'sphinx.mythic-beasts.com',
          'vs.mythic-beasts.com',
          'x.mythic-beasts.com',
          'yali.mythic-beasts.com',
          'cust.retrosnub.co.uk',
          'ui.nabu.casa',
          'cloud.nospamproxy.com',
          'netfy.app',
          'netlify.app',
          '4u.com',
          'nfshost.com',
          'ipfs.nftstorage.link',
          'ngo.us',
          'ngrok.app',
          'ngrok-free.app',
          'ngrok.dev',
          'ngrok-free.dev',
          'ngrok.io',
          'ap.ngrok.io',
          'au.ngrok.io',
          'eu.ngrok.io',
          'in.ngrok.io',
          'jp.ngrok.io',
          'sa.ngrok.io',
          'us.ngrok.io',
          'ngrok.pizza',
          'ngrok.pro',
          'torun.pl',
          'nh-serv.co.uk',
          'nimsite.uk',
          'mmafan.biz',
          'myftp.biz',
          'no-ip.biz',
          'no-ip.ca',
          'fantasyleague.cc',
          'gotdns.ch',
          '3utilities.com',
          'blogsyte.com',
          'ciscofreak.com',
          'damnserver.com',
          'ddnsking.com',
          'ditchyourip.com',
          'dnsiskinky.com',
          'dynns.com',
          'geekgalaxy.com',
          'health-carereform.com',
          'homesecuritymac.com',
          'homesecuritypc.com',
          'myactivedirectory.com',
          'mysecuritycamera.com',
          'myvnc.com',
          'net-freaks.com',
          'onthewifi.com',
          'point2this.com',
          'quicksytes.com',
          'securitytactics.com',
          'servebeer.com',
          'servecounterstrike.com',
          'serveexchange.com',
          'serveftp.com',
          'servegame.com',
          'servehalflife.com',
          'servehttp.com',
          'servehumour.com',
          'serveirc.com',
          'servemp3.com',
          'servep2p.com',
          'servepics.com',
          'servequake.com',
          'servesarcasm.com',
          'stufftoread.com',
          'unusualperson.com',
          'workisboring.com',
          'dvrcam.info',
          'ilovecollege.info',
          'no-ip.info',
          'brasilia.me',
          'ddns.me',
          'dnsfor.me',
          'hopto.me',
          'loginto.me',
          'noip.me',
          'webhop.me',
          'bounceme.net',
          'ddns.net',
          'eating-organic.net',
          'mydissent.net',
          'myeffect.net',
          'mymediapc.net',
          'mypsx.net',
          'mysecuritycamera.net',
          'nhlfan.net',
          'no-ip.net',
          'pgafan.net',
          'privatizehealthinsurance.net',
          'redirectme.net',
          'serveblog.net',
          'serveminecraft.net',
          'sytes.net',
          'cable-modem.org',
          'collegefan.org',
          'couchpotatofries.org',
          'hopto.org',
          'mlbfan.org',
          'myftp.org',
          'mysecuritycamera.org',
          'nflfan.org',
          'no-ip.org',
          'read-books.org',
          'ufcfan.org',
          'zapto.org',
          'no-ip.co.uk',
          'golffan.us',
          'noip.us',
          'pointto.us',
          'stage.nodeart.io',
          '*.developer.app',
          'noop.app',
          '*.northflank.app',
          '*.build.run',
          '*.code.run',
          '*.database.run',
          '*.migration.run',
          'noticeable.news',
          'notion.site',
          'dnsking.ch',
          'mypi.co',
          'n4t.co',
          '001www.com',
          'myiphost.com',
          'forumz.info',
          'soundcast.me',
          'tcp4.me',
          'dnsup.net',
          'hicam.net',
          'now-dns.net',
          'ownip.net',
          'vpndns.net',
          'dynserv.org',
          'now-dns.org',
          'x443.pw',
          'now-dns.top',
          'ntdll.top',
          'freeddns.us',
          'nsupdate.info',
          'nerdpol.ovh',
          'nyc.mn',
          'prvcy.page',
          'obl.ong',
          'observablehq.cloud',
          'static.observableusercontent.com',
          'omg.lol',
          'cloudycluster.net',
          'omniwe.site',
          '123webseite.at',
          '123website.be',
          'simplesite.com.br',
          '123website.ch',
          'simplesite.com',
          '123webseite.de',
          '123hjemmeside.dk',
          '123miweb.es',
          '123kotisivu.fi',
          '123siteweb.fr',
          'simplesite.gr',
          '123homepage.it',
          '123website.lu',
          '123website.nl',
          '123hjemmeside.no',
          'service.one',
          'simplesite.pl',
          '123paginaweb.pt',
          '123minsida.se',
          'is-a-fullstack.dev',
          'is-cool.dev',
          'is-not-a.dev',
          'localplayer.dev',
          'is-local.org',
          'opensocial.site',
          'opencraft.hosting',
          '16-b.it',
          '32-b.it',
          '64-b.it',
          'orsites.com',
          'operaunite.com',
          '*.customer-oci.com',
          '*.oci.customer-oci.com',
          '*.ocp.customer-oci.com',
          '*.ocs.customer-oci.com',
          '*.oraclecloudapps.com',
          '*.oraclegovcloudapps.com',
          '*.oraclegovcloudapps.uk',
          'tech.orange',
          'can.re',
          'authgear-staging.com',
          'authgearapps.com',
          'skygearapp.com',
          'outsystemscloud.com',
          '*.hosting.ovh.net',
          '*.webpaas.ovh.net',
          'ownprovider.com',
          'own.pm',
          '*.owo.codes',
          'ox.rs',
          'oy.lc',
          'pgfog.com',
          'pagexl.com',
          'gotpantheon.com',
          'pantheonsite.io',
          '*.paywhirl.com',
          '*.xmit.co',
          'xmit.dev',
          'madethis.site',
          'srv.us',
          'gh.srv.us',
          'gl.srv.us',
          'lk3.ru',
          'mypep.link',
          'perspecta.cloud',
          'on-web.fr',
          '*.upsun.app',
          'upsunapp.com',
          'ent.platform.sh',
          'eu.platform.sh',
          'us.platform.sh',
          '*.platformsh.site',
          '*.tst.site',
          'platter-app.com',
          'platter-app.dev',
          'platterp.us',
          'pley.games',
          'onporter.run',
          'co.bn',
          'postman-echo.com',
          'pstmn.io',
          'mock.pstmn.io',
          'httpbin.org',
          'prequalifyme.today',
          'xen.prgmr.com',
          'priv.at',
          'protonet.io',
          'chirurgiens-dentistes-en-france.fr',
          'byen.site',
          'pubtls.org',
          'pythonanywhere.com',
          'eu.pythonanywhere.com',
          'qa2.com',
          'qcx.io',
          '*.sys.qcx.io',
          'myqnapcloud.cn',
          'alpha-myqnapcloud.com',
          'dev-myqnapcloud.com',
          'mycloudnas.com',
          'mynascloud.com',
          'myqnapcloud.com',
          'qoto.io',
          'qualifioapp.com',
          'ladesk.com',
          'qbuser.com',
          '*.quipelements.com',
          'vapor.cloud',
          'vaporcloud.io',
          'rackmaze.com',
          'rackmaze.net',
          'cloudsite.builders',
          'myradweb.net',
          'servername.us',
          'web.in',
          'in.net',
          'myrdbx.io',
          'site.rb-hosting.io',
          '*.on-rancher.cloud',
          '*.on-k3s.io',
          '*.on-rio.io',
          'ravpage.co.il',
          'readthedocs-hosted.com',
          'readthedocs.io',
          'rhcloud.com',
          'instances.spawn.cc',
          'onrender.com',
          'app.render.com',
          'replit.app',
          'id.replit.app',
          'firewalledreplit.co',
          'id.firewalledreplit.co',
          'repl.co',
          'id.repl.co',
          'replit.dev',
          'archer.replit.dev',
          'bones.replit.dev',
          'canary.replit.dev',
          'global.replit.dev',
          'hacker.replit.dev',
          'id.replit.dev',
          'janeway.replit.dev',
          'kim.replit.dev',
          'kira.replit.dev',
          'kirk.replit.dev',
          'odo.replit.dev',
          'paris.replit.dev',
          'picard.replit.dev',
          'pike.replit.dev',
          'prerelease.replit.dev',
          'reed.replit.dev',
          'riker.replit.dev',
          'sisko.replit.dev',
          'spock.replit.dev',
          'staging.replit.dev',
          'sulu.replit.dev',
          'tarpit.replit.dev',
          'teams.replit.dev',
          'tucker.replit.dev',
          'wesley.replit.dev',
          'worf.replit.dev',
          'repl.run',
          'resindevice.io',
          'devices.resinstaging.io',
          'hzc.io',
          'adimo.co.uk',
          'itcouldbewor.se',
          'aus.basketball',
          'nz.basketball',
          'git-pages.rit.edu',
          'rocky.page',
          'rub.de',
          'ruhr-uni-bochum.de',
          'io.noc.ruhr-uni-bochum.de',
          'биз.рус',
          'ком.рус',
          'крым.рус',
          'мир.рус',
          'мск.рус',
          'орг.рус',
          'самара.рус',
          'сочи.рус',
          'спб.рус',
          'я.рус',
          'ras.ru',
          'nyat.app',
          '180r.com',
          'dojin.com',
          'sakuratan.com',
          'sakuraweb.com',
          'x0.com',
          '2-d.jp',
          'bona.jp',
          'crap.jp',
          'daynight.jp',
          'eek.jp',
          'flop.jp',
          'halfmoon.jp',
          'jeez.jp',
          'matrix.jp',
          'mimoza.jp',
          'ivory.ne.jp',
          'mail-box.ne.jp',
          'mints.ne.jp',
          'mokuren.ne.jp',
          'opal.ne.jp',
          'sakura.ne.jp',
          'sumomo.ne.jp',
          'topaz.ne.jp',
          'netgamers.jp',
          'nyanta.jp',
          'o0o0.jp',
          'rdy.jp',
          'rgr.jp',
          'rulez.jp',
          's3.isk01.sakurastorage.jp',
          's3.isk02.sakurastorage.jp',
          'saloon.jp',
          'sblo.jp',
          'skr.jp',
          'tank.jp',
          'uh-oh.jp',
          'undo.jp',
          'rs.webaccel.jp',
          'user.webaccel.jp',
          'websozai.jp',
          'xii.jp',
          'squares.net',
          'jpn.org',
          'kirara.st',
          'x0.to',
          'from.tv',
          'sakura.tv',
          '*.builder.code.com',
          '*.dev-builder.code.com',
          '*.stg-builder.code.com',
          '*.001.test.code-builder-stg.platform.salesforce.com',
          '*.d.crm.dev',
          '*.w.crm.dev',
          '*.wa.crm.dev',
          '*.wb.crm.dev',
          '*.wc.crm.dev',
          '*.wd.crm.dev',
          '*.we.crm.dev',
          '*.wf.crm.dev',
          'sandcats.io',
          'logoip.com',
          'logoip.de',
          'fr-par-1.baremetal.scw.cloud',
          'fr-par-2.baremetal.scw.cloud',
          'nl-ams-1.baremetal.scw.cloud',
          'cockpit.fr-par.scw.cloud',
          'fnc.fr-par.scw.cloud',
          'functions.fnc.fr-par.scw.cloud',
          'k8s.fr-par.scw.cloud',
          'nodes.k8s.fr-par.scw.cloud',
          's3.fr-par.scw.cloud',
          's3-website.fr-par.scw.cloud',
          'whm.fr-par.scw.cloud',
          'priv.instances.scw.cloud',
          'pub.instances.scw.cloud',
          'k8s.scw.cloud',
          'cockpit.nl-ams.scw.cloud',
          'k8s.nl-ams.scw.cloud',
          'nodes.k8s.nl-ams.scw.cloud',
          's3.nl-ams.scw.cloud',
          's3-website.nl-ams.scw.cloud',
          'whm.nl-ams.scw.cloud',
          'cockpit.pl-waw.scw.cloud',
          'k8s.pl-waw.scw.cloud',
          'nodes.k8s.pl-waw.scw.cloud',
          's3.pl-waw.scw.cloud',
          's3-website.pl-waw.scw.cloud',
          'scalebook.scw.cloud',
          'smartlabeling.scw.cloud',
          'dedibox.fr',
          'schokokeks.net',
          'gov.scot',
          'service.gov.scot',
          'scrysec.com',
          'client.scrypted.io',
          'firewall-gateway.com',
          'firewall-gateway.de',
          'my-gateway.de',
          'my-router.de',
          'spdns.de',
          'spdns.eu',
          'firewall-gateway.net',
          'my-firewall.org',
          'myfirewall.org',
          'spdns.org',
          'seidat.net',
          'sellfy.store',
          'minisite.ms',
          'senseering.net',
          'servebolt.cloud',
          'biz.ua',
          'co.ua',
          'pp.ua',
          'as.sh.cn',
          'sheezy.games',
          'shiftedit.io',
          'myshopblocks.com',
          'myshopify.com',
          'shopitsite.com',
          'shopware.shop',
          'shopware.store',
          'mo-siemens.io',
          '1kapp.com',
          'appchizi.com',
          'applinzi.com',
          'sinaapp.com',
          'vipsinaapp.com',
          'siteleaf.net',
          'small-web.org',
          'aeroport.fr',
          'avocat.fr',
          'chambagri.fr',
          'chirurgiens-dentistes.fr',
          'experts-comptables.fr',
          'medecin.fr',
          'notaires.fr',
          'pharmacien.fr',
          'port.fr',
          'veterinaire.fr',
          'vp4.me',
          '*.snowflake.app',
          '*.privatelink.snowflake.app',
          'streamlit.app',
          'streamlitapp.com',
          'try-snowplow.com',
          'mafelo.net',
          'playstation-cloud.com',
          'srht.site',
          'apps.lair.io',
          '*.stolos.io',
          'spacekit.io',
          'ind.mom',
          'customer.speedpartner.de',
          'myspreadshop.at',
          'myspreadshop.com.au',
          'myspreadshop.be',
          'myspreadshop.ca',
          'myspreadshop.ch',
          'myspreadshop.com',
          'myspreadshop.de',
          'myspreadshop.dk',
          'myspreadshop.es',
          'myspreadshop.fi',
          'myspreadshop.fr',
          'myspreadshop.ie',
          'myspreadshop.it',
          'myspreadshop.net',
          'myspreadshop.nl',
          'myspreadshop.no',
          'myspreadshop.pl',
          'myspreadshop.se',
          'myspreadshop.co.uk',
          'w-corp-staticblitz.com',
          'w-credentialless-staticblitz.com',
          'w-staticblitz.com',
          'stackhero-network.com',
          'runs.onstackit.cloud',
          'stackit.gg',
          'stackit.rocks',
          'stackit.run',
          'stackit.zone',
          'musician.io',
          'novecore.site',
          'api.stdlib.com',
          'feedback.ac',
          'forms.ac',
          'assessments.cx',
          'calculators.cx',
          'funnels.cx',
          'paynow.cx',
          'quizzes.cx',
          'researched.cx',
          'tests.cx',
          'surveys.so',
          'storebase.store',
          'storipress.app',
          'storj.farm',
          'strapiapp.com',
          'media.strapiapp.com',
          'vps-host.net',
          'atl.jelastic.vps-host.net',
          'njs.jelastic.vps-host.net',
          'ric.jelastic.vps-host.net',
          'streak-link.com',
          'streaklinks.com',
          'streakusercontent.com',
          'soc.srcf.net',
          'user.srcf.net',
          'utwente.io',
          'temp-dns.com',
          'supabase.co',
          'supabase.in',
          'supabase.net',
          'syncloud.it',
          'dscloud.biz',
          'direct.quickconnect.cn',
          'dsmynas.com',
          'familyds.com',
          'diskstation.me',
          'dscloud.me',
          'i234.me',
          'myds.me',
          'synology.me',
          'dscloud.mobi',
          'dsmynas.net',
          'familyds.net',
          'dsmynas.org',
          'familyds.org',
          'direct.quickconnect.to',
          'vpnplus.to',
          'mytabit.com',
          'mytabit.co.il',
          'tabitorder.co.il',
          'taifun-dns.de',
          'ts.net',
          '*.c.ts.net',
          'gda.pl',
          'gdansk.pl',
          'gdynia.pl',
          'med.pl',
          'sopot.pl',
          'taveusercontent.com',
          'p.tawk.email',
          'p.tawkto.email',
          'site.tb-hosting.com',
          'edugit.io',
          's3.teckids.org',
          'telebit.app',
          'telebit.io',
          '*.telebit.xyz',
          '*.firenet.ch',
          '*.svc.firenet.ch',
          'reservd.com',
          'thingdustdata.com',
          'cust.dev.thingdust.io',
          'reservd.dev.thingdust.io',
          'cust.disrec.thingdust.io',
          'reservd.disrec.thingdust.io',
          'cust.prod.thingdust.io',
          'cust.testing.thingdust.io',
          'reservd.testing.thingdust.io',
          'tickets.io',
          'arvo.network',
          'azimuth.network',
          'tlon.network',
          'torproject.net',
          'pages.torproject.net',
          'townnews-staging.com',
          '12hp.at',
          '2ix.at',
          '4lima.at',
          'lima-city.at',
          '12hp.ch',
          '2ix.ch',
          '4lima.ch',
          'lima-city.ch',
          'trafficplex.cloud',
          'de.cool',
          '12hp.de',
          '2ix.de',
          '4lima.de',
          'lima-city.de',
          '1337.pictures',
          'clan.rip',
          'lima-city.rocks',
          'webspace.rocks',
          'lima.zone',
          '*.transurl.be',
          '*.transurl.eu',
          'site.transip.me',
          '*.transurl.nl',
          'tuxfamily.org',
          'dd-dns.de',
          'dray-dns.de',
          'draydns.de',
          'dyn-vpn.de',
          'dynvpn.de',
          'mein-vigor.de',
          'my-vigor.de',
          'my-wan.de',
          'syno-ds.de',
          'synology-diskstation.de',
          'synology-ds.de',
          'diskstation.eu',
          'diskstation.org',
          'typedream.app',
          'pro.typeform.com',
          '*.uberspace.de',
          'uber.space',
          'hk.com',
          'inc.hk',
          'ltd.hk',
          'hk.org',
          'it.com',
          'unison-services.cloud',
          'virtual-user.de',
          'virtualuser.de',
          'name.pm',
          'sch.tf',
          'biz.wf',
          'sch.wf',
          'org.yt',
          'rs.ba',
          'bielsko.pl',
          'upli.io',
          'urown.cloud',
          'dnsupdate.info',
          'us.org',
          'v.ua',
          'express.val.run',
          'web.val.run',
          'vercel.app',
          'v0.build',
          'vercel.dev',
          'vusercontent.net',
          'now.sh',
          '2038.io',
          'router.management',
          'v-info.info',
          'voorloper.cloud',
          '*.vultrobjects.com',
          'wafflecell.com',
          'webflow.io',
          'webflowtest.io',
          '*.webhare.dev',
          'bookonline.app',
          'hotelwithflight.com',
          'reserve-online.com',
          'reserve-online.net',
          'cprapid.com',
          'pleskns.com',
          'wp2.host',
          'pdns.page',
          'plesk.page',
          'wpsquared.site',
          '*.wadl.top',
          'remotewd.com',
          'box.ca',
          'pages.wiardweb.com',
          'toolforge.org',
          'wmcloud.org',
          'wmflabs.org',
          'wdh.app',
          'panel.gg',
          'daemon.panel.gg',
          'wixsite.com',
          'wixstudio.com',
          'editorx.io',
          'wixstudio.io',
          'wix.run',
          'messwithdns.com',
          'woltlab-demo.com',
          'myforum.community',
          'community-pro.de',
          'diskussionsbereich.de',
          'community-pro.net',
          'meinforum.net',
          'affinitylottery.org.uk',
          'raffleentry.org.uk',
          'weeklylottery.org.uk',
          'wpenginepowered.com',
          'js.wpenginepowered.com',
          'half.host',
          'xnbay.com',
          'u2.xnbay.com',
          'u2-local.xnbay.com',
          'cistron.nl',
          'demon.nl',
          'xs4all.space',
          'yandexcloud.net',
          'storage.yandexcloud.net',
          'website.yandexcloud.net',
          'official.academy',
          'yolasite.com',
          'yombo.me',
          'ynh.fr',
          'nohost.me',
          'noho.st',
          'za.net',
          'za.org',
          'zap.cloud',
          'zeabur.app',
          'bss.design',
          'basicserver.io',
          'virtualserver.io',
          'enterprisecloud.nu',
        ].reduce((e, t) => {
          let o = t.replace(/^(\*\.|\!)/, ''),
            a = n.toASCII(o),
            r = t.charAt(0);
          if (e.has(a)) throw Error(`Multiple rules found for ${t} (${a})`);
          return (
            e.set(a, {
              rule: t,
              suffix: o,
              punySuffix: a,
              wildcard: '*' === r,
              exception: '!' === r,
            }),
            e
          );
        }, new Map()),
        i = (e) => {
          let t = n.toASCII(e).split('.');
          for (let e = 0; e < t.length; e++) {
            let o = t.slice(e).join('.'),
              a = r.get(o);
            if (a) return a;
          }
          return null;
        },
        s = {
          DOMAIN_TOO_SHORT: 'Domain name too short.',
          DOMAIN_TOO_LONG:
            'Domain name too long. It should be no more than 255 chars.',
          LABEL_STARTS_WITH_DASH:
            'Domain name label can not start with a dash.',
          LABEL_ENDS_WITH_DASH: 'Domain name label can not end with a dash.',
          LABEL_TOO_LONG: 'Domain name label should be at most 63 chars long.',
          LABEL_TOO_SHORT:
            'Domain name label should be at least 1 character long.',
          LABEL_INVALID_CHARS:
            'Domain name label can only contain alphanumeric characters or dashes.',
        },
        l = (e) => {
          let t;
          let o = n.toASCII(e);
          if (o.length < 1) return 'DOMAIN_TOO_SHORT';
          if (o.length > 255) return 'DOMAIN_TOO_LONG';
          let a = o.split('.');
          for (let e = 0; e < a.length; ++e) {
            if (!(t = a[e]).length) return 'LABEL_TOO_SHORT';
            if (t.length > 63) return 'LABEL_TOO_LONG';
            if ('-' === t.charAt(0)) return 'LABEL_STARTS_WITH_DASH';
            if ('-' === t.charAt(t.length - 1)) return 'LABEL_ENDS_WITH_DASH';
            if (!/^[a-z0-9\-_]+$/.test(t)) return 'LABEL_INVALID_CHARS';
          }
        },
        u = (e) => {
          if ('string' != typeof e)
            throw TypeError('Domain name must be a string.');
          let t = e.slice(0).toLowerCase();
          '.' === t.charAt(t.length - 1) && (t = t.slice(0, t.length - 1));
          let o = l(t);
          if (o) return { input: e, error: { message: s[o], code: o } };
          let a = {
              input: e,
              tld: null,
              sld: null,
              domain: null,
              subdomain: null,
              listed: !1,
            },
            r = t.split('.');
          if ('local' === r[r.length - 1]) return a;
          let u = () => (
              /xn--/.test(t) &&
                (a.domain && (a.domain = n.toASCII(a.domain)),
                a.subdomain && (a.subdomain = n.toASCII(a.subdomain))),
              a
            ),
            c = i(t);
          if (!c)
            return r.length < 2
              ? a
              : ((a.tld = r.pop()),
                (a.sld = r.pop()),
                (a.domain = [a.sld, a.tld].join('.')),
                r.length && (a.subdomain = r.pop()),
                u());
          a.listed = !0;
          let p = c.suffix.split('.'),
            m = r.slice(0, r.length - p.length);
          return (
            c.exception && m.push(p.shift()),
            (a.tld = p.join('.')),
            m.length &&
              (c.wildcard && (p.unshift(m.pop()), (a.tld = p.join('.'))),
              m.length) &&
              ((a.sld = m.pop()),
              (a.domain = [a.sld, a.tld].join('.')),
              m.length && (a.subdomain = m.join('.'))),
            u()
          );
        },
        c = (e) => (e && u(e).domain) || null,
        p = (e) => {
          let t = u(e);
          return !!(t.domain && t.listed);
        };
      (t.default = { parse: u, get: c, isValid: p }),
        (t.errorCodes = s),
        (t.get = c),
        (t.isValid = p),
        (t.parse = u);
    },
    6484: (e, t, o) => {
      'use strict';
      o.d(t, { s: () => u, Z: () => l });
      var a = o(9700),
        n = o(5717);
      class r extends n.Vw {
        constructor(e, t) {
          super(), (this.finished = !1), (this.destroyed = !1), (0, a.sd)(e);
          let o = (0, n.ZJ)(t);
          if (
            ((this.iHash = e.create()), 'function' != typeof this.iHash.update)
          )
            throw Error('Expected instance of class which extends utils.Hash');
          (this.blockLen = this.iHash.blockLen),
            (this.outputLen = this.iHash.outputLen);
          let r = this.blockLen,
            i = new Uint8Array(r);
          i.set(o.length > r ? e.create().update(o).digest() : o);
          for (let e = 0; e < i.length; e++) i[e] ^= 54;
          this.iHash.update(i), (this.oHash = e.create());
          for (let e = 0; e < i.length; e++) i[e] ^= 106;
          this.oHash.update(i), i.fill(0);
        }
        update(e) {
          return (0, a.CC)(this), this.iHash.update(e), this;
        }
        digestInto(e) {
          (0, a.CC)(this),
            (0, a.DO)(e, this.outputLen),
            (this.finished = !0),
            this.iHash.digestInto(e),
            this.oHash.update(e),
            this.oHash.digestInto(e),
            this.destroy();
        }
        digest() {
          let e = new Uint8Array(this.oHash.outputLen);
          return this.digestInto(e), e;
        }
        _cloneInto(e) {
          e || (e = Object.create(Object.getPrototypeOf(this), {}));
          let {
            oHash: t,
            iHash: o,
            finished: a,
            destroyed: n,
            blockLen: r,
            outputLen: i,
          } = this;
          return (
            (e.finished = a),
            (e.destroyed = n),
            (e.blockLen = r),
            (e.outputLen = i),
            (e.oHash = t._cloneInto(e.oHash)),
            (e.iHash = o._cloneInto(e.iHash)),
            e
          );
        }
        destroy() {
          (this.destroyed = !0), this.oHash.destroy(), this.iHash.destroy();
        }
      }
      let i = (e, t, o) => new r(e, t).update(o).digest();
      i.create = (e, t) => new r(e, t);
      var s = o(7450);
      function l(e) {
        return {
          hash: e,
          hmac: (t, ...o) => i(e, t, (0, n.Id)(...o)),
          randomBytes: n.po,
        };
      }
      function u(e, t) {
        let o = (t) => (0, s.weierstrass)({ ...e, ...l(t) });
        return Object.freeze({ ...o(t), create: o });
      }
    },
    5049: (e, t, o) => {
      'use strict';
      o.d(t, {
        B8: () => d,
        D0: () => k,
        LH: () => y,
        Tp: () => w,
        f4: () => g,
        jr: () => h,
        qy: () => j,
        zH: () => m,
        zi: () => p,
      });
      var a = o(8853);
      let n = BigInt(0),
        r = BigInt(1),
        i = BigInt(2),
        s = BigInt(3),
        l = BigInt(4),
        u = BigInt(5),
        c = BigInt(8);
      function p(e, t) {
        let o = e % t;
        return o >= n ? o : t + o;
      }
      function m(e, t, o) {
        let a = e;
        for (; t-- > n; ) (a *= a), (a %= o);
        return a;
      }
      function d(e, t) {
        if (e === n) throw Error('invert: expected non-zero number');
        if (t <= n) throw Error('invert: expected positive modulus, got ' + t);
        let o = p(e, t),
          a = t,
          i = n,
          s = r,
          l = r,
          u = n;
        for (; o !== n; ) {
          let e = a / o,
            t = a % o,
            n = i - l * e,
            r = s - u * e;
          (a = o), (o = t), (i = l), (s = u), (l = n), (u = r);
        }
        if (a !== r) throw Error('invert: does not exist');
        return p(i, t);
      }
      let f = [
        'create',
        'isValid',
        'is0',
        'neg',
        'inv',
        'sqrt',
        'sqr',
        'eql',
        'add',
        'sub',
        'mul',
        'pow',
        'div',
        'addN',
        'subN',
        'mulN',
        'sqrN',
      ];
      function h(e) {
        let t = f.reduce((e, t) => ((e[t] = 'function'), e), {
          ORDER: 'bigint',
          MASK: 'bigint',
          BYTES: 'isSafeInteger',
          BITS: 'isSafeInteger',
        });
        return (0, a.Q5)(e, t);
      }
      function g(e, t, o) {
        if (o < n) throw Error('invalid exponent, negatives unsupported');
        if (o === n) return e.ONE;
        if (o === r) return t;
        let a = e.ONE,
          i = t;
        for (; o > n; ) o & r && (a = e.mul(a, i)), (i = e.sqr(i)), (o >>= r);
        return a;
      }
      function y(e, t) {
        let o = void 0 !== t ? t : e.toString(2).length,
          a = Math.ceil(o / 8);
        return { nBitLength: o, nByteLength: a };
      }
      function k(e, t, o = !1, m = {}) {
        let f;
        if (e <= n) throw Error('invalid field: expected ORDER > 0, got ' + e);
        let { nBitLength: h, nByteLength: b } = y(e, t);
        if (b > 2048)
          throw Error('invalid field: expected ORDER of <= 2048 bytes');
        let w = Object.freeze({
          ORDER: e,
          BITS: h,
          BYTES: b,
          MASK: (0, a.OG)(h),
          ZERO: n,
          ONE: r,
          create: (t) => p(t, e),
          isValid: (t) => {
            if ('bigint' != typeof t)
              throw Error(
                'invalid field element: expected bigint, got ' + typeof t
              );
            return n <= t && t < e;
          },
          is0: (e) => e === n,
          isOdd: (e) => (e & r) === r,
          neg: (t) => p(-t, e),
          eql: (e, t) => e === t,
          sqr: (t) => p(t * t, e),
          add: (t, o) => p(t + o, e),
          sub: (t, o) => p(t - o, e),
          mul: (t, o) => p(t * o, e),
          pow: (e, t) => g(w, e, t),
          div: (t, o) => p(t * d(o, e), e),
          sqrN: (e) => e * e,
          addN: (e, t) => e + t,
          subN: (e, t) => e - t,
          mulN: (e, t) => e * t,
          inv: (t) => d(t, e),
          sqrt:
            m.sqrt ||
            ((t) => (
              f ||
                (f = (function (e) {
                  if (e % l === s) {
                    let t = (e + r) / l;
                    return function (e, o) {
                      let a = e.pow(o, t);
                      if (!e.eql(e.sqr(a), o))
                        throw Error('Cannot find square root');
                      return a;
                    };
                  }
                  if (e % c === u) {
                    let t = (e - u) / c;
                    return function (e, o) {
                      let a = e.mul(o, i),
                        n = e.pow(a, t),
                        r = e.mul(o, n),
                        s = e.mul(e.mul(r, i), n),
                        l = e.mul(r, e.sub(s, e.ONE));
                      if (!e.eql(e.sqr(l), o))
                        throw Error('Cannot find square root');
                      return l;
                    };
                  }
                  return (function (e) {
                    let t, o, a;
                    let s = (e - r) / i;
                    for (t = e - r, o = 0; t % i === n; t /= i, o++);
                    for (
                      a = i;
                      a < e &&
                      (function (e, t, o) {
                        if (t < n)
                          throw Error(
                            'invalid exponent, negatives unsupported'
                          );
                        if (o <= n) throw Error('invalid modulus');
                        if (o === r) return n;
                        let a = r;
                        for (; t > n; )
                          t & r && (a = (a * e) % o),
                            (e = (e * e) % o),
                            (t >>= r);
                        return a;
                      })(a, s, e) !==
                        e - r;
                      a++
                    )
                      if (a > 1e3)
                        throw Error(
                          'Cannot find square root: likely non-prime P'
                        );
                    if (1 === o) {
                      let t = (e + r) / l;
                      return function (e, o) {
                        let a = e.pow(o, t);
                        if (!e.eql(e.sqr(a), o))
                          throw Error('Cannot find square root');
                        return a;
                      };
                    }
                    let u = (t + r) / i;
                    return function (e, n) {
                      if (e.pow(n, s) === e.neg(e.ONE))
                        throw Error('Cannot find square root');
                      let i = o,
                        l = e.pow(e.mul(e.ONE, a), t),
                        c = e.pow(n, u),
                        p = e.pow(n, t);
                      for (; !e.eql(p, e.ONE); ) {
                        if (e.eql(p, e.ZERO)) return e.ZERO;
                        let t = 1;
                        for (let o = e.sqr(p); t < i && !e.eql(o, e.ONE); t++)
                          o = e.sqr(o);
                        let o = e.pow(l, r << BigInt(i - t - 1));
                        (l = e.sqr(o)),
                          (c = e.mul(c, o)),
                          (p = e.mul(p, l)),
                          (i = t);
                      }
                      return c;
                    };
                  })(e);
                })(e)),
              f(w, t)
            )),
          invertBatch: (e) =>
            (function (e, t) {
              let o = Array(t.length),
                a = t.reduce(
                  (t, a, n) => (e.is0(a) ? t : ((o[n] = t), e.mul(t, a))),
                  e.ONE
                ),
                n = e.inv(a);
              return (
                t.reduceRight(
                  (t, a, n) =>
                    e.is0(a) ? t : ((o[n] = e.mul(t, o[n])), e.mul(t, a)),
                  n
                ),
                o
              );
            })(w, e),
          cmov: (e, t, o) => (o ? t : e),
          toBytes: (e) => (o ? (0, a.z)(e, b) : (0, a.lq)(e, b)),
          fromBytes: (e) => {
            if (e.length !== b)
              throw Error(
                'Field.fromBytes: expected ' + b + ' bytes, got ' + e.length
              );
            return o ? (0, a.lX)(e) : (0, a.Ph)(e);
          },
        });
        return Object.freeze(w);
      }
      function b(e) {
        if ('bigint' != typeof e) throw Error('field order must be bigint');
        return Math.ceil(e.toString(2).length / 8);
      }
      function w(e) {
        let t = b(e);
        return t + Math.ceil(t / 2);
      }
      function j(e, t, o = !1) {
        let n = e.length,
          i = b(t),
          s = w(t);
        if (n < 16 || n < s || n > 1024)
          throw Error('expected ' + s + '-1024 bytes of input, got ' + n);
        let l = p(o ? (0, a.Ph)(e) : (0, a.lX)(e), t - r) + r;
        return o ? (0, a.z)(l, i) : (0, a.lq)(l, i);
      }
    },
    5484: (e, t, o) => {
      'use strict';
      o.r(t),
        o.d(t, {
          poseidon: () => i,
          splitConstants: () => r,
          validateOpts: () => n,
        });
      var a = o(5049);
      function n(e) {
        let { Fp: t, mds: o, reversePartialPowIdx: n, roundConstants: r } = e,
          { roundsFull: i, roundsPartial: s, sboxPower: l, t: u } = e;
        for (let o of ((0, a.jr)(t), ['t', 'roundsFull', 'roundsPartial']))
          if ('number' != typeof e[o] || !Number.isSafeInteger(e[o]))
            throw Error('invalid number ' + o);
        if (!Array.isArray(o) || o.length !== u)
          throw Error('Poseidon: invalid MDS matrix');
        let c = o.map((e) => {
          if (!Array.isArray(e) || e.length !== u)
            throw Error('invalid MDS matrix row: ' + e);
          return e.map((e) => {
            if ('bigint' != typeof e)
              throw Error('invalid MDS matrix bigint: ' + e);
            return t.create(e);
          });
        });
        if (void 0 !== n && 'boolean' != typeof n)
          throw Error('invalid param reversePartialPowIdx=' + n);
        if (1 & i) throw Error('roundsFull is not even' + i);
        let p = i + s;
        if (!Array.isArray(r) || r.length !== p)
          throw Error('Poseidon: invalid round constants');
        let m = r.map((e) => {
          if (!Array.isArray(e) || e.length !== u)
            throw Error('invalid round constants');
          return e.map((e) => {
            if ('bigint' != typeof e || !t.isValid(e))
              throw Error('invalid round constant');
            return t.create(e);
          });
        });
        if (!l || ![3, 5, 7].includes(l)) throw Error('invalid sboxPower');
        let d = BigInt(l),
          f = (e) => (0, a.f4)(t, e, d);
        return (
          3 === l
            ? (f = (e) => t.mul(t.sqrN(e), e))
            : 5 === l && (f = (e) => t.mul(t.sqrN(t.sqrN(e)), e)),
          Object.freeze({
            ...e,
            rounds: p,
            sboxFn: f,
            roundConstants: m,
            mds: c,
          })
        );
      }
      function r(e, t) {
        if ('number' != typeof t)
          throw Error('poseidonSplitConstants: invalid t');
        if (!Array.isArray(e) || e.length % t)
          throw Error('poseidonSplitConstants: invalid rc');
        let o = [],
          a = [];
        for (let n = 0; n < e.length; n++)
          a.push(e[n]), a.length === t && (o.push(a), (a = []));
        return o;
      }
      function i(e) {
        let t = n(e),
          {
            Fp: o,
            mds: a,
            roundConstants: r,
            rounds: i,
            roundsPartial: s,
            sboxFn: l,
            t: u,
          } = t,
          c = t.roundsFull / 2,
          p = t.reversePartialPowIdx ? u - 1 : 0,
          m = (e, t, n) => (
            (e = e.map((e, t) => o.add(e, r[n][t]))),
            t ? (e = e.map((e) => l(e))) : (e[p] = l(e[p])),
            (e = a.map((t) =>
              t.reduce((t, a, n) => o.add(t, o.mulN(a, e[n])), o.ZERO)
            ))
          ),
          d = function (e) {
            if (!Array.isArray(e) || e.length !== u)
              throw Error(
                'invalid values, expected array of bigints with length ' + u
              );
            e = e.map((e) => {
              if ('bigint' != typeof e) throw Error('invalid bigint=' + e);
              return o.create(e);
            });
            let t = 0;
            for (let o = 0; o < c; o++) e = m(e, !0, t++);
            for (let o = 0; o < s; o++) e = m(e, !1, t++);
            for (let o = 0; o < c; o++) e = m(e, !0, t++);
            if (t !== i) throw Error('invalid number of rounds');
            return e;
          };
        return (d.roundConstants = r), d;
      }
    },
    8853: (e, t, o) => {
      'use strict';
      o.d(t, {
        DO: () => s,
        IV: () => w,
        Id: () => v,
        ME: () => m,
        My: () => c,
        OG: () => S,
        Ph: () => g,
        Q5: () => B,
        aK: () => E,
        aT: () => h,
        aY: () => i,
        dJ: () => A,
        e8: () => l,
        fg: () => I,
        lX: () => y,
        lq: () => k,
        qj: () => j,
        r4: () => x,
        x: () => R,
        z: () => b,
        zW: () => p,
      });
      let a = BigInt(0),
        n = BigInt(1),
        r = BigInt(2);
      function i(e) {
        return (
          e instanceof Uint8Array ||
          (ArrayBuffer.isView(e) && 'Uint8Array' === e.constructor.name)
        );
      }
      function s(e) {
        if (!i(e)) throw Error('Uint8Array expected');
      }
      function l(e, t) {
        if ('boolean' != typeof t)
          throw Error(e + ' boolean expected, got ' + t);
      }
      let u = Array.from({ length: 256 }, (e, t) =>
        t.toString(16).padStart(2, '0')
      );
      function c(e) {
        s(e);
        let t = '';
        for (let o = 0; o < e.length; o++) t += u[e[o]];
        return t;
      }
      function p(e) {
        let t = e.toString(16);
        return 1 & t.length ? '0' + t : t;
      }
      function m(e) {
        if ('string' != typeof e)
          throw Error('hex string expected, got ' + typeof e);
        return '' === e ? a : BigInt('0x' + e);
      }
      let d = { _0: 48, _9: 57, A: 65, F: 70, a: 97, f: 102 };
      function f(e) {
        return e >= d._0 && e <= d._9
          ? e - d._0
          : e >= d.A && e <= d.F
            ? e - (d.A - 10)
            : e >= d.a && e <= d.f
              ? e - (d.a - 10)
              : void 0;
      }
      function h(e) {
        if ('string' != typeof e)
          throw Error('hex string expected, got ' + typeof e);
        let t = e.length,
          o = t / 2;
        if (t % 2)
          throw Error('hex string expected, got unpadded hex of length ' + t);
        let a = new Uint8Array(o);
        for (let t = 0, n = 0; t < o; t++, n += 2) {
          let o = f(e.charCodeAt(n)),
            r = f(e.charCodeAt(n + 1));
          if (void 0 === o || void 0 === r)
            throw Error(
              'hex string expected, got non-hex character "' +
                (e[n] + e[n + 1]) +
                '" at index ' +
                n
            );
          a[t] = 16 * o + r;
        }
        return a;
      }
      function g(e) {
        return m(c(e));
      }
      function y(e) {
        return s(e), m(c(Uint8Array.from(e).reverse()));
      }
      function k(e, t) {
        return h(e.toString(16).padStart(2 * t, '0'));
      }
      function b(e, t) {
        return k(e, t).reverse();
      }
      function w(e) {
        return h(p(e));
      }
      function j(e, t, o) {
        let a;
        if ('string' == typeof t)
          try {
            a = h(t);
          } catch (t) {
            throw Error(e + ' must be hex string or Uint8Array, cause: ' + t);
          }
        else if (i(t)) a = Uint8Array.from(t);
        else throw Error(e + ' must be hex string or Uint8Array');
        let n = a.length;
        if ('number' == typeof o && n !== o)
          throw Error(e + ' of length ' + o + ' expected, got ' + n);
        return a;
      }
      function v(...e) {
        let t = 0;
        for (let o = 0; o < e.length; o++) {
          let a = e[o];
          s(a), (t += a.length);
        }
        let o = new Uint8Array(t);
        for (let t = 0, a = 0; t < e.length; t++) {
          let n = e[t];
          o.set(n, a), (a += n.length);
        }
        return o;
      }
      let z = (e) => 'bigint' == typeof e && a <= e;
      function x(e, t, o) {
        return z(e) && z(t) && z(o) && t <= e && e < o;
      }
      function E(e, t, o, a) {
        if (!x(t, o, a))
          throw Error(
            'expected valid ' + e + ': ' + o + ' <= n < ' + a + ', got ' + t
          );
      }
      function A(e) {
        let t;
        for (t = 0; e > a; e >>= n, t += 1);
        return t;
      }
      let S = (e) => (r << BigInt(e - 1)) - n,
        O = (e) => new Uint8Array(e),
        C = (e) => Uint8Array.from(e);
      function I(e, t, o) {
        if ('number' != typeof e || e < 2)
          throw Error('hashLen must be a number');
        if ('number' != typeof t || t < 2)
          throw Error('qByteLen must be a number');
        if ('function' != typeof o) throw Error('hmacFn must be a function');
        let a = O(e),
          n = O(e),
          r = 0,
          i = () => {
            a.fill(1), n.fill(0), (r = 0);
          },
          s = (...e) => o(n, a, ...e),
          l = (e = O()) => {
            (n = s(C([0]), e)),
              (a = s()),
              0 !== e.length && ((n = s(C([1]), e)), (a = s()));
          },
          u = () => {
            if (r++ >= 1e3) throw Error('drbg: tried 1000 values');
            let e = 0,
              o = [];
            for (; e < t; ) {
              let t = (a = s()).slice();
              o.push(t), (e += a.length);
            }
            return v(...o);
          };
        return (e, t) => {
          let o;
          for (i(), l(e); !(o = t(u())); ) l();
          return i(), o;
        };
      }
      let P = {
        bigint: (e) => 'bigint' == typeof e,
        function: (e) => 'function' == typeof e,
        boolean: (e) => 'boolean' == typeof e,
        string: (e) => 'string' == typeof e,
        stringOrUint8Array: (e) => 'string' == typeof e || i(e),
        isSafeInteger: (e) => Number.isSafeInteger(e),
        array: (e) => Array.isArray(e),
        field: (e, t) => t.Fp.isValid(e),
        hash: (e) =>
          'function' == typeof e && Number.isSafeInteger(e.outputLen),
      };
      function B(e, t, o = {}) {
        let a = (t, o, a) => {
          let n = P[o];
          if ('function' != typeof n) throw Error('invalid validator function');
          let r = e[t];
          if ((!a || void 0 !== r) && !n(r, e))
            throw Error(
              'param ' + String(t) + ' is invalid. Expected ' + o + ', got ' + r
            );
        };
        for (let [e, o] of Object.entries(t)) a(e, o, !1);
        for (let [e, t] of Object.entries(o)) a(e, t, !0);
        return e;
      }
      function R(e) {
        let t = new WeakMap();
        return (o, ...a) => {
          let n = t.get(o);
          if (void 0 !== n) return n;
          let r = e(o, ...a);
          return t.set(o, r), r;
        };
      }
    },
    7450: (e, t, o) => {
      'use strict';
      o.r(t),
        o.d(t, {
          DER: () => y,
          SWUFpSqrtRatio: () => E,
          mapToCurveSimpleSWU: () => A,
          weierstrass: () => x,
          weierstrassPoints: () => z,
        });
      var a = o(5049),
        n = o(8853);
      let r = BigInt(0),
        i = BigInt(1);
      function s(e, t) {
        let o = t.negate();
        return e ? o : t;
      }
      function l(e, t) {
        if (!Number.isSafeInteger(e) || e <= 0 || e > t)
          throw Error(
            'invalid window size, expected [1..' + t + '], got W=' + e
          );
      }
      function u(e, t) {
        return (
          l(e, t), { windows: Math.ceil(t / e) + 1, windowSize: 2 ** (e - 1) }
        );
      }
      let c = new WeakMap(),
        p = new WeakMap();
      function m(e) {
        return p.get(e) || 1;
      }
      function d(e) {
        return (
          (0, a.jr)(e.Fp),
          (0, n.Q5)(
            e,
            { n: 'bigint', h: 'bigint', Gx: 'field', Gy: 'field' },
            { nBitLength: 'isSafeInteger', nByteLength: 'isSafeInteger' }
          ),
          Object.freeze({
            ...(0, a.LH)(e.n, e.nBitLength),
            ...e,
            p: e.Fp.ORDER,
          })
        );
      }
      function f(e) {
        void 0 !== e.lowS && (0, n.e8)('lowS', e.lowS),
          void 0 !== e.prehash && (0, n.e8)('prehash', e.prehash);
      }
      let { Ph: h, aT: g } = n,
        y = {
          Err: class extends Error {
            constructor(e = '') {
              super(e);
            }
          },
          _tlv: {
            encode: (e, t) => {
              let { Err: o } = y;
              if (e < 0 || e > 256) throw new o('tlv.encode: wrong tag');
              if (1 & t.length) throw new o('tlv.encode: unpadded data');
              let a = t.length / 2,
                r = n.zW(a);
              if ((r.length / 2) & 128)
                throw new o('tlv.encode: long form length too big');
              let i = a > 127 ? n.zW((r.length / 2) | 128) : '';
              return n.zW(e) + i + r + t;
            },
            decode(e, t) {
              let { Err: o } = y,
                a = 0;
              if (e < 0 || e > 256) throw new o('tlv.encode: wrong tag');
              if (t.length < 2 || t[a++] !== e)
                throw new o('tlv.decode: wrong tlv');
              let n = t[a++],
                r = 0;
              if (128 & n) {
                let e = 127 & n;
                if (!e)
                  throw new o(
                    'tlv.decode(long): indefinite length not supported'
                  );
                if (e > 4)
                  throw new o('tlv.decode(long): byte length is too big');
                let i = t.subarray(a, a + e);
                if (i.length !== e)
                  throw new o('tlv.decode: length bytes not complete');
                if (0 === i[0])
                  throw new o('tlv.decode(long): zero leftmost byte');
                for (let e of i) r = (r << 8) | e;
                if (((a += e), r < 128))
                  throw new o('tlv.decode(long): not minimal encoding');
              } else r = n;
              let i = t.subarray(a, a + r);
              if (i.length !== r) throw new o('tlv.decode: wrong value length');
              return { v: i, l: t.subarray(a + r) };
            },
          },
          _int: {
            encode(e) {
              let { Err: t } = y;
              if (e < k)
                throw new t('integer: negative integers are not allowed');
              let o = n.zW(e);
              if (
                (8 & Number.parseInt(o[0], 16) && (o = '00' + o), 1 & o.length)
              )
                throw new t('unexpected DER parsing assertion: unpadded hex');
              return o;
            },
            decode(e) {
              let { Err: t } = y;
              if (128 & e[0])
                throw new t('invalid signature integer: negative');
              if (0 === e[0] && !(128 & e[1]))
                throw new t(
                  'invalid signature integer: unnecessary leading zero'
                );
              return h(e);
            },
          },
          toSig(e) {
            let { Err: t, _int: o, _tlv: a } = y,
              r = 'string' == typeof e ? g(e) : e;
            n.DO(r);
            let { v: i, l: s } = a.decode(48, r);
            if (s.length)
              throw new t('invalid signature: left bytes after parsing');
            let { v: l, l: u } = a.decode(2, i),
              { v: c, l: p } = a.decode(2, u);
            if (p.length)
              throw new t('invalid signature: left bytes after parsing');
            return { r: o.decode(l), s: o.decode(c) };
          },
          hexFromSig(e) {
            let { _tlv: t, _int: o } = y,
              a = t.encode(2, o.encode(e.r)),
              n = t.encode(2, o.encode(e.s));
            return t.encode(48, a + n);
          },
        },
        k = BigInt(0),
        b = BigInt(1),
        w = BigInt(2),
        j = BigInt(3),
        v = BigInt(4);
      function z(e) {
        var t;
        let o = (function (e) {
            let t = d(e);
            n.Q5(
              t,
              { a: 'field', b: 'field' },
              {
                allowedPrivateKeyLengths: 'array',
                wrapPrivateKey: 'boolean',
                isTorsionFree: 'function',
                clearCofactor: 'function',
                allowInfinityPoint: 'boolean',
                fromBytes: 'function',
                toBytes: 'function',
              }
            );
            let { endo: o, Fp: a, a: r } = t;
            if (o) {
              if (!a.eql(r, a.ZERO))
                throw Error(
                  'invalid endomorphism, can only be defined for Koblitz curves that have a=0'
                );
              if (
                'object' != typeof o ||
                'bigint' != typeof o.beta ||
                'function' != typeof o.splitScalar
              )
                throw Error(
                  'invalid endomorphism, expected beta: bigint and splitScalar: function'
                );
            }
            return Object.freeze({ ...t });
          })(e),
          { Fp: f } = o,
          h = a.D0(o.n, o.nBitLength),
          g =
            o.toBytes ||
            ((e, t, o) => {
              let a = t.toAffine();
              return n.Id(Uint8Array.from([4]), f.toBytes(a.x), f.toBytes(a.y));
            }),
          y =
            o.fromBytes ||
            ((e) => {
              let t = e.subarray(1);
              return {
                x: f.fromBytes(t.subarray(0, f.BYTES)),
                y: f.fromBytes(t.subarray(f.BYTES, 2 * f.BYTES)),
              };
            });
        function w(e) {
          let { a: t, b: a } = o,
            n = f.sqr(e),
            r = f.mul(n, e);
          return f.add(f.add(r, f.mul(e, t)), a);
        }
        if (!f.eql(f.sqr(o.Gy), w(o.Gx)))
          throw Error('bad generator point: equation left != right');
        function v(e) {
          let t;
          let {
            allowedPrivateKeyLengths: r,
            nByteLength: i,
            wrapPrivateKey: s,
            n: l,
          } = o;
          if (r && 'bigint' != typeof e) {
            if (
              (n.aY(e) && (e = n.My(e)),
              'string' != typeof e || !r.includes(e.length))
            )
              throw Error('invalid private key');
            e = e.padStart(2 * i, '0');
          }
          try {
            t = 'bigint' == typeof e ? e : n.Ph((0, n.qj)('private key', e, i));
          } catch (t) {
            throw Error(
              'invalid private key, expected hex or ' +
                i +
                ' bytes, got ' +
                typeof e
            );
          }
          return s && (t = a.zi(t, l)), n.aK('private key', t, b, l), t;
        }
        function z(e) {
          if (!(e instanceof A)) throw Error('ProjectivePoint expected');
        }
        let x = (0, n.x)((e, t) => {
            let { px: o, py: a, pz: n } = e;
            if (f.eql(n, f.ONE)) return { x: o, y: a };
            let r = e.is0();
            null == t && (t = r ? f.ONE : f.inv(n));
            let i = f.mul(o, t),
              s = f.mul(a, t),
              l = f.mul(n, t);
            if (r) return { x: f.ZERO, y: f.ZERO };
            if (!f.eql(l, f.ONE)) throw Error('invZ was invalid');
            return { x: i, y: s };
          }),
          E = (0, n.x)((e) => {
            if (e.is0()) {
              if (o.allowInfinityPoint && !f.is0(e.py)) return;
              throw Error('bad point: ZERO');
            }
            let { x: t, y: a } = e.toAffine();
            if (!f.isValid(t) || !f.isValid(a))
              throw Error('bad point: x or y not FE');
            let n = f.sqr(a),
              r = w(t);
            if (!f.eql(n, r)) throw Error('bad point: equation left != right');
            if (!e.isTorsionFree())
              throw Error('bad point: not in prime-order subgroup');
            return !0;
          });
        class A {
          constructor(e, t, o) {
            if (
              ((this.px = e),
              (this.py = t),
              (this.pz = o),
              null == e || !f.isValid(e))
            )
              throw Error('x required');
            if (null == t || !f.isValid(t)) throw Error('y required');
            if (null == o || !f.isValid(o)) throw Error('z required');
            Object.freeze(this);
          }
          static fromAffine(e) {
            let { x: t, y: o } = e || {};
            if (!e || !f.isValid(t) || !f.isValid(o))
              throw Error('invalid affine point');
            if (e instanceof A) throw Error('projective point not allowed');
            let a = (e) => f.eql(e, f.ZERO);
            return a(t) && a(o) ? A.ZERO : new A(t, o, f.ONE);
          }
          get x() {
            return this.toAffine().x;
          }
          get y() {
            return this.toAffine().y;
          }
          static normalizeZ(e) {
            let t = f.invertBatch(e.map((e) => e.pz));
            return e.map((e, o) => e.toAffine(t[o])).map(A.fromAffine);
          }
          static fromHex(e) {
            let t = A.fromAffine(y((0, n.qj)('pointHex', e)));
            return t.assertValidity(), t;
          }
          static fromPrivateKey(e) {
            return A.BASE.multiply(v(e));
          }
          static msm(e, t) {
            return (function (e, t, o, a) {
              if (
                ((function (e, t) {
                  if (!Array.isArray(e)) throw Error('array expected');
                  e.forEach((e, o) => {
                    if (!(e instanceof t))
                      throw Error('invalid point at index ' + o);
                  });
                })(o, e),
                (function (e, t) {
                  if (!Array.isArray(e))
                    throw Error('array of scalars expected');
                  e.forEach((e, o) => {
                    if (!t.isValid(e))
                      throw Error('invalid scalar at index ' + o);
                  });
                })(a, t),
                o.length !== a.length)
              )
                throw Error(
                  'arrays of points and scalars must have equal length'
                );
              let r = e.ZERO,
                i = (0, n.dJ)(BigInt(o.length)),
                s = i > 12 ? i - 3 : i > 4 ? i - 2 : i ? 2 : 1,
                l = (1 << s) - 1,
                u = Array(l + 1).fill(r),
                c = Math.floor((t.BITS - 1) / s) * s,
                p = r;
              for (let e = c; e >= 0; e -= s) {
                u.fill(r);
                for (let t = 0; t < a.length; t++) {
                  let n = Number((a[t] >> BigInt(e)) & BigInt(l));
                  u[n] = u[n].add(o[t]);
                }
                let t = r;
                for (let e = u.length - 1, o = r; e > 0; e--)
                  (o = o.add(u[e])), (t = t.add(o));
                if (((p = p.add(t)), 0 !== e))
                  for (let e = 0; e < s; e++) p = p.double();
              }
              return p;
            })(A, h, e, t);
          }
          _setWindowSize(e) {
            O.setWindowSize(this, e);
          }
          assertValidity() {
            E(this);
          }
          hasEvenY() {
            let { y: e } = this.toAffine();
            if (f.isOdd) return !f.isOdd(e);
            throw Error("Field doesn't support isOdd");
          }
          equals(e) {
            z(e);
            let { px: t, py: o, pz: a } = this,
              { px: n, py: r, pz: i } = e,
              s = f.eql(f.mul(t, i), f.mul(n, a)),
              l = f.eql(f.mul(o, i), f.mul(r, a));
            return s && l;
          }
          negate() {
            return new A(this.px, f.neg(this.py), this.pz);
          }
          double() {
            let { a: e, b: t } = o,
              a = f.mul(t, j),
              { px: n, py: r, pz: i } = this,
              s = f.ZERO,
              l = f.ZERO,
              u = f.ZERO,
              c = f.mul(n, n),
              p = f.mul(r, r),
              m = f.mul(i, i),
              d = f.mul(n, r);
            return (
              (d = f.add(d, d)),
              (u = f.mul(n, i)),
              (u = f.add(u, u)),
              (s = f.mul(e, u)),
              (l = f.mul(a, m)),
              (l = f.add(s, l)),
              (s = f.sub(p, l)),
              (l = f.add(p, l)),
              (l = f.mul(s, l)),
              (s = f.mul(d, s)),
              (u = f.mul(a, u)),
              (m = f.mul(e, m)),
              (d = f.sub(c, m)),
              (d = f.mul(e, d)),
              (d = f.add(d, u)),
              (u = f.add(c, c)),
              (c = f.add(u, c)),
              (c = f.add(c, m)),
              (c = f.mul(c, d)),
              (l = f.add(l, c)),
              (m = f.mul(r, i)),
              (m = f.add(m, m)),
              (c = f.mul(m, d)),
              (s = f.sub(s, c)),
              (u = f.mul(m, p)),
              (u = f.add(u, u)),
              new A(s, l, (u = f.add(u, u)))
            );
          }
          add(e) {
            z(e);
            let { px: t, py: a, pz: n } = this,
              { px: r, py: i, pz: s } = e,
              l = f.ZERO,
              u = f.ZERO,
              c = f.ZERO,
              p = o.a,
              m = f.mul(o.b, j),
              d = f.mul(t, r),
              h = f.mul(a, i),
              g = f.mul(n, s),
              y = f.add(t, a),
              k = f.add(r, i);
            (y = f.mul(y, k)),
              (k = f.add(d, h)),
              (y = f.sub(y, k)),
              (k = f.add(t, n));
            let b = f.add(r, s);
            return (
              (k = f.mul(k, b)),
              (b = f.add(d, g)),
              (k = f.sub(k, b)),
              (b = f.add(a, n)),
              (l = f.add(i, s)),
              (b = f.mul(b, l)),
              (l = f.add(h, g)),
              (b = f.sub(b, l)),
              (c = f.mul(p, k)),
              (l = f.mul(m, g)),
              (c = f.add(l, c)),
              (l = f.sub(h, c)),
              (c = f.add(h, c)),
              (u = f.mul(l, c)),
              (h = f.add(d, d)),
              (h = f.add(h, d)),
              (g = f.mul(p, g)),
              (k = f.mul(m, k)),
              (h = f.add(h, g)),
              (g = f.sub(d, g)),
              (g = f.mul(p, g)),
              (k = f.add(k, g)),
              (d = f.mul(h, k)),
              (u = f.add(u, d)),
              (d = f.mul(b, k)),
              (l = f.mul(y, l)),
              (l = f.sub(l, d)),
              (d = f.mul(y, h)),
              (c = f.mul(b, c)),
              new A(l, u, (c = f.add(c, d)))
            );
          }
          subtract(e) {
            return this.add(e.negate());
          }
          is0() {
            return this.equals(A.ZERO);
          }
          wNAF(e) {
            return O.wNAFCached(this, e, A.normalizeZ);
          }
          multiplyUnsafe(e) {
            let { endo: t, n: a } = o;
            n.aK('scalar', e, k, a);
            let r = A.ZERO;
            if (e === k) return r;
            if (this.is0() || e === b) return this;
            if (!t || O.hasPrecomputes(this))
              return O.wNAFCachedUnsafe(this, e, A.normalizeZ);
            let { k1neg: i, k1: s, k2neg: l, k2: u } = t.splitScalar(e),
              c = r,
              p = r,
              m = this;
            for (; s > k || u > k; )
              s & b && (c = c.add(m)),
                u & b && (p = p.add(m)),
                (m = m.double()),
                (s >>= b),
                (u >>= b);
            return (
              i && (c = c.negate()),
              l && (p = p.negate()),
              (p = new A(f.mul(p.px, t.beta), p.py, p.pz)),
              c.add(p)
            );
          }
          multiply(e) {
            let t, a;
            let { endo: r, n: i } = o;
            if ((n.aK('scalar', e, b, i), r)) {
              let { k1neg: o, k1: n, k2neg: i, k2: s } = r.splitScalar(e),
                { p: l, f: u } = this.wNAF(n),
                { p: c, f: p } = this.wNAF(s);
              (l = O.constTimeNegate(o, l)),
                (c = O.constTimeNegate(i, c)),
                (c = new A(f.mul(c.px, r.beta), c.py, c.pz)),
                (t = l.add(c)),
                (a = u.add(p));
            } else {
              let { p: o, f: n } = this.wNAF(e);
              (t = o), (a = n);
            }
            return A.normalizeZ([t, a])[0];
          }
          multiplyAndAddUnsafe(e, t, o) {
            let a = A.BASE,
              n = (e, t) =>
                t !== k && t !== b && e.equals(a)
                  ? e.multiply(t)
                  : e.multiplyUnsafe(t),
              r = n(this, t).add(n(e, o));
            return r.is0() ? void 0 : r;
          }
          toAffine(e) {
            return x(this, e);
          }
          isTorsionFree() {
            let { h: e, isTorsionFree: t } = o;
            if (e === b) return !0;
            if (t) return t(A, this);
            throw Error(
              'isTorsionFree() has not been declared for the elliptic curve'
            );
          }
          clearCofactor() {
            let { h: e, clearCofactor: t } = o;
            return e === b ? this : t ? t(A, this) : this.multiplyUnsafe(o.h);
          }
          toRawBytes(e = !0) {
            return (
              (0, n.e8)('isCompressed', e), this.assertValidity(), g(A, this, e)
            );
          }
          toHex(e = !0) {
            return (0, n.e8)('isCompressed', e), n.My(this.toRawBytes(e));
          }
        }
        (A.BASE = new A(o.Gx, o.Gy, f.ONE)),
          (A.ZERO = new A(f.ZERO, f.ONE, f.ZERO));
        let S = o.nBitLength,
          O =
            ((t = o.endo ? Math.ceil(S / 2) : S),
            {
              constTimeNegate: s,
              hasPrecomputes: (e) => 1 !== m(e),
              unsafeLadder(e, t, o = A.ZERO) {
                let a = e;
                for (; t > r; )
                  t & i && (o = o.add(a)), (a = a.double()), (t >>= i);
                return o;
              },
              precomputeWindow(e, o) {
                let { windows: a, windowSize: n } = u(o, t),
                  r = [],
                  i = e,
                  s = i;
                for (let e = 0; e < a; e++) {
                  (s = i), r.push(s);
                  for (let e = 1; e < n; e++) (s = s.add(i)), r.push(s);
                  i = s.double();
                }
                return r;
              },
              wNAF(e, o, a) {
                let { windows: n, windowSize: r } = u(e, t),
                  l = A.ZERO,
                  c = A.BASE,
                  p = BigInt(2 ** e - 1),
                  m = 2 ** e,
                  d = BigInt(e);
                for (let e = 0; e < n; e++) {
                  let t = e * r,
                    n = Number(a & p);
                  (a >>= d), n > r && ((n -= m), (a += i));
                  let u = t + Math.abs(n) - 1,
                    f = e % 2 != 0,
                    h = n < 0;
                  0 === n ? (c = c.add(s(f, o[t]))) : (l = l.add(s(h, o[u])));
                }
                return { p: l, f: c };
              },
              wNAFUnsafe(e, o, a, n = A.ZERO) {
                let { windows: s, windowSize: l } = u(e, t),
                  c = BigInt(2 ** e - 1),
                  p = 2 ** e,
                  m = BigInt(e);
                for (let e = 0; e < s; e++) {
                  let t = e * l;
                  if (a === r) break;
                  let s = Number(a & c);
                  if (((a >>= m), s > l && ((s -= p), (a += i)), 0 === s))
                    continue;
                  let u = o[t + Math.abs(s) - 1];
                  s < 0 && (u = u.negate()), (n = n.add(u));
                }
                return n;
              },
              getPrecomputes(e, t, o) {
                let a = c.get(t);
                return (
                  a ||
                    ((a = this.precomputeWindow(t, e)),
                    1 !== e && c.set(t, o(a))),
                  a
                );
              },
              wNAFCached(e, t, o) {
                let a = m(e);
                return this.wNAF(a, this.getPrecomputes(a, e, o), t);
              },
              wNAFCachedUnsafe(e, t, o, a) {
                let n = m(e);
                return 1 === n
                  ? this.unsafeLadder(e, t, a)
                  : this.wNAFUnsafe(n, this.getPrecomputes(n, e, o), t, a);
              },
              setWindowSize(e, o) {
                l(o, t), p.set(e, o), c.delete(e);
              },
            });
        return {
          CURVE: o,
          ProjectivePoint: A,
          normPrivateKeyToScalar: v,
          weierstrassEquation: w,
          isWithinCurveOrder: function (e) {
            return n.r4(e, b, o.n);
          },
        };
      }
      function x(e) {
        let t = (function (e) {
            let t = d(e);
            return (
              n.Q5(
                t,
                { hash: 'hash', hmac: 'function', randomBytes: 'function' },
                {
                  bits2int: 'function',
                  bits2int_modN: 'function',
                  lowS: 'boolean',
                }
              ),
              Object.freeze({ lowS: !0, ...t })
            );
          })(e),
          { Fp: o, n: r } = t,
          i = o.BYTES + 1,
          s = 2 * o.BYTES + 1;
        function l(e) {
          return a.zi(e, r);
        }
        function u(e) {
          return a.B8(e, r);
        }
        let {
            ProjectivePoint: c,
            normPrivateKeyToScalar: p,
            weierstrassEquation: m,
            isWithinCurveOrder: h,
          } = z({
            ...t,
            toBytes(e, t, a) {
              let r = t.toAffine(),
                i = o.toBytes(r.x),
                s = n.Id;
              return ((0, n.e8)('isCompressed', a), a)
                ? s(Uint8Array.from([t.hasEvenY() ? 2 : 3]), i)
                : s(Uint8Array.from([4]), i, o.toBytes(r.y));
            },
            fromBytes(e) {
              let t = e.length,
                a = e[0],
                r = e.subarray(1);
              if (t === i && (2 === a || 3 === a)) {
                let e;
                let t = n.Ph(r);
                if (!n.r4(t, b, o.ORDER)) throw Error('Point is not on curve');
                let i = m(t);
                try {
                  e = o.sqrt(i);
                } catch (e) {
                  throw Error(
                    'Point is not on curve' +
                      (e instanceof Error ? ': ' + e.message : '')
                  );
                }
                return (
                  ((1 & a) == 1) != ((e & b) === b) && (e = o.neg(e)),
                  { x: t, y: e }
                );
              }
              if (t === s && 4 === a)
                return {
                  x: o.fromBytes(r.subarray(0, o.BYTES)),
                  y: o.fromBytes(r.subarray(o.BYTES, 2 * o.BYTES)),
                };
              throw Error(
                'invalid Point, expected length of ' +
                  i +
                  ', or uncompressed ' +
                  s +
                  ', got ' +
                  t
              );
            },
          }),
          g = (e) => n.My(n.lq(e, t.nByteLength)),
          w = (e, t, o) => n.Ph(e.slice(t, o));
        class j {
          constructor(e, t, o) {
            (this.r = e),
              (this.s = t),
              (this.recovery = o),
              this.assertValidity();
          }
          static fromCompact(e) {
            let o = t.nByteLength;
            return new j(
              w((e = (0, n.qj)('compactSignature', e, 2 * o)), 0, o),
              w(e, o, 2 * o)
            );
          }
          static fromDER(e) {
            let { r: t, s: o } = y.toSig((0, n.qj)('DER', e));
            return new j(t, o);
          }
          assertValidity() {
            n.aK('r', this.r, b, r), n.aK('s', this.s, b, r);
          }
          addRecoveryBit(e) {
            return new j(this.r, this.s, e);
          }
          recoverPublicKey(e) {
            let { r: a, s: r, recovery: i } = this,
              s = E((0, n.qj)('msgHash', e));
            if (null == i || ![0, 1, 2, 3].includes(i))
              throw Error('recovery id invalid');
            let p = 2 === i || 3 === i ? a + t.n : a;
            if (p >= o.ORDER) throw Error('recovery id 2 or 3 invalid');
            let m = (1 & i) == 0 ? '02' : '03',
              d = c.fromHex(m + g(p)),
              f = u(p),
              h = l(-s * f),
              y = l(r * f),
              k = c.BASE.multiplyAndAddUnsafe(d, h, y);
            if (!k) throw Error('point at infinify');
            return k.assertValidity(), k;
          }
          hasHighS() {
            return this.s > r >> b;
          }
          normalizeS() {
            return this.hasHighS()
              ? new j(this.r, l(-this.s), this.recovery)
              : this;
          }
          toDERRawBytes() {
            return n.aT(this.toDERHex());
          }
          toDERHex() {
            return y.hexFromSig({ r: this.r, s: this.s });
          }
          toCompactRawBytes() {
            return n.aT(this.toCompactHex());
          }
          toCompactHex() {
            return g(this.r) + g(this.s);
          }
        }
        function v(e) {
          let t = n.aY(e),
            o = 'string' == typeof e,
            a = (t || o) && e.length;
          return t
            ? a === i || a === s
            : o
              ? a === 2 * i || a === 2 * s
              : e instanceof c;
        }
        let x =
            t.bits2int ||
            function (e) {
              if (e.length > 8192) throw Error('input is too large');
              let o = n.Ph(e),
                a = 8 * e.length - t.nBitLength;
              return a > 0 ? o >> BigInt(a) : o;
            },
          E =
            t.bits2int_modN ||
            function (e) {
              return l(x(e));
            },
          A = n.OG(t.nBitLength);
        function S(e) {
          return (
            n.aK('num < 2^' + t.nBitLength, e, k, A), n.lq(e, t.nByteLength)
          );
        }
        let O = { lowS: t.lowS, prehash: !1 },
          C = { lowS: t.lowS, prehash: !1 };
        return (
          c.BASE._setWindowSize(8),
          {
            CURVE: t,
            getPublicKey: function (e, t = !0) {
              return c.fromPrivateKey(e).toRawBytes(t);
            },
            getSharedSecret: function (e, t, o = !0) {
              if (v(e)) throw Error('first arg must be private key');
              if (!v(t)) throw Error('second arg must be public key');
              return c.fromHex(t).multiply(p(e)).toRawBytes(o);
            },
            sign: function (e, a, i = O) {
              let { seed: s, k2sig: m } = (function (e, a, i = O) {
                if (['recovered', 'canonical'].some((e) => e in i))
                  throw Error('sign() legacy options not supported');
                let { hash: s, randomBytes: m } = t,
                  { lowS: d, prehash: g, extraEntropy: y } = i;
                null == d && (d = !0),
                  (e = (0, n.qj)('msgHash', e)),
                  f(i),
                  g && (e = (0, n.qj)('prehashed msgHash', s(e)));
                let w = E(e),
                  v = p(a),
                  z = [S(v), S(w)];
                if (null != y && !1 !== y) {
                  let e = !0 === y ? m(o.BYTES) : y;
                  z.push((0, n.qj)('extraEntropy', e));
                }
                return {
                  seed: n.Id(...z),
                  k2sig: function (e) {
                    let t = x(e);
                    if (!h(t)) return;
                    let o = u(t),
                      a = c.BASE.multiply(t).toAffine(),
                      n = l(a.x);
                    if (n === k) return;
                    let i = l(o * l(w + n * v));
                    if (i === k) return;
                    let s = (a.x === n ? 0 : 2) | Number(a.y & b),
                      p = i;
                    if (d && i > r >> b) (p = i > r >> b ? l(-i) : i), (s ^= 1);
                    return new j(n, p, s);
                  },
                };
              })(e, a, i);
              return n.fg(t.hash.outputLen, t.nByteLength, t.hmac)(s, m);
            },
            verify: function (e, o, a, r = C) {
              let i, s;
              (o = (0, n.qj)('msgHash', o)), (a = (0, n.qj)('publicKey', a));
              let { lowS: p, prehash: m, format: d } = r;
              if ((f(r), 'strict' in r))
                throw Error('options.strict was renamed to lowS');
              if (void 0 !== d && 'compact' !== d && 'der' !== d)
                throw Error('format must be compact or der');
              let h = 'string' == typeof e || n.aY(e),
                g =
                  !h &&
                  !d &&
                  'object' == typeof e &&
                  null !== e &&
                  'bigint' == typeof e.r &&
                  'bigint' == typeof e.s;
              if (!h && !g)
                throw Error(
                  'invalid signature, expected Uint8Array, hex string or Signature instance'
                );
              try {
                if ((g && (s = new j(e.r, e.s)), h)) {
                  try {
                    'compact' !== d && (s = j.fromDER(e));
                  } catch (e) {
                    if (!(e instanceof y.Err)) throw e;
                  }
                  s || 'der' === d || (s = j.fromCompact(e));
                }
                i = c.fromHex(a);
              } catch (e) {
                return !1;
              }
              if (!s || (p && s.hasHighS())) return !1;
              m && (o = t.hash(o));
              let { r: k, s: b } = s,
                w = E(o),
                v = u(b),
                z = l(w * v),
                x = l(k * v),
                A = c.BASE.multiplyAndAddUnsafe(i, z, x)?.toAffine();
              return !!A && l(A.x) === k;
            },
            ProjectivePoint: c,
            Signature: j,
            utils: {
              isValidPrivateKey(e) {
                try {
                  return p(e), !0;
                } catch (e) {
                  return !1;
                }
              },
              normPrivateKeyToScalar: p,
              randomPrivateKey: () => {
                let e = a.Tp(t.n);
                return a.qy(t.randomBytes(e), t.n);
              },
              precompute: (e = 8, t = c.BASE) => (
                t._setWindowSize(e), t.multiply(BigInt(3)), t
              ),
            },
          }
        );
      }
      function E(e, t) {
        let o = e.ORDER,
          a = k;
        for (let e = o - b; e % w === k; e /= w) a += b;
        let n = a,
          r = w << (n - b - b),
          i = r * w,
          s = (o - b) / i,
          l = (s - b) / w,
          u = i - b,
          c = e.pow(t, s),
          p = e.pow(t, (s + b) / w),
          m = (t, o) => {
            let a = c,
              i = e.pow(o, u),
              s = e.sqr(i);
            s = e.mul(s, o);
            let m = e.mul(t, s);
            (m = e.pow(m, l)),
              (m = e.mul(m, i)),
              (i = e.mul(m, o)),
              (s = e.mul(m, t));
            let d = e.mul(s, i);
            m = e.pow(d, r);
            let f = e.eql(m, e.ONE);
            (i = e.mul(s, p)),
              (m = e.mul(d, a)),
              (s = e.cmov(i, s, f)),
              (d = e.cmov(m, d, f));
            for (let t = n; t > b; t--) {
              let o = t - w;
              o = w << (o - b);
              let n = e.pow(d, o),
                r = e.eql(n, e.ONE);
              (i = e.mul(s, a)),
                (a = e.mul(a, a)),
                (n = e.mul(d, a)),
                (s = e.cmov(i, s, r)),
                (d = e.cmov(n, d, r));
            }
            return { isValid: f, value: s };
          };
        if (e.ORDER % v === j) {
          let o = (e.ORDER - j) / v,
            a = e.sqrt(e.neg(t));
          m = (t, n) => {
            let r = e.sqr(n),
              i = e.mul(t, n);
            r = e.mul(r, i);
            let s = e.pow(r, o);
            s = e.mul(s, i);
            let l = e.mul(s, a),
              u = e.mul(e.sqr(s), n),
              c = e.eql(u, t),
              p = e.cmov(l, s, c);
            return { isValid: c, value: p };
          };
        }
        return m;
      }
      function A(e, t) {
        if ((a.jr(e), !e.isValid(t.A) || !e.isValid(t.B) || !e.isValid(t.Z)))
          throw Error('mapToCurveSimpleSWU: invalid opts');
        let o = E(e, t.Z);
        if (!e.isOdd) throw Error('Fp.isOdd is not implemented!');
        return (a) => {
          let n, r, i, s, l, u, c, p;
          (n = e.sqr(a)),
            (n = e.mul(n, t.Z)),
            (r = e.sqr(n)),
            (r = e.add(r, n)),
            (i = e.add(r, e.ONE)),
            (i = e.mul(i, t.B)),
            (s = e.cmov(t.Z, e.neg(r), !e.eql(r, e.ZERO))),
            (s = e.mul(s, t.A)),
            (r = e.sqr(i)),
            (u = e.sqr(s)),
            (l = e.mul(u, t.A)),
            (r = e.add(r, l)),
            (r = e.mul(r, i)),
            (u = e.mul(u, s)),
            (l = e.mul(u, t.B)),
            (r = e.add(r, l)),
            (c = e.mul(n, i));
          let { isValid: m, value: d } = o(r, u);
          (p = e.mul(n, a)),
            (p = e.mul(p, d)),
            (c = e.cmov(c, i, m)),
            (p = e.cmov(p, d, m));
          let f = e.isOdd(a) === e.isOdd(p);
          return (p = e.cmov(e.neg(p), p, f)), { x: (c = e.div(c, s)), y: p };
        };
      }
    },
    3238: (e, t, o) => {
      'use strict';
      o.d(t, { bI: () => m });
      var a = o(9922),
        n = o(6484),
        r = o(5049);
      let i = BigInt(
          '0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f'
        ),
        s = BigInt(
          '0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141'
        ),
        l = BigInt(1),
        u = BigInt(2),
        c = (e, t) => (e + t / u) / t,
        p = (0, r.D0)(i, void 0, void 0, {
          sqrt: function (e) {
            let t = BigInt(3),
              o = BigInt(6),
              a = BigInt(11),
              n = BigInt(22),
              s = BigInt(23),
              l = BigInt(44),
              c = BigInt(88),
              m = (e * e * e) % i,
              d = (m * m * e) % i,
              f = ((0, r.zH)(d, t, i) * d) % i,
              h = ((0, r.zH)(f, t, i) * d) % i,
              g = ((0, r.zH)(h, u, i) * m) % i,
              y = ((0, r.zH)(g, a, i) * g) % i,
              k = ((0, r.zH)(y, n, i) * y) % i,
              b = ((0, r.zH)(k, l, i) * k) % i,
              w = ((0, r.zH)(b, c, i) * b) % i,
              j = ((0, r.zH)(w, l, i) * k) % i,
              v = ((0, r.zH)(j, t, i) * d) % i,
              z = ((0, r.zH)(v, s, i) * y) % i,
              x = ((0, r.zH)(z, o, i) * m) % i,
              E = (0, r.zH)(x, u, i);
            if (!p.eql(p.sqr(E), e)) throw Error('Cannot find square root');
            return E;
          },
        }),
        m = (0, n.s)(
          {
            a: BigInt(0),
            b: BigInt(7),
            Fp: p,
            n: s,
            Gx: BigInt(
              '55066263022277343669578718895168534326250603453777594175500187360389116729240'
            ),
            Gy: BigInt(
              '32670510020758816978083085130507043184471273380659243275938904335757337482424'
            ),
            h: BigInt(1),
            lowS: !0,
            endo: {
              beta: BigInt(
                '0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee'
              ),
              splitScalar: (e) => {
                let t = BigInt('0x3086d221a7d46bcde86c90e49284eb15'),
                  o = -l * BigInt('0xe4437ed6010e88286f547fa90abfe4c3'),
                  a = BigInt('0x114ca50f7a8e2f3f657c1108d9d44cfd8'),
                  n = BigInt('0x100000000000000000000000000000000'),
                  i = c(t * e, s),
                  u = c(-o * e, s),
                  p = (0, r.zi)(e - i * t - u * a, s),
                  m = (0, r.zi)(-i * o - u * t, s),
                  d = p > n,
                  f = m > n;
                if ((d && (p = s - p), f && (m = s - m), p > n || m > n))
                  throw Error('splitScalar: Endomorphism failed, k=' + e);
                return { k1neg: d, k1: p, k2neg: f, k2: m };
              },
            },
          },
          a.sc
        );
      BigInt(0), m.ProjectivePoint;
    },
    9700: (e, t, o) => {
      'use strict';
      function a(e) {
        if (!Number.isSafeInteger(e) || e < 0)
          throw Error('positive integer expected, got ' + e);
      }
      function n(e, ...t) {
        if (
          !(
            e instanceof Uint8Array ||
            (ArrayBuffer.isView(e) && 'Uint8Array' === e.constructor.name)
          )
        )
          throw Error('Uint8Array expected');
        if (t.length > 0 && !t.includes(e.length))
          throw Error(
            'Uint8Array expected of length ' + t + ', got length=' + e.length
          );
      }
      function r(e) {
        if ('function' != typeof e || 'function' != typeof e.create)
          throw Error('Hash should be wrapped by utils.wrapConstructor');
        a(e.outputLen), a(e.blockLen);
      }
      function i(e, t = !0) {
        if (e.destroyed) throw Error('Hash instance has been destroyed');
        if (t && e.finished)
          throw Error('Hash#digest() has already been called');
      }
      function s(e, t) {
        n(e);
        let o = t.outputLen;
        if (e.length < o)
          throw Error(
            'digestInto() expects output buffer of length at least ' + o
          );
      }
      o.d(t, {
        CC: () => i,
        DO: () => n,
        Fe: () => a,
        Ht: () => s,
        sd: () => r,
      });
    },
    9922: (e, t, o) => {
      'use strict';
      o.d(t, { sc: () => m });
      var a = o(9700),
        n = o(5717);
      let r = (e, t, o) => (e & t) ^ (~e & o),
        i = (e, t, o) => (e & t) ^ (e & o) ^ (t & o);
      class s extends n.Vw {
        constructor(e, t, o, a) {
          super(),
            (this.blockLen = e),
            (this.outputLen = t),
            (this.padOffset = o),
            (this.isLE = a),
            (this.finished = !1),
            (this.length = 0),
            (this.pos = 0),
            (this.destroyed = !1),
            (this.buffer = new Uint8Array(e)),
            (this.view = (0, n.O8)(this.buffer));
        }
        update(e) {
          (0, a.CC)(this);
          let { view: t, buffer: o, blockLen: r } = this,
            i = (e = (0, n.ZJ)(e)).length;
          for (let a = 0; a < i; ) {
            let s = Math.min(r - this.pos, i - a);
            if (s === r) {
              let t = (0, n.O8)(e);
              for (; r <= i - a; a += r) this.process(t, a);
              continue;
            }
            o.set(e.subarray(a, a + s), this.pos),
              (this.pos += s),
              (a += s),
              this.pos === r && (this.process(t, 0), (this.pos = 0));
          }
          return (this.length += e.length), this.roundClean(), this;
        }
        digestInto(e) {
          (0, a.CC)(this), (0, a.Ht)(e, this), (this.finished = !0);
          let { buffer: t, view: o, blockLen: r, isLE: i } = this,
            { pos: s } = this;
          (t[s++] = 128),
            this.buffer.subarray(s).fill(0),
            this.padOffset > r - s && (this.process(o, 0), (s = 0));
          for (let e = s; e < r; e++) t[e] = 0;
          !(function (e, t, o, a) {
            if ('function' == typeof e.setBigUint64)
              return e.setBigUint64(t, o, a);
            let n = BigInt(32),
              r = BigInt(0xffffffff),
              i = Number((o >> n) & r),
              s = Number(o & r),
              l = a ? 4 : 0,
              u = a ? 0 : 4;
            e.setUint32(t + l, i, a), e.setUint32(t + u, s, a);
          })(o, r - 8, BigInt(8 * this.length), i),
            this.process(o, 0);
          let l = (0, n.O8)(e),
            u = this.outputLen;
          if (u % 4) throw Error('_sha2: outputLen should be aligned to 32bit');
          let c = u / 4,
            p = this.get();
          if (c > p.length) throw Error('_sha2: outputLen bigger than state');
          for (let e = 0; e < c; e++) l.setUint32(4 * e, p[e], i);
        }
        digest() {
          let { buffer: e, outputLen: t } = this;
          this.digestInto(e);
          let o = e.slice(0, t);
          return this.destroy(), o;
        }
        _cloneInto(e) {
          e || (e = new this.constructor()), e.set(...this.get());
          let {
            blockLen: t,
            buffer: o,
            length: a,
            finished: n,
            destroyed: r,
            pos: i,
          } = this;
          return (
            (e.length = a),
            (e.pos = i),
            (e.finished = n),
            (e.destroyed = r),
            a % t && e.buffer.set(o),
            e
          );
        }
      }
      let l = new Uint32Array([
          0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b,
          0x59f111f1, 0x923f82a4, 0xab1c5ed5, 0xd807aa98, 0x12835b01,
          0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7,
          0xc19bf174, 0xe49b69c1, 0xefbe4786, 0xfc19dc6, 0x240ca1cc, 0x2de92c6f,
          0x4a7484aa, 0x5cb0a9dc, 0x76f988da, 0x983e5152, 0xa831c66d,
          0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xd5a79147, 0x6ca6351, 0x14292967,
          0x27b70a85, 0x2e1b2138, 0x4d2c6dfc, 0x53380d13, 0x650a7354,
          0x766a0abb, 0x81c2c92e, 0x92722c85, 0xa2bfe8a1, 0xa81a664b,
          0xc24b8b70, 0xc76c51a3, 0xd192e819, 0xd6990624, 0xf40e3585,
          0x106aa070, 0x19a4c116, 0x1e376c08, 0x2748774c, 0x34b0bcb5,
          0x391c0cb3, 0x4ed8aa4a, 0x5b9cca4f, 0x682e6ff3, 0x748f82ee,
          0x78a5636f, 0x84c87814, 0x8cc70208, 0x90befffa, 0xa4506ceb,
          0xbef9a3f7, 0xc67178f2,
        ]),
        u = new Uint32Array([
          0x6a09e667, 0xbb67ae85, 0x3c6ef372, 0xa54ff53a, 0x510e527f,
          0x9b05688c, 0x1f83d9ab, 0x5be0cd19,
        ]),
        c = new Uint32Array(64);
      class p extends s {
        constructor() {
          super(64, 32, 8, !1),
            (this.A = 0 | u[0]),
            (this.B = 0 | u[1]),
            (this.C = 0 | u[2]),
            (this.D = 0 | u[3]),
            (this.E = 0 | u[4]),
            (this.F = 0 | u[5]),
            (this.G = 0 | u[6]),
            (this.H = 0 | u[7]);
        }
        get() {
          let { A: e, B: t, C: o, D: a, E: n, F: r, G: i, H: s } = this;
          return [e, t, o, a, n, r, i, s];
        }
        set(e, t, o, a, n, r, i, s) {
          (this.A = 0 | e),
            (this.B = 0 | t),
            (this.C = 0 | o),
            (this.D = 0 | a),
            (this.E = 0 | n),
            (this.F = 0 | r),
            (this.G = 0 | i),
            (this.H = 0 | s);
        }
        process(e, t) {
          for (let o = 0; o < 16; o++, t += 4) c[o] = e.getUint32(t, !1);
          for (let e = 16; e < 64; e++) {
            let t = c[e - 15],
              o = c[e - 2],
              a = (0, n.Ow)(t, 7) ^ (0, n.Ow)(t, 18) ^ (t >>> 3),
              r = (0, n.Ow)(o, 17) ^ (0, n.Ow)(o, 19) ^ (o >>> 10);
            c[e] = (r + c[e - 7] + a + c[e - 16]) | 0;
          }
          let { A: o, B: a, C: s, D: u, E: p, F: m, G: d, H: f } = this;
          for (let e = 0; e < 64; e++) {
            let t =
                (f +
                  ((0, n.Ow)(p, 6) ^ (0, n.Ow)(p, 11) ^ (0, n.Ow)(p, 25)) +
                  r(p, m, d) +
                  l[e] +
                  c[e]) |
                0,
              h =
                (((0, n.Ow)(o, 2) ^ (0, n.Ow)(o, 13) ^ (0, n.Ow)(o, 22)) +
                  i(o, a, s)) |
                0;
            (f = d),
              (d = m),
              (m = p),
              (p = (u + t) | 0),
              (u = s),
              (s = a),
              (a = o),
              (o = (t + h) | 0);
          }
          (o = (o + this.A) | 0),
            (a = (a + this.B) | 0),
            (s = (s + this.C) | 0),
            (u = (u + this.D) | 0),
            (p = (p + this.E) | 0),
            (m = (m + this.F) | 0),
            (d = (d + this.G) | 0),
            (f = (f + this.H) | 0),
            this.set(o, a, s, u, p, m, d, f);
        }
        roundClean() {
          c.fill(0);
        }
        destroy() {
          this.set(0, 0, 0, 0, 0, 0, 0, 0), this.buffer.fill(0);
        }
      }
      let m = (0, n.ld)(() => new p());
    },
    8844: (e, t, o) => {
      'use strict';
      o.d(t, { lY: () => E });
      var a = o(9700);
      let n = BigInt(0x100000000 - 1),
        r = BigInt(32),
        i = (e, t, o) => (e << o) | (t >>> (32 - o)),
        s = (e, t, o) => (t << o) | (e >>> (32 - o)),
        l = (e, t, o) => (t << (o - 32)) | (e >>> (64 - o)),
        u = (e, t, o) => (e << (o - 32)) | (t >>> (64 - o));
      var c = o(5717);
      let p = [],
        m = [],
        d = [],
        f = BigInt(0),
        h = BigInt(1),
        g = BigInt(2),
        y = BigInt(7),
        k = BigInt(256),
        b = BigInt(113);
      for (let e = 0, t = h, o = 1, a = 0; e < 24; e++) {
        ([o, a] = [a, (2 * o + 3 * a) % 5]),
          p.push(2 * (5 * a + o)),
          m.push((((e + 1) * (e + 2)) / 2) % 64);
        let n = f;
        for (let e = 0; e < 7; e++)
          (t = ((t << h) ^ ((t >> y) * b)) % k) & g &&
            (n ^= h << ((h << BigInt(e)) - h));
        d.push(n);
      }
      let [w, j] = (function (e, t = !1) {
          let o = new Uint32Array(e.length),
            a = new Uint32Array(e.length);
          for (let i = 0; i < e.length; i++) {
            let { h: s, l } = (function (e, t = !1) {
              return t
                ? { h: Number(e & n), l: Number((e >> r) & n) }
                : { h: 0 | Number((e >> r) & n), l: 0 | Number(e & n) };
            })(e[i], t);
            [o[i], a[i]] = [s, l];
          }
          return [o, a];
        })(d, !0),
        v = (e, t, o) => (o > 32 ? l(e, t, o) : i(e, t, o)),
        z = (e, t, o) => (o > 32 ? u(e, t, o) : s(e, t, o));
      class x extends c.Vw {
        constructor(e, t, o, n = !1, r = 24) {
          if (
            (super(),
            (this.blockLen = e),
            (this.suffix = t),
            (this.outputLen = o),
            (this.enableXOF = n),
            (this.rounds = r),
            (this.pos = 0),
            (this.posOut = 0),
            (this.finished = !1),
            (this.destroyed = !1),
            (0, a.Fe)(o),
            0 >= this.blockLen || this.blockLen >= 200)
          )
            throw Error('Sha3 supports only keccak-f1600 function');
          (this.state = new Uint8Array(200)),
            (this.state32 = (0, c.DH)(this.state));
        }
        keccak() {
          c.qv || (0, c.Fc)(this.state32),
            (function (e, t = 24) {
              let o = new Uint32Array(10);
              for (let a = 24 - t; a < 24; a++) {
                for (let t = 0; t < 10; t++)
                  o[t] = e[t] ^ e[t + 10] ^ e[t + 20] ^ e[t + 30] ^ e[t + 40];
                for (let t = 0; t < 10; t += 2) {
                  let a = (t + 8) % 10,
                    n = (t + 2) % 10,
                    r = o[n],
                    i = o[n + 1],
                    s = v(r, i, 1) ^ o[a],
                    l = z(r, i, 1) ^ o[a + 1];
                  for (let o = 0; o < 50; o += 10)
                    (e[t + o] ^= s), (e[t + o + 1] ^= l);
                }
                let t = e[2],
                  n = e[3];
                for (let o = 0; o < 24; o++) {
                  let a = m[o],
                    r = v(t, n, a),
                    i = z(t, n, a),
                    s = p[o];
                  (t = e[s]), (n = e[s + 1]), (e[s] = r), (e[s + 1] = i);
                }
                for (let t = 0; t < 50; t += 10) {
                  for (let a = 0; a < 10; a++) o[a] = e[t + a];
                  for (let a = 0; a < 10; a++)
                    e[t + a] ^= ~o[(a + 2) % 10] & o[(a + 4) % 10];
                }
                (e[0] ^= w[a]), (e[1] ^= j[a]);
              }
              o.fill(0);
            })(this.state32, this.rounds),
            c.qv || (0, c.Fc)(this.state32),
            (this.posOut = 0),
            (this.pos = 0);
        }
        update(e) {
          (0, a.CC)(this);
          let { blockLen: t, state: o } = this,
            n = (e = (0, c.ZJ)(e)).length;
          for (let a = 0; a < n; ) {
            let r = Math.min(t - this.pos, n - a);
            for (let t = 0; t < r; t++) o[this.pos++] ^= e[a++];
            this.pos === t && this.keccak();
          }
          return this;
        }
        finish() {
          if (this.finished) return;
          this.finished = !0;
          let { state: e, suffix: t, pos: o, blockLen: a } = this;
          (e[o] ^= t),
            (128 & t) != 0 && o === a - 1 && this.keccak(),
            (e[a - 1] ^= 128),
            this.keccak();
        }
        writeInto(e) {
          (0, a.CC)(this, !1), (0, a.DO)(e), this.finish();
          let t = this.state,
            { blockLen: o } = this;
          for (let a = 0, n = e.length; a < n; ) {
            this.posOut >= o && this.keccak();
            let r = Math.min(o - this.posOut, n - a);
            e.set(t.subarray(this.posOut, this.posOut + r), a),
              (this.posOut += r),
              (a += r);
          }
          return e;
        }
        xofInto(e) {
          if (!this.enableXOF)
            throw Error('XOF is not possible for this instance');
          return this.writeInto(e);
        }
        xof(e) {
          return (0, a.Fe)(e), this.xofInto(new Uint8Array(e));
        }
        digestInto(e) {
          if (((0, a.Ht)(e, this), this.finished))
            throw Error('digest() was already called');
          return this.writeInto(e), this.destroy(), e;
        }
        digest() {
          return this.digestInto(new Uint8Array(this.outputLen));
        }
        destroy() {
          (this.destroyed = !0), this.state.fill(0);
        }
        _cloneInto(e) {
          let {
            blockLen: t,
            suffix: o,
            outputLen: a,
            rounds: n,
            enableXOF: r,
          } = this;
          return (
            e || (e = new x(t, o, a, r, n)),
            e.state32.set(this.state32),
            (e.pos = this.pos),
            (e.posOut = this.posOut),
            (e.finished = this.finished),
            (e.rounds = n),
            (e.suffix = o),
            (e.outputLen = a),
            (e.enableXOF = r),
            (e.destroyed = this.destroyed),
            e
          );
        }
      }
      let E = (0, c.ld)(() => new x(136, 1, 32));
    },
    5717: (e, t, o) => {
      'use strict';
      o.d(t, {
        Vw: () => f,
        Fc: () => c,
        Id: () => d,
        O8: () => i,
        qv: () => l,
        po: () => g,
        Ow: () => s,
        ZJ: () => m,
        DH: () => r,
        AI: () => p,
        ld: () => h,
      });
      let a =
        'object' == typeof globalThis && 'crypto' in globalThis
          ? globalThis.crypto
          : void 0;
      var n = o(9700);
      let r = (e) =>
          new Uint32Array(e.buffer, e.byteOffset, Math.floor(e.byteLength / 4)),
        i = (e) => new DataView(e.buffer, e.byteOffset, e.byteLength),
        s = (e, t) => (e << (32 - t)) | (e >>> t),
        l = 68 === new Uint8Array(new Uint32Array([0x11223344]).buffer)[0],
        u = (e) =>
          ((e << 24) & 0xff000000) |
          ((e << 8) & 0xff0000) |
          ((e >>> 8) & 65280) |
          ((e >>> 24) & 255);
      function c(e) {
        for (let t = 0; t < e.length; t++) e[t] = u(e[t]);
      }
      function p(e) {
        if ('string' != typeof e)
          throw Error('utf8ToBytes expected string, got ' + typeof e);
        return new Uint8Array(new TextEncoder().encode(e));
      }
      function m(e) {
        return 'string' == typeof e && (e = p(e)), (0, n.DO)(e), e;
      }
      function d(...e) {
        let t = 0;
        for (let o = 0; o < e.length; o++) {
          let a = e[o];
          (0, n.DO)(a), (t += a.length);
        }
        let o = new Uint8Array(t);
        for (let t = 0, a = 0; t < e.length; t++) {
          let n = e[t];
          o.set(n, a), (a += n.length);
        }
        return o;
      }
      class f {
        clone() {
          return this._cloneInto();
        }
      }
      function h(e) {
        let t = (t) => e().update(m(t)).digest(),
          o = e();
        return (
          (t.outputLen = o.outputLen),
          (t.blockLen = o.blockLen),
          (t.create = () => e()),
          t
        );
      }
      function g(e = 32) {
        if (a && 'function' == typeof a.getRandomValues)
          return a.getRandomValues(new Uint8Array(e));
        if (a && 'function' == typeof a.randomBytes) return a.randomBytes(e);
        throw Error('crypto.getRandomValues must be defined');
      }
    },
    2860: (e, t, o) => {
      'use strict';
      o.d(t, { s: () => i, t: () => r });
      var a = o(7960);
      function n(e, t) {
        if ('function' == typeof e) return e(t);
        null != e && (e.current = t);
      }
      function r(...e) {
        return (t) => {
          let o = !1,
            a = e.map((e) => {
              let a = n(e, t);
              return o || 'function' != typeof a || (o = !0), a;
            });
          if (o)
            return () => {
              for (let t = 0; t < a.length; t++) {
                let o = a[t];
                'function' == typeof o ? o() : n(e[t], null);
              }
            };
        };
      }
      function i(...e) {
        return a.useCallback(r(...e), e);
      }
    },
    1497: (e, t, o) => {
      'use strict';
      o.d(t, {
        UC: () => o5,
        YJ: () => o8,
        In: () => o3,
        q7: () => o7,
        VF: () => at,
        p4: () => ae,
        JU: () => o9,
        ZL: () => o6,
        bL: () => o0,
        wn: () => aa,
        PP: () => ao,
        wv: () => an,
        l9: () => o1,
        WT: () => o2,
        LM: () => o4,
      });
      var a,
        n,
        r,
        i = o(7960),
        s = o.t(i, 2),
        l = o(7209);
      function u(e, [t, o]) {
        return Math.min(o, Math.max(t, e));
      }
      function c(e, t, { checkForDefaultPrevented: o = !0 } = {}) {
        return function (a) {
          if ((e?.(a), !1 === o || !a.defaultPrevented)) return t?.(a);
        };
      }
      var p = o(516);
      function m(e, t = []) {
        let o = [],
          a = () => {
            let t = o.map((e) => i.createContext(e));
            return function (o) {
              let a = o?.[e] || t;
              return i.useMemo(
                () => ({ [`__scope${e}`]: { ...o, [e]: a } }),
                [o, a]
              );
            };
          };
        return (
          (a.scopeName = e),
          [
            function (t, a) {
              let n = i.createContext(a),
                r = o.length;
              o = [...o, a];
              let s = (t) => {
                let { scope: o, children: a, ...s } = t,
                  l = o?.[e]?.[r] || n,
                  u = i.useMemo(() => s, Object.values(s));
                return (0, p.jsx)(l.Provider, { value: u, children: a });
              };
              return (
                (s.displayName = t + 'Provider'),
                [
                  s,
                  function (o, s) {
                    let l = s?.[e]?.[r] || n,
                      u = i.useContext(l);
                    if (u) return u;
                    if (void 0 !== a) return a;
                    throw Error(`\`${o}\` must be used within \`${t}\``);
                  },
                ]
              );
            },
            (function (...e) {
              let t = e[0];
              if (1 === e.length) return t;
              let o = () => {
                let o = e.map((e) => ({
                  useScope: e(),
                  scopeName: e.scopeName,
                }));
                return function (e) {
                  let a = o.reduce((t, { useScope: o, scopeName: a }) => {
                    let n = o(e)[`__scope${a}`];
                    return { ...t, ...n };
                  }, {});
                  return i.useMemo(
                    () => ({ [`__scope${t.scopeName}`]: a }),
                    [a]
                  );
                };
              };
              return (o.scopeName = t.scopeName), o;
            })(a, ...t),
          ]
        );
      }
      var d = o(2860),
        f = o(8875),
        h = i.createContext(void 0),
        g = [
          'a',
          'button',
          'div',
          'form',
          'h2',
          'h3',
          'img',
          'input',
          'label',
          'li',
          'nav',
          'ol',
          'p',
          'span',
          'svg',
          'ul',
        ].reduce((e, t) => {
          let o = (0, f.TL)(`Primitive.${t}`),
            a = i.forwardRef((e, a) => {
              let { asChild: n, ...r } = e,
                i = n ? o : t;
              return (
                'undefined' != typeof window &&
                  (window[Symbol.for('radix-ui')] = !0),
                (0, p.jsx)(i, { ...r, ref: a })
              );
            });
          return (a.displayName = `Primitive.${t}`), { ...e, [t]: a };
        }, {});
      function y(e) {
        let t = i.useRef(e);
        return (
          i.useEffect(() => {
            t.current = e;
          }),
          i.useMemo(
            () =>
              (...e) =>
                t.current?.(...e),
            []
          )
        );
      }
      var k = 'dismissableLayer.update',
        b = i.createContext({
          layers: new Set(),
          layersWithOutsidePointerEventsDisabled: new Set(),
          branches: new Set(),
        }),
        w = i.forwardRef((e, t) => {
          var o, a;
          let {
              disableOutsidePointerEvents: r = !1,
              onEscapeKeyDown: s,
              onPointerDownOutside: l,
              onFocusOutside: u,
              onInteractOutside: m,
              onDismiss: f,
              ...h
            } = e,
            w = i.useContext(b),
            [z, x] = i.useState(null),
            E =
              null !== (a = null == z ? void 0 : z.ownerDocument) &&
              void 0 !== a
                ? a
                : null === (o = globalThis) || void 0 === o
                  ? void 0
                  : o.document,
            [, A] = i.useState({}),
            S = (0, d.s)(t, (e) => x(e)),
            O = Array.from(w.layers),
            [C] = [...w.layersWithOutsidePointerEventsDisabled].slice(-1),
            I = O.indexOf(C),
            P = z ? O.indexOf(z) : -1,
            B = w.layersWithOutsidePointerEventsDisabled.size > 0,
            R = P >= I,
            T = (function (e) {
              var t;
              let o =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : null === (t = globalThis) || void 0 === t
                      ? void 0
                      : t.document,
                a = y(e),
                n = i.useRef(!1),
                r = i.useRef(() => {});
              return (
                i.useEffect(() => {
                  let e = (e) => {
                      if (e.target && !n.current) {
                        let t = function () {
                            v('dismissableLayer.pointerDownOutside', a, n, {
                              discrete: !0,
                            });
                          },
                          n = { originalEvent: e };
                        'touch' === e.pointerType
                          ? (o.removeEventListener('click', r.current),
                            (r.current = t),
                            o.addEventListener('click', r.current, {
                              once: !0,
                            }))
                          : t();
                      } else o.removeEventListener('click', r.current);
                      n.current = !1;
                    },
                    t = window.setTimeout(() => {
                      o.addEventListener('pointerdown', e);
                    }, 0);
                  return () => {
                    window.clearTimeout(t),
                      o.removeEventListener('pointerdown', e),
                      o.removeEventListener('click', r.current);
                  };
                }, [o, a]),
                { onPointerDownCapture: () => (n.current = !0) }
              );
            })((e) => {
              let t = e.target,
                o = [...w.branches].some((e) => e.contains(t));
              !R ||
                o ||
                (null == l || l(e),
                null == m || m(e),
                e.defaultPrevented || null == f || f());
            }, E),
            L = (function (e) {
              var t;
              let o =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : null === (t = globalThis) || void 0 === t
                      ? void 0
                      : t.document,
                a = y(e),
                n = i.useRef(!1);
              return (
                i.useEffect(() => {
                  let e = (e) => {
                    e.target &&
                      !n.current &&
                      v(
                        'dismissableLayer.focusOutside',
                        a,
                        { originalEvent: e },
                        { discrete: !1 }
                      );
                  };
                  return (
                    o.addEventListener('focusin', e),
                    () => o.removeEventListener('focusin', e)
                  );
                }, [o, a]),
                {
                  onFocusCapture: () => (n.current = !0),
                  onBlurCapture: () => (n.current = !1),
                }
              );
            })((e) => {
              let t = e.target;
              [...w.branches].some((e) => e.contains(t)) ||
                (null == u || u(e),
                null == m || m(e),
                e.defaultPrevented || null == f || f());
            }, E);
          return (
            !(function (e, t = globalThis?.document) {
              let o = y(e);
              i.useEffect(() => {
                let e = (e) => {
                  'Escape' === e.key && o(e);
                };
                return (
                  t.addEventListener('keydown', e, { capture: !0 }),
                  () => t.removeEventListener('keydown', e, { capture: !0 })
                );
              }, [o, t]);
            })((e) => {
              P !== w.layers.size - 1 ||
                (null == s || s(e),
                !e.defaultPrevented && f && (e.preventDefault(), f()));
            }, E),
            i.useEffect(() => {
              if (z)
                return (
                  r &&
                    (0 === w.layersWithOutsidePointerEventsDisabled.size &&
                      ((n = E.body.style.pointerEvents),
                      (E.body.style.pointerEvents = 'none')),
                    w.layersWithOutsidePointerEventsDisabled.add(z)),
                  w.layers.add(z),
                  j(),
                  () => {
                    r &&
                      1 === w.layersWithOutsidePointerEventsDisabled.size &&
                      (E.body.style.pointerEvents = n);
                  }
                );
            }, [z, E, r, w]),
            i.useEffect(
              () => () => {
                z &&
                  (w.layers.delete(z),
                  w.layersWithOutsidePointerEventsDisabled.delete(z),
                  j());
              },
              [z, w]
            ),
            i.useEffect(() => {
              let e = () => A({});
              return (
                document.addEventListener(k, e),
                () => document.removeEventListener(k, e)
              );
            }, []),
            (0, p.jsx)(g.div, {
              ...h,
              ref: S,
              style: {
                pointerEvents: B ? (R ? 'auto' : 'none') : void 0,
                ...e.style,
              },
              onFocusCapture: c(e.onFocusCapture, L.onFocusCapture),
              onBlurCapture: c(e.onBlurCapture, L.onBlurCapture),
              onPointerDownCapture: c(
                e.onPointerDownCapture,
                T.onPointerDownCapture
              ),
            })
          );
        });
      function j() {
        let e = new CustomEvent(k);
        document.dispatchEvent(e);
      }
      function v(e, t, o, a) {
        let { discrete: n } = a,
          r = o.originalEvent.target,
          i = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: o });
        (t && r.addEventListener(e, t, { once: !0 }), n)
          ? r && l.flushSync(() => r.dispatchEvent(i))
          : r.dispatchEvent(i);
      }
      (w.displayName = 'DismissableLayer'),
        (i.forwardRef((e, t) => {
          let o = i.useContext(b),
            a = i.useRef(null),
            n = (0, d.s)(t, a);
          return (
            i.useEffect(() => {
              let e = a.current;
              if (e)
                return (
                  o.branches.add(e),
                  () => {
                    o.branches.delete(e);
                  }
                );
            }, [o.branches]),
            (0, p.jsx)(g.div, { ...e, ref: n })
          );
        }).displayName = 'DismissableLayerBranch');
      var z = 0;
      function x() {
        let e = document.createElement('span');
        return (
          e.setAttribute('data-radix-focus-guard', ''),
          (e.tabIndex = 0),
          (e.style.outline = 'none'),
          (e.style.opacity = '0'),
          (e.style.position = 'fixed'),
          (e.style.pointerEvents = 'none'),
          e
        );
      }
      var E = 'focusScope.autoFocusOnMount',
        A = 'focusScope.autoFocusOnUnmount',
        S = { bubbles: !1, cancelable: !0 },
        O = i.forwardRef((e, t) => {
          let {
              loop: o = !1,
              trapped: a = !1,
              onMountAutoFocus: n,
              onUnmountAutoFocus: r,
              ...s
            } = e,
            [l, u] = i.useState(null),
            c = y(n),
            m = y(r),
            f = i.useRef(null),
            h = (0, d.s)(t, (e) => u(e)),
            k = i.useRef({
              paused: !1,
              pause() {
                this.paused = !0;
              },
              resume() {
                this.paused = !1;
              },
            }).current;
          i.useEffect(() => {
            if (a) {
              let e = function (e) {
                  if (k.paused || !l) return;
                  let t = e.target;
                  l.contains(t)
                    ? (f.current = t)
                    : P(f.current, { select: !0 });
                },
                t = function (e) {
                  if (k.paused || !l) return;
                  let t = e.relatedTarget;
                  null === t || l.contains(t) || P(f.current, { select: !0 });
                };
              document.addEventListener('focusin', e),
                document.addEventListener('focusout', t);
              let o = new MutationObserver(function (e) {
                if (document.activeElement === document.body)
                  for (let t of e) t.removedNodes.length > 0 && P(l);
              });
              return (
                l && o.observe(l, { childList: !0, subtree: !0 }),
                () => {
                  document.removeEventListener('focusin', e),
                    document.removeEventListener('focusout', t),
                    o.disconnect();
                }
              );
            }
          }, [a, l, k.paused]),
            i.useEffect(() => {
              if (l) {
                B.add(k);
                let e = document.activeElement;
                if (!l.contains(e)) {
                  let t = new CustomEvent(E, S);
                  l.addEventListener(E, c),
                    l.dispatchEvent(t),
                    t.defaultPrevented ||
                      ((function (e) {
                        let { select: t = !1 } =
                            arguments.length > 1 && void 0 !== arguments[1]
                              ? arguments[1]
                              : {},
                          o = document.activeElement;
                        for (let a of e)
                          if (
                            (P(a, { select: t }), document.activeElement !== o)
                          )
                            return;
                      })(
                        C(l).filter((e) => 'A' !== e.tagName),
                        { select: !0 }
                      ),
                      document.activeElement === e && P(l));
                }
                return () => {
                  l.removeEventListener(E, c),
                    setTimeout(() => {
                      let t = new CustomEvent(A, S);
                      l.addEventListener(A, m),
                        l.dispatchEvent(t),
                        t.defaultPrevented ||
                          P(null != e ? e : document.body, { select: !0 }),
                        l.removeEventListener(A, m),
                        B.remove(k);
                    }, 0);
                };
              }
            }, [l, c, m, k]);
          let b = i.useCallback(
            (e) => {
              if ((!o && !a) || k.paused) return;
              let t = 'Tab' === e.key && !e.altKey && !e.ctrlKey && !e.metaKey,
                n = document.activeElement;
              if (t && n) {
                let t = e.currentTarget,
                  [a, r] = (function (e) {
                    let t = C(e);
                    return [I(t, e), I(t.reverse(), e)];
                  })(t);
                a && r
                  ? e.shiftKey || n !== r
                    ? e.shiftKey &&
                      n === a &&
                      (e.preventDefault(), o && P(r, { select: !0 }))
                    : (e.preventDefault(), o && P(a, { select: !0 }))
                  : n === t && e.preventDefault();
              }
            },
            [o, a, k.paused]
          );
          return (0, p.jsx)(g.div, {
            tabIndex: -1,
            ...s,
            ref: h,
            onKeyDown: b,
          });
        });
      function C(e) {
        let t = [],
          o = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
            acceptNode: (e) => {
              let t = 'INPUT' === e.tagName && 'hidden' === e.type;
              return e.disabled || e.hidden || t
                ? NodeFilter.FILTER_SKIP
                : e.tabIndex >= 0
                  ? NodeFilter.FILTER_ACCEPT
                  : NodeFilter.FILTER_SKIP;
            },
          });
        for (; o.nextNode(); ) t.push(o.currentNode);
        return t;
      }
      function I(e, t) {
        for (let o of e)
          if (
            !(function (e, t) {
              let { upTo: o } = t;
              if ('hidden' === getComputedStyle(e).visibility) return !0;
              for (; e && (void 0 === o || e !== o); ) {
                if ('none' === getComputedStyle(e).display) return !0;
                e = e.parentElement;
              }
              return !1;
            })(o, { upTo: t })
          )
            return o;
      }
      function P(e) {
        let { select: t = !1 } =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (e && e.focus) {
          var o;
          let a = document.activeElement;
          e.focus({ preventScroll: !0 }),
            e !== a &&
              (o = e) instanceof HTMLInputElement &&
              'select' in o &&
              t &&
              e.select();
        }
      }
      O.displayName = 'FocusScope';
      var B = (function () {
        let e = [];
        return {
          add(t) {
            let o = e[0];
            t !== o && (null == o || o.pause()), (e = R(e, t)).unshift(t);
          },
          remove(t) {
            var o;
            null === (o = (e = R(e, t))[0]) || void 0 === o || o.resume();
          },
        };
      })();
      function R(e, t) {
        let o = [...e],
          a = o.indexOf(t);
        return -1 !== a && o.splice(a, 1), o;
      }
      var T = globalThis?.document ? i.useLayoutEffect : () => {},
        L = s[' useId '.trim().toString()] || (() => void 0),
        N = 0;
      function D(e) {
        let [t, o] = i.useState(L());
        return (
          T(() => {
            e || o((e) => e ?? String(N++));
          }, [e]),
          e || (t ? `radix-${t}` : '')
        );
      }
      let U = ['top', 'right', 'bottom', 'left'],
        F = Math.min,
        M = Math.max,
        _ = Math.round,
        q = Math.floor,
        $ = (e) => ({ x: e, y: e }),
        H = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' },
        V = { start: 'end', end: 'start' };
      function W(e, t) {
        return 'function' == typeof e ? e(t) : e;
      }
      function G(e) {
        return e.split('-')[0];
      }
      function K(e) {
        return e.split('-')[1];
      }
      function Z(e) {
        return 'x' === e ? 'y' : 'x';
      }
      function Y(e) {
        return 'y' === e ? 'height' : 'width';
      }
      function J(e) {
        return ['top', 'bottom'].includes(G(e)) ? 'y' : 'x';
      }
      function X(e) {
        return e.replace(/start|end/g, (e) => V[e]);
      }
      function Q(e) {
        return e.replace(/left|right|bottom|top/g, (e) => H[e]);
      }
      function ee(e) {
        return 'number' != typeof e
          ? { top: 0, right: 0, bottom: 0, left: 0, ...e }
          : { top: e, right: e, bottom: e, left: e };
      }
      function et(e) {
        let { x: t, y: o, width: a, height: n } = e;
        return {
          width: a,
          height: n,
          top: o,
          left: t,
          right: t + a,
          bottom: o + n,
          x: t,
          y: o,
        };
      }
      function eo(e, t, o) {
        let a,
          { reference: n, floating: r } = e,
          i = J(t),
          s = Z(J(t)),
          l = Y(s),
          u = G(t),
          c = 'y' === i,
          p = n.x + n.width / 2 - r.width / 2,
          m = n.y + n.height / 2 - r.height / 2,
          d = n[l] / 2 - r[l] / 2;
        switch (u) {
          case 'top':
            a = { x: p, y: n.y - r.height };
            break;
          case 'bottom':
            a = { x: p, y: n.y + n.height };
            break;
          case 'right':
            a = { x: n.x + n.width, y: m };
            break;
          case 'left':
            a = { x: n.x - r.width, y: m };
            break;
          default:
            a = { x: n.x, y: n.y };
        }
        switch (K(t)) {
          case 'start':
            a[s] -= d * (o && c ? -1 : 1);
            break;
          case 'end':
            a[s] += d * (o && c ? -1 : 1);
        }
        return a;
      }
      let ea = async (e, t, o) => {
        let {
            placement: a = 'bottom',
            strategy: n = 'absolute',
            middleware: r = [],
            platform: i,
          } = o,
          s = r.filter(Boolean),
          l = await (null == i.isRTL ? void 0 : i.isRTL(t)),
          u = await i.getElementRects({
            reference: e,
            floating: t,
            strategy: n,
          }),
          { x: c, y: p } = eo(u, a, l),
          m = a,
          d = {},
          f = 0;
        for (let o = 0; o < s.length; o++) {
          let { name: r, fn: h } = s[o],
            {
              x: g,
              y: y,
              data: k,
              reset: b,
            } = await h({
              x: c,
              y: p,
              initialPlacement: a,
              placement: m,
              strategy: n,
              middlewareData: d,
              rects: u,
              platform: i,
              elements: { reference: e, floating: t },
            });
          (c = null != g ? g : c),
            (p = null != y ? y : p),
            (d = { ...d, [r]: { ...d[r], ...k } }),
            b &&
              f <= 50 &&
              (f++,
              'object' == typeof b &&
                (b.placement && (m = b.placement),
                b.rects &&
                  (u =
                    !0 === b.rects
                      ? await i.getElementRects({
                          reference: e,
                          floating: t,
                          strategy: n,
                        })
                      : b.rects),
                ({ x: c, y: p } = eo(u, m, l))),
              (o = -1));
        }
        return { x: c, y: p, placement: m, strategy: n, middlewareData: d };
      };
      async function en(e, t) {
        var o;
        void 0 === t && (t = {});
        let { x: a, y: n, platform: r, rects: i, elements: s, strategy: l } = e,
          {
            boundary: u = 'clippingAncestors',
            rootBoundary: c = 'viewport',
            elementContext: p = 'floating',
            altBoundary: m = !1,
            padding: d = 0,
          } = W(t, e),
          f = ee(d),
          h = s[m ? ('floating' === p ? 'reference' : 'floating') : p],
          g = et(
            await r.getClippingRect({
              element:
                null ==
                  (o = await (null == r.isElement ? void 0 : r.isElement(h))) ||
                o
                  ? h
                  : h.contextElement ||
                    (await (null == r.getDocumentElement
                      ? void 0
                      : r.getDocumentElement(s.floating))),
              boundary: u,
              rootBoundary: c,
              strategy: l,
            })
          ),
          y =
            'floating' === p
              ? {
                  x: a,
                  y: n,
                  width: i.floating.width,
                  height: i.floating.height,
                }
              : i.reference,
          k = await (null == r.getOffsetParent
            ? void 0
            : r.getOffsetParent(s.floating)),
          b = ((await (null == r.isElement ? void 0 : r.isElement(k))) &&
            (await (null == r.getScale ? void 0 : r.getScale(k)))) || {
            x: 1,
            y: 1,
          },
          w = et(
            r.convertOffsetParentRelativeRectToViewportRelativeRect
              ? await r.convertOffsetParentRelativeRectToViewportRelativeRect({
                  elements: s,
                  rect: y,
                  offsetParent: k,
                  strategy: l,
                })
              : y
          );
        return {
          top: (g.top - w.top + f.top) / b.y,
          bottom: (w.bottom - g.bottom + f.bottom) / b.y,
          left: (g.left - w.left + f.left) / b.x,
          right: (w.right - g.right + f.right) / b.x,
        };
      }
      function er(e, t) {
        return {
          top: e.top - t.height,
          right: e.right - t.width,
          bottom: e.bottom - t.height,
          left: e.left - t.width,
        };
      }
      function ei(e) {
        return U.some((t) => e[t] >= 0);
      }
      async function es(e, t) {
        let { placement: o, platform: a, elements: n } = e,
          r = await (null == a.isRTL ? void 0 : a.isRTL(n.floating)),
          i = G(o),
          s = K(o),
          l = 'y' === J(o),
          u = ['left', 'top'].includes(i) ? -1 : 1,
          c = r && l ? -1 : 1,
          p = W(t, e),
          {
            mainAxis: m,
            crossAxis: d,
            alignmentAxis: f,
          } = 'number' == typeof p
            ? { mainAxis: p, crossAxis: 0, alignmentAxis: null }
            : {
                mainAxis: p.mainAxis || 0,
                crossAxis: p.crossAxis || 0,
                alignmentAxis: p.alignmentAxis,
              };
        return (
          s && 'number' == typeof f && (d = 'end' === s ? -1 * f : f),
          l ? { x: d * c, y: m * u } : { x: m * u, y: d * c }
        );
      }
      function el() {
        return 'undefined' != typeof window;
      }
      function eu(e) {
        return em(e) ? (e.nodeName || '').toLowerCase() : '#document';
      }
      function ec(e) {
        var t;
        return (
          (null == e || null == (t = e.ownerDocument)
            ? void 0
            : t.defaultView) || window
        );
      }
      function ep(e) {
        var t;
        return null ==
          (t = (em(e) ? e.ownerDocument : e.document) || window.document)
          ? void 0
          : t.documentElement;
      }
      function em(e) {
        return !!el() && (e instanceof Node || e instanceof ec(e).Node);
      }
      function ed(e) {
        return !!el() && (e instanceof Element || e instanceof ec(e).Element);
      }
      function ef(e) {
        return (
          !!el() && (e instanceof HTMLElement || e instanceof ec(e).HTMLElement)
        );
      }
      function eh(e) {
        return (
          !!el() &&
          'undefined' != typeof ShadowRoot &&
          (e instanceof ShadowRoot || e instanceof ec(e).ShadowRoot)
        );
      }
      function eg(e) {
        let { overflow: t, overflowX: o, overflowY: a, display: n } = ej(e);
        return (
          /auto|scroll|overlay|hidden|clip/.test(t + a + o) &&
          !['inline', 'contents'].includes(n)
        );
      }
      function ey(e) {
        return [':popover-open', ':modal'].some((t) => {
          try {
            return e.matches(t);
          } catch (e) {
            return !1;
          }
        });
      }
      function ek(e) {
        let t = eb(),
          o = ed(e) ? ej(e) : e;
        return (
          ['transform', 'translate', 'scale', 'rotate', 'perspective'].some(
            (e) => !!o[e] && 'none' !== o[e]
          ) ||
          (!!o.containerType && 'normal' !== o.containerType) ||
          (!t && !!o.backdropFilter && 'none' !== o.backdropFilter) ||
          (!t && !!o.filter && 'none' !== o.filter) ||
          [
            'transform',
            'translate',
            'scale',
            'rotate',
            'perspective',
            'filter',
          ].some((e) => (o.willChange || '').includes(e)) ||
          ['paint', 'layout', 'strict', 'content'].some((e) =>
            (o.contain || '').includes(e)
          )
        );
      }
      function eb() {
        return (
          'undefined' != typeof CSS &&
          !!CSS.supports &&
          CSS.supports('-webkit-backdrop-filter', 'none')
        );
      }
      function ew(e) {
        return ['html', 'body', '#document'].includes(eu(e));
      }
      function ej(e) {
        return ec(e).getComputedStyle(e);
      }
      function ev(e) {
        return ed(e)
          ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
          : { scrollLeft: e.scrollX, scrollTop: e.scrollY };
      }
      function ez(e) {
        if ('html' === eu(e)) return e;
        let t = e.assignedSlot || e.parentNode || (eh(e) && e.host) || ep(e);
        return eh(t) ? t.host : t;
      }
      function ex(e, t, o) {
        var a;
        void 0 === t && (t = []), void 0 === o && (o = !0);
        let n = (function e(t) {
            let o = ez(t);
            return ew(o)
              ? t.ownerDocument
                ? t.ownerDocument.body
                : t.body
              : ef(o) && eg(o)
                ? o
                : e(o);
          })(e),
          r = n === (null == (a = e.ownerDocument) ? void 0 : a.body),
          i = ec(n);
        if (r) {
          let e = eE(i);
          return t.concat(
            i,
            i.visualViewport || [],
            eg(n) ? n : [],
            e && o ? ex(e) : []
          );
        }
        return t.concat(n, ex(n, [], o));
      }
      function eE(e) {
        return e.parent && Object.getPrototypeOf(e.parent)
          ? e.frameElement
          : null;
      }
      function eA(e) {
        let t = ej(e),
          o = parseFloat(t.width) || 0,
          a = parseFloat(t.height) || 0,
          n = ef(e),
          r = n ? e.offsetWidth : o,
          i = n ? e.offsetHeight : a,
          s = _(o) !== r || _(a) !== i;
        return s && ((o = r), (a = i)), { width: o, height: a, $: s };
      }
      function eS(e) {
        return ed(e) ? e : e.contextElement;
      }
      function eO(e) {
        let t = eS(e);
        if (!ef(t)) return $(1);
        let o = t.getBoundingClientRect(),
          { width: a, height: n, $: r } = eA(t),
          i = (r ? _(o.width) : o.width) / a,
          s = (r ? _(o.height) : o.height) / n;
        return (
          (i && Number.isFinite(i)) || (i = 1),
          (s && Number.isFinite(s)) || (s = 1),
          { x: i, y: s }
        );
      }
      let eC = $(0);
      function eI(e) {
        let t = ec(e);
        return eb() && t.visualViewport
          ? { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop }
          : eC;
      }
      function eP(e, t, o, a) {
        var n;
        void 0 === t && (t = !1), void 0 === o && (o = !1);
        let r = e.getBoundingClientRect(),
          i = eS(e),
          s = $(1);
        t && (a ? ed(a) && (s = eO(a)) : (s = eO(e)));
        let l = (void 0 === (n = o) && (n = !1), a && (!n || a === ec(i)) && n)
            ? eI(i)
            : $(0),
          u = (r.left + l.x) / s.x,
          c = (r.top + l.y) / s.y,
          p = r.width / s.x,
          m = r.height / s.y;
        if (i) {
          let e = ec(i),
            t = a && ed(a) ? ec(a) : a,
            o = e,
            n = eE(o);
          for (; n && a && t !== o; ) {
            let e = eO(n),
              t = n.getBoundingClientRect(),
              a = ej(n),
              r = t.left + (n.clientLeft + parseFloat(a.paddingLeft)) * e.x,
              i = t.top + (n.clientTop + parseFloat(a.paddingTop)) * e.y;
            (u *= e.x),
              (c *= e.y),
              (p *= e.x),
              (m *= e.y),
              (u += r),
              (c += i),
              (n = eE((o = ec(n))));
          }
        }
        return et({ width: p, height: m, x: u, y: c });
      }
      function eB(e, t) {
        let o = ev(e).scrollLeft;
        return t ? t.left + o : eP(ep(e)).left + o;
      }
      function eR(e, t, o) {
        void 0 === o && (o = !1);
        let a = e.getBoundingClientRect();
        return {
          x: a.left + t.scrollLeft - (o ? 0 : eB(e, a)),
          y: a.top + t.scrollTop,
        };
      }
      function eT(e, t, o) {
        let a;
        if ('viewport' === t)
          a = (function (e, t) {
            let o = ec(e),
              a = ep(e),
              n = o.visualViewport,
              r = a.clientWidth,
              i = a.clientHeight,
              s = 0,
              l = 0;
            if (n) {
              (r = n.width), (i = n.height);
              let e = eb();
              (!e || (e && 'fixed' === t)) &&
                ((s = n.offsetLeft), (l = n.offsetTop));
            }
            return { width: r, height: i, x: s, y: l };
          })(e, o);
        else if ('document' === t)
          a = (function (e) {
            let t = ep(e),
              o = ev(e),
              a = e.ownerDocument.body,
              n = M(t.scrollWidth, t.clientWidth, a.scrollWidth, a.clientWidth),
              r = M(
                t.scrollHeight,
                t.clientHeight,
                a.scrollHeight,
                a.clientHeight
              ),
              i = -o.scrollLeft + eB(e),
              s = -o.scrollTop;
            return (
              'rtl' === ej(a).direction &&
                (i += M(t.clientWidth, a.clientWidth) - n),
              { width: n, height: r, x: i, y: s }
            );
          })(ep(e));
        else if (ed(t))
          a = (function (e, t) {
            let o = eP(e, !0, 'fixed' === t),
              a = o.top + e.clientTop,
              n = o.left + e.clientLeft,
              r = ef(e) ? eO(e) : $(1),
              i = e.clientWidth * r.x;
            return {
              width: i,
              height: e.clientHeight * r.y,
              x: n * r.x,
              y: a * r.y,
            };
          })(t, o);
        else {
          let o = eI(e);
          a = { x: t.x - o.x, y: t.y - o.y, width: t.width, height: t.height };
        }
        return et(a);
      }
      function eL(e) {
        return 'static' === ej(e).position;
      }
      function eN(e, t) {
        if (!ef(e) || 'fixed' === ej(e).position) return null;
        if (t) return t(e);
        let o = e.offsetParent;
        return ep(e) === o && (o = o.ownerDocument.body), o;
      }
      function eD(e, t) {
        let o = ec(e);
        if (ey(e)) return o;
        if (!ef(e)) {
          let t = ez(e);
          for (; t && !ew(t); ) {
            if (ed(t) && !eL(t)) return t;
            t = ez(t);
          }
          return o;
        }
        let a = eN(e, t);
        for (; a && ['table', 'td', 'th'].includes(eu(a)) && eL(a); )
          a = eN(a, t);
        return a && ew(a) && eL(a) && !ek(a)
          ? o
          : a ||
              (function (e) {
                let t = ez(e);
                for (; ef(t) && !ew(t); ) {
                  if (ek(t)) return t;
                  if (ey(t)) break;
                  t = ez(t);
                }
                return null;
              })(e) ||
              o;
      }
      let eU = async function (e) {
          let t = this.getOffsetParent || eD,
            o = this.getDimensions,
            a = await o(e.floating);
          return {
            reference: (function (e, t, o) {
              let a = ef(t),
                n = ep(t),
                r = 'fixed' === o,
                i = eP(e, !0, r, t),
                s = { scrollLeft: 0, scrollTop: 0 },
                l = $(0);
              if (a || (!a && !r)) {
                if ((('body' !== eu(t) || eg(n)) && (s = ev(t)), a)) {
                  let e = eP(t, !0, r, t);
                  (l.x = e.x + t.clientLeft), (l.y = e.y + t.clientTop);
                } else n && (l.x = eB(n));
              }
              let u = !n || a || r ? $(0) : eR(n, s);
              return {
                x: i.left + s.scrollLeft - l.x - u.x,
                y: i.top + s.scrollTop - l.y - u.y,
                width: i.width,
                height: i.height,
              };
            })(e.reference, await t(e.floating), e.strategy),
            floating: { x: 0, y: 0, width: a.width, height: a.height },
          };
        },
        eF = {
          convertOffsetParentRelativeRectToViewportRelativeRect: function (e) {
            let { elements: t, rect: o, offsetParent: a, strategy: n } = e,
              r = 'fixed' === n,
              i = ep(a),
              s = !!t && ey(t.floating);
            if (a === i || (s && r)) return o;
            let l = { scrollLeft: 0, scrollTop: 0 },
              u = $(1),
              c = $(0),
              p = ef(a);
            if (
              (p || (!p && !r)) &&
              (('body' !== eu(a) || eg(i)) && (l = ev(a)), ef(a))
            ) {
              let e = eP(a);
              (u = eO(a)),
                (c.x = e.x + a.clientLeft),
                (c.y = e.y + a.clientTop);
            }
            let m = !i || p || r ? $(0) : eR(i, l, !0);
            return {
              width: o.width * u.x,
              height: o.height * u.y,
              x: o.x * u.x - l.scrollLeft * u.x + c.x + m.x,
              y: o.y * u.y - l.scrollTop * u.y + c.y + m.y,
            };
          },
          getDocumentElement: ep,
          getClippingRect: function (e) {
            let { element: t, boundary: o, rootBoundary: a, strategy: n } = e,
              r = [
                ...('clippingAncestors' === o
                  ? ey(t)
                    ? []
                    : (function (e, t) {
                        let o = t.get(e);
                        if (o) return o;
                        let a = ex(e, [], !1).filter(
                            (e) => ed(e) && 'body' !== eu(e)
                          ),
                          n = null,
                          r = 'fixed' === ej(e).position,
                          i = r ? ez(e) : e;
                        for (; ed(i) && !ew(i); ) {
                          let t = ej(i),
                            o = ek(i);
                          o || 'fixed' !== t.position || (n = null),
                            (
                              r
                                ? !o && !n
                                : (!o &&
                                    'static' === t.position &&
                                    !!n &&
                                    ['absolute', 'fixed'].includes(
                                      n.position
                                    )) ||
                                  (eg(i) &&
                                    !o &&
                                    (function e(t, o) {
                                      let a = ez(t);
                                      return (
                                        !(a === o || !ed(a) || ew(a)) &&
                                        ('fixed' === ej(a).position || e(a, o))
                                      );
                                    })(e, i))
                            )
                              ? (a = a.filter((e) => e !== i))
                              : (n = t),
                            (i = ez(i));
                        }
                        return t.set(e, a), a;
                      })(t, this._c)
                  : [].concat(o)),
                a,
              ],
              i = r[0],
              s = r.reduce(
                (e, o) => {
                  let a = eT(t, o, n);
                  return (
                    (e.top = M(a.top, e.top)),
                    (e.right = F(a.right, e.right)),
                    (e.bottom = F(a.bottom, e.bottom)),
                    (e.left = M(a.left, e.left)),
                    e
                  );
                },
                eT(t, i, n)
              );
            return {
              width: s.right - s.left,
              height: s.bottom - s.top,
              x: s.left,
              y: s.top,
            };
          },
          getOffsetParent: eD,
          getElementRects: eU,
          getClientRects: function (e) {
            return Array.from(e.getClientRects());
          },
          getDimensions: function (e) {
            let { width: t, height: o } = eA(e);
            return { width: t, height: o };
          },
          getScale: eO,
          isElement: ed,
          isRTL: function (e) {
            return 'rtl' === ej(e).direction;
          },
        };
      function eM(e, t) {
        return (
          e.x === t.x &&
          e.y === t.y &&
          e.width === t.width &&
          e.height === t.height
        );
      }
      let e_ = (e) => ({
          name: 'arrow',
          options: e,
          async fn(t) {
            let {
                x: o,
                y: a,
                placement: n,
                rects: r,
                platform: i,
                elements: s,
                middlewareData: l,
              } = t,
              { element: u, padding: c = 0 } = W(e, t) || {};
            if (null == u) return {};
            let p = ee(c),
              m = { x: o, y: a },
              d = Z(J(n)),
              f = Y(d),
              h = await i.getDimensions(u),
              g = 'y' === d,
              y = g ? 'clientHeight' : 'clientWidth',
              k = r.reference[f] + r.reference[d] - m[d] - r.floating[f],
              b = m[d] - r.reference[d],
              w = await (null == i.getOffsetParent
                ? void 0
                : i.getOffsetParent(u)),
              j = w ? w[y] : 0;
            (j && (await (null == i.isElement ? void 0 : i.isElement(w)))) ||
              (j = s.floating[y] || r.floating[f]);
            let v = j / 2 - h[f] / 2 - 1,
              z = F(p[g ? 'top' : 'left'], v),
              x = F(p[g ? 'bottom' : 'right'], v),
              E = j - h[f] - x,
              A = j / 2 - h[f] / 2 + (k / 2 - b / 2),
              S = M(z, F(A, E)),
              O =
                !l.arrow &&
                null != K(n) &&
                A !== S &&
                r.reference[f] / 2 - (A < z ? z : x) - h[f] / 2 < 0,
              C = O ? (A < z ? A - z : A - E) : 0;
            return {
              [d]: m[d] + C,
              data: {
                [d]: S,
                centerOffset: A - S - C,
                ...(O && { alignmentOffset: C }),
              },
              reset: O,
            };
          },
        }),
        eq = (e, t, o) => {
          let a = new Map(),
            n = { platform: eF, ...o },
            r = { ...n.platform, _c: a };
          return ea(e, t, { ...n, platform: r });
        };
      var e$ = 'undefined' != typeof document ? i.useLayoutEffect : i.useEffect;
      function eH(e, t) {
        let o, a, n;
        if (e === t) return !0;
        if (typeof e != typeof t) return !1;
        if ('function' == typeof e && e.toString() === t.toString()) return !0;
        if (e && t && 'object' == typeof e) {
          if (Array.isArray(e)) {
            if ((o = e.length) !== t.length) return !1;
            for (a = o; 0 != a--; ) if (!eH(e[a], t[a])) return !1;
            return !0;
          }
          if ((o = (n = Object.keys(e)).length) !== Object.keys(t).length)
            return !1;
          for (a = o; 0 != a--; )
            if (!{}.hasOwnProperty.call(t, n[a])) return !1;
          for (a = o; 0 != a--; ) {
            let o = n[a];
            if (('_owner' !== o || !e.$$typeof) && !eH(e[o], t[o])) return !1;
          }
          return !0;
        }
        return e != e && t != t;
      }
      function eV(e) {
        return 'undefined' == typeof window
          ? 1
          : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
      }
      function eW(e, t) {
        let o = eV(e);
        return Math.round(t * o) / o;
      }
      function eG(e) {
        let t = i.useRef(e);
        return (
          e$(() => {
            t.current = e;
          }),
          t
        );
      }
      let eK = (e) => ({
          name: 'arrow',
          options: e,
          fn(t) {
            let { element: o, padding: a } = 'function' == typeof e ? e(t) : e;
            return o && {}.hasOwnProperty.call(o, 'current')
              ? null != o.current
                ? e_({ element: o.current, padding: a }).fn(t)
                : {}
              : o
                ? e_({ element: o, padding: a }).fn(t)
                : {};
          },
        }),
        eZ = (e, t) => ({
          ...(function (e) {
            return (
              void 0 === e && (e = 0),
              {
                name: 'offset',
                options: e,
                async fn(t) {
                  var o, a;
                  let { x: n, y: r, placement: i, middlewareData: s } = t,
                    l = await es(t, e);
                  return i ===
                    (null == (o = s.offset) ? void 0 : o.placement) &&
                    null != (a = s.arrow) &&
                    a.alignmentOffset
                    ? {}
                    : { x: n + l.x, y: r + l.y, data: { ...l, placement: i } };
                },
              }
            );
          })(e),
          options: [e, t],
        }),
        eY = (e, t) => ({
          ...(function (e) {
            return (
              void 0 === e && (e = {}),
              {
                name: 'shift',
                options: e,
                async fn(t) {
                  let { x: o, y: a, placement: n } = t,
                    {
                      mainAxis: r = !0,
                      crossAxis: i = !1,
                      limiter: s = {
                        fn: (e) => {
                          let { x: t, y: o } = e;
                          return { x: t, y: o };
                        },
                      },
                      ...l
                    } = W(e, t),
                    u = { x: o, y: a },
                    c = await en(t, l),
                    p = J(G(n)),
                    m = Z(p),
                    d = u[m],
                    f = u[p];
                  if (r) {
                    let e = 'y' === m ? 'top' : 'left',
                      t = 'y' === m ? 'bottom' : 'right',
                      o = d + c[e],
                      a = d - c[t];
                    d = M(o, F(d, a));
                  }
                  if (i) {
                    let e = 'y' === p ? 'top' : 'left',
                      t = 'y' === p ? 'bottom' : 'right',
                      o = f + c[e],
                      a = f - c[t];
                    f = M(o, F(f, a));
                  }
                  let h = s.fn({ ...t, [m]: d, [p]: f });
                  return {
                    ...h,
                    data: {
                      x: h.x - o,
                      y: h.y - a,
                      enabled: { [m]: r, [p]: i },
                    },
                  };
                },
              }
            );
          })(e),
          options: [e, t],
        }),
        eJ = (e, t) => ({
          ...(function (e) {
            return (
              void 0 === e && (e = {}),
              {
                options: e,
                fn(t) {
                  let {
                      x: o,
                      y: a,
                      placement: n,
                      rects: r,
                      middlewareData: i,
                    } = t,
                    {
                      offset: s = 0,
                      mainAxis: l = !0,
                      crossAxis: u = !0,
                    } = W(e, t),
                    c = { x: o, y: a },
                    p = J(n),
                    m = Z(p),
                    d = c[m],
                    f = c[p],
                    h = W(s, t),
                    g =
                      'number' == typeof h
                        ? { mainAxis: h, crossAxis: 0 }
                        : { mainAxis: 0, crossAxis: 0, ...h };
                  if (l) {
                    let e = 'y' === m ? 'height' : 'width',
                      t = r.reference[m] - r.floating[e] + g.mainAxis,
                      o = r.reference[m] + r.reference[e] - g.mainAxis;
                    d < t ? (d = t) : d > o && (d = o);
                  }
                  if (u) {
                    var y, k;
                    let e = 'y' === m ? 'width' : 'height',
                      t = ['top', 'left'].includes(G(n)),
                      o =
                        r.reference[p] -
                        r.floating[e] +
                        ((t && (null == (y = i.offset) ? void 0 : y[p])) || 0) +
                        (t ? 0 : g.crossAxis),
                      a =
                        r.reference[p] +
                        r.reference[e] +
                        (t
                          ? 0
                          : (null == (k = i.offset) ? void 0 : k[p]) || 0) -
                        (t ? g.crossAxis : 0);
                    f < o ? (f = o) : f > a && (f = a);
                  }
                  return { [m]: d, [p]: f };
                },
              }
            );
          })(e),
          options: [e, t],
        }),
        eX = (e, t) => ({
          ...(function (e) {
            return (
              void 0 === e && (e = {}),
              {
                name: 'flip',
                options: e,
                async fn(t) {
                  var o, a, n, r, i;
                  let {
                      placement: s,
                      middlewareData: l,
                      rects: u,
                      initialPlacement: c,
                      platform: p,
                      elements: m,
                    } = t,
                    {
                      mainAxis: d = !0,
                      crossAxis: f = !0,
                      fallbackPlacements: h,
                      fallbackStrategy: g = 'bestFit',
                      fallbackAxisSideDirection: y = 'none',
                      flipAlignment: k = !0,
                      ...b
                    } = W(e, t);
                  if (null != (o = l.arrow) && o.alignmentOffset) return {};
                  let w = G(s),
                    j = J(c),
                    v = G(c) === c,
                    z = await (null == p.isRTL ? void 0 : p.isRTL(m.floating)),
                    x =
                      h ||
                      (v || !k
                        ? [Q(c)]
                        : (function (e) {
                            let t = Q(e);
                            return [X(e), t, X(t)];
                          })(c)),
                    E = 'none' !== y;
                  !h &&
                    E &&
                    x.push(
                      ...(function (e, t, o, a) {
                        let n = K(e),
                          r = (function (e, t, o) {
                            let a = ['left', 'right'],
                              n = ['right', 'left'];
                            switch (e) {
                              case 'top':
                              case 'bottom':
                                if (o) return t ? n : a;
                                return t ? a : n;
                              case 'left':
                              case 'right':
                                return t
                                  ? ['top', 'bottom']
                                  : ['bottom', 'top'];
                              default:
                                return [];
                            }
                          })(G(e), 'start' === o, a);
                        return (
                          n &&
                            ((r = r.map((e) => e + '-' + n)),
                            t && (r = r.concat(r.map(X)))),
                          r
                        );
                      })(c, k, y, z)
                    );
                  let A = [c, ...x],
                    S = await en(t, b),
                    O = [],
                    C = (null == (a = l.flip) ? void 0 : a.overflows) || [];
                  if ((d && O.push(S[w]), f)) {
                    let e = (function (e, t, o) {
                      void 0 === o && (o = !1);
                      let a = K(e),
                        n = Z(J(e)),
                        r = Y(n),
                        i =
                          'x' === n
                            ? a === (o ? 'end' : 'start')
                              ? 'right'
                              : 'left'
                            : 'start' === a
                              ? 'bottom'
                              : 'top';
                      return (
                        t.reference[r] > t.floating[r] && (i = Q(i)), [i, Q(i)]
                      );
                    })(s, u, z);
                    O.push(S[e[0]], S[e[1]]);
                  }
                  if (
                    ((C = [...C, { placement: s, overflows: O }]),
                    !O.every((e) => e <= 0))
                  ) {
                    let e =
                        ((null == (n = l.flip) ? void 0 : n.index) || 0) + 1,
                      t = A[e];
                    if (t)
                      return {
                        data: { index: e, overflows: C },
                        reset: { placement: t },
                      };
                    let o =
                      null ==
                      (r = C.filter((e) => e.overflows[0] <= 0).sort(
                        (e, t) => e.overflows[1] - t.overflows[1]
                      )[0])
                        ? void 0
                        : r.placement;
                    if (!o)
                      switch (g) {
                        case 'bestFit': {
                          let e =
                            null ==
                            (i = C.filter((e) => {
                              if (E) {
                                let t = J(e.placement);
                                return t === j || 'y' === t;
                              }
                              return !0;
                            })
                              .map((e) => [
                                e.placement,
                                e.overflows
                                  .filter((e) => e > 0)
                                  .reduce((e, t) => e + t, 0),
                              ])
                              .sort((e, t) => e[1] - t[1])[0])
                              ? void 0
                              : i[0];
                          e && (o = e);
                          break;
                        }
                        case 'initialPlacement':
                          o = c;
                      }
                    if (s !== o) return { reset: { placement: o } };
                  }
                  return {};
                },
              }
            );
          })(e),
          options: [e, t],
        }),
        eQ = (e, t) => ({
          ...(function (e) {
            return (
              void 0 === e && (e = {}),
              {
                name: 'size',
                options: e,
                async fn(t) {
                  var o, a;
                  let n, r;
                  let { placement: i, rects: s, platform: l, elements: u } = t,
                    { apply: c = () => {}, ...p } = W(e, t),
                    m = await en(t, p),
                    d = G(i),
                    f = K(i),
                    h = 'y' === J(i),
                    { width: g, height: y } = s.floating;
                  'top' === d || 'bottom' === d
                    ? ((n = d),
                      (r =
                        f ===
                        ((await (null == l.isRTL
                          ? void 0
                          : l.isRTL(u.floating)))
                          ? 'start'
                          : 'end')
                          ? 'left'
                          : 'right'))
                    : ((r = d), (n = 'end' === f ? 'top' : 'bottom'));
                  let k = y - m.top - m.bottom,
                    b = g - m.left - m.right,
                    w = F(y - m[n], k),
                    j = F(g - m[r], b),
                    v = !t.middlewareData.shift,
                    z = w,
                    x = j;
                  if (
                    (null != (o = t.middlewareData.shift) &&
                      o.enabled.x &&
                      (x = b),
                    null != (a = t.middlewareData.shift) &&
                      a.enabled.y &&
                      (z = k),
                    v && !f)
                  ) {
                    let e = M(m.left, 0),
                      t = M(m.right, 0),
                      o = M(m.top, 0),
                      a = M(m.bottom, 0);
                    h
                      ? (x =
                          g -
                          2 * (0 !== e || 0 !== t ? e + t : M(m.left, m.right)))
                      : (z =
                          y -
                          2 *
                            (0 !== o || 0 !== a ? o + a : M(m.top, m.bottom)));
                  }
                  await c({ ...t, availableWidth: x, availableHeight: z });
                  let E = await l.getDimensions(u.floating);
                  return g !== E.width || y !== E.height
                    ? { reset: { rects: !0 } }
                    : {};
                },
              }
            );
          })(e),
          options: [e, t],
        }),
        e0 = (e, t) => ({
          ...(function (e) {
            return (
              void 0 === e && (e = {}),
              {
                name: 'hide',
                options: e,
                async fn(t) {
                  let { rects: o } = t,
                    { strategy: a = 'referenceHidden', ...n } = W(e, t);
                  switch (a) {
                    case 'referenceHidden': {
                      let e = er(
                        await en(t, { ...n, elementContext: 'reference' }),
                        o.reference
                      );
                      return {
                        data: {
                          referenceHiddenOffsets: e,
                          referenceHidden: ei(e),
                        },
                      };
                    }
                    case 'escaped': {
                      let e = er(
                        await en(t, { ...n, altBoundary: !0 }),
                        o.floating
                      );
                      return { data: { escapedOffsets: e, escaped: ei(e) } };
                    }
                    default:
                      return {};
                  }
                },
              }
            );
          })(e),
          options: [e, t],
        }),
        e1 = (e, t) => ({ ...eK(e), options: [e, t] });
      var e2 = i.forwardRef((e, t) => {
        let { children: o, width: a = 10, height: n = 5, ...r } = e;
        return (0, p.jsx)(g.svg, {
          ...r,
          ref: t,
          width: a,
          height: n,
          viewBox: '0 0 30 10',
          preserveAspectRatio: 'none',
          children: e.asChild
            ? o
            : (0, p.jsx)('polygon', { points: '0,0 30,0 15,10' }),
        });
      });
      e2.displayName = 'Arrow';
      var e3 = 'Popper',
        [e6, e5] = m(e3),
        [e4, e8] = e6(e3),
        e9 = (e) => {
          let { __scopePopper: t, children: o } = e,
            [a, n] = i.useState(null);
          return (0, p.jsx)(e4, {
            scope: t,
            anchor: a,
            onAnchorChange: n,
            children: o,
          });
        };
      e9.displayName = e3;
      var e7 = 'PopperAnchor',
        te = i.forwardRef((e, t) => {
          let { __scopePopper: o, virtualRef: a, ...n } = e,
            r = e8(e7, o),
            s = i.useRef(null),
            l = (0, d.s)(t, s);
          return (
            i.useEffect(() => {
              r.onAnchorChange((null == a ? void 0 : a.current) || s.current);
            }),
            a ? null : (0, p.jsx)(g.div, { ...n, ref: l })
          );
        });
      te.displayName = e7;
      var tt = 'PopperContent',
        [to, ta] = e6(tt),
        tn = i.forwardRef((e, t) => {
          var o, a, n, r, s, u, c, m;
          let {
              __scopePopper: f,
              side: h = 'bottom',
              sideOffset: k = 0,
              align: b = 'center',
              alignOffset: w = 0,
              arrowPadding: j = 0,
              avoidCollisions: v = !0,
              collisionBoundary: z = [],
              collisionPadding: x = 0,
              sticky: E = 'partial',
              hideWhenDetached: A = !1,
              updatePositionStrategy: S = 'optimized',
              onPlaced: O,
              ...C
            } = e,
            I = e8(tt, f),
            [P, B] = i.useState(null),
            R = (0, d.s)(t, (e) => B(e)),
            [L, N] = i.useState(null),
            D = (function (e) {
              let [t, o] = i.useState(void 0);
              return (
                T(() => {
                  if (e) {
                    o({ width: e.offsetWidth, height: e.offsetHeight });
                    let t = new ResizeObserver((t) => {
                      let a, n;
                      if (!Array.isArray(t) || !t.length) return;
                      let r = t[0];
                      if ('borderBoxSize' in r) {
                        let e = r.borderBoxSize,
                          t = Array.isArray(e) ? e[0] : e;
                        (a = t.inlineSize), (n = t.blockSize);
                      } else (a = e.offsetWidth), (n = e.offsetHeight);
                      o({ width: a, height: n });
                    });
                    return (
                      t.observe(e, { box: 'border-box' }), () => t.unobserve(e)
                    );
                  }
                  o(void 0);
                }, [e]),
                t
              );
            })(L),
            U =
              null !== (c = null == D ? void 0 : D.width) && void 0 !== c
                ? c
                : 0,
            _ =
              null !== (m = null == D ? void 0 : D.height) && void 0 !== m
                ? m
                : 0,
            $ =
              'number' == typeof x
                ? x
                : { top: 0, right: 0, bottom: 0, left: 0, ...x },
            H = Array.isArray(z) ? z : [z],
            V = H.length > 0,
            W = { padding: $, boundary: H.filter(tl), altBoundary: V },
            {
              refs: G,
              floatingStyles: K,
              placement: Z,
              isPositioned: Y,
              middlewareData: J,
            } = (function (e) {
              void 0 === e && (e = {});
              let {
                  placement: t = 'bottom',
                  strategy: o = 'absolute',
                  middleware: a = [],
                  platform: n,
                  elements: { reference: r, floating: s } = {},
                  transform: u = !0,
                  whileElementsMounted: c,
                  open: p,
                } = e,
                [m, d] = i.useState({
                  x: 0,
                  y: 0,
                  strategy: o,
                  placement: t,
                  middlewareData: {},
                  isPositioned: !1,
                }),
                [f, h] = i.useState(a);
              eH(f, a) || h(a);
              let [g, y] = i.useState(null),
                [k, b] = i.useState(null),
                w = i.useCallback((e) => {
                  e !== x.current && ((x.current = e), y(e));
                }, []),
                j = i.useCallback((e) => {
                  e !== E.current && ((E.current = e), b(e));
                }, []),
                v = r || g,
                z = s || k,
                x = i.useRef(null),
                E = i.useRef(null),
                A = i.useRef(m),
                S = null != c,
                O = eG(c),
                C = eG(n),
                I = eG(p),
                P = i.useCallback(() => {
                  if (!x.current || !E.current) return;
                  let e = { placement: t, strategy: o, middleware: f };
                  C.current && (e.platform = C.current),
                    eq(x.current, E.current, e).then((e) => {
                      let t = { ...e, isPositioned: !1 !== I.current };
                      B.current &&
                        !eH(A.current, t) &&
                        ((A.current = t),
                        l.flushSync(() => {
                          d(t);
                        }));
                    });
                }, [f, t, o, C, I]);
              e$(() => {
                !1 === p &&
                  A.current.isPositioned &&
                  ((A.current.isPositioned = !1),
                  d((e) => ({ ...e, isPositioned: !1 })));
              }, [p]);
              let B = i.useRef(!1);
              e$(
                () => (
                  (B.current = !0),
                  () => {
                    B.current = !1;
                  }
                ),
                []
              ),
                e$(() => {
                  if ((v && (x.current = v), z && (E.current = z), v && z)) {
                    if (O.current) return O.current(v, z, P);
                    P();
                  }
                }, [v, z, P, O, S]);
              let R = i.useMemo(
                  () => ({
                    reference: x,
                    floating: E,
                    setReference: w,
                    setFloating: j,
                  }),
                  [w, j]
                ),
                T = i.useMemo(() => ({ reference: v, floating: z }), [v, z]),
                L = i.useMemo(() => {
                  let e = { position: o, left: 0, top: 0 };
                  if (!T.floating) return e;
                  let t = eW(T.floating, m.x),
                    a = eW(T.floating, m.y);
                  return u
                    ? {
                        ...e,
                        transform: 'translate(' + t + 'px, ' + a + 'px)',
                        ...(eV(T.floating) >= 1.5 && {
                          willChange: 'transform',
                        }),
                      }
                    : { position: o, left: t, top: a };
                }, [o, u, T.floating, m.x, m.y]);
              return i.useMemo(
                () => ({
                  ...m,
                  update: P,
                  refs: R,
                  elements: T,
                  floatingStyles: L,
                }),
                [m, P, R, T, L]
              );
            })({
              strategy: 'fixed',
              placement: h + ('center' !== b ? '-' + b : ''),
              whileElementsMounted: function () {
                for (var e = arguments.length, t = Array(e), o = 0; o < e; o++)
                  t[o] = arguments[o];
                return (function (e, t, o, a) {
                  let n;
                  void 0 === a && (a = {});
                  let {
                      ancestorScroll: r = !0,
                      ancestorResize: i = !0,
                      elementResize: s = 'function' == typeof ResizeObserver,
                      layoutShift: l = 'function' ==
                        typeof IntersectionObserver,
                      animationFrame: u = !1,
                    } = a,
                    c = eS(e),
                    p = r || i ? [...(c ? ex(c) : []), ...ex(t)] : [];
                  p.forEach((e) => {
                    r && e.addEventListener('scroll', o, { passive: !0 }),
                      i && e.addEventListener('resize', o);
                  });
                  let m =
                      c && l
                        ? (function (e, t) {
                            let o,
                              a = null,
                              n = ep(e);
                            function r() {
                              var e;
                              clearTimeout(o),
                                null == (e = a) || e.disconnect(),
                                (a = null);
                            }
                            return (
                              !(function i(s, l) {
                                void 0 === s && (s = !1),
                                  void 0 === l && (l = 1),
                                  r();
                                let u = e.getBoundingClientRect(),
                                  { left: c, top: p, width: m, height: d } = u;
                                if ((s || t(), !m || !d)) return;
                                let f = q(p),
                                  h = q(n.clientWidth - (c + m)),
                                  g = {
                                    rootMargin:
                                      -f +
                                      'px ' +
                                      -h +
                                      'px ' +
                                      -q(n.clientHeight - (p + d)) +
                                      'px ' +
                                      -q(c) +
                                      'px',
                                    threshold: M(0, F(1, l)) || 1,
                                  },
                                  y = !0;
                                function k(t) {
                                  let a = t[0].intersectionRatio;
                                  if (a !== l) {
                                    if (!y) return i();
                                    a
                                      ? i(!1, a)
                                      : (o = setTimeout(() => {
                                          i(!1, 1e-7);
                                        }, 1e3));
                                  }
                                  1 !== a ||
                                    eM(u, e.getBoundingClientRect()) ||
                                    i(),
                                    (y = !1);
                                }
                                try {
                                  a = new IntersectionObserver(k, {
                                    ...g,
                                    root: n.ownerDocument,
                                  });
                                } catch (e) {
                                  a = new IntersectionObserver(k, g);
                                }
                                a.observe(e);
                              })(!0),
                              r
                            );
                          })(c, o)
                        : null,
                    d = -1,
                    f = null;
                  s &&
                    ((f = new ResizeObserver((e) => {
                      let [a] = e;
                      a &&
                        a.target === c &&
                        f &&
                        (f.unobserve(t),
                        cancelAnimationFrame(d),
                        (d = requestAnimationFrame(() => {
                          var e;
                          null == (e = f) || e.observe(t);
                        }))),
                        o();
                    })),
                    c && !u && f.observe(c),
                    f.observe(t));
                  let h = u ? eP(e) : null;
                  return (
                    u &&
                      (function t() {
                        let a = eP(e);
                        h && !eM(h, a) && o(),
                          (h = a),
                          (n = requestAnimationFrame(t));
                      })(),
                    o(),
                    () => {
                      var e;
                      p.forEach((e) => {
                        r && e.removeEventListener('scroll', o),
                          i && e.removeEventListener('resize', o);
                      }),
                        null == m || m(),
                        null == (e = f) || e.disconnect(),
                        (f = null),
                        u && cancelAnimationFrame(n);
                    }
                  );
                })(...t, { animationFrame: 'always' === S });
              },
              elements: { reference: I.anchor },
              middleware: [
                eZ({ mainAxis: k + _, alignmentAxis: w }),
                v &&
                  eY({
                    mainAxis: !0,
                    crossAxis: !1,
                    limiter: 'partial' === E ? eJ() : void 0,
                    ...W,
                  }),
                v && eX({ ...W }),
                eQ({
                  ...W,
                  apply: (e) => {
                    let {
                        elements: t,
                        rects: o,
                        availableWidth: a,
                        availableHeight: n,
                      } = e,
                      { width: r, height: i } = o.reference,
                      s = t.floating.style;
                    s.setProperty(
                      '--radix-popper-available-width',
                      ''.concat(a, 'px')
                    ),
                      s.setProperty(
                        '--radix-popper-available-height',
                        ''.concat(n, 'px')
                      ),
                      s.setProperty(
                        '--radix-popper-anchor-width',
                        ''.concat(r, 'px')
                      ),
                      s.setProperty(
                        '--radix-popper-anchor-height',
                        ''.concat(i, 'px')
                      );
                  },
                }),
                L && e1({ element: L, padding: j }),
                tu({ arrowWidth: U, arrowHeight: _ }),
                A && e0({ strategy: 'referenceHidden', ...W }),
              ],
            }),
            [X, Q] = tc(Z),
            ee = y(O);
          T(() => {
            Y && (null == ee || ee());
          }, [Y, ee]);
          let et = null === (o = J.arrow) || void 0 === o ? void 0 : o.x,
            eo = null === (a = J.arrow) || void 0 === a ? void 0 : a.y,
            ea =
              (null === (n = J.arrow) || void 0 === n
                ? void 0
                : n.centerOffset) !== 0,
            [en, er] = i.useState();
          return (
            T(() => {
              P && er(window.getComputedStyle(P).zIndex);
            }, [P]),
            (0, p.jsx)('div', {
              ref: G.setFloating,
              'data-radix-popper-content-wrapper': '',
              style: {
                ...K,
                transform: Y ? K.transform : 'translate(0, -200%)',
                minWidth: 'max-content',
                zIndex: en,
                '--radix-popper-transform-origin': [
                  null === (r = J.transformOrigin) || void 0 === r
                    ? void 0
                    : r.x,
                  null === (s = J.transformOrigin) || void 0 === s
                    ? void 0
                    : s.y,
                ].join(' '),
                ...((null === (u = J.hide) || void 0 === u
                  ? void 0
                  : u.referenceHidden) && {
                  visibility: 'hidden',
                  pointerEvents: 'none',
                }),
              },
              dir: e.dir,
              children: (0, p.jsx)(to, {
                scope: f,
                placedSide: X,
                onArrowChange: N,
                arrowX: et,
                arrowY: eo,
                shouldHideArrow: ea,
                children: (0, p.jsx)(g.div, {
                  'data-side': X,
                  'data-align': Q,
                  ...C,
                  ref: R,
                  style: { ...C.style, animation: Y ? void 0 : 'none' },
                }),
              }),
            })
          );
        });
      tn.displayName = tt;
      var tr = 'PopperArrow',
        ti = { top: 'bottom', right: 'left', bottom: 'top', left: 'right' },
        ts = i.forwardRef(function (e, t) {
          let { __scopePopper: o, ...a } = e,
            n = ta(tr, o),
            r = ti[n.placedSide];
          return (0, p.jsx)('span', {
            ref: n.onArrowChange,
            style: {
              position: 'absolute',
              left: n.arrowX,
              top: n.arrowY,
              [r]: 0,
              transformOrigin: {
                top: '',
                right: '0 0',
                bottom: 'center 0',
                left: '100% 0',
              }[n.placedSide],
              transform: {
                top: 'translateY(100%)',
                right: 'translateY(50%) rotate(90deg) translateX(-50%)',
                bottom: 'rotate(180deg)',
                left: 'translateY(50%) rotate(-90deg) translateX(50%)',
              }[n.placedSide],
              visibility: n.shouldHideArrow ? 'hidden' : void 0,
            },
            children: (0, p.jsx)(e2, {
              ...a,
              ref: t,
              style: { ...a.style, display: 'block' },
            }),
          });
        });
      function tl(e) {
        return null !== e;
      }
      ts.displayName = tr;
      var tu = (e) => ({
        name: 'transformOrigin',
        options: e,
        fn(t) {
          var o, a, n, r, i;
          let { placement: s, rects: l, middlewareData: u } = t,
            c =
              (null === (o = u.arrow) || void 0 === o
                ? void 0
                : o.centerOffset) !== 0,
            p = c ? 0 : e.arrowWidth,
            m = c ? 0 : e.arrowHeight,
            [d, f] = tc(s),
            h = { start: '0%', center: '50%', end: '100%' }[f],
            g =
              (null !==
                (r = null === (a = u.arrow) || void 0 === a ? void 0 : a.x) &&
              void 0 !== r
                ? r
                : 0) +
              p / 2,
            y =
              (null !==
                (i = null === (n = u.arrow) || void 0 === n ? void 0 : n.y) &&
              void 0 !== i
                ? i
                : 0) +
              m / 2,
            k = '',
            b = '';
          return (
            'bottom' === d
              ? ((k = c ? h : ''.concat(g, 'px')), (b = ''.concat(-m, 'px')))
              : 'top' === d
                ? ((k = c ? h : ''.concat(g, 'px')),
                  (b = ''.concat(l.floating.height + m, 'px')))
                : 'right' === d
                  ? ((k = ''.concat(-m, 'px')),
                    (b = c ? h : ''.concat(y, 'px')))
                  : 'left' === d &&
                    ((k = ''.concat(l.floating.width + m, 'px')),
                    (b = c ? h : ''.concat(y, 'px'))),
            { data: { x: k, y: b } }
          );
        },
      });
      function tc(e) {
        let [t, o = 'center'] = e.split('-');
        return [t, o];
      }
      var tp = i.forwardRef((e, t) => {
        var o, a;
        let { container: n, ...r } = e,
          [s, u] = i.useState(!1);
        T(() => u(!0), []);
        let c =
          n ||
          (s &&
            (null === (a = globalThis) || void 0 === a
              ? void 0
              : null === (o = a.document) || void 0 === o
                ? void 0
                : o.body));
        return c
          ? l.createPortal((0, p.jsx)(g.div, { ...r, ref: t }), c)
          : null;
      });
      function tm({ prop: e, defaultProp: t, onChange: o = () => {} }) {
        let [a, n] = (function ({ defaultProp: e, onChange: t }) {
            let o = i.useState(e),
              [a] = o,
              n = i.useRef(a),
              r = y(t);
            return (
              i.useEffect(() => {
                n.current !== a && (r(a), (n.current = a));
              }, [a, n, r]),
              o
            );
          })({ defaultProp: t, onChange: o }),
          r = void 0 !== e,
          s = r ? e : a,
          l = y(o);
        return [
          s,
          i.useCallback(
            (t) => {
              if (r) {
                let o = 'function' == typeof t ? t(e) : t;
                o !== e && l(o);
              } else n(t);
            },
            [r, e, n, l]
          ),
        ];
      }
      tp.displayName = 'Portal';
      var td = i.forwardRef((e, t) =>
        (0, p.jsx)(g.span, {
          ...e,
          ref: t,
          style: {
            position: 'absolute',
            border: 0,
            width: 1,
            height: 1,
            padding: 0,
            margin: -1,
            overflow: 'hidden',
            clip: 'rect(0, 0, 0, 0)',
            whiteSpace: 'nowrap',
            wordWrap: 'normal',
            ...e.style,
          },
        })
      );
      td.displayName = 'VisuallyHidden';
      var tf = new WeakMap(),
        th = new WeakMap(),
        tg = {},
        ty = 0,
        tk = function (e) {
          return e && (e.host || tk(e.parentNode));
        },
        tb = function (e, t, o, a) {
          var n = (Array.isArray(e) ? e : [e])
            .map(function (e) {
              if (t.contains(e)) return e;
              var o = tk(e);
              return o && t.contains(o)
                ? o
                : (console.error(
                    'aria-hidden',
                    e,
                    'in not contained inside',
                    t,
                    '. Doing nothing'
                  ),
                  null);
            })
            .filter(function (e) {
              return !!e;
            });
          tg[o] || (tg[o] = new WeakMap());
          var r = tg[o],
            i = [],
            s = new Set(),
            l = new Set(n),
            u = function (e) {
              !e || s.has(e) || (s.add(e), u(e.parentNode));
            };
          n.forEach(u);
          var c = function (e) {
            !e ||
              l.has(e) ||
              Array.prototype.forEach.call(e.children, function (e) {
                if (s.has(e)) c(e);
                else
                  try {
                    var t = e.getAttribute(a),
                      n = null !== t && 'false' !== t,
                      l = (tf.get(e) || 0) + 1,
                      u = (r.get(e) || 0) + 1;
                    tf.set(e, l),
                      r.set(e, u),
                      i.push(e),
                      1 === l && n && th.set(e, !0),
                      1 === u && e.setAttribute(o, 'true'),
                      n || e.setAttribute(a, 'true');
                  } catch (t) {
                    console.error('aria-hidden: cannot operate on ', e, t);
                  }
              });
          };
          return (
            c(t),
            s.clear(),
            ty++,
            function () {
              i.forEach(function (e) {
                var t = tf.get(e) - 1,
                  n = r.get(e) - 1;
                tf.set(e, t),
                  r.set(e, n),
                  t || (th.has(e) || e.removeAttribute(a), th.delete(e)),
                  n || e.removeAttribute(o);
              }),
                --ty ||
                  ((tf = new WeakMap()),
                  (tf = new WeakMap()),
                  (th = new WeakMap()),
                  (tg = {}));
            }
          );
        },
        tw = function (e, t, o) {
          void 0 === o && (o = 'data-aria-hidden');
          var a,
            n = Array.from(Array.isArray(e) ? e : [e]),
            r =
              t ||
              ((a = e),
              'undefined' == typeof document
                ? null
                : (Array.isArray(a) ? a[0] : a).ownerDocument.body);
          return r
            ? (n.push.apply(n, Array.from(r.querySelectorAll('[aria-live]'))),
              tb(n, r, o, 'aria-hidden'))
            : function () {
                return null;
              };
        },
        tj = function () {
          return (tj =
            Object.assign ||
            function (e) {
              for (var t, o = 1, a = arguments.length; o < a; o++)
                for (var n in (t = arguments[o]))
                  Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
              return e;
            }).apply(this, arguments);
        };
      function tv(e, t) {
        var o = {};
        for (var a in e)
          Object.prototype.hasOwnProperty.call(e, a) &&
            0 > t.indexOf(a) &&
            (o[a] = e[a]);
        if (null != e && 'function' == typeof Object.getOwnPropertySymbols)
          for (
            var n = 0, a = Object.getOwnPropertySymbols(e);
            n < a.length;
            n++
          )
            0 > t.indexOf(a[n]) &&
              Object.prototype.propertyIsEnumerable.call(e, a[n]) &&
              (o[a[n]] = e[a[n]]);
        return o;
      }
      Object.create, Object.create;
      var tz =
          ('function' == typeof SuppressedError && SuppressedError,
          'right-scroll-bar-position'),
        tx = 'width-before-scroll-bar';
      function tE(e, t) {
        return 'function' == typeof e ? e(t) : e && (e.current = t), e;
      }
      var tA = 'undefined' != typeof window ? i.useLayoutEffect : i.useEffect,
        tS = new WeakMap();
      function tO(e) {
        return e;
      }
      var tC = (function (e) {
          void 0 === e && (e = {});
          var t,
            o,
            a,
            n =
              (void 0 === t && (t = tO),
              (o = []),
              (a = !1),
              {
                read: function () {
                  if (a)
                    throw Error(
                      'Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.'
                    );
                  return o.length ? o[o.length - 1] : null;
                },
                useMedium: function (e) {
                  var n = t(e, a);
                  return (
                    o.push(n),
                    function () {
                      o = o.filter(function (e) {
                        return e !== n;
                      });
                    }
                  );
                },
                assignSyncMedium: function (e) {
                  for (a = !0; o.length; ) {
                    var t = o;
                    (o = []), t.forEach(e);
                  }
                  o = {
                    push: function (t) {
                      return e(t);
                    },
                    filter: function () {
                      return o;
                    },
                  };
                },
                assignMedium: function (e) {
                  a = !0;
                  var t = [];
                  if (o.length) {
                    var n = o;
                    (o = []), n.forEach(e), (t = o);
                  }
                  var r = function () {
                      var o = t;
                      (t = []), o.forEach(e);
                    },
                    i = function () {
                      return Promise.resolve().then(r);
                    };
                  i(),
                    (o = {
                      push: function (e) {
                        t.push(e), i();
                      },
                      filter: function (e) {
                        return (t = t.filter(e)), o;
                      },
                    });
                },
              });
          return (n.options = tj({ async: !0, ssr: !1 }, e)), n;
        })(),
        tI = function () {},
        tP = i.forwardRef(function (e, t) {
          var o,
            a,
            n,
            r,
            s = i.useRef(null),
            l = i.useState({
              onScrollCapture: tI,
              onWheelCapture: tI,
              onTouchMoveCapture: tI,
            }),
            u = l[0],
            c = l[1],
            p = e.forwardProps,
            m = e.children,
            d = e.className,
            f = e.removeScrollBar,
            h = e.enabled,
            g = e.shards,
            y = e.sideCar,
            k = e.noIsolation,
            b = e.inert,
            w = e.allowPinchZoom,
            j = e.as,
            v = e.gapMode,
            z = tv(e, [
              'forwardProps',
              'children',
              'className',
              'removeScrollBar',
              'enabled',
              'shards',
              'sideCar',
              'noIsolation',
              'inert',
              'allowPinchZoom',
              'as',
              'gapMode',
            ]),
            x =
              ((o = [s, t]),
              (a = function (e) {
                return o.forEach(function (t) {
                  return tE(t, e);
                });
              }),
              ((n = (0, i.useState)(function () {
                return {
                  value: null,
                  callback: a,
                  facade: {
                    get current() {
                      return n.value;
                    },
                    set current(value) {
                      var e = n.value;
                      e !== value && ((n.value = value), n.callback(value, e));
                    },
                  },
                };
              })[0]).callback = a),
              (r = n.facade),
              tA(
                function () {
                  var e = tS.get(r);
                  if (e) {
                    var t = new Set(e),
                      a = new Set(o),
                      n = r.current;
                    t.forEach(function (e) {
                      a.has(e) || tE(e, null);
                    }),
                      a.forEach(function (e) {
                        t.has(e) || tE(e, n);
                      });
                  }
                  tS.set(r, o);
                },
                [o]
              ),
              r),
            E = tj(tj({}, z), u);
          return i.createElement(
            i.Fragment,
            null,
            h &&
              i.createElement(y, {
                sideCar: tC,
                removeScrollBar: f,
                shards: g,
                noIsolation: k,
                inert: b,
                setCallbacks: c,
                allowPinchZoom: !!w,
                lockRef: s,
                gapMode: v,
              }),
            p
              ? i.cloneElement(i.Children.only(m), tj(tj({}, E), { ref: x }))
              : i.createElement(
                  void 0 === j ? 'div' : j,
                  tj({}, E, { className: d, ref: x }),
                  m
                )
          );
        });
      (tP.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 }),
        (tP.classNames = { fullWidth: tx, zeroRight: tz });
      var tB = function (e) {
        var t = e.sideCar,
          o = tv(e, ['sideCar']);
        if (!t)
          throw Error(
            'Sidecar: please provide `sideCar` property to import the right car'
          );
        var a = t.read();
        if (!a) throw Error('Sidecar medium not found');
        return i.createElement(a, tj({}, o));
      };
      tB.isSideCarExport = !0;
      var tR = function () {
          var e = 0,
            t = null;
          return {
            add: function (a) {
              if (
                0 == e &&
                (t = (function () {
                  if (!document) return null;
                  var e = document.createElement('style');
                  e.type = 'text/css';
                  var t = r || o.nc;
                  return t && e.setAttribute('nonce', t), e;
                })())
              ) {
                var n, i;
                (n = t).styleSheet
                  ? (n.styleSheet.cssText = a)
                  : n.appendChild(document.createTextNode(a)),
                  (i = t),
                  (
                    document.head || document.getElementsByTagName('head')[0]
                  ).appendChild(i);
              }
              e++;
            },
            remove: function () {
              --e ||
                !t ||
                (t.parentNode && t.parentNode.removeChild(t), (t = null));
            },
          };
        },
        tT = function () {
          var e = tR();
          return function (t, o) {
            i.useEffect(
              function () {
                return (
                  e.add(t),
                  function () {
                    e.remove();
                  }
                );
              },
              [t && o]
            );
          };
        },
        tL = function () {
          var e = tT();
          return function (t) {
            return e(t.styles, t.dynamic), null;
          };
        },
        tN = { left: 0, top: 0, right: 0, gap: 0 },
        tD = function (e) {
          return parseInt(e || '', 10) || 0;
        },
        tU = function (e) {
          var t = window.getComputedStyle(document.body),
            o = t['padding' === e ? 'paddingLeft' : 'marginLeft'],
            a = t['padding' === e ? 'paddingTop' : 'marginTop'],
            n = t['padding' === e ? 'paddingRight' : 'marginRight'];
          return [tD(o), tD(a), tD(n)];
        },
        tF = function (e) {
          if ((void 0 === e && (e = 'margin'), 'undefined' == typeof window))
            return tN;
          var t = tU(e),
            o = document.documentElement.clientWidth,
            a = window.innerWidth;
          return {
            left: t[0],
            top: t[1],
            right: t[2],
            gap: Math.max(0, a - o + t[2] - t[0]),
          };
        },
        tM = tL(),
        t_ = 'data-scroll-locked',
        tq = function (e, t, o, a) {
          var n = e.left,
            r = e.top,
            i = e.right,
            s = e.gap;
          return (
            void 0 === o && (o = 'margin'),
            '\n  .'
              .concat('with-scroll-bars-hidden', ' {\n   overflow: hidden ')
              .concat(a, ';\n   padding-right: ')
              .concat(s, 'px ')
              .concat(a, ';\n  }\n  body[')
              .concat(t_, '] {\n    overflow: hidden ')
              .concat(a, ';\n    overscroll-behavior: contain;\n    ')
              .concat(
                [
                  t && 'position: relative '.concat(a, ';'),
                  'margin' === o &&
                    '\n    padding-left: '
                      .concat(n, 'px;\n    padding-top: ')
                      .concat(r, 'px;\n    padding-right: ')
                      .concat(
                        i,
                        'px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: '
                      )
                      .concat(s, 'px ')
                      .concat(a, ';\n    '),
                  'padding' === o &&
                    'padding-right: '.concat(s, 'px ').concat(a, ';'),
                ]
                  .filter(Boolean)
                  .join(''),
                '\n  }\n  \n  .'
              )
              .concat(tz, ' {\n    right: ')
              .concat(s, 'px ')
              .concat(a, ';\n  }\n  \n  .')
              .concat(tx, ' {\n    margin-right: ')
              .concat(s, 'px ')
              .concat(a, ';\n  }\n  \n  .')
              .concat(tz, ' .')
              .concat(tz, ' {\n    right: 0 ')
              .concat(a, ';\n  }\n  \n  .')
              .concat(tx, ' .')
              .concat(tx, ' {\n    margin-right: 0 ')
              .concat(a, ';\n  }\n  \n  body[')
              .concat(t_, '] {\n    ')
              .concat('--removed-body-scroll-bar-size', ': ')
              .concat(s, 'px;\n  }\n')
          );
        },
        t$ = function () {
          var e = parseInt(document.body.getAttribute(t_) || '0', 10);
          return isFinite(e) ? e : 0;
        },
        tH = function () {
          i.useEffect(function () {
            return (
              document.body.setAttribute(t_, (t$() + 1).toString()),
              function () {
                var e = t$() - 1;
                e <= 0
                  ? document.body.removeAttribute(t_)
                  : document.body.setAttribute(t_, e.toString());
              }
            );
          }, []);
        },
        tV = function (e) {
          var t = e.noRelative,
            o = e.noImportant,
            a = e.gapMode,
            n = void 0 === a ? 'margin' : a;
          tH();
          var r = i.useMemo(
            function () {
              return tF(n);
            },
            [n]
          );
          return i.createElement(tM, {
            styles: tq(r, !t, n, o ? '' : '!important'),
          });
        },
        tW = !1;
      if ('undefined' != typeof window)
        try {
          var tG = Object.defineProperty({}, 'passive', {
            get: function () {
              return (tW = !0), !0;
            },
          });
          window.addEventListener('test', tG, tG),
            window.removeEventListener('test', tG, tG);
        } catch (e) {
          tW = !1;
        }
      var tK = !!tW && { passive: !1 },
        tZ = function (e, t) {
          if (!(e instanceof Element)) return !1;
          var o = window.getComputedStyle(e);
          return (
            'hidden' !== o[t] &&
            !(
              o.overflowY === o.overflowX &&
              'TEXTAREA' !== e.tagName &&
              'visible' === o[t]
            )
          );
        },
        tY = function (e, t) {
          var o = t.ownerDocument,
            a = t;
          do {
            if (
              ('undefined' != typeof ShadowRoot &&
                a instanceof ShadowRoot &&
                (a = a.host),
              tJ(e, a))
            ) {
              var n = tX(e, a);
              if (n[1] > n[2]) return !0;
            }
            a = a.parentNode;
          } while (a && a !== o.body);
          return !1;
        },
        tJ = function (e, t) {
          return 'v' === e ? tZ(t, 'overflowY') : tZ(t, 'overflowX');
        },
        tX = function (e, t) {
          return 'v' === e
            ? [t.scrollTop, t.scrollHeight, t.clientHeight]
            : [t.scrollLeft, t.scrollWidth, t.clientWidth];
        },
        tQ = function (e, t, o, a, n) {
          var r,
            i =
              ((r = window.getComputedStyle(t).direction),
              'h' === e && 'rtl' === r ? -1 : 1),
            s = i * a,
            l = o.target,
            u = t.contains(l),
            c = !1,
            p = s > 0,
            m = 0,
            d = 0;
          do {
            var f = tX(e, l),
              h = f[0],
              g = f[1] - f[2] - i * h;
            (h || g) && tJ(e, l) && ((m += g), (d += h)),
              l instanceof ShadowRoot ? (l = l.host) : (l = l.parentNode);
          } while (
            (!u && l !== document.body) ||
            (u && (t.contains(l) || t === l))
          );
          return (
            p && ((n && 1 > Math.abs(m)) || (!n && s > m))
              ? (c = !0)
              : !p && ((n && 1 > Math.abs(d)) || (!n && -s > d)) && (c = !0),
            c
          );
        },
        t0 = function (e) {
          return 'changedTouches' in e
            ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY]
            : [0, 0];
        },
        t1 = function (e) {
          return [e.deltaX, e.deltaY];
        },
        t2 = function (e) {
          return e && 'current' in e ? e.current : e;
        },
        t3 = 0,
        t6 = [];
      let t5 =
        ((a = function (e) {
          var t = i.useRef([]),
            o = i.useRef([0, 0]),
            a = i.useRef(),
            n = i.useState(t3++)[0],
            r = i.useState(tL)[0],
            s = i.useRef(e);
          i.useEffect(
            function () {
              s.current = e;
            },
            [e]
          ),
            i.useEffect(
              function () {
                if (e.inert) {
                  document.body.classList.add('block-interactivity-'.concat(n));
                  var t = (function (e, t, o) {
                    if (o || 2 == arguments.length)
                      for (var a, n = 0, r = t.length; n < r; n++)
                        (!a && n in t) ||
                          (a || (a = Array.prototype.slice.call(t, 0, n)),
                          (a[n] = t[n]));
                    return e.concat(a || Array.prototype.slice.call(t));
                  })([e.lockRef.current], (e.shards || []).map(t2), !0).filter(
                    Boolean
                  );
                  return (
                    t.forEach(function (e) {
                      return e.classList.add('allow-interactivity-'.concat(n));
                    }),
                    function () {
                      document.body.classList.remove(
                        'block-interactivity-'.concat(n)
                      ),
                        t.forEach(function (e) {
                          return e.classList.remove(
                            'allow-interactivity-'.concat(n)
                          );
                        });
                    }
                  );
                }
              },
              [e.inert, e.lockRef.current, e.shards]
            );
          var l = i.useCallback(function (e, t) {
              if (
                ('touches' in e && 2 === e.touches.length) ||
                ('wheel' === e.type && e.ctrlKey)
              )
                return !s.current.allowPinchZoom;
              var n,
                r = t0(e),
                i = o.current,
                l = 'deltaX' in e ? e.deltaX : i[0] - r[0],
                u = 'deltaY' in e ? e.deltaY : i[1] - r[1],
                c = e.target,
                p = Math.abs(l) > Math.abs(u) ? 'h' : 'v';
              if ('touches' in e && 'h' === p && 'range' === c.type) return !1;
              var m = tY(p, c);
              if (!m) return !0;
              if (
                (m ? (n = p) : ((n = 'v' === p ? 'h' : 'v'), (m = tY(p, c))),
                !m)
              )
                return !1;
              if (
                (!a.current &&
                  'changedTouches' in e &&
                  (l || u) &&
                  (a.current = n),
                !n)
              )
                return !0;
              var d = a.current || n;
              return tQ(d, t, e, 'h' === d ? l : u, !0);
            }, []),
            u = i.useCallback(function (e) {
              if (t6.length && t6[t6.length - 1] === r) {
                var o = 'deltaY' in e ? t1(e) : t0(e),
                  a = t.current.filter(function (t) {
                    var a;
                    return (
                      t.name === e.type &&
                      (t.target === e.target || e.target === t.shadowParent) &&
                      (a = t.delta)[0] === o[0] &&
                      a[1] === o[1]
                    );
                  })[0];
                if (a && a.should) {
                  e.cancelable && e.preventDefault();
                  return;
                }
                if (!a) {
                  var n = (s.current.shards || [])
                    .map(t2)
                    .filter(Boolean)
                    .filter(function (t) {
                      return t.contains(e.target);
                    });
                  (n.length > 0 ? l(e, n[0]) : !s.current.noIsolation) &&
                    e.cancelable &&
                    e.preventDefault();
                }
              }
            }, []),
            c = i.useCallback(function (e, o, a, n) {
              var r = {
                name: e,
                delta: o,
                target: a,
                should: n,
                shadowParent: (function (e) {
                  for (var t = null; null !== e; )
                    e instanceof ShadowRoot && ((t = e.host), (e = e.host)),
                      (e = e.parentNode);
                  return t;
                })(a),
              };
              t.current.push(r),
                setTimeout(function () {
                  t.current = t.current.filter(function (e) {
                    return e !== r;
                  });
                }, 1);
            }, []),
            p = i.useCallback(function (e) {
              (o.current = t0(e)), (a.current = void 0);
            }, []),
            m = i.useCallback(function (t) {
              c(t.type, t1(t), t.target, l(t, e.lockRef.current));
            }, []),
            d = i.useCallback(function (t) {
              c(t.type, t0(t), t.target, l(t, e.lockRef.current));
            }, []);
          i.useEffect(function () {
            return (
              t6.push(r),
              e.setCallbacks({
                onScrollCapture: m,
                onWheelCapture: m,
                onTouchMoveCapture: d,
              }),
              document.addEventListener('wheel', u, tK),
              document.addEventListener('touchmove', u, tK),
              document.addEventListener('touchstart', p, tK),
              function () {
                (t6 = t6.filter(function (e) {
                  return e !== r;
                })),
                  document.removeEventListener('wheel', u, tK),
                  document.removeEventListener('touchmove', u, tK),
                  document.removeEventListener('touchstart', p, tK);
              }
            );
          }, []);
          var f = e.removeScrollBar,
            h = e.inert;
          return i.createElement(
            i.Fragment,
            null,
            h
              ? i.createElement(r, {
                  styles: '\n  .block-interactivity-'
                    .concat(
                      n,
                      ' {pointer-events: none;}\n  .allow-interactivity-'
                    )
                    .concat(n, ' {pointer-events: all;}\n'),
                })
              : null,
            f ? i.createElement(tV, { gapMode: e.gapMode }) : null
          );
        }),
        tC.useMedium(a),
        tB);
      var t4 = i.forwardRef(function (e, t) {
        return i.createElement(tP, tj({}, e, { ref: t, sideCar: t5 }));
      });
      t4.classNames = tP.classNames;
      var t8 = [' ', 'Enter', 'ArrowUp', 'ArrowDown'],
        t9 = [' ', 'Enter'],
        t7 = 'Select',
        [oe, ot, oo] = (function (e) {
          let t = e + 'CollectionProvider',
            [o, a] = m(t),
            [n, r] = o(t, {
              collectionRef: { current: null },
              itemMap: new Map(),
            }),
            s = (e) => {
              let { scope: t, children: o } = e,
                a = i.useRef(null),
                r = i.useRef(new Map()).current;
              return (0, p.jsx)(n, {
                scope: t,
                itemMap: r,
                collectionRef: a,
                children: o,
              });
            };
          s.displayName = t;
          let l = e + 'CollectionSlot',
            u = (0, f.TL)(l),
            c = i.forwardRef((e, t) => {
              let { scope: o, children: a } = e,
                n = r(l, o),
                i = (0, d.s)(t, n.collectionRef);
              return (0, p.jsx)(u, { ref: i, children: a });
            });
          c.displayName = l;
          let h = e + 'CollectionItemSlot',
            g = 'data-radix-collection-item',
            y = (0, f.TL)(h),
            k = i.forwardRef((e, t) => {
              let { scope: o, children: a, ...n } = e,
                s = i.useRef(null),
                l = (0, d.s)(t, s),
                u = r(h, o);
              return (
                i.useEffect(
                  () => (
                    u.itemMap.set(s, { ref: s, ...n }),
                    () => void u.itemMap.delete(s)
                  )
                ),
                (0, p.jsx)(y, { [g]: '', ref: l, children: a })
              );
            });
          return (
            (k.displayName = h),
            [
              { Provider: s, Slot: c, ItemSlot: k },
              function (t) {
                let o = r(e + 'CollectionConsumer', t);
                return i.useCallback(() => {
                  let e = o.collectionRef.current;
                  if (!e) return [];
                  let t = Array.from(e.querySelectorAll('['.concat(g, ']')));
                  return Array.from(o.itemMap.values()).sort(
                    (e, o) =>
                      t.indexOf(e.ref.current) - t.indexOf(o.ref.current)
                  );
                }, [o.collectionRef, o.itemMap]);
              },
              a,
            ]
          );
        })(t7),
        [oa, on] = m(t7, [oo, e5]),
        or = e5(),
        [oi, os] = oa(t7),
        [ol, ou] = oa(t7),
        oc = (e) => {
          let {
              __scopeSelect: t,
              children: o,
              open: a,
              defaultOpen: n,
              onOpenChange: r,
              value: s,
              defaultValue: l,
              onValueChange: u,
              dir: c,
              name: m,
              autoComplete: d,
              disabled: f,
              required: g,
              form: y,
            } = e,
            k = or(t),
            [b, w] = i.useState(null),
            [j, v] = i.useState(null),
            [z, x] = i.useState(!1),
            E = (function (e) {
              let t = i.useContext(h);
              return e || t || 'ltr';
            })(c),
            [A = !1, S] = tm({ prop: a, defaultProp: n, onChange: r }),
            [O, C] = tm({ prop: s, defaultProp: l, onChange: u }),
            I = i.useRef(null),
            P = !b || y || !!b.closest('form'),
            [B, R] = i.useState(new Set()),
            T = Array.from(B)
              .map((e) => e.props.value)
              .join(';');
          return (0, p.jsx)(e9, {
            ...k,
            children: (0, p.jsxs)(oi, {
              required: g,
              scope: t,
              trigger: b,
              onTriggerChange: w,
              valueNode: j,
              onValueNodeChange: v,
              valueNodeHasChildren: z,
              onValueNodeHasChildrenChange: x,
              contentId: D(),
              value: O,
              onValueChange: C,
              open: A,
              onOpenChange: S,
              dir: E,
              triggerPointerDownPosRef: I,
              disabled: f,
              children: [
                (0, p.jsx)(oe.Provider, {
                  scope: t,
                  children: (0, p.jsx)(ol, {
                    scope: e.__scopeSelect,
                    onNativeOptionAdd: i.useCallback((e) => {
                      R((t) => new Set(t).add(e));
                    }, []),
                    onNativeOptionRemove: i.useCallback((e) => {
                      R((t) => {
                        let o = new Set(t);
                        return o.delete(e), o;
                      });
                    }, []),
                    children: o,
                  }),
                }),
                P
                  ? (0, p.jsxs)(
                      oJ,
                      {
                        'aria-hidden': !0,
                        required: g,
                        tabIndex: -1,
                        name: m,
                        autoComplete: d,
                        value: O,
                        onChange: (e) => C(e.target.value),
                        disabled: f,
                        form: y,
                        children: [
                          void 0 === O
                            ? (0, p.jsx)('option', { value: '' })
                            : null,
                          Array.from(B),
                        ],
                      },
                      T
                    )
                  : null,
              ],
            }),
          });
        };
      oc.displayName = t7;
      var op = 'SelectTrigger',
        om = i.forwardRef((e, t) => {
          let { __scopeSelect: o, disabled: a = !1, ...n } = e,
            r = or(o),
            s = os(op, o),
            l = s.disabled || a,
            u = (0, d.s)(t, s.onTriggerChange),
            m = ot(o),
            f = i.useRef('touch'),
            [h, y, k] = oX((e) => {
              let t = m().filter((e) => !e.disabled),
                o = t.find((e) => e.value === s.value),
                a = oQ(t, e, o);
              void 0 !== a && s.onValueChange(a.value);
            }),
            b = (e) => {
              l || (s.onOpenChange(!0), k()),
                e &&
                  (s.triggerPointerDownPosRef.current = {
                    x: Math.round(e.pageX),
                    y: Math.round(e.pageY),
                  });
            };
          return (0, p.jsx)(te, {
            asChild: !0,
            ...r,
            children: (0, p.jsx)(g.button, {
              type: 'button',
              role: 'combobox',
              'aria-controls': s.contentId,
              'aria-expanded': s.open,
              'aria-required': s.required,
              'aria-autocomplete': 'none',
              dir: s.dir,
              'data-state': s.open ? 'open' : 'closed',
              disabled: l,
              'data-disabled': l ? '' : void 0,
              'data-placeholder': oY(s.value) ? '' : void 0,
              ...n,
              ref: u,
              onClick: c(n.onClick, (e) => {
                e.currentTarget.focus(), 'mouse' !== f.current && b(e);
              }),
              onPointerDown: c(n.onPointerDown, (e) => {
                f.current = e.pointerType;
                let t = e.target;
                t.hasPointerCapture(e.pointerId) &&
                  t.releasePointerCapture(e.pointerId),
                  0 === e.button &&
                    !1 === e.ctrlKey &&
                    'mouse' === e.pointerType &&
                    (b(e), e.preventDefault());
              }),
              onKeyDown: c(n.onKeyDown, (e) => {
                let t = '' !== h.current;
                e.ctrlKey ||
                  e.altKey ||
                  e.metaKey ||
                  1 !== e.key.length ||
                  y(e.key),
                  (!t || ' ' !== e.key) &&
                    t8.includes(e.key) &&
                    (b(), e.preventDefault());
              }),
            }),
          });
        });
      om.displayName = op;
      var od = 'SelectValue',
        of = i.forwardRef((e, t) => {
          let {
              __scopeSelect: o,
              className: a,
              style: n,
              children: r,
              placeholder: i = '',
              ...s
            } = e,
            l = os(od, o),
            { onValueNodeHasChildrenChange: u } = l,
            c = void 0 !== r,
            m = (0, d.s)(t, l.onValueNodeChange);
          return (
            T(() => {
              u(c);
            }, [u, c]),
            (0, p.jsx)(g.span, {
              ...s,
              ref: m,
              style: { pointerEvents: 'none' },
              children: oY(l.value)
                ? (0, p.jsx)(p.Fragment, { children: i })
                : r,
            })
          );
        });
      of.displayName = od;
      var oh = i.forwardRef((e, t) => {
        let { __scopeSelect: o, children: a, ...n } = e;
        return (0, p.jsx)(g.span, {
          'aria-hidden': !0,
          ...n,
          ref: t,
          children: a || '▼',
        });
      });
      oh.displayName = 'SelectIcon';
      var og = (e) => (0, p.jsx)(tp, { asChild: !0, ...e });
      og.displayName = 'SelectPortal';
      var oy = 'SelectContent',
        ok = i.forwardRef((e, t) => {
          let o = os(oy, e.__scopeSelect),
            [a, n] = i.useState();
          return (T(() => {
            n(new DocumentFragment());
          }, []),
          o.open)
            ? (0, p.jsx)(ov, { ...e, ref: t })
            : a
              ? l.createPortal(
                  (0, p.jsx)(ob, {
                    scope: e.__scopeSelect,
                    children: (0, p.jsx)(oe.Slot, {
                      scope: e.__scopeSelect,
                      children: (0, p.jsx)('div', { children: e.children }),
                    }),
                  }),
                  a
                )
              : null;
        });
      ok.displayName = oy;
      var [ob, ow] = oa(oy),
        oj = (0, f.TL)('SelectContent.RemoveScroll'),
        ov = i.forwardRef((e, t) => {
          let {
              __scopeSelect: o,
              position: a = 'item-aligned',
              onCloseAutoFocus: n,
              onEscapeKeyDown: r,
              onPointerDownOutside: s,
              side: l,
              sideOffset: u,
              align: m,
              alignOffset: f,
              arrowPadding: h,
              collisionBoundary: g,
              collisionPadding: y,
              sticky: k,
              hideWhenDetached: b,
              avoidCollisions: j,
              ...v
            } = e,
            E = os(oy, o),
            [A, S] = i.useState(null),
            [C, I] = i.useState(null),
            P = (0, d.s)(t, (e) => S(e)),
            [B, R] = i.useState(null),
            [T, L] = i.useState(null),
            N = ot(o),
            [D, U] = i.useState(!1),
            F = i.useRef(!1);
          i.useEffect(() => {
            if (A) return tw(A);
          }, [A]),
            i.useEffect(() => {
              var e, t;
              let o = document.querySelectorAll('[data-radix-focus-guard]');
              return (
                document.body.insertAdjacentElement(
                  'afterbegin',
                  null !== (e = o[0]) && void 0 !== e ? e : x()
                ),
                document.body.insertAdjacentElement(
                  'beforeend',
                  null !== (t = o[1]) && void 0 !== t ? t : x()
                ),
                z++,
                () => {
                  1 === z &&
                    document
                      .querySelectorAll('[data-radix-focus-guard]')
                      .forEach((e) => e.remove()),
                    z--;
                }
              );
            }, []);
          let M = i.useCallback(
              (e) => {
                let [t, ...o] = N().map((e) => e.ref.current),
                  [a] = o.slice(-1),
                  n = document.activeElement;
                for (let o of e)
                  if (
                    o === n ||
                    (null == o || o.scrollIntoView({ block: 'nearest' }),
                    o === t && C && (C.scrollTop = 0),
                    o === a && C && (C.scrollTop = C.scrollHeight),
                    null == o || o.focus(),
                    document.activeElement !== n)
                  )
                    return;
              },
              [N, C]
            ),
            _ = i.useCallback(() => M([B, A]), [M, B, A]);
          i.useEffect(() => {
            D && _();
          }, [D, _]);
          let { onOpenChange: q, triggerPointerDownPosRef: $ } = E;
          i.useEffect(() => {
            if (A) {
              let e = { x: 0, y: 0 },
                t = (t) => {
                  var o, a, n, r;
                  e = {
                    x: Math.abs(
                      Math.round(t.pageX) -
                        (null !==
                          (n =
                            null === (o = $.current) || void 0 === o
                              ? void 0
                              : o.x) && void 0 !== n
                          ? n
                          : 0)
                    ),
                    y: Math.abs(
                      Math.round(t.pageY) -
                        (null !==
                          (r =
                            null === (a = $.current) || void 0 === a
                              ? void 0
                              : a.y) && void 0 !== r
                          ? r
                          : 0)
                    ),
                  };
                },
                o = (o) => {
                  e.x <= 10 && e.y <= 10
                    ? o.preventDefault()
                    : A.contains(o.target) || q(!1),
                    document.removeEventListener('pointermove', t),
                    ($.current = null);
                };
              return (
                null !== $.current &&
                  (document.addEventListener('pointermove', t),
                  document.addEventListener('pointerup', o, {
                    capture: !0,
                    once: !0,
                  })),
                () => {
                  document.removeEventListener('pointermove', t),
                    document.removeEventListener('pointerup', o, {
                      capture: !0,
                    });
                }
              );
            }
          }, [A, q, $]),
            i.useEffect(() => {
              let e = () => q(!1);
              return (
                window.addEventListener('blur', e),
                window.addEventListener('resize', e),
                () => {
                  window.removeEventListener('blur', e),
                    window.removeEventListener('resize', e);
                }
              );
            }, [q]);
          let [H, V] = oX((e) => {
              let t = N().filter((e) => !e.disabled),
                o = t.find((e) => e.ref.current === document.activeElement),
                a = oQ(t, e, o);
              a && setTimeout(() => a.ref.current.focus());
            }),
            W = i.useCallback(
              (e, t, o) => {
                let a = !F.current && !o;
                ((void 0 !== E.value && E.value === t) || a) &&
                  (R(e), a && (F.current = !0));
              },
              [E.value]
            ),
            G = i.useCallback(() => (null == A ? void 0 : A.focus()), [A]),
            K = i.useCallback(
              (e, t, o) => {
                let a = !F.current && !o;
                ((void 0 !== E.value && E.value === t) || a) && L(e);
              },
              [E.value]
            ),
            Z = 'popper' === a ? ox : oz,
            Y =
              Z === ox
                ? {
                    side: l,
                    sideOffset: u,
                    align: m,
                    alignOffset: f,
                    arrowPadding: h,
                    collisionBoundary: g,
                    collisionPadding: y,
                    sticky: k,
                    hideWhenDetached: b,
                    avoidCollisions: j,
                  }
                : {};
          return (0, p.jsx)(ob, {
            scope: o,
            content: A,
            viewport: C,
            onViewportChange: I,
            itemRefCallback: W,
            selectedItem: B,
            onItemLeave: G,
            itemTextRefCallback: K,
            focusSelectedItem: _,
            selectedItemText: T,
            position: a,
            isPositioned: D,
            searchRef: H,
            children: (0, p.jsx)(t4, {
              as: oj,
              allowPinchZoom: !0,
              children: (0, p.jsx)(O, {
                asChild: !0,
                trapped: E.open,
                onMountAutoFocus: (e) => {
                  e.preventDefault();
                },
                onUnmountAutoFocus: c(n, (e) => {
                  var t;
                  null === (t = E.trigger) ||
                    void 0 === t ||
                    t.focus({ preventScroll: !0 }),
                    e.preventDefault();
                }),
                children: (0, p.jsx)(w, {
                  asChild: !0,
                  disableOutsidePointerEvents: !0,
                  onEscapeKeyDown: r,
                  onPointerDownOutside: s,
                  onFocusOutside: (e) => e.preventDefault(),
                  onDismiss: () => E.onOpenChange(!1),
                  children: (0, p.jsx)(Z, {
                    role: 'listbox',
                    id: E.contentId,
                    'data-state': E.open ? 'open' : 'closed',
                    dir: E.dir,
                    onContextMenu: (e) => e.preventDefault(),
                    ...v,
                    ...Y,
                    onPlaced: () => U(!0),
                    ref: P,
                    style: {
                      display: 'flex',
                      flexDirection: 'column',
                      outline: 'none',
                      ...v.style,
                    },
                    onKeyDown: c(v.onKeyDown, (e) => {
                      let t = e.ctrlKey || e.altKey || e.metaKey;
                      if (
                        ('Tab' === e.key && e.preventDefault(),
                        t || 1 !== e.key.length || V(e.key),
                        ['ArrowUp', 'ArrowDown', 'Home', 'End'].includes(e.key))
                      ) {
                        let t = N()
                          .filter((e) => !e.disabled)
                          .map((e) => e.ref.current);
                        if (
                          (['ArrowUp', 'End'].includes(e.key) &&
                            (t = t.slice().reverse()),
                          ['ArrowUp', 'ArrowDown'].includes(e.key))
                        ) {
                          let o = e.target,
                            a = t.indexOf(o);
                          t = t.slice(a + 1);
                        }
                        setTimeout(() => M(t)), e.preventDefault();
                      }
                    }),
                  }),
                }),
              }),
            }),
          });
        });
      ov.displayName = 'SelectContentImpl';
      var oz = i.forwardRef((e, t) => {
        let { __scopeSelect: o, onPlaced: a, ...n } = e,
          r = os(oy, o),
          s = ow(oy, o),
          [l, c] = i.useState(null),
          [m, f] = i.useState(null),
          h = (0, d.s)(t, (e) => f(e)),
          y = ot(o),
          k = i.useRef(!1),
          b = i.useRef(!0),
          {
            viewport: w,
            selectedItem: j,
            selectedItemText: v,
            focusSelectedItem: z,
          } = s,
          x = i.useCallback(() => {
            if (r.trigger && r.valueNode && l && m && w && j && v) {
              let e = r.trigger.getBoundingClientRect(),
                t = m.getBoundingClientRect(),
                o = r.valueNode.getBoundingClientRect(),
                n = v.getBoundingClientRect();
              if ('rtl' !== r.dir) {
                let a = n.left - t.left,
                  r = o.left - a,
                  i = e.left - r,
                  s = e.width + i,
                  c = Math.max(s, t.width),
                  p = u(r, [10, Math.max(10, window.innerWidth - 10 - c)]);
                (l.style.minWidth = s + 'px'), (l.style.left = p + 'px');
              } else {
                let a = t.right - n.right,
                  r = window.innerWidth - o.right - a,
                  i = window.innerWidth - e.right - r,
                  s = e.width + i,
                  c = Math.max(s, t.width),
                  p = u(r, [10, Math.max(10, window.innerWidth - 10 - c)]);
                (l.style.minWidth = s + 'px'), (l.style.right = p + 'px');
              }
              let i = y(),
                s = window.innerHeight - 20,
                c = w.scrollHeight,
                p = window.getComputedStyle(m),
                d = parseInt(p.borderTopWidth, 10),
                f = parseInt(p.paddingTop, 10),
                h = parseInt(p.borderBottomWidth, 10),
                g = d + f + c + parseInt(p.paddingBottom, 10) + h,
                b = Math.min(5 * j.offsetHeight, g),
                z = window.getComputedStyle(w),
                x = parseInt(z.paddingTop, 10),
                E = parseInt(z.paddingBottom, 10),
                A = e.top + e.height / 2 - 10,
                S = j.offsetHeight / 2,
                O = d + f + (j.offsetTop + S);
              if (O <= A) {
                let e = i.length > 0 && j === i[i.length - 1].ref.current;
                l.style.bottom = '0px';
                let t = Math.max(
                  s - A,
                  S +
                    (e ? E : 0) +
                    (m.clientHeight - w.offsetTop - w.offsetHeight) +
                    h
                );
                l.style.height = O + t + 'px';
              } else {
                let e = i.length > 0 && j === i[0].ref.current;
                l.style.top = '0px';
                let t = Math.max(A, d + w.offsetTop + (e ? x : 0) + S);
                (l.style.height = t + (g - O) + 'px'),
                  (w.scrollTop = O - A + w.offsetTop);
              }
              (l.style.margin = ''.concat(10, 'px 0')),
                (l.style.minHeight = b + 'px'),
                (l.style.maxHeight = s + 'px'),
                null == a || a(),
                requestAnimationFrame(() => (k.current = !0));
            }
          }, [y, r.trigger, r.valueNode, l, m, w, j, v, r.dir, a]);
        T(() => x(), [x]);
        let [E, A] = i.useState();
        T(() => {
          m && A(window.getComputedStyle(m).zIndex);
        }, [m]);
        let S = i.useCallback(
          (e) => {
            e && !0 === b.current && (x(), null == z || z(), (b.current = !1));
          },
          [x, z]
        );
        return (0, p.jsx)(oE, {
          scope: o,
          contentWrapper: l,
          shouldExpandOnScrollRef: k,
          onScrollButtonChange: S,
          children: (0, p.jsx)('div', {
            ref: c,
            style: {
              display: 'flex',
              flexDirection: 'column',
              position: 'fixed',
              zIndex: E,
            },
            children: (0, p.jsx)(g.div, {
              ...n,
              ref: h,
              style: { boxSizing: 'border-box', maxHeight: '100%', ...n.style },
            }),
          }),
        });
      });
      oz.displayName = 'SelectItemAlignedPosition';
      var ox = i.forwardRef((e, t) => {
        let {
            __scopeSelect: o,
            align: a = 'start',
            collisionPadding: n = 10,
            ...r
          } = e,
          i = or(o);
        return (0, p.jsx)(tn, {
          ...i,
          ...r,
          ref: t,
          align: a,
          collisionPadding: n,
          style: {
            boxSizing: 'border-box',
            ...r.style,
            '--radix-select-content-transform-origin':
              'var(--radix-popper-transform-origin)',
            '--radix-select-content-available-width':
              'var(--radix-popper-available-width)',
            '--radix-select-content-available-height':
              'var(--radix-popper-available-height)',
            '--radix-select-trigger-width': 'var(--radix-popper-anchor-width)',
            '--radix-select-trigger-height':
              'var(--radix-popper-anchor-height)',
          },
        });
      });
      ox.displayName = 'SelectPopperPosition';
      var [oE, oA] = oa(oy, {}),
        oS = 'SelectViewport',
        oO = i.forwardRef((e, t) => {
          let { __scopeSelect: o, nonce: a, ...n } = e,
            r = ow(oS, o),
            s = oA(oS, o),
            l = (0, d.s)(t, r.onViewportChange),
            u = i.useRef(0);
          return (0, p.jsxs)(p.Fragment, {
            children: [
              (0, p.jsx)('style', {
                dangerouslySetInnerHTML: {
                  __html:
                    '[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}',
                },
                nonce: a,
              }),
              (0, p.jsx)(oe.Slot, {
                scope: o,
                children: (0, p.jsx)(g.div, {
                  'data-radix-select-viewport': '',
                  role: 'presentation',
                  ...n,
                  ref: l,
                  style: {
                    position: 'relative',
                    flex: 1,
                    overflow: 'hidden auto',
                    ...n.style,
                  },
                  onScroll: c(n.onScroll, (e) => {
                    let t = e.currentTarget,
                      { contentWrapper: o, shouldExpandOnScrollRef: a } = s;
                    if ((null == a ? void 0 : a.current) && o) {
                      let e = Math.abs(u.current - t.scrollTop);
                      if (e > 0) {
                        let a = window.innerHeight - 20,
                          n = Math.max(
                            parseFloat(o.style.minHeight),
                            parseFloat(o.style.height)
                          );
                        if (n < a) {
                          let r = n + e,
                            i = Math.min(a, r),
                            s = r - i;
                          (o.style.height = i + 'px'),
                            '0px' === o.style.bottom &&
                              ((t.scrollTop = s > 0 ? s : 0),
                              (o.style.justifyContent = 'flex-end'));
                        }
                      }
                    }
                    u.current = t.scrollTop;
                  }),
                }),
              }),
            ],
          });
        });
      oO.displayName = oS;
      var oC = 'SelectGroup',
        [oI, oP] = oa(oC),
        oB = i.forwardRef((e, t) => {
          let { __scopeSelect: o, ...a } = e,
            n = D();
          return (0, p.jsx)(oI, {
            scope: o,
            id: n,
            children: (0, p.jsx)(g.div, {
              role: 'group',
              'aria-labelledby': n,
              ...a,
              ref: t,
            }),
          });
        });
      oB.displayName = oC;
      var oR = 'SelectLabel',
        oT = i.forwardRef((e, t) => {
          let { __scopeSelect: o, ...a } = e,
            n = oP(oR, o);
          return (0, p.jsx)(g.div, { id: n.id, ...a, ref: t });
        });
      oT.displayName = oR;
      var oL = 'SelectItem',
        [oN, oD] = oa(oL),
        oU = i.forwardRef((e, t) => {
          let {
              __scopeSelect: o,
              value: a,
              disabled: n = !1,
              textValue: r,
              ...s
            } = e,
            l = os(oL, o),
            u = ow(oL, o),
            m = l.value === a,
            [f, h] = i.useState(null != r ? r : ''),
            [y, k] = i.useState(!1),
            b = (0, d.s)(t, (e) => {
              var t;
              return null === (t = u.itemRefCallback) || void 0 === t
                ? void 0
                : t.call(u, e, a, n);
            }),
            w = D(),
            j = i.useRef('touch'),
            v = () => {
              n || (l.onValueChange(a), l.onOpenChange(!1));
            };
          if ('' === a)
            throw Error(
              'A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.'
            );
          return (0, p.jsx)(oN, {
            scope: o,
            value: a,
            disabled: n,
            textId: w,
            isSelected: m,
            onItemTextChange: i.useCallback((e) => {
              h((t) => {
                var o;
                return (
                  t ||
                  (null !== (o = null == e ? void 0 : e.textContent) &&
                  void 0 !== o
                    ? o
                    : ''
                  ).trim()
                );
              });
            }, []),
            children: (0, p.jsx)(oe.ItemSlot, {
              scope: o,
              value: a,
              disabled: n,
              textValue: f,
              children: (0, p.jsx)(g.div, {
                role: 'option',
                'aria-labelledby': w,
                'data-highlighted': y ? '' : void 0,
                'aria-selected': m && y,
                'data-state': m ? 'checked' : 'unchecked',
                'aria-disabled': n || void 0,
                'data-disabled': n ? '' : void 0,
                tabIndex: n ? void 0 : -1,
                ...s,
                ref: b,
                onFocus: c(s.onFocus, () => k(!0)),
                onBlur: c(s.onBlur, () => k(!1)),
                onClick: c(s.onClick, () => {
                  'mouse' !== j.current && v();
                }),
                onPointerUp: c(s.onPointerUp, () => {
                  'mouse' === j.current && v();
                }),
                onPointerDown: c(s.onPointerDown, (e) => {
                  j.current = e.pointerType;
                }),
                onPointerMove: c(s.onPointerMove, (e) => {
                  if (((j.current = e.pointerType), n)) {
                    var t;
                    null === (t = u.onItemLeave) || void 0 === t || t.call(u);
                  } else
                    'mouse' === j.current &&
                      e.currentTarget.focus({ preventScroll: !0 });
                }),
                onPointerLeave: c(s.onPointerLeave, (e) => {
                  if (e.currentTarget === document.activeElement) {
                    var t;
                    null === (t = u.onItemLeave) || void 0 === t || t.call(u);
                  }
                }),
                onKeyDown: c(s.onKeyDown, (e) => {
                  var t;
                  ((null === (t = u.searchRef) || void 0 === t
                    ? void 0
                    : t.current) !== '' &&
                    ' ' === e.key) ||
                    (t9.includes(e.key) && v(),
                    ' ' === e.key && e.preventDefault());
                }),
              }),
            }),
          });
        });
      oU.displayName = oL;
      var oF = 'SelectItemText',
        oM = i.forwardRef((e, t) => {
          let { __scopeSelect: o, className: a, style: n, ...r } = e,
            s = os(oF, o),
            u = ow(oF, o),
            c = oD(oF, o),
            m = ou(oF, o),
            [f, h] = i.useState(null),
            y = (0, d.s)(
              t,
              (e) => h(e),
              c.onItemTextChange,
              (e) => {
                var t;
                return null === (t = u.itemTextRefCallback) || void 0 === t
                  ? void 0
                  : t.call(u, e, c.value, c.disabled);
              }
            ),
            k = null == f ? void 0 : f.textContent,
            b = i.useMemo(
              () =>
                (0, p.jsx)(
                  'option',
                  { value: c.value, disabled: c.disabled, children: k },
                  c.value
                ),
              [c.disabled, c.value, k]
            ),
            { onNativeOptionAdd: w, onNativeOptionRemove: j } = m;
          return (
            T(() => (w(b), () => j(b)), [w, j, b]),
            (0, p.jsxs)(p.Fragment, {
              children: [
                (0, p.jsx)(g.span, { id: c.textId, ...r, ref: y }),
                c.isSelected && s.valueNode && !s.valueNodeHasChildren
                  ? l.createPortal(r.children, s.valueNode)
                  : null,
              ],
            })
          );
        });
      oM.displayName = oF;
      var o_ = 'SelectItemIndicator',
        oq = i.forwardRef((e, t) => {
          let { __scopeSelect: o, ...a } = e;
          return oD(o_, o).isSelected
            ? (0, p.jsx)(g.span, { 'aria-hidden': !0, ...a, ref: t })
            : null;
        });
      oq.displayName = o_;
      var o$ = 'SelectScrollUpButton',
        oH = i.forwardRef((e, t) => {
          let o = ow(o$, e.__scopeSelect),
            a = oA(o$, e.__scopeSelect),
            [n, r] = i.useState(!1),
            s = (0, d.s)(t, a.onScrollButtonChange);
          return (
            T(() => {
              if (o.viewport && o.isPositioned) {
                let e = function () {
                    r(t.scrollTop > 0);
                  },
                  t = o.viewport;
                return (
                  e(),
                  t.addEventListener('scroll', e),
                  () => t.removeEventListener('scroll', e)
                );
              }
            }, [o.viewport, o.isPositioned]),
            n
              ? (0, p.jsx)(oG, {
                  ...e,
                  ref: s,
                  onAutoScroll: () => {
                    let { viewport: e, selectedItem: t } = o;
                    e && t && (e.scrollTop = e.scrollTop - t.offsetHeight);
                  },
                })
              : null
          );
        });
      oH.displayName = o$;
      var oV = 'SelectScrollDownButton',
        oW = i.forwardRef((e, t) => {
          let o = ow(oV, e.__scopeSelect),
            a = oA(oV, e.__scopeSelect),
            [n, r] = i.useState(!1),
            s = (0, d.s)(t, a.onScrollButtonChange);
          return (
            T(() => {
              if (o.viewport && o.isPositioned) {
                let e = function () {
                    let e = t.scrollHeight - t.clientHeight;
                    r(Math.ceil(t.scrollTop) < e);
                  },
                  t = o.viewport;
                return (
                  e(),
                  t.addEventListener('scroll', e),
                  () => t.removeEventListener('scroll', e)
                );
              }
            }, [o.viewport, o.isPositioned]),
            n
              ? (0, p.jsx)(oG, {
                  ...e,
                  ref: s,
                  onAutoScroll: () => {
                    let { viewport: e, selectedItem: t } = o;
                    e && t && (e.scrollTop = e.scrollTop + t.offsetHeight);
                  },
                })
              : null
          );
        });
      oW.displayName = oV;
      var oG = i.forwardRef((e, t) => {
          let { __scopeSelect: o, onAutoScroll: a, ...n } = e,
            r = ow('SelectScrollButton', o),
            s = i.useRef(null),
            l = ot(o),
            u = i.useCallback(() => {
              null !== s.current &&
                (window.clearInterval(s.current), (s.current = null));
            }, []);
          return (
            i.useEffect(() => () => u(), [u]),
            T(() => {
              var e;
              let t = l().find((e) => e.ref.current === document.activeElement);
              null == t ||
                null === (e = t.ref.current) ||
                void 0 === e ||
                e.scrollIntoView({ block: 'nearest' });
            }, [l]),
            (0, p.jsx)(g.div, {
              'aria-hidden': !0,
              ...n,
              ref: t,
              style: { flexShrink: 0, ...n.style },
              onPointerDown: c(n.onPointerDown, () => {
                null === s.current && (s.current = window.setInterval(a, 50));
              }),
              onPointerMove: c(n.onPointerMove, () => {
                var e;
                null === (e = r.onItemLeave) || void 0 === e || e.call(r),
                  null === s.current && (s.current = window.setInterval(a, 50));
              }),
              onPointerLeave: c(n.onPointerLeave, () => {
                u();
              }),
            })
          );
        }),
        oK = i.forwardRef((e, t) => {
          let { __scopeSelect: o, ...a } = e;
          return (0, p.jsx)(g.div, { 'aria-hidden': !0, ...a, ref: t });
        });
      oK.displayName = 'SelectSeparator';
      var oZ = 'SelectArrow';
      function oY(e) {
        return '' === e || void 0 === e;
      }
      i.forwardRef((e, t) => {
        let { __scopeSelect: o, ...a } = e,
          n = or(o),
          r = os(oZ, o),
          i = ow(oZ, o);
        return r.open && 'popper' === i.position
          ? (0, p.jsx)(ts, { ...n, ...a, ref: t })
          : null;
      }).displayName = oZ;
      var oJ = i.forwardRef((e, t) => {
        let { value: o, ...a } = e,
          n = i.useRef(null),
          r = (0, d.s)(t, n),
          s = (function (e) {
            let t = i.useRef({ value: e, previous: e });
            return i.useMemo(
              () => (
                t.current.value !== e &&
                  ((t.current.previous = t.current.value),
                  (t.current.value = e)),
                t.current.previous
              ),
              [e]
            );
          })(o);
        return (
          i.useEffect(() => {
            let e = n.current,
              t = Object.getOwnPropertyDescriptor(
                window.HTMLSelectElement.prototype,
                'value'
              ).set;
            if (s !== o && t) {
              let a = new Event('change', { bubbles: !0 });
              t.call(e, o), e.dispatchEvent(a);
            }
          }, [s, o]),
          (0, p.jsx)(td, {
            asChild: !0,
            children: (0, p.jsx)('select', { ...a, ref: r, defaultValue: o }),
          })
        );
      });
      function oX(e) {
        let t = y(e),
          o = i.useRef(''),
          a = i.useRef(0),
          n = i.useCallback(
            (e) => {
              let n = o.current + e;
              t(n),
                (function e(t) {
                  (o.current = t),
                    window.clearTimeout(a.current),
                    '' !== t &&
                      (a.current = window.setTimeout(() => e(''), 1e3));
                })(n);
            },
            [t]
          ),
          r = i.useCallback(() => {
            (o.current = ''), window.clearTimeout(a.current);
          }, []);
        return (
          i.useEffect(() => () => window.clearTimeout(a.current), []), [o, n, r]
        );
      }
      function oQ(e, t, o) {
        var a;
        let n =
            t.length > 1 && Array.from(t).every((e) => e === t[0]) ? t[0] : t,
          r =
            ((a = Math.max(o ? e.indexOf(o) : -1, 0)),
            e.map((t, o) => e[(a + o) % e.length]));
        1 === n.length && (r = r.filter((e) => e !== o));
        let i = r.find((e) =>
          e.textValue.toLowerCase().startsWith(n.toLowerCase())
        );
        return i !== o ? i : void 0;
      }
      oJ.displayName = 'BubbleSelect';
      var o0 = oc,
        o1 = om,
        o2 = of,
        o3 = oh,
        o6 = og,
        o5 = ok,
        o4 = oO,
        o8 = oB,
        o9 = oT,
        o7 = oU,
        ae = oM,
        at = oq,
        ao = oH,
        aa = oW,
        an = oK;
    },
    8875: (e, t, o) => {
      'use strict';
      o.d(t, { DX: () => s, TL: () => i });
      var a = o(7960),
        n = o(2860),
        r = o(516);
      function i(e) {
        let t = (function (e) {
            let t = a.forwardRef((e, t) => {
              let { children: o, ...r } = e;
              if (a.isValidElement(o)) {
                let e, i;
                let s =
                    (e = Object.getOwnPropertyDescriptor(
                      o.props,
                      'ref'
                    )?.get) &&
                    'isReactWarning' in e &&
                    e.isReactWarning
                      ? o.ref
                      : (e = Object.getOwnPropertyDescriptor(o, 'ref')?.get) &&
                          'isReactWarning' in e &&
                          e.isReactWarning
                        ? o.props.ref
                        : o.props.ref || o.ref,
                  l = (function (e, t) {
                    let o = { ...t };
                    for (let a in t) {
                      let n = e[a],
                        r = t[a];
                      /^on[A-Z]/.test(a)
                        ? n && r
                          ? (o[a] = (...e) => {
                              r(...e), n(...e);
                            })
                          : n && (o[a] = n)
                        : 'style' === a
                          ? (o[a] = { ...n, ...r })
                          : 'className' === a &&
                            (o[a] = [n, r].filter(Boolean).join(' '));
                    }
                    return { ...e, ...o };
                  })(r, o.props);
                return (
                  o.type !== a.Fragment && (l.ref = t ? (0, n.t)(t, s) : s),
                  a.cloneElement(o, l)
                );
              }
              return a.Children.count(o) > 1 ? a.Children.only(null) : null;
            });
            return (t.displayName = `${e}.SlotClone`), t;
          })(e),
          o = a.forwardRef((e, o) => {
            let { children: n, ...i } = e,
              s = a.Children.toArray(n),
              l = s.find(u);
            if (l) {
              let e = l.props.children,
                n = s.map((t) =>
                  t !== l
                    ? t
                    : a.Children.count(e) > 1
                      ? a.Children.only(null)
                      : a.isValidElement(e)
                        ? e.props.children
                        : null
                );
              return (0, r.jsx)(t, {
                ...i,
                ref: o,
                children: a.isValidElement(e)
                  ? a.cloneElement(e, void 0, n)
                  : null,
              });
            }
            return (0, r.jsx)(t, { ...i, ref: o, children: n });
          });
        return (o.displayName = `${e}.Slot`), o;
      }
      var s = i('Slot'),
        l = Symbol('radix.slottable');
      function u(e) {
        return (
          a.isValidElement(e) &&
          'function' == typeof e.type &&
          '__radixId' in e.type &&
          e.type.__radixId === l
        );
      }
    },
    7088: (e, t, o) => {
      'use strict';
      function a(e, t) {
        return (
          !!Array.isArray(t) &&
          (0 === t.length ||
            (e
              ? t.every((e) => 'string' == typeof e)
              : t.every((e) => Number.isSafeInteger(e))))
        );
      }
      function n(e, t) {
        if ('string' != typeof t) throw Error(`${e}: string expected`);
        return !0;
      }
      function r(e) {
        if (!Number.isSafeInteger(e)) throw Error(`invalid integer: ${e}`);
      }
      function i(e) {
        if (!Array.isArray(e)) throw Error('array expected');
      }
      function s(e, t) {
        if (!a(!0, t)) throw Error(`${e}: array of strings expected`);
      }
      function l(...e) {
        let t = (e) => e,
          o = (e, t) => (o) => e(t(o));
        return {
          encode: e.map((e) => e.encode).reduceRight(o, t),
          decode: e.map((e) => e.decode).reduce(o, t),
        };
      }
      function u(e) {
        let t = 'string' == typeof e ? e.split('') : e,
          o = t.length;
        s('alphabet', t);
        let a = new Map(t.map((e, t) => [e, t]));
        return {
          encode: (a) => (
            i(a),
            a.map((a) => {
              if (!Number.isSafeInteger(a) || a < 0 || a >= o)
                throw Error(
                  `alphabet.encode: digit index outside alphabet "${a}". Allowed: ${e}`
                );
              return t[a];
            })
          ),
          decode: (t) => (
            i(t),
            t.map((t) => {
              n('alphabet.decode', t);
              let o = a.get(t);
              if (void 0 === o)
                throw Error(`Unknown letter: "${t}". Allowed: ${e}`);
              return o;
            })
          ),
        };
      }
      function c(e = '') {
        return (
          n('join', e),
          {
            encode: (t) => (s('join.decode', t), t.join(e)),
            decode: (t) => (n('join.decode', t), t.split(e)),
          }
        );
      }
      o.d(t, { K3: () => h });
      let p = (e, t) => (0 === t ? e : p(t, e % t)),
        m = (e, t) => e + (t - p(e, t)),
        d = (() => {
          let e = [];
          for (let t = 0; t < 40; t++) e.push(2 ** t);
          return e;
        })();
      function f(e, t, o, a) {
        if ((i(e), t <= 0 || t > 32))
          throw Error(`convertRadix2: wrong from=${t}`);
        if (o <= 0 || o > 32) throw Error(`convertRadix2: wrong to=${o}`);
        if (m(t, o) > 32)
          throw Error(
            `convertRadix2: carry overflow from=${t} to=${o} carryBits=${m(t, o)}`
          );
        let n = 0,
          s = 0,
          l = d[t],
          u = d[o] - 1,
          c = [];
        for (let a of e) {
          if ((r(a), a >= l))
            throw Error(`convertRadix2: invalid data word=${a} from=${t}`);
          if (((n = (n << t) | a), s + t > 32))
            throw Error(`convertRadix2: carry overflow pos=${s} from=${t}`);
          for (s += t; s >= o; s -= o) c.push(((n >> (s - o)) & u) >>> 0);
          let e = d[s];
          if (void 0 === e) throw Error('invalid carry');
          n &= e - 1;
        }
        if (((n = (n << (o - s)) & u), !a && s >= t))
          throw Error('Excess padding');
        if (!a && n > 0) throw Error(`Non-zero padding: ${n}`);
        return a && s > 0 && c.push(n >>> 0), c;
      }
      let h = l(
          (function (e, t = !1) {
            if ((r(6), e > 32))
              throw Error('radix2: bits should be in (0..32]');
            if (m(8, e) > 32 || m(e, 8) > 32)
              throw Error('radix2: carry overflow');
            return {
              encode: (o) => {
                if (
                  !(
                    o instanceof Uint8Array ||
                    (ArrayBuffer.isView(o) &&
                      'Uint8Array' === o.constructor.name)
                  )
                )
                  throw Error('radix2.encode input should be Uint8Array');
                return f(Array.from(o), 8, e, !t);
              },
              decode: (o) => (
                (function (e, t) {
                  if (!a(!1, t)) throw Error(`${e}: array of numbers expected`);
                })('radix2.decode', o),
                Uint8Array.from(f(o, e, 8, t))
              ),
            };
          })(6),
          u('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'),
          (function (e, t = '=') {
            return (
              r(6),
              n('padding', t),
              {
                encode(e) {
                  for (s('padding.encode', e); (6 * e.length) % 8; ) e.push(t);
                  return e;
                },
                decode(o) {
                  s('padding.decode', o);
                  let a = o.length;
                  if ((6 * a) % 8)
                    throw Error(
                      'padding: invalid, string should have whole number of bytes'
                    );
                  for (; a > 0 && o[a - 1] === t; a--)
                    if (((a - 1) * e) % 8 == 0)
                      throw Error(
                        'padding: invalid, string has too much padding'
                      );
                  return o.slice(0, a);
                },
              }
            );
          })(6),
          c('')
        ),
        g = [0x3b6a57b2, 0x26508e6d, 0x1ea119fa, 0x3d4233dd, 0x2a1462b3];
    },
    4240: (e, t, o) => {
      'use strict';
      o.r(t),
        o.d(t, {
          CURVE: () => E,
          Fp251: () => G,
          MAX_VALUE: () => m,
          ProjectivePoint: () => A,
          Signature: () => S,
          _poseidonMDS: () => Z,
          _starkCurve: () => g,
          computeHashOnElements: () => $,
          ethSigToPrivate: () => R,
          getAccountPath: () => N,
          getPublicKey: () => b,
          getSharedSecret: () => w,
          getStarkKey: () => B,
          grindKey: () => P,
          keccak: () => V,
          normalizePrivateKey: () => k,
          pedersen: () => q,
          poseidonBasic: () => Y,
          poseidonCreate: () => J,
          poseidonHash: () => Q,
          poseidonHashFunc: () => ee,
          poseidonHashMany: () => eo,
          poseidonHashSingle: () => et,
          poseidonSmall: () => X,
          sign: () => z,
          utils: () => O,
          verify: () => x,
        });
      var a = o(8844),
        n = o(9922),
        r = o(5717),
        i = o(5049),
        s = o(5484),
        l = o(7450),
        u = o(8853),
        c = o(6484);
      let p = BigInt(
          '3618502788666131213697322783095070105526743751716087489154079457884512865583'
        ),
        m = BigInt(
          '0x800000000000000000000000000000000000000000000000000000000000000'
        );
      function d(e) {
        for (; 0 === e[0]; ) e = e.subarray(1);
        let t = 8 * e.length - 252,
          o = u.Ph(e);
        return t > 0 ? o >> BigInt(t) : o;
      }
      function f(e) {
        return (
          'string' == typeof e && 1 & (e = I(e)).length && (e = '0' + e),
          u.aT(e)
        );
      }
      let h = (0, l.weierstrass)({
          a: BigInt(1),
          b: BigInt(
            '3141592653589793238462643383279502884197169399375105820974944592307816406665'
          ),
          Fp: (0, i.D0)(
            BigInt(
              '0x800000000000011000000000000000000000000000000000000000000000001'
            )
          ),
          n: p,
          nBitLength: 252,
          Gx: BigInt(
            '874739451078007766457464989774322083649278607533249481151382481072868806602'
          ),
          Gy: BigInt(
            '152666792071518830868575557812948353041420400780739481342941381225525861407'
          ),
          h: BigInt(1),
          lowS: !1,
          ...(0, c.Z)(n.sc),
          bits2int: d,
          bits2int_modN: (e) => {
            let t = u.Ph(e).toString(16);
            return 63 === t.length && (e = f(t + '0')), (0, i.zi)(d(e), p);
          },
        }),
        g = h;
      function y(e) {
        return u.qj('', 'string' == typeof e ? f(e) : e);
      }
      function k(e) {
        return u.My(y(e)).padStart(64, '0');
      }
      function b(e, t = !1) {
        return h.getPublicKey(k(e), t);
      }
      function w(e, t) {
        return h.getSharedSecret(k(e), t);
      }
      function j(e) {
        let { r: t, s: o } = e;
        if (t < 0n || t >= m) throw Error(`Signature.r should be [1, ${m})`);
        let a = (0, i.B8)(o, p);
        if (a < 0n || a >= m)
          throw Error(`inv(Signature.s) should be [1, ${m})`);
      }
      function v(e) {
        let t = y(e);
        if (u.Ph(t) >= m) throw Error(`msgHash should be [0, ${m})`);
        return t;
      }
      function z(e, t, o) {
        let a = h.sign(v(e), k(t), o);
        return j(a), a;
      }
      function x(e, t, o) {
        if (!(e instanceof S)) {
          let t = y(e);
          try {
            e = S.fromDER(t);
          } catch (o) {
            if (!(o instanceof l.DER.Err)) throw o;
            e = S.fromCompact(t);
          }
        }
        return j(e), h.verify(e, v(t), y(o));
      }
      let { CURVE: E, ProjectivePoint: A, Signature: S, utils: O } = h;
      function C(e) {
        let t = u.My(e.subarray(1)).replace(/^0+/gm, '');
        return `0x${t}`;
      }
      function I(e) {
        return e.replace(/^0x/i, '');
      }
      function P(e) {
        let t = y(e),
          o = 2n ** 256n,
          a = o - (0, i.zi)(o, p);
        for (let e = 0; ; e++) {
          let o = W(u.Id(t, u.IV(BigInt(e))));
          if (o < a) return (0, i.zi)(o, p).toString(16);
          if (1e5 === e) throw Error('grindKey is broken: tried 100k vals');
        }
      }
      function B(e) {
        return C(b(e, !0));
      }
      function R(e) {
        if (130 !== (e = I(e)).length) throw Error('Wrong ethereum signature');
        return P(e.substring(0, 64));
      }
      let T = 2n ** 31n - 1n,
        L = (e) => Number(e & T);
      function N(e, t, o, a) {
        let n = L(W(e)),
          r = L(W(t)),
          i = u.ME(I(o));
        return `m/2645'/${n}'/${r}'/${L(i)}'/${L(i >> 31n)}'/${a}`;
      }
      let D = [
        new A(
          0x49ee3eba8c1600700ee1b87eb599f16716b0b1022947733551fde4050ca6804n,
          0x3ca0cfe4b3bc6ddf346d49d06ea0ed34e621062c0e056c1d0405d266e10268an,
          1n
        ),
        new A(
          0x234287dcbaffe7f969c748655fca9e58fa8120b6d56eb0c1080d17957ebe47bn,
          0x3b056f100f96fb21e889527d41f4e39940135dd7a6c94cc6ed0268ee89e5615n,
          1n
        ),
        new A(
          0x4fa56f376c83db33f9dab2656558f3399099ec1de5e3018b7a6932dba8aa378n,
          0x3fa0984c931c9e38113e0c0e47e4401562761f92a7a23b45168f4e80ff5b54dn,
          1n
        ),
        new A(
          0x4ba4cc166be8dec764910f75b45f74b40c690c74709e90f3aa372f0bd2d6997n,
          0x40301cf5c1751f4b971e46c4ede85fcac5c59a5ce5ae7c48151f27b24b219cn,
          1n
        ),
        new A(
          0x54302dcb0e6cc1c6e44cca8f61a63bb2ca65048d53fb325d36ff12c49a58202n,
          0x1b77b3e37d13504b348046268d8ae25ce98ad783c25561a879dcc77e99c2426n,
          1n
        ),
      ];
      function U(e, t) {
        let o = [],
          a = e;
        for (let e = 0; e < 248; e++) o.push(a), (a = a.double());
        a = t;
        for (let e = 0; e < 4; e++) o.push(a), (a = a.double());
        return o;
      }
      let F = U(D[1], D[2]),
        M = U(D[3], D[4]);
      function _(e, t, o) {
        let a = (function (e) {
          let t;
          if ('bigint' == typeof e) t = e;
          else if ('number' == typeof e) {
            if (!Number.isSafeInteger(e))
              throw Error(`Invalid pedersenArg: ${e}`);
            t = BigInt(e);
          } else t = u.Ph(y(e));
          if (!(0n <= t && t < h.CURVE.Fp.ORDER))
            throw Error(`PedersenArg should be 0 <= value < CURVE.P: ${t}`);
          return t;
        })(t);
        for (let t = 0; t < 252; t++) {
          let n = o[t];
          if (!n) throw Error('invalid constant index');
          if (n.equals(e)) throw Error('Same point');
          (1n & a) !== 0n && (e = e.add(n)), (a >>= 1n);
        }
        return e;
      }
      function q(e, t) {
        let o = D[0];
        return (o = _(o, e, F)), C((o = _(o, t, M)).toRawBytes(!0));
      }
      let $ = (e, t = q) => [0, ...e, e.length].reduce((e, o) => t(e, o)),
        H = u.OG(250),
        V = (e) => u.Ph((0, a.lY)(e)) & H,
        W = (e) => u.Ph((0, n.sc)(e)),
        G = (0, i.D0)(
          BigInt(
            '3618502788666131213697322783095070105623107215331596699973092056135872020481'
          )
        );
      function K(e, t, o) {
        let a = e.fromBytes((0, n.sc)((0, r.AI)(`${t}${o}`)));
        return e.create(a);
      }
      function Z(e, t, o, a = 0) {
        let n = [],
          r = [];
        for (let i = 0; i < o; i++)
          n.push(K(e, `${t}x`, a * o + i)), r.push(K(e, `${t}y`, a * o + i));
        if (new Set([...n, ...r]).size !== 2 * o)
          throw Error('X and Y values are not distinct');
        return n.map((t) => r.map((o) => e.inv(e.sub(t, o))));
      }
      function Y(e, t) {
        if (
          ((0, i.jr)(e.Fp),
          !Number.isSafeInteger(e.rate) || !Number.isSafeInteger(e.capacity))
        )
          throw Error(`Wrong poseidon opts: ${e}`);
        let o = e.rate + e.capacity,
          a = e.roundsFull + e.roundsPartial,
          n = [];
        for (let t = 0; t < a; t++) {
          let a = [];
          for (let n = 0; n < o; n++) a.push(K(e.Fp, 'Hades', o * t + n));
          n.push(a);
        }
        let r = (0, s.poseidon)({
          ...e,
          t: o,
          sboxPower: 3,
          reversePartialPowIdx: !0,
          mds: t,
          roundConstants: n,
        });
        return (r.m = o), (r.rate = e.rate), (r.capacity = e.capacity), r;
      }
      function J(e, t = 0) {
        let o = e.rate + e.capacity;
        if (!Number.isSafeInteger(t)) throw Error(`Wrong mdsAttempt=${t}`);
        return Y(e, Z(e.Fp, 'HadesMDS', o, t));
      }
      let X = Y(
        { Fp: G, rate: 2, capacity: 1, roundsFull: 8, roundsPartial: 83 },
        [
          [3, 1, 1],
          [1, -1, 1],
          [1, 1, -2],
        ].map((e) => e.map(BigInt))
      );
      function Q(e, t, o = X) {
        return o([e, t, 2n])[0];
      }
      function ee(e, t, o = X) {
        return u.IV(Q(u.Ph(e), u.Ph(t), o));
      }
      function et(e, t = X) {
        return t([e, 0n, 1n])[0];
      }
      function eo(e, t = X) {
        let { m: o, rate: a } = t;
        if (!Array.isArray(e)) throw Error('bigint array expected in values');
        let n = Array.from(e);
        for (n.push(1n); n.length % a != 0; ) n.push(0n);
        let r = Array(o).fill(0n);
        for (let e = 0; e < n.length; e += a) {
          for (let t = 0; t < a; t++) {
            let o = n[e + t];
            if (void 0 === o) throw Error('invalid index');
            if (void 0 === r[t]) throw Error('state[j] is undefined');
            r[t] = r[t] + o;
          }
          r = t(r);
        }
        return r[0];
      }
    },
    5418: (e, t, o) => {
      'use strict';
      o.d(t, {
        $q: () => l,
        If: () => s,
        Sq: () => u,
        WY: () => p,
        en: () => i,
        hK: () => d,
        om: () => m,
        sI: () => r,
        sv: () => c,
        vn: () => n,
        wV: () => a,
      });
      let a = {
          DECLARE: 'DECLARE',
          DEPLOY: 'DEPLOY',
          DEPLOY_ACCOUNT: 'DEPLOY_ACCOUNT',
          INVOKE: 'INVOKE',
          L1_HANDLER: 'L1_HANDLER',
        },
        n = {
          SKIP_VALIDATE: 'SKIP_VALIDATE',
          SKIP_FEE_CHARGE: 'SKIP_FEE_CHARGE',
        },
        r = {
          RECEIVED: 'RECEIVED',
          REJECTED: 'REJECTED',
          ACCEPTED_ON_L2: 'ACCEPTED_ON_L2',
          ACCEPTED_ON_L1: 'ACCEPTED_ON_L1',
        },
        i = {
          ACCEPTED_ON_L2: 'ACCEPTED_ON_L2',
          ACCEPTED_ON_L1: 'ACCEPTED_ON_L1',
        },
        s = { SUCCEEDED: 'SUCCEEDED', REVERTED: 'REVERTED' },
        l = { LATEST: 'latest', PENDING: 'pending' },
        u = { L1: 'L1', L2: 'L2' },
        c = { L1: 0, L2: 1 },
        p = {
          V0: '0x0',
          V1: '0x1',
          V2: '0x2',
          V3: '0x3',
          F0: '0x100000000000000000000000000000000',
          F1: '0x100000000000000000000000000000001',
          F2: '0x100000000000000000000000000000002',
          F3: '0x100000000000000000000000000000003',
        },
        m = {
          V0: '0x0',
          V1: '0x1',
          V2: '0x2',
          F0: '0x100000000000000000000000000000000',
          F1: '0x100000000000000000000000000000001',
          F2: '0x100000000000000000000000000000002',
        },
        d = { V3: '0x3', F3: '0x100000000000000000000000000000003' };
    },
    8981: (e, t, o) => {
      'use strict';
      o.r(t),
        o.d(t, {
          API: () => r,
          EBlockTag: () => s.$q,
          EDAMode: () => s.sv,
          EDataAvailabilityMode: () => s.Sq,
          ESimulationFlag: () => s.vn,
          ETransactionExecutionStatus: () => s.If,
          ETransactionFinalityStatus: () => s.en,
          ETransactionStatus: () => s.sI,
          ETransactionType: () => s.wV,
          ETransactionVersion: () => s.WY,
          ETransactionVersion2: () => s.om,
          ETransactionVersion3: () => s.hK,
          Errors: () => a,
          Permission: () => l,
          SPEC: () => n,
          TypedDataRevision: () => u.K,
          WALLET_API: () => i,
        });
      var a = {};
      o.r(a);
      var n = {};
      o.r(n);
      var r = {};
      o.r(r),
        o.d(r, {
          EBlockTag: () => s.$q,
          EDAMode: () => s.sv,
          EDataAvailabilityMode: () => s.Sq,
          ESimulationFlag: () => s.vn,
          ETransactionExecutionStatus: () => s.If,
          ETransactionFinalityStatus: () => s.en,
          ETransactionStatus: () => s.sI,
          ETransactionType: () => s.wV,
          ETransactionVersion: () => s.WY,
          ETransactionVersion2: () => s.om,
          ETransactionVersion3: () => s.hK,
          Errors: () => a,
          SPEC: () => n,
        });
      var i = {};
      o.r(i), o.d(i, { Permission: () => l, TypedDataRevision: () => u.K });
      var s = o(5418);
      let l = { ACCOUNTS: 'accounts' };
      var u = o(1988);
    },
    1988: (e, t, o) => {
      'use strict';
      o.d(t, { K: () => a });
      let a = { ACTIVE: '1', LEGACY: '0' };
    },
    9776: (e, t, o) => {
      'use strict';
      o.d(t, { F: () => i });
      var a = o(9262);
      let n = (e) => ('boolean' == typeof e ? `${e}` : 0 === e ? '0' : e),
        r = a.$,
        i = (e, t) => (o) => {
          var a;
          if ((null == t ? void 0 : t.variants) == null)
            return r(
              e,
              null == o ? void 0 : o.class,
              null == o ? void 0 : o.className
            );
          let { variants: i, defaultVariants: s } = t,
            l = Object.keys(i).map((e) => {
              let t = null == o ? void 0 : o[e],
                a = null == s ? void 0 : s[e];
              if (null === t) return null;
              let r = n(t) || n(a);
              return i[e][r];
            }),
            u =
              o &&
              Object.entries(o).reduce((e, t) => {
                let [o, a] = t;
                return void 0 === a || (e[o] = a), e;
              }, {});
          return r(
            e,
            l,
            null == t
              ? void 0
              : null === (a = t.compoundVariants) || void 0 === a
                ? void 0
                : a.reduce((e, t) => {
                    let { class: o, className: a, ...n } = t;
                    return Object.entries(n).every((e) => {
                      let [t, o] = e;
                      return Array.isArray(o)
                        ? o.includes({ ...s, ...u }[t])
                        : { ...s, ...u }[t] === o;
                    })
                      ? [...e, o, a]
                      : e;
                  }, []),
            null == o ? void 0 : o.class,
            null == o ? void 0 : o.className
          );
        };
    },
    9262: (e, t, o) => {
      'use strict';
      function a() {
        for (var e, t, o = 0, a = '', n = arguments.length; o < n; o++)
          (e = arguments[o]) &&
            (t = (function e(t) {
              var o,
                a,
                n = '';
              if ('string' == typeof t || 'number' == typeof t) n += t;
              else if ('object' == typeof t) {
                if (Array.isArray(t)) {
                  var r = t.length;
                  for (o = 0; o < r; o++)
                    t[o] && (a = e(t[o])) && (n && (n += ' '), (n += a));
                } else for (a in t) t[a] && (n && (n += ' '), (n += a));
              }
              return n;
            })(e)) &&
            (a && (a += ' '), (a += t));
        return a;
      }
      o.d(t, { $: () => a });
    },
    9708: (e, t, o) => {
      'use strict';
      o.d(t, { A: () => m });
      var a,
        n = o(1275),
        r = o(3691);
      let i = new Set([
        '',
        'no-referrer',
        'no-referrer-when-downgrade',
        'same-origin',
        'origin',
        'strict-origin',
        'origin-when-cross-origin',
        'strict-origin-when-cross-origin',
        'unsafe-url',
      ]);
      function s(e, t) {}
      function l(e, t) {
        e.headers.delete(t);
      }
      function u(e, t) {
        let o = e.headers;
        for (let e of Object.keys(o)) e.toLowerCase() === t && delete o[e];
      }
      let c = new Set([301, 302, 303, 307, 308]);
      async function p(e, t, o) {
        var a;
        switch (t.redirect ?? 'follow') {
          case 'error':
            throw TypeError(
              `URI requested responded with a redirect and redirect mode is set to error: ${o.url}`
            );
          case 'manual':
            return o;
          case 'follow':
            break;
          default:
            throw TypeError(`Invalid redirect option: ${t.redirect}`);
        }
        let n = o.headers.get('location');
        if (null === n) return o;
        let r = o.url,
          c = new URL(n, r).toString(),
          p = t.redirectCount ?? 0,
          m = t.maxRedirect ?? 20;
        if (p >= m)
          throw TypeError(`Reached maximum redirect of ${m} for URL: ${r}`);
        let d =
          null == (a = t = { ...t, redirectCount: p + 1 }).headers
            ? s
            : 'function' == typeof a.headers.delete
              ? l
              : u;
        if (
          !(function (e, t) {
            let o = new URL(t).hostname,
              a = new URL(e).hostname;
            return o === a || o.endsWith(`.${a}`);
          })(r, c)
        )
          for (let e of [
            'authorization',
            'www-authenticate',
            'cookie',
            'cookie2',
          ])
            d(t, e);
        let f = t.body,
          h = t.body;
        if (
          303 !== o.status &&
          null != t.body &&
          ('function' == typeof f.pipe || 'function' == typeof h.pipeTo)
        )
          throw TypeError(
            'Cannot follow redirect with body being a readable stream'
          );
        return (
          (303 === o.status ||
            ((301 === o.status || 302 === o.status) && 'POST' === t.method)) &&
            ((t.method = 'GET'), (t.body = void 0), d(t, 'content-length')),
          o.headers.has('referrer-policy') &&
            (t.referrerPolicy = (function (e) {
              let t = e.split(/[,\s]+/),
                o = '';
              for (let e of t) '' !== e && i.has(e) && (o = e);
              return o;
            })(o.headers.get('referrer-policy'))),
          await e(c, t)
        );
      }
      function m(e, t, i = !0) {
        let s = t ?? new n.CookieJar();
        async function l(t, o) {
          var a;
          let n = o ?? {};
          o = { ...o, redirect: 'manual' };
          let u = 'string' == typeof t ? t : (t.url ?? t.href);
          o = (function (e, t, o) {
            if ('' === o) return t;
            let a = t.headers;
            return (
              e.headers && 'function' == typeof e.headers.append
                ? e.headers.append('cookie', o)
                : a && 'function' == typeof a.append
                  ? a.append('cookie', o)
                  : (t = { ...t, headers: { ...t.headers, cookie: o } }),
              t
            );
          })(t, o, await s.getCookieString(u));
          let m = await e(t, o),
            d = (function (e) {
              let t = e.headers;
              if ('function' == typeof t.getAll) return t.getAll('set-cookie');
              if ('function' == typeof t.raw) {
                let e = t.raw();
                return Array.isArray(e['set-cookie']) ? e['set-cookie'] : [];
              }
              let o = e.headers.get('set-cookie');
              return null !== o ? (0, r.splitCookiesString)(o) : [];
            })(m);
          return (await Promise.all(
            d.map(async (e) => await s.setCookie(e, m.url, { ignoreError: i }))
          ),
          (o.redirectCount ?? 0) > 0 &&
            Object.defineProperty(m, 'redirected', { value: !0 }),
          (a = m.status),
          c.has(a))
            ? await p(l, n, m)
            : m;
        }
        return (l.toughCookie = a || (a = o.t(n, 2))), l;
      }
      m.toughCookie = a || (a = o.t(n, 2));
    },
    168: (e, t, o) => {
      'use strict';
      function a(e) {
        return n.test(e);
      }
      o.d(t, {
        Fq: () => a,
        qg: () => h,
        z3: () => f,
        As: () =>
          function e(t, o, a, n) {
            let i =
              'number' == typeof a
                ? ' '.repeat(a)
                : 'string' == typeof a && '' !== a
                  ? a
                  : void 0;
            return (function t(s, l) {
              if (Array.isArray(n)) {
                let e = n.find((e) => e.test(s));
                if (e) {
                  let t = e.stringify(s);
                  if ('string' != typeof t || !r.test(t))
                    throw Error(
                      `Invalid JSON number: output of a number stringifier must be a string containing a JSON number (output: ${t})`
                    );
                  return t;
                }
              }
              return 'boolean' == typeof s ||
                'number' == typeof s ||
                'string' == typeof s ||
                null === s ||
                s instanceof Date ||
                s instanceof Boolean ||
                s instanceof Number ||
                s instanceof String
                ? JSON.stringify(s)
                : s?.isLosslessNumber || 'bigint' == typeof s
                  ? s.toString()
                  : Array.isArray(s)
                    ? (function (e, a) {
                        if (0 === e.length) return '[]';
                        let n = i ? a + i : void 0,
                          r = i ? '[\n' : '[';
                        for (let a = 0; a < e.length; a++) {
                          let s =
                            'function' == typeof o
                              ? o.call(e, String(a), e[a])
                              : e[a];
                          i && (r += n),
                            void 0 !== s && 'function' != typeof s
                              ? (r += t(s, n))
                              : (r += 'null'),
                            a < e.length - 1 && (r += i ? ',\n' : ',');
                        }
                        return (
                          r +
                          (i
                            ? `
${a}]`
                            : ']')
                        );
                      })(s, l)
                    : s && 'object' == typeof s
                      ? (function (n, r) {
                          if ('function' == typeof n.toJSON)
                            return e(n.toJSON(), o, a, void 0);
                          let s = Array.isArray(o)
                            ? o.map(String)
                            : Object.keys(n);
                          if (0 === s.length) return '{}';
                          let l = i ? r + i : void 0,
                            u = !0,
                            c = i ? '{\n' : '{';
                          for (let e of s) {
                            let a =
                              'function' == typeof o
                                ? o.call(n, e, n[e])
                                : n[e];
                            if (
                              void 0 !== a &&
                              'function' != typeof a &&
                              'symbol' != typeof a
                            ) {
                              u ? (u = !1) : (c += i ? ',\n' : ',');
                              let o = JSON.stringify(e);
                              (c += i ? `${l + o}: ` : `${o}:`), (c += t(a, l));
                            }
                          }
                          return (
                            c +
                            (i
                              ? `
${r}}`
                              : '}')
                          );
                        })(s, l)
                      : void 0;
            })('function' == typeof o ? o.call({ '': t }, '', t) : t, '');
          },
      });
      let n = /^-?[0-9]+$/,
        r = /^-?(?:0|[1-9]\d*)(?:\.\d+)?(?:[eE][+-]?\d+)?$/,
        i = (function (e) {
          return (
            (e.underflow = 'underflow'),
            (e.overflow = 'overflow'),
            (e.truncate_integer = 'truncate_integer'),
            (e.truncate_float = 'truncate_float'),
            e
          );
        })({});
      function s(e) {
        return e.replace(l, '').replace(c, '').replace(p, '').replace(u, '');
      }
      let l = /[eE][+-]?\d+$/,
        u = /^-?(0*)?/,
        c = /\./,
        p = /0+$/;
      class m {
        isLosslessNumber = !0;
        constructor(e) {
          if (!r.test(e)) throw Error(`Invalid number (value: "${e}")`);
          this.value = e;
        }
        valueOf() {
          let e = (function (e) {
            if (
              (function (e, t) {
                let o = String(Number.parseFloat(e)),
                  n = s(e),
                  r = s(o);
                return !!(
                  n === r ||
                  (t?.approx === !0 &&
                    !a(e) &&
                    r.length >= 14 &&
                    n.startsWith(r.substring(0, 14)))
                );
              })(e, { approx: !1 })
            )
              return;
            if (a(e)) return i.truncate_integer;
            let t = Number.parseFloat(e);
            return Number.isFinite(t)
              ? 0 === t
                ? i.underflow
                : i.truncate_float
              : i.overflow;
          })(this.value);
          if (void 0 === e || e === i.truncate_float)
            return Number.parseFloat(this.value);
          if (a(this.value)) return BigInt(this.value);
          throw Error(
            `Cannot safely convert to number: the value '${this.value}' would ${e} and become ${Number.parseFloat(this.value)}`
          );
        }
        toString() {
          return this.value;
        }
      }
      function d(e) {
        return new m(e);
      }
      function f(e) {
        return a(e) ? BigInt(e) : Number.parseFloat(e);
      }
      function h(e, t) {
        let o =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : d,
          a = 0,
          n = (function t() {
            i();
            let n =
              s() ??
              (function () {
                let t = a;
                if (
                  (e.charCodeAt(a) === P && (a++, u(t)), e.charCodeAt(a) === B)
                )
                  a++;
                else {
                  var n;
                  if ((n = e.charCodeAt(a)) >= R && n <= T)
                    for (a++; y(e.charCodeAt(a)); ) a++;
                }
                if (e.charCodeAt(a) === N)
                  for (a++, u(t); y(e.charCodeAt(a)); ) a++;
                if (e.charCodeAt(a) === _ || e.charCodeAt(a) === M)
                  for (
                    a++,
                      (e.charCodeAt(a) === P || e.charCodeAt(a) === I) && a++,
                      u(t);
                    y(e.charCodeAt(a));

                  )
                    a++;
                if (a > t) return o(e.slice(t, a));
              })() ??
              (function () {
                if (e.charCodeAt(a) === j) {
                  a++, i();
                  let o = {},
                    n = !0;
                  for (; a < e.length && e.charCodeAt(a) !== v; ) {
                    n ? (n = !1) : (l(), i());
                    let r = a,
                      u = s();
                    if (void 0 === u) {
                      !(function () {
                        throw SyntaxError(`Quoted object key expected ${p()}`);
                      })();
                      return;
                    }
                    i(),
                      (function () {
                        if (e.charCodeAt(a) !== D)
                          throw SyntaxError(
                            `Colon ':' expected after property name ${p()}`
                          );
                        a++;
                      })();
                    let m = t();
                    if (void 0 === m) {
                      !(function () {
                        throw SyntaxError(
                          `Object value expected after ':' ${c()}`
                        );
                      })();
                      return;
                    }
                    Object.prototype.hasOwnProperty.call(o, u) &&
                      !(function e(t, o) {
                        return (
                          t === o ||
                          (Array.isArray(t) && Array.isArray(o)
                            ? t.length === o.length &&
                              t.every((t, a) => e(t, o[a]))
                            : !!(k(t) && k(o)) &&
                              [
                                ...new Set([
                                  ...Object.keys(t),
                                  ...Object.keys(o),
                                ]),
                              ].every((a) => e(t[a], o[a])))
                        );
                      })(m, o[u]) &&
                      (function (e, t) {
                        throw SyntaxError(
                          `Duplicate key '${e}' encountered at position ${t}`
                        );
                      })(u, r + 1),
                      (o[u] = m);
                  }
                  return (
                    e.charCodeAt(a) !== v &&
                      (function () {
                        throw SyntaxError(
                          `Quoted object key or end of object '}' expected ${p()}`
                        );
                      })(),
                    a++,
                    o
                  );
                }
              })() ??
              (function () {
                if (e.charCodeAt(a) === z) {
                  a++, i();
                  let o = [],
                    n = !0;
                  for (; a < e.length && e.charCodeAt(a) !== x; ) {
                    n ? (n = !1) : l();
                    let e = t();
                    (function (e) {
                      if (void 0 === e)
                        throw SyntaxError(`Array item expected ${p()}`);
                    })(e),
                      o.push(e);
                  }
                  return (
                    e.charCodeAt(a) !== x &&
                      (function () {
                        throw SyntaxError(
                          `Array item or end of array ']' expected ${p()}`
                        );
                      })(),
                    a++,
                    o
                  );
                }
              })() ??
              r('true', !0) ??
              r('false', !1) ??
              r('null', null);
            return i(), n;
          })();
        return (
          (function (e) {
            if (void 0 === e) throw SyntaxError(`JSON value expected ${p()}`);
          })(n),
          (function () {
            if (a < e.length) throw SyntaxError(`Expected end of input ${p()}`);
          })(),
          t
            ? (function e(t, o, a, n) {
                return Array.isArray(a)
                  ? n.call(
                      t,
                      o,
                      (function (t, o) {
                        for (let a = 0; a < t.length; a++)
                          t[a] = e(t, String(a), t[a], o);
                        return t;
                      })(a, n)
                    )
                  : a &&
                      'object' == typeof a &&
                      !(a && 'object' == typeof a && !0 === a.isLosslessNumber)
                    ? n.call(
                        t,
                        o,
                        (function (t, o) {
                          for (let a of Object.keys(t)) {
                            let n = e(t, a, t[a], o);
                            void 0 !== n ? (t[a] = n) : delete t[a];
                          }
                          return t;
                        })(a, n)
                      )
                    : n.call(t, o, a);
              })({ '': n }, '', n, t)
            : n
        );
        function r(t, o) {
          if (e.slice(a, a + t.length) === t) return (a += t.length), o;
        }
        function i() {
          for (
            var t;
            (t = e.charCodeAt(a)) === E || t === A || t === S || t === O;

          )
            a++;
        }
        function s() {
          if (e.charCodeAt(a) === C) {
            a++;
            let o = '';
            for (; a < e.length && e.charCodeAt(a) !== C; ) {
              if (e.charCodeAt(a) === w) {
                let t = e[a + 1],
                  n = b[t];
                void 0 !== n
                  ? ((o += n), a++)
                  : 'u' === t
                    ? g(e.charCodeAt(a + 2)) &&
                      g(e.charCodeAt(a + 3)) &&
                      g(e.charCodeAt(a + 4)) &&
                      g(e.charCodeAt(a + 5))
                      ? ((o += String.fromCharCode(
                          Number.parseInt(e.slice(a + 2, a + 6), 16)
                        )),
                        (a += 5))
                      : (function (t) {
                          let o = e.slice(t, t + 6);
                          throw SyntaxError(
                            `Invalid unicode character '${o}' ${c()}`
                          );
                        })(a)
                    : (function (t) {
                        let o = e.slice(t, t + 2);
                        throw SyntaxError(
                          `Invalid escape character '${o}' ${c()}`
                        );
                      })(a);
              } else {
                var t;
                (t = e.charCodeAt(a)) >= 32 && t <= 1114111
                  ? (o += e[a])
                  : (function (e) {
                      throw SyntaxError(`Invalid character '${e}' ${c()}`);
                    })(e[a]);
              }
              a++;
            }
            return (
              (function () {
                if (e.charCodeAt(a) !== C)
                  throw SyntaxError(`End of string '"' expected ${p()}`);
              })(),
              a++,
              o
            );
          }
        }
        function l() {
          if (e.charCodeAt(a) !== L)
            throw SyntaxError(`Comma ',' expected after value ${p()}`);
          a++;
        }
        function u(t) {
          if (!y(e.charCodeAt(a))) {
            let o = e.slice(t, a);
            throw SyntaxError(
              `Invalid number '${o}', expecting a digit ${p()}`
            );
          }
        }
        function c() {
          return `at position ${a}`;
        }
        function p() {
          return `${a < e.length ? `but got '${e[a]}'` : 'but reached end of input'} ${c()}`;
        }
      }
      function g(e) {
        return (e >= B && e <= T) || (e >= U && e <= q) || (e >= F && e <= $);
      }
      function y(e) {
        return e >= B && e <= T;
      }
      function k(e) {
        return 'object' == typeof e && null !== e;
      }
      let b = {
          '"': '"',
          '\\': '\\',
          '/': '/',
          b: '\b',
          f: '\f',
          n: '\n',
          r: '\r',
          t: '	',
        },
        w = 92,
        j = 123,
        v = 125,
        z = 91,
        x = 93,
        E = 32,
        A = 10,
        S = 9,
        O = 13,
        C = 34,
        I = 43,
        P = 45,
        B = 48,
        R = 49,
        T = 57,
        L = 44,
        N = 46,
        D = 58,
        U = 65,
        F = 97,
        M = 69,
        _ = 101,
        q = 70,
        $ = 102;
    },
    145: (e, t, o) => {
      'use strict';
      o.d(t, { k5: () => c });
      var a = o(7960),
        n = {
          color: void 0,
          size: void 0,
          className: void 0,
          style: void 0,
          attr: void 0,
        },
        r = a.createContext && a.createContext(n),
        i = ['attr', 'size', 'title'];
      function s() {
        return (s = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var o = arguments[t];
                for (var a in o)
                  Object.prototype.hasOwnProperty.call(o, a) && (e[a] = o[a]);
              }
              return e;
            }).apply(this, arguments);
      }
      function l(e, t) {
        var o = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            o.push.apply(o, a);
        }
        return o;
      }
      function u(e) {
        for (var t = 1; t < arguments.length; t++) {
          var o = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? l(Object(o), !0).forEach(function (t) {
                var a, n;
                (a = t),
                  (n = o[t]),
                  (a = (function (e) {
                    var t = (function (e, t) {
                      if ('object' != typeof e || !e) return e;
                      var o = e[Symbol.toPrimitive];
                      if (void 0 !== o) {
                        var a = o.call(e, t || 'default');
                        if ('object' != typeof a) return a;
                        throw TypeError(
                          '@@toPrimitive must return a primitive value.'
                        );
                      }
                      return ('string' === t ? String : Number)(e);
                    })(e, 'string');
                    return 'symbol' == typeof t ? t : t + '';
                  })(a)) in e
                    ? Object.defineProperty(e, a, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (e[a] = n);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o))
              : l(Object(o)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(o, t)
                  );
                });
        }
        return e;
      }
      function c(e) {
        return (t) =>
          a.createElement(
            p,
            s({ attr: u({}, e.attr) }, t),
            (function e(t) {
              return (
                t &&
                t.map((t, o) =>
                  a.createElement(t.tag, u({ key: o }, t.attr), e(t.child))
                )
              );
            })(e.child)
          );
      }
      function p(e) {
        var t = (t) => {
          var o,
            { attr: n, size: r, title: l } = e,
            c = (function (e, t) {
              if (null == e) return {};
              var o,
                a,
                n = (function (e, t) {
                  if (null == e) return {};
                  var o = {};
                  for (var a in e)
                    if (Object.prototype.hasOwnProperty.call(e, a)) {
                      if (t.indexOf(a) >= 0) continue;
                      o[a] = e[a];
                    }
                  return o;
                })(e, t);
              if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                for (a = 0; a < r.length; a++)
                  (o = r[a]),
                    !(t.indexOf(o) >= 0) &&
                      Object.prototype.propertyIsEnumerable.call(e, o) &&
                      (n[o] = e[o]);
              }
              return n;
            })(e, i),
            p = r || t.size || '1em';
          return (
            t.className && (o = t.className),
            e.className && (o = (o ? o + ' ' : '') + e.className),
            a.createElement(
              'svg',
              s(
                {
                  stroke: 'currentColor',
                  fill: 'currentColor',
                  strokeWidth: '0',
                },
                t.attr,
                n,
                c,
                {
                  className: o,
                  style: u(u({ color: e.color || t.color }, t.style), e.style),
                  height: p,
                  width: p,
                  xmlns: 'http://www.w3.org/2000/svg',
                }
              ),
              l && a.createElement('title', null, l),
              e.children
            )
          );
        };
        return void 0 !== r
          ? a.createElement(r.Consumer, null, (e) => t(e))
          : t(n);
      }
    },
    2735: (e, t, o) => {
      'use strict';
      o.d(t, { QP: () => Z });
      let a = (e) => {
          let t = s(e),
            { conflictingClassGroups: o, conflictingClassGroupModifiers: a } =
              e;
          return {
            getClassGroupId: (e) => {
              let o = e.split('-');
              return (
                '' === o[0] && 1 !== o.length && o.shift(), n(o, t) || i(e)
              );
            },
            getConflictingClassGroupIds: (e, t) => {
              let n = o[e] || [];
              return t && a[e] ? [...n, ...a[e]] : n;
            },
          };
        },
        n = (e, t) => {
          if (0 === e.length) return t.classGroupId;
          let o = e[0],
            a = t.nextPart.get(o),
            r = a ? n(e.slice(1), a) : void 0;
          if (r) return r;
          if (0 === t.validators.length) return;
          let i = e.join('-');
          return t.validators.find(({ validator: e }) => e(i))?.classGroupId;
        },
        r = /^\[(.+)\]$/,
        i = (e) => {
          if (r.test(e)) {
            let t = r.exec(e)[1],
              o = t?.substring(0, t.indexOf(':'));
            if (o) return 'arbitrary..' + o;
          }
        },
        s = (e) => {
          let { theme: t, prefix: o } = e,
            a = { nextPart: new Map(), validators: [] };
          return (
            p(Object.entries(e.classGroups), o).forEach(([e, o]) => {
              l(o, a, e, t);
            }),
            a
          );
        },
        l = (e, t, o, a) => {
          e.forEach((e) => {
            if ('string' == typeof e) {
              ('' === e ? t : u(t, e)).classGroupId = o;
              return;
            }
            if ('function' == typeof e) {
              if (c(e)) {
                l(e(a), t, o, a);
                return;
              }
              t.validators.push({ validator: e, classGroupId: o });
              return;
            }
            Object.entries(e).forEach(([e, n]) => {
              l(n, u(t, e), o, a);
            });
          });
        },
        u = (e, t) => {
          let o = e;
          return (
            t.split('-').forEach((e) => {
              o.nextPart.has(e) ||
                o.nextPart.set(e, { nextPart: new Map(), validators: [] }),
                (o = o.nextPart.get(e));
            }),
            o
          );
        },
        c = (e) => e.isThemeGetter,
        p = (e, t) =>
          t
            ? e.map(([e, o]) => [
                e,
                o.map((e) =>
                  'string' == typeof e
                    ? t + e
                    : 'object' == typeof e
                      ? Object.fromEntries(
                          Object.entries(e).map(([e, o]) => [t + e, o])
                        )
                      : e
                ),
              ])
            : e,
        m = (e) => {
          if (e < 1) return { get: () => void 0, set: () => {} };
          let t = 0,
            o = new Map(),
            a = new Map(),
            n = (n, r) => {
              o.set(n, r), ++t > e && ((t = 0), (a = o), (o = new Map()));
            };
          return {
            get(e) {
              let t = o.get(e);
              return void 0 !== t
                ? t
                : void 0 !== (t = a.get(e))
                  ? (n(e, t), t)
                  : void 0;
            },
            set(e, t) {
              o.has(e) ? o.set(e, t) : n(e, t);
            },
          };
        },
        d = (e) => {
          let { separator: t, experimentalParseClassName: o } = e,
            a = 1 === t.length,
            n = t[0],
            r = t.length,
            i = (e) => {
              let o;
              let i = [],
                s = 0,
                l = 0;
              for (let u = 0; u < e.length; u++) {
                let c = e[u];
                if (0 === s) {
                  if (c === n && (a || e.slice(u, u + r) === t)) {
                    i.push(e.slice(l, u)), (l = u + r);
                    continue;
                  }
                  if ('/' === c) {
                    o = u;
                    continue;
                  }
                }
                '[' === c ? s++ : ']' === c && s--;
              }
              let u = 0 === i.length ? e : e.substring(l),
                c = u.startsWith('!'),
                p = c ? u.substring(1) : u;
              return {
                modifiers: i,
                hasImportantModifier: c,
                baseClassName: p,
                maybePostfixModifierPosition: o && o > l ? o - l : void 0,
              };
            };
          return o ? (e) => o({ className: e, parseClassName: i }) : i;
        },
        f = (e) => {
          if (e.length <= 1) return e;
          let t = [],
            o = [];
          return (
            e.forEach((e) => {
              '[' === e[0] ? (t.push(...o.sort(), e), (o = [])) : o.push(e);
            }),
            t.push(...o.sort()),
            t
          );
        },
        h = (e) => ({ cache: m(e.cacheSize), parseClassName: d(e), ...a(e) }),
        g = /\s+/,
        y = (e, t) => {
          let {
              parseClassName: o,
              getClassGroupId: a,
              getConflictingClassGroupIds: n,
            } = t,
            r = [],
            i = e.trim().split(g),
            s = '';
          for (let e = i.length - 1; e >= 0; e -= 1) {
            let t = i[e],
              {
                modifiers: l,
                hasImportantModifier: u,
                baseClassName: c,
                maybePostfixModifierPosition: p,
              } = o(t),
              m = !!p,
              d = a(m ? c.substring(0, p) : c);
            if (!d) {
              if (!m || !(d = a(c))) {
                s = t + (s.length > 0 ? ' ' + s : s);
                continue;
              }
              m = !1;
            }
            let h = f(l).join(':'),
              g = u ? h + '!' : h,
              y = g + d;
            if (r.includes(y)) continue;
            r.push(y);
            let k = n(d, m);
            for (let e = 0; e < k.length; ++e) {
              let t = k[e];
              r.push(g + t);
            }
            s = t + (s.length > 0 ? ' ' + s : s);
          }
          return s;
        };
      function k() {
        let e,
          t,
          o = 0,
          a = '';
        for (; o < arguments.length; )
          (e = arguments[o++]) && (t = b(e)) && (a && (a += ' '), (a += t));
        return a;
      }
      let b = (e) => {
          let t;
          if ('string' == typeof e) return e;
          let o = '';
          for (let a = 0; a < e.length; a++)
            e[a] && (t = b(e[a])) && (o && (o += ' '), (o += t));
          return o;
        },
        w = (e) => {
          let t = (t) => t[e] || [];
          return (t.isThemeGetter = !0), t;
        },
        j = /^\[(?:([a-z-]+):)?(.+)\]$/i,
        v = /^\d+\/\d+$/,
        z = new Set(['px', 'full', 'screen']),
        x = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
        E =
          /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
        A = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
        S = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
        O =
          /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
        C = (e) => P(e) || z.has(e) || v.test(e),
        I = (e) => H(e, 'length', V),
        P = (e) => !!e && !Number.isNaN(Number(e)),
        B = (e) => H(e, 'number', P),
        R = (e) => !!e && Number.isInteger(Number(e)),
        T = (e) => e.endsWith('%') && P(e.slice(0, -1)),
        L = (e) => j.test(e),
        N = (e) => x.test(e),
        D = new Set(['length', 'size', 'percentage']),
        U = (e) => H(e, D, W),
        F = (e) => H(e, 'position', W),
        M = new Set(['image', 'url']),
        _ = (e) => H(e, M, K),
        q = (e) => H(e, '', G),
        $ = () => !0,
        H = (e, t, o) => {
          let a = j.exec(e);
          return (
            !!a &&
            (a[1] ? ('string' == typeof t ? a[1] === t : t.has(a[1])) : o(a[2]))
          );
        },
        V = (e) => E.test(e) && !A.test(e),
        W = () => !1,
        G = (e) => S.test(e),
        K = (e) => O.test(e);
      Symbol.toStringTag;
      let Z = (function (e, ...t) {
        let o, a, n;
        let r = function (s) {
          return (
            (a = (o = h(t.reduce((e, t) => t(e), e()))).cache.get),
            (n = o.cache.set),
            (r = i),
            i(s)
          );
        };
        function i(e) {
          let t = a(e);
          if (t) return t;
          let r = y(e, o);
          return n(e, r), r;
        }
        return function () {
          return r(k.apply(null, arguments));
        };
      })(() => {
        let e = w('colors'),
          t = w('spacing'),
          o = w('blur'),
          a = w('brightness'),
          n = w('borderColor'),
          r = w('borderRadius'),
          i = w('borderSpacing'),
          s = w('borderWidth'),
          l = w('contrast'),
          u = w('grayscale'),
          c = w('hueRotate'),
          p = w('invert'),
          m = w('gap'),
          d = w('gradientColorStops'),
          f = w('gradientColorStopPositions'),
          h = w('inset'),
          g = w('margin'),
          y = w('opacity'),
          k = w('padding'),
          b = w('saturate'),
          j = w('scale'),
          v = w('sepia'),
          z = w('skew'),
          x = w('space'),
          E = w('translate'),
          A = () => ['auto', 'contain', 'none'],
          S = () => ['auto', 'hidden', 'clip', 'visible', 'scroll'],
          O = () => ['auto', L, t],
          D = () => [L, t],
          M = () => ['', C, I],
          H = () => ['auto', P, L],
          V = () => [
            'bottom',
            'center',
            'left',
            'left-bottom',
            'left-top',
            'right',
            'right-bottom',
            'right-top',
            'top',
          ],
          W = () => ['solid', 'dashed', 'dotted', 'double', 'none'],
          G = () => [
            'normal',
            'multiply',
            'screen',
            'overlay',
            'darken',
            'lighten',
            'color-dodge',
            'color-burn',
            'hard-light',
            'soft-light',
            'difference',
            'exclusion',
            'hue',
            'saturation',
            'color',
            'luminosity',
          ],
          K = () => [
            'start',
            'end',
            'center',
            'between',
            'around',
            'evenly',
            'stretch',
          ],
          Z = () => ['', '0', L],
          Y = () => [
            'auto',
            'avoid',
            'all',
            'avoid-page',
            'page',
            'left',
            'right',
            'column',
          ],
          J = () => [P, L];
        return {
          cacheSize: 500,
          separator: ':',
          theme: {
            colors: [$],
            spacing: [C, I],
            blur: ['none', '', N, L],
            brightness: J(),
            borderColor: [e],
            borderRadius: ['none', '', 'full', N, L],
            borderSpacing: D(),
            borderWidth: M(),
            contrast: J(),
            grayscale: Z(),
            hueRotate: J(),
            invert: Z(),
            gap: D(),
            gradientColorStops: [e],
            gradientColorStopPositions: [T, I],
            inset: O(),
            margin: O(),
            opacity: J(),
            padding: D(),
            saturate: J(),
            scale: J(),
            sepia: Z(),
            skew: J(),
            space: D(),
            translate: D(),
          },
          classGroups: {
            aspect: [{ aspect: ['auto', 'square', 'video', L] }],
            container: ['container'],
            columns: [{ columns: [N] }],
            'break-after': [{ 'break-after': Y() }],
            'break-before': [{ 'break-before': Y() }],
            'break-inside': [
              {
                'break-inside': ['auto', 'avoid', 'avoid-page', 'avoid-column'],
              },
            ],
            'box-decoration': [{ 'box-decoration': ['slice', 'clone'] }],
            box: [{ box: ['border', 'content'] }],
            display: [
              'block',
              'inline-block',
              'inline',
              'flex',
              'inline-flex',
              'table',
              'inline-table',
              'table-caption',
              'table-cell',
              'table-column',
              'table-column-group',
              'table-footer-group',
              'table-header-group',
              'table-row-group',
              'table-row',
              'flow-root',
              'grid',
              'inline-grid',
              'contents',
              'list-item',
              'hidden',
            ],
            float: [{ float: ['right', 'left', 'none', 'start', 'end'] }],
            clear: [
              { clear: ['left', 'right', 'both', 'none', 'start', 'end'] },
            ],
            isolation: ['isolate', 'isolation-auto'],
            'object-fit': [
              { object: ['contain', 'cover', 'fill', 'none', 'scale-down'] },
            ],
            'object-position': [{ object: [...V(), L] }],
            overflow: [{ overflow: S() }],
            'overflow-x': [{ 'overflow-x': S() }],
            'overflow-y': [{ 'overflow-y': S() }],
            overscroll: [{ overscroll: A() }],
            'overscroll-x': [{ 'overscroll-x': A() }],
            'overscroll-y': [{ 'overscroll-y': A() }],
            position: ['static', 'fixed', 'absolute', 'relative', 'sticky'],
            inset: [{ inset: [h] }],
            'inset-x': [{ 'inset-x': [h] }],
            'inset-y': [{ 'inset-y': [h] }],
            start: [{ start: [h] }],
            end: [{ end: [h] }],
            top: [{ top: [h] }],
            right: [{ right: [h] }],
            bottom: [{ bottom: [h] }],
            left: [{ left: [h] }],
            visibility: ['visible', 'invisible', 'collapse'],
            z: [{ z: ['auto', R, L] }],
            basis: [{ basis: O() }],
            'flex-direction': [
              { flex: ['row', 'row-reverse', 'col', 'col-reverse'] },
            ],
            'flex-wrap': [{ flex: ['wrap', 'wrap-reverse', 'nowrap'] }],
            flex: [{ flex: ['1', 'auto', 'initial', 'none', L] }],
            grow: [{ grow: Z() }],
            shrink: [{ shrink: Z() }],
            order: [{ order: ['first', 'last', 'none', R, L] }],
            'grid-cols': [{ 'grid-cols': [$] }],
            'col-start-end': [{ col: ['auto', { span: ['full', R, L] }, L] }],
            'col-start': [{ 'col-start': H() }],
            'col-end': [{ 'col-end': H() }],
            'grid-rows': [{ 'grid-rows': [$] }],
            'row-start-end': [{ row: ['auto', { span: [R, L] }, L] }],
            'row-start': [{ 'row-start': H() }],
            'row-end': [{ 'row-end': H() }],
            'grid-flow': [
              {
                'grid-flow': ['row', 'col', 'dense', 'row-dense', 'col-dense'],
              },
            ],
            'auto-cols': [{ 'auto-cols': ['auto', 'min', 'max', 'fr', L] }],
            'auto-rows': [{ 'auto-rows': ['auto', 'min', 'max', 'fr', L] }],
            gap: [{ gap: [m] }],
            'gap-x': [{ 'gap-x': [m] }],
            'gap-y': [{ 'gap-y': [m] }],
            'justify-content': [{ justify: ['normal', ...K()] }],
            'justify-items': [
              { 'justify-items': ['start', 'end', 'center', 'stretch'] },
            ],
            'justify-self': [
              { 'justify-self': ['auto', 'start', 'end', 'center', 'stretch'] },
            ],
            'align-content': [{ content: ['normal', ...K(), 'baseline'] }],
            'align-items': [
              { items: ['start', 'end', 'center', 'baseline', 'stretch'] },
            ],
            'align-self': [
              {
                self: ['auto', 'start', 'end', 'center', 'stretch', 'baseline'],
              },
            ],
            'place-content': [{ 'place-content': [...K(), 'baseline'] }],
            'place-items': [
              {
                'place-items': [
                  'start',
                  'end',
                  'center',
                  'baseline',
                  'stretch',
                ],
              },
            ],
            'place-self': [
              { 'place-self': ['auto', 'start', 'end', 'center', 'stretch'] },
            ],
            p: [{ p: [k] }],
            px: [{ px: [k] }],
            py: [{ py: [k] }],
            ps: [{ ps: [k] }],
            pe: [{ pe: [k] }],
            pt: [{ pt: [k] }],
            pr: [{ pr: [k] }],
            pb: [{ pb: [k] }],
            pl: [{ pl: [k] }],
            m: [{ m: [g] }],
            mx: [{ mx: [g] }],
            my: [{ my: [g] }],
            ms: [{ ms: [g] }],
            me: [{ me: [g] }],
            mt: [{ mt: [g] }],
            mr: [{ mr: [g] }],
            mb: [{ mb: [g] }],
            ml: [{ ml: [g] }],
            'space-x': [{ 'space-x': [x] }],
            'space-x-reverse': ['space-x-reverse'],
            'space-y': [{ 'space-y': [x] }],
            'space-y-reverse': ['space-y-reverse'],
            w: [
              { w: ['auto', 'min', 'max', 'fit', 'svw', 'lvw', 'dvw', L, t] },
            ],
            'min-w': [{ 'min-w': [L, t, 'min', 'max', 'fit'] }],
            'max-w': [
              {
                'max-w': [
                  L,
                  t,
                  'none',
                  'full',
                  'min',
                  'max',
                  'fit',
                  'prose',
                  { screen: [N] },
                  N,
                ],
              },
            ],
            h: [
              { h: [L, t, 'auto', 'min', 'max', 'fit', 'svh', 'lvh', 'dvh'] },
            ],
            'min-h': [
              { 'min-h': [L, t, 'min', 'max', 'fit', 'svh', 'lvh', 'dvh'] },
            ],
            'max-h': [
              { 'max-h': [L, t, 'min', 'max', 'fit', 'svh', 'lvh', 'dvh'] },
            ],
            size: [{ size: [L, t, 'auto', 'min', 'max', 'fit'] }],
            'font-size': [{ text: ['base', N, I] }],
            'font-smoothing': ['antialiased', 'subpixel-antialiased'],
            'font-style': ['italic', 'not-italic'],
            'font-weight': [
              {
                font: [
                  'thin',
                  'extralight',
                  'light',
                  'normal',
                  'medium',
                  'semibold',
                  'bold',
                  'extrabold',
                  'black',
                  B,
                ],
              },
            ],
            'font-family': [{ font: [$] }],
            'fvn-normal': ['normal-nums'],
            'fvn-ordinal': ['ordinal'],
            'fvn-slashed-zero': ['slashed-zero'],
            'fvn-figure': ['lining-nums', 'oldstyle-nums'],
            'fvn-spacing': ['proportional-nums', 'tabular-nums'],
            'fvn-fraction': ['diagonal-fractions', 'stacked-fractions'],
            tracking: [
              {
                tracking: [
                  'tighter',
                  'tight',
                  'normal',
                  'wide',
                  'wider',
                  'widest',
                  L,
                ],
              },
            ],
            'line-clamp': [{ 'line-clamp': ['none', P, B] }],
            leading: [
              {
                leading: [
                  'none',
                  'tight',
                  'snug',
                  'normal',
                  'relaxed',
                  'loose',
                  C,
                  L,
                ],
              },
            ],
            'list-image': [{ 'list-image': ['none', L] }],
            'list-style-type': [{ list: ['none', 'disc', 'decimal', L] }],
            'list-style-position': [{ list: ['inside', 'outside'] }],
            'placeholder-color': [{ placeholder: [e] }],
            'placeholder-opacity': [{ 'placeholder-opacity': [y] }],
            'text-alignment': [
              { text: ['left', 'center', 'right', 'justify', 'start', 'end'] },
            ],
            'text-color': [{ text: [e] }],
            'text-opacity': [{ 'text-opacity': [y] }],
            'text-decoration': [
              'underline',
              'overline',
              'line-through',
              'no-underline',
            ],
            'text-decoration-style': [{ decoration: [...W(), 'wavy'] }],
            'text-decoration-thickness': [
              { decoration: ['auto', 'from-font', C, I] },
            ],
            'underline-offset': [{ 'underline-offset': ['auto', C, L] }],
            'text-decoration-color': [{ decoration: [e] }],
            'text-transform': [
              'uppercase',
              'lowercase',
              'capitalize',
              'normal-case',
            ],
            'text-overflow': ['truncate', 'text-ellipsis', 'text-clip'],
            'text-wrap': [{ text: ['wrap', 'nowrap', 'balance', 'pretty'] }],
            indent: [{ indent: D() }],
            'vertical-align': [
              {
                align: [
                  'baseline',
                  'top',
                  'middle',
                  'bottom',
                  'text-top',
                  'text-bottom',
                  'sub',
                  'super',
                  L,
                ],
              },
            ],
            whitespace: [
              {
                whitespace: [
                  'normal',
                  'nowrap',
                  'pre',
                  'pre-line',
                  'pre-wrap',
                  'break-spaces',
                ],
              },
            ],
            break: [{ break: ['normal', 'words', 'all', 'keep'] }],
            hyphens: [{ hyphens: ['none', 'manual', 'auto'] }],
            content: [{ content: ['none', L] }],
            'bg-attachment': [{ bg: ['fixed', 'local', 'scroll'] }],
            'bg-clip': [
              { 'bg-clip': ['border', 'padding', 'content', 'text'] },
            ],
            'bg-opacity': [{ 'bg-opacity': [y] }],
            'bg-origin': [{ 'bg-origin': ['border', 'padding', 'content'] }],
            'bg-position': [{ bg: [...V(), F] }],
            'bg-repeat': [
              {
                bg: ['no-repeat', { repeat: ['', 'x', 'y', 'round', 'space'] }],
              },
            ],
            'bg-size': [{ bg: ['auto', 'cover', 'contain', U] }],
            'bg-image': [
              {
                bg: [
                  'none',
                  {
                    'gradient-to': ['t', 'tr', 'r', 'br', 'b', 'bl', 'l', 'tl'],
                  },
                  _,
                ],
              },
            ],
            'bg-color': [{ bg: [e] }],
            'gradient-from-pos': [{ from: [f] }],
            'gradient-via-pos': [{ via: [f] }],
            'gradient-to-pos': [{ to: [f] }],
            'gradient-from': [{ from: [d] }],
            'gradient-via': [{ via: [d] }],
            'gradient-to': [{ to: [d] }],
            rounded: [{ rounded: [r] }],
            'rounded-s': [{ 'rounded-s': [r] }],
            'rounded-e': [{ 'rounded-e': [r] }],
            'rounded-t': [{ 'rounded-t': [r] }],
            'rounded-r': [{ 'rounded-r': [r] }],
            'rounded-b': [{ 'rounded-b': [r] }],
            'rounded-l': [{ 'rounded-l': [r] }],
            'rounded-ss': [{ 'rounded-ss': [r] }],
            'rounded-se': [{ 'rounded-se': [r] }],
            'rounded-ee': [{ 'rounded-ee': [r] }],
            'rounded-es': [{ 'rounded-es': [r] }],
            'rounded-tl': [{ 'rounded-tl': [r] }],
            'rounded-tr': [{ 'rounded-tr': [r] }],
            'rounded-br': [{ 'rounded-br': [r] }],
            'rounded-bl': [{ 'rounded-bl': [r] }],
            'border-w': [{ border: [s] }],
            'border-w-x': [{ 'border-x': [s] }],
            'border-w-y': [{ 'border-y': [s] }],
            'border-w-s': [{ 'border-s': [s] }],
            'border-w-e': [{ 'border-e': [s] }],
            'border-w-t': [{ 'border-t': [s] }],
            'border-w-r': [{ 'border-r': [s] }],
            'border-w-b': [{ 'border-b': [s] }],
            'border-w-l': [{ 'border-l': [s] }],
            'border-opacity': [{ 'border-opacity': [y] }],
            'border-style': [{ border: [...W(), 'hidden'] }],
            'divide-x': [{ 'divide-x': [s] }],
            'divide-x-reverse': ['divide-x-reverse'],
            'divide-y': [{ 'divide-y': [s] }],
            'divide-y-reverse': ['divide-y-reverse'],
            'divide-opacity': [{ 'divide-opacity': [y] }],
            'divide-style': [{ divide: W() }],
            'border-color': [{ border: [n] }],
            'border-color-x': [{ 'border-x': [n] }],
            'border-color-y': [{ 'border-y': [n] }],
            'border-color-s': [{ 'border-s': [n] }],
            'border-color-e': [{ 'border-e': [n] }],
            'border-color-t': [{ 'border-t': [n] }],
            'border-color-r': [{ 'border-r': [n] }],
            'border-color-b': [{ 'border-b': [n] }],
            'border-color-l': [{ 'border-l': [n] }],
            'divide-color': [{ divide: [n] }],
            'outline-style': [{ outline: ['', ...W()] }],
            'outline-offset': [{ 'outline-offset': [C, L] }],
            'outline-w': [{ outline: [C, I] }],
            'outline-color': [{ outline: [e] }],
            'ring-w': [{ ring: M() }],
            'ring-w-inset': ['ring-inset'],
            'ring-color': [{ ring: [e] }],
            'ring-opacity': [{ 'ring-opacity': [y] }],
            'ring-offset-w': [{ 'ring-offset': [C, I] }],
            'ring-offset-color': [{ 'ring-offset': [e] }],
            shadow: [{ shadow: ['', 'inner', 'none', N, q] }],
            'shadow-color': [{ shadow: [$] }],
            opacity: [{ opacity: [y] }],
            'mix-blend': [
              { 'mix-blend': [...G(), 'plus-lighter', 'plus-darker'] },
            ],
            'bg-blend': [{ 'bg-blend': G() }],
            filter: [{ filter: ['', 'none'] }],
            blur: [{ blur: [o] }],
            brightness: [{ brightness: [a] }],
            contrast: [{ contrast: [l] }],
            'drop-shadow': [{ 'drop-shadow': ['', 'none', N, L] }],
            grayscale: [{ grayscale: [u] }],
            'hue-rotate': [{ 'hue-rotate': [c] }],
            invert: [{ invert: [p] }],
            saturate: [{ saturate: [b] }],
            sepia: [{ sepia: [v] }],
            'backdrop-filter': [{ 'backdrop-filter': ['', 'none'] }],
            'backdrop-blur': [{ 'backdrop-blur': [o] }],
            'backdrop-brightness': [{ 'backdrop-brightness': [a] }],
            'backdrop-contrast': [{ 'backdrop-contrast': [l] }],
            'backdrop-grayscale': [{ 'backdrop-grayscale': [u] }],
            'backdrop-hue-rotate': [{ 'backdrop-hue-rotate': [c] }],
            'backdrop-invert': [{ 'backdrop-invert': [p] }],
            'backdrop-opacity': [{ 'backdrop-opacity': [y] }],
            'backdrop-saturate': [{ 'backdrop-saturate': [b] }],
            'backdrop-sepia': [{ 'backdrop-sepia': [v] }],
            'border-collapse': [{ border: ['collapse', 'separate'] }],
            'border-spacing': [{ 'border-spacing': [i] }],
            'border-spacing-x': [{ 'border-spacing-x': [i] }],
            'border-spacing-y': [{ 'border-spacing-y': [i] }],
            'table-layout': [{ table: ['auto', 'fixed'] }],
            caption: [{ caption: ['top', 'bottom'] }],
            transition: [
              {
                transition: [
                  'none',
                  'all',
                  '',
                  'colors',
                  'opacity',
                  'shadow',
                  'transform',
                  L,
                ],
              },
            ],
            duration: [{ duration: J() }],
            ease: [{ ease: ['linear', 'in', 'out', 'in-out', L] }],
            delay: [{ delay: J() }],
            animate: [
              { animate: ['none', 'spin', 'ping', 'pulse', 'bounce', L] },
            ],
            transform: [{ transform: ['', 'gpu', 'none'] }],
            scale: [{ scale: [j] }],
            'scale-x': [{ 'scale-x': [j] }],
            'scale-y': [{ 'scale-y': [j] }],
            rotate: [{ rotate: [R, L] }],
            'translate-x': [{ 'translate-x': [E] }],
            'translate-y': [{ 'translate-y': [E] }],
            'skew-x': [{ 'skew-x': [z] }],
            'skew-y': [{ 'skew-y': [z] }],
            'transform-origin': [
              {
                origin: [
                  'center',
                  'top',
                  'top-right',
                  'right',
                  'bottom-right',
                  'bottom',
                  'bottom-left',
                  'left',
                  'top-left',
                  L,
                ],
              },
            ],
            accent: [{ accent: ['auto', e] }],
            appearance: [{ appearance: ['none', 'auto'] }],
            cursor: [
              {
                cursor: [
                  'auto',
                  'default',
                  'pointer',
                  'wait',
                  'text',
                  'move',
                  'help',
                  'not-allowed',
                  'none',
                  'context-menu',
                  'progress',
                  'cell',
                  'crosshair',
                  'vertical-text',
                  'alias',
                  'copy',
                  'no-drop',
                  'grab',
                  'grabbing',
                  'all-scroll',
                  'col-resize',
                  'row-resize',
                  'n-resize',
                  'e-resize',
                  's-resize',
                  'w-resize',
                  'ne-resize',
                  'nw-resize',
                  'se-resize',
                  'sw-resize',
                  'ew-resize',
                  'ns-resize',
                  'nesw-resize',
                  'nwse-resize',
                  'zoom-in',
                  'zoom-out',
                  L,
                ],
              },
            ],
            'caret-color': [{ caret: [e] }],
            'pointer-events': [{ 'pointer-events': ['none', 'auto'] }],
            resize: [{ resize: ['none', 'y', 'x', ''] }],
            'scroll-behavior': [{ scroll: ['auto', 'smooth'] }],
            'scroll-m': [{ 'scroll-m': D() }],
            'scroll-mx': [{ 'scroll-mx': D() }],
            'scroll-my': [{ 'scroll-my': D() }],
            'scroll-ms': [{ 'scroll-ms': D() }],
            'scroll-me': [{ 'scroll-me': D() }],
            'scroll-mt': [{ 'scroll-mt': D() }],
            'scroll-mr': [{ 'scroll-mr': D() }],
            'scroll-mb': [{ 'scroll-mb': D() }],
            'scroll-ml': [{ 'scroll-ml': D() }],
            'scroll-p': [{ 'scroll-p': D() }],
            'scroll-px': [{ 'scroll-px': D() }],
            'scroll-py': [{ 'scroll-py': D() }],
            'scroll-ps': [{ 'scroll-ps': D() }],
            'scroll-pe': [{ 'scroll-pe': D() }],
            'scroll-pt': [{ 'scroll-pt': D() }],
            'scroll-pr': [{ 'scroll-pr': D() }],
            'scroll-pb': [{ 'scroll-pb': D() }],
            'scroll-pl': [{ 'scroll-pl': D() }],
            'snap-align': [{ snap: ['start', 'end', 'center', 'align-none'] }],
            'snap-stop': [{ snap: ['normal', 'always'] }],
            'snap-type': [{ snap: ['none', 'x', 'y', 'both'] }],
            'snap-strictness': [{ snap: ['mandatory', 'proximity'] }],
            touch: [{ touch: ['auto', 'none', 'manipulation'] }],
            'touch-x': [{ 'touch-pan': ['x', 'left', 'right'] }],
            'touch-y': [{ 'touch-pan': ['y', 'up', 'down'] }],
            'touch-pz': ['touch-pinch-zoom'],
            select: [{ select: ['none', 'text', 'all', 'auto'] }],
            'will-change': [
              { 'will-change': ['auto', 'scroll', 'contents', 'transform', L] },
            ],
            fill: [{ fill: [e, 'none'] }],
            'stroke-w': [{ stroke: [C, I, B] }],
            stroke: [{ stroke: [e, 'none'] }],
            sr: ['sr-only', 'not-sr-only'],
            'forced-color-adjust': [
              { 'forced-color-adjust': ['auto', 'none'] },
            ],
          },
          conflictingClassGroups: {
            overflow: ['overflow-x', 'overflow-y'],
            overscroll: ['overscroll-x', 'overscroll-y'],
            inset: [
              'inset-x',
              'inset-y',
              'start',
              'end',
              'top',
              'right',
              'bottom',
              'left',
            ],
            'inset-x': ['right', 'left'],
            'inset-y': ['top', 'bottom'],
            flex: ['basis', 'grow', 'shrink'],
            gap: ['gap-x', 'gap-y'],
            p: ['px', 'py', 'ps', 'pe', 'pt', 'pr', 'pb', 'pl'],
            px: ['pr', 'pl'],
            py: ['pt', 'pb'],
            m: ['mx', 'my', 'ms', 'me', 'mt', 'mr', 'mb', 'ml'],
            mx: ['mr', 'ml'],
            my: ['mt', 'mb'],
            size: ['w', 'h'],
            'font-size': ['leading'],
            'fvn-normal': [
              'fvn-ordinal',
              'fvn-slashed-zero',
              'fvn-figure',
              'fvn-spacing',
              'fvn-fraction',
            ],
            'fvn-ordinal': ['fvn-normal'],
            'fvn-slashed-zero': ['fvn-normal'],
            'fvn-figure': ['fvn-normal'],
            'fvn-spacing': ['fvn-normal'],
            'fvn-fraction': ['fvn-normal'],
            'line-clamp': ['display', 'overflow'],
            rounded: [
              'rounded-s',
              'rounded-e',
              'rounded-t',
              'rounded-r',
              'rounded-b',
              'rounded-l',
              'rounded-ss',
              'rounded-se',
              'rounded-ee',
              'rounded-es',
              'rounded-tl',
              'rounded-tr',
              'rounded-br',
              'rounded-bl',
            ],
            'rounded-s': ['rounded-ss', 'rounded-es'],
            'rounded-e': ['rounded-se', 'rounded-ee'],
            'rounded-t': ['rounded-tl', 'rounded-tr'],
            'rounded-r': ['rounded-tr', 'rounded-br'],
            'rounded-b': ['rounded-br', 'rounded-bl'],
            'rounded-l': ['rounded-tl', 'rounded-bl'],
            'border-spacing': ['border-spacing-x', 'border-spacing-y'],
            'border-w': [
              'border-w-s',
              'border-w-e',
              'border-w-t',
              'border-w-r',
              'border-w-b',
              'border-w-l',
            ],
            'border-w-x': ['border-w-r', 'border-w-l'],
            'border-w-y': ['border-w-t', 'border-w-b'],
            'border-color': [
              'border-color-s',
              'border-color-e',
              'border-color-t',
              'border-color-r',
              'border-color-b',
              'border-color-l',
            ],
            'border-color-x': ['border-color-r', 'border-color-l'],
            'border-color-y': ['border-color-t', 'border-color-b'],
            'scroll-m': [
              'scroll-mx',
              'scroll-my',
              'scroll-ms',
              'scroll-me',
              'scroll-mt',
              'scroll-mr',
              'scroll-mb',
              'scroll-ml',
            ],
            'scroll-mx': ['scroll-mr', 'scroll-ml'],
            'scroll-my': ['scroll-mt', 'scroll-mb'],
            'scroll-p': [
              'scroll-px',
              'scroll-py',
              'scroll-ps',
              'scroll-pe',
              'scroll-pt',
              'scroll-pr',
              'scroll-pb',
              'scroll-pl',
            ],
            'scroll-px': ['scroll-pr', 'scroll-pl'],
            'scroll-py': ['scroll-pt', 'scroll-pb'],
            touch: ['touch-x', 'touch-y', 'touch-pz'],
            'touch-x': ['touch'],
            'touch-y': ['touch'],
            'touch-pz': ['touch'],
          },
          conflictingClassGroupModifiers: { 'font-size': ['leading'] },
        };
      });
    },
  },
]);
