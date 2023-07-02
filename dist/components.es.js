import * as R from "react";
import Ge, { forwardRef as li, useContext as fi, Children as di, isValidElement as Br, cloneElement as qr, useState as pi } from "react";
import mi from "react-dom";
function yi(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var It = { exports: {} }, Mr = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var vn;
function hi() {
  if (vn)
    return Mr;
  vn = 1;
  var e = Ge, r = Symbol.for("react.element"), t = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function a(c, u, f) {
    var d, p = {}, y = null, E = null;
    f !== void 0 && (y = "" + f), u.key !== void 0 && (y = "" + u.key), u.ref !== void 0 && (E = u.ref);
    for (d in u)
      n.call(u, d) && !i.hasOwnProperty(d) && (p[d] = u[d]);
    if (c && c.defaultProps)
      for (d in u = c.defaultProps, u)
        p[d] === void 0 && (p[d] = u[d]);
    return { $$typeof: r, type: c, key: y, ref: E, props: p, _owner: o.current };
  }
  return Mr.Fragment = t, Mr.jsx = a, Mr.jsxs = a, Mr;
}
var Tr = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var bn;
function gi() {
  return bn || (bn = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Ge, r = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), c = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), f = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), E = Symbol.for("react.offscreen"), v = Symbol.iterator, m = "@@iterator";
    function h(s) {
      if (s === null || typeof s != "object")
        return null;
      var T = v && s[v] || s[m];
      return typeof T == "function" ? T : null;
    }
    var S = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function j(s) {
      {
        for (var T = arguments.length, N = new Array(T > 1 ? T - 1 : 0), z = 1; z < T; z++)
          N[z - 1] = arguments[z];
        C("error", s, N);
      }
    }
    function C(s, T, N) {
      {
        var z = S.ReactDebugCurrentFrame, Q = z.getStackAddendum();
        Q !== "" && (T += "%s", N = N.concat([Q]));
        var ce = N.map(function(G) {
          return String(G);
        });
        ce.unshift("Warning: " + T), Function.prototype.apply.call(console[s], console, ce);
      }
    }
    var x = !1, l = !1, w = !1, A = !1, me = !1, le;
    le = Symbol.for("react.module.reference");
    function D(s) {
      return !!(typeof s == "string" || typeof s == "function" || s === n || s === i || me || s === o || s === f || s === d || A || s === E || x || l || w || typeof s == "object" && s !== null && (s.$$typeof === y || s.$$typeof === p || s.$$typeof === a || s.$$typeof === c || s.$$typeof === u || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      s.$$typeof === le || s.getModuleId !== void 0));
    }
    function ae(s, T, N) {
      var z = s.displayName;
      if (z)
        return z;
      var Q = T.displayName || T.name || "";
      return Q !== "" ? N + "(" + Q + ")" : N;
    }
    function ye(s) {
      return s.displayName || "Context";
    }
    function oe(s) {
      if (s == null)
        return null;
      if (typeof s.tag == "number" && j("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof s == "function")
        return s.displayName || s.name || null;
      if (typeof s == "string")
        return s;
      switch (s) {
        case n:
          return "Fragment";
        case t:
          return "Portal";
        case i:
          return "Profiler";
        case o:
          return "StrictMode";
        case f:
          return "Suspense";
        case d:
          return "SuspenseList";
      }
      if (typeof s == "object")
        switch (s.$$typeof) {
          case c:
            var T = s;
            return ye(T) + ".Consumer";
          case a:
            var N = s;
            return ye(N._context) + ".Provider";
          case u:
            return ae(s, s.render, "ForwardRef");
          case p:
            var z = s.displayName || null;
            return z !== null ? z : oe(s.type) || "Memo";
          case y: {
            var Q = s, ce = Q._payload, G = Q._init;
            try {
              return oe(G(ce));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var ie = Object.assign, fe = 0, se, Ee, de, Re, M, O, F;
    function Y() {
    }
    Y.__reactDisabledLog = !0;
    function I() {
      {
        if (fe === 0) {
          se = console.log, Ee = console.info, de = console.warn, Re = console.error, M = console.group, O = console.groupCollapsed, F = console.groupEnd;
          var s = {
            configurable: !0,
            enumerable: !0,
            value: Y,
            writable: !0
          };
          Object.defineProperties(console, {
            info: s,
            log: s,
            warn: s,
            error: s,
            group: s,
            groupCollapsed: s,
            groupEnd: s
          });
        }
        fe++;
      }
    }
    function V() {
      {
        if (fe--, fe === 0) {
          var s = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: ie({}, s, {
              value: se
            }),
            info: ie({}, s, {
              value: Ee
            }),
            warn: ie({}, s, {
              value: de
            }),
            error: ie({}, s, {
              value: Re
            }),
            group: ie({}, s, {
              value: M
            }),
            groupCollapsed: ie({}, s, {
              value: O
            }),
            groupEnd: ie({}, s, {
              value: F
            })
          });
        }
        fe < 0 && j("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var P = S.ReactCurrentDispatcher, k;
    function U(s, T, N) {
      {
        if (k === void 0)
          try {
            throw Error();
          } catch (Q) {
            var z = Q.stack.trim().match(/\n( *(at )?)/);
            k = z && z[1] || "";
          }
        return `
` + k + s;
      }
    }
    var $ = !1, W;
    {
      var he = typeof WeakMap == "function" ? WeakMap : Map;
      W = new he();
    }
    function g(s, T) {
      if (!s || $)
        return "";
      {
        var N = W.get(s);
        if (N !== void 0)
          return N;
      }
      var z;
      $ = !0;
      var Q = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var ce;
      ce = P.current, P.current = null, I();
      try {
        if (T) {
          var G = function() {
            throw Error();
          };
          if (Object.defineProperty(G.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(G, []);
            } catch (Fe) {
              z = Fe;
            }
            Reflect.construct(s, [], G);
          } else {
            try {
              G.call();
            } catch (Fe) {
              z = Fe;
            }
            s.call(G.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Fe) {
            z = Fe;
          }
          s();
        }
      } catch (Fe) {
        if (Fe && z && typeof Fe.stack == "string") {
          for (var q = Fe.stack.split(`
`), Oe = z.stack.split(`
`), be = q.length - 1, Te = Oe.length - 1; be >= 1 && Te >= 0 && q[be] !== Oe[Te]; )
            Te--;
          for (; be >= 1 && Te >= 0; be--, Te--)
            if (q[be] !== Oe[Te]) {
              if (be !== 1 || Te !== 1)
                do
                  if (be--, Te--, Te < 0 || q[be] !== Oe[Te]) {
                    var Ae = `
` + q[be].replace(" at new ", " at ");
                    return s.displayName && Ae.includes("<anonymous>") && (Ae = Ae.replace("<anonymous>", s.displayName)), typeof s == "function" && W.set(s, Ae), Ae;
                  }
                while (be >= 1 && Te >= 0);
              break;
            }
        }
      } finally {
        $ = !1, P.current = ce, V(), Error.prepareStackTrace = Q;
      }
      var rr = s ? s.displayName || s.name : "", gn = rr ? U(rr) : "";
      return typeof s == "function" && W.set(s, gn), gn;
    }
    function Me(s, T, N) {
      return g(s, !1);
    }
    function _(s) {
      var T = s.prototype;
      return !!(T && T.isReactComponent);
    }
    function Ne(s, T, N) {
      if (s == null)
        return "";
      if (typeof s == "function")
        return g(s, _(s));
      if (typeof s == "string")
        return U(s);
      switch (s) {
        case f:
          return U("Suspense");
        case d:
          return U("SuspenseList");
      }
      if (typeof s == "object")
        switch (s.$$typeof) {
          case u:
            return Me(s.render);
          case p:
            return Ne(s.type, T, N);
          case y: {
            var z = s, Q = z._payload, ce = z._init;
            try {
              return Ne(ce(Q), T, N);
            } catch {
            }
          }
        }
      return "";
    }
    var $e = Object.prototype.hasOwnProperty, Ke = {}, Lr = S.ReactDebugCurrentFrame;
    function Je(s) {
      if (s) {
        var T = s._owner, N = Ne(s.type, s._source, T ? T.type : null);
        Lr.setExtraStackFrame(N);
      } else
        Lr.setExtraStackFrame(null);
    }
    function hr(s, T, N, z, Q) {
      {
        var ce = Function.call.bind($e);
        for (var G in s)
          if (ce(s, G)) {
            var q = void 0;
            try {
              if (typeof s[G] != "function") {
                var Oe = Error((z || "React class") + ": " + N + " type `" + G + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof s[G] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Oe.name = "Invariant Violation", Oe;
              }
              q = s[G](T, G, z, N, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (be) {
              q = be;
            }
            q && !(q instanceof Error) && (Je(Q), j("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", z || "React class", N, G, typeof q), Je(null)), q instanceof Error && !(q.message in Ke) && (Ke[q.message] = !0, Je(Q), j("Failed %s type: %s", N, q.message), Je(null));
          }
      }
    }
    var gr = Array.isArray;
    function vr(s) {
      return gr(s);
    }
    function vt(s) {
      {
        var T = typeof Symbol == "function" && Symbol.toStringTag, N = T && s[Symbol.toStringTag] || s.constructor.name || "Object";
        return N;
      }
    }
    function Ze(s) {
      try {
        return Be(s), !1;
      } catch {
        return !0;
      }
    }
    function Be(s) {
      return "" + s;
    }
    function $r(s) {
      if (Ze(s))
        return j("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", vt(s)), Be(s);
    }
    var qe = S.ReactCurrentOwner, bt = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, B, br, Er;
    Er = {};
    function kr(s) {
      if ($e.call(s, "ref")) {
        var T = Object.getOwnPropertyDescriptor(s, "ref").get;
        if (T && T.isReactWarning)
          return !1;
      }
      return s.ref !== void 0;
    }
    function ln(s) {
      if ($e.call(s, "key")) {
        var T = Object.getOwnPropertyDescriptor(s, "key").get;
        if (T && T.isReactWarning)
          return !1;
      }
      return s.key !== void 0;
    }
    function Xo(s, T) {
      if (typeof s.ref == "string" && qe.current && T && qe.current.stateNode !== T) {
        var N = oe(qe.current.type);
        Er[N] || (j('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', oe(qe.current.type), s.ref), Er[N] = !0);
      }
    }
    function Jo(s, T) {
      {
        var N = function() {
          B || (B = !0, j("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", T));
        };
        N.isReactWarning = !0, Object.defineProperty(s, "key", {
          get: N,
          configurable: !0
        });
      }
    }
    function Zo(s, T) {
      {
        var N = function() {
          br || (br = !0, j("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", T));
        };
        N.isReactWarning = !0, Object.defineProperty(s, "ref", {
          get: N,
          configurable: !0
        });
      }
    }
    var ei = function(s, T, N, z, Q, ce, G) {
      var q = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: r,
        // Built-in properties that belong on the element
        type: s,
        key: T,
        ref: N,
        props: G,
        // Record the component responsible for creating this element.
        _owner: ce
      };
      return q._store = {}, Object.defineProperty(q._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(q, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: z
      }), Object.defineProperty(q, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Q
      }), Object.freeze && (Object.freeze(q.props), Object.freeze(q)), q;
    };
    function ri(s, T, N, z, Q) {
      {
        var ce, G = {}, q = null, Oe = null;
        N !== void 0 && ($r(N), q = "" + N), ln(T) && ($r(T.key), q = "" + T.key), kr(T) && (Oe = T.ref, Xo(T, Q));
        for (ce in T)
          $e.call(T, ce) && !bt.hasOwnProperty(ce) && (G[ce] = T[ce]);
        if (s && s.defaultProps) {
          var be = s.defaultProps;
          for (ce in be)
            G[ce] === void 0 && (G[ce] = be[ce]);
        }
        if (q || Oe) {
          var Te = typeof s == "function" ? s.displayName || s.name || "Unknown" : s;
          q && Jo(G, Te), Oe && Zo(G, Te);
        }
        return ei(s, q, Oe, Q, z, qe.current, G);
      }
    }
    var Et = S.ReactCurrentOwner, fn = S.ReactDebugCurrentFrame;
    function er(s) {
      if (s) {
        var T = s._owner, N = Ne(s.type, s._source, T ? T.type : null);
        fn.setExtraStackFrame(N);
      } else
        fn.setExtraStackFrame(null);
    }
    var Mt;
    Mt = !1;
    function Tt(s) {
      return typeof s == "object" && s !== null && s.$$typeof === r;
    }
    function dn() {
      {
        if (Et.current) {
          var s = oe(Et.current.type);
          if (s)
            return `

Check the render method of \`` + s + "`.";
        }
        return "";
      }
    }
    function ti(s) {
      {
        if (s !== void 0) {
          var T = s.fileName.replace(/^.*[\\\/]/, ""), N = s.lineNumber;
          return `

Check your code at ` + T + ":" + N + ".";
        }
        return "";
      }
    }
    var pn = {};
    function ni(s) {
      {
        var T = dn();
        if (!T) {
          var N = typeof s == "string" ? s : s.displayName || s.name;
          N && (T = `

Check the top-level render call using <` + N + ">.");
        }
        return T;
      }
    }
    function mn(s, T) {
      {
        if (!s._store || s._store.validated || s.key != null)
          return;
        s._store.validated = !0;
        var N = ni(T);
        if (pn[N])
          return;
        pn[N] = !0;
        var z = "";
        s && s._owner && s._owner !== Et.current && (z = " It was passed a child from " + oe(s._owner.type) + "."), er(s), j('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', N, z), er(null);
      }
    }
    function yn(s, T) {
      {
        if (typeof s != "object")
          return;
        if (vr(s))
          for (var N = 0; N < s.length; N++) {
            var z = s[N];
            Tt(z) && mn(z, T);
          }
        else if (Tt(s))
          s._store && (s._store.validated = !0);
        else if (s) {
          var Q = h(s);
          if (typeof Q == "function" && Q !== s.entries)
            for (var ce = Q.call(s), G; !(G = ce.next()).done; )
              Tt(G.value) && mn(G.value, T);
        }
      }
    }
    function oi(s) {
      {
        var T = s.type;
        if (T == null || typeof T == "string")
          return;
        var N;
        if (typeof T == "function")
          N = T.propTypes;
        else if (typeof T == "object" && (T.$$typeof === u || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        T.$$typeof === p))
          N = T.propTypes;
        else
          return;
        if (N) {
          var z = oe(T);
          hr(N, s.props, "prop", z, s);
        } else if (T.PropTypes !== void 0 && !Mt) {
          Mt = !0;
          var Q = oe(T);
          j("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Q || "Unknown");
        }
        typeof T.getDefaultProps == "function" && !T.getDefaultProps.isReactClassApproved && j("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ii(s) {
      {
        for (var T = Object.keys(s.props), N = 0; N < T.length; N++) {
          var z = T[N];
          if (z !== "children" && z !== "key") {
            er(s), j("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", z), er(null);
            break;
          }
        }
        s.ref !== null && (er(s), j("Invalid attribute `ref` supplied to `React.Fragment`."), er(null));
      }
    }
    function hn(s, T, N, z, Q, ce) {
      {
        var G = D(s);
        if (!G) {
          var q = "";
          (s === void 0 || typeof s == "object" && s !== null && Object.keys(s).length === 0) && (q += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Oe = ti(Q);
          Oe ? q += Oe : q += dn();
          var be;
          s === null ? be = "null" : vr(s) ? be = "array" : s !== void 0 && s.$$typeof === r ? (be = "<" + (oe(s.type) || "Unknown") + " />", q = " Did you accidentally export a JSX literal instead of a component?") : be = typeof s, j("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", be, q);
        }
        var Te = ri(s, T, N, Q, ce);
        if (Te == null)
          return Te;
        if (G) {
          var Ae = T.children;
          if (Ae !== void 0)
            if (z)
              if (vr(Ae)) {
                for (var rr = 0; rr < Ae.length; rr++)
                  yn(Ae[rr], s);
                Object.freeze && Object.freeze(Ae);
              } else
                j("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              yn(Ae, s);
        }
        return s === n ? ii(Te) : oi(Te), Te;
      }
    }
    function ai(s, T, N) {
      return hn(s, T, N, !0);
    }
    function si(s, T, N) {
      return hn(s, T, N, !1);
    }
    var ci = si, ui = ai;
    Tr.Fragment = n, Tr.jsx = ci, Tr.jsxs = ui;
  }()), Tr;
}
process.env.NODE_ENV === "production" ? It.exports = hi() : It.exports = gi();
var ue = It.exports, Or = {}, xr = mi;
if (process.env.NODE_ENV === "production")
  Or.createRoot = xr.createRoot, Or.hydrateRoot = xr.hydrateRoot;
else {
  var zr = xr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  Or.createRoot = function(e, r) {
    zr.usingClientEntryPoint = !0;
    try {
      return xr.createRoot(e, r);
    } finally {
      zr.usingClientEntryPoint = !1;
    }
  }, Or.hydrateRoot = function(e, r, t) {
    zr.usingClientEntryPoint = !0;
    try {
      return xr.hydrateRoot(e, r, t);
    } finally {
      zr.usingClientEntryPoint = !1;
    }
  };
}
const bi = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBhcmlhLWhpZGRlbj0idHJ1ZSIgcm9sZT0iaW1nIiBjbGFzcz0iaWNvbmlmeSBpY29uaWZ5LS1sb2dvcyIgd2lkdGg9IjM1LjkzIiBoZWlnaHQ9IjMyIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWlkWU1pZCBtZWV0IiB2aWV3Qm94PSIwIDAgMjU2IDIyOCI+PHBhdGggZmlsbD0iIzAwRDhGRiIgZD0iTTIxMC40ODMgNzMuODI0YTE3MS40OSAxNzEuNDkgMCAwIDAtOC4yNC0yLjU5N2MuNDY1LTEuOS44OTMtMy43NzcgMS4yNzMtNS42MjFjNi4yMzgtMzAuMjgxIDIuMTYtNTQuNjc2LTExLjc2OS02Mi43MDhjLTEzLjM1NS03LjctMzUuMTk2LjMyOS01Ny4yNTQgMTkuNTI2YTE3MS4yMyAxNzEuMjMgMCAwIDAtNi4zNzUgNS44NDhhMTU1Ljg2NiAxNTUuODY2IDAgMCAwLTQuMjQxLTMuOTE3QzEwMC43NTkgMy44MjkgNzcuNTg3LTQuODIyIDYzLjY3MyAzLjIzM0M1MC4zMyAxMC45NTcgNDYuMzc5IDMzLjg5IDUxLjk5NSA2Mi41ODhhMTcwLjk3NCAxNzAuOTc0IDAgMCAwIDEuODkyIDguNDhjLTMuMjguOTMyLTYuNDQ1IDEuOTI0LTkuNDc0IDIuOThDMTcuMzA5IDgzLjQ5OCAwIDk4LjMwNyAwIDExMy42NjhjMCAxNS44NjUgMTguNTgyIDMxLjc3OCA0Ni44MTIgNDEuNDI3YTE0NS41MiAxNDUuNTIgMCAwIDAgNi45MjEgMi4xNjVhMTY3LjQ2NyAxNjcuNDY3IDAgMCAwLTIuMDEgOS4xMzhjLTUuMzU0IDI4LjItMS4xNzMgNTAuNTkxIDEyLjEzNCA1OC4yNjZjMTMuNzQ0IDcuOTI2IDM2LjgxMi0uMjIgNTkuMjczLTE5Ljg1NWExNDUuNTY3IDE0NS41NjcgMCAwIDAgNS4zNDItNC45MjNhMTY4LjA2NCAxNjguMDY0IDAgMCAwIDYuOTIgNi4zMTRjMjEuNzU4IDE4LjcyMiA0My4yNDYgMjYuMjgyIDU2LjU0IDE4LjU4NmMxMy43MzEtNy45NDkgMTguMTk0LTMyLjAwMyAxMi40LTYxLjI2OGExNDUuMDE2IDE0NS4wMTYgMCAwIDAtMS41MzUtNi44NDJjMS42Mi0uNDggMy4yMS0uOTc0IDQuNzYtMS40ODhjMjkuMzQ4LTkuNzIzIDQ4LjQ0My0yNS40NDMgNDguNDQzLTQxLjUyYzAtMTUuNDE3LTE3Ljg2OC0zMC4zMjYtNDUuNTE3LTM5Ljg0NFptLTYuMzY1IDcwLjk4NGMtMS40LjQ2My0yLjgzNi45MS00LjMgMS4zNDVjLTMuMjQtMTAuMjU3LTcuNjEyLTIxLjE2My0xMi45NjMtMzIuNDMyYzUuMTA2LTExIDkuMzEtMjEuNzY3IDEyLjQ1OS0zMS45NTdjMi42MTkuNzU4IDUuMTYgMS41NTcgNy42MSAyLjRjMjMuNjkgOC4xNTYgMzguMTQgMjAuMjEzIDM4LjE0IDI5LjUwNGMwIDkuODk2LTE1LjYwNiAyMi43NDMtNDAuOTQ2IDMxLjE0Wm0tMTAuNTE0IDIwLjgzNGMyLjU2MiAxMi45NCAyLjkyNyAyNC42NCAxLjIzIDMzLjc4N2MtMS41MjQgOC4yMTktNC41OSAxMy42OTgtOC4zODIgMTUuODkzYy04LjA2NyA0LjY3LTI1LjMyLTEuNC00My45MjctMTcuNDEyYTE1Ni43MjYgMTU2LjcyNiAwIDAgMS02LjQzNy01Ljg3YzcuMjE0LTcuODg5IDE0LjQyMy0xNy4wNiAyMS40NTktMjcuMjQ2YzEyLjM3Ni0xLjA5OCAyNC4wNjgtMi44OTQgMzQuNjcxLTUuMzQ1YTEzNC4xNyAxMzQuMTcgMCAwIDEgMS4zODYgNi4xOTNaTTg3LjI3NiAyMTQuNTE1Yy03Ljg4MiAyLjc4My0xNC4xNiAyLjg2My0xNy45NTUuNjc1Yy04LjA3NS00LjY1Ny0xMS40MzItMjIuNjM2LTYuODUzLTQ2Ljc1MmExNTYuOTIzIDE1Ni45MjMgMCAwIDEgMS44NjktOC40OTljMTAuNDg2IDIuMzIgMjIuMDkzIDMuOTg4IDM0LjQ5OCA0Ljk5NGM3LjA4NCA5Ljk2NyAxNC41MDEgMTkuMTI4IDIxLjk3NiAyNy4xNWExMzQuNjY4IDEzNC42NjggMCAwIDEtNC44NzcgNC40OTJjLTkuOTMzIDguNjgyLTE5Ljg4NiAxNC44NDItMjguNjU4IDE3Ljk0Wk01MC4zNSAxNDQuNzQ3Yy0xMi40ODMtNC4yNjctMjIuNzkyLTkuODEyLTI5Ljg1OC0xNS44NjNjLTYuMzUtNS40MzctOS41NTUtMTAuODM2LTkuNTU1LTE1LjIxNmMwLTkuMzIyIDEzLjg5Ny0yMS4yMTIgMzcuMDc2LTI5LjI5M2MyLjgxMy0uOTggNS43NTctMS45MDUgOC44MTItMi43NzNjMy4yMDQgMTAuNDIgNy40MDYgMjEuMzE1IDEyLjQ3NyAzMi4zMzJjLTUuMTM3IDExLjE4LTkuMzk5IDIyLjI0OS0xMi42MzQgMzIuNzkyYTEzNC43MTggMTM0LjcxOCAwIDAgMS02LjMxOC0xLjk3OVptMTIuMzc4LTg0LjI2Yy00LjgxMS0yNC41ODctMS42MTYtNDMuMTM0IDYuNDI1LTQ3Ljc4OWM4LjU2NC00Ljk1OCAyNy41MDIgMi4xMTEgNDcuNDYzIDE5LjgzNWExNDQuMzE4IDE0NC4zMTggMCAwIDEgMy44NDEgMy41NDVjLTcuNDM4IDcuOTg3LTE0Ljc4NyAxNy4wOC0yMS44MDggMjYuOTg4Yy0xMi4wNCAxLjExNi0yMy41NjUgMi45MDgtMzQuMTYxIDUuMzA5YTE2MC4zNDIgMTYwLjM0MiAwIDAgMS0xLjc2LTcuODg3Wm0xMTAuNDI3IDI3LjI2OGEzNDcuOCAzNDcuOCAwIDAgMC03Ljc4NS0xMi44MDNjOC4xNjggMS4wMzMgMTUuOTk0IDIuNDA0IDIzLjM0MyA0LjA4Yy0yLjIwNiA3LjA3Mi00Ljk1NiAxNC40NjUtOC4xOTMgMjIuMDQ1YTM4MS4xNTEgMzgxLjE1MSAwIDAgMC03LjM2NS0xMy4zMjJabS00NS4wMzItNDMuODYxYzUuMDQ0IDUuNDY1IDEwLjA5NiAxMS41NjYgMTUuMDY1IDE4LjE4NmEzMjIuMDQgMzIyLjA0IDAgMCAwLTMwLjI1Ny0uMDA2YzQuOTc0LTYuNTU5IDEwLjA2OS0xMi42NTIgMTUuMTkyLTE4LjE4Wk04Mi44MDIgODcuODNhMzIzLjE2NyAzMjMuMTY3IDAgMCAwLTcuMjI3IDEzLjIzOGMtMy4xODQtNy41NTMtNS45MDktMTQuOTgtOC4xMzQtMjIuMTUyYzcuMzA0LTEuNjM0IDE1LjA5My0yLjk3IDIzLjIwOS0zLjk4NGEzMjEuNTI0IDMyMS41MjQgMCAwIDAtNy44NDggMTIuODk3Wm04LjA4MSA2NS4zNTJjLTguMzg1LS45MzYtMTYuMjkxLTIuMjAzLTIzLjU5My0zLjc5M2MyLjI2LTcuMyA1LjA0NS0xNC44ODUgOC4yOTgtMjIuNmEzMjEuMTg3IDMyMS4xODcgMCAwIDAgNy4yNTcgMTMuMjQ2YzIuNTk0IDQuNDggNS4yOCA4Ljg2OCA4LjAzOCAxMy4xNDdabTM3LjU0MiAzMS4wM2MtNS4xODQtNS41OTItMTAuMzU0LTExLjc3OS0xNS40MDMtMTguNDMzYzQuOTAyLjE5MiA5Ljg5OS4yOSAxNC45NzguMjljNS4yMTggMCAxMC4zNzYtLjExNyAxNS40NTMtLjM0M2MtNC45ODUgNi43NzQtMTAuMDE4IDEyLjk3LTE1LjAyOCAxOC40ODZabTUyLjE5OC01Ny44MTdjMy40MjIgNy44IDYuMzA2IDE1LjM0NSA4LjU5NiAyMi41MmMtNy40MjIgMS42OTQtMTUuNDM2IDMuMDU4LTIzLjg4IDQuMDcxYTM4Mi40MTcgMzgyLjQxNyAwIDAgMCA3Ljg1OS0xMy4wMjZhMzQ3LjQwMyAzNDcuNDAzIDAgMCAwIDcuNDI1LTEzLjU2NVptLTE2Ljg5OCA4LjEwMWEzNTguNTU3IDM1OC41NTcgMCAwIDEtMTIuMjgxIDE5LjgxNWEzMjkuNCAzMjkuNCAwIDAgMS0yMy40NDQuODIzYy03Ljk2NyAwLTE1LjcxNi0uMjQ4LTIzLjE3OC0uNzMyYTMxMC4yMDIgMzEwLjIwMiAwIDAgMS0xMi41MTMtMTkuODQ2aC4wMDFhMzA3LjQxIDMwNy40MSAwIDAgMS0xMC45MjMtMjAuNjI3YTMxMC4yNzggMzEwLjI3OCAwIDAgMSAxMC44OS0yMC42MzdsLS4wMDEuMDAxYTMwNy4zMTggMzA3LjMxOCAwIDAgMSAxMi40MTMtMTkuNzYxYzcuNjEzLS41NzYgMTUuNDItLjg3NiAyMy4zMS0uODc2SDEyOGM3LjkyNiAwIDE1Ljc0My4zMDMgMjMuMzU0Ljg4M2EzMjkuMzU3IDMyOS4zNTcgMCAwIDEgMTIuMzM1IDE5LjY5NWEzNTguNDg5IDM1OC40ODkgMCAwIDEgMTEuMDM2IDIwLjU0YTMyOS40NzIgMzI5LjQ3MiAwIDAgMS0xMSAyMC43MjJabTIyLjU2LTEyMi4xMjRjOC41NzIgNC45NDQgMTEuOTA2IDI0Ljg4MSA2LjUyIDUxLjAyNmMtLjM0NCAxLjY2OC0uNzMgMy4zNjctMS4xNSA1LjA5Yy0xMC42MjItMi40NTItMjIuMTU1LTQuMjc1LTM0LjIzLTUuNDA4Yy03LjAzNC0xMC4wMTctMTQuMzIzLTE5LjEyNC0yMS42NC0yNy4wMDhhMTYwLjc4OSAxNjAuNzg5IDAgMCAxIDUuODg4LTUuNGMxOC45LTE2LjQ0NyAzNi41NjQtMjIuOTQxIDQ0LjYxMi0xOC4zWk0xMjggOTAuODA4YzEyLjYyNSAwIDIyLjg2IDEwLjIzNSAyMi44NiAyMi44NnMtMTAuMjM1IDIyLjg2LTIyLjg2IDIyLjg2cy0yMi44Ni0xMC4yMzUtMjIuODYtMjIuODZzMTAuMjM1LTIyLjg2IDIyLjg2LTIyLjg2WiI+PC9wYXRoPjwvc3ZnPg==", Ei = "/vite.svg";
const Mi = {
  black: "#000",
  white: "#fff"
}, _r = Mi, Ti = {
  50: "#ffebee",
  100: "#ffcdd2",
  200: "#ef9a9a",
  300: "#e57373",
  400: "#ef5350",
  500: "#f44336",
  600: "#e53935",
  700: "#d32f2f",
  800: "#c62828",
  900: "#b71c1c",
  A100: "#ff8a80",
  A200: "#ff5252",
  A400: "#ff1744",
  A700: "#d50000"
}, tr = Ti, xi = {
  50: "#f3e5f5",
  100: "#e1bee7",
  200: "#ce93d8",
  300: "#ba68c8",
  400: "#ab47bc",
  500: "#9c27b0",
  600: "#8e24aa",
  700: "#7b1fa2",
  800: "#6a1b9a",
  900: "#4a148c",
  A100: "#ea80fc",
  A200: "#e040fb",
  A400: "#d500f9",
  A700: "#aa00ff"
}, nr = xi, Si = {
  50: "#e3f2fd",
  100: "#bbdefb",
  200: "#90caf9",
  300: "#64b5f6",
  400: "#42a5f5",
  500: "#2196f3",
  600: "#1e88e5",
  700: "#1976d2",
  800: "#1565c0",
  900: "#0d47a1",
  A100: "#82b1ff",
  A200: "#448aff",
  A400: "#2979ff",
  A700: "#2962ff"
}, or = Si, Ni = {
  50: "#e1f5fe",
  100: "#b3e5fc",
  200: "#81d4fa",
  300: "#4fc3f7",
  400: "#29b6f6",
  500: "#03a9f4",
  600: "#039be5",
  700: "#0288d1",
  800: "#0277bd",
  900: "#01579b",
  A100: "#80d8ff",
  A200: "#40c4ff",
  A400: "#00b0ff",
  A700: "#0091ea"
}, ir = Ni, Ci = {
  50: "#e8f5e9",
  100: "#c8e6c9",
  200: "#a5d6a7",
  300: "#81c784",
  400: "#66bb6a",
  500: "#4caf50",
  600: "#43a047",
  700: "#388e3c",
  800: "#2e7d32",
  900: "#1b5e20",
  A100: "#b9f6ca",
  A200: "#69f0ae",
  A400: "#00e676",
  A700: "#00c853"
}, ar = Ci, Oi = {
  50: "#fff3e0",
  100: "#ffe0b2",
  200: "#ffcc80",
  300: "#ffb74d",
  400: "#ffa726",
  500: "#ff9800",
  600: "#fb8c00",
  700: "#f57c00",
  800: "#ef6c00",
  900: "#e65100",
  A100: "#ffd180",
  A200: "#ffab40",
  A400: "#ff9100",
  A700: "#ff6d00"
}, Sr = Oi, ji = {
  50: "#fafafa",
  100: "#f5f5f5",
  200: "#eeeeee",
  300: "#e0e0e0",
  400: "#bdbdbd",
  500: "#9e9e9e",
  600: "#757575",
  700: "#616161",
  800: "#424242",
  900: "#212121",
  A100: "#f5f5f5",
  A200: "#eeeeee",
  A400: "#bdbdbd",
  A700: "#616161"
}, _i = ji;
function Ri(e, r) {
  return process.env.NODE_ENV === "production" ? () => null : function(...n) {
    return e(...n) || r(...n);
  };
}
function L() {
  return L = Object.assign ? Object.assign.bind() : function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var t = arguments[r];
      for (var n in t)
        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
    }
    return e;
  }, L.apply(this, arguments);
}
function sr(e) {
  return e !== null && typeof e == "object" && e.constructor === Object;
}
function vo(e) {
  if (!sr(e))
    return e;
  const r = {};
  return Object.keys(e).forEach((t) => {
    r[t] = vo(e[t]);
  }), r;
}
function Ve(e, r, t = {
  clone: !0
}) {
  const n = t.clone ? L({}, e) : e;
  return sr(e) && sr(r) && Object.keys(r).forEach((o) => {
    o !== "__proto__" && (sr(r[o]) && o in e && sr(e[o]) ? n[o] = Ve(e[o], r[o], t) : t.clone ? n[o] = sr(r[o]) ? vo(r[o]) : r[o] : n[o] = r[o]);
  }), n;
}
var At = { exports: {} }, Yr = { exports: {} }, X = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var En;
function wi() {
  if (En)
    return X;
  En = 1;
  var e = typeof Symbol == "function" && Symbol.for, r = e ? Symbol.for("react.element") : 60103, t = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, u = e ? Symbol.for("react.async_mode") : 60111, f = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, p = e ? Symbol.for("react.suspense") : 60113, y = e ? Symbol.for("react.suspense_list") : 60120, E = e ? Symbol.for("react.memo") : 60115, v = e ? Symbol.for("react.lazy") : 60116, m = e ? Symbol.for("react.block") : 60121, h = e ? Symbol.for("react.fundamental") : 60117, S = e ? Symbol.for("react.responder") : 60118, j = e ? Symbol.for("react.scope") : 60119;
  function C(l) {
    if (typeof l == "object" && l !== null) {
      var w = l.$$typeof;
      switch (w) {
        case r:
          switch (l = l.type, l) {
            case u:
            case f:
            case n:
            case i:
            case o:
            case p:
              return l;
            default:
              switch (l = l && l.$$typeof, l) {
                case c:
                case d:
                case v:
                case E:
                case a:
                  return l;
                default:
                  return w;
              }
          }
        case t:
          return w;
      }
    }
  }
  function x(l) {
    return C(l) === f;
  }
  return X.AsyncMode = u, X.ConcurrentMode = f, X.ContextConsumer = c, X.ContextProvider = a, X.Element = r, X.ForwardRef = d, X.Fragment = n, X.Lazy = v, X.Memo = E, X.Portal = t, X.Profiler = i, X.StrictMode = o, X.Suspense = p, X.isAsyncMode = function(l) {
    return x(l) || C(l) === u;
  }, X.isConcurrentMode = x, X.isContextConsumer = function(l) {
    return C(l) === c;
  }, X.isContextProvider = function(l) {
    return C(l) === a;
  }, X.isElement = function(l) {
    return typeof l == "object" && l !== null && l.$$typeof === r;
  }, X.isForwardRef = function(l) {
    return C(l) === d;
  }, X.isFragment = function(l) {
    return C(l) === n;
  }, X.isLazy = function(l) {
    return C(l) === v;
  }, X.isMemo = function(l) {
    return C(l) === E;
  }, X.isPortal = function(l) {
    return C(l) === t;
  }, X.isProfiler = function(l) {
    return C(l) === i;
  }, X.isStrictMode = function(l) {
    return C(l) === o;
  }, X.isSuspense = function(l) {
    return C(l) === p;
  }, X.isValidElementType = function(l) {
    return typeof l == "string" || typeof l == "function" || l === n || l === f || l === i || l === o || l === p || l === y || typeof l == "object" && l !== null && (l.$$typeof === v || l.$$typeof === E || l.$$typeof === a || l.$$typeof === c || l.$$typeof === d || l.$$typeof === h || l.$$typeof === S || l.$$typeof === j || l.$$typeof === m);
  }, X.typeOf = C, X;
}
var J = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Mn;
function Ii() {
  return Mn || (Mn = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, r = e ? Symbol.for("react.element") : 60103, t = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, u = e ? Symbol.for("react.async_mode") : 60111, f = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, p = e ? Symbol.for("react.suspense") : 60113, y = e ? Symbol.for("react.suspense_list") : 60120, E = e ? Symbol.for("react.memo") : 60115, v = e ? Symbol.for("react.lazy") : 60116, m = e ? Symbol.for("react.block") : 60121, h = e ? Symbol.for("react.fundamental") : 60117, S = e ? Symbol.for("react.responder") : 60118, j = e ? Symbol.for("react.scope") : 60119;
    function C(g) {
      return typeof g == "string" || typeof g == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      g === n || g === f || g === i || g === o || g === p || g === y || typeof g == "object" && g !== null && (g.$$typeof === v || g.$$typeof === E || g.$$typeof === a || g.$$typeof === c || g.$$typeof === d || g.$$typeof === h || g.$$typeof === S || g.$$typeof === j || g.$$typeof === m);
    }
    function x(g) {
      if (typeof g == "object" && g !== null) {
        var Me = g.$$typeof;
        switch (Me) {
          case r:
            var _ = g.type;
            switch (_) {
              case u:
              case f:
              case n:
              case i:
              case o:
              case p:
                return _;
              default:
                var Ne = _ && _.$$typeof;
                switch (Ne) {
                  case c:
                  case d:
                  case v:
                  case E:
                  case a:
                    return Ne;
                  default:
                    return Me;
                }
            }
          case t:
            return Me;
        }
      }
    }
    var l = u, w = f, A = c, me = a, le = r, D = d, ae = n, ye = v, oe = E, ie = t, fe = i, se = o, Ee = p, de = !1;
    function Re(g) {
      return de || (de = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), M(g) || x(g) === u;
    }
    function M(g) {
      return x(g) === f;
    }
    function O(g) {
      return x(g) === c;
    }
    function F(g) {
      return x(g) === a;
    }
    function Y(g) {
      return typeof g == "object" && g !== null && g.$$typeof === r;
    }
    function I(g) {
      return x(g) === d;
    }
    function V(g) {
      return x(g) === n;
    }
    function P(g) {
      return x(g) === v;
    }
    function k(g) {
      return x(g) === E;
    }
    function U(g) {
      return x(g) === t;
    }
    function $(g) {
      return x(g) === i;
    }
    function W(g) {
      return x(g) === o;
    }
    function he(g) {
      return x(g) === p;
    }
    J.AsyncMode = l, J.ConcurrentMode = w, J.ContextConsumer = A, J.ContextProvider = me, J.Element = le, J.ForwardRef = D, J.Fragment = ae, J.Lazy = ye, J.Memo = oe, J.Portal = ie, J.Profiler = fe, J.StrictMode = se, J.Suspense = Ee, J.isAsyncMode = Re, J.isConcurrentMode = M, J.isContextConsumer = O, J.isContextProvider = F, J.isElement = Y, J.isForwardRef = I, J.isFragment = V, J.isLazy = P, J.isMemo = k, J.isPortal = U, J.isProfiler = $, J.isStrictMode = W, J.isSuspense = he, J.isValidElementType = C, J.typeOf = x;
  }()), J;
}
var Tn;
function bo() {
  return Tn || (Tn = 1, process.env.NODE_ENV === "production" ? Yr.exports = wi() : Yr.exports = Ii()), Yr.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var xt, xn;
function Ai() {
  if (xn)
    return xt;
  xn = 1;
  var e = Object.getOwnPropertySymbols, r = Object.prototype.hasOwnProperty, t = Object.prototype.propertyIsEnumerable;
  function n(i) {
    if (i == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(i);
  }
  function o() {
    try {
      if (!Object.assign)
        return !1;
      var i = new String("abc");
      if (i[5] = "de", Object.getOwnPropertyNames(i)[0] === "5")
        return !1;
      for (var a = {}, c = 0; c < 10; c++)
        a["_" + String.fromCharCode(c)] = c;
      var u = Object.getOwnPropertyNames(a).map(function(d) {
        return a[d];
      });
      if (u.join("") !== "0123456789")
        return !1;
      var f = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(d) {
        f[d] = d;
      }), Object.keys(Object.assign({}, f)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return xt = o() ? Object.assign : function(i, a) {
    for (var c, u = n(i), f, d = 1; d < arguments.length; d++) {
      c = Object(arguments[d]);
      for (var p in c)
        r.call(c, p) && (u[p] = c[p]);
      if (e) {
        f = e(c);
        for (var y = 0; y < f.length; y++)
          t.call(c, f[y]) && (u[f[y]] = c[f[y]]);
      }
    }
    return u;
  }, xt;
}
var St, Sn;
function Ft() {
  if (Sn)
    return St;
  Sn = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return St = e, St;
}
var Nt, Nn;
function Eo() {
  return Nn || (Nn = 1, Nt = Function.call.bind(Object.prototype.hasOwnProperty)), Nt;
}
var Ct, Cn;
function Di() {
  if (Cn)
    return Ct;
  Cn = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var r = Ft(), t = {}, n = Eo();
    e = function(i) {
      var a = "Warning: " + i;
      typeof console < "u" && console.error(a);
      try {
        throw new Error(a);
      } catch {
      }
    };
  }
  function o(i, a, c, u, f) {
    if (process.env.NODE_ENV !== "production") {
      for (var d in i)
        if (n(i, d)) {
          var p;
          try {
            if (typeof i[d] != "function") {
              var y = Error(
                (u || "React class") + ": " + c + " type `" + d + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof i[d] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw y.name = "Invariant Violation", y;
            }
            p = i[d](a, d, u, c, null, r);
          } catch (v) {
            p = v;
          }
          if (p && !(p instanceof Error) && e(
            (u || "React class") + ": type specification of " + c + " `" + d + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof p + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), p instanceof Error && !(p.message in t)) {
            t[p.message] = !0;
            var E = f ? f() : "";
            e(
              "Failed " + c + " type: " + p.message + (E ?? "")
            );
          }
        }
    }
  }
  return o.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (t = {});
  }, Ct = o, Ct;
}
var Ot, On;
function Pi() {
  if (On)
    return Ot;
  On = 1;
  var e = bo(), r = Ai(), t = Ft(), n = Eo(), o = Di(), i = function() {
  };
  process.env.NODE_ENV !== "production" && (i = function(c) {
    var u = "Warning: " + c;
    typeof console < "u" && console.error(u);
    try {
      throw new Error(u);
    } catch {
    }
  });
  function a() {
    return null;
  }
  return Ot = function(c, u) {
    var f = typeof Symbol == "function" && Symbol.iterator, d = "@@iterator";
    function p(M) {
      var O = M && (f && M[f] || M[d]);
      if (typeof O == "function")
        return O;
    }
    var y = "<<anonymous>>", E = {
      array: S("array"),
      bigint: S("bigint"),
      bool: S("boolean"),
      func: S("function"),
      number: S("number"),
      object: S("object"),
      string: S("string"),
      symbol: S("symbol"),
      any: j(),
      arrayOf: C,
      element: x(),
      elementType: l(),
      instanceOf: w,
      node: D(),
      objectOf: me,
      oneOf: A,
      oneOfType: le,
      shape: ye,
      exact: oe
    };
    function v(M, O) {
      return M === O ? M !== 0 || 1 / M === 1 / O : M !== M && O !== O;
    }
    function m(M, O) {
      this.message = M, this.data = O && typeof O == "object" ? O : {}, this.stack = "";
    }
    m.prototype = Error.prototype;
    function h(M) {
      if (process.env.NODE_ENV !== "production")
        var O = {}, F = 0;
      function Y(V, P, k, U, $, W, he) {
        if (U = U || y, W = W || k, he !== t) {
          if (u) {
            var g = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw g.name = "Invariant Violation", g;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var Me = U + ":" + k;
            !O[Me] && // Avoid spamming the console because they are often not actionable except for lib authors
            F < 3 && (i(
              "You are manually calling a React.PropTypes validation function for the `" + W + "` prop on `" + U + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), O[Me] = !0, F++);
          }
        }
        return P[k] == null ? V ? P[k] === null ? new m("The " + $ + " `" + W + "` is marked as required " + ("in `" + U + "`, but its value is `null`.")) : new m("The " + $ + " `" + W + "` is marked as required in " + ("`" + U + "`, but its value is `undefined`.")) : null : M(P, k, U, $, W);
      }
      var I = Y.bind(null, !1);
      return I.isRequired = Y.bind(null, !0), I;
    }
    function S(M) {
      function O(F, Y, I, V, P, k) {
        var U = F[Y], $ = se(U);
        if ($ !== M) {
          var W = Ee(U);
          return new m(
            "Invalid " + V + " `" + P + "` of type " + ("`" + W + "` supplied to `" + I + "`, expected ") + ("`" + M + "`."),
            { expectedType: M }
          );
        }
        return null;
      }
      return h(O);
    }
    function j() {
      return h(a);
    }
    function C(M) {
      function O(F, Y, I, V, P) {
        if (typeof M != "function")
          return new m("Property `" + P + "` of component `" + I + "` has invalid PropType notation inside arrayOf.");
        var k = F[Y];
        if (!Array.isArray(k)) {
          var U = se(k);
          return new m("Invalid " + V + " `" + P + "` of type " + ("`" + U + "` supplied to `" + I + "`, expected an array."));
        }
        for (var $ = 0; $ < k.length; $++) {
          var W = M(k, $, I, V, P + "[" + $ + "]", t);
          if (W instanceof Error)
            return W;
        }
        return null;
      }
      return h(O);
    }
    function x() {
      function M(O, F, Y, I, V) {
        var P = O[F];
        if (!c(P)) {
          var k = se(P);
          return new m("Invalid " + I + " `" + V + "` of type " + ("`" + k + "` supplied to `" + Y + "`, expected a single ReactElement."));
        }
        return null;
      }
      return h(M);
    }
    function l() {
      function M(O, F, Y, I, V) {
        var P = O[F];
        if (!e.isValidElementType(P)) {
          var k = se(P);
          return new m("Invalid " + I + " `" + V + "` of type " + ("`" + k + "` supplied to `" + Y + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return h(M);
    }
    function w(M) {
      function O(F, Y, I, V, P) {
        if (!(F[Y] instanceof M)) {
          var k = M.name || y, U = Re(F[Y]);
          return new m("Invalid " + V + " `" + P + "` of type " + ("`" + U + "` supplied to `" + I + "`, expected ") + ("instance of `" + k + "`."));
        }
        return null;
      }
      return h(O);
    }
    function A(M) {
      if (!Array.isArray(M))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? i(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : i("Invalid argument supplied to oneOf, expected an array.")), a;
      function O(F, Y, I, V, P) {
        for (var k = F[Y], U = 0; U < M.length; U++)
          if (v(k, M[U]))
            return null;
        var $ = JSON.stringify(M, function(he, g) {
          var Me = Ee(g);
          return Me === "symbol" ? String(g) : g;
        });
        return new m("Invalid " + V + " `" + P + "` of value `" + String(k) + "` " + ("supplied to `" + I + "`, expected one of " + $ + "."));
      }
      return h(O);
    }
    function me(M) {
      function O(F, Y, I, V, P) {
        if (typeof M != "function")
          return new m("Property `" + P + "` of component `" + I + "` has invalid PropType notation inside objectOf.");
        var k = F[Y], U = se(k);
        if (U !== "object")
          return new m("Invalid " + V + " `" + P + "` of type " + ("`" + U + "` supplied to `" + I + "`, expected an object."));
        for (var $ in k)
          if (n(k, $)) {
            var W = M(k, $, I, V, P + "." + $, t);
            if (W instanceof Error)
              return W;
          }
        return null;
      }
      return h(O);
    }
    function le(M) {
      if (!Array.isArray(M))
        return process.env.NODE_ENV !== "production" && i("Invalid argument supplied to oneOfType, expected an instance of array."), a;
      for (var O = 0; O < M.length; O++) {
        var F = M[O];
        if (typeof F != "function")
          return i(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + de(F) + " at index " + O + "."
          ), a;
      }
      function Y(I, V, P, k, U) {
        for (var $ = [], W = 0; W < M.length; W++) {
          var he = M[W], g = he(I, V, P, k, U, t);
          if (g == null)
            return null;
          g.data && n(g.data, "expectedType") && $.push(g.data.expectedType);
        }
        var Me = $.length > 0 ? ", expected one of type [" + $.join(", ") + "]" : "";
        return new m("Invalid " + k + " `" + U + "` supplied to " + ("`" + P + "`" + Me + "."));
      }
      return h(Y);
    }
    function D() {
      function M(O, F, Y, I, V) {
        return ie(O[F]) ? null : new m("Invalid " + I + " `" + V + "` supplied to " + ("`" + Y + "`, expected a ReactNode."));
      }
      return h(M);
    }
    function ae(M, O, F, Y, I) {
      return new m(
        (M || "React class") + ": " + O + " type `" + F + "." + Y + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + I + "`."
      );
    }
    function ye(M) {
      function O(F, Y, I, V, P) {
        var k = F[Y], U = se(k);
        if (U !== "object")
          return new m("Invalid " + V + " `" + P + "` of type `" + U + "` " + ("supplied to `" + I + "`, expected `object`."));
        for (var $ in M) {
          var W = M[$];
          if (typeof W != "function")
            return ae(I, V, P, $, Ee(W));
          var he = W(k, $, I, V, P + "." + $, t);
          if (he)
            return he;
        }
        return null;
      }
      return h(O);
    }
    function oe(M) {
      function O(F, Y, I, V, P) {
        var k = F[Y], U = se(k);
        if (U !== "object")
          return new m("Invalid " + V + " `" + P + "` of type `" + U + "` " + ("supplied to `" + I + "`, expected `object`."));
        var $ = r({}, F[Y], M);
        for (var W in $) {
          var he = M[W];
          if (n(M, W) && typeof he != "function")
            return ae(I, V, P, W, Ee(he));
          if (!he)
            return new m(
              "Invalid " + V + " `" + P + "` key `" + W + "` supplied to `" + I + "`.\nBad object: " + JSON.stringify(F[Y], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(M), null, "  ")
            );
          var g = he(k, W, I, V, P + "." + W, t);
          if (g)
            return g;
        }
        return null;
      }
      return h(O);
    }
    function ie(M) {
      switch (typeof M) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !M;
        case "object":
          if (Array.isArray(M))
            return M.every(ie);
          if (M === null || c(M))
            return !0;
          var O = p(M);
          if (O) {
            var F = O.call(M), Y;
            if (O !== M.entries) {
              for (; !(Y = F.next()).done; )
                if (!ie(Y.value))
                  return !1;
            } else
              for (; !(Y = F.next()).done; ) {
                var I = Y.value;
                if (I && !ie(I[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function fe(M, O) {
      return M === "symbol" ? !0 : O ? O["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && O instanceof Symbol : !1;
    }
    function se(M) {
      var O = typeof M;
      return Array.isArray(M) ? "array" : M instanceof RegExp ? "object" : fe(O, M) ? "symbol" : O;
    }
    function Ee(M) {
      if (typeof M > "u" || M === null)
        return "" + M;
      var O = se(M);
      if (O === "object") {
        if (M instanceof Date)
          return "date";
        if (M instanceof RegExp)
          return "regexp";
      }
      return O;
    }
    function de(M) {
      var O = Ee(M);
      switch (O) {
        case "array":
        case "object":
          return "an " + O;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + O;
        default:
          return O;
      }
    }
    function Re(M) {
      return !M.constructor || !M.constructor.name ? y : M.constructor.name;
    }
    return E.checkPropTypes = o, E.resetWarningCache = o.resetWarningCache, E.PropTypes = E, E;
  }, Ot;
}
var jt, jn;
function Li() {
  if (jn)
    return jt;
  jn = 1;
  var e = Ft();
  function r() {
  }
  function t() {
  }
  return t.resetWarningCache = r, jt = function() {
    function n(a, c, u, f, d, p) {
      if (p !== e) {
        var y = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw y.name = "Invariant Violation", y;
      }
    }
    n.isRequired = n;
    function o() {
      return n;
    }
    var i = {
      array: n,
      bigint: n,
      bool: n,
      func: n,
      number: n,
      object: n,
      string: n,
      symbol: n,
      any: n,
      arrayOf: o,
      element: n,
      elementType: n,
      instanceOf: o,
      node: n,
      objectOf: o,
      oneOf: o,
      oneOfType: o,
      shape: o,
      exact: o,
      checkPropTypes: t,
      resetWarningCache: r
    };
    return i.PropTypes = i, i;
  }, jt;
}
if (process.env.NODE_ENV !== "production") {
  var $i = bo(), ki = !0;
  At.exports = Pi()($i.isElement, ki);
} else
  At.exports = Li()();
var zi = At.exports;
const b = /* @__PURE__ */ yi(zi);
function Yi(e) {
  const {
    prototype: r = {}
  } = e;
  return !!r.isReactComponent;
}
function Ui(e, r, t, n, o) {
  const i = e[r], a = o || r;
  if (i == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window > "u")
    return null;
  let c;
  return typeof i == "function" && !Yi(i) && (c = "Did you accidentally provide a plain function component instead?"), c !== void 0 ? new Error(`Invalid ${n} \`${a}\` supplied to \`${t}\`. Expected an element type that can hold a ref. ${c} For more information see https://mui.com/r/caveat-with-refs-guide`) : null;
}
const Fi = Ri(b.elementType, Ui);
function lr(e) {
  let r = "https://mui.com/production-error/?code=" + e;
  for (let t = 1; t < arguments.length; t += 1)
    r += "&args[]=" + encodeURIComponent(arguments[t]);
  return "Minified MUI error #" + e + "; visit " + r + " for the full message.";
}
var Dt = { exports: {} }, Z = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var _n;
function Vi() {
  if (_n)
    return Z;
  _n = 1;
  var e = Symbol.for("react.element"), r = Symbol.for("react.portal"), t = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), a = Symbol.for("react.context"), c = Symbol.for("react.server_context"), u = Symbol.for("react.forward_ref"), f = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), E = Symbol.for("react.offscreen"), v;
  v = Symbol.for("react.module.reference");
  function m(h) {
    if (typeof h == "object" && h !== null) {
      var S = h.$$typeof;
      switch (S) {
        case e:
          switch (h = h.type, h) {
            case t:
            case o:
            case n:
            case f:
            case d:
              return h;
            default:
              switch (h = h && h.$$typeof, h) {
                case c:
                case a:
                case u:
                case y:
                case p:
                case i:
                  return h;
                default:
                  return S;
              }
          }
        case r:
          return S;
      }
    }
  }
  return Z.ContextConsumer = a, Z.ContextProvider = i, Z.Element = e, Z.ForwardRef = u, Z.Fragment = t, Z.Lazy = y, Z.Memo = p, Z.Portal = r, Z.Profiler = o, Z.StrictMode = n, Z.Suspense = f, Z.SuspenseList = d, Z.isAsyncMode = function() {
    return !1;
  }, Z.isConcurrentMode = function() {
    return !1;
  }, Z.isContextConsumer = function(h) {
    return m(h) === a;
  }, Z.isContextProvider = function(h) {
    return m(h) === i;
  }, Z.isElement = function(h) {
    return typeof h == "object" && h !== null && h.$$typeof === e;
  }, Z.isForwardRef = function(h) {
    return m(h) === u;
  }, Z.isFragment = function(h) {
    return m(h) === t;
  }, Z.isLazy = function(h) {
    return m(h) === y;
  }, Z.isMemo = function(h) {
    return m(h) === p;
  }, Z.isPortal = function(h) {
    return m(h) === r;
  }, Z.isProfiler = function(h) {
    return m(h) === o;
  }, Z.isStrictMode = function(h) {
    return m(h) === n;
  }, Z.isSuspense = function(h) {
    return m(h) === f;
  }, Z.isSuspenseList = function(h) {
    return m(h) === d;
  }, Z.isValidElementType = function(h) {
    return typeof h == "string" || typeof h == "function" || h === t || h === o || h === n || h === f || h === d || h === E || typeof h == "object" && h !== null && (h.$$typeof === y || h.$$typeof === p || h.$$typeof === i || h.$$typeof === a || h.$$typeof === u || h.$$typeof === v || h.getModuleId !== void 0);
  }, Z.typeOf = m, Z;
}
var ee = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Rn;
function Wi() {
  return Rn || (Rn = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), r = Symbol.for("react.portal"), t = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), a = Symbol.for("react.context"), c = Symbol.for("react.server_context"), u = Symbol.for("react.forward_ref"), f = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), E = Symbol.for("react.offscreen"), v = !1, m = !1, h = !1, S = !1, j = !1, C;
    C = Symbol.for("react.module.reference");
    function x(_) {
      return !!(typeof _ == "string" || typeof _ == "function" || _ === t || _ === o || j || _ === n || _ === f || _ === d || S || _ === E || v || m || h || typeof _ == "object" && _ !== null && (_.$$typeof === y || _.$$typeof === p || _.$$typeof === i || _.$$typeof === a || _.$$typeof === u || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      _.$$typeof === C || _.getModuleId !== void 0));
    }
    function l(_) {
      if (typeof _ == "object" && _ !== null) {
        var Ne = _.$$typeof;
        switch (Ne) {
          case e:
            var $e = _.type;
            switch ($e) {
              case t:
              case o:
              case n:
              case f:
              case d:
                return $e;
              default:
                var Ke = $e && $e.$$typeof;
                switch (Ke) {
                  case c:
                  case a:
                  case u:
                  case y:
                  case p:
                  case i:
                    return Ke;
                  default:
                    return Ne;
                }
            }
          case r:
            return Ne;
        }
      }
    }
    var w = a, A = i, me = e, le = u, D = t, ae = y, ye = p, oe = r, ie = o, fe = n, se = f, Ee = d, de = !1, Re = !1;
    function M(_) {
      return de || (de = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function O(_) {
      return Re || (Re = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function F(_) {
      return l(_) === a;
    }
    function Y(_) {
      return l(_) === i;
    }
    function I(_) {
      return typeof _ == "object" && _ !== null && _.$$typeof === e;
    }
    function V(_) {
      return l(_) === u;
    }
    function P(_) {
      return l(_) === t;
    }
    function k(_) {
      return l(_) === y;
    }
    function U(_) {
      return l(_) === p;
    }
    function $(_) {
      return l(_) === r;
    }
    function W(_) {
      return l(_) === o;
    }
    function he(_) {
      return l(_) === n;
    }
    function g(_) {
      return l(_) === f;
    }
    function Me(_) {
      return l(_) === d;
    }
    ee.ContextConsumer = w, ee.ContextProvider = A, ee.Element = me, ee.ForwardRef = le, ee.Fragment = D, ee.Lazy = ae, ee.Memo = ye, ee.Portal = oe, ee.Profiler = ie, ee.StrictMode = fe, ee.Suspense = se, ee.SuspenseList = Ee, ee.isAsyncMode = M, ee.isConcurrentMode = O, ee.isContextConsumer = F, ee.isContextProvider = Y, ee.isElement = I, ee.isForwardRef = V, ee.isFragment = P, ee.isLazy = k, ee.isMemo = U, ee.isPortal = $, ee.isProfiler = W, ee.isStrictMode = he, ee.isSuspense = g, ee.isSuspenseList = Me, ee.isValidElementType = x, ee.typeOf = l;
  }()), ee;
}
process.env.NODE_ENV === "production" ? Dt.exports = Vi() : Dt.exports = Wi();
var wn = Dt.exports;
const Bi = /^\s*function(?:\s|\s*\/\*.*\*\/\s*)+([^(\s/]*)\s*/;
function qi(e) {
  const r = `${e}`.match(Bi);
  return r && r[1] || "";
}
function Mo(e, r = "") {
  return e.displayName || e.name || qi(e) || r;
}
function In(e, r, t) {
  const n = Mo(r);
  return e.displayName || (n !== "" ? `${t}(${n})` : t);
}
function Gi(e) {
  if (e != null) {
    if (typeof e == "string")
      return e;
    if (typeof e == "function")
      return Mo(e, "Component");
    if (typeof e == "object")
      switch (e.$$typeof) {
        case wn.ForwardRef:
          return In(e, e.render, "ForwardRef");
        case wn.Memo:
          return In(e, e.type, "memo");
        default:
          return;
      }
  }
}
const Qi = b.oneOfType([b.func, b.object]), Ki = Qi;
function je(e) {
  if (typeof e != "string")
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `capitalize(string)` expects a string argument." : lr(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function Hi(e, r) {
  typeof e == "function" ? e(r) : e && (e.current = r);
}
const Xi = typeof window < "u" ? R.useLayoutEffect : R.useEffect, Ji = Xi;
function Ur(e) {
  const r = R.useRef(e);
  return Ji(() => {
    r.current = e;
  }), R.useCallback((...t) => (
    // @ts-expect-error hide `this`
    // tslint:disable-next-line:ban-comma-operator
    (0, r.current)(...t)
  ), []);
}
function An(...e) {
  return R.useMemo(() => e.every((r) => r == null) ? null : (r) => {
    e.forEach((t) => {
      Hi(t, r);
    });
  }, e);
}
let et = !0, Pt = !1, Dn;
const Zi = {
  text: !0,
  search: !0,
  url: !0,
  tel: !0,
  email: !0,
  password: !0,
  number: !0,
  date: !0,
  month: !0,
  week: !0,
  time: !0,
  datetime: !0,
  "datetime-local": !0
};
function ea(e) {
  const {
    type: r,
    tagName: t
  } = e;
  return !!(t === "INPUT" && Zi[r] && !e.readOnly || t === "TEXTAREA" && !e.readOnly || e.isContentEditable);
}
function ra(e) {
  e.metaKey || e.altKey || e.ctrlKey || (et = !0);
}
function _t() {
  et = !1;
}
function ta() {
  this.visibilityState === "hidden" && Pt && (et = !0);
}
function na(e) {
  e.addEventListener("keydown", ra, !0), e.addEventListener("mousedown", _t, !0), e.addEventListener("pointerdown", _t, !0), e.addEventListener("touchstart", _t, !0), e.addEventListener("visibilitychange", ta, !0);
}
function oa(e) {
  const {
    target: r
  } = e;
  try {
    return r.matches(":focus-visible");
  } catch {
  }
  return et || ea(r);
}
function ia() {
  const e = R.useCallback((o) => {
    o != null && na(o.ownerDocument);
  }, []), r = R.useRef(!1);
  function t() {
    return r.current ? (Pt = !0, window.clearTimeout(Dn), Dn = window.setTimeout(() => {
      Pt = !1;
    }, 100), r.current = !1, !0) : !1;
  }
  function n(o) {
    return oa(o) ? (r.current = !0, !0) : !1;
  }
  return {
    isFocusVisibleRef: r,
    onFocus: n,
    onBlur: t,
    ref: e
  };
}
function Vt(e, r) {
  const t = L({}, r);
  return Object.keys(e).forEach((n) => {
    if (n.toString().match(/^(components|slots)$/))
      t[n] = L({}, e[n], t[n]);
    else if (n.toString().match(/^(componentsProps|slotProps)$/)) {
      const o = e[n] || {}, i = r[n];
      t[n] = {}, !i || !Object.keys(i) ? t[n] = o : !o || !Object.keys(o) ? t[n] = i : (t[n] = L({}, i), Object.keys(o).forEach((a) => {
        t[n][a] = Vt(o[a], i[a]);
      }));
    } else
      t[n] === void 0 && (t[n] = e[n]);
  }), t;
}
function To(e, r, t = void 0) {
  const n = {};
  return Object.keys(e).forEach(
    // `Objet.keys(slots)` can't be wider than `T` because we infer `T` from `slots`.
    // @ts-expect-error https://github.com/microsoft/TypeScript/pull/12253#issuecomment-263132208
    (o) => {
      n[o] = e[o].reduce((i, a) => {
        if (a) {
          const c = r(a);
          c !== "" && i.push(c), t && t[a] && i.push(t[a]);
        }
        return i;
      }, []).join(" ");
    }
  ), n;
}
const Pn = (e) => e, aa = () => {
  let e = Pn;
  return {
    configure(r) {
      e = r;
    },
    generate(r) {
      return e(r);
    },
    reset() {
      e = Pn;
    }
  };
}, sa = aa(), ca = sa, ua = {
  active: "active",
  checked: "checked",
  completed: "completed",
  disabled: "disabled",
  readOnly: "readOnly",
  error: "error",
  expanded: "expanded",
  focused: "focused",
  focusVisible: "focusVisible",
  required: "required",
  selected: "selected"
};
function rt(e, r, t = "Mui") {
  const n = ua[r];
  return n ? `${t}-${n}` : `${ca.generate(e)}-${r}`;
}
function Wt(e, r, t = "Mui") {
  const n = {};
  return r.forEach((o) => {
    n[o] = rt(e, o, t);
  }), n;
}
const xo = "$$material";
function Le(e, r) {
  if (e == null)
    return {};
  var t = {}, n = Object.keys(e), o, i;
  for (i = 0; i < n.length; i++)
    o = n[i], !(r.indexOf(o) >= 0) && (t[o] = e[o]);
  return t;
}
function So(e) {
  var r = /* @__PURE__ */ Object.create(null);
  return function(t) {
    return r[t] === void 0 && (r[t] = e(t)), r[t];
  };
}
var la = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, fa = /* @__PURE__ */ So(
  function(e) {
    return la.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
);
function da(e) {
  if (e.sheet)
    return e.sheet;
  for (var r = 0; r < document.styleSheets.length; r++)
    if (document.styleSheets[r].ownerNode === e)
      return document.styleSheets[r];
}
function pa(e) {
  var r = document.createElement("style");
  return r.setAttribute("data-emotion", e.key), e.nonce !== void 0 && r.setAttribute("nonce", e.nonce), r.appendChild(document.createTextNode("")), r.setAttribute("data-s", ""), r;
}
var ma = /* @__PURE__ */ function() {
  function e(t) {
    var n = this;
    this._insertTag = function(o) {
      var i;
      n.tags.length === 0 ? n.insertionPoint ? i = n.insertionPoint.nextSibling : n.prepend ? i = n.container.firstChild : i = n.before : i = n.tags[n.tags.length - 1].nextSibling, n.container.insertBefore(o, i), n.tags.push(o);
    }, this.isSpeedy = t.speedy === void 0 ? process.env.NODE_ENV === "production" : t.speedy, this.tags = [], this.ctr = 0, this.nonce = t.nonce, this.key = t.key, this.container = t.container, this.prepend = t.prepend, this.insertionPoint = t.insertionPoint, this.before = null;
  }
  var r = e.prototype;
  return r.hydrate = function(n) {
    n.forEach(this._insertTag);
  }, r.insert = function(n) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(pa(this));
    var o = this.tags[this.tags.length - 1];
    if (process.env.NODE_ENV !== "production") {
      var i = n.charCodeAt(0) === 64 && n.charCodeAt(1) === 105;
      i && this._alreadyInsertedOrderInsensitiveRule && console.error(`You're attempting to insert the following rule:
` + n + "\n\n`@import` rules must be before all other types of rules in a stylesheet but other rules have already been inserted. Please ensure that `@import` rules are before all other rules."), this._alreadyInsertedOrderInsensitiveRule = this._alreadyInsertedOrderInsensitiveRule || !i;
    }
    if (this.isSpeedy) {
      var a = da(o);
      try {
        a.insertRule(n, a.cssRules.length);
      } catch (c) {
        process.env.NODE_ENV !== "production" && !/:(-moz-placeholder|-moz-focus-inner|-moz-focusring|-ms-input-placeholder|-moz-read-write|-moz-read-only|-ms-clear|-ms-expand|-ms-reveal){/.test(n) && console.error('There was a problem inserting the following rule: "' + n + '"', c);
      }
    } else
      o.appendChild(document.createTextNode(n));
    this.ctr++;
  }, r.flush = function() {
    this.tags.forEach(function(n) {
      return n.parentNode && n.parentNode.removeChild(n);
    }), this.tags = [], this.ctr = 0, process.env.NODE_ENV !== "production" && (this._alreadyInsertedOrderInsensitiveRule = !1);
  }, e;
}(), Ce = "-ms-", Xr = "-moz-", K = "-webkit-", Bt = "comm", qt = "rule", Gt = "decl", ya = "@import", No = "@keyframes", ha = "@layer", ga = Math.abs, tt = String.fromCharCode, va = Object.assign;
function ba(e, r) {
  return Se(e, 0) ^ 45 ? (((r << 2 ^ Se(e, 0)) << 2 ^ Se(e, 1)) << 2 ^ Se(e, 2)) << 2 ^ Se(e, 3) : 0;
}
function Co(e) {
  return e.trim();
}
function Ea(e, r) {
  return (e = r.exec(e)) ? e[0] : e;
}
function H(e, r, t) {
  return e.replace(r, t);
}
function Lt(e, r) {
  return e.indexOf(r);
}
function Se(e, r) {
  return e.charCodeAt(r) | 0;
}
function Rr(e, r, t) {
  return e.slice(r, t);
}
function ze(e) {
  return e.length;
}
function Qt(e) {
  return e.length;
}
function Fr(e, r) {
  return r.push(e), e;
}
function Ma(e, r) {
  return e.map(r).join("");
}
var nt = 1, fr = 1, Oo = 0, _e = 0, xe = 0, pr = "";
function ot(e, r, t, n, o, i, a) {
  return { value: e, root: r, parent: t, type: n, props: o, children: i, line: nt, column: fr, length: a, return: "" };
}
function Nr(e, r) {
  return va(ot("", null, null, "", null, null, 0), e, { length: -e.length }, r);
}
function Ta() {
  return xe;
}
function xa() {
  return xe = _e > 0 ? Se(pr, --_e) : 0, fr--, xe === 10 && (fr = 1, nt--), xe;
}
function Ie() {
  return xe = _e < Oo ? Se(pr, _e++) : 0, fr++, xe === 10 && (fr = 1, nt++), xe;
}
function Ue() {
  return Se(pr, _e);
}
function Gr() {
  return _e;
}
function Ar(e, r) {
  return Rr(pr, e, r);
}
function wr(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function jo(e) {
  return nt = fr = 1, Oo = ze(pr = e), _e = 0, [];
}
function _o(e) {
  return pr = "", e;
}
function Qr(e) {
  return Co(Ar(_e - 1, $t(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function Sa(e) {
  for (; (xe = Ue()) && xe < 33; )
    Ie();
  return wr(e) > 2 || wr(xe) > 3 ? "" : " ";
}
function Na(e, r) {
  for (; --r && Ie() && !(xe < 48 || xe > 102 || xe > 57 && xe < 65 || xe > 70 && xe < 97); )
    ;
  return Ar(e, Gr() + (r < 6 && Ue() == 32 && Ie() == 32));
}
function $t(e) {
  for (; Ie(); )
    switch (xe) {
      case e:
        return _e;
      case 34:
      case 39:
        e !== 34 && e !== 39 && $t(xe);
        break;
      case 40:
        e === 41 && $t(e);
        break;
      case 92:
        Ie();
        break;
    }
  return _e;
}
function Ca(e, r) {
  for (; Ie() && e + xe !== 47 + 10; )
    if (e + xe === 42 + 42 && Ue() === 47)
      break;
  return "/*" + Ar(r, _e - 1) + "*" + tt(e === 47 ? e : Ie());
}
function Oa(e) {
  for (; !wr(Ue()); )
    Ie();
  return Ar(e, _e);
}
function ja(e) {
  return _o(Kr("", null, null, null, [""], e = jo(e), 0, [0], e));
}
function Kr(e, r, t, n, o, i, a, c, u) {
  for (var f = 0, d = 0, p = a, y = 0, E = 0, v = 0, m = 1, h = 1, S = 1, j = 0, C = "", x = o, l = i, w = n, A = C; h; )
    switch (v = j, j = Ie()) {
      case 40:
        if (v != 108 && Se(A, p - 1) == 58) {
          Lt(A += H(Qr(j), "&", "&\f"), "&\f") != -1 && (S = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        A += Qr(j);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        A += Sa(v);
        break;
      case 92:
        A += Na(Gr() - 1, 7);
        continue;
      case 47:
        switch (Ue()) {
          case 42:
          case 47:
            Fr(_a(Ca(Ie(), Gr()), r, t), u);
            break;
          default:
            A += "/";
        }
        break;
      case 123 * m:
        c[f++] = ze(A) * S;
      case 125 * m:
      case 59:
      case 0:
        switch (j) {
          case 0:
          case 125:
            h = 0;
          case 59 + d:
            S == -1 && (A = H(A, /\f/g, "")), E > 0 && ze(A) - p && Fr(E > 32 ? $n(A + ";", n, t, p - 1) : $n(H(A, " ", "") + ";", n, t, p - 2), u);
            break;
          case 59:
            A += ";";
          default:
            if (Fr(w = Ln(A, r, t, f, d, o, c, C, x = [], l = [], p), i), j === 123)
              if (d === 0)
                Kr(A, r, w, w, x, i, p, c, l);
              else
                switch (y === 99 && Se(A, 3) === 110 ? 100 : y) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Kr(e, w, w, n && Fr(Ln(e, w, w, 0, 0, o, c, C, o, x = [], p), l), o, l, p, c, n ? x : l);
                    break;
                  default:
                    Kr(A, w, w, w, [""], l, 0, c, l);
                }
        }
        f = d = E = 0, m = S = 1, C = A = "", p = a;
        break;
      case 58:
        p = 1 + ze(A), E = v;
      default:
        if (m < 1) {
          if (j == 123)
            --m;
          else if (j == 125 && m++ == 0 && xa() == 125)
            continue;
        }
        switch (A += tt(j), j * m) {
          case 38:
            S = d > 0 ? 1 : (A += "\f", -1);
            break;
          case 44:
            c[f++] = (ze(A) - 1) * S, S = 1;
            break;
          case 64:
            Ue() === 45 && (A += Qr(Ie())), y = Ue(), d = p = ze(C = A += Oa(Gr())), j++;
            break;
          case 45:
            v === 45 && ze(A) == 2 && (m = 0);
        }
    }
  return i;
}
function Ln(e, r, t, n, o, i, a, c, u, f, d) {
  for (var p = o - 1, y = o === 0 ? i : [""], E = Qt(y), v = 0, m = 0, h = 0; v < n; ++v)
    for (var S = 0, j = Rr(e, p + 1, p = ga(m = a[v])), C = e; S < E; ++S)
      (C = Co(m > 0 ? y[S] + " " + j : H(j, /&\f/g, y[S]))) && (u[h++] = C);
  return ot(e, r, t, o === 0 ? qt : c, u, f, d);
}
function _a(e, r, t) {
  return ot(e, r, t, Bt, tt(Ta()), Rr(e, 2, -2), 0);
}
function $n(e, r, t, n) {
  return ot(e, r, t, Gt, Rr(e, 0, n), Rr(e, n + 1, -1), n);
}
function cr(e, r) {
  for (var t = "", n = Qt(e), o = 0; o < n; o++)
    t += r(e[o], o, e, r) || "";
  return t;
}
function Ra(e, r, t, n) {
  switch (e.type) {
    case ha:
      if (e.children.length)
        break;
    case ya:
    case Gt:
      return e.return = e.return || e.value;
    case Bt:
      return "";
    case No:
      return e.return = e.value + "{" + cr(e.children, n) + "}";
    case qt:
      e.value = e.props.join(",");
  }
  return ze(t = cr(e.children, n)) ? e.return = e.value + "{" + t + "}" : "";
}
function wa(e) {
  var r = Qt(e);
  return function(t, n, o, i) {
    for (var a = "", c = 0; c < r; c++)
      a += e[c](t, n, o, i) || "";
    return a;
  };
}
function Ia(e) {
  return function(r) {
    r.root || (r = r.return) && e(r);
  };
}
var Aa = function(r, t, n) {
  for (var o = 0, i = 0; o = i, i = Ue(), o === 38 && i === 12 && (t[n] = 1), !wr(i); )
    Ie();
  return Ar(r, _e);
}, Da = function(r, t) {
  var n = -1, o = 44;
  do
    switch (wr(o)) {
      case 0:
        o === 38 && Ue() === 12 && (t[n] = 1), r[n] += Aa(_e - 1, t, n);
        break;
      case 2:
        r[n] += Qr(o);
        break;
      case 4:
        if (o === 44) {
          r[++n] = Ue() === 58 ? "&\f" : "", t[n] = r[n].length;
          break;
        }
      default:
        r[n] += tt(o);
    }
  while (o = Ie());
  return r;
}, Pa = function(r, t) {
  return _o(Da(jo(r), t));
}, kn = /* @__PURE__ */ new WeakMap(), La = function(r) {
  if (!(r.type !== "rule" || !r.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  r.length < 1)) {
    for (var t = r.value, n = r.parent, o = r.column === n.column && r.line === n.line; n.type !== "rule"; )
      if (n = n.parent, !n)
        return;
    if (!(r.props.length === 1 && t.charCodeAt(0) !== 58 && !kn.get(n)) && !o) {
      kn.set(r, !0);
      for (var i = [], a = Pa(t, i), c = n.props, u = 0, f = 0; u < a.length; u++)
        for (var d = 0; d < c.length; d++, f++)
          r.props[f] = i[u] ? a[u].replace(/&\f/g, c[d]) : c[d] + " " + a[u];
    }
  }
}, $a = function(r) {
  if (r.type === "decl") {
    var t = r.value;
    // charcode for l
    t.charCodeAt(0) === 108 && // charcode for b
    t.charCodeAt(2) === 98 && (r.return = "", r.value = "");
  }
}, ka = "emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason", za = function(r) {
  return r.type === "comm" && r.children.indexOf(ka) > -1;
}, Ya = function(r) {
  return function(t, n, o) {
    if (!(t.type !== "rule" || r.compat)) {
      var i = t.value.match(/(:first|:nth|:nth-last)-child/g);
      if (i) {
        for (var a = !!t.parent, c = a ? t.parent.children : (
          // global rule at the root level
          o
        ), u = c.length - 1; u >= 0; u--) {
          var f = c[u];
          if (f.line < t.line)
            break;
          if (f.column < t.column) {
            if (za(f))
              return;
            break;
          }
        }
        i.forEach(function(d) {
          console.error('The pseudo class "' + d + '" is potentially unsafe when doing server-side rendering. Try changing it to "' + d.split("-child")[0] + '-of-type".');
        });
      }
    }
  };
}, Ro = function(r) {
  return r.type.charCodeAt(1) === 105 && r.type.charCodeAt(0) === 64;
}, Ua = function(r, t) {
  for (var n = r - 1; n >= 0; n--)
    if (!Ro(t[n]))
      return !0;
  return !1;
}, zn = function(r) {
  r.type = "", r.value = "", r.return = "", r.children = "", r.props = "";
}, Fa = function(r, t, n) {
  Ro(r) && (r.parent ? (console.error("`@import` rules can't be nested inside other rules. Please move it to the top level and put it before regular rules. Keep in mind that they can only be used within global styles."), zn(r)) : Ua(t, n) && (console.error("`@import` rules can't be after other rules. Please put your `@import` rules before your other rules."), zn(r)));
};
function wo(e, r) {
  switch (ba(e, r)) {
    case 5103:
      return K + "print-" + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return K + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return K + e + Xr + e + Ce + e + e;
    case 6828:
    case 4268:
      return K + e + Ce + e + e;
    case 6165:
      return K + e + Ce + "flex-" + e + e;
    case 5187:
      return K + e + H(e, /(\w+).+(:[^]+)/, K + "box-$1$2" + Ce + "flex-$1$2") + e;
    case 5443:
      return K + e + Ce + "flex-item-" + H(e, /flex-|-self/, "") + e;
    case 4675:
      return K + e + Ce + "flex-line-pack" + H(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return K + e + Ce + H(e, "shrink", "negative") + e;
    case 5292:
      return K + e + Ce + H(e, "basis", "preferred-size") + e;
    case 6060:
      return K + "box-" + H(e, "-grow", "") + K + e + Ce + H(e, "grow", "positive") + e;
    case 4554:
      return K + H(e, /([^-])(transform)/g, "$1" + K + "$2") + e;
    case 6187:
      return H(H(H(e, /(zoom-|grab)/, K + "$1"), /(image-set)/, K + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return H(e, /(image-set\([^]*)/, K + "$1$`$1");
    case 4968:
      return H(H(e, /(.+:)(flex-)?(.*)/, K + "box-pack:$3" + Ce + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + K + e + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return H(e, /(.+)-inline(.+)/, K + "$1$2") + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (ze(e) - 1 - r > 6)
        switch (Se(e, r + 1)) {
          case 109:
            if (Se(e, r + 4) !== 45)
              break;
          case 102:
            return H(e, /(.+:)(.+)-([^]+)/, "$1" + K + "$2-$3$1" + Xr + (Se(e, r + 3) == 108 ? "$3" : "$2-$3")) + e;
          case 115:
            return ~Lt(e, "stretch") ? wo(H(e, "stretch", "fill-available"), r) + e : e;
        }
      break;
    case 4949:
      if (Se(e, r + 1) !== 115)
        break;
    case 6444:
      switch (Se(e, ze(e) - 3 - (~Lt(e, "!important") && 10))) {
        case 107:
          return H(e, ":", ":" + K) + e;
        case 101:
          return H(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + K + (Se(e, 14) === 45 ? "inline-" : "") + "box$3$1" + K + "$2$3$1" + Ce + "$2box$3") + e;
      }
      break;
    case 5936:
      switch (Se(e, r + 11)) {
        case 114:
          return K + e + Ce + H(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return K + e + Ce + H(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return K + e + Ce + H(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return K + e + Ce + e + e;
  }
  return e;
}
var Va = function(r, t, n, o) {
  if (r.length > -1 && !r.return)
    switch (r.type) {
      case Gt:
        r.return = wo(r.value, r.length);
        break;
      case No:
        return cr([Nr(r, {
          value: H(r.value, "@", "@" + K)
        })], o);
      case qt:
        if (r.length)
          return Ma(r.props, function(i) {
            switch (Ea(i, /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                return cr([Nr(r, {
                  props: [H(i, /:(read-\w+)/, ":" + Xr + "$1")]
                })], o);
              case "::placeholder":
                return cr([Nr(r, {
                  props: [H(i, /:(plac\w+)/, ":" + K + "input-$1")]
                }), Nr(r, {
                  props: [H(i, /:(plac\w+)/, ":" + Xr + "$1")]
                }), Nr(r, {
                  props: [H(i, /:(plac\w+)/, Ce + "input-$1")]
                })], o);
            }
            return "";
          });
    }
}, Wa = [Va], Ba = function(r) {
  var t = r.key;
  if (process.env.NODE_ENV !== "production" && !t)
    throw new Error(`You have to configure \`key\` for your cache. Please make sure it's unique (and not equal to 'css') as it's used for linking styles to your cache.
If multiple caches share the same key they might "fight" for each other's style elements.`);
  if (t === "css") {
    var n = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(n, function(m) {
      var h = m.getAttribute("data-emotion");
      h.indexOf(" ") !== -1 && (document.head.appendChild(m), m.setAttribute("data-s", ""));
    });
  }
  var o = r.stylisPlugins || Wa;
  if (process.env.NODE_ENV !== "production" && /[^a-z-]/.test(t))
    throw new Error('Emotion key must only contain lower case alphabetical characters and - but "' + t + '" was passed');
  var i = {}, a, c = [];
  a = r.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + t + ' "]'),
    function(m) {
      for (var h = m.getAttribute("data-emotion").split(" "), S = 1; S < h.length; S++)
        i[h[S]] = !0;
      c.push(m);
    }
  );
  var u, f = [La, $a];
  process.env.NODE_ENV !== "production" && f.push(Ya({
    get compat() {
      return v.compat;
    }
  }), Fa);
  {
    var d, p = [Ra, process.env.NODE_ENV !== "production" ? function(m) {
      m.root || (m.return ? d.insert(m.return) : m.value && m.type !== Bt && d.insert(m.value + "{}"));
    } : Ia(function(m) {
      d.insert(m);
    })], y = wa(f.concat(o, p)), E = function(h) {
      return cr(ja(h), y);
    };
    u = function(h, S, j, C) {
      d = j, process.env.NODE_ENV !== "production" && S.map !== void 0 && (d = {
        insert: function(l) {
          j.insert(l + S.map);
        }
      }), E(h ? h + "{" + S.styles + "}" : S.styles), C && (v.inserted[S.name] = !0);
    };
  }
  var v = {
    key: t,
    sheet: new ma({
      key: t,
      container: a,
      nonce: r.nonce,
      speedy: r.speedy,
      prepend: r.prepend,
      insertionPoint: r.insertionPoint
    }),
    nonce: r.nonce,
    inserted: i,
    registered: {},
    insert: u
  };
  return v.sheet.hydrate(c), v;
}, kt = { exports: {} }, re = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Yn;
function qa() {
  if (Yn)
    return re;
  Yn = 1;
  var e = typeof Symbol == "function" && Symbol.for, r = e ? Symbol.for("react.element") : 60103, t = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, u = e ? Symbol.for("react.async_mode") : 60111, f = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, p = e ? Symbol.for("react.suspense") : 60113, y = e ? Symbol.for("react.suspense_list") : 60120, E = e ? Symbol.for("react.memo") : 60115, v = e ? Symbol.for("react.lazy") : 60116, m = e ? Symbol.for("react.block") : 60121, h = e ? Symbol.for("react.fundamental") : 60117, S = e ? Symbol.for("react.responder") : 60118, j = e ? Symbol.for("react.scope") : 60119;
  function C(l) {
    if (typeof l == "object" && l !== null) {
      var w = l.$$typeof;
      switch (w) {
        case r:
          switch (l = l.type, l) {
            case u:
            case f:
            case n:
            case i:
            case o:
            case p:
              return l;
            default:
              switch (l = l && l.$$typeof, l) {
                case c:
                case d:
                case v:
                case E:
                case a:
                  return l;
                default:
                  return w;
              }
          }
        case t:
          return w;
      }
    }
  }
  function x(l) {
    return C(l) === f;
  }
  return re.AsyncMode = u, re.ConcurrentMode = f, re.ContextConsumer = c, re.ContextProvider = a, re.Element = r, re.ForwardRef = d, re.Fragment = n, re.Lazy = v, re.Memo = E, re.Portal = t, re.Profiler = i, re.StrictMode = o, re.Suspense = p, re.isAsyncMode = function(l) {
    return x(l) || C(l) === u;
  }, re.isConcurrentMode = x, re.isContextConsumer = function(l) {
    return C(l) === c;
  }, re.isContextProvider = function(l) {
    return C(l) === a;
  }, re.isElement = function(l) {
    return typeof l == "object" && l !== null && l.$$typeof === r;
  }, re.isForwardRef = function(l) {
    return C(l) === d;
  }, re.isFragment = function(l) {
    return C(l) === n;
  }, re.isLazy = function(l) {
    return C(l) === v;
  }, re.isMemo = function(l) {
    return C(l) === E;
  }, re.isPortal = function(l) {
    return C(l) === t;
  }, re.isProfiler = function(l) {
    return C(l) === i;
  }, re.isStrictMode = function(l) {
    return C(l) === o;
  }, re.isSuspense = function(l) {
    return C(l) === p;
  }, re.isValidElementType = function(l) {
    return typeof l == "string" || typeof l == "function" || l === n || l === f || l === i || l === o || l === p || l === y || typeof l == "object" && l !== null && (l.$$typeof === v || l.$$typeof === E || l.$$typeof === a || l.$$typeof === c || l.$$typeof === d || l.$$typeof === h || l.$$typeof === S || l.$$typeof === j || l.$$typeof === m);
  }, re.typeOf = C, re;
}
var te = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Un;
function Ga() {
  return Un || (Un = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, r = e ? Symbol.for("react.element") : 60103, t = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, u = e ? Symbol.for("react.async_mode") : 60111, f = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, p = e ? Symbol.for("react.suspense") : 60113, y = e ? Symbol.for("react.suspense_list") : 60120, E = e ? Symbol.for("react.memo") : 60115, v = e ? Symbol.for("react.lazy") : 60116, m = e ? Symbol.for("react.block") : 60121, h = e ? Symbol.for("react.fundamental") : 60117, S = e ? Symbol.for("react.responder") : 60118, j = e ? Symbol.for("react.scope") : 60119;
    function C(g) {
      return typeof g == "string" || typeof g == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      g === n || g === f || g === i || g === o || g === p || g === y || typeof g == "object" && g !== null && (g.$$typeof === v || g.$$typeof === E || g.$$typeof === a || g.$$typeof === c || g.$$typeof === d || g.$$typeof === h || g.$$typeof === S || g.$$typeof === j || g.$$typeof === m);
    }
    function x(g) {
      if (typeof g == "object" && g !== null) {
        var Me = g.$$typeof;
        switch (Me) {
          case r:
            var _ = g.type;
            switch (_) {
              case u:
              case f:
              case n:
              case i:
              case o:
              case p:
                return _;
              default:
                var Ne = _ && _.$$typeof;
                switch (Ne) {
                  case c:
                  case d:
                  case v:
                  case E:
                  case a:
                    return Ne;
                  default:
                    return Me;
                }
            }
          case t:
            return Me;
        }
      }
    }
    var l = u, w = f, A = c, me = a, le = r, D = d, ae = n, ye = v, oe = E, ie = t, fe = i, se = o, Ee = p, de = !1;
    function Re(g) {
      return de || (de = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), M(g) || x(g) === u;
    }
    function M(g) {
      return x(g) === f;
    }
    function O(g) {
      return x(g) === c;
    }
    function F(g) {
      return x(g) === a;
    }
    function Y(g) {
      return typeof g == "object" && g !== null && g.$$typeof === r;
    }
    function I(g) {
      return x(g) === d;
    }
    function V(g) {
      return x(g) === n;
    }
    function P(g) {
      return x(g) === v;
    }
    function k(g) {
      return x(g) === E;
    }
    function U(g) {
      return x(g) === t;
    }
    function $(g) {
      return x(g) === i;
    }
    function W(g) {
      return x(g) === o;
    }
    function he(g) {
      return x(g) === p;
    }
    te.AsyncMode = l, te.ConcurrentMode = w, te.ContextConsumer = A, te.ContextProvider = me, te.Element = le, te.ForwardRef = D, te.Fragment = ae, te.Lazy = ye, te.Memo = oe, te.Portal = ie, te.Profiler = fe, te.StrictMode = se, te.Suspense = Ee, te.isAsyncMode = Re, te.isConcurrentMode = M, te.isContextConsumer = O, te.isContextProvider = F, te.isElement = Y, te.isForwardRef = I, te.isFragment = V, te.isLazy = P, te.isMemo = k, te.isPortal = U, te.isProfiler = $, te.isStrictMode = W, te.isSuspense = he, te.isValidElementType = C, te.typeOf = x;
  }()), te;
}
process.env.NODE_ENV === "production" ? kt.exports = qa() : kt.exports = Ga();
var Qa = kt.exports, Io = Qa, Ka = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, Ha = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, Ao = {};
Ao[Io.ForwardRef] = Ka;
Ao[Io.Memo] = Ha;
var Xa = !0;
function Kt(e, r, t) {
  var n = "";
  return t.split(" ").forEach(function(o) {
    e[o] !== void 0 ? r.push(e[o] + ";") : n += o + " ";
  }), n;
}
var it = function(r, t, n) {
  var o = r.key + "-" + t.name;
  // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (n === !1 || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  Xa === !1) && r.registered[o] === void 0 && (r.registered[o] = t.styles);
}, at = function(r, t, n) {
  it(r, t, n);
  var o = r.key + "-" + t.name;
  if (r.inserted[t.name] === void 0) {
    var i = t;
    do
      r.insert(t === i ? "." + o : "", i, r.sheet, !0), i = i.next;
    while (i !== void 0);
  }
};
function Ja(e) {
  for (var r = 0, t, n = 0, o = e.length; o >= 4; ++n, o -= 4)
    t = e.charCodeAt(n) & 255 | (e.charCodeAt(++n) & 255) << 8 | (e.charCodeAt(++n) & 255) << 16 | (e.charCodeAt(++n) & 255) << 24, t = /* Math.imul(k, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), t ^= /* k >>> r: */
    t >>> 24, r = /* Math.imul(k, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16);
  switch (o) {
    case 3:
      r ^= (e.charCodeAt(n + 2) & 255) << 16;
    case 2:
      r ^= (e.charCodeAt(n + 1) & 255) << 8;
    case 1:
      r ^= e.charCodeAt(n) & 255, r = /* Math.imul(h, m): */
      (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16);
  }
  return r ^= r >>> 13, r = /* Math.imul(h, m): */
  (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16), ((r ^ r >>> 15) >>> 0).toString(36);
}
var Za = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
}, Fn = `You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`, es = "You have passed in falsy value as style object's key (can happen when in example you pass unexported component as computed key).", rs = /[A-Z]|^ms/g, Do = /_EMO_([^_]+?)_([^]*?)_EMO_/g, Ht = function(r) {
  return r.charCodeAt(1) === 45;
}, Vn = function(r) {
  return r != null && typeof r != "boolean";
}, Rt = /* @__PURE__ */ So(function(e) {
  return Ht(e) ? e : e.replace(rs, "-$&").toLowerCase();
}), Jr = function(r, t) {
  switch (r) {
    case "animation":
    case "animationName":
      if (typeof t == "string")
        return t.replace(Do, function(n, o, i) {
          return ke = {
            name: o,
            styles: i,
            next: ke
          }, o;
        });
  }
  return Za[r] !== 1 && !Ht(r) && typeof t == "number" && t !== 0 ? t + "px" : t;
};
if (process.env.NODE_ENV !== "production") {
  var ts = /(var|attr|counters?|url|element|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/, ns = ["normal", "none", "initial", "inherit", "unset"], os = Jr, is = /^-ms-/, as = /-(.)/g, Wn = {};
  Jr = function(r, t) {
    if (r === "content" && (typeof t != "string" || ns.indexOf(t) === -1 && !ts.test(t) && (t.charAt(0) !== t.charAt(t.length - 1) || t.charAt(0) !== '"' && t.charAt(0) !== "'")))
      throw new Error("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"" + t + "\"'`");
    var n = os(r, t);
    return n !== "" && !Ht(r) && r.indexOf("-") !== -1 && Wn[r] === void 0 && (Wn[r] = !0, console.error("Using kebab-case for css properties in objects is not supported. Did you mean " + r.replace(is, "ms-").replace(as, function(o, i) {
      return i.toUpperCase();
    }) + "?")), n;
  };
}
var Po = "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
function Ir(e, r, t) {
  if (t == null)
    return "";
  if (t.__emotion_styles !== void 0) {
    if (process.env.NODE_ENV !== "production" && t.toString() === "NO_COMPONENT_SELECTOR")
      throw new Error(Po);
    return t;
  }
  switch (typeof t) {
    case "boolean":
      return "";
    case "object": {
      if (t.anim === 1)
        return ke = {
          name: t.name,
          styles: t.styles,
          next: ke
        }, t.name;
      if (t.styles !== void 0) {
        var n = t.next;
        if (n !== void 0)
          for (; n !== void 0; )
            ke = {
              name: n.name,
              styles: n.styles,
              next: ke
            }, n = n.next;
        var o = t.styles + ";";
        return process.env.NODE_ENV !== "production" && t.map !== void 0 && (o += t.map), o;
      }
      return ss(e, r, t);
    }
    case "function": {
      if (e !== void 0) {
        var i = ke, a = t(e);
        return ke = i, Ir(e, r, a);
      } else
        process.env.NODE_ENV !== "production" && console.error("Functions that are interpolated in css calls will be stringified.\nIf you want to have a css call based on props, create a function that returns a css call like this\nlet dynamicStyle = (props) => css`color: ${props.color}`\nIt can be called directly with props or interpolated in a styled call like this\nlet SomeComponent = styled('div')`${dynamicStyle}`");
      break;
    }
    case "string":
      if (process.env.NODE_ENV !== "production") {
        var c = [], u = t.replace(Do, function(d, p, y) {
          var E = "animation" + c.length;
          return c.push("const " + E + " = keyframes`" + y.replace(/^@keyframes animation-\w+/, "") + "`"), "${" + E + "}";
        });
        c.length && console.error("`keyframes` output got interpolated into plain string, please wrap it with `css`.\n\nInstead of doing this:\n\n" + [].concat(c, ["`" + u + "`"]).join(`
`) + `

You should wrap it with \`css\` like this:

` + ("css`" + u + "`"));
      }
      break;
  }
  if (r == null)
    return t;
  var f = r[t];
  return f !== void 0 ? f : t;
}
function ss(e, r, t) {
  var n = "";
  if (Array.isArray(t))
    for (var o = 0; o < t.length; o++)
      n += Ir(e, r, t[o]) + ";";
  else
    for (var i in t) {
      var a = t[i];
      if (typeof a != "object")
        r != null && r[a] !== void 0 ? n += i + "{" + r[a] + "}" : Vn(a) && (n += Rt(i) + ":" + Jr(i, a) + ";");
      else {
        if (i === "NO_COMPONENT_SELECTOR" && process.env.NODE_ENV !== "production")
          throw new Error(Po);
        if (Array.isArray(a) && typeof a[0] == "string" && (r == null || r[a[0]] === void 0))
          for (var c = 0; c < a.length; c++)
            Vn(a[c]) && (n += Rt(i) + ":" + Jr(i, a[c]) + ";");
        else {
          var u = Ir(e, r, a);
          switch (i) {
            case "animation":
            case "animationName": {
              n += Rt(i) + ":" + u + ";";
              break;
            }
            default:
              process.env.NODE_ENV !== "production" && i === "undefined" && console.error(es), n += i + "{" + u + "}";
          }
        }
      }
    }
  return n;
}
var Bn = /label:\s*([^\s;\n{]+)\s*(;|$)/g, Lo;
process.env.NODE_ENV !== "production" && (Lo = /\/\*#\ssourceMappingURL=data:application\/json;\S+\s+\*\//g);
var ke, dr = function(r, t, n) {
  if (r.length === 1 && typeof r[0] == "object" && r[0] !== null && r[0].styles !== void 0)
    return r[0];
  var o = !0, i = "";
  ke = void 0;
  var a = r[0];
  a == null || a.raw === void 0 ? (o = !1, i += Ir(n, t, a)) : (process.env.NODE_ENV !== "production" && a[0] === void 0 && console.error(Fn), i += a[0]);
  for (var c = 1; c < r.length; c++)
    i += Ir(n, t, r[c]), o && (process.env.NODE_ENV !== "production" && a[c] === void 0 && console.error(Fn), i += a[c]);
  var u;
  process.env.NODE_ENV !== "production" && (i = i.replace(Lo, function(y) {
    return u = y, "";
  })), Bn.lastIndex = 0;
  for (var f = "", d; (d = Bn.exec(i)) !== null; )
    f += "-" + // $FlowFixMe we know it's not null
    d[1];
  var p = Ja(i) + f;
  return process.env.NODE_ENV !== "production" ? {
    name: p,
    styles: i,
    map: u,
    next: ke,
    toString: function() {
      return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
    }
  } : {
    name: p,
    styles: i,
    next: ke
  };
}, cs = function(r) {
  return r();
}, $o = R["useInsertionEffect"] ? R["useInsertionEffect"] : !1, Xt = $o || cs, qn = $o || R.useLayoutEffect, us = {}.hasOwnProperty, Jt = /* @__PURE__ */ R.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ Ba({
    key: "css"
  }) : null
);
process.env.NODE_ENV !== "production" && (Jt.displayName = "EmotionCacheContext");
Jt.Provider;
var st = function(r) {
  return /* @__PURE__ */ li(function(t, n) {
    var o = fi(Jt);
    return r(t, o, n);
  });
}, mr = /* @__PURE__ */ R.createContext({});
process.env.NODE_ENV !== "production" && (mr.displayName = "EmotionThemeContext");
var Gn = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", Qn = "__EMOTION_LABEL_PLEASE_DO_NOT_USE__", ls = function(r) {
  var t = r.cache, n = r.serialized, o = r.isStringTag;
  return it(t, n, o), Xt(function() {
    return at(t, n, o);
  }), null;
}, fs = /* @__PURE__ */ st(function(e, r, t) {
  var n = e.css;
  typeof n == "string" && r.registered[n] !== void 0 && (n = r.registered[n]);
  var o = e[Gn], i = [n], a = "";
  typeof e.className == "string" ? a = Kt(r.registered, i, e.className) : e.className != null && (a = e.className + " ");
  var c = dr(i, void 0, R.useContext(mr));
  if (process.env.NODE_ENV !== "production" && c.name.indexOf("-") === -1) {
    var u = e[Qn];
    u && (c = dr([c, "label:" + u + ";"]));
  }
  a += r.key + "-" + c.name;
  var f = {};
  for (var d in e)
    us.call(e, d) && d !== "css" && d !== Gn && (process.env.NODE_ENV === "production" || d !== Qn) && (f[d] = e[d]);
  return f.ref = t, f.className = a, /* @__PURE__ */ R.createElement(R.Fragment, null, /* @__PURE__ */ R.createElement(ls, {
    cache: r,
    serialized: c,
    isStringTag: typeof o == "string"
  }), /* @__PURE__ */ R.createElement(o, f));
});
process.env.NODE_ENV !== "production" && (fs.displayName = "EmotionCssPropInternal");
var ds = {
  name: "@emotion/react",
  version: "11.11.1",
  main: "dist/emotion-react.cjs.js",
  module: "dist/emotion-react.esm.js",
  browser: {
    "./dist/emotion-react.esm.js": "./dist/emotion-react.browser.esm.js"
  },
  exports: {
    ".": {
      module: {
        worker: "./dist/emotion-react.worker.esm.js",
        browser: "./dist/emotion-react.browser.esm.js",
        default: "./dist/emotion-react.esm.js"
      },
      import: "./dist/emotion-react.cjs.mjs",
      default: "./dist/emotion-react.cjs.js"
    },
    "./jsx-runtime": {
      module: {
        worker: "./jsx-runtime/dist/emotion-react-jsx-runtime.worker.esm.js",
        browser: "./jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js",
        default: "./jsx-runtime/dist/emotion-react-jsx-runtime.esm.js"
      },
      import: "./jsx-runtime/dist/emotion-react-jsx-runtime.cjs.mjs",
      default: "./jsx-runtime/dist/emotion-react-jsx-runtime.cjs.js"
    },
    "./_isolated-hnrs": {
      module: {
        worker: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.worker.esm.js",
        browser: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.browser.esm.js",
        default: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.esm.js"
      },
      import: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.cjs.mjs",
      default: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.cjs.js"
    },
    "./jsx-dev-runtime": {
      module: {
        worker: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.worker.esm.js",
        browser: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.browser.esm.js",
        default: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.esm.js"
      },
      import: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.cjs.mjs",
      default: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.cjs.js"
    },
    "./package.json": "./package.json",
    "./types/css-prop": "./types/css-prop.d.ts",
    "./macro": {
      types: {
        import: "./macro.d.mts",
        default: "./macro.d.ts"
      },
      default: "./macro.js"
    }
  },
  types: "types/index.d.ts",
  files: [
    "src",
    "dist",
    "jsx-runtime",
    "jsx-dev-runtime",
    "_isolated-hnrs",
    "types/*.d.ts",
    "macro.*"
  ],
  sideEffects: !1,
  author: "Emotion Contributors",
  license: "MIT",
  scripts: {
    "test:typescript": "dtslint types"
  },
  dependencies: {
    "@babel/runtime": "^7.18.3",
    "@emotion/babel-plugin": "^11.11.0",
    "@emotion/cache": "^11.11.0",
    "@emotion/serialize": "^1.1.2",
    "@emotion/use-insertion-effect-with-fallbacks": "^1.0.1",
    "@emotion/utils": "^1.2.1",
    "@emotion/weak-memoize": "^0.3.1",
    "hoist-non-react-statics": "^3.3.1"
  },
  peerDependencies: {
    react: ">=16.8.0"
  },
  peerDependenciesMeta: {
    "@types/react": {
      optional: !0
    }
  },
  devDependencies: {
    "@definitelytyped/dtslint": "0.0.112",
    "@emotion/css": "11.11.0",
    "@emotion/css-prettifier": "1.1.3",
    "@emotion/server": "11.11.0",
    "@emotion/styled": "11.11.0",
    "html-tag-names": "^1.1.2",
    react: "16.14.0",
    "svg-tag-names": "^1.1.1",
    typescript: "^4.5.5"
  },
  repository: "https://github.com/emotion-js/emotion/tree/main/packages/react",
  publishConfig: {
    access: "public"
  },
  "umd:main": "dist/emotion-react.umd.min.js",
  preconstruct: {
    entrypoints: [
      "./index.js",
      "./jsx-runtime.js",
      "./jsx-dev-runtime.js",
      "./_isolated-hnrs.js"
    ],
    umdName: "emotionReact",
    exports: {
      envConditions: [
        "browser",
        "worker"
      ],
      extra: {
        "./types/css-prop": "./types/css-prop.d.ts",
        "./macro": {
          types: {
            import: "./macro.d.mts",
            default: "./macro.d.ts"
          },
          default: "./macro.js"
        }
      }
    }
  }
}, Kn = !1, ps = /* @__PURE__ */ st(function(e, r) {
  process.env.NODE_ENV !== "production" && !Kn && // check for className as well since the user is
  // probably using the custom createElement which
  // means it will be turned into a className prop
  // $FlowFixMe I don't really want to add it to the type since it shouldn't be used
  (e.className || e.css) && (console.error("It looks like you're using the css prop on Global, did you mean to use the styles prop instead?"), Kn = !0);
  var t = e.styles, n = dr([t], void 0, R.useContext(mr)), o = R.useRef();
  return qn(function() {
    var i = r.key + "-global", a = new r.sheet.constructor({
      key: i,
      nonce: r.sheet.nonce,
      container: r.sheet.container,
      speedy: r.sheet.isSpeedy
    }), c = !1, u = document.querySelector('style[data-emotion="' + i + " " + n.name + '"]');
    return r.sheet.tags.length && (a.before = r.sheet.tags[0]), u !== null && (c = !0, u.setAttribute("data-emotion", i), a.hydrate([u])), o.current = [a, c], function() {
      a.flush();
    };
  }, [r]), qn(function() {
    var i = o.current, a = i[0], c = i[1];
    if (c) {
      i[1] = !1;
      return;
    }
    if (n.next !== void 0 && at(r, n.next, !0), a.tags.length) {
      var u = a.tags[a.tags.length - 1].nextElementSibling;
      a.before = u, a.flush();
    }
    r.insert("", n, a, !1);
  }, [r, n.name]), null;
});
process.env.NODE_ENV !== "production" && (ps.displayName = "EmotionGlobal");
function ms() {
  for (var e = arguments.length, r = new Array(e), t = 0; t < e; t++)
    r[t] = arguments[t];
  return dr(r);
}
var Zt = function() {
  var r = ms.apply(void 0, arguments), t = "animation-" + r.name;
  return {
    name: t,
    styles: "@keyframes " + t + "{" + r.styles + "}",
    anim: 1,
    toString: function() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
}, ys = function e(r) {
  for (var t = r.length, n = 0, o = ""; n < t; n++) {
    var i = r[n];
    if (i != null) {
      var a = void 0;
      switch (typeof i) {
        case "boolean":
          break;
        case "object": {
          if (Array.isArray(i))
            a = e(i);
          else {
            process.env.NODE_ENV !== "production" && i.styles !== void 0 && i.name !== void 0 && console.error("You have passed styles created with `css` from `@emotion/react` package to the `cx`.\n`cx` is meant to compose class names (strings) so you should convert those styles to a class name by passing them to the `css` received from <ClassNames/> component."), a = "";
            for (var c in i)
              i[c] && c && (a && (a += " "), a += c);
          }
          break;
        }
        default:
          a = i;
      }
      a && (o && (o += " "), o += a);
    }
  }
  return o;
};
function hs(e, r, t) {
  var n = [], o = Kt(e, n, t);
  return n.length < 2 ? t : o + r(n);
}
var gs = function(r) {
  var t = r.cache, n = r.serializedArr;
  return Xt(function() {
    for (var o = 0; o < n.length; o++)
      at(t, n[o], !1);
  }), null;
}, vs = /* @__PURE__ */ st(function(e, r) {
  var t = !1, n = [], o = function() {
    if (t && process.env.NODE_ENV !== "production")
      throw new Error("css can only be used during render");
    for (var f = arguments.length, d = new Array(f), p = 0; p < f; p++)
      d[p] = arguments[p];
    var y = dr(d, r.registered);
    return n.push(y), it(r, y, !1), r.key + "-" + y.name;
  }, i = function() {
    if (t && process.env.NODE_ENV !== "production")
      throw new Error("cx can only be used during render");
    for (var f = arguments.length, d = new Array(f), p = 0; p < f; p++)
      d[p] = arguments[p];
    return hs(r.registered, o, ys(d));
  }, a = {
    css: o,
    cx: i,
    theme: R.useContext(mr)
  }, c = e.children(a);
  return t = !0, /* @__PURE__ */ R.createElement(R.Fragment, null, /* @__PURE__ */ R.createElement(gs, {
    cache: r,
    serializedArr: n
  }), c);
});
process.env.NODE_ENV !== "production" && (vs.displayName = "EmotionClassNames");
if (process.env.NODE_ENV !== "production") {
  var Hn = !0, bs = typeof jest < "u" || typeof vi < "u";
  if (Hn && !bs) {
    var Xn = (
      // $FlowIgnore
      typeof globalThis < "u" ? globalThis : Hn ? window : global
    ), Jn = "__EMOTION_REACT_" + ds.version.split(".")[0] + "__";
    Xn[Jn] && console.warn("You are loading @emotion/react when it is already loaded. Running multiple instances may cause problems. This can happen if multiple versions are used, or if multiple builds of the same version are used."), Xn[Jn] = !0;
  }
}
var Es = fa, Ms = function(r) {
  return r !== "theme";
}, Zn = function(r) {
  return typeof r == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  r.charCodeAt(0) > 96 ? Es : Ms;
}, eo = function(r, t, n) {
  var o;
  if (t) {
    var i = t.shouldForwardProp;
    o = r.__emotion_forwardProp && i ? function(a) {
      return r.__emotion_forwardProp(a) && i(a);
    } : i;
  }
  return typeof o != "function" && n && (o = r.__emotion_forwardProp), o;
}, ro = `You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`, Ts = function(r) {
  var t = r.cache, n = r.serialized, o = r.isStringTag;
  return it(t, n, o), Xt(function() {
    return at(t, n, o);
  }), null;
}, xs = function e(r, t) {
  if (process.env.NODE_ENV !== "production" && r === void 0)
    throw new Error(`You are trying to create a styled element with an undefined component.
You may have forgotten to import it.`);
  var n = r.__emotion_real === r, o = n && r.__emotion_base || r, i, a;
  t !== void 0 && (i = t.label, a = t.target);
  var c = eo(r, t, n), u = c || Zn(o), f = !u("as");
  return function() {
    var d = arguments, p = n && r.__emotion_styles !== void 0 ? r.__emotion_styles.slice(0) : [];
    if (i !== void 0 && p.push("label:" + i + ";"), d[0] == null || d[0].raw === void 0)
      p.push.apply(p, d);
    else {
      process.env.NODE_ENV !== "production" && d[0][0] === void 0 && console.error(ro), p.push(d[0][0]);
      for (var y = d.length, E = 1; E < y; E++)
        process.env.NODE_ENV !== "production" && d[0][E] === void 0 && console.error(ro), p.push(d[E], d[0][E]);
    }
    var v = st(function(m, h, S) {
      var j = f && m.as || o, C = "", x = [], l = m;
      if (m.theme == null) {
        l = {};
        for (var w in m)
          l[w] = m[w];
        l.theme = R.useContext(mr);
      }
      typeof m.className == "string" ? C = Kt(h.registered, x, m.className) : m.className != null && (C = m.className + " ");
      var A = dr(p.concat(x), h.registered, l);
      C += h.key + "-" + A.name, a !== void 0 && (C += " " + a);
      var me = f && c === void 0 ? Zn(j) : u, le = {};
      for (var D in m)
        f && D === "as" || // $FlowFixMe
        me(D) && (le[D] = m[D]);
      return le.className = C, le.ref = S, /* @__PURE__ */ R.createElement(R.Fragment, null, /* @__PURE__ */ R.createElement(Ts, {
        cache: h,
        serialized: A,
        isStringTag: typeof j == "string"
      }), /* @__PURE__ */ R.createElement(j, le));
    });
    return v.displayName = i !== void 0 ? i : "Styled(" + (typeof o == "string" ? o : o.displayName || o.name || "Component") + ")", v.defaultProps = r.defaultProps, v.__emotion_real = v, v.__emotion_base = o, v.__emotion_styles = p, v.__emotion_forwardProp = c, Object.defineProperty(v, "toString", {
      value: function() {
        return a === void 0 && process.env.NODE_ENV !== "production" ? "NO_COMPONENT_SELECTOR" : "." + a;
      }
    }), v.withComponent = function(m, h) {
      return e(m, L({}, t, h, {
        shouldForwardProp: eo(v, h, !0)
      })).apply(void 0, p);
    }, v;
  };
}, Ss = [
  "a",
  "abbr",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "base",
  "bdi",
  "bdo",
  "big",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "col",
  "colgroup",
  "data",
  "datalist",
  "dd",
  "del",
  "details",
  "dfn",
  "dialog",
  "div",
  "dl",
  "dt",
  "em",
  "embed",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hgroup",
  "hr",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "keygen",
  "label",
  "legend",
  "li",
  "link",
  "main",
  "map",
  "mark",
  "marquee",
  "menu",
  "menuitem",
  "meta",
  "meter",
  "nav",
  "noscript",
  "object",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "param",
  "picture",
  "pre",
  "progress",
  "q",
  "rp",
  "rt",
  "ruby",
  "s",
  "samp",
  "script",
  "section",
  "select",
  "small",
  "source",
  "span",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "table",
  "tbody",
  "td",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "title",
  "tr",
  "track",
  "u",
  "ul",
  "var",
  "video",
  "wbr",
  // SVG
  "circle",
  "clipPath",
  "defs",
  "ellipse",
  "foreignObject",
  "g",
  "image",
  "line",
  "linearGradient",
  "mask",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "radialGradient",
  "rect",
  "stop",
  "svg",
  "text",
  "tspan"
], zt = xs.bind();
Ss.forEach(function(e) {
  zt[e] = zt(e);
});
/**
 * @mui/styled-engine v5.13.2
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function Ns(e, r) {
  const t = zt(e, r);
  return process.env.NODE_ENV !== "production" ? (...n) => {
    const o = typeof e == "string" ? `"${e}"` : "component";
    return n.length === 0 ? console.error([`MUI: Seems like you called \`styled(${o})()\` without a \`style\` argument.`, 'You must provide a `styles` argument: `styled("div")(styleYouForgotToPass)`.'].join(`
`)) : n.some((i) => i === void 0) && console.error(`MUI: the styled(${o})(...args) API requires all its args to be defined.`), t(...n);
  } : t;
}
const Cs = (e, r) => {
  Array.isArray(e.__emotion_styles) && (e.__emotion_styles = r(e.__emotion_styles));
}, Os = ["values", "unit", "step"], js = (e) => {
  const r = Object.keys(e).map((t) => ({
    key: t,
    val: e[t]
  })) || [];
  return r.sort((t, n) => t.val - n.val), r.reduce((t, n) => L({}, t, {
    [n.key]: n.val
  }), {});
};
function _s(e) {
  const {
    // The breakpoint **start** at this value.
    // For instance with the first breakpoint xs: [xs, sm).
    values: r = {
      xs: 0,
      // phone
      sm: 600,
      // tablet
      md: 900,
      // small laptop
      lg: 1200,
      // desktop
      xl: 1536
      // large screen
    },
    unit: t = "px",
    step: n = 5
  } = e, o = Le(e, Os), i = js(r), a = Object.keys(i);
  function c(y) {
    return `@media (min-width:${typeof r[y] == "number" ? r[y] : y}${t})`;
  }
  function u(y) {
    return `@media (max-width:${(typeof r[y] == "number" ? r[y] : y) - n / 100}${t})`;
  }
  function f(y, E) {
    const v = a.indexOf(E);
    return `@media (min-width:${typeof r[y] == "number" ? r[y] : y}${t}) and (max-width:${(v !== -1 && typeof r[a[v]] == "number" ? r[a[v]] : E) - n / 100}${t})`;
  }
  function d(y) {
    return a.indexOf(y) + 1 < a.length ? f(y, a[a.indexOf(y) + 1]) : c(y);
  }
  function p(y) {
    const E = a.indexOf(y);
    return E === 0 ? c(a[1]) : E === a.length - 1 ? u(a[E]) : f(y, a[a.indexOf(y) + 1]).replace("@media", "@media not all and");
  }
  return L({
    keys: a,
    values: i,
    up: c,
    down: u,
    between: f,
    only: d,
    not: p,
    unit: t
  }, o);
}
const Rs = {
  borderRadius: 4
}, ws = Rs, Is = process.env.NODE_ENV !== "production" ? b.oneOfType([b.number, b.string, b.object, b.array]) : {}, Qe = Is;
function jr(e, r) {
  return r ? Ve(e, r, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : e;
}
const en = {
  xs: 0,
  // phone
  sm: 600,
  // tablet
  md: 900,
  // small laptop
  lg: 1200,
  // desktop
  xl: 1536
  // large screen
}, to = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (e) => `@media (min-width:${en[e]}px)`
};
function We(e, r, t) {
  const n = e.theme || {};
  if (Array.isArray(r)) {
    const i = n.breakpoints || to;
    return r.reduce((a, c, u) => (a[i.up(i.keys[u])] = t(r[u]), a), {});
  }
  if (typeof r == "object") {
    const i = n.breakpoints || to;
    return Object.keys(r).reduce((a, c) => {
      if (Object.keys(i.values || en).indexOf(c) !== -1) {
        const u = i.up(c);
        a[u] = t(r[c], c);
      } else {
        const u = c;
        a[u] = r[u];
      }
      return a;
    }, {});
  }
  return t(r);
}
function As(e = {}) {
  var r;
  return ((r = e.keys) == null ? void 0 : r.reduce((n, o) => {
    const i = e.up(o);
    return n[i] = {}, n;
  }, {})) || {};
}
function Ds(e, r) {
  return e.reduce((t, n) => {
    const o = t[n];
    return (!o || Object.keys(o).length === 0) && delete t[n], t;
  }, r);
}
function ct(e, r, t = !0) {
  if (!r || typeof r != "string")
    return null;
  if (e && e.vars && t) {
    const n = `vars.${r}`.split(".").reduce((o, i) => o && o[i] ? o[i] : null, e);
    if (n != null)
      return n;
  }
  return r.split(".").reduce((n, o) => n && n[o] != null ? n[o] : null, e);
}
function Zr(e, r, t, n = t) {
  let o;
  return typeof e == "function" ? o = e(t) : Array.isArray(e) ? o = e[t] || n : o = ct(e, t) || n, r && (o = r(o, n, e)), o;
}
function ne(e) {
  const {
    prop: r,
    cssProperty: t = e.prop,
    themeKey: n,
    transform: o
  } = e, i = (a) => {
    if (a[r] == null)
      return null;
    const c = a[r], u = a.theme, f = ct(u, n) || {};
    return We(a, c, (p) => {
      let y = Zr(f, o, p);
      return p === y && typeof p == "string" && (y = Zr(f, o, `${r}${p === "default" ? "" : je(p)}`, p)), t === !1 ? y : {
        [t]: y
      };
    });
  };
  return i.propTypes = process.env.NODE_ENV !== "production" ? {
    [r]: Qe
  } : {}, i.filterProps = [r], i;
}
function Ps(e) {
  const r = {};
  return (t) => (r[t] === void 0 && (r[t] = e(t)), r[t]);
}
const Ls = {
  m: "margin",
  p: "padding"
}, $s = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, no = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, ks = Ps((e) => {
  if (e.length > 2)
    if (no[e])
      e = no[e];
    else
      return [e];
  const [r, t] = e.split(""), n = Ls[r], o = $s[t] || "";
  return Array.isArray(o) ? o.map((i) => n + i) : [n + o];
}), ut = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], lt = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"], zs = [...ut, ...lt];
function Dr(e, r, t, n) {
  var o;
  const i = (o = ct(e, r, !1)) != null ? o : t;
  return typeof i == "number" ? (a) => typeof a == "string" ? a : (process.env.NODE_ENV !== "production" && typeof a != "number" && console.error(`MUI: Expected ${n} argument to be a number or a string, got ${a}.`), i * a) : Array.isArray(i) ? (a) => typeof a == "string" ? a : (process.env.NODE_ENV !== "production" && (Number.isInteger(a) ? a > i.length - 1 && console.error([`MUI: The value provided (${a}) overflows.`, `The supported values are: ${JSON.stringify(i)}.`, `${a} > ${i.length - 1}, you need to add the missing values.`].join(`
`)) : console.error([`MUI: The \`theme.${r}\` array type cannot be combined with non integer values.You should either use an integer value that can be used as index, or define the \`theme.${r}\` as a number.`].join(`
`))), i[a]) : typeof i == "function" ? i : (process.env.NODE_ENV !== "production" && console.error([`MUI: The \`theme.${r}\` value (${i}) is invalid.`, "It should be a number, an array or a function."].join(`
`)), () => {
  });
}
function ko(e) {
  return Dr(e, "spacing", 8, "spacing");
}
function Pr(e, r) {
  if (typeof r == "string" || r == null)
    return r;
  const t = Math.abs(r), n = e(t);
  return r >= 0 ? n : typeof n == "number" ? -n : `-${n}`;
}
function Ys(e, r) {
  return (t) => e.reduce((n, o) => (n[o] = Pr(r, t), n), {});
}
function Us(e, r, t, n) {
  if (r.indexOf(t) === -1)
    return null;
  const o = ks(t), i = Ys(o, n), a = e[t];
  return We(e, a, i);
}
function zo(e, r) {
  const t = ko(e.theme);
  return Object.keys(e).map((n) => Us(e, r, n, t)).reduce(jr, {});
}
function ge(e) {
  return zo(e, ut);
}
ge.propTypes = process.env.NODE_ENV !== "production" ? ut.reduce((e, r) => (e[r] = Qe, e), {}) : {};
ge.filterProps = ut;
function ve(e) {
  return zo(e, lt);
}
ve.propTypes = process.env.NODE_ENV !== "production" ? lt.reduce((e, r) => (e[r] = Qe, e), {}) : {};
ve.filterProps = lt;
process.env.NODE_ENV !== "production" && zs.reduce((e, r) => (e[r] = Qe, e), {});
function Fs(e = 8) {
  if (e.mui)
    return e;
  const r = ko({
    spacing: e
  }), t = (...n) => (process.env.NODE_ENV !== "production" && (n.length <= 4 || console.error(`MUI: Too many arguments provided, expected between 0 and 4, got ${n.length}`)), (n.length === 0 ? [1] : n).map((i) => {
    const a = r(i);
    return typeof a == "number" ? `${a}px` : a;
  }).join(" "));
  return t.mui = !0, t;
}
function ft(...e) {
  const r = e.reduce((n, o) => (o.filterProps.forEach((i) => {
    n[i] = o;
  }), n), {}), t = (n) => Object.keys(n).reduce((o, i) => r[i] ? jr(o, r[i](n)) : o, {});
  return t.propTypes = process.env.NODE_ENV !== "production" ? e.reduce((n, o) => Object.assign(n, o.propTypes), {}) : {}, t.filterProps = e.reduce((n, o) => n.concat(o.filterProps), []), t;
}
function Ye(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
const Vs = ne({
  prop: "border",
  themeKey: "borders",
  transform: Ye
}), Ws = ne({
  prop: "borderTop",
  themeKey: "borders",
  transform: Ye
}), Bs = ne({
  prop: "borderRight",
  themeKey: "borders",
  transform: Ye
}), qs = ne({
  prop: "borderBottom",
  themeKey: "borders",
  transform: Ye
}), Gs = ne({
  prop: "borderLeft",
  themeKey: "borders",
  transform: Ye
}), Qs = ne({
  prop: "borderColor",
  themeKey: "palette"
}), Ks = ne({
  prop: "borderTopColor",
  themeKey: "palette"
}), Hs = ne({
  prop: "borderRightColor",
  themeKey: "palette"
}), Xs = ne({
  prop: "borderBottomColor",
  themeKey: "palette"
}), Js = ne({
  prop: "borderLeftColor",
  themeKey: "palette"
}), dt = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const r = Dr(e.theme, "shape.borderRadius", 4, "borderRadius"), t = (n) => ({
      borderRadius: Pr(r, n)
    });
    return We(e, e.borderRadius, t);
  }
  return null;
};
dt.propTypes = process.env.NODE_ENV !== "production" ? {
  borderRadius: Qe
} : {};
dt.filterProps = ["borderRadius"];
ft(Vs, Ws, Bs, qs, Gs, Qs, Ks, Hs, Xs, Js, dt);
const pt = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const r = Dr(e.theme, "spacing", 8, "gap"), t = (n) => ({
      gap: Pr(r, n)
    });
    return We(e, e.gap, t);
  }
  return null;
};
pt.propTypes = process.env.NODE_ENV !== "production" ? {
  gap: Qe
} : {};
pt.filterProps = ["gap"];
const mt = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const r = Dr(e.theme, "spacing", 8, "columnGap"), t = (n) => ({
      columnGap: Pr(r, n)
    });
    return We(e, e.columnGap, t);
  }
  return null;
};
mt.propTypes = process.env.NODE_ENV !== "production" ? {
  columnGap: Qe
} : {};
mt.filterProps = ["columnGap"];
const yt = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const r = Dr(e.theme, "spacing", 8, "rowGap"), t = (n) => ({
      rowGap: Pr(r, n)
    });
    return We(e, e.rowGap, t);
  }
  return null;
};
yt.propTypes = process.env.NODE_ENV !== "production" ? {
  rowGap: Qe
} : {};
yt.filterProps = ["rowGap"];
const Zs = ne({
  prop: "gridColumn"
}), ec = ne({
  prop: "gridRow"
}), rc = ne({
  prop: "gridAutoFlow"
}), tc = ne({
  prop: "gridAutoColumns"
}), nc = ne({
  prop: "gridAutoRows"
}), oc = ne({
  prop: "gridTemplateColumns"
}), ic = ne({
  prop: "gridTemplateRows"
}), ac = ne({
  prop: "gridTemplateAreas"
}), sc = ne({
  prop: "gridArea"
});
ft(pt, mt, yt, Zs, ec, rc, tc, nc, oc, ic, ac, sc);
function ur(e, r) {
  return r === "grey" ? r : e;
}
const cc = ne({
  prop: "color",
  themeKey: "palette",
  transform: ur
}), uc = ne({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: ur
}), lc = ne({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: ur
});
ft(cc, uc, lc);
function we(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const fc = ne({
  prop: "width",
  transform: we
}), rn = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const r = (t) => {
      var n, o, i;
      return {
        maxWidth: ((n = e.theme) == null || (o = n.breakpoints) == null || (i = o.values) == null ? void 0 : i[t]) || en[t] || we(t)
      };
    };
    return We(e, e.maxWidth, r);
  }
  return null;
};
rn.filterProps = ["maxWidth"];
const dc = ne({
  prop: "minWidth",
  transform: we
}), pc = ne({
  prop: "height",
  transform: we
}), mc = ne({
  prop: "maxHeight",
  transform: we
}), yc = ne({
  prop: "minHeight",
  transform: we
});
ne({
  prop: "size",
  cssProperty: "width",
  transform: we
});
ne({
  prop: "size",
  cssProperty: "height",
  transform: we
});
const hc = ne({
  prop: "boxSizing"
});
ft(fc, rn, dc, pc, mc, yc, hc);
const gc = {
  // borders
  border: {
    themeKey: "borders",
    transform: Ye
  },
  borderTop: {
    themeKey: "borders",
    transform: Ye
  },
  borderRight: {
    themeKey: "borders",
    transform: Ye
  },
  borderBottom: {
    themeKey: "borders",
    transform: Ye
  },
  borderLeft: {
    themeKey: "borders",
    transform: Ye
  },
  borderColor: {
    themeKey: "palette"
  },
  borderTopColor: {
    themeKey: "palette"
  },
  borderRightColor: {
    themeKey: "palette"
  },
  borderBottomColor: {
    themeKey: "palette"
  },
  borderLeftColor: {
    themeKey: "palette"
  },
  borderRadius: {
    themeKey: "shape.borderRadius",
    style: dt
  },
  // palette
  color: {
    themeKey: "palette",
    transform: ur
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: ur
  },
  backgroundColor: {
    themeKey: "palette",
    transform: ur
  },
  // spacing
  p: {
    style: ve
  },
  pt: {
    style: ve
  },
  pr: {
    style: ve
  },
  pb: {
    style: ve
  },
  pl: {
    style: ve
  },
  px: {
    style: ve
  },
  py: {
    style: ve
  },
  padding: {
    style: ve
  },
  paddingTop: {
    style: ve
  },
  paddingRight: {
    style: ve
  },
  paddingBottom: {
    style: ve
  },
  paddingLeft: {
    style: ve
  },
  paddingX: {
    style: ve
  },
  paddingY: {
    style: ve
  },
  paddingInline: {
    style: ve
  },
  paddingInlineStart: {
    style: ve
  },
  paddingInlineEnd: {
    style: ve
  },
  paddingBlock: {
    style: ve
  },
  paddingBlockStart: {
    style: ve
  },
  paddingBlockEnd: {
    style: ve
  },
  m: {
    style: ge
  },
  mt: {
    style: ge
  },
  mr: {
    style: ge
  },
  mb: {
    style: ge
  },
  ml: {
    style: ge
  },
  mx: {
    style: ge
  },
  my: {
    style: ge
  },
  margin: {
    style: ge
  },
  marginTop: {
    style: ge
  },
  marginRight: {
    style: ge
  },
  marginBottom: {
    style: ge
  },
  marginLeft: {
    style: ge
  },
  marginX: {
    style: ge
  },
  marginY: {
    style: ge
  },
  marginInline: {
    style: ge
  },
  marginInlineStart: {
    style: ge
  },
  marginInlineEnd: {
    style: ge
  },
  marginBlock: {
    style: ge
  },
  marginBlockStart: {
    style: ge
  },
  marginBlockEnd: {
    style: ge
  },
  // display
  displayPrint: {
    cssProperty: !1,
    transform: (e) => ({
      "@media print": {
        display: e
      }
    })
  },
  display: {},
  overflow: {},
  textOverflow: {},
  visibility: {},
  whiteSpace: {},
  // flexbox
  flexBasis: {},
  flexDirection: {},
  flexWrap: {},
  justifyContent: {},
  alignItems: {},
  alignContent: {},
  order: {},
  flex: {},
  flexGrow: {},
  flexShrink: {},
  alignSelf: {},
  justifyItems: {},
  justifySelf: {},
  // grid
  gap: {
    style: pt
  },
  rowGap: {
    style: yt
  },
  columnGap: {
    style: mt
  },
  gridColumn: {},
  gridRow: {},
  gridAutoFlow: {},
  gridAutoColumns: {},
  gridAutoRows: {},
  gridTemplateColumns: {},
  gridTemplateRows: {},
  gridTemplateAreas: {},
  gridArea: {},
  // positions
  position: {},
  zIndex: {
    themeKey: "zIndex"
  },
  top: {},
  right: {},
  bottom: {},
  left: {},
  // shadows
  boxShadow: {
    themeKey: "shadows"
  },
  // sizing
  width: {
    transform: we
  },
  maxWidth: {
    style: rn
  },
  minWidth: {
    transform: we
  },
  height: {
    transform: we
  },
  maxHeight: {
    transform: we
  },
  minHeight: {
    transform: we
  },
  boxSizing: {},
  // typography
  fontFamily: {
    themeKey: "typography"
  },
  fontSize: {
    themeKey: "typography"
  },
  fontStyle: {
    themeKey: "typography"
  },
  fontWeight: {
    themeKey: "typography"
  },
  letterSpacing: {},
  textTransform: {},
  lineHeight: {},
  textAlign: {},
  typography: {
    cssProperty: !1,
    themeKey: "typography"
  }
}, tn = gc;
function vc(...e) {
  const r = e.reduce((n, o) => n.concat(Object.keys(o)), []), t = new Set(r);
  return e.every((n) => t.size === Object.keys(n).length);
}
function bc(e, r) {
  return typeof e == "function" ? e(r) : e;
}
function Ec() {
  function e(t, n, o, i) {
    const a = {
      [t]: n,
      theme: o
    }, c = i[t];
    if (!c)
      return {
        [t]: n
      };
    const {
      cssProperty: u = t,
      themeKey: f,
      transform: d,
      style: p
    } = c;
    if (n == null)
      return null;
    if (f === "typography" && n === "inherit")
      return {
        [t]: n
      };
    const y = ct(o, f) || {};
    return p ? p(a) : We(a, n, (v) => {
      let m = Zr(y, d, v);
      return v === m && typeof v == "string" && (m = Zr(y, d, `${t}${v === "default" ? "" : je(v)}`, v)), u === !1 ? m : {
        [u]: m
      };
    });
  }
  function r(t) {
    var n;
    const {
      sx: o,
      theme: i = {}
    } = t || {};
    if (!o)
      return null;
    const a = (n = i.unstable_sxConfig) != null ? n : tn;
    function c(u) {
      let f = u;
      if (typeof u == "function")
        f = u(i);
      else if (typeof u != "object")
        return u;
      if (!f)
        return null;
      const d = As(i.breakpoints), p = Object.keys(d);
      let y = d;
      return Object.keys(f).forEach((E) => {
        const v = bc(f[E], i);
        if (v != null)
          if (typeof v == "object")
            if (a[E])
              y = jr(y, e(E, v, i, a));
            else {
              const m = We({
                theme: i
              }, v, (h) => ({
                [E]: h
              }));
              vc(m, v) ? y[E] = r({
                sx: v,
                theme: i
              }) : y = jr(y, m);
            }
          else
            y = jr(y, e(E, v, i, a));
      }), Ds(p, y);
    }
    return Array.isArray(o) ? o.map(c) : c(o);
  }
  return r;
}
const Yo = Ec();
Yo.filterProps = ["sx"];
const nn = Yo, Mc = ["breakpoints", "palette", "spacing", "shape"];
function on(e = {}, ...r) {
  const {
    breakpoints: t = {},
    palette: n = {},
    spacing: o,
    shape: i = {}
  } = e, a = Le(e, Mc), c = _s(t), u = Fs(o);
  let f = Ve({
    breakpoints: c,
    direction: "ltr",
    components: {},
    // Inject component definitions.
    palette: L({
      mode: "light"
    }, n),
    spacing: u,
    shape: L({}, ws, i)
  }, a);
  return f = r.reduce((d, p) => Ve(d, p), f), f.unstable_sxConfig = L({}, tn, a == null ? void 0 : a.unstable_sxConfig), f.unstable_sx = function(p) {
    return nn({
      sx: p,
      theme: this
    });
  }, f;
}
function Tc(e) {
  return Object.keys(e).length === 0;
}
function xc(e = null) {
  const r = R.useContext(mr);
  return !r || Tc(r) ? e : r;
}
const Sc = on();
function Nc(e = Sc) {
  return xc(e);
}
function Uo(e) {
  var r, t, n = "";
  if (typeof e == "string" || typeof e == "number")
    n += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (r = 0; r < e.length; r++)
        e[r] && (t = Uo(e[r])) && (n && (n += " "), n += t);
    else
      for (r in e)
        e[r] && (n && (n += " "), n += r);
  return n;
}
function De() {
  for (var e, r, t = 0, n = ""; t < arguments.length; )
    (e = arguments[t++]) && (r = Uo(e)) && (n && (n += " "), n += r);
  return n;
}
const Cc = ["variant"];
function oo(e) {
  return e.length === 0;
}
function Fo(e) {
  const {
    variant: r
  } = e, t = Le(e, Cc);
  let n = r || "";
  return Object.keys(t).sort().forEach((o) => {
    o === "color" ? n += oo(n) ? e[o] : je(e[o]) : n += `${oo(n) ? o : je(o)}${je(e[o].toString())}`;
  }), n;
}
const Oc = ["name", "slot", "skipVariantsResolver", "skipSx", "overridesResolver"];
function jc(e) {
  return Object.keys(e).length === 0;
}
function _c(e) {
  return typeof e == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  e.charCodeAt(0) > 96;
}
const Rc = (e, r) => r.components && r.components[e] && r.components[e].styleOverrides ? r.components[e].styleOverrides : null, wc = (e, r) => {
  let t = [];
  r && r.components && r.components[e] && r.components[e].variants && (t = r.components[e].variants);
  const n = {};
  return t.forEach((o) => {
    const i = Fo(o.props);
    n[i] = o.style;
  }), n;
}, Ic = (e, r, t, n) => {
  var o, i;
  const {
    ownerState: a = {}
  } = e, c = [], u = t == null || (o = t.components) == null || (i = o[n]) == null ? void 0 : i.variants;
  return u && u.forEach((f) => {
    let d = !0;
    Object.keys(f.props).forEach((p) => {
      a[p] !== f.props[p] && e[p] !== f.props[p] && (d = !1);
    }), d && c.push(r[Fo(f.props)]);
  }), c;
};
function Hr(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const Ac = on(), Dc = (e) => e.charAt(0).toLowerCase() + e.slice(1);
function Cr({
  defaultTheme: e,
  theme: r,
  themeId: t
}) {
  return jc(r) ? e : r[t] || r;
}
function Pc(e = {}) {
  const {
    themeId: r,
    defaultTheme: t = Ac,
    rootShouldForwardProp: n = Hr,
    slotShouldForwardProp: o = Hr
  } = e, i = (a) => nn(L({}, a, {
    theme: Cr(L({}, a, {
      defaultTheme: t,
      themeId: r
    }))
  }));
  return i.__mui_systemSx = !0, (a, c = {}) => {
    Cs(a, (x) => x.filter((l) => !(l != null && l.__mui_systemSx)));
    const {
      name: u,
      slot: f,
      skipVariantsResolver: d,
      skipSx: p,
      overridesResolver: y
    } = c, E = Le(c, Oc), v = d !== void 0 ? d : f && f !== "Root" || !1, m = p || !1;
    let h;
    process.env.NODE_ENV !== "production" && u && (h = `${u}-${Dc(f || "Root")}`);
    let S = Hr;
    f === "Root" ? S = n : f ? S = o : _c(a) && (S = void 0);
    const j = Ns(a, L({
      shouldForwardProp: S,
      label: h
    }, E)), C = (x, ...l) => {
      const w = l ? l.map((D) => typeof D == "function" && D.__emotion_real !== D ? (ae) => D(L({}, ae, {
        theme: Cr(L({}, ae, {
          defaultTheme: t,
          themeId: r
        }))
      })) : D) : [];
      let A = x;
      u && y && w.push((D) => {
        const ae = Cr(L({}, D, {
          defaultTheme: t,
          themeId: r
        })), ye = Rc(u, ae);
        if (ye) {
          const oe = {};
          return Object.entries(ye).forEach(([ie, fe]) => {
            oe[ie] = typeof fe == "function" ? fe(L({}, D, {
              theme: ae
            })) : fe;
          }), y(D, oe);
        }
        return null;
      }), u && !v && w.push((D) => {
        const ae = Cr(L({}, D, {
          defaultTheme: t,
          themeId: r
        }));
        return Ic(D, wc(u, ae), ae, u);
      }), m || w.push(i);
      const me = w.length - l.length;
      if (Array.isArray(x) && me > 0) {
        const D = new Array(me).fill("");
        A = [...x, ...D], A.raw = [...x.raw, ...D];
      } else
        typeof x == "function" && // On the server Emotion doesn't use React.forwardRef for creating components, so the created
        // component stays as a function. This condition makes sure that we do not interpolate functions
        // which are basically components used as a selectors.
        x.__emotion_real !== x && (A = (D) => x(L({}, D, {
          theme: Cr(L({}, D, {
            defaultTheme: t,
            themeId: r
          }))
        })));
      const le = j(A, ...w);
      if (process.env.NODE_ENV !== "production") {
        let D;
        u && (D = `${u}${f || ""}`), D === void 0 && (D = `Styled(${Gi(a)})`), le.displayName = D;
      }
      return a.muiName && (le.muiName = a.muiName), le;
    };
    return j.withConfig && (C.withConfig = j.withConfig), C;
  };
}
function Lc(e) {
  const {
    theme: r,
    name: t,
    props: n
  } = e;
  return !r || !r.components || !r.components[t] || !r.components[t].defaultProps ? n : Vt(r.components[t].defaultProps, n);
}
function $c({
  props: e,
  name: r,
  defaultTheme: t,
  themeId: n
}) {
  let o = Nc(t);
  return n && (o = o[n] || o), Lc({
    theme: o,
    name: r,
    props: e
  });
}
function an(e, r = 0, t = 1) {
  return process.env.NODE_ENV !== "production" && (e < r || e > t) && console.error(`MUI: The value provided ${e} is out of range [${r}, ${t}].`), Math.min(Math.max(r, e), t);
}
function kc(e) {
  e = e.slice(1);
  const r = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let t = e.match(r);
  return t && t[0].length === 1 && (t = t.map((n) => n + n)), t ? `rgb${t.length === 4 ? "a" : ""}(${t.map((n, o) => o < 3 ? parseInt(n, 16) : Math.round(parseInt(n, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function Xe(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return Xe(kc(e));
  const r = e.indexOf("("), t = e.substring(0, r);
  if (["rgb", "rgba", "hsl", "hsla", "color"].indexOf(t) === -1)
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: Unsupported \`${e}\` color.
The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().` : lr(9, e));
  let n = e.substring(r + 1, e.length - 1), o;
  if (t === "color") {
    if (n = n.split(" "), o = n.shift(), n.length === 4 && n[3].charAt(0) === "/" && (n[3] = n[3].slice(1)), ["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].indexOf(o) === -1)
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: unsupported \`${o}\` color space.
The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.` : lr(10, o));
  } else
    n = n.split(",");
  return n = n.map((i) => parseFloat(i)), {
    type: t,
    values: n,
    colorSpace: o
  };
}
function ht(e) {
  const {
    type: r,
    colorSpace: t
  } = e;
  let {
    values: n
  } = e;
  return r.indexOf("rgb") !== -1 ? n = n.map((o, i) => i < 3 ? parseInt(o, 10) : o) : r.indexOf("hsl") !== -1 && (n[1] = `${n[1]}%`, n[2] = `${n[2]}%`), r.indexOf("color") !== -1 ? n = `${t} ${n.join(" ")}` : n = `${n.join(", ")}`, `${r}(${n})`;
}
function zc(e) {
  e = Xe(e);
  const {
    values: r
  } = e, t = r[0], n = r[1] / 100, o = r[2] / 100, i = n * Math.min(o, 1 - o), a = (f, d = (f + t / 30) % 12) => o - i * Math.max(Math.min(d - 3, 9 - d, 1), -1);
  let c = "rgb";
  const u = [Math.round(a(0) * 255), Math.round(a(8) * 255), Math.round(a(4) * 255)];
  return e.type === "hsla" && (c += "a", u.push(r[3])), ht({
    type: c,
    values: u
  });
}
function io(e) {
  e = Xe(e);
  let r = e.type === "hsl" || e.type === "hsla" ? Xe(zc(e)).values : e.values;
  return r = r.map((t) => (e.type !== "color" && (t /= 255), t <= 0.03928 ? t / 12.92 : ((t + 0.055) / 1.055) ** 2.4)), Number((0.2126 * r[0] + 0.7152 * r[1] + 0.0722 * r[2]).toFixed(3));
}
function ao(e, r) {
  const t = io(e), n = io(r);
  return (Math.max(t, n) + 0.05) / (Math.min(t, n) + 0.05);
}
function Vr(e, r) {
  return e = Xe(e), r = an(r), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${r}` : e.values[3] = r, ht(e);
}
function Yc(e, r) {
  if (e = Xe(e), r = an(r), e.type.indexOf("hsl") !== -1)
    e.values[2] *= 1 - r;
  else if (e.type.indexOf("rgb") !== -1 || e.type.indexOf("color") !== -1)
    for (let t = 0; t < 3; t += 1)
      e.values[t] *= 1 - r;
  return ht(e);
}
function Uc(e, r) {
  if (e = Xe(e), r = an(r), e.type.indexOf("hsl") !== -1)
    e.values[2] += (100 - e.values[2]) * r;
  else if (e.type.indexOf("rgb") !== -1)
    for (let t = 0; t < 3; t += 1)
      e.values[t] += (255 - e.values[t]) * r;
  else if (e.type.indexOf("color") !== -1)
    for (let t = 0; t < 3; t += 1)
      e.values[t] += (1 - e.values[t]) * r;
  return ht(e);
}
function Fc(e, r) {
  return L({
    toolbar: {
      minHeight: 56,
      [e.up("xs")]: {
        "@media (orientation: landscape)": {
          minHeight: 48
        }
      },
      [e.up("sm")]: {
        minHeight: 64
      }
    }
  }, r);
}
const Vc = ["mode", "contrastThreshold", "tonalOffset"], so = {
  // The colors used to style the text.
  text: {
    // The most important text.
    primary: "rgba(0, 0, 0, 0.87)",
    // Secondary text.
    secondary: "rgba(0, 0, 0, 0.6)",
    // Disabled text have even lower visual prominence.
    disabled: "rgba(0, 0, 0, 0.38)"
  },
  // The color used to divide different elements.
  divider: "rgba(0, 0, 0, 0.12)",
  // The background colors used to style the surfaces.
  // Consistency between these values is important.
  background: {
    paper: _r.white,
    default: _r.white
  },
  // The colors used to style the action elements.
  action: {
    // The color of an active action like an icon button.
    active: "rgba(0, 0, 0, 0.54)",
    // The color of an hovered action.
    hover: "rgba(0, 0, 0, 0.04)",
    hoverOpacity: 0.04,
    // The color of a selected action.
    selected: "rgba(0, 0, 0, 0.08)",
    selectedOpacity: 0.08,
    // The color of a disabled action.
    disabled: "rgba(0, 0, 0, 0.26)",
    // The background color of a disabled action.
    disabledBackground: "rgba(0, 0, 0, 0.12)",
    disabledOpacity: 0.38,
    focus: "rgba(0, 0, 0, 0.12)",
    focusOpacity: 0.12,
    activatedOpacity: 0.12
  }
}, wt = {
  text: {
    primary: _r.white,
    secondary: "rgba(255, 255, 255, 0.7)",
    disabled: "rgba(255, 255, 255, 0.5)",
    icon: "rgba(255, 255, 255, 0.5)"
  },
  divider: "rgba(255, 255, 255, 0.12)",
  background: {
    paper: "#121212",
    default: "#121212"
  },
  action: {
    active: _r.white,
    hover: "rgba(255, 255, 255, 0.08)",
    hoverOpacity: 0.08,
    selected: "rgba(255, 255, 255, 0.16)",
    selectedOpacity: 0.16,
    disabled: "rgba(255, 255, 255, 0.3)",
    disabledBackground: "rgba(255, 255, 255, 0.12)",
    disabledOpacity: 0.38,
    focus: "rgba(255, 255, 255, 0.12)",
    focusOpacity: 0.12,
    activatedOpacity: 0.24
  }
};
function co(e, r, t, n) {
  const o = n.light || n, i = n.dark || n * 1.5;
  e[r] || (e.hasOwnProperty(t) ? e[r] = e[t] : r === "light" ? e.light = Uc(e.main, o) : r === "dark" && (e.dark = Yc(e.main, i)));
}
function Wc(e = "light") {
  return e === "dark" ? {
    main: or[200],
    light: or[50],
    dark: or[400]
  } : {
    main: or[700],
    light: or[400],
    dark: or[800]
  };
}
function Bc(e = "light") {
  return e === "dark" ? {
    main: nr[200],
    light: nr[50],
    dark: nr[400]
  } : {
    main: nr[500],
    light: nr[300],
    dark: nr[700]
  };
}
function qc(e = "light") {
  return e === "dark" ? {
    main: tr[500],
    light: tr[300],
    dark: tr[700]
  } : {
    main: tr[700],
    light: tr[400],
    dark: tr[800]
  };
}
function Gc(e = "light") {
  return e === "dark" ? {
    main: ir[400],
    light: ir[300],
    dark: ir[700]
  } : {
    main: ir[700],
    light: ir[500],
    dark: ir[900]
  };
}
function Qc(e = "light") {
  return e === "dark" ? {
    main: ar[400],
    light: ar[300],
    dark: ar[700]
  } : {
    main: ar[800],
    light: ar[500],
    dark: ar[900]
  };
}
function Kc(e = "light") {
  return e === "dark" ? {
    main: Sr[400],
    light: Sr[300],
    dark: Sr[700]
  } : {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: Sr[500],
    dark: Sr[900]
  };
}
function Hc(e) {
  const {
    mode: r = "light",
    contrastThreshold: t = 3,
    tonalOffset: n = 0.2
  } = e, o = Le(e, Vc), i = e.primary || Wc(r), a = e.secondary || Bc(r), c = e.error || qc(r), u = e.info || Gc(r), f = e.success || Qc(r), d = e.warning || Kc(r);
  function p(m) {
    const h = ao(m, wt.text.primary) >= t ? wt.text.primary : so.text.primary;
    if (process.env.NODE_ENV !== "production") {
      const S = ao(m, h);
      S < 3 && console.error([`MUI: The contrast ratio of ${S}:1 for ${h} on ${m}`, "falls below the WCAG recommended absolute minimum contrast ratio of 3:1.", "https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast"].join(`
`));
    }
    return h;
  }
  const y = ({
    color: m,
    name: h,
    mainShade: S = 500,
    lightShade: j = 300,
    darkShade: C = 700
  }) => {
    if (m = L({}, m), !m.main && m[S] && (m.main = m[S]), !m.hasOwnProperty("main"))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${h ? ` (${h})` : ""} provided to augmentColor(color) is invalid.
The color object needs to have a \`main\` property or a \`${S}\` property.` : lr(11, h ? ` (${h})` : "", S));
    if (typeof m.main != "string")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${h ? ` (${h})` : ""} provided to augmentColor(color) is invalid.
\`color.main\` should be a string, but \`${JSON.stringify(m.main)}\` was provided instead.

Did you intend to use one of the following approaches?

import { green } from "@mui/material/colors";

const theme1 = createTheme({ palette: {
  primary: green,
} });

const theme2 = createTheme({ palette: {
  primary: { main: green[500] },
} });` : lr(12, h ? ` (${h})` : "", JSON.stringify(m.main)));
    return co(m, "light", j, n), co(m, "dark", C, n), m.contrastText || (m.contrastText = p(m.main)), m;
  }, E = {
    dark: wt,
    light: so
  };
  return process.env.NODE_ENV !== "production" && (E[r] || console.error(`MUI: The palette mode \`${r}\` is not supported.`)), Ve(L({
    // A collection of common colors.
    common: L({}, _r),
    // prevent mutable object.
    // The palette mode, can be light or dark.
    mode: r,
    // The colors used to represent primary interface elements for a user.
    primary: y({
      color: i,
      name: "primary"
    }),
    // The colors used to represent secondary interface elements for a user.
    secondary: y({
      color: a,
      name: "secondary",
      mainShade: "A400",
      lightShade: "A200",
      darkShade: "A700"
    }),
    // The colors used to represent interface elements that the user should be made aware of.
    error: y({
      color: c,
      name: "error"
    }),
    // The colors used to represent potentially dangerous actions or important messages.
    warning: y({
      color: d,
      name: "warning"
    }),
    // The colors used to present information to the user that is neutral and not necessarily important.
    info: y({
      color: u,
      name: "info"
    }),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: y({
      color: f,
      name: "success"
    }),
    // The grey colors.
    grey: _i,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: t,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText: p,
    // Generate a rich color object.
    augmentColor: y,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: n
  }, E[r]), o);
}
const Xc = ["fontFamily", "fontSize", "fontWeightLight", "fontWeightRegular", "fontWeightMedium", "fontWeightBold", "htmlFontSize", "allVariants", "pxToRem"];
function Jc(e) {
  return Math.round(e * 1e5) / 1e5;
}
const uo = {
  textTransform: "uppercase"
}, lo = '"Roboto", "Helvetica", "Arial", sans-serif';
function Zc(e, r) {
  const t = typeof r == "function" ? r(e) : r, {
    fontFamily: n = lo,
    // The default font size of the Material Specification.
    fontSize: o = 14,
    // px
    fontWeightLight: i = 300,
    fontWeightRegular: a = 400,
    fontWeightMedium: c = 500,
    fontWeightBold: u = 700,
    // Tell MUI what's the font-size on the html element.
    // 16px is the default font-size used by browsers.
    htmlFontSize: f = 16,
    // Apply the CSS properties to all the variants.
    allVariants: d,
    pxToRem: p
  } = t, y = Le(t, Xc);
  process.env.NODE_ENV !== "production" && (typeof o != "number" && console.error("MUI: `fontSize` is required to be a number."), typeof f != "number" && console.error("MUI: `htmlFontSize` is required to be a number."));
  const E = o / 14, v = p || ((S) => `${S / f * E}rem`), m = (S, j, C, x, l) => L({
    fontFamily: n,
    fontWeight: S,
    fontSize: v(j),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: C
  }, n === lo ? {
    letterSpacing: `${Jc(x / j)}em`
  } : {}, l, d), h = {
    h1: m(i, 96, 1.167, -1.5),
    h2: m(i, 60, 1.2, -0.5),
    h3: m(a, 48, 1.167, 0),
    h4: m(a, 34, 1.235, 0.25),
    h5: m(a, 24, 1.334, 0),
    h6: m(c, 20, 1.6, 0.15),
    subtitle1: m(a, 16, 1.75, 0.15),
    subtitle2: m(c, 14, 1.57, 0.1),
    body1: m(a, 16, 1.5, 0.15),
    body2: m(a, 14, 1.43, 0.15),
    button: m(c, 14, 1.75, 0.4, uo),
    caption: m(a, 12, 1.66, 0.4),
    overline: m(a, 12, 2.66, 1, uo),
    inherit: {
      fontFamily: "inherit",
      fontWeight: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  };
  return Ve(L({
    htmlFontSize: f,
    pxToRem: v,
    fontFamily: n,
    fontSize: o,
    fontWeightLight: i,
    fontWeightRegular: a,
    fontWeightMedium: c,
    fontWeightBold: u
  }, h), y, {
    clone: !1
    // No need to clone deep
  });
}
const eu = 0.2, ru = 0.14, tu = 0.12;
function pe(...e) {
  return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${eu})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${ru})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${tu})`].join(",");
}
const nu = ["none", pe(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), pe(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), pe(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), pe(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), pe(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), pe(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), pe(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), pe(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), pe(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), pe(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), pe(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), pe(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), pe(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), pe(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), pe(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), pe(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), pe(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), pe(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), pe(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), pe(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), pe(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), pe(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), pe(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), pe(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], ou = nu, iu = ["duration", "easing", "delay"], au = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, su = {
  shortest: 150,
  shorter: 200,
  short: 250,
  // most basic recommended timing
  standard: 300,
  // this is to be used in complex animations
  complex: 375,
  // recommended when something is entering screen
  enteringScreen: 225,
  // recommended when something is leaving screen
  leavingScreen: 195
};
function fo(e) {
  return `${Math.round(e)}ms`;
}
function cu(e) {
  if (!e)
    return 0;
  const r = e / 36;
  return Math.round((4 + 15 * r ** 0.25 + r / 5) * 10);
}
function uu(e) {
  const r = L({}, au, e.easing), t = L({}, su, e.duration);
  return L({
    getAutoHeightDuration: cu,
    create: (o = ["all"], i = {}) => {
      const {
        duration: a = t.standard,
        easing: c = r.easeInOut,
        delay: u = 0
      } = i, f = Le(i, iu);
      if (process.env.NODE_ENV !== "production") {
        const d = (y) => typeof y == "string", p = (y) => !isNaN(parseFloat(y));
        !d(o) && !Array.isArray(o) && console.error('MUI: Argument "props" must be a string or Array.'), !p(a) && !d(a) && console.error(`MUI: Argument "duration" must be a number or a string but found ${a}.`), d(c) || console.error('MUI: Argument "easing" must be a string.'), !p(u) && !d(u) && console.error('MUI: Argument "delay" must be a number or a string.'), Object.keys(f).length !== 0 && console.error(`MUI: Unrecognized argument(s) [${Object.keys(f).join(",")}].`);
      }
      return (Array.isArray(o) ? o : [o]).map((d) => `${d} ${typeof a == "string" ? a : fo(a)} ${c} ${typeof u == "string" ? u : fo(u)}`).join(",");
    }
  }, e, {
    easing: r,
    duration: t
  });
}
const lu = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
}, fu = lu, du = ["breakpoints", "mixins", "spacing", "palette", "transitions", "typography", "shape"];
function pu(e = {}, ...r) {
  const {
    mixins: t = {},
    palette: n = {},
    transitions: o = {},
    typography: i = {}
  } = e, a = Le(e, du);
  if (e.vars)
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `vars` is a private field used for CSS variables support.\nPlease use another name." : lr(18));
  const c = Hc(n), u = on(e);
  let f = Ve(u, {
    mixins: Fc(u.breakpoints, t),
    palette: c,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: ou.slice(),
    typography: Zc(c, i),
    transitions: uu(o),
    zIndex: L({}, fu)
  });
  if (f = Ve(f, a), f = r.reduce((d, p) => Ve(d, p), f), process.env.NODE_ENV !== "production") {
    const d = ["active", "checked", "completed", "disabled", "error", "expanded", "focused", "focusVisible", "required", "selected"], p = (y, E) => {
      let v;
      for (v in y) {
        const m = y[v];
        if (d.indexOf(v) !== -1 && Object.keys(m).length > 0) {
          if (process.env.NODE_ENV !== "production") {
            const h = rt("", v);
            console.error([`MUI: The \`${E}\` component increases the CSS specificity of the \`${v}\` internal state.`, "You can not override it like this: ", JSON.stringify(y, null, 2), "", `Instead, you need to use the '&.${h}' syntax:`, JSON.stringify({
              root: {
                [`&.${h}`]: m
              }
            }, null, 2), "", "https://mui.com/r/state-classes-guide"].join(`
`));
          }
          y[v] = {};
        }
      }
    };
    Object.keys(f.components).forEach((y) => {
      const E = f.components[y].styleOverrides;
      E && y.indexOf("Mui") === 0 && p(E, y);
    });
  }
  return f.unstable_sxConfig = L({}, tn, a == null ? void 0 : a.unstable_sxConfig), f.unstable_sx = function(p) {
    return nn({
      sx: p,
      theme: this
    });
  }, f;
}
const mu = pu(), Vo = mu;
function sn({
  props: e,
  name: r
}) {
  return $c({
    props: e,
    name: r,
    defaultTheme: Vo,
    themeId: xo
  });
}
const Wo = (e) => Hr(e) && e !== "classes", yu = Pc({
  themeId: xo,
  defaultTheme: Vo,
  rootShouldForwardProp: Wo
}), yr = yu;
function Yt(e, r) {
  return Yt = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, o) {
    return n.__proto__ = o, n;
  }, Yt(e, r);
}
function hu(e, r) {
  e.prototype = Object.create(r.prototype), e.prototype.constructor = e, Yt(e, r);
}
const po = Ge.createContext(null);
function gu(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function cn(e, r) {
  var t = function(i) {
    return r && Br(i) ? r(i) : i;
  }, n = /* @__PURE__ */ Object.create(null);
  return e && di.map(e, function(o) {
    return o;
  }).forEach(function(o) {
    n[o.key] = t(o);
  }), n;
}
function vu(e, r) {
  e = e || {}, r = r || {};
  function t(d) {
    return d in r ? r[d] : e[d];
  }
  var n = /* @__PURE__ */ Object.create(null), o = [];
  for (var i in e)
    i in r ? o.length && (n[i] = o, o = []) : o.push(i);
  var a, c = {};
  for (var u in r) {
    if (n[u])
      for (a = 0; a < n[u].length; a++) {
        var f = n[u][a];
        c[n[u][a]] = t(f);
      }
    c[u] = t(u);
  }
  for (a = 0; a < o.length; a++)
    c[o[a]] = t(o[a]);
  return c;
}
function He(e, r, t) {
  return t[r] != null ? t[r] : e.props[r];
}
function bu(e, r) {
  return cn(e.children, function(t) {
    return qr(t, {
      onExited: r.bind(null, t),
      in: !0,
      appear: He(t, "appear", e),
      enter: He(t, "enter", e),
      exit: He(t, "exit", e)
    });
  });
}
function Eu(e, r, t) {
  var n = cn(e.children), o = vu(r, n);
  return Object.keys(o).forEach(function(i) {
    var a = o[i];
    if (Br(a)) {
      var c = i in r, u = i in n, f = r[i], d = Br(f) && !f.props.in;
      u && (!c || d) ? o[i] = qr(a, {
        onExited: t.bind(null, a),
        in: !0,
        exit: He(a, "exit", e),
        enter: He(a, "enter", e)
      }) : !u && c && !d ? o[i] = qr(a, {
        in: !1
      }) : u && c && Br(f) && (o[i] = qr(a, {
        onExited: t.bind(null, a),
        in: f.props.in,
        exit: He(a, "exit", e),
        enter: He(a, "enter", e)
      }));
    }
  }), o;
}
var Mu = Object.values || function(e) {
  return Object.keys(e).map(function(r) {
    return e[r];
  });
}, Tu = {
  component: "div",
  childFactory: function(r) {
    return r;
  }
}, un = /* @__PURE__ */ function(e) {
  hu(r, e);
  function r(n, o) {
    var i;
    i = e.call(this, n, o) || this;
    var a = i.handleExited.bind(gu(i));
    return i.state = {
      contextValue: {
        isMounting: !0
      },
      handleExited: a,
      firstRender: !0
    }, i;
  }
  var t = r.prototype;
  return t.componentDidMount = function() {
    this.mounted = !0, this.setState({
      contextValue: {
        isMounting: !1
      }
    });
  }, t.componentWillUnmount = function() {
    this.mounted = !1;
  }, r.getDerivedStateFromProps = function(o, i) {
    var a = i.children, c = i.handleExited, u = i.firstRender;
    return {
      children: u ? bu(o, c) : Eu(o, a, c),
      firstRender: !1
    };
  }, t.handleExited = function(o, i) {
    var a = cn(this.props.children);
    o.key in a || (o.props.onExited && o.props.onExited(i), this.mounted && this.setState(function(c) {
      var u = L({}, c.children);
      return delete u[o.key], {
        children: u
      };
    }));
  }, t.render = function() {
    var o = this.props, i = o.component, a = o.childFactory, c = Le(o, ["component", "childFactory"]), u = this.state.contextValue, f = Mu(this.state.children).map(a);
    return delete c.appear, delete c.enter, delete c.exit, i === null ? /* @__PURE__ */ Ge.createElement(po.Provider, {
      value: u
    }, f) : /* @__PURE__ */ Ge.createElement(po.Provider, {
      value: u
    }, /* @__PURE__ */ Ge.createElement(i, c, f));
  }, r;
}(Ge.Component);
un.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * `<TransitionGroup>` renders a `<div>` by default. You can change this
   * behavior by providing a `component` prop.
   * If you use React v16+ and would like to avoid a wrapping `<div>` element
   * you can pass in `component={null}`. This is useful if the wrapping div
   * borks your css styles.
   */
  component: b.any,
  /**
   * A set of `<Transition>` components, that are toggled `in` and out as they
   * leave. the `<TransitionGroup>` will inject specific transition props, so
   * remember to spread them through if you are wrapping the `<Transition>` as
   * with our `<Fade>` example.
   *
   * While this component is meant for multiple `Transition` or `CSSTransition`
   * children, sometimes you may want to have a single transition child with
   * content that you want to be transitioned out and in when you change it
   * (e.g. routes, images etc.) In that case you can change the `key` prop of
   * the transition child as you change its content, this will cause
   * `TransitionGroup` to transition the child out and back in.
   */
  children: b.node,
  /**
   * A convenience prop that enables or disables appear animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  appear: b.bool,
  /**
   * A convenience prop that enables or disables enter animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  enter: b.bool,
  /**
   * A convenience prop that enables or disables exit animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  exit: b.bool,
  /**
   * You may need to apply reactive updates to a child as it is exiting.
   * This is generally done by using `cloneElement` however in the case of an exiting
   * child the element has already been removed and not accessible to the consumer.
   *
   * If you do need to update a child as it leaves you can provide a `childFactory`
   * to wrap every child, even the ones that are leaving.
   *
   * @type Function(child: ReactElement) -> ReactElement
   */
  childFactory: b.func
} : {};
un.defaultProps = Tu;
const xu = un;
function Bo(e) {
  const {
    className: r,
    classes: t,
    pulsate: n = !1,
    rippleX: o,
    rippleY: i,
    rippleSize: a,
    in: c,
    onExited: u,
    timeout: f
  } = e, [d, p] = R.useState(!1), y = De(r, t.ripple, t.rippleVisible, n && t.ripplePulsate), E = {
    width: a,
    height: a,
    top: -(a / 2) + i,
    left: -(a / 2) + o
  }, v = De(t.child, d && t.childLeaving, n && t.childPulsate);
  return !c && !d && p(!0), R.useEffect(() => {
    if (!c && u != null) {
      const m = setTimeout(u, f);
      return () => {
        clearTimeout(m);
      };
    }
  }, [u, c, f]), /* @__PURE__ */ ue.jsx("span", {
    className: y,
    style: E,
    children: /* @__PURE__ */ ue.jsx("span", {
      className: v
    })
  });
}
process.env.NODE_ENV !== "production" && (Bo.propTypes = {
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: b.object.isRequired,
  className: b.string,
  /**
   * @ignore - injected from TransitionGroup
   */
  in: b.bool,
  /**
   * @ignore - injected from TransitionGroup
   */
  onExited: b.func,
  /**
   * If `true`, the ripple pulsates, typically indicating the keyboard focus state of an element.
   */
  pulsate: b.bool,
  /**
   * Diameter of the ripple.
   */
  rippleSize: b.number,
  /**
   * Horizontal position of the ripple center.
   */
  rippleX: b.number,
  /**
   * Vertical position of the ripple center.
   */
  rippleY: b.number,
  /**
   * exit delay
   */
  timeout: b.number.isRequired
});
const Su = Wt("MuiTouchRipple", ["root", "ripple", "rippleVisible", "ripplePulsate", "child", "childLeaving", "childPulsate"]), Pe = Su, Nu = ["center", "classes", "className"];
let gt = (e) => e, mo, yo, ho, go;
const Ut = 550, Cu = 80, Ou = Zt(mo || (mo = gt`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)), ju = Zt(yo || (yo = gt`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)), _u = Zt(ho || (ho = gt`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)), Ru = yr("span", {
  name: "MuiTouchRipple",
  slot: "Root"
})({
  overflow: "hidden",
  pointerEvents: "none",
  position: "absolute",
  zIndex: 0,
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  borderRadius: "inherit"
}), wu = yr(Bo, {
  name: "MuiTouchRipple",
  slot: "Ripple"
})(go || (go = gt`
  opacity: 0;
  position: absolute;

  &.${0} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  &.${0} {
    animation-duration: ${0}ms;
  }

  & .${0} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${0} {
    opacity: 0;
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  & .${0} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${0};
    animation-duration: 2500ms;
    animation-timing-function: ${0};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`), Pe.rippleVisible, Ou, Ut, ({
  theme: e
}) => e.transitions.easing.easeInOut, Pe.ripplePulsate, ({
  theme: e
}) => e.transitions.duration.shorter, Pe.child, Pe.childLeaving, ju, Ut, ({
  theme: e
}) => e.transitions.easing.easeInOut, Pe.childPulsate, _u, ({
  theme: e
}) => e.transitions.easing.easeInOut), qo = /* @__PURE__ */ R.forwardRef(function(r, t) {
  const n = sn({
    props: r,
    name: "MuiTouchRipple"
  }), {
    center: o = !1,
    classes: i = {},
    className: a
  } = n, c = Le(n, Nu), [u, f] = R.useState([]), d = R.useRef(0), p = R.useRef(null);
  R.useEffect(() => {
    p.current && (p.current(), p.current = null);
  }, [u]);
  const y = R.useRef(!1), E = R.useRef(0), v = R.useRef(null), m = R.useRef(null);
  R.useEffect(() => () => {
    E.current && clearTimeout(E.current);
  }, []);
  const h = R.useCallback((x) => {
    const {
      pulsate: l,
      rippleX: w,
      rippleY: A,
      rippleSize: me,
      cb: le
    } = x;
    f((D) => [...D, /* @__PURE__ */ ue.jsx(wu, {
      classes: {
        ripple: De(i.ripple, Pe.ripple),
        rippleVisible: De(i.rippleVisible, Pe.rippleVisible),
        ripplePulsate: De(i.ripplePulsate, Pe.ripplePulsate),
        child: De(i.child, Pe.child),
        childLeaving: De(i.childLeaving, Pe.childLeaving),
        childPulsate: De(i.childPulsate, Pe.childPulsate)
      },
      timeout: Ut,
      pulsate: l,
      rippleX: w,
      rippleY: A,
      rippleSize: me
    }, d.current)]), d.current += 1, p.current = le;
  }, [i]), S = R.useCallback((x = {}, l = {}, w = () => {
  }) => {
    const {
      pulsate: A = !1,
      center: me = o || l.pulsate,
      fakeElement: le = !1
      // For test purposes
    } = l;
    if ((x == null ? void 0 : x.type) === "mousedown" && y.current) {
      y.current = !1;
      return;
    }
    (x == null ? void 0 : x.type) === "touchstart" && (y.current = !0);
    const D = le ? null : m.current, ae = D ? D.getBoundingClientRect() : {
      width: 0,
      height: 0,
      left: 0,
      top: 0
    };
    let ye, oe, ie;
    if (me || x === void 0 || x.clientX === 0 && x.clientY === 0 || !x.clientX && !x.touches)
      ye = Math.round(ae.width / 2), oe = Math.round(ae.height / 2);
    else {
      const {
        clientX: fe,
        clientY: se
      } = x.touches && x.touches.length > 0 ? x.touches[0] : x;
      ye = Math.round(fe - ae.left), oe = Math.round(se - ae.top);
    }
    if (me)
      ie = Math.sqrt((2 * ae.width ** 2 + ae.height ** 2) / 3), ie % 2 === 0 && (ie += 1);
    else {
      const fe = Math.max(Math.abs((D ? D.clientWidth : 0) - ye), ye) * 2 + 2, se = Math.max(Math.abs((D ? D.clientHeight : 0) - oe), oe) * 2 + 2;
      ie = Math.sqrt(fe ** 2 + se ** 2);
    }
    x != null && x.touches ? v.current === null && (v.current = () => {
      h({
        pulsate: A,
        rippleX: ye,
        rippleY: oe,
        rippleSize: ie,
        cb: w
      });
    }, E.current = setTimeout(() => {
      v.current && (v.current(), v.current = null);
    }, Cu)) : h({
      pulsate: A,
      rippleX: ye,
      rippleY: oe,
      rippleSize: ie,
      cb: w
    });
  }, [o, h]), j = R.useCallback(() => {
    S({}, {
      pulsate: !0
    });
  }, [S]), C = R.useCallback((x, l) => {
    if (clearTimeout(E.current), (x == null ? void 0 : x.type) === "touchend" && v.current) {
      v.current(), v.current = null, E.current = setTimeout(() => {
        C(x, l);
      });
      return;
    }
    v.current = null, f((w) => w.length > 0 ? w.slice(1) : w), p.current = l;
  }, []);
  return R.useImperativeHandle(t, () => ({
    pulsate: j,
    start: S,
    stop: C
  }), [j, S, C]), /* @__PURE__ */ ue.jsx(Ru, L({
    className: De(Pe.root, i.root, a),
    ref: m
  }, c, {
    children: /* @__PURE__ */ ue.jsx(xu, {
      component: null,
      exit: !0,
      children: u
    })
  }));
});
process.env.NODE_ENV !== "production" && (qo.propTypes = {
  /**
   * If `true`, the ripple starts at the center of the component
   * rather than at the point of interaction.
   */
  center: b.bool,
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: b.object,
  /**
   * @ignore
   */
  className: b.string
});
const Iu = qo;
function Au(e) {
  return rt("MuiButtonBase", e);
}
const Du = Wt("MuiButtonBase", ["root", "disabled", "focusVisible"]), Pu = Du, Lu = ["action", "centerRipple", "children", "className", "component", "disabled", "disableRipple", "disableTouchRipple", "focusRipple", "focusVisibleClassName", "LinkComponent", "onBlur", "onClick", "onContextMenu", "onDragLeave", "onFocus", "onFocusVisible", "onKeyDown", "onKeyUp", "onMouseDown", "onMouseLeave", "onMouseUp", "onTouchEnd", "onTouchMove", "onTouchStart", "tabIndex", "TouchRippleProps", "touchRippleRef", "type"], $u = (e) => {
  const {
    disabled: r,
    focusVisible: t,
    focusVisibleClassName: n,
    classes: o
  } = e, a = To({
    root: ["root", r && "disabled", t && "focusVisible"]
  }, Au, o);
  return t && n && (a.root += ` ${n}`), a;
}, ku = yr("button", {
  name: "MuiButtonBase",
  slot: "Root",
  overridesResolver: (e, r) => r.root
})({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  boxSizing: "border-box",
  WebkitTapHighlightColor: "transparent",
  backgroundColor: "transparent",
  // Reset default value
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0,
  border: 0,
  margin: 0,
  // Remove the margin in Safari
  borderRadius: 0,
  padding: 0,
  // Remove the padding in Firefox
  cursor: "pointer",
  userSelect: "none",
  verticalAlign: "middle",
  MozAppearance: "none",
  // Reset
  WebkitAppearance: "none",
  // Reset
  textDecoration: "none",
  // So we take precedent over the style of a native <a /> element.
  color: "inherit",
  "&::-moz-focus-inner": {
    borderStyle: "none"
    // Remove Firefox dotted outline.
  },
  [`&.${Pu.disabled}`]: {
    pointerEvents: "none",
    // Disable link interactions
    cursor: "default"
  },
  "@media print": {
    colorAdjust: "exact"
  }
}), Go = /* @__PURE__ */ R.forwardRef(function(r, t) {
  const n = sn({
    props: r,
    name: "MuiButtonBase"
  }), {
    action: o,
    centerRipple: i = !1,
    children: a,
    className: c,
    component: u = "button",
    disabled: f = !1,
    disableRipple: d = !1,
    disableTouchRipple: p = !1,
    focusRipple: y = !1,
    LinkComponent: E = "a",
    onBlur: v,
    onClick: m,
    onContextMenu: h,
    onDragLeave: S,
    onFocus: j,
    onFocusVisible: C,
    onKeyDown: x,
    onKeyUp: l,
    onMouseDown: w,
    onMouseLeave: A,
    onMouseUp: me,
    onTouchEnd: le,
    onTouchMove: D,
    onTouchStart: ae,
    tabIndex: ye = 0,
    TouchRippleProps: oe,
    touchRippleRef: ie,
    type: fe
  } = n, se = Le(n, Lu), Ee = R.useRef(null), de = R.useRef(null), Re = An(de, ie), {
    isFocusVisibleRef: M,
    onFocus: O,
    onBlur: F,
    ref: Y
  } = ia(), [I, V] = R.useState(!1);
  f && I && V(!1), R.useImperativeHandle(o, () => ({
    focusVisible: () => {
      V(!0), Ee.current.focus();
    }
  }), []);
  const [P, k] = R.useState(!1);
  R.useEffect(() => {
    k(!0);
  }, []);
  const U = P && !d && !f;
  R.useEffect(() => {
    I && y && !d && P && de.current.pulsate();
  }, [d, y, I, P]);
  function $(B, br, Er = p) {
    return Ur((kr) => (br && br(kr), !Er && de.current && de.current[B](kr), !0));
  }
  const W = $("start", w), he = $("stop", h), g = $("stop", S), Me = $("stop", me), _ = $("stop", (B) => {
    I && B.preventDefault(), A && A(B);
  }), Ne = $("start", ae), $e = $("stop", le), Ke = $("stop", D), Lr = $("stop", (B) => {
    F(B), M.current === !1 && V(!1), v && v(B);
  }, !1), Je = Ur((B) => {
    Ee.current || (Ee.current = B.currentTarget), O(B), M.current === !0 && (V(!0), C && C(B)), j && j(B);
  }), hr = () => {
    const B = Ee.current;
    return u && u !== "button" && !(B.tagName === "A" && B.href);
  }, gr = R.useRef(!1), vr = Ur((B) => {
    y && !gr.current && I && de.current && B.key === " " && (gr.current = !0, de.current.stop(B, () => {
      de.current.start(B);
    })), B.target === B.currentTarget && hr() && B.key === " " && B.preventDefault(), x && x(B), B.target === B.currentTarget && hr() && B.key === "Enter" && !f && (B.preventDefault(), m && m(B));
  }), vt = Ur((B) => {
    y && B.key === " " && de.current && I && !B.defaultPrevented && (gr.current = !1, de.current.stop(B, () => {
      de.current.pulsate(B);
    })), l && l(B), m && B.target === B.currentTarget && hr() && B.key === " " && !B.defaultPrevented && m(B);
  });
  let Ze = u;
  Ze === "button" && (se.href || se.to) && (Ze = E);
  const Be = {};
  Ze === "button" ? (Be.type = fe === void 0 ? "button" : fe, Be.disabled = f) : (!se.href && !se.to && (Be.role = "button"), f && (Be["aria-disabled"] = f));
  const $r = An(t, Y, Ee);
  process.env.NODE_ENV !== "production" && R.useEffect(() => {
    U && !de.current && console.error(["MUI: The `component` prop provided to ButtonBase is invalid.", "Please make sure the children prop is rendered in this custom component."].join(`
`));
  }, [U]);
  const qe = L({}, n, {
    centerRipple: i,
    component: u,
    disabled: f,
    disableRipple: d,
    disableTouchRipple: p,
    focusRipple: y,
    tabIndex: ye,
    focusVisible: I
  }), bt = $u(qe);
  return /* @__PURE__ */ ue.jsxs(ku, L({
    as: Ze,
    className: De(bt.root, c),
    ownerState: qe,
    onBlur: Lr,
    onClick: m,
    onContextMenu: he,
    onFocus: Je,
    onKeyDown: vr,
    onKeyUp: vt,
    onMouseDown: W,
    onMouseLeave: _,
    onMouseUp: Me,
    onDragLeave: g,
    onTouchEnd: $e,
    onTouchMove: Ke,
    onTouchStart: Ne,
    ref: $r,
    tabIndex: f ? -1 : ye,
    type: fe
  }, Be, se, {
    children: [a, U ? (
      /* TouchRipple is only needed client-side, x2 boost on the server. */
      /* @__PURE__ */ ue.jsx(Iu, L({
        ref: Re,
        center: i
      }, oe))
    ) : null]
  }));
});
process.env.NODE_ENV !== "production" && (Go.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * A ref for imperative actions.
   * It currently only supports `focusVisible()` action.
   */
  action: Ki,
  /**
   * If `true`, the ripples are centered.
   * They won't start at the cursor interaction position.
   * @default false
   */
  centerRipple: b.bool,
  /**
   * The content of the component.
   */
  children: b.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: b.object,
  /**
   * @ignore
   */
  className: b.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: Fi,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: b.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: b.bool,
  /**
   * If `true`, the touch ripple effect is disabled.
   * @default false
   */
  disableTouchRipple: b.bool,
  /**
   * If `true`, the base button will have a keyboard focus ripple.
   * @default false
   */
  focusRipple: b.bool,
  /**
   * This prop can help identify which element has keyboard focus.
   * The class name will be applied when the element gains the focus through keyboard interaction.
   * It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
   * The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/HEAD/explainer.md).
   * A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a `focus-visible` class to other components
   * if needed.
   */
  focusVisibleClassName: b.string,
  /**
   * @ignore
   */
  href: b.any,
  /**
   * The component used to render a link when the `href` prop is provided.
   * @default 'a'
   */
  LinkComponent: b.elementType,
  /**
   * @ignore
   */
  onBlur: b.func,
  /**
   * @ignore
   */
  onClick: b.func,
  /**
   * @ignore
   */
  onContextMenu: b.func,
  /**
   * @ignore
   */
  onDragLeave: b.func,
  /**
   * @ignore
   */
  onFocus: b.func,
  /**
   * Callback fired when the component is focused with a keyboard.
   * We trigger a `onFocus` callback too.
   */
  onFocusVisible: b.func,
  /**
   * @ignore
   */
  onKeyDown: b.func,
  /**
   * @ignore
   */
  onKeyUp: b.func,
  /**
   * @ignore
   */
  onMouseDown: b.func,
  /**
   * @ignore
   */
  onMouseLeave: b.func,
  /**
   * @ignore
   */
  onMouseUp: b.func,
  /**
   * @ignore
   */
  onTouchEnd: b.func,
  /**
   * @ignore
   */
  onTouchMove: b.func,
  /**
   * @ignore
   */
  onTouchStart: b.func,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: b.oneOfType([b.arrayOf(b.oneOfType([b.func, b.object, b.bool])), b.func, b.object]),
  /**
   * @default 0
   */
  tabIndex: b.number,
  /**
   * Props applied to the `TouchRipple` element.
   */
  TouchRippleProps: b.object,
  /**
   * A ref that points to the `TouchRipple` element.
   */
  touchRippleRef: b.oneOfType([b.func, b.shape({
    current: b.shape({
      pulsate: b.func.isRequired,
      start: b.func.isRequired,
      stop: b.func.isRequired
    })
  })]),
  /**
   * @ignore
   */
  type: b.oneOfType([b.oneOf(["button", "reset", "submit"]), b.string])
});
const zu = Go;
function Yu(e) {
  return rt("MuiButton", e);
}
const Uu = Wt("MuiButton", ["root", "text", "textInherit", "textPrimary", "textSecondary", "textSuccess", "textError", "textInfo", "textWarning", "outlined", "outlinedInherit", "outlinedPrimary", "outlinedSecondary", "outlinedSuccess", "outlinedError", "outlinedInfo", "outlinedWarning", "contained", "containedInherit", "containedPrimary", "containedSecondary", "containedSuccess", "containedError", "containedInfo", "containedWarning", "disableElevation", "focusVisible", "disabled", "colorInherit", "textSizeSmall", "textSizeMedium", "textSizeLarge", "outlinedSizeSmall", "outlinedSizeMedium", "outlinedSizeLarge", "containedSizeSmall", "containedSizeMedium", "containedSizeLarge", "sizeMedium", "sizeSmall", "sizeLarge", "fullWidth", "startIcon", "endIcon", "iconSizeSmall", "iconSizeMedium", "iconSizeLarge"]), Wr = Uu, Qo = /* @__PURE__ */ R.createContext({});
process.env.NODE_ENV !== "production" && (Qo.displayName = "ButtonGroupContext");
const Fu = Qo, Vu = ["children", "color", "component", "className", "disabled", "disableElevation", "disableFocusRipple", "endIcon", "focusVisibleClassName", "fullWidth", "size", "startIcon", "type", "variant"], Wu = (e) => {
  const {
    color: r,
    disableElevation: t,
    fullWidth: n,
    size: o,
    variant: i,
    classes: a
  } = e, c = {
    root: ["root", i, `${i}${je(r)}`, `size${je(o)}`, `${i}Size${je(o)}`, r === "inherit" && "colorInherit", t && "disableElevation", n && "fullWidth"],
    label: ["label"],
    startIcon: ["startIcon", `iconSize${je(o)}`],
    endIcon: ["endIcon", `iconSize${je(o)}`]
  }, u = To(c, Yu, a);
  return L({}, a, u);
}, Ko = (e) => L({}, e.size === "small" && {
  "& > *:nth-of-type(1)": {
    fontSize: 18
  }
}, e.size === "medium" && {
  "& > *:nth-of-type(1)": {
    fontSize: 20
  }
}, e.size === "large" && {
  "& > *:nth-of-type(1)": {
    fontSize: 22
  }
}), Bu = yr(zu, {
  shouldForwardProp: (e) => Wo(e) || e === "classes",
  name: "MuiButton",
  slot: "Root",
  overridesResolver: (e, r) => {
    const {
      ownerState: t
    } = e;
    return [r.root, r[t.variant], r[`${t.variant}${je(t.color)}`], r[`size${je(t.size)}`], r[`${t.variant}Size${je(t.size)}`], t.color === "inherit" && r.colorInherit, t.disableElevation && r.disableElevation, t.fullWidth && r.fullWidth];
  }
})(({
  theme: e,
  ownerState: r
}) => {
  var t, n;
  const o = e.palette.mode === "light" ? e.palette.grey[300] : e.palette.grey[800], i = e.palette.mode === "light" ? e.palette.grey.A100 : e.palette.grey[700];
  return L({}, e.typography.button, {
    minWidth: 64,
    padding: "6px 16px",
    borderRadius: (e.vars || e).shape.borderRadius,
    transition: e.transitions.create(["background-color", "box-shadow", "border-color", "color"], {
      duration: e.transitions.duration.short
    }),
    "&:hover": L({
      textDecoration: "none",
      backgroundColor: e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})` : Vr(e.palette.text.primary, e.palette.action.hoverOpacity),
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: "transparent"
      }
    }, r.variant === "text" && r.color !== "inherit" && {
      backgroundColor: e.vars ? `rgba(${e.vars.palette[r.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : Vr(e.palette[r.color].main, e.palette.action.hoverOpacity),
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: "transparent"
      }
    }, r.variant === "outlined" && r.color !== "inherit" && {
      border: `1px solid ${(e.vars || e).palette[r.color].main}`,
      backgroundColor: e.vars ? `rgba(${e.vars.palette[r.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : Vr(e.palette[r.color].main, e.palette.action.hoverOpacity),
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: "transparent"
      }
    }, r.variant === "contained" && {
      backgroundColor: e.vars ? e.vars.palette.Button.inheritContainedHoverBg : i,
      boxShadow: (e.vars || e).shadows[4],
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        boxShadow: (e.vars || e).shadows[2],
        backgroundColor: (e.vars || e).palette.grey[300]
      }
    }, r.variant === "contained" && r.color !== "inherit" && {
      backgroundColor: (e.vars || e).palette[r.color].dark,
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: (e.vars || e).palette[r.color].main
      }
    }),
    "&:active": L({}, r.variant === "contained" && {
      boxShadow: (e.vars || e).shadows[8]
    }),
    [`&.${Wr.focusVisible}`]: L({}, r.variant === "contained" && {
      boxShadow: (e.vars || e).shadows[6]
    }),
    [`&.${Wr.disabled}`]: L({
      color: (e.vars || e).palette.action.disabled
    }, r.variant === "outlined" && {
      border: `1px solid ${(e.vars || e).palette.action.disabledBackground}`
    }, r.variant === "contained" && {
      color: (e.vars || e).palette.action.disabled,
      boxShadow: (e.vars || e).shadows[0],
      backgroundColor: (e.vars || e).palette.action.disabledBackground
    })
  }, r.variant === "text" && {
    padding: "6px 8px"
  }, r.variant === "text" && r.color !== "inherit" && {
    color: (e.vars || e).palette[r.color].main
  }, r.variant === "outlined" && {
    padding: "5px 15px",
    border: "1px solid currentColor"
  }, r.variant === "outlined" && r.color !== "inherit" && {
    color: (e.vars || e).palette[r.color].main,
    border: e.vars ? `1px solid rgba(${e.vars.palette[r.color].mainChannel} / 0.5)` : `1px solid ${Vr(e.palette[r.color].main, 0.5)}`
  }, r.variant === "contained" && {
    color: e.vars ? (
      // this is safe because grey does not change between default light/dark mode
      e.vars.palette.text.primary
    ) : (t = (n = e.palette).getContrastText) == null ? void 0 : t.call(n, e.palette.grey[300]),
    backgroundColor: e.vars ? e.vars.palette.Button.inheritContainedBg : o,
    boxShadow: (e.vars || e).shadows[2]
  }, r.variant === "contained" && r.color !== "inherit" && {
    color: (e.vars || e).palette[r.color].contrastText,
    backgroundColor: (e.vars || e).palette[r.color].main
  }, r.color === "inherit" && {
    color: "inherit",
    borderColor: "currentColor"
  }, r.size === "small" && r.variant === "text" && {
    padding: "4px 5px",
    fontSize: e.typography.pxToRem(13)
  }, r.size === "large" && r.variant === "text" && {
    padding: "8px 11px",
    fontSize: e.typography.pxToRem(15)
  }, r.size === "small" && r.variant === "outlined" && {
    padding: "3px 9px",
    fontSize: e.typography.pxToRem(13)
  }, r.size === "large" && r.variant === "outlined" && {
    padding: "7px 21px",
    fontSize: e.typography.pxToRem(15)
  }, r.size === "small" && r.variant === "contained" && {
    padding: "4px 10px",
    fontSize: e.typography.pxToRem(13)
  }, r.size === "large" && r.variant === "contained" && {
    padding: "8px 22px",
    fontSize: e.typography.pxToRem(15)
  }, r.fullWidth && {
    width: "100%"
  });
}, ({
  ownerState: e
}) => e.disableElevation && {
  boxShadow: "none",
  "&:hover": {
    boxShadow: "none"
  },
  [`&.${Wr.focusVisible}`]: {
    boxShadow: "none"
  },
  "&:active": {
    boxShadow: "none"
  },
  [`&.${Wr.disabled}`]: {
    boxShadow: "none"
  }
}), qu = yr("span", {
  name: "MuiButton",
  slot: "StartIcon",
  overridesResolver: (e, r) => {
    const {
      ownerState: t
    } = e;
    return [r.startIcon, r[`iconSize${je(t.size)}`]];
  }
})(({
  ownerState: e
}) => L({
  display: "inherit",
  marginRight: 8,
  marginLeft: -4
}, e.size === "small" && {
  marginLeft: -2
}, Ko(e))), Gu = yr("span", {
  name: "MuiButton",
  slot: "EndIcon",
  overridesResolver: (e, r) => {
    const {
      ownerState: t
    } = e;
    return [r.endIcon, r[`iconSize${je(t.size)}`]];
  }
})(({
  ownerState: e
}) => L({
  display: "inherit",
  marginRight: -4,
  marginLeft: 8
}, e.size === "small" && {
  marginRight: -2
}, Ko(e))), Ho = /* @__PURE__ */ R.forwardRef(function(r, t) {
  const n = R.useContext(Fu), o = Vt(n, r), i = sn({
    props: o,
    name: "MuiButton"
  }), {
    children: a,
    color: c = "primary",
    component: u = "button",
    className: f,
    disabled: d = !1,
    disableElevation: p = !1,
    disableFocusRipple: y = !1,
    endIcon: E,
    focusVisibleClassName: v,
    fullWidth: m = !1,
    size: h = "medium",
    startIcon: S,
    type: j,
    variant: C = "text"
  } = i, x = Le(i, Vu), l = L({}, i, {
    color: c,
    component: u,
    disabled: d,
    disableElevation: p,
    disableFocusRipple: y,
    fullWidth: m,
    size: h,
    type: j,
    variant: C
  }), w = Wu(l), A = S && /* @__PURE__ */ ue.jsx(qu, {
    className: w.startIcon,
    ownerState: l,
    children: S
  }), me = E && /* @__PURE__ */ ue.jsx(Gu, {
    className: w.endIcon,
    ownerState: l,
    children: E
  });
  return /* @__PURE__ */ ue.jsxs(Bu, L({
    ownerState: l,
    className: De(n.className, w.root, f),
    component: u,
    disabled: d,
    focusRipple: !y,
    focusVisibleClassName: De(w.focusVisible, v),
    ref: t,
    type: j
  }, x, {
    classes: w,
    children: [A, a, me]
  }));
});
process.env.NODE_ENV !== "production" && (Ho.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The content of the component.
   */
  children: b.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: b.object,
  /**
   * @ignore
   */
  className: b.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#adding-new-colors).
   * @default 'primary'
   */
  color: b.oneOfType([b.oneOf(["inherit", "primary", "secondary", "success", "error", "info", "warning"]), b.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: b.elementType,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: b.bool,
  /**
   * If `true`, no elevation is used.
   * @default false
   */
  disableElevation: b.bool,
  /**
   * If `true`, the  keyboard focus ripple is disabled.
   * @default false
   */
  disableFocusRipple: b.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: b.bool,
  /**
   * Element placed after the children.
   */
  endIcon: b.node,
  /**
   * @ignore
   */
  focusVisibleClassName: b.string,
  /**
   * If `true`, the button will take up the full width of its container.
   * @default false
   */
  fullWidth: b.bool,
  /**
   * The URL to link to when the button is clicked.
   * If defined, an `a` element will be used as the root node.
   */
  href: b.string,
  /**
   * The size of the component.
   * `small` is equivalent to the dense button styling.
   * @default 'medium'
   */
  size: b.oneOfType([b.oneOf(["small", "medium", "large"]), b.string]),
  /**
   * Element placed before the children.
   */
  startIcon: b.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: b.oneOfType([b.arrayOf(b.oneOfType([b.func, b.object, b.bool])), b.func, b.object]),
  /**
   * @ignore
   */
  type: b.oneOfType([b.oneOf(["button", "reset", "submit"]), b.string]),
  /**
   * The variant to use.
   * @default 'text'
   */
  variant: b.oneOfType([b.oneOf(["contained", "outlined", "text"]), b.string])
});
const Qu = Ho;
const Ku = ({
  primary: e = !1,
  size: r = "medium",
  backgroundColor: t,
  label: n,
  ...o
}) => {
  const i = e ? "storybook-button--primary" : "storybook-button--secondary";
  return /* @__PURE__ */ ue.jsx(
    Qu,
    {
      className: ["storybook-button", `storybook-button--${r}`, i].join(
        " "
      ),
      style: { backgroundColor: t },
      ...o,
      children: n
    }
  );
};
function Hu() {
  const [e, r] = pi(0);
  return /* @__PURE__ */ ue.jsxs(ue.Fragment, { children: [
    /* @__PURE__ */ ue.jsxs("div", { children: [
      /* @__PURE__ */ ue.jsx("a", { href: "https://vitejs.dev", target: "_blank", children: /* @__PURE__ */ ue.jsx("img", { src: Ei, className: "logo", alt: "Vite logo" }) }),
      /* @__PURE__ */ ue.jsx("a", { href: "https://react.dev", target: "_blank", children: /* @__PURE__ */ ue.jsx("img", { src: bi, className: "logo react", alt: "React logo" }) })
    ] }),
    /* @__PURE__ */ ue.jsx("h1", { children: "Vite + React" }),
    /* @__PURE__ */ ue.jsxs("div", { className: "card", children: [
      /* @__PURE__ */ ue.jsx(
        Ku,
        {
          onClick: () => r((t) => t + 1),
          label: `count is ${e}`
        }
      ),
      /* @__PURE__ */ ue.jsxs("p", { children: [
        "Edit ",
        /* @__PURE__ */ ue.jsx("code", { children: "src/App.tsx" }),
        " and save to test HMR"
      ] })
    ] }),
    /* @__PURE__ */ ue.jsx("p", { className: "read-the-docs", children: "Click on the Vite and React logos to learn more" })
  ] });
}
Or.createRoot(document.getElementById("root")).render(
  /* @__PURE__ */ ue.jsx(Ge.StrictMode, { children: /* @__PURE__ */ ue.jsx(Hu, {}) })
);
export {
  Ku as Button
};
