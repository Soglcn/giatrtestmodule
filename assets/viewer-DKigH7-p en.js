import {c as a0, d as s0, E as u0, V as Ee, e as Zt, T as Jt, Q as ka, f as Ga, b as Ae, g as c0, S as d0, C as p0, P as f0, W as m0, A as h0, F as g0, R as y0, h as v0} from "./FBXLoader-CkEVmeCW.js";
function w0(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}
var Rs = {
    exports: {}
}
  , Ii = {}
  , zs = {
    exports: {}
}
  , N = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var wr = Symbol.for("react.element")
  , E0 = Symbol.for("react.portal")
  , k0 = Symbol.for("react.fragment")
  , G0 = Symbol.for("react.strict_mode")
  , x0 = Symbol.for("react.profiler")
  , S0 = Symbol.for("react.provider")
  , P0 = Symbol.for("react.context")
  , I0 = Symbol.for("react.forward_ref")
  , O0 = Symbol.for("react.suspense")
  , A0 = Symbol.for("react.memo")
  , F0 = Symbol.for("react.lazy")
  , xa = Symbol.iterator;
function _0(e) {
    return e === null || typeof e != "object" ? null : (e = xa && e[xa] || e["@@iterator"],
    typeof e == "function" ? e : null)
}
var Ms = {
    isMounted: function() {
        return !1
    },
    enqueueForceUpdate: function() {},
    enqueueReplaceState: function() {},
    enqueueSetState: function() {}
}
  , Ds = Object.assign
  , js = {};
function In(e, t, n) {
    this.props = e,
    this.context = t,
    this.refs = js,
    this.updater = n || Ms
}
In.prototype.isReactComponent = {};
In.prototype.setState = function(e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null)
        throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, e, t, "setState")
}
;
In.prototype.forceUpdate = function(e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate")
}
;
function Us() {}
Us.prototype = In.prototype;
function pl(e, t, n) {
    this.props = e,
    this.context = t,
    this.refs = js,
    this.updater = n || Ms
}
var fl = pl.prototype = new Us;
fl.constructor = pl;
Ds(fl, In.prototype);
fl.isPureReactComponent = !0;
var Sa = Array.isArray
  , Bs = Object.prototype.hasOwnProperty
  , ml = {
    current: null
}
  , Hs = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function Vs(e, t, n) {
    var r, i = {}, o = null, l = null;
    if (t != null)
        for (r in t.ref !== void 0 && (l = t.ref),
        t.key !== void 0 && (o = "" + t.key),
        t)
            Bs.call(t, r) && !Hs.hasOwnProperty(r) && (i[r] = t[r]);
    var a = arguments.length - 2;
    if (a === 1)
        i.children = n;
    else if (1 < a) {
        for (var s = Array(a), p = 0; p < a; p++)
            s[p] = arguments[p + 2];
        i.children = s
    }
    if (e && e.defaultProps)
        for (r in a = e.defaultProps,
        a)
            i[r] === void 0 && (i[r] = a[r]);
    return {
        $$typeof: wr,
        type: e,
        key: o,
        ref: l,
        props: i,
        _owner: ml.current
    }
}
function C0(e, t) {
    return {
        $$typeof: wr,
        type: e.type,
        key: t,
        ref: e.ref,
        props: e.props,
        _owner: e._owner
    }
}
function hl(e) {
    return typeof e == "object" && e !== null && e.$$typeof === wr
}
function T0(e) {
    var t = {
        "=": "=0",
        ":": "=2"
    };
    return "$" + e.replace(/[=:]/g, function(n) {
        return t[n]
    })
}
var Pa = /\/+/g;
function Wi(e, t) {
    return typeof e == "object" && e !== null && e.key != null ? T0("" + e.key) : t.toString(36)
}
function Wr(e, t, n, r, i) {
    var o = typeof e;
    (o === "undefined" || o === "boolean") && (e = null);
    var l = !1;
    if (e === null)
        l = !0;
    else
        switch (o) {
        case "string":
        case "number":
            l = !0;
            break;
        case "object":
            switch (e.$$typeof) {
            case wr:
            case E0:
                l = !0
            }
        }
    if (l)
        return l = e,
        i = i(l),
        e = r === "" ? "." + Wi(l, 0) : r,
        Sa(i) ? (n = "",
        e != null && (n = e.replace(Pa, "$&/") + "/"),
        Wr(i, t, n, "", function(p) {
            return p
        })) : i != null && (hl(i) && (i = C0(i, n + (!i.key || l && l.key === i.key ? "" : ("" + i.key).replace(Pa, "$&/") + "/") + e)),
        t.push(i)),
        1;
    if (l = 0,
    r = r === "" ? "." : r + ":",
    Sa(e))
        for (var a = 0; a < e.length; a++) {
            o = e[a];
            var s = r + Wi(o, a);
            l += Wr(o, t, n, s, i)
        }
    else if (s = _0(e),
    typeof s == "function")
        for (e = s.call(e),
        a = 0; !(o = e.next()).done; )
            o = o.value,
            s = r + Wi(o, a++),
            l += Wr(o, t, n, s, i);
    else if (o === "object")
        throw t = String(e),
        Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
    return l
}
function Ir(e, t, n) {
    if (e == null)
        return e;
    var r = []
      , i = 0;
    return Wr(e, r, "", "", function(o) {
        return t.call(n, o, i++)
    }),
    r
}
function N0(e) {
    if (e._status === -1) {
        var t = e._result;
        t = t(),
        t.then(function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 1,
            e._result = n)
        }, function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 2,
            e._result = n)
        }),
        e._status === -1 && (e._status = 0,
        e._result = t)
    }
    if (e._status === 1)
        return e._result.default;
    throw e._result
}
var fe = {
    current: null
}
  , $r = {
    transition: null
}
  , L0 = {
    ReactCurrentDispatcher: fe,
    ReactCurrentBatchConfig: $r,
    ReactCurrentOwner: ml
};
N.Children = {
    map: Ir,
    forEach: function(e, t, n) {
        Ir(e, function() {
            t.apply(this, arguments)
        }, n)
    },
    count: function(e) {
        var t = 0;
        return Ir(e, function() {
            t++
        }),
        t
    },
    toArray: function(e) {
        return Ir(e, function(t) {
            return t
        }) || []
    },
    only: function(e) {
        if (!hl(e))
            throw Error("React.Children.only expected to receive a single React element child.");
        return e
    }
};
N.Component = In;
N.Fragment = k0;
N.Profiler = x0;
N.PureComponent = pl;
N.StrictMode = G0;
N.Suspense = O0;
N.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = L0;
N.cloneElement = function(e, t, n) {
    if (e == null)
        throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
    var r = Ds({}, e.props)
      , i = e.key
      , o = e.ref
      , l = e._owner;
    if (t != null) {
        if (t.ref !== void 0 && (o = t.ref,
        l = ml.current),
        t.key !== void 0 && (i = "" + t.key),
        e.type && e.type.defaultProps)
            var a = e.type.defaultProps;
        for (s in t)
            Bs.call(t, s) && !Hs.hasOwnProperty(s) && (r[s] = t[s] === void 0 && a !== void 0 ? a[s] : t[s])
    }
    var s = arguments.length - 2;
    if (s === 1)
        r.children = n;
    else if (1 < s) {
        a = Array(s);
        for (var p = 0; p < s; p++)
            a[p] = arguments[p + 2];
        r.children = a
    }
    return {
        $$typeof: wr,
        type: e.type,
        key: i,
        ref: o,
        props: r,
        _owner: l
    }
}
;
N.createContext = function(e) {
    return e = {
        $$typeof: P0,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null
    },
    e.Provider = {
        $$typeof: S0,
        _context: e
    },
    e.Consumer = e
}
;
N.createElement = Vs;
N.createFactory = function(e) {
    var t = Vs.bind(null, e);
    return t.type = e,
    t
}
;
N.createRef = function() {
    return {
        current: null
    }
}
;
N.forwardRef = function(e) {
    return {
        $$typeof: I0,
        render: e
    }
}
;
N.isValidElement = hl;
N.lazy = function(e) {
    return {
        $$typeof: F0,
        _payload: {
            _status: -1,
            _result: e
        },
        _init: N0
    }
}
;
N.memo = function(e, t) {
    return {
        $$typeof: A0,
        type: e,
        compare: t === void 0 ? null : t
    }
}
;
N.startTransition = function(e) {
    var t = $r.transition;
    $r.transition = {};
    try {
        e()
    } finally {
        $r.transition = t
    }
}
;
N.unstable_act = function() {
    throw Error("act(...) is not supported in production builds of React.")
}
;
N.useCallback = function(e, t) {
    return fe.current.useCallback(e, t)
}
;
N.useContext = function(e) {
    return fe.current.useContext(e)
}
;
N.useDebugValue = function() {}
;
N.useDeferredValue = function(e) {
    return fe.current.useDeferredValue(e)
}
;
N.useEffect = function(e, t) {
    return fe.current.useEffect(e, t)
}
;
N.useId = function() {
    return fe.current.useId()
}
;
N.useImperativeHandle = function(e, t, n) {
    return fe.current.useImperativeHandle(e, t, n)
}
;
N.useInsertionEffect = function(e, t) {
    return fe.current.useInsertionEffect(e, t)
}
;
N.useLayoutEffect = function(e, t) {
    return fe.current.useLayoutEffect(e, t)
}
;
N.useMemo = function(e, t) {
    return fe.current.useMemo(e, t)
}
;
N.useReducer = function(e, t, n) {
    return fe.current.useReducer(e, t, n)
}
;
N.useRef = function(e) {
    return fe.current.useRef(e)
}
;
N.useState = function(e) {
    return fe.current.useState(e)
}
;
N.useSyncExternalStore = function(e, t, n) {
    return fe.current.useSyncExternalStore(e, t, n)
}
;
N.useTransition = function() {
    return fe.current.useTransition()
}
;
N.version = "18.2.0";
zs.exports = N;
var tr = zs.exports;
const R0 = w0(tr);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var z0 = tr
  , M0 = Symbol.for("react.element")
  , D0 = Symbol.for("react.fragment")
  , j0 = Object.prototype.hasOwnProperty
  , U0 = z0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner
  , B0 = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function Ws(e, t, n) {
    var r, i = {}, o = null, l = null;
    n !== void 0 && (o = "" + n),
    t.key !== void 0 && (o = "" + t.key),
    t.ref !== void 0 && (l = t.ref);
    for (r in t)
        j0.call(t, r) && !B0.hasOwnProperty(r) && (i[r] = t[r]);
    if (e && e.defaultProps)
        for (r in t = e.defaultProps,
        t)
            i[r] === void 0 && (i[r] = t[r]);
    return {
        $$typeof: M0,
        type: e,
        key: o,
        ref: l,
        props: i,
        _owner: U0.current
    }
}
Ii.Fragment = D0;
Ii.jsx = Ws;
Ii.jsxs = Ws;
Rs.exports = Ii;
var ae = Rs.exports
  , wo = {}
  , $s = {
    exports: {}
}
  , Pe = {}
  , bs = {
    exports: {}
}
  , Xs = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
    function t(S, F) {
        var _ = S.length;
        S.push(F);
        e: for (; 0 < _; ) {
            var H = _ - 1 >>> 1
              , Y = S[H];
            if (0 < i(Y, F))
                S[H] = F,
                S[_] = Y,
                _ = H;
            else
                break e
        }
    }
    function n(S) {
        return S.length === 0 ? null : S[0]
    }
    function r(S) {
        if (S.length === 0)
            return null;
        var F = S[0]
          , _ = S.pop();
        if (_ !== F) {
            S[0] = _;
            e: for (var H = 0, Y = S.length, Nt = Y >>> 1; H < Nt; ) {
                var Ke = 2 * (H + 1) - 1
                  , _n = S[Ke]
                  , Ze = Ke + 1
                  , Yt = S[Ze];
                if (0 > i(_n, _))
                    Ze < Y && 0 > i(Yt, _n) ? (S[H] = Yt,
                    S[Ze] = _,
                    H = Ze) : (S[H] = _n,
                    S[Ke] = _,
                    H = Ke);
                else if (Ze < Y && 0 > i(Yt, _))
                    S[H] = Yt,
                    S[Ze] = _,
                    H = Ze;
                else
                    break e
            }
        }
        return F
    }
    function i(S, F) {
        var _ = S.sortIndex - F.sortIndex;
        return _ !== 0 ? _ : S.id - F.id
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
        var o = performance;
        e.unstable_now = function() {
            return o.now()
        }
    } else {
        var l = Date
          , a = l.now();
        e.unstable_now = function() {
            return l.now() - a
        }
    }
    var s = []
      , p = []
      , g = 1
      , h = null
      , m = 3
      , v = !1
      , E = !1
      , k = !1
      , L = typeof setTimeout == "function" ? setTimeout : null
      , d = typeof clearTimeout == "function" ? clearTimeout : null
      , c = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function f(S) {
        for (var F = n(p); F !== null; ) {
            if (F.callback === null)
                r(p);
            else if (F.startTime <= S)
                r(p),
                F.sortIndex = F.expirationTime,
                t(s, F);
            else
                break;
            F = n(p)
        }
    }
    function y(S) {
        if (k = !1,
        f(S),
        !E)
            if (n(s) !== null)
                E = !0,
                We(x);
            else {
                var F = n(p);
                F !== null && Tt(y, F.startTime - S)
            }
    }
    function x(S, F) {
        E = !1,
        k && (k = !1,
        d(A),
        A = -1),
        v = !0;
        var _ = m;
        try {
            for (f(F),
            h = n(s); h !== null && (!(h.expirationTime > F) || S && !ie()); ) {
                var H = h.callback;
                if (typeof H == "function") {
                    h.callback = null,
                    m = h.priorityLevel;
                    var Y = H(h.expirationTime <= F);
                    F = e.unstable_now(),
                    typeof Y == "function" ? h.callback = Y : h === n(s) && r(s),
                    f(F)
                } else
                    r(s);
                h = n(s)
            }
            if (h !== null)
                var Nt = !0;
            else {
                var Ke = n(p);
                Ke !== null && Tt(y, Ke.startTime - F),
                Nt = !1
            }
            return Nt
        } finally {
            h = null,
            m = _,
            v = !1
        }
    }
    var O = !1
      , G = null
      , A = -1
      , j = 5
      , C = -1;
    function ie() {
        return !(e.unstable_now() - C < j)
    }
    function Re() {
        if (G !== null) {
            var S = e.unstable_now();
            C = S;
            var F = !0;
            try {
                F = G(!0, S)
            } finally {
                F ? Ve() : (O = !1,
                G = null)
            }
        } else
            O = !1
    }
    var Ve;
    if (typeof c == "function")
        Ve = function() {
            c(Re)
        }
        ;
    else if (typeof MessageChannel < "u") {
        var Fn = new MessageChannel
          , Sr = Fn.port2;
        Fn.port1.onmessage = Re,
        Ve = function() {
            Sr.postMessage(null)
        }
    } else
        Ve = function() {
            L(Re, 0)
        }
        ;
    function We(S) {
        G = S,
        O || (O = !0,
        Ve())
    }
    function Tt(S, F) {
        A = L(function() {
            S(e.unstable_now())
        }, F)
    }
    e.unstable_IdlePriority = 5,
    e.unstable_ImmediatePriority = 1,
    e.unstable_LowPriority = 4,
    e.unstable_NormalPriority = 3,
    e.unstable_Profiling = null,
    e.unstable_UserBlockingPriority = 2,
    e.unstable_cancelCallback = function(S) {
        S.callback = null
    }
    ,
    e.unstable_continueExecution = function() {
        E || v || (E = !0,
        We(x))
    }
    ,
    e.unstable_forceFrameRate = function(S) {
        0 > S || 125 < S ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : j = 0 < S ? Math.floor(1e3 / S) : 5
    }
    ,
    e.unstable_getCurrentPriorityLevel = function() {
        return m
    }
    ,
    e.unstable_getFirstCallbackNode = function() {
        return n(s)
    }
    ,
    e.unstable_next = function(S) {
        switch (m) {
        case 1:
        case 2:
        case 3:
            var F = 3;
            break;
        default:
            F = m
        }
        var _ = m;
        m = F;
        try {
            return S()
        } finally {
            m = _
        }
    }
    ,
    e.unstable_pauseExecution = function() {}
    ,
    e.unstable_requestPaint = function() {}
    ,
    e.unstable_runWithPriority = function(S, F) {
        switch (S) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            break;
        default:
            S = 3
        }
        var _ = m;
        m = S;
        try {
            return F()
        } finally {
            m = _
        }
    }
    ,
    e.unstable_scheduleCallback = function(S, F, _) {
        var H = e.unstable_now();
        switch (typeof _ == "object" && _ !== null ? (_ = _.delay,
        _ = typeof _ == "number" && 0 < _ ? H + _ : H) : _ = H,
        S) {
        case 1:
            var Y = -1;
            break;
        case 2:
            Y = 250;
            break;
        case 5:
            Y = 1073741823;
            break;
        case 4:
            Y = 1e4;
            break;
        default:
            Y = 5e3
        }
        return Y = _ + Y,
        S = {
            id: g++,
            callback: F,
            priorityLevel: S,
            startTime: _,
            expirationTime: Y,
            sortIndex: -1
        },
        _ > H ? (S.sortIndex = _,
        t(p, S),
        n(s) === null && S === n(p) && (k ? (d(A),
        A = -1) : k = !0,
        Tt(y, _ - H))) : (S.sortIndex = Y,
        t(s, S),
        E || v || (E = !0,
        We(x))),
        S
    }
    ,
    e.unstable_shouldYield = ie,
    e.unstable_wrapCallback = function(S) {
        var F = m;
        return function() {
            var _ = m;
            m = F;
            try {
                return S.apply(this, arguments)
            } finally {
                m = _
            }
        }
    }
}
)(Xs);
bs.exports = Xs;
var H0 = bs.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Qs = tr
  , Se = H0;
function w(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
        t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}
var Ys = new Set
  , nr = {};
function bt(e, t) {
    wn(e, t),
    wn(e + "Capture", t)
}
function wn(e, t) {
    for (nr[e] = t,
    e = 0; e < t.length; e++)
        Ys.add(t[e])
}
var lt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u")
  , Eo = Object.prototype.hasOwnProperty
  , V0 = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/
  , Ia = {}
  , Oa = {};
function W0(e) {
    return Eo.call(Oa, e) ? !0 : Eo.call(Ia, e) ? !1 : V0.test(e) ? Oa[e] = !0 : (Ia[e] = !0,
    !1)
}
function $0(e, t, n, r) {
    if (n !== null && n.type === 0)
        return !1;
    switch (typeof t) {
    case "function":
    case "symbol":
        return !0;
    case "boolean":
        return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5),
        e !== "data-" && e !== "aria-");
    default:
        return !1
    }
}
function b0(e, t, n, r) {
    if (t === null || typeof t > "u" || $0(e, t, n, r))
        return !0;
    if (r)
        return !1;
    if (n !== null)
        switch (n.type) {
        case 3:
            return !t;
        case 4:
            return t === !1;
        case 5:
            return isNaN(t);
        case 6:
            return isNaN(t) || 1 > t
        }
    return !1
}
function me(e, t, n, r, i, o, l) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4,
    this.attributeName = r,
    this.attributeNamespace = i,
    this.mustUseProperty = n,
    this.propertyName = e,
    this.type = t,
    this.sanitizeURL = o,
    this.removeEmptyString = l
}
var re = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    re[e] = new me(e,0,!1,e,null,!1,!1)
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    re[t] = new me(t,1,!1,e[1],null,!1,!1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    re[e] = new me(e,2,!1,e.toLowerCase(),null,!1,!1)
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    re[e] = new me(e,2,!1,e,null,!1,!1)
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    re[e] = new me(e,3,!1,e.toLowerCase(),null,!1,!1)
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
    re[e] = new me(e,3,!0,e,null,!1,!1)
});
["capture", "download"].forEach(function(e) {
    re[e] = new me(e,4,!1,e,null,!1,!1)
});
["cols", "rows", "size", "span"].forEach(function(e) {
    re[e] = new me(e,6,!1,e,null,!1,!1)
});
["rowSpan", "start"].forEach(function(e) {
    re[e] = new me(e,5,!1,e.toLowerCase(),null,!1,!1)
});
var gl = /[\-:]([a-z])/g;
function yl(e) {
    return e[1].toUpperCase()
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(gl, yl);
    re[t] = new me(t,1,!1,e,null,!1,!1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(gl, yl);
    re[t] = new me(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(gl, yl);
    re[t] = new me(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)
});
["tabIndex", "crossOrigin"].forEach(function(e) {
    re[e] = new me(e,1,!1,e.toLowerCase(),null,!1,!1)
});
re.xlinkHref = new me("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);
["src", "href", "action", "formAction"].forEach(function(e) {
    re[e] = new me(e,1,!1,e.toLowerCase(),null,!0,!0)
});
function vl(e, t, n, r) {
    var i = re.hasOwnProperty(t) ? re[t] : null;
    (i !== null ? i.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (b0(t, n, i, r) && (n = null),
    r || i === null ? W0(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : i.mustUseProperty ? e[i.propertyName] = n === null ? i.type === 3 ? !1 : "" : n : (t = i.attributeName,
    r = i.attributeNamespace,
    n === null ? e.removeAttribute(t) : (i = i.type,
    n = i === 3 || i === 4 && n === !0 ? "" : "" + n,
    r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
}
var ct = Qs.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
  , Or = Symbol.for("react.element")
  , en = Symbol.for("react.portal")
  , tn = Symbol.for("react.fragment")
  , wl = Symbol.for("react.strict_mode")
  , ko = Symbol.for("react.profiler")
  , Ks = Symbol.for("react.provider")
  , Zs = Symbol.for("react.context")
  , El = Symbol.for("react.forward_ref")
  , Go = Symbol.for("react.suspense")
  , xo = Symbol.for("react.suspense_list")
  , kl = Symbol.for("react.memo")
  , ft = Symbol.for("react.lazy")
  , Js = Symbol.for("react.offscreen")
  , Aa = Symbol.iterator;
function Ln(e) {
    return e === null || typeof e != "object" ? null : (e = Aa && e[Aa] || e["@@iterator"],
    typeof e == "function" ? e : null)
}
var b = Object.assign, $i;
function Hn(e) {
    if ($i === void 0)
        try {
            throw Error()
        } catch (n) {
            var t = n.stack.trim().match(/\n( *(at )?)/);
            $i = t && t[1] || ""
        }
    return `
` + $i + e
}
var bi = !1;
function Xi(e, t) {
    if (!e || bi)
        return "";
    bi = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (t)
            if (t = function() {
                throw Error()
            }
            ,
            Object.defineProperty(t.prototype, "props", {
                set: function() {
                    throw Error()
                }
            }),
            typeof Reflect == "object" && Reflect.construct) {
                try {
                    Reflect.construct(t, [])
                } catch (p) {
                    var r = p
                }
                Reflect.construct(e, [], t)
            } else {
                try {
                    t.call()
                } catch (p) {
                    r = p
                }
                e.call(t.prototype)
            }
        else {
            try {
                throw Error()
            } catch (p) {
                r = p
            }
            e()
        }
    } catch (p) {
        if (p && r && typeof p.stack == "string") {
            for (var i = p.stack.split(`
`), o = r.stack.split(`
`), l = i.length - 1, a = o.length - 1; 1 <= l && 0 <= a && i[l] !== o[a]; )
                a--;
            for (; 1 <= l && 0 <= a; l--,
            a--)
                if (i[l] !== o[a]) {
                    if (l !== 1 || a !== 1)
                        do
                            if (l--,
                            a--,
                            0 > a || i[l] !== o[a]) {
                                var s = `
` + i[l].replace(" at new ", " at ");
                                return e.displayName && s.includes("<anonymous>") && (s = s.replace("<anonymous>", e.displayName)),
                                s
                            }
                        while (1 <= l && 0 <= a);
                    break
                }
        }
    } finally {
        bi = !1,
        Error.prepareStackTrace = n
    }
    return (e = e ? e.displayName || e.name : "") ? Hn(e) : ""
}
function X0(e) {
    switch (e.tag) {
    case 5:
        return Hn(e.type);
    case 16:
        return Hn("Lazy");
    case 13:
        return Hn("Suspense");
    case 19:
        return Hn("SuspenseList");
    case 0:
    case 2:
    case 15:
        return e = Xi(e.type, !1),
        e;
    case 11:
        return e = Xi(e.type.render, !1),
        e;
    case 1:
        return e = Xi(e.type, !0),
        e;
    default:
        return ""
    }
}
function So(e) {
    if (e == null)
        return null;
    if (typeof e == "function")
        return e.displayName || e.name || null;
    if (typeof e == "string")
        return e;
    switch (e) {
    case tn:
        return "Fragment";
    case en:
        return "Portal";
    case ko:
        return "Profiler";
    case wl:
        return "StrictMode";
    case Go:
        return "Suspense";
    case xo:
        return "SuspenseList"
    }
    if (typeof e == "object")
        switch (e.$$typeof) {
        case Zs:
            return (e.displayName || "Context") + ".Consumer";
        case Ks:
            return (e._context.displayName || "Context") + ".Provider";
        case El:
            var t = e.render;
            return e = e.displayName,
            e || (e = t.displayName || t.name || "",
            e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"),
            e;
        case kl:
            return t = e.displayName || null,
            t !== null ? t : So(e.type) || "Memo";
        case ft:
            t = e._payload,
            e = e._init;
            try {
                return So(e(t))
            } catch {}
        }
    return null
}
function Q0(e) {
    var t = e.type;
    switch (e.tag) {
    case 24:
        return "Cache";
    case 9:
        return (t.displayName || "Context") + ".Consumer";
    case 10:
        return (t._context.displayName || "Context") + ".Provider";
    case 18:
        return "DehydratedFragment";
    case 11:
        return e = t.render,
        e = e.displayName || e.name || "",
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
    case 7:
        return "Fragment";
    case 5:
        return t;
    case 4:
        return "Portal";
    case 3:
        return "Root";
    case 6:
        return "Text";
    case 16:
        return So(t);
    case 8:
        return t === wl ? "StrictMode" : "Mode";
    case 22:
        return "Offscreen";
    case 12:
        return "Profiler";
    case 21:
        return "Scope";
    case 13:
        return "Suspense";
    case 19:
        return "SuspenseList";
    case 25:
        return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
        if (typeof t == "function")
            return t.displayName || t.name || null;
        if (typeof t == "string")
            return t
    }
    return null
}
function Ot(e) {
    switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
        return e;
    case "object":
        return e;
    default:
        return ""
    }
}
function qs(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
}
function Y0(e) {
    var t = qs(e) ? "checked" : "value"
      , n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t)
      , r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
        var i = n.get
          , o = n.set;
        return Object.defineProperty(e, t, {
            configurable: !0,
            get: function() {
                return i.call(this)
            },
            set: function(l) {
                r = "" + l,
                o.call(this, l)
            }
        }),
        Object.defineProperty(e, t, {
            enumerable: n.enumerable
        }),
        {
            getValue: function() {
                return r
            },
            setValue: function(l) {
                r = "" + l
            },
            stopTracking: function() {
                e._valueTracker = null,
                delete e[t]
            }
        }
    }
}
function Ar(e) {
    e._valueTracker || (e._valueTracker = Y0(e))
}
function eu(e) {
    if (!e)
        return !1;
    var t = e._valueTracker;
    if (!t)
        return !0;
    var n = t.getValue()
      , r = "";
    return e && (r = qs(e) ? e.checked ? "true" : "false" : e.value),
    e = r,
    e !== n ? (t.setValue(e),
    !0) : !1
}
function ni(e) {
    if (e = e || (typeof document < "u" ? document : void 0),
    typeof e > "u")
        return null;
    try {
        return e.activeElement || e.body
    } catch {
        return e.body
    }
}
function Po(e, t) {
    var n = t.checked;
    return b({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: n ?? e._wrapperState.initialChecked
    })
}
function Fa(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue
      , r = t.checked != null ? t.checked : t.defaultChecked;
    n = Ot(t.value != null ? t.value : n),
    e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
    }
}
function tu(e, t) {
    t = t.checked,
    t != null && vl(e, "checked", t, !1)
}
function Io(e, t) {
    tu(e, t);
    var n = Ot(t.value)
      , r = t.type;
    if (n != null)
        r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
        e.removeAttribute("value");
        return
    }
    t.hasOwnProperty("value") ? Oo(e, t.type, n) : t.hasOwnProperty("defaultValue") && Oo(e, t.type, Ot(t.defaultValue)),
    t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
}
function _a(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var r = t.type;
        if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null))
            return;
        t = "" + e._wrapperState.initialValue,
        n || t === e.value || (e.value = t),
        e.defaultValue = t
    }
    n = e.name,
    n !== "" && (e.name = ""),
    e.defaultChecked = !!e._wrapperState.initialChecked,
    n !== "" && (e.name = n)
}
function Oo(e, t, n) {
    (t !== "number" || ni(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
}
var Vn = Array.isArray;
function fn(e, t, n, r) {
    if (e = e.options,
    t) {
        t = {};
        for (var i = 0; i < n.length; i++)
            t["$" + n[i]] = !0;
        for (n = 0; n < e.length; n++)
            i = t.hasOwnProperty("$" + e[n].value),
            e[n].selected !== i && (e[n].selected = i),
            i && r && (e[n].defaultSelected = !0)
    } else {
        for (n = "" + Ot(n),
        t = null,
        i = 0; i < e.length; i++) {
            if (e[i].value === n) {
                e[i].selected = !0,
                r && (e[i].defaultSelected = !0);
                return
            }
            t !== null || e[i].disabled || (t = e[i])
        }
        t !== null && (t.selected = !0)
    }
}
function Ao(e, t) {
    if (t.dangerouslySetInnerHTML != null)
        throw Error(w(91));
    return b({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: "" + e._wrapperState.initialValue
    })
}
function Ca(e, t) {
    var n = t.value;
    if (n == null) {
        if (n = t.children,
        t = t.defaultValue,
        n != null) {
            if (t != null)
                throw Error(w(92));
            if (Vn(n)) {
                if (1 < n.length)
                    throw Error(w(93));
                n = n[0]
            }
            t = n
        }
        t == null && (t = ""),
        n = t
    }
    e._wrapperState = {
        initialValue: Ot(n)
    }
}
function nu(e, t) {
    var n = Ot(t.value)
      , r = Ot(t.defaultValue);
    n != null && (n = "" + n,
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r)
}
function Ta(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
}
function ru(e) {
    switch (e) {
    case "svg":
        return "http://www.w3.org/2000/svg";
    case "math":
        return "http://www.w3.org/1998/Math/MathML";
    default:
        return "http://www.w3.org/1999/xhtml"
    }
}
function Fo(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? ru(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
}
var Fr, iu = function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, i) {
        MSApp.execUnsafeLocalFunction(function() {
            return e(t, n, r, i)
        })
    }
    : e
}(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML"in e)
        e.innerHTML = t;
    else {
        for (Fr = Fr || document.createElement("div"),
        Fr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
        t = Fr.firstChild; e.firstChild; )
            e.removeChild(e.firstChild);
        for (; t.firstChild; )
            e.appendChild(t.firstChild)
    }
});
function rr(e, t) {
    if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
            n.nodeValue = t;
            return
        }
    }
    e.textContent = t
}
var bn = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
}
  , K0 = ["Webkit", "ms", "Moz", "O"];
Object.keys(bn).forEach(function(e) {
    K0.forEach(function(t) {
        t = t + e.charAt(0).toUpperCase() + e.substring(1),
        bn[t] = bn[e]
    })
});
function ou(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || bn.hasOwnProperty(e) && bn[e] ? ("" + t).trim() : t + "px"
}
function lu(e, t) {
    e = e.style;
    for (var n in t)
        if (t.hasOwnProperty(n)) {
            var r = n.indexOf("--") === 0
              , i = ou(n, t[n], r);
            n === "float" && (n = "cssFloat"),
            r ? e.setProperty(n, i) : e[n] = i
        }
}
var Z0 = b({
    menuitem: !0
}, {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0
});
function _o(e, t) {
    if (t) {
        if (Z0[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
            throw Error(w(137, e));
        if (t.dangerouslySetInnerHTML != null) {
            if (t.children != null)
                throw Error(w(60));
            if (typeof t.dangerouslySetInnerHTML != "object" || !("__html"in t.dangerouslySetInnerHTML))
                throw Error(w(61))
        }
        if (t.style != null && typeof t.style != "object")
            throw Error(w(62))
    }
}
function Co(e, t) {
    if (e.indexOf("-") === -1)
        return typeof t.is == "string";
    switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
        return !1;
    default:
        return !0
    }
}
var To = null;
function Gl(e) {
    return e = e.target || e.srcElement || window,
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
}
var No = null
  , mn = null
  , hn = null;
function Na(e) {
    if (e = Gr(e)) {
        if (typeof No != "function")
            throw Error(w(280));
        var t = e.stateNode;
        t && (t = Ci(t),
        No(e.stateNode, e.type, t))
    }
}
function au(e) {
    mn ? hn ? hn.push(e) : hn = [e] : mn = e
}
function su() {
    if (mn) {
        var e = mn
          , t = hn;
        if (hn = mn = null,
        Na(e),
        t)
            for (e = 0; e < t.length; e++)
                Na(t[e])
    }
}
function uu(e, t) {
    return e(t)
}
function cu() {}
var Qi = !1;
function du(e, t, n) {
    if (Qi)
        return e(t, n);
    Qi = !0;
    try {
        return uu(e, t, n)
    } finally {
        Qi = !1,
        (mn !== null || hn !== null) && (cu(),
        su())
    }
}
function ir(e, t) {
    var n = e.stateNode;
    if (n === null)
        return null;
    var r = Ci(n);
    if (r === null)
        return null;
    n = r[t];
    e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
        (r = !r.disabled) || (e = e.type,
        r = !(e === "button" || e === "input" || e === "select" || e === "textarea")),
        e = !r;
        break e;
    default:
        e = !1
    }
    if (e)
        return null;
    if (n && typeof n != "function")
        throw Error(w(231, t, typeof n));
    return n
}
var Lo = !1;
if (lt)
    try {
        var Rn = {};
        Object.defineProperty(Rn, "passive", {
            get: function() {
                Lo = !0
            }
        }),
        window.addEventListener("test", Rn, Rn),
        window.removeEventListener("test", Rn, Rn)
    } catch {
        Lo = !1
    }
function J0(e, t, n, r, i, o, l, a, s) {
    var p = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(n, p)
    } catch (g) {
        this.onError(g)
    }
}
var Xn = !1
  , ri = null
  , ii = !1
  , Ro = null
  , q0 = {
    onError: function(e) {
        Xn = !0,
        ri = e
    }
};
function ed(e, t, n, r, i, o, l, a, s) {
    Xn = !1,
    ri = null,
    J0.apply(q0, arguments)
}
function td(e, t, n, r, i, o, l, a, s) {
    if (ed.apply(this, arguments),
    Xn) {
        if (Xn) {
            var p = ri;
            Xn = !1,
            ri = null
        } else
            throw Error(w(198));
        ii || (ii = !0,
        Ro = p)
    }
}
function Xt(e) {
    var t = e
      , n = e;
    if (e.alternate)
        for (; t.return; )
            t = t.return;
    else {
        e = t;
        do
            t = e,
            t.flags & 4098 && (n = t.return),
            e = t.return;
        while (e)
    }
    return t.tag === 3 ? n : null
}
function pu(e) {
    if (e.tag === 13) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate,
        e !== null && (t = e.memoizedState)),
        t !== null)
            return t.dehydrated
    }
    return null
}
function La(e) {
    if (Xt(e) !== e)
        throw Error(w(188))
}
function nd(e) {
    var t = e.alternate;
    if (!t) {
        if (t = Xt(e),
        t === null)
            throw Error(w(188));
        return t !== e ? null : e
    }
    for (var n = e, r = t; ; ) {
        var i = n.return;
        if (i === null)
            break;
        var o = i.alternate;
        if (o === null) {
            if (r = i.return,
            r !== null) {
                n = r;
                continue
            }
            break
        }
        if (i.child === o.child) {
            for (o = i.child; o; ) {
                if (o === n)
                    return La(i),
                    e;
                if (o === r)
                    return La(i),
                    t;
                o = o.sibling
            }
            throw Error(w(188))
        }
        if (n.return !== r.return)
            n = i,
            r = o;
        else {
            for (var l = !1, a = i.child; a; ) {
                if (a === n) {
                    l = !0,
                    n = i,
                    r = o;
                    break
                }
                if (a === r) {
                    l = !0,
                    r = i,
                    n = o;
                    break
                }
                a = a.sibling
            }
            if (!l) {
                for (a = o.child; a; ) {
                    if (a === n) {
                        l = !0,
                        n = o,
                        r = i;
                        break
                    }
                    if (a === r) {
                        l = !0,
                        r = o,
                        n = i;
                        break
                    }
                    a = a.sibling
                }
                if (!l)
                    throw Error(w(189))
            }
        }
        if (n.alternate !== r)
            throw Error(w(190))
    }
    if (n.tag !== 3)
        throw Error(w(188));
    return n.stateNode.current === n ? e : t
}
function fu(e) {
    return e = nd(e),
    e !== null ? mu(e) : null
}
function mu(e) {
    if (e.tag === 5 || e.tag === 6)
        return e;
    for (e = e.child; e !== null; ) {
        var t = mu(e);
        if (t !== null)
            return t;
        e = e.sibling
    }
    return null
}
var hu = Se.unstable_scheduleCallback
  , Ra = Se.unstable_cancelCallback
  , rd = Se.unstable_shouldYield
  , id = Se.unstable_requestPaint
  , Q = Se.unstable_now
  , od = Se.unstable_getCurrentPriorityLevel
  , xl = Se.unstable_ImmediatePriority
  , gu = Se.unstable_UserBlockingPriority
  , oi = Se.unstable_NormalPriority
  , ld = Se.unstable_LowPriority
  , yu = Se.unstable_IdlePriority
  , Oi = null
  , Qe = null;
