'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [821],
  {
    3666: (e, t, r) => {
      r.d(t, { bd: () => aB, fg: () => ie });
      var n = r(8981),
        a = r(5418),
        i = r(7088),
        s = r(168),
        o = r(1988),
        c = r(8853),
        l = r(9922),
        d = r(4240),
        u = r(8844),
        h = r(5484),
        p = r(7450),
        f = r(2171),
        g = r(3238),
        y = r(9708),
        m = r(4105),
        E = r(4649),
        _ = (r(6567).hp, Object.defineProperty),
        b = Object.getOwnPropertyDescriptor,
        T = Object.getOwnPropertyNames,
        A = Object.prototype.hasOwnProperty,
        v = (e, t) => {
          for (var r in t) _(e, r, { get: t[r], enumerable: !0 });
        };
      v(
        {},
        {
          ADDR_BOUND: () => ec,
          API_VERSION: () => ei,
          BaseUrl: () => ep,
          DEFAULT_GLOBAL_CONFIG: () => eC,
          FeeMarginPercentage: () => em,
          HARDENING_4BYTES: () => eI,
          HARDENING_BYTE: () => ew,
          IS_BROWSER: () => $,
          MASK_250: () => en,
          MASK_31: () => ea,
          MAX_STORAGE_ITEM_SIZE: () => eo,
          NetworkName: () => ef,
          OutsideExecutionCallerAny: () => eT,
          PRIME: () => es,
          RANGE_FELT: () => ed,
          RANGE_I128: () => eu,
          RANGE_U128: () => eh,
          RPC_DEFAULT_VERSION: () => e_,
          RPC_NODES: () => eb,
          SNIP9_V1_INTERFACE_ID: () => eA,
          SNIP9_V2_INTERFACE_ID: () => ev,
          SYSTEM_MESSAGES: () => eS,
          StarknetChainId: () => eg,
          TEXT_TO_FELT_MAX_LEN: () => et,
          TRANSACTION_VERSION: () => w.ETransactionVersion,
          TransactionHashPrefix: () => ey,
          UDC: () => eE,
          ZERO: () => er,
        }
      );
      var w = {};
      v(w, { JRPC: () => I, RPCSPEC06: () => C, RPCSPEC07: () => n });
      var I = {},
        C = {};
      v(C, {
        EBlockTag: () => B,
        EDAMode: () => P,
        EDataAvailabilityMode: () => F,
        ESimulationFlag: () => x,
        ETransactionExecutionStatus: () => V,
        ETransactionFinalityStatus: () => D,
        ETransactionStatus: () => O,
        ETransactionType: () => N,
        ETransactionVersion: () => R,
        ETransactionVersion2: () => L,
        ETransactionVersion3: () => M,
        Errors: () => S,
        SPEC: () => k,
      });
      var S = {},
        k = {},
        N = {
          DECLARE: 'DECLARE',
          DEPLOY: 'DEPLOY',
          DEPLOY_ACCOUNT: 'DEPLOY_ACCOUNT',
          INVOKE: 'INVOKE',
          L1_HANDLER: 'L1_HANDLER',
        },
        x = {
          SKIP_VALIDATE: 'SKIP_VALIDATE',
          SKIP_FEE_CHARGE: 'SKIP_FEE_CHARGE',
        },
        O = {
          RECEIVED: 'RECEIVED',
          REJECTED: 'REJECTED',
          ACCEPTED_ON_L2: 'ACCEPTED_ON_L2',
          ACCEPTED_ON_L1: 'ACCEPTED_ON_L1',
        },
        D = {
          ACCEPTED_ON_L2: 'ACCEPTED_ON_L2',
          ACCEPTED_ON_L1: 'ACCEPTED_ON_L1',
        },
        V = { SUCCEEDED: 'SUCCEEDED', REVERTED: 'REVERTED' },
        B = { PENDING: 'pending', LATEST: 'latest' },
        F = { L1: 'L1', L2: 'L2' },
        P = { L1: 0, L2: 1 },
        R = {
          V0: '0x0',
          V1: '0x1',
          V2: '0x2',
          V3: '0x3',
          F0: '0x100000000000000000000000000000000',
          F1: '0x100000000000000000000000000000001',
          F2: '0x100000000000000000000000000000002',
          F3: '0x100000000000000000000000000000003',
        },
        L = {
          V0: '0x0',
          V1: '0x1',
          V2: '0x2',
          F0: '0x100000000000000000000000000000000',
          F1: '0x100000000000000000000000000000001',
          F2: '0x100000000000000000000000000000002',
        },
        M = { V3: '0x3', F3: '0x100000000000000000000000000000003' };
      ((e, t, r, n) => {
        if ((t && 'object' == typeof t) || 'function' == typeof t)
          for (let a of T(t))
            A.call(e, a) ||
              a === r ||
              _(e, a, {
                get: () => t[a],
                enumerable: !(n = b(t, a)) || n.enumerable,
              });
      })(w, n, 'default'),
        v(
          {},
          {
            IS_BROWSER: () => $,
            addHexPrefix: () => G,
            arrayBufferToString: () => H,
            atobUniversal: () => K,
            btoaUniversal: () => W,
            buf2hex: () => Y,
            calcByteLength: () => z,
            concatenateArrayBuffer: () => ee,
            padLeft: () => X,
            pascalToSnake: () => Q,
            removeHexPrefix: () => q,
            sanitizeBytes: () => J,
            sanitizeHex: () => Z,
            stringToArrayBuffer: () => j,
            utf8ToArray: () => U,
          }
        );
      var $ = 'undefined' != typeof window;
      function H(e) {
        return new Uint8Array(e).reduce(
          (e, t) => e + String.fromCharCode(t),
          ''
        );
      }
      function U(e) {
        return new TextEncoder().encode(e);
      }
      function j(e) {
        return U(e);
      }
      function K(e) {
        return i.K3.decode(e);
      }
      function W(e) {
        return i.K3.encode(new Uint8Array(e));
      }
      function Y(e) {
        return e.reduce((e, t) => e + t.toString(16).padStart(2, '0'), '');
      }
      function q(e) {
        return e.replace(/^0x/i, '');
      }
      function G(e) {
        return `0x${q(e)}`;
      }
      function X(e, t, r = '0') {
        return (function (e, t, r, n = '0') {
          let a = t - e.length,
            i = e;
          if (a > 0) {
            let t = n.repeat(a);
            i = r ? t + e : e + t;
          }
          return i;
        })(e, t, !0, r);
      }
      function z(e, t = 8) {
        let { length: r } = e,
          n = r % t;
        return n ? ((r - n) / t) * t + t : r;
      }
      function J(e, t = 8, r = '0') {
        return X(e, z(e, t), r);
      }
      function Z(e) {
        let t = J(q(e), 2);
        return t ? G(t) : t;
      }
      var Q = (e) =>
        /[a-z]/.test(e)
          ? e
              .split(/(?=[A-Z])/)
              .join('_')
              .toUpperCase()
          : e;
      function ee(e) {
        let t = new Uint8Array(e.reduce((e, t) => e + t.byteLength, 0)),
          r = 0;
        return (
          e.forEach((e) => {
            t.set(e, r), (r += e.byteLength);
          }),
          t
        );
      }
      var et = 31,
        er = 0n,
        en = 2n ** 250n - 1n,
        ea = 2n ** 31n - 1n,
        ei = er,
        es = 2n ** 251n + 17n * 2n ** 192n + 1n,
        eo = 256n,
        ec = 2n ** 251n - eo,
        el = (e, t) => ({ min: e, max: t }),
        ed = el(er, es - 1n),
        eu = el(-(2n ** 127n), 2n ** 127n - 1n),
        eh = el(er, 2n ** 128n - 1n),
        ep = ((e) => (
          (e.SN_MAIN = 'https://alpha-mainnet.starknet.io'),
          (e.SN_SEPOLIA = 'https://alpha-sepolia.starknet.io'),
          e
        ))(ep || {}),
        ef = ((e) => (
          (e.SN_MAIN = 'SN_MAIN'), (e.SN_SEPOLIA = 'SN_SEPOLIA'), e
        ))(ef || {}),
        eg = ((e) => (
          (e.SN_MAIN = '0x534e5f4d41494e'),
          (e.SN_SEPOLIA = '0x534e5f5345504f4c4941'),
          e
        ))(eg || {}),
        ey = ((e) => (
          (e.DECLARE = '0x6465636c617265'),
          (e.DEPLOY = '0x6465706c6f79'),
          (e.DEPLOY_ACCOUNT = '0x6465706c6f795f6163636f756e74'),
          (e.INVOKE = '0x696e766f6b65'),
          (e.L1_HANDLER = '0x6c315f68616e646c6572'),
          e
        ))(ey || {}),
        em = ((e) => (
          (e[(e.L1_BOUND_MAX_AMOUNT = 50)] = 'L1_BOUND_MAX_AMOUNT'),
          (e[(e.L1_BOUND_MAX_PRICE_PER_UNIT = 50)] =
            'L1_BOUND_MAX_PRICE_PER_UNIT'),
          (e[(e.MAX_FEE = 50)] = 'MAX_FEE'),
          e
        ))(em || {}),
        eE = {
          ADDRESS:
            '0x041a78e741e5af2fec34b695679bc6891742439f7afb8484ecd7766661ad02bf',
          ENTRYPOINT: 'deployContract',
        },
        e_ = 'v0_7',
        eb = {
          SN_MAIN: [
            `https://starknet-mainnet.public.blastapi.io/rpc/${e_}`,
            `https://free-rpc.nethermind.io/mainnet-juno/${e_}`,
          ],
          SN_SEPOLIA: [
            `https://starknet-sepolia.public.blastapi.io/rpc/${e_}`,
            `https://free-rpc.nethermind.io/sepolia-juno/${e_}`,
          ],
        },
        eT = '0x414e595f43414c4c4552',
        eA = '0x68cfd18b92d1907b8ba3cc324900277f5a3622099431ea85dd8089255e4181',
        ev = '0x1d1144bb2138366ff28d8e9ab57456b1d332ac42196230c3a602003c89872',
        ew = 128,
        eI = 2147483648n,
        eC = {
          legacyMode: !1,
          logLevel: 'INFO',
          accountTxVersion: w.ETransactionVersion.V2,
        },
        eS = {
          legacyTxWarningMessage:
            'You are using a deprecated transaction version (V0,V1,V2)!\nUpdate to the latest V3 transactions!',
        },
        ek = {};
      v(ek, { RpcChannel: () => nX }),
        v(
          {},
          {
            parse: () => ex,
            parseAlwaysAsBig: () => eO,
            stringify: () => eD,
            stringifyAlwaysAsBig: () => eV,
          }
        );
      var eN = (e) => {
          if (!s.Fq(e)) return parseFloat(e);
          let t = parseInt(e, 10);
          return Number.isSafeInteger(t) ? t : BigInt(e);
        },
        ex = (e) => s.qg(String(e), void 0, eN),
        eO = (e) => s.qg(String(e), void 0, s.z3),
        eD = (e, t, r, n) => s.As(e, t, r, n),
        eV = eD,
        eB = {
          FAILED_TO_RECEIVE_TXN: 1,
          NO_TRACE_AVAILABLE: 10,
          CONTRACT_NOT_FOUND: 20,
          BLOCK_NOT_FOUND: 24,
          INVALID_TXN_INDEX: 27,
          CLASS_HASH_NOT_FOUND: 28,
          TXN_HASH_NOT_FOUND: 29,
          PAGE_SIZE_TOO_BIG: 31,
          NO_BLOCKS: 32,
          INVALID_CONTINUATION_TOKEN: 33,
          TOO_MANY_KEYS_IN_FILTER: 34,
          CONTRACT_ERROR: 40,
          TRANSACTION_EXECUTION_ERROR: 41,
          CLASS_ALREADY_DECLARED: 51,
          INVALID_TRANSACTION_NONCE: 52,
          INSUFFICIENT_MAX_FEE: 53,
          INSUFFICIENT_ACCOUNT_BALANCE: 54,
          VALIDATION_FAILURE: 55,
          COMPILATION_FAILED: 56,
          CONTRACT_CLASS_SIZE_IS_TOO_LARGE: 57,
          NON_ACCOUNT: 58,
          DUPLICATE_TX: 59,
          COMPILED_CLASS_HASH_MISMATCH: 60,
          UNSUPPORTED_TX_VERSION: 61,
          UNSUPPORTED_CONTRACT_CLASS_VERSION: 62,
          UNEXPECTED_ERROR: 63,
        },
        eF = class extends Error {
          name;
          constructor(e) {
            super(e),
              Object.defineProperty(this, 'name', {
                value: new.target.name,
                enumerable: !1,
                configurable: !0,
              }),
              (function (e, t) {
                let { setPrototypeOf: r } = Object;
                r ? r(e, t) : (e.__proto__ = t);
              })(this, new.target.prototype),
              (function (e, t = e.constructor) {
                let { captureStackTrace: r } = Error;
                r && r(e, t);
              })(this);
          }
        },
        eP = class extends eF {},
        eR = class extends eP {
          constructor(e, t, r) {
            super(`RPC: ${t} with params ${eD(r, null, 2)}

      ${e.code}: ${e.message}: ${eD(e.data)}`),
              (this.baseError = e),
              (this.request = { method: t, params: r });
          }
          request;
          get code() {
            return this.baseError.code;
          }
          isType(e) {
            return eB[e] === this.code;
          }
        };
      v(
        {},
        {
          BlockStatus: () => ej,
          BlockTag: () => eK,
          ETH_ADDRESS: () => eG,
          EntryPointType: () => eL,
          Literal: () => eq,
          NON_ZERO_PREFIX: () => eX,
          OutsideExecutionTypesV1: () => ez,
          OutsideExecutionTypesV2: () => eJ,
          OutsideExecutionVersion: () => eZ,
          RPC: () => w,
          TransactionExecutionStatus: () => eU,
          TransactionFinalityStatus: () => eH,
          TransactionStatus: () => e$,
          TransactionType: () => eM,
          TypedDataRevision: () => o.K,
          Uint: () => eY,
          ValidateType: () => eW,
        }
      );
      var eL = {
          EXTERNAL: 'EXTERNAL',
          L1_HANDLER: 'L1_HANDLER',
          CONSTRUCTOR: 'CONSTRUCTOR',
        },
        eM = {
          DECLARE: 'DECLARE',
          DEPLOY: 'DEPLOY',
          DEPLOY_ACCOUNT: 'DEPLOY_ACCOUNT',
          INVOKE: 'INVOKE_FUNCTION',
        },
        e$ = {
          NOT_RECEIVED: 'NOT_RECEIVED',
          RECEIVED: 'RECEIVED',
          ACCEPTED_ON_L2: 'ACCEPTED_ON_L2',
          ACCEPTED_ON_L1: 'ACCEPTED_ON_L1',
          REJECTED: 'REJECTED',
          REVERTED: 'REVERTED',
        },
        eH = {
          NOT_RECEIVED: 'NOT_RECEIVED',
          RECEIVED: 'RECEIVED',
          ACCEPTED_ON_L2: 'ACCEPTED_ON_L2',
          ACCEPTED_ON_L1: 'ACCEPTED_ON_L1',
        },
        eU = {
          REJECTED: 'REJECTED',
          REVERTED: 'REVERTED',
          SUCCEEDED: 'SUCCEEDED',
        },
        ej = {
          PENDING: 'PENDING',
          ACCEPTED_ON_L1: 'ACCEPTED_ON_L1',
          ACCEPTED_ON_L2: 'ACCEPTED_ON_L2',
          REJECTED: 'REJECTED',
        },
        eK = { PENDING: 'pending', LATEST: 'latest' },
        eW = { DEPLOY: 'DEPLOY', CALL: 'CALL', INVOKE: 'INVOKE' },
        eY = {
          u8: 'core::integer::u8',
          u16: 'core::integer::u16',
          u32: 'core::integer::u32',
          u64: 'core::integer::u64',
          u128: 'core::integer::u128',
          u256: 'core::integer::u256',
          u512: 'core::integer::u512',
        },
        eq = {
          ClassHash: 'core::starknet::class_hash::ClassHash',
          ContractAddress: 'core::starknet::contract_address::ContractAddress',
          Secp256k1Point: 'core::starknet::secp256k1::Secp256k1Point',
          U96: 'core::internal::bounded_int::BoundedInt::<0, 79228162514264337593543950335>',
        },
        eG = 'core::starknet::eth_address::EthAddress',
        eX = 'core::zeroable::NonZero::',
        ez = {
          StarkNetDomain: [
            { name: 'name', type: 'felt' },
            { name: 'version', type: 'felt' },
            { name: 'chainId', type: 'felt' },
          ],
          OutsideExecution: [
            { name: 'caller', type: 'felt' },
            { name: 'nonce', type: 'felt' },
            { name: 'execute_after', type: 'felt' },
            { name: 'execute_before', type: 'felt' },
            { name: 'calls_len', type: 'felt' },
            { name: 'calls', type: 'OutsideCall*' },
          ],
          OutsideCall: [
            { name: 'to', type: 'felt' },
            { name: 'selector', type: 'felt' },
            { name: 'calldata_len', type: 'felt' },
            { name: 'calldata', type: 'felt*' },
          ],
        },
        eJ = {
          StarknetDomain: [
            { name: 'name', type: 'shortstring' },
            { name: 'version', type: 'shortstring' },
            { name: 'chainId', type: 'shortstring' },
            { name: 'revision', type: 'shortstring' },
          ],
          OutsideExecution: [
            { name: 'Caller', type: 'ContractAddress' },
            { name: 'Nonce', type: 'felt' },
            { name: 'Execute After', type: 'u128' },
            { name: 'Execute Before', type: 'u128' },
            { name: 'Calls', type: 'Call*' },
          ],
          Call: [
            { name: 'To', type: 'ContractAddress' },
            { name: 'Selector', type: 'selector' },
            { name: 'Calldata', type: 'felt*' },
          ],
        },
        eZ = ((e) => ((e.UNSUPPORTED = '0'), (e.V1 = '1'), (e.V2 = '2'), e))(
          eZ || {}
        ),
        eQ = class {
          nodeUrl;
          headers;
          interval;
          requestId = 0;
          pendingRequests = {};
          batchPromises = {};
          delayTimer;
          delayPromise;
          delayPromiseResolve;
          baseFetch;
          constructor(e) {
            (this.nodeUrl = e.nodeUrl),
              (this.headers = e.headers),
              (this.interval = e.interval),
              (this.baseFetch = e.baseFetch);
          }
          async wait() {
            return (
              (this.delayPromise && this.delayPromiseResolve) ||
                (this.delayPromise = new Promise((e) => {
                  this.delayPromiseResolve = e;
                })),
              this.delayTimer &&
                (clearTimeout(this.delayTimer), (this.delayTimer = void 0)),
              (this.delayTimer = setTimeout(() => {
                this.delayPromiseResolve &&
                  (this.delayPromiseResolve(),
                  (this.delayPromise = void 0),
                  (this.delayPromiseResolve = void 0));
              }, this.interval)),
              this.delayPromise
            );
          }
          addPendingRequest(e, t, r) {
            let n = {
              id: r ?? `batched_${(this.requestId += 1)}`,
              jsonrpc: '2.0',
              method: e,
              params: t ?? void 0,
            };
            return (this.pendingRequests[n.id] = n), n.id;
          }
          async sendBatch(e) {
            return (
              await this.baseFetch(this.nodeUrl, {
                method: 'POST',
                body: eD(e),
                headers: this.headers,
              })
            ).json();
          }
          async fetch(e, t, r) {
            let n = this.addPendingRequest(e, t, r);
            await this.wait();
            let a = this.pendingRequests;
            if (((this.pendingRequests = {}), !this.batchPromises[n])) {
              let e = this.sendBatch(Object.values(a));
              Object.keys(a).forEach((t) => {
                this.batchPromises[t] = e;
              });
            }
            let i = await this.batchPromises[n];
            delete this.batchPromises[n];
            let s = i.find((e) => e.id === n);
            if (!s)
              throw Error(
                `Couldn't find the result for the request. Method: ${e}`
              );
            return s;
          }
        };
      function e0(e, t) {
        if (!e) throw Error(t || 'Assertion failure');
      }
      v(
        {},
        {
          addPercent: () => tf,
          assertInRange: () => ti,
          bigNumberishArrayToDecimalStringArray: () => ts,
          bigNumberishArrayToHexadecimalStringArray: () => to,
          cleanHex: () => ta,
          getDecimalString: () => tl,
          getHexString: () => td,
          getHexStringArray: () => tu,
          hexToBytes: () => tp,
          hexToDecimalString: () => tn,
          isBigNumberish: () => ty,
          isHex: () => e8,
          isStringWholeNumber: () => tc,
          stringToSha256ToArrayBuff4: () => tg,
          toBigInt: () => e9,
          toCairoBool: () => th,
          toHex: () => e7,
          toHex64: () => tr,
          toHexString: () => te,
          toStorageKey: () => tt,
        }
      );
      var e1 = (e) => void 0 === e || void 0 === e;
      function e2(e) {
        return 'number' == typeof e;
      }
      function e5(e) {
        return 'boolean' == typeof e;
      }
      function e6(e) {
        return 'bigint' == typeof e;
      }
      function e4(e) {
        return 'string' == typeof e;
      }
      function e3(e) {
        return !!e && 'object' == typeof e && !Array.isArray(e);
      }
      function e8(e) {
        return /^0x[0-9a-f]*$/i.test(e);
      }
      function e9(e) {
        return BigInt(e);
      }
      function e7(e) {
        return G(e9(e).toString(16));
      }
      var te = e7;
      function tt(e) {
        return G(e9(e).toString(16).padStart(64, '0'));
      }
      function tr(e) {
        let t = G(e9(e).toString(16).padStart(64, '0'));
        if (66 !== t.length)
          throw TypeError('number is too big for hex 0x(64) representation');
        return t;
      }
      function tn(e) {
        return BigInt(G(e)).toString(10);
      }
      function ta(e) {
        return e.toLowerCase().replace(/^(0x)0+/, '$1');
      }
      function ti(e, t, r, n = '') {
        let a = '' === n ? 'invalid length' : `invalid ${n} length`,
          i = BigInt(e),
          s = BigInt(t),
          o = BigInt(r);
        e0(i >= s && i <= o, `Message not signable, ${a}.`);
      }
      function ts(e) {
        return e.map((e) => e9(e).toString(10));
      }
      function to(e) {
        return e.map((e) => e7(e));
      }
      function tc(e) {
        return /^\d+$/.test(e);
      }
      function tl(e) {
        if (e8(e)) return tn(e);
        if (tc(e)) return e;
        throw Error(`${e} needs to be a hex-string or whole-number-string`);
      }
      function td(e) {
        if (e8(e)) return e;
        if (tc(e)) return te(e);
        throw Error(`${e} needs to be a hex-string or whole-number-string`);
      }
      function tu(e) {
        return e.map(td);
      }
      function th(e) {
        return (+e).toString();
      }
      function tp(e) {
        if (!e8(e)) throw Error(`${e} needs to be a hex-string`);
        let t = q(e);
        return t.length % 2 != 0 && (t = `0${t}`), (0, c.aT)(t);
      }
      function tf(e, t) {
        let r = BigInt(e);
        return r + (r * BigInt(t)) / 100n;
      }
      function tg(e) {
        return tp(e7(Number(BigInt(G(Y((0, l.sc)(e)))) & ea)));
      }
      function ty(e) {
        return e2(e) || e6(e) || (e4(e) && (e8(e) || tc(e)));
      }
      function tm(e) {
        let t = q(e7(BigInt(e))),
          r = t.length % 2 == 0 ? t : `0${t}`;
        return G((0, d.keccak)(tp(G(r))).toString(16));
      }
      function tE(e) {
        return BigInt(G((0, d.keccak)(U(e)).toString(16))) & en;
      }
      function t_(e) {
        return e7(tE(e));
      }
      function tb(e) {
        return e2(e) || e6(e) ? e7(e) : e8(e) ? e : tc(e) ? e7(e) : t_(e);
      }
      function tT(e) {
        let t = G(e.reduce((e, t) => e + q(e7(t)).padStart(64, '0'), ''));
        return G((0, c.My)((0, u.lY)(tp(t))));
      }
      function tA(e, t, r, n, a) {
        return tT([e, t, a, r, n.length, ...n]);
      }
      function tv(e) {
        return /^[\x00-\x7F]*$/.test(e);
      }
      function tw(e) {
        return e.length <= et;
      }
      function tI(e) {
        return /^[0-9]*$/i.test(e);
      }
      function tC(e) {
        return e4(e) && !e8(e) && !tc(e);
      }
      v(
        {},
        {
          getL2MessageHash: () => tA,
          getSelector: () => tb,
          getSelectorFromName: () => t_,
          keccakBn: () => tm,
          solidityUint256PackedKeccak256: () => tT,
          starknetKeccak: () => tE,
        }
      ),
        v(
          {},
          {
            decodeShortString: () => tO,
            encodeShortString: () => tx,
            isASCII: () => tv,
            isDecimalString: () => tI,
            isLongText: () => tk,
            isShortString: () => tw,
            isShortText: () => tS,
            isText: () => tC,
            splitLongString: () => tN,
          }
        );
      var tS = (e) => tC(e) && tw(e),
        tk = (e) => tC(e) && !tw(e);
      function tN(e) {
        let t = RegExp(`[^]{1,${et}}`, 'g');
        return e.match(t) || [];
      }
      function tx(e) {
        if (!tv(e)) throw Error(`${e} is not an ASCII string`);
        if (!tw(e)) throw Error(`${e} is too long`);
        return G(e.replace(/./g, (e) => e.charCodeAt(0).toString(16)));
      }
      function tO(e) {
        if (!tv(e)) throw Error(`${e} is not an ASCII string`);
        if (e8(e))
          return q(e).replace(/.{2}/g, (e) =>
            String.fromCharCode(parseInt(e, 16))
          );
        if (tI(e)) return tO('0X'.concat(BigInt(e).toString(16)));
        throw Error(`${e} is not Hex or decimal`);
      }
      function tD(e) {
        let t = 0n === BigInt(e.pending_word) ? '' : tO(e7(e.pending_word));
        return (
          e.data.reduce((e, t) => e + (0n === BigInt(t) ? '' : tO(e7(t))), '') +
          t
        );
      }
      function tV(e) {
        let t = tN(e),
          r = t[t.length - 1],
          n = t.map(tx),
          [a, i] =
            void 0 === r || 31 === r.length ? ['0x00', 0] : [n.pop(), r.length];
        return {
          data: 0 === n.length ? [] : n,
          pending_word: a,
          pending_word_len: i,
        };
      }
      v({}, { byteArrayFromString: () => tV, stringFromByteArray: () => tD });
      function tB(e) {
        if (e6(e) || Number.isInteger(e)) return e.toString();
        if (e4(e)) {
          if (e8(e)) return BigInt(e).toString();
          if (tC(e)) {
            if (!tw(e))
              throw Error(
                `${e} is a long string > 31 chars. Please split it into an array of short strings.`
              );
            return BigInt(tx(e)).toString();
          }
          if (tc(e)) return e;
        }
        if (e5(e)) return `${+e}`;
        throw Error(`${e} can't be computed by felt()`);
      }
      v(
        {},
        {
          felt: () => rn,
          getAbiContractVersion: () => t7,
          getArrayType: () => t3,
          isCairo1Abi: () => t8,
          isCairo1Type: () => t4,
          isLen: () => t$,
          isTypeArray: () => tU,
          isTypeBool: () => tZ,
          isTypeByteArray: () => t2,
          isTypeBytes31: () => t1,
          isTypeContractAddress: () => tQ,
          isTypeEnum: () => tY,
          isTypeEthAddress: () => t0,
          isTypeFelt: () => tH,
          isTypeLiteral: () => tJ,
          isTypeNamedTuple: () => tK,
          isTypeNonZero: () => t9,
          isTypeOption: () => tq,
          isTypeResult: () => tG,
          isTypeSecp256k1Point: () => t6,
          isTypeStruct: () => tW,
          isTypeTuple: () => tj,
          isTypeU96: () => t5,
          isTypeUint: () => tX,
          isTypeUint256: () => tz,
          tuple: () => rr,
          uint256: () => re,
          uint512: () => rt,
        }
      );
      var tF = (1n << 128n) - 1n,
        tP = (1n << 256n) - 1n,
        tR = class e {
          low;
          high;
          static abiSelector = 'core::integer::u256';
          constructor(...t) {
            if (
              'object' == typeof t[0] &&
              1 === t.length &&
              'low' in t[0] &&
              'high' in t[0]
            ) {
              let r = e.validateProps(t[0].low, t[0].high);
              (this.low = r.low), (this.high = r.high);
            } else if (1 === t.length) {
              let r = e.validate(t[0]);
              (this.low = r & tF), (this.high = r >> 128n);
            } else if (2 === t.length) {
              let r = e.validateProps(t[0], t[1]);
              (this.low = r.low), (this.high = r.high);
            } else throw Error('Incorrect constructor parameters');
          }
          static validate(e) {
            let t = BigInt(e);
            if (t < 0n)
              throw Error('bigNumberish is smaller than UINT_256_MIN');
            if (t > tP) throw Error('bigNumberish is bigger than UINT_256_MAX');
            return t;
          }
          static validateProps(e, t) {
            let r = BigInt(e),
              n = BigInt(t);
            if (r < 0n || r > 0xffffffffffffffffffffffffffffffffn)
              throw Error(
                'low is out of range UINT_256_LOW_MIN - UINT_256_LOW_MAX'
              );
            if (n < 0n || n > 0xffffffffffffffffffffffffffffffffn)
              throw Error(
                'high is out of range UINT_256_HIGH_MIN - UINT_256_HIGH_MAX'
              );
            return { low: r, high: n };
          }
          static is(t) {
            try {
              e.validate(t);
            } catch (e) {
              return !1;
            }
            return !0;
          }
          static isAbiType(t) {
            return t === e.abiSelector;
          }
          toBigInt() {
            return (this.high << 128n) + this.low;
          }
          toUint256HexString() {
            return {
              low: G(this.low.toString(16)),
              high: G(this.high.toString(16)),
            };
          }
          toUint256DecimalString() {
            return { low: this.low.toString(10), high: this.high.toString(10) };
          }
          toApiRequest() {
            return [tB(this.low), tB(this.high)];
          }
        },
        tL = (1n << 512n) - 1n,
        tM = class e {
          limb0;
          limb1;
          limb2;
          limb3;
          static abiSelector = 'core::integer::u512';
          constructor(...t) {
            if (
              'object' == typeof t[0] &&
              1 === t.length &&
              'limb0' in t[0] &&
              'limb1' in t[0] &&
              'limb2' in t[0] &&
              'limb3' in t[0]
            ) {
              let r = e.validateProps(
                t[0].limb0,
                t[0].limb1,
                t[0].limb2,
                t[0].limb3
              );
              (this.limb0 = r.limb0),
                (this.limb1 = r.limb1),
                (this.limb2 = r.limb2),
                (this.limb3 = r.limb3);
            } else if (1 === t.length) {
              let r = e.validate(t[0]);
              (this.limb0 = r & tF),
                (this.limb1 = (r & (tF << 128n)) >> 128n),
                (this.limb2 = (r & (tF << 256n)) >> 256n),
                (this.limb3 = r >> 384n);
            } else if (4 === t.length) {
              let r = e.validateProps(t[0], t[1], t[2], t[3]);
              (this.limb0 = r.limb0),
                (this.limb1 = r.limb1),
                (this.limb2 = r.limb2),
                (this.limb3 = r.limb3);
            } else throw Error('Incorrect Uint512 constructor parameters');
          }
          static validate(e) {
            let t = BigInt(e);
            if (t < 0n)
              throw Error('bigNumberish is smaller than UINT_512_MIN.');
            if (t > tL)
              throw Error('bigNumberish is bigger than UINT_512_MAX.');
            return t;
          }
          static validateProps(e, t, r, n) {
            let a = BigInt(e),
              i = BigInt(t),
              s = BigInt(r),
              o = BigInt(n);
            return (
              [a, i, s, o].forEach((e, t) => {
                if (e < 0n || e > tF)
                  throw Error(`limb${t} is not in the range of a u128 number`);
              }),
              { limb0: a, limb1: i, limb2: s, limb3: o }
            );
          }
          static is(t) {
            try {
              e.validate(t);
            } catch (e) {
              return !1;
            }
            return !0;
          }
          static isAbiType(t) {
            return t === e.abiSelector;
          }
          toBigInt() {
            return (
              (this.limb3 << 384n) +
              (this.limb2 << 256n) +
              (this.limb1 << 128n) +
              this.limb0
            );
          }
          toUint512HexString() {
            return {
              limb0: G(this.limb0.toString(16)),
              limb1: G(this.limb1.toString(16)),
              limb2: G(this.limb2.toString(16)),
              limb3: G(this.limb3.toString(16)),
            };
          }
          toUint512DecimalString() {
            return {
              limb0: this.limb0.toString(10),
              limb1: this.limb1.toString(10),
              limb2: this.limb2.toString(10),
              limb3: this.limb3.toString(10),
            };
          }
          toApiRequest() {
            return [
              tB(this.limb0),
              tB(this.limb1),
              tB(this.limb2),
              tB(this.limb3),
            ];
          }
        },
        t$ = (e) => /_len$/.test(e),
        tH = (e) => 'felt' === e || 'core::felt252' === e,
        tU = (e) =>
          /\*/.test(e) ||
          e.startsWith('core::array::Array::') ||
          e.startsWith('core::array::Span::'),
        tj = (e) => /^\(.*\)$/i.test(e),
        tK = (e) => /\(.*\)/i.test(e) && e.includes(':'),
        tW = (e, t) => e in t,
        tY = (e, t) => e in t,
        tq = (e) => e.startsWith('core::option::Option::'),
        tG = (e) => e.startsWith('core::result::Result::'),
        tX = (e) => Object.values(eY).includes(e),
        tz = (e) => tR.isAbiType(e),
        tJ = (e) => Object.values(eq).includes(e),
        tZ = (e) => 'core::bool' === e,
        tQ = (e) => e === eq.ContractAddress,
        t0 = (e) => e === eG,
        t1 = (e) => 'core::bytes_31::bytes31' === e,
        t2 = (e) => 'core::byte_array::ByteArray' === e,
        t5 = (e) =>
          'core::internal::bounded_int::BoundedInt::<0, 79228162514264337593543950335>' ===
          e,
        t6 = (e) => e === eq.Secp256k1Point,
        t4 = (e) => e.includes('::'),
        t3 = (e) =>
          t4(e)
            ? e.substring(e.indexOf('<') + 1, e.lastIndexOf('>'))
            : e.replace('*', '');
      function t8(e) {
        let { cairo: t } = t7(e);
        if (void 0 === t) throw Error('Unable to determine Cairo version');
        return '1' === t;
      }
      function t9(e) {
        return e.startsWith(eX);
      }
      function t7(e) {
        if (e.find((e) => 'interface' === e.type))
          return { cairo: '1', compiler: '2' };
        let t = e.find(
          (e) =>
            ('function' === e.type || 'constructor' === e.type) &&
            (e.inputs.length || e.outputs.length)
        );
        return t
          ? t4((t.inputs.length ? t.inputs : t.outputs)[0].type)
            ? { cairo: '1', compiler: '1' }
            : { cairo: '0', compiler: '0' }
          : { cairo: void 0, compiler: void 0 };
      }
      var re = (e) => new tR(e).toUint256DecimalString(),
        rt = (e) => new tM(e).toUint512DecimalString(),
        rr = (...e) => ({ ...e });
      function rn(e) {
        return tB(e);
      }
      var ra = class {
          variant;
          constructor(e) {
            let t = Object.values(e);
            if (0 === t.length)
              throw Error('This Enum must have at least 1 variant');
            if (1 !== t.filter((e) => !e1(e)).length)
              throw Error('This Enum must have exactly one active variant');
            this.variant = e;
          }
          unwrap() {
            return Object.values(this.variant).find((e) => !e1(e));
          }
          activeVariant() {
            let e = Object.entries(this.variant).find((e) => !e1(e[1]));
            return e1(e) ? '' : e[0];
          }
        },
        ri = { Some: 0, None: 1 },
        rs = class {
          Some;
          None;
          constructor(e, t) {
            if (!(e in Object.values(ri)))
              throw Error(
                'Wrong variant! It should be CairoOptionVariant.Some or .None.'
              );
            if (e === ri.Some) {
              if (e1(t))
                throw Error(
                  'The creation of a Cairo Option with "Some" variant needs a content as input.'
                );
              (this.Some = t), (this.None = void 0);
            } else (this.Some = void 0), (this.None = !0);
          }
          unwrap() {
            return this.None ? void 0 : this.Some;
          }
          isSome() {
            return !e1(this.Some);
          }
          isNone() {
            return !0 === this.None;
          }
        },
        ro = { Ok: 0, Err: 1 },
        rc = class {
          Ok;
          Err;
          constructor(e, t) {
            if (!(e in Object.values(ro)))
              throw Error(
                'Wrong variant! It should be CairoResultVariant.Ok or .Err.'
              );
            e === ro.Ok
              ? ((this.Ok = t), (this.Err = void 0))
              : ((this.Ok = void 0), (this.Err = t));
          }
          unwrap() {
            if (!e1(this.Ok)) return this.Ok;
            if (!e1(this.Err)) return this.Err;
            throw Error(
              'Both Result.Ok and .Err are undefined. Not authorized.'
            );
          }
          isOk() {
            return !e1(this.Ok);
          }
          isErr() {
            return !e1(this.Err);
          }
        },
        rl = {
          isBN: (e, t, r) => {
            if (!e6(e[r]))
              throw Error(
                `Data and formatter mismatch on ${r}:${t[r]}, expected response data ${r}:${e[r]} to be BN instead it is ${typeof e[r]}`
              );
          },
          unknown: (e, t, r) => {
            throw Error(
              `Unhandled formatter type on ${r}:${t[r]} for data ${r}:${e[r]}`
            );
          },
        },
        rd = class {
          abi;
          constructor(e) {
            this.abi = e;
          }
          methodInputsLength(e) {
            return e.inputs.reduce((e, t) => (t$(t.name) ? e : e + 1), 0);
          }
          getMethod(e) {
            return this.abi.find((t) => t.name === e);
          }
          getLegacyFormat() {
            return this.abi;
          }
        },
        ru = class {
          abi;
          constructor(e) {
            this.abi = e;
          }
          methodInputsLength(e) {
            return e.inputs.length;
          }
          getMethod(e) {
            let t = this.abi.find((e) => 'interface' === e.type);
            return t?.items?.find((t) => t.name === e);
          }
          getLegacyFormat() {
            return this.abi.flatMap((e) =>
              'interface' === e.type ? e.items : e
            );
          }
        };
      function rh(e, t, r) {
        return 'constructor' === e && !r && !t.length;
      }
      function rp(e, t, r) {
        for (let n = 0, a = 0; n < e.length; n++)
          if (e[n] === t) a++;
          else if (e[n] === r && 0 == --a) return n;
        return Number.POSITIVE_INFINITY;
      }
      function rf(e) {
        return t4(e)
          ? (function (e) {
              let t;
              let r = e.slice(1, -1),
                n = [],
                a = 0;
              for (; a < r.length; ) {
                switch (!0) {
                  case '(' === r[a]:
                    t = a + rp(r.slice(a), '(', ')') + 1;
                    break;
                  case r.startsWith('core::result::Result::<', a) ||
                    r.startsWith('core::array::Array::<', a) ||
                    r.startsWith('core::option::Option::<', a):
                    t = a + rp(r.slice(a), '<', '>') + 1;
                    break;
                  default: {
                    let e = r.indexOf(',', a);
                    t = -1 !== e ? e : Number.POSITIVE_INFINITY;
                  }
                }
                n.push(r.slice(a, t)), (a = t + 2);
              }
              return n;
            })(e)
          : (function (e) {
              let { subTuple: t, result: r } = (function (e) {
                  if (!e.includes('(')) return { subTuple: [], result: e };
                  let t = [],
                    r = '',
                    n = 0;
                  for (; n < e.length; ) {
                    if ('(' === e[n]) {
                      let a = 1,
                        i = n;
                      for (n++; a; )
                        ')' === e[n] && a--, '(' === e[n] && a++, n++;
                      t.push(e.substring(i, n)), (r += ' '), n--;
                    } else r += e[n];
                    n++;
                  }
                  return { subTuple: t, result: r };
                })(e.replace(/\s/g, '').slice(1, -1)),
                n = r
                  .split(',')
                  .map((e) => (t.length ? e.replace(' ', t.shift()) : e));
              return (
                tK(e) &&
                  (n = n.reduce(
                    (e, t) =>
                      e.concat(
                        (function (e) {
                          let t = e.substring(0, e.indexOf(':')),
                            r = e.substring(t.length + 1);
                          return { name: t, type: r };
                        })(t)
                      ),
                    []
                  )),
                n
              );
            })(e);
      }
      var rg = class e {
        content;
        arrayType;
        constructor(t, r) {
          e0(
            e.isTypeFixedArray(r),
            `The type ${r} is not a Cairo fixed array. Needs [type; length].`
          );
          try {
            e.getFixedArrayType(r);
          } catch {
            throw Error(
              `The type ${r} do not includes any content type. Needs [type; length].`
            );
          }
          try {
            e.getFixedArraySize(r);
          } catch {
            throw Error(
              `The type ${r} type do not includes any length. Needs [type; length].`
            );
          }
          e0(
            e.getFixedArraySize(r) === t.length,
            `The ABI type ${r} is expecting ${e.getFixedArraySize(r)} items. ${t.length} items provided.`
          ),
            (this.content = t),
            (this.arrayType = r);
        }
        static getFixedArraySize(e) {
          let t = e.match(/(?<=; )\d+(?=\])/);
          if (null === t)
            throw Error(
              `ABI type ${e} do not includes a valid number after ';' character.`
            );
          return Number(t[0]);
        }
        getFixedArraySize() {
          return e.getFixedArraySize(this.arrayType);
        }
        static getFixedArrayType = (e) => {
          let t = e.match(/(?<=\[).+(?=;)/);
          if (null === t)
            throw Error(`ABI type ${e} do not includes a valid type of data.`);
          return t[0];
        };
        getFixedArrayType() {
          return e.getFixedArrayType(this.arrayType);
        }
        static compile(e) {
          return e.reduce((e, t, r) => ((e[r] = t), e), {});
        }
        compile() {
          return e.compile(this.content);
        }
        static isTypeFixedArray(e) {
          return (
            /^\[.*;\s.*\]$/.test(e) &&
            /(?<=\[).+(?=;)/.test(e) &&
            /(?<=; )\d+(?=\])/.test(e)
          );
        }
      };
      function ry(e, t) {
        switch (!0) {
          case tR.isAbiType(e):
            return new tR(t).toApiRequest();
          case tM.isAbiType(e):
            return new tM(t).toApiRequest();
          case t1(e):
            return tx(t.toString());
          case t6(e): {
            let e = q(e7(t)).padStart(128, '0'),
              r = re(G(e.slice(-64))),
              n = re(G(e.slice(0, -64)));
            return [tB(n.low), tB(n.high), tB(r.low), tB(r.high)];
          }
          default:
            return tB(t);
        }
      }
      function rm(e, t, r, n) {
        if (void 0 === e) throw Error(`Missing parameter for type ${t}`);
        if (rg.isTypeFixedArray(t)) {
          let a = rg.getFixedArrayType(t),
            i = [];
          if (Array.isArray(e)) i = new rg(e, t).content;
          else if ('object' == typeof e)
            e0(
              (i = Object.values(e)).length === rg.getFixedArraySize(t),
              `ABI type ${t}: object provided do not includes  ${rg.getFixedArraySize(t)} items. ${i.length} items provided.`
            );
          else
            throw Error(
              `ABI type ${t}: not an Array representing a cairo.fixedArray() provided.`
            );
          return i.reduce((e, t) => e.concat(rm(t, a, r, n)), []);
        }
        if (Array.isArray(e)) {
          let a = [];
          a.push(tB(e.length));
          let i = t3(t);
          return e.reduce((e, t) => e.concat(rm(t, i, r, n)), a);
        }
        if (r[t] && r[t].members.length) {
          if (tR.isAbiType(t)) return new tR(e).toApiRequest();
          if (tM.isAbiType(t)) return new tM(e).toApiRequest();
          if (t0(t)) return ry(t, e);
          if (t2(t))
            return (function (e) {
              let t = tV(e);
              return [
                t.data.length.toString(),
                ...t.data.map((e) => e.toString()),
                t.pending_word.toString(),
                t.pending_word_len.toString(),
              ];
            })(e);
          let { members: a } = r[t];
          return a.reduce((t, a) => t.concat(rm(e[a.name], a.type, r, n)), []);
        }
        if (tj(t))
          return (function (e, t) {
            let r = rf(t),
              n = Object.values(e);
            if (n.length !== r.length)
              throw Error(`ParseTuple: provided and expected abi tuple size do not match.
      provided: ${n}
      expected: ${r}`);
            return r.map((e, t) => ({ element: n[t], type: e.type ?? e }));
          })(e, t).reduce((e, t) => {
            let a = rm(t.element, t.type, r, n);
            return e.concat(a);
          }, []);
        if (tR.isAbiType(t)) return new tR(e).toApiRequest();
        if (tM.isAbiType(t)) return new tM(e).toApiRequest();
        if (tY(t, n)) {
          let { variants: a } = n[t];
          if (tq(t)) {
            if (e.isSome()) {
              let t = a.find((e) => 'Some' === e.name);
              if (e1(t))
                throw Error("Error in abi : Option has no 'Some' variant.");
              let i = t.type;
              if ('()' === i) return ri.Some.toString();
              let s = rm(e.unwrap(), i, r, n);
              return Array.isArray(s)
                ? [ri.Some.toString(), ...s]
                : [ri.Some.toString(), s];
            }
            return ri.None.toString();
          }
          if (tG(t)) {
            if (e.isOk()) {
              let t = a.find((e) => 'Ok' === e.name);
              if (e1(t))
                throw Error("Error in abi : Result has no 'Ok' variant.");
              let i = t.type;
              if ('()' === i) return ro.Ok.toString();
              let s = rm(e.unwrap(), i, r, n);
              return Array.isArray(s)
                ? [ro.Ok.toString(), ...s]
                : [ro.Ok.toString(), s];
            }
            let t = a.find((e) => 'Err' === e.name);
            if (e1(t))
              throw Error("Error in abi : Result has no 'Err' variant.");
            let i = t.type;
            if ('()' === i) return ro.Err.toString();
            let s = rm(e.unwrap(), i, r, n);
            return Array.isArray(s)
              ? [ro.Err.toString(), ...s]
              : [ro.Err.toString(), s];
          }
          let i = e.activeVariant(),
            s = a.find((e) => e.name === i);
          if (e1(s))
            throw Error(`Not find in abi : Enum has no '${i}' variant.`);
          let o = s.type,
            c = a.findIndex((e) => e.name === i);
          if ('()' === o) return c.toString();
          let l = rm(e.unwrap(), o, r, n);
          return Array.isArray(l) ? [c.toString(), ...l] : [c.toString(), l];
        }
        if (t9(t)) return ry(t3(t), e);
        if ('object' == typeof e)
          throw Error(`Parameter ${e} do not align with abi parameter ${t}`);
        return ry(t, e);
      }
      function rE(e, t) {
        switch (!0) {
          case tZ(e):
            return !!BigInt(t.next().value);
          case tR.isAbiType(e):
            return new tR(t.next().value, t.next().value).toBigInt();
          case tM.isAbiType(e):
            let r = t.next().value;
            return new tM(
              r,
              t.next().value,
              t.next().value,
              t.next().value
            ).toBigInt();
          case t0(e):
            return BigInt(t.next().value);
          case t1(e):
            return tO(t.next().value);
          case t6(e):
            let n = q(t.next().value).padStart(32, '0'),
              a = q(t.next().value).padStart(32, '0'),
              i = q(t.next().value).padStart(32, '0');
            return BigInt(G(a + n + q(t.next().value).padStart(32, '0') + i));
          default:
            return BigInt(t.next().value);
        }
      }
      function r_(e, t, r, n) {
        if ('()' === t.type) return {};
        if (tR.isAbiType(t.type))
          return new tR(e.next().value, e.next().value).toBigInt();
        if (tM.isAbiType(t.type)) {
          let t = e.next().value;
          return new tM(
            t,
            e.next().value,
            e.next().value,
            e.next().value
          ).toBigInt();
        }
        if (t2(t.type)) {
          let t = [],
            r = BigInt(e.next().value);
          for (; t.length < r; ) t.push(e7(e.next().value));
          return tD({
            data: t,
            pending_word: e7(e.next().value),
            pending_word_len: BigInt(e.next().value),
          });
        }
        if (rg.isTypeFixedArray(t.type)) {
          let a = [],
            i = { name: '', type: rg.getFixedArrayType(t.type) },
            s = rg.getFixedArraySize(t.type);
          for (; a.length < s; ) a.push(r_(e, i, r, n));
          return a;
        }
        if (tU(t.type)) {
          let a = [],
            i = { name: '', type: t3(t.type) },
            s = BigInt(e.next().value);
          for (; a.length < s; ) a.push(r_(e, i, r, n));
          return a;
        }
        if (t9(t.type)) return r_(e, { name: '', type: t3(t.type) }, r, n);
        if (r && t.type in r && r[t.type])
          return t0(t.type)
            ? rE(t.type, e)
            : r[t.type].members.reduce(
                (t, a) => ((t[a.name] = r_(e, a, r, n)), t),
                {}
              );
        if (n && t.type in n && n[t.type]) {
          let a = Number(e.next().value),
            i = n[t.type].variants.reduce(
              (t, i, s) => (
                s === a
                  ? (t[i.name] = r_(e, { name: '', type: i.type }, r, n))
                  : (t[i.name] = void 0),
                t
              ),
              {}
            );
          if (t.type.startsWith('core::option::Option')) {
            let e = a === ri.Some ? i.Some : void 0;
            return new rs(a, e);
          }
          if (t.type.startsWith('core::result::Result')) {
            let e;
            return (e = a === ro.Ok ? i.Ok : i.Err), new rc(a, e);
          }
          return new ra(i);
        }
        if (tj(t.type))
          return rf(t.type).reduce((t, a, i) => {
            let s = a?.name ? a.name : i,
              o = a?.type ? a.type : a;
            return (t[s] = r_(e, { name: s, type: o }, r, n)), t;
          }, {});
        if (tU(t.type)) {
          let a = [],
            i = { name: '', type: t3(t.type) },
            s = BigInt(e.next().value);
          for (; a.length < s; ) a.push(r_(e, i, r, n));
          return a;
        }
        return rE(t.type, e);
      }
      function rb(e, t, r, n, a) {
        let { name: i, type: s } = t;
        switch (!0) {
          case t$(i):
            return BigInt(e.next().value);
          case (r && s in r) || tj(s):
          case n && tY(s, n):
          case rg.isTypeFixedArray(s):
            return r_(e, t, r, n);
          case tU(s):
            if (t4(s)) return r_(e, t, r, n);
            let o = [];
            if (a && a[`${i}_len`]) {
              let s = a[`${i}_len`];
              for (; o.length < s; )
                o.push(r_(e, { name: i, type: t.type.replace('*', '') }, r, n));
            }
            return o;
          case t9(s):
            return r_(e, t, r, n);
          default:
            return rE(s, e);
        }
      }
      var rT = (e, t) => {
          if (
            (e0(
              e4(e) || e2(e) || e6(e),
              `Validate: arg ${t.name} should be a felt typed as (String, Number or BigInt)`
            ),
            e4(e) && !e8(e))
          )
            return;
          let r = BigInt(e.toString(10));
          e0(
            r >= 0n && r <= 2n ** 252n - 1n,
            `Validate: arg ${t.name} cairo typed ${t.type} should be in range [0, 2^252-1]`
          );
        },
        rA = (e, t) => {
          e0(e4(e), `Validate: arg ${t.name} should be a string.`),
            e0(
              e.length < 32,
              `Validate: arg ${t.name} cairo typed ${t.type} should be a string of less than 32 characters.`
            );
        },
        rv = (e, t) => {
          e0(e4(e), `Validate: arg ${t.name} should be a string.`);
        },
        rw = (e, t) => {
          let r;
          switch (
            (e2(e) &&
              e0(
                e <= Number.MAX_SAFE_INTEGER,
                'Validation: Parameter is too large to be typed as Number use (BigInt or String)'
              ),
            e0(
              e4(e) ||
                e2(e) ||
                e6(e) ||
                (e3(e) && 'low' in e && 'high' in e) ||
                (e3(e) &&
                  ['limb0', 'limb1', 'limb2', 'limb3'].every((t) => t in e)),
              `Validate: arg ${t.name} of cairo type ${t.type} should be type (String, Number or BigInt), but is ${typeof e} ${e}.`
            ),
            t.type)
          ) {
            case eY.u256:
              r = new tR(e).toBigInt();
              break;
            case eY.u512:
              r = new tM(e).toBigInt();
              break;
            default:
              r = e9(e);
          }
          switch (t.type) {
            case eY.u8:
              e0(
                r >= 0n && r <= 255n,
                `Validate: arg ${t.name} cairo typed ${t.type} should be in range [0 - 255]`
              );
              break;
            case eY.u16:
              e0(
                r >= 0n && r <= 65535n,
                `Validate: arg ${t.name} cairo typed ${t.type} should be in range [0, 65535]`
              );
              break;
            case eY.u32:
              e0(
                r >= 0n && r <= 4294967295n,
                `Validate: arg ${t.name} cairo typed ${t.type} should be in range [0, 4294967295]`
              );
              break;
            case eY.u64:
              e0(
                r >= 0n && r <= 2n ** 64n - 1n,
                `Validate: arg ${t.name} cairo typed ${t.type} should be in range [0, 2^64-1]`
              );
              break;
            case eY.u128:
              e0(
                r >= 0n && r <= 2n ** 128n - 1n,
                `Validate: arg ${t.name} cairo typed ${t.type} should be in range [0, 2^128-1]`
              );
              break;
            case eY.u256:
              e0(
                r >= 0n && r <= 2n ** 256n - 1n,
                `Validate: arg ${t.name} is ${t.type} should be in range 0 - 2^256-1`
              );
              break;
            case eY.u512:
              e0(
                tM.is(r),
                `Validate: arg ${t.name} is ${t.type} should be in range 0 - 2^512-1`
              );
              break;
            case eq.ClassHash:
            case eq.ContractAddress:
              e0(
                r >= 0n && r <= 2n ** 252n - 1n,
                `Validate: arg ${t.name} cairo typed ${t.type} should be in range [0, 2^252-1]`
              );
              break;
            case eq.Secp256k1Point:
              e0(
                r >= 0n && r <= 2n ** 512n - 1n,
                `Validate: arg ${t.name} must be ${t.type} : a 512 bits number.`
              );
              break;
            case eq.U96:
              e0(
                r >= 0n && r <= 2n ** 96n - 1n,
                `Validate: arg ${t.name} must be ${t.type} : a 96 bits number.`
              );
          }
        },
        rI = (e, t) => {
          e0(
            e5(e),
            `Validate: arg ${t.name} of cairo type ${t.type} should be type (Boolean)`
          );
        },
        rC = (e, t, r) => {
          if (t.type === eY.u256 || t.type === eY.u512) {
            rw(e, t);
            return;
          }
          if (t0(t.type)) {
            e0(!e3(e), `EthAddress type is waiting a BigNumberish. Got "${e}"`);
            let r = BigInt(e.toString(10));
            e0(
              r >= 0n && r <= 2n ** 160n - 1n,
              `Validate: arg ${t.name} cairo typed ${t.type} should be in range [0, 2^160-1]`
            );
            return;
          }
          e0(
            e3(e),
            `Validate: arg ${t.name} is cairo type struct (${t.type}), and should be defined as a js object (not array)`
          ),
            r[t.type].members.forEach(({ name: r }) => {
              e0(
                Object.keys(e).includes(r),
                `Validate: arg ${t.name} should have a property ${r}`
              );
            });
        },
        rS = (e, t) => {
          e0(
            e3(e),
            `Validate: arg ${t.name} is cairo type Enum (${t.type}), and should be defined as a js object (not array)`
          );
          let r = Object.getOwnPropertyNames(Object.getPrototypeOf(e)),
            n = [...Object.getOwnPropertyNames(e), ...r];
          if (
            !(
              (tq(t.type) && n.includes('isSome') && n.includes('isNone')) ||
              (tG(t.type) && n.includes('isOk') && n.includes('isErr')) ||
              (n.includes('variant') && n.includes('activeVariant'))
            )
          )
            throw Error(
              `Validate Enum: argument ${t.name}, type ${t.type}, value received "${e}", is not an Enum.`
            );
        },
        rk = (e, t) => {
          e0(
            e3(e),
            `Validate: arg ${t.name} should be a tuple (defined as object)`
          );
        },
        rN = (e, t, r, n) => {
          let a = tU(t.type),
            i = a ? t3(t.type) : rg.getFixedArrayType(t.type);
          if (a && tH(i) && tk(e)) return;
          let s = [];
          if (a)
            e0(Array.isArray(e), `Validate: arg ${t.name} should be an Array`),
              (s = e);
          else
            switch (!0) {
              case Array.isArray(e):
                s = e;
                break;
              case 'object' == typeof e:
                s = Object.values(e);
                break;
              default:
                throw Error(
                  `Validate: arg ${t.name} should be an Array or an object.`
                );
            }
          switch (!0) {
            case tH(i):
              s.forEach((e) => rT(e, t));
              break;
            case tj(i):
              s.forEach((e) => rk(e, { name: t.name, type: i }));
              break;
            case tU(i):
              s.forEach((e) => rN(e, { name: '', type: i }, r, n));
              break;
            case tW(i, r):
              s.forEach((e) => rC(e, { name: t.name, type: i }, r));
              break;
            case tY(i, n):
              s.forEach((e) => rS(e, { name: t.name, type: i }));
              break;
            case tX(i) || tJ(i):
              s.forEach((e) => rw(e, { name: '', type: i }));
              break;
            case tZ(i):
              s.forEach((e) => rI(e, t));
              break;
            default:
              throw Error(
                `Validate Unhandled: argument ${t.name}, type ${t.type}, value ${s}`
              );
          }
        },
        rx = (e, t) => {
          let r = t3(t.type);
          switch (
            (e0(
              (tX(r) && r !== tM.abiSelector) || tH(r),
              `Validate: ${t.name} type is not authorized for NonZero type.`
            ),
            !0)
          ) {
            case tH(r):
              rT(e, t),
                e0(
                  BigInt(e.toString(10)) > 0,
                  'Validate: value 0 is not authorized in NonZero felt252 type.'
                );
              break;
            case tX(r):
              (rw(e, { name: '', type: r }), r === eY.u256)
                ? e0(
                    new tR(e).toBigInt() > 0,
                    'Validate: value 0 is not authorized in NonZero uint256 type.'
                  )
                : e0(
                    e9(e) > 0,
                    'Validate: value 0 is not authorized in NonZero uint type.'
                  );
              break;
            default:
              throw Error(
                `Validate Unhandled: argument ${t.name}, type ${t.type}, value "${e}"`
              );
          }
        };
      function rO(e, t, r, n) {
        e.inputs.reduce((e, a) => {
          let i = t[e];
          switch (!0) {
            case t$(a.name):
              return e;
            case tH(a.type):
              rT(i, a);
              break;
            case t1(a.type):
              rA(i, a);
              break;
            case tX(a.type) || tJ(a.type):
              rw(i, a);
              break;
            case tZ(a.type):
              rI(i, a);
              break;
            case t2(a.type):
              rv(i, a);
              break;
            case tU(a.type) || rg.isTypeFixedArray(a.type):
              rN(i, a, r, n);
              break;
            case tW(a.type, r):
              rC(i, a, r);
              break;
            case tY(a.type, n):
              rS(i, a);
              break;
            case tj(a.type):
              rk(i, a);
              break;
            case t9(a.type):
              rx(i, a);
              break;
            default:
              throw Error(
                `Validate Unhandled: argument ${a.name}, type ${a.type}, value ${i}`
              );
          }
          return e + 1;
        }, 0);
      }
      var rD = class e {
        abi;
        parser;
        structs;
        enums;
        constructor(t) {
          (this.structs = e.getAbiStruct(t)),
            (this.enums = e.getAbiEnum(t)),
            (this.parser = (function (e) {
              let t = e.find((e) => 'interface' === e.type) ? 2 : t8(e) ? 1 : 0;
              if (0 === t || 1 === t) return new rd(e);
              if (2 === t) return new ru(e);
              throw Error(`Unsupported ABI version ${t}`);
            })(t)),
            (this.abi = this.parser.getLegacyFormat());
        }
        validate(e, t, r = []) {
          e !== eW.DEPLOY &&
            e0(
              this.abi
                .filter((t) => {
                  if ('function' !== t.type) return !1;
                  let r =
                    'view' === t.stateMutability ||
                    'view' === t.state_mutability;
                  return e === eW.INVOKE ? !r : r;
                })
                .map((e) => e.name)
                .includes(t),
              `${e === eW.INVOKE ? 'invocable' : 'viewable'} method not found in abi`
            );
          let n = this.abi.find((r) =>
            e === eW.DEPLOY
              ? r.name === t && 'constructor' === r.type
              : r.name === t && 'function' === r.type
          );
          if (rh(t, r, n)) return;
          let a = this.parser.methodInputsLength(n);
          if (r.length !== a)
            throw Error(
              `Invalid number of arguments, expected ${a} arguments, but got ${r.length}`
            );
          rO(n, r, this.structs, this.enums);
        }
        compile(e, t) {
          let r;
          let n = this.abi.find((t) => t.name === e);
          if (rh(e, t, n)) return [];
          Array.isArray(t)
            ? (r = t)
            : ((r = Object.values(
                (function (e, t, r, n) {
                  let a = (e, t) => {
                      if (rg.isTypeFixedArray(t))
                        return (function (e, t) {
                          let r = rg.getFixedArrayType(t),
                            n = rg.getFixedArraySize(t);
                          if (Array.isArray(e)) {
                            if (n !== e.length)
                              throw Error(
                                `ABI type ${t}: array provided do not includes  ${n} items. ${e.length} items provided.`
                              );
                            return e.map((e) => a(e, r));
                          }
                          if (n !== Object.keys(e).length)
                            throw Error(
                              `ABI type ${t}: object provided do not includes  ${n} properties. ${Object.keys(e).length} items provided.`
                            );
                          return a(e, r);
                        })(e, t);
                      if (tU(t))
                        return (function (e, t) {
                          let r = t3(t);
                          return e4(e) ? e : e.map((e) => a(e, r));
                        })(e, t);
                      if (tY(t, n)) return s(e, n[t]);
                      if (tj(t))
                        return rf(t).reduce((t, r, n) => {
                          let i;
                          let s = Object.keys(e),
                            o = r?.type ? r.type : r;
                          return (
                            (i = a(e[s[n]], o)),
                            Object.defineProperty(t, n.toString(), {
                              enumerable: !0,
                              value: i ?? e[s[n]],
                            }),
                            t
                          );
                        }, {});
                      if (t0(t) || t9(t) || t2(t) || t5(t) || t6(t)) return e;
                      if (tR.isAbiType(t)) {
                        if ('object' != typeof e) return e;
                        if (!('low' in e && 'high' in e))
                          throw Error(
                            `Your object includes the property : ${t}, containing an Uint256 object without the 'low' and 'high' keys.`
                          );
                        return { low: e.low, high: e.high };
                      }
                      if (tM.isAbiType(t)) {
                        if ('object' != typeof e) return e;
                        if (
                          !['limb0', 'limb1', 'limb2', 'limb3'].every(
                            (t) => t in e
                          )
                        )
                          throw Error(
                            `Your object includes the property : ${t}, containing an Uint512 object without the 'limb0' to 'limb3' keys.`
                          );
                        return {
                          limb0: e.limb0,
                          limb1: e.limb1,
                          limb2: e.limb2,
                          limb3: e.limb3,
                        };
                      }
                      return tW(t, r) ? i(e, r[t].members) : e;
                    },
                    i = (e, t) =>
                      t.reduce((t, r) => {
                        let n;
                        if (
                          'undefined' === e[r.name] &&
                          (t4(r.type) || !t$(r.name))
                        )
                          throw Error(
                            `Your object needs a property with key : ${r.name} .`
                          );
                        return (
                          (n = a(e[r.name], r.type)),
                          Object.defineProperty(t, r.name, {
                            enumerable: !0,
                            value: n ?? e[r.name],
                          }),
                          t
                        );
                      }, {}),
                    s = (e, t) => {
                      if (tG(t.name)) {
                        let r = t.name.substring(
                            t.name.indexOf('<') + 1,
                            t.name.lastIndexOf(',')
                          ),
                          n = t.name.substring(
                            t.name.indexOf(',') + 1,
                            t.name.lastIndexOf('>')
                          );
                        return e.isOk()
                          ? new rc(ro.Ok, a(e.unwrap(), r))
                          : new rc(ro.Err, a(e.unwrap(), n));
                      }
                      if (tq(t.name)) {
                        let r = t.name.substring(
                          t.name.indexOf('<') + 1,
                          t.name.lastIndexOf('>')
                        );
                        return e.isSome()
                          ? new rs(ri.Some, a(e.unwrap(), r))
                          : new rs(ri.None, {});
                      }
                      return new ra(
                        Object.fromEntries(
                          Object.entries(e.variant).map((r) => {
                            if (e1(r[1])) return r;
                            let n = t.type.substring(
                              t.type.lastIndexOf('<') + 1,
                              t.type.lastIndexOf('>')
                            );
                            return '()' === n ? r : [r[0], a(e.unwrap(), n)];
                          })
                        )
                      );
                    };
                  return t.reduce((t, r) => {
                    let n;
                    return (
                      (t$(r.name) && !t4(r.type)) ||
                        ((n = a(e[r.name], r.type)),
                        Object.defineProperty(t, r.name, {
                          enumerable: !0,
                          value: n,
                        })),
                      t
                    );
                  }, {});
                })(t, n.inputs, this.structs, this.enums)
              )),
              rO(n, r, this.structs, this.enums));
          let a = r[Symbol.iterator](),
            i = n.inputs.reduce(
              (e, t) =>
                t$(t.name) && !t4(t.type)
                  ? e
                  : e.concat(
                      (function (e, t, r, n) {
                        let { name: a, type: i } = t,
                          { value: s } = e.next();
                        switch (!0) {
                          case rg.isTypeFixedArray(i):
                            if (!Array.isArray(s) && 'object' != typeof s)
                              throw Error(
                                `ABI expected parameter ${a} to be an array or an object, got ${s}`
                              );
                            return rm(s, t.type, r, n);
                          case tU(i):
                            if (!Array.isArray(s) && !tC(s))
                              throw Error(
                                `ABI expected parameter ${a} to be array or long string, got ${s}`
                              );
                            return e4(s) && (s = tN(s)), rm(s, t.type, r, n);
                          case t9(i):
                            return ry(t3(i), s);
                          case t0(i):
                            return ry(i, s);
                          case tW(i, r) || tj(i) || tR.isAbiType(i):
                          case tY(i, n):
                            return rm(s, i, r, n);
                          default:
                            return ry(i, s);
                        }
                      })(a, t, this.structs, this.enums)
                    ),
              []
            );
          return (
            Object.defineProperty(i, '__compiled__', {
              enumerable: !1,
              writable: !1,
              value: !0,
            }),
            i
          );
        }
        static compile(e) {
          let t;
          let r = (e) => {
            let t = (e, r = '.') => {
              let n = Array.isArray(e) ? [e.length.toString(), ...e] : e;
              return Object.entries(n).flatMap(([e, a]) => {
                let i = a;
                'entrypoint' === e ? (i = t_(i)) : tk(i) && (i = tV(i));
                let s = Array.isArray(n) && '0' === e ? '$$len' : e;
                if (e6(i)) return [[`${r}${s}`, tB(i)]];
                if (Object(i) === i) {
                  let e = Object.getOwnPropertyNames(Object.getPrototypeOf(i)),
                    n = [...Object.getOwnPropertyNames(i), ...e];
                  if (n.includes('isSome') && n.includes('isNone')) {
                    let e = i,
                      n = e.isSome() ? ri.Some : ri.None;
                    return e.isSome()
                      ? t({ 0: n, 1: e.unwrap() }, `${r}${s}.`)
                      : [[`${r}${s}`, tB(n)]];
                  }
                  if (n.includes('isOk') && n.includes('isErr')) {
                    let e = i;
                    return t(
                      { 0: e.isOk() ? ro.Ok : ro.Err, 1: e.unwrap() },
                      `${r}${s}.`
                    );
                  }
                  if (n.includes('variant') && n.includes('activeVariant')) {
                    let e = i,
                      n = e.activeVariant(),
                      a = Object.keys(e.variant).findIndex((e) => e === n);
                    return 'object' == typeof e.unwrap() &&
                      0 === Object.keys(e.unwrap()).length
                      ? [[`${r}${s}`, tB(a)]]
                      : t({ 0: a, 1: e.unwrap() }, `${r}${s}.`);
                  }
                  return t(i, `${r}${s}.`);
                }
                return [[`${r}${s}`, tB(i)]];
              });
            };
            return Object.fromEntries(t(e));
          };
          return (
            Object.defineProperty(
              (t = Array.isArray(e)
                ? Object.values(r({ ...e }))
                : Object.values(r(e))),
              '__compiled__',
              { enumerable: !1, writable: !1, value: !0 }
            ),
            t
          );
        }
        parse(e, t) {
          let { outputs: r } = this.abi.find((t) => t.name === e),
            n = t.flat()[Symbol.iterator](),
            a = r.flat().reduce((e, t, r) => {
              let a = t.name ?? r;
              return (
                (e[a] = rb(n, t, this.structs, this.enums, e)),
                e[a] && e[`${a}_len`] && delete e[`${a}_len`],
                e
              );
            }, {});
          return 1 === Object.keys(a).length && 0 in a ? a[0] : a;
        }
        format(e, t, r) {
          return (function e(t, r, n) {
            return Object.entries(t).reduce((a, [i, s]) => {
              let o = n ?? r[i];
              if (!(i in r) && !n) return (a[i] = s), a;
              if ('string' === o) {
                if (Array.isArray(t[i])) {
                  let r = e(
                    t[i],
                    t[i].map((e) => o)
                  );
                  return (a[i] = Object.values(r).join('')), a;
                }
                return rl.isBN(t, r, i), (a[i] = tO(s)), a;
              }
              if ('number' === o)
                return rl.isBN(t, r, i), (a[i] = Number(s)), a;
              if ('function' == typeof o) return (a[i] = o(s)), a;
              if (Array.isArray(o)) {
                let r = e(t[i], o, o[0]);
                return (a[i] = Object.values(r)), a;
              }
              return e3(o) ? (a[i] = e(t[i], o)) : rl.unknown(t, r, i), a;
            }, {});
          })(this.parse(e, t), r);
        }
        static getAbiStruct(e) {
          return e
            .filter((e) => 'struct' === e.type)
            .reduce((e, t) => ({ ...e, [t.name]: t }), {});
        }
        static getAbiEnum(e) {
          let t = e
            .filter((e) => 'enum' === e.type)
            .reduce((e, t) => ({ ...e, [t.name]: t }), {});
          return delete t['core::bool'], t;
        }
        static toCalldata(t = []) {
          return e.compile(t);
        }
        static toHex(t = []) {
          return e.compile(t).map((e) => e7(e));
        }
        decodeParameters(e, t) {
          let r = Array.isArray(e) ? e : [e],
            n = t.flat()[Symbol.iterator](),
            a = r.map((e) =>
              rb(n, { name: '', type: e }, this.structs, this.enums)
            );
          return 1 === a.length ? a[0] : a;
        }
      };
      function rV(e) {
        return [...e, e.length]
          .reduce((e, t) => d.pedersen(e9(e), e9(t)), 0)
          .toString();
      }
      function rB(e, t, r, n, a, i, s, o = []) {
        let c = [e, t, r, n, rV(a), i, s, ...o];
        return rV(c);
      }
      function rF(e, t, r, n, a, i, s) {
        return rB('0x6465636c617265', r, t, 0, [e], n, a, [
          i,
          ...(s ? [s] : []),
        ]);
      }
      function rP(e, t, r, n, a, i, s, o) {
        return rB(
          '0x6465706c6f795f6163636f756e74',
          a,
          e,
          0,
          [t, n, ...r],
          i,
          s,
          [o]
        );
      }
      function rR(e, t, r, n, a, i) {
        return rB('0x696e766f6b65', t, e, 0, r, n, a, [i]);
      }
      function rL(e, t, r, n, a, i) {
        let s = [e, ...n];
        return rB('0x6c315f68616e646c6572', 0, t, tb(r), s, 0, a, [i]);
      }
      v(
        {},
        {
          calculateContractAddressFromHash: () => r4,
          calculateDeclareTransactionHash: () => rZ,
          calculateDeployAccountTransactionHash: () => rQ,
          calculateInvokeTransactionHash: () => rJ,
          calculateL2MessageTxHash: () => rL,
          computeCompiledClassHash: () => nr,
          computeContractClassHash: () => ni,
          computeHashOnElements: () => r2,
          computeHintedClassHash: () => r9,
          computeLegacyContractClassHash: () => r7,
          computePedersenHash: () => r0,
          computePedersenHashOnElements: () => r5,
          computePoseidonHash: () => r1,
          computePoseidonHashOnElements: () => r6,
          computeSierraContractClassHash: () => na,
          formatSpaces: () => r8,
          getL2MessageHash: () => tA,
          getSelector: () => tb,
          getSelectorFromName: () => t_,
          hashByteCodeSegments: () => nt,
          keccakBn: () => tm,
          poseidon: () => h,
          solidityUint256PackedKeccak256: () => tT,
          starknetKeccak: () => tE,
        }
      ),
        v(
          {},
          {
            calculateDeclareTransactionHash: () => rF,
            calculateDeployAccountTransactionHash: () => rP,
            calculateL2MessageTxHash: () => rL,
            calculateTransactionHash: () => rR,
            calculateTransactionHashCommon: () => rB,
            computeHashOnElements: () => rV,
          }
        ),
        v({}, { starkCurve: () => d, weierstrass: () => p }),
        v(
          {},
          {
            calculateDeclareTransactionHash: () => rX,
            calculateDeployAccountTransactionHash: () => rG,
            calculateInvokeTransactionHash: () => rz,
            calculateTransactionHashCommon: () => rq,
            encodeResourceBoundsL1: () => rK,
            encodeResourceBoundsL2: () => rW,
            hashDAMode: () => rj,
            hashFeeField: () => rY,
          }
        );
      var rM = (e) => e.map((e) => BigInt(e)),
        r$ = 64n + 128n,
        rH = BigInt(tx('L1_GAS')),
        rU = BigInt(tx('L2_GAS'));
      function rj(e, t) {
        return (BigInt(e) << 32n) + BigInt(t);
      }
      function rK(e) {
        return (
          (rH << r$) +
          (BigInt(e.l1_gas.max_amount) << 128n) +
          BigInt(e.l1_gas.max_price_per_unit)
        );
      }
      function rW(e) {
        return (
          (rU << r$) +
          (BigInt(e.l2_gas.max_amount) << 128n) +
          BigInt(e.l2_gas.max_price_per_unit)
        );
      }
      function rY(e, t) {
        let r = rK(t),
          n = rW(t);
        return (0, d.poseidonHashMany)([BigInt(e), r, n]);
      }
      function rq(e, t, r, n, a, i, s, o, c, l, u = []) {
        let h = rY(i, l),
          p = rj(o, c),
          f = rM([
            e,
            t,
            r,
            h,
            (0, d.poseidonHashMany)(rM(s)),
            n,
            a,
            p,
            ...rM(u),
          ]);
        return e7((0, d.poseidonHashMany)(f));
      }
      function rG(e, t, r, n, a, i, s, o, c, l, u, h) {
        return rq('0x6465706c6f795f6163636f756e74', a, e, i, s, u, h, o, c, l, [
          (0, d.poseidonHashMany)(rM(r)),
          t,
          n,
        ]);
      }
      function rX(e, t, r, n, a, i, s, o, c, l, u, h) {
        return rq('0x6465636c617265', n, r, a, i, u, rM(h), o, c, l, [
          (0, d.poseidonHashMany)(rM(s)),
          e,
          t,
        ]);
      }
      function rz(e, t, r, n, a, i, s, o, c, l, u) {
        return rq('0x696e766f6b65', t, e, n, a, l, u, s, o, c, [
          (0, d.poseidonHashMany)(rM(i)),
          (0, d.poseidonHashMany)(rM(r)),
        ]);
      }
      function rJ(e) {
        return [w.ETransactionVersion.V3, w.ETransactionVersion.F3].includes(
          e.version
        )
          ? rz(
              e.senderAddress,
              e.version,
              e.compiledCalldata,
              e.chainId,
              e.nonce,
              e.accountDeploymentData,
              e.nonceDataAvailabilityMode,
              e.feeDataAvailabilityMode,
              e.resourceBounds,
              e.tip,
              e.paymasterData
            )
          : rR(
              e.senderAddress,
              e.version,
              e.compiledCalldata,
              e.maxFee,
              e.chainId,
              e.nonce
            );
      }
      function rZ(e) {
        return [w.ETransactionVersion.V3, w.ETransactionVersion.F3].includes(
          e.version
        )
          ? rX(
              e.classHash,
              e.compiledClassHash,
              e.senderAddress,
              e.version,
              e.chainId,
              e.nonce,
              e.accountDeploymentData,
              e.nonceDataAvailabilityMode,
              e.feeDataAvailabilityMode,
              e.resourceBounds,
              e.tip,
              e.paymasterData
            )
          : rF(
              e.classHash,
              e.senderAddress,
              e.version,
              e.maxFee,
              e.chainId,
              e.nonce,
              e.compiledClassHash
            );
      }
      function rQ(e) {
        return [w.ETransactionVersion.V3, w.ETransactionVersion.F3].includes(
          e.version
        )
          ? rG(
              e.contractAddress,
              e.classHash,
              e.compiledConstructorCalldata,
              e.salt,
              e.version,
              e.chainId,
              e.nonce,
              e.nonceDataAvailabilityMode,
              e.feeDataAvailabilityMode,
              e.resourceBounds,
              e.tip,
              e.paymasterData
            )
          : rP(
              e.contractAddress,
              e.classHash,
              e.constructorCalldata,
              e.salt,
              e.version,
              e.maxFee,
              e.chainId,
              e.nonce
            );
      }
      function r0(e, t) {
        return d.pedersen(BigInt(e), BigInt(t));
      }
      function r1(e, t) {
        return e7(d.poseidonHash(BigInt(e), BigInt(t)));
      }
      function r2(e) {
        return [...e, e.length]
          .reduce((e, t) => d.pedersen(BigInt(e), BigInt(t)), 0)
          .toString();
      }
      var r5 = r2;
      function r6(e) {
        return e7((0, d.poseidonHashMany)(e.map((e) => BigInt(e))));
      }
      function r4(e, t, r, n) {
        let a = r2(rD.compile(r));
        return e7(
          BigInt(
            r2([
              tB('0x535441524b4e45545f434f4e54524143545f41444452455353'),
              n,
              e,
              t,
              a,
            ])
          ) % ec
        );
      }
      function r3(e, t) {
        return 'attributes' === e || 'accessible_scopes' === e
          ? Array.isArray(t) && 0 === t.length
            ? void 0
            : t
          : 'debug_info' === e
            ? null
            : null === t
              ? void 0
              : t;
      }
      function r8(e) {
        let t = !1,
          r = [];
        for (let n of e)
          '"' === n &&
            !1 == (r.length > 0 && '\\' === r.slice(-1)[0]) &&
            (t = !t),
            t ? r.push(n) : r.push(':' === n ? ': ' : ',' === n ? ', ' : n);
        return r.join('');
      }
      function r9(e) {
        let { abi: t, program: r } = e,
          n = r8(eD({ abi: t, program: r }, r3));
        return G(d.keccak(U(n)).toString(16));
      }
      function r7(e) {
        let t = e4(e) ? ex(e) : e,
          r = e7(ei),
          n = r2(
            t.entry_points_by_type.EXTERNAL.flatMap((e) => [
              e.selector,
              e.offset,
            ])
          ),
          a = r2(
            t.entry_points_by_type.L1_HANDLER.flatMap((e) => [
              e.selector,
              e.offset,
            ])
          ),
          i = r2(
            t.entry_points_by_type.CONSTRUCTOR.flatMap((e) => [
              e.selector,
              e.offset,
            ])
          ),
          s = r2(t.program.builtins.map((e) => tx(e))),
          o = r9(t),
          c = r2(t.program.data);
        return r2([r, n, a, i, s, o, c]);
      }
      function ne(e) {
        let t = e.flatMap((e) => {
          var t;
          return [
            BigInt(e.selector),
            BigInt(e.offset),
            ((t = e.builtins),
            (0, d.poseidonHashMany)(t.flatMap((e) => BigInt(tx(e))))),
          ];
        });
        return (0, d.poseidonHashMany)(t);
      }
      function nt(e) {
        let t = e.bytecode.map((e) => BigInt(e)),
          r = e.bytecode_segment_lengths ?? [],
          n = 0,
          a = r.flatMap((e) => {
            let r = t.slice(n, (n += e));
            return [BigInt(e), (0, d.poseidonHashMany)(r)];
          });
        return 1n + (0, d.poseidonHashMany)(a);
      }
      function nr(e) {
        let t = BigInt(tx('COMPILED_CLASS_V1')),
          r = ne(e.entry_points_by_type.EXTERNAL),
          n = ne(e.entry_points_by_type.L1_HANDLER),
          a = ne(e.entry_points_by_type.CONSTRUCTOR),
          i = e.bytecode_segment_lengths
            ? nt(e)
            : (0, d.poseidonHashMany)(e.bytecode.map((e) => BigInt(e)));
        return e7((0, d.poseidonHashMany)([t, r, n, a, i]));
      }
      function nn(e) {
        let t = e.flatMap((e) => [BigInt(e.selector), BigInt(e.function_idx)]);
        return (0, d.poseidonHashMany)(t);
      }
      function na(e) {
        let t = BigInt(tx('CONTRACT_CLASS_V0.1.0')),
          r = nn(e.entry_points_by_type.EXTERNAL),
          n = nn(e.entry_points_by_type.L1_HANDLER),
          a = nn(e.entry_points_by_type.CONSTRUCTOR),
          i = (function (e) {
            let t = r8(eD(e.abi, null));
            return BigInt(G(d.keccak(U(t)).toString(16)));
          })(e),
          s = (0, d.poseidonHashMany)(e.sierra_program.map((e) => BigInt(e)));
        return e7((0, d.poseidonHashMany)([t, r, n, a, i, s]));
      }
      function ni(e) {
        let t = e4(e) ? ex(e) : e;
        return 'sierra_program' in t ? na(t) : r7(t);
      }
      function ns(e) {
        let t = e4(e) ? e : eD(e);
        return W((0, f.ZI)(t));
      }
      function no(e) {
        return Array.isArray(e) ? e : ex(H((0, f.Aq)(K(e))));
      }
      function nc() {
        let e = d.utils.randomPrivateKey();
        return (0, d.getStarkKey)(e);
      }
      function nl(e) {
        return G(e).toLowerCase();
      }
      function nd(e) {
        if (!e) throw Error('formatSignature: provided signature is undefined');
        if (Array.isArray(e)) return e.map((e) => e7(e));
        try {
          let { r: t, s: r } = e;
          return [e7(t), e7(r)];
        } catch (e) {
          throw Error(
            'Signature need to be weierstrass.SignatureType or an array for custom'
          );
        }
      }
      function nu(e) {
        return ts(nd(e));
      }
      function nh(e) {
        return to(nd(e));
      }
      function np(e, t = 50) {
        return tf(e, t);
      }
      function nf(e, t = 50, r = 50) {
        if (e6(e))
          return {
            l2_gas: { max_amount: '0x0', max_price_per_unit: '0x0' },
            l1_gas: { max_amount: '0x0', max_price_per_unit: '0x0' },
          };
        if (e1(e.gas_consumed) || e1(e.gas_price))
          throw Error('estimateFeeToBounds: estimate is undefined');
        return {
          l2_gas: { max_amount: '0x0', max_price_per_unit: '0x0' },
          l1_gas: {
            max_amount:
              void 0 !== e.data_gas_consumed && void 0 !== e.data_gas_price
                ? e7(tf(BigInt(e.overall_fee) / BigInt(e.gas_price), t))
                : e7(tf(e.gas_consumed, t)),
            max_price_per_unit: e7(tf(e.gas_price, r)),
          },
        };
      }
      function ng(e) {
        if (e === w.EDataAvailabilityMode.L1) return w.EDAMode.L1;
        if (e === w.EDataAvailabilityMode.L2) return w.EDAMode.L2;
        throw Error('EDAM conversion');
      }
      function ny(e, t) {
        let r = t ? e7(t) : void 0,
          n = e7(e);
        if (t && !Object.values(w.ETransactionVersion).includes(r))
          throw Error(`providedVersion ${t} is not ETransactionVersion`);
        if (!Object.values(w.ETransactionVersion).includes(n))
          throw Error(`defaultVersion ${e} is not ETransactionVersion`);
        return t ? r : n;
      }
      function nm(e) {
        if (!e) return;
        let t = e7(e);
        if (t === w.ETransactionVersion.V0) return w.ETransactionVersion.F0;
        if (t === w.ETransactionVersion.V1) return w.ETransactionVersion.F1;
        if (t === w.ETransactionVersion.V2) return w.ETransactionVersion.F2;
        if (t === w.ETransactionVersion.V3) return w.ETransactionVersion.F3;
        throw Error(`toFeeVersion: ${t} is not supported`);
      }
      function nE(e) {
        return {
          tip: e.tip || 0,
          paymasterData: e.paymasterData || [],
          accountDeploymentData: e.accountDeploymentData || [],
          nonceDataAvailabilityMode:
            e.nonceDataAvailabilityMode || w.EDataAvailabilityMode.L1,
          feeDataAvailabilityMode:
            e.feeDataAvailabilityMode || w.EDataAvailabilityMode.L1,
          resourceBounds: e.resourceBounds ?? nf(er),
        };
      }
      function n_(e) {
        return e === w.ETransactionVersion.F2
          ? w.ETransactionVersion.F1
          : e === w.ETransactionVersion.V2
            ? w.ETransactionVersion.V1
            : e;
      }
      function nb(e) {
        let t = e7(e);
        return G(Y((0, d.getPublicKey)(t, !1)));
      }
      function nT(e) {
        return 'sierra_program' in (e4(e) ? ex(e) : e);
      }
      function nA(e) {
        let t = { ...e };
        if (
          nT(e.contract) &&
          (!e.compiledClassHash && e.casm && (t.compiledClassHash = nr(e.casm)),
          !t.compiledClassHash)
        )
          throw Error(
            'Extract compiledClassHash failed, provide (CairoAssembly).casm file or compiledClassHash'
          );
        if (((t.classHash = e.classHash ?? ni(e.contract)), !t.classHash))
          throw Error(
            'Extract classHash failed, provide (CompiledContract).json file or classHash'
          );
        return t;
      }
      function nv() {
        return Z(Y(g.bI.utils.randomPrivateKey()));
      }
      function nw(e) {
        ti(e, er, 2n ** 160n - 1n, 'Ethereum Address ');
        let t = G(q(e7(e)).padStart(40, '0'));
        return (
          e0(
            !!t.match(/^(0x)?[0-9a-f]{40}$/),
            'Invalid Ethereum Address Format'
          ),
          t
        );
      }
      v(
        {},
        {
          compressProgram: () => ns,
          decompressProgram: () => no,
          estimateFeeToBounds: () => nf,
          estimatedFeeToMaxFee: () => np,
          formatSignature: () => nd,
          getFullPublicKey: () => nb,
          intDAM: () => ng,
          makeAddress: () => nl,
          randomAddress: () => nc,
          reduceV2: () => n_,
          signatureToDecimalArray: () => nu,
          signatureToHexArray: () => nh,
          toFeeVersion: () => nm,
          toTransactionVersion: () => ny,
          v3Details: () => nE,
        }
      ),
        v(
          {},
          {
            ethRandomPrivateKey: () => nv,
            validateAndParseEthAddress: () => nw,
          }
        );
      var nI =
        ($ && window.fetch.bind(window)) ||
        (!e1(global) && (0, y.A)(global.fetch)) ||
        m;
      v(
        {},
        {
          Block: () => nB,
          createSierraContractClass: () => nx,
          getDefaultNodeUrl: () => nD,
          isPendingBlock: () => nR,
          isPendingStateUpdate: () => nM,
          isPendingTransaction: () => nL,
          isV3Tx: () => nF,
          isVersion: () => nP,
          parseContract: () => nO,
          validBlockTags: () => nV,
          wait: () => nN,
        }
      );
      var nC = class e {
          static instance;
          config;
          constructor() {
            this.initialize();
          }
          initialize() {
            this.config = { ...eC };
          }
          static getInstance() {
            return e.instance || (e.instance = new e()), e.instance;
          }
          get(e, t) {
            return this.config[e] ?? t;
          }
          set(e, t) {
            this.config[e] = t;
          }
          update(e) {
            this.config = { ...this.config, ...e };
          }
          getAll() {
            return { ...this.config };
          }
          reset() {
            this.initialize();
          }
          delete(e) {
            delete this.config[e];
          }
          hasKey(e) {
            return e in this.config;
          }
        }.getInstance(),
        nS = { DEBUG: 5, INFO: 4, WARN: 3, ERROR: 2, FATAL: 1, OFF: 0 },
        nk = class e {
          static instance;
          config;
          constructor() {
            this.config = nC;
          }
          static getInstance() {
            return e.instance || (e.instance = new e()), e.instance;
          }
          getTimestamp() {
            return new Date().toISOString();
          }
          shouldLog(e) {
            return e <= nS[this.config.get('logLevel', 'INFO')];
          }
          formatMessage(e) {
            let { level: t, message: r, timestamp: n, data: a } = e,
              i = `[${n}] ${t}: ${r}`;
            if (a)
              try {
                i += `
${JSON.stringify(a, null, 2)}`;
              } catch (e) {
                i += `
[JSON.stringify Error/Circular]: ${e}`;
              }
            return i;
          }
          log(e, t, r) {
            if (!this.shouldLog(nS[e])) return;
            let n = {
                level: e,
                message: t,
                timestamp: this.getTimestamp(),
                data: r,
              },
              a = this.formatMessage(n);
            switch (e) {
              case 'DEBUG':
                console.debug(a);
                break;
              case 'INFO':
                console.info(a);
                break;
              case 'WARN':
                console.warn(a);
                break;
              case 'ERROR':
              case 'FATAL':
                console.error(a);
                break;
              case 'OFF':
                break;
              default:
                console.log(a);
            }
          }
          debug(e, t) {
            this.log('DEBUG', e, t);
          }
          info(e, t) {
            this.log('INFO', e, t);
          }
          warn(e, t) {
            this.log('WARN', e, t);
          }
          error(e, t) {
            this.log('ERROR', e, t);
          }
          fatal(e, t) {
            this.log('FATAL', e, t);
          }
          setLogLevel(e) {
            this.config.set('logLevel', e);
          }
          getLogLevel() {
            return this.config.get('logLevel', 'INFO');
          }
          getEnabledLogLevels() {
            return Object.keys(nS).filter(
              (e) => this.shouldLog(nS[e]) && 'OFF' !== e
            );
          }
        }.getInstance();
      function nN(e) {
        return new Promise((t) => {
          setTimeout(t, e);
        });
      }
      function nx(e) {
        let t = { ...e };
        return (
          delete t.sierra_program_debug_info,
          (t.abi = r8(eD(e.abi))),
          (t.sierra_program = r8(eD(e.sierra_program))),
          (t.sierra_program = ns(t.sierra_program)),
          t
        );
      }
      function nO(e) {
        let t = e4(e) ? ex(e) : e;
        return nT(e)
          ? nx(t)
          : { ...t, ...('program' in t && { program: ns(t.program) }) };
      }
      var nD = (e, t = !1) => {
          t ||
            nk.info(
              'Using default public node url, please provide nodeUrl in provider options!'
            );
          let r = eb[e ?? 'SN_SEPOLIA'],
            n = Math.floor(Math.random() * r.length);
          return r[n];
        },
        nV = Object.values(eK),
        nB = class {
          hash = null;
          number = null;
          tag = null;
          setIdentifier(e) {
            if (e4(e)) {
              if (tI(e)) this.number = parseInt(e, 10);
              else if (e8(e)) this.hash = e;
              else if (nV.includes(e)) this.tag = e;
              else throw TypeError(`Block identifier unmanaged: ${e}`);
            } else
              e6(e)
                ? (this.hash = e7(e))
                : e2(e)
                  ? (this.number = e)
                  : (this.tag = eK.PENDING);
            if (e2(this.number) && this.number < 0)
              throw TypeError(
                `Block number (${this.number}) can't be negative`
              );
          }
          constructor(e) {
            this.setIdentifier(e);
          }
          get queryIdentifier() {
            return null !== this.number
              ? `blockNumber=${this.number}`
              : null !== this.hash
                ? `blockHash=${this.hash}`
                : `blockNumber=${this.tag}`;
          }
          get identifier() {
            return null !== this.number
              ? { block_number: this.number }
              : null !== this.hash
                ? { block_hash: this.hash }
                : this.tag;
          }
          set identifier(e) {
            this.setIdentifier(e);
          }
          valueOf = () => this.number;
          toString = () => this.hash;
        };
      function nF(e) {
        let t = e.version ? e7(e.version) : w.ETransactionVersion.V3;
        return t === w.ETransactionVersion.V3 || t === w.ETransactionVersion.F3;
      }
      function nP(e, t) {
        let [r, n] = e.split('.'),
          [a, i] = t.split('.');
        return r === a && n === i;
      }
      function nR(e) {
        return 'PENDING' === e.status;
      }
      function nL(e) {
        return !('block_hash' in e);
      }
      function nM(e) {
        return !('block_hash' in e);
      }
      v(
        {},
        {
          buildUDCCall: () => nY,
          fromCallsToExecuteCalldata: () => nH,
          fromCallsToExecuteCalldataWithNonce: () => nU,
          fromCallsToExecuteCalldata_cairo1: () => nK,
          getExecuteCalldata: () => nW,
          getVersionsByType: () => nq,
          transformCallsToMulticallArrays: () => n$,
          transformCallsToMulticallArrays_cairo1: () => nj,
        }
      );
      var n$ = (e) => {
          let t = [],
            r = [];
          return (
            e.forEach((e) => {
              let n = rD.compile(e.calldata || []);
              t.push({
                to: e9(e.contractAddress).toString(10),
                selector: e9(t_(e.entrypoint)).toString(10),
                data_offset: r.length.toString(),
                data_len: n.length.toString(),
              }),
                r.push(...n);
            }),
            { callArray: t, calldata: rD.compile({ calldata: r }) }
          );
        },
        nH = (e) => {
          let { callArray: t, calldata: r } = n$(e);
          return [...rD.compile({ callArray: t }), ...r];
        },
        nU = (e, t) => [...nH(e), e9(t).toString()],
        nj = (e) =>
          e.map((e) => ({
            to: e9(e.contractAddress).toString(10),
            selector: e9(t_(e.entrypoint)).toString(10),
            calldata: rD.compile(e.calldata || []),
          })),
        nK = (e) => {
          let t = e.map((e) => ({
            contractAddress: e.contractAddress,
            entrypoint: e.entrypoint,
            calldata:
              Array.isArray(e.calldata) && '__compiled__' in e.calldata
                ? e.calldata
                : rD.compile(e.calldata),
          }));
          return rD.compile({ orderCalls: t });
        },
        nW = (e, t = '0') => ('1' === t ? nK(e) : nH(e));
      function nY(e, t) {
        let r = [].concat(e).map((e) => {
          let {
              classHash: r,
              salt: n,
              unique: a = !0,
              constructorCalldata: i = [],
            } = e,
            s = rD.compile(i),
            o = n ?? nc();
          return {
            call: {
              contractAddress: eE.ADDRESS,
              entrypoint: eE.ENTRYPOINT,
              calldata: [r, o, th(a), s.length, ...s],
            },
            address: r4(a ? d.pedersen(t, o) : o, r, s, a ? eE.ADDRESS : 0),
          };
        });
        return {
          calls: r.map((e) => e.call),
          addresses: r.map((e) => e.address),
        };
      }
      function nq(e) {
        return 'fee' === e
          ? {
              v1: w.ETransactionVersion.F1,
              v2: w.ETransactionVersion.F2,
              v3: w.ETransactionVersion.F3,
            }
          : {
              v1: w.ETransactionVersion.V1,
              v2: w.ETransactionVersion.V2,
              v3: w.ETransactionVersion.V3,
            };
      }
      var nG = {
          headers: { 'Content-Type': 'application/json' },
          blockIdentifier: eK.PENDING,
          retries: 200,
        },
        nX = class {
          nodeUrl;
          headers;
          requestId;
          blockIdentifier;
          retries;
          waitMode;
          chainId;
          specVersion;
          transactionRetryIntervalFallback;
          batchClient;
          baseFetch;
          constructor(e) {
            let {
              baseFetch: t,
              batch: r,
              blockIdentifier: n,
              chainId: a,
              headers: i,
              nodeUrl: s,
              retries: o,
              specVersion: c,
              transactionRetryIntervalFallback: l,
              waitMode: d,
            } = e || {};
            Object.values(ef).includes(s)
              ? (this.nodeUrl = nD(s, e?.default))
              : s
                ? (this.nodeUrl = s)
                : (this.nodeUrl = nD(void 0, e?.default)),
              (this.baseFetch = t ?? nI),
              (this.blockIdentifier = n ?? nG.blockIdentifier),
              (this.chainId = a),
              (this.headers = { ...nG.headers, ...i }),
              (this.retries = o ?? nG.retries),
              (this.specVersion = c),
              (this.transactionRetryIntervalFallback = l),
              (this.waitMode = d ?? !1),
              (this.requestId = 0),
              'number' == typeof r &&
                (this.batchClient = new eQ({
                  nodeUrl: this.nodeUrl,
                  headers: this.headers,
                  interval: r,
                  baseFetch: this.baseFetch,
                }));
          }
          get transactionRetryIntervalDefault() {
            return this.transactionRetryIntervalFallback ?? 5e3;
          }
          setChainId(e) {
            this.chainId = e;
          }
          fetch(e, t, r = 0) {
            let n = {
              id: r,
              jsonrpc: '2.0',
              method: e,
              ...(t && { params: t }),
            };
            return this.baseFetch(this.nodeUrl, {
              method: 'POST',
              body: eD(n),
              headers: this.headers,
            });
          }
          errorHandler(e, t, r, n) {
            if (r) throw new eR(r, e, t);
            if (n instanceof eP) throw n;
            if (n) throw Error(n.message);
          }
          async fetchEndpoint(e, t) {
            try {
              if (this.batchClient) {
                let { error: r, result: n } = await this.batchClient.fetch(
                  e,
                  t,
                  (this.requestId += 1)
                );
                return this.errorHandler(e, t, r), n;
              }
              let r = await this.fetch(e, t, (this.requestId += 1)),
                { error: n, result: a } = await r.json();
              return this.errorHandler(e, t, n), a;
            } catch (r) {
              throw (this.errorHandler(e, t, r?.response?.data, r), r);
            }
          }
          async getChainId() {
            return (
              (this.chainId ??= await this.fetchEndpoint('starknet_chainId')),
              this.chainId
            );
          }
          async getSpecVersion() {
            return (
              (this.specVersion ??= await this.fetchEndpoint(
                'starknet_specVersion'
              )),
              this.specVersion
            );
          }
          getNonceForAddress(e, t = this.blockIdentifier) {
            let r = e7(e),
              n = new nB(t).identifier;
            return this.fetchEndpoint('starknet_getNonce', {
              contract_address: r,
              block_id: n,
            });
          }
          getBlockLatestAccepted() {
            return this.fetchEndpoint('starknet_blockHashAndNumber');
          }
          getBlockNumber() {
            return this.fetchEndpoint('starknet_blockNumber');
          }
          getBlockWithTxHashes(e = this.blockIdentifier) {
            let t = new nB(e).identifier;
            return this.fetchEndpoint('starknet_getBlockWithTxHashes', {
              block_id: t,
            });
          }
          getBlockWithTxs(e = this.blockIdentifier) {
            let t = new nB(e).identifier;
            return this.fetchEndpoint('starknet_getBlockWithTxs', {
              block_id: t,
            });
          }
          getBlockStateUpdate(e = this.blockIdentifier) {
            let t = new nB(e).identifier;
            return this.fetchEndpoint('starknet_getStateUpdate', {
              block_id: t,
            });
          }
          getBlockTransactionsTraces(e = this.blockIdentifier) {
            let t = new nB(e).identifier;
            return this.fetchEndpoint('starknet_traceBlockTransactions', {
              block_id: t,
            });
          }
          getBlockTransactionCount(e = this.blockIdentifier) {
            let t = new nB(e).identifier;
            return this.fetchEndpoint('starknet_getBlockTransactionCount', {
              block_id: t,
            });
          }
          getTransactionByHash(e) {
            let t = e7(e);
            return this.fetchEndpoint('starknet_getTransactionByHash', {
              transaction_hash: t,
            });
          }
          getTransactionByBlockIdAndIndex(e, t) {
            let r = new nB(e).identifier;
            return this.fetchEndpoint(
              'starknet_getTransactionByBlockIdAndIndex',
              { block_id: r, index: t }
            );
          }
          getTransactionReceipt(e) {
            let t = e7(e);
            return this.fetchEndpoint('starknet_getTransactionReceipt', {
              transaction_hash: t,
            });
          }
          getTransactionTrace(e) {
            let t = e7(e);
            return this.fetchEndpoint('starknet_traceTransaction', {
              transaction_hash: t,
            });
          }
          getTransactionStatus(e) {
            let t = e7(e);
            return this.fetchEndpoint('starknet_getTransactionStatus', {
              transaction_hash: t,
            });
          }
          simulateTransaction(e, t = {}) {
            let {
                blockIdentifier: r = this.blockIdentifier,
                skipValidate: n = !0,
                skipFeeCharge: a = !0,
              } = t,
              i = new nB(r).identifier,
              s = [];
            return (
              n && s.push(C.ESimulationFlag.SKIP_VALIDATE),
              a && s.push(C.ESimulationFlag.SKIP_FEE_CHARGE),
              this.fetchEndpoint('starknet_simulateTransactions', {
                block_id: i,
                transactions: e.map((e) => this.buildTransaction(e)),
                simulation_flags: s,
              })
            );
          }
          async waitForTransaction(e, t) {
            let r;
            let n = e7(e),
              { retries: a } = this,
              i = !1,
              s = !1,
              o = t?.retryInterval ?? this.transactionRetryIntervalDefault,
              c = t?.errorStates ?? [C.ETransactionStatus.REJECTED],
              l = t?.successStates ?? [
                C.ETransactionExecutionStatus.SUCCEEDED,
                C.ETransactionStatus.ACCEPTED_ON_L2,
                C.ETransactionStatus.ACCEPTED_ON_L1,
              ];
            for (; !i; ) {
              await nN(o);
              try {
                let e = (r = await this.getTransactionStatus(n))
                    .execution_status,
                  t = r.finality_status;
                if (!t) throw Error('waiting for transaction status');
                if (c.includes(e) || c.includes(t)) {
                  let n = `${e}: ${t}`,
                    a = Error(n);
                  throw ((a.response = r), (s = !0), a);
                }
                (l.includes(e) || l.includes(t)) && (i = !0);
              } catch (e) {
                if (e instanceof Error && s) throw e;
                if (a <= 0)
                  throw Error(
                    `waitForTransaction timed-out with retries ${this.retries}`
                  );
              }
              a -= 1;
            }
            let d = null;
            for (; null === d; ) {
              try {
                d = await this.getTransactionReceipt(n);
              } catch (e) {
                if (a <= 0)
                  throw Error(
                    `waitForTransaction timed-out with retries ${this.retries}`
                  );
              }
              (a -= 1), await nN(o);
            }
            return d;
          }
          getStorageAt(e, t, r = this.blockIdentifier) {
            let n = e7(e),
              a = tt(t),
              i = new nB(r).identifier;
            return this.fetchEndpoint('starknet_getStorageAt', {
              contract_address: n,
              key: a,
              block_id: i,
            });
          }
          getClassHashAt(e, t = this.blockIdentifier) {
            let r = e7(e),
              n = new nB(t).identifier;
            return this.fetchEndpoint('starknet_getClassHashAt', {
              block_id: n,
              contract_address: r,
            });
          }
          getClass(e, t = this.blockIdentifier) {
            let r = e7(e),
              n = new nB(t).identifier;
            return this.fetchEndpoint('starknet_getClass', {
              class_hash: r,
              block_id: n,
            });
          }
          getClassAt(e, t = this.blockIdentifier) {
            let r = e7(e),
              n = new nB(t).identifier;
            return this.fetchEndpoint('starknet_getClassAt', {
              block_id: n,
              contract_address: r,
            });
          }
          async getEstimateFee(
            e,
            { blockIdentifier: t = this.blockIdentifier, skipValidate: r = !0 }
          ) {
            let n = new nB(t).identifier,
              a = {};
            return (
              nP('0.5', await this.getSpecVersion()) ||
                (a = {
                  simulation_flags: r ? [C.ESimulationFlag.SKIP_VALIDATE] : [],
                }),
              this.fetchEndpoint('starknet_estimateFee', {
                request: e.map((e) => this.buildTransaction(e, 'fee')),
                block_id: n,
                ...a,
              })
            );
          }
          async invoke(e, t) {
            let r;
            return (
              nF(t)
                ? (r = this.fetchEndpoint('starknet_addInvokeTransaction', {
                    invoke_transaction: {
                      type: C.ETransactionType.INVOKE,
                      sender_address: e.contractAddress,
                      calldata: rD.toHex(e.calldata),
                      version: C.ETransactionVersion.V3,
                      signature: nh(e.signature),
                      nonce: e7(t.nonce),
                      resource_bounds: t.resourceBounds,
                      tip: e7(t.tip),
                      paymaster_data: t.paymasterData.map((e) => e7(e)),
                      account_deployment_data: t.accountDeploymentData.map(
                        (e) => e7(e)
                      ),
                      nonce_data_availability_mode: t.nonceDataAvailabilityMode,
                      fee_data_availability_mode: t.feeDataAvailabilityMode,
                    },
                  }))
                : ((r = this.fetchEndpoint('starknet_addInvokeTransaction', {
                    invoke_transaction: {
                      sender_address: e.contractAddress,
                      calldata: rD.toHex(e.calldata),
                      type: C.ETransactionType.INVOKE,
                      max_fee: e7(t.maxFee || 0),
                      version: C.ETransactionVersion.V1,
                      signature: nh(e.signature),
                      nonce: e7(t.nonce),
                    },
                  })),
                  nk.warn(eS.legacyTxWarningMessage, {
                    version: C.ETransactionVersion.V1,
                    type: C.ETransactionType.INVOKE,
                  })),
              this.waitMode
                ? this.waitForTransaction((await r).transaction_hash)
                : r
            );
          }
          async declare(
            {
              contract: e,
              signature: t,
              senderAddress: r,
              compiledClassHash: n,
            },
            a
          ) {
            let i;
            if (nT(e) || nF(a)) {
              if (nT(e) && !nF(a))
                (i = this.fetchEndpoint('starknet_addDeclareTransaction', {
                  declare_transaction: {
                    type: C.ETransactionType.DECLARE,
                    contract_class: {
                      sierra_program: no(e.sierra_program),
                      contract_class_version: e.contract_class_version,
                      entry_points_by_type: e.entry_points_by_type,
                      abi: e.abi,
                    },
                    compiled_class_hash: n || '',
                    version: C.ETransactionVersion.V2,
                    max_fee: e7(a.maxFee || 0),
                    signature: nh(t),
                    sender_address: r,
                    nonce: e7(a.nonce),
                  },
                })),
                  nk.warn(eS.legacyTxWarningMessage, {
                    version: C.ETransactionVersion.V2,
                    type: C.ETransactionType.DECLARE,
                  });
              else if (nT(e) && nF(a))
                i = this.fetchEndpoint('starknet_addDeclareTransaction', {
                  declare_transaction: {
                    type: C.ETransactionType.DECLARE,
                    sender_address: r,
                    compiled_class_hash: n || '',
                    version: C.ETransactionVersion.V3,
                    signature: nh(t),
                    nonce: e7(a.nonce),
                    contract_class: {
                      sierra_program: no(e.sierra_program),
                      contract_class_version: e.contract_class_version,
                      entry_points_by_type: e.entry_points_by_type,
                      abi: e.abi,
                    },
                    resource_bounds: a.resourceBounds,
                    tip: e7(a.tip),
                    paymaster_data: a.paymasterData.map((e) => e7(e)),
                    account_deployment_data: a.accountDeploymentData.map((e) =>
                      e7(e)
                    ),
                    nonce_data_availability_mode: a.nonceDataAvailabilityMode,
                    fee_data_availability_mode: a.feeDataAvailabilityMode,
                  },
                });
              else throw Error('declare unspotted parameters');
            } else
              (i = this.fetchEndpoint('starknet_addDeclareTransaction', {
                declare_transaction: {
                  type: C.ETransactionType.DECLARE,
                  contract_class: {
                    program: e.program,
                    entry_points_by_type: e.entry_points_by_type,
                    abi: e.abi,
                  },
                  version: C.ETransactionVersion.V1,
                  max_fee: e7(a.maxFee || 0),
                  signature: nh(t),
                  sender_address: r,
                  nonce: e7(a.nonce),
                },
              })),
                nk.warn(eS.legacyTxWarningMessage, {
                  version: C.ETransactionVersion.V1,
                  type: C.ETransactionType.DECLARE,
                });
            return this.waitMode
              ? this.waitForTransaction((await i).transaction_hash)
              : i;
          }
          async deployAccount(
            {
              classHash: e,
              constructorCalldata: t,
              addressSalt: r,
              signature: n,
            },
            a
          ) {
            let i;
            return (
              nF(a)
                ? (i = this.fetchEndpoint(
                    'starknet_addDeployAccountTransaction',
                    {
                      deploy_account_transaction: {
                        type: C.ETransactionType.DEPLOY_ACCOUNT,
                        version: C.ETransactionVersion.V3,
                        signature: nh(n),
                        nonce: e7(a.nonce),
                        contract_address_salt: e7(r || 0),
                        constructor_calldata: rD.toHex(t || []),
                        class_hash: e7(e),
                        resource_bounds: a.resourceBounds,
                        tip: e7(a.tip),
                        paymaster_data: a.paymasterData.map((e) => e7(e)),
                        nonce_data_availability_mode:
                          a.nonceDataAvailabilityMode,
                        fee_data_availability_mode: a.feeDataAvailabilityMode,
                      },
                    }
                  ))
                : ((i = this.fetchEndpoint(
                    'starknet_addDeployAccountTransaction',
                    {
                      deploy_account_transaction: {
                        constructor_calldata: rD.toHex(t || []),
                        class_hash: e7(e),
                        contract_address_salt: e7(r || 0),
                        type: C.ETransactionType.DEPLOY_ACCOUNT,
                        max_fee: e7(a.maxFee || 0),
                        version: C.ETransactionVersion.V1,
                        signature: nh(n),
                        nonce: e7(a.nonce),
                      },
                    }
                  )),
                  nk.warn(eS.legacyTxWarningMessage, {
                    version: C.ETransactionVersion.V1,
                    type: C.ETransactionType.DEPLOY_ACCOUNT,
                  })),
              this.waitMode
                ? this.waitForTransaction((await i).transaction_hash)
                : i
            );
          }
          callContract(e, t = this.blockIdentifier) {
            let r = new nB(t).identifier;
            return this.fetchEndpoint('starknet_call', {
              request: {
                contract_address: e.contractAddress,
                entry_point_selector: t_(e.entrypoint),
                calldata: rD.toHex(e.calldata),
              },
              block_id: r,
            });
          }
          estimateMessageFee(e, t = this.blockIdentifier) {
            let {
                from_address: r,
                to_address: n,
                entry_point_selector: a,
                payload: i,
              } = e,
              s = {
                from_address: nw(r),
                to_address: e7(n),
                entry_point_selector: tb(a),
                payload: tu(i),
              },
              o = new nB(t).identifier;
            return this.fetchEndpoint('starknet_estimateMessageFee', {
              message: s,
              block_id: o,
            });
          }
          getSyncingStats() {
            return this.fetchEndpoint('starknet_syncing');
          }
          getEvents(e) {
            return this.fetchEndpoint('starknet_getEvents', { filter: e });
          }
          buildTransaction(e, t) {
            let r;
            let n = nq(t);
            if (
              (nF(e)
                ? (r = {
                    signature: nh(e.signature),
                    nonce: e7(e.nonce),
                    resource_bounds: e.resourceBounds,
                    tip: e7(e.tip),
                    paymaster_data: e.paymasterData.map((e) => e7(e)),
                    nonce_data_availability_mode: e.nonceDataAvailabilityMode,
                    fee_data_availability_mode: e.feeDataAvailabilityMode,
                    account_deployment_data: e.accountDeploymentData.map((e) =>
                      e7(e)
                    ),
                  })
                : ((r = {
                    signature: nh(e.signature),
                    nonce: e7(e.nonce),
                    max_fee: e7(e.maxFee || 0),
                  }),
                  nk.warn(eS.legacyTxWarningMessage, {
                    version: e.version,
                    type: e.type,
                  })),
              e.type === eM.INVOKE)
            )
              return {
                type: C.ETransactionType.INVOKE,
                sender_address: e.contractAddress,
                calldata: rD.toHex(e.calldata),
                version: e7(e.version || n.v3),
                ...r,
              };
            if (e.type === eM.DECLARE)
              return nT(e.contract)
                ? {
                    type: e.type,
                    contract_class: {
                      ...e.contract,
                      sierra_program: no(e.contract.sierra_program),
                    },
                    compiled_class_hash: e.compiledClassHash || '',
                    sender_address: e.senderAddress,
                    version: e7(e.version || n.v3),
                    ...r,
                  }
                : {
                    type: e.type,
                    contract_class: e.contract,
                    sender_address: e.senderAddress,
                    version: e7(e.version || n.v1),
                    ...r,
                  };
            if (e.type === eM.DEPLOY_ACCOUNT) {
              let { account_deployment_data: t, ...a } = r;
              return {
                type: e.type,
                constructor_calldata: rD.toHex(e.constructorCalldata || []),
                class_hash: e7(e.classHash),
                contract_address_salt: e7(e.addressSalt || 0),
                version: e7(e.version || n.v3),
                ...a,
              };
            }
            throw Error(
              'RPC buildTransaction received unknown TransactionType'
            );
          }
        };
      v({}, { RpcChannel: () => nJ });
      var nz = {
          headers: { 'Content-Type': 'application/json' },
          blockIdentifier: eK.PENDING,
          retries: 200,
        },
        nJ = class {
          nodeUrl;
          headers;
          requestId;
          blockIdentifier;
          retries;
          waitMode;
          chainId;
          specVersion;
          transactionRetryIntervalFallback;
          batchClient;
          baseFetch;
          constructor(e) {
            let {
              baseFetch: t,
              batch: r,
              blockIdentifier: n,
              chainId: a,
              headers: i,
              nodeUrl: s,
              retries: o,
              specVersion: c,
              transactionRetryIntervalFallback: l,
              waitMode: d,
            } = e || {};
            Object.values(ef).includes(s)
              ? (this.nodeUrl = nD(s, e?.default))
              : s
                ? (this.nodeUrl = s)
                : (this.nodeUrl = nD(void 0, e?.default)),
              (this.baseFetch = t ?? nI),
              (this.blockIdentifier = n ?? nz.blockIdentifier),
              (this.chainId = a),
              (this.headers = { ...nz.headers, ...i }),
              (this.retries = o ?? nz.retries),
              (this.specVersion = c),
              (this.transactionRetryIntervalFallback = l),
              (this.waitMode = d ?? !1),
              (this.requestId = 0),
              'number' == typeof r &&
                (this.batchClient = new eQ({
                  nodeUrl: this.nodeUrl,
                  headers: this.headers,
                  interval: r,
                  baseFetch: this.baseFetch,
                }));
          }
          get transactionRetryIntervalDefault() {
            return this.transactionRetryIntervalFallback ?? 5e3;
          }
          setChainId(e) {
            this.chainId = e;
          }
          fetch(e, t, r = 0) {
            let n = {
              id: r,
              jsonrpc: '2.0',
              method: e,
              ...(t && { params: t }),
            };
            return this.baseFetch(this.nodeUrl, {
              method: 'POST',
              body: eD(n),
              headers: this.headers,
            });
          }
          errorHandler(e, t, r, n) {
            if (r) throw new eR(r, e, t);
            if (n instanceof eP) throw n;
            if (n) throw Error(n.message);
          }
          async fetchEndpoint(e, t) {
            try {
              if (this.batchClient) {
                let { error: r, result: n } = await this.batchClient.fetch(
                  e,
                  t,
                  (this.requestId += 1)
                );
                return this.errorHandler(e, t, r), n;
              }
              let r = await this.fetch(e, t, (this.requestId += 1)),
                { error: n, result: a } = await r.json();
              return this.errorHandler(e, t, n), a;
            } catch (r) {
              throw (this.errorHandler(e, t, r?.response?.data, r), r);
            }
          }
          async getChainId() {
            return (
              (this.chainId ??= await this.fetchEndpoint('starknet_chainId')),
              this.chainId
            );
          }
          async getSpecVersion() {
            return (
              (this.specVersion ??= await this.fetchEndpoint(
                'starknet_specVersion'
              )),
              this.specVersion
            );
          }
          getNonceForAddress(e, t = this.blockIdentifier) {
            let r = e7(e),
              n = new nB(t).identifier;
            return this.fetchEndpoint('starknet_getNonce', {
              contract_address: r,
              block_id: n,
            });
          }
          getBlockLatestAccepted() {
            return this.fetchEndpoint('starknet_blockHashAndNumber');
          }
          getBlockNumber() {
            return this.fetchEndpoint('starknet_blockNumber');
          }
          getBlockWithTxHashes(e = this.blockIdentifier) {
            let t = new nB(e).identifier;
            return this.fetchEndpoint('starknet_getBlockWithTxHashes', {
              block_id: t,
            });
          }
          getBlockWithTxs(e = this.blockIdentifier) {
            let t = new nB(e).identifier;
            return this.fetchEndpoint('starknet_getBlockWithTxs', {
              block_id: t,
            });
          }
          getBlockWithReceipts(e = this.blockIdentifier) {
            let t = new nB(e).identifier;
            return this.fetchEndpoint('starknet_getBlockWithReceipts', {
              block_id: t,
            });
          }
          getBlockStateUpdate(e = this.blockIdentifier) {
            let t = new nB(e).identifier;
            return this.fetchEndpoint('starknet_getStateUpdate', {
              block_id: t,
            });
          }
          getBlockTransactionsTraces(e = this.blockIdentifier) {
            let t = new nB(e).identifier;
            return this.fetchEndpoint('starknet_traceBlockTransactions', {
              block_id: t,
            });
          }
          getBlockTransactionCount(e = this.blockIdentifier) {
            let t = new nB(e).identifier;
            return this.fetchEndpoint('starknet_getBlockTransactionCount', {
              block_id: t,
            });
          }
          getTransactionByHash(e) {
            let t = e7(e);
            return this.fetchEndpoint('starknet_getTransactionByHash', {
              transaction_hash: t,
            });
          }
          getTransactionByBlockIdAndIndex(e, t) {
            let r = new nB(e).identifier;
            return this.fetchEndpoint(
              'starknet_getTransactionByBlockIdAndIndex',
              { block_id: r, index: t }
            );
          }
          getTransactionReceipt(e) {
            let t = e7(e);
            return this.fetchEndpoint('starknet_getTransactionReceipt', {
              transaction_hash: t,
            });
          }
          getTransactionTrace(e) {
            let t = e7(e);
            return this.fetchEndpoint('starknet_traceTransaction', {
              transaction_hash: t,
            });
          }
          getTransactionStatus(e) {
            let t = e7(e);
            return this.fetchEndpoint('starknet_getTransactionStatus', {
              transaction_hash: t,
            });
          }
          simulateTransaction(e, t = {}) {
            let {
                blockIdentifier: r = this.blockIdentifier,
                skipValidate: n = !0,
                skipFeeCharge: i = !0,
              } = t,
              s = new nB(r).identifier,
              o = [];
            return (
              n && o.push(a.vn.SKIP_VALIDATE),
              i && o.push(a.vn.SKIP_FEE_CHARGE),
              this.fetchEndpoint('starknet_simulateTransactions', {
                block_id: s,
                transactions: e.map((e) => this.buildTransaction(e)),
                simulation_flags: o,
              })
            );
          }
          async waitForTransaction(e, t) {
            let r;
            let n = e7(e),
              { retries: i } = this,
              s = !1,
              o = !1,
              c = t?.retryInterval ?? this.transactionRetryIntervalDefault,
              l = t?.errorStates ?? [a.sI.REJECTED],
              d = t?.successStates ?? [
                a.If.SUCCEEDED,
                a.sI.ACCEPTED_ON_L2,
                a.sI.ACCEPTED_ON_L1,
              ];
            for (; !s; ) {
              await nN(c);
              try {
                let e = (r = await this.getTransactionStatus(n))
                    .execution_status,
                  t = r.finality_status;
                if (!t) throw Error('waiting for transaction status');
                if (l.includes(e) || l.includes(t)) {
                  let n = `${e}: ${t}`,
                    a = Error(n);
                  throw ((a.response = r), (o = !0), a);
                }
                (d.includes(e) || d.includes(t)) && (s = !0);
              } catch (e) {
                if (e instanceof Error && o) throw e;
                if (i <= 0)
                  throw Error(
                    `waitForTransaction timed-out with retries ${this.retries}`
                  );
              }
              i -= 1;
            }
            let u = null;
            for (; null === u; ) {
              try {
                u = await this.getTransactionReceipt(n);
              } catch (e) {
                if (i <= 0)
                  throw Error(
                    `waitForTransaction timed-out with retries ${this.retries}`
                  );
              }
              (i -= 1), await nN(c);
            }
            return u;
          }
          getStorageAt(e, t, r = this.blockIdentifier) {
            let n = e7(e),
              a = tt(t),
              i = new nB(r).identifier;
            return this.fetchEndpoint('starknet_getStorageAt', {
              contract_address: n,
              key: a,
              block_id: i,
            });
          }
          getClassHashAt(e, t = this.blockIdentifier) {
            let r = e7(e),
              n = new nB(t).identifier;
            return this.fetchEndpoint('starknet_getClassHashAt', {
              block_id: n,
              contract_address: r,
            });
          }
          getClass(e, t = this.blockIdentifier) {
            let r = e7(e),
              n = new nB(t).identifier;
            return this.fetchEndpoint('starknet_getClass', {
              class_hash: r,
              block_id: n,
            });
          }
          getClassAt(e, t = this.blockIdentifier) {
            let r = e7(e),
              n = new nB(t).identifier;
            return this.fetchEndpoint('starknet_getClassAt', {
              block_id: n,
              contract_address: r,
            });
          }
          async getEstimateFee(
            e,
            { blockIdentifier: t = this.blockIdentifier, skipValidate: r = !0 }
          ) {
            let n = new nB(t).identifier,
              i = {};
            return (
              nP('0.5', await this.getSpecVersion()) ||
                (i = { simulation_flags: r ? [a.vn.SKIP_VALIDATE] : [] }),
              this.fetchEndpoint('starknet_estimateFee', {
                request: e.map((e) => this.buildTransaction(e, 'fee')),
                block_id: n,
                ...i,
              })
            );
          }
          async invoke(e, t) {
            let r;
            return (
              nF(t)
                ? (r = this.fetchEndpoint('starknet_addInvokeTransaction', {
                    invoke_transaction: {
                      type: a.wV.INVOKE,
                      sender_address: e.contractAddress,
                      calldata: rD.toHex(e.calldata),
                      version: a.WY.V3,
                      signature: nh(e.signature),
                      nonce: e7(t.nonce),
                      resource_bounds: t.resourceBounds,
                      tip: e7(t.tip),
                      paymaster_data: t.paymasterData.map((e) => e7(e)),
                      account_deployment_data: t.accountDeploymentData.map(
                        (e) => e7(e)
                      ),
                      nonce_data_availability_mode: t.nonceDataAvailabilityMode,
                      fee_data_availability_mode: t.feeDataAvailabilityMode,
                    },
                  }))
                : ((r = this.fetchEndpoint('starknet_addInvokeTransaction', {
                    invoke_transaction: {
                      sender_address: e.contractAddress,
                      calldata: rD.toHex(e.calldata),
                      type: a.wV.INVOKE,
                      max_fee: e7(t.maxFee || 0),
                      version: a.WY.V1,
                      signature: nh(e.signature),
                      nonce: e7(t.nonce),
                    },
                  })),
                  nk.warn(eS.legacyTxWarningMessage, {
                    version: a.WY.V1,
                    type: a.wV.INVOKE,
                  })),
              this.waitMode
                ? this.waitForTransaction((await r).transaction_hash)
                : r
            );
          }
          async declare(
            {
              contract: e,
              signature: t,
              senderAddress: r,
              compiledClassHash: n,
            },
            i
          ) {
            let s;
            if (nT(e) || nF(i)) {
              if (nT(e) && !nF(i))
                (s = this.fetchEndpoint('starknet_addDeclareTransaction', {
                  declare_transaction: {
                    type: a.wV.DECLARE,
                    contract_class: {
                      sierra_program: no(e.sierra_program),
                      contract_class_version: e.contract_class_version,
                      entry_points_by_type: e.entry_points_by_type,
                      abi: e.abi,
                    },
                    compiled_class_hash: n || '',
                    version: a.WY.V2,
                    max_fee: e7(i.maxFee || 0),
                    signature: nh(t),
                    sender_address: r,
                    nonce: e7(i.nonce),
                  },
                })),
                  nk.warn(eS.legacyTxWarningMessage, {
                    version: a.WY.V2,
                    type: a.wV.DECLARE,
                  });
              else if (nT(e) && nF(i))
                s = this.fetchEndpoint('starknet_addDeclareTransaction', {
                  declare_transaction: {
                    type: a.wV.DECLARE,
                    sender_address: r,
                    compiled_class_hash: n || '',
                    version: a.WY.V3,
                    signature: nh(t),
                    nonce: e7(i.nonce),
                    contract_class: {
                      sierra_program: no(e.sierra_program),
                      contract_class_version: e.contract_class_version,
                      entry_points_by_type: e.entry_points_by_type,
                      abi: e.abi,
                    },
                    resource_bounds: i.resourceBounds,
                    tip: e7(i.tip),
                    paymaster_data: i.paymasterData.map((e) => e7(e)),
                    account_deployment_data: i.accountDeploymentData.map((e) =>
                      e7(e)
                    ),
                    nonce_data_availability_mode: i.nonceDataAvailabilityMode,
                    fee_data_availability_mode: i.feeDataAvailabilityMode,
                  },
                });
              else throw Error('declare unspotted parameters');
            } else
              (s = this.fetchEndpoint('starknet_addDeclareTransaction', {
                declare_transaction: {
                  type: a.wV.DECLARE,
                  contract_class: {
                    program: e.program,
                    entry_points_by_type: e.entry_points_by_type,
                    abi: e.abi,
                  },
                  version: a.WY.V1,
                  max_fee: e7(i.maxFee || 0),
                  signature: nh(t),
                  sender_address: r,
                  nonce: e7(i.nonce),
                },
              })),
                nk.warn(eS.legacyTxWarningMessage, {
                  version: a.WY.V1,
                  type: a.wV.DECLARE,
                });
            return this.waitMode
              ? this.waitForTransaction((await s).transaction_hash)
              : s;
          }
          async deployAccount(
            {
              classHash: e,
              constructorCalldata: t,
              addressSalt: r,
              signature: n,
            },
            i
          ) {
            let s;
            return (
              nF(i)
                ? (s = this.fetchEndpoint(
                    'starknet_addDeployAccountTransaction',
                    {
                      deploy_account_transaction: {
                        type: a.wV.DEPLOY_ACCOUNT,
                        version: a.WY.V3,
                        signature: nh(n),
                        nonce: e7(i.nonce),
                        contract_address_salt: e7(r || 0),
                        constructor_calldata: rD.toHex(t || []),
                        class_hash: e7(e),
                        resource_bounds: i.resourceBounds,
                        tip: e7(i.tip),
                        paymaster_data: i.paymasterData.map((e) => e7(e)),
                        nonce_data_availability_mode:
                          i.nonceDataAvailabilityMode,
                        fee_data_availability_mode: i.feeDataAvailabilityMode,
                      },
                    }
                  ))
                : ((s = this.fetchEndpoint(
                    'starknet_addDeployAccountTransaction',
                    {
                      deploy_account_transaction: {
                        constructor_calldata: rD.toHex(t || []),
                        class_hash: e7(e),
                        contract_address_salt: e7(r || 0),
                        type: a.wV.DEPLOY_ACCOUNT,
                        max_fee: e7(i.maxFee || 0),
                        version: a.WY.V1,
                        signature: nh(n),
                        nonce: e7(i.nonce),
                      },
                    }
                  )),
                  nk.warn(eS.legacyTxWarningMessage, {
                    version: a.WY.V1,
                    type: a.wV.DEPLOY_ACCOUNT,
                  })),
              this.waitMode
                ? this.waitForTransaction((await s).transaction_hash)
                : s
            );
          }
          callContract(e, t = this.blockIdentifier) {
            let r = new nB(t).identifier;
            return this.fetchEndpoint('starknet_call', {
              request: {
                contract_address: e.contractAddress,
                entry_point_selector: t_(e.entrypoint),
                calldata: rD.toHex(e.calldata),
              },
              block_id: r,
            });
          }
          estimateMessageFee(e, t = this.blockIdentifier) {
            let {
                from_address: r,
                to_address: n,
                entry_point_selector: a,
                payload: i,
              } = e,
              s = {
                from_address: nw(r),
                to_address: e7(n),
                entry_point_selector: tb(a),
                payload: tu(i),
              },
              o = new nB(t).identifier;
            return this.fetchEndpoint('starknet_estimateMessageFee', {
              message: s,
              block_id: o,
            });
          }
          getSyncingStats() {
            return this.fetchEndpoint('starknet_syncing');
          }
          getEvents(e) {
            return this.fetchEndpoint('starknet_getEvents', { filter: e });
          }
          buildTransaction(e, t) {
            let r;
            let n = nq(t);
            if (
              (nF(e)
                ? (r = {
                    signature: nh(e.signature),
                    nonce: e7(e.nonce),
                    resource_bounds: e.resourceBounds,
                    tip: e7(e.tip),
                    paymaster_data: e.paymasterData.map((e) => e7(e)),
                    nonce_data_availability_mode: e.nonceDataAvailabilityMode,
                    fee_data_availability_mode: e.feeDataAvailabilityMode,
                    account_deployment_data: e.accountDeploymentData.map((e) =>
                      e7(e)
                    ),
                  })
                : ((r = {
                    signature: nh(e.signature),
                    nonce: e7(e.nonce),
                    max_fee: e7(e.maxFee || 0),
                  }),
                  nk.warn(eS.legacyTxWarningMessage, {
                    version: e.version,
                    type: e.type,
                  })),
              e.type === eM.INVOKE)
            )
              return {
                type: a.wV.INVOKE,
                sender_address: e.contractAddress,
                calldata: rD.toHex(e.calldata),
                version: e7(e.version || n.v3),
                ...r,
              };
            if (e.type === eM.DECLARE)
              return nT(e.contract)
                ? {
                    type: e.type,
                    contract_class: {
                      ...e.contract,
                      sierra_program: no(e.contract.sierra_program),
                    },
                    compiled_class_hash: e.compiledClassHash || '',
                    sender_address: e.senderAddress,
                    version: e7(e.version || n.v3),
                    ...r,
                  }
                : {
                    type: e.type,
                    contract_class: e.contract,
                    sender_address: e.senderAddress,
                    version: e7(e.version || n.v1),
                    ...r,
                  };
            if (e.type === eM.DEPLOY_ACCOUNT) {
              let { account_deployment_data: t, ...a } = r;
              return {
                type: e.type,
                constructor_calldata: rD.toHex(e.constructorCalldata || []),
                class_hash: e7(e.classHash),
                contract_address_salt: e7(e.addressSalt || 0),
                version: e7(e.version || n.v3),
                ...a,
              };
            }
            throw Error(
              'RPC buildTransaction received unknown TransactionType'
            );
          }
        },
        nZ = class {
          margin;
          constructor(e) {
            this.margin = e;
          }
          estimatedFeeToMaxFee(e) {
            return np(e, this.margin?.maxFee);
          }
          estimateFeeToBounds(e) {
            return nf(
              e,
              this.margin?.l1BoundMaxAmount,
              this.margin?.l1BoundMaxPricePerUnit
            );
          }
          parseGetBlockResponse(e) {
            return { status: 'PENDING', ...e };
          }
          parseTransactionReceipt(e) {
            return 'actual_fee' in e && e4(e.actual_fee)
              ? { ...e, actual_fee: { amount: e.actual_fee, unit: 'FRI' } }
              : e;
          }
          parseFeeEstimateResponse(e) {
            let t = e[0];
            return {
              overall_fee: e9(t.overall_fee),
              gas_consumed: e9(t.gas_consumed),
              gas_price: e9(t.gas_price),
              unit: t.unit,
              suggestedMaxFee: this.estimatedFeeToMaxFee(t.overall_fee),
              resourceBounds: this.estimateFeeToBounds(t),
              data_gas_consumed: t.data_gas_consumed
                ? e9(t.data_gas_consumed)
                : 0n,
              data_gas_price: t.data_gas_price ? e9(t.data_gas_price) : 0n,
            };
          }
          parseFeeEstimateBulkResponse(e) {
            return e.map((e) => ({
              overall_fee: e9(e.overall_fee),
              gas_consumed: e9(e.gas_consumed),
              gas_price: e9(e.gas_price),
              unit: e.unit,
              suggestedMaxFee: this.estimatedFeeToMaxFee(e.overall_fee),
              resourceBounds: this.estimateFeeToBounds(e),
              data_gas_consumed: e.data_gas_consumed
                ? e9(e.data_gas_consumed)
                : 0n,
              data_gas_price: e.data_gas_price ? e9(e.data_gas_price) : 0n,
            }));
          }
          parseSimulateTransactionResponse(e) {
            return e.map((e) => ({
              ...e,
              suggestedMaxFee: this.estimatedFeeToMaxFee(
                e.fee_estimation.overall_fee
              ),
              resourceBounds: this.estimateFeeToBounds(e.fee_estimation),
            }));
          }
          parseContractClassResponse(e) {
            return { ...e, abi: e4(e.abi) ? JSON.parse(e.abi) : e.abi };
          }
          parseL1GasPriceResponse(e) {
            return e.l1_gas_price.price_in_wei;
          }
        },
        nQ = class e {
          statusReceipt;
          value;
          constructor(t) {
            for (let [r] of (([this.statusReceipt, this.value] = e.isSuccess(t)
              ? ['success', t]
              : e.isReverted(t)
                ? ['reverted', t]
                : e.isRejected(t)
                  ? ['rejected', t]
                  : ['error', Error('Unknown response type')]),
            Object.entries(this)))
              Object.defineProperty(this, r, { enumerable: !1 });
            for (let [e, r] of Object.entries(t))
              Object.defineProperty(this, e, {
                enumerable: !0,
                writable: !1,
                value: r,
              });
          }
          match(e) {
            return this.statusReceipt in e
              ? e[this.statusReceipt](this.value)
              : e._();
          }
          isSuccess() {
            return 'success' === this.statusReceipt;
          }
          isReverted() {
            return 'reverted' === this.statusReceipt;
          }
          isRejected() {
            return 'rejected' === this.statusReceipt;
          }
          isError() {
            return 'error' === this.statusReceipt;
          }
          static isSuccess(e) {
            return e.execution_status === eU.SUCCEEDED;
          }
          static isReverted(e) {
            return e.execution_status === eU.REVERTED;
          }
          static isRejected(e) {
            return e.status === eU.REJECTED;
          }
        };
      v(
        {},
        {
          TypedDataRevision: () => o.K,
          encodeData: () => an,
          encodeType: () => ae,
          encodeValue: () => ar,
          getDependencies: () => n7,
          getMessageHash: () => ai,
          getStructHash: () => aa,
          getTypeHash: () => at,
          isMerkleTreeType: () => n9,
          prepareSelector: () => n8,
          validateTypedData: () => n3,
          verifyMessage: () => as,
        }
      ),
        v(
          {},
          {
            MerkleTree: () => n0,
            proofMerklePath: () =>
              function e(t, r, n, a = r0) {
                if (0 === n.length) return t === r;
                let [i, ...s] = n;
                return e(t, n0.hash(r, i, a), s, a);
              },
          }
        );
      var n0 = class e {
          leaves;
          branches = [];
          root;
          hashMethod;
          constructor(e, t = r0) {
            (this.hashMethod = t),
              (this.leaves = e),
              (this.root = this.build(e));
          }
          build(t) {
            if (1 === t.length) return t[0];
            t.length !== this.leaves.length && this.branches.push(t);
            let r = [];
            for (let n = 0; n < t.length; n += 2)
              n + 1 === t.length
                ? r.push(e.hash(t[n], '0x0', this.hashMethod))
                : r.push(e.hash(t[n], t[n + 1], this.hashMethod));
            return this.build(r);
          }
          static hash(e, t, r = r0) {
            let [n, a] = [BigInt(e), BigInt(t)].sort((e, t) =>
              e >= t ? 1 : -1
            );
            return r(n, a);
          }
          getProof(t, r = this.leaves, n = []) {
            let a = r.indexOf(t);
            if (-1 === a) throw Error('leaf not found');
            if (1 === r.length) return n;
            let i = a % 2 == 0,
              s = (i ? r[a + 1] : r[a - 1]) ?? '0x0',
              o = [...n, s],
              c =
                this.leaves.length === r.length
                  ? -1
                  : this.branches.findIndex((e) => e.length === r.length),
              l = this.branches[c + 1] ?? [this.root];
            return this.getProof(
              e.hash(i ? t : s, i ? s : t, this.hashMethod),
              l,
              o
            );
          }
        },
        n1 = {
          u256: JSON.parse(
            '[{ "name": "low", "type": "u128" }, { "name": "high", "type": "u128" }]'
          ),
          TokenAmount: JSON.parse(
            '[{ "name": "token_address", "type": "ContractAddress" }, { "name": "amount", "type": "u256" }]'
          ),
          NftId: JSON.parse(
            '[{ "name": "collection_address", "type": "ContractAddress" }, { "name": "token_id", "type": "u256" }]'
          ),
        },
        n2 = {
          [o.K.ACTIVE]: {
            domain: 'StarknetDomain',
            hashMethod: r6,
            hashMerkleMethod: r1,
            escapeTypeString: (e) => `"${e}"`,
            presetTypes: n1,
          },
          [o.K.LEGACY]: {
            domain: 'StarkNetDomain',
            hashMethod: r5,
            hashMerkleMethod: r0,
            escapeTypeString: (e) => e,
            presetTypes: {},
          },
        };
      function n5(e, t, { min: r, max: n }) {
        let a = BigInt(e);
        e0(a >= r && a <= n, `${a} (${t}) is out of bounds [${r}, ${n}]`);
      }
      function n6({ types: e, domain: t }) {
        return n2[o.K.ACTIVE].domain in e && t.revision === o.K.ACTIVE
          ? o.K.ACTIVE
          : n2[o.K.LEGACY].domain in e &&
              (t.revision ?? o.K.LEGACY) === o.K.LEGACY
            ? o.K.LEGACY
            : void 0;
      }
      function n4(e) {
        try {
          return e7(e);
        } catch (t) {
          if (e4(e)) return e7(tx(e));
          throw Error(`Invalid BigNumberish: ${e}`);
        }
      }
      function n3(e) {
        return !!(e.message && e.primaryType && e.types && n6(e));
      }
      function n8(e) {
        return e8(e) ? e : t_(e);
      }
      function n9(e) {
        return 'merkletree' === e.type;
      }
      function n7(e, t, r = [], n = '', a = o.K.LEGACY) {
        let i = [t];
        return (
          '*' === t[t.length - 1]
            ? (i = [t.slice(0, -1)])
            : a === o.K.ACTIVE &&
              ('enum' === t
                ? (i = [n])
                : t.match(/^\(.*\)$/) &&
                  (i = t
                    .slice(1, -1)
                    .split(',')
                    .map((e) =>
                      '*' === e[e.length - 1] ? e.slice(0, -1) : e
                    ))),
          i
            .filter((t) => !r.includes(t) && e[t])
            .reduce(
              (t, r) => [
                ...t,
                ...[
                  r,
                  ...e[r].reduce(
                    (t, r) => [
                      ...t,
                      ...n7(e, r.type, t, r.contains, a).filter(
                        (e) => !t.includes(e)
                      ),
                    ],
                    []
                  ),
                ].filter((e) => !t.includes(e)),
              ],
              []
            )
        );
      }
      function ae(e, t, r = o.K.LEGACY) {
        let n = r === o.K.ACTIVE ? { ...e, ...n2[r].presetTypes } : e,
          [a, ...i] = n7(n, t, void 0, void 0, r),
          s = a ? [a, ...i.sort()] : [],
          c = n2[r].escapeTypeString;
        return s
          .map((e) => {
            let t = n[e].map((e) => {
              let t =
                  'enum' === e.type && r === o.K.ACTIVE ? e.contains : e.type,
                n = t.match(/^\(.*\)$/)
                  ? `(${t
                      .slice(1, -1)
                      .split(',')
                      .map((e) => (e ? c(e) : e))
                      .join(',')})`
                  : c(t);
              return `${c(e.name)}:${n}`;
            });
            return `${c(e)}(${t})`;
          })
          .join('');
      }
      function at(e, t, r = o.K.LEGACY) {
        return t_(ae(e, t, r));
      }
      function ar(e, t, r, n = {}, a = o.K.LEGACY) {
        if (e[t]) return [t, aa(e, t, r, a)];
        if (n2[a].presetTypes[t]) return [t, aa(n2[a].presetTypes, t, r, a)];
        if (t.endsWith('*')) {
          let n = r.map((r) => ar(e, t.slice(0, -1), r, void 0, a)[1]);
          return [t, n2[a].hashMethod(n)];
        }
        switch (t) {
          case 'enum':
            if (a === o.K.ACTIVE) {
              let [i, s] = Object.entries(r)[0],
                o = e[n.parent].find((e) => e.name === n.key),
                c = e[o.contains],
                l = c.find((e) => e.name === i),
                d = c.indexOf(l),
                u = l.type
                  .slice(1, -1)
                  .split(',')
                  .map((t, r) => (t ? ar(e, t, s[r], void 0, a)[1] : t));
              return [t, n2[a].hashMethod([d, ...u])];
            }
            return [t, n4(r)];
          case 'merkletree': {
            let t = (function (e, t) {
                if (t.parent && t.key) {
                  let r = e[t.parent].find((e) => e.name === t.key);
                  if (!n9(r)) throw Error(`${t.key} is not a merkle tree`);
                  if (r.contains.endsWith('*'))
                    throw Error(
                      `Merkle tree contain property must not be an array but was given ${t.key}`
                    );
                  return r.contains;
                }
                return 'raw';
              })(e, n),
              { root: i } = new n0(
                r.map((r) => ar(e, t, r, void 0, a)[1]),
                n2[a].hashMerkleMethod
              );
            return ['felt', i];
          }
          case 'selector':
            return ['felt', n8(r)];
          case 'string':
            if (a === o.K.ACTIVE) {
              let e = tV(r),
                n = [
                  e.data.length,
                  ...e.data,
                  e.pending_word,
                  e.pending_word_len,
                ];
              return [t, n2[a].hashMethod(n)];
            }
            return [t, n4(r)];
          case 'i128':
            if (a === o.K.ACTIVE) {
              let e = BigInt(r);
              return n5(e, t, eu), [t, n4(e < 0n ? es + e : e)];
            }
            return [t, n4(r)];
          case 'timestamp':
          case 'u128':
            return a === o.K.ACTIVE && n5(r, t, eh), [t, n4(r)];
          case 'felt':
          case 'shortstring':
            return a === o.K.ACTIVE && n5(n4(r), t, ed), [t, n4(r)];
          case 'ClassHash':
          case 'ContractAddress':
            return a === o.K.ACTIVE && n5(r, t, ed), [t, n4(r)];
          case 'bool':
            return (
              a === o.K.ACTIVE && e0(e5(r), `Type mismatch for ${t} ${r}`),
              [t, n4(r)]
            );
          default:
            if (a === o.K.ACTIVE) throw Error(`Unsupported type: ${t}`);
            return [t, n4(r)];
        }
      }
      function an(e, t, r, n = o.K.LEGACY) {
        let [a, i] = (e[t] ?? n2[n].presetTypes[t]).reduce(
          ([a, i], s) => {
            if (
              void 0 === r[s.name] ||
              (null === r[s.name] && 'enum' !== s.type)
            )
              throw Error(`Cannot encode data: missing data for '${s.name}'`);
            let o = r[s.name],
              c = { parent: t, key: s.name },
              [l, d] = ar(e, s.type, o, c, n);
            return [
              [...a, l],
              [...i, d],
            ];
          },
          [['felt'], [at(e, t, n)]]
        );
        return [a, i];
      }
      function aa(e, t, r, n = o.K.LEGACY) {
        return n2[n].hashMethod(an(e, t, r, n)[1]);
      }
      function ai(e, t) {
        if (!n3(e)) throw Error('Typed data does not match JSON schema');
        let r = n6(e),
          { domain: n, hashMethod: a } = n2[r];
        return a([
          tx('StarkNet Message'),
          aa(e.types, n, e.domain, r),
          t,
          aa(e.types, e.primaryType, e.message, r),
        ]);
      }
      function as(e, t, r, n) {
        let a = n3(e);
        if (!ty(e) && !a) throw Error('message has a wrong format.');
        if (a && void 0 === n)
          throw Error(
            'When providing a TypedData in message parameter, the accountAddress parameter has to be provided.'
          );
        if (a && !ty(n)) throw Error('accountAddress shall be a BigNumberish');
        let i = a ? ai(e, n) : e7(e),
          s = Array.isArray(t)
            ? new d.Signature(BigInt(t[0]), BigInt(t[1]))
            : t,
          o = e7(r);
        return d.verify(s, i, o);
      }
      var ao = class {
        responseParser;
        channel;
        constructor(e) {
          e && 'channel' in e
            ? ((this.channel = e.channel),
              (this.responseParser =
                'responseParser' in e ? e.responseParser : new nZ()))
            : ((this.channel = new nJ({ ...e, waitMode: !1 })),
              (this.responseParser = new nZ(e?.feeMarginPercentage)));
        }
        fetch(e, t, r = 0) {
          return this.channel.fetch(e, t, r);
        }
        async getChainId() {
          return this.channel.getChainId();
        }
        async getSpecVersion() {
          return this.channel.getSpecVersion();
        }
        async getNonceForAddress(e, t) {
          return this.channel.getNonceForAddress(e, t);
        }
        async getBlock(e) {
          return this.channel
            .getBlockWithTxHashes(e)
            .then(this.responseParser.parseGetBlockResponse);
        }
        async getBlockLatestAccepted() {
          return this.channel.getBlockLatestAccepted();
        }
        async getBlockNumber() {
          return this.channel.getBlockNumber();
        }
        async getBlockWithTxHashes(e) {
          return this.channel.getBlockWithTxHashes(e);
        }
        async getBlockWithTxs(e) {
          return this.channel.getBlockWithTxs(e);
        }
        async waitForBlock(e = 'pending', t = 5e3) {
          if (e === eK.LATEST) return;
          let r = await this.getBlockNumber(),
            n = e === eK.PENDING ? r + 1 : Number(e7(e));
          if (n <= r) return;
          let { retries: a } = this.channel,
            i = a,
            s = !1;
          for (; !s; )
            if (
              ((await this.getBlockNumber()) === n ? (s = !0) : await nN(t),
              (i -= 1) <= 0)
            )
              throw Error(`waitForBlock() timed-out after ${a} tries.`);
        }
        async getL1GasPrice(e) {
          return this.channel
            .getBlockWithTxHashes(e)
            .then(this.responseParser.parseL1GasPriceResponse);
        }
        async getL1MessageHash(e) {
          let t = await this.channel.getTransactionByHash(e);
          e0(
            'L1_HANDLER' === t.type,
            'This L2 transaction is not a L1 message.'
          );
          let {
            calldata: r,
            contract_address: n,
            entry_point_selector: a,
            nonce: i,
          } = t;
          return tT([r[0], n, i, a, r.length - 1, ...r.slice(1)]);
        }
        async getBlockWithReceipts(e) {
          if (this.channel instanceof ek.RpcChannel)
            throw new eP('Unsupported method for RPC version');
          return this.channel.getBlockWithReceipts(e);
        }
        getStateUpdate = this.getBlockStateUpdate;
        async getBlockStateUpdate(e) {
          return this.channel.getBlockStateUpdate(e);
        }
        async getBlockTransactionsTraces(e) {
          return this.channel.getBlockTransactionsTraces(e);
        }
        async getBlockTransactionCount(e) {
          return this.channel.getBlockTransactionCount(e);
        }
        async getPendingTransactions() {
          let { transactions: e } = await this.getBlockWithTxHashes(
            eK.PENDING
          ).then(this.responseParser.parseGetBlockResponse);
          return Promise.all(e.map((e) => this.getTransactionByHash(e)));
        }
        async getTransaction(e) {
          return this.channel.getTransactionByHash(e);
        }
        async getTransactionByHash(e) {
          return this.channel.getTransactionByHash(e);
        }
        async getTransactionByBlockIdAndIndex(e, t) {
          return this.channel.getTransactionByBlockIdAndIndex(e, t);
        }
        async getTransactionReceipt(e) {
          let t = await this.channel.getTransactionReceipt(e);
          return new nQ(this.responseParser.parseTransactionReceipt(t));
        }
        async getTransactionTrace(e) {
          return this.channel.getTransactionTrace(e);
        }
        async getTransactionStatus(e) {
          return this.channel.getTransactionStatus(e);
        }
        async getSimulateTransaction(e, t) {
          return this.channel
            .simulateTransaction(e, t)
            .then((e) =>
              this.responseParser.parseSimulateTransactionResponse(e)
            );
        }
        async waitForTransaction(e, t) {
          return new nQ(await this.channel.waitForTransaction(e, t));
        }
        async getStorageAt(e, t, r) {
          return this.channel.getStorageAt(e, t, r);
        }
        async getClassHashAt(e, t) {
          return this.channel.getClassHashAt(e, t);
        }
        async getClassByHash(e) {
          return this.getClass(e);
        }
        async getClass(e, t) {
          return this.channel
            .getClass(e, t)
            .then(this.responseParser.parseContractClassResponse);
        }
        async getClassAt(e, t) {
          return this.channel
            .getClassAt(e, t)
            .then(this.responseParser.parseContractClassResponse);
        }
        async getContractVersion(
          e,
          t,
          {
            blockIdentifier: r = this.channel.blockIdentifier,
            compiler: n = !0,
          } = {}
        ) {
          let a;
          if (e) a = await this.getClassAt(e, r);
          else if (t) a = await this.getClass(t, r);
          else
            throw Error(
              'getContractVersion require contractAddress or classHash'
            );
          return nT(a)
            ? n
              ? { cairo: '1', compiler: t7(a.abi).compiler }
              : { cairo: '1', compiler: void 0 }
            : { cairo: '0', compiler: '0' };
        }
        async getEstimateFee(e, t, r, n) {
          return this.getInvokeEstimateFee(e, t, r, n);
        }
        async getInvokeEstimateFee(e, t, r, n) {
          return this.channel
            .getEstimateFee([{ type: eM.INVOKE, ...e, ...t }], {
              blockIdentifier: r,
              skipValidate: n,
            })
            .then((e) => this.responseParser.parseFeeEstimateResponse(e));
        }
        async getDeclareEstimateFee(e, t, r, n) {
          return this.channel
            .getEstimateFee([{ type: eM.DECLARE, ...e, ...t }], {
              blockIdentifier: r,
              skipValidate: n,
            })
            .then((e) => this.responseParser.parseFeeEstimateResponse(e));
        }
        async getDeployAccountEstimateFee(e, t, r, n) {
          return this.channel
            .getEstimateFee([{ type: eM.DEPLOY_ACCOUNT, ...e, ...t }], {
              blockIdentifier: r,
              skipValidate: n,
            })
            .then((e) => this.responseParser.parseFeeEstimateResponse(e));
        }
        async getEstimateFeeBulk(e, t) {
          return this.channel
            .getEstimateFee(e, t)
            .then((e) => this.responseParser.parseFeeEstimateBulkResponse(e));
        }
        async invokeFunction(e, t) {
          return this.channel.invoke(e, t);
        }
        async declareContract(e, t) {
          return this.channel.declare(e, t);
        }
        async deployAccountContract(e, t) {
          return this.channel.deployAccount(e, t);
        }
        async callContract(e, t) {
          return this.channel.callContract(e, t);
        }
        async estimateMessageFee(e, t) {
          return this.channel.estimateMessageFee(e, t);
        }
        async getSyncingStats() {
          return this.channel.getSyncingStats();
        }
        async getEvents(e) {
          return this.channel.getEvents(e);
        }
        async verifyMessageInStarknet(e, t, r, n, a) {
          let i;
          let s = n3(e);
          if (!ty(e) && !s) throw Error('message has a wrong format.');
          if (!ty(r)) throw Error('accountAddress shall be a BigNumberish');
          let o = s ? ai(e, r) : e7(e),
            c = a || {
              okResponse: [],
              nokResponse: ['0x0', '0x00'],
              error: [
                'argent/invalid-signature',
                'is invalid, with respect to the public key',
                'INVALID_SIG',
              ],
            };
          for (let e of n ? [n] : ['isValidSignature', 'is_valid_signature'])
            try {
              let n = await this.callContract({
                contractAddress: e7(r),
                entrypoint: e,
                calldata: rD.compile({
                  hash: e9(o).toString(),
                  signature: nd(t),
                }),
              });
              if (c.nokResponse.includes(n[0].toString())) return !1;
              if (
                0 === c.okResponse.length ||
                c.okResponse.includes(n[0].toString())
              )
                return !0;
              throw Error(
                'signatureVerificationResponse Error: response is not part of known responses'
              );
            } catch (e) {
              if (c.error.some((t) => e.message.includes(t))) return !1;
              i = e;
            }
          throw Error(`Signature verification Error: ${i}`);
        }
        async isClassDeclared(e, t) {
          let r;
          if (!e.classHash && 'contract' in e) r = nA(e).classHash;
          else if (e.classHash) r = e.classHash;
          else throw Error('contractClassIdentifier type not satisfied');
          try {
            return (await this.getClass(r, t)) instanceof Object;
          } catch (e) {
            if (e instanceof eP) return !1;
            throw e;
          }
        }
        async prepareInvocations(e) {
          let t = [];
          for (let r of e)
            r.type === eM.DECLARE
              ? (await this.isClassDeclared('payload' in r ? r.payload : r)) ||
                t.unshift(r)
              : t.push(r);
          return t;
        }
      };
      v(
        {},
        {
          StarknetIdContract: () => am,
          StarknetIdIdentityContract: () => a_,
          StarknetIdMulticallContract: () => aT,
          StarknetIdPfpContract: () => aI,
          StarknetIdPopContract: () => aS,
          StarknetIdVerifierContract: () => av,
          dynamicCallData: () => aO,
          dynamicFelt: () => ax,
          execution: () => aN,
          getStarknetIdContract: () => aE,
          getStarknetIdIdentityContract: () => ab,
          getStarknetIdMulticallContract: () => aA,
          getStarknetIdPfpContract: () => aC,
          getStarknetIdPopContract: () => ak,
          getStarknetIdVerifierContract: () => aw,
          isStarkDomain: () => aD,
          useDecoded: () => ag,
          useEncoded: () => ay,
        }
      );
      var ac = 'abcdefghijklmnopqrstuvwxyz0123456789-',
        al = BigInt(ac.length + 1),
        ad = '这来',
        au = BigInt(ac.length),
        ah = BigInt(ad.length),
        ap = BigInt(ad.length + 1);
      function af(e) {
        let t = 0;
        for (; e.endsWith(ad[ad.length - 1]); )
          (e = e.substring(0, e.length - 1)), (t += 1);
        return [e, t];
      }
      function ag(e) {
        let t = '';
        return (e.forEach((e) => {
          for (; e !== er; ) {
            let r = e % al;
            if (((e /= al), r === BigInt(ac.length))) {
              let r = e / ap;
              if (r === er) {
                let n = e % ap;
                (e = r), n === er ? (t += ac[0]) : (t += ad[Number(n) - 1]);
              } else (t += ad[Number(e % ah)]), (e /= ah);
            } else t += ac[Number(r)];
          }
          let [r, n] = af(t);
          n &&
            (t =
              r +
              (n % 2 == 0
                ? ad[ad.length - 1].repeat(n / 2 - 1) + ad[0] + ac[1]
                : ad[ad.length - 1].repeat((n - 1) / 2 + 1))),
            (t += '.');
        }),
        t)
          ? t.concat('stark')
          : t;
      }
      function ay(e) {
        let t = BigInt(0),
          r = BigInt(1);
        if (e.endsWith(ad[0] + ac[1])) {
          let [t, r] = af(e.substring(0, e.length - 2));
          e = t + ad[ad.length - 1].repeat(2 * (r + 1));
        } else {
          let [t, r] = af(e);
          r && (e = t + ad[ad.length - 1].repeat(1 + 2 * (r - 1)));
        }
        for (let n = 0; n < e.length; n += 1) {
          let a = e[n],
            i = ac.indexOf(a),
            s = BigInt(ac.indexOf(a));
          -1 !== i
            ? n === e.length - 1 && e[n] === ac[0]
              ? ((t += r * au), (r *= al * al))
              : ((t += r * s), (r *= al))
            : -1 !== ad.indexOf(a) &&
              ((t += r * au),
              (r *= al),
              (t += r * BigInt((n === e.length - 1 ? 1 : 0) + ad.indexOf(a))),
              (r *= ah));
        }
        return t;
      }
      var am = {
        MAINNET:
          '0x6ac597f8116f886fa1c97a23fa4e08299975ecaf6b598873ca6792b9bbfb678',
        TESTNET_SEPOLIA:
          '0x154bc2e1af9260b9e66af0e9c46fc757ff893b3ff6a85718a810baf1474',
      };
      function aE(e) {
        switch (e) {
          case '0x534e5f4d41494e':
            return am.MAINNET;
          case '0x534e5f5345504f4c4941':
            return am.TESTNET_SEPOLIA;
          default:
            throw Error('Starknet.id is not yet deployed on this network');
        }
      }
      var a_ = {
        MAINNET:
          '0x05dbdedc203e92749e2e746e2d40a768d966bd243df04a6b712e222bc040a9af',
        TESTNET_SEPOLIA:
          '0x3697660a0981d734780731949ecb2b4a38d6a58fc41629ed611e8defda',
      };
      function ab(e) {
        switch (e) {
          case '0x534e5f4d41494e':
            return a_.MAINNET;
          case '0x534e5f5345504f4c4941':
            return a_.TESTNET_SEPOLIA;
          default:
            throw Error(
              'Starknet.id verifier contract is not yet deployed on this network'
            );
        }
      }
      var aT =
        '0x034ffb8f4452df7a613a0210824d6414dbadcddce6c6e19bf4ddc9e22ce5f970';
      function aA(e) {
        switch (e) {
          case '0x534e5f4d41494e':
          case '0x534e5f5345504f4c4941':
            return aT;
          default:
            throw Error(
              'Starknet.id multicall contract is not yet deployed on this network'
            );
        }
      }
      var av = {
        MAINNET:
          '0x07d14dfd8ee95b41fce179170d88ba1f0d5a512e13aeb232f19cfeec0a88f8bf',
        TESTNET_SEPOLIA:
          '0x60B94fEDe525f815AE5E8377A463e121C787cCCf3a36358Aa9B18c12c4D566',
      };
      function aw(e) {
        switch (e) {
          case '0x534e5f4d41494e':
            return av.MAINNET;
          case '0x534e5f5345504f4c4941':
            return av.TESTNET_SEPOLIA;
          default:
            throw Error(
              'Starknet.id verifier contract is not yet deployed on this network'
            );
        }
      }
      var aI = {
        MAINNET:
          '0x070aaa20ec4a46da57c932d9fd89ca5e6bb9ca3188d3df361a32306aff7d59c7',
        TESTNET_SEPOLIA:
          '0x9e7bdb8dabd02ea8cfc23b1d1c5278e46490f193f87516ed5ff2dfec02',
      };
      function aC(e) {
        switch (e) {
          case '0x534e5f4d41494e':
            return aI.MAINNET;
          case '0x534e5f5345504f4c4941':
            return aI.TESTNET_SEPOLIA;
          default:
            throw Error(
              'Starknet.id profile picture verifier contract is not yet deployed on this network'
            );
        }
      }
      var aS = {
        MAINNET:
          '0x0293eb2ba9862f762bd3036586d5755a782bd22e6f5028320f1d0405fd47bff4',
        TESTNET_SEPOLIA:
          '0x15ae88ae054caa74090b89025c1595683f12edf7a4ed2ad0274de3e1d4a',
      };
      function ak(e) {
        switch (e) {
          case '0x534e5f4d41494e':
            return aS.MAINNET;
          case '0x534e5f5345504f4c4941':
            return aS.TESTNET_SEPOLIA;
          default:
            throw Error(
              'Starknet.id proof of personhood verifier contract is not yet deployed on this network'
            );
        }
      }
      function aN(e, t, r) {
        return new ra({
          Static: e,
          IfEqual: t ? rr(t[0], t[1], t[2]) : void 0,
          IfNotEqual: r ? rr(r[0], r[1], r[2]) : void 0,
        });
      }
      function ax(e, t) {
        return new ra({ Hardcoded: e, Reference: t ? rr(t[0], t[1]) : void 0 });
      }
      function aO(e, t, r) {
        return new ra({
          Hardcoded: e,
          Reference: t ? rr(t[0], t[1]) : void 0,
          ArrayReference: r ? rr(r[0], r[1]) : void 0,
        });
      }
      function aD(e) {
        return /^(?:[a-z0-9-]{1,48}(?:[a-z0-9-]{1,48}[a-z0-9-])?\.)*[a-z0-9-]{1,48}\.stark$/.test(
          e
        );
      }
      var aV = class e {
          async getStarkName(t, r) {
            return e.getStarkName(this, t, r);
          }
          async getAddressFromStarkName(t, r) {
            return e.getAddressFromStarkName(this, t, r);
          }
          async getStarkProfile(t, r, n, a, i, s, o) {
            return e.getStarkProfile(this, t, r, n, a, i, s, o);
          }
          static async getStarkName(e, t, r) {
            let n = await e.getChainId(),
              a = r ?? aE(n);
            try {
              let r = (
                  await e.callContract({
                    contractAddress: a,
                    entrypoint: 'address_to_domain',
                    calldata: rD.compile({ address: t, hint: [] }),
                  })
                )
                  .map((e) => BigInt(e))
                  .slice(1),
                n = ag(r);
              if (!n) throw Error('Starkname not found');
              return n;
            } catch (e) {
              if (e instanceof Error && 'Starkname not found' === e.message)
                throw e;
              throw Error('Could not get stark name');
            }
          }
          static async getAddressFromStarkName(e, t, r) {
            let n = t.endsWith('.stark') ? t : `${t}.stark`;
            if (!aD(n))
              throw Error('Invalid domain, must be a valid .stark domain');
            let a = await e.getChainId(),
              i = r ?? aE(a);
            try {
              let t = n
                .replace('.stark', '')
                .split('.')
                .map((e) => ay(e).toString(10));
              return (
                await e.callContract({
                  contractAddress: i,
                  entrypoint: 'domain_to_address',
                  calldata: rD.compile({ domain: t, hint: [] }),
                })
              )[0];
            } catch {
              throw Error('Could not get address from stark name');
            }
          }
          static async getStarkProfile(e, t, r, n, a, i, s, o) {
            let c = await e.getChainId(),
              l = r ?? aE(c),
              d = n ?? ab(c),
              u = a ?? aw(c),
              h = i ?? aC(c),
              p = s ?? ak(c),
              f = o ?? aA(c);
            try {
              let r = [
                  {
                    execution: aN({}),
                    to: aO(l),
                    selector: aO(t_('address_to_domain')),
                    calldata: [aO(t), aO('0')],
                  },
                  {
                    execution: aN({}),
                    to: ax(l),
                    selector: ax(t_('domain_to_id')),
                    calldata: [aO(void 0, void 0, [0, 0])],
                  },
                  {
                    execution: aN({}),
                    to: ax(d),
                    selector: ax(t_('get_verifier_data')),
                    calldata: [
                      aO(void 0, [1, 0]),
                      aO(tx('twitter')),
                      aO(u),
                      aO('0'),
                    ],
                  },
                  {
                    execution: aN({}),
                    to: ax(d),
                    selector: ax(t_('get_verifier_data')),
                    calldata: [
                      aO(void 0, [1, 0]),
                      aO(tx('github')),
                      aO(u),
                      aO('0'),
                    ],
                  },
                  {
                    execution: aN({}),
                    to: ax(d),
                    selector: ax(t_('get_verifier_data')),
                    calldata: [
                      aO(void 0, [1, 0]),
                      aO(tx('discord')),
                      aO(u),
                      aO('0'),
                    ],
                  },
                  {
                    execution: aN({}),
                    to: ax(d),
                    selector: ax(t_('get_verifier_data')),
                    calldata: [
                      aO(void 0, [1, 0]),
                      aO(tx('proof_of_personhood')),
                      aO(p),
                      aO('0'),
                    ],
                  },
                  {
                    execution: aN({}),
                    to: ax(d),
                    selector: ax(t_('get_verifier_data')),
                    calldata: [
                      aO(void 0, [1, 0]),
                      aO(tx('nft_pp_contract')),
                      aO(h),
                      aO('0'),
                    ],
                  },
                  {
                    execution: aN({}),
                    to: ax(d),
                    selector: ax(t_('get_extended_verifier_data')),
                    calldata: [
                      aO(void 0, [1, 0]),
                      aO(tx('nft_pp_id')),
                      aO('2'),
                      aO(h),
                      aO('0'),
                    ],
                  },
                  {
                    execution: aN(void 0, void 0, [6, 0, 0]),
                    to: ax(void 0, [6, 0]),
                    selector: ax(t_('tokenURI')),
                    calldata: [aO(void 0, [7, 1]), aO(void 0, [7, 2])],
                  },
                ],
                n = await e.callContract({
                  contractAddress: f,
                  entrypoint: 'aggregate',
                  calldata: rD.compile({ calls: r }),
                });
              if (Array.isArray(n)) {
                let e = parseInt(n[0], 16),
                  t = [],
                  r = 1;
                for (let a = 0; a < e; a += 1)
                  if (r < n.length) {
                    let e = parseInt(n[r], 16);
                    r += 1;
                    let a = n.slice(r, r + e);
                    t.push(a), (r += e);
                  } else break;
                let a = ag(t[0].slice(1).map((e) => BigInt(e))),
                  i = '0x0' !== t[2][0] ? BigInt(t[2][0]).toString() : void 0,
                  s = '0x0' !== t[3][0] ? BigInt(t[3][0]).toString() : void 0,
                  o = '0x0' !== t[4][0] ? BigInt(t[4][0]).toString() : void 0,
                  c = '0x1' === t[5][0],
                  l =
                    ('0x9' === n[0]
                      ? t[8]
                          .slice(1)
                          .map((e) => tO(e))
                          .join('')
                      : void 0) ||
                    `https://starknet.id/api/identicons/${BigInt(t[1][0]).toString()}`;
                return {
                  name: a,
                  twitter: i,
                  github: s,
                  discord: o,
                  proofOfPersonhood: c,
                  profilePicture: l,
                };
              }
              throw Error('Error while calling aggregate function');
            } catch (e) {
              if (e instanceof Error) throw e;
              throw Error('Could not get user stark profile data from address');
            }
          }
        },
        aB = class extends (0, E.c_)(ao, aV) {},
        aF =
          (new ao({ default: !0 }),
          class {
            pk;
            constructor(e = d.utils.randomPrivateKey()) {
              this.pk = e instanceof Uint8Array ? Y(e) : e7(e);
            }
            async getPubKey() {
              return d.getStarkKey(this.pk);
            }
            async signMessage(e, t) {
              let r = ai(e, t);
              return this.signRaw(r);
            }
            async signTransaction(e, t) {
              let r;
              let n = nW(e, t.cairoVersion);
              if (Object.values(w.ETransactionVersion2).includes(t.version))
                r = rJ({
                  ...t,
                  senderAddress: t.walletAddress,
                  compiledCalldata: n,
                  version: t.version,
                });
              else if (
                Object.values(w.ETransactionVersion3).includes(t.version)
              )
                r = rJ({
                  ...t,
                  senderAddress: t.walletAddress,
                  compiledCalldata: n,
                  version: t.version,
                  nonceDataAvailabilityMode: ng(t.nonceDataAvailabilityMode),
                  feeDataAvailabilityMode: ng(t.feeDataAvailabilityMode),
                });
              else throw Error('unsupported signTransaction version');
              return this.signRaw(r);
            }
            async signDeployAccountTransaction(e) {
              let t;
              let r = rD.compile(e.constructorCalldata);
              if (Object.values(w.ETransactionVersion2).includes(e.version))
                t = rQ({
                  ...e,
                  salt: e.addressSalt,
                  constructorCalldata: r,
                  version: e.version,
                });
              else if (
                Object.values(w.ETransactionVersion3).includes(e.version)
              )
                t = rQ({
                  ...e,
                  salt: e.addressSalt,
                  compiledConstructorCalldata: r,
                  version: e.version,
                  nonceDataAvailabilityMode: ng(e.nonceDataAvailabilityMode),
                  feeDataAvailabilityMode: ng(e.feeDataAvailabilityMode),
                });
              else
                throw Error('unsupported signDeployAccountTransaction version');
              return this.signRaw(t);
            }
            async signDeclareTransaction(e) {
              let t;
              if (Object.values(w.ETransactionVersion2).includes(e.version))
                t = rZ({ ...e, version: e.version });
              else if (
                Object.values(w.ETransactionVersion3).includes(e.version)
              )
                t = rZ({
                  ...e,
                  version: e.version,
                  nonceDataAvailabilityMode: ng(e.nonceDataAvailabilityMode),
                  feeDataAvailabilityMode: ng(e.feeDataAvailabilityMode),
                });
              else throw Error('unsupported signDeclareTransaction version');
              return this.signRaw(t);
            }
            async signRaw(e) {
              return d.sign(e, this.pk);
            }
          });
      function aP(e) {
        return new tR(e).toBigInt();
      }
      function aR(e) {
        return tR.is(e);
      }
      function aL(e) {
        return new tR(e).toUint256HexString();
      }
      v(
        {},
        {
          UINT_128_MAX: () => tF,
          UINT_256_MAX: () => tP,
          bnToUint256: () => aL,
          isUint256: () => aR,
          uint256ToBN: () => aP,
        }
      );
      function aM(e) {
        return 'event' === e.type;
      }
      function a$(e) {
        return t8(e)
          ? (function (e) {
              let t = e.filter((e) => aM(e) && 'struct' === e.kind),
                r = e.filter((e) => aM(e) && 'enum' === e.kind);
              return t.reduce((e, t) => {
                let n = [],
                  { name: a } = t,
                  i = !1,
                  s = (e) => e.type === a;
                for (;;) {
                  let e = r.find((e) => e.variants.some(s));
                  if (e1(e)) break;
                  let t = e.variants.find(s);
                  n.unshift(t.name),
                    'flat' === t.kind && (i = !0),
                    (a = e.name);
                }
                if (0 === n.length)
                  throw Error('inconsistency in ABI events definition.');
                i && (n = [n[n.length - 1]]);
                let o = n.pop(),
                  c = { [G(d.keccak(U(o)).toString(16))]: t };
                for (; n.length > 0; )
                  c = { [G(d.keccak(U(n.pop())).toString(16))]: c };
                return (function e(t, r) {
                  let n = { ...t };
                  return (
                    e3(t) &&
                      e3(r) &&
                      Object.keys(r).forEach((a) => {
                        e3(r[a]) && a in t
                          ? (n[a] = e(t[a], r[a]))
                          : Object.assign(n, { [a]: r[a] });
                      }),
                    n
                  );
                })(e, (c = { ...c }));
              }, {});
            })(e)
          : e
              .filter((e) => 'event' === e.type)
              .reduce((e, t) => {
                let r = t.name,
                  n = { ...t };
                return (
                  (n.name = r), { ...e, [G(d.keccak(U(r)).toString(16))]: n }
                );
              }, {});
      }
      function aH(e, t, r, n) {
        return e.flat().reduce((e, a) => {
          let i = t[a.keys.shift() ?? 0];
          if (!i) return e;
          for (; !i.name; ) {
            let e = a.keys.shift();
            e0(!!e, 'Not enough data in "keys" property of this event.'),
              (i = i[e]);
          }
          let s = {};
          s[i.name] = {};
          let o = a.keys[Symbol.iterator](),
            c = a.data[Symbol.iterator](),
            l = i.members?.filter((e) => 'key' === e.kind) || i.keys,
            d = i.members?.filter((e) => 'data' === e.kind) || i.data;
          return (
            l.forEach((e) => {
              s[i.name][e.name] = rb(o, e, r, n, s[i.name]);
            }),
            d.forEach((e) => {
              s[i.name][e.name] = rb(c, e, r, n, s[i.name]);
            }),
            'block_hash' in a && (s.block_hash = a.block_hash),
            'block_number' in a && (s.block_number = a.block_number),
            'transaction_hash' in a &&
              (s.transaction_hash = a.transaction_hash),
            e.push(s),
            e
          );
        }, []);
      }
      function aU(e) {
        if (!e.events?.length) throw Error('UDC emitted event is empty');
        let t = e.events.find((e) => ta(e.from_address) === ta(eE.ADDRESS)) || {
          data: [],
        };
        return {
          transaction_hash: e.transaction_hash,
          contract_address: t.data[0],
          address: t.data[0],
          deployer: t.data[1],
          unique: t.data[2],
          classHash: t.data[3],
          calldata_len: t.data[4],
          calldata: t.data.slice(5, 5 + parseInt(t.data[4], 16)),
          salt: t.data[t.data.length - 1],
        };
      }
      function aj(e) {
        let t = e.calldata ?? [],
          r = Array.isArray(t) ? t : rD.compile(t);
        return {
          to: e.contractAddress,
          selector: t_(e.entrypoint),
          calldata: r,
        };
      }
      function aK(e, t) {
        let r = aj(e);
        return '1' === t
          ? { ...r, calldata_len: r.calldata.length, calldata: r.calldata }
          : { To: r.to, Selector: r.selector, Calldata: r.calldata };
      }
      function aW(e, t) {
        return {
          name: 'Account.execute_from_outside',
          version: t,
          chainId: e,
          ...('2' === t ? { revision: '1' } : {}),
        };
      }
      function aY(e, t, r, n, a) {
        return '1' === a
          ? {
              types: ez,
              primaryType: 'OutsideExecution',
              domain: aW(e, a),
              message: {
                ...t,
                nonce: r,
                calls_len: n.length,
                calls: n.map((e) => aK(e, a)),
              },
            }
          : {
              types: eJ,
              primaryType: 'OutsideExecution',
              domain: aW(e, a),
              message: {
                Caller: t.caller,
                Nonce: r,
                'Execute After': t.execute_after,
                'Execute Before': t.execute_before,
                Calls: n.map((e) => aK(e, a)),
              },
            };
      }
      function aq(e) {
        let t = e.outsideExecution,
          r = nd(e.signature);
        return rD.compile({ outside_execution: t, signature: r });
      }
      function aG(e) {
        return (Array.isArray(e) ? e : [e]).map((e) => {
          let t;
          if ('1' === e.version) t = 'execute_from_outside';
          else if ('2' === e.version) t = 'execute_from_outside_v2';
          else throw Error('Unsupported OutsideExecution version');
          return {
            contractAddress: e7(e.signerAddress),
            entrypoint: t,
            calldata: aq(e),
          };
        });
      }
      async function aX(e, t, r) {
        let n = {
          contractAddress: e7(t),
          entrypoint: 'supports_interface',
          calldata: [e7(r)],
        };
        try {
          let t = await e.callContract(n);
          return 0n !== BigInt(t[0]);
        } catch {
          return !1;
        }
      }
      v(
        {},
        {
          getAbiEvents: () => a$,
          isAbiEvent: () => aM,
          parseEvents: () => aH,
          parseUDCEvent: () => aU,
        }
      ),
        v(
          {},
          {
            buildExecuteFromOutsideCall: () => aG,
            buildExecuteFromOutsideCallData: () => aq,
            getOutsideCall: () => aj,
            getTypedData: () => aY,
          }
        ),
        v({}, { supportsInterface: () => aX });
      var az = class extends aB {
        signer;
        address;
        cairoVersion;
        transactionVersion;
        constructor(e, t, r, n, a = nC.get('accountTxVersion')) {
          super(e),
            (this.address = t.toLowerCase()),
            (this.signer = e4(r) || r instanceof Uint8Array ? new aF(r) : r),
            n && (this.cairoVersion = n.toString()),
            (this.transactionVersion = a);
        }
        getPreferredVersion(e, t) {
          return this.transactionVersion === w.ETransactionVersion.V3
            ? t
            : this.transactionVersion === w.ETransactionVersion.V2
              ? e
              : w.ETransactionVersion.V3;
        }
        async getNonce(e) {
          return super.getNonceForAddress(this.address, e);
        }
        async getNonceSafe(e) {
          try {
            return e9(e ?? (await this.getNonce()));
          } catch (e) {
            return 0n;
          }
        }
        async getCairoVersion(e) {
          if (!this.cairoVersion) {
            let { cairo: t } = e
              ? await super.getContractVersion(void 0, e)
              : await super.getContractVersion(this.address);
            this.cairoVersion = t;
          }
          return this.cairoVersion;
        }
        async estimateFee(e, t = {}) {
          return this.estimateInvokeFee(e, t);
        }
        async estimateInvokeFee(e, t = {}) {
          let {
              nonce: r,
              blockIdentifier: n,
              version: a,
              skipValidate: i = !0,
            } = t,
            s = Array.isArray(e) ? e : [e],
            o = e9(r ?? (await this.getNonce())),
            c = ny(
              this.getPreferredVersion(
                w.ETransactionVersion.F1,
                w.ETransactionVersion.F3
              ),
              nm(a)
            ),
            l = await this.getChainId(),
            d = {
              ...nE(t),
              walletAddress: this.address,
              nonce: o,
              maxFee: er,
              version: c,
              chainId: l,
              cairoVersion: await this.getCairoVersion(),
              skipValidate: i,
            },
            u = await this.buildInvocation(s, d);
          return super.getInvokeEstimateFee(
            { ...u },
            { ...nE(t), version: c, nonce: o },
            n,
            t.skipValidate
          );
        }
        async estimateDeclareFee(e, t = {}) {
          let {
              blockIdentifier: r,
              nonce: n,
              version: a,
              skipValidate: i = !0,
            } = t,
            s = e9(n ?? (await this.getNonce())),
            o = ny(
              nT(e.contract)
                ? this.getPreferredVersion(
                    w.ETransactionVersion.F2,
                    w.ETransactionVersion.F3
                  )
                : w.ETransactionVersion.F1,
              nm(a)
            ),
            c = await this.getChainId(),
            l = await this.buildDeclarePayload(e, {
              ...nE(t),
              nonce: s,
              chainId: c,
              version: o,
              walletAddress: this.address,
              maxFee: er,
              cairoVersion: void 0,
              skipValidate: i,
            });
          return super.getDeclareEstimateFee(
            l,
            { ...nE(t), version: o, nonce: s },
            r,
            t.skipValidate
          );
        }
        async estimateAccountDeployFee(
          {
            classHash: e,
            addressSalt: t = 0,
            constructorCalldata: r = [],
            contractAddress: n,
          },
          a = {}
        ) {
          let { blockIdentifier: i, version: s, skipValidate: o = !0 } = a,
            c = ny(
              this.getPreferredVersion(
                w.ETransactionVersion.F1,
                w.ETransactionVersion.F3
              ),
              nm(s)
            ),
            l = await this.getChainId(),
            d = await this.buildAccountDeployPayload(
              {
                classHash: e,
                addressSalt: t,
                constructorCalldata: r,
                contractAddress: n,
              },
              {
                ...nE(a),
                nonce: er,
                chainId: l,
                version: c,
                walletAddress: this.address,
                maxFee: er,
                cairoVersion: void 0,
                skipValidate: o,
              }
            );
          return super.getDeployAccountEstimateFee(
            { ...d },
            { ...nE(a), version: c, nonce: er },
            i,
            a.skipValidate
          );
        }
        async estimateDeployFee(e, t = {}) {
          let r = this.buildUDCContractPayload(e);
          return this.estimateInvokeFee(r, t);
        }
        async estimateFeeBulk(e, t = {}) {
          if (!e.length)
            throw TypeError('Invocations should be non-empty array');
          let { nonce: r, blockIdentifier: n, version: a, skipValidate: i } = t,
            s = await this.accountInvocationsFactory(e, {
              ...nE(t),
              versions: [
                w.ETransactionVersion.F1,
                ny(
                  this.getPreferredVersion(
                    w.ETransactionVersion.F2,
                    w.ETransactionVersion.F3
                  ),
                  a
                ),
              ],
              nonce: r,
              blockIdentifier: n,
              skipValidate: i,
            });
          return super.getEstimateFeeBulk(s, {
            blockIdentifier: n,
            skipValidate: i,
          });
        }
        async simulateTransaction(e, t = {}) {
          if (!e.length)
            throw TypeError('Invocations should be non-empty array');
          let {
              nonce: r,
              blockIdentifier: n,
              skipValidate: a = !0,
              skipExecute: i,
              version: s,
            } = t,
            o = await this.accountInvocationsFactory(e, {
              ...nE(t),
              versions: [
                w.ETransactionVersion.V1,
                ny(
                  this.getPreferredVersion(
                    w.ETransactionVersion.V2,
                    w.ETransactionVersion.V3
                  ),
                  s
                ),
              ],
              nonce: r,
              blockIdentifier: n,
              skipValidate: a,
            });
          return super.getSimulateTransaction(o, {
            blockIdentifier: n,
            skipValidate: a,
            skipExecute: i,
          });
        }
        async execute(e, t, r = {}) {
          let n = void 0 === t || Array.isArray(t) ? r : t,
            a = Array.isArray(e) ? e : [e],
            i = e9(n.nonce ?? (await this.getNonce())),
            s = ny(
              this.getPreferredVersion(
                w.ETransactionVersion.V1,
                w.ETransactionVersion.V3
              ),
              n.version
            ),
            o = await this.getUniversalSuggestedFee(
              s,
              { type: eM.INVOKE, payload: e },
              { ...n, version: s }
            ),
            c = await this.getChainId(),
            l = {
              ...nE(n),
              resourceBounds: o.resourceBounds,
              walletAddress: this.address,
              nonce: i,
              maxFee: o.maxFee,
              version: s,
              chainId: c,
              cairoVersion: await this.getCairoVersion(),
            },
            d = await this.signer.signTransaction(a, l),
            u = nW(a, await this.getCairoVersion());
          return this.invokeFunction(
            { contractAddress: this.address, calldata: u, signature: d },
            {
              ...nE(n),
              resourceBounds: o.resourceBounds,
              nonce: i,
              maxFee: o.maxFee,
              version: s,
            }
          );
        }
        async declareIfNot(e, t = {}) {
          let r = nA(e);
          try {
            await this.getClassByHash(r.classHash);
          } catch (r) {
            return this.declare(e, t);
          }
          return { transaction_hash: '', class_hash: r.classHash };
        }
        async declare(e, t = {}) {
          let r = nA(e),
            { nonce: n, version: a } = t,
            i = ny(
              nT(e.contract)
                ? this.getPreferredVersion(
                    w.ETransactionVersion.V2,
                    w.ETransactionVersion.V3
                  )
                : w.ETransactionVersion.V1,
              a
            ),
            s = await this.getUniversalSuggestedFee(
              i,
              { type: eM.DECLARE, payload: r },
              { ...t, version: i }
            ),
            o = {
              ...nE(t),
              resourceBounds: s.resourceBounds,
              maxFee: s.maxFee,
              nonce: e9(n ?? (await this.getNonce())),
              version: i,
              chainId: await this.getChainId(),
              walletAddress: this.address,
              cairoVersion: void 0,
            },
            c = await this.buildDeclarePayload(r, o);
          return this.declareContract(c, o);
        }
        async deploy(e, t = {}) {
          let { calls: r, addresses: n } = nY(e, this.address);
          return { ...(await this.execute(r, void 0, t)), contract_address: n };
        }
        async deployContract(e, t = {}) {
          let r = await this.deploy(e, t);
          return aU(await this.waitForTransaction(r.transaction_hash));
        }
        async declareAndDeploy(e, t = {}) {
          let { constructorCalldata: r, salt: n, unique: a } = e,
            i = await this.declareIfNot(e, t);
          if ('' !== i.transaction_hash) {
            let e = await this.waitForTransaction(i.transaction_hash);
            i = { ...i, ...e };
          }
          let s = await this.deployContract(
            {
              classHash: i.class_hash,
              salt: n,
              unique: a,
              constructorCalldata: r,
            },
            t
          );
          return { declare: { ...i }, deploy: s };
        }
        deploySelf = this.deployAccount;
        async deployAccount(
          {
            classHash: e,
            constructorCalldata: t = [],
            addressSalt: r = 0,
            contractAddress: n,
          },
          a = {}
        ) {
          let i = ny(
              this.getPreferredVersion(
                w.ETransactionVersion.V1,
                w.ETransactionVersion.V3
              ),
              a.version
            ),
            s = await this.getChainId(),
            o = rD.compile(t),
            c = n ?? r4(r, e, o, 0),
            l = await this.getUniversalSuggestedFee(
              i,
              {
                type: eM.DEPLOY_ACCOUNT,
                payload: {
                  classHash: e,
                  constructorCalldata: o,
                  addressSalt: r,
                  contractAddress: c,
                },
              },
              a
            ),
            d = await this.signer.signDeployAccountTransaction({
              ...nE(a),
              classHash: e,
              constructorCalldata: o,
              contractAddress: c,
              addressSalt: r,
              chainId: s,
              resourceBounds: l.resourceBounds,
              maxFee: l.maxFee,
              version: i,
              nonce: er,
            });
          return this.deployAccountContract(
            {
              classHash: e,
              addressSalt: r,
              constructorCalldata: t,
              signature: d,
            },
            {
              ...nE(a),
              nonce: er,
              resourceBounds: l.resourceBounds,
              maxFee: l.maxFee,
              version: i,
            }
          );
        }
        async signMessage(e) {
          return this.signer.signMessage(e, this.address);
        }
        async hashMessage(e) {
          return ai(e, this.address);
        }
        async verifyMessageHash(e, t, r, n) {
          return this.verifyMessageInStarknet(e, t, this.address, r, n);
        }
        async verifyMessage(e, t, r, n) {
          return this.verifyMessageInStarknet(e, t, this.address, r, n);
        }
        async getSnip9Version() {
          return (await aX(this, this.address, ev))
            ? '2'
            : (await aX(this, this.address, eA))
              ? '1'
              : '0';
        }
        async isValidSnip9Nonce(e) {
          try {
            let t = {
                contractAddress: this.address,
                entrypoint: 'is_valid_outside_execution_nonce',
                calldata: [e7(e)],
              },
              r = await this.callContract(t);
            return 0n !== BigInt(r[0]);
          } catch (e) {
            throw Error(`Failed to check if nonce is valid: ${e}`);
          }
        }
        async getSnip9Nonce() {
          let e = nc();
          return (await this.isValidSnip9Nonce(e)) ? e : this.getSnip9Nonce();
        }
        async getOutsideTransaction(e, t, r, n) {
          if (!e8(e.caller) && 'ANY_CALLER' !== e.caller)
            throw Error(`The caller ${e.caller} is not valid.`);
          let a = e8(e.caller) ? e.caller : eT,
            i = Array.isArray(t) ? t : [t],
            s = r ?? (await this.getSnip9Version());
          if (!s)
            throw Error('This account is not handling outside transactions.');
          let o = n ? e7(n) : await this.getSnip9Nonce(),
            c = aY(
              await this.getChainId(),
              {
                caller: a,
                execute_after: e.execute_after,
                execute_before: e.execute_before,
              },
              o,
              i,
              s
            ),
            l = await this.signMessage(c);
          return {
            outsideExecution: {
              caller: a,
              nonce: o,
              execute_after: e.execute_after,
              execute_before: e.execute_before,
              calls: i.map(aj),
            },
            signature: l,
            signerAddress: this.address,
            version: s,
          };
        }
        async executeFromOutside(e, t) {
          let r = aG(e);
          return this.execute(r, t);
        }
        async getUniversalSuggestedFee(e, { type: t, payload: r }, n) {
          let a = 0,
            i = nf(er);
          return (
            e === w.ETransactionVersion.V3
              ? (i =
                  n.resourceBounds ??
                  (await this.getSuggestedFee({ type: t, payload: r }, n))
                    .resourceBounds)
              : (a =
                  n.maxFee ??
                  (await this.getSuggestedFee({ type: t, payload: r }, n))
                    .suggestedMaxFee),
            { maxFee: a, resourceBounds: i }
          );
        }
        async getSuggestedFee({ type: e, payload: t }, r) {
          switch (e) {
            case eM.INVOKE:
              return this.estimateInvokeFee(t, r);
            case eM.DECLARE:
              return this.estimateDeclareFee(t, r);
            case eM.DEPLOY_ACCOUNT:
              return this.estimateAccountDeployFee(t, r);
            case eM.DEPLOY:
              return this.estimateDeployFee(t, r);
            default:
              return {
                gas_consumed: 0n,
                gas_price: 0n,
                overall_fee: er,
                unit: 'FRI',
                suggestedMaxFee: er,
                resourceBounds: nf(er),
                data_gas_consumed: 0n,
                data_gas_price: 0n,
              };
          }
        }
        async buildInvocation(e, t) {
          let r = nW(e, await this.getCairoVersion()),
            n = t.skipValidate ? [] : await this.signer.signTransaction(e, t);
          return {
            ...nE(t),
            contractAddress: this.address,
            calldata: r,
            signature: n,
          };
        }
        async buildDeclarePayload(e, t) {
          let { classHash: r, contract: n, compiledClassHash: a } = nA(e),
            i = nO(n);
          if (
            e1(a) &&
            (t.version === w.ETransactionVersion3.F3 ||
              t.version === w.ETransactionVersion3.V3)
          )
            throw Error(
              'V3 Transaction work with Cairo1 Contracts and require compiledClassHash'
            );
          let s = t.skipValidate
            ? []
            : await this.signer.signDeclareTransaction({
                ...t,
                ...nE(t),
                classHash: r,
                compiledClassHash: a,
                senderAddress: t.walletAddress,
              });
          return {
            senderAddress: t.walletAddress,
            signature: s,
            contract: i,
            compiledClassHash: a,
          };
        }
        async buildAccountDeployPayload(
          {
            classHash: e,
            addressSalt: t = 0,
            constructorCalldata: r = [],
            contractAddress: n,
          },
          a
        ) {
          let i = rD.compile(r),
            s = n ?? r4(t, e, i, 0),
            o = a.skipValidate
              ? []
              : await this.signer.signDeployAccountTransaction({
                  ...a,
                  ...nE(a),
                  classHash: e,
                  contractAddress: s,
                  addressSalt: t,
                  constructorCalldata: i,
                });
          return {
            ...nE(a),
            classHash: e,
            addressSalt: t,
            constructorCalldata: i,
            signature: o,
          };
        }
        buildUDCContractPayload(e) {
          return [].concat(e).map((e) => {
            let {
                classHash: t,
                salt: r = '0',
                unique: n = !0,
                constructorCalldata: a = [],
              } = e,
              i = rD.compile(a);
            return {
              contractAddress: eE.ADDRESS,
              entrypoint: eE.ENTRYPOINT,
              calldata: [t, r, th(n), i.length, ...i],
            };
          });
        }
        async accountInvocationsFactory(e, t) {
          let { nonce: r, blockIdentifier: n, skipValidate: a = !0 } = t,
            i = await this.getNonceSafe(r),
            s = await this.getChainId(),
            o = t.versions.map((e) => ny(e)),
            c = 'payload' in e[0] ? e[0].payload : e[0],
            l =
              e[0].type === eM.DEPLOY_ACCOUNT
                ? await this.getCairoVersion(c.classHash)
                : await this.getCairoVersion();
          return Promise.all(
            [].concat(e).map(async (e, r) => {
              let c = 'payload' in e ? e.payload : e,
                d = {
                  ...nE(t),
                  walletAddress: this.address,
                  nonce: e9(Number(i) + r),
                  maxFee: er,
                  chainId: s,
                  cairoVersion: l,
                  version: '',
                  skipValidate: a,
                },
                u = {
                  type: e.type,
                  nonce: e9(Number(i) + r),
                  blockIdentifier: n,
                  version: '',
                };
              if (e.type === eM.INVOKE) {
                let e = n_(o[1]);
                (d.version = e), (u.version = e);
                let t = await this.buildInvocation([].concat(c), d);
                return { ...u, ...t, ...d };
              }
              if (e.type === eM.DEPLOY) {
                let e = n_(o[1]);
                (d.version = e), (u.version = e);
                let t = this.buildUDCContractPayload(c),
                  r = await this.buildInvocation(t, d);
                return { ...u, ...r, ...d, type: eM.INVOKE };
              }
              if (e.type === eM.DECLARE) {
                let e = nT(c.contract) ? o[1] : o[0];
                (d.version = e), (u.version = e);
                let t = await this.buildDeclarePayload(c, d);
                return { ...u, ...t, ...d };
              }
              if (e.type === eM.DEPLOY_ACCOUNT) {
                let e = n_(o[1]);
                (d.version = e), (u.version = e);
                let t = await this.buildAccountDeployPayload(c, d);
                return { ...u, ...t, ...d };
              }
              throw Error(
                `accountInvocationsFactory: unsupported transaction type: ${e}`
              );
            })
          );
        }
        async getStarkName(e = this.address, t) {
          return super.getStarkName(e, t);
        }
      };
      function aJ(e, t = !1) {
        return e.request({
          type: 'wallet_requestAccounts',
          params: { silent_mode: t },
        });
      }
      function aZ(e) {
        return e.request({ type: 'wallet_getPermissions' });
      }
      function aQ(e, t) {
        return e.request({ type: 'wallet_watchAsset', params: t });
      }
      function a0(e, t) {
        return e.request({ type: 'wallet_addStarknetChain', params: t });
      }
      function a1(e, t) {
        return e.request({
          type: 'wallet_switchStarknetChain',
          params: { chainId: t },
        });
      }
      function a2(e) {
        return e.request({ type: 'wallet_requestChainId' });
      }
      function a5(e) {
        return e.request({ type: 'wallet_deploymentData' });
      }
      function a6(e, t) {
        return e.request({ type: 'wallet_addInvokeTransaction', params: t });
      }
      function a4(e, t) {
        return e.request({ type: 'wallet_addDeclareTransaction', params: t });
      }
      function a3(e, t) {
        return e.request({ type: 'wallet_signTypedData', params: t });
      }
      function a8(e) {
        return e.request({ type: 'wallet_supportedSpecs' });
      }
      function a9(e, t) {
        e.on('accountsChanged', t);
      }
      function a7(e, t) {
        e.on('networkChanged', t);
      }
      v(
        {},
        {
          addDeclareTransaction: () => a4,
          addInvokeTransaction: () => a6,
          addStarknetChain: () => a0,
          deploymentData: () => a5,
          getPermissions: () => aZ,
          onAccountChange: () => a9,
          onNetworkChanged: () => a7,
          requestAccounts: () => aJ,
          requestChainId: () => a2,
          signMessage: () => a3,
          supportedSpecs: () => a8,
          switchStarknetChain: () => a1,
          watchAsset: () => aQ,
        }
      );
      var ie = class e extends az {
          walletProvider;
          constructor(e, t, r, n = '') {
            super(e, n, '', r),
              (this.walletProvider = t),
              this.walletProvider.on('accountsChanged', (e) => {
                e && (this.address = e[0].toLowerCase());
              }),
              this.walletProvider.on('networkChanged', (e) => {
                e && this.channel.setChainId(e);
              }),
              n.length ||
                (nk.warn(
                  '@deprecated Use static method WalletAccount.connect or WalletAccount.connectSilent instead. Constructor {@link WalletAccount.(format:2)}.'
                ),
                aJ(this.walletProvider).then(([e]) => {
                  this.address = e.toLowerCase();
                }));
          }
          onAccountChange(e) {
            a9(this.walletProvider, e);
          }
          onNetworkChanged(e) {
            a7(this.walletProvider, e);
          }
          requestAccounts(e = !1) {
            return aJ(this.walletProvider, e);
          }
          getPermissions() {
            return aZ(this.walletProvider);
          }
          switchStarknetChain(e) {
            return a1(this.walletProvider, e);
          }
          watchAsset(e) {
            return aQ(this.walletProvider, e);
          }
          addStarknetChain(e) {
            return a0(this.walletProvider, e);
          }
          execute(e) {
            let t = [].concat(e).map((e) => {
              let { contractAddress: t, entrypoint: r, calldata: n } = e;
              return { contract_address: t, entry_point: r, calldata: n };
            });
            return a6(this.walletProvider, { calls: t });
          }
          declare(e) {
            let t = nA(e),
              r = e.contract,
              n = { ...r, abi: eD(r.abi) };
            if (!t.compiledClassHash)
              throw Error('compiledClassHash is required');
            let a = {
              compiled_class_hash: t.compiledClassHash,
              contract_class: n,
            };
            return a4(this.walletProvider, a);
          }
          async deploy(e) {
            let { calls: t, addresses: r } = nY(e, this.address);
            return { ...(await this.execute(t)), contract_address: r };
          }
          signMessage(e) {
            return a3(this.walletProvider, e);
          }
          static async connect(t, r, n, a = !1) {
            let [i] = await aJ(r, a);
            return new e(t, r, n, i);
          }
          static async connectSilent(t, r, n) {
            return e.connect(t, r, n, !0);
          }
        },
        it = (e) => {
          let t = e[e.length - 1];
          return 'object' == typeof t &&
            [
              'blockIdentifier',
              'parseRequest',
              'parseResponse',
              'formatResponse',
              'maxFee',
              'nonce',
              'signature',
              'addressSalt',
            ].some((e) => e in t)
            ? { args: e, options: e.pop() }
            : { args: e };
        };
    },
  },
]);