function ad(e) {
    if (Qe && typeof Qe.onCommitFiberRoot == "function")
        try {
            Qe.onCommitFiberRoot(Oi, e, void 0, (e.current.flags & 128) === 128)
        } catch {}
}
var Ue = Math.clz32 ? Math.clz32 : cd
  , sd = Math.log
  , ud = Math.LN2;
function cd(e) {
    return e >>>= 0,
    e === 0 ? 32 : 31 - (sd(e) / ud | 0) | 0
}
var _r = 64
  , Cr = 4194304;
function Wn(e) {
    switch (e & -e) {
    case 1:
        return 1;
    case 2:
        return 2;
    case 4:
        return 4;
    case 8:
        return 8;
    case 16:
        return 16;
    case 32:
        return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
        return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
        return e & 130023424;
    case 134217728:
        return 134217728;
    case 268435456:
        return 268435456;
    case 536870912:
        return 536870912;
    case 1073741824:
        return 1073741824;
    default:
        return e
    }
}
function li(e, t) {
    var n = e.pendingLanes;
    if (n === 0)
        return 0;
    var r = 0
      , i = e.suspendedLanes
      , o = e.pingedLanes
      , l = n & 268435455;
    if (l !== 0) {
        var a = l & ~i;
        a !== 0 ? r = Wn(a) : (o &= l,
        o !== 0 && (r = Wn(o)))
    } else
        l = n & ~i,
        l !== 0 ? r = Wn(l) : o !== 0 && (r = Wn(o));
    if (r === 0)
        return 0;
    if (t !== 0 && t !== r && !(t & i) && (i = r & -r,
    o = t & -t,
    i >= o || i === 16 && (o & 4194240) !== 0))
        return t;
    if (r & 4 && (r |= n & 16),
    t = e.entangledLanes,
    t !== 0)
        for (e = e.entanglements,
        t &= r; 0 < t; )
            n = 31 - Ue(t),
            i = 1 << n,
            r |= e[n],
            t &= ~i;
    return r
}
function dd(e, t) {
    switch (e) {
    case 1:
    case 2:
    case 4:
        return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
        return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
        return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
        return -1;
    default:
        return -1
    }
}
function pd(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, o = e.pendingLanes; 0 < o; ) {
        var l = 31 - Ue(o)
          , a = 1 << l
          , s = i[l];
        s === -1 ? (!(a & n) || a & r) && (i[l] = dd(a, t)) : s <= t && (e.expiredLanes |= a),
        o &= ~a
    }
}
function zo(e) {
    return e = e.pendingLanes & -1073741825,
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
}
function vu() {
    var e = _r;
    return _r <<= 1,
    !(_r & 4194240) && (_r = 64),
    e
}
function Yi(e) {
    for (var t = [], n = 0; 31 > n; n++)
        t.push(e);
    return t
}
function Er(e, t, n) {
    e.pendingLanes |= t,
    t !== 536870912 && (e.suspendedLanes = 0,
    e.pingedLanes = 0),
    e = e.eventTimes,
    t = 31 - Ue(t),
    e[t] = n
}
function fd(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t,
    e.suspendedLanes = 0,
    e.pingedLanes = 0,
    e.expiredLanes &= t,
    e.mutableReadLanes &= t,
    e.entangledLanes &= t,
    t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
        var i = 31 - Ue(n)
          , o = 1 << i;
        t[i] = 0,
        r[i] = -1,
        e[i] = -1,
        n &= ~o
    }
}
function Sl(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
        var r = 31 - Ue(n)
          , i = 1 << r;
        i & t | e[r] & t && (e[r] |= t),
        n &= ~i
    }
}
var z = 0;
function wu(e) {
    return e &= -e,
    1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1
}
var Eu, Pl, ku, Gu, xu, Mo = !1, Tr = [], wt = null, Et = null, kt = null, or = new Map, lr = new Map, ht = [], md = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function za(e, t) {
    switch (e) {
    case "focusin":
    case "focusout":
        wt = null;
        break;
    case "dragenter":
    case "dragleave":
        Et = null;
        break;
    case "mouseover":
    case "mouseout":
        kt = null;
        break;
    case "pointerover":
    case "pointerout":
        or.delete(t.pointerId);
        break;
    case "gotpointercapture":
    case "lostpointercapture":
        lr.delete(t.pointerId)
    }
}
function zn(e, t, n, r, i, o) {
    return e === null || e.nativeEvent !== o ? (e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [i]
    },
    t !== null && (t = Gr(t),
    t !== null && Pl(t)),
    e) : (e.eventSystemFlags |= r,
    t = e.targetContainers,
    i !== null && t.indexOf(i) === -1 && t.push(i),
    e)
}
function hd(e, t, n, r, i) {
    switch (t) {
    case "focusin":
        return wt = zn(wt, e, t, n, r, i),
        !0;
    case "dragenter":
        return Et = zn(Et, e, t, n, r, i),
        !0;
    case "mouseover":
        return kt = zn(kt, e, t, n, r, i),
        !0;
    case "pointerover":
        var o = i.pointerId;
        return or.set(o, zn(or.get(o) || null, e, t, n, r, i)),
        !0;
    case "gotpointercapture":
        return o = i.pointerId,
        lr.set(o, zn(lr.get(o) || null, e, t, n, r, i)),
        !0
    }
    return !1
}
function Su(e) {
    var t = zt(e.target);
    if (t !== null) {
        var n = Xt(t);
        if (n !== null) {
            if (t = n.tag,
            t === 13) {
                if (t = pu(n),
                t !== null) {
                    e.blockedOn = t,
                    xu(e.priority, function() {
                        ku(n)
                    });
                    return
                }
            } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                return
            }
        }
    }
    e.blockedOn = null
}
function br(e) {
    if (e.blockedOn !== null)
        return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
        var n = Do(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (n === null) {
            n = e.nativeEvent;
            var r = new n.constructor(n.type,n);
            To = r,
            n.target.dispatchEvent(r),
            To = null
        } else
            return t = Gr(n),
            t !== null && Pl(t),
            e.blockedOn = n,
            !1;
        t.shift()
    }
    return !0
}
function Ma(e, t, n) {
    br(e) && n.delete(t)
}
function gd() {
    Mo = !1,
    wt !== null && br(wt) && (wt = null),
    Et !== null && br(Et) && (Et = null),
    kt !== null && br(kt) && (kt = null),
    or.forEach(Ma),
    lr.forEach(Ma)
}
function Mn(e, t) {
    e.blockedOn === t && (e.blockedOn = null,
    Mo || (Mo = !0,
    Se.unstable_scheduleCallback(Se.unstable_NormalPriority, gd)))
}
function ar(e) {
    function t(i) {
        return Mn(i, e)
    }
    if (0 < Tr.length) {
        Mn(Tr[0], e);
        for (var n = 1; n < Tr.length; n++) {
            var r = Tr[n];
            r.blockedOn === e && (r.blockedOn = null)
        }
    }
    for (wt !== null && Mn(wt, e),
    Et !== null && Mn(Et, e),
    kt !== null && Mn(kt, e),
    or.forEach(t),
    lr.forEach(t),
    n = 0; n < ht.length; n++)
        r = ht[n],
        r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < ht.length && (n = ht[0],
    n.blockedOn === null); )
        Su(n),
        n.blockedOn === null && ht.shift()
}
var gn = ct.ReactCurrentBatchConfig
  , ai = !0;
function yd(e, t, n, r) {
    var i = z
      , o = gn.transition;
    gn.transition = null;
    try {
        z = 1,
        Il(e, t, n, r)
    } finally {
        z = i,
        gn.transition = o
    }
}
function vd(e, t, n, r) {
    var i = z
      , o = gn.transition;
    gn.transition = null;
    try {
        z = 4,
        Il(e, t, n, r)
    } finally {
        z = i,
        gn.transition = o
    }
}
function Il(e, t, n, r) {
    if (ai) {
        var i = Do(e, t, n, r);
        if (i === null)
            oo(e, t, r, si, n),
            za(e, r);
        else if (hd(i, e, t, n, r))
            r.stopPropagation();
        else if (za(e, r),
        t & 4 && -1 < md.indexOf(e)) {
            for (; i !== null; ) {
                var o = Gr(i);
                if (o !== null && Eu(o),
                o = Do(e, t, n, r),
                o === null && oo(e, t, r, si, n),
                o === i)
                    break;
                i = o
            }
            i !== null && r.stopPropagation()
        } else
            oo(e, t, r, null, n)
    }
}
var si = null;
function Do(e, t, n, r) {
    if (si = null,
    e = Gl(r),
    e = zt(e),
    e !== null)
        if (t = Xt(e),
        t === null)
            e = null;
        else if (n = t.tag,
        n === 13) {
            if (e = pu(t),
            e !== null)
                return e;
            e = null
        } else if (n === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated)
                return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null
        } else
            t !== e && (e = null);
    return si = e,
    null
}
function Pu(e) {
    switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
        return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
        return 4;
    case "message":
        switch (od()) {
        case xl:
            return 1;
        case gu:
            return 4;
        case oi:
        case ld:
            return 16;
        case yu:
            return 536870912;
        default:
            return 16
        }
    default:
        return 16
    }
}
var yt = null
  , Ol = null
  , Xr = null;
function Iu() {
    if (Xr)
        return Xr;
    var e, t = Ol, n = t.length, r, i = "value"in yt ? yt.value : yt.textContent, o = i.length;
    for (e = 0; e < n && t[e] === i[e]; e++)
        ;
    var l = n - e;
    for (r = 1; r <= l && t[n - r] === i[o - r]; r++)
        ;
    return Xr = i.slice(e, 1 < r ? 1 - r : void 0)
}
function Qr(e) {
    var t = e.keyCode;
    return "charCode"in e ? (e = e.charCode,
    e === 0 && t === 13 && (e = 13)) : e = t,
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
}
function Nr() {
    return !0
}
function Da() {
    return !1
}
function Ie(e) {
    function t(n, r, i, o, l) {
        this._reactName = n,
        this._targetInst = i,
        this.type = r,
        this.nativeEvent = o,
        this.target = l,
        this.currentTarget = null;
        for (var a in e)
            e.hasOwnProperty(a) && (n = e[a],
            this[a] = n ? n(o) : o[a]);
        return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? Nr : Da,
        this.isPropagationStopped = Da,
        this
    }
    return b(t.prototype, {
        preventDefault: function() {
            this.defaultPrevented = !0;
            var n = this.nativeEvent;
            n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            this.isDefaultPrevented = Nr)
        },
        stopPropagation: function() {
            var n = this.nativeEvent;
            n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            this.isPropagationStopped = Nr)
        },
        persist: function() {},
        isPersistent: Nr
    }),
    t
}
var On = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
        return e.timeStamp || Date.now()
    },
    defaultPrevented: 0,
    isTrusted: 0
}, Al = Ie(On), kr = b({}, On, {
    view: 0,
    detail: 0
}), wd = Ie(kr), Ki, Zi, Dn, Ai = b({}, kr, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Fl,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
    },
    movementX: function(e) {
        return "movementX"in e ? e.movementX : (e !== Dn && (Dn && e.type === "mousemove" ? (Ki = e.screenX - Dn.screenX,
        Zi = e.screenY - Dn.screenY) : Zi = Ki = 0,
        Dn = e),
        Ki)
    },
    movementY: function(e) {
        return "movementY"in e ? e.movementY : Zi
    }
}), ja = Ie(Ai), Ed = b({}, Ai, {
    dataTransfer: 0
}), kd = Ie(Ed), Gd = b({}, kr, {
    relatedTarget: 0
}), Ji = Ie(Gd), xd = b({}, On, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
}), Sd = Ie(xd), Pd = b({}, On, {
    clipboardData: function(e) {
        return "clipboardData"in e ? e.clipboardData : window.clipboardData
    }
}), Id = Ie(Pd), Od = b({}, On, {
    data: 0
}), Ua = Ie(Od), Ad = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
}, Fd = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
}, _d = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
};
function Cd(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = _d[e]) ? !!t[e] : !1
}
function Fl() {
    return Cd
}
var Td = b({}, kr, {
    key: function(e) {
        if (e.key) {
            var t = Ad[e.key] || e.key;
            if (t !== "Unidentified")
                return t
        }
        return e.type === "keypress" ? (e = Qr(e),
        e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Fd[e.keyCode] || "Unidentified" : ""
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Fl,
    charCode: function(e) {
        return e.type === "keypress" ? Qr(e) : 0
    },
    keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    },
    which: function(e) {
        return e.type === "keypress" ? Qr(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    }
})
  , Nd = Ie(Td)
  , Ld = b({}, Ai, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
})
  , Ba = Ie(Ld)
  , Rd = b({}, kr, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Fl
})
  , zd = Ie(Rd)
  , Md = b({}, On, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
})
  , Dd = Ie(Md)
  , jd = b({}, Ai, {
    deltaX: function(e) {
        return "deltaX"in e ? e.deltaX : "wheelDeltaX"in e ? -e.wheelDeltaX : 0
    },
    deltaY: function(e) {
        return "deltaY"in e ? e.deltaY : "wheelDeltaY"in e ? -e.wheelDeltaY : "wheelDelta"in e ? -e.wheelDelta : 0
    },
    deltaZ: 0,
    deltaMode: 0
})
  , Ud = Ie(jd)
  , Bd = [9, 13, 27, 32]
  , _l = lt && "CompositionEvent"in window
  , Qn = null;
lt && "documentMode"in document && (Qn = document.documentMode);
var Hd = lt && "TextEvent"in window && !Qn
  , Ou = lt && (!_l || Qn && 8 < Qn && 11 >= Qn)
  , Ha = " "
  , Va = !1;
function Au(e, t) {
    switch (e) {
    case "keyup":
        return Bd.indexOf(t.keyCode) !== -1;
    case "keydown":
        return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
        return !0;
    default:
        return !1
    }
}
function Fu(e) {
    return e = e.detail,
    typeof e == "object" && "data"in e ? e.data : null
}
var nn = !1;
function Vd(e, t) {
    switch (e) {
    case "compositionend":
        return Fu(t);
    case "keypress":
        return t.which !== 32 ? null : (Va = !0,
        Ha);
    case "textInput":
        return e = t.data,
        e === Ha && Va ? null : e;
    default:
        return null
    }
}
function Wd(e, t) {
    if (nn)
        return e === "compositionend" || !_l && Au(e, t) ? (e = Iu(),
        Xr = Ol = yt = null,
        nn = !1,
        e) : null;
    switch (e) {
    case "paste":
        return null;
    case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
            if (t.char && 1 < t.char.length)
                return t.char;
            if (t.which)
                return String.fromCharCode(t.which)
        }
        return null;
    case "compositionend":
        return Ou && t.locale !== "ko" ? null : t.data;
    default:
        return null
    }
}
var $d = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
};
function Wa(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!$d[e.type] : t === "textarea"
}
function _u(e, t, n, r) {
    au(r),
    t = ui(t, "onChange"),
    0 < t.length && (n = new Al("onChange","change",null,n,r),
    e.push({
        event: n,
        listeners: t
    }))
}
var Yn = null
  , sr = null;
function bd(e) {
    Bu(e, 0)
}
function Fi(e) {
    var t = ln(e);
    if (eu(t))
        return e
}
function Xd(e, t) {
    if (e === "change")
        return t
}
var Cu = !1;
if (lt) {
    var qi;
    if (lt) {
        var eo = "oninput"in document;
        if (!eo) {
            var $a = document.createElement("div");
            $a.setAttribute("oninput", "return;"),
            eo = typeof $a.oninput == "function"
        }
        qi = eo
    } else
        qi = !1;
    Cu = qi && (!document.documentMode || 9 < document.documentMode)
}
function ba() {
    Yn && (Yn.detachEvent("onpropertychange", Tu),
    sr = Yn = null)
}
function Tu(e) {
    if (e.propertyName === "value" && Fi(sr)) {
        var t = [];
        _u(t, sr, e, Gl(e)),
        du(bd, t)
    }
}
function Qd(e, t, n) {
    e === "focusin" ? (ba(),
    Yn = t,
    sr = n,
    Yn.attachEvent("onpropertychange", Tu)) : e === "focusout" && ba()
}
function Yd(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return Fi(sr)
}
function Kd(e, t) {
    if (e === "click")
        return Fi(t)
}
function Zd(e, t) {
    if (e === "input" || e === "change")
        return Fi(t)
}
function Jd(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var He = typeof Object.is == "function" ? Object.is : Jd;
function ur(e, t) {
    if (He(e, t))
        return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
    var n = Object.keys(e)
      , r = Object.keys(t);
    if (n.length !== r.length)
        return !1;
    for (r = 0; r < n.length; r++) {
        var i = n[r];
        if (!Eo.call(t, i) || !He(e[i], t[i]))
            return !1
    }
    return !0
}
function Xa(e) {
    for (; e && e.firstChild; )
        e = e.firstChild;
    return e
}
function Qa(e, t) {
    var n = Xa(e);
    e = 0;
    for (var r; n; ) {
        if (n.nodeType === 3) {
            if (r = e + n.textContent.length,
            e <= t && r >= t)
                return {
                    node: n,
                    offset: t - e
                };
            e = r
        }
        e: {
            for (; n; ) {
                if (n.nextSibling) {
                    n = n.nextSibling;
                    break e
                }
                n = n.parentNode
            }
            n = void 0
        }
        n = Xa(n)
    }
}
function Nu(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Nu(e, t.parentNode) : "contains"in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
}
function Lu() {
    for (var e = window, t = ni(); t instanceof e.HTMLIFrameElement; ) {
        try {
            var n = typeof t.contentWindow.location.href == "string"
        } catch {
            n = !1
        }
        if (n)
            e = t.contentWindow;
        else
            break;
        t = ni(e.document)
    }
    return t
}
function Cl(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
}
function qd(e) {
    var t = Lu()
      , n = e.focusedElem
      , r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && Nu(n.ownerDocument.documentElement, n)) {
        if (r !== null && Cl(n)) {
            if (t = r.start,
            e = r.end,
            e === void 0 && (e = t),
            "selectionStart"in n)
                n.selectionStart = t,
                n.selectionEnd = Math.min(e, n.value.length);
            else if (e = (t = n.ownerDocument || document) && t.defaultView || window,
            e.getSelection) {
                e = e.getSelection();
                var i = n.textContent.length
                  , o = Math.min(r.start, i);
                r = r.end === void 0 ? o : Math.min(r.end, i),
                !e.extend && o > r && (i = r,
                r = o,
                o = i),
                i = Qa(n, o);
                var l = Qa(n, r);
                i && l && (e.rangeCount !== 1 || e.anchorNode !== i.node || e.anchorOffset !== i.offset || e.focusNode !== l.node || e.focusOffset !== l.offset) && (t = t.createRange(),
                t.setStart(i.node, i.offset),
                e.removeAllRanges(),
                o > r ? (e.addRange(t),
                e.extend(l.node, l.offset)) : (t.setEnd(l.node, l.offset),
                e.addRange(t)))
            }
        }
        for (t = [],
        e = n; e = e.parentNode; )
            e.nodeType === 1 && t.push({
                element: e,
                left: e.scrollLeft,
                top: e.scrollTop
            });
        for (typeof n.focus == "function" && n.focus(),
        n = 0; n < t.length; n++)
            e = t[n],
            e.element.scrollLeft = e.left,
            e.element.scrollTop = e.top
    }
}
var e1 = lt && "documentMode"in document && 11 >= document.documentMode
  , rn = null
  , jo = null
  , Kn = null
  , Uo = !1;
function Ya(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Uo || rn == null || rn !== ni(r) || (r = rn,
    "selectionStart"in r && Cl(r) ? r = {
        start: r.selectionStart,
        end: r.selectionEnd
    } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(),
    r = {
        anchorNode: r.anchorNode,
        anchorOffset: r.anchorOffset,
        focusNode: r.focusNode,
        focusOffset: r.focusOffset
    }),
    Kn && ur(Kn, r) || (Kn = r,
    r = ui(jo, "onSelect"),
    0 < r.length && (t = new Al("onSelect","select",null,t,n),
    e.push({
        event: t,
        listeners: r
    }),
    t.target = rn)))
}
function Lr(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(),
    n["Webkit" + e] = "webkit" + t,
    n["Moz" + e] = "moz" + t,
    n
}
var on = {
    animationend: Lr("Animation", "AnimationEnd"),
    animationiteration: Lr("Animation", "AnimationIteration"),
    animationstart: Lr("Animation", "AnimationStart"),
    transitionend: Lr("Transition", "TransitionEnd")
}
  , to = {}
  , Ru = {};
lt && (Ru = document.createElement("div").style,
"AnimationEvent"in window || (delete on.animationend.animation,
delete on.animationiteration.animation,
delete on.animationstart.animation),
"TransitionEvent"in window || delete on.transitionend.transition);
function _i(e) {
    if (to[e])
        return to[e];
    if (!on[e])
        return e;
    var t = on[e], n;
    for (n in t)
        if (t.hasOwnProperty(n) && n in Ru)
            return to[e] = t[n];
    return e
}
var zu = _i("animationend")
  , Mu = _i("animationiteration")
  , Du = _i("animationstart")
  , ju = _i("transitionend")
  , Uu = new Map
  , Ka = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function Ft(e, t) {
    Uu.set(e, t),
    bt(t, [e])
}
for (var no = 0; no < Ka.length; no++) {
    var ro = Ka[no]
      , t1 = ro.toLowerCase()
      , n1 = ro[0].toUpperCase() + ro.slice(1);
    Ft(t1, "on" + n1)
}
Ft(zu, "onAnimationEnd");
Ft(Mu, "onAnimationIteration");
Ft(Du, "onAnimationStart");
Ft("dblclick", "onDoubleClick");
Ft("focusin", "onFocus");
Ft("focusout", "onBlur");
Ft(ju, "onTransitionEnd");
wn("onMouseEnter", ["mouseout", "mouseover"]);
wn("onMouseLeave", ["mouseout", "mouseover"]);
wn("onPointerEnter", ["pointerout", "pointerover"]);
wn("onPointerLeave", ["pointerout", "pointerover"]);
bt("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
bt("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
bt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
bt("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
bt("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
bt("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var $n = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ")
  , r1 = new Set("cancel close invalid load scroll toggle".split(" ").concat($n));
function Za(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n,
    td(r, t, void 0, e),
    e.currentTarget = null
}
function Bu(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
        var r = e[n]
          , i = r.event;
        r = r.listeners;
        e: {
            var o = void 0;
            if (t)
                for (var l = r.length - 1; 0 <= l; l--) {
                    var a = r[l]
                      , s = a.instance
                      , p = a.currentTarget;
                    if (a = a.listener,
                    s !== o && i.isPropagationStopped())
                        break e;
                    Za(i, a, p),
                    o = s
                }
            else
                for (l = 0; l < r.length; l++) {
                    if (a = r[l],
                    s = a.instance,
                    p = a.currentTarget,
                    a = a.listener,
                    s !== o && i.isPropagationStopped())
                        break e;
                    Za(i, a, p),
                    o = s
                }
        }
    }
    if (ii)
        throw e = Ro,
        ii = !1,
        Ro = null,
        e
}
function U(e, t) {
    var n = t[$o];
    n === void 0 && (n = t[$o] = new Set);
    var r = e + "__bubble";
    n.has(r) || (Hu(t, e, 2, !1),
    n.add(r))
}
function io(e, t, n) {
    var r = 0;
    t && (r |= 4),
    Hu(n, e, r, t)
}
var Rr = "_reactListening" + Math.random().toString(36).slice(2);
function cr(e) {
    if (!e[Rr]) {
        e[Rr] = !0,
        Ys.forEach(function(n) {
            n !== "selectionchange" && (r1.has(n) || io(n, !1, e),
            io(n, !0, e))
        });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[Rr] || (t[Rr] = !0,
        io("selectionchange", !1, t))
    }
}
function Hu(e, t, n, r) {
    switch (Pu(t)) {
    case 1:
        var i = yd;
        break;
    case 4:
        i = vd;
        break;
    default:
        i = Il
    }
    n = i.bind(null, t, n, e),
    i = void 0,
    !Lo || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (i = !0),
    r ? i !== void 0 ? e.addEventListener(t, n, {
        capture: !0,
        passive: i
    }) : e.addEventListener(t, n, !0) : i !== void 0 ? e.addEventListener(t, n, {
        passive: i
    }) : e.addEventListener(t, n, !1)
}
function oo(e, t, n, r, i) {
    var o = r;
    if (!(t & 1) && !(t & 2) && r !== null)
        e: for (; ; ) {
            if (r === null)
                return;
            var l = r.tag;
            if (l === 3 || l === 4) {
                var a = r.stateNode.containerInfo;
                if (a === i || a.nodeType === 8 && a.parentNode === i)
                    break;
                if (l === 4)
                    for (l = r.return; l !== null; ) {
                        var s = l.tag;
                        if ((s === 3 || s === 4) && (s = l.stateNode.containerInfo,
                        s === i || s.nodeType === 8 && s.parentNode === i))
                            return;
                        l = l.return
                    }
                for (; a !== null; ) {
                    if (l = zt(a),
                    l === null)
                        return;
                    if (s = l.tag,
                    s === 5 || s === 6) {
                        r = o = l;
                        continue e
                    }
                    a = a.parentNode
                }
            }
            r = r.return
        }
    du(function() {
        var p = o
          , g = Gl(n)
          , h = [];
        e: {
            var m = Uu.get(e);
            if (m !== void 0) {
                var v = Al
                  , E = e;
                switch (e) {
                case "keypress":
                    if (Qr(n) === 0)
                        break e;
                case "keydown":
                case "keyup":
                    v = Nd;
                    break;
                case "focusin":
                    E = "focus",
                    v = Ji;
                    break;
                case "focusout":
                    E = "blur",
                    v = Ji;
                    break;
                case "beforeblur":
                case "afterblur":
                    v = Ji;
                    break;
                case "click":
                    if (n.button === 2)
                        break e;
                case "auxclick":
                case "dblclick":
                case "mousedown":
                case "mousemove":
                case "mouseup":
                case "mouseout":
                case "mouseover":
                case "contextmenu":
                    v = ja;
                    break;
                case "drag":
                case "dragend":
                case "dragenter":
                case "dragexit":
                case "dragleave":
                case "dragover":
                case "dragstart":
                case "drop":
                    v = kd;
                    break;
                case "touchcancel":
                case "touchend":
                case "touchmove":
                case "touchstart":
                    v = zd;
                    break;
                case zu:
                case Mu:
                case Du:
                    v = Sd;
                    break;
                case ju:
                    v = Dd;
                    break;
                case "scroll":
                    v = wd;
                    break;
                case "wheel":
                    v = Ud;
                    break;
                case "copy":
                case "cut":
                case "paste":
                    v = Id;
                    break;
                case "gotpointercapture":
                case "lostpointercapture":
                case "pointercancel":
                case "pointerdown":
                case "pointermove":
                case "pointerout":
                case "pointerover":
                case "pointerup":
                    v = Ba
                }
                var k = (t & 4) !== 0
                  , L = !k && e === "scroll"
                  , d = k ? m !== null ? m + "Capture" : null : m;
                k = [];
                for (var c = p, f; c !== null; ) {
                    f = c;
                    var y = f.stateNode;
                    if (f.tag === 5 && y !== null && (f = y,
                    d !== null && (y = ir(c, d),
                    y != null && k.push(dr(c, y, f)))),
                    L)
                        break;
                    c = c.return
                }
                0 < k.length && (m = new v(m,E,null,n,g),
                h.push({
                    event: m,
                    listeners: k
                }))
            }
        }
        if (!(t & 7)) {
            e: {
                if (m = e === "mouseover" || e === "pointerover",
                v = e === "mouseout" || e === "pointerout",
                m && n !== To && (E = n.relatedTarget || n.fromElement) && (zt(E) || E[at]))
                    break e;
                if ((v || m) && (m = g.window === g ? g : (m = g.ownerDocument) ? m.defaultView || m.parentWindow : window,
                v ? (E = n.relatedTarget || n.toElement,
                v = p,
                E = E ? zt(E) : null,
                E !== null && (L = Xt(E),
                E !== L || E.tag !== 5 && E.tag !== 6) && (E = null)) : (v = null,
                E = p),
                v !== E)) {
                    if (k = ja,
                    y = "onMouseLeave",
                    d = "onMouseEnter",
                    c = "mouse",
                    (e === "pointerout" || e === "pointerover") && (k = Ba,
                    y = "onPointerLeave",
                    d = "onPointerEnter",
                    c = "pointer"),
                    L = v == null ? m : ln(v),
                    f = E == null ? m : ln(E),
                    m = new k(y,c + "leave",v,n,g),
                    m.target = L,
                    m.relatedTarget = f,
                    y = null,
                    zt(g) === p && (k = new k(d,c + "enter",E,n,g),
                    k.target = f,
                    k.relatedTarget = L,
                    y = k),
                    L = y,
                    v && E)
                        t: {
                            for (k = v,
                            d = E,
                            c = 0,
                            f = k; f; f = qt(f))
                                c++;
                            for (f = 0,
                            y = d; y; y = qt(y))
                                f++;
                            for (; 0 < c - f; )
                                k = qt(k),
                                c--;
                            for (; 0 < f - c; )
                                d = qt(d),
                                f--;
                            for (; c--; ) {
                                if (k === d || d !== null && k === d.alternate)
                                    break t;
                                k = qt(k),
                                d = qt(d)
                            }
                            k = null
                        }
                    else
                        k = null;
                    v !== null && Ja(h, m, v, k, !1),
                    E !== null && L !== null && Ja(h, L, E, k, !0)
                }
            }
            e: {
                if (m = p ? ln(p) : window,
                v = m.nodeName && m.nodeName.toLowerCase(),
                v === "select" || v === "input" && m.type === "file")
                    var x = Xd;
                else if (Wa(m))
                    if (Cu)
                        x = Zd;
                    else {
                        x = Yd;
                        var O = Qd
                    }
                else
                    (v = m.nodeName) && v.toLowerCase() === "input" && (m.type === "checkbox" || m.type === "radio") && (x = Kd);
                if (x && (x = x(e, p))) {
                    _u(h, x, n, g);
                    break e
                }
                O && O(e, m, p),
                e === "focusout" && (O = m._wrapperState) && O.controlled && m.type === "number" && Oo(m, "number", m.value)
            }
            switch (O = p ? ln(p) : window,
            e) {
            case "focusin":
                (Wa(O) || O.contentEditable === "true") && (rn = O,
                jo = p,
                Kn = null);
                break;
            case "focusout":
                Kn = jo = rn = null;
                break;
            case "mousedown":
                Uo = !0;
                break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
                Uo = !1,
                Ya(h, n, g);
                break;
            case "selectionchange":
                if (e1)
                    break;
            case "keydown":
            case "keyup":
                Ya(h, n, g)
            }
            var G;
            if (_l)
                e: {
                    switch (e) {
                    case "compositionstart":
                        var A = "onCompositionStart";
                        break e;
                    case "compositionend":
                        A = "onCompositionEnd";
                        break e;
                    case "compositionupdate":
                        A = "onCompositionUpdate";
                        break e
                    }
                    A = void 0
                }
            else
                nn ? Au(e, n) && (A = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (A = "onCompositionStart");
            A && (Ou && n.locale !== "ko" && (nn || A !== "onCompositionStart" ? A === "onCompositionEnd" && nn && (G = Iu()) : (yt = g,
            Ol = "value"in yt ? yt.value : yt.textContent,
            nn = !0)),
            O = ui(p, A),
            0 < O.length && (A = new Ua(A,e,null,n,g),
            h.push({
                event: A,
                listeners: O
            }),
            G ? A.data = G : (G = Fu(n),
            G !== null && (A.data = G)))),
            (G = Hd ? Vd(e, n) : Wd(e, n)) && (p = ui(p, "onBeforeInput"),
            0 < p.length && (g = new Ua("onBeforeInput","beforeinput",null,n,g),
            h.push({
                event: g,
                listeners: p
            }),
            g.data = G))
        }
        Bu(h, t)
    })
}
function dr(e, t, n) {
    return {
        instance: e,
        listener: t,
        currentTarget: n
    }
}
function ui(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
        var i = e
          , o = i.stateNode;
        i.tag === 5 && o !== null && (i = o,
        o = ir(e, n),
        o != null && r.unshift(dr(e, o, i)),
        o = ir(e, t),
        o != null && r.push(dr(e, o, i))),
        e = e.return
    }
    return r
}
function qt(e) {
    if (e === null)
        return null;
    do
        e = e.return;
    while (e && e.tag !== 5);
    return e || null
}
function Ja(e, t, n, r, i) {
    for (var o = t._reactName, l = []; n !== null && n !== r; ) {
        var a = n
          , s = a.alternate
          , p = a.stateNode;
        if (s !== null && s === r)
            break;
        a.tag === 5 && p !== null && (a = p,
        i ? (s = ir(n, o),
        s != null && l.unshift(dr(n, s, a))) : i || (s = ir(n, o),
        s != null && l.push(dr(n, s, a)))),
        n = n.return
    }
    l.length !== 0 && e.push({
        event: t,
        listeners: l
    })
}
var i1 = /\r\n?/g
  , o1 = /\u0000|\uFFFD/g;
function qa(e) {
    return (typeof e == "string" ? e : "" + e).replace(i1, `
`).replace(o1, "")
}
function zr(e, t, n) {
    if (t = qa(t),
    qa(e) !== t && n)
        throw Error(w(425))
}
function ci() {}
var Bo = null
  , Ho = null;
function Vo(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
}
var Wo = typeof setTimeout == "function" ? setTimeout : void 0
  , l1 = typeof clearTimeout == "function" ? clearTimeout : void 0
  , es = typeof Promise == "function" ? Promise : void 0
  , a1 = typeof queueMicrotask == "function" ? queueMicrotask : typeof es < "u" ? function(e) {
    return es.resolve(null).then(e).catch(s1)
}
: Wo;
function s1(e) {
    setTimeout(function() {
        throw e
    })
}
function lo(e, t) {
    var n = t
      , r = 0;
    do {
        var i = n.nextSibling;
        if (e.removeChild(n),
        i && i.nodeType === 8)
            if (n = i.data,
            n === "/$") {
                if (r === 0) {
                    e.removeChild(i),
                    ar(t);
                    return
                }
                r--
            } else
                n !== "$" && n !== "$?" && n !== "$!" || r++;
        n = i
    } while (n);
    ar(t)
}
function Gt(e) {
    for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3)
            break;
        if (t === 8) {
            if (t = e.data,
            t === "$" || t === "$!" || t === "$?")
                break;
            if (t === "/$")
                return null
        }
    }
    return e
}
function ts(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
        if (e.nodeType === 8) {
            var n = e.data;
            if (n === "$" || n === "$!" || n === "$?") {
                if (t === 0)
                    return e;
                t--
            } else
                n === "/$" && t++
        }
        e = e.previousSibling
    }
    return null
}
var An = Math.random().toString(36).slice(2)
  , Xe = "__reactFiber$" + An
  , pr = "__reactProps$" + An
  , at = "__reactContainer$" + An
  , $o = "__reactEvents$" + An
  , u1 = "__reactListeners$" + An
  , c1 = "__reactHandles$" + An;
function zt(e) {
    var t = e[Xe];
    if (t)
        return t;
    for (var n = e.parentNode; n; ) {
        if (t = n[at] || n[Xe]) {
            if (n = t.alternate,
            t.child !== null || n !== null && n.child !== null)
                for (e = ts(e); e !== null; ) {
                    if (n = e[Xe])
                        return n;
                    e = ts(e)
                }
            return t
        }
        e = n,
        n = e.parentNode
    }
    return null
}
function Gr(e) {
    return e = e[Xe] || e[at],
    !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
}
function ln(e) {
    if (e.tag === 5 || e.tag === 6)
        return e.stateNode;
    throw Error(w(33))
}
function Ci(e) {
    return e[pr] || null
}
var bo = []
  , an = -1;
function _t(e) {
    return {
        current: e
    }
}
function B(e) {
    0 > an || (e.current = bo[an],
    bo[an] = null,
    an--)
}
function D(e, t) {
    an++,
    bo[an] = e.current,
    e.current = t
}
var At = {}
  , ue = _t(At)
  , ye = _t(!1)
  , Bt = At;
function En(e, t) {
    var n = e.type.contextTypes;
    if (!n)
        return At;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
        return r.__reactInternalMemoizedMaskedChildContext;
    var i = {}, o;
    for (o in n)
        i[o] = t[o];
    return r && (e = e.stateNode,
    e.__reactInternalMemoizedUnmaskedChildContext = t,
    e.__reactInternalMemoizedMaskedChildContext = i),
    i
}
function ve(e) {
    return e = e.childContextTypes,
    e != null
}
function di() {
    B(ye),
    B(ue)
}
function ns(e, t, n) {
    if (ue.current !== At)
        throw Error(w(168));
    D(ue, t),
    D(ye, n)
}
function Vu(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes,
    typeof r.getChildContext != "function")
        return n;
    r = r.getChildContext();
    for (var i in r)
        if (!(i in t))
            throw Error(w(108, Q0(e) || "Unknown", i));
    return b({}, n, r)
}
function pi(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || At,
    Bt = ue.current,
    D(ue, e),
    D(ye, ye.current),
    !0
}
function rs(e, t, n) {
    var r = e.stateNode;
    if (!r)
        throw Error(w(169));
    n ? (e = Vu(e, t, Bt),
    r.__reactInternalMemoizedMergedChildContext = e,
    B(ye),
    B(ue),
    D(ue, e)) : B(ye),
    D(ye, n)
}
var nt = null
  , Ti = !1
  , ao = !1;
function Wu(e) {
    nt === null ? nt = [e] : nt.push(e)
}
function d1(e) {
    Ti = !0,
    Wu(e)
}
function Ct() {
    if (!ao && nt !== null) {
        ao = !0;
        var e = 0
          , t = z;
        try {
            var n = nt;
            for (z = 1; e < n.length; e++) {
                var r = n[e];
                do
                    r = r(!0);
                while (r !== null)
            }
            nt = null,
            Ti = !1
        } catch (i) {
            throw nt !== null && (nt = nt.slice(e + 1)),
            hu(xl, Ct),
            i
        } finally {
            z = t,
            ao = !1
        }
    }
    return null
}
var sn = []
  , un = 0
  , fi = null
  , mi = 0
  , Fe = []
  , _e = 0
  , Ht = null
  , rt = 1
  , it = "";
function Lt(e, t) {
    sn[un++] = mi,
    sn[un++] = fi,
    fi = e,
    mi = t
}
function $u(e, t, n) {
    Fe[_e++] = rt,
    Fe[_e++] = it,
    Fe[_e++] = Ht,
    Ht = e;
    var r = rt;
    e = it;
    var i = 32 - Ue(r) - 1;
    r &= ~(1 << i),
    n += 1;
    var o = 32 - Ue(t) + i;
    if (30 < o) {
        var l = i - i % 5;
        o = (r & (1 << l) - 1).toString(32),
        r >>= l,
        i -= l,
        rt = 1 << 32 - Ue(t) + i | n << i | r,
        it = o + e
    } else
        rt = 1 << o | n << i | r,
        it = e
}
function Tl(e) {
    e.return !== null && (Lt(e, 1),
    $u(e, 1, 0))
}
function Nl(e) {
    for (; e === fi; )
        fi = sn[--un],
        sn[un] = null,
        mi = sn[--un],
        sn[un] = null;
    for (; e === Ht; )
        Ht = Fe[--_e],
        Fe[_e] = null,
        it = Fe[--_e],
        Fe[_e] = null,
        rt = Fe[--_e],
        Fe[_e] = null
}
var xe = null
  , Ge = null
  , V = !1
  , je = null;
function bu(e, t) {
    var n = Ce(5, null, null, 0);
    n.elementType = "DELETED",
    n.stateNode = t,
    n.return = e,
    t = e.deletions,
    t === null ? (e.deletions = [n],
    e.flags |= 16) : t.push(n)
}
function is(e, t) {
    switch (e.tag) {
    case 5:
        var n = e.type;
        return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t,
        t !== null ? (e.stateNode = t,
        xe = e,
        Ge = Gt(t.firstChild),
        !0) : !1;
    case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t,
        t !== null ? (e.stateNode = t,
        xe = e,
        Ge = null,
        !0) : !1;
    case 13:
        return t = t.nodeType !== 8 ? null : t,
        t !== null ? (n = Ht !== null ? {
            id: rt,
            overflow: it
        } : null,
        e.memoizedState = {
            dehydrated: t,
            treeContext: n,
            retryLane: 1073741824
        },
        n = Ce(18, null, null, 0),
        n.stateNode = t,
        n.return = e,
        e.child = n,
        xe = e,
        Ge = null,
        !0) : !1;
    default:
        return !1
    }
}
function Xo(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}
function Qo(e) {
    if (V) {
        var t = Ge;
        if (t) {
            var n = t;
            if (!is(e, t)) {
                if (Xo(e))
                    throw Error(w(418));
                t = Gt(n.nextSibling);
                var r = xe;
                t && is(e, t) ? bu(r, n) : (e.flags = e.flags & -4097 | 2,
                V = !1,
                xe = e)
            }
        } else {
            if (Xo(e))
                throw Error(w(418));
            e.flags = e.flags & -4097 | 2,
            V = !1,
            xe = e
        }
    }
}
function os(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
        e = e.return;
    xe = e
}
function Mr(e) {
    if (e !== xe)
        return !1;
    if (!V)
        return os(e),
        V = !0,
        !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type,
    t = t !== "head" && t !== "body" && !Vo(e.type, e.memoizedProps)),
    t && (t = Ge)) {
        if (Xo(e))
            throw Xu(),
            Error(w(418));
        for (; t; )
            bu(e, t),
            t = Gt(t.nextSibling)
    }
    if (os(e),
    e.tag === 13) {
        if (e = e.memoizedState,
        e = e !== null ? e.dehydrated : null,
        !e)
            throw Error(w(317));
        e: {
            for (e = e.nextSibling,
            t = 0; e; ) {
                if (e.nodeType === 8) {
                    var n = e.data;
                    if (n === "/$") {
                        if (t === 0) {
                            Ge = Gt(e.nextSibling);
                            break e
                        }
                        t--
                    } else
                        n !== "$" && n !== "$!" && n !== "$?" || t++
                }
                e = e.nextSibling
            }
            Ge = null
        }
    } else
        Ge = xe ? Gt(e.stateNode.nextSibling) : null;
    return !0
}
function Xu() {
    for (var e = Ge; e; )
        e = Gt(e.nextSibling)
}
function kn() {
    Ge = xe = null,
    V = !1
}
function Ll(e) {
    je === null ? je = [e] : je.push(e)
}
var p1 = ct.ReactCurrentBatchConfig;
function Me(e, t) {
    if (e && e.defaultProps) {
        t = b({}, t),
        e = e.defaultProps;
        for (var n in e)
            t[n] === void 0 && (t[n] = e[n]);
        return t
    }
    return t
}
var hi = _t(null)
  , gi = null
  , cn = null
  , Rl = null;
function zl() {
    Rl = cn = gi = null
}
function Ml(e) {
    var t = hi.current;
    B(hi),
    e._currentValue = t
}
function Yo(e, t, n) {
    for (; e !== null; ) {
        var r = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t,
        r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
        e === n)
            break;
        e = e.return
    }
}
function yn(e, t) {
    gi = e,
    Rl = cn = null,
    e = e.dependencies,
    e !== null && e.firstContext !== null && (e.lanes & t && (ge = !0),
    e.firstContext = null)
}
function Ne(e) {
    var t = e._currentValue;
    if (Rl !== e)
        if (e = {
            context: e,
            memoizedValue: t,
            next: null
        },
        cn === null) {
            if (gi === null)
                throw Error(w(308));
            cn = e,
            gi.dependencies = {
                lanes: 0,
                firstContext: e
            }
        } else
            cn = cn.next = e;
    return t
}
var Mt = null;
function Dl(e) {
    Mt === null ? Mt = [e] : Mt.push(e)
}
function Qu(e, t, n, r) {
    var i = t.interleaved;
    return i === null ? (n.next = n,
    Dl(t)) : (n.next = i.next,
    i.next = n),
    t.interleaved = n,
    st(e, r)
}
function st(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t),
    n = e,
    e = e.return; e !== null; )
        e.childLanes |= t,
        n = e.alternate,
        n !== null && (n.childLanes |= t),
        n = e,
        e = e.return;
    return n.tag === 3 ? n.stateNode : null
}
var mt = !1;
function jl(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
            pending: null,
            interleaved: null,
            lanes: 0
        },
        effects: null
    }
}
function Yu(e, t) {
    e = e.updateQueue,
    t.updateQueue === e && (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects
    })
}
function ot(e, t) {
    return {
        eventTime: e,
        lane: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null
    }
}
function xt(e, t, n) {
    var r = e.updateQueue;
    if (r === null)
        return null;
    if (r = r.shared,
    R & 2) {
        var i = r.pending;
        return i === null ? t.next = t : (t.next = i.next,
        i.next = t),
        r.pending = t,
        st(e, n)
    }
    return i = r.interleaved,
    i === null ? (t.next = t,
    Dl(r)) : (t.next = i.next,
    i.next = t),
    r.interleaved = t,
    st(e, n)
}
function Yr(e, t, n) {
    if (t = t.updateQueue,
    t !== null && (t = t.shared,
    (n & 4194240) !== 0)) {
        var r = t.lanes;
        r &= e.pendingLanes,
        n |= r,
        t.lanes = n,
        Sl(e, n)
    }
}
function ls(e, t) {
    var n = e.updateQueue
      , r = e.alternate;
    if (r !== null && (r = r.updateQueue,
    n === r)) {
        var i = null
          , o = null;
        if (n = n.firstBaseUpdate,
        n !== null) {
            do {
                var l = {
                    eventTime: n.eventTime,
                    lane: n.lane,
                    tag: n.tag,
                    payload: n.payload,
                    callback: n.callback,
                    next: null
                };
                o === null ? i = o = l : o = o.next = l,
                n = n.next
            } while (n !== null);
            o === null ? i = o = t : o = o.next = t
        } else
            i = o = t;
        n = {
            baseState: r.baseState,
            firstBaseUpdate: i,
            lastBaseUpdate: o,
            shared: r.shared,
            effects: r.effects
        },
        e.updateQueue = n;
        return
    }
    e = n.lastBaseUpdate,
    e === null ? n.firstBaseUpdate = t : e.next = t,
    n.lastBaseUpdate = t
}
function yi(e, t, n, r) {
    var i = e.updateQueue;
    mt = !1;
    var o = i.firstBaseUpdate
      , l = i.lastBaseUpdate
      , a = i.shared.pending;
    if (a !== null) {
        i.shared.pending = null;
        var s = a
          , p = s.next;
        s.next = null,
        l === null ? o = p : l.next = p,
        l = s;
        var g = e.alternate;
        g !== null && (g = g.updateQueue,
        a = g.lastBaseUpdate,
        a !== l && (a === null ? g.firstBaseUpdate = p : a.next = p,
        g.lastBaseUpdate = s))
    }
    if (o !== null) {
        var h = i.baseState;
        l = 0,
        g = p = s = null,
        a = o;
        do {
            var m = a.lane
              , v = a.eventTime;
            if ((r & m) === m) {
                g !== null && (g = g.next = {
                    eventTime: v,
                    lane: 0,
                    tag: a.tag,
                    payload: a.payload,
                    callback: a.callback,
                    next: null
                });
                e: {
                    var E = e
                      , k = a;
                    switch (m = t,
                    v = n,
                    k.tag) {
                    case 1:
                        if (E = k.payload,
                        typeof E == "function") {
                            h = E.call(v, h, m);
                            break e
                        }
                        h = E;
                        break e;
                    case 3:
                        E.flags = E.flags & -65537 | 128;
                    case 0:
                        if (E = k.payload,
                        m = typeof E == "function" ? E.call(v, h, m) : E,
                        m == null)
                            break e;
                        h = b({}, h, m);
                        break e;
                    case 2:
                        mt = !0
                    }
                }
                a.callback !== null && a.lane !== 0 && (e.flags |= 64,
                m = i.effects,
                m === null ? i.effects = [a] : m.push(a))
            } else
                v = {
                    eventTime: v,
                    lane: m,
                    tag: a.tag,
                    payload: a.payload,
                    callback: a.callback,
                    next: null
                },
                g === null ? (p = g = v,
                s = h) : g = g.next = v,
                l |= m;
            if (a = a.next,
            a === null) {
                if (a = i.shared.pending,
                a === null)
                    break;
                m = a,
                a = m.next,
                m.next = null,
                i.lastBaseUpdate = m,
                i.shared.pending = null
            }
        } while (!0);
        if (g === null && (s = h),
        i.baseState = s,
        i.firstBaseUpdate = p,
        i.lastBaseUpdate = g,
        t = i.shared.interleaved,
        t !== null) {
            i = t;
            do
                l |= i.lane,
                i = i.next;
            while (i !== t)
        } else
            o === null && (i.shared.lanes = 0);
        Wt |= l,
        e.lanes = l,
        e.memoizedState = h
    }
}
function as(e, t, n) {
    if (e = t.effects,
    t.effects = null,
    e !== null)
        for (t = 0; t < e.length; t++) {
            var r = e[t]
              , i = r.callback;
            if (i !== null) {
                if (r.callback = null,
                r = n,
                typeof i != "function")
                    throw Error(w(191, i));
                i.call(r)
            }
        }
}
var Ku = new Qs.Component().refs;
function Ko(e, t, n, r) {
    t = e.memoizedState,
    n = n(r, t),
    n = n == null ? t : b({}, t, n),
    e.memoizedState = n,
    e.lanes === 0 && (e.updateQueue.baseState = n)
}
var Ni = {
    isMounted: function(e) {
        return (e = e._reactInternals) ? Xt(e) === e : !1
    },
    enqueueSetState: function(e, t, n) {
        e = e._reactInternals;
        var r = pe()
          , i = Pt(e)
          , o = ot(r, i);
        o.payload = t,
        n != null && (o.callback = n),
        t = xt(e, o, i),
        t !== null && (Be(t, e, i, r),
        Yr(t, e, i))
    },
    enqueueReplaceState: function(e, t, n) {
        e = e._reactInternals;
        var r = pe()
          , i = Pt(e)
          , o = ot(r, i);
        o.tag = 1,
        o.payload = t,
        n != null && (o.callback = n),
        t = xt(e, o, i),
        t !== null && (Be(t, e, i, r),
        Yr(t, e, i))
    },
    enqueueForceUpdate: function(e, t) {
        e = e._reactInternals;
        var n = pe()
          , r = Pt(e)
          , i = ot(n, r);
        i.tag = 2,
        t != null && (i.callback = t),
        t = xt(e, i, r),
        t !== null && (Be(t, e, r, n),
        Yr(t, e, r))
    }
};
function ss(e, t, n, r, i, o, l) {
    return e = e.stateNode,
    typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, o, l) : t.prototype && t.prototype.isPureReactComponent ? !ur(n, r) || !ur(i, o) : !0
}
function Zu(e, t, n) {
    var r = !1
      , i = At
      , o = t.contextType;
    return typeof o == "object" && o !== null ? o = Ne(o) : (i = ve(t) ? Bt : ue.current,
    r = t.contextTypes,
    o = (r = r != null) ? En(e, i) : At),
    t = new t(n,o),
    e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null,
    t.updater = Ni,
    e.stateNode = t,
    t._reactInternals = e,
    r && (e = e.stateNode,
    e.__reactInternalMemoizedUnmaskedChildContext = i,
    e.__reactInternalMemoizedMaskedChildContext = o),
    t
}
function us(e, t, n, r) {
    e = t.state,
    typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Ni.enqueueReplaceState(t, t.state, null)
}
function Zo(e, t, n, r) {
    var i = e.stateNode;
    i.props = n,
    i.state = e.memoizedState,
    i.refs = Ku,
    jl(e);
    var o = t.contextType;
    typeof o == "object" && o !== null ? i.context = Ne(o) : (o = ve(t) ? Bt : ue.current,
    i.context = En(e, o)),
    i.state = e.memoizedState,
    o = t.getDerivedStateFromProps,
    typeof o == "function" && (Ko(e, t, o, n),
    i.state = e.memoizedState),
    typeof t.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (t = i.state,
    typeof i.componentWillMount == "function" && i.componentWillMount(),
    typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(),
    t !== i.state && Ni.enqueueReplaceState(i, i.state, null),
    yi(e, n, i, r),
    i.state = e.memoizedState),
    typeof i.componentDidMount == "function" && (e.flags |= 4194308)
}
function jn(e, t, n) {
    if (e = n.ref,
    e !== null && typeof e != "function" && typeof e != "object") {
        if (n._owner) {
            if (n = n._owner,
            n) {
                if (n.tag !== 1)
                    throw Error(w(309));
                var r = n.stateNode
            }
            if (!r)
                throw Error(w(147, e));
            var i = r
              , o = "" + e;
            return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === o ? t.ref : (t = function(l) {
                var a = i.refs;
                a === Ku && (a = i.refs = {}),
                l === null ? delete a[o] : a[o] = l
            }
            ,
            t._stringRef = o,
            t)
        }
        if (typeof e != "string")
            throw Error(w(284));
        if (!n._owner)
            throw Error(w(290, e))
    }
    return e
}
function Dr(e, t) {
    throw e = Object.prototype.toString.call(t),
    Error(w(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
}
function cs(e) {
    var t = e._init;
    return t(e._payload)
}
function Ju(e) {
    function t(d, c) {
        if (e) {
            var f = d.deletions;
            f === null ? (d.deletions = [c],
            d.flags |= 16) : f.push(c)
        }
    }
    function n(d, c) {
        if (!e)
            return null;
        for (; c !== null; )
            t(d, c),
            c = c.sibling;
        return null
    }
    function r(d, c) {
        for (d = new Map; c !== null; )
            c.key !== null ? d.set(c.key, c) : d.set(c.index, c),
            c = c.sibling;
        return d
    }
    function i(d, c) {
        return d = It(d, c),
        d.index = 0,
        d.sibling = null,
        d
    }
    function o(d, c, f) {
        return d.index = f,
        e ? (f = d.alternate,
        f !== null ? (f = f.index,
        f < c ? (d.flags |= 2,
        c) : f) : (d.flags |= 2,
        c)) : (d.flags |= 1048576,
        c)
    }
    function l(d) {
        return e && d.alternate === null && (d.flags |= 2),
        d
    }
    function a(d, c, f, y) {
        return c === null || c.tag !== 6 ? (c = ho(f, d.mode, y),
        c.return = d,
        c) : (c = i(c, f),
        c.return = d,
        c)
    }
    function s(d, c, f, y) {
        var x = f.type;
        return x === tn ? g(d, c, f.props.children, y, f.key) : c !== null && (c.elementType === x || typeof x == "object" && x !== null && x.$$typeof === ft && cs(x) === c.type) ? (y = i(c, f.props),
        y.ref = jn(d, c, f),
        y.return = d,
        y) : (y = ti(f.type, f.key, f.props, null, d.mode, y),
        y.ref = jn(d, c, f),
        y.return = d,
        y)
    }
    function p(d, c, f, y) {
        return c === null || c.tag !== 4 || c.stateNode.containerInfo !== f.containerInfo || c.stateNode.implementation !== f.implementation ? (c = go(f, d.mode, y),
        c.return = d,
        c) : (c = i(c, f.children || []),
        c.return = d,
        c)
    }
    function g(d, c, f, y, x) {
        return c === null || c.tag !== 7 ? (c = Ut(f, d.mode, y, x),
        c.return = d,
        c) : (c = i(c, f),
        c.return = d,
        c)
    }
    function h(d, c, f) {
        if (typeof c == "string" && c !== "" || typeof c == "number")
            return c = ho("" + c, d.mode, f),
            c.return = d,
            c;
        if (typeof c == "object" && c !== null) {
            switch (c.$$typeof) {
            case Or:
                return f = ti(c.type, c.key, c.props, null, d.mode, f),
                f.ref = jn(d, null, c),
                f.return = d,
                f;
            case en:
                return c = go(c, d.mode, f),
                c.return = d,
                c;
            case ft:
                var y = c._init;
                return h(d, y(c._payload), f)
            }
            if (Vn(c) || Ln(c))
                return c = Ut(c, d.mode, f, null),
                c.return = d,
                c;
            Dr(d, c)
        }
        return null
    }
    function m(d, c, f, y) {
        var x = c !== null ? c.key : null;
        if (typeof f == "string" && f !== "" || typeof f == "number")
            return x !== null ? null : a(d, c, "" + f, y);
        if (typeof f == "object" && f !== null) {
            switch (f.$$typeof) {
            case Or:
                return f.key === x ? s(d, c, f, y) : null;
            case en:
                return f.key === x ? p(d, c, f, y) : null;
            case ft:
                return x = f._init,
                m(d, c, x(f._payload), y)
            }
            if (Vn(f) || Ln(f))
                return x !== null ? null : g(d, c, f, y, null);
            Dr(d, f)
        }
        return null
    }
    function v(d, c, f, y, x) {
        if (typeof y == "string" && y !== "" || typeof y == "number")
            return d = d.get(f) || null,
            a(c, d, "" + y, x);
        if (typeof y == "object" && y !== null) {
            switch (y.$$typeof) {
            case Or:
                return d = d.get(y.key === null ? f : y.key) || null,
                s(c, d, y, x);
            case en:
                return d = d.get(y.key === null ? f : y.key) || null,
                p(c, d, y, x);
            case ft:
                var O = y._init;
                return v(d, c, f, O(y._payload), x)
            }
            if (Vn(y) || Ln(y))
                return d = d.get(f) || null,
                g(c, d, y, x, null);
            Dr(c, y)
        }
        return null
    }
    function E(d, c, f, y) {
        for (var x = null, O = null, G = c, A = c = 0, j = null; G !== null && A < f.length; A++) {
            G.index > A ? (j = G,
            G = null) : j = G.sibling;
            var C = m(d, G, f[A], y);
            if (C === null) {
                G === null && (G = j);
                break
            }
            e && G && C.alternate === null && t(d, G),
            c = o(C, c, A),
            O === null ? x = C : O.sibling = C,
            O = C,
            G = j
        }
        if (A === f.length)
            return n(d, G),
            V && Lt(d, A),
            x;
        if (G === null) {
            for (; A < f.length; A++)
                G = h(d, f[A], y),
                G !== null && (c = o(G, c, A),
                O === null ? x = G : O.sibling = G,
                O = G);
            return V && Lt(d, A),
            x
        }
        for (G = r(d, G); A < f.length; A++)
            j = v(G, d, A, f[A], y),
            j !== null && (e && j.alternate !== null && G.delete(j.key === null ? A : j.key),
            c = o(j, c, A),
            O === null ? x = j : O.sibling = j,
            O = j);
        return e && G.forEach(function(ie) {
            return t(d, ie)
        }),
        V && Lt(d, A),
        x
    }
    function k(d, c, f, y) {
        var x = Ln(f);
        if (typeof x != "function")
            throw Error(w(150));
        if (f = x.call(f),
        f == null)
            throw Error(w(151));
        for (var O = x = null, G = c, A = c = 0, j = null, C = f.next(); G !== null && !C.done; A++,
        C = f.next()) {
            G.index > A ? (j = G,
            G = null) : j = G.sibling;
            var ie = m(d, G, C.value, y);
            if (ie === null) {
                G === null && (G = j);
                break
            }
            e && G && ie.alternate === null && t(d, G),
            c = o(ie, c, A),
            O === null ? x = ie : O.sibling = ie,
            O = ie,
            G = j
        }
        if (C.done)
            return n(d, G),
            V && Lt(d, A),
            x;
        if (G === null) {
            for (; !C.done; A++,
            C = f.next())
                C = h(d, C.value, y),
                C !== null && (c = o(C, c, A),
                O === null ? x = C : O.sibling = C,
                O = C);
            return V && Lt(d, A),
            x
        }
        for (G = r(d, G); !C.done; A++,
        C = f.next())
            C = v(G, d, A, C.value, y),
            C !== null && (e && C.alternate !== null && G.delete(C.key === null ? A : C.key),
            c = o(C, c, A),
            O === null ? x = C : O.sibling = C,
            O = C);
        return e && G.forEach(function(Re) {
            return t(d, Re)
        }),
        V && Lt(d, A),
        x
    }
    function L(d, c, f, y) {
        if (typeof f == "object" && f !== null && f.type === tn && f.key === null && (f = f.props.children),
        typeof f == "object" && f !== null) {
            switch (f.$$typeof) {
            case Or:
                e: {
                    for (var x = f.key, O = c; O !== null; ) {
                        if (O.key === x) {
                            if (x = f.type,
                            x === tn) {
                                if (O.tag === 7) {
                                    n(d, O.sibling),
                                    c = i(O, f.props.children),
                                    c.return = d,
                                    d = c;
                                    break e
                                }
                            } else if (O.elementType === x || typeof x == "object" && x !== null && x.$$typeof === ft && cs(x) === O.type) {
                                n(d, O.sibling),
                                c = i(O, f.props),
                                c.ref = jn(d, O, f),
                                c.return = d,
                                d = c;
                                break e
                            }
                            n(d, O);
                            break
                        } else
                            t(d, O);
                        O = O.sibling
                    }
                    f.type === tn ? (c = Ut(f.props.children, d.mode, y, f.key),
                    c.return = d,
                    d = c) : (y = ti(f.type, f.key, f.props, null, d.mode, y),
                    y.ref = jn(d, c, f),
                    y.return = d,
                    d = y)
                }
                return l(d);
            case en:
                e: {
                    for (O = f.key; c !== null; ) {
                        if (c.key === O)
                            if (c.tag === 4 && c.stateNode.containerInfo === f.containerInfo && c.stateNode.implementation === f.implementation) {
                                n(d, c.sibling),
                                c = i(c, f.children || []),
                                c.return = d,
                                d = c;
                                break e
                            } else {
                                n(d, c);
                                break
                            }
                        else
                            t(d, c);
                        c = c.sibling
                    }
                    c = go(f, d.mode, y),
                    c.return = d,
                    d = c
                }
                return l(d);
            case ft:
                return O = f._init,
                L(d, c, O(f._payload), y)
            }
            if (Vn(f))
                return E(d, c, f, y);
            if (Ln(f))
                return k(d, c, f, y);
            Dr(d, f)
        }
        return typeof f == "string" && f !== "" || typeof f == "number" ? (f = "" + f,
        c !== null && c.tag === 6 ? (n(d, c.sibling),
        c = i(c, f),
        c.return = d,
        d = c) : (n(d, c),
        c = ho(f, d.mode, y),
        c.return = d,
        d = c),
        l(d)) : n(d, c)
    }
    return L
}
var Gn = Ju(!0)
  , qu = Ju(!1)
  , xr = {}
  , Ye = _t(xr)
  , fr = _t(xr)
  , mr = _t(xr);
function Dt(e) {
    if (e === xr)
        throw Error(w(174));
    return e
}
function Ul(e, t) {
    switch (D(mr, t),
    D(fr, e),
    D(Ye, xr),
    e = t.nodeType,
    e) {
    case 9:
    case 11:
        t = (t = t.documentElement) ? t.namespaceURI : Fo(null, "");
        break;
    default:
        e = e === 8 ? t.parentNode : t,
        t = e.namespaceURI || null,
        e = e.tagName,
        t = Fo(t, e)
    }
    B(Ye),
    D(Ye, t)
}
function xn() {
    B(Ye),
    B(fr),
    B(mr)
}
function ec(e) {
    Dt(mr.current);
    var t = Dt(Ye.current)
      , n = Fo(t, e.type);
    t !== n && (D(fr, e),
    D(Ye, n))
}
function Bl(e) {
    fr.current === e && (B(Ye),
    B(fr))
}
var W = _t(0);
function vi(e) {
    for (var t = e; t !== null; ) {
        if (t.tag === 13) {
            var n = t.memoizedState;
            if (n !== null && (n = n.dehydrated,
            n === null || n.data === "$?" || n.data === "$!"))
                return t
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
            if (t.flags & 128)
                return t
        } else if (t.child !== null) {
            t.child.return = t,
            t = t.child;
            continue
        }
        if (t === e)
            break;
        for (; t.sibling === null; ) {
            if (t.return === null || t.return === e)
                return null;
            t = t.return
        }
        t.sibling.return = t.return,
        t = t.sibling
    }
    return null
}
var so = [];
function Hl() {
    for (var e = 0; e < so.length; e++)
        so[e]._workInProgressVersionPrimary = null;
    so.length = 0
}
var Kr = ct.ReactCurrentDispatcher
  , uo = ct.ReactCurrentBatchConfig
  , Vt = 0
  , $ = null
  , Z = null
  , q = null
  , wi = !1
  , Zn = !1
  , hr = 0
  , f1 = 0;
function oe() {
    throw Error(w(321))
}
function Vl(e, t) {
    if (t === null)
        return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
        if (!He(e[n], t[n]))
            return !1;
    return !0
}
function Wl(e, t, n, r, i, o) {
    if (Vt = o,
    $ = t,
    t.memoizedState = null,
    t.updateQueue = null,
    t.lanes = 0,
    Kr.current = e === null || e.memoizedState === null ? y1 : v1,
    e = n(r, i),
    Zn) {
        o = 0;
        do {
            if (Zn = !1,
            hr = 0,
            25 <= o)
                throw Error(w(301));
            o += 1,
            q = Z = null,
            t.updateQueue = null,
            Kr.current = w1,
            e = n(r, i)
        } while (Zn)
    }
    if (Kr.current = Ei,
    t = Z !== null && Z.next !== null,
    Vt = 0,
    q = Z = $ = null,
    wi = !1,
    t)
        throw Error(w(300));
    return e
}
function $l() {
    var e = hr !== 0;
    return hr = 0,
    e
}
function be() {
    var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
    };
    return q === null ? $.memoizedState = q = e : q = q.next = e,
    q
}
function Le() {
    if (Z === null) {
        var e = $.alternate;
        e = e !== null ? e.memoizedState : null
    } else
        e = Z.next;
    var t = q === null ? $.memoizedState : q.next;
    if (t !== null)
        q = t,
        Z = e;
    else {
        if (e === null)
            throw Error(w(310));
        Z = e,
        e = {
            memoizedState: Z.memoizedState,
            baseState: Z.baseState,
            baseQueue: Z.baseQueue,
            queue: Z.queue,
            next: null
        },
        q === null ? $.memoizedState = q = e : q = q.next = e
    }
    return q
}
function gr(e, t) {
    return typeof t == "function" ? t(e) : t
}
function co(e) {
    var t = Le()
      , n = t.queue;
    if (n === null)
        throw Error(w(311));
    n.lastRenderedReducer = e;
    var r = Z
      , i = r.baseQueue
      , o = n.pending;
    if (o !== null) {
        if (i !== null) {
            var l = i.next;
            i.next = o.next,
            o.next = l
        }
        r.baseQueue = i = o,
        n.pending = null
    }
    if (i !== null) {
        o = i.next,
        r = r.baseState;
        var a = l = null
          , s = null
          , p = o;
        do {
            var g = p.lane;
            if ((Vt & g) === g)
                s !== null && (s = s.next = {
                    lane: 0,
                    action: p.action,
                    hasEagerState: p.hasEagerState,
                    eagerState: p.eagerState,
                    next: null
                }),
                r = p.hasEagerState ? p.eagerState : e(r, p.action);
            else {
                var h = {
                    lane: g,
                    action: p.action,
                    hasEagerState: p.hasEagerState,
                    eagerState: p.eagerState,
                    next: null
                };
                s === null ? (a = s = h,
                l = r) : s = s.next = h,
                $.lanes |= g,
                Wt |= g
            }
            p = p.next
        } while (p !== null && p !== o);
        s === null ? l = r : s.next = a,
        He(r, t.memoizedState) || (ge = !0),
        t.memoizedState = r,
        t.baseState = l,
        t.baseQueue = s,
        n.lastRenderedState = r
    }
    if (e = n.interleaved,
    e !== null) {
        i = e;
        do
            o = i.lane,
            $.lanes |= o,
            Wt |= o,
            i = i.next;
        while (i !== e)
    } else
        i === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch]
}
function po(e) {
    var t = Le()
      , n = t.queue;
    if (n === null)
        throw Error(w(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch
      , i = n.pending
      , o = t.memoizedState;
    if (i !== null) {
        n.pending = null;
        var l = i = i.next;
        do
            o = e(o, l.action),
            l = l.next;
        while (l !== i);
        He(o, t.memoizedState) || (ge = !0),
        t.memoizedState = o,
        t.baseQueue === null && (t.baseState = o),
        n.lastRenderedState = o
    }
    return [o, r]
}
function tc() {}
function nc(e, t) {
    var n = $
      , r = Le()
      , i = t()
      , o = !He(r.memoizedState, i);
    if (o && (r.memoizedState = i,
    ge = !0),
    r = r.queue,
    bl(oc.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || q !== null && q.memoizedState.tag & 1) {
        if (n.flags |= 2048,
        yr(9, ic.bind(null, n, r, i, t), void 0, null),
        ee === null)
            throw Error(w(349));
        Vt & 30 || rc(n, t, i)
    }
    return i
}
function rc(e, t, n) {
    e.flags |= 16384,
    e = {
        getSnapshot: t,
        value: n
    },
    t = $.updateQueue,
    t === null ? (t = {
        lastEffect: null,
        stores: null
    },
    $.updateQueue = t,
    t.stores = [e]) : (n = t.stores,
    n === null ? t.stores = [e] : n.push(e))
}
function ic(e, t, n, r) {
    t.value = n,
    t.getSnapshot = r,
    lc(t) && ac(e)
}
function oc(e, t, n) {
    return n(function() {
        lc(t) && ac(e)
    })
}
function lc(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !He(e, n)
    } catch {
        return !0
    }
}
function ac(e) {
    var t = st(e, 1);
    t !== null && Be(t, e, 1, -1)
}
function ds(e) {
    var t = be();
    return typeof e == "function" && (e = e()),
    t.memoizedState = t.baseState = e,
    e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: gr,
        lastRenderedState: e
    },
    t.queue = e,
    e = e.dispatch = g1.bind(null, $, e),
    [t.memoizedState, e]
}
function yr(e, t, n, r) {
    return e = {
        tag: e,
        create: t,
        destroy: n,
        deps: r,
        next: null
    },
    t = $.updateQueue,
    t === null ? (t = {
        lastEffect: null,
        stores: null
    },
    $.updateQueue = t,
    t.lastEffect = e.next = e) : (n = t.lastEffect,
    n === null ? t.lastEffect = e.next = e : (r = n.next,
    n.next = e,
    e.next = r,
    t.lastEffect = e)),
    e
}
function sc() {
    return Le().memoizedState
}
function Zr(e, t, n, r) {
    var i = be();
    $.flags |= e,
    i.memoizedState = yr(1 | t, n, void 0, r === void 0 ? null : r)
}
function Li(e, t, n, r) {
    var i = Le();
    r = r === void 0 ? null : r;
    var o = void 0;
    if (Z !== null) {
        var l = Z.memoizedState;
        if (o = l.destroy,
        r !== null && Vl(r, l.deps)) {
            i.memoizedState = yr(t, n, o, r);
            return
        }
    }
    $.flags |= e,
    i.memoizedState = yr(1 | t, n, o, r)
}
function ps(e, t) {
    return Zr(8390656, 8, e, t)
}
function bl(e, t) {
    return Li(2048, 8, e, t)
}
function uc(e, t) {
    return Li(4, 2, e, t)
}
function cc(e, t) {
    return Li(4, 4, e, t)
}
function dc(e, t) {
    if (typeof t == "function")
        return e = e(),
        t(e),
        function() {
            t(null)
        }
        ;
    if (t != null)
        return e = e(),
        t.current = e,
        function() {
            t.current = null
        }
}
function pc(e, t, n) {
    return n = n != null ? n.concat([e]) : null,
    Li(4, 4, dc.bind(null, t, e), n)
}
function Xl() {}
function fc(e, t) {
    var n = Le();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Vl(t, r[1]) ? r[0] : (n.memoizedState = [e, t],
    e)
}
function mc(e, t) {
    var n = Le();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Vl(t, r[1]) ? r[0] : (e = e(),
    n.memoizedState = [e, t],
    e)
}
function hc(e, t, n) {
    return Vt & 21 ? (He(n, t) || (n = vu(),
    $.lanes |= n,
    Wt |= n,
    e.baseState = !0),
    t) : (e.baseState && (e.baseState = !1,
    ge = !0),
    e.memoizedState = n)
}
function m1(e, t) {
    var n = z;
    z = n !== 0 && 4 > n ? n : 4,
    e(!0);
    var r = uo.transition;
    uo.transition = {};
    try {
        e(!1),
        t()
    } finally {
        z = n,
        uo.transition = r
    }
}
function gc() {
    return Le().memoizedState
}
function h1(e, t, n) {
    var r = Pt(e);
    if (n = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    },
    yc(e))
        vc(t, n);
    else if (n = Qu(e, t, n, r),
    n !== null) {
        var i = pe();
        Be(n, e, r, i),
        wc(n, t, r)
    }
}
function g1(e, t, n) {
    var r = Pt(e)
      , i = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    };
    if (yc(e))
        vc(t, i);
    else {
        var o = e.alternate;
        if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = t.lastRenderedReducer,
        o !== null))
            try {
                var l = t.lastRenderedState
                  , a = o(l, n);
                if (i.hasEagerState = !0,
                i.eagerState = a,
                He(a, l)) {
                    var s = t.interleaved;
                    s === null ? (i.next = i,
                    Dl(t)) : (i.next = s.next,
                    s.next = i),
                    t.interleaved = i;
                    return
                }
            } catch {} finally {}
        n = Qu(e, t, i, r),
        n !== null && (i = pe(),
        Be(n, e, r, i),
        wc(n, t, r))
    }
}
function yc(e) {
    var t = e.alternate;
    return e === $ || t !== null && t === $
}
function vc(e, t) {
    Zn = wi = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next,
    n.next = t),
    e.pending = t
}
function wc(e, t, n) {
    if (n & 4194240) {
        var r = t.lanes;
        r &= e.pendingLanes,
        n |= r,
        t.lanes = n,
        Sl(e, n)
    }
}
var Ei = {
    readContext: Ne,
    useCallback: oe,
    useContext: oe,
    useEffect: oe,
    useImperativeHandle: oe,
    useInsertionEffect: oe,
    useLayoutEffect: oe,
    useMemo: oe,
    useReducer: oe,
    useRef: oe,
    useState: oe,
    useDebugValue: oe,
    useDeferredValue: oe,
    useTransition: oe,
    useMutableSource: oe,
    useSyncExternalStore: oe,
    useId: oe,
    unstable_isNewReconciler: !1
}
  , y1 = {
    readContext: Ne,
    useCallback: function(e, t) {
        return be().memoizedState = [e, t === void 0 ? null : t],
        e
    },
    useContext: Ne,
    useEffect: ps,
    useImperativeHandle: function(e, t, n) {
        return n = n != null ? n.concat([e]) : null,
        Zr(4194308, 4, dc.bind(null, t, e), n)
    },
    useLayoutEffect: function(e, t) {
        return Zr(4194308, 4, e, t)
    },
    useInsertionEffect: function(e, t) {
        return Zr(4, 2, e, t)
    },
    useMemo: function(e, t) {
        var n = be();
        return t = t === void 0 ? null : t,
        e = e(),
        n.memoizedState = [e, t],
        e
    },
    useReducer: function(e, t, n) {
        var r = be();
        return t = n !== void 0 ? n(t) : t,
        r.memoizedState = r.baseState = t,
        e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t
        },
        r.queue = e,
        e = e.dispatch = h1.bind(null, $, e),
        [r.memoizedState, e]
    },
    useRef: function(e) {
        var t = be();
        return e = {
            current: e
        },
        t.memoizedState = e
    },
    useState: ds,
    useDebugValue: Xl,
    useDeferredValue: function(e) {
        return be().memoizedState = e
    },
    useTransition: function() {
        var e = ds(!1)
          , t = e[0];
        return e = m1.bind(null, e[1]),
        be().memoizedState = e,
        [t, e]
    },
    useMutableSource: function() {},
    useSyncExternalStore: function(e, t, n) {
        var r = $
          , i = be();
        if (V) {
            if (n === void 0)
                throw Error(w(407));
            n = n()
        } else {
            if (n = t(),
            ee === null)
                throw Error(w(349));
            Vt & 30 || rc(r, t, n)
        }
        i.memoizedState = n;
        var o = {
            value: n,
            getSnapshot: t
        };
        return i.queue = o,
        ps(oc.bind(null, r, o, e), [e]),
        r.flags |= 2048,
        yr(9, ic.bind(null, r, o, n, t), void 0, null),
        n
    },
    useId: function() {
        var e = be()
          , t = ee.identifierPrefix;
        if (V) {
            var n = it
              , r = rt;
            n = (r & ~(1 << 32 - Ue(r) - 1)).toString(32) + n,
            t = ":" + t + "R" + n,
            n = hr++,
            0 < n && (t += "H" + n.toString(32)),
            t += ":"
        } else
            n = f1++,
            t = ":" + t + "r" + n.toString(32) + ":";
        return e.memoizedState = t
    },
    unstable_isNewReconciler: !1
}
  , v1 = {
    readContext: Ne,
    useCallback: fc,
    useContext: Ne,
    useEffect: bl,
    useImperativeHandle: pc,
    useInsertionEffect: uc,
    useLayoutEffect: cc,
    useMemo: mc,
    useReducer: co,
    useRef: sc,
    useState: function() {
        return co(gr)
    },
    useDebugValue: Xl,
    useDeferredValue: function(e) {
        var t = Le();
        return hc(t, Z.memoizedState, e)
    },
    useTransition: function() {
        var e = co(gr)[0]
          , t = Le().memoizedState;
        return [e, t]
    },
    useMutableSource: tc,
    useSyncExternalStore: nc,
    useId: gc,
    unstable_isNewReconciler: !1
}
  , w1 = {
    readContext: Ne,
    useCallback: fc,
    useContext: Ne,
    useEffect: bl,
    useImperativeHandle: pc,
    useInsertionEffect: uc,
    useLayoutEffect: cc,
    useMemo: mc,
    useReducer: po,
    useRef: sc,
    useState: function() {
        return po(gr)
    },
    useDebugValue: Xl,
    useDeferredValue: function(e) {
        var t = Le();
        return Z === null ? t.memoizedState = e : hc(t, Z.memoizedState, e)
    },
    useTransition: function() {
        var e = po(gr)[0]
          , t = Le().memoizedState;
        return [e, t]
    },
    useMutableSource: tc,
    useSyncExternalStore: nc,
    useId: gc,
    unstable_isNewReconciler: !1
};
function Sn(e, t) {
    try {
        var n = ""
          , r = t;
        do
            n += X0(r),
            r = r.return;
        while (r);
        var i = n
    } catch (o) {
        i = `
Error generating stack: ` + o.message + `
` + o.stack
    }
    return {
        value: e,
        source: t,
        stack: i,
        digest: null
    }
}
function fo(e, t, n) {
    return {
        value: e,
        source: null,
        stack: n ?? null,
        digest: t ?? null
    }
}
function Jo(e, t) {
    try {
        console.error(t.value)
    } catch (n) {
        setTimeout(function() {
            throw n
        })
    }
}
var E1 = typeof WeakMap == "function" ? WeakMap : Map;
function Ec(e, t, n) {
    n = ot(-1, n),
    n.tag = 3,
    n.payload = {
        element: null
    };
    var r = t.value;
    return n.callback = function() {
        Gi || (Gi = !0,
        sl = r),
        Jo(e, t)
    }
    ,
    n
}
function kc(e, t, n) {
    n = ot(-1, n),
    n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
        var i = t.value;
        n.payload = function() {
            return r(i)
        }
        ,
        n.callback = function() {
            Jo(e, t)
        }
    }
    var o = e.stateNode;
    return o !== null && typeof o.componentDidCatch == "function" && (n.callback = function() {
        Jo(e, t),
        typeof r != "function" && (St === null ? St = new Set([this]) : St.add(this));
        var l = t.stack;
        this.componentDidCatch(t.value, {
            componentStack: l !== null ? l : ""
        })
    }
    ),
    n
}
function fs(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
        r = e.pingCache = new E1;
        var i = new Set;
        r.set(t, i)
    } else
        i = r.get(t),
        i === void 0 && (i = new Set,
        r.set(t, i));
    i.has(n) || (i.add(n),
    e = L1.bind(null, e, t, n),
    t.then(e, e))
}
function ms(e) {
    do {
        var t;
        if ((t = e.tag === 13) && (t = e.memoizedState,
        t = t !== null ? t.dehydrated !== null : !0),
        t)
            return e;
        e = e.return
    } while (e !== null);
    return null
}
function hs(e, t, n, r, i) {
    return e.mode & 1 ? (e.flags |= 65536,
    e.lanes = i,
    e) : (e === t ? e.flags |= 65536 : (e.flags |= 128,
    n.flags |= 131072,
    n.flags &= -52805,
    n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = ot(-1, 1),
    t.tag = 2,
    xt(n, t, 1))),
    n.lanes |= 1),
    e)
}
var k1 = ct.ReactCurrentOwner
  , ge = !1;
function de(e, t, n, r) {
    t.child = e === null ? qu(t, null, n, r) : Gn(t, e.child, n, r)
}
function gs(e, t, n, r, i) {
    n = n.render;
    var o = t.ref;
    return yn(t, i),
    r = Wl(e, t, n, r, o, i),
    n = $l(),
    e !== null && !ge ? (t.updateQueue = e.updateQueue,
    t.flags &= -2053,
    e.lanes &= ~i,
    ut(e, t, i)) : (V && n && Tl(t),
    t.flags |= 1,
    de(e, t, r, i),
    t.child)
}
function ys(e, t, n, r, i) {
    if (e === null) {
        var o = n.type;
        return typeof o == "function" && !ta(o) && o.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15,
        t.type = o,
        Gc(e, t, o, r, i)) : (e = ti(n.type, null, r, t, t.mode, i),
        e.ref = t.ref,
        e.return = t,
        t.child = e)
    }
    if (o = e.child,
    !(e.lanes & i)) {
        var l = o.memoizedProps;
        if (n = n.compare,
        n = n !== null ? n : ur,
        n(l, r) && e.ref === t.ref)
            return ut(e, t, i)
    }
    return t.flags |= 1,
    e = It(o, r),
    e.ref = t.ref,
    e.return = t,
    t.child = e
}
function Gc(e, t, n, r, i) {
    if (e !== null) {
        var o = e.memoizedProps;
        if (ur(o, r) && e.ref === t.ref)
            if (ge = !1,
            t.pendingProps = r = o,
            (e.lanes & i) !== 0)
                e.flags & 131072 && (ge = !0);
            else
                return t.lanes = e.lanes,
                ut(e, t, i)
    }
    return qo(e, t, n, r, i)
}
function xc(e, t, n) {
    var r = t.pendingProps
      , i = r.children
      , o = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
        if (!(t.mode & 1))
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            D(pn, ke),
            ke |= n;
        else {
            if (!(n & 1073741824))
                return e = o !== null ? o.baseLanes | n : n,
                t.lanes = t.childLanes = 1073741824,
                t.memoizedState = {
                    baseLanes: e,
                    cachePool: null,
                    transitions: null
                },
                t.updateQueue = null,
                D(pn, ke),
                ke |= e,
                null;
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            r = o !== null ? o.baseLanes : n,
            D(pn, ke),
            ke |= r
        }
    else
        o !== null ? (r = o.baseLanes | n,
        t.memoizedState = null) : r = n,
        D(pn, ke),
        ke |= r;
    return de(e, t, i, n),
    t.child
}
function Sc(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512,
    t.flags |= 2097152)
}
function qo(e, t, n, r, i) {
    var o = ve(n) ? Bt : ue.current;
    return o = En(t, o),
    yn(t, i),
    n = Wl(e, t, n, r, o, i),
    r = $l(),
    e !== null && !ge ? (t.updateQueue = e.updateQueue,
    t.flags &= -2053,
    e.lanes &= ~i,
    ut(e, t, i)) : (V && r && Tl(t),
    t.flags |= 1,
    de(e, t, n, i),
    t.child)
}
function vs(e, t, n, r, i) {
    if (ve(n)) {
        var o = !0;
        pi(t)
    } else
        o = !1;
    if (yn(t, i),
    t.stateNode === null)
        Jr(e, t),
        Zu(t, n, r),
        Zo(t, n, r, i),
        r = !0;
    else if (e === null) {
        var l = t.stateNode
          , a = t.memoizedProps;
        l.props = a;
        var s = l.context
          , p = n.contextType;
        typeof p == "object" && p !== null ? p = Ne(p) : (p = ve(n) ? Bt : ue.current,
        p = En(t, p));
        var g = n.getDerivedStateFromProps
          , h = typeof g == "function" || typeof l.getSnapshotBeforeUpdate == "function";
        h || typeof l.UNSAFE_componentWillReceiveProps != "function" && typeof l.componentWillReceiveProps != "function" || (a !== r || s !== p) && us(t, l, r, p),
        mt = !1;
        var m = t.memoizedState;
        l.state = m,
        yi(t, r, l, i),
        s = t.memoizedState,
        a !== r || m !== s || ye.current || mt ? (typeof g == "function" && (Ko(t, n, g, r),
        s = t.memoizedState),
        (a = mt || ss(t, n, a, r, m, s, p)) ? (h || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (typeof l.componentWillMount == "function" && l.componentWillMount(),
        typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount()),
        typeof l.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof l.componentDidMount == "function" && (t.flags |= 4194308),
        t.memoizedProps = r,
        t.memoizedState = s),
        l.props = r,
        l.state = s,
        l.context = p,
        r = a) : (typeof l.componentDidMount == "function" && (t.flags |= 4194308),
        r = !1)
    } else {
        l = t.stateNode,
        Yu(e, t),
        a = t.memoizedProps,
        p = t.type === t.elementType ? a : Me(t.type, a),
        l.props = p,
        h = t.pendingProps,
        m = l.context,
        s = n.contextType,
        typeof s == "object" && s !== null ? s = Ne(s) : (s = ve(n) ? Bt : ue.current,
        s = En(t, s));
        var v = n.getDerivedStateFromProps;
        (g = typeof v == "function" || typeof l.getSnapshotBeforeUpdate == "function") || typeof l.UNSAFE_componentWillReceiveProps != "function" && typeof l.componentWillReceiveProps != "function" || (a !== h || m !== s) && us(t, l, r, s),
        mt = !1,
        m = t.memoizedState,
        l.state = m,
        yi(t, r, l, i);
        var E = t.memoizedState;
        a !== h || m !== E || ye.current || mt ? (typeof v == "function" && (Ko(t, n, v, r),
        E = t.memoizedState),
        (p = mt || ss(t, n, p, r, m, E, s) || !1) ? (g || typeof l.UNSAFE_componentWillUpdate != "function" && typeof l.componentWillUpdate != "function" || (typeof l.componentWillUpdate == "function" && l.componentWillUpdate(r, E, s),
        typeof l.UNSAFE_componentWillUpdate == "function" && l.UNSAFE_componentWillUpdate(r, E, s)),
        typeof l.componentDidUpdate == "function" && (t.flags |= 4),
        typeof l.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof l.componentDidUpdate != "function" || a === e.memoizedProps && m === e.memoizedState || (t.flags |= 4),
        typeof l.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && m === e.memoizedState || (t.flags |= 1024),
        t.memoizedProps = r,
        t.memoizedState = E),
        l.props = r,
        l.state = E,
        l.context = s,
        r = p) : (typeof l.componentDidUpdate != "function" || a === e.memoizedProps && m === e.memoizedState || (t.flags |= 4),
        typeof l.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && m === e.memoizedState || (t.flags |= 1024),
        r = !1)
    }
    return el(e, t, n, r, o, i)
}
function el(e, t, n, r, i, o) {
    Sc(e, t);
    var l = (t.flags & 128) !== 0;
    if (!r && !l)
        return i && rs(t, n, !1),
        ut(e, t, o);
    r = t.stateNode,
    k1.current = t;
    var a = l && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1,
    e !== null && l ? (t.child = Gn(t, e.child, null, o),
    t.child = Gn(t, null, a, o)) : de(e, t, a, o),
    t.memoizedState = r.state,
    i && rs(t, n, !0),
    t.child
}
function Pc(e) {
    var t = e.stateNode;
    t.pendingContext ? ns(e, t.pendingContext, t.pendingContext !== t.context) : t.context && ns(e, t.context, !1),
    Ul(e, t.containerInfo)
}
function ws(e, t, n, r, i) {
    return kn(),
    Ll(i),
    t.flags |= 256,
    de(e, t, n, r),
    t.child
}
var tl = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0
};
function nl(e) {
    return {
        baseLanes: e,
        cachePool: null,
        transitions: null
    }
}
function Ic(e, t, n) {
    var r = t.pendingProps, i = W.current, o = !1, l = (t.flags & 128) !== 0, a;
    if ((a = l) || (a = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    a ? (o = !0,
    t.flags &= -129) : (e === null || e.memoizedState !== null) && (i |= 1),
    D(W, i & 1),
    e === null)
        return Qo(t),
        e = t.memoizedState,
        e !== null && (e = e.dehydrated,
        e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1,
        null) : (l = r.children,
        e = r.fallback,
        o ? (r = t.mode,
        o = t.child,
        l = {
            mode: "hidden",
            children: l
        },
        !(r & 1) && o !== null ? (o.childLanes = 0,
        o.pendingProps = l) : o = Mi(l, r, 0, null),
        e = Ut(e, r, n, null),
        o.return = t,
        e.return = t,
        o.sibling = e,
        t.child = o,
        t.child.memoizedState = nl(n),
        t.memoizedState = tl,
        e) : Ql(t, l));
    if (i = e.memoizedState,
    i !== null && (a = i.dehydrated,
    a !== null))
        return G1(e, t, l, r, a, i, n);
    if (o) {
        o = r.fallback,
        l = t.mode,
        i = e.child,
        a = i.sibling;
        var s = {
            mode: "hidden",
            children: r.children
        };
        return !(l & 1) && t.child !== i ? (r = t.child,
        r.childLanes = 0,
        r.pendingProps = s,
        t.deletions = null) : (r = It(i, s),
        r.subtreeFlags = i.subtreeFlags & 14680064),
        a !== null ? o = It(a, o) : (o = Ut(o, l, n, null),
        o.flags |= 2),
        o.return = t,
        r.return = t,
        r.sibling = o,
        t.child = r,
        r = o,
        o = t.child,
        l = e.child.memoizedState,
        l = l === null ? nl(n) : {
            baseLanes: l.baseLanes | n,
            cachePool: null,
            transitions: l.transitions
        },
        o.memoizedState = l,
        o.childLanes = e.childLanes & ~n,
        t.memoizedState = tl,
        r
    }
    return o = e.child,
    e = o.sibling,
    r = It(o, {
        mode: "visible",
        children: r.children
    }),
    !(t.mode & 1) && (r.lanes = n),
    r.return = t,
    r.sibling = null,
    e !== null && (n = t.deletions,
    n === null ? (t.deletions = [e],
    t.flags |= 16) : n.push(e)),
    t.child = r,
    t.memoizedState = null,
    r
}
function Ql(e, t) {
    return t = Mi({
        mode: "visible",
        children: t
    }, e.mode, 0, null),
    t.return = e,
    e.child = t
}
function jr(e, t, n, r) {
    return r !== null && Ll(r),
    Gn(t, e.child, null, n),
    e = Ql(t, t.pendingProps.children),
    e.flags |= 2,
    t.memoizedState = null,
    e
}
function G1(e, t, n, r, i, o, l) {
    if (n)
        return t.flags & 256 ? (t.flags &= -257,
        r = fo(Error(w(422))),
        jr(e, t, l, r)) : t.memoizedState !== null ? (t.child = e.child,
        t.flags |= 128,
        null) : (o = r.fallback,
        i = t.mode,
        r = Mi({
            mode: "visible",
            children: r.children
        }, i, 0, null),
        o = Ut(o, i, l, null),
        o.flags |= 2,
        r.return = t,
        o.return = t,
        r.sibling = o,
        t.child = r,
        t.mode & 1 && Gn(t, e.child, null, l),
        t.child.memoizedState = nl(l),
        t.memoizedState = tl,
        o);
    if (!(t.mode & 1))
        return jr(e, t, l, null);
    if (i.data === "$!") {
        if (r = i.nextSibling && i.nextSibling.dataset,
        r)
            var a = r.dgst;
        return r = a,
        o = Error(w(419)),
        r = fo(o, r, void 0),
        jr(e, t, l, r)
    }
    if (a = (l & e.childLanes) !== 0,
    ge || a) {
        if (r = ee,
        r !== null) {
            switch (l & -l) {
            case 4:
                i = 2;
                break;
            case 16:
                i = 8;
                break;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
                i = 32;
                break;
            case 536870912:
                i = 268435456;
                break;
            default:
                i = 0
            }
            i = i & (r.suspendedLanes | l) ? 0 : i,
            i !== 0 && i !== o.retryLane && (o.retryLane = i,
            st(e, i),
            Be(r, e, i, -1))
        }
        return ea(),
        r = fo(Error(w(421))),
        jr(e, t, l, r)
    }
    return i.data === "$?" ? (t.flags |= 128,
    t.child = e.child,
    t = R1.bind(null, e),
    i._reactRetry = t,
    null) : (e = o.treeContext,
    Ge = Gt(i.nextSibling),
    xe = t,
    V = !0,
    je = null,
    e !== null && (Fe[_e++] = rt,
    Fe[_e++] = it,
    Fe[_e++] = Ht,
    rt = e.id,
    it = e.overflow,
    Ht = t),
    t = Ql(t, r.children),
    t.flags |= 4096,
    t)
}
function Es(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t),
    Yo(e.return, t, n)
}
function mo(e, t, n, r, i) {
    var o = e.memoizedState;
    o === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i
    } : (o.isBackwards = t,
    o.rendering = null,
    o.renderingStartTime = 0,
    o.last = r,
    o.tail = n,
    o.tailMode = i)
}
function Oc(e, t, n) {
    var r = t.pendingProps
      , i = r.revealOrder
      , o = r.tail;
    if (de(e, t, r.children, n),
    r = W.current,
    r & 2)
        r = r & 1 | 2,
        t.flags |= 128;
    else {
        if (e !== null && e.flags & 128)
            e: for (e = t.child; e !== null; ) {
                if (e.tag === 13)
                    e.memoizedState !== null && Es(e, n, t);
                else if (e.tag === 19)
                    Es(e, n, t);
                else if (e.child !== null) {
                    e.child.return = e,
                    e = e.child;
                    continue
                }
                if (e === t)
                    break e;
                for (; e.sibling === null; ) {
                    if (e.return === null || e.return === t)
                        break e;
                    e = e.return
                }
                e.sibling.return = e.return,
                e = e.sibling
            }
        r &= 1
    }
    if (D(W, r),
    !(t.mode & 1))
        t.memoizedState = null;
    else
        switch (i) {
        case "forwards":
            for (n = t.child,
            i = null; n !== null; )
                e = n.alternate,
                e !== null && vi(e) === null && (i = n),
                n = n.sibling;
            n = i,
            n === null ? (i = t.child,
            t.child = null) : (i = n.sibling,
            n.sibling = null),
            mo(t, !1, i, n, o);
            break;
        case "backwards":
            for (n = null,
            i = t.child,
            t.child = null; i !== null; ) {
                if (e = i.alternate,
                e !== null && vi(e) === null) {
                    t.child = i;
                    break
                }
                e = i.sibling,
                i.sibling = n,
                n = i,
                i = e
            }
            mo(t, !0, n, null, o);
            break;
        case "together":
            mo(t, !1, null, null, void 0);
            break;
        default:
            t.memoizedState = null
        }
    return t.child
}
function Jr(e, t) {
    !(t.mode & 1) && e !== null && (e.alternate = null,
    t.alternate = null,
    t.flags |= 2)
}
function ut(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies),
    Wt |= t.lanes,
    !(n & t.childLanes))
        return null;
    if (e !== null && t.child !== e.child)
        throw Error(w(153));
    if (t.child !== null) {
        for (e = t.child,
        n = It(e, e.pendingProps),
        t.child = n,
        n.return = t; e.sibling !== null; )
            e = e.sibling,
            n = n.sibling = It(e, e.pendingProps),
            n.return = t;
        n.sibling = null
    }
    return t.child
}
function x1(e, t, n) {
    switch (t.tag) {
    case 3:
        Pc(t),
        kn();
        break;
    case 5:
        ec(t);
        break;
    case 1:
        ve(t.type) && pi(t);
        break;
    case 4:
        Ul(t, t.stateNode.containerInfo);
        break;
    case 10:
        var r = t.type._context
          , i = t.memoizedProps.value;
        D(hi, r._currentValue),
        r._currentValue = i;
        break;
    case 13:
        if (r = t.memoizedState,
        r !== null)
            return r.dehydrated !== null ? (D(W, W.current & 1),
            t.flags |= 128,
            null) : n & t.child.childLanes ? Ic(e, t, n) : (D(W, W.current & 1),
            e = ut(e, t, n),
            e !== null ? e.sibling : null);
        D(W, W.current & 1);
        break;
    case 19:
        if (r = (n & t.childLanes) !== 0,
        e.flags & 128) {
            if (r)
                return Oc(e, t, n);
            t.flags |= 128
        }
        if (i = t.memoizedState,
        i !== null && (i.rendering = null,
        i.tail = null,
        i.lastEffect = null),
        D(W, W.current),
        r)
            break;
        return null;
    case 22:
    case 23:
        return t.lanes = 0,
        xc(e, t, n)
    }
    return ut(e, t, n)
}
var Ac, rl, Fc, _c;
Ac = function(e, t) {
    for (var n = t.child; n !== null; ) {
        if (n.tag === 5 || n.tag === 6)
            e.appendChild(n.stateNode);
        else if (n.tag !== 4 && n.child !== null) {
            n.child.return = n,
            n = n.child;
            continue
        }
        if (n === t)
            break;
        for (; n.sibling === null; ) {
            if (n.return === null || n.return === t)
                return;
            n = n.return
        }
        n.sibling.return = n.return,
        n = n.sibling
    }
}
;
rl = function() {}
;
Fc = function(e, t, n, r) {
    var i = e.memoizedProps;
    if (i !== r) {
        e = t.stateNode,
        Dt(Ye.current);
        var o = null;
        switch (n) {
        case "input":
            i = Po(e, i),
            r = Po(e, r),
            o = [];
            break;
        case "select":
            i = b({}, i, {
                value: void 0
            }),
            r = b({}, r, {
                value: void 0
            }),
            o = [];
            break;
        case "textarea":
            i = Ao(e, i),
            r = Ao(e, r),
            o = [];
            break;
        default:
            typeof i.onClick != "function" && typeof r.onClick == "function" && (e.onclick = ci)
        }
        _o(n, r);
        var l;
        n = null;
        for (p in i)
            if (!r.hasOwnProperty(p) && i.hasOwnProperty(p) && i[p] != null)
                if (p === "style") {
                    var a = i[p];
                    for (l in a)
                        a.hasOwnProperty(l) && (n || (n = {}),
                        n[l] = "")
                } else
                    p !== "dangerouslySetInnerHTML" && p !== "children" && p !== "suppressContentEditableWarning" && p !== "suppressHydrationWarning" && p !== "autoFocus" && (nr.hasOwnProperty(p) ? o || (o = []) : (o = o || []).push(p, null));
        for (p in r) {
            var s = r[p];
            if (a = i != null ? i[p] : void 0,
            r.hasOwnProperty(p) && s !== a && (s != null || a != null))
                if (p === "style")
                    if (a) {
                        for (l in a)
                            !a.hasOwnProperty(l) || s && s.hasOwnProperty(l) || (n || (n = {}),
                            n[l] = "");
                        for (l in s)
                            s.hasOwnProperty(l) && a[l] !== s[l] && (n || (n = {}),
                            n[l] = s[l])
                    } else
                        n || (o || (o = []),
                        o.push(p, n)),
                        n = s;
                else
                    p === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0,
                    a = a ? a.__html : void 0,
                    s != null && a !== s && (o = o || []).push(p, s)) : p === "children" ? typeof s != "string" && typeof s != "number" || (o = o || []).push(p, "" + s) : p !== "suppressContentEditableWarning" && p !== "suppressHydrationWarning" && (nr.hasOwnProperty(p) ? (s != null && p === "onScroll" && U("scroll", e),
                    o || a === s || (o = [])) : (o = o || []).push(p, s))
        }
        n && (o = o || []).push("style", n);
        var p = o;
        (t.updateQueue = p) && (t.flags |= 4)
    }
}
;
_c = function(e, t, n, r) {
    n !== r && (t.flags |= 4)
}
;
function Un(e, t) {
    if (!V)
        switch (e.tailMode) {
        case "hidden":
            t = e.tail;
            for (var n = null; t !== null; )
                t.alternate !== null && (n = t),
                t = t.sibling;
            n === null ? e.tail = null : n.sibling = null;
            break;
        case "collapsed":
            n = e.tail;
            for (var r = null; n !== null; )
                n.alternate !== null && (r = n),
                n = n.sibling;
            r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null
        }
}
function le(e) {
    var t = e.alternate !== null && e.alternate.child === e.child
      , n = 0
      , r = 0;
    if (t)
        for (var i = e.child; i !== null; )
            n |= i.lanes | i.childLanes,
            r |= i.subtreeFlags & 14680064,
            r |= i.flags & 14680064,
            i.return = e,
            i = i.sibling;
    else
        for (i = e.child; i !== null; )
            n |= i.lanes | i.childLanes,
            r |= i.subtreeFlags,
            r |= i.flags,
            i.return = e,
            i = i.sibling;
    return e.subtreeFlags |= r,
    e.childLanes = n,
    t
}
function S1(e, t, n) {
    var r = t.pendingProps;
    switch (Nl(t),
    t.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
        return le(t),
        null;
    case 1:
        return ve(t.type) && di(),
        le(t),
        null;
    case 3:
        return r = t.stateNode,
        xn(),
        B(ye),
        B(ue),
        Hl(),
        r.pendingContext && (r.context = r.pendingContext,
        r.pendingContext = null),
        (e === null || e.child === null) && (Mr(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024,
        je !== null && (dl(je),
        je = null))),
        rl(e, t),
        le(t),
        null;
    case 5:
        Bl(t);
        var i = Dt(mr.current);
        if (n = t.type,
        e !== null && t.stateNode != null)
            Fc(e, t, n, r, i),
            e.ref !== t.ref && (t.flags |= 512,
            t.flags |= 2097152);
        else {
            if (!r) {
                if (t.stateNode === null)
                    throw Error(w(166));
                return le(t),
                null
            }
            if (e = Dt(Ye.current),
            Mr(t)) {
                r = t.stateNode,
                n = t.type;
                var o = t.memoizedProps;
                switch (r[Xe] = t,
                r[pr] = o,
                e = (t.mode & 1) !== 0,
                n) {
                case "dialog":
                    U("cancel", r),
                    U("close", r);
                    break;
                case "iframe":
                case "object":
                case "embed":
                    U("load", r);
                    break;
                case "video":
                case "audio":
                    for (i = 0; i < $n.length; i++)
                        U($n[i], r);
                    break;
                case "source":
                    U("error", r);
                    break;
                case "img":
                case "image":
                case "link":
                    U("error", r),
                    U("load", r);
                    break;
                case "details":
                    U("toggle", r);
                    break;
                case "input":
                    Fa(r, o),
                    U("invalid", r);
                    break;
                case "select":
                    r._wrapperState = {
                        wasMultiple: !!o.multiple
                    },
                    U("invalid", r);
                    break;
                case "textarea":
                    Ca(r, o),
                    U("invalid", r)
                }
                _o(n, o),
                i = null;
                for (var l in o)
                    if (o.hasOwnProperty(l)) {
                        var a = o[l];
                        l === "children" ? typeof a == "string" ? r.textContent !== a && (o.suppressHydrationWarning !== !0 && zr(r.textContent, a, e),
                        i = ["children", a]) : typeof a == "number" && r.textContent !== "" + a && (o.suppressHydrationWarning !== !0 && zr(r.textContent, a, e),
                        i = ["children", "" + a]) : nr.hasOwnProperty(l) && a != null && l === "onScroll" && U("scroll", r)
                    }
                switch (n) {
                case "input":
                    Ar(r),
                    _a(r, o, !0);
                    break;
                case "textarea":
                    Ar(r),
                    Ta(r);
                    break;
                case "select":
                case "option":
                    break;
                default:
                    typeof o.onClick == "function" && (r.onclick = ci)
                }
                r = i,
                t.updateQueue = r,
                r !== null && (t.flags |= 4)
            } else {
                l = i.nodeType === 9 ? i : i.ownerDocument,
                e === "http://www.w3.org/1999/xhtml" && (e = ru(n)),
                e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = l.createElement("div"),
                e.innerHTML = "<script><\/script>",
                e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = l.createElement(n, {
                    is: r.is
                }) : (e = l.createElement(n),
                n === "select" && (l = e,
                r.multiple ? l.multiple = !0 : r.size && (l.size = r.size))) : e = l.createElementNS(e, n),
                e[Xe] = t,
                e[pr] = r,
                Ac(e, t, !1, !1),
                t.stateNode = e;
                e: {
                    switch (l = Co(n, r),
                    n) {
                    case "dialog":
                        U("cancel", e),
                        U("close", e),
                        i = r;
                        break;
                    case "iframe":
                    case "object":
                    case "embed":
                        U("load", e),
                        i = r;
                        break;
                    case "video":
                    case "audio":
                        for (i = 0; i < $n.length; i++)
                            U($n[i], e);
                        i = r;
                        break;
                    case "source":
                        U("error", e),
                        i = r;
                        break;
                    case "img":
                    case "image":
                    case "link":
                        U("error", e),
                        U("load", e),
                        i = r;
                        break;
                    case "details":
                        U("toggle", e),
                        i = r;
                        break;
                    case "input":
                        Fa(e, r),
                        i = Po(e, r),
                        U("invalid", e);
                        break;
                    case "option":
                        i = r;
                        break;
                    case "select":
                        e._wrapperState = {
                            wasMultiple: !!r.multiple
                        },
                        i = b({}, r, {
                            value: void 0
                        }),
                        U("invalid", e);
                        break;
                    case "textarea":
                        Ca(e, r),
                        i = Ao(e, r),
                        U("invalid", e);
                        break;
                    default:
                        i = r
                    }
                    _o(n, i),
                    a = i;
                    for (o in a)
                        if (a.hasOwnProperty(o)) {
                            var s = a[o];
                            o === "style" ? lu(e, s) : o === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0,
                            s != null && iu(e, s)) : o === "children" ? typeof s == "string" ? (n !== "textarea" || s !== "") && rr(e, s) : typeof s == "number" && rr(e, "" + s) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (nr.hasOwnProperty(o) ? s != null && o === "onScroll" && U("scroll", e) : s != null && vl(e, o, s, l))
                        }
                    switch (n) {
                    case "input":
                        Ar(e),
                        _a(e, r, !1);
                        break;
                    case "textarea":
                        Ar(e),
                        Ta(e);
                        break;
                    case "option":
                        r.value != null && e.setAttribute("value", "" + Ot(r.value));
                        break;
                    case "select":
                        e.multiple = !!r.multiple,
                        o = r.value,
                        o != null ? fn(e, !!r.multiple, o, !1) : r.defaultValue != null && fn(e, !!r.multiple, r.defaultValue, !0);
                        break;
                    default:
                        typeof i.onClick == "function" && (e.onclick = ci)
                    }
                    switch (n) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                        r = !!r.autoFocus;
                        break e;
                    case "img":
                        r = !0;
                        break e;
                    default:
                        r = !1
                    }
                }
                r && (t.flags |= 4)
            }
            t.ref !== null && (t.flags |= 512,
            t.flags |= 2097152)
        }
        return le(t),
        null;
    case 6:
        if (e && t.stateNode != null)
            _c(e, t, e.memoizedProps, r);
        else {
            if (typeof r != "string" && t.stateNode === null)
                throw Error(w(166));
            if (n = Dt(mr.current),
            Dt(Ye.current),
            Mr(t)) {
                if (r = t.stateNode,
                n = t.memoizedProps,
                r[Xe] = t,
                (o = r.nodeValue !== n) && (e = xe,
                e !== null))
                    switch (e.tag) {
                    case 3:
                        zr(r.nodeValue, n, (e.mode & 1) !== 0);
                        break;
                    case 5:
                        e.memoizedProps.suppressHydrationWarning !== !0 && zr(r.nodeValue, n, (e.mode & 1) !== 0)
                    }
                o && (t.flags |= 4)
            } else
                r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r),
                r[Xe] = t,
                t.stateNode = r
        }
        return le(t),
        null;
    case 13:
        if (B(W),
        r = t.memoizedState,
        e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            if (V && Ge !== null && t.mode & 1 && !(t.flags & 128))
                Xu(),
                kn(),
                t.flags |= 98560,
                o = !1;
            else if (o = Mr(t),
            r !== null && r.dehydrated !== null) {
                if (e === null) {
                    if (!o)
                        throw Error(w(318));
                    if (o = t.memoizedState,
                    o = o !== null ? o.dehydrated : null,
                    !o)
                        throw Error(w(317));
                    o[Xe] = t
                } else
                    kn(),
                    !(t.flags & 128) && (t.memoizedState = null),
                    t.flags |= 4;
                le(t),
                o = !1
            } else
                je !== null && (dl(je),
                je = null),
                o = !0;
            if (!o)
                return t.flags & 65536 ? t : null
        }
        return t.flags & 128 ? (t.lanes = n,
        t) : (r = r !== null,
        r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192,
        t.mode & 1 && (e === null || W.current & 1 ? J === 0 && (J = 3) : ea())),
        t.updateQueue !== null && (t.flags |= 4),
        le(t),
        null);
    case 4:
        return xn(),
        rl(e, t),
        e === null && cr(t.stateNode.containerInfo),
        le(t),
        null;
    case 10:
        return Ml(t.type._context),
        le(t),
        null;
    case 17:
        return ve(t.type) && di(),
        le(t),
        null;
    case 19:
        if (B(W),
        o = t.memoizedState,
        o === null)
            return le(t),
            null;
        if (r = (t.flags & 128) !== 0,
        l = o.rendering,
        l === null)
            if (r)
                Un(o, !1);
            else {
                if (J !== 0 || e !== null && e.flags & 128)
                    for (e = t.child; e !== null; ) {
                        if (l = vi(e),
                        l !== null) {
                            for (t.flags |= 128,
                            Un(o, !1),
                            r = l.updateQueue,
                            r !== null && (t.updateQueue = r,
                            t.flags |= 4),
                            t.subtreeFlags = 0,
                            r = n,
                            n = t.child; n !== null; )
                                o = n,
                                e = r,
                                o.flags &= 14680066,
                                l = o.alternate,
                                l === null ? (o.childLanes = 0,
                                o.lanes = e,
                                o.child = null,
                                o.subtreeFlags = 0,
                                o.memoizedProps = null,
                                o.memoizedState = null,
                                o.updateQueue = null,
                                o.dependencies = null,
                                o.stateNode = null) : (o.childLanes = l.childLanes,
                                o.lanes = l.lanes,
                                o.child = l.child,
                                o.subtreeFlags = 0,
                                o.deletions = null,
                                o.memoizedProps = l.memoizedProps,
                                o.memoizedState = l.memoizedState,
                                o.updateQueue = l.updateQueue,
                                o.type = l.type,
                                e = l.dependencies,
                                o.dependencies = e === null ? null : {
                                    lanes: e.lanes,
                                    firstContext: e.firstContext
                                }),
                                n = n.sibling;
                            return D(W, W.current & 1 | 2),
                            t.child
                        }
                        e = e.sibling
                    }
                o.tail !== null && Q() > Pn && (t.flags |= 128,
                r = !0,
                Un(o, !1),
                t.lanes = 4194304)
            }
        else {
            if (!r)
                if (e = vi(l),
                e !== null) {
                    if (t.flags |= 128,
                    r = !0,
                    n = e.updateQueue,
                    n !== null && (t.updateQueue = n,
                    t.flags |= 4),
                    Un(o, !0),
                    o.tail === null && o.tailMode === "hidden" && !l.alternate && !V)
                        return le(t),
                        null
                } else
                    2 * Q() - o.renderingStartTime > Pn && n !== 1073741824 && (t.flags |= 128,
                    r = !0,
                    Un(o, !1),
                    t.lanes = 4194304);
            o.isBackwards ? (l.sibling = t.child,
            t.child = l) : (n = o.last,
            n !== null ? n.sibling = l : t.child = l,
            o.last = l)
        }
        return o.tail !== null ? (t = o.tail,
        o.rendering = t,
        o.tail = t.sibling,
        o.renderingStartTime = Q(),
        t.sibling = null,
        n = W.current,
        D(W, r ? n & 1 | 2 : n & 1),
        t) : (le(t),
        null);
    case 22:
    case 23:
        return ql(),
        r = t.memoizedState !== null,
        e !== null && e.memoizedState !== null !== r && (t.flags |= 8192),
        r && t.mode & 1 ? ke & 1073741824 && (le(t),
        t.subtreeFlags & 6 && (t.flags |= 8192)) : le(t),
        null;
    case 24:
        return null;
    case 25:
        return null
    }
    throw Error(w(156, t.tag))
}
function P1(e, t) {
    switch (Nl(t),
    t.tag) {
    case 1:
        return ve(t.type) && di(),
        e = t.flags,
        e & 65536 ? (t.flags = e & -65537 | 128,
        t) : null;
    case 3:
        return xn(),
        B(ye),
        B(ue),
        Hl(),
        e = t.flags,
        e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128,
        t) : null;
    case 5:
        return Bl(t),
        null;
    case 13:
        if (B(W),
        e = t.memoizedState,
        e !== null && e.dehydrated !== null) {
            if (t.alternate === null)
                throw Error(w(340));
            kn()
        }
        return e = t.flags,
        e & 65536 ? (t.flags = e & -65537 | 128,
        t) : null;
    case 19:
        return B(W),
        null;
    case 4:
        return xn(),
        null;
    case 10:
        return Ml(t.type._context),
        null;
    case 22:
    case 23:
        return ql(),
        null;
    case 24:
        return null;
    default:
        return null
    }
}
var Ur = !1
  , se = !1
  , I1 = typeof WeakSet == "function" ? WeakSet : Set
  , I = null;
function dn(e, t) {
    var n = e.ref;
    if (n !== null)
        if (typeof n == "function")
            try {
                n(null)
            } catch (r) {
                X(e, t, r)
            }
        else
            n.current = null
}
function il(e, t, n) {
    try {
        n()
    } catch (r) {
        X(e, t, r)
    }
}
var ks = !1;
function O1(e, t) {
    if (Bo = ai,
    e = Lu(),
    Cl(e)) {
        if ("selectionStart"in e)
            var n = {
                start: e.selectionStart,
                end: e.selectionEnd
            };
        else
            e: {
                n = (n = e.ownerDocument) && n.defaultView || window;
                var r = n.getSelection && n.getSelection();
                if (r && r.rangeCount !== 0) {
                    n = r.anchorNode;
                    var i = r.anchorOffset
                      , o = r.focusNode;
                    r = r.focusOffset;
                    try {
                        n.nodeType,
                        o.nodeType
                    } catch {
                        n = null;
                        break e
                    }
                    var l = 0
                      , a = -1
                      , s = -1
                      , p = 0
                      , g = 0
                      , h = e
                      , m = null;
                    t: for (; ; ) {
                        for (var v; h !== n || i !== 0 && h.nodeType !== 3 || (a = l + i),
                        h !== o || r !== 0 && h.nodeType !== 3 || (s = l + r),
                        h.nodeType === 3 && (l += h.nodeValue.length),
                        (v = h.firstChild) !== null; )
                            m = h,
                            h = v;
                        for (; ; ) {
                            if (h === e)
                                break t;
                            if (m === n && ++p === i && (a = l),
                            m === o && ++g === r && (s = l),
                            (v = h.nextSibling) !== null)
                                break;
                            h = m,
                            m = h.parentNode
                        }
                        h = v
                    }
                    n = a === -1 || s === -1 ? null : {
                        start: a,
                        end: s
                    }
                } else
                    n = null
            }
        n = n || {
            start: 0,
            end: 0
        }
    } else
        n = null;
    for (Ho = {
        focusedElem: e,
        selectionRange: n
    },
    ai = !1,
    I = t; I !== null; )
        if (t = I,
        e = t.child,
        (t.subtreeFlags & 1028) !== 0 && e !== null)
            e.return = t,
            I = e;
        else
            for (; I !== null; ) {
                t = I;
                try {
                    var E = t.alternate;
                    if (t.flags & 1024)
                        switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            break;
                        case 1:
                            if (E !== null) {
                                var k = E.memoizedProps
                                  , L = E.memoizedState
                                  , d = t.stateNode
                                  , c = d.getSnapshotBeforeUpdate(t.elementType === t.type ? k : Me(t.type, k), L);
                                d.__reactInternalSnapshotBeforeUpdate = c
                            }
                            break;
                        case 3:
                            var f = t.stateNode.containerInfo;
                            f.nodeType === 1 ? f.textContent = "" : f.nodeType === 9 && f.documentElement && f.removeChild(f.documentElement);
                            break;
                        case 5:
                        case 6:
                        case 4:
                        case 17:
                            break;
                        default:
                            throw Error(w(163))
                        }
                } catch (y) {
                    X(t, t.return, y)
                }
                if (e = t.sibling,
                e !== null) {
                    e.return = t.return,
                    I = e;
                    break
                }
                I = t.return
            }
    return E = ks,
    ks = !1,
    E
}
function Jn(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null,
    r !== null) {
        var i = r = r.next;
        do {
            if ((i.tag & e) === e) {
                var o = i.destroy;
                i.destroy = void 0,
                o !== void 0 && il(t, n, o)
            }
            i = i.next
        } while (i !== r)
    }
}
function Ri(e, t) {
    if (t = t.updateQueue,
    t = t !== null ? t.lastEffect : null,
    t !== null) {
        var n = t = t.next;
        do {
            if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r()
            }
            n = n.next
        } while (n !== t)
    }
}
function ol(e) {
    var t = e.ref;
    if (t !== null) {
        var n = e.stateNode;
        switch (e.tag) {
        case 5:
            e = n;
            break;
        default:
            e = n
        }
        typeof t == "function" ? t(e) : t.current = e
    }
}
function Cc(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null,
    Cc(t)),
    e.child = null,
    e.deletions = null,
    e.sibling = null,
    e.tag === 5 && (t = e.stateNode,
    t !== null && (delete t[Xe],
    delete t[pr],
    delete t[$o],
    delete t[u1],
    delete t[c1])),
    e.stateNode = null,
    e.return = null,
    e.dependencies = null,
    e.memoizedProps = null,
    e.memoizedState = null,
    e.pendingProps = null,
    e.stateNode = null,
    e.updateQueue = null
}
function Tc(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4
}
function Gs(e) {
    e: for (; ; ) {
        for (; e.sibling === null; ) {
            if (e.return === null || Tc(e.return))
                return null;
            e = e.return
        }
        for (e.sibling.return = e.return,
        e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
            if (e.flags & 2 || e.child === null || e.tag === 4)
                continue e;
            e.child.return = e,
            e = e.child
        }
        if (!(e.flags & 2))
            return e.stateNode
    }
}
function ll(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        e = e.stateNode,
        t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode,
        t.insertBefore(e, n)) : (t = n,
        t.appendChild(e)),
        n = n._reactRootContainer,
        n != null || t.onclick !== null || (t.onclick = ci));
    else if (r !== 4 && (e = e.child,
    e !== null))
        for (ll(e, t, n),
        e = e.sibling; e !== null; )
            ll(e, t, n),
            e = e.sibling
}
function al(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        e = e.stateNode,
        t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child,
    e !== null))
        for (al(e, t, n),
        e = e.sibling; e !== null; )
            al(e, t, n),
            e = e.sibling
}
var te = null
  , De = !1;
function pt(e, t, n) {
    for (n = n.child; n !== null; )
        Nc(e, t, n),
        n = n.sibling
}
function Nc(e, t, n) {
    if (Qe && typeof Qe.onCommitFiberUnmount == "function")
        try {
            Qe.onCommitFiberUnmount(Oi, n)
        } catch {}
    switch (n.tag) {
    case 5:
        se || dn(n, t);
    case 6:
        var r = te
          , i = De;
        te = null,
        pt(e, t, n),
        te = r,
        De = i,
        te !== null && (De ? (e = te,
        n = n.stateNode,
        e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : te.removeChild(n.stateNode));
        break;
    case 18:
        te !== null && (De ? (e = te,
        n = n.stateNode,
        e.nodeType === 8 ? lo(e.parentNode, n) : e.nodeType === 1 && lo(e, n),
        ar(e)) : lo(te, n.stateNode));
        break;
    case 4:
        r = te,
        i = De,
        te = n.stateNode.containerInfo,
        De = !0,
        pt(e, t, n),
        te = r,
        De = i;
        break;
    case 0:
    case 11:
    case 14:
    case 15:
        if (!se && (r = n.updateQueue,
        r !== null && (r = r.lastEffect,
        r !== null))) {
            i = r = r.next;
            do {
                var o = i
                  , l = o.destroy;
                o = o.tag,
                l !== void 0 && (o & 2 || o & 4) && il(n, t, l),
                i = i.next
            } while (i !== r)
        }
        pt(e, t, n);
        break;
    case 1:
        if (!se && (dn(n, t),
        r = n.stateNode,
        typeof r.componentWillUnmount == "function"))
            try {
                r.props = n.memoizedProps,
                r.state = n.memoizedState,
                r.componentWillUnmount()
            } catch (a) {
                X(n, t, a)
            }
        pt(e, t, n);
        break;
    case 21:
        pt(e, t, n);
        break;
    case 22:
        n.mode & 1 ? (se = (r = se) || n.memoizedState !== null,
        pt(e, t, n),
        se = r) : pt(e, t, n);
        break;
    default:
        pt(e, t, n)
    }
}
function xs(e) {
    var t = e.updateQueue;
    if (t !== null) {
        e.updateQueue = null;
        var n = e.stateNode;
        n === null && (n = e.stateNode = new I1),
        t.forEach(function(r) {
            var i = z1.bind(null, e, r);
            n.has(r) || (n.add(r),
            r.then(i, i))
        })
    }
}
function ze(e, t) {
    var n = t.deletions;
    if (n !== null)
        for (var r = 0; r < n.length; r++) {
            var i = n[r];
            try {
                var o = e
                  , l = t
                  , a = l;
                e: for (; a !== null; ) {
                    switch (a.tag) {
                    case 5:
                        te = a.stateNode,
                        De = !1;
                        break e;
                    case 3:
                        te = a.stateNode.containerInfo,
                        De = !0;
                        break e;
                    case 4:
                        te = a.stateNode.containerInfo,
                        De = !0;
                        break e
                    }
                    a = a.return
                }
                if (te === null)
                    throw Error(w(160));
                Nc(o, l, i),
                te = null,
                De = !1;
                var s = i.alternate;
                s !== null && (s.return = null),
                i.return = null
            } catch (p) {
                X(i, t, p)
            }
        }
    if (t.subtreeFlags & 12854)
        for (t = t.child; t !== null; )
            Lc(t, e),
            t = t.sibling
}
function Lc(e, t) {
    var n = e.alternate
      , r = e.flags;
    switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
        if (ze(t, e),
        $e(e),
        r & 4) {
            try {
                Jn(3, e, e.return),
                Ri(3, e)
            } catch (k) {
                X(e, e.return, k)
            }
            try {
                Jn(5, e, e.return)
            } catch (k) {
                X(e, e.return, k)
            }
        }
        break;
    case 1:
        ze(t, e),
        $e(e),
        r & 512 && n !== null && dn(n, n.return);
        break;
    case 5:
        if (ze(t, e),
        $e(e),
        r & 512 && n !== null && dn(n, n.return),
        e.flags & 32) {
            var i = e.stateNode;
            try {
                rr(i, "")
            } catch (k) {
                X(e, e.return, k)
            }
        }
        if (r & 4 && (i = e.stateNode,
        i != null)) {
            var o = e.memoizedProps
              , l = n !== null ? n.memoizedProps : o
              , a = e.type
              , s = e.updateQueue;
            if (e.updateQueue = null,
            s !== null)
                try {
                    a === "input" && o.type === "radio" && o.name != null && tu(i, o),
                    Co(a, l);
                    var p = Co(a, o);
                    for (l = 0; l < s.length; l += 2) {
                        var g = s[l]
                          , h = s[l + 1];
                        g === "style" ? lu(i, h) : g === "dangerouslySetInnerHTML" ? iu(i, h) : g === "children" ? rr(i, h) : vl(i, g, h, p)
                    }
                    switch (a) {
                    case "input":
                        Io(i, o);
                        break;
                    case "textarea":
                        nu(i, o);
                        break;
                    case "select":
                        var m = i._wrapperState.wasMultiple;
                        i._wrapperState.wasMultiple = !!o.multiple;
                        var v = o.value;
                        v != null ? fn(i, !!o.multiple, v, !1) : m !== !!o.multiple && (o.defaultValue != null ? fn(i, !!o.multiple, o.defaultValue, !0) : fn(i, !!o.multiple, o.multiple ? [] : "", !1))
                    }
                    i[pr] = o
                } catch (k) {
                    X(e, e.return, k)
                }
        }
        break;
    case 6:
        if (ze(t, e),
        $e(e),
        r & 4) {
            if (e.stateNode === null)
                throw Error(w(162));
            i = e.stateNode,
            o = e.memoizedProps;
            try {
                i.nodeValue = o
            } catch (k) {
                X(e, e.return, k)
            }
        }
        break;
    case 3:
        if (ze(t, e),
        $e(e),
        r & 4 && n !== null && n.memoizedState.isDehydrated)
            try {
                ar(t.containerInfo)
            } catch (k) {
                X(e, e.return, k)
            }
        break;
    case 4:
        ze(t, e),
        $e(e);
        break;
    case 13:
        ze(t, e),
        $e(e),
        i = e.child,
        i.flags & 8192 && (o = i.memoizedState !== null,
        i.stateNode.isHidden = o,
        !o || i.alternate !== null && i.alternate.memoizedState !== null || (Zl = Q())),
        r & 4 && xs(e);
        break;
    case 22:
        if (g = n !== null && n.memoizedState !== null,
        e.mode & 1 ? (se = (p = se) || g,
        ze(t, e),
        se = p) : ze(t, e),
        $e(e),
        r & 8192) {
            if (p = e.memoizedState !== null,
            (e.stateNode.isHidden = p) && !g && e.mode & 1)
                for (I = e,
                g = e.child; g !== null; ) {
                    for (h = I = g; I !== null; ) {
                        switch (m = I,
                        v = m.child,
                        m.tag) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                            Jn(4, m, m.return);
                            break;
                        case 1:
                            dn(m, m.return);
                            var E = m.stateNode;
                            if (typeof E.componentWillUnmount == "function") {
                                r = m,
                                n = m.return;
                                try {
                                    t = r,
                                    E.props = t.memoizedProps,
                                    E.state = t.memoizedState,
                                    E.componentWillUnmount()
                                } catch (k) {
                                    X(r, n, k)
                                }
                            }
                            break;
                        case 5:
                            dn(m, m.return);
                            break;
                        case 22:
                            if (m.memoizedState !== null) {
                                Ps(h);
                                continue
                            }
                        }
                        v !== null ? (v.return = m,
                        I = v) : Ps(h)
                    }
                    g = g.sibling
                }
            e: for (g = null,
            h = e; ; ) {
                if (h.tag === 5) {
                    if (g === null) {
                        g = h;
                        try {
                            i = h.stateNode,
                            p ? (o = i.style,
                            typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (a = h.stateNode,
                            s = h.memoizedProps.style,
                            l = s != null && s.hasOwnProperty("display") ? s.display : null,
                            a.style.display = ou("display", l))
                        } catch (k) {
                            X(e, e.return, k)
                        }
                    }
                } else if (h.tag === 6) {
                    if (g === null)
                        try {
                            h.stateNode.nodeValue = p ? "" : h.memoizedProps
                        } catch (k) {
                            X(e, e.return, k)
                        }
                } else if ((h.tag !== 22 && h.tag !== 23 || h.memoizedState === null || h === e) && h.child !== null) {
                    h.child.return = h,
                    h = h.child;
                    continue
                }
                if (h === e)
                    break e;
                for (; h.sibling === null; ) {
                    if (h.return === null || h.return === e)
                        break e;
                    g === h && (g = null),
                    h = h.return
                }
                g === h && (g = null),
                h.sibling.return = h.return,
                h = h.sibling
            }
        }
        break;
    case 19:
        ze(t, e),
        $e(e),
        r & 4 && xs(e);
        break;
    case 21:
        break;
    default:
        ze(t, e),
        $e(e)
    }
}
function $e(e) {
    var t = e.flags;
    if (t & 2) {
        try {
            e: {
                for (var n = e.return; n !== null; ) {
                    if (Tc(n)) {
                        var r = n;
                        break e
                    }
                    n = n.return
                }
                throw Error(w(160))
            }
            switch (r.tag) {
            case 5:
                var i = r.stateNode;
                r.flags & 32 && (rr(i, ""),
                r.flags &= -33);
                var o = Gs(e);
                al(e, o, i);
                break;
            case 3:
            case 4:
                var l = r.stateNode.containerInfo
                  , a = Gs(e);
                ll(e, a, l);
                break;
            default:
                throw Error(w(161))
            }
        } catch (s) {
            X(e, e.return, s)
        }
        e.flags &= -3
    }
    t & 4096 && (e.flags &= -4097)
}
function A1(e, t, n) {
    I = e,
    Rc(e)
}
function Rc(e, t, n) {
    for (var r = (e.mode & 1) !== 0; I !== null; ) {
        var i = I
          , o = i.child;
        if (i.tag === 22 && r) {
            var l = i.memoizedState !== null || Ur;
            if (!l) {
                var a = i.alternate
                  , s = a !== null && a.memoizedState !== null || se;
                a = Ur;
                var p = se;
                if (Ur = l,
                (se = s) && !p)
                    for (I = i; I !== null; )
                        l = I,
                        s = l.child,
                        l.tag === 22 && l.memoizedState !== null ? Is(i) : s !== null ? (s.return = l,
                        I = s) : Is(i);
                for (; o !== null; )
                    I = o,
                    Rc(o),
                    o = o.sibling;
                I = i,
                Ur = a,
                se = p
            }
            Ss(e)
        } else
            i.subtreeFlags & 8772 && o !== null ? (o.return = i,
            I = o) : Ss(e)
    }
}
function Ss(e) {
    for (; I !== null; ) {
        var t = I;
        if (t.flags & 8772) {
            var n = t.alternate;
            try {
                if (t.flags & 8772)
                    switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                        se || Ri(5, t);
                        break;
                    case 1:
                        var r = t.stateNode;
                        if (t.flags & 4 && !se)
                            if (n === null)
                                r.componentDidMount();
                            else {
                                var i = t.elementType === t.type ? n.memoizedProps : Me(t.type, n.memoizedProps);
                                r.componentDidUpdate(i, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                            }
                        var o = t.updateQueue;
                        o !== null && as(t, o, r);
                        break;
                    case 3:
                        var l = t.updateQueue;
                        if (l !== null) {
                            if (n = null,
                            t.child !== null)
                                switch (t.child.tag) {
                                case 5:
                                    n = t.child.stateNode;
                                    break;
                                case 1:
                                    n = t.child.stateNode
                                }
                            as(t, l, n)
                        }
                        break;
                    case 5:
                        var a = t.stateNode;
                        if (n === null && t.flags & 4) {
                            n = a;
                            var s = t.memoizedProps;
                            switch (t.type) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                s.autoFocus && n.focus();
                                break;
                            case "img":
                                s.src && (n.src = s.src)
                            }
                        }
                        break;
                    case 6:
                        break;
                    case 4:
                        break;
                    case 12:
                        break;
                    case 13:
                        if (t.memoizedState === null) {
                            var p = t.alternate;
                            if (p !== null) {
                                var g = p.memoizedState;
                                if (g !== null) {
                                    var h = g.dehydrated;
                                    h !== null && ar(h)
                                }
                            }
                        }
                        break;
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                        break;
                    default:
                        throw Error(w(163))
                    }
                se || t.flags & 512 && ol(t)
            } catch (m) {
                X(t, t.return, m)
            }
        }
        if (t === e) {
            I = null;
            break
        }
        if (n = t.sibling,
        n !== null) {
            n.return = t.return,
            I = n;
            break
        }
        I = t.return
    }
}
function Ps(e) {
    for (; I !== null; ) {
        var t = I;
        if (t === e) {
            I = null;
            break
        }
        var n = t.sibling;
        if (n !== null) {
            n.return = t.return,
            I = n;
            break
        }
        I = t.return
    }
}
function Is(e) {
    for (; I !== null; ) {
        var t = I;
        try {
            switch (t.tag) {
            case 0:
            case 11:
            case 15:
                var n = t.return;
                try {
                    Ri(4, t)
                } catch (s) {
                    X(t, n, s)
                }
                break;
            case 1:
                var r = t.stateNode;
                if (typeof r.componentDidMount == "function") {
                    var i = t.return;
                    try {
                        r.componentDidMount()
                    } catch (s) {
                        X(t, i, s)
                    }
                }
                var o = t.return;
                try {
                    ol(t)
                } catch (s) {
                    X(t, o, s)
                }
                break;
            case 5:
                var l = t.return;
                try {
                    ol(t)
                } catch (s) {
                    X(t, l, s)
                }
            }
        } catch (s) {
            X(t, t.return, s)
        }
        if (t === e) {
            I = null;
            break
        }
        var a = t.sibling;
        if (a !== null) {
            a.return = t.return,
            I = a;
            break
        }
        I = t.return
    }
}
var F1 = Math.ceil
  , ki = ct.ReactCurrentDispatcher
  , Yl = ct.ReactCurrentOwner
  , Te = ct.ReactCurrentBatchConfig
  , R = 0
  , ee = null
  , K = null
  , ne = 0
  , ke = 0
  , pn = _t(0)
  , J = 0
  , vr = null
  , Wt = 0
  , zi = 0
  , Kl = 0
  , qn = null
  , he = null
  , Zl = 0
  , Pn = 1 / 0
  , tt = null
  , Gi = !1
  , sl = null
  , St = null
  , Br = !1
  , vt = null
  , xi = 0
  , er = 0
  , ul = null
  , qr = -1
  , ei = 0;
function pe() {
    return R & 6 ? Q() : qr !== -1 ? qr : qr = Q()
}
function Pt(e) {
    return e.mode & 1 ? R & 2 && ne !== 0 ? ne & -ne : p1.transition !== null ? (ei === 0 && (ei = vu()),
    ei) : (e = z,
    e !== 0 || (e = window.event,
    e = e === void 0 ? 16 : Pu(e.type)),
    e) : 1
}
function Be(e, t, n, r) {
    if (50 < er)
        throw er = 0,
        ul = null,
        Error(w(185));
    Er(e, n, r),
    (!(R & 2) || e !== ee) && (e === ee && (!(R & 2) && (zi |= n),
    J === 4 && gt(e, ne)),
    we(e, r),
    n === 1 && R === 0 && !(t.mode & 1) && (Pn = Q() + 500,
    Ti && Ct()))
}
function we(e, t) {
    var n = e.callbackNode;
    pd(e, t);
    var r = li(e, e === ee ? ne : 0);
    if (r === 0)
        n !== null && Ra(n),
        e.callbackNode = null,
        e.callbackPriority = 0;
    else if (t = r & -r,
    e.callbackPriority !== t) {
        if (n != null && Ra(n),
        t === 1)
            e.tag === 0 ? d1(Os.bind(null, e)) : Wu(Os.bind(null, e)),
            a1(function() {
                !(R & 6) && Ct()
            }),
            n = null;
        else {
            switch (wu(r)) {
            case 1:
                n = xl;
                break;
            case 4:
                n = gu;
                break;
            case 16:
                n = oi;
                break;
            case 536870912:
                n = yu;
                break;
            default:
                n = oi
            }
            n = Vc(n, zc.bind(null, e))
        }
        e.callbackPriority = t,
        e.callbackNode = n
    }
}
function zc(e, t) {
    if (qr = -1,
    ei = 0,
    R & 6)
        throw Error(w(327));
    var n = e.callbackNode;
    if (vn() && e.callbackNode !== n)
        return null;
    var r = li(e, e === ee ? ne : 0);
    if (r === 0)
        return null;
    if (r & 30 || r & e.expiredLanes || t)
        t = Si(e, r);
    else {
        t = r;
        var i = R;
        R |= 2;
        var o = Dc();
        (ee !== e || ne !== t) && (tt = null,
        Pn = Q() + 500,
        jt(e, t));
        do
            try {
                T1();
                break
            } catch (a) {
                Mc(e, a)
            }
        while (!0);
        zl(),
        ki.current = o,
        R = i,
        K !== null ? t = 0 : (ee = null,
        ne = 0,
        t = J)
    }
    if (t !== 0) {
        if (t === 2 && (i = zo(e),
        i !== 0 && (r = i,
        t = cl(e, i))),
        t === 1)
            throw n = vr,
            jt(e, 0),
            gt(e, r),
            we(e, Q()),
            n;
        if (t === 6)
            gt(e, r);
        else {
            if (i = e.current.alternate,
            !(r & 30) && !_1(i) && (t = Si(e, r),
            t === 2 && (o = zo(e),
            o !== 0 && (r = o,
            t = cl(e, o))),
            t === 1))
                throw n = vr,
                jt(e, 0),
                gt(e, r),
                we(e, Q()),
                n;
            switch (e.finishedWork = i,
            e.finishedLanes = r,
            t) {
            case 0:
            case 1:
                throw Error(w(345));
            case 2:
                Rt(e, he, tt);
                break;
            case 3:
                if (gt(e, r),
                (r & 130023424) === r && (t = Zl + 500 - Q(),
                10 < t)) {
                    if (li(e, 0) !== 0)
                        break;
                    if (i = e.suspendedLanes,
                    (i & r) !== r) {
                        pe(),
                        e.pingedLanes |= e.suspendedLanes & i;
                        break
                    }
                    e.timeoutHandle = Wo(Rt.bind(null, e, he, tt), t);
                    break
                }
                Rt(e, he, tt);
                break;
            case 4:
                if (gt(e, r),
                (r & 4194240) === r)
                    break;
                for (t = e.eventTimes,
                i = -1; 0 < r; ) {
                    var l = 31 - Ue(r);
                    o = 1 << l,
                    l = t[l],
                    l > i && (i = l),
                    r &= ~o
                }
                if (r = i,
                r = Q() - r,
                r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * F1(r / 1960)) - r,
                10 < r) {
                    e.timeoutHandle = Wo(Rt.bind(null, e, he, tt), r);
                    break
                }
                Rt(e, he, tt);
                break;
            case 5:
                Rt(e, he, tt);
                break;
            default:
                throw Error(w(329))
            }
        }
    }
    return we(e, Q()),
    e.callbackNode === n ? zc.bind(null, e) : null
}
function cl(e, t) {
    var n = qn;
    return e.current.memoizedState.isDehydrated && (jt(e, t).flags |= 256),
    e = Si(e, t),
    e !== 2 && (t = he,
    he = n,
    t !== null && dl(t)),
    e
}
function dl(e) {
    he === null ? he = e : he.push.apply(he, e)
}
function _1(e) {
    for (var t = e; ; ) {
        if (t.flags & 16384) {
            var n = t.updateQueue;
            if (n !== null && (n = n.stores,
            n !== null))
                for (var r = 0; r < n.length; r++) {
                    var i = n[r]
                      , o = i.getSnapshot;
                    i = i.value;
                    try {
                        if (!He(o(), i))
                            return !1
                    } catch {
                        return !1
                    }
                }
        }
        if (n = t.child,
        t.subtreeFlags & 16384 && n !== null)
            n.return = t,
            t = n;
        else {
            if (t === e)
                break;
            for (; t.sibling === null; ) {
                if (t.return === null || t.return === e)
                    return !0;
                t = t.return
            }
            t.sibling.return = t.return,
            t = t.sibling
        }
    }
    return !0
}
function gt(e, t) {
    for (t &= ~Kl,
    t &= ~zi,
    e.suspendedLanes |= t,
    e.pingedLanes &= ~t,
    e = e.expirationTimes; 0 < t; ) {
        var n = 31 - Ue(t)
          , r = 1 << n;
        e[n] = -1,
        t &= ~r
    }
}
function Os(e) {
    if (R & 6)
        throw Error(w(327));
    vn();
    var t = li(e, 0);
    if (!(t & 1))
        return we(e, Q()),
        null;
    var n = Si(e, t);
    if (e.tag !== 0 && n === 2) {
        var r = zo(e);
        r !== 0 && (t = r,
        n = cl(e, r))
    }
    if (n === 1)
        throw n = vr,
        jt(e, 0),
        gt(e, t),
        we(e, Q()),
        n;
    if (n === 6)
        throw Error(w(345));
    return e.finishedWork = e.current.alternate,
    e.finishedLanes = t,
    Rt(e, he, tt),
    we(e, Q()),
    null
}
function Jl(e, t) {
    var n = R;
    R |= 1;
    try {
        return e(t)
    } finally {
        R = n,
        R === 0 && (Pn = Q() + 500,
        Ti && Ct())
    }
}
function $t(e) {
    vt !== null && vt.tag === 0 && !(R & 6) && vn();
    var t = R;
    R |= 1;
    var n = Te.transition
      , r = z;
    try {
        if (Te.transition = null,
        z = 1,
        e)
            return e()
    } finally {
        z = r,
        Te.transition = n,
        R = t,
        !(R & 6) && Ct()
    }
}
function ql() {
    ke = pn.current,
    B(pn)
}
function jt(e, t) {
    e.finishedWork = null,
    e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1,
    l1(n)),
    K !== null)
        for (n = K.return; n !== null; ) {
            var r = n;
            switch (Nl(r),
            r.tag) {
            case 1:
                r = r.type.childContextTypes,
                r != null && di();
                break;
            case 3:
                xn(),
                B(ye),
                B(ue),
                Hl();
                break;
            case 5:
                Bl(r);
                break;
            case 4:
                xn();
                break;
            case 13:
                B(W);
                break;
            case 19:
                B(W);
                break;
            case 10:
                Ml(r.type._context);
                break;
            case 22:
            case 23:
                ql()
            }
            n = n.return
        }
    if (ee = e,
    K = e = It(e.current, null),
    ne = ke = t,
    J = 0,
    vr = null,
    Kl = zi = Wt = 0,
    he = qn = null,
    Mt !== null) {
        for (t = 0; t < Mt.length; t++)
            if (n = Mt[t],
            r = n.interleaved,
            r !== null) {
                n.interleaved = null;
                var i = r.next
                  , o = n.pending;
                if (o !== null) {
                    var l = o.next;
                    o.next = i,
                    r.next = l
                }
                n.pending = r
            }
        Mt = null
    }
    return e
}
function Mc(e, t) {
    do {
        var n = K;
        try {
            if (zl(),
            Kr.current = Ei,
            wi) {
                for (var r = $.memoizedState; r !== null; ) {
                    var i = r.queue;
                    i !== null && (i.pending = null),
                    r = r.next
                }
                wi = !1
            }
            if (Vt = 0,
            q = Z = $ = null,
            Zn = !1,
            hr = 0,
            Yl.current = null,
            n === null || n.return === null) {
                J = 1,
                vr = t,
                K = null;
                break
            }
            e: {
                var o = e
                  , l = n.return
                  , a = n
                  , s = t;
                if (t = ne,
                a.flags |= 32768,
                s !== null && typeof s == "object" && typeof s.then == "function") {
                    var p = s
                      , g = a
                      , h = g.tag;
                    if (!(g.mode & 1) && (h === 0 || h === 11 || h === 15)) {
                        var m = g.alternate;
                        m ? (g.updateQueue = m.updateQueue,
                        g.memoizedState = m.memoizedState,
                        g.lanes = m.lanes) : (g.updateQueue = null,
                        g.memoizedState = null)
                    }
                    var v = ms(l);
                    if (v !== null) {
                        v.flags &= -257,
                        hs(v, l, a, o, t),
                        v.mode & 1 && fs(o, p, t),
                        t = v,
                        s = p;
                        var E = t.updateQueue;
                        if (E === null) {
                            var k = new Set;
                            k.add(s),
                            t.updateQueue = k
                        } else
                            E.add(s);
                        break e
                    } else {
                        if (!(t & 1)) {
                            fs(o, p, t),
                            ea();
                            break e
                        }
                        s = Error(w(426))
                    }
                } else if (V && a.mode & 1) {
                    var L = ms(l);
                    if (L !== null) {
                        !(L.flags & 65536) && (L.flags |= 256),
                        hs(L, l, a, o, t),
                        Ll(Sn(s, a));
                        break e
                    }
                }
                o = s = Sn(s, a),
                J !== 4 && (J = 2),
                qn === null ? qn = [o] : qn.push(o),
                o = l;
                do {
                    switch (o.tag) {
                    case 3:
                        o.flags |= 65536,
                        t &= -t,
                        o.lanes |= t;
                        var d = Ec(o, s, t);
                        ls(o, d);
                        break e;
                    case 1:
                        a = s;
                        var c = o.type
                          , f = o.stateNode;
                        if (!(o.flags & 128) && (typeof c.getDerivedStateFromError == "function" || f !== null && typeof f.componentDidCatch == "function" && (St === null || !St.has(f)))) {
                            o.flags |= 65536,
                            t &= -t,
                            o.lanes |= t;
                            var y = kc(o, a, t);
                            ls(o, y);
                            break e
                        }
                    }
                    o = o.return
                } while (o !== null)
            }
            Uc(n)
        } catch (x) {
            t = x,
            K === n && n !== null && (K = n = n.return);
            continue
        }
        break
    } while (!0)
}
function Dc() {
    var e = ki.current;
    return ki.current = Ei,
    e === null ? Ei : e
}
function ea() {
    (J === 0 || J === 3 || J === 2) && (J = 4),
    ee === null || !(Wt & 268435455) && !(zi & 268435455) || gt(ee, ne)
}
function Si(e, t) {
    var n = R;
    R |= 2;
    var r = Dc();
    (ee !== e || ne !== t) && (tt = null,
    jt(e, t));
    do
        try {
            C1();
            break
        } catch (i) {
            Mc(e, i)
        }
    while (!0);
    if (zl(),
    R = n,
    ki.current = r,
    K !== null)
        throw Error(w(261));
    return ee = null,
    ne = 0,
    J
}
function C1() {
    for (; K !== null; )
        jc(K)
}
function T1() {
    for (; K !== null && !rd(); )
        jc(K)
}
function jc(e) {
    var t = Hc(e.alternate, e, ke);
    e.memoizedProps = e.pendingProps,
    t === null ? Uc(e) : K = t,
    Yl.current = null
}
function Uc(e) {
    var t = e;
    do {
        var n = t.alternate;
        if (e = t.return,
        t.flags & 32768) {
            if (n = P1(n, t),
            n !== null) {
                n.flags &= 32767,
                K = n;
                return
            }
            if (e !== null)
                e.flags |= 32768,
                e.subtreeFlags = 0,
                e.deletions = null;
            else {
                J = 6,
                K = null;
                return
            }
        } else if (n = S1(n, t, ke),
        n !== null) {
            K = n;
            return
        }
        if (t = t.sibling,
        t !== null) {
            K = t;
            return
        }
        K = t = e
    } while (t !== null);
    J === 0 && (J = 5)
}
function Rt(e, t, n) {
    var r = z
      , i = Te.transition;
    try {
        Te.transition = null,
        z = 1,
        N1(e, t, n, r)
    } finally {
        Te.transition = i,
        z = r
    }
    return null
}
function N1(e, t, n, r) {
    do
        vn();
    while (vt !== null);
    if (R & 6)
        throw Error(w(327));
    n = e.finishedWork;
    var i = e.finishedLanes;
    if (n === null)
        return null;
    if (e.finishedWork = null,
    e.finishedLanes = 0,
    n === e.current)
        throw Error(w(177));
    e.callbackNode = null,
    e.callbackPriority = 0;
    var o = n.lanes | n.childLanes;
    if (fd(e, o),
    e === ee && (K = ee = null,
    ne = 0),
    !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Br || (Br = !0,
    Vc(oi, function() {
        return vn(),
        null
    })),
    o = (n.flags & 15990) !== 0,
    n.subtreeFlags & 15990 || o) {
        o = Te.transition,
        Te.transition = null;
        var l = z;
        z = 1;
        var a = R;
        R |= 4,
        Yl.current = null,
        O1(e, n),
        Lc(n, e),
        qd(Ho),
        ai = !!Bo,
        Ho = Bo = null,
        e.current = n,
        A1(n),
        id(),
        R = a,
        z = l,
        Te.transition = o
    } else
        e.current = n;
    if (Br && (Br = !1,
    vt = e,
    xi = i),
    o = e.pendingLanes,
    o === 0 && (St = null),
    ad(n.stateNode),
    we(e, Q()),
    t !== null)
        for (r = e.onRecoverableError,
        n = 0; n < t.length; n++)
            i = t[n],
            r(i.value, {
                componentStack: i.stack,
                digest: i.digest
            });
    if (Gi)
        throw Gi = !1,
        e = sl,
        sl = null,
        e;
    return xi & 1 && e.tag !== 0 && vn(),
    o = e.pendingLanes,
    o & 1 ? e === ul ? er++ : (er = 0,
    ul = e) : er = 0,
    Ct(),
    null
}
function vn() {
    if (vt !== null) {
        var e = wu(xi)
          , t = Te.transition
          , n = z;
        try {
            if (Te.transition = null,
            z = 16 > e ? 16 : e,
            vt === null)
                var r = !1;
            else {
                if (e = vt,
                vt = null,
                xi = 0,
                R & 6)
                    throw Error(w(331));
                var i = R;
                for (R |= 4,
                I = e.current; I !== null; ) {
                    var o = I
                      , l = o.child;
                    if (I.flags & 16) {
                        var a = o.deletions;
                        if (a !== null) {
                            for (var s = 0; s < a.length; s++) {
                                var p = a[s];
                                for (I = p; I !== null; ) {
                                    var g = I;
                                    switch (g.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        Jn(8, g, o)
                                    }
                                    var h = g.child;
                                    if (h !== null)
                                        h.return = g,
                                        I = h;
                                    else
                                        for (; I !== null; ) {
                                            g = I;
                                            var m = g.sibling
                                              , v = g.return;
                                            if (Cc(g),
                                            g === p) {
                                                I = null;
                                                break
                                            }
                                            if (m !== null) {
                                                m.return = v,
                                                I = m;
                                                break
                                            }
                                            I = v
                                        }
                                }
                            }
                            var E = o.alternate;
                            if (E !== null) {
                                var k = E.child;
                                if (k !== null) {
                                    E.child = null;
                                    do {
                                        var L = k.sibling;
                                        k.sibling = null,
                                        k = L
                                    } while (k !== null)
                                }
                            }
                            I = o
                        }
                    }
                    if (o.subtreeFlags & 2064 && l !== null)
                        l.return = o,
                        I = l;
                    else
                        e: for (; I !== null; ) {
                            if (o = I,
                            o.flags & 2048)
                                switch (o.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    Jn(9, o, o.return)
                                }
                            var d = o.sibling;
                            if (d !== null) {
                                d.return = o.return,
                                I = d;
                                break e
                            }
                            I = o.return
                        }
                }
                var c = e.current;
                for (I = c; I !== null; ) {
                    l = I;
                    var f = l.child;
                    if (l.subtreeFlags & 2064 && f !== null)
                        f.return = l,
                        I = f;
                    else
                        e: for (l = c; I !== null; ) {
                            if (a = I,
                            a.flags & 2048)
                                try {
                                    switch (a.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        Ri(9, a)
                                    }
                                } catch (x) {
                                    X(a, a.return, x)
                                }
                            if (a === l) {
                                I = null;
                                break e
                            }
                            var y = a.sibling;
                            if (y !== null) {
                                y.return = a.return,
                                I = y;
                                break e
                            }
                            I = a.return
                        }
                }
                if (R = i,
                Ct(),
                Qe && typeof Qe.onPostCommitFiberRoot == "function")
                    try {
                        Qe.onPostCommitFiberRoot(Oi, e)
                    } catch {}
                r = !0
            }
            return r
        } finally {
            z = n,
            Te.transition = t
        }
    }
    return !1
}
function As(e, t, n) {
    t = Sn(n, t),
    t = Ec(e, t, 1),
    e = xt(e, t, 1),
    t = pe(),
    e !== null && (Er(e, 1, t),
    we(e, t))
}
function X(e, t, n) {
    if (e.tag === 3)
        As(e, e, n);
    else
        for (; t !== null; ) {
            if (t.tag === 3) {
                As(t, e, n);
                break
            } else if (t.tag === 1) {
                var r = t.stateNode;
                if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (St === null || !St.has(r))) {
                    e = Sn(n, e),
                    e = kc(t, e, 1),
                    t = xt(t, e, 1),
                    e = pe(),
                    t !== null && (Er(t, 1, e),
                    we(t, e));
                    break
                }
            }
            t = t.return
        }
}
function L1(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t),
    t = pe(),
    e.pingedLanes |= e.suspendedLanes & n,
    ee === e && (ne & n) === n && (J === 4 || J === 3 && (ne & 130023424) === ne && 500 > Q() - Zl ? jt(e, 0) : Kl |= n),
    we(e, t)
}
function Bc(e, t) {
    t === 0 && (e.mode & 1 ? (t = Cr,
    Cr <<= 1,
    !(Cr & 130023424) && (Cr = 4194304)) : t = 1);
    var n = pe();
    e = st(e, t),
    e !== null && (Er(e, t, n),
    we(e, n))
}
function R1(e) {
    var t = e.memoizedState
      , n = 0;
    t !== null && (n = t.retryLane),
    Bc(e, n)
}
function z1(e, t) {
    var n = 0;
    switch (e.tag) {
    case 13:
        var r = e.stateNode
          , i = e.memoizedState;
        i !== null && (n = i.retryLane);
        break;
    case 19:
        r = e.stateNode;
        break;
    default:
        throw Error(w(314))
    }
    r !== null && r.delete(t),
    Bc(e, n)
}
var Hc;
Hc = function(e, t, n) {
    if (e !== null)
        if (e.memoizedProps !== t.pendingProps || ye.current)
            ge = !0;
        else {
            if (!(e.lanes & n) && !(t.flags & 128))
                return ge = !1,
                x1(e, t, n);
            ge = !!(e.flags & 131072)
        }
    else
        ge = !1,
        V && t.flags & 1048576 && $u(t, mi, t.index);
    switch (t.lanes = 0,
    t.tag) {
    case 2:
        var r = t.type;
        Jr(e, t),
        e = t.pendingProps;
        var i = En(t, ue.current);
        yn(t, n),
        i = Wl(null, t, r, e, i, n);
        var o = $l();
        return t.flags |= 1,
        typeof i == "object" && i !== null && typeof i.render == "function" && i.$$typeof === void 0 ? (t.tag = 1,
        t.memoizedState = null,
        t.updateQueue = null,
        ve(r) ? (o = !0,
        pi(t)) : o = !1,
        t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null,
        jl(t),
        i.updater = Ni,
        t.stateNode = i,
        i._reactInternals = t,
        Zo(t, r, e, n),
        t = el(null, t, r, !0, o, n)) : (t.tag = 0,
        V && o && Tl(t),
        de(null, t, i, n),
        t = t.child),
        t;
    case 16:
        r = t.elementType;
        e: {
            switch (Jr(e, t),
            e = t.pendingProps,
            i = r._init,
            r = i(r._payload),
            t.type = r,
            i = t.tag = D1(r),
            e = Me(r, e),
            i) {
            case 0:
                t = qo(null, t, r, e, n);
                break e;
            case 1:
                t = vs(null, t, r, e, n);
                break e;
            case 11:
                t = gs(null, t, r, e, n);
                break e;
            case 14:
                t = ys(null, t, r, Me(r.type, e), n);
                break e
            }
            throw Error(w(306, r, ""))
        }
        return t;
    case 0:
        return r = t.type,
        i = t.pendingProps,
        i = t.elementType === r ? i : Me(r, i),
        qo(e, t, r, i, n);
    case 1:
        return r = t.type,
        i = t.pendingProps,
        i = t.elementType === r ? i : Me(r, i),
        vs(e, t, r, i, n);
    case 3:
        e: {
            if (Pc(t),
            e === null)
                throw Error(w(387));
            r = t.pendingProps,
            o = t.memoizedState,
            i = o.element,
            Yu(e, t),
            yi(t, r, null, n);
            var l = t.memoizedState;
            if (r = l.element,
            o.isDehydrated)
                if (o = {
                    element: r,
                    isDehydrated: !1,
                    cache: l.cache,
                    pendingSuspenseBoundaries: l.pendingSuspenseBoundaries,
                    transitions: l.transitions
                },
                t.updateQueue.baseState = o,
                t.memoizedState = o,
                t.flags & 256) {
                    i = Sn(Error(w(423)), t),
                    t = ws(e, t, r, n, i);
                    break e
                } else if (r !== i) {
                    i = Sn(Error(w(424)), t),
                    t = ws(e, t, r, n, i);
                    break e
                } else
                    for (Ge = Gt(t.stateNode.containerInfo.firstChild),
                    xe = t,
                    V = !0,
                    je = null,
                    n = qu(t, null, r, n),
                    t.child = n; n; )
                        n.flags = n.flags & -3 | 4096,
                        n = n.sibling;
            else {
                if (kn(),
                r === i) {
                    t = ut(e, t, n);
                    break e
                }
                de(e, t, r, n)
            }
            t = t.child
        }
        return t;
    case 5:
        return ec(t),
        e === null && Qo(t),
        r = t.type,
        i = t.pendingProps,
        o = e !== null ? e.memoizedProps : null,
        l = i.children,
        Vo(r, i) ? l = null : o !== null && Vo(r, o) && (t.flags |= 32),
        Sc(e, t),
        de(e, t, l, n),
        t.child;
    case 6:
        return e === null && Qo(t),
        null;
    case 13:
        return Ic(e, t, n);
    case 4:
        return Ul(t, t.stateNode.containerInfo),
        r = t.pendingProps,
        e === null ? t.child = Gn(t, null, r, n) : de(e, t, r, n),
        t.child;
    case 11:
        return r = t.type,
        i = t.pendingProps,
        i = t.elementType === r ? i : Me(r, i),
        gs(e, t, r, i, n);
    case 7:
        return de(e, t, t.pendingProps, n),
        t.child;
    case 8:
        return de(e, t, t.pendingProps.children, n),
        t.child;
    case 12:
        return de(e, t, t.pendingProps.children, n),
        t.child;
    case 10:
        e: {
            if (r = t.type._context,
            i = t.pendingProps,
            o = t.memoizedProps,
            l = i.value,
            D(hi, r._currentValue),
            r._currentValue = l,
            o !== null)
                if (He(o.value, l)) {
                    if (o.children === i.children && !ye.current) {
                        t = ut(e, t, n);
                        break e
                    }
                } else
                    for (o = t.child,
                    o !== null && (o.return = t); o !== null; ) {
                        var a = o.dependencies;
                        if (a !== null) {
                            l = o.child;
                            for (var s = a.firstContext; s !== null; ) {
                                if (s.context === r) {
                                    if (o.tag === 1) {
                                        s = ot(-1, n & -n),
                                        s.tag = 2;
                                        var p = o.updateQueue;
                                        if (p !== null) {
                                            p = p.shared;
                                            var g = p.pending;
                                            g === null ? s.next = s : (s.next = g.next,
                                            g.next = s),
                                            p.pending = s
                                        }
                                    }
                                    o.lanes |= n,
                                    s = o.alternate,
                                    s !== null && (s.lanes |= n),
                                    Yo(o.return, n, t),
                                    a.lanes |= n;
                                    break
                                }
                                s = s.next
                            }
                        } else if (o.tag === 10)
                            l = o.type === t.type ? null : o.child;
                        else if (o.tag === 18) {
                            if (l = o.return,
                            l === null)
                                throw Error(w(341));
                            l.lanes |= n,
                            a = l.alternate,
                            a !== null && (a.lanes |= n),
                            Yo(l, n, t),
                            l = o.sibling
                        } else
                            l = o.child;
                        if (l !== null)
                            l.return = o;
                        else
                            for (l = o; l !== null; ) {
                                if (l === t) {
                                    l = null;
                                    break
                                }
                                if (o = l.sibling,
                                o !== null) {
                                    o.return = l.return,
                                    l = o;
                                    break
                                }
                                l = l.return
                            }
                        o = l
                    }
            de(e, t, i.children, n),
            t = t.child
        }
        return t;
    case 9:
        return i = t.type,
        r = t.pendingProps.children,
        yn(t, n),
        i = Ne(i),
        r = r(i),
        t.flags |= 1,
        de(e, t, r, n),
        t.child;
    case 14:
        return r = t.type,
        i = Me(r, t.pendingProps),
        i = Me(r.type, i),
        ys(e, t, r, i, n);
    case 15:
        return Gc(e, t, t.type, t.pendingProps, n);
    case 17:
        return r = t.type,
        i = t.pendingProps,
        i = t.elementType === r ? i : Me(r, i),
        Jr(e, t),
        t.tag = 1,
        ve(r) ? (e = !0,
        pi(t)) : e = !1,
        yn(t, n),
        Zu(t, r, i),
        Zo(t, r, i, n),
        el(null, t, r, !0, e, n);
    case 19:
        return Oc(e, t, n);
    case 22:
        return xc(e, t, n)
    }
    throw Error(w(156, t.tag))
}
;
function Vc(e, t) {
    return hu(e, t)
}
function M1(e, t, n, r) {
    this.tag = e,
    this.key = n,
    this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
    this.index = 0,
    this.ref = null,
    this.pendingProps = t,
    this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
    this.mode = r,
    this.subtreeFlags = this.flags = 0,
    this.deletions = null,
    this.childLanes = this.lanes = 0,
    this.alternate = null
}
function Ce(e, t, n, r) {
    return new M1(e,t,n,r)
}
function ta(e) {
    return e = e.prototype,
    !(!e || !e.isReactComponent)
}
function D1(e) {
    if (typeof e == "function")
        return ta(e) ? 1 : 0;
    if (e != null) {
        if (e = e.$$typeof,
        e === El)
            return 11;
        if (e === kl)
            return 14
    }
    return 2
}
function It(e, t) {
    var n = e.alternate;
    return n === null ? (n = Ce(e.tag, t, e.key, e.mode),
    n.elementType = e.elementType,
    n.type = e.type,
    n.stateNode = e.stateNode,
    n.alternate = e,
    e.alternate = n) : (n.pendingProps = t,
    n.type = e.type,
    n.flags = 0,
    n.subtreeFlags = 0,
    n.deletions = null),
    n.flags = e.flags & 14680064,
    n.childLanes = e.childLanes,
    n.lanes = e.lanes,
    n.child = e.child,
    n.memoizedProps = e.memoizedProps,
    n.memoizedState = e.memoizedState,
    n.updateQueue = e.updateQueue,
    t = e.dependencies,
    n.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext
    },
    n.sibling = e.sibling,
    n.index = e.index,
    n.ref = e.ref,
    n
}
function ti(e, t, n, r, i, o) {
    var l = 2;
    if (r = e,
    typeof e == "function")
        ta(e) && (l = 1);
    else if (typeof e == "string")
        l = 5;
    else
        e: switch (e) {
        case tn:
            return Ut(n.children, i, o, t);
        case wl:
            l = 8,
            i |= 8;
            break;
        case ko:
            return e = Ce(12, n, t, i | 2),
            e.elementType = ko,
            e.lanes = o,
            e;
        case Go:
            return e = Ce(13, n, t, i),
            e.elementType = Go,
            e.lanes = o,
            e;
        case xo:
            return e = Ce(19, n, t, i),
            e.elementType = xo,
            e.lanes = o,
            e;
        case Js:
            return Mi(n, i, o, t);
        default:
            if (typeof e == "object" && e !== null)
                switch (e.$$typeof) {
                case Ks:
                    l = 10;
                    break e;
                case Zs:
                    l = 9;
                    break e;
                case El:
                    l = 11;
                    break e;
                case kl:
                    l = 14;
                    break e;
                case ft:
                    l = 16,
                    r = null;
                    break e
                }
            throw Error(w(130, e == null ? e : typeof e, ""))
        }
    return t = Ce(l, n, t, i),
    t.elementType = e,
    t.type = r,
    t.lanes = o,
    t
}
function Ut(e, t, n, r) {
    return e = Ce(7, e, r, t),
    e.lanes = n,
    e
}
function Mi(e, t, n, r) {
    return e = Ce(22, e, r, t),
    e.elementType = Js,
    e.lanes = n,
    e.stateNode = {
        isHidden: !1
    },
    e
}
function ho(e, t, n) {
    return e = Ce(6, e, null, t),
    e.lanes = n,
    e
}
function go(e, t, n) {
    return t = Ce(4, e.children !== null ? e.children : [], e.key, t),
    t.lanes = n,
    t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation
    },
    t
}
function j1(e, t, n, r, i) {
    this.tag = t,
    this.containerInfo = e,
    this.finishedWork = this.pingCache = this.current = this.pendingChildren = null,
    this.timeoutHandle = -1,
    this.callbackNode = this.pendingContext = this.context = null,
    this.callbackPriority = 0,
    this.eventTimes = Yi(0),
    this.expirationTimes = Yi(-1),
    this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
    this.entanglements = Yi(0),
    this.identifierPrefix = r,
    this.onRecoverableError = i,
    this.mutableSourceEagerHydrationData = null
}
function na(e, t, n, r, i, o, l, a, s) {
    return e = new j1(e,t,n,a,s),
    t === 1 ? (t = 1,
    o === !0 && (t |= 8)) : t = 0,
    o = Ce(3, null, null, t),
    e.current = o,
    o.stateNode = e,
    o.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null
    },
    jl(o),
    e
}
function U1(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
        $$typeof: en,
        key: r == null ? null : "" + r,
        children: e,
        containerInfo: t,
        implementation: n
    }
}
function Wc(e) {
    if (!e)
        return At;
    e = e._reactInternals;
    e: {
        if (Xt(e) !== e || e.tag !== 1)
            throw Error(w(170));
        var t = e;
        do {
            switch (t.tag) {
            case 3:
                t = t.stateNode.context;
                break e;
            case 1:
                if (ve(t.type)) {
                    t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                    break e
                }
            }
            t = t.return
        } while (t !== null);
        throw Error(w(171))
    }
    if (e.tag === 1) {
        var n = e.type;
        if (ve(n))
            return Vu(e, n, t)
    }
    return t
}
function $c(e, t, n, r, i, o, l, a, s) {
    return e = na(n, r, !0, e, i, o, l, a, s),
    e.context = Wc(null),
    n = e.current,
    r = pe(),
    i = Pt(n),
    o = ot(r, i),
    o.callback = t ?? null,
    xt(n, o, i),
    e.current.lanes = i,
    Er(e, i, r),
    we(e, r),
    e
}
function Di(e, t, n, r) {
    var i = t.current
      , o = pe()
      , l = Pt(i);
    return n = Wc(n),
    t.context === null ? t.context = n : t.pendingContext = n,
    t = ot(o, l),
    t.payload = {
        element: e
    },
    r = r === void 0 ? null : r,
    r !== null && (t.callback = r),
    e = xt(i, t, l),
    e !== null && (Be(e, i, l, o),
    Yr(e, i, l)),
    l
}
function Pi(e) {
    if (e = e.current,
    !e.child)
        return null;
    switch (e.child.tag) {
    case 5:
        return e.child.stateNode;
    default:
        return e.child.stateNode
    }
}
function Fs(e, t) {
    if (e = e.memoizedState,
    e !== null && e.dehydrated !== null) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t
    }
}
function ra(e, t) {
    Fs(e, t),
    (e = e.alternate) && Fs(e, t)
}
function B1() {
    return null
}
var bc = typeof reportError == "function" ? reportError : function(e) {
    console.error(e)
}
;
function ia(e) {
    this._internalRoot = e
}
ji.prototype.render = ia.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null)
        throw Error(w(409));
    Di(e, t, null, null)
}
;
ji.prototype.unmount = ia.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        $t(function() {
            Di(null, e, null, null)
        }),
        t[at] = null
    }
}
;
function ji(e) {
    this._internalRoot = e
}
ji.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
        var t = Gu();
        e = {
            blockedOn: null,
            target: e,
            priority: t
        };
        for (var n = 0; n < ht.length && t !== 0 && t < ht[n].priority; n++)
            ;
        ht.splice(n, 0, e),
        n === 0 && Su(e)
    }
}
;
function oa(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
}
function Ui(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
}
function _s() {}
function H1(e, t, n, r, i) {
    if (i) {
        if (typeof r == "function") {
            var o = r;
            r = function() {
                var p = Pi(l);
                o.call(p)
            }
        }
        var l = $c(t, r, e, 0, null, !1, !1, "", _s);
        return e._reactRootContainer = l,
        e[at] = l.current,
        cr(e.nodeType === 8 ? e.parentNode : e),
        $t(),
        l
    }
    for (; i = e.lastChild; )
        e.removeChild(i);
    if (typeof r == "function") {
        var a = r;
        r = function() {
            var p = Pi(s);
            a.call(p)
        }
    }
    var s = na(e, 0, !1, null, null, !1, !1, "", _s);
    return e._reactRootContainer = s,
    e[at] = s.current,
    cr(e.nodeType === 8 ? e.parentNode : e),
    $t(function() {
        Di(t, s, n, r)
    }),
    s
}
function Bi(e, t, n, r, i) {
    var o = n._reactRootContainer;
    if (o) {
        var l = o;
        if (typeof i == "function") {
            var a = i;
            i = function() {
                var s = Pi(l);
                a.call(s)
            }
        }
        Di(t, l, e, i)
    } else
        l = H1(n, t, e, i, r);
    return Pi(l)
}
Eu = function(e) {
    switch (e.tag) {
    case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
            var n = Wn(t.pendingLanes);
            n !== 0 && (Sl(t, n | 1),
            we(t, Q()),
            !(R & 6) && (Pn = Q() + 500,
            Ct()))
        }
        break;
    case 13:
        $t(function() {
            var r = st(e, 1);
            if (r !== null) {
                var i = pe();
                Be(r, e, 1, i)
            }
        }),
        ra(e, 1)
    }
}
;
Pl = function(e) {
    if (e.tag === 13) {
        var t = st(e, 134217728);
        if (t !== null) {
            var n = pe();
            Be(t, e, 134217728, n)
        }
        ra(e, 134217728)
    }
}
;
ku = function(e) {
    if (e.tag === 13) {
        var t = Pt(e)
          , n = st(e, t);
        if (n !== null) {
            var r = pe();
            Be(n, e, t, r)
        }
        ra(e, t)
    }
}
;
Gu = function() {
    return z
}
;
xu = function(e, t) {
    var n = z;
    try {
        return z = e,
        t()
    } finally {
        z = n
    }
}
;
No = function(e, t, n) {
    switch (t) {
    case "input":
        if (Io(e, n),
        t = n.name,
        n.type === "radio" && t != null) {
            for (n = e; n.parentNode; )
                n = n.parentNode;
            for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'),
            t = 0; t < n.length; t++) {
                var r = n[t];
                if (r !== e && r.form === e.form) {
                    var i = Ci(r);
                    if (!i)
                        throw Error(w(90));
                    eu(r),
                    Io(r, i)
                }
            }
        }
        break;
    case "textarea":
        nu(e, n);
        break;
    case "select":
        t = n.value,
        t != null && fn(e, !!n.multiple, t, !1)
    }
}
;
uu = Jl;
cu = $t;
var V1 = {
    usingClientEntryPoint: !1,
    Events: [Gr, ln, Ci, au, su, Jl]
}
  , Bn = {
    findFiberByHostInstance: zt,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom"
}
  , W1 = {
    bundleType: Bn.bundleType,
    version: Bn.version,
    rendererPackageName: Bn.rendererPackageName,
    rendererConfig: Bn.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: ct.ReactCurrentDispatcher,
    findHostInstanceByFiber: function(e) {
        return e = fu(e),
        e === null ? null : e.stateNode
    },
    findFiberByHostInstance: Bn.findFiberByHostInstance || B1,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608"
};
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Hr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Hr.isDisabled && Hr.supportsFiber)
        try {
            Oi = Hr.inject(W1),
            Qe = Hr
        } catch {}
}
Pe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = V1;
Pe.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!oa(t))
        throw Error(w(200));
    return U1(e, t, null, n)
}
;
Pe.createRoot = function(e, t) {
    if (!oa(e))
        throw Error(w(299));
    var n = !1
      , r = ""
      , i = bc;
    return t != null && (t.unstable_strictMode === !0 && (n = !0),
    t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
    t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    t = na(e, 1, !1, null, null, n, !1, r, i),
    e[at] = t.current,
    cr(e.nodeType === 8 ? e.parentNode : e),
    new ia(t)
}
;
Pe.findDOMNode = function(e) {
    if (e == null)
        return null;
    if (e.nodeType === 1)
        return e;
    var t = e._reactInternals;
    if (t === void 0)
        throw typeof e.render == "function" ? Error(w(188)) : (e = Object.keys(e).join(","),
        Error(w(268, e)));
    return e = fu(t),
    e = e === null ? null : e.stateNode,
    e
}
;
Pe.flushSync = function(e) {
    return $t(e)
}
;
Pe.hydrate = function(e, t, n) {
    if (!Ui(t))
        throw Error(w(200));
    return Bi(null, e, t, !0, n)
}
;
Pe.hydrateRoot = function(e, t, n) {
    if (!oa(e))
        throw Error(w(405));
    var r = n != null && n.hydratedSources || null
      , i = !1
      , o = ""
      , l = bc;
    if (n != null && (n.unstable_strictMode === !0 && (i = !0),
    n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
    n.onRecoverableError !== void 0 && (l = n.onRecoverableError)),
    t = $c(t, null, e, 1, n ?? null, i, !1, o, l),
    e[at] = t.current,
    cr(e),
    r)
        for (e = 0; e < r.length; e++)
            n = r[e],
            i = n._getVersion,
            i = i(n._source),
            t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, i] : t.mutableSourceEagerHydrationData.push(n, i);
    return new ji(t)
}
;
Pe.render = function(e, t, n) {
    if (!Ui(t))
        throw Error(w(200));
    return Bi(null, e, t, !1, n)
}
;
Pe.unmountComponentAtNode = function(e) {
    if (!Ui(e))
        throw Error(w(40));
    return e._reactRootContainer ? ($t(function() {
        Bi(null, null, e, !1, function() {
            e._reactRootContainer = null,
            e[at] = null
        })
    }),
    !0) : !1
}
;
Pe.unstable_batchedUpdates = Jl;
Pe.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!Ui(n))
        throw Error(w(200));
    if (e == null || e._reactInternals === void 0)
        throw Error(w(38));
    return Bi(e, t, n, !1, r)
}
;
Pe.version = "18.2.0-next-9e3b772b8-20220608";
function Xc() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
        try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Xc)
        } catch (e) {
            console.error(e)
        }
}
Xc(),
$s.exports = Pe;
var $1 = $s.exports
  , Cs = $1;
wo.createRoot = Cs.createRoot,
wo.hydrateRoot = Cs.hydrateRoot;
const Ts = {
    type: "change"
}
  , yo = {
    type: "start"
}
  , Ns = {
    type: "end"
}
  , Vr = new a0
  , Ls = new s0
  , b1 = Math.cos(70 * c0.DEG2RAD);
class X1 extends u0 {
    constructor(t, n) {
        super(),
        this.object = t,
        this.domElement = n,
        this.domElement.style.touchAction = "none",
        this.enabled = !0,
        this.target = new Ee,
        this.cursor = new Ee,
        this.minDistance = 0,
        this.maxDistance = 1 / 0,
        this.minZoom = 0,
        this.maxZoom = 1 / 0,
        this.minTargetRadius = 0,
        this.maxTargetRadius = 1 / 0,
        this.minPolarAngle = 0,
        this.maxPolarAngle = Math.PI,
        this.minAzimuthAngle = -1 / 0,
        this.maxAzimuthAngle = 1 / 0,
        this.enableDamping = !1,
        this.dampingFactor = .05,
        this.enableZoom = !0,
        this.zoomSpeed = 1,
        this.enableRotate = !0,
        this.rotateSpeed = 1,
        this.enablePan = !0,
        this.panSpeed = 1,
        this.screenSpacePanning = !0,
        this.keyPanSpeed = 7,
        this.zoomToCursor = !1,
        this.autoRotate = !1,
        this.autoRotateSpeed = 2,
        this.keys = {
            LEFT: "ArrowLeft",
            UP: "ArrowUp",
            RIGHT: "ArrowRight",
            BOTTOM: "ArrowDown"
        },
        this.mouseButtons = {
            LEFT: Zt.ROTATE,
            MIDDLE: Zt.DOLLY,
            RIGHT: Zt.PAN
        },
        this.touches = {
            ONE: Jt.ROTATE,
            TWO: Jt.DOLLY_PAN
        },
        this.target0 = this.target.clone(),
        this.position0 = this.object.position.clone(),
        this.zoom0 = this.object.zoom,
        this._domElementKeyEvents = null,
        this.getPolarAngle = function() {
            return a.phi
        }
        ,
        this.getAzimuthalAngle = function() {
            return a.theta
        }
        ,
        this.getDistance = function() {
            return this.object.position.distanceTo(this.target)
        }
        ,
        this.listenToKeyEvents = function(u) {
            u.addEventListener("keydown", Vi),
            this._domElementKeyEvents = u
        }
        ,
        this.stopListenToKeyEvents = function() {
            this._domElementKeyEvents.removeEventListener("keydown", Vi),
            this._domElementKeyEvents = null
        }
        ,
        this.saveState = function() {
            r.target0.copy(r.target),
            r.position0.copy(r.object.position),
            r.zoom0 = r.object.zoom
        }
        ,
        this.reset = function() {
            r.target.copy(r.target0),
            r.object.position.copy(r.position0),
            r.object.zoom = r.zoom0,
            r.object.updateProjectionMatrix(),
            r.dispatchEvent(Ts),
            r.update(),
            o = i.NONE
        }
        ,
        this.update = function() {
            const u = new Ee
              , P = new ka().setFromUnitVectors(t.up, new Ee(0,1,0))
              , T = P.clone().invert()
              , M = new Ee
              , ce = new ka
              , dt = new Ee
              , Oe = 2 * Math.PI;
            return function(l0=null) {
                const wa = r.object.position;
                u.copy(wa).sub(r.target),
                u.applyQuaternion(P),
                a.setFromVector3(u),
                r.autoRotate && o === i.NONE && Re(C(l0)),
                r.enableDamping ? (a.theta += s.theta * r.dampingFactor,
                a.phi += s.phi * r.dampingFactor) : (a.theta += s.theta,
                a.phi += s.phi);
                let Je = r.minAzimuthAngle
                  , qe = r.maxAzimuthAngle;
                isFinite(Je) && isFinite(qe) && (Je < -Math.PI ? Je += Oe : Je > Math.PI && (Je -= Oe),
                qe < -Math.PI ? qe += Oe : qe > Math.PI && (qe -= Oe),
                Je <= qe ? a.theta = Math.max(Je, Math.min(qe, a.theta)) : a.theta = a.theta > (Je + qe) / 2 ? Math.max(Je, a.theta) : Math.min(qe, a.theta)),
                a.phi = Math.max(r.minPolarAngle, Math.min(r.maxPolarAngle, a.phi)),
                a.makeSafe(),
                r.enableDamping === !0 ? r.target.addScaledVector(g, r.dampingFactor) : r.target.add(g),
                r.target.sub(r.cursor),
                r.target.clampLength(r.minTargetRadius, r.maxTargetRadius),
                r.target.add(r.cursor);
                let Tn = !1;
                if (r.zoomToCursor && O || r.object.isOrthographicCamera)
                    a.radius = _(a.radius);
                else {
                    const et = a.radius;
                    a.radius = _(a.radius * p),
                    Tn = et != a.radius
                }
                if (u.setFromSpherical(a),
                u.applyQuaternion(T),
                wa.copy(r.target).add(u),
                r.object.lookAt(r.target),
                r.enableDamping === !0 ? (s.theta *= 1 - r.dampingFactor,
                s.phi *= 1 - r.dampingFactor,
                g.multiplyScalar(1 - r.dampingFactor)) : (s.set(0, 0, 0),
                g.set(0, 0, 0)),
                r.zoomToCursor && O) {
                    let et = null;
                    if (r.object.isPerspectiveCamera) {
                        const Nn = u.length();
                        et = _(Nn * p);
                        const Pr = Nn - et;
                        r.object.position.addScaledVector(y, Pr),
                        r.object.updateMatrixWorld(),
                        Tn = !!Pr
                    } else if (r.object.isOrthographicCamera) {
                        const Nn = new Ee(x.x,x.y,0);
                        Nn.unproject(r.object);
                        const Pr = r.object.zoom;
                        r.object.zoom = Math.max(r.minZoom, Math.min(r.maxZoom, r.object.zoom / p)),
                        r.object.updateProjectionMatrix(),
                        Tn = Pr !== r.object.zoom;
                        const Ea = new Ee(x.x,x.y,0);
                        Ea.unproject(r.object),
                        r.object.position.sub(Ea).add(Nn),
                        r.object.updateMatrixWorld(),
                        et = u.length()
                    } else
                        console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),
                        r.zoomToCursor = !1;
                    et !== null && (this.screenSpacePanning ? r.target.set(0, 0, -1).transformDirection(r.object.matrix).multiplyScalar(et).add(r.object.position) : (Vr.origin.copy(r.object.position),
                    Vr.direction.set(0, 0, -1).transformDirection(r.object.matrix),
                    Math.abs(r.object.up.dot(Vr.direction)) < b1 ? t.lookAt(r.target) : (Ls.setFromNormalAndCoplanarPoint(r.object.up, r.target),
                    Vr.intersectPlane(Ls, r.target))))
                } else if (r.object.isOrthographicCamera) {
                    const et = r.object.zoom;
                    r.object.zoom = Math.max(r.minZoom, Math.min(r.maxZoom, r.object.zoom / p)),
                    et !== r.object.zoom && (r.object.updateProjectionMatrix(),
                    Tn = !0)
                }
                return p = 1,
                O = !1,
                Tn || M.distanceToSquared(r.object.position) > l || 8 * (1 - ce.dot(r.object.quaternion)) > l || dt.distanceToSquared(r.target) > l ? (r.dispatchEvent(Ts),
                M.copy(r.object.position),
                ce.copy(r.object.quaternion),
                dt.copy(r.target),
                !0) : !1
            }
        }(),
        this.dispose = function() {
            r.domElement.removeEventListener("contextmenu", ya),
            r.domElement.removeEventListener("pointerdown", pa),
            r.domElement.removeEventListener("pointercancel", Cn),
            r.domElement.removeEventListener("wheel", fa),
            r.domElement.removeEventListener("pointermove", Hi),
            r.domElement.removeEventListener("pointerup", Cn),
            r.domElement.getRootNode().removeEventListener("keydown", ma, {
                capture: !0
            }),
            r._domElementKeyEvents !== null && (r._domElementKeyEvents.removeEventListener("keydown", Vi),
            r._domElementKeyEvents = null)
        }
        ;
        const r = this
          , i = {
            NONE: -1,
            ROTATE: 0,
            DOLLY: 1,
            PAN: 2,
            TOUCH_ROTATE: 3,
            TOUCH_PAN: 4,
            TOUCH_DOLLY_PAN: 5,
            TOUCH_DOLLY_ROTATE: 6
        };
        let o = i.NONE;
        const l = 1e-6
          , a = new Ga
          , s = new Ga;
        let p = 1;
        const g = new Ee
          , h = new Ae
          , m = new Ae
          , v = new Ae
          , E = new Ae
          , k = new Ae
          , L = new Ae
          , d = new Ae
          , c = new Ae
          , f = new Ae
          , y = new Ee
          , x = new Ae;
        let O = !1;
        const G = []
          , A = {};
        let j = !1;
        function C(u) {
            return u !== null ? 2 * Math.PI / 60 * r.autoRotateSpeed * u : 2 * Math.PI / 60 / 60 * r.autoRotateSpeed
        }
        function ie(u) {
            const P = Math.abs(u * .01);
            return Math.pow(.95, r.zoomSpeed * P)
        }
        function Re(u) {
            s.theta -= u
        }
        function Ve(u) {
            s.phi -= u
        }
        const Fn = function() {
            const u = new Ee;
            return function(T, M) {
                u.setFromMatrixColumn(M, 0),
                u.multiplyScalar(-T),
                g.add(u)
            }
        }()
          , Sr = function() {
            const u = new Ee;
            return function(T, M) {
                r.screenSpacePanning === !0 ? u.setFromMatrixColumn(M, 1) : (u.setFromMatrixColumn(M, 0),
                u.crossVectors(r.object.up, u)),
                u.multiplyScalar(T),
                g.add(u)
            }
        }()
          , We = function() {
            const u = new Ee;
            return function(T, M) {
                const ce = r.domElement;
                if (r.object.isPerspectiveCamera) {
                    const dt = r.object.position;
                    u.copy(dt).sub(r.target);
                    let Oe = u.length();
                    Oe *= Math.tan(r.object.fov / 2 * Math.PI / 180),
                    Fn(2 * T * Oe / ce.clientHeight, r.object.matrix),
                    Sr(2 * M * Oe / ce.clientHeight, r.object.matrix)
                } else
                    r.object.isOrthographicCamera ? (Fn(T * (r.object.right - r.object.left) / r.object.zoom / ce.clientWidth, r.object.matrix),
                    Sr(M * (r.object.top - r.object.bottom) / r.object.zoom / ce.clientHeight, r.object.matrix)) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),
                    r.enablePan = !1)
            }
        }();
        function Tt(u) {
            r.object.isPerspectiveCamera || r.object.isOrthographicCamera ? p /= u : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),
            r.enableZoom = !1)
        }
        function S(u) {
            r.object.isPerspectiveCamera || r.object.isOrthographicCamera ? p *= u : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),
            r.enableZoom = !1)
        }
        function F(u, P) {
            if (!r.zoomToCursor)
                return;
            O = !0;
            const T = r.domElement.getBoundingClientRect()
              , M = u - T.left
              , ce = P - T.top
              , dt = T.width
              , Oe = T.height;
            x.x = M / dt * 2 - 1,
            x.y = -(ce / Oe) * 2 + 1,
            y.set(x.x, x.y, 1).unproject(r.object).sub(r.object.position).normalize()
        }
        function _(u) {
            return Math.max(r.minDistance, Math.min(r.maxDistance, u))
        }
        function H(u) {
            h.set(u.clientX, u.clientY)
        }
        function Y(u) {
            F(u.clientX, u.clientX),
            d.set(u.clientX, u.clientY)
        }
        function Nt(u) {
            E.set(u.clientX, u.clientY)
        }
        function Ke(u) {
            m.set(u.clientX, u.clientY),
            v.subVectors(m, h).multiplyScalar(r.rotateSpeed);
            const P = r.domElement;
            Re(2 * Math.PI * v.x / P.clientHeight),
            Ve(2 * Math.PI * v.y / P.clientHeight),
            h.copy(m),
            r.update()
        }
        function _n(u) {
            c.set(u.clientX, u.clientY),
            f.subVectors(c, d),
            f.y > 0 ? Tt(ie(f.y)) : f.y < 0 && S(ie(f.y)),
            d.copy(c),
            r.update()
        }
        function Ze(u) {
            k.set(u.clientX, u.clientY),
            L.subVectors(k, E).multiplyScalar(r.panSpeed),
            We(L.x, L.y),
            E.copy(k),
            r.update()
        }
        function Yt(u) {
            F(u.clientX, u.clientY),
            u.deltaY < 0 ? S(ie(u.deltaY)) : u.deltaY > 0 && Tt(ie(u.deltaY)),
            r.update()
        }
        function Qc(u) {
            let P = !1;
            switch (u.code) {
            case r.keys.UP:
                u.ctrlKey || u.metaKey || u.shiftKey ? Ve(2 * Math.PI * r.rotateSpeed / r.domElement.clientHeight) : We(0, r.keyPanSpeed),
                P = !0;
                break;
            case r.keys.BOTTOM:
                u.ctrlKey || u.metaKey || u.shiftKey ? Ve(-2 * Math.PI * r.rotateSpeed / r.domElement.clientHeight) : We(0, -r.keyPanSpeed),
                P = !0;
                break;
            case r.keys.LEFT:
                u.ctrlKey || u.metaKey || u.shiftKey ? Re(2 * Math.PI * r.rotateSpeed / r.domElement.clientHeight) : We(r.keyPanSpeed, 0),
                P = !0;
                break;
            case r.keys.RIGHT:
                u.ctrlKey || u.metaKey || u.shiftKey ? Re(-2 * Math.PI * r.rotateSpeed / r.domElement.clientHeight) : We(-r.keyPanSpeed, 0),
                P = !0;
                break
            }
            P && (u.preventDefault(),
            r.update())
        }
        function la(u) {
            if (G.length === 1)
                h.set(u.pageX, u.pageY);
            else {
                const P = Kt(u)
                  , T = .5 * (u.pageX + P.x)
                  , M = .5 * (u.pageY + P.y);
                h.set(T, M)
            }
        }
        function aa(u) {
            if (G.length === 1)
                E.set(u.pageX, u.pageY);
            else {
                const P = Kt(u)
                  , T = .5 * (u.pageX + P.x)
                  , M = .5 * (u.pageY + P.y);
                E.set(T, M)
            }
        }
        function sa(u) {
            const P = Kt(u)
              , T = u.pageX - P.x
              , M = u.pageY - P.y
              , ce = Math.sqrt(T * T + M * M);
            d.set(0, ce)
        }
        function Yc(u) {
            r.enableZoom && sa(u),
            r.enablePan && aa(u)
        }
        function Kc(u) {
            r.enableZoom && sa(u),
            r.enableRotate && la(u)
        }
        function ua(u) {
            if (G.length == 1)
                m.set(u.pageX, u.pageY);
            else {
                const T = Kt(u)
                  , M = .5 * (u.pageX + T.x)
                  , ce = .5 * (u.pageY + T.y);
                m.set(M, ce)
            }
            v.subVectors(m, h).multiplyScalar(r.rotateSpeed);
            const P = r.domElement;
            Re(2 * Math.PI * v.x / P.clientHeight),
            Ve(2 * Math.PI * v.y / P.clientHeight),
            h.copy(m)
        }
        function ca(u) {
            if (G.length === 1)
                k.set(u.pageX, u.pageY);
            else {
                const P = Kt(u)
                  , T = .5 * (u.pageX + P.x)
                  , M = .5 * (u.pageY + P.y);
                k.set(T, M)
            }
            L.subVectors(k, E).multiplyScalar(r.panSpeed),
            We(L.x, L.y),
            E.copy(k)
        }
        function da(u) {
            const P = Kt(u)
              , T = u.pageX - P.x
              , M = u.pageY - P.y
              , ce = Math.sqrt(T * T + M * M);
            c.set(0, ce),
            f.set(0, Math.pow(c.y / d.y, r.zoomSpeed)),
            Tt(f.y),
            d.copy(c);
            const dt = (u.pageX + P.x) * .5
              , Oe = (u.pageY + P.y) * .5;
            F(dt, Oe)
        }
        function Zc(u) {
            r.enableZoom && da(u),
            r.enablePan && ca(u)
        }
        function Jc(u) {
            r.enableZoom && da(u),
            r.enableRotate && ua(u)
        }
        function pa(u) {
            r.enabled !== !1 && (G.length === 0 && (r.domElement.setPointerCapture(u.pointerId),
            r.domElement.addEventListener("pointermove", Hi),
            r.domElement.addEventListener("pointerup", Cn)),
            !o0(u) && (r0(u),
            u.pointerType === "touch" ? ga(u) : qc(u)))
        }
        function Hi(u) {
            r.enabled !== !1 && (u.pointerType === "touch" ? n0(u) : e0(u))
        }
        function Cn(u) {
            switch (i0(u),
            G.length) {
            case 0:
                r.domElement.releasePointerCapture(u.pointerId),
                r.domElement.removeEventListener("pointermove", Hi),
                r.domElement.removeEventListener("pointerup", Cn),
                r.dispatchEvent(Ns),
                o = i.NONE;
                break;
            case 1:
                const P = G[0]
                  , T = A[P];
                ga({
                    pointerId: P,
                    pageX: T.x,
                    pageY: T.y
                });
                break
            }
        }
        function qc(u) {
            let P;
            switch (u.button) {
            case 0:
                P = r.mouseButtons.LEFT;
                break;
            case 1:
                P = r.mouseButtons.MIDDLE;
                break;
            case 2:
                P = r.mouseButtons.RIGHT;
                break;
            default:
                P = -1
            }
            switch (P) {
            case Zt.DOLLY:
                if (r.enableZoom === !1)
                    return;
                Y(u),
                o = i.DOLLY;
                break;
            case Zt.ROTATE:
                if (u.ctrlKey || u.metaKey || u.shiftKey) {
                    if (r.enablePan === !1)
                        return;
                    Nt(u),
                    o = i.PAN
                } else {
                    if (r.enableRotate === !1)
                        return;
                    H(u),
                    o = i.ROTATE
                }
                break;
            case Zt.PAN:
                if (u.ctrlKey || u.metaKey || u.shiftKey) {
                    if (r.enableRotate === !1)
                        return;
                    H(u),
                    o = i.ROTATE
                } else {
                    if (r.enablePan === !1)
                        return;
                    Nt(u),
                    o = i.PAN
                }
                break;
            default:
                o = i.NONE
            }
            o !== i.NONE && r.dispatchEvent(yo)
        }
        function e0(u) {
            switch (o) {
            case i.ROTATE:
                if (r.enableRotate === !1)
                    return;
                Ke(u);
                break;
            case i.DOLLY:
                if (r.enableZoom === !1)
                    return;
                _n(u);
                break;
            case i.PAN:
                if (r.enablePan === !1)
                    return;
                Ze(u);
                break
            }
        }
        function fa(u) {
            r.enabled === !1 || r.enableZoom === !1 || o !== i.NONE || (u.preventDefault(),
            r.dispatchEvent(yo),
            Yt(t0(u)),
            r.dispatchEvent(Ns))
        }
        function t0(u) {
            const P = u.deltaMode
              , T = {
                clientX: u.clientX,
                clientY: u.clientY,
                deltaY: u.deltaY
            };
            switch (P) {
            case 1:
                T.deltaY *= 16;
                break;
            case 2:
                T.deltaY *= 100;
                break
            }
            return u.ctrlKey && !j && (T.deltaY *= 10),
            T
        }
        function ma(u) {
            u.key === "Control" && (j = !0,
            r.domElement.getRootNode().addEventListener("keyup", ha, {
                passive: !0,
                capture: !0
            }))
        }
        function ha(u) {
            u.key === "Control" && (j = !1,
            r.domElement.getRootNode().removeEventListener("keyup", ha, {
                passive: !0,
                capture: !0
            }))
        }
        function Vi(u) {
            r.enabled === !1 || r.enablePan === !1 || Qc(u)
        }
        function ga(u) {
            switch (va(u),
            G.length) {
            case 1:
                switch (r.touches.ONE) {
                case Jt.ROTATE:
                    if (r.enableRotate === !1)
                        return;
                    la(u),
                    o = i.TOUCH_ROTATE;
                    break;
                case Jt.PAN:
                    if (r.enablePan === !1)
                        return;
                    aa(u),
                    o = i.TOUCH_PAN;
                    break;
                default:
                    o = i.NONE
                }
                break;
            case 2:
                switch (r.touches.TWO) {
                case Jt.DOLLY_PAN:
                    if (r.enableZoom === !1 && r.enablePan === !1)
                        return;
                    Yc(u),
                    o = i.TOUCH_DOLLY_PAN;
                    break;
                case Jt.DOLLY_ROTATE:
                    if (r.enableZoom === !1 && r.enableRotate === !1)
                        return;
                    Kc(u),
                    o = i.TOUCH_DOLLY_ROTATE;
                    break;
                default:
                    o = i.NONE
                }
                break;
            default:
                o = i.NONE
            }
            o !== i.NONE && r.dispatchEvent(yo)
        }
        function n0(u) {
            switch (va(u),
            o) {
            case i.TOUCH_ROTATE:
                if (r.enableRotate === !1)
                    return;
                ua(u),
                r.update();
                break;
            case i.TOUCH_PAN:
                if (r.enablePan === !1)
                    return;
                ca(u),
                r.update();
                break;
            case i.TOUCH_DOLLY_PAN:
                if (r.enableZoom === !1 && r.enablePan === !1)
                    return;
                Zc(u),
                r.update();
                break;
            case i.TOUCH_DOLLY_ROTATE:
                if (r.enableZoom === !1 && r.enableRotate === !1)
                    return;
                Jc(u),
                r.update();
                break;
            default:
                o = i.NONE
            }
        }
        function ya(u) {
            r.enabled !== !1 && u.preventDefault()
        }
        function r0(u) {
            G.push(u.pointerId)
        }
        function i0(u) {
            delete A[u.pointerId];
            for (let P = 0; P < G.length; P++)
                if (G[P] == u.pointerId) {
                    G.splice(P, 1);
                    return
                }
        }
        function o0(u) {
            for (let P = 0; P < G.length; P++)
                if (G[P] == u.pointerId)
                    return !0;
            return !1
        }
        function va(u) {
            let P = A[u.pointerId];
            P === void 0 && (P = new Ae,
            A[u.pointerId] = P),
            P.set(u.pageX, u.pageY)
        }
        function Kt(u) {
            const P = u.pointerId === G[0] ? G[1] : G[0];
            return A[P]
        }
        r.domElement.addEventListener("contextmenu", ya),
        r.domElement.addEventListener("pointerdown", pa),
        r.domElement.addEventListener("pointercancel", Cn),
        r.domElement.addEventListener("wheel", fa, {
            passive: !1
        }),
        r.domElement.getRootNode().addEventListener("keydown", ma, {
            passive: !0,
            capture: !0
        }),
        this.update()
    }
}

class Q1 {
    constructor(t) {
        this.scene = void 0,
        this.camera = void 0,
        this.renderer = void 0,
        this.fov = 25,
        this.nearPlane = 1,
        this.farPlane = 5e3,
        this.canvasId = t,
        this.controls = void 0,
        this.ambientLight = void 0
    }
    initialize() {
        this.scene = new d0();
        this.scene.background = new p0(16777215);
        const screenWidth = window.innerWidth;
        let desiredFOV;
        if (screenWidth < 768) {
            desiredFOV = 85;
        } else if (screenWidth >= 768 && screenWidth < 1200) {
            desiredFOV = 65;
        } else {
            desiredFOV = 25;
        }
        this.fov = desiredFOV;
        this.camera = new f0(this.fov,window.innerWidth / window.innerHeight,this.nearPlane,this.farPlane);
        this.camera.position.set(-500, 1000, 1000);
        this.camera.lookAt(0, 0, 0);
        let screenAspectValue = 0.5;
        if (window.innerWidth < 799) {
            screenAspectValue = 1.2;
        } else if (window.innerWidth >= 800 && window.innerWidth < 1200) {
            screenAspectValue = 1.15;
        } else {
            screenAspectValue = 1.25;
        }
        const t = document.getElementById(this.canvasId);
        this.renderer = new m0({
            canvas: t,
            antialias: !0
        }),
        this.renderer.setSize(window.innerWidth / screenAspectValue, window.innerHeight / screenAspectValue),
        document.body.appendChild(this.renderer.domElement),
        this.controls = new X1(this.camera,this.renderer.domElement),
        this.controls.maxPolarAngle = Math.PI / 2.5,
        this.controls.minDistance = 200,
        this.controls.maxDistance = 2e3,
        this.ambientLight = new h0(16777215,1.5),
        this.ambientLight.castShadow = !0,
        this.scene.add(this.ambientLight),
        window.addEventListener("resize", ()=>this.onWindowResize(), !1)
    }
    animate() {
        window.requestAnimationFrame(this.animate.bind(this)),
        this.render(),
        this.controls.update()
    }
    render() {
        this.renderer.render(this.scene, this.camera)
    }
    onWindowResize() {
        this.camera.aspect = window.innerWidth / window.innerHeight,
        this.camera.updateProjectionMatrix(),
        this.renderer.setSize(window.innerWidth, window.innerHeight)
    }
}
const Y1 = e=>{
    let t = "PARSEL ADI"
      , n = "00000 m²"
      , r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 60px;">'
      , i = "#79a2d6";
    const o = document.getElementById("showDetailsOnScreen");
    switch (o.style.backgroundColor = "rgba(121, 162, 214, 0.6)",
    e) {
    case "E1P001AO":
        t = "G-1001",
        n = "71.390,63 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 50px;">';
        break;
    case "E1P002AO":
        t = "G-1002",
        n = "68.558,38 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 50px;">';
        break;
    case "E1P003AO":
        t = "G-1003",
        n = "37.977,63 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 50px;">';
        break;
    case "E1P004AO":
        t = "G-1004",
        n = "80.855,46 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 50px;">';
        break;
    case "E1P005AO":
        t = "G-1005",
        n = "75.507,49 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 50px;">';
        break;
    case "E1P006AO":
        t = "G-1006",
        n = "54.777,72 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 50px;">';
        break;
    case "E1P007AO":
        t = "G-1007",
        n = "51.319,59 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 50px;">';
        break;
    case "E1P008AO":
        t = "G-1008",
        n = "54.504,91 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 50px;">';
        break;
    case "E1P009AO":
        t = "G-1009",
        n = "54.504,91 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 50px;">';
        break;
    case "E1P010AO":
        t = "G-1010",
        n = "74.301,76 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 50px;">';
        break;
    case "E1P011AO":
        t = "G-1011",
        n = "59.512,38 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 50px;">';
        break;
    case "E1P012AO":
        t = "G-1012",
        n = "63.397,00 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 50px;">';
        break;
    case "E1P013AO":
        t = "G-1013",
        n = "58.903,23 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 50px;">';
        break;
    case "E1P014AO":
        t = "G-1014",
        n = "63.956,89 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 50px;">';
        break;
    case "E1P015AO":
        t = "G-1015",
        n = "104.419,72 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 50px;">';
        break;
    case "E1P016AO":
        t = "G-1016",
        n = "58.825,86 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 50px;">';
        break;
    case "E1P017AO":
        t = "G-1017",
        n = "79.245,84 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 50px;">';
        break;
    case "E1P018AO":
        t = "G-1018",
        n = "84.579,61 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 50px;">';
        break;
    case "E1P019AO":
        t = "G-1019",
        n = "52.532,27 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 50px;">';
        break;
    case "E1P020AO":
        t = "G-1020",
        n = "84.222,72 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 50px;">';
        break;
    case "E1P021AO":
        t = "G-1021",
        n = "45.943,71 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 50px;">';
        break;
    case "E1P022AO":
        t = "G-1022",
        n = "40.647,24 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 50px;">';
        break;
    case "E1P023AO":
        t = "G-1023",
        n = "66.674,79 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 50px;">';
        break;
    case "E1P024AO":
        t = "G-1024",
        n = "42.031,33 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 50px;">';
        break;
    case "E1P025AO":
        t = "G-1025",
        n = "117.145,80 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 50px;">';
        break;
    case "E1P026AO":
        t = "G-1026",
        n = "43.432,80 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 50px;">';
        break;
    case "E1P027AO":
        t = "G-1027",
        n = "47.763,48 m²",
        r = '<img src="../assets/src/media/Ico-Mosque.png" style="width: auto; height: 60px;">',
        i = "#03fc98",
        o.style.backgroundColor = "rgba(3, 252, 152, 0.6)";
        break;
    case "E1P028AO":
        t = "G-1028",
        n = "48.347,37 m²",
        r = '<img src="../assets/src/media/Ico-Office.png" style="width: auto; height: 60px;">',
        i = "#85051b",
        o.style.backgroundColor = "rgba(133, 5, 27, 0.6)";
        break;
    case "E1P029AO":
        t = "G-1029",
        n = "130.678,66 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 50px;">';
        break;
    case "E1P030AO":
        t = "G-1030",
        n = "34.927,98 m²",
        r = '<img src="../assets/src/media/Ico-Water.png" style="width: auto; height: 50px;">',
        i = "#7732a8",
        o.style.backgroundColor = "rgba(119, 50, 168, 0.6)";
        break;
    case "E1P031AO":
        t = "G-1031",
        n = "104.376,08 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 50px;">';
        break;
    case "E1P032AO":
        t = "G-1032",
        n = "47.433,28 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 50px;">';
        break;
    case "E1P033AO":
        t = "G-1033",
        n = "183.099,72 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 50px;">';
        break;
    case "E1P034AO":
        t = "G-1034",
        n = "75.811,45 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 50px;">';
        break;
    case "E1P035AO":
        t = "G-1035",
        n = "66.405,33 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 50px;">';
        break;
    case "E1P036AO":
        t = "G-1036",
        n = "52.177,23 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 50px;">';
        break;
    case "E1P037AO":
        t = "G-1037",
        n = "55.419,41 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 50px;">';
        break;
    case "E1P038AO":
        t = "G-1038",
        n = "175.625,99 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 50px;">';
        break;
    case "E1P039AO":
        t = "G-1039",
        n = "107.242,15 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 50px;">';
        break;
    case "E1P040AO":
        t = "G-1040",
        n = "108.326,30 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 50px;">';
        break;
    case "E1P041AO":
        t = "G-1041",
        n = "107.851,31 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 50px;">';
        break;
    case "E1P042AO":
        t = "G-1042",
        n = "54.897,53 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 50px;">';
        break;
    case "E1P043AO":
        t = "G-1043",
        n = "226.045,65 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 50px;">';
        break;
    case "E1P044AO":
        t = "G-1044",
        n = "131.203,76 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 50px;">';
        break;
    case "E1P045AO":
        t = "G-1045",
        n = "103.739,79 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 50px;">';
        break;
    case "E1P046AO":
        t = "G-1046",
        n = "39.609,84 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 50px;">';
        break;
    case "E1P047AO":
        t = "G-1047",
        n = "24.953,88 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 50px;">';
        break;
    case "E1P048AO":
        t = "G-1048",
        n = "308.038,69 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 50px;">';
        break;
    case "E1P049AO":
        t = "G-1049",
        n = "260.546,19 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 50px;">';
        break;
    case "E2P001AO":
        t = "G-2001",
        n = "112.524,48 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 50px;">';
        break;
    case "E2P002AO":
        t = "G-2002",
        n = "52.049,80 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 50px;">';
        break;
    case "E2P003AO":
        t = "G-2003",
        n = "39.733,09 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 50px;">';
        break;
    case "E2P004AO":
        t = "G-2004",
        n = "43.550,92 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 50px;">';
        break;
    case "E2P005AO":
        t = "G-2006",
        n = "49.066,92 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 50px;">';
        break;
    case "E2P006AO":
        t = "G-2005",
        n = "57.739,65 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 50px;">';
        break;
    case "E2P007AO":
        t = "G-2007",
        n = "71.922,43 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 50px;">';
        break;
    case "E2P008AO":
        t = "G-2009",
        n = "72.600,17 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 50px;">';
        break;
    case "E2P009AO":
        t = "G-2008",
        n = "58.778,05 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 50px;">';
        break;
    case "E2P010AO":
        t = "G-2012",
        n = "76.468,32 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 50px;">';
        break;
    case "E2P011AO":
        t = "G-2011",
        n = "76.416,65 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 50px;">';
        break;
    case "E2P012AO":
        t = "G-2010",
        n = "82.028,85 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 50px;">';
        break;
    case "E2P013AO":
        t = "G-2015",
        n = "97.795,52 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 50px;">';
        break;
    case "E2P014AO":
        t = "G-2014",
        n = "97.766,45 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 50px;">';
        break;
    case "E2P015AO":
        t = "G-2013",
        n = "130.104,30 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 50px;">';
        break;
    case "E2P016AO":
        t = "G-2016",
        n = "189.511,15 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 50px;">';
        break;
    case "E2P017AO":
        t = "G-2019",
        n = "104.873,22 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 50px;">';
        break;
    case "E2P018AO":
        t = "G-2018",
        n = "132.538,05 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 50px;">';
        break;
    case "E2P019AO":
        t = "G-2017",
        n = "151.153,76 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 50px;">';
        break;
    case "E2P020AO":
        t = "G-2022",
        n = "161.059,67 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 50px;">';
        break;
    case "E2P021AO":
        t = "G-2021",
        n = "90.211,90 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 50px;">';
        break;
    case "E2P022AO":
        t = "G-2020",
        n = "122.258,24 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 50px;">';
        break;
    case "E2P023AO":
        t = "G-2027",
        n = "177.605,97 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 50px;">';
        break;
    case "E2P024AO":
        t = "G-2026",
        n = "136.242,50 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 50px;">';
        break;
    case "E2P025AO":
        t = "G-2025",
        n = "186.487,16 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 50px;">';
        break;
    case "E2P026AO":
        t = "G-2024",
        n = "111.641,35 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 50px;">';
        break;
    case "E2P027AO":
        t = "G-2023",
        n = "45.756,46 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 50px;">';
        break;
    case "E2P028AO":
        t = "G-2031",
        n = "175.872,35 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 50px;">';
        break;
    case "E2P029AO":
        t = "G-2030",
        n = "192.382,84 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 50px;">';
        break;
    case "E2P030AO":
        t = "G-2029",
        n = "152.566,51 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 50px;">';
        break;
    case "E2P031AO":
        t = "G-2028",
        n = "130.262,21 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 50px;">';
        break;
    case "E2P032AO":
        t = "G-2033",
        n = "257.280,31 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 50px;">';
        break;
    case "E2P033AO":
        t = "G-2032",
        n = "73.495,48 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 50px;">';
        break;
    case "E3P001AO":
        t = "G-3001",
        n = "154.180,36 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 50px;">';
        break;
    case "E3P002AO":
        t = "G-3004",
        n = "480.618,60 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 50px;">';
        break;
    case "E3P003AO":
        t = "G-3003",
        n = "310.586,37 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 50px;">';
        break;
    case "E3P004AO":
        t = "G-3008",
        n = "100.325,58 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 50px;">';
        break;
    case "E3P005AO":
        t = "G-3007",
        n = "69.822,28 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 50px;">';
        break;
    case "E3P006AO":
        t = "G-3006",
        n = "94.927,98 m²",
        r = '<img src="../assets/src/media/Ico-Water.png" style="width: auto; height: 50px;">',
        i = "#7732a8",
        o.style.backgroundColor = "rgba(119, 50, 168, 0.6)";
        break;
    case "E3P007AO":
        t = "G-3005",
        n = "36.905,26 m²",
        r = '<img src="../assets/src/media/Ico-Fuel.png" style="width: auto; height: 50px;">',
        i = "#85051b",
        o.style.backgroundColor = "rgba(133, 5, 27, 0.6)";
        break;
    case "E3P008AO":
        t = "G-3014",
        n = "118.809,15 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 50px;">';
        break;
    case "E3P009AO":
        t = "G-3013",
        n = "66.822,99 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 50px;">';
        break;
    case "E3P010AO":
        t = "G-3012",
        n = "42.776,00 m²",
        r = '<img src="../assets/src/media/Ico-Office.png" style="width: auto; height: 60px;">',
        i = "#85051b",
        o.style.backgroundColor = "rgba(133, 5, 27, 0.6)";
        break;
    case "E3P011AO":
        t = "G-3011",
        n = "13.477,54 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 50px;">';
        break;
    case "E3P012AO":
        t = "G-3017",
        n = "99.901,06 m²",
        r = '<img src="../assets/src/media/Ico-Office.png" style="width: auto; height: 60px;">',
        i = "#85051b",
        o.style.backgroundColor = "rgba(133, 5, 27, 0.6)";
        break;
    case "E3P013AO":
        t = "G-3010",
        n = "79.013,62 m²",
        r = '<img src="../assets/src/media/Ico-Office.png" style="width: auto; height: 60px;">',
        i = "#85051b",
        o.style.backgroundColor = "rgba(133, 5, 27, 0.6)";
        break;
    case "E3P014AO":
        t = "G-3021",
        n = "216.924,01 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 50px;">';
        break;
    case "E3P015AO":
        t = "G-3020",
        n = "117.701,37 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 50px;">';
        break;
    case "E3P016AO":
        t = "G-3019",
        n = "50.956,49 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 50px;">';
        break;
    case "E3P017AO":
        t = "G-3018",
        n = "35.572,74 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 50px;">';
        break;
    case "E3P018AO":
        t = "G-3016",
        n = "54.637,26 m²",
        r = '<img src="../assets/src/media/Ico-Office.png" style="width: auto; height: 60px;">',
        i = "#85051b",
        o.style.backgroundColor = "rgba(133, 5, 27, 0.6)";
        break;
    case "E3P019AO":
        t = "G-3022",
        n = "186.335,51 m²",
        r = '<img src="../assets/src/media/Ico-Solar.png" style="width: auto; height: 50px;">',
        i = "#7732a8",
        o.style.backgroundColor = "rgba(119, 50, 168, 0.6)";
        break;
    case "E3P020AO":
        t = "G-3026",
        n = "115.781,37 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 50px;">';
        break;
    case "E3P021AO":
        t = "G-3025",
        n = "65.818,49 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 50px;">';
        break;
    case "E3P022AO":
        t = "G-3024",
        n = "90.164,75 m²",
        r = '<img src="../assets/src/media/Ico-Office.png" style="width: auto; height: 60px;">',
        i = "#85051b",
        o.style.backgroundColor = "rgba(133, 5, 27, 0.6)";
        break;
    case "E3P023AO":
        t = "G-3027",
        n = "217.517,75 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 50px;">';
        break;
    case "E3P024AO":
        t = "G-3030",
        n = "316.124,63 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 50px;">';
        break;
    case "E3P025AO":
        t = "G-3029",
        n = "197.339,82 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 50px;">';
        break;
    case "E3P026AO":
        t = "G-3028",
        n = "112.260,73 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 50px;">';
        break;
    case "E3P027AO":
        t = "G-3031",
        n = "107.680,35 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 50px;">';
        break;
    case "E3P028AO":
        t = "G-3033",
        n = "418.542,87 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 50px;">';
        break;
    case "E3P029AO":
        t = "G-3032",
        n = "198.356,96 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 50px;">';
        break;
    case "E3P030AO":
        t = "G-3037",
        n = "271.369,30 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 50px;">';
        break;
    case "E3P031AO":
        t = "G-3035",
        n = "65.049,83 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 50px;">';
        break;
    case "E3P032AO":
        t = "G-3034",
        n = "77.218,38 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 50px;">';
        break;
    case "E3P033AO":
        t = "G-3036",
        n = "96.482,00 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 50px;">';
        break;
    case "E3P034AO":
        t = "G-3039",
        n = "298.865,76 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 50px;">';
        break;
    case "E3P035AO":
        t = "G-3038",
        n = "120.126,11 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 50px;">';
        break;
    case "E3P001AOE":
        t = "G-3002",
        n = "24.554,06 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 50px;">';
        break;
    case "E3P002AOE":
        t = "G-3009",
        n = "165.396,23 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 50px;">';
        break;
    case "E4P001AO":
        t = "G-4005",
        n = "1.325.010,17 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 50px;">';
        break;
    case "E4P002AO":
        t = "G-4004",
        n = "533.463,24 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 50px;">';
        break;
    case "E4P003AO":
        t = "G-4003",
        n = "442.459,63 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 50px;">';
        break;
    case "E4P004AO":
        t = "G-4002",
        n = "341.372,69 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 50px;">';
        break;
    case "E4P005AO":
        t = "G-4001",
        n = "1.085.416,70 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 50px;">';
        break;
    case "E5P001AO":
        t = "GIA",
        n = "SERBEST BÖLGE",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 50px;">';
        break;
    case "E5P028AO":
        t = "G-5002",
        n = "249.176,84 m²",
        r = '<img src="../assets/src/media/Ico-Truck.png" style="width: auto; height: 60px;">',
        i = "#de3ae0",
        o.style.backgroundColor = "rgba(222, 58, 224, 0.6)";
        break;
    case "E5P029AO":
        t = "G-5001",
        n = "351.391,47 m²",
        r = '<img src="../assets/src/media/Ico-Truck.png" style="width: auto; height: 60px;">',
        i = "#de3ae0",
        o.style.backgroundColor = "rgba(222, 58, 224, 0.6)";
        break;
    case "E5P030AO":
        t = "G-5003",
        n = "374.770,40 m²",
        r = '<img src="../assets/src/media/Ico-Truck.png" style="width: auto; height: 60px;">',
        i = "#de3ae0",
        o.style.backgroundColor = "rgba(222, 58, 224, 0.6)";
        break;
    case "E5P031AO":
        t = "G-5005",
        n = "513.763,35 m²",
        r = '<img src="../assets/src/media/Ico-Rest.png" style="width: auto; height: 60px;">',
        i = "#f20558",
        o.style.backgroundColor = "rgba(242, 5, 88, 0.6)";
        break;
    case "E5P032AO":
        t = "G-5006",
        n = "406.984,96 m²",
        r = '<img src="../assets/src/media/Ico-Sport.png" style="width: auto; height: 60px;">',
        i = "#7bab16",
        o.style.backgroundColor = "rgba(123, 171, 22, 0.6)";
        break;
    case "E5P033AO":
        t = "G-5007",
        n = "263.904,11 m²",
        r = '<img src="../assets/src/media/Ico-Exhibithion.png" style="width: auto; height: 60px;">',
        i = "#ad5dfc",
        o.style.backgroundColor = "rgba(173, 93, 252, 0.6)";
        break;
    case "E5P034AO":
        t = "G-5008",
        n = "155.032,42 m²",
        r = '<img src="../assets/src/media/Ico-Hotel.png" style="width: auto; height: 60px;">',
        i = "#733c02",
        o.style.backgroundColor = "rgba(115, 60, 2, 0.6)";
        break;
    case "E5P035AO":
        t = "G-5011",
        n = "716.035,98 m²",
        r = '<img src="../assets/src/media/Ico-Edu.png" style="width: auto; height: 60px;">',
        i = "#de355d",
        o.style.backgroundColor = "rgba(222, 53, 93, 0.6)";
        break;
    case "E5P036AO":
        t = "G-5012",
        n = "399.013,58 m²",
        r = '<img src="../assets/src/media/Ico-House.png" style="width: auto; height: 60px;">',
        i = "#f5790c",
        o.style.backgroundColor = "rgba(245, 121, 12, 0.6)";
        break;
    case "E5P037AO":
        t = "G-5010",
        n = "215.482,54 m²",
        r = '<img src="../assets/src/media/Ico-Hospital.png" style="width: auto; height: 60px;">',
        i = "#466c6e",
        o.style.backgroundColor = "rgba(70, 108, 110, 0.6)";
        break;
    case "E5P038AO":
        t = "G-5017",
        n = "212.374,08 m²",
        r = '<img src="../assets/src/media/Ico-Mosque.png" style="width: auto; height: 60px;">',
        i = "#03fc98",
        o.style.backgroundColor = "rgba(3, 252, 152, 0.6)";
        break;
    case "E5P039AO":
        t = "G-5013",
        n = "537.041,79 m²",
        r = '<img src="../assets/src/media/Ico-House.png" style="width: auto; height: 60px;">',
        i = "#f5790c",
        o.style.backgroundColor = "rgba(245, 121, 12, 0.6)";
        break;
    case "E5P040AO":
        t = "G-5016",
        n = "248.377,94 m²",
        r = '<img src="../assets/src/media/Ico-Office.png" style="width: auto; height: 60px;">',
        i = "#bab404",
        o.style.backgroundColor = "rgba(186, 180, 4, 0.6)";
        break;
    case "E5P041AO":
        t = "G-5014",
        n = "931.940,27 m²",
        r = '<img src="../assets/src/media/Ico-House.png" style="width: auto; height: 60px;">',
        i = "#f5790c",
        o.style.backgroundColor = "rgba(245, 121, 12, 0.6)";
        break;
    case "E5P042AO":
        t = "G-5015",
        n = "566.774,13 m²",
        r = '<img src="../assets/src/media/Ico-House.png" style="width: auto; height: 60px;">',
        i = "#f5790c",
        o.style.backgroundColor = "rgba(245, 121, 12, 0.6)";
        break;
    case "G-1001-1":
        t = "G-1001-1",
        n = "12.173,05 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 50px;">';
        break;
    case "G-1001-2":
        t = "G-1001-2",
        n = "6.744,01 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 60px;">';
        break;
    case "G-1001-3":
        t = "G-1001-3",
        n = "32.590,02 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 60px;">';
        break;
    case "G-1001-4":
        t = "G-1001-4",
        n = "7.032,30 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 60px;">';
        break;
    case "G-1001-5_":
        t = "G-1001-5",
        n = "12.851,25 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 60px;">';
        break;
    case "G-1002-1":
        t = "G-1002-1",
        n = "10.054,44 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 60px;">';
        break;
    case "G-1002-2":
        t = "G-1002-2",
        n = "6.542,50 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 60px;">';
        break;
    case "G-1002-3":
        t = "G-1002-3",
        n = "9.970,85 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 60px;">';
        break;
    case "G-1002-4":
        t = "G-1002-4",
        n = "9.865,32 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 60px;">';
        break;
    case "G-1002-5":
        t = "G-1002-5",
        n = "6.365,64 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 60px;">';
        break;
    case "G-1002-6":
        t = "G-1002-6",
        n = "9.901,06 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 60px;">';
        break;
    case "G-1002-7":
        t = "G-1002-7",
        n = "15.858,59 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 60px;">';
        break;
    case "G-1003-1":
        t = "G-1003-1",
        n = "9.550,07 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 60px;">';
        break;
    case "G-1003-2":
        t = "G-1003-2",
        n = "8.065,03 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 60px;">';
        break;
    case "G-1003-3":
        t = "G-1003-3",
        n = "9.908,35 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 60px;">';
        break;
    case "G-1003-4":
        t = "G-1003-4",
        n = "10.454,18 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 60px;">';
        break;
    case "G-1004-1":
        t = "G-1004-1",
        n = "15.238,47 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 60px;">';
        break;
    case "G-1004-2":
        t = "G-1004-2",
        n = "14.430,78 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 60px;">';
        break;
    case "G-1004-3":
        t = "G-1004-3",
        n = "7.612,64 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 60px;">';
        break;
    case "G-1004-4":
        t = "G-1004-4",
        n = "35.656,85 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 60px;">';
        break;
    case "G-1004-5":
        t = "G-1004-5",
        n = "7.916,72 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 60px;">';
        break;
    case "G-1005-1":
        t = "G-1005-1",
        n = "23.842,99 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 60px;">';
        break;
    case "G-1005-2":
        t = "G-1005-2",
        n = "7.233,84 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 60px;">';
        break;
    case "G-1005-3":
        t = "G-1005-3",
        n = "10.168,33 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 60px;">';
        break;
    case "G-1005-4":
        t = "G-1005-4",
        n = "9.238,49 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 60px;">';
        break;
    case "G-1005-5":
        t = "G-1005-5",
        n = "5.816,38 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 60px;">';
        break;
    case "G-1005-6":
        t = "G-1005-6",
        n = "19.207,46 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 60px;">';
        break;
    case "G-1006-1":
        t = "G-1006-1",
        n = "20.504,55 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 60px;">';
        break;
    case "G-1006-2":
        t = "G-1006-2",
        n = "13.111,47 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 60px;">';
        break;
    case "G-1006-3":
        t = "G-1006-3",
        n = "21.161,70 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 60px;">';
        break;
    case "G-1007-1":
        t = "G-1007-1",
        n = "24.234,91 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 60px;">';
        break;
    case "G-1007-2":
        t = "G-1007-2",
        n = "27.084,32 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 60px;">';
        break;
    case "G-1008-1":
        t = "G-1008-1",
        n = "20.643,17 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 60px;">';
        break;
    case "G-1008-2":
        t = "G-1008-2",
        n = "33.681,77 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 60px;">';
        break;
    case "G-1009-1":
        t = "G-1009-1",
        n = "26.123,35 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 60px;">';
        break;
    case "G-1009-2":
        t = "G-1009-2",
        n = "11.026,87 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 60px;">';
        break;
    case "G-1009-3":
        t = "G-1009-3",
        n = "5.097,87 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 60px;">';
        break;
    case "G-1009-4":
        t = "G-1009-4",
        n = "13.116,42 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 60px;">';
        break;
    case "G-1009-5":
        t = "G-1009-5",
        n = "19.102,05 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 60px;">';
        break;
    case "G-1010-1":
        t = "G-1010-1",
        n = "17.574,35 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 60px;">';
        break;
    case "G-1010-2":
        t = "G-1010-2",
        n = "24.953,95 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 60px;">';
        break;
    case "G-1010-3":
        t = "G-1010-3",
        n = "18.086,72 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 60px;">';
        break;
    case "G-1010-4":
        t = "G-1010-4",
        n = "13.686,01 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 60px;">';
        break;
    case "G-1011-1":
        t = "G-1011-1",
        n = "15.513,44 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 60px;">';
        break;
    case "G-1011-2":
        t = "G-1011-2",
        n = "18.838,30 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 60px;">';
        break;
    case "G-1011-3":
        t = "G-1011-3",
        n = "25.160,65 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 60px;">';
        break;
    case "G-1012-1":
        t = "G-1012-1",
        n = "22.583,06 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 60px;">';
        break;
    case "G-1012-2":
        t = "G-1012-2",
        n = "14.941.53 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 60px;">';
        break;
    case "G-1012-3":
        t = "G-1012-3",
        n = "8.589,15 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 60px;">';
        break;
    case "G-1012-4":
        t = "G-1012-4",
        n = "16.282,66 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 60px;">';
        break;
    case "G-1013-1":
        t = "G-1013-1",
        n = "33.348,74 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 60px;">';
        break;
    case "G-1013-2":
        t = "G-1013-2",
        n = "6.422,93 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 60px;">';
        break;
    case "G-1013-3":
        t = "G-1013-3",
        n = "8.594,29 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 60px;">';
        break;
    case "G-1013-4":
        t = "G-1013-4",
        n = "5.336,73 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 60px;">';
        break;
    case "G-1013-5":
        t = "G-1013-5",
        n = "5.200,54 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 60px;">';
        break;
    case "G-1014-1":
        t = "G-1014-1",
        n = "28.500,19 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 60px;">';
        break;
    case "G-1014-2":
        t = "G-1014-2",
        n = "22.876,51 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 60px;">';
        break;
    case "G-1014-3":
        t = "G-1014-3",
        n = "12.580,20 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 60px;">';
        break;
    case "G-1015-1":
        t = "G-1015-1",
        n = "32.030,89 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 60px;">';
        break;
    case "G-1015-2":
        t = "G-1015-2",
        n = "15.911,20 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 60px;">';
        break;
    case "G-1015-3":
        t = "G-1015-3",
        n = "31.996,88 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 60px;">';
        break;
    case "G-1015-4":
        t = "G-1015-4",
        n = "17.021,83 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 60px;">';
        break;
    case "G-1015-5":
        t = "G-1015-5",
        n = "7.458,91 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 60px;">';
        break;
    case "G-1016-1":
        t = "G-1016-1",
        n = "32.226,35 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 60px;">';
        break;
    case "G-1016-2":
        t = "G-1016-2",
        n = "6.101,75 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 60px;">';
        break;
    case "G-1016-3":
        t = "G-1016-3",
        n = "6.231,56 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 60px;">';
        break;
    case "G-1016-4":
        t = "G-1016-4",
        n = "6.165,66 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 60px;">';
        break;
    case "G-1016-5":
        t = "G-1016-5",
        n = "6.100,54 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 60px;">';
        break;
    case "G-1017-1":
        t = "G-1017-1",
        n = "16.713,61 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 60px;">';
        break;
    case "G-1017-2":
        t = "G-1017-2",
        n = "9.496,91 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 60px;">';
        break;
    case "G-1017-3":
        t = "G-1017-3",
        n = "14.756,74 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 60px;">';
        break;
    case "G-1017-4":
        t = "G-1017-4",
        n = "9.504,42 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 60px;">';
        break;
    case "G-1017-5":
        t = "G-1017-5",
        n = "9.226,94 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 60px;">';
        break;
    case "G-1017-6":
        t = "G-1017-6",
        n = "8.975,29 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 60px;">';
        break;
    case "G-1017-7":
        t = "G-1017-7",
        n = "13.571,93 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 60px;">';
        break;
    case "G-1018-1":
        t = "G-1018-1",
        n = "19.060,95 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 60px;">';
        break;
    case "G-1018-2":
        t = "G-1018-2",
        n = "10.259,53 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 60px;">';
        break;
    case "G-1018-3":
        t = "G-1018-3",
        n = "45.175,40 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 60px;">';
        break;
    case "G-1018-4":
        t = "G-1018-4",
        n = "10.083,74 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 60px;">';
        break;
    case "G-1019-1":
        t = "G-1019-1",
        n = "29.009,74 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 60px;">';
        break;
    case "G-1019-2":
        t = "G-1019-2",
        n = "6.559,32 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 60px;">';
        break;
    case "G-1019-3":
        t = "G-1019-3",
        n = "6.553,41 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 60px;">';
        break;
    case "G-1019-4":
        t = "G-1019-4",
        n = "5.178,58 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 60px;">';
        break;
    case "G-1019-5":
        t = "G-1019-5",
        n = "5.331,22 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 60px;">';
        break;
    case "G-1020-1":
        t = "G-1020-1",
        n = "26.970,72 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 60px;">';
        break;
    case "G-1020-2":
        t = "G-1020-2",
        n = "9.004,54 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 60px;">';
        break;
    case "G-1020-3":
        t = "G-1020-3",
        n = "9.431,56 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 60px;">';
        break;
    case "G-1020-4":
        t = "G-1020-4",
        n = "20.348,40 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 60px;">';
        break;
    case "G-1020-5":
        t = "G-1020-5",
        n = "9.481,94 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 60px;">';
        break;
    case "G-1020-6":
        t = "G-1020-6",
        n = "8.985.55 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 60px;">';
        break;
    case "G-1021-1":
        t = "G-1021-1",
        n = "23.979,64 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 60px;">';
        break;
    case "G-1021-2":
        t = "G-1021-2",
        n = "6.077,28 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 60px;">';
        break;
    case "G-1021-3":
        t = "G-1021-3",
        n = "10.865,73 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 60px;">';
        break;
    case "G-1021-4":
        t = "G-1021-4",
        n = "5.021,07 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 60px;">';
        break;
    case "G-1022-1":
        t = "G-1022-1",
        n = "20.689,31 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 60px;">';
        break;
    case "G-1022-2":
        t = "G-1022-2",
        n = "5.113,31 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 60px;">';
        break;
    case "G-1022-3":
        t = "G-1022-3",
        n = "9.683,22 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 60px;">';
        break;
    case "G-1022-4":
        t = "G-1022-4",
        n = "5.161,39 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 60px;">';
        break;
    case "G-1023-1":
        t = "G-1023-1",
        n = "11.006,14 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 60px;">';
        break;
    case "G-1023-2":
        t = "G-1023-2",
        n = "9.281,23 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 60px;">';
        break;
    case "G-1023-3":
        t = "G-1023-3",
        n = "5.063,15 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 60px;">';
        break;
    case "G-1023-4":
        t = "G-1023-4",
        n = "5.067,71 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 60px;">';
        break;
    case "G-1023-5":
        t = "G-1023-5",
        n = "21.621,70 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 60px;">';
        break;
    case "G-1023-6":
        t = "G-1023-6",
        n = "14.634,75 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 60px;">';
        break;
    case "G-1024-1":
        t = "G-1024-1",
        n = "13.719,44 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 60px;">';
        break;
    case "G-1024-2":
        t = "G-1024-2",
        n = "28.311,96 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 60px;">';
        break;
    case "G-1025-1":
        t = "G-1025-1",
        n = "11.878,65 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 60px;">';
        break;
    case "G-1025-2":
        t = "G-1025-2",
        n = "9.884,67 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 60px;">';
        break;
    case "G-1025-3":
        t = "G-1025-3",
        n = "11.077,07 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 60px;">';
        break;
    case "G-1025-4":
        t = "G-1025-4",
        n = "21.371,51 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 60px;">';
        break;
    case "G-1025-5":
        t = "G-1025-5",
        n = "16.812,39 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 60px;">';
        break;
    case "G-1025-6":
        t = "G-1025-6",
        n = "31.244,63 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 60px;">';
        break;
    case "G-1025-7":
        t = "G-1025-7",
        n = "14.876,93 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 60px;">';
        break;
    case "G-1026":
        t = "G-1026",
        n = "43.432,78 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 60px;">';
        break;
    case "G-1027":
        t = "G-1027",
        n = "47.763,48 m²",
        r = '<img src="../assets/src/media/Ico-Mosque.png" style="width: auto; height: 60px;">',
        i = "#00eaff",
        o.style.backgroundColor = "rgba(0, 234, 255, 0.6)";
        break;
    case "G-1028":
        t = "G-1028",
        n = "48.313,00 m²",
        r = '<img src="../assets/src/media/Ico-Office.png" style="width: auto; height: 60px;">',
        i = "#85051b",
        o.style.backgroundColor = "rgba(133, 5, 27, 0.6)";
        break;
    case "G-1029":
        t = "G-1029",
        n = "130.637,81 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 60px;">';
        break;
    case "G-1030":
        t = "G-1030",
        n = "34.686,62 m²",
        r = '<img src="../assets/src/media/Ico-Water.png" style="width: auto; height: 50px;">',
        i = "#7732a8",
        o.style.backgroundColor = "rgba(119, 50, 168, 0.6)";
        break;
    case "G-1031-1":
        t = "G-1031-1",
        n = "15.962,56 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 60px;">';
        break;
    case "G-1031-2":
        t = "G-1031-2",
        n = "8.275,13 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 60px;">';
        break;
    case "G-1031-3":
        t = "G-1031-3",
        n = "13.439,01 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 60px;">';
        break;
    case "G-1031-4":
        t = "G-1031-4",
        n = "24.305,71 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 60px;">';
        break;
    case "G-1031-5":
        t = "G-1031-5",
        n = "13.941,51 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 60px;">';
        break;
    case "G-1031-6":
        t = "G-1031-6",
        n = "28.452,26 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 60px;">';
        break;
    case "G-1032":
        t = "G-1032",
        n = "47.433,28 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 60px;">';
        break;
    case "G-1033-1":
        t = "G-1033-1",
        n = "13.059,08 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 60px;">';
        break;
    case "G-1033-2":
        t = "G-1033-2",
        n = "20.124,70 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 60px;">';
        break;
    case "G-1033-3":
        t = "G-1033-3",
        n = "23.573,16 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 60px;">';
        break;
    case "G-1033-4":
        t = "G-1033-4",
        n = "42.325,00 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 60px;">';
        break;
    case "G-1033-5":
        t = "G-1033-5",
        n = "25.292,60 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 60px;">';
        break;
    case "G-1033-6":
        t = "G-1033-6",
        n = "14.715,79 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 60px;">';
        break;
    case "G-1033-7":
        t = "G-1033-7",
        n = "14.101,06 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 60px;">';
        break;
    case "G-1033-8":
        t = "G-1033-8",
        n = "19.463,25 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 60px;">';
        break;
    case "G-1034-1":
        t = "G-1034-1",
        n = "18.184,75 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 60px;">';
        break;
    case "G-1034-2":
        t = "G-1034-2",
        n = "18.741,59 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 60px;">';
        break;
    case "G-1034-3":
        t = "G-1034-3",
        n = "19.113,15 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 60px;">';
        break;
    case "G-1034-4":
        t = "G-1034-4",
        n = "19.771,83 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 60px;">';
        break;
    case "G-1035-1":
        t = "G-1035-1",
        n = "16.330,90 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 60px;">';
        break;
    case "G-1035-2":
        t = "G-1035-2",
        n = "16.118,83 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 60px;">';
        break;
    case "G-1035-3":
        t = "G-1035-3",
        n = "6.873,53 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 60px;">';
        break;
    case "G-1035-4":
        t = "G-1035-4",
        n = "10.715,90 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 60px;">';
        break;
    case "G-1035-6":
        t = "G-1035-6",
        n = "6.128.71 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 60px;">';
        break;
    case "G-1036-1":
        t = "G-1036-1",
        n = "10.755,64 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 60px;">';
        break;
    case "G-1036-2":
        t = "G-1036-2",
        n = "14.429,43 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 60px;">';
        break;
    case "G-1036-3":
        t = "G-1036-3",
        n = "6.190,44 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 60px;">';
        break;
    case "G-1036-4":
        t = "G-1036-4",
        n = "7.519,77 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 60px;">';
        break;
    case "G-1036-5":
        t = "G-1036-5",
        n = "7.775,29 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 60px;">';
        break;
    case "G-1036-6":
        t = "G-1036-6",
        n = "5.506,60 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 60px;">';
        break;
    case "G-1037-1":
        t = "G-1037-1",
        n = "16.148,01 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 60px;">';
        break;
    case "G-1037-2":
        t = "G-1037-2",
        n = "13.509,35 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 60px;">';
        break;
    case "G-1037-3":
        t = "G-1037-3",
        n = "10.810,33 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 60px;">';
        break;
    case "G-1037-4":
        t = "G-1037-4",
        n = "14.951,73 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 60px;">';
        break;
    case "G-1038-1":
        t = "G-1038-1",
        n = "15.680,10 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 60px;">';
        break;
    case "G-1038-2":
        t = "G-1038-2",
        n = "14.325,91 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 60px;">';
        break;
    case "G-1038-3":
        t = "G-1038-3",
        n = "17.503,98 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 60px;">';
        break;
    case "G-1038-4":
        t = "G-1038-4",
        n = "34.248,43 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 60px;">';
        break;
    case "G-1038-5":
        t = "G-1038-5",
        n = "30.848,63 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 60px;">';
        break;
    case "G-1038-6":
        t = "G-1038-6",
        n = "18.552,36 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 60px;">';
        break;
    case "G-1038-7":
        t = "G-1038-7",
        n = "18.332,69 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 60px;">';
        break;
    case "G-1038-8":
        t = "G-1038-8",
        n = "26.133,88 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 60px;">';
        break;
    case "G-1039-1":
        t = "G-1039-1",
        n = "18.332,69 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 60px;">';
        break;
    case "G-1039-2":
        t = "G-1039-2",
        n = "12.478,82 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 60px;">';
        break;
    case "G-1039-3":
        t = "G-1039-3",
        n = "10.439,91 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 60px;">';
        break;
    case "G-1039-4":
        t = "G-1039-4",
        n = "6.566,49 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 60px;">';
        break;
    case "G-1039-5":
        t = "G-1039-5",
        n = "6.544,36 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 60px;">';
        break;
    case "G-1039-6":
        t = "G-1039-6",
        n = "13.783,18 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 60px;">';
        break;
    case "G-1039-7":
        t = "G-1039-7",
        n = "11.429,50 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 60px;">';
        break;
    case "G-1039-8":
        t = "G-1039-8",
        n = "22.061,67 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 60px;">';
        break;
    case "G-1040-1":
        t = "G-1040-1",
        n = "17.050,20 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 60px;">';
        break;
    case "G-1040-2":
        t = "G-1040-2",
        n = "18.951,97 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 60px;">';
        break;
    case "G-1040-3":
        t = "G-1040-3",
        n = "9.442,82 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 60px;">';
        break;
    case "G-1040-4":
        t = "G-1040-4",
        n = "9.231,92 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 60px;">';
        break;
    case "G-1040-5":
        t = "G-1040-5",
        n = "18.367,90 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 60px;">';
        break;
    case "G-1040-6":
        t = "G-1040-6",
        n = "17.407,75 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 60px;">';
        break;
    case "G-1040-7":
        t = "G-1040-7",
        n = "8.717,94 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 60px;">';
        break;
    case "G-1040-8":
        t = "G-1040-8",
        n = "9.155,79 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 60px;">';
        break;
    case "G-1041-1":
        t = "G-1041-1",
        n = "17.398,82 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 60px;">';
        break;
    case "G-1041-2":
        t = "G-1041-2",
        n = "20.337,01 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 60px;">';
        break;
    case "G-1041-3":
        t = "G-1041-3",
        n = "9.132.95 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 60px;">';
        break;
    case "G-1041-4":
        t = "G-1041-4",
        n = "9.301,24 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 60px;">';
        break;
    case "G-1041-5":
        t = "G-1041-5",
        n = "17.693,96 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 60px;">';
        break;
    case "G-1041-6":
        t = "G-1041-6",
        n = "17.055,57 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 60px;">';
        break;
    case "G-1041-7":
        t = "G-1041-7",
        n = "8.562,72 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 60px;">';
        break;
    case "G-1041-8":
        t = "G-1041-8",
        n = "8.396,04 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 60px;">';
        break;
    case "G-1042-1":
        t = "G-1042-1",
        n = "18.312,19 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 60px;">';
        break;
    case "G-1042-2":
        t = "G-1042-2",
        n = "7.312,51 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 60px;">';
        break;
    case "G-1042-3":
        t = "G-1042-3",
        n = "7.974,70 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 60px;">';
        break;
    case "G-1042-4":
        t = "G-1042-4",
        n = "21.298,13 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 60px;">';
        break;
    case "G-1043-1":
        t = "G-1043-1",
        n = "16.608,79 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 60px;">';
        break;
    case "G-1043-2":
        t = "G-1043-2",
        n = "16.659,93 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 60px;">';
        break;
    case "G-1043-3":
        t = "G-1043-3",
        n = "39.904,00 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 60px;">';
        break;
    case "G-1043-4":
        t = "G-1043-4",
        n = "26.800,35 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 60px;">';
        break;
    case "G-1043-5":
        t = "G-1043-5",
        n = "26.798,48 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 60px;">';
        break;
    case "G-1043-6":
        t = "G-1043-6",
        n = "48.908,98 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 60px;">';
        break;
    case "G-1043-7":
        t = "G-1043-7",
        n = "22.693,16 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 60px;">';
        break;
    case "G-1043-8":
        t = "G-1043-8",
        n = "27.671,94 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 60px;">';
        break;
    case "G-1044-1":
        t = "G-1044-1",
        n = "23.610,18 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 60px;">';
        break;
    case "G-1044-2":
        t = "G-1044-2",
        n = "10.204,29 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 60px;">';
        break;
    case "G-1044-3":
        t = "G-1044-3",
        n = "10.360,71 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 60px;">';
        break;
    case "G-1044-4":
        t = "G-1044-4",
        n = "9.693,79 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 60px;">';
        break;
    case "G-1044-5":
        t = "G-1044-5",
        n = "16.729,19 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 60px;">';
        break;
    case "G-1044-6":
        t = "G-1044-6",
        n = "14.629,53 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 60px;">';
        break;
    case "G-1044-7":
        t = "G-1044-7",
        n = "13.718,59 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 60px;">';
        break;
    case "G-1044-8":
        t = "G-1044-8",
        n = "32.257,46 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 60px;">';
        break;
    case "G-1045-1":
        t = "G-1045-1",
        n = "14.186,28 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 60px;">';
        break;
    case "G-1045-2":
        t = "G-1045-2",
        n = "25.586,14 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 60px;">';
        break;
    case "G-1045-3":
        t = "G-1045-3",
        n = "8.987,00 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 60px;">';
        break;
    case "G-1045-4":
        t = "G-1045-4",
        n = "6.799,99 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 60px;">';
        break;
    case "G-1045-5":
        t = "G-1045-5",
        n = "20.434,63 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 60px;">';
        break;
    case "G-1045-6":
        t = "G-1045-6",
        n = "14.394,67 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 60px;">';
        break;
    case "G-1045-7":
        t = "G-1045-7",
        n = "13.351,07 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 60px;">';
        break;
    case "G-1046-1":
        t = "G-1046-1",
        n = "16.335,79 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 60px;">';
        break;
    case "G-1046-2":
        t = "G-1046-2",
        n = "10.509,86 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 60px;">';
        break;
    case "G-1046-3":
        t = "G-1046-3",
        n = "12.764,27 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 60px;">';
        break;
    case "G-1047-1":
        t = "G-1047-1",
        n = "13.282,66 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 60px;">';
        break;
    case "G-1047-2":
        t = "G-1047-2",
        n = "11.671,28 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 60px;">';
        break;
    case "G-1048":
        t = "G-1048",
        n = "308,038,69 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 60px;">';
        break;
    case "G-1049":
        t = "G-1049",
        n = "260.546,23 m²",
        r = '<img src="../assets/src/media/Ico-Factory.png" style="width: auto; height: 60px;">';
        break;
    default:
        document.getElementById("showDetailsOnScreen").style.display = "none";
        return
    }
    const l = document.getElementById("showDetailsOnScreen");
    l.innerHTML = `
        <div>
            <div style="display: flex; justify-content: space-between; align-items: center;">
                <div style="text-align: right; right: 0; ">
                    <span style="font-size: 20pt; font-weight: regular;">${t}</span><br>
                    <span style="font-size: 11pt; ">${n}</span>
                </div>
                <div style="text-align: center; display: flex; align-items: center; box-shadow: -5px 0px 10px rgba(0, 0, 0, 0.6);">
                    <span style="font-size: 40pt; padding: 10%; background-color: ${i}; width: auto; height: 100%; display: flex; align-items: center;">${r}</span>
                </div>
            
            </div>
        </div>
    `
}
  , vo = e=>{
    if (e.isMesh) {
        const t = e.name
          , n = ["E1P028AO", "E3P010AO", "E3P012AO", "E3P013AO", "E3P018AO", "E3P022AO", "G-1028", "E3P007AO"]
          , r = ["E1P001AO", "E1P002AO", "E1P003AO", "E1P004AO", "E1P005AO", "E1P006AO", "E1P007AO", "E1P008AO", "E1P009AO", "E1P010AO", "E1P011AO", "E1P012AO", "E1P013AO", "E1P014AO", "E1P015AO", "E1P016AO", "E1P017AO", "E1P018AO", "E1P019AO", "E1P020AO", "E1P021AO", "E1P022AO", "E1P023AO", "E1P024AO", "E1P025AO", "E1P026AO", "E1P029AO", "E1P031AO", "E1P032AO", "E1P033AO", "E1P034AO", "E1P035AO", "E1P036AO", "E1P037AO", "E1P038AO", "E1P039AO", "E1P040AO", "E1P041AO", "E1P042AO", "E1P043AO", "E1P044AO", "E1P045AO", "E1P046AO", "E1P047AO", "E1P048AO", "E1P049AO", "E2P001AO", "E2P002AO", "E2P003AO", "E2P004AO", "E2P005AO", "E2P006AO", "E2P007AO", "E2P008AO", "E2P009AO", "E2P010AO", "E2P011AO", "E2P012AO", "E2P013AO", "E2P014AO", "E2P015AO", "E2P016AO", "E2P001AO", "E2P017AO", "E2P018AO", "E2P019AO", "E2P020AO", "E2P021AO", "E2P022AO", "E2P023AO", "E2P024AO", "E2P025AO", "E2P026AO", "E2P027AO", "E2P028AO", "E2P029AO", "E2P030AO", "E2P031AO", "E2P032AO", "E2P033AO", "E3P001AO", "E3P002AO", "E3P003AO", "E3P004AO", "E3P005AO", "E3P001AOE", "E3P002AOE", "E3P008AO", "E3P009AO", "E3P011AO", "E3P014AO", "E3P015AO", "E3P016AO", "E3P017AO", "E3P020AO", "E3P021AO", "E3P023AO", "E3P024AO", "E3P025AO", "E3P026AO", "E3P027AO", "E3P028AO", "E3P029AO", "E3P030AO", "E3P031AO", "E3P032AO", "E3P033AO", "E3P034AO", "E3P035AO", "E4P001AO", "E4P002AO", "E4P003AO", "E4P004AO", "E4P005AO", "E5P001AO", "G-1001-1", "G-1001-2", "G-1001-3", "G-1001-4", "G-1001-5_", "G-1002-1", "G-1002-2", "G-1002-3", "G-1002-4", "G-1002-5", "G-1002-6", "G-1002-7", "G-1003-1", "G-1003-2", "G-1003-3", "G-1003-4", "G-1004-1", "G-1004-2", "G-1004-3", "G-1004-4", "G-1004-5", "G-1005-1", "G-1005-2", "G-1005-3", "G-1005-4", "G-1005-5", "G-1005-6", "G-1006-1", "G-1006-2", "G-1006-3", "G-1007-1", "G-1007-2", "G-1008-1", "G-1008-2", "G-1009-1", "G-1009-2", "G-1009-3", "G-1009-4", "G-1009-5", "G-1010-1", "G-1010-2", "G-1010-3", "G-1010-4", "G-1011-1", "G-1011-2", "G-1011-3", "G-1012-1", "G-1012-2", "G-1012-3", "G-1012-4", "G-1013-1", "G-1013-2", "G-1013-3", "G-1013-4", "G-1013-5", "G-1014-1", "G-1014-2", "G-1014-3", "G-1015-1", "G-1015-2", "G-1015-3", "G-1015-4", "G-1015-5", "G-1016-1", "G-1016-2", "G-1016-3", "G-1016-4", "G-1016-5", "G-1017-1", "G-1017-2", "G-1017-3", "G-1017-4", "G-1017-5", "G-1017-6", "G-1017-7", "G-1018-1", "G-1018-2", "G-1018-3", "G-1018-4", "G-1019-1", "G-1019-2", "G-1019-3", "G-1019-4", "G-1019-5", "G-1020-1", "G-1020-2", "G-1020-3", "G-1020-4", "G-1020-5", "G-1020-6", "G-1021-1", "G-1021-2", "G-1021-3", "G-1021-4", "G-1022-1", "G-1022-2", "G-1022-3", "G-1022-4", "G-1023-1", "G-1023-2", "G-1023-3", "G-1023-4", "G-1023-5", "G-1023-6", "G-1024-1", "G-1024-2", "G-1025-1", "G-1025-2", "G-1025-3", "G-1025-4", "G-1025-5", "G-1025-6", "G-1025-7", "G-1026", "G-1029", "G-1031-1", "G-1031-2", "G-1031-3", "G-1031-4", "G-1031-5", "G-1031-6", "G-1032", "G-1033-1", "G-1033-2", "G-1033-3", "G-1033-4", "G-1033-5", "G-1033-6", "G-1033-7", "G-1033-8", "G-1033-9", "G-1034-1", "G-1034-2", "G-1034-3", "G-1034-4", "G-1035-1", "G-1035-2", "G-1035-3", "G-1035-4", "G-1035-5", "G-1035-6", "G-1036-1", "G-1036-2", "G-1036-3", "G-1036-4", "G-1036-5", "G-1036-6", "G-1037-1", "G-1037-2", "G-1037-3", "G-1037-4", "G-1038-1", "G-1038-2", "G-1038-3", "G-1038-4", "G-1038-5", "G-1038-6", "G-1038-7", "G-1038-8", "G-1039-1", "G-1039-2", "G-1039-3", "G-1039-4", "G-1039-5", "G-1039-6", "G-1039-7", "G-1039-8", "G-1040-1", "G-1040-2", "G-1040-3", "G-1040-4", "G-1040-5", "G-1040-6", "G-1040-7", "G-1040-8", "G-1041-1", "G-1041-2", "G-1041-3", "G-1041-4", "G-1041-5", "G-1041-6", "G-1041-7", "G-1041-8", "G-1042-1", "G-1042-2", "G-1042-3", "G-1042-4", "G-1043-1", "G-1043-2", "G-1043-3", "G-1043-4", "G-1043-5", "G-1043-6", "G-1043-7", "G-1043-8", "G-1044-1", "G-1044-2", "G-1044-3", "G-1044-4", "G-1044-5", "G-1044-6", "G-1044-7", "G-1044-8", "G-1045-1", "G-1045-2", "G-1045-3", "G-1045-4", "G-1045-5", "G-1045-6", "G-1045-7", "G-1046-1", "G-1046-2", "G-1046-3", "G-1047-1", "G-1047-2", "G-1048", "G-1049"]
          , i = ["E1P001PO", "E2P001PO", "E3P001PO", "E5P000PO"]
          , o = ["E1P027AO", "E5P038AO", "G-1027"]
          , l = ["G0N001PO"]
          , a = ["E1P030AO", "E3P006AO", "E3P019AO", "G-1030"]
          , s = ["E5P036AO", "E5P039AO", "E5P041AO", "E5P042AO"]
          , p = ["E5P040AO"]
          , g = ["E5P028AO", "E5P029AO", "E5P030AO"]
          , h = ["E5P031AO"]
          , m = ["E5P032AO"]
          , v = ["E5P034AO"]
          , E = ["E5P033AO"]
          , k = ["E5P035AO"]
          , L = ["E5P037AO"];
        let d;
        n.includes(t) ? d = 16711680 : r.includes(t) ? d = 5092607 : o.includes(t) ? d = 65509 : i.includes(t) ? d = 4622906 : l.includes(t) ? d = 3684408 : a.includes(t) ? d = 7811752 : s.includes(t) ? d = 16425815 : p.includes(t) ? d = 15919621 : g.includes(t) ? d = 15832818 : h.includes(t) ? d = 15861080 : m.includes(t) ? d = 13038946 : v.includes(t) ? d = 7552002 : E.includes(t) ? d = 11361788 : k.includes(t) ? d = 14562653 : L.includes(t) ? d = 10216936 : d = 16777215,
        e.userData.originalMaterial || (e.userData.originalMaterial = e.material.clone()),
        e.userData.originalMaterial.color.set(d),
        e.material = e.userData.originalMaterial
    }
}
;
class Qt {
    constructor() {
        this.loader = new g0,
        this.interactableModels = []
    }
    loadModel(t, n) {
        this.loader.load(t, r=>{
            r.traverse(i=>{
                i.isMesh && vo(i)
            }
            ),
            n.add(r),
            r.scale.set(.32, .32, .32),
            r.position.set(70, -100, 60),
            n.add(r),
            r.scale.set(.32, .32, .32),
            r.position.set(70, -100, 60),
            t !== "../assets/src/model/OTHER_MODELS_FBX/GIA_ROAD.fbx" && t !== "../assets/src/model/OTHER_MODELS_FBX/GIA_SIGN.fbx" && t !== "../assets/src/model/STAGE_ONE_FBX/STAGE_ONE_GREEN.fbx" && t !== "../assets/src/model/STAGE_ONE_FBX/STAGE_ONE_OTHERS.fbx" && t !== "../assets/src/model/STAGE_TWO_FBX/STAGE_TWO_PASSIVE.fbx" && t !== "../assets/src/model/STAGE_TWO_FBX/STAGE_TWO_GREEN.fbx" && t !== "../assets/src/model/STAGE_THREE_FBX/STAGE_THREE_GREEN.fbx" && t !== "../assets/src/model/STAGE_THREE_FBX/STAGE_THREE_PASSIVE.fbx" && t !== "../assets/src/model/STAGE_FOUR_FBX/STAGE_FOUR_PASSIVE.fbx" && t !== "../assets/src/model/STAGE_FIVE_FBX/STAGE_FIVE_PASSIVE.fbx" && t !== "../assets/src/model/STAGE_FIVE_FBX/STAGE_FIVE_GREEN.fbx" && this.interactableModels.push(r)
        }
        , function(r) {
            console.log(r.loaded / r.total * 100 + "% loaded")
        }, function(r) {
            console.error("Failed to load FBX model:", r)
        })
    }
    addRaycastListeners(t, n, r) {
        const i = new y0
          , o = new Ae
          , l = this.interactableModels;
        let a = null;
        const s = document.getElementById("footer")
          , p = h=>{
            const m = r.getBoundingClientRect();
            o.x = (h.clientX - m.left) / m.width * 2 - 1,
            o.y = -((h.clientY - m.top) / m.height) * 2 + 1,
            i.setFromCamera(o, n);
            const v = i.intersectObjects(l, !0);
            v.length > 0 ? (s.textContent = v[0].object.name,
            a !== v[0].object && (a && vo(a),
            a = v[0].object,
            a.material = new v0({
                color: 11064048
            }),
            r.style.cursor = "pointer",
            document.getElementById("showDetailsOnScreen").style.display = "none")) : (s.textContent = "GIA_OOP_WebGL_Version_0.1.1",
            document.getElementById("showDetailsOnScreen").style.display = "none",
            a && v.length === 0 && (vo(a),
            a = null),
            r.style.cursor = "auto")
        }
          , g = h=>{
            const m = r.getBoundingClientRect();
            o.x = (h.clientX - m.left) / m.width * 2 - 1,
            o.y = -((h.clientY - m.top) / m.height) * 2 + 1,
            i.setFromCamera(o, n);
            const v = i.intersectObjects(l, !0);
            if (v.length > 0) {
                const E = v[0].object.name;
                Y1(E),
                document.getElementById("showDetailsOnScreen").style.display = "block"
            }
        }
        ;
        return r.addEventListener("click", g),
        r.addEventListener("mousemove", p),
        ()=>{
            r.removeEventListener("mousemove", p),
            r.removeEventListener("click", g)
        }
    }
}
class K1 {
    constructor() {
        this.models = ["../assets/src/model/STAGE_ONE_FBX/STAGE_ONE_ACTIVE.fbx", "../assets/src/model/STAGE_ONE_FBX/STAGE_ONE_OTHERS.fbx", "../assets/src/model/STAGE_ONE_FBX/STAGE_ONE_GREEN.fbx", "../assets/src/model/OTHER_MODELS_FBX/GIA_ROAD.fbx"],
        this.modelLoader = new Qt
    }
    loadModels(t) {
        return this.models
    }
}
class Z1 {
    constructor() {
        this.models = ["../assets/src/model/STAGE_TWO_FBX/STAGE_TWO_ACTIVE.fbx", "../assets/src/model/STAGE_TWO_FBX/STAGE_TWO_PASSIVE.fbx", "../assets/src/model/STAGE_TWO_FBX/STAGE_TWO_GREEN.fbx", "../assets/src/model/OTHER_MODELS_FBX/GIA_ROAD.fbx"],
        this.modelLoader = new Qt
    }
    loadModels(t) {
        return this.models
    }
}
class J1 {
    constructor() {
        this.models = ["../assets/src/model/STAGE_THREE_FBX/STAGE_THREE_ACTIVE.fbx", "../assets/src/model/STAGE_THREE_FBX/STAGE_THREE_PASSIVE.fbx", "../assets/src/model/STAGE_THREE_FBX/STAGE_THREE_GREEN.fbx", "../assets/src/model/OTHER_MODELS_FBX/GIA_ROAD.fbx"],
        this.modelLoader = new Qt
    }
    loadModels(t) {
        return this.models
    }
}
class q1 {
    constructor() {
        this.models = ["../assets/src/model/STAGE_FOUR_FBX/STAGE_FOUR_ACTIVE.fbx", "../assets/src/model/STAGE_FOUR_FBX/STAGE_FOUR_PASSIVE.fbx", "../assets/src/model/OTHER_MODELS_FBX/GIA_ROAD.fbx"],
        this.modelLoader = new Qt
    }
    loadModels(t) {
        return this.models
    }
}
class ep {
    constructor() {
        this.models = ["../assets/src/model/STAGE_FIVE_FBX/STAGE_FIVE_PASSIVE.fbx", "../assets/src/model/STAGE_FIVE_FBX/STAGE_FIVE_ACTIVE.fbx", "../assets/src/model/STAGE_FIVE_FBX/STAGE_FIVE_GREEN.fbx", "../assets/src/model/OTHER_MODELS_FBX/GIA_ROAD.fbx"],
        this.modelLoader = new Qt
    }
    loadModels(t) {
        return this.models
    }
}
class tp {
    constructor() {
        this.models = ["../assets/src/model/STG_1_PARTED/STAGE_ONE_PARTED_ACTIVE.fbx", "../assets/src/model/STAGE_ONE_FBX/STAGE_ONE_OTHERS.fbx", "../assets/src/model/STAGE_ONE_FBX/STAGE_ONE_GREEN.fbx", "../assets/src/model/OTHER_MODELS_FBX/GIA_ROAD.fbx"],
        this.modelLoader = new Qt
    }
    loadModels(t) {
        return this.models
    }
}
function np() {
    const [e,t] = tr.useState("stage1");
    tr.useEffect(()=>{
        const r = new Q1("mapViewer");
        r.initialize(),
        r.animate();
        let i;
        e === "stage1" ? i = new K1 : e === "stage2" ? i = new Z1 : e === "stage3" ? i = new J1 : e === "stage4" ? i = new q1 : e === "stage5" ? i = new ep : e === "stage6" && (i = new tp);
        const o = i.loadModels()
          , l = new Qt;
        let a = "ETAP 1";
        e === "stage1" ? a = "STAGE 1" : e === "stage2" ? a = "EXPANSION 1" : e === "stage3" ? a = "EXPANSION 2" : e === "stage4" ? a = "EXPANSION 3" : e === "stage5" ? a = "EXPANSION 4" : e === "stage6" && (a = "PRELIMINARY PARCELIZATION PLAN");
        const s = document.getElementById("stageName");
        s && (s.textContent = a),
        o.forEach(h=>{
            l.loadModel(h, r.scene)
        }
        );
        const p = document.getElementById("mapViewer")
          , g = l.addRaycastListeners(r.scene, r.camera, p);
        return ()=>{
            g()
        }
    }
    , [e]);
    const n = r=>{
        t(r.target.value)
    }
    ;
    return ae.jsxs("div", {
        children: [ae.jsx("canvas", {
            id: "mapViewer"
        }), ae.jsx("div", {
            children: ae.jsxs("select", {
                id: "stageChanger",
                value: e,
                onChange: n,
                children: [
                    ae.jsx("option", {
                        value: "stage1",
                        children: "STAGE 1"
                    }),
                    ae.jsx("option", {
                        value: "stage2",
                        children: "EXPANSION 1"
                    }),
                    ae.jsx("option", {
                        value: "stage3",
                        children: "EXPANSION 2"
                    }),
                    ae.jsx("option", {
                        value: "stage4",
                        children: "EXPANSION 3"
                    }),
                    ae.jsx("option", {
                        value: "stage5",
                        children: "EXPANSION 4"
                    }),
                    ae.jsx("option", {
                        value: "stage6",
                        children: "PRELIMINARY PARCELIZATION PLAN"
                    })
                ]
                
            })
        }), ae.jsx("div", {
            id: "logo",
            style: {
                position: "absolute",
                width: "10%",
                height: "10%",
                top: "2%",
                left: "5%"
            },
            children: ae.jsx("a", {
                href: "../en.html",
                children: ae.jsx("img", {
                    src: "../assets/Logo-CzcIiDrb.png",
                    alt: "Logo",
                    style: {
                        position: "absolute",
                        width: "auto",
                        height: "10vh"
                    }
                })
            })
        }), ae.jsx("div", {
            id: "stageName",
            children: "STAGE 1"
        })]
    })
}
wo.createRoot(document.getElementById("root")).render(ae.jsx(R0.StrictMode, {
    children: ae.jsx(np, {})
}));
