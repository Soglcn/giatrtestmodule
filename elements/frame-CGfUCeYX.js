/* empty css              */
(function() {
    const e = document.createElement("link").relList;
    if (e && e.supports && e.supports("modulepreload"))
        return;
    for (const r of document.querySelectorAll('link[rel="modulepreload"]'))
        n(r);
    new MutationObserver(r=>{
        for (const s of r)
            if (s.type === "childList")
                for (const a of s.addedNodes)
                    a.tagName === "LINK" && a.rel === "modulepreload" && n(a)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function t(r) {
        const s = {};
        return r.integrity && (s.integrity = r.integrity),
        r.referrerPolicy && (s.referrerPolicy = r.referrerPolicy),
        r.crossOrigin === "use-credentials" ? s.credentials = "include" : r.crossOrigin === "anonymous" ? s.credentials = "omit" : s.credentials = "same-origin",
        s
    }
    function n(r) {
        if (r.ep)
            return;
        r.ep = !0;
        const s = t(r);
        fetch(r.href, s)
    }
}
)();
/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
const ma = "164"
  , Dc = 0
  , qa = 1
  , Uc = 2
  , Ol = 1
  , Nc = 2
  , gn = 3
  , Un = 0
  , It = 1
  , _n = 2
  , In = 0
  , wi = 1
  , Ya = 2
  , Ka = 3
  , Za = 4
  , Fc = 5
  , $n = 100
  , Oc = 101
  , Bc = 102
  , zc = 103
  , Vc = 104
  , kc = 200
  , Hc = 201
  , Gc = 202
  , Wc = 203
  , aa = 204
  , oa = 205
  , Xc = 206
  , qc = 207
  , Yc = 208
  , Kc = 209
  , Zc = 210
  , $c = 211
  , jc = 212
  , Jc = 213
  , Qc = 214
  , eh = 0
  , th = 1
  , nh = 2
  , qr = 3
  , ih = 4
  , rh = 5
  , sh = 6
  , ah = 7
  , is = 0
  , oh = 1
  , lh = 2
  , Dn = 0
  , ch = 1
  , hh = 2
  , uh = 3
  , fh = 4
  , dh = 5
  , ph = 6
  , mh = 7
  , $a = "attached"
  , gh = "detached"
  , Bl = 300
  , Pi = 301
  , Li = 302
  , Yr = 303
  , la = 304
  , rs = 306
  , rr = 1e3
  , vn = 1001
  , ca = 1002
  , Lt = 1003
  , _h = 1004
  , gr = 1005
  , qt = 1006
  , vs = 1007
  , Jn = 1008
  , Nn = 1009
  , vh = 1010
  , xh = 1011
  , zl = 1012
  , Vl = 1013
  , Ii = 1014
  , xn = 1015
  , ss = 1016
  , kl = 1017
  , Hl = 1018
  , fr = 1020
  , Mh = 35902
  , yh = 1021
  , Sh = 1022
  , Yt = 1023
  , Eh = 1024
  , Th = 1025
  , Ri = 1026
  , sr = 1027
  , Ah = 1028
  , Gl = 1029
  , bh = 1030
  , Wl = 1031
  , Xl = 1033
  , xs = 33776
  , Ms = 33777
  , ys = 33778
  , Ss = 33779
  , ja = 35840
  , Ja = 35841
  , Qa = 35842
  , eo = 35843
  , to = 36196
  , no = 37492
  , io = 37496
  , ro = 37808
  , so = 37809
  , ao = 37810
  , oo = 37811
  , lo = 37812
  , co = 37813
  , ho = 37814
  , uo = 37815
  , fo = 37816
  , po = 37817
  , mo = 37818
  , go = 37819
  , _o = 37820
  , vo = 37821
  , Es = 36492
  , xo = 36494
  , Mo = 36495
  , wh = 36283
  , yo = 36284
  , So = 36285
  , Eo = 36286
  , Kr = 2300
  , Zr = 2301
  , Ts = 2302
  , To = 2400
  , Ao = 2401
  , bo = 2402
  , Rh = 2500
  , Ch = 3200
  , Ph = 3201
  , as = 0
  , Lh = 1
  , Ln = ""
  , Pt = "srgb"
  , On = "srgb-linear"
  , ga = "display-p3"
  , os = "display-p3-linear"
  , $r = "linear"
  , je = "srgb"
  , jr = "rec709"
  , Jr = "p3"
  , ri = 7680
  , wo = 519
  , Ih = 512
  , Dh = 513
  , Uh = 514
  , ql = 515
  , Nh = 516
  , Fh = 517
  , Oh = 518
  , Bh = 519
  , Ro = 35044
  , Co = "300 es"
  , Mn = 2e3
  , Qr = 2001;
class Ni {
    addEventListener(e, t) {
        this._listeners === void 0 && (this._listeners = {});
        const n = this._listeners;
        n[e] === void 0 && (n[e] = []),
        n[e].indexOf(t) === -1 && n[e].push(t)
    }
    hasEventListener(e, t) {
        if (this._listeners === void 0)
            return !1;
        const n = this._listeners;
        return n[e] !== void 0 && n[e].indexOf(t) !== -1
    }
    removeEventListener(e, t) {
        if (this._listeners === void 0)
            return;
        const r = this._listeners[e];
        if (r !== void 0) {
            const s = r.indexOf(t);
            s !== -1 && r.splice(s, 1)
        }
    }
    dispatchEvent(e) {
        if (this._listeners === void 0)
            return;
        const n = this._listeners[e.type];
        if (n !== void 0) {
            e.target = this;
            const r = n.slice(0);
            for (let s = 0, a = r.length; s < a; s++)
                r[s].call(this, e);
            e.target = null
        }
    }
}
const Mt = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "0a", "0b", "0c", "0d", "0e", "0f", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "1a", "1b", "1c", "1d", "1e", "1f", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "2a", "2b", "2c", "2d", "2e", "2f", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "3a", "3b", "3c", "3d", "3e", "3f", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "4a", "4b", "4c", "4d", "4e", "4f", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "5a", "5b", "5c", "5d", "5e", "5f", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "6a", "6b", "6c", "6d", "6e", "6f", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "7a", "7b", "7c", "7d", "7e", "7f", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "8a", "8b", "8c", "8d", "8e", "8f", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "9a", "9b", "9c", "9d", "9e", "9f", "a0", "a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "aa", "ab", "ac", "ad", "ae", "af", "b0", "b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "ba", "bb", "bc", "bd", "be", "bf", "c0", "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "ca", "cb", "cc", "cd", "ce", "cf", "d0", "d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8", "d9", "da", "db", "dc", "dd", "de", "df", "e0", "e1", "e2", "e3", "e4", "e5", "e6", "e7", "e8", "e9", "ea", "eb", "ec", "ed", "ee", "ef", "f0", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "fa", "fb", "fc", "fd", "fe", "ff"];
let Po = 1234567;
const tr = Math.PI / 180
  , Di = 180 / Math.PI;
function Bn() {
    const i = Math.random() * 4294967295 | 0
      , e = Math.random() * 4294967295 | 0
      , t = Math.random() * 4294967295 | 0
      , n = Math.random() * 4294967295 | 0;
    return (Mt[i & 255] + Mt[i >> 8 & 255] + Mt[i >> 16 & 255] + Mt[i >> 24 & 255] + "-" + Mt[e & 255] + Mt[e >> 8 & 255] + "-" + Mt[e >> 16 & 15 | 64] + Mt[e >> 24 & 255] + "-" + Mt[t & 63 | 128] + Mt[t >> 8 & 255] + "-" + Mt[t >> 16 & 255] + Mt[t >> 24 & 255] + Mt[n & 255] + Mt[n >> 8 & 255] + Mt[n >> 16 & 255] + Mt[n >> 24 & 255]).toLowerCase()
}
function mt(i, e, t) {
    return Math.max(e, Math.min(t, i))
}
function _a(i, e) {
    return (i % e + e) % e
}
function zh(i, e, t, n, r) {
    return n + (i - e) * (r - n) / (t - e)
}
function Vh(i, e, t) {
    return i !== e ? (t - i) / (e - i) : 0
}
function nr(i, e, t) {
    return (1 - t) * i + t * e
}
function kh(i, e, t, n) {
    return nr(i, e, 1 - Math.exp(-t * n))
}
function Hh(i, e=1) {
    return e - Math.abs(_a(i, e * 2) - e)
}
function Gh(i, e, t) {
    return i <= e ? 0 : i >= t ? 1 : (i = (i - e) / (t - e),
    i * i * (3 - 2 * i))
}
function Wh(i, e, t) {
    return i <= e ? 0 : i >= t ? 1 : (i = (i - e) / (t - e),
    i * i * i * (i * (i * 6 - 15) + 10))
}
function Xh(i, e) {
    return i + Math.floor(Math.random() * (e - i + 1))
}
function qh(i, e) {
    return i + Math.random() * (e - i)
}
function Yh(i) {
    return i * (.5 - Math.random())
}
function Kh(i) {
    i !== void 0 && (Po = i);
    let e = Po += 1831565813;
    return e = Math.imul(e ^ e >>> 15, e | 1),
    e ^= e + Math.imul(e ^ e >>> 7, e | 61),
    ((e ^ e >>> 14) >>> 0) / 4294967296
}
function Zh(i) {
    return i * tr
}
function $h(i) {
    return i * Di
}
function jh(i) {
    return (i & i - 1) === 0 && i !== 0
}
function Jh(i) {
    return Math.pow(2, Math.ceil(Math.log(i) / Math.LN2))
}
function Qh(i) {
    return Math.pow(2, Math.floor(Math.log(i) / Math.LN2))
}
function eu(i, e, t, n, r) {
    const s = Math.cos
      , a = Math.sin
      , o = s(t / 2)
      , l = a(t / 2)
      , c = s((e + n) / 2)
      , h = a((e + n) / 2)
      , u = s((e - n) / 2)
      , f = a((e - n) / 2)
      , d = s((n - e) / 2)
      , g = a((n - e) / 2);
    switch (r) {
    case "XYX":
        i.set(o * h, l * u, l * f, o * c);
        break;
    case "YZY":
        i.set(l * f, o * h, l * u, o * c);
        break;
    case "ZXZ":
        i.set(l * u, l * f, o * h, o * c);
        break;
    case "XZX":
        i.set(o * h, l * g, l * d, o * c);
        break;
    case "YXY":
        i.set(l * d, o * h, l * g, o * c);
        break;
    case "ZYZ":
        i.set(l * g, l * d, o * h, o * c);
        break;
    default:
        console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: " + r)
    }
}
function Si(i, e) {
    switch (e.constructor) {
    case Float32Array:
        return i;
    case Uint32Array:
        return i / 4294967295;
    case Uint16Array:
        return i / 65535;
    case Uint8Array:
        return i / 255;
    case Int32Array:
        return Math.max(i / 2147483647, -1);
    case Int16Array:
        return Math.max(i / 32767, -1);
    case Int8Array:
        return Math.max(i / 127, -1);
    default:
        throw new Error("Invalid component type.")
    }
}
function Et(i, e) {
    switch (e.constructor) {
    case Float32Array:
        return i;
    case Uint32Array:
        return Math.round(i * 4294967295);
    case Uint16Array:
        return Math.round(i * 65535);
    case Uint8Array:
        return Math.round(i * 255);
    case Int32Array:
        return Math.round(i * 2147483647);
    case Int16Array:
        return Math.round(i * 32767);
    case Int8Array:
        return Math.round(i * 127);
    default:
        throw new Error("Invalid component type.")
    }
}
const bt = {
    DEG2RAD: tr,
    RAD2DEG: Di,
    generateUUID: Bn,
    clamp: mt,
    euclideanModulo: _a,
    mapLinear: zh,
    inverseLerp: Vh,
    lerp: nr,
    damp: kh,
    pingpong: Hh,
    smoothstep: Gh,
    smootherstep: Wh,
    randInt: Xh,
    randFloat: qh,
    randFloatSpread: Yh,
    seededRandom: Kh,
    degToRad: Zh,
    radToDeg: $h,
    isPowerOfTwo: jh,
    ceilPowerOfTwo: Jh,
    floorPowerOfTwo: Qh,
    setQuaternionFromProperEuler: eu,
    normalize: Et,
    denormalize: Si
};
class Ie {
    constructor(e=0, t=0) {
        Ie.prototype.isVector2 = !0,
        this.x = e,
        this.y = t
    }
    get width() {
        return this.x
    }
    set width(e) {
        this.x = e
    }
    get height() {
        return this.y
    }
    set height(e) {
        this.y = e
    }
    set(e, t) {
        return this.x = e,
        this.y = t,
        this
    }
    setScalar(e) {
        return this.x = e,
        this.y = e,
        this
    }
    setX(e) {
        return this.x = e,
        this
    }
    setY(e) {
        return this.y = e,
        this
    }
    setComponent(e, t) {
        switch (e) {
        case 0:
            this.x = t;
            break;
        case 1:
            this.y = t;
            break;
        default:
            throw new Error("index is out of range: " + e)
        }
        return this
    }
    getComponent(e) {
        switch (e) {
        case 0:
            return this.x;
        case 1:
            return this.y;
        default:
            throw new Error("index is out of range: " + e)
        }
    }
    clone() {
        return new this.constructor(this.x,this.y)
    }
    copy(e) {
        return this.x = e.x,
        this.y = e.y,
        this
    }
    add(e) {
        return this.x += e.x,
        this.y += e.y,
        this
    }
    addScalar(e) {
        return this.x += e,
        this.y += e,
        this
    }
    addVectors(e, t) {
        return this.x = e.x + t.x,
        this.y = e.y + t.y,
        this
    }
    addScaledVector(e, t) {
        return this.x += e.x * t,
        this.y += e.y * t,
        this
    }
    sub(e) {
        return this.x -= e.x,
        this.y -= e.y,
        this
    }
    subScalar(e) {
        return this.x -= e,
        this.y -= e,
        this
    }
    subVectors(e, t) {
        return this.x = e.x - t.x,
        this.y = e.y - t.y,
        this
    }
    multiply(e) {
        return this.x *= e.x,
        this.y *= e.y,
        this
    }
    multiplyScalar(e) {
        return this.x *= e,
        this.y *= e,
        this
    }
    divide(e) {
        return this.x /= e.x,
        this.y /= e.y,
        this
    }
    divideScalar(e) {
        return this.multiplyScalar(1 / e)
    }
    applyMatrix3(e) {
        const t = this.x
          , n = this.y
          , r = e.elements;
        return this.x = r[0] * t + r[3] * n + r[6],
        this.y = r[1] * t + r[4] * n + r[7],
        this
    }
    min(e) {
        return this.x = Math.min(this.x, e.x),
        this.y = Math.min(this.y, e.y),
        this
    }
    max(e) {
        return this.x = Math.max(this.x, e.x),
        this.y = Math.max(this.y, e.y),
        this
    }
    clamp(e, t) {
        return this.x = Math.max(e.x, Math.min(t.x, this.x)),
        this.y = Math.max(e.y, Math.min(t.y, this.y)),
        this
    }
    clampScalar(e, t) {
        return this.x = Math.max(e, Math.min(t, this.x)),
        this.y = Math.max(e, Math.min(t, this.y)),
        this
    }
    clampLength(e, t) {
        const n = this.length();
        return this.divideScalar(n || 1).multiplyScalar(Math.max(e, Math.min(t, n)))
    }
    floor() {
        return this.x = Math.floor(this.x),
        this.y = Math.floor(this.y),
        this
    }
    ceil() {
        return this.x = Math.ceil(this.x),
        this.y = Math.ceil(this.y),
        this
    }
    round() {
        return this.x = Math.round(this.x),
        this.y = Math.round(this.y),
        this
    }
    roundToZero() {
        return this.x = Math.trunc(this.x),
        this.y = Math.trunc(this.y),
        this
    }
    negate() {
        return this.x = -this.x,
        this.y = -this.y,
        this
    }
    dot(e) {
        return this.x * e.x + this.y * e.y
    }
    cross(e) {
        return this.x * e.y - this.y * e.x
    }
    lengthSq() {
        return this.x * this.x + this.y * this.y
    }
    length() {
        return Math.sqrt(this.x * this.x + this.y * this.y)
    }
    manhattanLength() {
        return Math.abs(this.x) + Math.abs(this.y)
    }
    normalize() {
        return this.divideScalar(this.length() || 1)
    }
    angle() {
        return Math.atan2(-this.y, -this.x) + Math.PI
    }
    angleTo(e) {
        const t = Math.sqrt(this.lengthSq() * e.lengthSq());
        if (t === 0)
            return Math.PI / 2;
        const n = this.dot(e) / t;
        return Math.acos(mt(n, -1, 1))
    }
    distanceTo(e) {
        return Math.sqrt(this.distanceToSquared(e))
    }
    distanceToSquared(e) {
        const t = this.x - e.x
          , n = this.y - e.y;
        return t * t + n * n
    }
    manhattanDistanceTo(e) {
        return Math.abs(this.x - e.x) + Math.abs(this.y - e.y)
    }
    setLength(e) {
        return this.normalize().multiplyScalar(e)
    }
    lerp(e, t) {
        return this.x += (e.x - this.x) * t,
        this.y += (e.y - this.y) * t,
        this
    }
    lerpVectors(e, t, n) {
        return this.x = e.x + (t.x - e.x) * n,
        this.y = e.y + (t.y - e.y) * n,
        this
    }
    equals(e) {
        return e.x === this.x && e.y === this.y
    }
    fromArray(e, t=0) {
        return this.x = e[t],
        this.y = e[t + 1],
        this
    }
    toArray(e=[], t=0) {
        return e[t] = this.x,
        e[t + 1] = this.y,
        e
    }
    fromBufferAttribute(e, t) {
        return this.x = e.getX(t),
        this.y = e.getY(t),
        this
    }
    rotateAround(e, t) {
        const n = Math.cos(t)
          , r = Math.sin(t)
          , s = this.x - e.x
          , a = this.y - e.y;
        return this.x = s * n - a * r + e.x,
        this.y = s * r + a * n + e.y,
        this
    }
    random() {
        return this.x = Math.random(),
        this.y = Math.random(),
        this
    }
    *[Symbol.iterator]() {
        yield this.x,
        yield this.y
    }
}
class Te {
    constructor(e, t, n, r, s, a, o, l, c) {
        Te.prototype.isMatrix3 = !0,
        this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1],
        e !== void 0 && this.set(e, t, n, r, s, a, o, l, c)
    }
    set(e, t, n, r, s, a, o, l, c) {
        const h = this.elements;
        return h[0] = e,
        h[1] = r,
        h[2] = o,
        h[3] = t,
        h[4] = s,
        h[5] = l,
        h[6] = n,
        h[7] = a,
        h[8] = c,
        this
    }
    identity() {
        return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1),
        this
    }
    copy(e) {
        const t = this.elements
          , n = e.elements;
        return t[0] = n[0],
        t[1] = n[1],
        t[2] = n[2],
        t[3] = n[3],
        t[4] = n[4],
        t[5] = n[5],
        t[6] = n[6],
        t[7] = n[7],
        t[8] = n[8],
        this
    }
    extractBasis(e, t, n) {
        return e.setFromMatrix3Column(this, 0),
        t.setFromMatrix3Column(this, 1),
        n.setFromMatrix3Column(this, 2),
        this
    }
    setFromMatrix4(e) {
        const t = e.elements;
        return this.set(t[0], t[4], t[8], t[1], t[5], t[9], t[2], t[6], t[10]),
        this
    }
    multiply(e) {
        return this.multiplyMatrices(this, e)
    }
    premultiply(e) {
        return this.multiplyMatrices(e, this)
    }
    multiplyMatrices(e, t) {
        const n = e.elements
          , r = t.elements
          , s = this.elements
          , a = n[0]
          , o = n[3]
          , l = n[6]
          , c = n[1]
          , h = n[4]
          , u = n[7]
          , f = n[2]
          , d = n[5]
          , g = n[8]
          , _ = r[0]
          , p = r[3]
          , m = r[6]
          , T = r[1]
          , v = r[4]
          , S = r[7]
          , D = r[2]
          , b = r[5]
          , w = r[8];
        return s[0] = a * _ + o * T + l * D,
        s[3] = a * p + o * v + l * b,
        s[6] = a * m + o * S + l * w,
        s[1] = c * _ + h * T + u * D,
        s[4] = c * p + h * v + u * b,
        s[7] = c * m + h * S + u * w,
        s[2] = f * _ + d * T + g * D,
        s[5] = f * p + d * v + g * b,
        s[8] = f * m + d * S + g * w,
        this
    }
    multiplyScalar(e) {
        const t = this.elements;
        return t[0] *= e,
        t[3] *= e,
        t[6] *= e,
        t[1] *= e,
        t[4] *= e,
        t[7] *= e,
        t[2] *= e,
        t[5] *= e,
        t[8] *= e,
        this
    }
    determinant() {
        const e = this.elements
          , t = e[0]
          , n = e[1]
          , r = e[2]
          , s = e[3]
          , a = e[4]
          , o = e[5]
          , l = e[6]
          , c = e[7]
          , h = e[8];
        return t * a * h - t * o * c - n * s * h + n * o * l + r * s * c - r * a * l
    }
    invert() {
        const e = this.elements
          , t = e[0]
          , n = e[1]
          , r = e[2]
          , s = e[3]
          , a = e[4]
          , o = e[5]
          , l = e[6]
          , c = e[7]
          , h = e[8]
          , u = h * a - o * c
          , f = o * l - h * s
          , d = c * s - a * l
          , g = t * u + n * f + r * d;
        if (g === 0)
            return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
        const _ = 1 / g;
        return e[0] = u * _,
        e[1] = (r * c - h * n) * _,
        e[2] = (o * n - r * a) * _,
        e[3] = f * _,
        e[4] = (h * t - r * l) * _,
        e[5] = (r * s - o * t) * _,
        e[6] = d * _,
        e[7] = (n * l - c * t) * _,
        e[8] = (a * t - n * s) * _,
        this
    }
    transpose() {
        let e;
        const t = this.elements;
        return e = t[1],
        t[1] = t[3],
        t[3] = e,
        e = t[2],
        t[2] = t[6],
        t[6] = e,
        e = t[5],
        t[5] = t[7],
        t[7] = e,
        this
    }
    getNormalMatrix(e) {
        return this.setFromMatrix4(e).invert().transpose()
    }
    transposeIntoArray(e) {
        const t = this.elements;
        return e[0] = t[0],
        e[1] = t[3],
        e[2] = t[6],
        e[3] = t[1],
        e[4] = t[4],
        e[5] = t[7],
        e[6] = t[2],
        e[7] = t[5],
        e[8] = t[8],
        this
    }
    setUvTransform(e, t, n, r, s, a, o) {
        const l = Math.cos(s)
          , c = Math.sin(s);
        return this.set(n * l, n * c, -n * (l * a + c * o) + a + e, -r * c, r * l, -r * (-c * a + l * o) + o + t, 0, 0, 1),
        this
    }
    scale(e, t) {
        return this.premultiply(As.makeScale(e, t)),
        this
    }
    rotate(e) {
        return this.premultiply(As.makeRotation(-e)),
        this
    }
    translate(e, t) {
        return this.premultiply(As.makeTranslation(e, t)),
        this
    }
    makeTranslation(e, t) {
        return e.isVector2 ? this.set(1, 0, e.x, 0, 1, e.y, 0, 0, 1) : this.set(1, 0, e, 0, 1, t, 0, 0, 1),
        this
    }
    makeRotation(e) {
        const t = Math.cos(e)
          , n = Math.sin(e);
        return this.set(t, -n, 0, n, t, 0, 0, 0, 1),
        this
    }
    makeScale(e, t) {
        return this.set(e, 0, 0, 0, t, 0, 0, 0, 1),
        this
    }
    equals(e) {
        const t = this.elements
          , n = e.elements;
        for (let r = 0; r < 9; r++)
            if (t[r] !== n[r])
                return !1;
        return !0
    }
    fromArray(e, t=0) {
        for (let n = 0; n < 9; n++)
            this.elements[n] = e[n + t];
        return this
    }
    toArray(e=[], t=0) {
        const n = this.elements;
        return e[t] = n[0],
        e[t + 1] = n[1],
        e[t + 2] = n[2],
        e[t + 3] = n[3],
        e[t + 4] = n[4],
        e[t + 5] = n[5],
        e[t + 6] = n[6],
        e[t + 7] = n[7],
        e[t + 8] = n[8],
        e
    }
    clone() {
        return new this.constructor().fromArray(this.elements)
    }
}
const As = new Te;
function Yl(i) {
    for (let e = i.length - 1; e >= 0; --e)
        if (i[e] >= 65535)
            return !0;
    return !1
}
function ar(i) {
    return document.createElementNS("http://www.w3.org/1999/xhtml", i)
}
function tu() {
    const i = ar("canvas");
    return i.style.display = "block",
    i
}
const Lo = {};
function nu(i) {
    i in Lo || (Lo[i] = !0,
    console.warn(i))
}
const Io = new Te().set(.8224621, .177538, 0, .0331941, .9668058, 0, .0170827, .0723974, .9105199)
  , Do = new Te().set(1.2249401, -.2249404, 0, -.0420569, 1.0420571, 0, -.0196376, -.0786361, 1.0982735)
  , _r = {
    [On]: {
        transfer: $r,
        primaries: jr,
        toReference: i=>i,
        fromReference: i=>i
    },
    [Pt]: {
        transfer: je,
        primaries: jr,
        toReference: i=>i.convertSRGBToLinear(),
        fromReference: i=>i.convertLinearToSRGB()
    },
    [os]: {
        transfer: $r,
        primaries: Jr,
        toReference: i=>i.applyMatrix3(Do),
        fromReference: i=>i.applyMatrix3(Io)
    },
    [ga]: {
        transfer: je,
        primaries: Jr,
        toReference: i=>i.convertSRGBToLinear().applyMatrix3(Do),
        fromReference: i=>i.applyMatrix3(Io).convertLinearToSRGB()
    }
}
  , iu = new Set([On, os])
  , Ze = {
    enabled: !0,
    _workingColorSpace: On,
    get workingColorSpace() {
        return this._workingColorSpace
    },
    set workingColorSpace(i) {
        if (!iu.has(i))
            throw new Error(`Unsupported working color space, "${i}".`);
        this._workingColorSpace = i
    },
    convert: function(i, e, t) {
        if (this.enabled === !1 || e === t || !e || !t)
            return i;
        const n = _r[e].toReference
          , r = _r[t].fromReference;
        return r(n(i))
    },
    fromWorkingColorSpace: function(i, e) {
        return this.convert(i, this._workingColorSpace, e)
    },
    toWorkingColorSpace: function(i, e) {
        return this.convert(i, e, this._workingColorSpace)
    },
    getPrimaries: function(i) {
        return _r[i].primaries
    },
    getTransfer: function(i) {
        return i === Ln ? $r : _r[i].transfer
    }
};
function Ci(i) {
    return i < .04045 ? i * .0773993808 : Math.pow(i * .9478672986 + .0521327014, 2.4)
}
function bs(i) {
    return i < .0031308 ? i * 12.92 : 1.055 * Math.pow(i, .41666) - .055
}
let si;
class ru {
    static getDataURL(e) {
        if (/^data:/i.test(e.src) || typeof HTMLCanvasElement > "u")
            return e.src;
        let t;
        if (e instanceof HTMLCanvasElement)
            t = e;
        else {
            si === void 0 && (si = ar("canvas")),
            si.width = e.width,
            si.height = e.height;
            const n = si.getContext("2d");
            e instanceof ImageData ? n.putImageData(e, 0, 0) : n.drawImage(e, 0, 0, e.width, e.height),
            t = si
        }
        return t.width > 2048 || t.height > 2048 ? (console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons", e),
        t.toDataURL("image/jpeg", .6)) : t.toDataURL("image/png")
    }
    static sRGBToLinear(e) {
        if (typeof HTMLImageElement < "u" && e instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && e instanceof ImageBitmap) {
            const t = ar("canvas");
            t.width = e.width,
            t.height = e.height;
            const n = t.getContext("2d");
            n.drawImage(e, 0, 0, e.width, e.height);
            const r = n.getImageData(0, 0, e.width, e.height)
              , s = r.data;
            for (let a = 0; a < s.length; a++)
                s[a] = Ci(s[a] / 255) * 255;
            return n.putImageData(r, 0, 0),
            t
        } else if (e.data) {
            const t = e.data.slice(0);
            for (let n = 0; n < t.length; n++)
                t instanceof Uint8Array || t instanceof Uint8ClampedArray ? t[n] = Math.floor(Ci(t[n] / 255) * 255) : t[n] = Ci(t[n]);
            return {
                data: t,
                width: e.width,
                height: e.height
            }
        } else
            return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),
            e
    }
}
let su = 0;
class Kl {
    constructor(e=null) {
        this.isSource = !0,
        Object.defineProperty(this, "id", {
            value: su++
        }),
        this.uuid = Bn(),
        this.data = e,
        this.dataReady = !0,
        this.version = 0
    }
    set needsUpdate(e) {
        e === !0 && this.version++
    }
    toJSON(e) {
        const t = e === void 0 || typeof e == "string";
        if (!t && e.images[this.uuid] !== void 0)
            return e.images[this.uuid];
        const n = {
            uuid: this.uuid,
            url: ""
        }
          , r = this.data;
        if (r !== null) {
            let s;
            if (Array.isArray(r)) {
                s = [];
                for (let a = 0, o = r.length; a < o; a++)
                    r[a].isDataTexture ? s.push(ws(r[a].image)) : s.push(ws(r[a]))
            } else
                s = ws(r);
            n.url = s
        }
        return t || (e.images[this.uuid] = n),
        n
    }
}
function ws(i) {
    return typeof HTMLImageElement < "u" && i instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && i instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && i instanceof ImageBitmap ? ru.getDataURL(i) : i.data ? {
        data: Array.from(i.data),
        width: i.width,
        height: i.height,
        type: i.data.constructor.name
    } : (console.warn("THREE.Texture: Unable to serialize Texture."),
    {})
}
let au = 0;
class ut extends Ni {
    constructor(e=ut.DEFAULT_IMAGE, t=ut.DEFAULT_MAPPING, n=vn, r=vn, s=qt, a=Jn, o=Yt, l=Nn, c=ut.DEFAULT_ANISOTROPY, h=Ln) {
        super(),
        this.isTexture = !0,
        Object.defineProperty(this, "id", {
            value: au++
        }),
        this.uuid = Bn(),
        this.name = "",
        this.source = new Kl(e),
        this.mipmaps = [],
        this.mapping = t,
        this.channel = 0,
        this.wrapS = n,
        this.wrapT = r,
        this.magFilter = s,
        this.minFilter = a,
        this.anisotropy = c,
        this.format = o,
        this.internalFormat = null,
        this.type = l,
        this.offset = new Ie(0,0),
        this.repeat = new Ie(1,1),
        this.center = new Ie(0,0),
        this.rotation = 0,
        this.matrixAutoUpdate = !0,
        this.matrix = new Te,
        this.generateMipmaps = !0,
        this.premultiplyAlpha = !1,
        this.flipY = !0,
        this.unpackAlignment = 4,
        this.colorSpace = h,
        this.userData = {},
        this.version = 0,
        this.onUpdate = null,
        this.isRenderTargetTexture = !1,
        this.pmremVersion = 0
    }
    get image() {
        return this.source.data
    }
    set image(e=null) {
        this.source.data = e
    }
    updateMatrix() {
        this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y)
    }
    clone() {
        return new this.constructor().copy(this)
    }
    copy(e) {
        return this.name = e.name,
        this.source = e.source,
        this.mipmaps = e.mipmaps.slice(0),
        this.mapping = e.mapping,
        this.channel = e.channel,
        this.wrapS = e.wrapS,
        this.wrapT = e.wrapT,
        this.magFilter = e.magFilter,
        this.minFilter = e.minFilter,
        this.anisotropy = e.anisotropy,
        this.format = e.format,
        this.internalFormat = e.internalFormat,
        this.type = e.type,
        this.offset.copy(e.offset),
        this.repeat.copy(e.repeat),
        this.center.copy(e.center),
        this.rotation = e.rotation,
        this.matrixAutoUpdate = e.matrixAutoUpdate,
        this.matrix.copy(e.matrix),
        this.generateMipmaps = e.generateMipmaps,
        this.premultiplyAlpha = e.premultiplyAlpha,
        this.flipY = e.flipY,
        this.unpackAlignment = e.unpackAlignment,
        this.colorSpace = e.colorSpace,
        this.userData = JSON.parse(JSON.stringify(e.userData)),
        this.needsUpdate = !0,
        this
    }
    toJSON(e) {
        const t = e === void 0 || typeof e == "string";
        if (!t && e.textures[this.uuid] !== void 0)
            return e.textures[this.uuid];
        const n = {
            metadata: {
                version: 4.6,
                type: "Texture",
                generator: "Texture.toJSON"
            },
            uuid: this.uuid,
            name: this.name,
            image: this.source.toJSON(e).uuid,
            mapping: this.mapping,
            channel: this.channel,
            repeat: [this.repeat.x, this.repeat.y],
            offset: [this.offset.x, this.offset.y],
            center: [this.center.x, this.center.y],
            rotation: this.rotation,
            wrap: [this.wrapS, this.wrapT],
            format: this.format,
            internalFormat: this.internalFormat,
            type: this.type,
            colorSpace: this.colorSpace,
            minFilter: this.minFilter,
            magFilter: this.magFilter,
            anisotropy: this.anisotropy,
            flipY: this.flipY,
            generateMipmaps: this.generateMipmaps,
            premultiplyAlpha: this.premultiplyAlpha,
            unpackAlignment: this.unpackAlignment
        };
        return Object.keys(this.userData).length > 0 && (n.userData = this.userData),
        t || (e.textures[this.uuid] = n),
        n
    }
    dispose() {
        this.dispatchEvent({
            type: "dispose"
        })
    }
    transformUv(e) {
        if (this.mapping !== Bl)
            return e;
        if (e.applyMatrix3(this.matrix),
        e.x < 0 || e.x > 1)
            switch (this.wrapS) {
            case rr:
                e.x = e.x - Math.floor(e.x);
                break;
            case vn:
                e.x = e.x < 0 ? 0 : 1;
                break;
            case ca:
                Math.abs(Math.floor(e.x) % 2) === 1 ? e.x = Math.ceil(e.x) - e.x : e.x = e.x - Math.floor(e.x);
                break
            }
        if (e.y < 0 || e.y > 1)
            switch (this.wrapT) {
            case rr:
                e.y = e.y - Math.floor(e.y);
                break;
            case vn:
                e.y = e.y < 0 ? 0 : 1;
                break;
            case ca:
                Math.abs(Math.floor(e.y) % 2) === 1 ? e.y = Math.ceil(e.y) - e.y : e.y = e.y - Math.floor(e.y);
                break
            }
        return this.flipY && (e.y = 1 - e.y),
        e
    }
    set needsUpdate(e) {
        e === !0 && (this.version++,
        this.source.needsUpdate = !0)
    }
    set needsPMREMUpdate(e) {
        e === !0 && this.pmremVersion++
    }
}
ut.DEFAULT_IMAGE = null;
ut.DEFAULT_MAPPING = Bl;
ut.DEFAULT_ANISOTROPY = 1;
class We {
    constructor(e=0, t=0, n=0, r=1) {
        We.prototype.isVector4 = !0,
        this.x = e,
        this.y = t,
        this.z = n,
        this.w = r
    }
    get width() {
        return this.z
    }
    set width(e) {
        this.z = e
    }
    get height() {
        return this.w
    }
    set height(e) {
        this.w = e
    }
    set(e, t, n, r) {
        return this.x = e,
        this.y = t,
        this.z = n,
        this.w = r,
        this
    }
    setScalar(e) {
        return this.x = e,
        this.y = e,
        this.z = e,
        this.w = e,
        this
    }
    setX(e) {
        return this.x = e,
        this
    }
    setY(e) {
        return this.y = e,
        this
    }
    setZ(e) {
        return this.z = e,
        this
    }
    setW(e) {
        return this.w = e,
        this
    }
    setComponent(e, t) {
        switch (e) {
        case 0:
            this.x = t;
            break;
        case 1:
            this.y = t;
            break;
        case 2:
            this.z = t;
            break;
        case 3:
            this.w = t;
            break;
        default:
            throw new Error("index is out of range: " + e)
        }
        return this
    }
    getComponent(e) {
        switch (e) {
        case 0:
            return this.x;
        case 1:
            return this.y;
        case 2:
            return this.z;
        case 3:
            return this.w;
        default:
            throw new Error("index is out of range: " + e)
        }
    }
    clone() {
        return new this.constructor(this.x,this.y,this.z,this.w)
    }
    copy(e) {
        return this.x = e.x,
        this.y = e.y,
        this.z = e.z,
        this.w = e.w !== void 0 ? e.w : 1,
        this
    }
    add(e) {
        return this.x += e.x,
        this.y += e.y,
        this.z += e.z,
        this.w += e.w,
        this
    }
    addScalar(e) {
        return this.x += e,
        this.y += e,
        this.z += e,
        this.w += e,
        this
    }
    addVectors(e, t) {
        return this.x = e.x + t.x,
        this.y = e.y + t.y,
        this.z = e.z + t.z,
        this.w = e.w + t.w,
        this
    }
    addScaledVector(e, t) {
        return this.x += e.x * t,
        this.y += e.y * t,
        this.z += e.z * t,
        this.w += e.w * t,
        this
    }
    sub(e) {
        return this.x -= e.x,
        this.y -= e.y,
        this.z -= e.z,
        this.w -= e.w,
        this
    }
    subScalar(e) {
        return this.x -= e,
        this.y -= e,
        this.z -= e,
        this.w -= e,
        this
    }
    subVectors(e, t) {
        return this.x = e.x - t.x,
        this.y = e.y - t.y,
        this.z = e.z - t.z,
        this.w = e.w - t.w,
        this
    }
    multiply(e) {
        return this.x *= e.x,
        this.y *= e.y,
        this.z *= e.z,
        this.w *= e.w,
        this
    }
    multiplyScalar(e) {
        return this.x *= e,
        this.y *= e,
        this.z *= e,
        this.w *= e,
        this
    }
    applyMatrix4(e) {
        const t = this.x
          , n = this.y
          , r = this.z
          , s = this.w
          , a = e.elements;
        return this.x = a[0] * t + a[4] * n + a[8] * r + a[12] * s,
        this.y = a[1] * t + a[5] * n + a[9] * r + a[13] * s,
        this.z = a[2] * t + a[6] * n + a[10] * r + a[14] * s,
        this.w = a[3] * t + a[7] * n + a[11] * r + a[15] * s,
        this
    }
    divideScalar(e) {
        return this.multiplyScalar(1 / e)
    }
    setAxisAngleFromQuaternion(e) {
        this.w = 2 * Math.acos(e.w);
        const t = Math.sqrt(1 - e.w * e.w);
        return t < 1e-4 ? (this.x = 1,
        this.y = 0,
        this.z = 0) : (this.x = e.x / t,
        this.y = e.y / t,
        this.z = e.z / t),
        this
    }
    setAxisAngleFromRotationMatrix(e) {
        let t, n, r, s;
        const l = e.elements
          , c = l[0]
          , h = l[4]
          , u = l[8]
          , f = l[1]
          , d = l[5]
          , g = l[9]
          , _ = l[2]
          , p = l[6]
          , m = l[10];
        if (Math.abs(h - f) < .01 && Math.abs(u - _) < .01 && Math.abs(g - p) < .01) {
            if (Math.abs(h + f) < .1 && Math.abs(u + _) < .1 && Math.abs(g + p) < .1 && Math.abs(c + d + m - 3) < .1)
                return this.set(1, 0, 0, 0),
                this;
            t = Math.PI;
            const v = (c + 1) / 2
              , S = (d + 1) / 2
              , D = (m + 1) / 2
              , b = (h + f) / 4
              , w = (u + _) / 4
              , B = (g + p) / 4;
            return v > S && v > D ? v < .01 ? (n = 0,
            r = .707106781,
            s = .707106781) : (n = Math.sqrt(v),
            r = b / n,
            s = w / n) : S > D ? S < .01 ? (n = .707106781,
            r = 0,
            s = .707106781) : (r = Math.sqrt(S),
            n = b / r,
            s = B / r) : D < .01 ? (n = .707106781,
            r = .707106781,
            s = 0) : (s = Math.sqrt(D),
            n = w / s,
            r = B / s),
            this.set(n, r, s, t),
            this
        }
        let T = Math.sqrt((p - g) * (p - g) + (u - _) * (u - _) + (f - h) * (f - h));
        return Math.abs(T) < .001 && (T = 1),
        this.x = (p - g) / T,
        this.y = (u - _) / T,
        this.z = (f - h) / T,
        this.w = Math.acos((c + d + m - 1) / 2),
        this
    }
    min(e) {
        return this.x = Math.min(this.x, e.x),
        this.y = Math.min(this.y, e.y),
        this.z = Math.min(this.z, e.z),
        this.w = Math.min(this.w, e.w),
        this
    }
    max(e) {
        return this.x = Math.max(this.x, e.x),
        this.y = Math.max(this.y, e.y),
        this.z = Math.max(this.z, e.z),
        this.w = Math.max(this.w, e.w),
        this
    }
    clamp(e, t) {
        return this.x = Math.max(e.x, Math.min(t.x, this.x)),
        this.y = Math.max(e.y, Math.min(t.y, this.y)),
        this.z = Math.max(e.z, Math.min(t.z, this.z)),
        this.w = Math.max(e.w, Math.min(t.w, this.w)),
        this
    }
    clampScalar(e, t) {
        return this.x = Math.max(e, Math.min(t, this.x)),
        this.y = Math.max(e, Math.min(t, this.y)),
        this.z = Math.max(e, Math.min(t, this.z)),
        this.w = Math.max(e, Math.min(t, this.w)),
        this
    }
    clampLength(e, t) {
        const n = this.length();
        return this.divideScalar(n || 1).multiplyScalar(Math.max(e, Math.min(t, n)))
    }
    floor() {
        return this.x = Math.floor(this.x),
        this.y = Math.floor(this.y),
        this.z = Math.floor(this.z),
        this.w = Math.floor(this.w),
        this
    }
    ceil() {
        return this.x = Math.ceil(this.x),
        this.y = Math.ceil(this.y),
        this.z = Math.ceil(this.z),
        this.w = Math.ceil(this.w),
        this
    }
    round() {
        return this.x = Math.round(this.x),
        this.y = Math.round(this.y),
        this.z = Math.round(this.z),
        this.w = Math.round(this.w),
        this
    }
    roundToZero() {
        return this.x = Math.trunc(this.x),
        this.y = Math.trunc(this.y),
        this.z = Math.trunc(this.z),
        this.w = Math.trunc(this.w),
        this
    }
    negate() {
        return this.x = -this.x,
        this.y = -this.y,
        this.z = -this.z,
        this.w = -this.w,
        this
    }
    dot(e) {
        return this.x * e.x + this.y * e.y + this.z * e.z + this.w * e.w
    }
    lengthSq() {
        return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
    }
    length() {
        return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w)
    }
    manhattanLength() {
        return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w)
    }
    normalize() {
        return this.divideScalar(this.length() || 1)
    }
    setLength(e) {
        return this.normalize().multiplyScalar(e)
    }
    lerp(e, t) {
        return this.x += (e.x - this.x) * t,
        this.y += (e.y - this.y) * t,
        this.z += (e.z - this.z) * t,
        this.w += (e.w - this.w) * t,
        this
    }
    lerpVectors(e, t, n) {
        return this.x = e.x + (t.x - e.x) * n,
        this.y = e.y + (t.y - e.y) * n,
        this.z = e.z + (t.z - e.z) * n,
        this.w = e.w + (t.w - e.w) * n,
        this
    }
    equals(e) {
        return e.x === this.x && e.y === this.y && e.z === this.z && e.w === this.w
    }
    fromArray(e, t=0) {
        return this.x = e[t],
        this.y = e[t + 1],
        this.z = e[t + 2],
        this.w = e[t + 3],
        this
    }
    toArray(e=[], t=0) {
        return e[t] = this.x,
        e[t + 1] = this.y,
        e[t + 2] = this.z,
        e[t + 3] = this.w,
        e
    }
    fromBufferAttribute(e, t) {
        return this.x = e.getX(t),
        this.y = e.getY(t),
        this.z = e.getZ(t),
        this.w = e.getW(t),
        this
    }
    random() {
        return this.x = Math.random(),
        this.y = Math.random(),
        this.z = Math.random(),
        this.w = Math.random(),
        this
    }
    *[Symbol.iterator]() {
        yield this.x,
        yield this.y,
        yield this.z,
        yield this.w
    }
}
class ou extends Ni {
    constructor(e=1, t=1, n={}) {
        super(),
        this.isRenderTarget = !0,
        this.width = e,
        this.height = t,
        this.depth = 1,
        this.scissor = new We(0,0,e,t),
        this.scissorTest = !1,
        this.viewport = new We(0,0,e,t);
        const r = {
            width: e,
            height: t,
            depth: 1
        };
        n = Object.assign({
            generateMipmaps: !1,
            internalFormat: null,
            minFilter: qt,
            depthBuffer: !0,
            stencilBuffer: !1,
            resolveDepthBuffer: !0,
            resolveStencilBuffer: !0,
            depthTexture: null,
            samples: 0,
            count: 1
        }, n);
        const s = new ut(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);
        s.flipY = !1,
        s.generateMipmaps = n.generateMipmaps,
        s.internalFormat = n.internalFormat,
        this.textures = [];
        const a = n.count;
        for (let o = 0; o < a; o++)
            this.textures[o] = s.clone(),
            this.textures[o].isRenderTargetTexture = !0;
        this.depthBuffer = n.depthBuffer,
        this.stencilBuffer = n.stencilBuffer,
        this.resolveDepthBuffer = n.resolveDepthBuffer,
        this.resolveStencilBuffer = n.resolveStencilBuffer,
        this.depthTexture = n.depthTexture,
        this.samples = n.samples
    }
    get texture() {
        return this.textures[0]
    }
    set texture(e) {
        this.textures[0] = e
    }
    setSize(e, t, n=1) {
        if (this.width !== e || this.height !== t || this.depth !== n) {
            this.width = e,
            this.height = t,
            this.depth = n;
            for (let r = 0, s = this.textures.length; r < s; r++)
                this.textures[r].image.width = e,
                this.textures[r].image.height = t,
                this.textures[r].image.depth = n;
            this.dispose()
        }
        this.viewport.set(0, 0, e, t),
        this.scissor.set(0, 0, e, t)
    }
    clone() {
        return new this.constructor().copy(this)
    }
    copy(e) {
        this.width = e.width,
        this.height = e.height,
        this.depth = e.depth,
        this.scissor.copy(e.scissor),
        this.scissorTest = e.scissorTest,
        this.viewport.copy(e.viewport),
        this.textures.length = 0;
        for (let n = 0, r = e.textures.length; n < r; n++)
            this.textures[n] = e.textures[n].clone(),
            this.textures[n].isRenderTargetTexture = !0;
        const t = Object.assign({}, e.texture.image);
        return this.texture.source = new Kl(t),
        this.depthBuffer = e.depthBuffer,
        this.stencilBuffer = e.stencilBuffer,
        this.resolveDepthBuffer = e.resolveDepthBuffer,
        this.resolveStencilBuffer = e.resolveStencilBuffer,
        e.depthTexture !== null && (this.depthTexture = e.depthTexture.clone()),
        this.samples = e.samples,
        this
    }
    dispose() {
        this.dispatchEvent({
            type: "dispose"
        })
    }
}
class Qn extends ou {
    constructor(e=1, t=1, n={}) {
        super(e, t, n),
        this.isWebGLRenderTarget = !0
    }
}
class Zl extends ut {
    constructor(e=null, t=1, n=1, r=1) {
        super(null),
        this.isDataArrayTexture = !0,
        this.image = {
            data: e,
            width: t,
            height: n,
            depth: r
        },
        this.magFilter = Lt,
        this.minFilter = Lt,
        this.wrapR = vn,
        this.generateMipmaps = !1,
        this.flipY = !1,
        this.unpackAlignment = 1
    }
}
class lu extends ut {
    constructor(e=null, t=1, n=1, r=1) {
        super(null),
        this.isData3DTexture = !0,
        this.image = {
            data: e,
            width: t,
            height: n,
            depth: r
        },
        this.magFilter = Lt,
        this.minFilter = Lt,
        this.wrapR = vn,
        this.generateMipmaps = !1,
        this.flipY = !1,
        this.unpackAlignment = 1
    }
}
class Ct {
    constructor(e=0, t=0, n=0, r=1) {
        this.isQuaternion = !0,
        this._x = e,
        this._y = t,
        this._z = n,
        this._w = r
    }
    static slerpFlat(e, t, n, r, s, a, o) {
        let l = n[r + 0]
          , c = n[r + 1]
          , h = n[r + 2]
          , u = n[r + 3];
        const f = s[a + 0]
          , d = s[a + 1]
          , g = s[a + 2]
          , _ = s[a + 3];
        if (o === 0) {
            e[t + 0] = l,
            e[t + 1] = c,
            e[t + 2] = h,
            e[t + 3] = u;
            return
        }
        if (o === 1) {
            e[t + 0] = f,
            e[t + 1] = d,
            e[t + 2] = g,
            e[t + 3] = _;
            return
        }
        if (u !== _ || l !== f || c !== d || h !== g) {
            let p = 1 - o;
            const m = l * f + c * d + h * g + u * _
              , T = m >= 0 ? 1 : -1
              , v = 1 - m * m;
            if (v > Number.EPSILON) {
                const D = Math.sqrt(v)
                  , b = Math.atan2(D, m * T);
                p = Math.sin(p * b) / D,
                o = Math.sin(o * b) / D
            }
            const S = o * T;
            if (l = l * p + f * S,
            c = c * p + d * S,
            h = h * p + g * S,
            u = u * p + _ * S,
            p === 1 - o) {
                const D = 1 / Math.sqrt(l * l + c * c + h * h + u * u);
                l *= D,
                c *= D,
                h *= D,
                u *= D
            }
        }
        e[t] = l,
        e[t + 1] = c,
        e[t + 2] = h,
        e[t + 3] = u
    }
    static multiplyQuaternionsFlat(e, t, n, r, s, a) {
        const o = n[r]
          , l = n[r + 1]
          , c = n[r + 2]
          , h = n[r + 3]
          , u = s[a]
          , f = s[a + 1]
          , d = s[a + 2]
          , g = s[a + 3];
        return e[t] = o * g + h * u + l * d - c * f,
        e[t + 1] = l * g + h * f + c * u - o * d,
        e[t + 2] = c * g + h * d + o * f - l * u,
        e[t + 3] = h * g - o * u - l * f - c * d,
        e
    }
    get x() {
        return this._x
    }
    set x(e) {
        this._x = e,
        this._onChangeCallback()
    }
    get y() {
        return this._y
    }
    set y(e) {
        this._y = e,
        this._onChangeCallback()
    }
    get z() {
        return this._z
    }
    set z(e) {
        this._z = e,
        this._onChangeCallback()
    }
    get w() {
        return this._w
    }
    set w(e) {
        this._w = e,
        this._onChangeCallback()
    }
    set(e, t, n, r) {
        return this._x = e,
        this._y = t,
        this._z = n,
        this._w = r,
        this._onChangeCallback(),
        this
    }
    clone() {
        return new this.constructor(this._x,this._y,this._z,this._w)
    }
    copy(e) {
        return this._x = e.x,
        this._y = e.y,
        this._z = e.z,
        this._w = e.w,
        this._onChangeCallback(),
        this
    }
    setFromEuler(e, t=!0) {
        const n = e._x
          , r = e._y
          , s = e._z
          , a = e._order
          , o = Math.cos
          , l = Math.sin
          , c = o(n / 2)
          , h = o(r / 2)
          , u = o(s / 2)
          , f = l(n / 2)
          , d = l(r / 2)
          , g = l(s / 2);
        switch (a) {
        case "XYZ":
            this._x = f * h * u + c * d * g,
            this._y = c * d * u - f * h * g,
            this._z = c * h * g + f * d * u,
            this._w = c * h * u - f * d * g;
            break;
        case "YXZ":
            this._x = f * h * u + c * d * g,
            this._y = c * d * u - f * h * g,
            this._z = c * h * g - f * d * u,
            this._w = c * h * u + f * d * g;
            break;
        case "ZXY":
            this._x = f * h * u - c * d * g,
            this._y = c * d * u + f * h * g,
            this._z = c * h * g + f * d * u,
            this._w = c * h * u - f * d * g;
            break;
        case "ZYX":
            this._x = f * h * u - c * d * g,
            this._y = c * d * u + f * h * g,
            this._z = c * h * g - f * d * u,
            this._w = c * h * u + f * d * g;
            break;
        case "YZX":
            this._x = f * h * u + c * d * g,
            this._y = c * d * u + f * h * g,
            this._z = c * h * g - f * d * u,
            this._w = c * h * u - f * d * g;
            break;
        case "XZY":
            this._x = f * h * u - c * d * g,
            this._y = c * d * u - f * h * g,
            this._z = c * h * g + f * d * u,
            this._w = c * h * u + f * d * g;
            break;
        default:
            console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: " + a)
        }
        return t === !0 && this._onChangeCallback(),
        this
    }
    setFromAxisAngle(e, t) {
        const n = t / 2
          , r = Math.sin(n);
        return this._x = e.x * r,
        this._y = e.y * r,
        this._z = e.z * r,
        this._w = Math.cos(n),
        this._onChangeCallback(),
        this
    }
    setFromRotationMatrix(e) {
        const t = e.elements
          , n = t[0]
          , r = t[4]
          , s = t[8]
          , a = t[1]
          , o = t[5]
          , l = t[9]
          , c = t[2]
          , h = t[6]
          , u = t[10]
          , f = n + o + u;
        if (f > 0) {
            const d = .5 / Math.sqrt(f + 1);
            this._w = .25 / d,
            this._x = (h - l) * d,
            this._y = (s - c) * d,
            this._z = (a - r) * d
        } else if (n > o && n > u) {
            const d = 2 * Math.sqrt(1 + n - o - u);
            this._w = (h - l) / d,
            this._x = .25 * d,
            this._y = (r + a) / d,
            this._z = (s + c) / d
        } else if (o > u) {
            const d = 2 * Math.sqrt(1 + o - n - u);
            this._w = (s - c) / d,
            this._x = (r + a) / d,
            this._y = .25 * d,
            this._z = (l + h) / d
        } else {
            const d = 2 * Math.sqrt(1 + u - n - o);
            this._w = (a - r) / d,
            this._x = (s + c) / d,
            this._y = (l + h) / d,
            this._z = .25 * d
        }
        return this._onChangeCallback(),
        this
    }
    setFromUnitVectors(e, t) {
        let n = e.dot(t) + 1;
        return n < Number.EPSILON ? (n = 0,
        Math.abs(e.x) > Math.abs(e.z) ? (this._x = -e.y,
        this._y = e.x,
        this._z = 0,
        this._w = n) : (this._x = 0,
        this._y = -e.z,
        this._z = e.y,
        this._w = n)) : (this._x = e.y * t.z - e.z * t.y,
        this._y = e.z * t.x - e.x * t.z,
        this._z = e.x * t.y - e.y * t.x,
        this._w = n),
        this.normalize()
    }
    angleTo(e) {
        return 2 * Math.acos(Math.abs(mt(this.dot(e), -1, 1)))
    }
    rotateTowards(e, t) {
        const n = this.angleTo(e);
        if (n === 0)
            return this;
        const r = Math.min(1, t / n);
        return this.slerp(e, r),
        this
    }
    identity() {
        return this.set(0, 0, 0, 1)
    }
    invert() {
        return this.conjugate()
    }
    conjugate() {
        return this._x *= -1,
        this._y *= -1,
        this._z *= -1,
        this._onChangeCallback(),
        this
    }
    dot(e) {
        return this._x * e._x + this._y * e._y + this._z * e._z + this._w * e._w
    }
    lengthSq() {
        return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w
    }
    length() {
        return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w)
    }
    normalize() {
        let e = this.length();
        return e === 0 ? (this._x = 0,
        this._y = 0,
        this._z = 0,
        this._w = 1) : (e = 1 / e,
        this._x = this._x * e,
        this._y = this._y * e,
        this._z = this._z * e,
        this._w = this._w * e),
        this._onChangeCallback(),
        this
    }
    multiply(e) {
        return this.multiplyQuaternions(this, e)
    }
    premultiply(e) {
        return this.multiplyQuaternions(e, this)
    }
    multiplyQuaternions(e, t) {
        const n = e._x
          , r = e._y
          , s = e._z
          , a = e._w
          , o = t._x
          , l = t._y
          , c = t._z
          , h = t._w;
        return this._x = n * h + a * o + r * c - s * l,
        this._y = r * h + a * l + s * o - n * c,
        this._z = s * h + a * c + n * l - r * o,
        this._w = a * h - n * o - r * l - s * c,
        this._onChangeCallback(),
        this
    }
    slerp(e, t) {
        if (t === 0)
            return this;
        if (t === 1)
            return this.copy(e);
        const n = this._x
          , r = this._y
          , s = this._z
          , a = this._w;
        let o = a * e._w + n * e._x + r * e._y + s * e._z;
        if (o < 0 ? (this._w = -e._w,
        this._x = -e._x,
        this._y = -e._y,
        this._z = -e._z,
        o = -o) : this.copy(e),
        o >= 1)
            return this._w = a,
            this._x = n,
            this._y = r,
            this._z = s,
            this;
        const l = 1 - o * o;
        if (l <= Number.EPSILON) {
            const d = 1 - t;
            return this._w = d * a + t * this._w,
            this._x = d * n + t * this._x,
            this._y = d * r + t * this._y,
            this._z = d * s + t * this._z,
            this.normalize(),
            this
        }
        const c = Math.sqrt(l)
          , h = Math.atan2(c, o)
          , u = Math.sin((1 - t) * h) / c
          , f = Math.sin(t * h) / c;
        return this._w = a * u + this._w * f,
        this._x = n * u + this._x * f,
        this._y = r * u + this._y * f,
        this._z = s * u + this._z * f,
        this._onChangeCallback(),
        this
    }
    slerpQuaternions(e, t, n) {
        return this.copy(e).slerp(t, n)
    }
    random() {
        const e = 2 * Math.PI * Math.random()
          , t = 2 * Math.PI * Math.random()
          , n = Math.random()
          , r = Math.sqrt(1 - n)
          , s = Math.sqrt(n);
        return this.set(r * Math.sin(e), r * Math.cos(e), s * Math.sin(t), s * Math.cos(t))
    }
    equals(e) {
        return e._x === this._x && e._y === this._y && e._z === this._z && e._w === this._w
    }
    fromArray(e, t=0) {
        return this._x = e[t],
        this._y = e[t + 1],
        this._z = e[t + 2],
        this._w = e[t + 3],
        this._onChangeCallback(),
        this
    }
    toArray(e=[], t=0) {
        return e[t] = this._x,
        e[t + 1] = this._y,
        e[t + 2] = this._z,
        e[t + 3] = this._w,
        e
    }
    fromBufferAttribute(e, t) {
        return this._x = e.getX(t),
        this._y = e.getY(t),
        this._z = e.getZ(t),
        this._w = e.getW(t),
        this._onChangeCallback(),
        this
    }
    toJSON() {
        return this.toArray()
    }
    _onChange(e) {
        return this._onChangeCallback = e,
        this
    }
    _onChangeCallback() {}
    *[Symbol.iterator]() {
        yield this._x,
        yield this._y,
        yield this._z,
        yield this._w
    }
}
class R {
    constructor(e=0, t=0, n=0) {
        R.prototype.isVector3 = !0,
        this.x = e,
        this.y = t,
        this.z = n
    }
    set(e, t, n) {
        return n === void 0 && (n = this.z),
        this.x = e,
        this.y = t,
        this.z = n,
        this
    }
    setScalar(e) {
        return this.x = e,
        this.y = e,
        this.z = e,
        this
    }
    setX(e) {
        return this.x = e,
        this
    }
    setY(e) {
        return this.y = e,
        this
    }
    setZ(e) {
        return this.z = e,
        this
    }
    setComponent(e, t) {
        switch (e) {
        case 0:
            this.x = t;
            break;
        case 1:
            this.y = t;
            break;
        case 2:
            this.z = t;
            break;
        default:
            throw new Error("index is out of range: " + e)
        }
        return this
    }
    getComponent(e) {
        switch (e) {
        case 0:
            return this.x;
        case 1:
            return this.y;
        case 2:
            return this.z;
        default:
            throw new Error("index is out of range: " + e)
        }
    }
    clone() {
        return new this.constructor(this.x,this.y,this.z)
    }
    copy(e) {
        return this.x = e.x,
        this.y = e.y,
        this.z = e.z,
        this
    }
    add(e) {
        return this.x += e.x,
        this.y += e.y,
        this.z += e.z,
        this
    }
    addScalar(e) {
        return this.x += e,
        this.y += e,
        this.z += e,
        this
    }
    addVectors(e, t) {
        return this.x = e.x + t.x,
        this.y = e.y + t.y,
        this.z = e.z + t.z,
        this
    }
    addScaledVector(e, t) {
        return this.x += e.x * t,
        this.y += e.y * t,
        this.z += e.z * t,
        this
    }
    sub(e) {
        return this.x -= e.x,
        this.y -= e.y,
        this.z -= e.z,
        this
    }
    subScalar(e) {
        return this.x -= e,
        this.y -= e,
        this.z -= e,
        this
    }
    subVectors(e, t) {
        return this.x = e.x - t.x,
        this.y = e.y - t.y,
        this.z = e.z - t.z,
        this
    }
    multiply(e) {
        return this.x *= e.x,
        this.y *= e.y,
        this.z *= e.z,
        this
    }
    multiplyScalar(e) {
        return this.x *= e,
        this.y *= e,
        this.z *= e,
        this
    }
    multiplyVectors(e, t) {
        return this.x = e.x * t.x,
        this.y = e.y * t.y,
        this.z = e.z * t.z,
        this
    }
    applyEuler(e) {
        return this.applyQuaternion(Uo.setFromEuler(e))
    }
    applyAxisAngle(e, t) {
        return this.applyQuaternion(Uo.setFromAxisAngle(e, t))
    }
    applyMatrix3(e) {
        const t = this.x
          , n = this.y
          , r = this.z
          , s = e.elements;
        return this.x = s[0] * t + s[3] * n + s[6] * r,
        this.y = s[1] * t + s[4] * n + s[7] * r,
        this.z = s[2] * t + s[5] * n + s[8] * r,
        this
    }
    applyNormalMatrix(e) {
        return this.applyMatrix3(e).normalize()
    }
    applyMatrix4(e) {
        const t = this.x
          , n = this.y
          , r = this.z
          , s = e.elements
          , a = 1 / (s[3] * t + s[7] * n + s[11] * r + s[15]);
        return this.x = (s[0] * t + s[4] * n + s[8] * r + s[12]) * a,
        this.y = (s[1] * t + s[5] * n + s[9] * r + s[13]) * a,
        this.z = (s[2] * t + s[6] * n + s[10] * r + s[14]) * a,
        this
    }
    applyQuaternion(e) {
        const t = this.x
          , n = this.y
          , r = this.z
          , s = e.x
          , a = e.y
          , o = e.z
          , l = e.w
          , c = 2 * (a * r - o * n)
          , h = 2 * (o * t - s * r)
          , u = 2 * (s * n - a * t);
        return this.x = t + l * c + a * u - o * h,
        this.y = n + l * h + o * c - s * u,
        this.z = r + l * u + s * h - a * c,
        this
    }
    project(e) {
        return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)
    }
    unproject(e) {
        return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)
    }
    transformDirection(e) {
        const t = this.x
          , n = this.y
          , r = this.z
          , s = e.elements;
        return this.x = s[0] * t + s[4] * n + s[8] * r,
        this.y = s[1] * t + s[5] * n + s[9] * r,
        this.z = s[2] * t + s[6] * n + s[10] * r,
        this.normalize()
    }
    divide(e) {
        return this.x /= e.x,
        this.y /= e.y,
        this.z /= e.z,
        this
    }
    divideScalar(e) {
        return this.multiplyScalar(1 / e)
    }
    min(e) {
        return this.x = Math.min(this.x, e.x),
        this.y = Math.min(this.y, e.y),
        this.z = Math.min(this.z, e.z),
        this
    }
    max(e) {
        return this.x = Math.max(this.x, e.x),
        this.y = Math.max(this.y, e.y),
        this.z = Math.max(this.z, e.z),
        this
    }
    clamp(e, t) {
        return this.x = Math.max(e.x, Math.min(t.x, this.x)),
        this.y = Math.max(e.y, Math.min(t.y, this.y)),
        this.z = Math.max(e.z, Math.min(t.z, this.z)),
        this
    }
    clampScalar(e, t) {
        return this.x = Math.max(e, Math.min(t, this.x)),
        this.y = Math.max(e, Math.min(t, this.y)),
        this.z = Math.max(e, Math.min(t, this.z)),
        this
    }
    clampLength(e, t) {
        const n = this.length();
        return this.divideScalar(n || 1).multiplyScalar(Math.max(e, Math.min(t, n)))
    }
    floor() {
        return this.x = Math.floor(this.x),
        this.y = Math.floor(this.y),
        this.z = Math.floor(this.z),
        this
    }
    ceil() {
        return this.x = Math.ceil(this.x),
        this.y = Math.ceil(this.y),
        this.z = Math.ceil(this.z),
        this
    }
    round() {
        return this.x = Math.round(this.x),
        this.y = Math.round(this.y),
        this.z = Math.round(this.z),
        this
    }
    roundToZero() {
        return this.x = Math.trunc(this.x),
        this.y = Math.trunc(this.y),
        this.z = Math.trunc(this.z),
        this
    }
    negate() {
        return this.x = -this.x,
        this.y = -this.y,
        this.z = -this.z,
        this
    }
    dot(e) {
        return this.x * e.x + this.y * e.y + this.z * e.z
    }
    lengthSq() {
        return this.x * this.x + this.y * this.y + this.z * this.z
    }
    length() {
        return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z)
    }
    manhattanLength() {
        return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z)
    }
    normalize() {
        return this.divideScalar(this.length() || 1)
    }
    setLength(e) {
        return this.normalize().multiplyScalar(e)
    }
    lerp(e, t) {
        return this.x += (e.x - this.x) * t,
        this.y += (e.y - this.y) * t,
        this.z += (e.z - this.z) * t,
        this
    }
    lerpVectors(e, t, n) {
        return this.x = e.x + (t.x - e.x) * n,
        this.y = e.y + (t.y - e.y) * n,
        this.z = e.z + (t.z - e.z) * n,
        this
    }
    cross(e) {
        return this.crossVectors(this, e)
    }
    crossVectors(e, t) {
        const n = e.x
          , r = e.y
          , s = e.z
          , a = t.x
          , o = t.y
          , l = t.z;
        return this.x = r * l - s * o,
        this.y = s * a - n * l,
        this.z = n * o - r * a,
        this
    }
    projectOnVector(e) {
        const t = e.lengthSq();
        if (t === 0)
            return this.set(0, 0, 0);
        const n = e.dot(this) / t;
        return this.copy(e).multiplyScalar(n)
    }
    projectOnPlane(e) {
        return Rs.copy(this).projectOnVector(e),
        this.sub(Rs)
    }
    reflect(e) {
        return this.sub(Rs.copy(e).multiplyScalar(2 * this.dot(e)))
    }
    angleTo(e) {
        const t = Math.sqrt(this.lengthSq() * e.lengthSq());
        if (t === 0)
            return Math.PI / 2;
        const n = this.dot(e) / t;
        return Math.acos(mt(n, -1, 1))
    }
    distanceTo(e) {
        return Math.sqrt(this.distanceToSquared(e))
    }
    distanceToSquared(e) {
        const t = this.x - e.x
          , n = this.y - e.y
          , r = this.z - e.z;
        return t * t + n * n + r * r
    }
    manhattanDistanceTo(e) {
        return Math.abs(this.x - e.x) + Math.abs(this.y - e.y) + Math.abs(this.z - e.z)
    }
    setFromSpherical(e) {
        return this.setFromSphericalCoords(e.radius, e.phi, e.theta)
    }
    setFromSphericalCoords(e, t, n) {
        const r = Math.sin(t) * e;
        return this.x = r * Math.sin(n),
        this.y = Math.cos(t) * e,
        this.z = r * Math.cos(n),
        this
    }
    setFromCylindrical(e) {
        return this.setFromCylindricalCoords(e.radius, e.theta, e.y)
    }
    setFromCylindricalCoords(e, t, n) {
        return this.x = e * Math.sin(t),
        this.y = n,
        this.z = e * Math.cos(t),
        this
    }
    setFromMatrixPosition(e) {
        const t = e.elements;
        return this.x = t[12],
        this.y = t[13],
        this.z = t[14],
        this
    }
    setFromMatrixScale(e) {
        const t = this.setFromMatrixColumn(e, 0).length()
          , n = this.setFromMatrixColumn(e, 1).length()
          , r = this.setFromMatrixColumn(e, 2).length();
        return this.x = t,
        this.y = n,
        this.z = r,
        this
    }
    setFromMatrixColumn(e, t) {
        return this.fromArray(e.elements, t * 4)
    }
    setFromMatrix3Column(e, t) {
        return this.fromArray(e.elements, t * 3)
    }
    setFromEuler(e) {
        return this.x = e._x,
        this.y = e._y,
        this.z = e._z,
        this
    }
    setFromColor(e) {
        return this.x = e.r,
        this.y = e.g,
        this.z = e.b,
        this
    }
    equals(e) {
        return e.x === this.x && e.y === this.y && e.z === this.z
    }
    fromArray(e, t=0) {
        return this.x = e[t],
        this.y = e[t + 1],
        this.z = e[t + 2],
        this
    }
    toArray(e=[], t=0) {
        return e[t] = this.x,
        e[t + 1] = this.y,
        e[t + 2] = this.z,
        e
    }
    fromBufferAttribute(e, t) {
        return this.x = e.getX(t),
        this.y = e.getY(t),
        this.z = e.getZ(t),
        this
    }
    random() {
        return this.x = Math.random(),
        this.y = Math.random(),
        this.z = Math.random(),
        this
    }
    randomDirection() {
        const e = Math.random() * Math.PI * 2
          , t = Math.random() * 2 - 1
          , n = Math.sqrt(1 - t * t);
        return this.x = n * Math.cos(e),
        this.y = t,
        this.z = n * Math.sin(e),
        this
    }
    *[Symbol.iterator]() {
        yield this.x,
        yield this.y,
        yield this.z
    }
}
const Rs = new R
  , Uo = new Ct;
class Fi {
    constructor(e=new R(1 / 0,1 / 0,1 / 0), t=new R(-1 / 0,-1 / 0,-1 / 0)) {
        this.isBox3 = !0,
        this.min = e,
        this.max = t
    }
    set(e, t) {
        return this.min.copy(e),
        this.max.copy(t),
        this
    }
    setFromArray(e) {
        this.makeEmpty();
        for (let t = 0, n = e.length; t < n; t += 3)
            this.expandByPoint(kt.fromArray(e, t));
        return this
    }
    setFromBufferAttribute(e) {
        this.makeEmpty();
        for (let t = 0, n = e.count; t < n; t++)
            this.expandByPoint(kt.fromBufferAttribute(e, t));
        return this
    }
    setFromPoints(e) {
        this.makeEmpty();
        for (let t = 0, n = e.length; t < n; t++)
            this.expandByPoint(e[t]);
        return this
    }
    setFromCenterAndSize(e, t) {
        const n = kt.copy(t).multiplyScalar(.5);
        return this.min.copy(e).sub(n),
        this.max.copy(e).add(n),
        this
    }
    setFromObject(e, t=!1) {
        return this.makeEmpty(),
        this.expandByObject(e, t)
    }
    clone() {
        return new this.constructor().copy(this)
    }
    copy(e) {
        return this.min.copy(e.min),
        this.max.copy(e.max),
        this
    }
    makeEmpty() {
        return this.min.x = this.min.y = this.min.z = 1 / 0,
        this.max.x = this.max.y = this.max.z = -1 / 0,
        this
    }
    isEmpty() {
        return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z
    }
    getCenter(e) {
        return this.isEmpty() ? e.set(0, 0, 0) : e.addVectors(this.min, this.max).multiplyScalar(.5)
    }
    getSize(e) {
        return this.isEmpty() ? e.set(0, 0, 0) : e.subVectors(this.max, this.min)
    }
    expandByPoint(e) {
        return this.min.min(e),
        this.max.max(e),
        this
    }
    expandByVector(e) {
        return this.min.sub(e),
        this.max.add(e),
        this
    }
    expandByScalar(e) {
        return this.min.addScalar(-e),
        this.max.addScalar(e),
        this
    }
    expandByObject(e, t=!1) {
        e.updateWorldMatrix(!1, !1);
        const n = e.geometry;
        if (n !== void 0) {
            const s = n.getAttribute("position");
            if (t === !0 && s !== void 0 && e.isInstancedMesh !== !0)
                for (let a = 0, o = s.count; a < o; a++)
                    e.isMesh === !0 ? e.getVertexPosition(a, kt) : kt.fromBufferAttribute(s, a),
                    kt.applyMatrix4(e.matrixWorld),
                    this.expandByPoint(kt);
            else
                e.boundingBox !== void 0 ? (e.boundingBox === null && e.computeBoundingBox(),
                vr.copy(e.boundingBox)) : (n.boundingBox === null && n.computeBoundingBox(),
                vr.copy(n.boundingBox)),
                vr.applyMatrix4(e.matrixWorld),
                this.union(vr)
        }
        const r = e.children;
        for (let s = 0, a = r.length; s < a; s++)
            this.expandByObject(r[s], t);
        return this
    }
    containsPoint(e) {
        return !(e.x < this.min.x || e.x > this.max.x || e.y < this.min.y || e.y > this.max.y || e.z < this.min.z || e.z > this.max.z)
    }
    containsBox(e) {
        return this.min.x <= e.min.x && e.max.x <= this.max.x && this.min.y <= e.min.y && e.max.y <= this.max.y && this.min.z <= e.min.z && e.max.z <= this.max.z
    }
    getParameter(e, t) {
        return t.set((e.x - this.min.x) / (this.max.x - this.min.x), (e.y - this.min.y) / (this.max.y - this.min.y), (e.z - this.min.z) / (this.max.z - this.min.z))
    }
    intersectsBox(e) {
        return !(e.max.x < this.min.x || e.min.x > this.max.x || e.max.y < this.min.y || e.min.y > this.max.y || e.max.z < this.min.z || e.min.z > this.max.z)
    }
    intersectsSphere(e) {
        return this.clampPoint(e.center, kt),
        kt.distanceToSquared(e.center) <= e.radius * e.radius
    }
    intersectsPlane(e) {
        let t, n;
        return e.normal.x > 0 ? (t = e.normal.x * this.min.x,
        n = e.normal.x * this.max.x) : (t = e.normal.x * this.max.x,
        n = e.normal.x * this.min.x),
        e.normal.y > 0 ? (t += e.normal.y * this.min.y,
        n += e.normal.y * this.max.y) : (t += e.normal.y * this.max.y,
        n += e.normal.y * this.min.y),
        e.normal.z > 0 ? (t += e.normal.z * this.min.z,
        n += e.normal.z * this.max.z) : (t += e.normal.z * this.max.z,
        n += e.normal.z * this.min.z),
        t <= -e.constant && n >= -e.constant
    }
    intersectsTriangle(e) {
        if (this.isEmpty())
            return !1;
        this.getCenter(Ki),
        xr.subVectors(this.max, Ki),
        ai.subVectors(e.a, Ki),
        oi.subVectors(e.b, Ki),
        li.subVectors(e.c, Ki),
        Tn.subVectors(oi, ai),
        An.subVectors(li, oi),
        Hn.subVectors(ai, li);
        let t = [0, -Tn.z, Tn.y, 0, -An.z, An.y, 0, -Hn.z, Hn.y, Tn.z, 0, -Tn.x, An.z, 0, -An.x, Hn.z, 0, -Hn.x, -Tn.y, Tn.x, 0, -An.y, An.x, 0, -Hn.y, Hn.x, 0];
        return !Cs(t, ai, oi, li, xr) || (t = [1, 0, 0, 0, 1, 0, 0, 0, 1],
        !Cs(t, ai, oi, li, xr)) ? !1 : (Mr.crossVectors(Tn, An),
        t = [Mr.x, Mr.y, Mr.z],
        Cs(t, ai, oi, li, xr))
    }
    clampPoint(e, t) {
        return t.copy(e).clamp(this.min, this.max)
    }
    distanceToPoint(e) {
        return this.clampPoint(e, kt).distanceTo(e)
    }
    getBoundingSphere(e) {
        return this.isEmpty() ? e.makeEmpty() : (this.getCenter(e.center),
        e.radius = this.getSize(kt).length() * .5),
        e
    }
    intersect(e) {
        return this.min.max(e.min),
        this.max.min(e.max),
        this.isEmpty() && this.makeEmpty(),
        this
    }
    union(e) {
        return this.min.min(e.min),
        this.max.max(e.max),
        this
    }
    applyMatrix4(e) {
        return this.isEmpty() ? this : (hn[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(e),
        hn[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(e),
        hn[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e),
        hn[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(e),
        hn[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(e),
        hn[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e),
        hn[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(e),
        hn[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(e),
        this.setFromPoints(hn),
        this)
    }
    translate(e) {
        return this.min.add(e),
        this.max.add(e),
        this
    }
    equals(e) {
        return e.min.equals(this.min) && e.max.equals(this.max)
    }
}
const hn = [new R, new R, new R, new R, new R, new R, new R, new R]
  , kt = new R
  , vr = new Fi
  , ai = new R
  , oi = new R
  , li = new R
  , Tn = new R
  , An = new R
  , Hn = new R
  , Ki = new R
  , xr = new R
  , Mr = new R
  , Gn = new R;
function Cs(i, e, t, n, r) {
    for (let s = 0, a = i.length - 3; s <= a; s += 3) {
        Gn.fromArray(i, s);
        const o = r.x * Math.abs(Gn.x) + r.y * Math.abs(Gn.y) + r.z * Math.abs(Gn.z)
          , l = e.dot(Gn)
          , c = t.dot(Gn)
          , h = n.dot(Gn);
        if (Math.max(-Math.max(l, c, h), Math.min(l, c, h)) > o)
            return !1
    }
    return !0
}
const cu = new Fi
  , Zi = new R
  , Ps = new R;
class Oi {
    constructor(e=new R, t=-1) {
        this.isSphere = !0,
        this.center = e,
        this.radius = t
    }
    set(e, t) {
        return this.center.copy(e),
        this.radius = t,
        this
    }
    setFromPoints(e, t) {
        const n = this.center;
        t !== void 0 ? n.copy(t) : cu.setFromPoints(e).getCenter(n);
        let r = 0;
        for (let s = 0, a = e.length; s < a; s++)
            r = Math.max(r, n.distanceToSquared(e[s]));
        return this.radius = Math.sqrt(r),
        this
    }
    copy(e) {
        return this.center.copy(e.center),
        this.radius = e.radius,
        this
    }
    isEmpty() {
        return this.radius < 0
    }
    makeEmpty() {
        return this.center.set(0, 0, 0),
        this.radius = -1,
        this
    }
    containsPoint(e) {
        return e.distanceToSquared(this.center) <= this.radius * this.radius
    }
    distanceToPoint(e) {
        return e.distanceTo(this.center) - this.radius
    }
    intersectsSphere(e) {
        const t = this.radius + e.radius;
        return e.center.distanceToSquared(this.center) <= t * t
    }
    intersectsBox(e) {
        return e.intersectsSphere(this)
    }
    intersectsPlane(e) {
        return Math.abs(e.distanceToPoint(this.center)) <= this.radius
    }
    clampPoint(e, t) {
        const n = this.center.distanceToSquared(e);
        return t.copy(e),
        n > this.radius * this.radius && (t.sub(this.center).normalize(),
        t.multiplyScalar(this.radius).add(this.center)),
        t
    }
    getBoundingBox(e) {
        return this.isEmpty() ? (e.makeEmpty(),
        e) : (e.set(this.center, this.center),
        e.expandByScalar(this.radius),
        e)
    }
    applyMatrix4(e) {
        return this.center.applyMatrix4(e),
        this.radius = this.radius * e.getMaxScaleOnAxis(),
        this
    }
    translate(e) {
        return this.center.add(e),
        this
    }
    expandByPoint(e) {
        if (this.isEmpty())
            return this.center.copy(e),
            this.radius = 0,
            this;
        Zi.subVectors(e, this.center);
        const t = Zi.lengthSq();
        if (t > this.radius * this.radius) {
            const n = Math.sqrt(t)
              , r = (n - this.radius) * .5;
            this.center.addScaledVector(Zi, r / n),
            this.radius += r
        }
        return this
    }
    union(e) {
        return e.isEmpty() ? this : this.isEmpty() ? (this.copy(e),
        this) : (this.center.equals(e.center) === !0 ? this.radius = Math.max(this.radius, e.radius) : (Ps.subVectors(e.center, this.center).setLength(e.radius),
        this.expandByPoint(Zi.copy(e.center).add(Ps)),
        this.expandByPoint(Zi.copy(e.center).sub(Ps))),
        this)
    }
    equals(e) {
        return e.center.equals(this.center) && e.radius === this.radius
    }
    clone() {
        return new this.constructor().copy(this)
    }
}
const un = new R
  , Ls = new R
  , yr = new R
  , bn = new R
  , Is = new R
  , Sr = new R
  , Ds = new R;
class va {
    constructor(e=new R, t=new R(0,0,-1)) {
        this.origin = e,
        this.direction = t
    }
    set(e, t) {
        return this.origin.copy(e),
        this.direction.copy(t),
        this
    }
    copy(e) {
        return this.origin.copy(e.origin),
        this.direction.copy(e.direction),
        this
    }
    at(e, t) {
        return t.copy(this.origin).addScaledVector(this.direction, e)
    }
    lookAt(e) {
        return this.direction.copy(e).sub(this.origin).normalize(),
        this
    }
    recast(e) {
        return this.origin.copy(this.at(e, un)),
        this
    }
    closestPointToPoint(e, t) {
        t.subVectors(e, this.origin);
        const n = t.dot(this.direction);
        return n < 0 ? t.copy(this.origin) : t.copy(this.origin).addScaledVector(this.direction, n)
    }
    distanceToPoint(e) {
        return Math.sqrt(this.distanceSqToPoint(e))
    }
    distanceSqToPoint(e) {
        const t = un.subVectors(e, this.origin).dot(this.direction);
        return t < 0 ? this.origin.distanceToSquared(e) : (un.copy(this.origin).addScaledVector(this.direction, t),
        un.distanceToSquared(e))
    }
    distanceSqToSegment(e, t, n, r) {
        Ls.copy(e).add(t).multiplyScalar(.5),
        yr.copy(t).sub(e).normalize(),
        bn.copy(this.origin).sub(Ls);
        const s = e.distanceTo(t) * .5
          , a = -this.direction.dot(yr)
          , o = bn.dot(this.direction)
          , l = -bn.dot(yr)
          , c = bn.lengthSq()
          , h = Math.abs(1 - a * a);
        let u, f, d, g;
        if (h > 0)
            if (u = a * l - o,
            f = a * o - l,
            g = s * h,
            u >= 0)
                if (f >= -g)
                    if (f <= g) {
                        const _ = 1 / h;
                        u *= _,
                        f *= _,
                        d = u * (u + a * f + 2 * o) + f * (a * u + f + 2 * l) + c
                    } else
                        f = s,
                        u = Math.max(0, -(a * f + o)),
                        d = -u * u + f * (f + 2 * l) + c;
                else
                    f = -s,
                    u = Math.max(0, -(a * f + o)),
                    d = -u * u + f * (f + 2 * l) + c;
            else
                f <= -g ? (u = Math.max(0, -(-a * s + o)),
                f = u > 0 ? -s : Math.min(Math.max(-s, -l), s),
                d = -u * u + f * (f + 2 * l) + c) : f <= g ? (u = 0,
                f = Math.min(Math.max(-s, -l), s),
                d = f * (f + 2 * l) + c) : (u = Math.max(0, -(a * s + o)),
                f = u > 0 ? s : Math.min(Math.max(-s, -l), s),
                d = -u * u + f * (f + 2 * l) + c);
        else
            f = a > 0 ? -s : s,
            u = Math.max(0, -(a * f + o)),
            d = -u * u + f * (f + 2 * l) + c;
        return n && n.copy(this.origin).addScaledVector(this.direction, u),
        r && r.copy(Ls).addScaledVector(yr, f),
        d
    }
    intersectSphere(e, t) {
        un.subVectors(e.center, this.origin);
        const n = un.dot(this.direction)
          , r = un.dot(un) - n * n
          , s = e.radius * e.radius;
        if (r > s)
            return null;
        const a = Math.sqrt(s - r)
          , o = n - a
          , l = n + a;
        return l < 0 ? null : o < 0 ? this.at(l, t) : this.at(o, t)
    }
    intersectsSphere(e) {
        return this.distanceSqToPoint(e.center) <= e.radius * e.radius
    }
    distanceToPlane(e) {
        const t = e.normal.dot(this.direction);
        if (t === 0)
            return e.distanceToPoint(this.origin) === 0 ? 0 : null;
        const n = -(this.origin.dot(e.normal) + e.constant) / t;
        return n >= 0 ? n : null
    }
    intersectPlane(e, t) {
        const n = this.distanceToPlane(e);
        return n === null ? null : this.at(n, t)
    }
    intersectsPlane(e) {
        const t = e.distanceToPoint(this.origin);
        return t === 0 || e.normal.dot(this.direction) * t < 0
    }
    intersectBox(e, t) {
        let n, r, s, a, o, l;
        const c = 1 / this.direction.x
          , h = 1 / this.direction.y
          , u = 1 / this.direction.z
          , f = this.origin;
        return c >= 0 ? (n = (e.min.x - f.x) * c,
        r = (e.max.x - f.x) * c) : (n = (e.max.x - f.x) * c,
        r = (e.min.x - f.x) * c),
        h >= 0 ? (s = (e.min.y - f.y) * h,
        a = (e.max.y - f.y) * h) : (s = (e.max.y - f.y) * h,
        a = (e.min.y - f.y) * h),
        n > a || s > r || ((s > n || isNaN(n)) && (n = s),
        (a < r || isNaN(r)) && (r = a),
        u >= 0 ? (o = (e.min.z - f.z) * u,
        l = (e.max.z - f.z) * u) : (o = (e.max.z - f.z) * u,
        l = (e.min.z - f.z) * u),
        n > l || o > r) || ((o > n || n !== n) && (n = o),
        (l < r || r !== r) && (r = l),
        r < 0) ? null : this.at(n >= 0 ? n : r, t)
    }
    intersectsBox(e) {
        return this.intersectBox(e, un) !== null
    }
    intersectTriangle(e, t, n, r, s) {
        Is.subVectors(t, e),
        Sr.subVectors(n, e),
        Ds.crossVectors(Is, Sr);
        let a = this.direction.dot(Ds), o;
        if (a > 0) {
            if (r)
                return null;
            o = 1
        } else if (a < 0)
            o = -1,
            a = -a;
        else
            return null;
        bn.subVectors(this.origin, e);
        const l = o * this.direction.dot(Sr.crossVectors(bn, Sr));
        if (l < 0)
            return null;
        const c = o * this.direction.dot(Is.cross(bn));
        if (c < 0 || l + c > a)
            return null;
        const h = -o * bn.dot(Ds);
        return h < 0 ? null : this.at(h / a, s)
    }
    applyMatrix4(e) {
        return this.origin.applyMatrix4(e),
        this.direction.transformDirection(e),
        this
    }
    equals(e) {
        return e.origin.equals(this.origin) && e.direction.equals(this.direction)
    }
    clone() {
        return new this.constructor().copy(this)
    }
}
class pe {
    constructor(e, t, n, r, s, a, o, l, c, h, u, f, d, g, _, p) {
        pe.prototype.isMatrix4 = !0,
        this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
        e !== void 0 && this.set(e, t, n, r, s, a, o, l, c, h, u, f, d, g, _, p)
    }
    set(e, t, n, r, s, a, o, l, c, h, u, f, d, g, _, p) {
        const m = this.elements;
        return m[0] = e,
        m[4] = t,
        m[8] = n,
        m[12] = r,
        m[1] = s,
        m[5] = a,
        m[9] = o,
        m[13] = l,
        m[2] = c,
        m[6] = h,
        m[10] = u,
        m[14] = f,
        m[3] = d,
        m[7] = g,
        m[11] = _,
        m[15] = p,
        this
    }
    identity() {
        return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1),
        this
    }
    clone() {
        return new pe().fromArray(this.elements)
    }
    copy(e) {
        const t = this.elements
          , n = e.elements;
        return t[0] = n[0],
        t[1] = n[1],
        t[2] = n[2],
        t[3] = n[3],
        t[4] = n[4],
        t[5] = n[5],
        t[6] = n[6],
        t[7] = n[7],
        t[8] = n[8],
        t[9] = n[9],
        t[10] = n[10],
        t[11] = n[11],
        t[12] = n[12],
        t[13] = n[13],
        t[14] = n[14],
        t[15] = n[15],
        this
    }
    copyPosition(e) {
        const t = this.elements
          , n = e.elements;
        return t[12] = n[12],
        t[13] = n[13],
        t[14] = n[14],
        this
    }
    setFromMatrix3(e) {
        const t = e.elements;
        return this.set(t[0], t[3], t[6], 0, t[1], t[4], t[7], 0, t[2], t[5], t[8], 0, 0, 0, 0, 1),
        this
    }
    extractBasis(e, t, n) {
        return e.setFromMatrixColumn(this, 0),
        t.setFromMatrixColumn(this, 1),
        n.setFromMatrixColumn(this, 2),
        this
    }
    makeBasis(e, t, n) {
        return this.set(e.x, t.x, n.x, 0, e.y, t.y, n.y, 0, e.z, t.z, n.z, 0, 0, 0, 0, 1),
        this
    }
    extractRotation(e) {
        const t = this.elements
          , n = e.elements
          , r = 1 / ci.setFromMatrixColumn(e, 0).length()
          , s = 1 / ci.setFromMatrixColumn(e, 1).length()
          , a = 1 / ci.setFromMatrixColumn(e, 2).length();
        return t[0] = n[0] * r,
        t[1] = n[1] * r,
        t[2] = n[2] * r,
        t[3] = 0,
        t[4] = n[4] * s,
        t[5] = n[5] * s,
        t[6] = n[6] * s,
        t[7] = 0,
        t[8] = n[8] * a,
        t[9] = n[9] * a,
        t[10] = n[10] * a,
        t[11] = 0,
        t[12] = 0,
        t[13] = 0,
        t[14] = 0,
        t[15] = 1,
        this
    }
    makeRotationFromEuler(e) {
        const t = this.elements
          , n = e.x
          , r = e.y
          , s = e.z
          , a = Math.cos(n)
          , o = Math.sin(n)
          , l = Math.cos(r)
          , c = Math.sin(r)
          , h = Math.cos(s)
          , u = Math.sin(s);
        if (e.order === "XYZ") {
            const f = a * h
              , d = a * u
              , g = o * h
              , _ = o * u;
            t[0] = l * h,
            t[4] = -l * u,
            t[8] = c,
            t[1] = d + g * c,
            t[5] = f - _ * c,
            t[9] = -o * l,
            t[2] = _ - f * c,
            t[6] = g + d * c,
            t[10] = a * l
        } else if (e.order === "YXZ") {
            const f = l * h
              , d = l * u
              , g = c * h
              , _ = c * u;
            t[0] = f + _ * o,
            t[4] = g * o - d,
            t[8] = a * c,
            t[1] = a * u,
            t[5] = a * h,
            t[9] = -o,
            t[2] = d * o - g,
            t[6] = _ + f * o,
            t[10] = a * l
        } else if (e.order === "ZXY") {
            const f = l * h
              , d = l * u
              , g = c * h
              , _ = c * u;
            t[0] = f - _ * o,
            t[4] = -a * u,
            t[8] = g + d * o,
            t[1] = d + g * o,
            t[5] = a * h,
            t[9] = _ - f * o,
            t[2] = -a * c,
            t[6] = o,
            t[10] = a * l
        } else if (e.order === "ZYX") {
            const f = a * h
              , d = a * u
              , g = o * h
              , _ = o * u;
            t[0] = l * h,
            t[4] = g * c - d,
            t[8] = f * c + _,
            t[1] = l * u,
            t[5] = _ * c + f,
            t[9] = d * c - g,
            t[2] = -c,
            t[6] = o * l,
            t[10] = a * l
        } else if (e.order === "YZX") {
            const f = a * l
              , d = a * c
              , g = o * l
              , _ = o * c;
            t[0] = l * h,
            t[4] = _ - f * u,
            t[8] = g * u + d,
            t[1] = u,
            t[5] = a * h,
            t[9] = -o * h,
            t[2] = -c * h,
            t[6] = d * u + g,
            t[10] = f - _ * u
        } else if (e.order === "XZY") {
            const f = a * l
              , d = a * c
              , g = o * l
              , _ = o * c;
            t[0] = l * h,
            t[4] = -u,
            t[8] = c * h,
            t[1] = f * u + _,
            t[5] = a * h,
            t[9] = d * u - g,
            t[2] = g * u - d,
            t[6] = o * h,
            t[10] = _ * u + f
        }
        return t[3] = 0,
        t[7] = 0,
        t[11] = 0,
        t[12] = 0,
        t[13] = 0,
        t[14] = 0,
        t[15] = 1,
        this
    }
    makeRotationFromQuaternion(e) {
        return this.compose(hu, e, uu)
    }
    lookAt(e, t, n) {
        const r = this.elements;
        return Ut.subVectors(e, t),
        Ut.lengthSq() === 0 && (Ut.z = 1),
        Ut.normalize(),
        wn.crossVectors(n, Ut),
        wn.lengthSq() === 0 && (Math.abs(n.z) === 1 ? Ut.x += 1e-4 : Ut.z += 1e-4,
        Ut.normalize(),
        wn.crossVectors(n, Ut)),
        wn.normalize(),
        Er.crossVectors(Ut, wn),
        r[0] = wn.x,
        r[4] = Er.x,
        r[8] = Ut.x,
        r[1] = wn.y,
        r[5] = Er.y,
        r[9] = Ut.y,
        r[2] = wn.z,
        r[6] = Er.z,
        r[10] = Ut.z,
        this
    }
    multiply(e) {
        return this.multiplyMatrices(this, e)
    }
    premultiply(e) {
        return this.multiplyMatrices(e, this)
    }
    multiplyMatrices(e, t) {
        const n = e.elements
          , r = t.elements
          , s = this.elements
          , a = n[0]
          , o = n[4]
          , l = n[8]
          , c = n[12]
          , h = n[1]
          , u = n[5]
          , f = n[9]
          , d = n[13]
          , g = n[2]
          , _ = n[6]
          , p = n[10]
          , m = n[14]
          , T = n[3]
          , v = n[7]
          , S = n[11]
          , D = n[15]
          , b = r[0]
          , w = r[4]
          , B = r[8]
          , E = r[12]
          , x = r[1]
          , U = r[5]
          , G = r[9]
          , P = r[13]
          , H = r[2]
          , q = r[6]
          , K = r[10]
          , ne = r[14]
          , z = r[3]
          , j = r[7]
          , Q = r[11]
          , fe = r[15];
        return s[0] = a * b + o * x + l * H + c * z,
        s[4] = a * w + o * U + l * q + c * j,
        s[8] = a * B + o * G + l * K + c * Q,
        s[12] = a * E + o * P + l * ne + c * fe,
        s[1] = h * b + u * x + f * H + d * z,
        s[5] = h * w + u * U + f * q + d * j,
        s[9] = h * B + u * G + f * K + d * Q,
        s[13] = h * E + u * P + f * ne + d * fe,
        s[2] = g * b + _ * x + p * H + m * z,
        s[6] = g * w + _ * U + p * q + m * j,
        s[10] = g * B + _ * G + p * K + m * Q,
        s[14] = g * E + _ * P + p * ne + m * fe,
        s[3] = T * b + v * x + S * H + D * z,
        s[7] = T * w + v * U + S * q + D * j,
        s[11] = T * B + v * G + S * K + D * Q,
        s[15] = T * E + v * P + S * ne + D * fe,
        this
    }
    multiplyScalar(e) {
        const t = this.elements;
        return t[0] *= e,
        t[4] *= e,
        t[8] *= e,
        t[12] *= e,
        t[1] *= e,
        t[5] *= e,
        t[9] *= e,
        t[13] *= e,
        t[2] *= e,
        t[6] *= e,
        t[10] *= e,
        t[14] *= e,
        t[3] *= e,
        t[7] *= e,
        t[11] *= e,
        t[15] *= e,
        this
    }
    determinant() {
        const e = this.elements
          , t = e[0]
          , n = e[4]
          , r = e[8]
          , s = e[12]
          , a = e[1]
          , o = e[5]
          , l = e[9]
          , c = e[13]
          , h = e[2]
          , u = e[6]
          , f = e[10]
          , d = e[14]
          , g = e[3]
          , _ = e[7]
          , p = e[11]
          , m = e[15];
        return g * (+s * l * u - r * c * u - s * o * f + n * c * f + r * o * d - n * l * d) + _ * (+t * l * d - t * c * f + s * a * f - r * a * d + r * c * h - s * l * h) + p * (+t * c * u - t * o * d - s * a * u + n * a * d + s * o * h - n * c * h) + m * (-r * o * h - t * l * u + t * o * f + r * a * u - n * a * f + n * l * h)
    }
    transpose() {
        const e = this.elements;
        let t;
        return t = e[1],
        e[1] = e[4],
        e[4] = t,
        t = e[2],
        e[2] = e[8],
        e[8] = t,
        t = e[6],
        e[6] = e[9],
        e[9] = t,
        t = e[3],
        e[3] = e[12],
        e[12] = t,
        t = e[7],
        e[7] = e[13],
        e[13] = t,
        t = e[11],
        e[11] = e[14],
        e[14] = t,
        this
    }
    setPosition(e, t, n) {
        const r = this.elements;
        return e.isVector3 ? (r[12] = e.x,
        r[13] = e.y,
        r[14] = e.z) : (r[12] = e,
        r[13] = t,
        r[14] = n),
        this
    }
    invert() {
        const e = this.elements
          , t = e[0]
          , n = e[1]
          , r = e[2]
          , s = e[3]
          , a = e[4]
          , o = e[5]
          , l = e[6]
          , c = e[7]
          , h = e[8]
          , u = e[9]
          , f = e[10]
          , d = e[11]
          , g = e[12]
          , _ = e[13]
          , p = e[14]
          , m = e[15]
          , T = u * p * c - _ * f * c + _ * l * d - o * p * d - u * l * m + o * f * m
          , v = g * f * c - h * p * c - g * l * d + a * p * d + h * l * m - a * f * m
          , S = h * _ * c - g * u * c + g * o * d - a * _ * d - h * o * m + a * u * m
          , D = g * u * l - h * _ * l - g * o * f + a * _ * f + h * o * p - a * u * p
          , b = t * T + n * v + r * S + s * D;
        if (b === 0)
            return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
        const w = 1 / b;
        return e[0] = T * w,
        e[1] = (_ * f * s - u * p * s - _ * r * d + n * p * d + u * r * m - n * f * m) * w,
        e[2] = (o * p * s - _ * l * s + _ * r * c - n * p * c - o * r * m + n * l * m) * w,
        e[3] = (u * l * s - o * f * s - u * r * c + n * f * c + o * r * d - n * l * d) * w,
        e[4] = v * w,
        e[5] = (h * p * s - g * f * s + g * r * d - t * p * d - h * r * m + t * f * m) * w,
        e[6] = (g * l * s - a * p * s - g * r * c + t * p * c + a * r * m - t * l * m) * w,
        e[7] = (a * f * s - h * l * s + h * r * c - t * f * c - a * r * d + t * l * d) * w,
        e[8] = S * w,
        e[9] = (g * u * s - h * _ * s - g * n * d + t * _ * d + h * n * m - t * u * m) * w,
        e[10] = (a * _ * s - g * o * s + g * n * c - t * _ * c - a * n * m + t * o * m) * w,
        e[11] = (h * o * s - a * u * s - h * n * c + t * u * c + a * n * d - t * o * d) * w,
        e[12] = D * w,
        e[13] = (h * _ * r - g * u * r + g * n * f - t * _ * f - h * n * p + t * u * p) * w,
        e[14] = (g * o * r - a * _ * r - g * n * l + t * _ * l + a * n * p - t * o * p) * w,
        e[15] = (a * u * r - h * o * r + h * n * l - t * u * l - a * n * f + t * o * f) * w,
        this
    }
    scale(e) {
        const t = this.elements
          , n = e.x
          , r = e.y
          , s = e.z;
        return t[0] *= n,
        t[4] *= r,
        t[8] *= s,
        t[1] *= n,
        t[5] *= r,
        t[9] *= s,
        t[2] *= n,
        t[6] *= r,
        t[10] *= s,
        t[3] *= n,
        t[7] *= r,
        t[11] *= s,
        this
    }
    getMaxScaleOnAxis() {
        const e = this.elements
          , t = e[0] * e[0] + e[1] * e[1] + e[2] * e[2]
          , n = e[4] * e[4] + e[5] * e[5] + e[6] * e[6]
          , r = e[8] * e[8] + e[9] * e[9] + e[10] * e[10];
        return Math.sqrt(Math.max(t, n, r))
    }
    makeTranslation(e, t, n) {
        return e.isVector3 ? this.set(1, 0, 0, e.x, 0, 1, 0, e.y, 0, 0, 1, e.z, 0, 0, 0, 1) : this.set(1, 0, 0, e, 0, 1, 0, t, 0, 0, 1, n, 0, 0, 0, 1),
        this
    }
    makeRotationX(e) {
        const t = Math.cos(e)
          , n = Math.sin(e);
        return this.set(1, 0, 0, 0, 0, t, -n, 0, 0, n, t, 0, 0, 0, 0, 1),
        this
    }
    makeRotationY(e) {
        const t = Math.cos(e)
          , n = Math.sin(e);
        return this.set(t, 0, n, 0, 0, 1, 0, 0, -n, 0, t, 0, 0, 0, 0, 1),
        this
    }
    makeRotationZ(e) {
        const t = Math.cos(e)
          , n = Math.sin(e);
        return this.set(t, -n, 0, 0, n, t, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1),
        this
    }
    makeRotationAxis(e, t) {
        const n = Math.cos(t)
          , r = Math.sin(t)
          , s = 1 - n
          , a = e.x
          , o = e.y
          , l = e.z
          , c = s * a
          , h = s * o;
        return this.set(c * a + n, c * o - r * l, c * l + r * o, 0, c * o + r * l, h * o + n, h * l - r * a, 0, c * l - r * o, h * l + r * a, s * l * l + n, 0, 0, 0, 0, 1),
        this
    }
    makeScale(e, t, n) {
        return this.set(e, 0, 0, 0, 0, t, 0, 0, 0, 0, n, 0, 0, 0, 0, 1),
        this
    }
    makeShear(e, t, n, r, s, a) {
        return this.set(1, n, s, 0, e, 1, a, 0, t, r, 1, 0, 0, 0, 0, 1),
        this
    }
    compose(e, t, n) {
        const r = this.elements
          , s = t._x
          , a = t._y
          , o = t._z
          , l = t._w
          , c = s + s
          , h = a + a
          , u = o + o
          , f = s * c
          , d = s * h
          , g = s * u
          , _ = a * h
          , p = a * u
          , m = o * u
          , T = l * c
          , v = l * h
          , S = l * u
          , D = n.x
          , b = n.y
          , w = n.z;
        return r[0] = (1 - (_ + m)) * D,
        r[1] = (d + S) * D,
        r[2] = (g - v) * D,
        r[3] = 0,
        r[4] = (d - S) * b,
        r[5] = (1 - (f + m)) * b,
        r[6] = (p + T) * b,
        r[7] = 0,
        r[8] = (g + v) * w,
        r[9] = (p - T) * w,
        r[10] = (1 - (f + _)) * w,
        r[11] = 0,
        r[12] = e.x,
        r[13] = e.y,
        r[14] = e.z,
        r[15] = 1,
        this
    }
    decompose(e, t, n) {
        const r = this.elements;
        let s = ci.set(r[0], r[1], r[2]).length();
        const a = ci.set(r[4], r[5], r[6]).length()
          , o = ci.set(r[8], r[9], r[10]).length();
        this.determinant() < 0 && (s = -s),
        e.x = r[12],
        e.y = r[13],
        e.z = r[14],
        Ht.copy(this);
        const c = 1 / s
          , h = 1 / a
          , u = 1 / o;
        return Ht.elements[0] *= c,
        Ht.elements[1] *= c,
        Ht.elements[2] *= c,
        Ht.elements[4] *= h,
        Ht.elements[5] *= h,
        Ht.elements[6] *= h,
        Ht.elements[8] *= u,
        Ht.elements[9] *= u,
        Ht.elements[10] *= u,
        t.setFromRotationMatrix(Ht),
        n.x = s,
        n.y = a,
        n.z = o,
        this
    }
    makePerspective(e, t, n, r, s, a, o=Mn) {
        const l = this.elements
          , c = 2 * s / (t - e)
          , h = 2 * s / (n - r)
          , u = (t + e) / (t - e)
          , f = (n + r) / (n - r);
        let d, g;
        if (o === Mn)
            d = -(a + s) / (a - s),
            g = -2 * a * s / (a - s);
        else if (o === Qr)
            d = -a / (a - s),
            g = -a * s / (a - s);
        else
            throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: " + o);
        return l[0] = c,
        l[4] = 0,
        l[8] = u,
        l[12] = 0,
        l[1] = 0,
        l[5] = h,
        l[9] = f,
        l[13] = 0,
        l[2] = 0,
        l[6] = 0,
        l[10] = d,
        l[14] = g,
        l[3] = 0,
        l[7] = 0,
        l[11] = -1,
        l[15] = 0,
        this
    }
    makeOrthographic(e, t, n, r, s, a, o=Mn) {
        const l = this.elements
          , c = 1 / (t - e)
          , h = 1 / (n - r)
          , u = 1 / (a - s)
          , f = (t + e) * c
          , d = (n + r) * h;
        let g, _;
        if (o === Mn)
            g = (a + s) * u,
            _ = -2 * u;
        else if (o === Qr)
            g = s * u,
            _ = -1 * u;
        else
            throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: " + o);
        return l[0] = 2 * c,
        l[4] = 0,
        l[8] = 0,
        l[12] = -f,
        l[1] = 0,
        l[5] = 2 * h,
        l[9] = 0,
        l[13] = -d,
        l[2] = 0,
        l[6] = 0,
        l[10] = _,
        l[14] = -g,
        l[3] = 0,
        l[7] = 0,
        l[11] = 0,
        l[15] = 1,
        this
    }
    equals(e) {
        const t = this.elements
          , n = e.elements;
        for (let r = 0; r < 16; r++)
            if (t[r] !== n[r])
                return !1;
        return !0
    }
    fromArray(e, t=0) {
        for (let n = 0; n < 16; n++)
            this.elements[n] = e[n + t];
        return this
    }
    toArray(e=[], t=0) {
        const n = this.elements;
        return e[t] = n[0],
        e[t + 1] = n[1],
        e[t + 2] = n[2],
        e[t + 3] = n[3],
        e[t + 4] = n[4],
        e[t + 5] = n[5],
        e[t + 6] = n[6],
        e[t + 7] = n[7],
        e[t + 8] = n[8],
        e[t + 9] = n[9],
        e[t + 10] = n[10],
        e[t + 11] = n[11],
        e[t + 12] = n[12],
        e[t + 13] = n[13],
        e[t + 14] = n[14],
        e[t + 15] = n[15],
        e
    }
}
const ci = new R
  , Ht = new pe
  , hu = new R(0,0,0)
  , uu = new R(1,1,1)
  , wn = new R
  , Er = new R
  , Ut = new R
  , No = new pe
  , Fo = new Ct;
class st {
    constructor(e=0, t=0, n=0, r=st.DEFAULT_ORDER) {
        this.isEuler = !0,
        this._x = e,
        this._y = t,
        this._z = n,
        this._order = r
    }
    get x() {
        return this._x
    }
    set x(e) {
        this._x = e,
        this._onChangeCallback()
    }
    get y() {
        return this._y
    }
    set y(e) {
        this._y = e,
        this._onChangeCallback()
    }
    get z() {
        return this._z
    }
    set z(e) {
        this._z = e,
        this._onChangeCallback()
    }
    get order() {
        return this._order
    }
    set order(e) {
        this._order = e,
        this._onChangeCallback()
    }
    set(e, t, n, r=this._order) {
        return this._x = e,
        this._y = t,
        this._z = n,
        this._order = r,
        this._onChangeCallback(),
        this
    }
    clone() {
        return new this.constructor(this._x,this._y,this._z,this._order)
    }
    copy(e) {
        return this._x = e._x,
        this._y = e._y,
        this._z = e._z,
        this._order = e._order,
        this._onChangeCallback(),
        this
    }
    setFromRotationMatrix(e, t=this._order, n=!0) {
        const r = e.elements
          , s = r[0]
          , a = r[4]
          , o = r[8]
          , l = r[1]
          , c = r[5]
          , h = r[9]
          , u = r[2]
          , f = r[6]
          , d = r[10];
        switch (t) {
        case "XYZ":
            this._y = Math.asin(mt(o, -1, 1)),
            Math.abs(o) < .9999999 ? (this._x = Math.atan2(-h, d),
            this._z = Math.atan2(-a, s)) : (this._x = Math.atan2(f, c),
            this._z = 0);
            break;
        case "YXZ":
            this._x = Math.asin(-mt(h, -1, 1)),
            Math.abs(h) < .9999999 ? (this._y = Math.atan2(o, d),
            this._z = Math.atan2(l, c)) : (this._y = Math.atan2(-u, s),
            this._z = 0);
            break;
        case "ZXY":
            this._x = Math.asin(mt(f, -1, 1)),
            Math.abs(f) < .9999999 ? (this._y = Math.atan2(-u, d),
            this._z = Math.atan2(-a, c)) : (this._y = 0,
            this._z = Math.atan2(l, s));
            break;
        case "ZYX":
            this._y = Math.asin(-mt(u, -1, 1)),
            Math.abs(u) < .9999999 ? (this._x = Math.atan2(f, d),
            this._z = Math.atan2(l, s)) : (this._x = 0,
            this._z = Math.atan2(-a, c));
            break;
        case "YZX":
            this._z = Math.asin(mt(l, -1, 1)),
            Math.abs(l) < .9999999 ? (this._x = Math.atan2(-h, c),
            this._y = Math.atan2(-u, s)) : (this._x = 0,
            this._y = Math.atan2(o, d));
            break;
        case "XZY":
            this._z = Math.asin(-mt(a, -1, 1)),
            Math.abs(a) < .9999999 ? (this._x = Math.atan2(f, c),
            this._y = Math.atan2(o, s)) : (this._x = Math.atan2(-h, d),
            this._y = 0);
            break;
        default:
            console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " + t)
        }
        return this._order = t,
        n === !0 && this._onChangeCallback(),
        this
    }
    setFromQuaternion(e, t, n) {
        return No.makeRotationFromQuaternion(e),
        this.setFromRotationMatrix(No, t, n)
    }
    setFromVector3(e, t=this._order) {
        return this.set(e.x, e.y, e.z, t)
    }
    reorder(e) {
        return Fo.setFromEuler(this),
        this.setFromQuaternion(Fo, e)
    }
    equals(e) {
        return e._x === this._x && e._y === this._y && e._z === this._z && e._order === this._order
    }
    fromArray(e) {
        return this._x = e[0],
        this._y = e[1],
        this._z = e[2],
        e[3] !== void 0 && (this._order = e[3]),
        this._onChangeCallback(),
        this
    }
    toArray(e=[], t=0) {
        return e[t] = this._x,
        e[t + 1] = this._y,
        e[t + 2] = this._z,
        e[t + 3] = this._order,
        e
    }
    _onChange(e) {
        return this._onChangeCallback = e,
        this
    }
    _onChangeCallback() {}
    *[Symbol.iterator]() {
        yield this._x,
        yield this._y,
        yield this._z,
        yield this._order
    }
}
st.DEFAULT_ORDER = "XYZ";
class $l {
    constructor() {
        this.mask = 1
    }
    set(e) {
        this.mask = (1 << e | 0) >>> 0
    }
    enable(e) {
        this.mask |= 1 << e | 0
    }
    enableAll() {
        this.mask = -1
    }
    toggle(e) {
        this.mask ^= 1 << e | 0
    }
    disable(e) {
        this.mask &= ~(1 << e | 0)
    }
    disableAll() {
        this.mask = 0
    }
    test(e) {
        return (this.mask & e.mask) !== 0
    }
    isEnabled(e) {
        return (this.mask & (1 << e | 0)) !== 0
    }
}
let fu = 0;
const Oo = new R
  , hi = new Ct
  , fn = new pe
  , Tr = new R
  , $i = new R
  , du = new R
  , pu = new Ct
  , Bo = new R(1,0,0)
  , zo = new R(0,1,0)
  , Vo = new R(0,0,1)
  , ko = {
    type: "added"
}
  , mu = {
    type: "removed"
}
  , ui = {
    type: "childadded",
    child: null
}
  , Us = {
    type: "childremoved",
    child: null
};
class nt extends Ni {
    constructor() {
        super(),
        this.isObject3D = !0,
        Object.defineProperty(this, "id", {
            value: fu++
        }),
        this.uuid = Bn(),
        this.name = "",
        this.type = "Object3D",
        this.parent = null,
        this.children = [],
        this.up = nt.DEFAULT_UP.clone();
        const e = new R
          , t = new st
          , n = new Ct
          , r = new R(1,1,1);
        function s() {
            n.setFromEuler(t, !1)
        }
        function a() {
            t.setFromQuaternion(n, void 0, !1)
        }
        t._onChange(s),
        n._onChange(a),
        Object.defineProperties(this, {
            position: {
                configurable: !0,
                enumerable: !0,
                value: e
            },
            rotation: {
                configurable: !0,
                enumerable: !0,
                value: t
            },
            quaternion: {
                configurable: !0,
                enumerable: !0,
                value: n
            },
            scale: {
                configurable: !0,
                enumerable: !0,
                value: r
            },
            modelViewMatrix: {
                value: new pe
            },
            normalMatrix: {
                value: new Te
            }
        }),
        this.matrix = new pe,
        this.matrixWorld = new pe,
        this.matrixAutoUpdate = nt.DEFAULT_MATRIX_AUTO_UPDATE,
        this.matrixWorldAutoUpdate = nt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,
        this.matrixWorldNeedsUpdate = !1,
        this.layers = new $l,
        this.visible = !0,
        this.castShadow = !1,
        this.receiveShadow = !1,
        this.frustumCulled = !0,
        this.renderOrder = 0,
        this.animations = [],
        this.userData = {}
    }
    onBeforeShadow() {}
    onAfterShadow() {}
    onBeforeRender() {}
    onAfterRender() {}
    applyMatrix4(e) {
        this.matrixAutoUpdate && this.updateMatrix(),
        this.matrix.premultiply(e),
        this.matrix.decompose(this.position, this.quaternion, this.scale)
    }
    applyQuaternion(e) {
        return this.quaternion.premultiply(e),
        this
    }
    setRotationFromAxisAngle(e, t) {
        this.quaternion.setFromAxisAngle(e, t)
    }
    setRotationFromEuler(e) {
        this.quaternion.setFromEuler(e, !0)
    }
    setRotationFromMatrix(e) {
        this.quaternion.setFromRotationMatrix(e)
    }
    setRotationFromQuaternion(e) {
        this.quaternion.copy(e)
    }
    rotateOnAxis(e, t) {
        return hi.setFromAxisAngle(e, t),
        this.quaternion.multiply(hi),
        this
    }
    rotateOnWorldAxis(e, t) {
        return hi.setFromAxisAngle(e, t),
        this.quaternion.premultiply(hi),
        this
    }
    rotateX(e) {
        return this.rotateOnAxis(Bo, e)
    }
    rotateY(e) {
        return this.rotateOnAxis(zo, e)
    }
    rotateZ(e) {
        return this.rotateOnAxis(Vo, e)
    }
    translateOnAxis(e, t) {
        return Oo.copy(e).applyQuaternion(this.quaternion),
        this.position.add(Oo.multiplyScalar(t)),
        this
    }
    translateX(e) {
        return this.translateOnAxis(Bo, e)
    }
    translateY(e) {
        return this.translateOnAxis(zo, e)
    }
    translateZ(e) {
        return this.translateOnAxis(Vo, e)
    }
    localToWorld(e) {
        return this.updateWorldMatrix(!0, !1),
        e.applyMatrix4(this.matrixWorld)
    }
    worldToLocal(e) {
        return this.updateWorldMatrix(!0, !1),
        e.applyMatrix4(fn.copy(this.matrixWorld).invert())
    }
    lookAt(e, t, n) {
        e.isVector3 ? Tr.copy(e) : Tr.set(e, t, n);
        const r = this.parent;
        this.updateWorldMatrix(!0, !1),
        $i.setFromMatrixPosition(this.matrixWorld),
        this.isCamera || this.isLight ? fn.lookAt($i, Tr, this.up) : fn.lookAt(Tr, $i, this.up),
        this.quaternion.setFromRotationMatrix(fn),
        r && (fn.extractRotation(r.matrixWorld),
        hi.setFromRotationMatrix(fn),
        this.quaternion.premultiply(hi.invert()))
    }
    add(e) {
        if (arguments.length > 1) {
            for (let t = 0; t < arguments.length; t++)
                this.add(arguments[t]);
            return this
        }
        return e === this ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", e),
        this) : (e && e.isObject3D ? (e.removeFromParent(),
        e.parent = this,
        this.children.push(e),
        e.dispatchEvent(ko),
        ui.child = e,
        this.dispatchEvent(ui),
        ui.child = null) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", e),
        this)
    }
    remove(e) {
        if (arguments.length > 1) {
            for (let n = 0; n < arguments.length; n++)
                this.remove(arguments[n]);
            return this
        }
        const t = this.children.indexOf(e);
        return t !== -1 && (e.parent = null,
        this.children.splice(t, 1),
        e.dispatchEvent(mu),
        Us.child = e,
        this.dispatchEvent(Us),
        Us.child = null),
        this
    }
    removeFromParent() {
        const e = this.parent;
        return e !== null && e.remove(this),
        this
    }
    clear() {
        return this.remove(...this.children)
    }
    attach(e) {
        return this.updateWorldMatrix(!0, !1),
        fn.copy(this.matrixWorld).invert(),
        e.parent !== null && (e.parent.updateWorldMatrix(!0, !1),
        fn.multiply(e.parent.matrixWorld)),
        e.applyMatrix4(fn),
        e.removeFromParent(),
        e.parent = this,
        this.children.push(e),
        e.updateWorldMatrix(!1, !0),
        e.dispatchEvent(ko),
        ui.child = e,
        this.dispatchEvent(ui),
        ui.child = null,
        this
    }
    getObjectById(e) {
        return this.getObjectByProperty("id", e)
    }
    getObjectByName(e) {
        return this.getObjectByProperty("name", e)
    }
    getObjectByProperty(e, t) {
        if (this[e] === t)
            return this;
        for (let n = 0, r = this.children.length; n < r; n++) {
            const a = this.children[n].getObjectByProperty(e, t);
            if (a !== void 0)
                return a
        }
    }
    getObjectsByProperty(e, t, n=[]) {
        this[e] === t && n.push(this);
        const r = this.children;
        for (let s = 0, a = r.length; s < a; s++)
            r[s].getObjectsByProperty(e, t, n);
        return n
    }
    getWorldPosition(e) {
        return this.updateWorldMatrix(!0, !1),
        e.setFromMatrixPosition(this.matrixWorld)
    }
    getWorldQuaternion(e) {
        return this.updateWorldMatrix(!0, !1),
        this.matrixWorld.decompose($i, e, du),
        e
    }
    getWorldScale(e) {
        return this.updateWorldMatrix(!0, !1),
        this.matrixWorld.decompose($i, pu, e),
        e
    }
    getWorldDirection(e) {
        this.updateWorldMatrix(!0, !1);
        const t = this.matrixWorld.elements;
        return e.set(t[8], t[9], t[10]).normalize()
    }
    raycast() {}
    traverse(e) {
        e(this);
        const t = this.children;
        for (let n = 0, r = t.length; n < r; n++)
            t[n].traverse(e)
    }
    traverseVisible(e) {
        if (this.visible === !1)
            return;
        e(this);
        const t = this.children;
        for (let n = 0, r = t.length; n < r; n++)
            t[n].traverseVisible(e)
    }
    traverseAncestors(e) {
        const t = this.parent;
        t !== null && (e(t),
        t.traverseAncestors(e))
    }
    updateMatrix() {
        this.matrix.compose(this.position, this.quaternion, this.scale),
        this.matrixWorldNeedsUpdate = !0
    }
    updateMatrixWorld(e) {
        this.matrixAutoUpdate && this.updateMatrix(),
        (this.matrixWorldNeedsUpdate || e) && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix),
        this.matrixWorldNeedsUpdate = !1,
        e = !0);
        const t = this.children;
        for (let n = 0, r = t.length; n < r; n++) {
            const s = t[n];
            (s.matrixWorldAutoUpdate === !0 || e === !0) && s.updateMatrixWorld(e)
        }
    }
    updateWorldMatrix(e, t) {
        const n = this.parent;
        if (e === !0 && n !== null && n.matrixWorldAutoUpdate === !0 && n.updateWorldMatrix(!0, !1),
        this.matrixAutoUpdate && this.updateMatrix(),
        this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix),
        t === !0) {
            const r = this.children;
            for (let s = 0, a = r.length; s < a; s++) {
                const o = r[s];
                o.matrixWorldAutoUpdate === !0 && o.updateWorldMatrix(!1, !0)
            }
        }
    }
    toJSON(e) {
        const t = e === void 0 || typeof e == "string"
          , n = {};
        t && (e = {
            geometries: {},
            materials: {},
            textures: {},
            images: {},
            shapes: {},
            skeletons: {},
            animations: {},
            nodes: {}
        },
        n.metadata = {
            version: 4.6,
            type: "Object",
            generator: "Object3D.toJSON"
        });
        const r = {};
        r.uuid = this.uuid,
        r.type = this.type,
        this.name !== "" && (r.name = this.name),
        this.castShadow === !0 && (r.castShadow = !0),
        this.receiveShadow === !0 && (r.receiveShadow = !0),
        this.visible === !1 && (r.visible = !1),
        this.frustumCulled === !1 && (r.frustumCulled = !1),
        this.renderOrder !== 0 && (r.renderOrder = this.renderOrder),
        Object.keys(this.userData).length > 0 && (r.userData = this.userData),
        r.layers = this.layers.mask,
        r.matrix = this.matrix.toArray(),
        r.up = this.up.toArray(),
        this.matrixAutoUpdate === !1 && (r.matrixAutoUpdate = !1),
        this.isInstancedMesh && (r.type = "InstancedMesh",
        r.count = this.count,
        r.instanceMatrix = this.instanceMatrix.toJSON(),
        this.instanceColor !== null && (r.instanceColor = this.instanceColor.toJSON())),
        this.isBatchedMesh && (r.type = "BatchedMesh",
        r.perObjectFrustumCulled = this.perObjectFrustumCulled,
        r.sortObjects = this.sortObjects,
        r.drawRanges = this._drawRanges,
        r.reservedRanges = this._reservedRanges,
        r.visibility = this._visibility,
        r.active = this._active,
        r.bounds = this._bounds.map(o=>({
            boxInitialized: o.boxInitialized,
            boxMin: o.box.min.toArray(),
            boxMax: o.box.max.toArray(),
            sphereInitialized: o.sphereInitialized,
            sphereRadius: o.sphere.radius,
            sphereCenter: o.sphere.center.toArray()
        })),
        r.maxGeometryCount = this._maxGeometryCount,
        r.maxVertexCount = this._maxVertexCount,
        r.maxIndexCount = this._maxIndexCount,
        r.geometryInitialized = this._geometryInitialized,
        r.geometryCount = this._geometryCount,
        r.matricesTexture = this._matricesTexture.toJSON(e),
        this.boundingSphere !== null && (r.boundingSphere = {
            center: r.boundingSphere.center.toArray(),
            radius: r.boundingSphere.radius
        }),
        this.boundingBox !== null && (r.boundingBox = {
            min: r.boundingBox.min.toArray(),
            max: r.boundingBox.max.toArray()
        }));
        function s(o, l) {
            return o[l.uuid] === void 0 && (o[l.uuid] = l.toJSON(e)),
            l.uuid
        }
        if (this.isScene)
            this.background && (this.background.isColor ? r.background = this.background.toJSON() : this.background.isTexture && (r.background = this.background.toJSON(e).uuid)),
            this.environment && this.environment.isTexture && this.environment.isRenderTargetTexture !== !0 && (r.environment = this.environment.toJSON(e).uuid);
        else if (this.isMesh || this.isLine || this.isPoints) {
            r.geometry = s(e.geometries, this.geometry);
            const o = this.geometry.parameters;
            if (o !== void 0 && o.shapes !== void 0) {
                const l = o.shapes;
                if (Array.isArray(l))
                    for (let c = 0, h = l.length; c < h; c++) {
                        const u = l[c];
                        s(e.shapes, u)
                    }
                else
                    s(e.shapes, l)
            }
        }
        if (this.isSkinnedMesh && (r.bindMode = this.bindMode,
        r.bindMatrix = this.bindMatrix.toArray(),
        this.skeleton !== void 0 && (s(e.skeletons, this.skeleton),
        r.skeleton = this.skeleton.uuid)),
        this.material !== void 0)
            if (Array.isArray(this.material)) {
                const o = [];
                for (let l = 0, c = this.material.length; l < c; l++)
                    o.push(s(e.materials, this.material[l]));
                r.material = o
            } else
                r.material = s(e.materials, this.material);
        if (this.children.length > 0) {
            r.children = [];
            for (let o = 0; o < this.children.length; o++)
                r.children.push(this.children[o].toJSON(e).object)
        }
        if (this.animations.length > 0) {
            r.animations = [];
            for (let o = 0; o < this.animations.length; o++) {
                const l = this.animations[o];
                r.animations.push(s(e.animations, l))
            }
        }
        if (t) {
            const o = a(e.geometries)
              , l = a(e.materials)
              , c = a(e.textures)
              , h = a(e.images)
              , u = a(e.shapes)
              , f = a(e.skeletons)
              , d = a(e.animations)
              , g = a(e.nodes);
            o.length > 0 && (n.geometries = o),
            l.length > 0 && (n.materials = l),
            c.length > 0 && (n.textures = c),
            h.length > 0 && (n.images = h),
            u.length > 0 && (n.shapes = u),
            f.length > 0 && (n.skeletons = f),
            d.length > 0 && (n.animations = d),
            g.length > 0 && (n.nodes = g)
        }
        return n.object = r,
        n;
        function a(o) {
            const l = [];
            for (const c in o) {
                const h = o[c];
                delete h.metadata,
                l.push(h)
            }
            return l
        }
    }
    clone(e) {
        return new this.constructor().copy(this, e)
    }
    copy(e, t=!0) {
        if (this.name = e.name,
        this.up.copy(e.up),
        this.position.copy(e.position),
        this.rotation.order = e.rotation.order,
        this.quaternion.copy(e.quaternion),
        this.scale.copy(e.scale),
        this.matrix.copy(e.matrix),
        this.matrixWorld.copy(e.matrixWorld),
        this.matrixAutoUpdate = e.matrixAutoUpdate,
        this.matrixWorldAutoUpdate = e.matrixWorldAutoUpdate,
        this.matrixWorldNeedsUpdate = e.matrixWorldNeedsUpdate,
        this.layers.mask = e.layers.mask,
        this.visible = e.visible,
        this.castShadow = e.castShadow,
        this.receiveShadow = e.receiveShadow,
        this.frustumCulled = e.frustumCulled,
        this.renderOrder = e.renderOrder,
        this.animations = e.animations.slice(),
        this.userData = JSON.parse(JSON.stringify(e.userData)),
        t === !0)
            for (let n = 0; n < e.children.length; n++) {
                const r = e.children[n];
                this.add(r.clone())
            }
        return this
    }
}
nt.DEFAULT_UP = new R(0,1,0);
nt.DEFAULT_MATRIX_AUTO_UPDATE = !0;
nt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = !0;
const Gt = new R
  , dn = new R
  , Ns = new R
  , pn = new R
  , fi = new R
  , di = new R
  , Ho = new R
  , Fs = new R
  , Os = new R
  , Bs = new R;
class Qt {
    constructor(e=new R, t=new R, n=new R) {
        this.a = e,
        this.b = t,
        this.c = n
    }
    static getNormal(e, t, n, r) {
        r.subVectors(n, t),
        Gt.subVectors(e, t),
        r.cross(Gt);
        const s = r.lengthSq();
        return s > 0 ? r.multiplyScalar(1 / Math.sqrt(s)) : r.set(0, 0, 0)
    }
    static getBarycoord(e, t, n, r, s) {
        Gt.subVectors(r, t),
        dn.subVectors(n, t),
        Ns.subVectors(e, t);
        const a = Gt.dot(Gt)
          , o = Gt.dot(dn)
          , l = Gt.dot(Ns)
          , c = dn.dot(dn)
          , h = dn.dot(Ns)
          , u = a * c - o * o;
        if (u === 0)
            return s.set(0, 0, 0),
            null;
        const f = 1 / u
          , d = (c * l - o * h) * f
          , g = (a * h - o * l) * f;
        return s.set(1 - d - g, g, d)
    }
    static containsPoint(e, t, n, r) {
        return this.getBarycoord(e, t, n, r, pn) === null ? !1 : pn.x >= 0 && pn.y >= 0 && pn.x + pn.y <= 1
    }
    static getInterpolation(e, t, n, r, s, a, o, l) {
        return this.getBarycoord(e, t, n, r, pn) === null ? (l.x = 0,
        l.y = 0,
        "z"in l && (l.z = 0),
        "w"in l && (l.w = 0),
        null) : (l.setScalar(0),
        l.addScaledVector(s, pn.x),
        l.addScaledVector(a, pn.y),
        l.addScaledVector(o, pn.z),
        l)
    }
    static isFrontFacing(e, t, n, r) {
        return Gt.subVectors(n, t),
        dn.subVectors(e, t),
        Gt.cross(dn).dot(r) < 0
    }
    set(e, t, n) {
        return this.a.copy(e),
        this.b.copy(t),
        this.c.copy(n),
        this
    }
    setFromPointsAndIndices(e, t, n, r) {
        return this.a.copy(e[t]),
        this.b.copy(e[n]),
        this.c.copy(e[r]),
        this
    }
    setFromAttributeAndIndices(e, t, n, r) {
        return this.a.fromBufferAttribute(e, t),
        this.b.fromBufferAttribute(e, n),
        this.c.fromBufferAttribute(e, r),
        this
    }
    clone() {
        return new this.constructor().copy(this)
    }
    copy(e) {
        return this.a.copy(e.a),
        this.b.copy(e.b),
        this.c.copy(e.c),
        this
    }
    getArea() {
        return Gt.subVectors(this.c, this.b),
        dn.subVectors(this.a, this.b),
        Gt.cross(dn).length() * .5
    }
    getMidpoint(e) {
        return e.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3)
    }
    getNormal(e) {
        return Qt.getNormal(this.a, this.b, this.c, e)
    }
    getPlane(e) {
        return e.setFromCoplanarPoints(this.a, this.b, this.c)
    }
    getBarycoord(e, t) {
        return Qt.getBarycoord(e, this.a, this.b, this.c, t)
    }
    getInterpolation(e, t, n, r, s) {
        return Qt.getInterpolation(e, this.a, this.b, this.c, t, n, r, s)
    }
    containsPoint(e) {
        return Qt.containsPoint(e, this.a, this.b, this.c)
    }
    isFrontFacing(e) {
        return Qt.isFrontFacing(this.a, this.b, this.c, e)
    }
    intersectsBox(e) {
        return e.intersectsTriangle(this)
    }
    closestPointToPoint(e, t) {
        const n = this.a
          , r = this.b
          , s = this.c;
        let a, o;
        fi.subVectors(r, n),
        di.subVectors(s, n),
        Fs.subVectors(e, n);
        const l = fi.dot(Fs)
          , c = di.dot(Fs);
        if (l <= 0 && c <= 0)
            return t.copy(n);
        Os.subVectors(e, r);
        const h = fi.dot(Os)
          , u = di.dot(Os);
        if (h >= 0 && u <= h)
            return t.copy(r);
        const f = l * u - h * c;
        if (f <= 0 && l >= 0 && h <= 0)
            return a = l / (l - h),
            t.copy(n).addScaledVector(fi, a);
        Bs.subVectors(e, s);
        const d = fi.dot(Bs)
          , g = di.dot(Bs);
        if (g >= 0 && d <= g)
            return t.copy(s);
        const _ = d * c - l * g;
        if (_ <= 0 && c >= 0 && g <= 0)
            return o = c / (c - g),
            t.copy(n).addScaledVector(di, o);
        const p = h * g - d * u;
        if (p <= 0 && u - h >= 0 && d - g >= 0)
            return Ho.subVectors(s, r),
            o = (u - h) / (u - h + (d - g)),
            t.copy(r).addScaledVector(Ho, o);
        const m = 1 / (p + _ + f);
        return a = _ * m,
        o = f * m,
        t.copy(n).addScaledVector(fi, a).addScaledVector(di, o)
    }
    equals(e) {
        return e.a.equals(this.a) && e.b.equals(this.b) && e.c.equals(this.c)
    }
}
const jl = {
    aliceblue: 15792383,
    antiquewhite: 16444375,
    aqua: 65535,
    aquamarine: 8388564,
    azure: 15794175,
    beige: 16119260,
    bisque: 16770244,
    black: 0,
    blanchedalmond: 16772045,
    blue: 255,
    blueviolet: 9055202,
    brown: 10824234,
    burlywood: 14596231,
    cadetblue: 6266528,
    chartreuse: 8388352,
    chocolate: 13789470,
    coral: 16744272,
    cornflowerblue: 6591981,
    cornsilk: 16775388,
    crimson: 14423100,
    cyan: 65535,
    darkblue: 139,
    darkcyan: 35723,
    darkgoldenrod: 12092939,
    darkgray: 11119017,
    darkgreen: 25600,
    darkgrey: 11119017,
    darkkhaki: 12433259,
    darkmagenta: 9109643,
    darkolivegreen: 5597999,
    darkorange: 16747520,
    darkorchid: 10040012,
    darkred: 9109504,
    darksalmon: 15308410,
    darkseagreen: 9419919,
    darkslateblue: 4734347,
    darkslategray: 3100495,
    darkslategrey: 3100495,
    darkturquoise: 52945,
    darkviolet: 9699539,
    deeppink: 16716947,
    deepskyblue: 49151,
    dimgray: 6908265,
    dimgrey: 6908265,
    dodgerblue: 2003199,
    firebrick: 11674146,
    floralwhite: 16775920,
    forestgreen: 2263842,
    fuchsia: 16711935,
    gainsboro: 14474460,
    ghostwhite: 16316671,
    gold: 16766720,
    goldenrod: 14329120,
    gray: 8421504,
    green: 32768,
    greenyellow: 11403055,
    grey: 8421504,
    honeydew: 15794160,
    hotpink: 16738740,
    indianred: 13458524,
    indigo: 4915330,
    ivory: 16777200,
    khaki: 15787660,
    lavender: 15132410,
    lavenderblush: 16773365,
    lawngreen: 8190976,
    lemonchiffon: 16775885,
    lightblue: 11393254,
    lightcoral: 15761536,
    lightcyan: 14745599,
    lightgoldenrodyellow: 16448210,
    lightgray: 13882323,
    lightgreen: 9498256,
    lightgrey: 13882323,
    lightpink: 16758465,
    lightsalmon: 16752762,
    lightseagreen: 2142890,
    lightskyblue: 8900346,
    lightslategray: 7833753,
    lightslategrey: 7833753,
    lightsteelblue: 11584734,
    lightyellow: 16777184,
    lime: 65280,
    limegreen: 3329330,
    linen: 16445670,
    magenta: 16711935,
    maroon: 8388608,
    mediumaquamarine: 6737322,
    mediumblue: 205,
    mediumorchid: 12211667,
    mediumpurple: 9662683,
    mediumseagreen: 3978097,
    mediumslateblue: 8087790,
    mediumspringgreen: 64154,
    mediumturquoise: 4772300,
    mediumvioletred: 13047173,
    midnightblue: 1644912,
    mintcream: 16121850,
    mistyrose: 16770273,
    moccasin: 16770229,
    navajowhite: 16768685,
    navy: 128,
    oldlace: 16643558,
    olive: 8421376,
    olivedrab: 7048739,
    orange: 16753920,
    orangered: 16729344,
    orchid: 14315734,
    palegoldenrod: 15657130,
    palegreen: 10025880,
    paleturquoise: 11529966,
    palevioletred: 14381203,
    papayawhip: 16773077,
    peachpuff: 16767673,
    peru: 13468991,
    pink: 16761035,
    plum: 14524637,
    powderblue: 11591910,
    purple: 8388736,
    rebeccapurple: 6697881,
    red: 16711680,
    rosybrown: 12357519,
    royalblue: 4286945,
    saddlebrown: 9127187,
    salmon: 16416882,
    sandybrown: 16032864,
    seagreen: 3050327,
    seashell: 16774638,
    sienna: 10506797,
    silver: 12632256,
    skyblue: 8900331,
    slateblue: 6970061,
    slategray: 7372944,
    slategrey: 7372944,
    snow: 16775930,
    springgreen: 65407,
    steelblue: 4620980,
    tan: 13808780,
    teal: 32896,
    thistle: 14204888,
    tomato: 16737095,
    turquoise: 4251856,
    violet: 15631086,
    wheat: 16113331,
    white: 16777215,
    whitesmoke: 16119285,
    yellow: 16776960,
    yellowgreen: 10145074
}
  , Rn = {
    h: 0,
    s: 0,
    l: 0
}
  , Ar = {
    h: 0,
    s: 0,
    l: 0
};
function zs(i, e, t) {
    return t < 0 && (t += 1),
    t > 1 && (t -= 1),
    t < 1 / 6 ? i + (e - i) * 6 * t : t < 1 / 2 ? e : t < 2 / 3 ? i + (e - i) * 6 * (2 / 3 - t) : i
}
class ve {
    constructor(e, t, n) {
        return this.isColor = !0,
        this.r = 1,
        this.g = 1,
        this.b = 1,
        this.set(e, t, n)
    }
    set(e, t, n) {
        if (t === void 0 && n === void 0) {
            const r = e;
            r && r.isColor ? this.copy(r) : typeof r == "number" ? this.setHex(r) : typeof r == "string" && this.setStyle(r)
        } else
            this.setRGB(e, t, n);
        return this
    }
    setScalar(e) {
        return this.r = e,
        this.g = e,
        this.b = e,
        this
    }
    setHex(e, t=Pt) {
        return e = Math.floor(e),
        this.r = (e >> 16 & 255) / 255,
        this.g = (e >> 8 & 255) / 255,
        this.b = (e & 255) / 255,
        Ze.toWorkingColorSpace(this, t),
        this
    }
    setRGB(e, t, n, r=Ze.workingColorSpace) {
        return this.r = e,
        this.g = t,
        this.b = n,
        Ze.toWorkingColorSpace(this, r),
        this
    }
    setHSL(e, t, n, r=Ze.workingColorSpace) {
        if (e = _a(e, 1),
        t = mt(t, 0, 1),
        n = mt(n, 0, 1),
        t === 0)
            this.r = this.g = this.b = n;
        else {
            const s = n <= .5 ? n * (1 + t) : n + t - n * t
              , a = 2 * n - s;
            this.r = zs(a, s, e + 1 / 3),
            this.g = zs(a, s, e),
            this.b = zs(a, s, e - 1 / 3)
        }
        return Ze.toWorkingColorSpace(this, r),
        this
    }
    setStyle(e, t=Pt) {
        function n(s) {
            s !== void 0 && parseFloat(s) < 1 && console.warn("THREE.Color: Alpha component of " + e + " will be ignored.")
        }
        let r;
        if (r = /^(\w+)\(([^\)]*)\)/.exec(e)) {
            let s;
            const a = r[1]
              , o = r[2];
            switch (a) {
            case "rgb":
            case "rgba":
                if (s = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))
                    return n(s[4]),
                    this.setRGB(Math.min(255, parseInt(s[1], 10)) / 255, Math.min(255, parseInt(s[2], 10)) / 255, Math.min(255, parseInt(s[3], 10)) / 255, t);
                if (s = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))
                    return n(s[4]),
                    this.setRGB(Math.min(100, parseInt(s[1], 10)) / 100, Math.min(100, parseInt(s[2], 10)) / 100, Math.min(100, parseInt(s[3], 10)) / 100, t);
                break;
            case "hsl":
            case "hsla":
                if (s = /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))
                    return n(s[4]),
                    this.setHSL(parseFloat(s[1]) / 360, parseFloat(s[2]) / 100, parseFloat(s[3]) / 100, t);
                break;
            default:
                console.warn("THREE.Color: Unknown color model " + e)
            }
        } else if (r = /^\#([A-Fa-f\d]+)$/.exec(e)) {
            const s = r[1]
              , a = s.length;
            if (a === 3)
                return this.setRGB(parseInt(s.charAt(0), 16) / 15, parseInt(s.charAt(1), 16) / 15, parseInt(s.charAt(2), 16) / 15, t);
            if (a === 6)
                return this.setHex(parseInt(s, 16), t);
            console.warn("THREE.Color: Invalid hex color " + e)
        } else if (e && e.length > 0)
            return this.setColorName(e, t);
        return this
    }
    setColorName(e, t=Pt) {
        const n = jl[e.toLowerCase()];
        return n !== void 0 ? this.setHex(n, t) : console.warn("THREE.Color: Unknown color " + e),
        this
    }
    clone() {
        return new this.constructor(this.r,this.g,this.b)
    }
    copy(e) {
        return this.r = e.r,
        this.g = e.g,
        this.b = e.b,
        this
    }
    copySRGBToLinear(e) {
        return this.r = Ci(e.r),
        this.g = Ci(e.g),
        this.b = Ci(e.b),
        this
    }
    copyLinearToSRGB(e) {
        return this.r = bs(e.r),
        this.g = bs(e.g),
        this.b = bs(e.b),
        this
    }
    convertSRGBToLinear() {
        return this.copySRGBToLinear(this),
        this
    }
    convertLinearToSRGB() {
        return this.copyLinearToSRGB(this),
        this
    }
    getHex(e=Pt) {
        return Ze.fromWorkingColorSpace(yt.copy(this), e),
        Math.round(mt(yt.r * 255, 0, 255)) * 65536 + Math.round(mt(yt.g * 255, 0, 255)) * 256 + Math.round(mt(yt.b * 255, 0, 255))
    }
    getHexString(e=Pt) {
        return ("000000" + this.getHex(e).toString(16)).slice(-6)
    }
    getHSL(e, t=Ze.workingColorSpace) {
        Ze.fromWorkingColorSpace(yt.copy(this), t);
        const n = yt.r
          , r = yt.g
          , s = yt.b
          , a = Math.max(n, r, s)
          , o = Math.min(n, r, s);
        let l, c;
        const h = (o + a) / 2;
        if (o === a)
            l = 0,
            c = 0;
        else {
            const u = a - o;
            switch (c = h <= .5 ? u / (a + o) : u / (2 - a - o),
            a) {
            case n:
                l = (r - s) / u + (r < s ? 6 : 0);
                break;
            case r:
                l = (s - n) / u + 2;
                break;
            case s:
                l = (n - r) / u + 4;
                break
            }
            l /= 6
        }
        return e.h = l,
        e.s = c,
        e.l = h,
        e
    }
    getRGB(e, t=Ze.workingColorSpace) {
        return Ze.fromWorkingColorSpace(yt.copy(this), t),
        e.r = yt.r,
        e.g = yt.g,
        e.b = yt.b,
        e
    }
    getStyle(e=Pt) {
        Ze.fromWorkingColorSpace(yt.copy(this), e);
        const t = yt.r
          , n = yt.g
          , r = yt.b;
        return e !== Pt ? `color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})` : `rgb(${Math.round(t * 255)},${Math.round(n * 255)},${Math.round(r * 255)})`
    }
    offsetHSL(e, t, n) {
        return this.getHSL(Rn),
        this.setHSL(Rn.h + e, Rn.s + t, Rn.l + n)
    }
    add(e) {
        return this.r += e.r,
        this.g += e.g,
        this.b += e.b,
        this
    }
    addColors(e, t) {
        return this.r = e.r + t.r,
        this.g = e.g + t.g,
        this.b = e.b + t.b,
        this
    }
    addScalar(e) {
        return this.r += e,
        this.g += e,
        this.b += e,
        this
    }
    sub(e) {
        return this.r = Math.max(0, this.r - e.r),
        this.g = Math.max(0, this.g - e.g),
        this.b = Math.max(0, this.b - e.b),
        this
    }
    multiply(e) {
        return this.r *= e.r,
        this.g *= e.g,
        this.b *= e.b,
        this
    }
    multiplyScalar(e) {
        return this.r *= e,
        this.g *= e,
        this.b *= e,
        this
    }
    lerp(e, t) {
        return this.r += (e.r - this.r) * t,
        this.g += (e.g - this.g) * t,
        this.b += (e.b - this.b) * t,
        this
    }
    lerpColors(e, t, n) {
        return this.r = e.r + (t.r - e.r) * n,
        this.g = e.g + (t.g - e.g) * n,
        this.b = e.b + (t.b - e.b) * n,
        this
    }
    lerpHSL(e, t) {
        this.getHSL(Rn),
        e.getHSL(Ar);
        const n = nr(Rn.h, Ar.h, t)
          , r = nr(Rn.s, Ar.s, t)
          , s = nr(Rn.l, Ar.l, t);
        return this.setHSL(n, r, s),
        this
    }
    setFromVector3(e) {
        return this.r = e.x,
        this.g = e.y,
        this.b = e.z,
        this
    }
    applyMatrix3(e) {
        const t = this.r
          , n = this.g
          , r = this.b
          , s = e.elements;
        return this.r = s[0] * t + s[3] * n + s[6] * r,
        this.g = s[1] * t + s[4] * n + s[7] * r,
        this.b = s[2] * t + s[5] * n + s[8] * r,
        this
    }
    equals(e) {
        return e.r === this.r && e.g === this.g && e.b === this.b
    }
    fromArray(e, t=0) {
        return this.r = e[t],
        this.g = e[t + 1],
        this.b = e[t + 2],
        this
    }
    toArray(e=[], t=0) {
        return e[t] = this.r,
        e[t + 1] = this.g,
        e[t + 2] = this.b,
        e
    }
    fromBufferAttribute(e, t) {
        return this.r = e.getX(t),
        this.g = e.getY(t),
        this.b = e.getZ(t),
        this
    }
    toJSON() {
        return this.getHex()
    }
    *[Symbol.iterator]() {
        yield this.r,
        yield this.g,
        yield this.b
    }
}
const yt = new ve;
ve.NAMES = jl;
let gu = 0;
class zn extends Ni {
    constructor() {
        super(),
        this.isMaterial = !0,
        Object.defineProperty(this, "id", {
            value: gu++
        }),
        this.uuid = Bn(),
        this.name = "",
        this.type = "Material",
        this.blending = wi,
        this.side = Un,
        this.vertexColors = !1,
        this.opacity = 1,
        this.transparent = !1,
        this.alphaHash = !1,
        this.blendSrc = aa,
        this.blendDst = oa,
        this.blendEquation = $n,
        this.blendSrcAlpha = null,
        this.blendDstAlpha = null,
        this.blendEquationAlpha = null,
        this.blendColor = new ve(0,0,0),
        this.blendAlpha = 0,
        this.depthFunc = qr,
        this.depthTest = !0,
        this.depthWrite = !0,
        this.stencilWriteMask = 255,
        this.stencilFunc = wo,
        this.stencilRef = 0,
        this.stencilFuncMask = 255,
        this.stencilFail = ri,
        this.stencilZFail = ri,
        this.stencilZPass = ri,
        this.stencilWrite = !1,
        this.clippingPlanes = null,
        this.clipIntersection = !1,
        this.clipShadows = !1,
        this.shadowSide = null,
        this.colorWrite = !0,
        this.precision = null,
        this.polygonOffset = !1,
        this.polygonOffsetFactor = 0,
        this.polygonOffsetUnits = 0,
        this.dithering = !1,
        this.alphaToCoverage = !1,
        this.premultipliedAlpha = !1,
        this.forceSinglePass = !1,
        this.visible = !0,
        this.toneMapped = !0,
        this.userData = {},
        this.version = 0,
        this._alphaTest = 0
    }
    get alphaTest() {
        return this._alphaTest
    }
    set alphaTest(e) {
        this._alphaTest > 0 != e > 0 && this.version++,
        this._alphaTest = e
    }
    onBuild() {}
    onBeforeRender() {}
    onBeforeCompile() {}
    customProgramCacheKey() {
        return this.onBeforeCompile.toString()
    }
    setValues(e) {
        if (e !== void 0)
            for (const t in e) {
                const n = e[t];
                if (n === void 0) {
                    console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);
                    continue
                }
                const r = this[t];
                if (r === void 0) {
                    console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);
                    continue
                }
                r && r.isColor ? r.set(n) : r && r.isVector3 && n && n.isVector3 ? r.copy(n) : this[t] = n
            }
    }
    toJSON(e) {
        const t = e === void 0 || typeof e == "string";
        t && (e = {
            textures: {},
            images: {}
        });
        const n = {
            metadata: {
                version: 4.6,
                type: "Material",
                generator: "Material.toJSON"
            }
        };
        n.uuid = this.uuid,
        n.type = this.type,
        this.name !== "" && (n.name = this.name),
        this.color && this.color.isColor && (n.color = this.color.getHex()),
        this.roughness !== void 0 && (n.roughness = this.roughness),
        this.metalness !== void 0 && (n.metalness = this.metalness),
        this.sheen !== void 0 && (n.sheen = this.sheen),
        this.sheenColor && this.sheenColor.isColor && (n.sheenColor = this.sheenColor.getHex()),
        this.sheenRoughness !== void 0 && (n.sheenRoughness = this.sheenRoughness),
        this.emissive && this.emissive.isColor && (n.emissive = this.emissive.getHex()),
        this.emissiveIntensity !== void 0 && this.emissiveIntensity !== 1 && (n.emissiveIntensity = this.emissiveIntensity),
        this.specular && this.specular.isColor && (n.specular = this.specular.getHex()),
        this.specularIntensity !== void 0 && (n.specularIntensity = this.specularIntensity),
        this.specularColor && this.specularColor.isColor && (n.specularColor = this.specularColor.getHex()),
        this.shininess !== void 0 && (n.shininess = this.shininess),
        this.clearcoat !== void 0 && (n.clearcoat = this.clearcoat),
        this.clearcoatRoughness !== void 0 && (n.clearcoatRoughness = this.clearcoatRoughness),
        this.clearcoatMap && this.clearcoatMap.isTexture && (n.clearcoatMap = this.clearcoatMap.toJSON(e).uuid),
        this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (n.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(e).uuid),
        this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(e).uuid,
        n.clearcoatNormalScale = this.clearcoatNormalScale.toArray()),
        this.dispersion !== void 0 && (n.dispersion = this.dispersion),
        this.iridescence !== void 0 && (n.iridescence = this.iridescence),
        this.iridescenceIOR !== void 0 && (n.iridescenceIOR = this.iridescenceIOR),
        this.iridescenceThicknessRange !== void 0 && (n.iridescenceThicknessRange = this.iridescenceThicknessRange),
        this.iridescenceMap && this.iridescenceMap.isTexture && (n.iridescenceMap = this.iridescenceMap.toJSON(e).uuid),
        this.iridescenceThicknessMap && this.iridescenceThicknessMap.isTexture && (n.iridescenceThicknessMap = this.iridescenceThicknessMap.toJSON(e).uuid),
        this.anisotropy !== void 0 && (n.anisotropy = this.anisotropy),
        this.anisotropyRotation !== void 0 && (n.anisotropyRotation = this.anisotropyRotation),
        this.anisotropyMap && this.anisotropyMap.isTexture && (n.anisotropyMap = this.anisotropyMap.toJSON(e).uuid),
        this.map && this.map.isTexture && (n.map = this.map.toJSON(e).uuid),
        this.matcap && this.matcap.isTexture && (n.matcap = this.matcap.toJSON(e).uuid),
        this.alphaMap && this.alphaMap.isTexture && (n.alphaMap = this.alphaMap.toJSON(e).uuid),
        this.lightMap && this.lightMap.isTexture && (n.lightMap = this.lightMap.toJSON(e).uuid,
        n.lightMapIntensity = this.lightMapIntensity),
        this.aoMap && this.aoMap.isTexture && (n.aoMap = this.aoMap.toJSON(e).uuid,
        n.aoMapIntensity = this.aoMapIntensity),
        this.bumpMap && this.bumpMap.isTexture && (n.bumpMap = this.bumpMap.toJSON(e).uuid,
        n.bumpScale = this.bumpScale),
        this.normalMap && this.normalMap.isTexture && (n.normalMap = this.normalMap.toJSON(e).uuid,
        n.normalMapType = this.normalMapType,
        n.normalScale = this.normalScale.toArray()),
        this.displacementMap && this.displacementMap.isTexture && (n.displacementMap = this.displacementMap.toJSON(e).uuid,
        n.displacementScale = this.displacementScale,
        n.displacementBias = this.displacementBias),
        this.roughnessMap && this.roughnessMap.isTexture && (n.roughnessMap = this.roughnessMap.toJSON(e).uuid),
        this.metalnessMap && this.metalnessMap.isTexture && (n.metalnessMap = this.metalnessMap.toJSON(e).uuid),
        this.emissiveMap && this.emissiveMap.isTexture && (n.emissiveMap = this.emissiveMap.toJSON(e).uuid),
        this.specularMap && this.specularMap.isTexture && (n.specularMap = this.specularMap.toJSON(e).uuid),
        this.specularIntensityMap && this.specularIntensityMap.isTexture && (n.specularIntensityMap = this.specularIntensityMap.toJSON(e).uuid),
        this.specularColorMap && this.specularColorMap.isTexture && (n.specularColorMap = this.specularColorMap.toJSON(e).uuid),
        this.envMap && this.envMap.isTexture && (n.envMap = this.envMap.toJSON(e).uuid,
        this.combine !== void 0 && (n.combine = this.combine)),
        this.envMapRotation !== void 0 && (n.envMapRotation = this.envMapRotation.toArray()),
        this.envMapIntensity !== void 0 && (n.envMapIntensity = this.envMapIntensity),
        this.reflectivity !== void 0 && (n.reflectivity = this.reflectivity),
        this.refractionRatio !== void 0 && (n.refractionRatio = this.refractionRatio),
        this.gradientMap && this.gradientMap.isTexture && (n.gradientMap = this.gradientMap.toJSON(e).uuid),
        this.transmission !== void 0 && (n.transmission = this.transmission),
        this.transmissionMap && this.transmissionMap.isTexture && (n.transmissionMap = this.transmissionMap.toJSON(e).uuid),
        this.thickness !== void 0 && (n.thickness = this.thickness),
        this.thicknessMap && this.thicknessMap.isTexture && (n.thicknessMap = this.thicknessMap.toJSON(e).uuid),
        this.attenuationDistance !== void 0 && this.attenuationDistance !== 1 / 0 && (n.attenuationDistance = this.attenuationDistance),
        this.attenuationColor !== void 0 && (n.attenuationColor = this.attenuationColor.getHex()),
        this.size !== void 0 && (n.size = this.size),
        this.shadowSide !== null && (n.shadowSide = this.shadowSide),
        this.sizeAttenuation !== void 0 && (n.sizeAttenuation = this.sizeAttenuation),
        this.blending !== wi && (n.blending = this.blending),
        this.side !== Un && (n.side = this.side),
        this.vertexColors === !0 && (n.vertexColors = !0),
        this.opacity < 1 && (n.opacity = this.opacity),
        this.transparent === !0 && (n.transparent = !0),
        this.blendSrc !== aa && (n.blendSrc = this.blendSrc),
        this.blendDst !== oa && (n.blendDst = this.blendDst),
        this.blendEquation !== $n && (n.blendEquation = this.blendEquation),
        this.blendSrcAlpha !== null && (n.blendSrcAlpha = this.blendSrcAlpha),
        this.blendDstAlpha !== null && (n.blendDstAlpha = this.blendDstAlpha),
        this.blendEquationAlpha !== null && (n.blendEquationAlpha = this.blendEquationAlpha),
        this.blendColor && this.blendColor.isColor && (n.blendColor = this.blendColor.getHex()),
        this.blendAlpha !== 0 && (n.blendAlpha = this.blendAlpha),
        this.depthFunc !== qr && (n.depthFunc = this.depthFunc),
        this.depthTest === !1 && (n.depthTest = this.depthTest),
        this.depthWrite === !1 && (n.depthWrite = this.depthWrite),
        this.colorWrite === !1 && (n.colorWrite = this.colorWrite),
        this.stencilWriteMask !== 255 && (n.stencilWriteMask = this.stencilWriteMask),
        this.stencilFunc !== wo && (n.stencilFunc = this.stencilFunc),
        this.stencilRef !== 0 && (n.stencilRef = this.stencilRef),
        this.stencilFuncMask !== 255 && (n.stencilFuncMask = this.stencilFuncMask),
        this.stencilFail !== ri && (n.stencilFail = this.stencilFail),
        this.stencilZFail !== ri && (n.stencilZFail = this.stencilZFail),
        this.stencilZPass !== ri && (n.stencilZPass = this.stencilZPass),
        this.stencilWrite === !0 && (n.stencilWrite = this.stencilWrite),
        this.rotation !== void 0 && this.rotation !== 0 && (n.rotation = this.rotation),
        this.polygonOffset === !0 && (n.polygonOffset = !0),
        this.polygonOffsetFactor !== 0 && (n.polygonOffsetFactor = this.polygonOffsetFactor),
        this.polygonOffsetUnits !== 0 && (n.polygonOffsetUnits = this.polygonOffsetUnits),
        this.linewidth !== void 0 && this.linewidth !== 1 && (n.linewidth = this.linewidth),
        this.dashSize !== void 0 && (n.dashSize = this.dashSize),
        this.gapSize !== void 0 && (n.gapSize = this.gapSize),
        this.scale !== void 0 && (n.scale = this.scale),
        this.dithering === !0 && (n.dithering = !0),
        this.alphaTest > 0 && (n.alphaTest = this.alphaTest),
        this.alphaHash === !0 && (n.alphaHash = !0),
        this.alphaToCoverage === !0 && (n.alphaToCoverage = !0),
        this.premultipliedAlpha === !0 && (n.premultipliedAlpha = !0),
        this.forceSinglePass === !0 && (n.forceSinglePass = !0),
        this.wireframe === !0 && (n.wireframe = !0),
        this.wireframeLinewidth > 1 && (n.wireframeLinewidth = this.wireframeLinewidth),
        this.wireframeLinecap !== "round" && (n.wireframeLinecap = this.wireframeLinecap),
        this.wireframeLinejoin !== "round" && (n.wireframeLinejoin = this.wireframeLinejoin),
        this.flatShading === !0 && (n.flatShading = !0),
        this.visible === !1 && (n.visible = !1),
        this.toneMapped === !1 && (n.toneMapped = !1),
        this.fog === !1 && (n.fog = !1),
        Object.keys(this.userData).length > 0 && (n.userData = this.userData);
        function r(s) {
            const a = [];
            for (const o in s) {
                const l = s[o];
                delete l.metadata,
                a.push(l)
            }
            return a
        }
        if (t) {
            const s = r(e.textures)
              , a = r(e.images);
            s.length > 0 && (n.textures = s),
            a.length > 0 && (n.images = a)
        }
        return n
    }
    clone() {
        return new this.constructor().copy(this)
    }
    copy(e) {
        this.name = e.name,
        this.blending = e.blending,
        this.side = e.side,
        this.vertexColors = e.vertexColors,
        this.opacity = e.opacity,
        this.transparent = e.transparent,
        this.blendSrc = e.blendSrc,
        this.blendDst = e.blendDst,
        this.blendEquation = e.blendEquation,
        this.blendSrcAlpha = e.blendSrcAlpha,
        this.blendDstAlpha = e.blendDstAlpha,
        this.blendEquationAlpha = e.blendEquationAlpha,
        this.blendColor.copy(e.blendColor),
        this.blendAlpha = e.blendAlpha,
        this.depthFunc = e.depthFunc,
        this.depthTest = e.depthTest,
        this.depthWrite = e.depthWrite,
        this.stencilWriteMask = e.stencilWriteMask,
        this.stencilFunc = e.stencilFunc,
        this.stencilRef = e.stencilRef,
        this.stencilFuncMask = e.stencilFuncMask,
        this.stencilFail = e.stencilFail,
        this.stencilZFail = e.stencilZFail,
        this.stencilZPass = e.stencilZPass,
        this.stencilWrite = e.stencilWrite;
        const t = e.clippingPlanes;
        let n = null;
        if (t !== null) {
            const r = t.length;
            n = new Array(r);
            for (let s = 0; s !== r; ++s)
                n[s] = t[s].clone()
        }
        return this.clippingPlanes = n,
        this.clipIntersection = e.clipIntersection,
        this.clipShadows = e.clipShadows,
        this.shadowSide = e.shadowSide,
        this.colorWrite = e.colorWrite,
        this.precision = e.precision,
        this.polygonOffset = e.polygonOffset,
        this.polygonOffsetFactor = e.polygonOffsetFactor,
        this.polygonOffsetUnits = e.polygonOffsetUnits,
        this.dithering = e.dithering,
        this.alphaTest = e.alphaTest,
        this.alphaHash = e.alphaHash,
        this.alphaToCoverage = e.alphaToCoverage,
        this.premultipliedAlpha = e.premultipliedAlpha,
        this.forceSinglePass = e.forceSinglePass,
        this.visible = e.visible,
        this.toneMapped = e.toneMapped,
        this.userData = JSON.parse(JSON.stringify(e.userData)),
        this
    }
    dispose() {
        this.dispatchEvent({
            type: "dispose"
        })
    }
    set needsUpdate(e) {
        e === !0 && this.version++
    }
}
class xa extends zn {
    constructor(e) {
        super(),
        this.isMeshBasicMaterial = !0,
        this.type = "MeshBasicMaterial",
        this.color = new ve(16777215),
        this.map = null,
        this.lightMap = null,
        this.lightMapIntensity = 1,
        this.aoMap = null,
        this.aoMapIntensity = 1,
        this.specularMap = null,
        this.alphaMap = null,
        this.envMap = null,
        this.envMapRotation = new st,
        this.combine = is,
        this.reflectivity = 1,
        this.refractionRatio = .98,
        this.wireframe = !1,
        this.wireframeLinewidth = 1,
        this.wireframeLinecap = "round",
        this.wireframeLinejoin = "round",
        this.fog = !0,
        this.setValues(e)
    }
    copy(e) {
        return super.copy(e),
        this.color.copy(e.color),
        this.map = e.map,
        this.lightMap = e.lightMap,
        this.lightMapIntensity = e.lightMapIntensity,
        this.aoMap = e.aoMap,
        this.aoMapIntensity = e.aoMapIntensity,
        this.specularMap = e.specularMap,
        this.alphaMap = e.alphaMap,
        this.envMap = e.envMap,
        this.envMapRotation.copy(e.envMapRotation),
        this.combine = e.combine,
        this.reflectivity = e.reflectivity,
        this.refractionRatio = e.refractionRatio,
        this.wireframe = e.wireframe,
        this.wireframeLinewidth = e.wireframeLinewidth,
        this.wireframeLinecap = e.wireframeLinecap,
        this.wireframeLinejoin = e.wireframeLinejoin,
        this.fog = e.fog,
        this
    }
}
const ct = new R
  , br = new Ie;
class en {
    constructor(e, t, n=!1) {
        if (Array.isArray(e))
            throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
        this.isBufferAttribute = !0,
        this.name = "",
        this.array = e,
        this.itemSize = t,
        this.count = e !== void 0 ? e.length / t : 0,
        this.normalized = n,
        this.usage = Ro,
        this._updateRange = {
            offset: 0,
            count: -1
        },
        this.updateRanges = [],
        this.gpuType = xn,
        this.version = 0
    }
    onUploadCallback() {}
    set needsUpdate(e) {
        e === !0 && this.version++
    }
    get updateRange() {
        return nu("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),
        this._updateRange
    }
    setUsage(e) {
        return this.usage = e,
        this
    }
    addUpdateRange(e, t) {
        this.updateRanges.push({
            start: e,
            count: t
        })
    }
    clearUpdateRanges() {
        this.updateRanges.length = 0
    }
    copy(e) {
        return this.name = e.name,
        this.array = new e.array.constructor(e.array),
        this.itemSize = e.itemSize,
        this.count = e.count,
        this.normalized = e.normalized,
        this.usage = e.usage,
        this.gpuType = e.gpuType,
        this
    }
    copyAt(e, t, n) {
        e *= this.itemSize,
        n *= t.itemSize;
        for (let r = 0, s = this.itemSize; r < s; r++)
            this.array[e + r] = t.array[n + r];
        return this
    }
    copyArray(e) {
        return this.array.set(e),
        this
    }
    applyMatrix3(e) {
        if (this.itemSize === 2)
            for (let t = 0, n = this.count; t < n; t++)
                br.fromBufferAttribute(this, t),
                br.applyMatrix3(e),
                this.setXY(t, br.x, br.y);
        else if (this.itemSize === 3)
            for (let t = 0, n = this.count; t < n; t++)
                ct.fromBufferAttribute(this, t),
                ct.applyMatrix3(e),
                this.setXYZ(t, ct.x, ct.y, ct.z);
        return this
    }
    applyMatrix4(e) {
        for (let t = 0, n = this.count; t < n; t++)
            ct.fromBufferAttribute(this, t),
            ct.applyMatrix4(e),
            this.setXYZ(t, ct.x, ct.y, ct.z);
        return this
    }
    applyNormalMatrix(e) {
        for (let t = 0, n = this.count; t < n; t++)
            ct.fromBufferAttribute(this, t),
            ct.applyNormalMatrix(e),
            this.setXYZ(t, ct.x, ct.y, ct.z);
        return this
    }
    transformDirection(e) {
        for (let t = 0, n = this.count; t < n; t++)
            ct.fromBufferAttribute(this, t),
            ct.transformDirection(e),
            this.setXYZ(t, ct.x, ct.y, ct.z);
        return this
    }
    set(e, t=0) {
        return this.array.set(e, t),
        this
    }
    getComponent(e, t) {
        let n = this.array[e * this.itemSize + t];
        return this.normalized && (n = Si(n, this.array)),
        n
    }
    setComponent(e, t, n) {
        return this.normalized && (n = Et(n, this.array)),
        this.array[e * this.itemSize + t] = n,
        this
    }
    getX(e) {
        let t = this.array[e * this.itemSize];
        return this.normalized && (t = Si(t, this.array)),
        t
    }
    setX(e, t) {
        return this.normalized && (t = Et(t, this.array)),
        this.array[e * this.itemSize] = t,
        this
    }
    getY(e) {
        let t = this.array[e * this.itemSize + 1];
        return this.normalized && (t = Si(t, this.array)),
        t
    }
    setY(e, t) {
        return this.normalized && (t = Et(t, this.array)),
        this.array[e * this.itemSize + 1] = t,
        this
    }
    getZ(e) {
        let t = this.array[e * this.itemSize + 2];
        return this.normalized && (t = Si(t, this.array)),
        t
    }
    setZ(e, t) {
        return this.normalized && (t = Et(t, this.array)),
        this.array[e * this.itemSize + 2] = t,
        this
    }
    getW(e) {
        let t = this.array[e * this.itemSize + 3];
        return this.normalized && (t = Si(t, this.array)),
        t
    }
    setW(e, t) {
        return this.normalized && (t = Et(t, this.array)),
        this.array[e * this.itemSize + 3] = t,
        this
    }
    setXY(e, t, n) {
        return e *= this.itemSize,
        this.normalized && (t = Et(t, this.array),
        n = Et(n, this.array)),
        this.array[e + 0] = t,
        this.array[e + 1] = n,
        this
    }
    setXYZ(e, t, n, r) {
        return e *= this.itemSize,
        this.normalized && (t = Et(t, this.array),
        n = Et(n, this.array),
        r = Et(r, this.array)),
        this.array[e + 0] = t,
        this.array[e + 1] = n,
        this.array[e + 2] = r,
        this
    }
    setXYZW(e, t, n, r, s) {
        return e *= this.itemSize,
        this.normalized && (t = Et(t, this.array),
        n = Et(n, this.array),
        r = Et(r, this.array),
        s = Et(s, this.array)),
        this.array[e + 0] = t,
        this.array[e + 1] = n,
        this.array[e + 2] = r,
        this.array[e + 3] = s,
        this
    }
    onUpload(e) {
        return this.onUploadCallback = e,
        this
    }
    clone() {
        return new this.constructor(this.array,this.itemSize).copy(this)
    }
    toJSON() {
        const e = {
            itemSize: this.itemSize,
            type: this.array.constructor.name,
            array: Array.from(this.array),
            normalized: this.normalized
        };
        return this.name !== "" && (e.name = this.name),
        this.usage !== Ro && (e.usage = this.usage),
        e
    }
}
class Ma extends en {
    constructor(e, t, n) {
        super(new Uint16Array(e), t, n)
    }
}
class Jl extends en {
    constructor(e, t, n) {
        super(new Uint32Array(e), t, n)
    }
}
class gt extends en {
    constructor(e, t, n) {
        super(new Float32Array(e), t, n)
    }
}
let _u = 0;
const Ot = new pe
  , Vs = new nt
  , pi = new R
  , Nt = new Fi
  , ji = new Fi
  , pt = new R;
class Vt extends Ni {
    constructor() {
        super(),
        this.isBufferGeometry = !0,
        Object.defineProperty(this, "id", {
            value: _u++
        }),
        this.uuid = Bn(),
        this.name = "",
        this.type = "BufferGeometry",
        this.index = null,
        this.attributes = {},
        this.morphAttributes = {},
        this.morphTargetsRelative = !1,
        this.groups = [],
        this.boundingBox = null,
        this.boundingSphere = null,
        this.drawRange = {
            start: 0,
            count: 1 / 0
        },
        this.userData = {}
    }
    getIndex() {
        return this.index
    }
    setIndex(e) {
        return Array.isArray(e) ? this.index = new (Yl(e) ? Jl : Ma)(e,1) : this.index = e,
        this
    }
    getAttribute(e) {
        return this.attributes[e]
    }
    setAttribute(e, t) {
        return this.attributes[e] = t,
        this
    }
    deleteAttribute(e) {
        return delete this.attributes[e],
        this
    }
    hasAttribute(e) {
        return this.attributes[e] !== void 0
    }
    addGroup(e, t, n=0) {
        this.groups.push({
            start: e,
            count: t,
            materialIndex: n
        })
    }
    clearGroups() {
        this.groups = []
    }
    setDrawRange(e, t) {
        this.drawRange.start = e,
        this.drawRange.count = t
    }
    applyMatrix4(e) {
        const t = this.attributes.position;
        t !== void 0 && (t.applyMatrix4(e),
        t.needsUpdate = !0);
        const n = this.attributes.normal;
        if (n !== void 0) {
            const s = new Te().getNormalMatrix(e);
            n.applyNormalMatrix(s),
            n.needsUpdate = !0
        }
        const r = this.attributes.tangent;
        return r !== void 0 && (r.transformDirection(e),
        r.needsUpdate = !0),
        this.boundingBox !== null && this.computeBoundingBox(),
        this.boundingSphere !== null && this.computeBoundingSphere(),
        this
    }
    applyQuaternion(e) {
        return Ot.makeRotationFromQuaternion(e),
        this.applyMatrix4(Ot),
        this
    }
    rotateX(e) {
        return Ot.makeRotationX(e),
        this.applyMatrix4(Ot),
        this
    }
    rotateY(e) {
        return Ot.makeRotationY(e),
        this.applyMatrix4(Ot),
        this
    }
    rotateZ(e) {
        return Ot.makeRotationZ(e),
        this.applyMatrix4(Ot),
        this
    }
    translate(e, t, n) {
        return Ot.makeTranslation(e, t, n),
        this.applyMatrix4(Ot),
        this
    }
    scale(e, t, n) {
        return Ot.makeScale(e, t, n),
        this.applyMatrix4(Ot),
        this
    }
    lookAt(e) {
        return Vs.lookAt(e),
        Vs.updateMatrix(),
        this.applyMatrix4(Vs.matrix),
        this
    }
    center() {
        return this.computeBoundingBox(),
        this.boundingBox.getCenter(pi).negate(),
        this.translate(pi.x, pi.y, pi.z),
        this
    }
    setFromPoints(e) {
        const t = [];
        for (let n = 0, r = e.length; n < r; n++) {
            const s = e[n];
            t.push(s.x, s.y, s.z || 0)
        }
        return this.setAttribute("position", new gt(t,3)),
        this
    }
    computeBoundingBox() {
        this.boundingBox === null && (this.boundingBox = new Fi);
        const e = this.attributes.position
          , t = this.morphAttributes.position;
        if (e && e.isGLBufferAttribute) {
            console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.", this),
            this.boundingBox.set(new R(-1 / 0,-1 / 0,-1 / 0), new R(1 / 0,1 / 0,1 / 0));
            return
        }
        if (e !== void 0) {
            if (this.boundingBox.setFromBufferAttribute(e),
            t)
                for (let n = 0, r = t.length; n < r; n++) {
                    const s = t[n];
                    Nt.setFromBufferAttribute(s),
                    this.morphTargetsRelative ? (pt.addVectors(this.boundingBox.min, Nt.min),
                    this.boundingBox.expandByPoint(pt),
                    pt.addVectors(this.boundingBox.max, Nt.max),
                    this.boundingBox.expandByPoint(pt)) : (this.boundingBox.expandByPoint(Nt.min),
                    this.boundingBox.expandByPoint(Nt.max))
                }
        } else
            this.boundingBox.makeEmpty();
        (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this)
    }
    computeBoundingSphere() {
        this.boundingSphere === null && (this.boundingSphere = new Oi);
        const e = this.attributes.position
          , t = this.morphAttributes.position;
        if (e && e.isGLBufferAttribute) {
            console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.", this),
            this.boundingSphere.set(new R, 1 / 0);
            return
        }
        if (e) {
            const n = this.boundingSphere.center;
            if (Nt.setFromBufferAttribute(e),
            t)
                for (let s = 0, a = t.length; s < a; s++) {
                    const o = t[s];
                    ji.setFromBufferAttribute(o),
                    this.morphTargetsRelative ? (pt.addVectors(Nt.min, ji.min),
                    Nt.expandByPoint(pt),
                    pt.addVectors(Nt.max, ji.max),
                    Nt.expandByPoint(pt)) : (Nt.expandByPoint(ji.min),
                    Nt.expandByPoint(ji.max))
                }
            Nt.getCenter(n);
            let r = 0;
            for (let s = 0, a = e.count; s < a; s++)
                pt.fromBufferAttribute(e, s),
                r = Math.max(r, n.distanceToSquared(pt));
            if (t)
                for (let s = 0, a = t.length; s < a; s++) {
                    const o = t[s]
                      , l = this.morphTargetsRelative;
                    for (let c = 0, h = o.count; c < h; c++)
                        pt.fromBufferAttribute(o, c),
                        l && (pi.fromBufferAttribute(e, c),
                        pt.add(pi)),
                        r = Math.max(r, n.distanceToSquared(pt))
                }
            this.boundingSphere.radius = Math.sqrt(r),
            isNaN(this.boundingSphere.radius) && console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this)
        }
    }
    computeTangents() {
        const e = this.index
          , t = this.attributes;
        if (e === null || t.position === void 0 || t.normal === void 0 || t.uv === void 0) {
            console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");
            return
        }
        const n = t.position
          , r = t.normal
          , s = t.uv;
        this.hasAttribute("tangent") === !1 && this.setAttribute("tangent", new en(new Float32Array(4 * n.count),4));
        const a = this.getAttribute("tangent")
          , o = []
          , l = [];
        for (let B = 0; B < n.count; B++)
            o[B] = new R,
            l[B] = new R;
        const c = new R
          , h = new R
          , u = new R
          , f = new Ie
          , d = new Ie
          , g = new Ie
          , _ = new R
          , p = new R;
        function m(B, E, x) {
            c.fromBufferAttribute(n, B),
            h.fromBufferAttribute(n, E),
            u.fromBufferAttribute(n, x),
            f.fromBufferAttribute(s, B),
            d.fromBufferAttribute(s, E),
            g.fromBufferAttribute(s, x),
            h.sub(c),
            u.sub(c),
            d.sub(f),
            g.sub(f);
            const U = 1 / (d.x * g.y - g.x * d.y);
            isFinite(U) && (_.copy(h).multiplyScalar(g.y).addScaledVector(u, -d.y).multiplyScalar(U),
            p.copy(u).multiplyScalar(d.x).addScaledVector(h, -g.x).multiplyScalar(U),
            o[B].add(_),
            o[E].add(_),
            o[x].add(_),
            l[B].add(p),
            l[E].add(p),
            l[x].add(p))
        }
        let T = this.groups;
        T.length === 0 && (T = [{
            start: 0,
            count: e.count
        }]);
        for (let B = 0, E = T.length; B < E; ++B) {
            const x = T[B]
              , U = x.start
              , G = x.count;
            for (let P = U, H = U + G; P < H; P += 3)
                m(e.getX(P + 0), e.getX(P + 1), e.getX(P + 2))
        }
        const v = new R
          , S = new R
          , D = new R
          , b = new R;
        function w(B) {
            D.fromBufferAttribute(r, B),
            b.copy(D);
            const E = o[B];
            v.copy(E),
            v.sub(D.multiplyScalar(D.dot(E))).normalize(),
            S.crossVectors(b, E);
            const U = S.dot(l[B]) < 0 ? -1 : 1;
            a.setXYZW(B, v.x, v.y, v.z, U)
        }
        for (let B = 0, E = T.length; B < E; ++B) {
            const x = T[B]
              , U = x.start
              , G = x.count;
            for (let P = U, H = U + G; P < H; P += 3)
                w(e.getX(P + 0)),
                w(e.getX(P + 1)),
                w(e.getX(P + 2))
        }
    }
    computeVertexNormals() {
        const e = this.index
          , t = this.getAttribute("position");
        if (t !== void 0) {
            let n = this.getAttribute("normal");
            if (n === void 0)
                n = new en(new Float32Array(t.count * 3),3),
                this.setAttribute("normal", n);
            else
                for (let f = 0, d = n.count; f < d; f++)
                    n.setXYZ(f, 0, 0, 0);
            const r = new R
              , s = new R
              , a = new R
              , o = new R
              , l = new R
              , c = new R
              , h = new R
              , u = new R;
            if (e)
                for (let f = 0, d = e.count; f < d; f += 3) {
                    const g = e.getX(f + 0)
                      , _ = e.getX(f + 1)
                      , p = e.getX(f + 2);
                    r.fromBufferAttribute(t, g),
                    s.fromBufferAttribute(t, _),
                    a.fromBufferAttribute(t, p),
                    h.subVectors(a, s),
                    u.subVectors(r, s),
                    h.cross(u),
                    o.fromBufferAttribute(n, g),
                    l.fromBufferAttribute(n, _),
                    c.fromBufferAttribute(n, p),
                    o.add(h),
                    l.add(h),
                    c.add(h),
                    n.setXYZ(g, o.x, o.y, o.z),
                    n.setXYZ(_, l.x, l.y, l.z),
                    n.setXYZ(p, c.x, c.y, c.z)
                }
            else
                for (let f = 0, d = t.count; f < d; f += 3)
                    r.fromBufferAttribute(t, f + 0),
                    s.fromBufferAttribute(t, f + 1),
                    a.fromBufferAttribute(t, f + 2),
                    h.subVectors(a, s),
                    u.subVectors(r, s),
                    h.cross(u),
                    n.setXYZ(f + 0, h.x, h.y, h.z),
                    n.setXYZ(f + 1, h.x, h.y, h.z),
                    n.setXYZ(f + 2, h.x, h.y, h.z);
            this.normalizeNormals(),
            n.needsUpdate = !0
        }
    }
    normalizeNormals() {
        const e = this.attributes.normal;
        for (let t = 0, n = e.count; t < n; t++)
            pt.fromBufferAttribute(e, t),
            pt.normalize(),
            e.setXYZ(t, pt.x, pt.y, pt.z)
    }
    toNonIndexed() {
        function e(o, l) {
            const c = o.array
              , h = o.itemSize
              , u = o.normalized
              , f = new c.constructor(l.length * h);
            let d = 0
              , g = 0;
            for (let _ = 0, p = l.length; _ < p; _++) {
                o.isInterleavedBufferAttribute ? d = l[_] * o.data.stride + o.offset : d = l[_] * h;
                for (let m = 0; m < h; m++)
                    f[g++] = c[d++]
            }
            return new en(f,h,u)
        }
        if (this.index === null)
            return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),
            this;
        const t = new Vt
          , n = this.index.array
          , r = this.attributes;
        for (const o in r) {
            const l = r[o]
              , c = e(l, n);
            t.setAttribute(o, c)
        }
        const s = this.morphAttributes;
        for (const o in s) {
            const l = []
              , c = s[o];
            for (let h = 0, u = c.length; h < u; h++) {
                const f = c[h]
                  , d = e(f, n);
                l.push(d)
            }
            t.morphAttributes[o] = l
        }
        t.morphTargetsRelative = this.morphTargetsRelative;
        const a = this.groups;
        for (let o = 0, l = a.length; o < l; o++) {
            const c = a[o];
            t.addGroup(c.start, c.count, c.materialIndex)
        }
        return t
    }
    toJSON() {
        const e = {
            metadata: {
                version: 4.6,
                type: "BufferGeometry",
                generator: "BufferGeometry.toJSON"
            }
        };
        if (e.uuid = this.uuid,
        e.type = this.type,
        this.name !== "" && (e.name = this.name),
        Object.keys(this.userData).length > 0 && (e.userData = this.userData),
        this.parameters !== void 0) {
            const l = this.parameters;
            for (const c in l)
                l[c] !== void 0 && (e[c] = l[c]);
            return e
        }
        e.data = {
            attributes: {}
        };
        const t = this.index;
        t !== null && (e.data.index = {
            type: t.array.constructor.name,
            array: Array.prototype.slice.call(t.array)
        });
        const n = this.attributes;
        for (const l in n) {
            const c = n[l];
            e.data.attributes[l] = c.toJSON(e.data)
        }
        const r = {};
        let s = !1;
        for (const l in this.morphAttributes) {
            const c = this.morphAttributes[l]
              , h = [];
            for (let u = 0, f = c.length; u < f; u++) {
                const d = c[u];
                h.push(d.toJSON(e.data))
            }
            h.length > 0 && (r[l] = h,
            s = !0)
        }
        s && (e.data.morphAttributes = r,
        e.data.morphTargetsRelative = this.morphTargetsRelative);
        const a = this.groups;
        a.length > 0 && (e.data.groups = JSON.parse(JSON.stringify(a)));
        const o = this.boundingSphere;
        return o !== null && (e.data.boundingSphere = {
            center: o.center.toArray(),
            radius: o.radius
        }),
        e
    }
    clone() {
        return new this.constructor().copy(this)
    }
    copy(e) {
        this.index = null,
        this.attributes = {},
        this.morphAttributes = {},
        this.groups = [],
        this.boundingBox = null,
        this.boundingSphere = null;
        const t = {};
        this.name = e.name;
        const n = e.index;
        n !== null && this.setIndex(n.clone(t));
        const r = e.attributes;
        for (const c in r) {
            const h = r[c];
            this.setAttribute(c, h.clone(t))
        }
        const s = e.morphAttributes;
        for (const c in s) {
            const h = []
              , u = s[c];
            for (let f = 0, d = u.length; f < d; f++)
                h.push(u[f].clone(t));
            this.morphAttributes[c] = h
        }
        this.morphTargetsRelative = e.morphTargetsRelative;
        const a = e.groups;
        for (let c = 0, h = a.length; c < h; c++) {
            const u = a[c];
            this.addGroup(u.start, u.count, u.materialIndex)
        }
        const o = e.boundingBox;
        o !== null && (this.boundingBox = o.clone());
        const l = e.boundingSphere;
        return l !== null && (this.boundingSphere = l.clone()),
        this.drawRange.start = e.drawRange.start,
        this.drawRange.count = e.drawRange.count,
        this.userData = e.userData,
        this
    }
    dispose() {
        this.dispatchEvent({
            type: "dispose"
        })
    }
}
const Go = new pe
  , Wn = new va
  , wr = new Oi
  , Wo = new R
  , mi = new R
  , gi = new R
  , _i = new R
  , ks = new R
  , Rr = new R
  , Cr = new Ie
  , Pr = new Ie
  , Lr = new Ie
  , Xo = new R
  , qo = new R
  , Yo = new R
  , Ir = new R
  , Dr = new R;
class zt extends nt {
    constructor(e=new Vt, t=new xa) {
        super(),
        this.isMesh = !0,
        this.type = "Mesh",
        this.geometry = e,
        this.material = t,
        this.updateMorphTargets()
    }
    copy(e, t) {
        return super.copy(e, t),
        e.morphTargetInfluences !== void 0 && (this.morphTargetInfluences = e.morphTargetInfluences.slice()),
        e.morphTargetDictionary !== void 0 && (this.morphTargetDictionary = Object.assign({}, e.morphTargetDictionary)),
        this.material = Array.isArray(e.material) ? e.material.slice() : e.material,
        this.geometry = e.geometry,
        this
    }
    updateMorphTargets() {
        const t = this.geometry.morphAttributes
          , n = Object.keys(t);
        if (n.length > 0) {
            const r = t[n[0]];
            if (r !== void 0) {
                this.morphTargetInfluences = [],
                this.morphTargetDictionary = {};
                for (let s = 0, a = r.length; s < a; s++) {
                    const o = r[s].name || String(s);
                    this.morphTargetInfluences.push(0),
                    this.morphTargetDictionary[o] = s
                }
            }
        }
    }
    getVertexPosition(e, t) {
        const n = this.geometry
          , r = n.attributes.position
          , s = n.morphAttributes.position
          , a = n.morphTargetsRelative;
        t.fromBufferAttribute(r, e);
        const o = this.morphTargetInfluences;
        if (s && o) {
            Rr.set(0, 0, 0);
            for (let l = 0, c = s.length; l < c; l++) {
                const h = o[l]
                  , u = s[l];
                h !== 0 && (ks.fromBufferAttribute(u, e),
                a ? Rr.addScaledVector(ks, h) : Rr.addScaledVector(ks.sub(t), h))
            }
            t.add(Rr)
        }
        return t
    }
    raycast(e, t) {
        const n = this.geometry
          , r = this.material
          , s = this.matrixWorld;
        r !== void 0 && (n.boundingSphere === null && n.computeBoundingSphere(),
        wr.copy(n.boundingSphere),
        wr.applyMatrix4(s),
        Wn.copy(e.ray).recast(e.near),
        !(wr.containsPoint(Wn.origin) === !1 && (Wn.intersectSphere(wr, Wo) === null || Wn.origin.distanceToSquared(Wo) > (e.far - e.near) ** 2)) && (Go.copy(s).invert(),
        Wn.copy(e.ray).applyMatrix4(Go),
        !(n.boundingBox !== null && Wn.intersectsBox(n.boundingBox) === !1) && this._computeIntersections(e, t, Wn)))
    }
    _computeIntersections(e, t, n) {
        let r;
        const s = this.geometry
          , a = this.material
          , o = s.index
          , l = s.attributes.position
          , c = s.attributes.uv
          , h = s.attributes.uv1
          , u = s.attributes.normal
          , f = s.groups
          , d = s.drawRange;
        if (o !== null)
            if (Array.isArray(a))
                for (let g = 0, _ = f.length; g < _; g++) {
                    const p = f[g]
                      , m = a[p.materialIndex]
                      , T = Math.max(p.start, d.start)
                      , v = Math.min(o.count, Math.min(p.start + p.count, d.start + d.count));
                    for (let S = T, D = v; S < D; S += 3) {
                        const b = o.getX(S)
                          , w = o.getX(S + 1)
                          , B = o.getX(S + 2);
                        r = Ur(this, m, e, n, c, h, u, b, w, B),
                        r && (r.faceIndex = Math.floor(S / 3),
                        r.face.materialIndex = p.materialIndex,
                        t.push(r))
                    }
                }
            else {
                const g = Math.max(0, d.start)
                  , _ = Math.min(o.count, d.start + d.count);
                for (let p = g, m = _; p < m; p += 3) {
                    const T = o.getX(p)
                      , v = o.getX(p + 1)
                      , S = o.getX(p + 2);
                    r = Ur(this, a, e, n, c, h, u, T, v, S),
                    r && (r.faceIndex = Math.floor(p / 3),
                    t.push(r))
                }
            }
        else if (l !== void 0)
            if (Array.isArray(a))
                for (let g = 0, _ = f.length; g < _; g++) {
                    const p = f[g]
                      , m = a[p.materialIndex]
                      , T = Math.max(p.start, d.start)
                      , v = Math.min(l.count, Math.min(p.start + p.count, d.start + d.count));
                    for (let S = T, D = v; S < D; S += 3) {
                        const b = S
                          , w = S + 1
                          , B = S + 2;
                        r = Ur(this, m, e, n, c, h, u, b, w, B),
                        r && (r.faceIndex = Math.floor(S / 3),
                        r.face.materialIndex = p.materialIndex,
                        t.push(r))
                    }
                }
            else {
                const g = Math.max(0, d.start)
                  , _ = Math.min(l.count, d.start + d.count);
                for (let p = g, m = _; p < m; p += 3) {
                    const T = p
                      , v = p + 1
                      , S = p + 2;
                    r = Ur(this, a, e, n, c, h, u, T, v, S),
                    r && (r.faceIndex = Math.floor(p / 3),
                    t.push(r))
                }
            }
    }
}
function vu(i, e, t, n, r, s, a, o) {
    let l;
    if (e.side === It ? l = n.intersectTriangle(a, s, r, !0, o) : l = n.intersectTriangle(r, s, a, e.side === Un, o),
    l === null)
        return null;
    Dr.copy(o),
    Dr.applyMatrix4(i.matrixWorld);
    const c = t.ray.origin.distanceTo(Dr);
    return c < t.near || c > t.far ? null : {
        distance: c,
        point: Dr.clone(),
        object: i
    }
}
function Ur(i, e, t, n, r, s, a, o, l, c) {
    i.getVertexPosition(o, mi),
    i.getVertexPosition(l, gi),
    i.getVertexPosition(c, _i);
    const h = vu(i, e, t, n, mi, gi, _i, Ir);
    if (h) {
        r && (Cr.fromBufferAttribute(r, o),
        Pr.fromBufferAttribute(r, l),
        Lr.fromBufferAttribute(r, c),
        h.uv = Qt.getInterpolation(Ir, mi, gi, _i, Cr, Pr, Lr, new Ie)),
        s && (Cr.fromBufferAttribute(s, o),
        Pr.fromBufferAttribute(s, l),
        Lr.fromBufferAttribute(s, c),
        h.uv1 = Qt.getInterpolation(Ir, mi, gi, _i, Cr, Pr, Lr, new Ie)),
        a && (Xo.fromBufferAttribute(a, o),
        qo.fromBufferAttribute(a, l),
        Yo.fromBufferAttribute(a, c),
        h.normal = Qt.getInterpolation(Ir, mi, gi, _i, Xo, qo, Yo, new R),
        h.normal.dot(n.direction) > 0 && h.normal.multiplyScalar(-1));
        const u = {
            a: o,
            b: l,
            c,
            normal: new R,
            materialIndex: 0
        };
        Qt.getNormal(mi, gi, _i, u.normal),
        h.face = u
    }
    return h
}
class Bi extends Vt {
    constructor(e=1, t=1, n=1, r=1, s=1, a=1) {
        super(),
        this.type = "BoxGeometry",
        this.parameters = {
            width: e,
            height: t,
            depth: n,
            widthSegments: r,
            heightSegments: s,
            depthSegments: a
        };
        const o = this;
        r = Math.floor(r),
        s = Math.floor(s),
        a = Math.floor(a);
        const l = []
          , c = []
          , h = []
          , u = [];
        let f = 0
          , d = 0;
        g("z", "y", "x", -1, -1, n, t, e, a, s, 0),
        g("z", "y", "x", 1, -1, n, t, -e, a, s, 1),
        g("x", "z", "y", 1, 1, e, n, t, r, a, 2),
        g("x", "z", "y", 1, -1, e, n, -t, r, a, 3),
        g("x", "y", "z", 1, -1, e, t, n, r, s, 4),
        g("x", "y", "z", -1, -1, e, t, -n, r, s, 5),
        this.setIndex(l),
        this.setAttribute("position", new gt(c,3)),
        this.setAttribute("normal", new gt(h,3)),
        this.setAttribute("uv", new gt(u,2));
        function g(_, p, m, T, v, S, D, b, w, B, E) {
            const x = S / w
              , U = D / B
              , G = S / 2
              , P = D / 2
              , H = b / 2
              , q = w + 1
              , K = B + 1;
            let ne = 0
              , z = 0;
            const j = new R;
            for (let Q = 0; Q < K; Q++) {
                const fe = Q * U - P;
                for (let we = 0; we < q; we++) {
                    const Ve = we * x - G;
                    j[_] = Ve * T,
                    j[p] = fe * v,
                    j[m] = H,
                    c.push(j.x, j.y, j.z),
                    j[_] = 0,
                    j[p] = 0,
                    j[m] = b > 0 ? 1 : -1,
                    h.push(j.x, j.y, j.z),
                    u.push(we / w),
                    u.push(1 - Q / B),
                    ne += 1
                }
            }
            for (let Q = 0; Q < B; Q++)
                for (let fe = 0; fe < w; fe++) {
                    const we = f + fe + q * Q
                      , Ve = f + fe + q * (Q + 1)
                      , k = f + (fe + 1) + q * (Q + 1)
                      , J = f + (fe + 1) + q * Q;
                    l.push(we, Ve, J),
                    l.push(Ve, k, J),
                    z += 6
                }
            o.addGroup(d, z, E),
            d += z,
            f += ne
        }
    }
    copy(e) {
        return super.copy(e),
        this.parameters = Object.assign({}, e.parameters),
        this
    }
    static fromJSON(e) {
        return new Bi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)
    }
}
function Ui(i) {
    const e = {};
    for (const t in i) {
        e[t] = {};
        for (const n in i[t]) {
            const r = i[t][n];
            r && (r.isColor || r.isMatrix3 || r.isMatrix4 || r.isVector2 || r.isVector3 || r.isVector4 || r.isTexture || r.isQuaternion) ? r.isRenderTargetTexture ? (console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),
            e[t][n] = null) : e[t][n] = r.clone() : Array.isArray(r) ? e[t][n] = r.slice() : e[t][n] = r
        }
    }
    return e
}
function Tt(i) {
    const e = {};
    for (let t = 0; t < i.length; t++) {
        const n = Ui(i[t]);
        for (const r in n)
            e[r] = n[r]
    }
    return e
}
function xu(i) {
    const e = [];
    for (let t = 0; t < i.length; t++)
        e.push(i[t].clone());
    return e
}
function Ql(i) {
    const e = i.getRenderTarget();
    return e === null ? i.outputColorSpace : e.isXRRenderTarget === !0 ? e.texture.colorSpace : Ze.workingColorSpace
}
const Mu = {
    clone: Ui,
    merge: Tt
};
var yu = `void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`
  , Su = `void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;
class Fn extends zn {
    constructor(e) {
        super(),
        this.isShaderMaterial = !0,
        this.type = "ShaderMaterial",
        this.defines = {},
        this.uniforms = {},
        this.uniformsGroups = [],
        this.vertexShader = yu,
        this.fragmentShader = Su,
        this.linewidth = 1,
        this.wireframe = !1,
        this.wireframeLinewidth = 1,
        this.fog = !1,
        this.lights = !1,
        this.clipping = !1,
        this.forceSinglePass = !0,
        this.extensions = {
            clipCullDistance: !1,
            multiDraw: !1
        },
        this.defaultAttributeValues = {
            color: [1, 1, 1],
            uv: [0, 0],
            uv1: [0, 0]
        },
        this.index0AttributeName = void 0,
        this.uniformsNeedUpdate = !1,
        this.glslVersion = null,
        e !== void 0 && this.setValues(e)
    }
    copy(e) {
        return super.copy(e),
        this.fragmentShader = e.fragmentShader,
        this.vertexShader = e.vertexShader,
        this.uniforms = Ui(e.uniforms),
        this.uniformsGroups = xu(e.uniformsGroups),
        this.defines = Object.assign({}, e.defines),
        this.wireframe = e.wireframe,
        this.wireframeLinewidth = e.wireframeLinewidth,
        this.fog = e.fog,
        this.lights = e.lights,
        this.clipping = e.clipping,
        this.extensions = Object.assign({}, e.extensions),
        this.glslVersion = e.glslVersion,
        this
    }
    toJSON(e) {
        const t = super.toJSON(e);
        t.glslVersion = this.glslVersion,
        t.uniforms = {};
        for (const r in this.uniforms) {
            const a = this.uniforms[r].value;
            a && a.isTexture ? t.uniforms[r] = {
                type: "t",
                value: a.toJSON(e).uuid
            } : a && a.isColor ? t.uniforms[r] = {
                type: "c",
                value: a.getHex()
            } : a && a.isVector2 ? t.uniforms[r] = {
                type: "v2",
                value: a.toArray()
            } : a && a.isVector3 ? t.uniforms[r] = {
                type: "v3",
                value: a.toArray()
            } : a && a.isVector4 ? t.uniforms[r] = {
                type: "v4",
                value: a.toArray()
            } : a && a.isMatrix3 ? t.uniforms[r] = {
                type: "m3",
                value: a.toArray()
            } : a && a.isMatrix4 ? t.uniforms[r] = {
                type: "m4",
                value: a.toArray()
            } : t.uniforms[r] = {
                value: a
            }
        }
        Object.keys(this.defines).length > 0 && (t.defines = this.defines),
        t.vertexShader = this.vertexShader,
        t.fragmentShader = this.fragmentShader,
        t.lights = this.lights,
        t.clipping = this.clipping;
        const n = {};
        for (const r in this.extensions)
            this.extensions[r] === !0 && (n[r] = !0);
        return Object.keys(n).length > 0 && (t.extensions = n),
        t
    }
}
class ec extends nt {
    constructor() {
        super(),
        this.isCamera = !0,
        this.type = "Camera",
        this.matrixWorldInverse = new pe,
        this.projectionMatrix = new pe,
        this.projectionMatrixInverse = new pe,
        this.coordinateSystem = Mn
    }
    copy(e, t) {
        return super.copy(e, t),
        this.matrixWorldInverse.copy(e.matrixWorldInverse),
        this.projectionMatrix.copy(e.projectionMatrix),
        this.projectionMatrixInverse.copy(e.projectionMatrixInverse),
        this.coordinateSystem = e.coordinateSystem,
        this
    }
    getWorldDirection(e) {
        return super.getWorldDirection(e).negate()
    }
    updateMatrixWorld(e) {
        super.updateMatrixWorld(e),
        this.matrixWorldInverse.copy(this.matrixWorld).invert()
    }
    updateWorldMatrix(e, t) {
        super.updateWorldMatrix(e, t),
        this.matrixWorldInverse.copy(this.matrixWorld).invert()
    }
    clone() {
        return new this.constructor().copy(this)
    }
}
const Cn = new R
  , Ko = new Ie
  , Zo = new Ie;
class wt extends ec {
    constructor(e=50, t=1, n=.1, r=2e3) {
        super(),
        this.isPerspectiveCamera = !0,
        this.type = "PerspectiveCamera",
        this.fov = e,
        this.zoom = 1,
        this.near = n,
        this.far = r,
        this.focus = 10,
        this.aspect = t,
        this.view = null,
        this.filmGauge = 35,
        this.filmOffset = 0,
        this.updateProjectionMatrix()
    }
    copy(e, t) {
        return super.copy(e, t),
        this.fov = e.fov,
        this.zoom = e.zoom,
        this.near = e.near,
        this.far = e.far,
        this.focus = e.focus,
        this.aspect = e.aspect,
        this.view = e.view === null ? null : Object.assign({}, e.view),
        this.filmGauge = e.filmGauge,
        this.filmOffset = e.filmOffset,
        this
    }
    setFocalLength(e) {
        const t = .5 * this.getFilmHeight() / e;
        this.fov = Di * 2 * Math.atan(t),
        this.updateProjectionMatrix()
    }
    getFocalLength() {
        const e = Math.tan(tr * .5 * this.fov);
        return .5 * this.getFilmHeight() / e
    }
    getEffectiveFOV() {
        return Di * 2 * Math.atan(Math.tan(tr * .5 * this.fov) / this.zoom)
    }
    getFilmWidth() {
        return this.filmGauge * Math.min(this.aspect, 1)
    }
    getFilmHeight() {
        return this.filmGauge / Math.max(this.aspect, 1)
    }
    getViewBounds(e, t, n) {
        Cn.set(-1, -1, .5).applyMatrix4(this.projectionMatrixInverse),
        t.set(Cn.x, Cn.y).multiplyScalar(-e / Cn.z),
        Cn.set(1, 1, .5).applyMatrix4(this.projectionMatrixInverse),
        n.set(Cn.x, Cn.y).multiplyScalar(-e / Cn.z)
    }
    getViewSize(e, t) {
        return this.getViewBounds(e, Ko, Zo),
        t.subVectors(Zo, Ko)
    }
    setViewOffset(e, t, n, r, s, a) {
        this.aspect = e / t,
        this.view === null && (this.view = {
            enabled: !0,
            fullWidth: 1,
            fullHeight: 1,
            offsetX: 0,
            offsetY: 0,
            width: 1,
            height: 1
        }),
        this.view.enabled = !0,
        this.view.fullWidth = e,
        this.view.fullHeight = t,
        this.view.offsetX = n,
        this.view.offsetY = r,
        this.view.width = s,
        this.view.height = a,
        this.updateProjectionMatrix()
    }
    clearViewOffset() {
        this.view !== null && (this.view.enabled = !1),
        this.updateProjectionMatrix()
    }
    updateProjectionMatrix() {
        const e = this.near;
        let t = e * Math.tan(tr * .5 * this.fov) / this.zoom
          , n = 2 * t
          , r = this.aspect * n
          , s = -.5 * r;
        const a = this.view;
        if (this.view !== null && this.view.enabled) {
            const l = a.fullWidth
              , c = a.fullHeight;
            s += a.offsetX * r / l,
            t -= a.offsetY * n / c,
            r *= a.width / l,
            n *= a.height / c
        }
        const o = this.filmOffset;
        o !== 0 && (s += e * o / this.getFilmWidth()),
        this.projectionMatrix.makePerspective(s, s + r, t, t - n, e, this.far, this.coordinateSystem),
        this.projectionMatrixInverse.copy(this.projectionMatrix).invert()
    }
    toJSON(e) {
        const t = super.toJSON(e);
        return t.object.fov = this.fov,
        t.object.zoom = this.zoom,
        t.object.near = this.near,
        t.object.far = this.far,
        t.object.focus = this.focus,
        t.object.aspect = this.aspect,
        this.view !== null && (t.object.view = Object.assign({}, this.view)),
        t.object.filmGauge = this.filmGauge,
        t.object.filmOffset = this.filmOffset,
        t
    }
}
const vi = -90
  , xi = 1;
class Eu extends nt {
    constructor(e, t, n) {
        super(),
        this.type = "CubeCamera",
        this.renderTarget = n,
        this.coordinateSystem = null,
        this.activeMipmapLevel = 0;
        const r = new wt(vi,xi,e,t);
        r.layers = this.layers,
        this.add(r);
        const s = new wt(vi,xi,e,t);
        s.layers = this.layers,
        this.add(s);
        const a = new wt(vi,xi,e,t);
        a.layers = this.layers,
        this.add(a);
        const o = new wt(vi,xi,e,t);
        o.layers = this.layers,
        this.add(o);
        const l = new wt(vi,xi,e,t);
        l.layers = this.layers,
        this.add(l);
        const c = new wt(vi,xi,e,t);
        c.layers = this.layers,
        this.add(c)
    }
    updateCoordinateSystem() {
        const e = this.coordinateSystem
          , t = this.children.concat()
          , [n,r,s,a,o,l] = t;
        for (const c of t)
            this.remove(c);
        if (e === Mn)
            n.up.set(0, 1, 0),
            n.lookAt(1, 0, 0),
            r.up.set(0, 1, 0),
            r.lookAt(-1, 0, 0),
            s.up.set(0, 0, -1),
            s.lookAt(0, 1, 0),
            a.up.set(0, 0, 1),
            a.lookAt(0, -1, 0),
            o.up.set(0, 1, 0),
            o.lookAt(0, 0, 1),
            l.up.set(0, 1, 0),
            l.lookAt(0, 0, -1);
        else if (e === Qr)
            n.up.set(0, -1, 0),
            n.lookAt(-1, 0, 0),
            r.up.set(0, -1, 0),
            r.lookAt(1, 0, 0),
            s.up.set(0, 0, 1),
            s.lookAt(0, 1, 0),
            a.up.set(0, 0, -1),
            a.lookAt(0, -1, 0),
            o.up.set(0, -1, 0),
            o.lookAt(0, 0, 1),
            l.up.set(0, -1, 0),
            l.lookAt(0, 0, -1);
        else
            throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: " + e);
        for (const c of t)
            this.add(c),
            c.updateMatrixWorld()
    }
    update(e, t) {
        this.parent === null && this.updateMatrixWorld();
        const {renderTarget: n, activeMipmapLevel: r} = this;
        this.coordinateSystem !== e.coordinateSystem && (this.coordinateSystem = e.coordinateSystem,
        this.updateCoordinateSystem());
        const [s,a,o,l,c,h] = this.children
          , u = e.getRenderTarget()
          , f = e.getActiveCubeFace()
          , d = e.getActiveMipmapLevel()
          , g = e.xr.enabled;
        e.xr.enabled = !1;
        const _ = n.texture.generateMipmaps;
        n.texture.generateMipmaps = !1,
        e.setRenderTarget(n, 0, r),
        e.render(t, s),
        e.setRenderTarget(n, 1, r),
        e.render(t, a),
        e.setRenderTarget(n, 2, r),
        e.render(t, o),
        e.setRenderTarget(n, 3, r),
        e.render(t, l),
        e.setRenderTarget(n, 4, r),
        e.render(t, c),
        n.texture.generateMipmaps = _,
        e.setRenderTarget(n, 5, r),
        e.render(t, h),
        e.setRenderTarget(u, f, d),
        e.xr.enabled = g,
        n.texture.needsPMREMUpdate = !0
    }
}
class tc extends ut {
    constructor(e, t, n, r, s, a, o, l, c, h) {
        e = e !== void 0 ? e : [],
        t = t !== void 0 ? t : Pi,
        super(e, t, n, r, s, a, o, l, c, h),
        this.isCubeTexture = !0,
        this.flipY = !1
    }
    get images() {
        return this.image
    }
    set images(e) {
        this.image = e
    }
}
class Tu extends Qn {
    constructor(e=1, t={}) {
        super(e, e, t),
        this.isWebGLCubeRenderTarget = !0;
        const n = {
            width: e,
            height: e,
            depth: 1
        }
          , r = [n, n, n, n, n, n];
        this.texture = new tc(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),
        this.texture.isRenderTargetTexture = !0,
        this.texture.generateMipmaps = t.generateMipmaps !== void 0 ? t.generateMipmaps : !1,
        this.texture.minFilter = t.minFilter !== void 0 ? t.minFilter : qt
    }
    fromEquirectangularTexture(e, t) {
        this.texture.type = t.type,
        this.texture.colorSpace = t.colorSpace,
        this.texture.generateMipmaps = t.generateMipmaps,
        this.texture.minFilter = t.minFilter,
        this.texture.magFilter = t.magFilter;
        const n = {
            uniforms: {
                tEquirect: {
                    value: null
                }
            },
            vertexShader: `

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,
            fragmentShader: `

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`
        }
          , r = new Bi(5,5,5)
          , s = new Fn({
            name: "CubemapFromEquirect",
            uniforms: Ui(n.uniforms),
            vertexShader: n.vertexShader,
            fragmentShader: n.fragmentShader,
            side: It,
            blending: In
        });
        s.uniforms.tEquirect.value = t;
        const a = new zt(r,s)
          , o = t.minFilter;
        return t.minFilter === Jn && (t.minFilter = qt),
        new Eu(1,10,this).update(e, a),
        t.minFilter = o,
        a.geometry.dispose(),
        a.material.dispose(),
        this
    }
    clear(e, t, n, r) {
        const s = e.getRenderTarget();
        for (let a = 0; a < 6; a++)
            e.setRenderTarget(this, a),
            e.clear(t, n, r);
        e.setRenderTarget(s)
    }
}
const Hs = new R
  , Au = new R
  , bu = new Te;
class Kn {
    constructor(e=new R(1,0,0), t=0) {
        this.isPlane = !0,
        this.normal = e,
        this.constant = t
    }
    set(e, t) {
        return this.normal.copy(e),
        this.constant = t,
        this
    }
    setComponents(e, t, n, r) {
        return this.normal.set(e, t, n),
        this.constant = r,
        this
    }
    setFromNormalAndCoplanarPoint(e, t) {
        return this.normal.copy(e),
        this.constant = -t.dot(this.normal),
        this
    }
    setFromCoplanarPoints(e, t, n) {
        const r = Hs.subVectors(n, t).cross(Au.subVectors(e, t)).normalize();
        return this.setFromNormalAndCoplanarPoint(r, e),
        this
    }
    copy(e) {
        return this.normal.copy(e.normal),
        this.constant = e.constant,
        this
    }
    normalize() {
        const e = 1 / this.normal.length();
        return this.normal.multiplyScalar(e),
        this.constant *= e,
        this
    }
    negate() {
        return this.constant *= -1,
        this.normal.negate(),
        this
    }
    distanceToPoint(e) {
        return this.normal.dot(e) + this.constant
    }
    distanceToSphere(e) {
        return this.distanceToPoint(e.center) - e.radius
    }
    projectPoint(e, t) {
        return t.copy(e).addScaledVector(this.normal, -this.distanceToPoint(e))
    }
    intersectLine(e, t) {
        const n = e.delta(Hs)
          , r = this.normal.dot(n);
        if (r === 0)
            return this.distanceToPoint(e.start) === 0 ? t.copy(e.start) : null;
        const s = -(e.start.dot(this.normal) + this.constant) / r;
        return s < 0 || s > 1 ? null : t.copy(e.start).addScaledVector(n, s)
    }
    intersectsLine(e) {
        const t = this.distanceToPoint(e.start)
          , n = this.distanceToPoint(e.end);
        return t < 0 && n > 0 || n < 0 && t > 0
    }
    intersectsBox(e) {
        return e.intersectsPlane(this)
    }
    intersectsSphere(e) {
        return e.intersectsPlane(this)
    }
    coplanarPoint(e) {
        return e.copy(this.normal).multiplyScalar(-this.constant)
    }
    applyMatrix4(e, t) {
        const n = t || bu.getNormalMatrix(e)
          , r = this.coplanarPoint(Hs).applyMatrix4(e)
          , s = this.normal.applyMatrix3(n).normalize();
        return this.constant = -r.dot(s),
        this
    }
    translate(e) {
        return this.constant -= e.dot(this.normal),
        this
    }
    equals(e) {
        return e.normal.equals(this.normal) && e.constant === this.constant
    }
    clone() {
        return new this.constructor().copy(this)
    }
}
const Xn = new Oi
  , Nr = new R;
class ya {
    constructor(e=new Kn, t=new Kn, n=new Kn, r=new Kn, s=new Kn, a=new Kn) {
        this.planes = [e, t, n, r, s, a]
    }
    set(e, t, n, r, s, a) {
        const o = this.planes;
        return o[0].copy(e),
        o[1].copy(t),
        o[2].copy(n),
        o[3].copy(r),
        o[4].copy(s),
        o[5].copy(a),
        this
    }
    copy(e) {
        const t = this.planes;
        for (let n = 0; n < 6; n++)
            t[n].copy(e.planes[n]);
        return this
    }
    setFromProjectionMatrix(e, t=Mn) {
        const n = this.planes
          , r = e.elements
          , s = r[0]
          , a = r[1]
          , o = r[2]
          , l = r[3]
          , c = r[4]
          , h = r[5]
          , u = r[6]
          , f = r[7]
          , d = r[8]
          , g = r[9]
          , _ = r[10]
          , p = r[11]
          , m = r[12]
          , T = r[13]
          , v = r[14]
          , S = r[15];
        if (n[0].setComponents(l - s, f - c, p - d, S - m).normalize(),
        n[1].setComponents(l + s, f + c, p + d, S + m).normalize(),
        n[2].setComponents(l + a, f + h, p + g, S + T).normalize(),
        n[3].setComponents(l - a, f - h, p - g, S - T).normalize(),
        n[4].setComponents(l - o, f - u, p - _, S - v).normalize(),
        t === Mn)
            n[5].setComponents(l + o, f + u, p + _, S + v).normalize();
        else if (t === Qr)
            n[5].setComponents(o, u, _, v).normalize();
        else
            throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: " + t);
        return this
    }
    intersectsObject(e) {
        if (e.boundingSphere !== void 0)
            e.boundingSphere === null && e.computeBoundingSphere(),
            Xn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);
        else {
            const t = e.geometry;
            t.boundingSphere === null && t.computeBoundingSphere(),
            Xn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)
        }
        return this.intersectsSphere(Xn)
    }
    intersectsSprite(e) {
        return Xn.center.set(0, 0, 0),
        Xn.radius = .7071067811865476,
        Xn.applyMatrix4(e.matrixWorld),
        this.intersectsSphere(Xn)
    }
    intersectsSphere(e) {
        const t = this.planes
          , n = e.center
          , r = -e.radius;
        for (let s = 0; s < 6; s++)
            if (t[s].distanceToPoint(n) < r)
                return !1;
        return !0
    }
    intersectsBox(e) {
        const t = this.planes;
        for (let n = 0; n < 6; n++) {
            const r = t[n];
            if (Nr.x = r.normal.x > 0 ? e.max.x : e.min.x,
            Nr.y = r.normal.y > 0 ? e.max.y : e.min.y,
            Nr.z = r.normal.z > 0 ? e.max.z : e.min.z,
            r.distanceToPoint(Nr) < 0)
                return !1
        }
        return !0
    }
    containsPoint(e) {
        const t = this.planes;
        for (let n = 0; n < 6; n++)
            if (t[n].distanceToPoint(e) < 0)
                return !1;
        return !0
    }
    clone() {
        return new this.constructor().copy(this)
    }
}
function nc() {
    let i = null
      , e = !1
      , t = null
      , n = null;
    function r(s, a) {
        t(s, a),
        n = i.requestAnimationFrame(r)
    }
    return {
        start: function() {
            e !== !0 && t !== null && (n = i.requestAnimationFrame(r),
            e = !0)
        },
        stop: function() {
            i.cancelAnimationFrame(n),
            e = !1
        },
        setAnimationLoop: function(s) {
            t = s
        },
        setContext: function(s) {
            i = s
        }
    }
}
function wu(i) {
    const e = new WeakMap;
    function t(o, l) {
        const c = o.array
          , h = o.usage
          , u = c.byteLength
          , f = i.createBuffer();
        i.bindBuffer(l, f),
        i.bufferData(l, c, h),
        o.onUploadCallback();
        let d;
        if (c instanceof Float32Array)
            d = i.FLOAT;
        else if (c instanceof Uint16Array)
            o.isFloat16BufferAttribute ? d = i.HALF_FLOAT : d = i.UNSIGNED_SHORT;
        else if (c instanceof Int16Array)
            d = i.SHORT;
        else if (c instanceof Uint32Array)
            d = i.UNSIGNED_INT;
        else if (c instanceof Int32Array)
            d = i.INT;
        else if (c instanceof Int8Array)
            d = i.BYTE;
        else if (c instanceof Uint8Array)
            d = i.UNSIGNED_BYTE;
        else if (c instanceof Uint8ClampedArray)
            d = i.UNSIGNED_BYTE;
        else
            throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: " + c);
        return {
            buffer: f,
            type: d,
            bytesPerElement: c.BYTES_PER_ELEMENT,
            version: o.version,
            size: u
        }
    }
    function n(o, l, c) {
        const h = l.array
          , u = l._updateRange
          , f = l.updateRanges;
        if (i.bindBuffer(c, o),
        u.count === -1 && f.length === 0 && i.bufferSubData(c, 0, h),
        f.length !== 0) {
            for (let d = 0, g = f.length; d < g; d++) {
                const _ = f[d];
                i.bufferSubData(c, _.start * h.BYTES_PER_ELEMENT, h, _.start, _.count)
            }
            l.clearUpdateRanges()
        }
        u.count !== -1 && (i.bufferSubData(c, u.offset * h.BYTES_PER_ELEMENT, h, u.offset, u.count),
        u.count = -1),
        l.onUploadCallback()
    }
    function r(o) {
        return o.isInterleavedBufferAttribute && (o = o.data),
        e.get(o)
    }
    function s(o) {
        o.isInterleavedBufferAttribute && (o = o.data);
        const l = e.get(o);
        l && (i.deleteBuffer(l.buffer),
        e.delete(o))
    }
    function a(o, l) {
        if (o.isGLBufferAttribute) {
            const h = e.get(o);
            (!h || h.version < o.version) && e.set(o, {
                buffer: o.buffer,
                type: o.type,
                bytesPerElement: o.elementSize,
                version: o.version
            });
            return
        }
        o.isInterleavedBufferAttribute && (o = o.data);
        const c = e.get(o);
        if (c === void 0)
            e.set(o, t(o, l));
        else if (c.version < o.version) {
            if (c.size !== o.array.byteLength)
                throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");
            n(c.buffer, o, l),
            c.version = o.version
        }
    }
    return {
        get: r,
        remove: s,
        update: a
    }
}
class ls extends Vt {
    constructor(e=1, t=1, n=1, r=1) {
        super(),
        this.type = "PlaneGeometry",
        this.parameters = {
            width: e,
            height: t,
            widthSegments: n,
            heightSegments: r
        };
        const s = e / 2
          , a = t / 2
          , o = Math.floor(n)
          , l = Math.floor(r)
          , c = o + 1
          , h = l + 1
          , u = e / o
          , f = t / l
          , d = []
          , g = []
          , _ = []
          , p = [];
        for (let m = 0; m < h; m++) {
            const T = m * f - a;
            for (let v = 0; v < c; v++) {
                const S = v * u - s;
                g.push(S, -T, 0),
                _.push(0, 0, 1),
                p.push(v / o),
                p.push(1 - m / l)
            }
        }
        for (let m = 0; m < l; m++)
            for (let T = 0; T < o; T++) {
                const v = T + c * m
                  , S = T + c * (m + 1)
                  , D = T + 1 + c * (m + 1)
                  , b = T + 1 + c * m;
                d.push(v, S, b),
                d.push(S, D, b)
            }
        this.setIndex(d),
        this.setAttribute("position", new gt(g,3)),
        this.setAttribute("normal", new gt(_,3)),
        this.setAttribute("uv", new gt(p,2))
    }
    copy(e) {
        return super.copy(e),
        this.parameters = Object.assign({}, e.parameters),
        this
    }
    static fromJSON(e) {
        return new ls(e.width,e.height,e.widthSegments,e.heightSegments)
    }
}
var Ru = `#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`
  , Cu = `#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`
  , Pu = `#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`
  , Lu = `#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`
  , Iu = `#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`
  , Du = `#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`
  , Uu = `#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`
  , Nu = `#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`
  , Fu = `#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`
  , Ou = `#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`
  , Bu = `vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`
  , zu = `vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`
  , Vu = `float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`
  , ku = `#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`
  , Hu = `#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`
  , Gu = `#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`
  , Wu = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`
  , Xu = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`
  , qu = `#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`
  , Yu = `#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`
  , Ku = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`
  , Zu = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`
  , $u = `#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`
  , ju = `#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`
  , Ju = `#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`
  , Qu = `vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`
  , ef = `#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`
  , tf = `#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`
  , nf = `#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`
  , rf = `#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`
  , sf = "gl_FragColor = linearToOutputTexel( gl_FragColor );"
  , af = `
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`
  , of = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`
  , lf = `#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`
  , cf = `#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`
  , hf = `#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`
  , uf = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`
  , ff = `#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`
  , df = `#ifdef USE_FOG
	varying float vFogDepth;
#endif`
  , pf = `#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`
  , mf = `#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`
  , gf = `#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`
  , _f = `#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`
  , vf = `LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`
  , xf = `varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`
  , Mf = `uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`
  , yf = `#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`
  , Sf = `ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`
  , Ef = `varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`
  , Tf = `BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`
  , Af = `varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`
  , bf = `PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`
  , wf = `struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`
  , Rf = `
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`
  , Cf = `#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`
  , Pf = `#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`
  , Lf = `#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`
  , If = `#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`
  , Df = `#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`
  , Uf = `#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`
  , Nf = `#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`
  , Ff = `#ifdef USE_MAP
	uniform sampler2D map;
#endif`
  , Of = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`
  , Bf = `#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`
  , zf = `float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`
  , Vf = `#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`
  , kf = `#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`
  , Hf = `#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`
  , Gf = `#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`
  , Wf = `#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
	#endif
	#ifdef MORPHTARGETS_TEXTURE
		#ifndef USE_INSTANCING_MORPH
			uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		#endif
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`
  , Xf = `#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`
  , qf = `float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`
  , Yf = `#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`
  , Kf = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`
  , Zf = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`
  , $f = `#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`
  , jf = `#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`
  , Jf = `#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`
  , Qf = `#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`
  , ed = `#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`
  , td = `#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`
  , nd = `#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`
  , id = `vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`
  , rd = `#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`
  , sd = `vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`
  , ad = `#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`
  , od = `#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`
  , ld = `float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`
  , cd = `#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`
  , hd = `#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return shadow;
	}
#endif`
  , ud = `#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`
  , fd = `#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`
  , dd = `float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`
  , pd = `#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`
  , md = `#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`
  , gd = `#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`
  , _d = `#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`
  , vd = `float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`
  , xd = `#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`
  , Md = `#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`
  , yd = `#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`
  , Sd = `#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`
  , Ed = `#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`
  , Td = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`
  , Ad = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`
  , bd = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`
  , wd = `#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;
const Rd = `varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`
  , Cd = `uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`
  , Pd = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`
  , Ld = `#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`
  , Id = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`
  , Dd = `uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`
  , Ud = `#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`
  , Nd = `#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`
  , Fd = `#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`
  , Od = `#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`
  , Bd = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`
  , zd = `uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`
  , Vd = `uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`
  , kd = `uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`
  , Hd = `#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`
  , Gd = `uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`
  , Wd = `#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`
  , Xd = `#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`
  , qd = `#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`
  , Yd = `#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`
  , Kd = `#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`
  , Zd = `#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`
  , $d = `#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`
  , jd = `#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`
  , Jd = `#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`
  , Qd = `#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`
  , ep = `#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`
  , tp = `#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`
  , np = `uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`
  , ip = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`
  , rp = `#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`
  , sp = `uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`
  , ap = `uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`
  , op = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`
  , be = {
    alphahash_fragment: Ru,
    alphahash_pars_fragment: Cu,
    alphamap_fragment: Pu,
    alphamap_pars_fragment: Lu,
    alphatest_fragment: Iu,
    alphatest_pars_fragment: Du,
    aomap_fragment: Uu,
    aomap_pars_fragment: Nu,
    batching_pars_vertex: Fu,
    batching_vertex: Ou,
    begin_vertex: Bu,
    beginnormal_vertex: zu,
    bsdfs: Vu,
    iridescence_fragment: ku,
    bumpmap_pars_fragment: Hu,
    clipping_planes_fragment: Gu,
    clipping_planes_pars_fragment: Wu,
    clipping_planes_pars_vertex: Xu,
    clipping_planes_vertex: qu,
    color_fragment: Yu,
    color_pars_fragment: Ku,
    color_pars_vertex: Zu,
    color_vertex: $u,
    common: ju,
    cube_uv_reflection_fragment: Ju,
    defaultnormal_vertex: Qu,
    displacementmap_pars_vertex: ef,
    displacementmap_vertex: tf,
    emissivemap_fragment: nf,
    emissivemap_pars_fragment: rf,
    colorspace_fragment: sf,
    colorspace_pars_fragment: af,
    envmap_fragment: of,
    envmap_common_pars_fragment: lf,
    envmap_pars_fragment: cf,
    envmap_pars_vertex: hf,
    envmap_physical_pars_fragment: yf,
    envmap_vertex: uf,
    fog_vertex: ff,
    fog_pars_vertex: df,
    fog_fragment: pf,
    fog_pars_fragment: mf,
    gradientmap_pars_fragment: gf,
    lightmap_pars_fragment: _f,
    lights_lambert_fragment: vf,
    lights_lambert_pars_fragment: xf,
    lights_pars_begin: Mf,
    lights_toon_fragment: Sf,
    lights_toon_pars_fragment: Ef,
    lights_phong_fragment: Tf,
    lights_phong_pars_fragment: Af,
    lights_physical_fragment: bf,
    lights_physical_pars_fragment: wf,
    lights_fragment_begin: Rf,
    lights_fragment_maps: Cf,
    lights_fragment_end: Pf,
    logdepthbuf_fragment: Lf,
    logdepthbuf_pars_fragment: If,
    logdepthbuf_pars_vertex: Df,
    logdepthbuf_vertex: Uf,
    map_fragment: Nf,
    map_pars_fragment: Ff,
    map_particle_fragment: Of,
    map_particle_pars_fragment: Bf,
    metalnessmap_fragment: zf,
    metalnessmap_pars_fragment: Vf,
    morphinstance_vertex: kf,
    morphcolor_vertex: Hf,
    morphnormal_vertex: Gf,
    morphtarget_pars_vertex: Wf,
    morphtarget_vertex: Xf,
    normal_fragment_begin: qf,
    normal_fragment_maps: Yf,
    normal_pars_fragment: Kf,
    normal_pars_vertex: Zf,
    normal_vertex: $f,
    normalmap_pars_fragment: jf,
    clearcoat_normal_fragment_begin: Jf,
    clearcoat_normal_fragment_maps: Qf,
    clearcoat_pars_fragment: ed,
    iridescence_pars_fragment: td,
    opaque_fragment: nd,
    packing: id,
    premultiplied_alpha_fragment: rd,
    project_vertex: sd,
    dithering_fragment: ad,
    dithering_pars_fragment: od,
    roughnessmap_fragment: ld,
    roughnessmap_pars_fragment: cd,
    shadowmap_pars_fragment: hd,
    shadowmap_pars_vertex: ud,
    shadowmap_vertex: fd,
    shadowmask_pars_fragment: dd,
    skinbase_vertex: pd,
    skinning_pars_vertex: md,
    skinning_vertex: gd,
    skinnormal_vertex: _d,
    specularmap_fragment: vd,
    specularmap_pars_fragment: xd,
    tonemapping_fragment: Md,
    tonemapping_pars_fragment: yd,
    transmission_fragment: Sd,
    transmission_pars_fragment: Ed,
    uv_pars_fragment: Td,
    uv_pars_vertex: Ad,
    uv_vertex: bd,
    worldpos_vertex: wd,
    background_vert: Rd,
    background_frag: Cd,
    backgroundCube_vert: Pd,
    backgroundCube_frag: Ld,
    cube_vert: Id,
    cube_frag: Dd,
    depth_vert: Ud,
    depth_frag: Nd,
    distanceRGBA_vert: Fd,
    distanceRGBA_frag: Od,
    equirect_vert: Bd,
    equirect_frag: zd,
    linedashed_vert: Vd,
    linedashed_frag: kd,
    meshbasic_vert: Hd,
    meshbasic_frag: Gd,
    meshlambert_vert: Wd,
    meshlambert_frag: Xd,
    meshmatcap_vert: qd,
    meshmatcap_frag: Yd,
    meshnormal_vert: Kd,
    meshnormal_frag: Zd,
    meshphong_vert: $d,
    meshphong_frag: jd,
    meshphysical_vert: Jd,
    meshphysical_frag: Qd,
    meshtoon_vert: ep,
    meshtoon_frag: tp,
    points_vert: np,
    points_frag: ip,
    shadow_vert: rp,
    shadow_frag: sp,
    sprite_vert: ap,
    sprite_frag: op
}
  , ie = {
    common: {
        diffuse: {
            value: new ve(16777215)
        },
        opacity: {
            value: 1
        },
        map: {
            value: null
        },
        mapTransform: {
            value: new Te
        },
        alphaMap: {
            value: null
        },
        alphaMapTransform: {
            value: new Te
        },
        alphaTest: {
            value: 0
        }
    },
    specularmap: {
        specularMap: {
            value: null
        },
        specularMapTransform: {
            value: new Te
        }
    },
    envmap: {
        envMap: {
            value: null
        },
        envMapRotation: {
            value: new Te
        },
        flipEnvMap: {
            value: -1
        },
        reflectivity: {
            value: 1
        },
        ior: {
            value: 1.5
        },
        refractionRatio: {
            value: .98
        }
    },
    aomap: {
        aoMap: {
            value: null
        },
        aoMapIntensity: {
            value: 1
        },
        aoMapTransform: {
            value: new Te
        }
    },
    lightmap: {
        lightMap: {
            value: null
        },
        lightMapIntensity: {
            value: 1
        },
        lightMapTransform: {
            value: new Te
        }
    },
    bumpmap: {
        bumpMap: {
            value: null
        },
        bumpMapTransform: {
            value: new Te
        },
        bumpScale: {
            value: 1
        }
    },
    normalmap: {
        normalMap: {
            value: null
        },
        normalMapTransform: {
            value: new Te
        },
        normalScale: {
            value: new Ie(1,1)
        }
    },
    displacementmap: {
        displacementMap: {
            value: null
        },
        displacementMapTransform: {
            value: new Te
        },
        displacementScale: {
            value: 1
        },
        displacementBias: {
            value: 0
        }
    },
    emissivemap: {
        emissiveMap: {
            value: null
        },
        emissiveMapTransform: {
            value: new Te
        }
    },
    metalnessmap: {
        metalnessMap: {
            value: null
        },
        metalnessMapTransform: {
            value: new Te
        }
    },
    roughnessmap: {
        roughnessMap: {
            value: null
        },
        roughnessMapTransform: {
            value: new Te
        }
    },
    gradientmap: {
        gradientMap: {
            value: null
        }
    },
    fog: {
        fogDensity: {
            value: 25e-5
        },
        fogNear: {
            value: 1
        },
        fogFar: {
            value: 2e3
        },
        fogColor: {
            value: new ve(16777215)
        }
    },
    lights: {
        ambientLightColor: {
            value: []
        },
        lightProbe: {
            value: []
        },
        directionalLights: {
            value: [],
            properties: {
                direction: {},
                color: {}
            }
        },
        directionalLightShadows: {
            value: [],
            properties: {
                shadowBias: {},
                shadowNormalBias: {},
                shadowRadius: {},
                shadowMapSize: {}
            }
        },
        directionalShadowMap: {
            value: []
        },
        directionalShadowMatrix: {
            value: []
        },
        spotLights: {
            value: [],
            properties: {
                color: {},
                position: {},
                direction: {},
                distance: {},
                coneCos: {},
                penumbraCos: {},
                decay: {}
            }
        },
        spotLightShadows: {
            value: [],
            properties: {
                shadowBias: {},
                shadowNormalBias: {},
                shadowRadius: {},
                shadowMapSize: {}
            }
        },
        spotLightMap: {
            value: []
        },
        spotShadowMap: {
            value: []
        },
        spotLightMatrix: {
            value: []
        },
        pointLights: {
            value: [],
            properties: {
                color: {},
                position: {},
                decay: {},
                distance: {}
            }
        },
        pointLightShadows: {
            value: [],
            properties: {
                shadowBias: {},
                shadowNormalBias: {},
                shadowRadius: {},
                shadowMapSize: {},
                shadowCameraNear: {},
                shadowCameraFar: {}
            }
        },
        pointShadowMap: {
            value: []
        },
        pointShadowMatrix: {
            value: []
        },
        hemisphereLights: {
            value: [],
            properties: {
                direction: {},
                skyColor: {},
                groundColor: {}
            }
        },
        rectAreaLights: {
            value: [],
            properties: {
                color: {},
                position: {},
                width: {},
                height: {}
            }
        },
        ltc_1: {
            value: null
        },
        ltc_2: {
            value: null
        }
    },
    points: {
        diffuse: {
            value: new ve(16777215)
        },
        opacity: {
            value: 1
        },
        size: {
            value: 1
        },
        scale: {
            value: 1
        },
        map: {
            value: null
        },
        alphaMap: {
            value: null
        },
        alphaMapTransform: {
            value: new Te
        },
        alphaTest: {
            value: 0
        },
        uvTransform: {
            value: new Te
        }
    },
    sprite: {
        diffuse: {
            value: new ve(16777215)
        },
        opacity: {
            value: 1
        },
        center: {
            value: new Ie(.5,.5)
        },
        rotation: {
            value: 0
        },
        map: {
            value: null
        },
        mapTransform: {
            value: new Te
        },
        alphaMap: {
            value: null
        },
        alphaMapTransform: {
            value: new Te
        },
        alphaTest: {
            value: 0
        }
    }
}
  , Jt = {
    basic: {
        uniforms: Tt([ie.common, ie.specularmap, ie.envmap, ie.aomap, ie.lightmap, ie.fog]),
        vertexShader: be.meshbasic_vert,
        fragmentShader: be.meshbasic_frag
    },
    lambert: {
        uniforms: Tt([ie.common, ie.specularmap, ie.envmap, ie.aomap, ie.lightmap, ie.emissivemap, ie.bumpmap, ie.normalmap, ie.displacementmap, ie.fog, ie.lights, {
            emissive: {
                value: new ve(0)
            }
        }]),
        vertexShader: be.meshlambert_vert,
        fragmentShader: be.meshlambert_frag
    },
    phong: {
        uniforms: Tt([ie.common, ie.specularmap, ie.envmap, ie.aomap, ie.lightmap, ie.emissivemap, ie.bumpmap, ie.normalmap, ie.displacementmap, ie.fog, ie.lights, {
            emissive: {
                value: new ve(0)
            },
            specular: {
                value: new ve(1118481)
            },
            shininess: {
                value: 30
            }
        }]),
        vertexShader: be.meshphong_vert,
        fragmentShader: be.meshphong_frag
    },
    standard: {
        uniforms: Tt([ie.common, ie.envmap, ie.aomap, ie.lightmap, ie.emissivemap, ie.bumpmap, ie.normalmap, ie.displacementmap, ie.roughnessmap, ie.metalnessmap, ie.fog, ie.lights, {
            emissive: {
                value: new ve(0)
            },
            roughness: {
                value: 1
            },
            metalness: {
                value: 0
            },
            envMapIntensity: {
                value: 1
            }
        }]),
        vertexShader: be.meshphysical_vert,
        fragmentShader: be.meshphysical_frag
    },
    toon: {
        uniforms: Tt([ie.common, ie.aomap, ie.lightmap, ie.emissivemap, ie.bumpmap, ie.normalmap, ie.displacementmap, ie.gradientmap, ie.fog, ie.lights, {
            emissive: {
                value: new ve(0)
            }
        }]),
        vertexShader: be.meshtoon_vert,
        fragmentShader: be.meshtoon_frag
    },
    matcap: {
        uniforms: Tt([ie.common, ie.bumpmap, ie.normalmap, ie.displacementmap, ie.fog, {
            matcap: {
                value: null
            }
        }]),
        vertexShader: be.meshmatcap_vert,
        fragmentShader: be.meshmatcap_frag
    },
    points: {
        uniforms: Tt([ie.points, ie.fog]),
        vertexShader: be.points_vert,
        fragmentShader: be.points_frag
    },
    dashed: {
        uniforms: Tt([ie.common, ie.fog, {
            scale: {
                value: 1
            },
            dashSize: {
                value: 1
            },
            totalSize: {
                value: 2
            }
        }]),
        vertexShader: be.linedashed_vert,
        fragmentShader: be.linedashed_frag
    },
    depth: {
        uniforms: Tt([ie.common, ie.displacementmap]),
        vertexShader: be.depth_vert,
        fragmentShader: be.depth_frag
    },
    normal: {
        uniforms: Tt([ie.common, ie.bumpmap, ie.normalmap, ie.displacementmap, {
            opacity: {
                value: 1
            }
        }]),
        vertexShader: be.meshnormal_vert,
        fragmentShader: be.meshnormal_frag
    },
    sprite: {
        uniforms: Tt([ie.sprite, ie.fog]),
        vertexShader: be.sprite_vert,
        fragmentShader: be.sprite_frag
    },
    background: {
        uniforms: {
            uvTransform: {
                value: new Te
            },
            t2D: {
                value: null
            },
            backgroundIntensity: {
                value: 1
            }
        },
        vertexShader: be.background_vert,
        fragmentShader: be.background_frag
    },
    backgroundCube: {
        uniforms: {
            envMap: {
                value: null
            },
            flipEnvMap: {
                value: -1
            },
            backgroundBlurriness: {
                value: 0
            },
            backgroundIntensity: {
                value: 1
            },
            backgroundRotation: {
                value: new Te
            }
        },
        vertexShader: be.backgroundCube_vert,
        fragmentShader: be.backgroundCube_frag
    },
    cube: {
        uniforms: {
            tCube: {
                value: null
            },
            tFlip: {
                value: -1
            },
            opacity: {
                value: 1
            }
        },
        vertexShader: be.cube_vert,
        fragmentShader: be.cube_frag
    },
    equirect: {
        uniforms: {
            tEquirect: {
                value: null
            }
        },
        vertexShader: be.equirect_vert,
        fragmentShader: be.equirect_frag
    },
    distanceRGBA: {
        uniforms: Tt([ie.common, ie.displacementmap, {
            referencePosition: {
                value: new R
            },
            nearDistance: {
                value: 1
            },
            farDistance: {
                value: 1e3
            }
        }]),
        vertexShader: be.distanceRGBA_vert,
        fragmentShader: be.distanceRGBA_frag
    },
    shadow: {
        uniforms: Tt([ie.lights, ie.fog, {
            color: {
                value: new ve(0)
            },
            opacity: {
                value: 1
            }
        }]),
        vertexShader: be.shadow_vert,
        fragmentShader: be.shadow_frag
    }
};
Jt.physical = {
    uniforms: Tt([Jt.standard.uniforms, {
        clearcoat: {
            value: 0
        },
        clearcoatMap: {
            value: null
        },
        clearcoatMapTransform: {
            value: new Te
        },
        clearcoatNormalMap: {
            value: null
        },
        clearcoatNormalMapTransform: {
            value: new Te
        },
        clearcoatNormalScale: {
            value: new Ie(1,1)
        },
        clearcoatRoughness: {
            value: 0
        },
        clearcoatRoughnessMap: {
            value: null
        },
        clearcoatRoughnessMapTransform: {
            value: new Te
        },
        dispersion: {
            value: 0
        },
        iridescence: {
            value: 0
        },
        iridescenceMap: {
            value: null
        },
        iridescenceMapTransform: {
            value: new Te
        },
        iridescenceIOR: {
            value: 1.3
        },
        iridescenceThicknessMinimum: {
            value: 100
        },
        iridescenceThicknessMaximum: {
            value: 400
        },
        iridescenceThicknessMap: {
            value: null
        },
        iridescenceThicknessMapTransform: {
            value: new Te
        },
        sheen: {
            value: 0
        },
        sheenColor: {
            value: new ve(0)
        },
        sheenColorMap: {
            value: null
        },
        sheenColorMapTransform: {
            value: new Te
        },
        sheenRoughness: {
            value: 1
        },
        sheenRoughnessMap: {
            value: null
        },
        sheenRoughnessMapTransform: {
            value: new Te
        },
        transmission: {
            value: 0
        },
        transmissionMap: {
            value: null
        },
        transmissionMapTransform: {
            value: new Te
        },
        transmissionSamplerSize: {
            value: new Ie
        },
        transmissionSamplerMap: {
            value: null
        },
        thickness: {
            value: 0
        },
        thicknessMap: {
            value: null
        },
        thicknessMapTransform: {
            value: new Te
        },
        attenuationDistance: {
            value: 0
        },
        attenuationColor: {
            value: new ve(0)
        },
        specularColor: {
            value: new ve(1,1,1)
        },
        specularColorMap: {
            value: null
        },
        specularColorMapTransform: {
            value: new Te
        },
        specularIntensity: {
            value: 1
        },
        specularIntensityMap: {
            value: null
        },
        specularIntensityMapTransform: {
            value: new Te
        },
        anisotropyVector: {
            value: new Ie
        },
        anisotropyMap: {
            value: null
        },
        anisotropyMapTransform: {
            value: new Te
        }
    }]),
    vertexShader: be.meshphysical_vert,
    fragmentShader: be.meshphysical_frag
};
const Fr = {
    r: 0,
    b: 0,
    g: 0
}
  , qn = new st
  , lp = new pe;
function cp(i, e, t, n, r, s, a) {
    const o = new ve(0);
    let l = s === !0 ? 0 : 1, c, h, u = null, f = 0, d = null;
    function g(T) {
        let v = T.isScene === !0 ? T.background : null;
        return v && v.isTexture && (v = (T.backgroundBlurriness > 0 ? t : e).get(v)),
        v
    }
    function _(T) {
        let v = !1;
        const S = g(T);
        S === null ? m(o, l) : S && S.isColor && (m(S, 1),
        v = !0);
        const D = i.xr.getEnvironmentBlendMode();
        D === "additive" ? n.buffers.color.setClear(0, 0, 0, 1, a) : D === "alpha-blend" && n.buffers.color.setClear(0, 0, 0, 0, a),
        (i.autoClear || v) && i.clear(i.autoClearColor, i.autoClearDepth, i.autoClearStencil)
    }
    function p(T, v) {
        const S = g(v);
        S && (S.isCubeTexture || S.mapping === rs) ? (h === void 0 && (h = new zt(new Bi(1,1,1),new Fn({
            name: "BackgroundCubeMaterial",
            uniforms: Ui(Jt.backgroundCube.uniforms),
            vertexShader: Jt.backgroundCube.vertexShader,
            fragmentShader: Jt.backgroundCube.fragmentShader,
            side: It,
            depthTest: !1,
            depthWrite: !1,
            fog: !1
        })),
        h.geometry.deleteAttribute("normal"),
        h.geometry.deleteAttribute("uv"),
        h.onBeforeRender = function(D, b, w) {
            this.matrixWorld.copyPosition(w.matrixWorld)
        }
        ,
        Object.defineProperty(h.material, "envMap", {
            get: function() {
                return this.uniforms.envMap.value
            }
        }),
        r.update(h)),
        qn.copy(v.backgroundRotation),
        qn.x *= -1,
        qn.y *= -1,
        qn.z *= -1,
        S.isCubeTexture && S.isRenderTargetTexture === !1 && (qn.y *= -1,
        qn.z *= -1),
        h.material.uniforms.envMap.value = S,
        h.material.uniforms.flipEnvMap.value = S.isCubeTexture && S.isRenderTargetTexture === !1 ? -1 : 1,
        h.material.uniforms.backgroundBlurriness.value = v.backgroundBlurriness,
        h.material.uniforms.backgroundIntensity.value = v.backgroundIntensity,
        h.material.uniforms.backgroundRotation.value.setFromMatrix4(lp.makeRotationFromEuler(qn)),
        h.material.toneMapped = Ze.getTransfer(S.colorSpace) !== je,
        (u !== S || f !== S.version || d !== i.toneMapping) && (h.material.needsUpdate = !0,
        u = S,
        f = S.version,
        d = i.toneMapping),
        h.layers.enableAll(),
        T.unshift(h, h.geometry, h.material, 0, 0, null)) : S && S.isTexture && (c === void 0 && (c = new zt(new ls(2,2),new Fn({
            name: "BackgroundMaterial",
            uniforms: Ui(Jt.background.uniforms),
            vertexShader: Jt.background.vertexShader,
            fragmentShader: Jt.background.fragmentShader,
            side: Un,
            depthTest: !1,
            depthWrite: !1,
            fog: !1
        })),
        c.geometry.deleteAttribute("normal"),
        Object.defineProperty(c.material, "map", {
            get: function() {
                return this.uniforms.t2D.value
            }
        }),
        r.update(c)),
        c.material.uniforms.t2D.value = S,
        c.material.uniforms.backgroundIntensity.value = v.backgroundIntensity,
        c.material.toneMapped = Ze.getTransfer(S.colorSpace) !== je,
        S.matrixAutoUpdate === !0 && S.updateMatrix(),
        c.material.uniforms.uvTransform.value.copy(S.matrix),
        (u !== S || f !== S.version || d !== i.toneMapping) && (c.material.needsUpdate = !0,
        u = S,
        f = S.version,
        d = i.toneMapping),
        c.layers.enableAll(),
        T.unshift(c, c.geometry, c.material, 0, 0, null))
    }
    function m(T, v) {
        T.getRGB(Fr, Ql(i)),
        n.buffers.color.setClear(Fr.r, Fr.g, Fr.b, v, a)
    }
    return {
        getClearColor: function() {
            return o
        },
        setClearColor: function(T, v=1) {
            o.set(T),
            l = v,
            m(o, l)
        },
        getClearAlpha: function() {
            return l
        },
        setClearAlpha: function(T) {
            l = T,
            m(o, l)
        },
        render: _,
        addToRenderList: p
    }
}
function hp(i, e) {
    const t = i.getParameter(i.MAX_VERTEX_ATTRIBS)
      , n = {}
      , r = f(null);
    let s = r
      , a = !1;
    function o(x, U, G, P, H) {
        let q = !1;
        const K = u(P, G, U);
        s !== K && (s = K,
        c(s.object)),
        q = d(x, P, G, H),
        q && g(x, P, G, H),
        H !== null && e.update(H, i.ELEMENT_ARRAY_BUFFER),
        (q || a) && (a = !1,
        S(x, U, G, P),
        H !== null && i.bindBuffer(i.ELEMENT_ARRAY_BUFFER, e.get(H).buffer))
    }
    function l() {
        return i.createVertexArray()
    }
    function c(x) {
        return i.bindVertexArray(x)
    }
    function h(x) {
        return i.deleteVertexArray(x)
    }
    function u(x, U, G) {
        const P = G.wireframe === !0;
        let H = n[x.id];
        H === void 0 && (H = {},
        n[x.id] = H);
        let q = H[U.id];
        q === void 0 && (q = {},
        H[U.id] = q);
        let K = q[P];
        return K === void 0 && (K = f(l()),
        q[P] = K),
        K
    }
    function f(x) {
        const U = []
          , G = []
          , P = [];
        for (let H = 0; H < t; H++)
            U[H] = 0,
            G[H] = 0,
            P[H] = 0;
        return {
            geometry: null,
            program: null,
            wireframe: !1,
            newAttributes: U,
            enabledAttributes: G,
            attributeDivisors: P,
            object: x,
            attributes: {},
            index: null
        }
    }
    function d(x, U, G, P) {
        const H = s.attributes
          , q = U.attributes;
        let K = 0;
        const ne = G.getAttributes();
        for (const z in ne)
            if (ne[z].location >= 0) {
                const Q = H[z];
                let fe = q[z];
                if (fe === void 0 && (z === "instanceMatrix" && x.instanceMatrix && (fe = x.instanceMatrix),
                z === "instanceColor" && x.instanceColor && (fe = x.instanceColor)),
                Q === void 0 || Q.attribute !== fe || fe && Q.data !== fe.data)
                    return !0;
                K++
            }
        return s.attributesNum !== K || s.index !== P
    }
    function g(x, U, G, P) {
        const H = {}
          , q = U.attributes;
        let K = 0;
        const ne = G.getAttributes();
        for (const z in ne)
            if (ne[z].location >= 0) {
                let Q = q[z];
                Q === void 0 && (z === "instanceMatrix" && x.instanceMatrix && (Q = x.instanceMatrix),
                z === "instanceColor" && x.instanceColor && (Q = x.instanceColor));
                const fe = {};
                fe.attribute = Q,
                Q && Q.data && (fe.data = Q.data),
                H[z] = fe,
                K++
            }
        s.attributes = H,
        s.attributesNum = K,
        s.index = P
    }
    function _() {
        const x = s.newAttributes;
        for (let U = 0, G = x.length; U < G; U++)
            x[U] = 0
    }
    function p(x) {
        m(x, 0)
    }
    function m(x, U) {
        const G = s.newAttributes
          , P = s.enabledAttributes
          , H = s.attributeDivisors;
        G[x] = 1,
        P[x] === 0 && (i.enableVertexAttribArray(x),
        P[x] = 1),
        H[x] !== U && (i.vertexAttribDivisor(x, U),
        H[x] = U)
    }
    function T() {
        const x = s.newAttributes
          , U = s.enabledAttributes;
        for (let G = 0, P = U.length; G < P; G++)
            U[G] !== x[G] && (i.disableVertexAttribArray(G),
            U[G] = 0)
    }
    function v(x, U, G, P, H, q, K) {
        K === !0 ? i.vertexAttribIPointer(x, U, G, H, q) : i.vertexAttribPointer(x, U, G, P, H, q)
    }
    function S(x, U, G, P) {
        _();
        const H = P.attributes
          , q = G.getAttributes()
          , K = U.defaultAttributeValues;
        for (const ne in q) {
            const z = q[ne];
            if (z.location >= 0) {
                let j = H[ne];
                if (j === void 0 && (ne === "instanceMatrix" && x.instanceMatrix && (j = x.instanceMatrix),
                ne === "instanceColor" && x.instanceColor && (j = x.instanceColor)),
                j !== void 0) {
                    const Q = j.normalized
                      , fe = j.itemSize
                      , we = e.get(j);
                    if (we === void 0)
                        continue;
                    const Ve = we.buffer
                      , k = we.type
                      , J = we.bytesPerElement
                      , ce = k === i.INT || k === i.UNSIGNED_INT || j.gpuType === Vl;
                    if (j.isInterleavedBufferAttribute) {
                        const te = j.data
                          , De = te.stride
                          , Ue = j.offset;
                        if (te.isInstancedInterleavedBuffer) {
                            for (let I = 0; I < z.locationSize; I++)
                                m(z.location + I, te.meshPerAttribute);
                            x.isInstancedMesh !== !0 && P._maxInstanceCount === void 0 && (P._maxInstanceCount = te.meshPerAttribute * te.count)
                        } else
                            for (let I = 0; I < z.locationSize; I++)
                                p(z.location + I);
                        i.bindBuffer(i.ARRAY_BUFFER, Ve);
                        for (let I = 0; I < z.locationSize; I++)
                            v(z.location + I, fe / z.locationSize, k, Q, De * J, (Ue + fe / z.locationSize * I) * J, ce)
                    } else {
                        if (j.isInstancedBufferAttribute) {
                            for (let te = 0; te < z.locationSize; te++)
                                m(z.location + te, j.meshPerAttribute);
                            x.isInstancedMesh !== !0 && P._maxInstanceCount === void 0 && (P._maxInstanceCount = j.meshPerAttribute * j.count)
                        } else
                            for (let te = 0; te < z.locationSize; te++)
                                p(z.location + te);
                        i.bindBuffer(i.ARRAY_BUFFER, Ve);
                        for (let te = 0; te < z.locationSize; te++)
                            v(z.location + te, fe / z.locationSize, k, Q, fe * J, fe / z.locationSize * te * J, ce)
                    }
                } else if (K !== void 0) {
                    const Q = K[ne];
                    if (Q !== void 0)
                        switch (Q.length) {
                        case 2:
                            i.vertexAttrib2fv(z.location, Q);
                            break;
                        case 3:
                            i.vertexAttrib3fv(z.location, Q);
                            break;
                        case 4:
                            i.vertexAttrib4fv(z.location, Q);
                            break;
                        default:
                            i.vertexAttrib1fv(z.location, Q)
                        }
                }
            }
        }
        T()
    }
    function D() {
        B();
        for (const x in n) {
            const U = n[x];
            for (const G in U) {
                const P = U[G];
                for (const H in P)
                    h(P[H].object),
                    delete P[H];
                delete U[G]
            }
            delete n[x]
        }
    }
    function b(x) {
        if (n[x.id] === void 0)
            return;
        const U = n[x.id];
        for (const G in U) {
            const P = U[G];
            for (const H in P)
                h(P[H].object),
                delete P[H];
            delete U[G]
        }
        delete n[x.id]
    }
    function w(x) {
        for (const U in n) {
            const G = n[U];
            if (G[x.id] === void 0)
                continue;
            const P = G[x.id];
            for (const H in P)
                h(P[H].object),
                delete P[H];
            delete G[x.id]
        }
    }
    function B() {
        E(),
        a = !0,
        s !== r && (s = r,
        c(s.object))
    }
    function E() {
        r.geometry = null,
        r.program = null,
        r.wireframe = !1
    }
    return {
        setup: o,
        reset: B,
        resetDefaultState: E,
        dispose: D,
        releaseStatesOfGeometry: b,
        releaseStatesOfProgram: w,
        initAttributes: _,
        enableAttribute: p,
        disableUnusedAttributes: T
    }
}
function up(i, e, t) {
    let n;
    function r(c) {
        n = c
    }
    function s(c, h) {
        i.drawArrays(n, c, h),
        t.update(h, n, 1)
    }
    function a(c, h, u) {
        u !== 0 && (i.drawArraysInstanced(n, c, h, u),
        t.update(h, n, u))
    }
    function o(c, h, u) {
        if (u === 0)
            return;
        const f = e.get("WEBGL_multi_draw");
        if (f === null)
            for (let d = 0; d < u; d++)
                this.render(c[d], h[d]);
        else {
            f.multiDrawArraysWEBGL(n, c, 0, h, 0, u);
            let d = 0;
            for (let g = 0; g < u; g++)
                d += h[g];
            t.update(d, n, 1)
        }
    }
    function l(c, h, u, f) {
        if (u === 0)
            return;
        const d = e.get("WEBGL_multi_draw");
        if (d === null)
            for (let g = 0; g < c.length; g++)
                a(c[g], h[g], f[g]);
        else {
            d.multiDrawArraysInstancedWEBGL(n, c, 0, h, 0, f, 0, u);
            let g = 0;
            for (let _ = 0; _ < u; _++)
                g += h[_];
            for (let _ = 0; _ < f.length; _++)
                t.update(g, n, f[_])
        }
    }
    this.setMode = r,
    this.render = s,
    this.renderInstances = a,
    this.renderMultiDraw = o,
    this.renderMultiDrawInstances = l
}
function fp(i, e, t, n) {
    let r;
    function s() {
        if (r !== void 0)
            return r;
        if (e.has("EXT_texture_filter_anisotropic") === !0) {
            const b = e.get("EXT_texture_filter_anisotropic");
            r = i.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)
        } else
            r = 0;
        return r
    }
    function a(b) {
        return !(b !== Yt && n.convert(b) !== i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))
    }
    function o(b) {
        const w = b === ss && (e.has("EXT_color_buffer_half_float") || e.has("EXT_color_buffer_float"));
        return !(b !== Nn && n.convert(b) !== i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE) && b !== xn && !w)
    }
    function l(b) {
        if (b === "highp") {
            if (i.getShaderPrecisionFormat(i.VERTEX_SHADER, i.HIGH_FLOAT).precision > 0 && i.getShaderPrecisionFormat(i.FRAGMENT_SHADER, i.HIGH_FLOAT).precision > 0)
                return "highp";
            b = "mediump"
        }
        return b === "mediump" && i.getShaderPrecisionFormat(i.VERTEX_SHADER, i.MEDIUM_FLOAT).precision > 0 && i.getShaderPrecisionFormat(i.FRAGMENT_SHADER, i.MEDIUM_FLOAT).precision > 0 ? "mediump" : "lowp"
    }
    let c = t.precision !== void 0 ? t.precision : "highp";
    const h = l(c);
    h !== c && (console.warn("THREE.WebGLRenderer:", c, "not supported, using", h, "instead."),
    c = h);
    const u = t.logarithmicDepthBuffer === !0
      , f = i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS)
      , d = i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS)
      , g = i.getParameter(i.MAX_TEXTURE_SIZE)
      , _ = i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE)
      , p = i.getParameter(i.MAX_VERTEX_ATTRIBS)
      , m = i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS)
      , T = i.getParameter(i.MAX_VARYING_VECTORS)
      , v = i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS)
      , S = d > 0
      , D = i.getParameter(i.MAX_SAMPLES);
    return {
        isWebGL2: !0,
        getMaxAnisotropy: s,
        getMaxPrecision: l,
        textureFormatReadable: a,
        textureTypeReadable: o,
        precision: c,
        logarithmicDepthBuffer: u,
        maxTextures: f,
        maxVertexTextures: d,
        maxTextureSize: g,
        maxCubemapSize: _,
        maxAttributes: p,
        maxVertexUniforms: m,
        maxVaryings: T,
        maxFragmentUniforms: v,
        vertexTextures: S,
        maxSamples: D
    }
}
function dp(i) {
    const e = this;
    let t = null
      , n = 0
      , r = !1
      , s = !1;
    const a = new Kn
      , o = new Te
      , l = {
        value: null,
        needsUpdate: !1
    };
    this.uniform = l,
    this.numPlanes = 0,
    this.numIntersection = 0,
    this.init = function(u, f) {
        const d = u.length !== 0 || f || n !== 0 || r;
        return r = f,
        n = u.length,
        d
    }
    ,
    this.beginShadows = function() {
        s = !0,
        h(null)
    }
    ,
    this.endShadows = function() {
        s = !1
    }
    ,
    this.setGlobalState = function(u, f) {
        t = h(u, f, 0)
    }
    ,
    this.setState = function(u, f, d) {
        const g = u.clippingPlanes
          , _ = u.clipIntersection
          , p = u.clipShadows
          , m = i.get(u);
        if (!r || g === null || g.length === 0 || s && !p)
            s ? h(null) : c();
        else {
            const T = s ? 0 : n
              , v = T * 4;
            let S = m.clippingState || null;
            l.value = S,
            S = h(g, f, v, d);
            for (let D = 0; D !== v; ++D)
                S[D] = t[D];
            m.clippingState = S,
            this.numIntersection = _ ? this.numPlanes : 0,
            this.numPlanes += T
        }
    }
    ;
    function c() {
        l.value !== t && (l.value = t,
        l.needsUpdate = n > 0),
        e.numPlanes = n,
        e.numIntersection = 0
    }
    function h(u, f, d, g) {
        const _ = u !== null ? u.length : 0;
        let p = null;
        if (_ !== 0) {
            if (p = l.value,
            g !== !0 || p === null) {
                const m = d + _ * 4
                  , T = f.matrixWorldInverse;
                o.getNormalMatrix(T),
                (p === null || p.length < m) && (p = new Float32Array(m));
                for (let v = 0, S = d; v !== _; ++v,
                S += 4)
                    a.copy(u[v]).applyMatrix4(T, o),
                    a.normal.toArray(p, S),
                    p[S + 3] = a.constant
            }
            l.value = p,
            l.needsUpdate = !0
        }
        return e.numPlanes = _,
        e.numIntersection = 0,
        p
    }
}
function pp(i) {
    let e = new WeakMap;
    function t(a, o) {
        return o === Yr ? a.mapping = Pi : o === la && (a.mapping = Li),
        a
    }
    function n(a) {
        if (a && a.isTexture) {
            const o = a.mapping;
            if (o === Yr || o === la)
                if (e.has(a)) {
                    const l = e.get(a).texture;
                    return t(l, a.mapping)
                } else {
                    const l = a.image;
                    if (l && l.height > 0) {
                        const c = new Tu(l.height);
                        return c.fromEquirectangularTexture(i, a),
                        e.set(a, c),
                        a.addEventListener("dispose", r),
                        t(c.texture, a.mapping)
                    } else
                        return null
                }
        }
        return a
    }
    function r(a) {
        const o = a.target;
        o.removeEventListener("dispose", r);
        const l = e.get(o);
        l !== void 0 && (e.delete(o),
        l.dispose())
    }
    function s() {
        e = new WeakMap
    }
    return {
        get: n,
        dispose: s
    }
}
class Sa extends ec {
    constructor(e=-1, t=1, n=1, r=-1, s=.1, a=2e3) {
        super(),
        this.isOrthographicCamera = !0,
        this.type = "OrthographicCamera",
        this.zoom = 1,
        this.view = null,
        this.left = e,
        this.right = t,
        this.top = n,
        this.bottom = r,
        this.near = s,
        this.far = a,
        this.updateProjectionMatrix()
    }
    copy(e, t) {
        return super.copy(e, t),
        this.left = e.left,
        this.right = e.right,
        this.top = e.top,
        this.bottom = e.bottom,
        this.near = e.near,
        this.far = e.far,
        this.zoom = e.zoom,
        this.view = e.view === null ? null : Object.assign({}, e.view),
        this
    }
    setViewOffset(e, t, n, r, s, a) {
        this.view === null && (this.view = {
            enabled: !0,
            fullWidth: 1,
            fullHeight: 1,
            offsetX: 0,
            offsetY: 0,
            width: 1,
            height: 1
        }),
        this.view.enabled = !0,
        this.view.fullWidth = e,
        this.view.fullHeight = t,
        this.view.offsetX = n,
        this.view.offsetY = r,
        this.view.width = s,
        this.view.height = a,
        this.updateProjectionMatrix()
    }
    clearViewOffset() {
        this.view !== null && (this.view.enabled = !1),
        this.updateProjectionMatrix()
    }
    updateProjectionMatrix() {
        const e = (this.right - this.left) / (2 * this.zoom)
          , t = (this.top - this.bottom) / (2 * this.zoom)
          , n = (this.right + this.left) / 2
          , r = (this.top + this.bottom) / 2;
        let s = n - e
          , a = n + e
          , o = r + t
          , l = r - t;
        if (this.view !== null && this.view.enabled) {
            const c = (this.right - this.left) / this.view.fullWidth / this.zoom
              , h = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
            s += c * this.view.offsetX,
            a = s + c * this.view.width,
            o -= h * this.view.offsetY,
            l = o - h * this.view.height
        }
        this.projectionMatrix.makeOrthographic(s, a, o, l, this.near, this.far, this.coordinateSystem),
        this.projectionMatrixInverse.copy(this.projectionMatrix).invert()
    }
    toJSON(e) {
        const t = super.toJSON(e);
        return t.object.zoom = this.zoom,
        t.object.left = this.left,
        t.object.right = this.right,
        t.object.top = this.top,
        t.object.bottom = this.bottom,
        t.object.near = this.near,
        t.object.far = this.far,
        this.view !== null && (t.object.view = Object.assign({}, this.view)),
        t
    }
}
const Ei = 4
  , $o = [.125, .215, .35, .446, .526, .582]
  , jn = 20
  , Gs = new Sa
  , jo = new ve;
let Ws = null
  , Xs = 0
  , qs = 0
  , Ys = !1;
const Zn = (1 + Math.sqrt(5)) / 2
  , Mi = 1 / Zn
  , Jo = [new R(-Zn,Mi,0), new R(Zn,Mi,0), new R(-Mi,0,Zn), new R(Mi,0,Zn), new R(0,Zn,-Mi), new R(0,Zn,Mi), new R(-1,1,-1), new R(1,1,-1), new R(-1,1,1), new R(1,1,1)];
class Qo {
    constructor(e) {
        this._renderer = e,
        this._pingPongRenderTarget = null,
        this._lodMax = 0,
        this._cubeSize = 0,
        this._lodPlanes = [],
        this._sizeLods = [],
        this._sigmas = [],
        this._blurMaterial = null,
        this._cubemapMaterial = null,
        this._equirectMaterial = null,
        this._compileMaterial(this._blurMaterial)
    }
    fromScene(e, t=0, n=.1, r=100) {
        Ws = this._renderer.getRenderTarget(),
        Xs = this._renderer.getActiveCubeFace(),
        qs = this._renderer.getActiveMipmapLevel(),
        Ys = this._renderer.xr.enabled,
        this._renderer.xr.enabled = !1,
        this._setSize(256);
        const s = this._allocateTargets();
        return s.depthBuffer = !0,
        this._sceneToCubeUV(e, n, r, s),
        t > 0 && this._blur(s, 0, 0, t),
        this._applyPMREM(s),
        this._cleanup(s),
        s
    }
    fromEquirectangular(e, t=null) {
        return this._fromTexture(e, t)
    }
    fromCubemap(e, t=null) {
        return this._fromTexture(e, t)
    }
    compileCubemapShader() {
        this._cubemapMaterial === null && (this._cubemapMaterial = nl(),
        this._compileMaterial(this._cubemapMaterial))
    }
    compileEquirectangularShader() {
        this._equirectMaterial === null && (this._equirectMaterial = tl(),
        this._compileMaterial(this._equirectMaterial))
    }
    dispose() {
        this._dispose(),
        this._cubemapMaterial !== null && this._cubemapMaterial.dispose(),
        this._equirectMaterial !== null && this._equirectMaterial.dispose()
    }
    _setSize(e) {
        this._lodMax = Math.floor(Math.log2(e)),
        this._cubeSize = Math.pow(2, this._lodMax)
    }
    _dispose() {
        this._blurMaterial !== null && this._blurMaterial.dispose(),
        this._pingPongRenderTarget !== null && this._pingPongRenderTarget.dispose();
        for (let e = 0; e < this._lodPlanes.length; e++)
            this._lodPlanes[e].dispose()
    }
    _cleanup(e) {
        this._renderer.setRenderTarget(Ws, Xs, qs),
        this._renderer.xr.enabled = Ys,
        e.scissorTest = !1,
        Or(e, 0, 0, e.width, e.height)
    }
    _fromTexture(e, t) {
        e.mapping === Pi || e.mapping === Li ? this._setSize(e.image.length === 0 ? 16 : e.image[0].width || e.image[0].image.width) : this._setSize(e.image.width / 4),
        Ws = this._renderer.getRenderTarget(),
        Xs = this._renderer.getActiveCubeFace(),
        qs = this._renderer.getActiveMipmapLevel(),
        Ys = this._renderer.xr.enabled,
        this._renderer.xr.enabled = !1;
        const n = t || this._allocateTargets();
        return this._textureToCubeUV(e, n),
        this._applyPMREM(n),
        this._cleanup(n),
        n
    }
    _allocateTargets() {
        const e = 3 * Math.max(this._cubeSize, 112)
          , t = 4 * this._cubeSize
          , n = {
            magFilter: qt,
            minFilter: qt,
            generateMipmaps: !1,
            type: ss,
            format: Yt,
            colorSpace: On,
            depthBuffer: !1
        }
          , r = el(e, t, n);
        if (this._pingPongRenderTarget === null || this._pingPongRenderTarget.width !== e || this._pingPongRenderTarget.height !== t) {
            this._pingPongRenderTarget !== null && this._dispose(),
            this._pingPongRenderTarget = el(e, t, n);
            const {_lodMax: s} = this;
            ({sizeLods: this._sizeLods, lodPlanes: this._lodPlanes, sigmas: this._sigmas} = mp(s)),
            this._blurMaterial = gp(s, e, t)
        }
        return r
    }
    _compileMaterial(e) {
        const t = new zt(this._lodPlanes[0],e);
        this._renderer.compile(t, Gs)
    }
    _sceneToCubeUV(e, t, n, r) {
        const o = new wt(90,1,t,n)
          , l = [1, -1, 1, 1, 1, 1]
          , c = [1, 1, 1, -1, -1, -1]
          , h = this._renderer
          , u = h.autoClear
          , f = h.toneMapping;
        h.getClearColor(jo),
        h.toneMapping = Dn,
        h.autoClear = !1;
        const d = new xa({
            name: "PMREM.Background",
            side: It,
            depthWrite: !1,
            depthTest: !1
        })
          , g = new zt(new Bi,d);
        let _ = !1;
        const p = e.background;
        p ? p.isColor && (d.color.copy(p),
        e.background = null,
        _ = !0) : (d.color.copy(jo),
        _ = !0);
        for (let m = 0; m < 6; m++) {
            const T = m % 3;
            T === 0 ? (o.up.set(0, l[m], 0),
            o.lookAt(c[m], 0, 0)) : T === 1 ? (o.up.set(0, 0, l[m]),
            o.lookAt(0, c[m], 0)) : (o.up.set(0, l[m], 0),
            o.lookAt(0, 0, c[m]));
            const v = this._cubeSize;
            Or(r, T * v, m > 2 ? v : 0, v, v),
            h.setRenderTarget(r),
            _ && h.render(g, o),
            h.render(e, o)
        }
        g.geometry.dispose(),
        g.material.dispose(),
        h.toneMapping = f,
        h.autoClear = u,
        e.background = p
    }
    _textureToCubeUV(e, t) {
        const n = this._renderer
          , r = e.mapping === Pi || e.mapping === Li;
        r ? (this._cubemapMaterial === null && (this._cubemapMaterial = nl()),
        this._cubemapMaterial.uniforms.flipEnvMap.value = e.isRenderTargetTexture === !1 ? -1 : 1) : this._equirectMaterial === null && (this._equirectMaterial = tl());
        const s = r ? this._cubemapMaterial : this._equirectMaterial
          , a = new zt(this._lodPlanes[0],s)
          , o = s.uniforms;
        o.envMap.value = e;
        const l = this._cubeSize;
        Or(t, 0, 0, 3 * l, 2 * l),
        n.setRenderTarget(t),
        n.render(a, Gs)
    }
    _applyPMREM(e) {
        const t = this._renderer
          , n = t.autoClear;
        t.autoClear = !1;
        const r = this._lodPlanes.length;
        for (let s = 1; s < r; s++) {
            const a = Math.sqrt(this._sigmas[s] * this._sigmas[s] - this._sigmas[s - 1] * this._sigmas[s - 1])
              , o = Jo[(r - s - 1) % Jo.length];
            this._blur(e, s - 1, s, a, o)
        }
        t.autoClear = n
    }
    _blur(e, t, n, r, s) {
        const a = this._pingPongRenderTarget;
        this._halfBlur(e, a, t, n, r, "latitudinal", s),
        this._halfBlur(a, e, n, n, r, "longitudinal", s)
    }
    _halfBlur(e, t, n, r, s, a, o) {
        const l = this._renderer
          , c = this._blurMaterial;
        a !== "latitudinal" && a !== "longitudinal" && console.error("blur direction must be either latitudinal or longitudinal!");
        const h = 3
          , u = new zt(this._lodPlanes[r],c)
          , f = c.uniforms
          , d = this._sizeLods[n] - 1
          , g = isFinite(s) ? Math.PI / (2 * d) : 2 * Math.PI / (2 * jn - 1)
          , _ = s / g
          , p = isFinite(s) ? 1 + Math.floor(h * _) : jn;
        p > jn && console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${jn}`);
        const m = [];
        let T = 0;
        for (let w = 0; w < jn; ++w) {
            const B = w / _
              , E = Math.exp(-B * B / 2);
            m.push(E),
            w === 0 ? T += E : w < p && (T += 2 * E)
        }
        for (let w = 0; w < m.length; w++)
            m[w] = m[w] / T;
        f.envMap.value = e.texture,
        f.samples.value = p,
        f.weights.value = m,
        f.latitudinal.value = a === "latitudinal",
        o && (f.poleAxis.value = o);
        const {_lodMax: v} = this;
        f.dTheta.value = g,
        f.mipInt.value = v - n;
        const S = this._sizeLods[r]
          , D = 3 * S * (r > v - Ei ? r - v + Ei : 0)
          , b = 4 * (this._cubeSize - S);
        Or(t, D, b, 3 * S, 2 * S),
        l.setRenderTarget(t),
        l.render(u, Gs)
    }
}
function mp(i) {
    const e = []
      , t = []
      , n = [];
    let r = i;
    const s = i - Ei + 1 + $o.length;
    for (let a = 0; a < s; a++) {
        const o = Math.pow(2, r);
        t.push(o);
        let l = 1 / o;
        a > i - Ei ? l = $o[a - i + Ei - 1] : a === 0 && (l = 0),
        n.push(l);
        const c = 1 / (o - 2)
          , h = -c
          , u = 1 + c
          , f = [h, h, u, h, u, u, h, h, u, u, h, u]
          , d = 6
          , g = 6
          , _ = 3
          , p = 2
          , m = 1
          , T = new Float32Array(_ * g * d)
          , v = new Float32Array(p * g * d)
          , S = new Float32Array(m * g * d);
        for (let b = 0; b < d; b++) {
            const w = b % 3 * 2 / 3 - 1
              , B = b > 2 ? 0 : -1
              , E = [w, B, 0, w + 2 / 3, B, 0, w + 2 / 3, B + 1, 0, w, B, 0, w + 2 / 3, B + 1, 0, w, B + 1, 0];
            T.set(E, _ * g * b),
            v.set(f, p * g * b);
            const x = [b, b, b, b, b, b];
            S.set(x, m * g * b)
        }
        const D = new Vt;
        D.setAttribute("position", new en(T,_)),
        D.setAttribute("uv", new en(v,p)),
        D.setAttribute("faceIndex", new en(S,m)),
        e.push(D),
        r > Ei && r--
    }
    return {
        lodPlanes: e,
        sizeLods: t,
        sigmas: n
    }
}
function el(i, e, t) {
    const n = new Qn(i,e,t);
    return n.texture.mapping = rs,
    n.texture.name = "PMREM.cubeUv",
    n.scissorTest = !0,
    n
}
function Or(i, e, t, n, r) {
    i.viewport.set(e, t, n, r),
    i.scissor.set(e, t, n, r)
}
function gp(i, e, t) {
    const n = new Float32Array(jn)
      , r = new R(0,1,0);
    return new Fn({
        name: "SphericalGaussianBlur",
        defines: {
            n: jn,
            CUBEUV_TEXEL_WIDTH: 1 / e,
            CUBEUV_TEXEL_HEIGHT: 1 / t,
            CUBEUV_MAX_MIP: `${i}.0`
        },
        uniforms: {
            envMap: {
                value: null
            },
            samples: {
                value: 1
            },
            weights: {
                value: n
            },
            latitudinal: {
                value: !1
            },
            dTheta: {
                value: 0
            },
            mipInt: {
                value: 0
            },
            poleAxis: {
                value: r
            }
        },
        vertexShader: Ea(),
        fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,
        blending: In,
        depthTest: !1,
        depthWrite: !1
    })
}
function tl() {
    return new Fn({
        name: "EquirectangularToCubeUV",
        uniforms: {
            envMap: {
                value: null
            }
        },
        vertexShader: Ea(),
        fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,
        blending: In,
        depthTest: !1,
        depthWrite: !1
    })
}
function nl() {
    return new Fn({
        name: "CubemapToCubeUV",
        uniforms: {
            envMap: {
                value: null
            },
            flipEnvMap: {
                value: -1
            }
        },
        vertexShader: Ea(),
        fragmentShader: `

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,
        blending: In,
        depthTest: !1,
        depthWrite: !1
    })
}
function Ea() {
    return `

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`
}
function _p(i) {
    let e = new WeakMap
      , t = null;
    function n(o) {
        if (o && o.isTexture) {
            const l = o.mapping
              , c = l === Yr || l === la
              , h = l === Pi || l === Li;
            if (c || h) {
                let u = e.get(o);
                const f = u !== void 0 ? u.texture.pmremVersion : 0;
                if (o.isRenderTargetTexture && o.pmremVersion !== f)
                    return t === null && (t = new Qo(i)),
                    u = c ? t.fromEquirectangular(o, u) : t.fromCubemap(o, u),
                    u.texture.pmremVersion = o.pmremVersion,
                    e.set(o, u),
                    u.texture;
                if (u !== void 0)
                    return u.texture;
                {
                    const d = o.image;
                    return c && d && d.height > 0 || h && d && r(d) ? (t === null && (t = new Qo(i)),
                    u = c ? t.fromEquirectangular(o) : t.fromCubemap(o),
                    u.texture.pmremVersion = o.pmremVersion,
                    e.set(o, u),
                    o.addEventListener("dispose", s),
                    u.texture) : null
                }
            }
        }
        return o
    }
    function r(o) {
        let l = 0;
        const c = 6;
        for (let h = 0; h < c; h++)
            o[h] !== void 0 && l++;
        return l === c
    }
    function s(o) {
        const l = o.target;
        l.removeEventListener("dispose", s);
        const c = e.get(l);
        c !== void 0 && (e.delete(l),
        c.dispose())
    }
    function a() {
        e = new WeakMap,
        t !== null && (t.dispose(),
        t = null)
    }
    return {
        get: n,
        dispose: a
    }
}
function vp(i) {
    const e = {};
    function t(n) {
        if (e[n] !== void 0)
            return e[n];
        let r;
        switch (n) {
        case "WEBGL_depth_texture":
            r = i.getExtension("WEBGL_depth_texture") || i.getExtension("MOZ_WEBGL_depth_texture") || i.getExtension("WEBKIT_WEBGL_depth_texture");
            break;
        case "EXT_texture_filter_anisotropic":
            r = i.getExtension("EXT_texture_filter_anisotropic") || i.getExtension("MOZ_EXT_texture_filter_anisotropic") || i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
            break;
        case "WEBGL_compressed_texture_s3tc":
            r = i.getExtension("WEBGL_compressed_texture_s3tc") || i.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
            break;
        case "WEBGL_compressed_texture_pvrtc":
            r = i.getExtension("WEBGL_compressed_texture_pvrtc") || i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
            break;
        default:
            r = i.getExtension(n)
        }
        return e[n] = r,
        r
    }
    return {
        has: function(n) {
            return t(n) !== null
        },
        init: function() {
            t("EXT_color_buffer_float"),
            t("WEBGL_clip_cull_distance"),
            t("OES_texture_float_linear"),
            t("EXT_color_buffer_half_float"),
            t("WEBGL_multisampled_render_to_texture"),
            t("WEBGL_render_shared_exponent")
        },
        get: function(n) {
            const r = t(n);
            return r === null && console.warn("THREE.WebGLRenderer: " + n + " extension not supported."),
            r
        }
    }
}
function xp(i, e, t, n) {
    const r = {}
      , s = new WeakMap;
    function a(u) {
        const f = u.target;
        f.index !== null && e.remove(f.index);
        for (const g in f.attributes)
            e.remove(f.attributes[g]);
        for (const g in f.morphAttributes) {
            const _ = f.morphAttributes[g];
            for (let p = 0, m = _.length; p < m; p++)
                e.remove(_[p])
        }
        f.removeEventListener("dispose", a),
        delete r[f.id];
        const d = s.get(f);
        d && (e.remove(d),
        s.delete(f)),
        n.releaseStatesOfGeometry(f),
        f.isInstancedBufferGeometry === !0 && delete f._maxInstanceCount,
        t.memory.geometries--
    }
    function o(u, f) {
        return r[f.id] === !0 || (f.addEventListener("dispose", a),
        r[f.id] = !0,
        t.memory.geometries++),
        f
    }
    function l(u) {
        const f = u.attributes;
        for (const g in f)
            e.update(f[g], i.ARRAY_BUFFER);
        const d = u.morphAttributes;
        for (const g in d) {
            const _ = d[g];
            for (let p = 0, m = _.length; p < m; p++)
                e.update(_[p], i.ARRAY_BUFFER)
        }
    }
    function c(u) {
        const f = []
          , d = u.index
          , g = u.attributes.position;
        let _ = 0;
        if (d !== null) {
            const T = d.array;
            _ = d.version;
            for (let v = 0, S = T.length; v < S; v += 3) {
                const D = T[v + 0]
                  , b = T[v + 1]
                  , w = T[v + 2];
                f.push(D, b, b, w, w, D)
            }
        } else if (g !== void 0) {
            const T = g.array;
            _ = g.version;
            for (let v = 0, S = T.length / 3 - 1; v < S; v += 3) {
                const D = v + 0
                  , b = v + 1
                  , w = v + 2;
                f.push(D, b, b, w, w, D)
            }
        } else
            return;
        const p = new (Yl(f) ? Jl : Ma)(f,1);
        p.version = _;
        const m = s.get(u);
        m && e.remove(m),
        s.set(u, p)
    }
    function h(u) {
        const f = s.get(u);
        if (f) {
            const d = u.index;
            d !== null && f.version < d.version && c(u)
        } else
            c(u);
        return s.get(u)
    }
    return {
        get: o,
        update: l,
        getWireframeAttribute: h
    }
}
function Mp(i, e, t) {
    let n;
    function r(f) {
        n = f
    }
    let s, a;
    function o(f) {
        s = f.type,
        a = f.bytesPerElement
    }
    function l(f, d) {
        i.drawElements(n, d, s, f * a),
        t.update(d, n, 1)
    }
    function c(f, d, g) {
        g !== 0 && (i.drawElementsInstanced(n, d, s, f * a, g),
        t.update(d, n, g))
    }
    function h(f, d, g) {
        if (g === 0)
            return;
        const _ = e.get("WEBGL_multi_draw");
        if (_ === null)
            for (let p = 0; p < g; p++)
                this.render(f[p] / a, d[p]);
        else {
            _.multiDrawElementsWEBGL(n, d, 0, s, f, 0, g);
            let p = 0;
            for (let m = 0; m < g; m++)
                p += d[m];
            t.update(p, n, 1)
        }
    }
    function u(f, d, g, _) {
        if (g === 0)
            return;
        const p = e.get("WEBGL_multi_draw");
        if (p === null)
            for (let m = 0; m < f.length; m++)
                c(f[m] / a, d[m], _[m]);
        else {
            p.multiDrawElementsInstancedWEBGL(n, d, 0, s, f, 0, _, 0, g);
            let m = 0;
            for (let T = 0; T < g; T++)
                m += d[T];
            for (let T = 0; T < _.length; T++)
                t.update(m, n, _[T])
        }
    }
    this.setMode = r,
    this.setIndex = o,
    this.render = l,
    this.renderInstances = c,
    this.renderMultiDraw = h,
    this.renderMultiDrawInstances = u
}
function yp(i) {
    const e = {
        geometries: 0,
        textures: 0
    }
      , t = {
        frame: 0,
        calls: 0,
        triangles: 0,
        points: 0,
        lines: 0
    };
    function n(s, a, o) {
        switch (t.calls++,
        a) {
        case i.TRIANGLES:
            t.triangles += o * (s / 3);
            break;
        case i.LINES:
            t.lines += o * (s / 2);
            break;
        case i.LINE_STRIP:
            t.lines += o * (s - 1);
            break;
        case i.LINE_LOOP:
            t.lines += o * s;
            break;
        case i.POINTS:
            t.points += o * s;
            break;
        default:
            console.error("THREE.WebGLInfo: Unknown draw mode:", a);
            break
        }
    }
    function r() {
        t.calls = 0,
        t.triangles = 0,
        t.points = 0,
        t.lines = 0
    }
    return {
        memory: e,
        render: t,
        programs: null,
        autoReset: !0,
        reset: r,
        update: n
    }
}
function Sp(i, e, t) {
    const n = new WeakMap
      , r = new We;
    function s(a, o, l) {
        const c = a.morphTargetInfluences
          , h = o.morphAttributes.position || o.morphAttributes.normal || o.morphAttributes.color
          , u = h !== void 0 ? h.length : 0;
        let f = n.get(o);
        if (f === void 0 || f.count !== u) {
            let E = function() {
                w.dispose(),
                n.delete(o),
                o.removeEventListener("dispose", E)
            };
            f !== void 0 && f.texture.dispose();
            const d = o.morphAttributes.position !== void 0
              , g = o.morphAttributes.normal !== void 0
              , _ = o.morphAttributes.color !== void 0
              , p = o.morphAttributes.position || []
              , m = o.morphAttributes.normal || []
              , T = o.morphAttributes.color || [];
            let v = 0;
            d === !0 && (v = 1),
            g === !0 && (v = 2),
            _ === !0 && (v = 3);
            let S = o.attributes.position.count * v
              , D = 1;
            S > e.maxTextureSize && (D = Math.ceil(S / e.maxTextureSize),
            S = e.maxTextureSize);
            const b = new Float32Array(S * D * 4 * u)
              , w = new Zl(b,S,D,u);
            w.type = xn,
            w.needsUpdate = !0;
            const B = v * 4;
            for (let x = 0; x < u; x++) {
                const U = p[x]
                  , G = m[x]
                  , P = T[x]
                  , H = S * D * 4 * x;
                for (let q = 0; q < U.count; q++) {
                    const K = q * B;
                    d === !0 && (r.fromBufferAttribute(U, q),
                    b[H + K + 0] = r.x,
                    b[H + K + 1] = r.y,
                    b[H + K + 2] = r.z,
                    b[H + K + 3] = 0),
                    g === !0 && (r.fromBufferAttribute(G, q),
                    b[H + K + 4] = r.x,
                    b[H + K + 5] = r.y,
                    b[H + K + 6] = r.z,
                    b[H + K + 7] = 0),
                    _ === !0 && (r.fromBufferAttribute(P, q),
                    b[H + K + 8] = r.x,
                    b[H + K + 9] = r.y,
                    b[H + K + 10] = r.z,
                    b[H + K + 11] = P.itemSize === 4 ? r.w : 1)
                }
            }
            f = {
                count: u,
                texture: w,
                size: new Ie(S,D)
            },
            n.set(o, f),
            o.addEventListener("dispose", E)
        }
        if (a.isInstancedMesh === !0 && a.morphTexture !== null)
            l.getUniforms().setValue(i, "morphTexture", a.morphTexture, t);
        else {
            let d = 0;
            for (let _ = 0; _ < c.length; _++)
                d += c[_];
            const g = o.morphTargetsRelative ? 1 : 1 - d;
            l.getUniforms().setValue(i, "morphTargetBaseInfluence", g),
            l.getUniforms().setValue(i, "morphTargetInfluences", c)
        }
        l.getUniforms().setValue(i, "morphTargetsTexture", f.texture, t),
        l.getUniforms().setValue(i, "morphTargetsTextureSize", f.size)
    }
    return {
        update: s
    }
}
function Ep(i, e, t, n) {
    let r = new WeakMap;
    function s(l) {
        const c = n.render.frame
          , h = l.geometry
          , u = e.get(l, h);
        if (r.get(u) !== c && (e.update(u),
        r.set(u, c)),
        l.isInstancedMesh && (l.hasEventListener("dispose", o) === !1 && l.addEventListener("dispose", o),
        r.get(l) !== c && (t.update(l.instanceMatrix, i.ARRAY_BUFFER),
        l.instanceColor !== null && t.update(l.instanceColor, i.ARRAY_BUFFER),
        r.set(l, c))),
        l.isSkinnedMesh) {
            const f = l.skeleton;
            r.get(f) !== c && (f.update(),
            r.set(f, c))
        }
        return u
    }
    function a() {
        r = new WeakMap
    }
    function o(l) {
        const c = l.target;
        c.removeEventListener("dispose", o),
        t.remove(c.instanceMatrix),
        c.instanceColor !== null && t.remove(c.instanceColor)
    }
    return {
        update: s,
        dispose: a
    }
}
class ic extends ut {
    constructor(e, t, n, r, s, a, o, l, c, h) {
        if (h = h !== void 0 ? h : Ri,
        h !== Ri && h !== sr)
            throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
        n === void 0 && h === Ri && (n = Ii),
        n === void 0 && h === sr && (n = fr),
        super(null, r, s, a, o, l, h, n, c),
        this.isDepthTexture = !0,
        this.image = {
            width: e,
            height: t
        },
        this.magFilter = o !== void 0 ? o : Lt,
        this.minFilter = l !== void 0 ? l : Lt,
        this.flipY = !1,
        this.generateMipmaps = !1,
        this.compareFunction = null
    }
    copy(e) {
        return super.copy(e),
        this.compareFunction = e.compareFunction,
        this
    }
    toJSON(e) {
        const t = super.toJSON(e);
        return this.compareFunction !== null && (t.compareFunction = this.compareFunction),
        t
    }
}
const rc = new ut
  , sc = new ic(1,1);
sc.compareFunction = ql;
const ac = new Zl
  , oc = new lu
  , lc = new tc
  , il = []
  , rl = []
  , sl = new Float32Array(16)
  , al = new Float32Array(9)
  , ol = new Float32Array(4);
function zi(i, e, t) {
    const n = i[0];
    if (n <= 0 || n > 0)
        return i;
    const r = e * t;
    let s = il[r];
    if (s === void 0 && (s = new Float32Array(r),
    il[r] = s),
    e !== 0) {
        n.toArray(s, 0);
        for (let a = 1, o = 0; a !== e; ++a)
            o += t,
            i[a].toArray(s, o)
    }
    return s
}
function ft(i, e) {
    if (i.length !== e.length)
        return !1;
    for (let t = 0, n = i.length; t < n; t++)
        if (i[t] !== e[t])
            return !1;
    return !0
}
function dt(i, e) {
    for (let t = 0, n = e.length; t < n; t++)
        i[t] = e[t]
}
function cs(i, e) {
    let t = rl[e];
    t === void 0 && (t = new Int32Array(e),
    rl[e] = t);
    for (let n = 0; n !== e; ++n)
        t[n] = i.allocateTextureUnit();
    return t
}
function Tp(i, e) {
    const t = this.cache;
    t[0] !== e && (i.uniform1f(this.addr, e),
    t[0] = e)
}
function Ap(i, e) {
    const t = this.cache;
    if (e.x !== void 0)
        (t[0] !== e.x || t[1] !== e.y) && (i.uniform2f(this.addr, e.x, e.y),
        t[0] = e.x,
        t[1] = e.y);
    else {
        if (ft(t, e))
            return;
        i.uniform2fv(this.addr, e),
        dt(t, e)
    }
}
function bp(i, e) {
    const t = this.cache;
    if (e.x !== void 0)
        (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (i.uniform3f(this.addr, e.x, e.y, e.z),
        t[0] = e.x,
        t[1] = e.y,
        t[2] = e.z);
    else if (e.r !== void 0)
        (t[0] !== e.r || t[1] !== e.g || t[2] !== e.b) && (i.uniform3f(this.addr, e.r, e.g, e.b),
        t[0] = e.r,
        t[1] = e.g,
        t[2] = e.b);
    else {
        if (ft(t, e))
            return;
        i.uniform3fv(this.addr, e),
        dt(t, e)
    }
}
function wp(i, e) {
    const t = this.cache;
    if (e.x !== void 0)
        (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (i.uniform4f(this.addr, e.x, e.y, e.z, e.w),
        t[0] = e.x,
        t[1] = e.y,
        t[2] = e.z,
        t[3] = e.w);
    else {
        if (ft(t, e))
            return;
        i.uniform4fv(this.addr, e),
        dt(t, e)
    }
}
function Rp(i, e) {
    const t = this.cache
      , n = e.elements;
    if (n === void 0) {
        if (ft(t, e))
            return;
        i.uniformMatrix2fv(this.addr, !1, e),
        dt(t, e)
    } else {
        if (ft(t, n))
            return;
        ol.set(n),
        i.uniformMatrix2fv(this.addr, !1, ol),
        dt(t, n)
    }
}
function Cp(i, e) {
    const t = this.cache
      , n = e.elements;
    if (n === void 0) {
        if (ft(t, e))
            return;
        i.uniformMatrix3fv(this.addr, !1, e),
        dt(t, e)
    } else {
        if (ft(t, n))
            return;
        al.set(n),
        i.uniformMatrix3fv(this.addr, !1, al),
        dt(t, n)
    }
}
function Pp(i, e) {
    const t = this.cache
      , n = e.elements;
    if (n === void 0) {
        if (ft(t, e))
            return;
        i.uniformMatrix4fv(this.addr, !1, e),
        dt(t, e)
    } else {
        if (ft(t, n))
            return;
        sl.set(n),
        i.uniformMatrix4fv(this.addr, !1, sl),
        dt(t, n)
    }
}
function Lp(i, e) {
    const t = this.cache;
    t[0] !== e && (i.uniform1i(this.addr, e),
    t[0] = e)
}
function Ip(i, e) {
    const t = this.cache;
    if (e.x !== void 0)
        (t[0] !== e.x || t[1] !== e.y) && (i.uniform2i(this.addr, e.x, e.y),
        t[0] = e.x,
        t[1] = e.y);
    else {
        if (ft(t, e))
            return;
        i.uniform2iv(this.addr, e),
        dt(t, e)
    }
}
function Dp(i, e) {
    const t = this.cache;
    if (e.x !== void 0)
        (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (i.uniform3i(this.addr, e.x, e.y, e.z),
        t[0] = e.x,
        t[1] = e.y,
        t[2] = e.z);
    else {
        if (ft(t, e))
            return;
        i.uniform3iv(this.addr, e),
        dt(t, e)
    }
}
function Up(i, e) {
    const t = this.cache;
    if (e.x !== void 0)
        (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (i.uniform4i(this.addr, e.x, e.y, e.z, e.w),
        t[0] = e.x,
        t[1] = e.y,
        t[2] = e.z,
        t[3] = e.w);
    else {
        if (ft(t, e))
            return;
        i.uniform4iv(this.addr, e),
        dt(t, e)
    }
}
function Np(i, e) {
    const t = this.cache;
    t[0] !== e && (i.uniform1ui(this.addr, e),
    t[0] = e)
}
function Fp(i, e) {
    const t = this.cache;
    if (e.x !== void 0)
        (t[0] !== e.x || t[1] !== e.y) && (i.uniform2ui(this.addr, e.x, e.y),
        t[0] = e.x,
        t[1] = e.y);
    else {
        if (ft(t, e))
            return;
        i.uniform2uiv(this.addr, e),
        dt(t, e)
    }
}
function Op(i, e) {
    const t = this.cache;
    if (e.x !== void 0)
        (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (i.uniform3ui(this.addr, e.x, e.y, e.z),
        t[0] = e.x,
        t[1] = e.y,
        t[2] = e.z);
    else {
        if (ft(t, e))
            return;
        i.uniform3uiv(this.addr, e),
        dt(t, e)
    }
}
function Bp(i, e) {
    const t = this.cache;
    if (e.x !== void 0)
        (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (i.uniform4ui(this.addr, e.x, e.y, e.z, e.w),
        t[0] = e.x,
        t[1] = e.y,
        t[2] = e.z,
        t[3] = e.w);
    else {
        if (ft(t, e))
            return;
        i.uniform4uiv(this.addr, e),
        dt(t, e)
    }
}
function zp(i, e, t) {
    const n = this.cache
      , r = t.allocateTextureUnit();
    n[0] !== r && (i.uniform1i(this.addr, r),
    n[0] = r);
    const s = this.type === i.SAMPLER_2D_SHADOW ? sc : rc;
    t.setTexture2D(e || s, r)
}
function Vp(i, e, t) {
    const n = this.cache
      , r = t.allocateTextureUnit();
    n[0] !== r && (i.uniform1i(this.addr, r),
    n[0] = r),
    t.setTexture3D(e || oc, r)
}
function kp(i, e, t) {
    const n = this.cache
      , r = t.allocateTextureUnit();
    n[0] !== r && (i.uniform1i(this.addr, r),
    n[0] = r),
    t.setTextureCube(e || lc, r)
}
function Hp(i, e, t) {
    const n = this.cache
      , r = t.allocateTextureUnit();
    n[0] !== r && (i.uniform1i(this.addr, r),
    n[0] = r),
    t.setTexture2DArray(e || ac, r)
}
function Gp(i) {
    switch (i) {
    case 5126:
        return Tp;
    case 35664:
        return Ap;
    case 35665:
        return bp;
    case 35666:
        return wp;
    case 35674:
        return Rp;
    case 35675:
        return Cp;
    case 35676:
        return Pp;
    case 5124:
    case 35670:
        return Lp;
    case 35667:
    case 35671:
        return Ip;
    case 35668:
    case 35672:
        return Dp;
    case 35669:
    case 35673:
        return Up;
    case 5125:
        return Np;
    case 36294:
        return Fp;
    case 36295:
        return Op;
    case 36296:
        return Bp;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
        return zp;
    case 35679:
    case 36299:
    case 36307:
        return Vp;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
        return kp;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
        return Hp
    }
}
function Wp(i, e) {
    i.uniform1fv(this.addr, e)
}
function Xp(i, e) {
    const t = zi(e, this.size, 2);
    i.uniform2fv(this.addr, t)
}
function qp(i, e) {
    const t = zi(e, this.size, 3);
    i.uniform3fv(this.addr, t)
}
function Yp(i, e) {
    const t = zi(e, this.size, 4);
    i.uniform4fv(this.addr, t)
}
function Kp(i, e) {
    const t = zi(e, this.size, 4);
    i.uniformMatrix2fv(this.addr, !1, t)
}
function Zp(i, e) {
    const t = zi(e, this.size, 9);
    i.uniformMatrix3fv(this.addr, !1, t)
}
function $p(i, e) {
    const t = zi(e, this.size, 16);
    i.uniformMatrix4fv(this.addr, !1, t)
}
function jp(i, e) {
    i.uniform1iv(this.addr, e)
}
function Jp(i, e) {
    i.uniform2iv(this.addr, e)
}
function Qp(i, e) {
    i.uniform3iv(this.addr, e)
}
function em(i, e) {
    i.uniform4iv(this.addr, e)
}
function tm(i, e) {
    i.uniform1uiv(this.addr, e)
}
function nm(i, e) {
    i.uniform2uiv(this.addr, e)
}
function im(i, e) {
    i.uniform3uiv(this.addr, e)
}
function rm(i, e) {
    i.uniform4uiv(this.addr, e)
}
function sm(i, e, t) {
    const n = this.cache
      , r = e.length
      , s = cs(t, r);
    ft(n, s) || (i.uniform1iv(this.addr, s),
    dt(n, s));
    for (let a = 0; a !== r; ++a)
        t.setTexture2D(e[a] || rc, s[a])
}
function am(i, e, t) {
    const n = this.cache
      , r = e.length
      , s = cs(t, r);
    ft(n, s) || (i.uniform1iv(this.addr, s),
    dt(n, s));
    for (let a = 0; a !== r; ++a)
        t.setTexture3D(e[a] || oc, s[a])
}
function om(i, e, t) {
    const n = this.cache
      , r = e.length
      , s = cs(t, r);
    ft(n, s) || (i.uniform1iv(this.addr, s),
    dt(n, s));
    for (let a = 0; a !== r; ++a)
        t.setTextureCube(e[a] || lc, s[a])
}
function lm(i, e, t) {
    const n = this.cache
      , r = e.length
      , s = cs(t, r);
    ft(n, s) || (i.uniform1iv(this.addr, s),
    dt(n, s));
    for (let a = 0; a !== r; ++a)
        t.setTexture2DArray(e[a] || ac, s[a])
}
function cm(i) {
    switch (i) {
    case 5126:
        return Wp;
    case 35664:
        return Xp;
    case 35665:
        return qp;
    case 35666:
        return Yp;
    case 35674:
        return Kp;
    case 35675:
        return Zp;
    case 35676:
        return $p;
    case 5124:
    case 35670:
        return jp;
    case 35667:
    case 35671:
        return Jp;
    case 35668:
    case 35672:
        return Qp;
    case 35669:
    case 35673:
        return em;
    case 5125:
        return tm;
    case 36294:
        return nm;
    case 36295:
        return im;
    case 36296:
        return rm;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
        return sm;
    case 35679:
    case 36299:
    case 36307:
        return am;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
        return om;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
        return lm
    }
}
class hm {
    constructor(e, t, n) {
        this.id = e,
        this.addr = n,
        this.cache = [],
        this.type = t.type,
        this.setValue = Gp(t.type)
    }
}
class um {
    constructor(e, t, n) {
        this.id = e,
        this.addr = n,
        this.cache = [],
        this.type = t.type,
        this.size = t.size,
        this.setValue = cm(t.type)
    }
}
class fm {
    constructor(e) {
        this.id = e,
        this.seq = [],
        this.map = {}
    }
    setValue(e, t, n) {
        const r = this.seq;
        for (let s = 0, a = r.length; s !== a; ++s) {
            const o = r[s];
            o.setValue(e, t[o.id], n)
        }
    }
}
const Ks = /(\w+)(\])?(\[|\.)?/g;
function ll(i, e) {
    i.seq.push(e),
    i.map[e.id] = e
}
function dm(i, e, t) {
    const n = i.name
      , r = n.length;
    for (Ks.lastIndex = 0; ; ) {
        const s = Ks.exec(n)
          , a = Ks.lastIndex;
        let o = s[1];
        const l = s[2] === "]"
          , c = s[3];
        if (l && (o = o | 0),
        c === void 0 || c === "[" && a + 2 === r) {
            ll(t, c === void 0 ? new hm(o,i,e) : new um(o,i,e));
            break
        } else {
            let u = t.map[o];
            u === void 0 && (u = new fm(o),
            ll(t, u)),
            t = u
        }
    }
}
class Xr {
    constructor(e, t) {
        this.seq = [],
        this.map = {};
        const n = e.getProgramParameter(t, e.ACTIVE_UNIFORMS);
        for (let r = 0; r < n; ++r) {
            const s = e.getActiveUniform(t, r)
              , a = e.getUniformLocation(t, s.name);
            dm(s, a, this)
        }
    }
    setValue(e, t, n, r) {
        const s = this.map[t];
        s !== void 0 && s.setValue(e, n, r)
    }
    setOptional(e, t, n) {
        const r = t[n];
        r !== void 0 && this.setValue(e, n, r)
    }
    static upload(e, t, n, r) {
        for (let s = 0, a = t.length; s !== a; ++s) {
            const o = t[s]
              , l = n[o.id];
            l.needsUpdate !== !1 && o.setValue(e, l.value, r)
        }
    }
    static seqWithValue(e, t) {
        const n = [];
        for (let r = 0, s = e.length; r !== s; ++r) {
            const a = e[r];
            a.id in t && n.push(a)
        }
        return n
    }
}
function cl(i, e, t) {
    const n = i.createShader(e);
    return i.shaderSource(n, t),
    i.compileShader(n),
    n
}
const pm = 37297;
let mm = 0;
function gm(i, e) {
    const t = i.split(`
`)
      , n = []
      , r = Math.max(e - 6, 0)
      , s = Math.min(e + 6, t.length);
    for (let a = r; a < s; a++) {
        const o = a + 1;
        n.push(`${o === e ? ">" : " "} ${o}: ${t[a]}`)
    }
    return n.join(`
`)
}
function _m(i) {
    const e = Ze.getPrimaries(Ze.workingColorSpace)
      , t = Ze.getPrimaries(i);
    let n;
    switch (e === t ? n = "" : e === Jr && t === jr ? n = "LinearDisplayP3ToLinearSRGB" : e === jr && t === Jr && (n = "LinearSRGBToLinearDisplayP3"),
    i) {
    case On:
    case os:
        return [n, "LinearTransferOETF"];
    case Pt:
    case ga:
        return [n, "sRGBTransferOETF"];
    default:
        return console.warn("THREE.WebGLProgram: Unsupported color space:", i),
        [n, "LinearTransferOETF"]
    }
}
function hl(i, e, t) {
    const n = i.getShaderParameter(e, i.COMPILE_STATUS)
      , r = i.getShaderInfoLog(e).trim();
    if (n && r === "")
        return "";
    const s = /ERROR: 0:(\d+)/.exec(r);
    if (s) {
        const a = parseInt(s[1]);
        return t.toUpperCase() + `

` + r + `

` + gm(i.getShaderSource(e), a)
    } else
        return r
}
function vm(i, e) {
    const t = _m(e);
    return `vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`
}
function xm(i, e) {
    let t;
    switch (e) {
    case ch:
        t = "Linear";
        break;
    case hh:
        t = "Reinhard";
        break;
    case uh:
        t = "OptimizedCineon";
        break;
    case fh:
        t = "ACESFilmic";
        break;
    case ph:
        t = "AgX";
        break;
    case mh:
        t = "Neutral";
        break;
    case dh:
        t = "Custom";
        break;
    default:
        console.warn("THREE.WebGLProgram: Unsupported toneMapping:", e),
        t = "Linear"
    }
    return "vec3 " + i + "( vec3 color ) { return " + t + "ToneMapping( color ); }"
}
function Mm(i) {
    return [i.extensionClipCullDistance ? "#extension GL_ANGLE_clip_cull_distance : require" : "", i.extensionMultiDraw ? "#extension GL_ANGLE_multi_draw : require" : ""].filter(er).join(`
`)
}
function ym(i) {
    const e = [];
    for (const t in i) {
        const n = i[t];
        n !== !1 && e.push("#define " + t + " " + n)
    }
    return e.join(`
`)
}
function Sm(i, e) {
    const t = {}
      , n = i.getProgramParameter(e, i.ACTIVE_ATTRIBUTES);
    for (let r = 0; r < n; r++) {
        const s = i.getActiveAttrib(e, r)
          , a = s.name;
        let o = 1;
        s.type === i.FLOAT_MAT2 && (o = 2),
        s.type === i.FLOAT_MAT3 && (o = 3),
        s.type === i.FLOAT_MAT4 && (o = 4),
        t[a] = {
            type: s.type,
            location: i.getAttribLocation(e, a),
            locationSize: o
        }
    }
    return t
}
function er(i) {
    return i !== ""
}
function ul(i, e) {
    const t = e.numSpotLightShadows + e.numSpotLightMaps - e.numSpotLightShadowsWithMaps;
    return i.replace(/NUM_DIR_LIGHTS/g, e.numDirLights).replace(/NUM_SPOT_LIGHTS/g, e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g, e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g, t).replace(/NUM_RECT_AREA_LIGHTS/g, e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, e.numPointLights).replace(/NUM_HEMI_LIGHTS/g, e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g, e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g, e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g, e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, e.numPointLightShadows)
}
function fl(i, e) {
    return i.replace(/NUM_CLIPPING_PLANES/g, e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, e.numClippingPlanes - e.numClipIntersection)
}
const Em = /^[ \t]*#include +<([\w\d./]+)>/gm;
function ha(i) {
    return i.replace(Em, Am)
}
const Tm = new Map;
function Am(i, e) {
    let t = be[e];
    if (t === void 0) {
        const n = Tm.get(e);
        if (n !== void 0)
            t = be[n],
            console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.', e, n);
        else
            throw new Error("Can not resolve #include <" + e + ">")
    }
    return ha(t)
}
const bm = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
function dl(i) {
    return i.replace(bm, wm)
}
function wm(i, e, t, n) {
    let r = "";
    for (let s = parseInt(e); s < parseInt(t); s++)
        r += n.replace(/\[\s*i\s*\]/g, "[ " + s + " ]").replace(/UNROLLED_LOOP_INDEX/g, s);
    return r
}
function pl(i) {
    let e = `precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;
    return i.precision === "highp" ? e += `
#define HIGH_PRECISION` : i.precision === "mediump" ? e += `
#define MEDIUM_PRECISION` : i.precision === "lowp" && (e += `
#define LOW_PRECISION`),
    e
}
function Rm(i) {
    let e = "SHADOWMAP_TYPE_BASIC";
    return i.shadowMapType === Ol ? e = "SHADOWMAP_TYPE_PCF" : i.shadowMapType === Nc ? e = "SHADOWMAP_TYPE_PCF_SOFT" : i.shadowMapType === gn && (e = "SHADOWMAP_TYPE_VSM"),
    e
}
function Cm(i) {
    let e = "ENVMAP_TYPE_CUBE";
    if (i.envMap)
        switch (i.envMapMode) {
        case Pi:
        case Li:
            e = "ENVMAP_TYPE_CUBE";
            break;
        case rs:
            e = "ENVMAP_TYPE_CUBE_UV";
            break
        }
    return e
}
function Pm(i) {
    let e = "ENVMAP_MODE_REFLECTION";
    if (i.envMap)
        switch (i.envMapMode) {
        case Li:
            e = "ENVMAP_MODE_REFRACTION";
            break
        }
    return e
}
function Lm(i) {
    let e = "ENVMAP_BLENDING_NONE";
    if (i.envMap)
        switch (i.combine) {
        case is:
            e = "ENVMAP_BLENDING_MULTIPLY";
            break;
        case oh:
            e = "ENVMAP_BLENDING_MIX";
            break;
        case lh:
            e = "ENVMAP_BLENDING_ADD";
            break
        }
    return e
}
function Im(i) {
    const e = i.envMapCubeUVHeight;
    if (e === null)
        return null;
    const t = Math.log2(e) - 2
      , n = 1 / e;
    return {
        texelWidth: 1 / (3 * Math.max(Math.pow(2, t), 7 * 16)),
        texelHeight: n,
        maxMip: t
    }
}
function Dm(i, e, t, n) {
    const r = i.getContext()
      , s = t.defines;
    let a = t.vertexShader
      , o = t.fragmentShader;
    const l = Rm(t)
      , c = Cm(t)
      , h = Pm(t)
      , u = Lm(t)
      , f = Im(t)
      , d = Mm(t)
      , g = ym(s)
      , _ = r.createProgram();
    let p, m, T = t.glslVersion ? "#version " + t.glslVersion + `
` : "";
    t.isRawShaderMaterial ? (p = ["#define SHADER_TYPE " + t.shaderType, "#define SHADER_NAME " + t.shaderName, g].filter(er).join(`
`),
    p.length > 0 && (p += `
`),
    m = ["#define SHADER_TYPE " + t.shaderType, "#define SHADER_NAME " + t.shaderName, g].filter(er).join(`
`),
    m.length > 0 && (m += `
`)) : (p = [pl(t), "#define SHADER_TYPE " + t.shaderType, "#define SHADER_NAME " + t.shaderName, g, t.extensionClipCullDistance ? "#define USE_CLIP_DISTANCE" : "", t.batching ? "#define USE_BATCHING" : "", t.instancing ? "#define USE_INSTANCING" : "", t.instancingColor ? "#define USE_INSTANCING_COLOR" : "", t.instancingMorph ? "#define USE_INSTANCING_MORPH" : "", t.useFog && t.fog ? "#define USE_FOG" : "", t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "", t.map ? "#define USE_MAP" : "", t.envMap ? "#define USE_ENVMAP" : "", t.envMap ? "#define " + h : "", t.lightMap ? "#define USE_LIGHTMAP" : "", t.aoMap ? "#define USE_AOMAP" : "", t.bumpMap ? "#define USE_BUMPMAP" : "", t.normalMap ? "#define USE_NORMALMAP" : "", t.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "", t.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "", t.displacementMap ? "#define USE_DISPLACEMENTMAP" : "", t.emissiveMap ? "#define USE_EMISSIVEMAP" : "", t.anisotropy ? "#define USE_ANISOTROPY" : "", t.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "", t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "", t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "", t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "", t.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "", t.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "", t.specularMap ? "#define USE_SPECULARMAP" : "", t.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "", t.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "", t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", t.metalnessMap ? "#define USE_METALNESSMAP" : "", t.alphaMap ? "#define USE_ALPHAMAP" : "", t.alphaHash ? "#define USE_ALPHAHASH" : "", t.transmission ? "#define USE_TRANSMISSION" : "", t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "", t.thicknessMap ? "#define USE_THICKNESSMAP" : "", t.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "", t.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "", t.mapUv ? "#define MAP_UV " + t.mapUv : "", t.alphaMapUv ? "#define ALPHAMAP_UV " + t.alphaMapUv : "", t.lightMapUv ? "#define LIGHTMAP_UV " + t.lightMapUv : "", t.aoMapUv ? "#define AOMAP_UV " + t.aoMapUv : "", t.emissiveMapUv ? "#define EMISSIVEMAP_UV " + t.emissiveMapUv : "", t.bumpMapUv ? "#define BUMPMAP_UV " + t.bumpMapUv : "", t.normalMapUv ? "#define NORMALMAP_UV " + t.normalMapUv : "", t.displacementMapUv ? "#define DISPLACEMENTMAP_UV " + t.displacementMapUv : "", t.metalnessMapUv ? "#define METALNESSMAP_UV " + t.metalnessMapUv : "", t.roughnessMapUv ? "#define ROUGHNESSMAP_UV " + t.roughnessMapUv : "", t.anisotropyMapUv ? "#define ANISOTROPYMAP_UV " + t.anisotropyMapUv : "", t.clearcoatMapUv ? "#define CLEARCOATMAP_UV " + t.clearcoatMapUv : "", t.clearcoatNormalMapUv ? "#define CLEARCOAT_NORMALMAP_UV " + t.clearcoatNormalMapUv : "", t.clearcoatRoughnessMapUv ? "#define CLEARCOAT_ROUGHNESSMAP_UV " + t.clearcoatRoughnessMapUv : "", t.iridescenceMapUv ? "#define IRIDESCENCEMAP_UV " + t.iridescenceMapUv : "", t.iridescenceThicknessMapUv ? "#define IRIDESCENCE_THICKNESSMAP_UV " + t.iridescenceThicknessMapUv : "", t.sheenColorMapUv ? "#define SHEEN_COLORMAP_UV " + t.sheenColorMapUv : "", t.sheenRoughnessMapUv ? "#define SHEEN_ROUGHNESSMAP_UV " + t.sheenRoughnessMapUv : "", t.specularMapUv ? "#define SPECULARMAP_UV " + t.specularMapUv : "", t.specularColorMapUv ? "#define SPECULAR_COLORMAP_UV " + t.specularColorMapUv : "", t.specularIntensityMapUv ? "#define SPECULAR_INTENSITYMAP_UV " + t.specularIntensityMapUv : "", t.transmissionMapUv ? "#define TRANSMISSIONMAP_UV " + t.transmissionMapUv : "", t.thicknessMapUv ? "#define THICKNESSMAP_UV " + t.thicknessMapUv : "", t.vertexTangents && t.flatShading === !1 ? "#define USE_TANGENT" : "", t.vertexColors ? "#define USE_COLOR" : "", t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "", t.vertexUv1s ? "#define USE_UV1" : "", t.vertexUv2s ? "#define USE_UV2" : "", t.vertexUv3s ? "#define USE_UV3" : "", t.pointsUvs ? "#define USE_POINTS_UV" : "", t.flatShading ? "#define FLAT_SHADED" : "", t.skinning ? "#define USE_SKINNING" : "", t.morphTargets ? "#define USE_MORPHTARGETS" : "", t.morphNormals && t.flatShading === !1 ? "#define USE_MORPHNORMALS" : "", t.morphColors ? "#define USE_MORPHCOLORS" : "", t.morphTargetsCount > 0 ? "#define MORPHTARGETS_TEXTURE" : "", t.morphTargetsCount > 0 ? "#define MORPHTARGETS_TEXTURE_STRIDE " + t.morphTextureStride : "", t.morphTargetsCount > 0 ? "#define MORPHTARGETS_COUNT " + t.morphTargetsCount : "", t.doubleSided ? "#define DOUBLE_SIDED" : "", t.flipSided ? "#define FLIP_SIDED" : "", t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", t.shadowMapEnabled ? "#define " + l : "", t.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "", t.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "", t.useLegacyLights ? "#define LEGACY_LIGHTS" : "", t.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", "uniform mat4 modelMatrix;", "uniform mat4 modelViewMatrix;", "uniform mat4 projectionMatrix;", "uniform mat4 viewMatrix;", "uniform mat3 normalMatrix;", "uniform vec3 cameraPosition;", "uniform bool isOrthographic;", "#ifdef USE_INSTANCING", "	attribute mat4 instanceMatrix;", "#endif", "#ifdef USE_INSTANCING_COLOR", "	attribute vec3 instanceColor;", "#endif", "#ifdef USE_INSTANCING_MORPH", "	uniform sampler2D morphTexture;", "#endif", "attribute vec3 position;", "attribute vec3 normal;", "attribute vec2 uv;", "#ifdef USE_UV1", "	attribute vec2 uv1;", "#endif", "#ifdef USE_UV2", "	attribute vec2 uv2;", "#endif", "#ifdef USE_UV3", "	attribute vec2 uv3;", "#endif", "#ifdef USE_TANGENT", "	attribute vec4 tangent;", "#endif", "#if defined( USE_COLOR_ALPHA )", "	attribute vec4 color;", "#elif defined( USE_COLOR )", "	attribute vec3 color;", "#endif", "#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )", "	attribute vec3 morphTarget0;", "	attribute vec3 morphTarget1;", "	attribute vec3 morphTarget2;", "	attribute vec3 morphTarget3;", "	#ifdef USE_MORPHNORMALS", "		attribute vec3 morphNormal0;", "		attribute vec3 morphNormal1;", "		attribute vec3 morphNormal2;", "		attribute vec3 morphNormal3;", "	#else", "		attribute vec3 morphTarget4;", "		attribute vec3 morphTarget5;", "		attribute vec3 morphTarget6;", "		attribute vec3 morphTarget7;", "	#endif", "#endif", "#ifdef USE_SKINNING", "	attribute vec4 skinIndex;", "	attribute vec4 skinWeight;", "#endif", `
`].filter(er).join(`
`),
    m = [pl(t), "#define SHADER_TYPE " + t.shaderType, "#define SHADER_NAME " + t.shaderName, g, t.useFog && t.fog ? "#define USE_FOG" : "", t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "", t.alphaToCoverage ? "#define ALPHA_TO_COVERAGE" : "", t.map ? "#define USE_MAP" : "", t.matcap ? "#define USE_MATCAP" : "", t.envMap ? "#define USE_ENVMAP" : "", t.envMap ? "#define " + c : "", t.envMap ? "#define " + h : "", t.envMap ? "#define " + u : "", f ? "#define CUBEUV_TEXEL_WIDTH " + f.texelWidth : "", f ? "#define CUBEUV_TEXEL_HEIGHT " + f.texelHeight : "", f ? "#define CUBEUV_MAX_MIP " + f.maxMip + ".0" : "", t.lightMap ? "#define USE_LIGHTMAP" : "", t.aoMap ? "#define USE_AOMAP" : "", t.bumpMap ? "#define USE_BUMPMAP" : "", t.normalMap ? "#define USE_NORMALMAP" : "", t.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "", t.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "", t.emissiveMap ? "#define USE_EMISSIVEMAP" : "", t.anisotropy ? "#define USE_ANISOTROPY" : "", t.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "", t.clearcoat ? "#define USE_CLEARCOAT" : "", t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "", t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "", t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "", t.dispersion ? "#define USE_DISPERSION" : "", t.iridescence ? "#define USE_IRIDESCENCE" : "", t.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "", t.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "", t.specularMap ? "#define USE_SPECULARMAP" : "", t.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "", t.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "", t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", t.metalnessMap ? "#define USE_METALNESSMAP" : "", t.alphaMap ? "#define USE_ALPHAMAP" : "", t.alphaTest ? "#define USE_ALPHATEST" : "", t.alphaHash ? "#define USE_ALPHAHASH" : "", t.sheen ? "#define USE_SHEEN" : "", t.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "", t.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "", t.transmission ? "#define USE_TRANSMISSION" : "", t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "", t.thicknessMap ? "#define USE_THICKNESSMAP" : "", t.vertexTangents && t.flatShading === !1 ? "#define USE_TANGENT" : "", t.vertexColors || t.instancingColor ? "#define USE_COLOR" : "", t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "", t.vertexUv1s ? "#define USE_UV1" : "", t.vertexUv2s ? "#define USE_UV2" : "", t.vertexUv3s ? "#define USE_UV3" : "", t.pointsUvs ? "#define USE_POINTS_UV" : "", t.gradientMap ? "#define USE_GRADIENTMAP" : "", t.flatShading ? "#define FLAT_SHADED" : "", t.doubleSided ? "#define DOUBLE_SIDED" : "", t.flipSided ? "#define FLIP_SIDED" : "", t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", t.shadowMapEnabled ? "#define " + l : "", t.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "", t.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "", t.useLegacyLights ? "#define LEGACY_LIGHTS" : "", t.decodeVideoTexture ? "#define DECODE_VIDEO_TEXTURE" : "", t.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", "uniform mat4 viewMatrix;", "uniform vec3 cameraPosition;", "uniform bool isOrthographic;", t.toneMapping !== Dn ? "#define TONE_MAPPING" : "", t.toneMapping !== Dn ? be.tonemapping_pars_fragment : "", t.toneMapping !== Dn ? xm("toneMapping", t.toneMapping) : "", t.dithering ? "#define DITHERING" : "", t.opaque ? "#define OPAQUE" : "", be.colorspace_pars_fragment, vm("linearToOutputTexel", t.outputColorSpace), t.useDepthPacking ? "#define DEPTH_PACKING " + t.depthPacking : "", `
`].filter(er).join(`
`)),
    a = ha(a),
    a = ul(a, t),
    a = fl(a, t),
    o = ha(o),
    o = ul(o, t),
    o = fl(o, t),
    a = dl(a),
    o = dl(o),
    t.isRawShaderMaterial !== !0 && (T = `#version 300 es
`,
    p = [d, "#define attribute in", "#define varying out", "#define texture2D texture"].join(`
`) + `
` + p,
    m = ["#define varying in", t.glslVersion === Co ? "" : "layout(location = 0) out highp vec4 pc_fragColor;", t.glslVersion === Co ? "" : "#define gl_FragColor pc_fragColor", "#define gl_FragDepthEXT gl_FragDepth", "#define texture2D texture", "#define textureCube texture", "#define texture2DProj textureProj", "#define texture2DLodEXT textureLod", "#define texture2DProjLodEXT textureProjLod", "#define textureCubeLodEXT textureLod", "#define texture2DGradEXT textureGrad", "#define texture2DProjGradEXT textureProjGrad", "#define textureCubeGradEXT textureGrad"].join(`
`) + `
` + m);
    const v = T + p + a
      , S = T + m + o
      , D = cl(r, r.VERTEX_SHADER, v)
      , b = cl(r, r.FRAGMENT_SHADER, S);
    r.attachShader(_, D),
    r.attachShader(_, b),
    t.index0AttributeName !== void 0 ? r.bindAttribLocation(_, 0, t.index0AttributeName) : t.morphTargets === !0 && r.bindAttribLocation(_, 0, "position"),
    r.linkProgram(_);
    function w(U) {
        if (i.debug.checkShaderErrors) {
            const G = r.getProgramInfoLog(_).trim()
              , P = r.getShaderInfoLog(D).trim()
              , H = r.getShaderInfoLog(b).trim();
            let q = !0
              , K = !0;
            if (r.getProgramParameter(_, r.LINK_STATUS) === !1)
                if (q = !1,
                typeof i.debug.onShaderError == "function")
                    i.debug.onShaderError(r, _, D, b);
                else {
                    const ne = hl(r, D, "vertex")
                      , z = hl(r, b, "fragment");
                    console.error("THREE.WebGLProgram: Shader Error " + r.getError() + " - VALIDATE_STATUS " + r.getProgramParameter(_, r.VALIDATE_STATUS) + `

Material Name: ` + U.name + `
Material Type: ` + U.type + `

Program Info Log: ` + G + `
` + ne + `
` + z)
                }
            else
                G !== "" ? console.warn("THREE.WebGLProgram: Program Info Log:", G) : (P === "" || H === "") && (K = !1);
            K && (U.diagnostics = {
                runnable: q,
                programLog: G,
                vertexShader: {
                    log: P,
                    prefix: p
                },
                fragmentShader: {
                    log: H,
                    prefix: m
                }
            })
        }
        r.deleteShader(D),
        r.deleteShader(b),
        B = new Xr(r,_),
        E = Sm(r, _)
    }
    let B;
    this.getUniforms = function() {
        return B === void 0 && w(this),
        B
    }
    ;
    let E;
    this.getAttributes = function() {
        return E === void 0 && w(this),
        E
    }
    ;
    let x = t.rendererExtensionParallelShaderCompile === !1;
    return this.isReady = function() {
        return x === !1 && (x = r.getProgramParameter(_, pm)),
        x
    }
    ,
    this.destroy = function() {
        n.releaseStatesOfProgram(this),
        r.deleteProgram(_),
        this.program = void 0
    }
    ,
    this.type = t.shaderType,
    this.name = t.shaderName,
    this.id = mm++,
    this.cacheKey = e,
    this.usedTimes = 1,
    this.program = _,
    this.vertexShader = D,
    this.fragmentShader = b,
    this
}
let Um = 0;
class Nm {
    constructor() {
        this.shaderCache = new Map,
        this.materialCache = new Map
    }
    update(e) {
        const t = e.vertexShader
          , n = e.fragmentShader
          , r = this._getShaderStage(t)
          , s = this._getShaderStage(n)
          , a = this._getShaderCacheForMaterial(e);
        return a.has(r) === !1 && (a.add(r),
        r.usedTimes++),
        a.has(s) === !1 && (a.add(s),
        s.usedTimes++),
        this
    }
    remove(e) {
        const t = this.materialCache.get(e);
        for (const n of t)
            n.usedTimes--,
            n.usedTimes === 0 && this.shaderCache.delete(n.code);
        return this.materialCache.delete(e),
        this
    }
    getVertexShaderID(e) {
        return this._getShaderStage(e.vertexShader).id
    }
    getFragmentShaderID(e) {
        return this._getShaderStage(e.fragmentShader).id
    }
    dispose() {
        this.shaderCache.clear(),
        this.materialCache.clear()
    }
    _getShaderCacheForMaterial(e) {
        const t = this.materialCache;
        let n = t.get(e);
        return n === void 0 && (n = new Set,
        t.set(e, n)),
        n
    }
    _getShaderStage(e) {
        const t = this.shaderCache;
        let n = t.get(e);
        return n === void 0 && (n = new Fm(e),
        t.set(e, n)),
        n
    }
}
class Fm {
    constructor(e) {
        this.id = Um++,
        this.code = e,
        this.usedTimes = 0
    }
}
function Om(i, e, t, n, r, s, a) {
    const o = new $l
      , l = new Nm
      , c = new Set
      , h = []
      , u = r.logarithmicDepthBuffer
      , f = r.vertexTextures;
    let d = r.precision;
    const g = {
        MeshDepthMaterial: "depth",
        MeshDistanceMaterial: "distanceRGBA",
        MeshNormalMaterial: "normal",
        MeshBasicMaterial: "basic",
        MeshLambertMaterial: "lambert",
        MeshPhongMaterial: "phong",
        MeshToonMaterial: "toon",
        MeshStandardMaterial: "physical",
        MeshPhysicalMaterial: "physical",
        MeshMatcapMaterial: "matcap",
        LineBasicMaterial: "basic",
        LineDashedMaterial: "dashed",
        PointsMaterial: "points",
        ShadowMaterial: "shadow",
        SpriteMaterial: "sprite"
    };
    function _(E) {
        return c.add(E),
        E === 0 ? "uv" : `uv${E}`
    }
    function p(E, x, U, G, P) {
        const H = G.fog
          , q = P.geometry
          , K = E.isMeshStandardMaterial ? G.environment : null
          , ne = (E.isMeshStandardMaterial ? t : e).get(E.envMap || K)
          , z = ne && ne.mapping === rs ? ne.image.height : null
          , j = g[E.type];
        E.precision !== null && (d = r.getMaxPrecision(E.precision),
        d !== E.precision && console.warn("THREE.WebGLProgram.getParameters:", E.precision, "not supported, using", d, "instead."));
        const Q = q.morphAttributes.position || q.morphAttributes.normal || q.morphAttributes.color
          , fe = Q !== void 0 ? Q.length : 0;
        let we = 0;
        q.morphAttributes.position !== void 0 && (we = 1),
        q.morphAttributes.normal !== void 0 && (we = 2),
        q.morphAttributes.color !== void 0 && (we = 3);
        let Ve, k, J, ce;
        if (j) {
            const Ye = Jt[j];
            Ve = Ye.vertexShader,
            k = Ye.fragmentShader
        } else
            Ve = E.vertexShader,
            k = E.fragmentShader,
            l.update(E),
            J = l.getVertexShaderID(E),
            ce = l.getFragmentShaderID(E);
        const te = i.getRenderTarget()
          , De = P.isInstancedMesh === !0
          , Ue = P.isBatchedMesh === !0
          , I = !!E.map
          , Ke = !!E.matcap
          , ge = !!ne
          , qe = !!E.aoMap
          , ye = !!E.lightMap
          , Be = !!E.bumpMap
          , Ne = !!E.normalMap
          , ze = !!E.displacementMap
          , it = !!E.emissiveMap
          , A = !!E.metalnessMap
          , M = !!E.roughnessMap
          , V = E.anisotropy > 0
          , X = E.clearcoat > 0
          , Z = E.dispersion > 0
          , $ = E.iridescence > 0
          , _e = E.sheen > 0
          , oe = E.transmission > 0
          , ae = V && !!E.anisotropyMap
          , Re = X && !!E.clearcoatMap
          , ee = X && !!E.clearcoatNormalMap
          , me = X && !!E.clearcoatRoughnessMap
          , ke = $ && !!E.iridescenceMap
          , xe = $ && !!E.iridescenceThicknessMap
          , he = _e && !!E.sheenColorMap
          , Ce = _e && !!E.sheenRoughnessMap
          , Oe = !!E.specularMap
          , at = !!E.specularColorMap
          , Pe = !!E.specularIntensityMap
          , C = oe && !!E.transmissionMap
          , Y = oe && !!E.thicknessMap
          , W = !!E.gradientMap
          , re = !!E.alphaMap
          , le = E.alphaTest > 0
          , He = !!E.alphaHash
          , $e = !!E.extensions;
        let rt = Dn;
        E.toneMapped && (te === null || te.isXRRenderTarget === !0) && (rt = i.toneMapping);
        const _t = {
            shaderID: j,
            shaderType: E.type,
            shaderName: E.name,
            vertexShader: Ve,
            fragmentShader: k,
            defines: E.defines,
            customVertexShaderID: J,
            customFragmentShaderID: ce,
            isRawShaderMaterial: E.isRawShaderMaterial === !0,
            glslVersion: E.glslVersion,
            precision: d,
            batching: Ue,
            instancing: De,
            instancingColor: De && P.instanceColor !== null,
            instancingMorph: De && P.morphTexture !== null,
            supportsVertexTextures: f,
            outputColorSpace: te === null ? i.outputColorSpace : te.isXRRenderTarget === !0 ? te.texture.colorSpace : On,
            alphaToCoverage: !!E.alphaToCoverage,
            map: I,
            matcap: Ke,
            envMap: ge,
            envMapMode: ge && ne.mapping,
            envMapCubeUVHeight: z,
            aoMap: qe,
            lightMap: ye,
            bumpMap: Be,
            normalMap: Ne,
            displacementMap: f && ze,
            emissiveMap: it,
            normalMapObjectSpace: Ne && E.normalMapType === Lh,
            normalMapTangentSpace: Ne && E.normalMapType === as,
            metalnessMap: A,
            roughnessMap: M,
            anisotropy: V,
            anisotropyMap: ae,
            clearcoat: X,
            clearcoatMap: Re,
            clearcoatNormalMap: ee,
            clearcoatRoughnessMap: me,
            dispersion: Z,
            iridescence: $,
            iridescenceMap: ke,
            iridescenceThicknessMap: xe,
            sheen: _e,
            sheenColorMap: he,
            sheenRoughnessMap: Ce,
            specularMap: Oe,
            specularColorMap: at,
            specularIntensityMap: Pe,
            transmission: oe,
            transmissionMap: C,
            thicknessMap: Y,
            gradientMap: W,
            opaque: E.transparent === !1 && E.blending === wi && E.alphaToCoverage === !1,
            alphaMap: re,
            alphaTest: le,
            alphaHash: He,
            combine: E.combine,
            mapUv: I && _(E.map.channel),
            aoMapUv: qe && _(E.aoMap.channel),
            lightMapUv: ye && _(E.lightMap.channel),
            bumpMapUv: Be && _(E.bumpMap.channel),
            normalMapUv: Ne && _(E.normalMap.channel),
            displacementMapUv: ze && _(E.displacementMap.channel),
            emissiveMapUv: it && _(E.emissiveMap.channel),
            metalnessMapUv: A && _(E.metalnessMap.channel),
            roughnessMapUv: M && _(E.roughnessMap.channel),
            anisotropyMapUv: ae && _(E.anisotropyMap.channel),
            clearcoatMapUv: Re && _(E.clearcoatMap.channel),
            clearcoatNormalMapUv: ee && _(E.clearcoatNormalMap.channel),
            clearcoatRoughnessMapUv: me && _(E.clearcoatRoughnessMap.channel),
            iridescenceMapUv: ke && _(E.iridescenceMap.channel),
            iridescenceThicknessMapUv: xe && _(E.iridescenceThicknessMap.channel),
            sheenColorMapUv: he && _(E.sheenColorMap.channel),
            sheenRoughnessMapUv: Ce && _(E.sheenRoughnessMap.channel),
            specularMapUv: Oe && _(E.specularMap.channel),
            specularColorMapUv: at && _(E.specularColorMap.channel),
            specularIntensityMapUv: Pe && _(E.specularIntensityMap.channel),
            transmissionMapUv: C && _(E.transmissionMap.channel),
            thicknessMapUv: Y && _(E.thicknessMap.channel),
            alphaMapUv: re && _(E.alphaMap.channel),
            vertexTangents: !!q.attributes.tangent && (Ne || V),
            vertexColors: E.vertexColors,
            vertexAlphas: E.vertexColors === !0 && !!q.attributes.color && q.attributes.color.itemSize === 4,
            pointsUvs: P.isPoints === !0 && !!q.attributes.uv && (I || re),
            fog: !!H,
            useFog: E.fog === !0,
            fogExp2: !!H && H.isFogExp2,
            flatShading: E.flatShading === !0,
            sizeAttenuation: E.sizeAttenuation === !0,
            logarithmicDepthBuffer: u,
            skinning: P.isSkinnedMesh === !0,
            morphTargets: q.morphAttributes.position !== void 0,
            morphNormals: q.morphAttributes.normal !== void 0,
            morphColors: q.morphAttributes.color !== void 0,
            morphTargetsCount: fe,
            morphTextureStride: we,
            numDirLights: x.directional.length,
            numPointLights: x.point.length,
            numSpotLights: x.spot.length,
            numSpotLightMaps: x.spotLightMap.length,
            numRectAreaLights: x.rectArea.length,
            numHemiLights: x.hemi.length,
            numDirLightShadows: x.directionalShadowMap.length,
            numPointLightShadows: x.pointShadowMap.length,
            numSpotLightShadows: x.spotShadowMap.length,
            numSpotLightShadowsWithMaps: x.numSpotLightShadowsWithMaps,
            numLightProbes: x.numLightProbes,
            numClippingPlanes: a.numPlanes,
            numClipIntersection: a.numIntersection,
            dithering: E.dithering,
            shadowMapEnabled: i.shadowMap.enabled && U.length > 0,
            shadowMapType: i.shadowMap.type,
            toneMapping: rt,
            useLegacyLights: i._useLegacyLights,
            decodeVideoTexture: I && E.map.isVideoTexture === !0 && Ze.getTransfer(E.map.colorSpace) === je,
            premultipliedAlpha: E.premultipliedAlpha,
            doubleSided: E.side === _n,
            flipSided: E.side === It,
            useDepthPacking: E.depthPacking >= 0,
            depthPacking: E.depthPacking || 0,
            index0AttributeName: E.index0AttributeName,
            extensionClipCullDistance: $e && E.extensions.clipCullDistance === !0 && n.has("WEBGL_clip_cull_distance"),
            extensionMultiDraw: $e && E.extensions.multiDraw === !0 && n.has("WEBGL_multi_draw"),
            rendererExtensionParallelShaderCompile: n.has("KHR_parallel_shader_compile"),
            customProgramCacheKey: E.customProgramCacheKey()
        };
        return _t.vertexUv1s = c.has(1),
        _t.vertexUv2s = c.has(2),
        _t.vertexUv3s = c.has(3),
        c.clear(),
        _t
    }
    function m(E) {
        const x = [];
        if (E.shaderID ? x.push(E.shaderID) : (x.push(E.customVertexShaderID),
        x.push(E.customFragmentShaderID)),
        E.defines !== void 0)
            for (const U in E.defines)
                x.push(U),
                x.push(E.defines[U]);
        return E.isRawShaderMaterial === !1 && (T(x, E),
        v(x, E),
        x.push(i.outputColorSpace)),
        x.push(E.customProgramCacheKey),
        x.join()
    }
    function T(E, x) {
        E.push(x.precision),
        E.push(x.outputColorSpace),
        E.push(x.envMapMode),
        E.push(x.envMapCubeUVHeight),
        E.push(x.mapUv),
        E.push(x.alphaMapUv),
        E.push(x.lightMapUv),
        E.push(x.aoMapUv),
        E.push(x.bumpMapUv),
        E.push(x.normalMapUv),
        E.push(x.displacementMapUv),
        E.push(x.emissiveMapUv),
        E.push(x.metalnessMapUv),
        E.push(x.roughnessMapUv),
        E.push(x.anisotropyMapUv),
        E.push(x.clearcoatMapUv),
        E.push(x.clearcoatNormalMapUv),
        E.push(x.clearcoatRoughnessMapUv),
        E.push(x.iridescenceMapUv),
        E.push(x.iridescenceThicknessMapUv),
        E.push(x.sheenColorMapUv),
        E.push(x.sheenRoughnessMapUv),
        E.push(x.specularMapUv),
        E.push(x.specularColorMapUv),
        E.push(x.specularIntensityMapUv),
        E.push(x.transmissionMapUv),
        E.push(x.thicknessMapUv),
        E.push(x.combine),
        E.push(x.fogExp2),
        E.push(x.sizeAttenuation),
        E.push(x.morphTargetsCount),
        E.push(x.morphAttributeCount),
        E.push(x.numDirLights),
        E.push(x.numPointLights),
        E.push(x.numSpotLights),
        E.push(x.numSpotLightMaps),
        E.push(x.numHemiLights),
        E.push(x.numRectAreaLights),
        E.push(x.numDirLightShadows),
        E.push(x.numPointLightShadows),
        E.push(x.numSpotLightShadows),
        E.push(x.numSpotLightShadowsWithMaps),
        E.push(x.numLightProbes),
        E.push(x.shadowMapType),
        E.push(x.toneMapping),
        E.push(x.numClippingPlanes),
        E.push(x.numClipIntersection),
        E.push(x.depthPacking)
    }
    function v(E, x) {
        o.disableAll(),
        x.supportsVertexTextures && o.enable(0),
        x.instancing && o.enable(1),
        x.instancingColor && o.enable(2),
        x.instancingMorph && o.enable(3),
        x.matcap && o.enable(4),
        x.envMap && o.enable(5),
        x.normalMapObjectSpace && o.enable(6),
        x.normalMapTangentSpace && o.enable(7),
        x.clearcoat && o.enable(8),
        x.iridescence && o.enable(9),
        x.alphaTest && o.enable(10),
        x.vertexColors && o.enable(11),
        x.vertexAlphas && o.enable(12),
        x.vertexUv1s && o.enable(13),
        x.vertexUv2s && o.enable(14),
        x.vertexUv3s && o.enable(15),
        x.vertexTangents && o.enable(16),
        x.anisotropy && o.enable(17),
        x.alphaHash && o.enable(18),
        x.batching && o.enable(19),
        x.dispersion && o.enable(20),
        E.push(o.mask),
        o.disableAll(),
        x.fog && o.enable(0),
        x.useFog && o.enable(1),
        x.flatShading && o.enable(2),
        x.logarithmicDepthBuffer && o.enable(3),
        x.skinning && o.enable(4),
        x.morphTargets && o.enable(5),
        x.morphNormals && o.enable(6),
        x.morphColors && o.enable(7),
        x.premultipliedAlpha && o.enable(8),
        x.shadowMapEnabled && o.enable(9),
        x.useLegacyLights && o.enable(10),
        x.doubleSided && o.enable(11),
        x.flipSided && o.enable(12),
        x.useDepthPacking && o.enable(13),
        x.dithering && o.enable(14),
        x.transmission && o.enable(15),
        x.sheen && o.enable(16),
        x.opaque && o.enable(17),
        x.pointsUvs && o.enable(18),
        x.decodeVideoTexture && o.enable(19),
        x.alphaToCoverage && o.enable(20),
        E.push(o.mask)
    }
    function S(E) {
        const x = g[E.type];
        let U;
        if (x) {
            const G = Jt[x];
            U = Mu.clone(G.uniforms)
        } else
            U = E.uniforms;
        return U
    }
    function D(E, x) {
        let U;
        for (let G = 0, P = h.length; G < P; G++) {
            const H = h[G];
            if (H.cacheKey === x) {
                U = H,
                ++U.usedTimes;
                break
            }
        }
        return U === void 0 && (U = new Dm(i,x,E,s),
        h.push(U)),
        U
    }
    function b(E) {
        if (--E.usedTimes === 0) {
            const x = h.indexOf(E);
            h[x] = h[h.length - 1],
            h.pop(),
            E.destroy()
        }
    }
    function w(E) {
        l.remove(E)
    }
    function B() {
        l.dispose()
    }
    return {
        getParameters: p,
        getProgramCacheKey: m,
        getUniforms: S,
        acquireProgram: D,
        releaseProgram: b,
        releaseShaderCache: w,
        programs: h,
        dispose: B
    }
}
function Bm() {
    let i = new WeakMap;
    function e(s) {
        let a = i.get(s);
        return a === void 0 && (a = {},
        i.set(s, a)),
        a
    }
    function t(s) {
        i.delete(s)
    }
    function n(s, a, o) {
        i.get(s)[a] = o
    }
    function r() {
        i = new WeakMap
    }
    return {
        get: e,
        remove: t,
        update: n,
        dispose: r
    }
}
function zm(i, e) {
    return i.groupOrder !== e.groupOrder ? i.groupOrder - e.groupOrder : i.renderOrder !== e.renderOrder ? i.renderOrder - e.renderOrder : i.material.id !== e.material.id ? i.material.id - e.material.id : i.z !== e.z ? i.z - e.z : i.id - e.id
}
function ml(i, e) {
    return i.groupOrder !== e.groupOrder ? i.groupOrder - e.groupOrder : i.renderOrder !== e.renderOrder ? i.renderOrder - e.renderOrder : i.z !== e.z ? e.z - i.z : i.id - e.id
}
function gl() {
    const i = [];
    let e = 0;
    const t = []
      , n = []
      , r = [];
    function s() {
        e = 0,
        t.length = 0,
        n.length = 0,
        r.length = 0
    }
    function a(u, f, d, g, _, p) {
        let m = i[e];
        return m === void 0 ? (m = {
            id: u.id,
            object: u,
            geometry: f,
            material: d,
            groupOrder: g,
            renderOrder: u.renderOrder,
            z: _,
            group: p
        },
        i[e] = m) : (m.id = u.id,
        m.object = u,
        m.geometry = f,
        m.material = d,
        m.groupOrder = g,
        m.renderOrder = u.renderOrder,
        m.z = _,
        m.group = p),
        e++,
        m
    }
    function o(u, f, d, g, _, p) {
        const m = a(u, f, d, g, _, p);
        d.transmission > 0 ? n.push(m) : d.transparent === !0 ? r.push(m) : t.push(m)
    }
    function l(u, f, d, g, _, p) {
        const m = a(u, f, d, g, _, p);
        d.transmission > 0 ? n.unshift(m) : d.transparent === !0 ? r.unshift(m) : t.unshift(m)
    }
    function c(u, f) {
        t.length > 1 && t.sort(u || zm),
        n.length > 1 && n.sort(f || ml),
        r.length > 1 && r.sort(f || ml)
    }
    function h() {
        for (let u = e, f = i.length; u < f; u++) {
            const d = i[u];
            if (d.id === null)
                break;
            d.id = null,
            d.object = null,
            d.geometry = null,
            d.material = null,
            d.group = null
        }
    }
    return {
        opaque: t,
        transmissive: n,
        transparent: r,
        init: s,
        push: o,
        unshift: l,
        finish: h,
        sort: c
    }
}
function Vm() {
    let i = new WeakMap;
    function e(n, r) {
        const s = i.get(n);
        let a;
        return s === void 0 ? (a = new gl,
        i.set(n, [a])) : r >= s.length ? (a = new gl,
        s.push(a)) : a = s[r],
        a
    }
    function t() {
        i = new WeakMap
    }
    return {
        get: e,
        dispose: t
    }
}
function km() {
    const i = {};
    return {
        get: function(e) {
            if (i[e.id] !== void 0)
                return i[e.id];
            let t;
            switch (e.type) {
            case "DirectionalLight":
                t = {
                    direction: new R,
                    color: new ve
                };
                break;
            case "SpotLight":
                t = {
                    position: new R,
                    direction: new R,
                    color: new ve,
                    distance: 0,
                    coneCos: 0,
                    penumbraCos: 0,
                    decay: 0
                };
                break;
            case "PointLight":
                t = {
                    position: new R,
                    color: new ve,
                    distance: 0,
                    decay: 0
                };
                break;
            case "HemisphereLight":
                t = {
                    direction: new R,
                    skyColor: new ve,
                    groundColor: new ve
                };
                break;
            case "RectAreaLight":
                t = {
                    color: new ve,
                    position: new R,
                    halfWidth: new R,
                    halfHeight: new R
                };
                break
            }
            return i[e.id] = t,
            t
        }
    }
}
function Hm() {
    const i = {};
    return {
        get: function(e) {
            if (i[e.id] !== void 0)
                return i[e.id];
            let t;
            switch (e.type) {
            case "DirectionalLight":
                t = {
                    shadowBias: 0,
                    shadowNormalBias: 0,
                    shadowRadius: 1,
                    shadowMapSize: new Ie
                };
                break;
            case "SpotLight":
                t = {
                    shadowBias: 0,
                    shadowNormalBias: 0,
                    shadowRadius: 1,
                    shadowMapSize: new Ie
                };
                break;
            case "PointLight":
                t = {
                    shadowBias: 0,
                    shadowNormalBias: 0,
                    shadowRadius: 1,
                    shadowMapSize: new Ie,
                    shadowCameraNear: 1,
                    shadowCameraFar: 1e3
                };
                break
            }
            return i[e.id] = t,
            t
        }
    }
}
let Gm = 0;
function Wm(i, e) {
    return (e.castShadow ? 2 : 0) - (i.castShadow ? 2 : 0) + (e.map ? 1 : 0) - (i.map ? 1 : 0)
}
function Xm(i) {
    const e = new km
      , t = Hm()
      , n = {
        version: 0,
        hash: {
            directionalLength: -1,
            pointLength: -1,
            spotLength: -1,
            rectAreaLength: -1,
            hemiLength: -1,
            numDirectionalShadows: -1,
            numPointShadows: -1,
            numSpotShadows: -1,
            numSpotMaps: -1,
            numLightProbes: -1
        },
        ambient: [0, 0, 0],
        probe: [],
        directional: [],
        directionalShadow: [],
        directionalShadowMap: [],
        directionalShadowMatrix: [],
        spot: [],
        spotLightMap: [],
        spotShadow: [],
        spotShadowMap: [],
        spotLightMatrix: [],
        rectArea: [],
        rectAreaLTC1: null,
        rectAreaLTC2: null,
        point: [],
        pointShadow: [],
        pointShadowMap: [],
        pointShadowMatrix: [],
        hemi: [],
        numSpotLightShadowsWithMaps: 0,
        numLightProbes: 0
    };
    for (let c = 0; c < 9; c++)
        n.probe.push(new R);
    const r = new R
      , s = new pe
      , a = new pe;
    function o(c, h) {
        let u = 0
          , f = 0
          , d = 0;
        for (let U = 0; U < 9; U++)
            n.probe[U].set(0, 0, 0);
        let g = 0
          , _ = 0
          , p = 0
          , m = 0
          , T = 0
          , v = 0
          , S = 0
          , D = 0
          , b = 0
          , w = 0
          , B = 0;
        c.sort(Wm);
        const E = h === !0 ? Math.PI : 1;
        for (let U = 0, G = c.length; U < G; U++) {
            const P = c[U]
              , H = P.color
              , q = P.intensity
              , K = P.distance
              , ne = P.shadow && P.shadow.map ? P.shadow.map.texture : null;
            if (P.isAmbientLight)
                u += H.r * q * E,
                f += H.g * q * E,
                d += H.b * q * E;
            else if (P.isLightProbe) {
                for (let z = 0; z < 9; z++)
                    n.probe[z].addScaledVector(P.sh.coefficients[z], q);
                B++
            } else if (P.isDirectionalLight) {
                const z = e.get(P);
                if (z.color.copy(P.color).multiplyScalar(P.intensity * E),
                P.castShadow) {
                    const j = P.shadow
                      , Q = t.get(P);
                    Q.shadowBias = j.bias,
                    Q.shadowNormalBias = j.normalBias,
                    Q.shadowRadius = j.radius,
                    Q.shadowMapSize = j.mapSize,
                    n.directionalShadow[g] = Q,
                    n.directionalShadowMap[g] = ne,
                    n.directionalShadowMatrix[g] = P.shadow.matrix,
                    v++
                }
                n.directional[g] = z,
                g++
            } else if (P.isSpotLight) {
                const z = e.get(P);
                z.position.setFromMatrixPosition(P.matrixWorld),
                z.color.copy(H).multiplyScalar(q * E),
                z.distance = K,
                z.coneCos = Math.cos(P.angle),
                z.penumbraCos = Math.cos(P.angle * (1 - P.penumbra)),
                z.decay = P.decay,
                n.spot[p] = z;
                const j = P.shadow;
                if (P.map && (n.spotLightMap[b] = P.map,
                b++,
                j.updateMatrices(P),
                P.castShadow && w++),
                n.spotLightMatrix[p] = j.matrix,
                P.castShadow) {
                    const Q = t.get(P);
                    Q.shadowBias = j.bias,
                    Q.shadowNormalBias = j.normalBias,
                    Q.shadowRadius = j.radius,
                    Q.shadowMapSize = j.mapSize,
                    n.spotShadow[p] = Q,
                    n.spotShadowMap[p] = ne,
                    D++
                }
                p++
            } else if (P.isRectAreaLight) {
                const z = e.get(P);
                z.color.copy(H).multiplyScalar(q),
                z.halfWidth.set(P.width * .5, 0, 0),
                z.halfHeight.set(0, P.height * .5, 0),
                n.rectArea[m] = z,
                m++
            } else if (P.isPointLight) {
                const z = e.get(P);
                if (z.color.copy(P.color).multiplyScalar(P.intensity * E),
                z.distance = P.distance,
                z.decay = P.decay,
                P.castShadow) {
                    const j = P.shadow
                      , Q = t.get(P);
                    Q.shadowBias = j.bias,
                    Q.shadowNormalBias = j.normalBias,
                    Q.shadowRadius = j.radius,
                    Q.shadowMapSize = j.mapSize,
                    Q.shadowCameraNear = j.camera.near,
                    Q.shadowCameraFar = j.camera.far,
                    n.pointShadow[_] = Q,
                    n.pointShadowMap[_] = ne,
                    n.pointShadowMatrix[_] = P.shadow.matrix,
                    S++
                }
                n.point[_] = z,
                _++
            } else if (P.isHemisphereLight) {
                const z = e.get(P);
                z.skyColor.copy(P.color).multiplyScalar(q * E),
                z.groundColor.copy(P.groundColor).multiplyScalar(q * E),
                n.hemi[T] = z,
                T++
            }
        }
        m > 0 && (i.has("OES_texture_float_linear") === !0 ? (n.rectAreaLTC1 = ie.LTC_FLOAT_1,
        n.rectAreaLTC2 = ie.LTC_FLOAT_2) : (n.rectAreaLTC1 = ie.LTC_HALF_1,
        n.rectAreaLTC2 = ie.LTC_HALF_2)),
        n.ambient[0] = u,
        n.ambient[1] = f,
        n.ambient[2] = d;
        const x = n.hash;
        (x.directionalLength !== g || x.pointLength !== _ || x.spotLength !== p || x.rectAreaLength !== m || x.hemiLength !== T || x.numDirectionalShadows !== v || x.numPointShadows !== S || x.numSpotShadows !== D || x.numSpotMaps !== b || x.numLightProbes !== B) && (n.directional.length = g,
        n.spot.length = p,
        n.rectArea.length = m,
        n.point.length = _,
        n.hemi.length = T,
        n.directionalShadow.length = v,
        n.directionalShadowMap.length = v,
        n.pointShadow.length = S,
        n.pointShadowMap.length = S,
        n.spotShadow.length = D,
        n.spotShadowMap.length = D,
        n.directionalShadowMatrix.length = v,
        n.pointShadowMatrix.length = S,
        n.spotLightMatrix.length = D + b - w,
        n.spotLightMap.length = b,
        n.numSpotLightShadowsWithMaps = w,
        n.numLightProbes = B,
        x.directionalLength = g,
        x.pointLength = _,
        x.spotLength = p,
        x.rectAreaLength = m,
        x.hemiLength = T,
        x.numDirectionalShadows = v,
        x.numPointShadows = S,
        x.numSpotShadows = D,
        x.numSpotMaps = b,
        x.numLightProbes = B,
        n.version = Gm++)
    }
    function l(c, h) {
        let u = 0
          , f = 0
          , d = 0
          , g = 0
          , _ = 0;
        const p = h.matrixWorldInverse;
        for (let m = 0, T = c.length; m < T; m++) {
            const v = c[m];
            if (v.isDirectionalLight) {
                const S = n.directional[u];
                S.direction.setFromMatrixPosition(v.matrixWorld),
                r.setFromMatrixPosition(v.target.matrixWorld),
                S.direction.sub(r),
                S.direction.transformDirection(p),
                u++
            } else if (v.isSpotLight) {
                const S = n.spot[d];
                S.position.setFromMatrixPosition(v.matrixWorld),
                S.position.applyMatrix4(p),
                S.direction.setFromMatrixPosition(v.matrixWorld),
                r.setFromMatrixPosition(v.target.matrixWorld),
                S.direction.sub(r),
                S.direction.transformDirection(p),
                d++
            } else if (v.isRectAreaLight) {
                const S = n.rectArea[g];
                S.position.setFromMatrixPosition(v.matrixWorld),
                S.position.applyMatrix4(p),
                a.identity(),
                s.copy(v.matrixWorld),
                s.premultiply(p),
                a.extractRotation(s),
                S.halfWidth.set(v.width * .5, 0, 0),
                S.halfHeight.set(0, v.height * .5, 0),
                S.halfWidth.applyMatrix4(a),
                S.halfHeight.applyMatrix4(a),
                g++
            } else if (v.isPointLight) {
                const S = n.point[f];
                S.position.setFromMatrixPosition(v.matrixWorld),
                S.position.applyMatrix4(p),
                f++
            } else if (v.isHemisphereLight) {
                const S = n.hemi[_];
                S.direction.setFromMatrixPosition(v.matrixWorld),
                S.direction.transformDirection(p),
                _++
            }
        }
    }
    return {
        setup: o,
        setupView: l,
        state: n
    }
}
function _l(i) {
    const e = new Xm(i)
      , t = []
      , n = [];
    function r(h) {
        c.camera = h,
        t.length = 0,
        n.length = 0
    }
    function s(h) {
        t.push(h)
    }
    function a(h) {
        n.push(h)
    }
    function o(h) {
        e.setup(t, h)
    }
    function l(h) {
        e.setupView(t, h)
    }
    const c = {
        lightsArray: t,
        shadowsArray: n,
        camera: null,
        lights: e,
        transmissionRenderTarget: {}
    };
    return {
        init: r,
        state: c,
        setupLights: o,
        setupLightsView: l,
        pushLight: s,
        pushShadow: a
    }
}
function qm(i) {
    let e = new WeakMap;
    function t(r, s=0) {
        const a = e.get(r);
        let o;
        return a === void 0 ? (o = new _l(i),
        e.set(r, [o])) : s >= a.length ? (o = new _l(i),
        a.push(o)) : o = a[s],
        o
    }
    function n() {
        e = new WeakMap
    }
    return {
        get: t,
        dispose: n
    }
}
class Ym extends zn {
    constructor(e) {
        super(),
        this.isMeshDepthMaterial = !0,
        this.type = "MeshDepthMaterial",
        this.depthPacking = Ch,
        this.map = null,
        this.alphaMap = null,
        this.displacementMap = null,
        this.displacementScale = 1,
        this.displacementBias = 0,
        this.wireframe = !1,
        this.wireframeLinewidth = 1,
        this.setValues(e)
    }
    copy(e) {
        return super.copy(e),
        this.depthPacking = e.depthPacking,
        this.map = e.map,
        this.alphaMap = e.alphaMap,
        this.displacementMap = e.displacementMap,
        this.displacementScale = e.displacementScale,
        this.displacementBias = e.displacementBias,
        this.wireframe = e.wireframe,
        this.wireframeLinewidth = e.wireframeLinewidth,
        this
    }
}
class Km extends zn {
    constructor(e) {
        super(),
        this.isMeshDistanceMaterial = !0,
        this.type = "MeshDistanceMaterial",
        this.map = null,
        this.alphaMap = null,
        this.displacementMap = null,
        this.displacementScale = 1,
        this.displacementBias = 0,
        this.setValues(e)
    }
    copy(e) {
        return super.copy(e),
        this.map = e.map,
        this.alphaMap = e.alphaMap,
        this.displacementMap = e.displacementMap,
        this.displacementScale = e.displacementScale,
        this.displacementBias = e.displacementBias,
        this
    }
}
const Zm = `void main() {
	gl_Position = vec4( position, 1.0 );
}`
  , $m = `uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;
function jm(i, e, t) {
    let n = new ya;
    const r = new Ie
      , s = new Ie
      , a = new We
      , o = new Ym({
        depthPacking: Ph
    })
      , l = new Km
      , c = {}
      , h = t.maxTextureSize
      , u = {
        [Un]: It,
        [It]: Un,
        [_n]: _n
    }
      , f = new Fn({
        defines: {
            VSM_SAMPLES: 8
        },
        uniforms: {
            shadow_pass: {
                value: null
            },
            resolution: {
                value: new Ie
            },
            radius: {
                value: 4
            }
        },
        vertexShader: Zm,
        fragmentShader: $m
    })
      , d = f.clone();
    d.defines.HORIZONTAL_PASS = 1;
    const g = new Vt;
    g.setAttribute("position", new en(new Float32Array([-1, -1, .5, 3, -1, .5, -1, 3, .5]),3));
    const _ = new zt(g,f)
      , p = this;
    this.enabled = !1,
    this.autoUpdate = !0,
    this.needsUpdate = !1,
    this.type = Ol;
    let m = this.type;
    this.render = function(b, w, B) {
        if (p.enabled === !1 || p.autoUpdate === !1 && p.needsUpdate === !1 || b.length === 0)
            return;
        const E = i.getRenderTarget()
          , x = i.getActiveCubeFace()
          , U = i.getActiveMipmapLevel()
          , G = i.state;
        G.setBlending(In),
        G.buffers.color.setClear(1, 1, 1, 1),
        G.buffers.depth.setTest(!0),
        G.setScissorTest(!1);
        const P = m !== gn && this.type === gn
          , H = m === gn && this.type !== gn;
        for (let q = 0, K = b.length; q < K; q++) {
            const ne = b[q]
              , z = ne.shadow;
            if (z === void 0) {
                console.warn("THREE.WebGLShadowMap:", ne, "has no shadow.");
                continue
            }
            if (z.autoUpdate === !1 && z.needsUpdate === !1)
                continue;
            r.copy(z.mapSize);
            const j = z.getFrameExtents();
            if (r.multiply(j),
            s.copy(z.mapSize),
            (r.x > h || r.y > h) && (r.x > h && (s.x = Math.floor(h / j.x),
            r.x = s.x * j.x,
            z.mapSize.x = s.x),
            r.y > h && (s.y = Math.floor(h / j.y),
            r.y = s.y * j.y,
            z.mapSize.y = s.y)),
            z.map === null || P === !0 || H === !0) {
                const fe = this.type !== gn ? {
                    minFilter: Lt,
                    magFilter: Lt
                } : {};
                z.map !== null && z.map.dispose(),
                z.map = new Qn(r.x,r.y,fe),
                z.map.texture.name = ne.name + ".shadowMap",
                z.camera.updateProjectionMatrix()
            }
            i.setRenderTarget(z.map),
            i.clear();
            const Q = z.getViewportCount();
            for (let fe = 0; fe < Q; fe++) {
                const we = z.getViewport(fe);
                a.set(s.x * we.x, s.y * we.y, s.x * we.z, s.y * we.w),
                G.viewport(a),
                z.updateMatrices(ne, fe),
                n = z.getFrustum(),
                S(w, B, z.camera, ne, this.type)
            }
            z.isPointLightShadow !== !0 && this.type === gn && T(z, B),
            z.needsUpdate = !1
        }
        m = this.type,
        p.needsUpdate = !1,
        i.setRenderTarget(E, x, U)
    }
    ;
    function T(b, w) {
        const B = e.update(_);
        f.defines.VSM_SAMPLES !== b.blurSamples && (f.defines.VSM_SAMPLES = b.blurSamples,
        d.defines.VSM_SAMPLES = b.blurSamples,
        f.needsUpdate = !0,
        d.needsUpdate = !0),
        b.mapPass === null && (b.mapPass = new Qn(r.x,r.y)),
        f.uniforms.shadow_pass.value = b.map.texture,
        f.uniforms.resolution.value = b.mapSize,
        f.uniforms.radius.value = b.radius,
        i.setRenderTarget(b.mapPass),
        i.clear(),
        i.renderBufferDirect(w, null, B, f, _, null),
        d.uniforms.shadow_pass.value = b.mapPass.texture,
        d.uniforms.resolution.value = b.mapSize,
        d.uniforms.radius.value = b.radius,
        i.setRenderTarget(b.map),
        i.clear(),
        i.renderBufferDirect(w, null, B, d, _, null)
    }
    function v(b, w, B, E) {
        let x = null;
        const U = B.isPointLight === !0 ? b.customDistanceMaterial : b.customDepthMaterial;
        if (U !== void 0)
            x = U;
        else if (x = B.isPointLight === !0 ? l : o,
        i.localClippingEnabled && w.clipShadows === !0 && Array.isArray(w.clippingPlanes) && w.clippingPlanes.length !== 0 || w.displacementMap && w.displacementScale !== 0 || w.alphaMap && w.alphaTest > 0 || w.map && w.alphaTest > 0) {
            const G = x.uuid
              , P = w.uuid;
            let H = c[G];
            H === void 0 && (H = {},
            c[G] = H);
            let q = H[P];
            q === void 0 && (q = x.clone(),
            H[P] = q,
            w.addEventListener("dispose", D)),
            x = q
        }
        if (x.visible = w.visible,
        x.wireframe = w.wireframe,
        E === gn ? x.side = w.shadowSide !== null ? w.shadowSide : w.side : x.side = w.shadowSide !== null ? w.shadowSide : u[w.side],
        x.alphaMap = w.alphaMap,
        x.alphaTest = w.alphaTest,
        x.map = w.map,
        x.clipShadows = w.clipShadows,
        x.clippingPlanes = w.clippingPlanes,
        x.clipIntersection = w.clipIntersection,
        x.displacementMap = w.displacementMap,
        x.displacementScale = w.displacementScale,
        x.displacementBias = w.displacementBias,
        x.wireframeLinewidth = w.wireframeLinewidth,
        x.linewidth = w.linewidth,
        B.isPointLight === !0 && x.isMeshDistanceMaterial === !0) {
            const G = i.properties.get(x);
            G.light = B
        }
        return x
    }
    function S(b, w, B, E, x) {
        if (b.visible === !1)
            return;
        if (b.layers.test(w.layers) && (b.isMesh || b.isLine || b.isPoints) && (b.castShadow || b.receiveShadow && x === gn) && (!b.frustumCulled || n.intersectsObject(b))) {
            b.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse, b.matrixWorld);
            const P = e.update(b)
              , H = b.material;
            if (Array.isArray(H)) {
                const q = P.groups;
                for (let K = 0, ne = q.length; K < ne; K++) {
                    const z = q[K]
                      , j = H[z.materialIndex];
                    if (j && j.visible) {
                        const Q = v(b, j, E, x);
                        b.onBeforeShadow(i, b, w, B, P, Q, z),
                        i.renderBufferDirect(B, null, P, Q, b, z),
                        b.onAfterShadow(i, b, w, B, P, Q, z)
                    }
                }
            } else if (H.visible) {
                const q = v(b, H, E, x);
                b.onBeforeShadow(i, b, w, B, P, q, null),
                i.renderBufferDirect(B, null, P, q, b, null),
                b.onAfterShadow(i, b, w, B, P, q, null)
            }
        }
        const G = b.children;
        for (let P = 0, H = G.length; P < H; P++)
            S(G[P], w, B, E, x)
    }
    function D(b) {
        b.target.removeEventListener("dispose", D);
        for (const B in c) {
            const E = c[B]
              , x = b.target.uuid;
            x in E && (E[x].dispose(),
            delete E[x])
        }
    }
}
function Jm(i) {
    function e() {
        let C = !1;
        const Y = new We;
        let W = null;
        const re = new We(0,0,0,0);
        return {
            setMask: function(le) {
                W !== le && !C && (i.colorMask(le, le, le, le),
                W = le)
            },
            setLocked: function(le) {
                C = le
            },
            setClear: function(le, He, $e, rt, _t) {
                _t === !0 && (le *= rt,
                He *= rt,
                $e *= rt),
                Y.set(le, He, $e, rt),
                re.equals(Y) === !1 && (i.clearColor(le, He, $e, rt),
                re.copy(Y))
            },
            reset: function() {
                C = !1,
                W = null,
                re.set(-1, 0, 0, 0)
            }
        }
    }
    function t() {
        let C = !1
          , Y = null
          , W = null
          , re = null;
        return {
            setTest: function(le) {
                le ? ce(i.DEPTH_TEST) : te(i.DEPTH_TEST)
            },
            setMask: function(le) {
                Y !== le && !C && (i.depthMask(le),
                Y = le)
            },
            setFunc: function(le) {
                if (W !== le) {
                    switch (le) {
                    case eh:
                        i.depthFunc(i.NEVER);
                        break;
                    case th:
                        i.depthFunc(i.ALWAYS);
                        break;
                    case nh:
                        i.depthFunc(i.LESS);
                        break;
                    case qr:
                        i.depthFunc(i.LEQUAL);
                        break;
                    case ih:
                        i.depthFunc(i.EQUAL);
                        break;
                    case rh:
                        i.depthFunc(i.GEQUAL);
                        break;
                    case sh:
                        i.depthFunc(i.GREATER);
                        break;
                    case ah:
                        i.depthFunc(i.NOTEQUAL);
                        break;
                    default:
                        i.depthFunc(i.LEQUAL)
                    }
                    W = le
                }
            },
            setLocked: function(le) {
                C = le
            },
            setClear: function(le) {
                re !== le && (i.clearDepth(le),
                re = le)
            },
            reset: function() {
                C = !1,
                Y = null,
                W = null,
                re = null
            }
        }
    }
    function n() {
        let C = !1
          , Y = null
          , W = null
          , re = null
          , le = null
          , He = null
          , $e = null
          , rt = null
          , _t = null;
        return {
            setTest: function(Ye) {
                C || (Ye ? ce(i.STENCIL_TEST) : te(i.STENCIL_TEST))
            },
            setMask: function(Ye) {
                Y !== Ye && !C && (i.stencilMask(Ye),
                Y = Ye)
            },
            setFunc: function(Ye, jt, St) {
                (W !== Ye || re !== jt || le !== St) && (i.stencilFunc(Ye, jt, St),
                W = Ye,
                re = jt,
                le = St)
            },
            setOp: function(Ye, jt, St) {
                (He !== Ye || $e !== jt || rt !== St) && (i.stencilOp(Ye, jt, St),
                He = Ye,
                $e = jt,
                rt = St)
            },
            setLocked: function(Ye) {
                C = Ye
            },
            setClear: function(Ye) {
                _t !== Ye && (i.clearStencil(Ye),
                _t = Ye)
            },
            reset: function() {
                C = !1,
                Y = null,
                W = null,
                re = null,
                le = null,
                He = null,
                $e = null,
                rt = null,
                _t = null
            }
        }
    }
    const r = new e
      , s = new t
      , a = new n
      , o = new WeakMap
      , l = new WeakMap;
    let c = {}
      , h = {}
      , u = new WeakMap
      , f = []
      , d = null
      , g = !1
      , _ = null
      , p = null
      , m = null
      , T = null
      , v = null
      , S = null
      , D = null
      , b = new ve(0,0,0)
      , w = 0
      , B = !1
      , E = null
      , x = null
      , U = null
      , G = null
      , P = null;
    const H = i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);
    let q = !1
      , K = 0;
    const ne = i.getParameter(i.VERSION);
    ne.indexOf("WebGL") !== -1 ? (K = parseFloat(/^WebGL (\d)/.exec(ne)[1]),
    q = K >= 1) : ne.indexOf("OpenGL ES") !== -1 && (K = parseFloat(/^OpenGL ES (\d)/.exec(ne)[1]),
    q = K >= 2);
    let z = null
      , j = {};
    const Q = i.getParameter(i.SCISSOR_BOX)
      , fe = i.getParameter(i.VIEWPORT)
      , we = new We().fromArray(Q)
      , Ve = new We().fromArray(fe);
    function k(C, Y, W, re) {
        const le = new Uint8Array(4)
          , He = i.createTexture();
        i.bindTexture(C, He),
        i.texParameteri(C, i.TEXTURE_MIN_FILTER, i.NEAREST),
        i.texParameteri(C, i.TEXTURE_MAG_FILTER, i.NEAREST);
        for (let $e = 0; $e < W; $e++)
            C === i.TEXTURE_3D || C === i.TEXTURE_2D_ARRAY ? i.texImage3D(Y, 0, i.RGBA, 1, 1, re, 0, i.RGBA, i.UNSIGNED_BYTE, le) : i.texImage2D(Y + $e, 0, i.RGBA, 1, 1, 0, i.RGBA, i.UNSIGNED_BYTE, le);
        return He
    }
    const J = {};
    J[i.TEXTURE_2D] = k(i.TEXTURE_2D, i.TEXTURE_2D, 1),
    J[i.TEXTURE_CUBE_MAP] = k(i.TEXTURE_CUBE_MAP, i.TEXTURE_CUBE_MAP_POSITIVE_X, 6),
    J[i.TEXTURE_2D_ARRAY] = k(i.TEXTURE_2D_ARRAY, i.TEXTURE_2D_ARRAY, 1, 1),
    J[i.TEXTURE_3D] = k(i.TEXTURE_3D, i.TEXTURE_3D, 1, 1),
    r.setClear(0, 0, 0, 1),
    s.setClear(1),
    a.setClear(0),
    ce(i.DEPTH_TEST),
    s.setFunc(qr),
    Be(!1),
    Ne(qa),
    ce(i.CULL_FACE),
    qe(In);
    function ce(C) {
        c[C] !== !0 && (i.enable(C),
        c[C] = !0)
    }
    function te(C) {
        c[C] !== !1 && (i.disable(C),
        c[C] = !1)
    }
    function De(C, Y) {
        return h[C] !== Y ? (i.bindFramebuffer(C, Y),
        h[C] = Y,
        C === i.DRAW_FRAMEBUFFER && (h[i.FRAMEBUFFER] = Y),
        C === i.FRAMEBUFFER && (h[i.DRAW_FRAMEBUFFER] = Y),
        !0) : !1
    }
    function Ue(C, Y) {
        let W = f
          , re = !1;
        if (C) {
            W = u.get(Y),
            W === void 0 && (W = [],
            u.set(Y, W));
            const le = C.textures;
            if (W.length !== le.length || W[0] !== i.COLOR_ATTACHMENT0) {
                for (let He = 0, $e = le.length; He < $e; He++)
                    W[He] = i.COLOR_ATTACHMENT0 + He;
                W.length = le.length,
                re = !0
            }
        } else
            W[0] !== i.BACK && (W[0] = i.BACK,
            re = !0);
        re && i.drawBuffers(W)
    }
    function I(C) {
        return d !== C ? (i.useProgram(C),
        d = C,
        !0) : !1
    }
    const Ke = {
        [$n]: i.FUNC_ADD,
        [Oc]: i.FUNC_SUBTRACT,
        [Bc]: i.FUNC_REVERSE_SUBTRACT
    };
    Ke[zc] = i.MIN,
    Ke[Vc] = i.MAX;
    const ge = {
        [kc]: i.ZERO,
        [Hc]: i.ONE,
        [Gc]: i.SRC_COLOR,
        [aa]: i.SRC_ALPHA,
        [Zc]: i.SRC_ALPHA_SATURATE,
        [Yc]: i.DST_COLOR,
        [Xc]: i.DST_ALPHA,
        [Wc]: i.ONE_MINUS_SRC_COLOR,
        [oa]: i.ONE_MINUS_SRC_ALPHA,
        [Kc]: i.ONE_MINUS_DST_COLOR,
        [qc]: i.ONE_MINUS_DST_ALPHA,
        [$c]: i.CONSTANT_COLOR,
        [jc]: i.ONE_MINUS_CONSTANT_COLOR,
        [Jc]: i.CONSTANT_ALPHA,
        [Qc]: i.ONE_MINUS_CONSTANT_ALPHA
    };
    function qe(C, Y, W, re, le, He, $e, rt, _t, Ye) {
        if (C === In) {
            g === !0 && (te(i.BLEND),
            g = !1);
            return
        }
        if (g === !1 && (ce(i.BLEND),
        g = !0),
        C !== Fc) {
            if (C !== _ || Ye !== B) {
                if ((p !== $n || v !== $n) && (i.blendEquation(i.FUNC_ADD),
                p = $n,
                v = $n),
                Ye)
                    switch (C) {
                    case wi:
                        i.blendFuncSeparate(i.ONE, i.ONE_MINUS_SRC_ALPHA, i.ONE, i.ONE_MINUS_SRC_ALPHA);
                        break;
                    case Ya:
                        i.blendFunc(i.ONE, i.ONE);
                        break;
                    case Ka:
                        i.blendFuncSeparate(i.ZERO, i.ONE_MINUS_SRC_COLOR, i.ZERO, i.ONE);
                        break;
                    case Za:
                        i.blendFuncSeparate(i.ZERO, i.SRC_COLOR, i.ZERO, i.SRC_ALPHA);
                        break;
                    default:
                        console.error("THREE.WebGLState: Invalid blending: ", C);
                        break
                    }
                else
                    switch (C) {
                    case wi:
                        i.blendFuncSeparate(i.SRC_ALPHA, i.ONE_MINUS_SRC_ALPHA, i.ONE, i.ONE_MINUS_SRC_ALPHA);
                        break;
                    case Ya:
                        i.blendFunc(i.SRC_ALPHA, i.ONE);
                        break;
                    case Ka:
                        i.blendFuncSeparate(i.ZERO, i.ONE_MINUS_SRC_COLOR, i.ZERO, i.ONE);
                        break;
                    case Za:
                        i.blendFunc(i.ZERO, i.SRC_COLOR);
                        break;
                    default:
                        console.error("THREE.WebGLState: Invalid blending: ", C);
                        break
                    }
                m = null,
                T = null,
                S = null,
                D = null,
                b.set(0, 0, 0),
                w = 0,
                _ = C,
                B = Ye
            }
            return
        }
        le = le || Y,
        He = He || W,
        $e = $e || re,
        (Y !== p || le !== v) && (i.blendEquationSeparate(Ke[Y], Ke[le]),
        p = Y,
        v = le),
        (W !== m || re !== T || He !== S || $e !== D) && (i.blendFuncSeparate(ge[W], ge[re], ge[He], ge[$e]),
        m = W,
        T = re,
        S = He,
        D = $e),
        (rt.equals(b) === !1 || _t !== w) && (i.blendColor(rt.r, rt.g, rt.b, _t),
        b.copy(rt),
        w = _t),
        _ = C,
        B = !1
    }
    function ye(C, Y) {
        C.side === _n ? te(i.CULL_FACE) : ce(i.CULL_FACE);
        let W = C.side === It;
        Y && (W = !W),
        Be(W),
        C.blending === wi && C.transparent === !1 ? qe(In) : qe(C.blending, C.blendEquation, C.blendSrc, C.blendDst, C.blendEquationAlpha, C.blendSrcAlpha, C.blendDstAlpha, C.blendColor, C.blendAlpha, C.premultipliedAlpha),
        s.setFunc(C.depthFunc),
        s.setTest(C.depthTest),
        s.setMask(C.depthWrite),
        r.setMask(C.colorWrite);
        const re = C.stencilWrite;
        a.setTest(re),
        re && (a.setMask(C.stencilWriteMask),
        a.setFunc(C.stencilFunc, C.stencilRef, C.stencilFuncMask),
        a.setOp(C.stencilFail, C.stencilZFail, C.stencilZPass)),
        it(C.polygonOffset, C.polygonOffsetFactor, C.polygonOffsetUnits),
        C.alphaToCoverage === !0 ? ce(i.SAMPLE_ALPHA_TO_COVERAGE) : te(i.SAMPLE_ALPHA_TO_COVERAGE)
    }
    function Be(C) {
        E !== C && (C ? i.frontFace(i.CW) : i.frontFace(i.CCW),
        E = C)
    }
    function Ne(C) {
        C !== Dc ? (ce(i.CULL_FACE),
        C !== x && (C === qa ? i.cullFace(i.BACK) : C === Uc ? i.cullFace(i.FRONT) : i.cullFace(i.FRONT_AND_BACK))) : te(i.CULL_FACE),
        x = C
    }
    function ze(C) {
        C !== U && (q && i.lineWidth(C),
        U = C)
    }
    function it(C, Y, W) {
        C ? (ce(i.POLYGON_OFFSET_FILL),
        (G !== Y || P !== W) && (i.polygonOffset(Y, W),
        G = Y,
        P = W)) : te(i.POLYGON_OFFSET_FILL)
    }
    function A(C) {
        C ? ce(i.SCISSOR_TEST) : te(i.SCISSOR_TEST)
    }
    function M(C) {
        C === void 0 && (C = i.TEXTURE0 + H - 1),
        z !== C && (i.activeTexture(C),
        z = C)
    }
    function V(C, Y, W) {
        W === void 0 && (z === null ? W = i.TEXTURE0 + H - 1 : W = z);
        let re = j[W];
        re === void 0 && (re = {
            type: void 0,
            texture: void 0
        },
        j[W] = re),
        (re.type !== C || re.texture !== Y) && (z !== W && (i.activeTexture(W),
        z = W),
        i.bindTexture(C, Y || J[C]),
        re.type = C,
        re.texture = Y)
    }
    function X() {
        const C = j[z];
        C !== void 0 && C.type !== void 0 && (i.bindTexture(C.type, null),
        C.type = void 0,
        C.texture = void 0)
    }
    function Z() {
        try {
            i.compressedTexImage2D.apply(i, arguments)
        } catch (C) {
            console.error("THREE.WebGLState:", C)
        }
    }
    function $() {
        try {
            i.compressedTexImage3D.apply(i, arguments)
        } catch (C) {
            console.error("THREE.WebGLState:", C)
        }
    }
    function _e() {
        try {
            i.texSubImage2D.apply(i, arguments)
        } catch (C) {
            console.error("THREE.WebGLState:", C)
        }
    }
    function oe() {
        try {
            i.texSubImage3D.apply(i, arguments)
        } catch (C) {
            console.error("THREE.WebGLState:", C)
        }
    }
    function ae() {
        try {
            i.compressedTexSubImage2D.apply(i, arguments)
        } catch (C) {
            console.error("THREE.WebGLState:", C)
        }
    }
    function Re() {
        try {
            i.compressedTexSubImage3D.apply(i, arguments)
        } catch (C) {
            console.error("THREE.WebGLState:", C)
        }
    }
    function ee() {
        try {
            i.texStorage2D.apply(i, arguments)
        } catch (C) {
            console.error("THREE.WebGLState:", C)
        }
    }
    function me() {
        try {
            i.texStorage3D.apply(i, arguments)
        } catch (C) {
            console.error("THREE.WebGLState:", C)
        }
    }
    function ke() {
        try {
            i.texImage2D.apply(i, arguments)
        } catch (C) {
            console.error("THREE.WebGLState:", C)
        }
    }
    function xe() {
        try {
            i.texImage3D.apply(i, arguments)
        } catch (C) {
            console.error("THREE.WebGLState:", C)
        }
    }
    function he(C) {
        we.equals(C) === !1 && (i.scissor(C.x, C.y, C.z, C.w),
        we.copy(C))
    }
    function Ce(C) {
        Ve.equals(C) === !1 && (i.viewport(C.x, C.y, C.z, C.w),
        Ve.copy(C))
    }
    function Oe(C, Y) {
        let W = l.get(Y);
        W === void 0 && (W = new WeakMap,
        l.set(Y, W));
        let re = W.get(C);
        re === void 0 && (re = i.getUniformBlockIndex(Y, C.name),
        W.set(C, re))
    }
    function at(C, Y) {
        const re = l.get(Y).get(C);
        o.get(Y) !== re && (i.uniformBlockBinding(Y, re, C.__bindingPointIndex),
        o.set(Y, re))
    }
    function Pe() {
        i.disable(i.BLEND),
        i.disable(i.CULL_FACE),
        i.disable(i.DEPTH_TEST),
        i.disable(i.POLYGON_OFFSET_FILL),
        i.disable(i.SCISSOR_TEST),
        i.disable(i.STENCIL_TEST),
        i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),
        i.blendEquation(i.FUNC_ADD),
        i.blendFunc(i.ONE, i.ZERO),
        i.blendFuncSeparate(i.ONE, i.ZERO, i.ONE, i.ZERO),
        i.blendColor(0, 0, 0, 0),
        i.colorMask(!0, !0, !0, !0),
        i.clearColor(0, 0, 0, 0),
        i.depthMask(!0),
        i.depthFunc(i.LESS),
        i.clearDepth(1),
        i.stencilMask(4294967295),
        i.stencilFunc(i.ALWAYS, 0, 4294967295),
        i.stencilOp(i.KEEP, i.KEEP, i.KEEP),
        i.clearStencil(0),
        i.cullFace(i.BACK),
        i.frontFace(i.CCW),
        i.polygonOffset(0, 0),
        i.activeTexture(i.TEXTURE0),
        i.bindFramebuffer(i.FRAMEBUFFER, null),
        i.bindFramebuffer(i.DRAW_FRAMEBUFFER, null),
        i.bindFramebuffer(i.READ_FRAMEBUFFER, null),
        i.useProgram(null),
        i.lineWidth(1),
        i.scissor(0, 0, i.canvas.width, i.canvas.height),
        i.viewport(0, 0, i.canvas.width, i.canvas.height),
        c = {},
        z = null,
        j = {},
        h = {},
        u = new WeakMap,
        f = [],
        d = null,
        g = !1,
        _ = null,
        p = null,
        m = null,
        T = null,
        v = null,
        S = null,
        D = null,
        b = new ve(0,0,0),
        w = 0,
        B = !1,
        E = null,
        x = null,
        U = null,
        G = null,
        P = null,
        we.set(0, 0, i.canvas.width, i.canvas.height),
        Ve.set(0, 0, i.canvas.width, i.canvas.height),
        r.reset(),
        s.reset(),
        a.reset()
    }
    return {
        buffers: {
            color: r,
            depth: s,
            stencil: a
        },
        enable: ce,
        disable: te,
        bindFramebuffer: De,
        drawBuffers: Ue,
        useProgram: I,
        setBlending: qe,
        setMaterial: ye,
        setFlipSided: Be,
        setCullFace: Ne,
        setLineWidth: ze,
        setPolygonOffset: it,
        setScissorTest: A,
        activeTexture: M,
        bindTexture: V,
        unbindTexture: X,
        compressedTexImage2D: Z,
        compressedTexImage3D: $,
        texImage2D: ke,
        texImage3D: xe,
        updateUBOMapping: Oe,
        uniformBlockBinding: at,
        texStorage2D: ee,
        texStorage3D: me,
        texSubImage2D: _e,
        texSubImage3D: oe,
        compressedTexSubImage2D: ae,
        compressedTexSubImage3D: Re,
        scissor: he,
        viewport: Ce,
        reset: Pe
    }
}
function Qm(i, e, t, n, r, s, a) {
    const o = e.has("WEBGL_multisampled_render_to_texture") ? e.get("WEBGL_multisampled_render_to_texture") : null
      , l = typeof navigator > "u" ? !1 : /OculusBrowser/g.test(navigator.userAgent)
      , c = new Ie
      , h = new WeakMap;
    let u;
    const f = new WeakMap;
    let d = !1;
    try {
        d = typeof OffscreenCanvas < "u" && new OffscreenCanvas(1,1).getContext("2d") !== null
    } catch {}
    function g(A, M) {
        return d ? new OffscreenCanvas(A,M) : ar("canvas")
    }
    function _(A, M, V) {
        let X = 1;
        const Z = it(A);
        if ((Z.width > V || Z.height > V) && (X = V / Math.max(Z.width, Z.height)),
        X < 1)
            if (typeof HTMLImageElement < "u" && A instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && A instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && A instanceof ImageBitmap || typeof VideoFrame < "u" && A instanceof VideoFrame) {
                const $ = Math.floor(X * Z.width)
                  , _e = Math.floor(X * Z.height);
                u === void 0 && (u = g($, _e));
                const oe = M ? g($, _e) : u;
                return oe.width = $,
                oe.height = _e,
                oe.getContext("2d").drawImage(A, 0, 0, $, _e),
                console.warn("THREE.WebGLRenderer: Texture has been resized from (" + Z.width + "x" + Z.height + ") to (" + $ + "x" + _e + ")."),
                oe
            } else
                return "data"in A && console.warn("THREE.WebGLRenderer: Image in DataTexture is too big (" + Z.width + "x" + Z.height + ")."),
                A;
        return A
    }
    function p(A) {
        return A.generateMipmaps && A.minFilter !== Lt && A.minFilter !== qt
    }
    function m(A) {
        i.generateMipmap(A)
    }
    function T(A, M, V, X, Z=!1) {
        if (A !== null) {
            if (i[A] !== void 0)
                return i[A];
            console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" + A + "'")
        }
        let $ = M;
        if (M === i.RED && (V === i.FLOAT && ($ = i.R32F),
        V === i.HALF_FLOAT && ($ = i.R16F),
        V === i.UNSIGNED_BYTE && ($ = i.R8)),
        M === i.RED_INTEGER && (V === i.UNSIGNED_BYTE && ($ = i.R8UI),
        V === i.UNSIGNED_SHORT && ($ = i.R16UI),
        V === i.UNSIGNED_INT && ($ = i.R32UI),
        V === i.BYTE && ($ = i.R8I),
        V === i.SHORT && ($ = i.R16I),
        V === i.INT && ($ = i.R32I)),
        M === i.RG && (V === i.FLOAT && ($ = i.RG32F),
        V === i.HALF_FLOAT && ($ = i.RG16F),
        V === i.UNSIGNED_BYTE && ($ = i.RG8)),
        M === i.RG_INTEGER && (V === i.UNSIGNED_BYTE && ($ = i.RG8UI),
        V === i.UNSIGNED_SHORT && ($ = i.RG16UI),
        V === i.UNSIGNED_INT && ($ = i.RG32UI),
        V === i.BYTE && ($ = i.RG8I),
        V === i.SHORT && ($ = i.RG16I),
        V === i.INT && ($ = i.RG32I)),
        M === i.RGB && V === i.UNSIGNED_INT_5_9_9_9_REV && ($ = i.RGB9_E5),
        M === i.RGBA) {
            const _e = Z ? $r : Ze.getTransfer(X);
            V === i.FLOAT && ($ = i.RGBA32F),
            V === i.HALF_FLOAT && ($ = i.RGBA16F),
            V === i.UNSIGNED_BYTE && ($ = _e === je ? i.SRGB8_ALPHA8 : i.RGBA8),
            V === i.UNSIGNED_SHORT_4_4_4_4 && ($ = i.RGBA4),
            V === i.UNSIGNED_SHORT_5_5_5_1 && ($ = i.RGB5_A1)
        }
        return ($ === i.R16F || $ === i.R32F || $ === i.RG16F || $ === i.RG32F || $ === i.RGBA16F || $ === i.RGBA32F) && e.get("EXT_color_buffer_float"),
        $
    }
    function v(A, M) {
        return p(A) === !0 || A.isFramebufferTexture && A.minFilter !== Lt && A.minFilter !== qt ? Math.log2(Math.max(M.width, M.height)) + 1 : A.mipmaps !== void 0 && A.mipmaps.length > 0 ? A.mipmaps.length : A.isCompressedTexture && Array.isArray(A.image) ? M.mipmaps.length : 1
    }
    function S(A) {
        const M = A.target;
        M.removeEventListener("dispose", S),
        b(M),
        M.isVideoTexture && h.delete(M)
    }
    function D(A) {
        const M = A.target;
        M.removeEventListener("dispose", D),
        B(M)
    }
    function b(A) {
        const M = n.get(A);
        if (M.__webglInit === void 0)
            return;
        const V = A.source
          , X = f.get(V);
        if (X) {
            const Z = X[M.__cacheKey];
            Z.usedTimes--,
            Z.usedTimes === 0 && w(A),
            Object.keys(X).length === 0 && f.delete(V)
        }
        n.remove(A)
    }
    function w(A) {
        const M = n.get(A);
        i.deleteTexture(M.__webglTexture);
        const V = A.source
          , X = f.get(V);
        delete X[M.__cacheKey],
        a.memory.textures--
    }
    function B(A) {
        const M = n.get(A);
        if (A.depthTexture && A.depthTexture.dispose(),
        A.isWebGLCubeRenderTarget)
            for (let X = 0; X < 6; X++) {
                if (Array.isArray(M.__webglFramebuffer[X]))
                    for (let Z = 0; Z < M.__webglFramebuffer[X].length; Z++)
                        i.deleteFramebuffer(M.__webglFramebuffer[X][Z]);
                else
                    i.deleteFramebuffer(M.__webglFramebuffer[X]);
                M.__webglDepthbuffer && i.deleteRenderbuffer(M.__webglDepthbuffer[X])
            }
        else {
            if (Array.isArray(M.__webglFramebuffer))
                for (let X = 0; X < M.__webglFramebuffer.length; X++)
                    i.deleteFramebuffer(M.__webglFramebuffer[X]);
            else
                i.deleteFramebuffer(M.__webglFramebuffer);
            if (M.__webglDepthbuffer && i.deleteRenderbuffer(M.__webglDepthbuffer),
            M.__webglMultisampledFramebuffer && i.deleteFramebuffer(M.__webglMultisampledFramebuffer),
            M.__webglColorRenderbuffer)
                for (let X = 0; X < M.__webglColorRenderbuffer.length; X++)
                    M.__webglColorRenderbuffer[X] && i.deleteRenderbuffer(M.__webglColorRenderbuffer[X]);
            M.__webglDepthRenderbuffer && i.deleteRenderbuffer(M.__webglDepthRenderbuffer)
        }
        const V = A.textures;
        for (let X = 0, Z = V.length; X < Z; X++) {
            const $ = n.get(V[X]);
            $.__webglTexture && (i.deleteTexture($.__webglTexture),
            a.memory.textures--),
            n.remove(V[X])
        }
        n.remove(A)
    }
    let E = 0;
    function x() {
        E = 0
    }
    function U() {
        const A = E;
        return A >= r.maxTextures && console.warn("THREE.WebGLTextures: Trying to use " + A + " texture units while this GPU supports only " + r.maxTextures),
        E += 1,
        A
    }
    function G(A) {
        const M = [];
        return M.push(A.wrapS),
        M.push(A.wrapT),
        M.push(A.wrapR || 0),
        M.push(A.magFilter),
        M.push(A.minFilter),
        M.push(A.anisotropy),
        M.push(A.internalFormat),
        M.push(A.format),
        M.push(A.type),
        M.push(A.generateMipmaps),
        M.push(A.premultiplyAlpha),
        M.push(A.flipY),
        M.push(A.unpackAlignment),
        M.push(A.colorSpace),
        M.join()
    }
    function P(A, M) {
        const V = n.get(A);
        if (A.isVideoTexture && Ne(A),
        A.isRenderTargetTexture === !1 && A.version > 0 && V.__version !== A.version) {
            const X = A.image;
            if (X === null)
                console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");
            else if (X.complete === !1)
                console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");
            else {
                we(V, A, M);
                return
            }
        }
        t.bindTexture(i.TEXTURE_2D, V.__webglTexture, i.TEXTURE0 + M)
    }
    function H(A, M) {
        const V = n.get(A);
        if (A.version > 0 && V.__version !== A.version) {
            we(V, A, M);
            return
        }
        t.bindTexture(i.TEXTURE_2D_ARRAY, V.__webglTexture, i.TEXTURE0 + M)
    }
    function q(A, M) {
        const V = n.get(A);
        if (A.version > 0 && V.__version !== A.version) {
            we(V, A, M);
            return
        }
        t.bindTexture(i.TEXTURE_3D, V.__webglTexture, i.TEXTURE0 + M)
    }
    function K(A, M) {
        const V = n.get(A);
        if (A.version > 0 && V.__version !== A.version) {
            Ve(V, A, M);
            return
        }
        t.bindTexture(i.TEXTURE_CUBE_MAP, V.__webglTexture, i.TEXTURE0 + M)
    }
    const ne = {
        [rr]: i.REPEAT,
        [vn]: i.CLAMP_TO_EDGE,
        [ca]: i.MIRRORED_REPEAT
    }
      , z = {
        [Lt]: i.NEAREST,
        [_h]: i.NEAREST_MIPMAP_NEAREST,
        [gr]: i.NEAREST_MIPMAP_LINEAR,
        [qt]: i.LINEAR,
        [vs]: i.LINEAR_MIPMAP_NEAREST,
        [Jn]: i.LINEAR_MIPMAP_LINEAR
    }
      , j = {
        [Ih]: i.NEVER,
        [Bh]: i.ALWAYS,
        [Dh]: i.LESS,
        [ql]: i.LEQUAL,
        [Uh]: i.EQUAL,
        [Oh]: i.GEQUAL,
        [Nh]: i.GREATER,
        [Fh]: i.NOTEQUAL
    };
    function Q(A, M) {
        if (M.type === xn && e.has("OES_texture_float_linear") === !1 && (M.magFilter === qt || M.magFilter === vs || M.magFilter === gr || M.magFilter === Jn || M.minFilter === qt || M.minFilter === vs || M.minFilter === gr || M.minFilter === Jn) && console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),
        i.texParameteri(A, i.TEXTURE_WRAP_S, ne[M.wrapS]),
        i.texParameteri(A, i.TEXTURE_WRAP_T, ne[M.wrapT]),
        (A === i.TEXTURE_3D || A === i.TEXTURE_2D_ARRAY) && i.texParameteri(A, i.TEXTURE_WRAP_R, ne[M.wrapR]),
        i.texParameteri(A, i.TEXTURE_MAG_FILTER, z[M.magFilter]),
        i.texParameteri(A, i.TEXTURE_MIN_FILTER, z[M.minFilter]),
        M.compareFunction && (i.texParameteri(A, i.TEXTURE_COMPARE_MODE, i.COMPARE_REF_TO_TEXTURE),
        i.texParameteri(A, i.TEXTURE_COMPARE_FUNC, j[M.compareFunction])),
        e.has("EXT_texture_filter_anisotropic") === !0) {
            if (M.magFilter === Lt || M.minFilter !== gr && M.minFilter !== Jn || M.type === xn && e.has("OES_texture_float_linear") === !1)
                return;
            if (M.anisotropy > 1 || n.get(M).__currentAnisotropy) {
                const V = e.get("EXT_texture_filter_anisotropic");
                i.texParameterf(A, V.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(M.anisotropy, r.getMaxAnisotropy())),
                n.get(M).__currentAnisotropy = M.anisotropy
            }
        }
    }
    function fe(A, M) {
        let V = !1;
        A.__webglInit === void 0 && (A.__webglInit = !0,
        M.addEventListener("dispose", S));
        const X = M.source;
        let Z = f.get(X);
        Z === void 0 && (Z = {},
        f.set(X, Z));
        const $ = G(M);
        if ($ !== A.__cacheKey) {
            Z[$] === void 0 && (Z[$] = {
                texture: i.createTexture(),
                usedTimes: 0
            },
            a.memory.textures++,
            V = !0),
            Z[$].usedTimes++;
            const _e = Z[A.__cacheKey];
            _e !== void 0 && (Z[A.__cacheKey].usedTimes--,
            _e.usedTimes === 0 && w(M)),
            A.__cacheKey = $,
            A.__webglTexture = Z[$].texture
        }
        return V
    }
    function we(A, M, V) {
        let X = i.TEXTURE_2D;
        (M.isDataArrayTexture || M.isCompressedArrayTexture) && (X = i.TEXTURE_2D_ARRAY),
        M.isData3DTexture && (X = i.TEXTURE_3D);
        const Z = fe(A, M)
          , $ = M.source;
        t.bindTexture(X, A.__webglTexture, i.TEXTURE0 + V);
        const _e = n.get($);
        if ($.version !== _e.__version || Z === !0) {
            t.activeTexture(i.TEXTURE0 + V);
            const oe = Ze.getPrimaries(Ze.workingColorSpace)
              , ae = M.colorSpace === Ln ? null : Ze.getPrimaries(M.colorSpace)
              , Re = M.colorSpace === Ln || oe === ae ? i.NONE : i.BROWSER_DEFAULT_WEBGL;
            i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL, M.flipY),
            i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL, M.premultiplyAlpha),
            i.pixelStorei(i.UNPACK_ALIGNMENT, M.unpackAlignment),
            i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL, Re);
            let ee = _(M.image, !1, r.maxTextureSize);
            ee = ze(M, ee);
            const me = s.convert(M.format, M.colorSpace)
              , ke = s.convert(M.type);
            let xe = T(M.internalFormat, me, ke, M.colorSpace, M.isVideoTexture);
            Q(X, M);
            let he;
            const Ce = M.mipmaps
              , Oe = M.isVideoTexture !== !0
              , at = _e.__version === void 0 || Z === !0
              , Pe = $.dataReady
              , C = v(M, ee);
            if (M.isDepthTexture)
                xe = i.DEPTH_COMPONENT16,
                M.type === xn ? xe = i.DEPTH_COMPONENT32F : M.type === Ii ? xe = i.DEPTH_COMPONENT24 : M.type === fr && (xe = i.DEPTH24_STENCIL8),
                at && (Oe ? t.texStorage2D(i.TEXTURE_2D, 1, xe, ee.width, ee.height) : t.texImage2D(i.TEXTURE_2D, 0, xe, ee.width, ee.height, 0, me, ke, null));
            else if (M.isDataTexture)
                if (Ce.length > 0) {
                    Oe && at && t.texStorage2D(i.TEXTURE_2D, C, xe, Ce[0].width, Ce[0].height);
                    for (let Y = 0, W = Ce.length; Y < W; Y++)
                        he = Ce[Y],
                        Oe ? Pe && t.texSubImage2D(i.TEXTURE_2D, Y, 0, 0, he.width, he.height, me, ke, he.data) : t.texImage2D(i.TEXTURE_2D, Y, xe, he.width, he.height, 0, me, ke, he.data);
                    M.generateMipmaps = !1
                } else
                    Oe ? (at && t.texStorage2D(i.TEXTURE_2D, C, xe, ee.width, ee.height),
                    Pe && t.texSubImage2D(i.TEXTURE_2D, 0, 0, 0, ee.width, ee.height, me, ke, ee.data)) : t.texImage2D(i.TEXTURE_2D, 0, xe, ee.width, ee.height, 0, me, ke, ee.data);
            else if (M.isCompressedTexture)
                if (M.isCompressedArrayTexture) {
                    Oe && at && t.texStorage3D(i.TEXTURE_2D_ARRAY, C, xe, Ce[0].width, Ce[0].height, ee.depth);
                    for (let Y = 0, W = Ce.length; Y < W; Y++)
                        he = Ce[Y],
                        M.format !== Yt ? me !== null ? Oe ? Pe && t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY, Y, 0, 0, 0, he.width, he.height, ee.depth, me, he.data, 0, 0) : t.compressedTexImage3D(i.TEXTURE_2D_ARRAY, Y, xe, he.width, he.height, ee.depth, 0, he.data, 0, 0) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : Oe ? Pe && t.texSubImage3D(i.TEXTURE_2D_ARRAY, Y, 0, 0, 0, he.width, he.height, ee.depth, me, ke, he.data) : t.texImage3D(i.TEXTURE_2D_ARRAY, Y, xe, he.width, he.height, ee.depth, 0, me, ke, he.data)
                } else {
                    Oe && at && t.texStorage2D(i.TEXTURE_2D, C, xe, Ce[0].width, Ce[0].height);
                    for (let Y = 0, W = Ce.length; Y < W; Y++)
                        he = Ce[Y],
                        M.format !== Yt ? me !== null ? Oe ? Pe && t.compressedTexSubImage2D(i.TEXTURE_2D, Y, 0, 0, he.width, he.height, me, he.data) : t.compressedTexImage2D(i.TEXTURE_2D, Y, xe, he.width, he.height, 0, he.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : Oe ? Pe && t.texSubImage2D(i.TEXTURE_2D, Y, 0, 0, he.width, he.height, me, ke, he.data) : t.texImage2D(i.TEXTURE_2D, Y, xe, he.width, he.height, 0, me, ke, he.data)
                }
            else if (M.isDataArrayTexture)
                Oe ? (at && t.texStorage3D(i.TEXTURE_2D_ARRAY, C, xe, ee.width, ee.height, ee.depth),
                Pe && t.texSubImage3D(i.TEXTURE_2D_ARRAY, 0, 0, 0, 0, ee.width, ee.height, ee.depth, me, ke, ee.data)) : t.texImage3D(i.TEXTURE_2D_ARRAY, 0, xe, ee.width, ee.height, ee.depth, 0, me, ke, ee.data);
            else if (M.isData3DTexture)
                Oe ? (at && t.texStorage3D(i.TEXTURE_3D, C, xe, ee.width, ee.height, ee.depth),
                Pe && t.texSubImage3D(i.TEXTURE_3D, 0, 0, 0, 0, ee.width, ee.height, ee.depth, me, ke, ee.data)) : t.texImage3D(i.TEXTURE_3D, 0, xe, ee.width, ee.height, ee.depth, 0, me, ke, ee.data);
            else if (M.isFramebufferTexture) {
                if (at)
                    if (Oe)
                        t.texStorage2D(i.TEXTURE_2D, C, xe, ee.width, ee.height);
                    else {
                        let Y = ee.width
                          , W = ee.height;
                        for (let re = 0; re < C; re++)
                            t.texImage2D(i.TEXTURE_2D, re, xe, Y, W, 0, me, ke, null),
                            Y >>= 1,
                            W >>= 1
                    }
            } else if (Ce.length > 0) {
                if (Oe && at) {
                    const Y = it(Ce[0]);
                    t.texStorage2D(i.TEXTURE_2D, C, xe, Y.width, Y.height)
                }
                for (let Y = 0, W = Ce.length; Y < W; Y++)
                    he = Ce[Y],
                    Oe ? Pe && t.texSubImage2D(i.TEXTURE_2D, Y, 0, 0, me, ke, he) : t.texImage2D(i.TEXTURE_2D, Y, xe, me, ke, he);
                M.generateMipmaps = !1
            } else if (Oe) {
                if (at) {
                    const Y = it(ee);
                    t.texStorage2D(i.TEXTURE_2D, C, xe, Y.width, Y.height)
                }
                Pe && t.texSubImage2D(i.TEXTURE_2D, 0, 0, 0, me, ke, ee)
            } else
                t.texImage2D(i.TEXTURE_2D, 0, xe, me, ke, ee);
            p(M) && m(X),
            _e.__version = $.version,
            M.onUpdate && M.onUpdate(M)
        }
        A.__version = M.version
    }
    function Ve(A, M, V) {
        if (M.image.length !== 6)
            return;
        const X = fe(A, M)
          , Z = M.source;
        t.bindTexture(i.TEXTURE_CUBE_MAP, A.__webglTexture, i.TEXTURE0 + V);
        const $ = n.get(Z);
        if (Z.version !== $.__version || X === !0) {
            t.activeTexture(i.TEXTURE0 + V);
            const _e = Ze.getPrimaries(Ze.workingColorSpace)
              , oe = M.colorSpace === Ln ? null : Ze.getPrimaries(M.colorSpace)
              , ae = M.colorSpace === Ln || _e === oe ? i.NONE : i.BROWSER_DEFAULT_WEBGL;
            i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL, M.flipY),
            i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL, M.premultiplyAlpha),
            i.pixelStorei(i.UNPACK_ALIGNMENT, M.unpackAlignment),
            i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL, ae);
            const Re = M.isCompressedTexture || M.image[0].isCompressedTexture
              , ee = M.image[0] && M.image[0].isDataTexture
              , me = [];
            for (let W = 0; W < 6; W++)
                !Re && !ee ? me[W] = _(M.image[W], !0, r.maxCubemapSize) : me[W] = ee ? M.image[W].image : M.image[W],
                me[W] = ze(M, me[W]);
            const ke = me[0]
              , xe = s.convert(M.format, M.colorSpace)
              , he = s.convert(M.type)
              , Ce = T(M.internalFormat, xe, he, M.colorSpace)
              , Oe = M.isVideoTexture !== !0
              , at = $.__version === void 0 || X === !0
              , Pe = Z.dataReady;
            let C = v(M, ke);
            Q(i.TEXTURE_CUBE_MAP, M);
            let Y;
            if (Re) {
                Oe && at && t.texStorage2D(i.TEXTURE_CUBE_MAP, C, Ce, ke.width, ke.height);
                for (let W = 0; W < 6; W++) {
                    Y = me[W].mipmaps;
                    for (let re = 0; re < Y.length; re++) {
                        const le = Y[re];
                        M.format !== Yt ? xe !== null ? Oe ? Pe && t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + W, re, 0, 0, le.width, le.height, xe, le.data) : t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + W, re, Ce, le.width, le.height, 0, le.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : Oe ? Pe && t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + W, re, 0, 0, le.width, le.height, xe, he, le.data) : t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + W, re, Ce, le.width, le.height, 0, xe, he, le.data)
                    }
                }
            } else {
                if (Y = M.mipmaps,
                Oe && at) {
                    Y.length > 0 && C++;
                    const W = it(me[0]);
                    t.texStorage2D(i.TEXTURE_CUBE_MAP, C, Ce, W.width, W.height)
                }
                for (let W = 0; W < 6; W++)
                    if (ee) {
                        Oe ? Pe && t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + W, 0, 0, 0, me[W].width, me[W].height, xe, he, me[W].data) : t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + W, 0, Ce, me[W].width, me[W].height, 0, xe, he, me[W].data);
                        for (let re = 0; re < Y.length; re++) {
                            const He = Y[re].image[W].image;
                            Oe ? Pe && t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + W, re + 1, 0, 0, He.width, He.height, xe, he, He.data) : t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + W, re + 1, Ce, He.width, He.height, 0, xe, he, He.data)
                        }
                    } else {
                        Oe ? Pe && t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + W, 0, 0, 0, xe, he, me[W]) : t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + W, 0, Ce, xe, he, me[W]);
                        for (let re = 0; re < Y.length; re++) {
                            const le = Y[re];
                            Oe ? Pe && t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + W, re + 1, 0, 0, xe, he, le.image[W]) : t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + W, re + 1, Ce, xe, he, le.image[W])
                        }
                    }
            }
            p(M) && m(i.TEXTURE_CUBE_MAP),
            $.__version = Z.version,
            M.onUpdate && M.onUpdate(M)
        }
        A.__version = M.version
    }
    function k(A, M, V, X, Z, $) {
        const _e = s.convert(V.format, V.colorSpace)
          , oe = s.convert(V.type)
          , ae = T(V.internalFormat, _e, oe, V.colorSpace);
        if (!n.get(M).__hasExternalTextures) {
            const ee = Math.max(1, M.width >> $)
              , me = Math.max(1, M.height >> $);
            Z === i.TEXTURE_3D || Z === i.TEXTURE_2D_ARRAY ? t.texImage3D(Z, $, ae, ee, me, M.depth, 0, _e, oe, null) : t.texImage2D(Z, $, ae, ee, me, 0, _e, oe, null)
        }
        t.bindFramebuffer(i.FRAMEBUFFER, A),
        Be(M) ? o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER, X, Z, n.get(V).__webglTexture, 0, ye(M)) : (Z === i.TEXTURE_2D || Z >= i.TEXTURE_CUBE_MAP_POSITIVE_X && Z <= i.TEXTURE_CUBE_MAP_NEGATIVE_Z) && i.framebufferTexture2D(i.FRAMEBUFFER, X, Z, n.get(V).__webglTexture, $),
        t.bindFramebuffer(i.FRAMEBUFFER, null)
    }
    function J(A, M, V) {
        if (i.bindRenderbuffer(i.RENDERBUFFER, A),
        M.depthBuffer && !M.stencilBuffer) {
            let X = i.DEPTH_COMPONENT24;
            if (V || Be(M)) {
                const Z = M.depthTexture;
                Z && Z.isDepthTexture && (Z.type === xn ? X = i.DEPTH_COMPONENT32F : Z.type === Ii && (X = i.DEPTH_COMPONENT24));
                const $ = ye(M);
                Be(M) ? o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER, $, X, M.width, M.height) : i.renderbufferStorageMultisample(i.RENDERBUFFER, $, X, M.width, M.height)
            } else
                i.renderbufferStorage(i.RENDERBUFFER, X, M.width, M.height);
            i.framebufferRenderbuffer(i.FRAMEBUFFER, i.DEPTH_ATTACHMENT, i.RENDERBUFFER, A)
        } else if (M.depthBuffer && M.stencilBuffer) {
            const X = ye(M);
            V && Be(M) === !1 ? i.renderbufferStorageMultisample(i.RENDERBUFFER, X, i.DEPTH24_STENCIL8, M.width, M.height) : Be(M) ? o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER, X, i.DEPTH24_STENCIL8, M.width, M.height) : i.renderbufferStorage(i.RENDERBUFFER, i.DEPTH_STENCIL, M.width, M.height),
            i.framebufferRenderbuffer(i.FRAMEBUFFER, i.DEPTH_STENCIL_ATTACHMENT, i.RENDERBUFFER, A)
        } else {
            const X = M.textures;
            for (let Z = 0; Z < X.length; Z++) {
                const $ = X[Z]
                  , _e = s.convert($.format, $.colorSpace)
                  , oe = s.convert($.type)
                  , ae = T($.internalFormat, _e, oe, $.colorSpace)
                  , Re = ye(M);
                V && Be(M) === !1 ? i.renderbufferStorageMultisample(i.RENDERBUFFER, Re, ae, M.width, M.height) : Be(M) ? o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER, Re, ae, M.width, M.height) : i.renderbufferStorage(i.RENDERBUFFER, ae, M.width, M.height)
            }
        }
        i.bindRenderbuffer(i.RENDERBUFFER, null)
    }
    function ce(A, M) {
        if (M && M.isWebGLCubeRenderTarget)
            throw new Error("Depth Texture with cube render targets is not supported");
        if (t.bindFramebuffer(i.FRAMEBUFFER, A),
        !(M.depthTexture && M.depthTexture.isDepthTexture))
            throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
        (!n.get(M.depthTexture).__webglTexture || M.depthTexture.image.width !== M.width || M.depthTexture.image.height !== M.height) && (M.depthTexture.image.width = M.width,
        M.depthTexture.image.height = M.height,
        M.depthTexture.needsUpdate = !0),
        P(M.depthTexture, 0);
        const X = n.get(M.depthTexture).__webglTexture
          , Z = ye(M);
        if (M.depthTexture.format === Ri)
            Be(M) ? o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER, i.DEPTH_ATTACHMENT, i.TEXTURE_2D, X, 0, Z) : i.framebufferTexture2D(i.FRAMEBUFFER, i.DEPTH_ATTACHMENT, i.TEXTURE_2D, X, 0);
        else if (M.depthTexture.format === sr)
            Be(M) ? o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER, i.DEPTH_STENCIL_ATTACHMENT, i.TEXTURE_2D, X, 0, Z) : i.framebufferTexture2D(i.FRAMEBUFFER, i.DEPTH_STENCIL_ATTACHMENT, i.TEXTURE_2D, X, 0);
        else
            throw new Error("Unknown depthTexture format")
    }
    function te(A) {
        const M = n.get(A)
          , V = A.isWebGLCubeRenderTarget === !0;
        if (A.depthTexture && !M.__autoAllocateDepthBuffer) {
            if (V)
                throw new Error("target.depthTexture not supported in Cube render targets");
            ce(M.__webglFramebuffer, A)
        } else if (V) {
            M.__webglDepthbuffer = [];
            for (let X = 0; X < 6; X++)
                t.bindFramebuffer(i.FRAMEBUFFER, M.__webglFramebuffer[X]),
                M.__webglDepthbuffer[X] = i.createRenderbuffer(),
                J(M.__webglDepthbuffer[X], A, !1)
        } else
            t.bindFramebuffer(i.FRAMEBUFFER, M.__webglFramebuffer),
            M.__webglDepthbuffer = i.createRenderbuffer(),
            J(M.__webglDepthbuffer, A, !1);
        t.bindFramebuffer(i.FRAMEBUFFER, null)
    }
    function De(A, M, V) {
        const X = n.get(A);
        M !== void 0 && k(X.__webglFramebuffer, A, A.texture, i.COLOR_ATTACHMENT0, i.TEXTURE_2D, 0),
        V !== void 0 && te(A)
    }
    function Ue(A) {
        const M = A.texture
          , V = n.get(A)
          , X = n.get(M);
        A.addEventListener("dispose", D);
        const Z = A.textures
          , $ = A.isWebGLCubeRenderTarget === !0
          , _e = Z.length > 1;
        if (_e || (X.__webglTexture === void 0 && (X.__webglTexture = i.createTexture()),
        X.__version = M.version,
        a.memory.textures++),
        $) {
            V.__webglFramebuffer = [];
            for (let oe = 0; oe < 6; oe++)
                if (M.mipmaps && M.mipmaps.length > 0) {
                    V.__webglFramebuffer[oe] = [];
                    for (let ae = 0; ae < M.mipmaps.length; ae++)
                        V.__webglFramebuffer[oe][ae] = i.createFramebuffer()
                } else
                    V.__webglFramebuffer[oe] = i.createFramebuffer()
        } else {
            if (M.mipmaps && M.mipmaps.length > 0) {
                V.__webglFramebuffer = [];
                for (let oe = 0; oe < M.mipmaps.length; oe++)
                    V.__webglFramebuffer[oe] = i.createFramebuffer()
            } else
                V.__webglFramebuffer = i.createFramebuffer();
            if (_e)
                for (let oe = 0, ae = Z.length; oe < ae; oe++) {
                    const Re = n.get(Z[oe]);
                    Re.__webglTexture === void 0 && (Re.__webglTexture = i.createTexture(),
                    a.memory.textures++)
                }
            if (A.samples > 0 && Be(A) === !1) {
                V.__webglMultisampledFramebuffer = i.createFramebuffer(),
                V.__webglColorRenderbuffer = [],
                t.bindFramebuffer(i.FRAMEBUFFER, V.__webglMultisampledFramebuffer);
                for (let oe = 0; oe < Z.length; oe++) {
                    const ae = Z[oe];
                    V.__webglColorRenderbuffer[oe] = i.createRenderbuffer(),
                    i.bindRenderbuffer(i.RENDERBUFFER, V.__webglColorRenderbuffer[oe]);
                    const Re = s.convert(ae.format, ae.colorSpace)
                      , ee = s.convert(ae.type)
                      , me = T(ae.internalFormat, Re, ee, ae.colorSpace, A.isXRRenderTarget === !0)
                      , ke = ye(A);
                    i.renderbufferStorageMultisample(i.RENDERBUFFER, ke, me, A.width, A.height),
                    i.framebufferRenderbuffer(i.FRAMEBUFFER, i.COLOR_ATTACHMENT0 + oe, i.RENDERBUFFER, V.__webglColorRenderbuffer[oe])
                }
                i.bindRenderbuffer(i.RENDERBUFFER, null),
                A.depthBuffer && (V.__webglDepthRenderbuffer = i.createRenderbuffer(),
                J(V.__webglDepthRenderbuffer, A, !0)),
                t.bindFramebuffer(i.FRAMEBUFFER, null)
            }
        }
        if ($) {
            t.bindTexture(i.TEXTURE_CUBE_MAP, X.__webglTexture),
            Q(i.TEXTURE_CUBE_MAP, M);
            for (let oe = 0; oe < 6; oe++)
                if (M.mipmaps && M.mipmaps.length > 0)
                    for (let ae = 0; ae < M.mipmaps.length; ae++)
                        k(V.__webglFramebuffer[oe][ae], A, M, i.COLOR_ATTACHMENT0, i.TEXTURE_CUBE_MAP_POSITIVE_X + oe, ae);
                else
                    k(V.__webglFramebuffer[oe], A, M, i.COLOR_ATTACHMENT0, i.TEXTURE_CUBE_MAP_POSITIVE_X + oe, 0);
            p(M) && m(i.TEXTURE_CUBE_MAP),
            t.unbindTexture()
        } else if (_e) {
            for (let oe = 0, ae = Z.length; oe < ae; oe++) {
                const Re = Z[oe]
                  , ee = n.get(Re);
                t.bindTexture(i.TEXTURE_2D, ee.__webglTexture),
                Q(i.TEXTURE_2D, Re),
                k(V.__webglFramebuffer, A, Re, i.COLOR_ATTACHMENT0 + oe, i.TEXTURE_2D, 0),
                p(Re) && m(i.TEXTURE_2D)
            }
            t.unbindTexture()
        } else {
            let oe = i.TEXTURE_2D;
            if ((A.isWebGL3DRenderTarget || A.isWebGLArrayRenderTarget) && (oe = A.isWebGL3DRenderTarget ? i.TEXTURE_3D : i.TEXTURE_2D_ARRAY),
            t.bindTexture(oe, X.__webglTexture),
            Q(oe, M),
            M.mipmaps && M.mipmaps.length > 0)
                for (let ae = 0; ae < M.mipmaps.length; ae++)
                    k(V.__webglFramebuffer[ae], A, M, i.COLOR_ATTACHMENT0, oe, ae);
            else
                k(V.__webglFramebuffer, A, M, i.COLOR_ATTACHMENT0, oe, 0);
            p(M) && m(oe),
            t.unbindTexture()
        }
        A.depthBuffer && te(A)
    }
    function I(A) {
        const M = A.textures;
        for (let V = 0, X = M.length; V < X; V++) {
            const Z = M[V];
            if (p(Z)) {
                const $ = A.isWebGLCubeRenderTarget ? i.TEXTURE_CUBE_MAP : i.TEXTURE_2D
                  , _e = n.get(Z).__webglTexture;
                t.bindTexture($, _e),
                m($),
                t.unbindTexture()
            }
        }
    }
    const Ke = []
      , ge = [];
    function qe(A) {
        if (A.samples > 0) {
            if (Be(A) === !1) {
                const M = A.textures
                  , V = A.width
                  , X = A.height;
                let Z = i.COLOR_BUFFER_BIT;
                const $ = A.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT
                  , _e = n.get(A)
                  , oe = M.length > 1;
                if (oe)
                    for (let ae = 0; ae < M.length; ae++)
                        t.bindFramebuffer(i.FRAMEBUFFER, _e.__webglMultisampledFramebuffer),
                        i.framebufferRenderbuffer(i.FRAMEBUFFER, i.COLOR_ATTACHMENT0 + ae, i.RENDERBUFFER, null),
                        t.bindFramebuffer(i.FRAMEBUFFER, _e.__webglFramebuffer),
                        i.framebufferTexture2D(i.DRAW_FRAMEBUFFER, i.COLOR_ATTACHMENT0 + ae, i.TEXTURE_2D, null, 0);
                t.bindFramebuffer(i.READ_FRAMEBUFFER, _e.__webglMultisampledFramebuffer),
                t.bindFramebuffer(i.DRAW_FRAMEBUFFER, _e.__webglFramebuffer);
                for (let ae = 0; ae < M.length; ae++) {
                    if (A.resolveDepthBuffer && (A.depthBuffer && (Z |= i.DEPTH_BUFFER_BIT),
                    A.stencilBuffer && A.resolveStencilBuffer && (Z |= i.STENCIL_BUFFER_BIT)),
                    oe) {
                        i.framebufferRenderbuffer(i.READ_FRAMEBUFFER, i.COLOR_ATTACHMENT0, i.RENDERBUFFER, _e.__webglColorRenderbuffer[ae]);
                        const Re = n.get(M[ae]).__webglTexture;
                        i.framebufferTexture2D(i.DRAW_FRAMEBUFFER, i.COLOR_ATTACHMENT0, i.TEXTURE_2D, Re, 0)
                    }
                    i.blitFramebuffer(0, 0, V, X, 0, 0, V, X, Z, i.NEAREST),
                    l === !0 && (Ke.length = 0,
                    ge.length = 0,
                    Ke.push(i.COLOR_ATTACHMENT0 + ae),
                    A.depthBuffer && A.resolveDepthBuffer === !1 && (Ke.push($),
                    ge.push($),
                    i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER, ge)),
                    i.invalidateFramebuffer(i.READ_FRAMEBUFFER, Ke))
                }
                if (t.bindFramebuffer(i.READ_FRAMEBUFFER, null),
                t.bindFramebuffer(i.DRAW_FRAMEBUFFER, null),
                oe)
                    for (let ae = 0; ae < M.length; ae++) {
                        t.bindFramebuffer(i.FRAMEBUFFER, _e.__webglMultisampledFramebuffer),
                        i.framebufferRenderbuffer(i.FRAMEBUFFER, i.COLOR_ATTACHMENT0 + ae, i.RENDERBUFFER, _e.__webglColorRenderbuffer[ae]);
                        const Re = n.get(M[ae]).__webglTexture;
                        t.bindFramebuffer(i.FRAMEBUFFER, _e.__webglFramebuffer),
                        i.framebufferTexture2D(i.DRAW_FRAMEBUFFER, i.COLOR_ATTACHMENT0 + ae, i.TEXTURE_2D, Re, 0)
                    }
                t.bindFramebuffer(i.DRAW_FRAMEBUFFER, _e.__webglMultisampledFramebuffer)
            } else if (A.depthBuffer && A.resolveDepthBuffer === !1 && l) {
                const M = A.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT;
                i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER, [M])
            }
        }
    }
    function ye(A) {
        return Math.min(r.maxSamples, A.samples)
    }
    function Be(A) {
        const M = n.get(A);
        return A.samples > 0 && e.has("WEBGL_multisampled_render_to_texture") === !0 && M.__useRenderToTexture !== !1
    }
    function Ne(A) {
        const M = a.render.frame;
        h.get(A) !== M && (h.set(A, M),
        A.update())
    }
    function ze(A, M) {
        const V = A.colorSpace
          , X = A.format
          , Z = A.type;
        return A.isCompressedTexture === !0 || A.isVideoTexture === !0 || V !== On && V !== Ln && (Ze.getTransfer(V) === je ? (X !== Yt || Z !== Nn) && console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.") : console.error("THREE.WebGLTextures: Unsupported texture color space:", V)),
        M
    }
    function it(A) {
        return typeof HTMLImageElement < "u" && A instanceof HTMLImageElement ? (c.width = A.naturalWidth || A.width,
        c.height = A.naturalHeight || A.height) : typeof VideoFrame < "u" && A instanceof VideoFrame ? (c.width = A.displayWidth,
        c.height = A.displayHeight) : (c.width = A.width,
        c.height = A.height),
        c
    }
    this.allocateTextureUnit = U,
    this.resetTextureUnits = x,
    this.setTexture2D = P,
    this.setTexture2DArray = H,
    this.setTexture3D = q,
    this.setTextureCube = K,
    this.rebindTextures = De,
    this.setupRenderTarget = Ue,
    this.updateRenderTargetMipmap = I,
    this.updateMultisampleRenderTarget = qe,
    this.setupDepthRenderbuffer = te,
    this.setupFrameBufferTexture = k,
    this.useMultisampledRTT = Be
}
function eg(i, e) {
    function t(n, r=Ln) {
        let s;
        const a = Ze.getTransfer(r);
        if (n === Nn)
            return i.UNSIGNED_BYTE;
        if (n === kl)
            return i.UNSIGNED_SHORT_4_4_4_4;
        if (n === Hl)
            return i.UNSIGNED_SHORT_5_5_5_1;
        if (n === Mh)
            return i.UNSIGNED_INT_5_9_9_9_REV;
        if (n === vh)
            return i.BYTE;
        if (n === xh)
            return i.SHORT;
        if (n === zl)
            return i.UNSIGNED_SHORT;
        if (n === Vl)
            return i.INT;
        if (n === Ii)
            return i.UNSIGNED_INT;
        if (n === xn)
            return i.FLOAT;
        if (n === ss)
            return i.HALF_FLOAT;
        if (n === yh)
            return i.ALPHA;
        if (n === Sh)
            return i.RGB;
        if (n === Yt)
            return i.RGBA;
        if (n === Eh)
            return i.LUMINANCE;
        if (n === Th)
            return i.LUMINANCE_ALPHA;
        if (n === Ri)
            return i.DEPTH_COMPONENT;
        if (n === sr)
            return i.DEPTH_STENCIL;
        if (n === Ah)
            return i.RED;
        if (n === Gl)
            return i.RED_INTEGER;
        if (n === bh)
            return i.RG;
        if (n === Wl)
            return i.RG_INTEGER;
        if (n === Xl)
            return i.RGBA_INTEGER;
        if (n === xs || n === Ms || n === ys || n === Ss)
            if (a === je)
                if (s = e.get("WEBGL_compressed_texture_s3tc_srgb"),
                s !== null) {
                    if (n === xs)
                        return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;
                    if (n === Ms)
                        return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
                    if (n === ys)
                        return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
                    if (n === Ss)
                        return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT
                } else
                    return null;
            else if (s = e.get("WEBGL_compressed_texture_s3tc"),
            s !== null) {
                if (n === xs)
                    return s.COMPRESSED_RGB_S3TC_DXT1_EXT;
                if (n === Ms)
                    return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;
                if (n === ys)
                    return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;
                if (n === Ss)
                    return s.COMPRESSED_RGBA_S3TC_DXT5_EXT
            } else
                return null;
        if (n === ja || n === Ja || n === Qa || n === eo)
            if (s = e.get("WEBGL_compressed_texture_pvrtc"),
            s !== null) {
                if (n === ja)
                    return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
                if (n === Ja)
                    return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
                if (n === Qa)
                    return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
                if (n === eo)
                    return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG
            } else
                return null;
        if (n === to || n === no || n === io)
            if (s = e.get("WEBGL_compressed_texture_etc"),
            s !== null) {
                if (n === to || n === no)
                    return a === je ? s.COMPRESSED_SRGB8_ETC2 : s.COMPRESSED_RGB8_ETC2;
                if (n === io)
                    return a === je ? s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : s.COMPRESSED_RGBA8_ETC2_EAC
            } else
                return null;
        if (n === ro || n === so || n === ao || n === oo || n === lo || n === co || n === ho || n === uo || n === fo || n === po || n === mo || n === go || n === _o || n === vo)
            if (s = e.get("WEBGL_compressed_texture_astc"),
            s !== null) {
                if (n === ro)
                    return a === je ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR : s.COMPRESSED_RGBA_ASTC_4x4_KHR;
                if (n === so)
                    return a === je ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR : s.COMPRESSED_RGBA_ASTC_5x4_KHR;
                if (n === ao)
                    return a === je ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR : s.COMPRESSED_RGBA_ASTC_5x5_KHR;
                if (n === oo)
                    return a === je ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR : s.COMPRESSED_RGBA_ASTC_6x5_KHR;
                if (n === lo)
                    return a === je ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR : s.COMPRESSED_RGBA_ASTC_6x6_KHR;
                if (n === co)
                    return a === je ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR : s.COMPRESSED_RGBA_ASTC_8x5_KHR;
                if (n === ho)
                    return a === je ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR : s.COMPRESSED_RGBA_ASTC_8x6_KHR;
                if (n === uo)
                    return a === je ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR : s.COMPRESSED_RGBA_ASTC_8x8_KHR;
                if (n === fo)
                    return a === je ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR : s.COMPRESSED_RGBA_ASTC_10x5_KHR;
                if (n === po)
                    return a === je ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR : s.COMPRESSED_RGBA_ASTC_10x6_KHR;
                if (n === mo)
                    return a === je ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR : s.COMPRESSED_RGBA_ASTC_10x8_KHR;
                if (n === go)
                    return a === je ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR : s.COMPRESSED_RGBA_ASTC_10x10_KHR;
                if (n === _o)
                    return a === je ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR : s.COMPRESSED_RGBA_ASTC_12x10_KHR;
                if (n === vo)
                    return a === je ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR : s.COMPRESSED_RGBA_ASTC_12x12_KHR
            } else
                return null;
        if (n === Es || n === xo || n === Mo)
            if (s = e.get("EXT_texture_compression_bptc"),
            s !== null) {
                if (n === Es)
                    return a === je ? s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT : s.COMPRESSED_RGBA_BPTC_UNORM_EXT;
                if (n === xo)
                    return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;
                if (n === Mo)
                    return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT
            } else
                return null;
        if (n === wh || n === yo || n === So || n === Eo)
            if (s = e.get("EXT_texture_compression_rgtc"),
            s !== null) {
                if (n === Es)
                    return s.COMPRESSED_RED_RGTC1_EXT;
                if (n === yo)
                    return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;
                if (n === So)
                    return s.COMPRESSED_RED_GREEN_RGTC2_EXT;
                if (n === Eo)
                    return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT
            } else
                return null;
        return n === fr ? i.UNSIGNED_INT_24_8 : i[n] !== void 0 ? i[n] : null
    }
    return {
        convert: t
    }
}
class tg extends wt {
    constructor(e=[]) {
        super(),
        this.isArrayCamera = !0,
        this.cameras = e
    }
}
class Ti extends nt {
    constructor() {
        super(),
        this.isGroup = !0,
        this.type = "Group"
    }
}
const ng = {
    type: "move"
};
class Zs {
    constructor() {
        this._targetRay = null,
        this._grip = null,
        this._hand = null
    }
    getHandSpace() {
        return this._hand === null && (this._hand = new Ti,
        this._hand.matrixAutoUpdate = !1,
        this._hand.visible = !1,
        this._hand.joints = {},
        this._hand.inputState = {
            pinching: !1
        }),
        this._hand
    }
    getTargetRaySpace() {
        return this._targetRay === null && (this._targetRay = new Ti,
        this._targetRay.matrixAutoUpdate = !1,
        this._targetRay.visible = !1,
        this._targetRay.hasLinearVelocity = !1,
        this._targetRay.linearVelocity = new R,
        this._targetRay.hasAngularVelocity = !1,
        this._targetRay.angularVelocity = new R),
        this._targetRay
    }
    getGripSpace() {
        return this._grip === null && (this._grip = new Ti,
        this._grip.matrixAutoUpdate = !1,
        this._grip.visible = !1,
        this._grip.hasLinearVelocity = !1,
        this._grip.linearVelocity = new R,
        this._grip.hasAngularVelocity = !1,
        this._grip.angularVelocity = new R),
        this._grip
    }
    dispatchEvent(e) {
        return this._targetRay !== null && this._targetRay.dispatchEvent(e),
        this._grip !== null && this._grip.dispatchEvent(e),
        this._hand !== null && this._hand.dispatchEvent(e),
        this
    }
    connect(e) {
        if (e && e.hand) {
            const t = this._hand;
            if (t)
                for (const n of e.hand.values())
                    this._getHandJoint(t, n)
        }
        return this.dispatchEvent({
            type: "connected",
            data: e
        }),
        this
    }
    disconnect(e) {
        return this.dispatchEvent({
            type: "disconnected",
            data: e
        }),
        this._targetRay !== null && (this._targetRay.visible = !1),
        this._grip !== null && (this._grip.visible = !1),
        this._hand !== null && (this._hand.visible = !1),
        this
    }
    update(e, t, n) {
        let r = null
          , s = null
          , a = null;
        const o = this._targetRay
          , l = this._grip
          , c = this._hand;
        if (e && t.session.visibilityState !== "visible-blurred") {
            if (c && e.hand) {
                a = !0;
                for (const _ of e.hand.values()) {
                    const p = t.getJointPose(_, n)
                      , m = this._getHandJoint(c, _);
                    p !== null && (m.matrix.fromArray(p.transform.matrix),
                    m.matrix.decompose(m.position, m.rotation, m.scale),
                    m.matrixWorldNeedsUpdate = !0,
                    m.jointRadius = p.radius),
                    m.visible = p !== null
                }
                const h = c.joints["index-finger-tip"]
                  , u = c.joints["thumb-tip"]
                  , f = h.position.distanceTo(u.position)
                  , d = .02
                  , g = .005;
                c.inputState.pinching && f > d + g ? (c.inputState.pinching = !1,
                this.dispatchEvent({
                    type: "pinchend",
                    handedness: e.handedness,
                    target: this
                })) : !c.inputState.pinching && f <= d - g && (c.inputState.pinching = !0,
                this.dispatchEvent({
                    type: "pinchstart",
                    handedness: e.handedness,
                    target: this
                }))
            } else
                l !== null && e.gripSpace && (s = t.getPose(e.gripSpace, n),
                s !== null && (l.matrix.fromArray(s.transform.matrix),
                l.matrix.decompose(l.position, l.rotation, l.scale),
                l.matrixWorldNeedsUpdate = !0,
                s.linearVelocity ? (l.hasLinearVelocity = !0,
                l.linearVelocity.copy(s.linearVelocity)) : l.hasLinearVelocity = !1,
                s.angularVelocity ? (l.hasAngularVelocity = !0,
                l.angularVelocity.copy(s.angularVelocity)) : l.hasAngularVelocity = !1));
            o !== null && (r = t.getPose(e.targetRaySpace, n),
            r === null && s !== null && (r = s),
            r !== null && (o.matrix.fromArray(r.transform.matrix),
            o.matrix.decompose(o.position, o.rotation, o.scale),
            o.matrixWorldNeedsUpdate = !0,
            r.linearVelocity ? (o.hasLinearVelocity = !0,
            o.linearVelocity.copy(r.linearVelocity)) : o.hasLinearVelocity = !1,
            r.angularVelocity ? (o.hasAngularVelocity = !0,
            o.angularVelocity.copy(r.angularVelocity)) : o.hasAngularVelocity = !1,
            this.dispatchEvent(ng)))
        }
        return o !== null && (o.visible = r !== null),
        l !== null && (l.visible = s !== null),
        c !== null && (c.visible = a !== null),
        this
    }
    _getHandJoint(e, t) {
        if (e.joints[t.jointName] === void 0) {
            const n = new Ti;
            n.matrixAutoUpdate = !1,
            n.visible = !1,
            e.joints[t.jointName] = n,
            e.add(n)
        }
        return e.joints[t.jointName]
    }
}
const ig = `
void main() {

	gl_Position = vec4( position, 1.0 );

}`
  , rg = `
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;
class sg {
    constructor() {
        this.texture = null,
        this.mesh = null,
        this.depthNear = 0,
        this.depthFar = 0
    }
    init(e, t, n) {
        if (this.texture === null) {
            const r = new ut
              , s = e.properties.get(r);
            s.__webglTexture = t.texture,
            (t.depthNear != n.depthNear || t.depthFar != n.depthFar) && (this.depthNear = t.depthNear,
            this.depthFar = t.depthFar),
            this.texture = r
        }
    }
    render(e, t) {
        if (this.texture !== null) {
            if (this.mesh === null) {
                const n = t.cameras[0].viewport
                  , r = new Fn({
                    vertexShader: ig,
                    fragmentShader: rg,
                    uniforms: {
                        depthColor: {
                            value: this.texture
                        },
                        depthWidth: {
                            value: n.z
                        },
                        depthHeight: {
                            value: n.w
                        }
                    }
                });
                this.mesh = new zt(new ls(20,20),r)
            }
            e.render(this.mesh, t)
        }
    }
    reset() {
        this.texture = null,
        this.mesh = null
    }
}
class ag extends Ni {
    constructor(e, t) {
        super();
        const n = this;
        let r = null
          , s = 1
          , a = null
          , o = "local-floor"
          , l = 1
          , c = null
          , h = null
          , u = null
          , f = null
          , d = null
          , g = null;
        const _ = new sg
          , p = t.getContextAttributes();
        let m = null
          , T = null;
        const v = []
          , S = []
          , D = new Ie;
        let b = null;
        const w = new wt;
        w.layers.enable(1),
        w.viewport = new We;
        const B = new wt;
        B.layers.enable(2),
        B.viewport = new We;
        const E = [w, B]
          , x = new tg;
        x.layers.enable(1),
        x.layers.enable(2);
        let U = null
          , G = null;
        this.cameraAutoUpdate = !0,
        this.enabled = !1,
        this.isPresenting = !1,
        this.getController = function(k) {
            let J = v[k];
            return J === void 0 && (J = new Zs,
            v[k] = J),
            J.getTargetRaySpace()
        }
        ,
        this.getControllerGrip = function(k) {
            let J = v[k];
            return J === void 0 && (J = new Zs,
            v[k] = J),
            J.getGripSpace()
        }
        ,
        this.getHand = function(k) {
            let J = v[k];
            return J === void 0 && (J = new Zs,
            v[k] = J),
            J.getHandSpace()
        }
        ;
        function P(k) {
            const J = S.indexOf(k.inputSource);
            if (J === -1)
                return;
            const ce = v[J];
            ce !== void 0 && (ce.update(k.inputSource, k.frame, c || a),
            ce.dispatchEvent({
                type: k.type,
                data: k.inputSource
            }))
        }
        function H() {
            r.removeEventListener("select", P),
            r.removeEventListener("selectstart", P),
            r.removeEventListener("selectend", P),
            r.removeEventListener("squeeze", P),
            r.removeEventListener("squeezestart", P),
            r.removeEventListener("squeezeend", P),
            r.removeEventListener("end", H),
            r.removeEventListener("inputsourceschange", q);
            for (let k = 0; k < v.length; k++) {
                const J = S[k];
                J !== null && (S[k] = null,
                v[k].disconnect(J))
            }
            U = null,
            G = null,
            _.reset(),
            e.setRenderTarget(m),
            d = null,
            f = null,
            u = null,
            r = null,
            T = null,
            Ve.stop(),
            n.isPresenting = !1,
            e.setPixelRatio(b),
            e.setSize(D.width, D.height, !1),
            n.dispatchEvent({
                type: "sessionend"
            })
        }
        this.setFramebufferScaleFactor = function(k) {
            s = k,
            n.isPresenting === !0 && console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")
        }
        ,
        this.setReferenceSpaceType = function(k) {
            o = k,
            n.isPresenting === !0 && console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")
        }
        ,
        this.getReferenceSpace = function() {
            return c || a
        }
        ,
        this.setReferenceSpace = function(k) {
            c = k
        }
        ,
        this.getBaseLayer = function() {
            return f !== null ? f : d
        }
        ,
        this.getBinding = function() {
            return u
        }
        ,
        this.getFrame = function() {
            return g
        }
        ,
        this.getSession = function() {
            return r
        }
        ,
        this.setSession = async function(k) {
            if (r = k,
            r !== null) {
                if (m = e.getRenderTarget(),
                r.addEventListener("select", P),
                r.addEventListener("selectstart", P),
                r.addEventListener("selectend", P),
                r.addEventListener("squeeze", P),
                r.addEventListener("squeezestart", P),
                r.addEventListener("squeezeend", P),
                r.addEventListener("end", H),
                r.addEventListener("inputsourceschange", q),
                p.xrCompatible !== !0 && await t.makeXRCompatible(),
                b = e.getPixelRatio(),
                e.getSize(D),
                r.renderState.layers === void 0) {
                    const J = {
                        antialias: p.antialias,
                        alpha: !0,
                        depth: p.depth,
                        stencil: p.stencil,
                        framebufferScaleFactor: s
                    };
                    d = new XRWebGLLayer(r,t,J),
                    r.updateRenderState({
                        baseLayer: d
                    }),
                    e.setPixelRatio(1),
                    e.setSize(d.framebufferWidth, d.framebufferHeight, !1),
                    T = new Qn(d.framebufferWidth,d.framebufferHeight,{
                        format: Yt,
                        type: Nn,
                        colorSpace: e.outputColorSpace,
                        stencilBuffer: p.stencil
                    })
                } else {
                    let J = null
                      , ce = null
                      , te = null;
                    p.depth && (te = p.stencil ? t.DEPTH24_STENCIL8 : t.DEPTH_COMPONENT24,
                    J = p.stencil ? sr : Ri,
                    ce = p.stencil ? fr : Ii);
                    const De = {
                        colorFormat: t.RGBA8,
                        depthFormat: te,
                        scaleFactor: s
                    };
                    u = new XRWebGLBinding(r,t),
                    f = u.createProjectionLayer(De),
                    r.updateRenderState({
                        layers: [f]
                    }),
                    e.setPixelRatio(1),
                    e.setSize(f.textureWidth, f.textureHeight, !1),
                    T = new Qn(f.textureWidth,f.textureHeight,{
                        format: Yt,
                        type: Nn,
                        depthTexture: new ic(f.textureWidth,f.textureHeight,ce,void 0,void 0,void 0,void 0,void 0,void 0,J),
                        stencilBuffer: p.stencil,
                        colorSpace: e.outputColorSpace,
                        samples: p.antialias ? 4 : 0,
                        resolveDepthBuffer: f.ignoreDepthValues === !1
                    })
                }
                T.isXRRenderTarget = !0,
                this.setFoveation(l),
                c = null,
                a = await r.requestReferenceSpace(o),
                Ve.setContext(r),
                Ve.start(),
                n.isPresenting = !0,
                n.dispatchEvent({
                    type: "sessionstart"
                })
            }
        }
        ,
        this.getEnvironmentBlendMode = function() {
            if (r !== null)
                return r.environmentBlendMode
        }
        ;
        function q(k) {
            for (let J = 0; J < k.removed.length; J++) {
                const ce = k.removed[J]
                  , te = S.indexOf(ce);
                te >= 0 && (S[te] = null,
                v[te].disconnect(ce))
            }
            for (let J = 0; J < k.added.length; J++) {
                const ce = k.added[J];
                let te = S.indexOf(ce);
                if (te === -1) {
                    for (let Ue = 0; Ue < v.length; Ue++)
                        if (Ue >= S.length) {
                            S.push(ce),
                            te = Ue;
                            break
                        } else if (S[Ue] === null) {
                            S[Ue] = ce,
                            te = Ue;
                            break
                        }
                    if (te === -1)
                        break
                }
                const De = v[te];
                De && De.connect(ce)
            }
        }
        const K = new R
          , ne = new R;
        function z(k, J, ce) {
            K.setFromMatrixPosition(J.matrixWorld),
            ne.setFromMatrixPosition(ce.matrixWorld);
            const te = K.distanceTo(ne)
              , De = J.projectionMatrix.elements
              , Ue = ce.projectionMatrix.elements
              , I = De[14] / (De[10] - 1)
              , Ke = De[14] / (De[10] + 1)
              , ge = (De[9] + 1) / De[5]
              , qe = (De[9] - 1) / De[5]
              , ye = (De[8] - 1) / De[0]
              , Be = (Ue[8] + 1) / Ue[0]
              , Ne = I * ye
              , ze = I * Be
              , it = te / (-ye + Be)
              , A = it * -ye;
            J.matrixWorld.decompose(k.position, k.quaternion, k.scale),
            k.translateX(A),
            k.translateZ(it),
            k.matrixWorld.compose(k.position, k.quaternion, k.scale),
            k.matrixWorldInverse.copy(k.matrixWorld).invert();
            const M = I + it
              , V = Ke + it
              , X = Ne - A
              , Z = ze + (te - A)
              , $ = ge * Ke / V * M
              , _e = qe * Ke / V * M;
            k.projectionMatrix.makePerspective(X, Z, $, _e, M, V),
            k.projectionMatrixInverse.copy(k.projectionMatrix).invert()
        }
        function j(k, J) {
            J === null ? k.matrixWorld.copy(k.matrix) : k.matrixWorld.multiplyMatrices(J.matrixWorld, k.matrix),
            k.matrixWorldInverse.copy(k.matrixWorld).invert()
        }
        this.updateCamera = function(k) {
            if (r === null)
                return;
            _.texture !== null && (k.near = _.depthNear,
            k.far = _.depthFar),
            x.near = B.near = w.near = k.near,
            x.far = B.far = w.far = k.far,
            (U !== x.near || G !== x.far) && (r.updateRenderState({
                depthNear: x.near,
                depthFar: x.far
            }),
            U = x.near,
            G = x.far,
            w.near = U,
            w.far = G,
            B.near = U,
            B.far = G,
            w.updateProjectionMatrix(),
            B.updateProjectionMatrix(),
            k.updateProjectionMatrix());
            const J = k.parent
              , ce = x.cameras;
            j(x, J);
            for (let te = 0; te < ce.length; te++)
                j(ce[te], J);
            ce.length === 2 ? z(x, w, B) : x.projectionMatrix.copy(w.projectionMatrix),
            Q(k, x, J)
        }
        ;
        function Q(k, J, ce) {
            ce === null ? k.matrix.copy(J.matrixWorld) : (k.matrix.copy(ce.matrixWorld),
            k.matrix.invert(),
            k.matrix.multiply(J.matrixWorld)),
            k.matrix.decompose(k.position, k.quaternion, k.scale),
            k.updateMatrixWorld(!0),
            k.projectionMatrix.copy(J.projectionMatrix),
            k.projectionMatrixInverse.copy(J.projectionMatrixInverse),
            k.isPerspectiveCamera && (k.fov = Di * 2 * Math.atan(1 / k.projectionMatrix.elements[5]),
            k.zoom = 1)
        }
        this.getCamera = function() {
            return x
        }
        ,
        this.getFoveation = function() {
            if (!(f === null && d === null))
                return l
        }
        ,
        this.setFoveation = function(k) {
            l = k,
            f !== null && (f.fixedFoveation = k),
            d !== null && d.fixedFoveation !== void 0 && (d.fixedFoveation = k)
        }
        ,
        this.hasDepthSensing = function() {
            return _.texture !== null
        }
        ;
        let fe = null;
        function we(k, J) {
            if (h = J.getViewerPose(c || a),
            g = J,
            h !== null) {
                const ce = h.views;
                d !== null && (e.setRenderTargetFramebuffer(T, d.framebuffer),
                e.setRenderTarget(T));
                let te = !1;
                ce.length !== x.cameras.length && (x.cameras.length = 0,
                te = !0);
                for (let Ue = 0; Ue < ce.length; Ue++) {
                    const I = ce[Ue];
                    let Ke = null;
                    if (d !== null)
                        Ke = d.getViewport(I);
                    else {
                        const qe = u.getViewSubImage(f, I);
                        Ke = qe.viewport,
                        Ue === 0 && (e.setRenderTargetTextures(T, qe.colorTexture, f.ignoreDepthValues ? void 0 : qe.depthStencilTexture),
                        e.setRenderTarget(T))
                    }
                    let ge = E[Ue];
                    ge === void 0 && (ge = new wt,
                    ge.layers.enable(Ue),
                    ge.viewport = new We,
                    E[Ue] = ge),
                    ge.matrix.fromArray(I.transform.matrix),
                    ge.matrix.decompose(ge.position, ge.quaternion, ge.scale),
                    ge.projectionMatrix.fromArray(I.projectionMatrix),
                    ge.projectionMatrixInverse.copy(ge.projectionMatrix).invert(),
                    ge.viewport.set(Ke.x, Ke.y, Ke.width, Ke.height),
                    Ue === 0 && (x.matrix.copy(ge.matrix),
                    x.matrix.decompose(x.position, x.quaternion, x.scale)),
                    te === !0 && x.cameras.push(ge)
                }
                const De = r.enabledFeatures;
                if (De && De.includes("depth-sensing")) {
                    const Ue = u.getDepthInformation(ce[0]);
                    Ue && Ue.isValid && Ue.texture && _.init(e, Ue, r.renderState)
                }
            }
            for (let ce = 0; ce < v.length; ce++) {
                const te = S[ce]
                  , De = v[ce];
                te !== null && De !== void 0 && De.update(te, J, c || a)
            }
            _.render(e, x),
            fe && fe(k, J),
            J.detectedPlanes && n.dispatchEvent({
                type: "planesdetected",
                data: J
            }),
            g = null
        }
        const Ve = new nc;
        Ve.setAnimationLoop(we),
        this.setAnimationLoop = function(k) {
            fe = k
        }
        ,
        this.dispose = function() {}
    }
}
const Yn = new st
  , og = new pe;
function lg(i, e) {
    function t(p, m) {
        p.matrixAutoUpdate === !0 && p.updateMatrix(),
        m.value.copy(p.matrix)
    }
    function n(p, m) {
        m.color.getRGB(p.fogColor.value, Ql(i)),
        m.isFog ? (p.fogNear.value = m.near,
        p.fogFar.value = m.far) : m.isFogExp2 && (p.fogDensity.value = m.density)
    }
    function r(p, m, T, v, S) {
        m.isMeshBasicMaterial || m.isMeshLambertMaterial ? s(p, m) : m.isMeshToonMaterial ? (s(p, m),
        u(p, m)) : m.isMeshPhongMaterial ? (s(p, m),
        h(p, m)) : m.isMeshStandardMaterial ? (s(p, m),
        f(p, m),
        m.isMeshPhysicalMaterial && d(p, m, S)) : m.isMeshMatcapMaterial ? (s(p, m),
        g(p, m)) : m.isMeshDepthMaterial ? s(p, m) : m.isMeshDistanceMaterial ? (s(p, m),
        _(p, m)) : m.isMeshNormalMaterial ? s(p, m) : m.isLineBasicMaterial ? (a(p, m),
        m.isLineDashedMaterial && o(p, m)) : m.isPointsMaterial ? l(p, m, T, v) : m.isSpriteMaterial ? c(p, m) : m.isShadowMaterial ? (p.color.value.copy(m.color),
        p.opacity.value = m.opacity) : m.isShaderMaterial && (m.uniformsNeedUpdate = !1)
    }
    function s(p, m) {
        p.opacity.value = m.opacity,
        m.color && p.diffuse.value.copy(m.color),
        m.emissive && p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),
        m.map && (p.map.value = m.map,
        t(m.map, p.mapTransform)),
        m.alphaMap && (p.alphaMap.value = m.alphaMap,
        t(m.alphaMap, p.alphaMapTransform)),
        m.bumpMap && (p.bumpMap.value = m.bumpMap,
        t(m.bumpMap, p.bumpMapTransform),
        p.bumpScale.value = m.bumpScale,
        m.side === It && (p.bumpScale.value *= -1)),
        m.normalMap && (p.normalMap.value = m.normalMap,
        t(m.normalMap, p.normalMapTransform),
        p.normalScale.value.copy(m.normalScale),
        m.side === It && p.normalScale.value.negate()),
        m.displacementMap && (p.displacementMap.value = m.displacementMap,
        t(m.displacementMap, p.displacementMapTransform),
        p.displacementScale.value = m.displacementScale,
        p.displacementBias.value = m.displacementBias),
        m.emissiveMap && (p.emissiveMap.value = m.emissiveMap,
        t(m.emissiveMap, p.emissiveMapTransform)),
        m.specularMap && (p.specularMap.value = m.specularMap,
        t(m.specularMap, p.specularMapTransform)),
        m.alphaTest > 0 && (p.alphaTest.value = m.alphaTest);
        const T = e.get(m)
          , v = T.envMap
          , S = T.envMapRotation;
        if (v && (p.envMap.value = v,
        Yn.copy(S),
        Yn.x *= -1,
        Yn.y *= -1,
        Yn.z *= -1,
        v.isCubeTexture && v.isRenderTargetTexture === !1 && (Yn.y *= -1,
        Yn.z *= -1),
        p.envMapRotation.value.setFromMatrix4(og.makeRotationFromEuler(Yn)),
        p.flipEnvMap.value = v.isCubeTexture && v.isRenderTargetTexture === !1 ? -1 : 1,
        p.reflectivity.value = m.reflectivity,
        p.ior.value = m.ior,
        p.refractionRatio.value = m.refractionRatio),
        m.lightMap) {
            p.lightMap.value = m.lightMap;
            const D = i._useLegacyLights === !0 ? Math.PI : 1;
            p.lightMapIntensity.value = m.lightMapIntensity * D,
            t(m.lightMap, p.lightMapTransform)
        }
        m.aoMap && (p.aoMap.value = m.aoMap,
        p.aoMapIntensity.value = m.aoMapIntensity,
        t(m.aoMap, p.aoMapTransform))
    }
    function a(p, m) {
        p.diffuse.value.copy(m.color),
        p.opacity.value = m.opacity,
        m.map && (p.map.value = m.map,
        t(m.map, p.mapTransform))
    }
    function o(p, m) {
        p.dashSize.value = m.dashSize,
        p.totalSize.value = m.dashSize + m.gapSize,
        p.scale.value = m.scale
    }
    function l(p, m, T, v) {
        p.diffuse.value.copy(m.color),
        p.opacity.value = m.opacity,
        p.size.value = m.size * T,
        p.scale.value = v * .5,
        m.map && (p.map.value = m.map,
        t(m.map, p.uvTransform)),
        m.alphaMap && (p.alphaMap.value = m.alphaMap,
        t(m.alphaMap, p.alphaMapTransform)),
        m.alphaTest > 0 && (p.alphaTest.value = m.alphaTest)
    }
    function c(p, m) {
        p.diffuse.value.copy(m.color),
        p.opacity.value = m.opacity,
        p.rotation.value = m.rotation,
        m.map && (p.map.value = m.map,
        t(m.map, p.mapTransform)),
        m.alphaMap && (p.alphaMap.value = m.alphaMap,
        t(m.alphaMap, p.alphaMapTransform)),
        m.alphaTest > 0 && (p.alphaTest.value = m.alphaTest)
    }
    function h(p, m) {
        p.specular.value.copy(m.specular),
        p.shininess.value = Math.max(m.shininess, 1e-4)
    }
    function u(p, m) {
        m.gradientMap && (p.gradientMap.value = m.gradientMap)
    }
    function f(p, m) {
        p.metalness.value = m.metalness,
        m.metalnessMap && (p.metalnessMap.value = m.metalnessMap,
        t(m.metalnessMap, p.metalnessMapTransform)),
        p.roughness.value = m.roughness,
        m.roughnessMap && (p.roughnessMap.value = m.roughnessMap,
        t(m.roughnessMap, p.roughnessMapTransform)),
        m.envMap && (p.envMapIntensity.value = m.envMapIntensity)
    }
    function d(p, m, T) {
        p.ior.value = m.ior,
        m.sheen > 0 && (p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),
        p.sheenRoughness.value = m.sheenRoughness,
        m.sheenColorMap && (p.sheenColorMap.value = m.sheenColorMap,
        t(m.sheenColorMap, p.sheenColorMapTransform)),
        m.sheenRoughnessMap && (p.sheenRoughnessMap.value = m.sheenRoughnessMap,
        t(m.sheenRoughnessMap, p.sheenRoughnessMapTransform))),
        m.clearcoat > 0 && (p.clearcoat.value = m.clearcoat,
        p.clearcoatRoughness.value = m.clearcoatRoughness,
        m.clearcoatMap && (p.clearcoatMap.value = m.clearcoatMap,
        t(m.clearcoatMap, p.clearcoatMapTransform)),
        m.clearcoatRoughnessMap && (p.clearcoatRoughnessMap.value = m.clearcoatRoughnessMap,
        t(m.clearcoatRoughnessMap, p.clearcoatRoughnessMapTransform)),
        m.clearcoatNormalMap && (p.clearcoatNormalMap.value = m.clearcoatNormalMap,
        t(m.clearcoatNormalMap, p.clearcoatNormalMapTransform),
        p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),
        m.side === It && p.clearcoatNormalScale.value.negate())),
        m.dispersion > 0 && (p.dispersion.value = m.dispersion),
        m.iridescence > 0 && (p.iridescence.value = m.iridescence,
        p.iridescenceIOR.value = m.iridescenceIOR,
        p.iridescenceThicknessMinimum.value = m.iridescenceThicknessRange[0],
        p.iridescenceThicknessMaximum.value = m.iridescenceThicknessRange[1],
        m.iridescenceMap && (p.iridescenceMap.value = m.iridescenceMap,
        t(m.iridescenceMap, p.iridescenceMapTransform)),
        m.iridescenceThicknessMap && (p.iridescenceThicknessMap.value = m.iridescenceThicknessMap,
        t(m.iridescenceThicknessMap, p.iridescenceThicknessMapTransform))),
        m.transmission > 0 && (p.transmission.value = m.transmission,
        p.transmissionSamplerMap.value = T.texture,
        p.transmissionSamplerSize.value.set(T.width, T.height),
        m.transmissionMap && (p.transmissionMap.value = m.transmissionMap,
        t(m.transmissionMap, p.transmissionMapTransform)),
        p.thickness.value = m.thickness,
        m.thicknessMap && (p.thicknessMap.value = m.thicknessMap,
        t(m.thicknessMap, p.thicknessMapTransform)),
        p.attenuationDistance.value = m.attenuationDistance,
        p.attenuationColor.value.copy(m.attenuationColor)),
        m.anisotropy > 0 && (p.anisotropyVector.value.set(m.anisotropy * Math.cos(m.anisotropyRotation), m.anisotropy * Math.sin(m.anisotropyRotation)),
        m.anisotropyMap && (p.anisotropyMap.value = m.anisotropyMap,
        t(m.anisotropyMap, p.anisotropyMapTransform))),
        p.specularIntensity.value = m.specularIntensity,
        p.specularColor.value.copy(m.specularColor),
        m.specularColorMap && (p.specularColorMap.value = m.specularColorMap,
        t(m.specularColorMap, p.specularColorMapTransform)),
        m.specularIntensityMap && (p.specularIntensityMap.value = m.specularIntensityMap,
        t(m.specularIntensityMap, p.specularIntensityMapTransform))
    }
    function g(p, m) {
        m.matcap && (p.matcap.value = m.matcap)
    }
    function _(p, m) {
        const T = e.get(m).light;
        p.referencePosition.value.setFromMatrixPosition(T.matrixWorld),
        p.nearDistance.value = T.shadow.camera.near,
        p.farDistance.value = T.shadow.camera.far
    }
    return {
        refreshFogUniforms: n,
        refreshMaterialUniforms: r
    }
}
function cg(i, e, t, n) {
    let r = {}
      , s = {}
      , a = [];
    const o = i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);
    function l(T, v) {
        const S = v.program;
        n.uniformBlockBinding(T, S)
    }
    function c(T, v) {
        let S = r[T.id];
        S === void 0 && (g(T),
        S = h(T),
        r[T.id] = S,
        T.addEventListener("dispose", p));
        const D = v.program;
        n.updateUBOMapping(T, D);
        const b = e.render.frame;
        s[T.id] !== b && (f(T),
        s[T.id] = b)
    }
    function h(T) {
        const v = u();
        T.__bindingPointIndex = v;
        const S = i.createBuffer()
          , D = T.__size
          , b = T.usage;
        return i.bindBuffer(i.UNIFORM_BUFFER, S),
        i.bufferData(i.UNIFORM_BUFFER, D, b),
        i.bindBuffer(i.UNIFORM_BUFFER, null),
        i.bindBufferBase(i.UNIFORM_BUFFER, v, S),
        S
    }
    function u() {
        for (let T = 0; T < o; T++)
            if (a.indexOf(T) === -1)
                return a.push(T),
                T;
        return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),
        0
    }
    function f(T) {
        const v = r[T.id]
          , S = T.uniforms
          , D = T.__cache;
        i.bindBuffer(i.UNIFORM_BUFFER, v);
        for (let b = 0, w = S.length; b < w; b++) {
            const B = Array.isArray(S[b]) ? S[b] : [S[b]];
            for (let E = 0, x = B.length; E < x; E++) {
                const U = B[E];
                if (d(U, b, E, D) === !0) {
                    const G = U.__offset
                      , P = Array.isArray(U.value) ? U.value : [U.value];
                    let H = 0;
                    for (let q = 0; q < P.length; q++) {
                        const K = P[q]
                          , ne = _(K);
                        typeof K == "number" || typeof K == "boolean" ? (U.__data[0] = K,
                        i.bufferSubData(i.UNIFORM_BUFFER, G + H, U.__data)) : K.isMatrix3 ? (U.__data[0] = K.elements[0],
                        U.__data[1] = K.elements[1],
                        U.__data[2] = K.elements[2],
                        U.__data[3] = 0,
                        U.__data[4] = K.elements[3],
                        U.__data[5] = K.elements[4],
                        U.__data[6] = K.elements[5],
                        U.__data[7] = 0,
                        U.__data[8] = K.elements[6],
                        U.__data[9] = K.elements[7],
                        U.__data[10] = K.elements[8],
                        U.__data[11] = 0) : (K.toArray(U.__data, H),
                        H += ne.storage / Float32Array.BYTES_PER_ELEMENT)
                    }
                    i.bufferSubData(i.UNIFORM_BUFFER, G, U.__data)
                }
            }
        }
        i.bindBuffer(i.UNIFORM_BUFFER, null)
    }
    function d(T, v, S, D) {
        const b = T.value
          , w = v + "_" + S;
        if (D[w] === void 0)
            return typeof b == "number" || typeof b == "boolean" ? D[w] = b : D[w] = b.clone(),
            !0;
        {
            const B = D[w];
            if (typeof b == "number" || typeof b == "boolean") {
                if (B !== b)
                    return D[w] = b,
                    !0
            } else if (B.equals(b) === !1)
                return B.copy(b),
                !0
        }
        return !1
    }
    function g(T) {
        const v = T.uniforms;
        let S = 0;
        const D = 16;
        for (let w = 0, B = v.length; w < B; w++) {
            const E = Array.isArray(v[w]) ? v[w] : [v[w]];
            for (let x = 0, U = E.length; x < U; x++) {
                const G = E[x]
                  , P = Array.isArray(G.value) ? G.value : [G.value];
                for (let H = 0, q = P.length; H < q; H++) {
                    const K = P[H]
                      , ne = _(K)
                      , z = S % D;
                    z !== 0 && D - z < ne.boundary && (S += D - z),
                    G.__data = new Float32Array(ne.storage / Float32Array.BYTES_PER_ELEMENT),
                    G.__offset = S,
                    S += ne.storage
                }
            }
        }
        const b = S % D;
        return b > 0 && (S += D - b),
        T.__size = S,
        T.__cache = {},
        this
    }
    function _(T) {
        const v = {
            boundary: 0,
            storage: 0
        };
        return typeof T == "number" || typeof T == "boolean" ? (v.boundary = 4,
        v.storage = 4) : T.isVector2 ? (v.boundary = 8,
        v.storage = 8) : T.isVector3 || T.isColor ? (v.boundary = 16,
        v.storage = 12) : T.isVector4 ? (v.boundary = 16,
        v.storage = 16) : T.isMatrix3 ? (v.boundary = 48,
        v.storage = 48) : T.isMatrix4 ? (v.boundary = 64,
        v.storage = 64) : T.isTexture ? console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group.") : console.warn("THREE.WebGLRenderer: Unsupported uniform value type.", T),
        v
    }
    function p(T) {
        const v = T.target;
        v.removeEventListener("dispose", p);
        const S = a.indexOf(v.__bindingPointIndex);
        a.splice(S, 1),
        i.deleteBuffer(r[v.id]),
        delete r[v.id],
        delete s[v.id]
    }
    function m() {
        for (const T in r)
            i.deleteBuffer(r[T]);
        a = [],
        r = {},
        s = {}
    }
    return {
        bind: l,
        update: c,
        dispose: m
    }
}
class hg {
    constructor(e={}) {
        const {canvas: t=tu(), context: n=null, depth: r=!0, stencil: s=!1, alpha: a=!1, antialias: o=!1, premultipliedAlpha: l=!0, preserveDrawingBuffer: c=!1, powerPreference: h="default", failIfMajorPerformanceCaveat: u=!1} = e;
        this.isWebGLRenderer = !0;
        let f;
        if (n !== null) {
            if (typeof WebGLRenderingContext < "u" && n instanceof WebGLRenderingContext)
                throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");
            f = n.getContextAttributes().alpha
        } else
            f = a;
        const d = new Uint32Array(4)
          , g = new Int32Array(4);
        let _ = null
          , p = null;
        const m = []
          , T = [];
        this.domElement = t,
        this.debug = {
            checkShaderErrors: !0,
            onShaderError: null
        },
        this.autoClear = !0,
        this.autoClearColor = !0,
        this.autoClearDepth = !0,
        this.autoClearStencil = !0,
        this.sortObjects = !0,
        this.clippingPlanes = [],
        this.localClippingEnabled = !1,
        this._outputColorSpace = Pt,
        this._useLegacyLights = !1,
        this.toneMapping = Dn,
        this.toneMappingExposure = 1;
        const v = this;
        let S = !1
          , D = 0
          , b = 0
          , w = null
          , B = -1
          , E = null;
        const x = new We
          , U = new We;
        let G = null;
        const P = new ve(0);
        let H = 0
          , q = t.width
          , K = t.height
          , ne = 1
          , z = null
          , j = null;
        const Q = new We(0,0,q,K)
          , fe = new We(0,0,q,K);
        let we = !1;
        const Ve = new ya;
        let k = !1
          , J = !1;
        const ce = new pe
          , te = new R
          , De = {
            background: null,
            fog: null,
            environment: null,
            overrideMaterial: null,
            isScene: !0
        };
        function Ue() {
            return w === null ? ne : 1
        }
        let I = n;
        function Ke(y, L) {
            return t.getContext(y, L)
        }
        try {
            const y = {
                alpha: !0,
                depth: r,
                stencil: s,
                antialias: o,
                premultipliedAlpha: l,
                preserveDrawingBuffer: c,
                powerPreference: h,
                failIfMajorPerformanceCaveat: u
            };
            if ("setAttribute"in t && t.setAttribute("data-engine", `three.js r${ma}`),
            t.addEventListener("webglcontextlost", C, !1),
            t.addEventListener("webglcontextrestored", Y, !1),
            t.addEventListener("webglcontextcreationerror", W, !1),
            I === null) {
                const L = "webgl2";
                if (I = Ke(L, y),
                I === null)
                    throw Ke(L) ? new Error("Error creating WebGL context with your selected attributes.") : new Error("Error creating WebGL context.")
            }
        } catch (y) {
            throw console.error("THREE.WebGLRenderer: " + y.message),
            y
        }
        let ge, qe, ye, Be, Ne, ze, it, A, M, V, X, Z, $, _e, oe, ae, Re, ee, me, ke, xe, he, Ce, Oe;
        function at() {
            ge = new vp(I),
            ge.init(),
            he = new eg(I,ge),
            qe = new fp(I,ge,e,he),
            ye = new Jm(I),
            Be = new yp(I),
            Ne = new Bm,
            ze = new Qm(I,ge,ye,Ne,qe,he,Be),
            it = new pp(v),
            A = new _p(v),
            M = new wu(I),
            Ce = new hp(I,M),
            V = new xp(I,M,Be,Ce),
            X = new Ep(I,V,M,Be),
            me = new Sp(I,qe,ze),
            ae = new dp(Ne),
            Z = new Om(v,it,A,ge,qe,Ce,ae),
            $ = new lg(v,Ne),
            _e = new Vm,
            oe = new qm(ge),
            ee = new cp(v,it,A,ye,X,f,l),
            Re = new jm(v,X,qe),
            Oe = new cg(I,Be,qe,ye),
            ke = new up(I,ge,Be),
            xe = new Mp(I,ge,Be),
            Be.programs = Z.programs,
            v.capabilities = qe,
            v.extensions = ge,
            v.properties = Ne,
            v.renderLists = _e,
            v.shadowMap = Re,
            v.state = ye,
            v.info = Be
        }
        at();
        const Pe = new ag(v,I);
        this.xr = Pe,
        this.getContext = function() {
            return I
        }
        ,
        this.getContextAttributes = function() {
            return I.getContextAttributes()
        }
        ,
        this.forceContextLoss = function() {
            const y = ge.get("WEBGL_lose_context");
            y && y.loseContext()
        }
        ,
        this.forceContextRestore = function() {
            const y = ge.get("WEBGL_lose_context");
            y && y.restoreContext()
        }
        ,
        this.getPixelRatio = function() {
            return ne
        }
        ,
        this.setPixelRatio = function(y) {
            y !== void 0 && (ne = y,
            this.setSize(q, K, !1))
        }
        ,
        this.getSize = function(y) {
            return y.set(q, K)
        }
        ,
        this.setSize = function(y, L, O=!0) {
            if (Pe.isPresenting) {
                console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");
                return
            }
            q = y,
            K = L,
            t.width = Math.floor(y * ne),
            t.height = Math.floor(L * ne),
            O === !0 && (t.style.width = y + "px",
            t.style.height = L + "px"),
            this.setViewport(0, 0, y, L)
        }
        ,
        this.getDrawingBufferSize = function(y) {
            return y.set(q * ne, K * ne).floor()
        }
        ,
        this.setDrawingBufferSize = function(y, L, O) {
            q = y,
            K = L,
            ne = O,
            t.width = Math.floor(y * O),
            t.height = Math.floor(L * O),
            this.setViewport(0, 0, y, L)
        }
        ,
        this.getCurrentViewport = function(y) {
            return y.copy(x)
        }
        ,
        this.getViewport = function(y) {
            return y.copy(Q)
        }
        ,
        this.setViewport = function(y, L, O, N) {
            y.isVector4 ? Q.set(y.x, y.y, y.z, y.w) : Q.set(y, L, O, N),
            ye.viewport(x.copy(Q).multiplyScalar(ne).round())
        }
        ,
        this.getScissor = function(y) {
            return y.copy(fe)
        }
        ,
        this.setScissor = function(y, L, O, N) {
            y.isVector4 ? fe.set(y.x, y.y, y.z, y.w) : fe.set(y, L, O, N),
            ye.scissor(U.copy(fe).multiplyScalar(ne).round())
        }
        ,
        this.getScissorTest = function() {
            return we
        }
        ,
        this.setScissorTest = function(y) {
            ye.setScissorTest(we = y)
        }
        ,
        this.setOpaqueSort = function(y) {
            z = y
        }
        ,
        this.setTransparentSort = function(y) {
            j = y
        }
        ,
        this.getClearColor = function(y) {
            return y.copy(ee.getClearColor())
        }
        ,
        this.setClearColor = function() {
            ee.setClearColor.apply(ee, arguments)
        }
        ,
        this.getClearAlpha = function() {
            return ee.getClearAlpha()
        }
        ,
        this.setClearAlpha = function() {
            ee.setClearAlpha.apply(ee, arguments)
        }
        ,
        this.clear = function(y=!0, L=!0, O=!0) {
            let N = 0;
            if (y) {
                let F = !1;
                if (w !== null) {
                    const se = w.texture.format;
                    F = se === Xl || se === Wl || se === Gl
                }
                if (F) {
                    const se = w.texture.type
                      , ue = se === Nn || se === Ii || se === zl || se === fr || se === kl || se === Hl
                      , de = ee.getClearColor()
                      , Me = ee.getClearAlpha()
                      , Se = de.r
                      , Ae = de.g
                      , Fe = de.b;
                    ue ? (d[0] = Se,
                    d[1] = Ae,
                    d[2] = Fe,
                    d[3] = Me,
                    I.clearBufferuiv(I.COLOR, 0, d)) : (g[0] = Se,
                    g[1] = Ae,
                    g[2] = Fe,
                    g[3] = Me,
                    I.clearBufferiv(I.COLOR, 0, g))
                } else
                    N |= I.COLOR_BUFFER_BIT
            }
            L && (N |= I.DEPTH_BUFFER_BIT),
            O && (N |= I.STENCIL_BUFFER_BIT,
            this.state.buffers.stencil.setMask(4294967295)),
            I.clear(N)
        }
        ,
        this.clearColor = function() {
            this.clear(!0, !1, !1)
        }
        ,
        this.clearDepth = function() {
            this.clear(!1, !0, !1)
        }
        ,
        this.clearStencil = function() {
            this.clear(!1, !1, !0)
        }
        ,
        this.dispose = function() {
            t.removeEventListener("webglcontextlost", C, !1),
            t.removeEventListener("webglcontextrestored", Y, !1),
            t.removeEventListener("webglcontextcreationerror", W, !1),
            _e.dispose(),
            oe.dispose(),
            Ne.dispose(),
            it.dispose(),
            A.dispose(),
            X.dispose(),
            Ce.dispose(),
            Oe.dispose(),
            Z.dispose(),
            Pe.dispose(),
            Pe.removeEventListener("sessionstart", Ye),
            Pe.removeEventListener("sessionend", jt),
            St.stop()
        }
        ;
        function C(y) {
            y.preventDefault(),
            console.log("THREE.WebGLRenderer: Context Lost."),
            S = !0
        }
        function Y() {
            console.log("THREE.WebGLRenderer: Context Restored."),
            S = !1;
            const y = Be.autoReset
              , L = Re.enabled
              , O = Re.autoUpdate
              , N = Re.needsUpdate
              , F = Re.type;
            at(),
            Be.autoReset = y,
            Re.enabled = L,
            Re.autoUpdate = O,
            Re.needsUpdate = N,
            Re.type = F
        }
        function W(y) {
            console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ", y.statusMessage)
        }
        function re(y) {
            const L = y.target;
            L.removeEventListener("dispose", re),
            le(L)
        }
        function le(y) {
            He(y),
            Ne.remove(y)
        }
        function He(y) {
            const L = Ne.get(y).programs;
            L !== void 0 && (L.forEach(function(O) {
                Z.releaseProgram(O)
            }),
            y.isShaderMaterial && Z.releaseShaderCache(y))
        }
        this.renderBufferDirect = function(y, L, O, N, F, se) {
            L === null && (L = De);
            const ue = F.isMesh && F.matrixWorld.determinant() < 0
              , de = Cc(y, L, O, N, F);
            ye.setMaterial(N, ue);
            let Me = O.index
              , Se = 1;
            if (N.wireframe === !0) {
                if (Me = V.getWireframeAttribute(O),
                Me === void 0)
                    return;
                Se = 2
            }
            const Ae = O.drawRange
              , Fe = O.attributes.position;
            let lt = Ae.start * Se
              , vt = (Ae.start + Ae.count) * Se;
            se !== null && (lt = Math.max(lt, se.start * Se),
            vt = Math.min(vt, (se.start + se.count) * Se)),
            Me !== null ? (lt = Math.max(lt, 0),
            vt = Math.min(vt, Me.count)) : Fe != null && (lt = Math.max(lt, 0),
            vt = Math.min(vt, Fe.count));
            const Dt = vt - lt;
            if (Dt < 0 || Dt === 1 / 0)
                return;
            Ce.setup(F, N, de, O, Me);
            let cn, Xe = ke;
            if (Me !== null && (cn = M.get(Me),
            Xe = xe,
            Xe.setIndex(cn)),
            F.isMesh)
                N.wireframe === !0 ? (ye.setLineWidth(N.wireframeLinewidth * Ue()),
                Xe.setMode(I.LINES)) : Xe.setMode(I.TRIANGLES);
            else if (F.isLine) {
                let Ee = N.linewidth;
                Ee === void 0 && (Ee = 1),
                ye.setLineWidth(Ee * Ue()),
                F.isLineSegments ? Xe.setMode(I.LINES) : F.isLineLoop ? Xe.setMode(I.LINE_LOOP) : Xe.setMode(I.LINE_STRIP)
            } else
                F.isPoints ? Xe.setMode(I.POINTS) : F.isSprite && Xe.setMode(I.TRIANGLES);
            if (F.isBatchedMesh)
                F._multiDrawInstances !== null ? Xe.renderMultiDrawInstances(F._multiDrawStarts, F._multiDrawCounts, F._multiDrawCount, F._multiDrawInstances) : Xe.renderMultiDraw(F._multiDrawStarts, F._multiDrawCounts, F._multiDrawCount);
            else if (F.isInstancedMesh)
                Xe.renderInstances(lt, Dt, F.count);
            else if (O.isInstancedBufferGeometry) {
                const Ee = O._maxInstanceCount !== void 0 ? O._maxInstanceCount : 1 / 0
                  , qi = Math.min(O.instanceCount, Ee);
                Xe.renderInstances(lt, Dt, qi)
            } else
                Xe.render(lt, Dt)
        }
        ;
        function $e(y, L, O) {
            y.transparent === !0 && y.side === _n && y.forceSinglePass === !1 ? (y.side = It,
            y.needsUpdate = !0,
            mr(y, L, O),
            y.side = Un,
            y.needsUpdate = !0,
            mr(y, L, O),
            y.side = _n) : mr(y, L, O)
        }
        this.compile = function(y, L, O=null) {
            O === null && (O = y),
            p = oe.get(O),
            p.init(L),
            T.push(p),
            O.traverseVisible(function(F) {
                F.isLight && F.layers.test(L.layers) && (p.pushLight(F),
                F.castShadow && p.pushShadow(F))
            }),
            y !== O && y.traverseVisible(function(F) {
                F.isLight && F.layers.test(L.layers) && (p.pushLight(F),
                F.castShadow && p.pushShadow(F))
            }),
            p.setupLights(v._useLegacyLights);
            const N = new Set;
            return y.traverse(function(F) {
                const se = F.material;
                if (se)
                    if (Array.isArray(se))
                        for (let ue = 0; ue < se.length; ue++) {
                            const de = se[ue];
                            $e(de, O, F),
                            N.add(de)
                        }
                    else
                        $e(se, O, F),
                        N.add(se)
            }),
            T.pop(),
            p = null,
            N
        }
        ,
        this.compileAsync = function(y, L, O=null) {
            const N = this.compile(y, L, O);
            return new Promise(F=>{
                function se() {
                    if (N.forEach(function(ue) {
                        Ne.get(ue).currentProgram.isReady() && N.delete(ue)
                    }),
                    N.size === 0) {
                        F(y);
                        return
                    }
                    setTimeout(se, 10)
                }
                ge.get("KHR_parallel_shader_compile") !== null ? se() : setTimeout(se, 10)
            }
            )
        }
        ;
        let rt = null;
        function _t(y) {
            rt && rt(y)
        }
        function Ye() {
            St.stop()
        }
        function jt() {
            St.start()
        }
        const St = new nc;
        St.setAnimationLoop(_t),
        typeof self < "u" && St.setContext(self),
        this.setAnimationLoop = function(y) {
            rt = y,
            Pe.setAnimationLoop(y),
            y === null ? St.stop() : St.start()
        }
        ,
        Pe.addEventListener("sessionstart", Ye),
        Pe.addEventListener("sessionend", jt),
        this.render = function(y, L) {
            if (L !== void 0 && L.isCamera !== !0) {
                console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");
                return
            }
            if (S === !0)
                return;
            y.matrixWorldAutoUpdate === !0 && y.updateMatrixWorld(),
            L.parent === null && L.matrixWorldAutoUpdate === !0 && L.updateMatrixWorld(),
            Pe.enabled === !0 && Pe.isPresenting === !0 && (Pe.cameraAutoUpdate === !0 && Pe.updateCamera(L),
            L = Pe.getCamera()),
            y.isScene === !0 && y.onBeforeRender(v, y, L, w),
            p = oe.get(y, T.length),
            p.init(L),
            T.push(p),
            ce.multiplyMatrices(L.projectionMatrix, L.matrixWorldInverse),
            Ve.setFromProjectionMatrix(ce),
            J = this.localClippingEnabled,
            k = ae.init(this.clippingPlanes, J),
            _ = _e.get(y, m.length),
            _.init(),
            m.push(_),
            Ba(y, L, 0, v.sortObjects),
            _.finish(),
            v.sortObjects === !0 && _.sort(z, j);
            const O = Pe.enabled === !1 || Pe.isPresenting === !1 || Pe.hasDepthSensing() === !1;
            O && ee.addToRenderList(_, y),
            this.info.render.frame++,
            k === !0 && ae.beginShadows();
            const N = p.state.shadowsArray;
            Re.render(N, y, L),
            k === !0 && ae.endShadows(),
            this.info.autoReset === !0 && this.info.reset();
            const F = _.opaque
              , se = _.transmissive;
            if (p.setupLights(v._useLegacyLights),
            L.isArrayCamera) {
                const ue = L.cameras;
                if (se.length > 0)
                    for (let de = 0, Me = ue.length; de < Me; de++) {
                        const Se = ue[de];
                        Va(F, se, y, Se)
                    }
                O && ee.render(y);
                for (let de = 0, Me = ue.length; de < Me; de++) {
                    const Se = ue[de];
                    za(_, y, Se, Se.viewport)
                }
            } else
                se.length > 0 && Va(F, se, y, L),
                O && ee.render(y),
                za(_, y, L);
            w !== null && (ze.updateMultisampleRenderTarget(w),
            ze.updateRenderTargetMipmap(w)),
            y.isScene === !0 && y.onAfterRender(v, y, L),
            Ce.resetDefaultState(),
            B = -1,
            E = null,
            T.pop(),
            T.length > 0 ? (p = T[T.length - 1],
            k === !0 && ae.setGlobalState(v.clippingPlanes, p.state.camera)) : p = null,
            m.pop(),
            m.length > 0 ? _ = m[m.length - 1] : _ = null
        }
        ;
        function Ba(y, L, O, N) {
            if (y.visible === !1)
                return;
            if (y.layers.test(L.layers)) {
                if (y.isGroup)
                    O = y.renderOrder;
                else if (y.isLOD)
                    y.autoUpdate === !0 && y.update(L);
                else if (y.isLight)
                    p.pushLight(y),
                    y.castShadow && p.pushShadow(y);
                else if (y.isSprite) {
                    if (!y.frustumCulled || Ve.intersectsSprite(y)) {
                        N && te.setFromMatrixPosition(y.matrixWorld).applyMatrix4(ce);
                        const ue = X.update(y)
                          , de = y.material;
                        de.visible && _.push(y, ue, de, O, te.z, null)
                    }
                } else if ((y.isMesh || y.isLine || y.isPoints) && (!y.frustumCulled || Ve.intersectsObject(y))) {
                    const ue = X.update(y)
                      , de = y.material;
                    if (N && (y.boundingSphere !== void 0 ? (y.boundingSphere === null && y.computeBoundingSphere(),
                    te.copy(y.boundingSphere.center)) : (ue.boundingSphere === null && ue.computeBoundingSphere(),
                    te.copy(ue.boundingSphere.center)),
                    te.applyMatrix4(y.matrixWorld).applyMatrix4(ce)),
                    Array.isArray(de)) {
                        const Me = ue.groups;
                        for (let Se = 0, Ae = Me.length; Se < Ae; Se++) {
                            const Fe = Me[Se]
                              , lt = de[Fe.materialIndex];
                            lt && lt.visible && _.push(y, ue, lt, O, te.z, Fe)
                        }
                    } else
                        de.visible && _.push(y, ue, de, O, te.z, null)
                }
            }
            const se = y.children;
            for (let ue = 0, de = se.length; ue < de; ue++)
                Ba(se[ue], L, O, N)
        }
        function za(y, L, O, N) {
            const F = y.opaque
              , se = y.transmissive
              , ue = y.transparent;
            p.setupLightsView(O),
            k === !0 && ae.setGlobalState(v.clippingPlanes, O),
            N && ye.viewport(x.copy(N)),
            F.length > 0 && pr(F, L, O),
            se.length > 0 && pr(se, L, O),
            ue.length > 0 && pr(ue, L, O),
            ye.buffers.depth.setTest(!0),
            ye.buffers.depth.setMask(!0),
            ye.buffers.color.setMask(!0),
            ye.setPolygonOffset(!1)
        }
        function Va(y, L, O, N) {
            if ((O.isScene === !0 ? O.overrideMaterial : null) !== null)
                return;
            p.state.transmissionRenderTarget[N.id] === void 0 && (p.state.transmissionRenderTarget[N.id] = new Qn(1,1,{
                generateMipmaps: !0,
                type: ge.has("EXT_color_buffer_half_float") || ge.has("EXT_color_buffer_float") ? ss : Nn,
                minFilter: Jn,
                samples: 4,
                stencilBuffer: s,
                resolveDepthBuffer: !1,
                resolveStencilBuffer: !1
            }));
            const se = p.state.transmissionRenderTarget[N.id]
              , ue = N.viewport || x;
            se.setSize(ue.z, ue.w);
            const de = v.getRenderTarget();
            v.setRenderTarget(se),
            v.getClearColor(P),
            H = v.getClearAlpha(),
            H < 1 && v.setClearColor(16777215, .5),
            v.clear();
            const Me = v.toneMapping;
            v.toneMapping = Dn;
            const Se = N.viewport;
            if (N.viewport !== void 0 && (N.viewport = void 0),
            p.setupLightsView(N),
            k === !0 && ae.setGlobalState(v.clippingPlanes, N),
            pr(y, O, N),
            ze.updateMultisampleRenderTarget(se),
            ze.updateRenderTargetMipmap(se),
            ge.has("WEBGL_multisampled_render_to_texture") === !1) {
                let Ae = !1;
                for (let Fe = 0, lt = L.length; Fe < lt; Fe++) {
                    const vt = L[Fe]
                      , Dt = vt.object
                      , cn = vt.geometry
                      , Xe = vt.material
                      , Ee = vt.group;
                    if (Xe.side === _n && Dt.layers.test(N.layers)) {
                        const qi = Xe.side;
                        Xe.side = It,
                        Xe.needsUpdate = !0,
                        ka(Dt, O, N, cn, Xe, Ee),
                        Xe.side = qi,
                        Xe.needsUpdate = !0,
                        Ae = !0
                    }
                }
                Ae === !0 && (ze.updateMultisampleRenderTarget(se),
                ze.updateRenderTargetMipmap(se))
            }
            v.setRenderTarget(de),
            v.setClearColor(P, H),
            Se !== void 0 && (N.viewport = Se),
            v.toneMapping = Me
        }
        function pr(y, L, O) {
            const N = L.isScene === !0 ? L.overrideMaterial : null;
            for (let F = 0, se = y.length; F < se; F++) {
                const ue = y[F]
                  , de = ue.object
                  , Me = ue.geometry
                  , Se = N === null ? ue.material : N
                  , Ae = ue.group;
                de.layers.test(O.layers) && ka(de, L, O, Me, Se, Ae)
            }
        }
        function ka(y, L, O, N, F, se) {
            y.onBeforeRender(v, L, O, N, F, se),
            y.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse, y.matrixWorld),
            y.normalMatrix.getNormalMatrix(y.modelViewMatrix),
            F.onBeforeRender(v, L, O, N, y, se),
            F.transparent === !0 && F.side === _n && F.forceSinglePass === !1 ? (F.side = It,
            F.needsUpdate = !0,
            v.renderBufferDirect(O, L, N, F, y, se),
            F.side = Un,
            F.needsUpdate = !0,
            v.renderBufferDirect(O, L, N, F, y, se),
            F.side = _n) : v.renderBufferDirect(O, L, N, F, y, se),
            y.onAfterRender(v, L, O, N, F, se)
        }
        function mr(y, L, O) {
            L.isScene !== !0 && (L = De);
            const N = Ne.get(y)
              , F = p.state.lights
              , se = p.state.shadowsArray
              , ue = F.state.version
              , de = Z.getParameters(y, F.state, se, L, O)
              , Me = Z.getProgramCacheKey(de);
            let Se = N.programs;
            N.environment = y.isMeshStandardMaterial ? L.environment : null,
            N.fog = L.fog,
            N.envMap = (y.isMeshStandardMaterial ? A : it).get(y.envMap || N.environment),
            N.envMapRotation = N.environment !== null && y.envMap === null ? L.environmentRotation : y.envMapRotation,
            Se === void 0 && (y.addEventListener("dispose", re),
            Se = new Map,
            N.programs = Se);
            let Ae = Se.get(Me);
            if (Ae !== void 0) {
                if (N.currentProgram === Ae && N.lightsStateVersion === ue)
                    return Ga(y, de),
                    Ae
            } else
                de.uniforms = Z.getUniforms(y),
                y.onBuild(O, de, v),
                y.onBeforeCompile(de, v),
                Ae = Z.acquireProgram(de, Me),
                Se.set(Me, Ae),
                N.uniforms = de.uniforms;
            const Fe = N.uniforms;
            return (!y.isShaderMaterial && !y.isRawShaderMaterial || y.clipping === !0) && (Fe.clippingPlanes = ae.uniform),
            Ga(y, de),
            N.needsLights = Lc(y),
            N.lightsStateVersion = ue,
            N.needsLights && (Fe.ambientLightColor.value = F.state.ambient,
            Fe.lightProbe.value = F.state.probe,
            Fe.directionalLights.value = F.state.directional,
            Fe.directionalLightShadows.value = F.state.directionalShadow,
            Fe.spotLights.value = F.state.spot,
            Fe.spotLightShadows.value = F.state.spotShadow,
            Fe.rectAreaLights.value = F.state.rectArea,
            Fe.ltc_1.value = F.state.rectAreaLTC1,
            Fe.ltc_2.value = F.state.rectAreaLTC2,
            Fe.pointLights.value = F.state.point,
            Fe.pointLightShadows.value = F.state.pointShadow,
            Fe.hemisphereLights.value = F.state.hemi,
            Fe.directionalShadowMap.value = F.state.directionalShadowMap,
            Fe.directionalShadowMatrix.value = F.state.directionalShadowMatrix,
            Fe.spotShadowMap.value = F.state.spotShadowMap,
            Fe.spotLightMatrix.value = F.state.spotLightMatrix,
            Fe.spotLightMap.value = F.state.spotLightMap,
            Fe.pointShadowMap.value = F.state.pointShadowMap,
            Fe.pointShadowMatrix.value = F.state.pointShadowMatrix),
            N.currentProgram = Ae,
            N.uniformsList = null,
            Ae
        }
        function Ha(y) {
            if (y.uniformsList === null) {
                const L = y.currentProgram.getUniforms();
                y.uniformsList = Xr.seqWithValue(L.seq, y.uniforms)
            }
            return y.uniformsList
        }
        function Ga(y, L) {
            const O = Ne.get(y);
            O.outputColorSpace = L.outputColorSpace,
            O.batching = L.batching,
            O.instancing = L.instancing,
            O.instancingColor = L.instancingColor,
            O.instancingMorph = L.instancingMorph,
            O.skinning = L.skinning,
            O.morphTargets = L.morphTargets,
            O.morphNormals = L.morphNormals,
            O.morphColors = L.morphColors,
            O.morphTargetsCount = L.morphTargetsCount,
            O.numClippingPlanes = L.numClippingPlanes,
            O.numIntersection = L.numClipIntersection,
            O.vertexAlphas = L.vertexAlphas,
            O.vertexTangents = L.vertexTangents,
            O.toneMapping = L.toneMapping
        }
        function Cc(y, L, O, N, F) {
            L.isScene !== !0 && (L = De),
            ze.resetTextureUnits();
            const se = L.fog
              , ue = N.isMeshStandardMaterial ? L.environment : null
              , de = w === null ? v.outputColorSpace : w.isXRRenderTarget === !0 ? w.texture.colorSpace : On
              , Me = (N.isMeshStandardMaterial ? A : it).get(N.envMap || ue)
              , Se = N.vertexColors === !0 && !!O.attributes.color && O.attributes.color.itemSize === 4
              , Ae = !!O.attributes.tangent && (!!N.normalMap || N.anisotropy > 0)
              , Fe = !!O.morphAttributes.position
              , lt = !!O.morphAttributes.normal
              , vt = !!O.morphAttributes.color;
            let Dt = Dn;
            N.toneMapped && (w === null || w.isXRRenderTarget === !0) && (Dt = v.toneMapping);
            const cn = O.morphAttributes.position || O.morphAttributes.normal || O.morphAttributes.color
              , Xe = cn !== void 0 ? cn.length : 0
              , Ee = Ne.get(N)
              , qi = p.state.lights;
            if (k === !0 && (J === !0 || y !== E)) {
                const Ft = y === E && N.id === B;
                ae.setState(N, y, Ft)
            }
            let Qe = !1;
            N.version === Ee.__version ? (Ee.needsLights && Ee.lightsStateVersion !== qi.state.version || Ee.outputColorSpace !== de || F.isBatchedMesh && Ee.batching === !1 || !F.isBatchedMesh && Ee.batching === !0 || F.isInstancedMesh && Ee.instancing === !1 || !F.isInstancedMesh && Ee.instancing === !0 || F.isSkinnedMesh && Ee.skinning === !1 || !F.isSkinnedMesh && Ee.skinning === !0 || F.isInstancedMesh && Ee.instancingColor === !0 && F.instanceColor === null || F.isInstancedMesh && Ee.instancingColor === !1 && F.instanceColor !== null || F.isInstancedMesh && Ee.instancingMorph === !0 && F.morphTexture === null || F.isInstancedMesh && Ee.instancingMorph === !1 && F.morphTexture !== null || Ee.envMap !== Me || N.fog === !0 && Ee.fog !== se || Ee.numClippingPlanes !== void 0 && (Ee.numClippingPlanes !== ae.numPlanes || Ee.numIntersection !== ae.numIntersection) || Ee.vertexAlphas !== Se || Ee.vertexTangents !== Ae || Ee.morphTargets !== Fe || Ee.morphNormals !== lt || Ee.morphColors !== vt || Ee.toneMapping !== Dt || Ee.morphTargetsCount !== Xe) && (Qe = !0) : (Qe = !0,
            Ee.__version = N.version);
            let kn = Ee.currentProgram;
            Qe === !0 && (kn = mr(N, L, F));
            let Wa = !1
              , Yi = !1
              , ms = !1;
            const xt = kn.getUniforms()
              , En = Ee.uniforms;
            if (ye.useProgram(kn.program) && (Wa = !0,
            Yi = !0,
            ms = !0),
            N.id !== B && (B = N.id,
            Yi = !0),
            Wa || E !== y) {
                xt.setValue(I, "projectionMatrix", y.projectionMatrix),
                xt.setValue(I, "viewMatrix", y.matrixWorldInverse);
                const Ft = xt.map.cameraPosition;
                Ft !== void 0 && Ft.setValue(I, te.setFromMatrixPosition(y.matrixWorld)),
                qe.logarithmicDepthBuffer && xt.setValue(I, "logDepthBufFC", 2 / (Math.log(y.far + 1) / Math.LN2)),
                (N.isMeshPhongMaterial || N.isMeshToonMaterial || N.isMeshLambertMaterial || N.isMeshBasicMaterial || N.isMeshStandardMaterial || N.isShaderMaterial) && xt.setValue(I, "isOrthographic", y.isOrthographicCamera === !0),
                E !== y && (E = y,
                Yi = !0,
                ms = !0)
            }
            if (F.isSkinnedMesh) {
                xt.setOptional(I, F, "bindMatrix"),
                xt.setOptional(I, F, "bindMatrixInverse");
                const Ft = F.skeleton;
                Ft && (Ft.boneTexture === null && Ft.computeBoneTexture(),
                xt.setValue(I, "boneTexture", Ft.boneTexture, ze))
            }
            F.isBatchedMesh && (xt.setOptional(I, F, "batchingTexture"),
            xt.setValue(I, "batchingTexture", F._matricesTexture, ze));
            const gs = O.morphAttributes;
            if ((gs.position !== void 0 || gs.normal !== void 0 || gs.color !== void 0) && me.update(F, O, kn),
            (Yi || Ee.receiveShadow !== F.receiveShadow) && (Ee.receiveShadow = F.receiveShadow,
            xt.setValue(I, "receiveShadow", F.receiveShadow)),
            N.isMeshGouraudMaterial && N.envMap !== null && (En.envMap.value = Me,
            En.flipEnvMap.value = Me.isCubeTexture && Me.isRenderTargetTexture === !1 ? -1 : 1),
            N.isMeshStandardMaterial && N.envMap === null && L.environment !== null && (En.envMapIntensity.value = L.environmentIntensity),
            Yi && (xt.setValue(I, "toneMappingExposure", v.toneMappingExposure),
            Ee.needsLights && Pc(En, ms),
            se && N.fog === !0 && $.refreshFogUniforms(En, se),
            $.refreshMaterialUniforms(En, N, ne, K, p.state.transmissionRenderTarget[y.id]),
            Xr.upload(I, Ha(Ee), En, ze)),
            N.isShaderMaterial && N.uniformsNeedUpdate === !0 && (Xr.upload(I, Ha(Ee), En, ze),
            N.uniformsNeedUpdate = !1),
            N.isSpriteMaterial && xt.setValue(I, "center", F.center),
            xt.setValue(I, "modelViewMatrix", F.modelViewMatrix),
            xt.setValue(I, "normalMatrix", F.normalMatrix),
            xt.setValue(I, "modelMatrix", F.matrixWorld),
            N.isShaderMaterial || N.isRawShaderMaterial) {
                const Ft = N.uniformsGroups;
                for (let _s = 0, Ic = Ft.length; _s < Ic; _s++) {
                    const Xa = Ft[_s];
                    Oe.update(Xa, kn),
                    Oe.bind(Xa, kn)
                }
            }
            return kn
        }
        function Pc(y, L) {
            y.ambientLightColor.needsUpdate = L,
            y.lightProbe.needsUpdate = L,
            y.directionalLights.needsUpdate = L,
            y.directionalLightShadows.needsUpdate = L,
            y.pointLights.needsUpdate = L,
            y.pointLightShadows.needsUpdate = L,
            y.spotLights.needsUpdate = L,
            y.spotLightShadows.needsUpdate = L,
            y.rectAreaLights.needsUpdate = L,
            y.hemisphereLights.needsUpdate = L
        }
        function Lc(y) {
            return y.isMeshLambertMaterial || y.isMeshToonMaterial || y.isMeshPhongMaterial || y.isMeshStandardMaterial || y.isShadowMaterial || y.isShaderMaterial && y.lights === !0
        }
        this.getActiveCubeFace = function() {
            return D
        }
        ,
        this.getActiveMipmapLevel = function() {
            return b
        }
        ,
        this.getRenderTarget = function() {
            return w
        }
        ,
        this.setRenderTargetTextures = function(y, L, O) {
            Ne.get(y.texture).__webglTexture = L,
            Ne.get(y.depthTexture).__webglTexture = O;
            const N = Ne.get(y);
            N.__hasExternalTextures = !0,
            N.__autoAllocateDepthBuffer = O === void 0,
            N.__autoAllocateDepthBuffer || ge.has("WEBGL_multisampled_render_to_texture") === !0 && (console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),
            N.__useRenderToTexture = !1)
        }
        ,
        this.setRenderTargetFramebuffer = function(y, L) {
            const O = Ne.get(y);
            O.__webglFramebuffer = L,
            O.__useDefaultFramebuffer = L === void 0
        }
        ,
        this.setRenderTarget = function(y, L=0, O=0) {
            w = y,
            D = L,
            b = O;
            let N = !0
              , F = null
              , se = !1
              , ue = !1;
            if (y) {
                const Me = Ne.get(y);
                Me.__useDefaultFramebuffer !== void 0 ? (ye.bindFramebuffer(I.FRAMEBUFFER, null),
                N = !1) : Me.__webglFramebuffer === void 0 ? ze.setupRenderTarget(y) : Me.__hasExternalTextures && ze.rebindTextures(y, Ne.get(y.texture).__webglTexture, Ne.get(y.depthTexture).__webglTexture);
                const Se = y.texture;
                (Se.isData3DTexture || Se.isDataArrayTexture || Se.isCompressedArrayTexture) && (ue = !0);
                const Ae = Ne.get(y).__webglFramebuffer;
                y.isWebGLCubeRenderTarget ? (Array.isArray(Ae[L]) ? F = Ae[L][O] : F = Ae[L],
                se = !0) : y.samples > 0 && ze.useMultisampledRTT(y) === !1 ? F = Ne.get(y).__webglMultisampledFramebuffer : Array.isArray(Ae) ? F = Ae[O] : F = Ae,
                x.copy(y.viewport),
                U.copy(y.scissor),
                G = y.scissorTest
            } else
                x.copy(Q).multiplyScalar(ne).floor(),
                U.copy(fe).multiplyScalar(ne).floor(),
                G = we;
            if (ye.bindFramebuffer(I.FRAMEBUFFER, F) && N && ye.drawBuffers(y, F),
            ye.viewport(x),
            ye.scissor(U),
            ye.setScissorTest(G),
            se) {
                const Me = Ne.get(y.texture);
                I.framebufferTexture2D(I.FRAMEBUFFER, I.COLOR_ATTACHMENT0, I.TEXTURE_CUBE_MAP_POSITIVE_X + L, Me.__webglTexture, O)
            } else if (ue) {
                const Me = Ne.get(y.texture)
                  , Se = L || 0;
                I.framebufferTextureLayer(I.FRAMEBUFFER, I.COLOR_ATTACHMENT0, Me.__webglTexture, O || 0, Se)
            }
            B = -1
        }
        ,
        this.readRenderTargetPixels = function(y, L, O, N, F, se, ue) {
            if (!(y && y.isWebGLRenderTarget)) {
                console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
                return
            }
            let de = Ne.get(y).__webglFramebuffer;
            if (y.isWebGLCubeRenderTarget && ue !== void 0 && (de = de[ue]),
            de) {
                ye.bindFramebuffer(I.FRAMEBUFFER, de);
                try {
                    const Me = y.texture
                      , Se = Me.format
                      , Ae = Me.type;
                    if (!qe.textureFormatReadable(Se)) {
                        console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
                        return
                    }
                    if (!qe.textureTypeReadable(Ae)) {
                        console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
                        return
                    }
                    L >= 0 && L <= y.width - N && O >= 0 && O <= y.height - F && I.readPixels(L, O, N, F, he.convert(Se), he.convert(Ae), se)
                } finally {
                    const Me = w !== null ? Ne.get(w).__webglFramebuffer : null;
                    ye.bindFramebuffer(I.FRAMEBUFFER, Me)
                }
            }
        }
        ,
        this.copyFramebufferToTexture = function(y, L, O=0) {
            const N = Math.pow(2, -O)
              , F = Math.floor(L.image.width * N)
              , se = Math.floor(L.image.height * N);
            ze.setTexture2D(L, 0),
            I.copyTexSubImage2D(I.TEXTURE_2D, O, 0, 0, y.x, y.y, F, se),
            ye.unbindTexture()
        }
        ,
        this.copyTextureToTexture = function(y, L, O, N=0) {
            const F = L.image.width
              , se = L.image.height
              , ue = he.convert(O.format)
              , de = he.convert(O.type);
            ze.setTexture2D(O, 0),
            I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL, O.flipY),
            I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL, O.premultiplyAlpha),
            I.pixelStorei(I.UNPACK_ALIGNMENT, O.unpackAlignment),
            L.isDataTexture ? I.texSubImage2D(I.TEXTURE_2D, N, y.x, y.y, F, se, ue, de, L.image.data) : L.isCompressedTexture ? I.compressedTexSubImage2D(I.TEXTURE_2D, N, y.x, y.y, L.mipmaps[0].width, L.mipmaps[0].height, ue, L.mipmaps[0].data) : I.texSubImage2D(I.TEXTURE_2D, N, y.x, y.y, ue, de, L.image),
            N === 0 && O.generateMipmaps && I.generateMipmap(I.TEXTURE_2D),
            ye.unbindTexture()
        }
        ,
        this.copyTextureToTexture3D = function(y, L, O, N, F=0) {
            const se = y.max.x - y.min.x
              , ue = y.max.y - y.min.y
              , de = y.max.z - y.min.z
              , Me = he.convert(N.format)
              , Se = he.convert(N.type);
            let Ae;
            if (N.isData3DTexture)
                ze.setTexture3D(N, 0),
                Ae = I.TEXTURE_3D;
            else if (N.isDataArrayTexture || N.isCompressedArrayTexture)
                ze.setTexture2DArray(N, 0),
                Ae = I.TEXTURE_2D_ARRAY;
            else {
                console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");
                return
            }
            I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL, N.flipY),
            I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL, N.premultiplyAlpha),
            I.pixelStorei(I.UNPACK_ALIGNMENT, N.unpackAlignment);
            const Fe = I.getParameter(I.UNPACK_ROW_LENGTH)
              , lt = I.getParameter(I.UNPACK_IMAGE_HEIGHT)
              , vt = I.getParameter(I.UNPACK_SKIP_PIXELS)
              , Dt = I.getParameter(I.UNPACK_SKIP_ROWS)
              , cn = I.getParameter(I.UNPACK_SKIP_IMAGES)
              , Xe = O.isCompressedTexture ? O.mipmaps[F] : O.image;
            I.pixelStorei(I.UNPACK_ROW_LENGTH, Xe.width),
            I.pixelStorei(I.UNPACK_IMAGE_HEIGHT, Xe.height),
            I.pixelStorei(I.UNPACK_SKIP_PIXELS, y.min.x),
            I.pixelStorei(I.UNPACK_SKIP_ROWS, y.min.y),
            I.pixelStorei(I.UNPACK_SKIP_IMAGES, y.min.z),
            O.isDataTexture || O.isData3DTexture ? I.texSubImage3D(Ae, F, L.x, L.y, L.z, se, ue, de, Me, Se, Xe.data) : N.isCompressedArrayTexture ? I.compressedTexSubImage3D(Ae, F, L.x, L.y, L.z, se, ue, de, Me, Xe.data) : I.texSubImage3D(Ae, F, L.x, L.y, L.z, se, ue, de, Me, Se, Xe),
            I.pixelStorei(I.UNPACK_ROW_LENGTH, Fe),
            I.pixelStorei(I.UNPACK_IMAGE_HEIGHT, lt),
            I.pixelStorei(I.UNPACK_SKIP_PIXELS, vt),
            I.pixelStorei(I.UNPACK_SKIP_ROWS, Dt),
            I.pixelStorei(I.UNPACK_SKIP_IMAGES, cn),
            F === 0 && N.generateMipmaps && I.generateMipmap(Ae),
            ye.unbindTexture()
        }
        ,
        this.initTexture = function(y) {
            y.isCubeTexture ? ze.setTextureCube(y, 0) : y.isData3DTexture ? ze.setTexture3D(y, 0) : y.isDataArrayTexture || y.isCompressedArrayTexture ? ze.setTexture2DArray(y, 0) : ze.setTexture2D(y, 0),
            ye.unbindTexture()
        }
        ,
        this.resetState = function() {
            D = 0,
            b = 0,
            w = null,
            ye.reset(),
            Ce.reset()
        }
        ,
        typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{
            detail: this
        }))
    }
    get coordinateSystem() {
        return Mn
    }
    get outputColorSpace() {
        return this._outputColorSpace
    }
    set outputColorSpace(e) {
        this._outputColorSpace = e;
        const t = this.getContext();
        t.drawingBufferColorSpace = e === ga ? "display-p3" : "srgb",
        t.unpackColorSpace = Ze.workingColorSpace === os ? "display-p3" : "srgb"
    }
    get useLegacyLights() {
        return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),
        this._useLegacyLights
    }
    set useLegacyLights(e) {
        console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),
        this._useLegacyLights = e
    }
}
class ug extends nt {
    constructor() {
        super(),
        this.isScene = !0,
        this.type = "Scene",
        this.background = null,
        this.environment = null,
        this.fog = null,
        this.backgroundBlurriness = 0,
        this.backgroundIntensity = 1,
        this.backgroundRotation = new st,
        this.environmentIntensity = 1,
        this.environmentRotation = new st,
        this.overrideMaterial = null,
        typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{
            detail: this
        }))
    }
    copy(e, t) {
        return super.copy(e, t),
        e.background !== null && (this.background = e.background.clone()),
        e.environment !== null && (this.environment = e.environment.clone()),
        e.fog !== null && (this.fog = e.fog.clone()),
        this.backgroundBlurriness = e.backgroundBlurriness,
        this.backgroundIntensity = e.backgroundIntensity,
        this.backgroundRotation.copy(e.backgroundRotation),
        this.environmentIntensity = e.environmentIntensity,
        this.environmentRotation.copy(e.environmentRotation),
        e.overrideMaterial !== null && (this.overrideMaterial = e.overrideMaterial.clone()),
        this.matrixAutoUpdate = e.matrixAutoUpdate,
        this
    }
    toJSON(e) {
        const t = super.toJSON(e);
        return this.fog !== null && (t.object.fog = this.fog.toJSON()),
        this.backgroundBlurriness > 0 && (t.object.backgroundBlurriness = this.backgroundBlurriness),
        this.backgroundIntensity !== 1 && (t.object.backgroundIntensity = this.backgroundIntensity),
        t.object.backgroundRotation = this.backgroundRotation.toArray(),
        this.environmentIntensity !== 1 && (t.object.environmentIntensity = this.environmentIntensity),
        t.object.environmentRotation = this.environmentRotation.toArray(),
        t
    }
}
const vl = new R
  , xl = new We
  , Ml = new We
  , fg = new R
  , yl = new pe
  , Br = new R
  , $s = new Oi
  , Sl = new pe
  , js = new va;
class dg extends zt {
    constructor(e, t) {
        super(e, t),
        this.isSkinnedMesh = !0,
        this.type = "SkinnedMesh",
        this.bindMode = $a,
        this.bindMatrix = new pe,
        this.bindMatrixInverse = new pe,
        this.boundingBox = null,
        this.boundingSphere = null
    }
    computeBoundingBox() {
        const e = this.geometry;
        this.boundingBox === null && (this.boundingBox = new Fi),
        this.boundingBox.makeEmpty();
        const t = e.getAttribute("position");
        for (let n = 0; n < t.count; n++)
            this.getVertexPosition(n, Br),
            this.boundingBox.expandByPoint(Br)
    }
    computeBoundingSphere() {
        const e = this.geometry;
        this.boundingSphere === null && (this.boundingSphere = new Oi),
        this.boundingSphere.makeEmpty();
        const t = e.getAttribute("position");
        for (let n = 0; n < t.count; n++)
            this.getVertexPosition(n, Br),
            this.boundingSphere.expandByPoint(Br)
    }
    copy(e, t) {
        return super.copy(e, t),
        this.bindMode = e.bindMode,
        this.bindMatrix.copy(e.bindMatrix),
        this.bindMatrixInverse.copy(e.bindMatrixInverse),
        this.skeleton = e.skeleton,
        e.boundingBox !== null && (this.boundingBox = e.boundingBox.clone()),
        e.boundingSphere !== null && (this.boundingSphere = e.boundingSphere.clone()),
        this
    }
    raycast(e, t) {
        const n = this.material
          , r = this.matrixWorld;
        n !== void 0 && (this.boundingSphere === null && this.computeBoundingSphere(),
        $s.copy(this.boundingSphere),
        $s.applyMatrix4(r),
        e.ray.intersectsSphere($s) !== !1 && (Sl.copy(r).invert(),
        js.copy(e.ray).applyMatrix4(Sl),
        !(this.boundingBox !== null && js.intersectsBox(this.boundingBox) === !1) && this._computeIntersections(e, t, js)))
    }
    getVertexPosition(e, t) {
        return super.getVertexPosition(e, t),
        this.applyBoneTransform(e, t),
        t
    }
    bind(e, t) {
        this.skeleton = e,
        t === void 0 && (this.updateMatrixWorld(!0),
        this.skeleton.calculateInverses(),
        t = this.matrixWorld),
        this.bindMatrix.copy(t),
        this.bindMatrixInverse.copy(t).invert()
    }
    pose() {
        this.skeleton.pose()
    }
    normalizeSkinWeights() {
        const e = new We
          , t = this.geometry.attributes.skinWeight;
        for (let n = 0, r = t.count; n < r; n++) {
            e.fromBufferAttribute(t, n);
            const s = 1 / e.manhattanLength();
            s !== 1 / 0 ? e.multiplyScalar(s) : e.set(1, 0, 0, 0),
            t.setXYZW(n, e.x, e.y, e.z, e.w)
        }
    }
    updateMatrixWorld(e) {
        super.updateMatrixWorld(e),
        this.bindMode === $a ? this.bindMatrixInverse.copy(this.matrixWorld).invert() : this.bindMode === gh ? this.bindMatrixInverse.copy(this.bindMatrix).invert() : console.warn("THREE.SkinnedMesh: Unrecognized bindMode: " + this.bindMode)
    }
    applyBoneTransform(e, t) {
        const n = this.skeleton
          , r = this.geometry;
        xl.fromBufferAttribute(r.attributes.skinIndex, e),
        Ml.fromBufferAttribute(r.attributes.skinWeight, e),
        vl.copy(t).applyMatrix4(this.bindMatrix),
        t.set(0, 0, 0);
        for (let s = 0; s < 4; s++) {
            const a = Ml.getComponent(s);
            if (a !== 0) {
                const o = xl.getComponent(s);
                yl.multiplyMatrices(n.bones[o].matrixWorld, n.boneInverses[o]),
                t.addScaledVector(fg.copy(vl).applyMatrix4(yl), a)
            }
        }
        return t.applyMatrix4(this.bindMatrixInverse)
    }
}
class ua extends nt {
    constructor() {
        super(),
        this.isBone = !0,
        this.type = "Bone"
    }
}
class pg extends ut {
    constructor(e=null, t=1, n=1, r, s, a, o, l, c=Lt, h=Lt, u, f) {
        super(null, a, o, l, c, h, r, s, u, f),
        this.isDataTexture = !0,
        this.image = {
            data: e,
            width: t,
            height: n
        },
        this.generateMipmaps = !1,
        this.flipY = !1,
        this.unpackAlignment = 1
    }
}
const El = new pe
  , mg = new pe;
class Ta {
    constructor(e=[], t=[]) {
        this.uuid = Bn(),
        this.bones = e.slice(0),
        this.boneInverses = t,
        this.boneMatrices = null,
        this.boneTexture = null,
        this.init()
    }
    init() {
        const e = this.bones
          , t = this.boneInverses;
        if (this.boneMatrices = new Float32Array(e.length * 16),
        t.length === 0)
            this.calculateInverses();
        else if (e.length !== t.length) {
            console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),
            this.boneInverses = [];
            for (let n = 0, r = this.bones.length; n < r; n++)
                this.boneInverses.push(new pe)
        }
    }
    calculateInverses() {
        this.boneInverses.length = 0;
        for (let e = 0, t = this.bones.length; e < t; e++) {
            const n = new pe;
            this.bones[e] && n.copy(this.bones[e].matrixWorld).invert(),
            this.boneInverses.push(n)
        }
    }
    pose() {
        for (let e = 0, t = this.bones.length; e < t; e++) {
            const n = this.bones[e];
            n && n.matrixWorld.copy(this.boneInverses[e]).invert()
        }
        for (let e = 0, t = this.bones.length; e < t; e++) {
            const n = this.bones[e];
            n && (n.parent && n.parent.isBone ? (n.matrix.copy(n.parent.matrixWorld).invert(),
            n.matrix.multiply(n.matrixWorld)) : n.matrix.copy(n.matrixWorld),
            n.matrix.decompose(n.position, n.quaternion, n.scale))
        }
    }
    update() {
        const e = this.bones
          , t = this.boneInverses
          , n = this.boneMatrices
          , r = this.boneTexture;
        for (let s = 0, a = e.length; s < a; s++) {
            const o = e[s] ? e[s].matrixWorld : mg;
            El.multiplyMatrices(o, t[s]),
            El.toArray(n, s * 16)
        }
        r !== null && (r.needsUpdate = !0)
    }
    clone() {
        return new Ta(this.bones,this.boneInverses)
    }
    computeBoneTexture() {
        let e = Math.sqrt(this.bones.length * 4);
        e = Math.ceil(e / 4) * 4,
        e = Math.max(e, 4);
        const t = new Float32Array(e * e * 4);
        t.set(this.boneMatrices);
        const n = new pg(t,e,e,Yt,xn);
        return n.needsUpdate = !0,
        this.boneMatrices = t,
        this.boneTexture = n,
        this
    }
    getBoneByName(e) {
        for (let t = 0, n = this.bones.length; t < n; t++) {
            const r = this.bones[t];
            if (r.name === e)
                return r
        }
    }
    dispose() {
        this.boneTexture !== null && (this.boneTexture.dispose(),
        this.boneTexture = null)
    }
    fromJSON(e, t) {
        this.uuid = e.uuid;
        for (let n = 0, r = e.bones.length; n < r; n++) {
            const s = e.bones[n];
            let a = t[s];
            a === void 0 && (console.warn("THREE.Skeleton: No bone found with UUID:", s),
            a = new ua),
            this.bones.push(a),
            this.boneInverses.push(new pe().fromArray(e.boneInverses[n]))
        }
        return this.init(),
        this
    }
    toJSON() {
        const e = {
            metadata: {
                version: 4.6,
                type: "Skeleton",
                generator: "Skeleton.toJSON"
            },
            bones: [],
            boneInverses: []
        };
        e.uuid = this.uuid;
        const t = this.bones
          , n = this.boneInverses;
        for (let r = 0, s = t.length; r < s; r++) {
            const a = t[r];
            e.bones.push(a.uuid);
            const o = n[r];
            e.boneInverses.push(o.toArray())
        }
        return e
    }
}
class Aa extends zn {
    constructor(e) {
        super(),
        this.isLineBasicMaterial = !0,
        this.type = "LineBasicMaterial",
        this.color = new ve(16777215),
        this.map = null,
        this.linewidth = 1,
        this.linecap = "round",
        this.linejoin = "round",
        this.fog = !0,
        this.setValues(e)
    }
    copy(e) {
        return super.copy(e),
        this.color.copy(e.color),
        this.map = e.map,
        this.linewidth = e.linewidth,
        this.linecap = e.linecap,
        this.linejoin = e.linejoin,
        this.fog = e.fog,
        this
    }
}
const es = new R
  , ts = new R
  , Tl = new pe
  , Ji = new va
  , zr = new Oi
  , Js = new R
  , Al = new R;
class cc extends nt {
    constructor(e=new Vt, t=new Aa) {
        super(),
        this.isLine = !0,
        this.type = "Line",
        this.geometry = e,
        this.material = t,
        this.updateMorphTargets()
    }
    copy(e, t) {
        return super.copy(e, t),
        this.material = Array.isArray(e.material) ? e.material.slice() : e.material,
        this.geometry = e.geometry,
        this
    }
    computeLineDistances() {
        const e = this.geometry;
        if (e.index === null) {
            const t = e.attributes.position
              , n = [0];
            for (let r = 1, s = t.count; r < s; r++)
                es.fromBufferAttribute(t, r - 1),
                ts.fromBufferAttribute(t, r),
                n[r] = n[r - 1],
                n[r] += es.distanceTo(ts);
            e.setAttribute("lineDistance", new gt(n,1))
        } else
            console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
        return this
    }
    raycast(e, t) {
        const n = this.geometry
          , r = this.matrixWorld
          , s = e.params.Line.threshold
          , a = n.drawRange;
        if (n.boundingSphere === null && n.computeBoundingSphere(),
        zr.copy(n.boundingSphere),
        zr.applyMatrix4(r),
        zr.radius += s,
        e.ray.intersectsSphere(zr) === !1)
            return;
        Tl.copy(r).invert(),
        Ji.copy(e.ray).applyMatrix4(Tl);
        const o = s / ((this.scale.x + this.scale.y + this.scale.z) / 3)
          , l = o * o
          , c = this.isLineSegments ? 2 : 1
          , h = n.index
          , f = n.attributes.position;
        if (h !== null) {
            const d = Math.max(0, a.start)
              , g = Math.min(h.count, a.start + a.count);
            for (let _ = d, p = g - 1; _ < p; _ += c) {
                const m = h.getX(_)
                  , T = h.getX(_ + 1)
                  , v = Vr(this, e, Ji, l, m, T);
                v && t.push(v)
            }
            if (this.isLineLoop) {
                const _ = h.getX(g - 1)
                  , p = h.getX(d)
                  , m = Vr(this, e, Ji, l, _, p);
                m && t.push(m)
            }
        } else {
            const d = Math.max(0, a.start)
              , g = Math.min(f.count, a.start + a.count);
            for (let _ = d, p = g - 1; _ < p; _ += c) {
                const m = Vr(this, e, Ji, l, _, _ + 1);
                m && t.push(m)
            }
            if (this.isLineLoop) {
                const _ = Vr(this, e, Ji, l, g - 1, d);
                _ && t.push(_)
            }
        }
    }
    updateMorphTargets() {
        const t = this.geometry.morphAttributes
          , n = Object.keys(t);
        if (n.length > 0) {
            const r = t[n[0]];
            if (r !== void 0) {
                this.morphTargetInfluences = [],
                this.morphTargetDictionary = {};
                for (let s = 0, a = r.length; s < a; s++) {
                    const o = r[s].name || String(s);
                    this.morphTargetInfluences.push(0),
                    this.morphTargetDictionary[o] = s
                }
            }
        }
    }
}
function Vr(i, e, t, n, r, s) {
    const a = i.geometry.attributes.position;
    if (es.fromBufferAttribute(a, r),
    ts.fromBufferAttribute(a, s),
    t.distanceSqToSegment(es, ts, Js, Al) > n)
        return;
    Js.applyMatrix4(i.matrixWorld);
    const l = e.ray.origin.distanceTo(Js);
    if (!(l < e.near || l > e.far))
        return {
            distance: l,
            point: Al.clone().applyMatrix4(i.matrixWorld),
            index: r,
            face: null,
            faceIndex: null,
            object: i
        }
}
const bl = new R
  , wl = new R;
class gg extends cc {
    constructor(e, t) {
        super(e, t),
        this.isLineSegments = !0,
        this.type = "LineSegments"
    }
    computeLineDistances() {
        const e = this.geometry;
        if (e.index === null) {
            const t = e.attributes.position
              , n = [];
            for (let r = 0, s = t.count; r < s; r += 2)
                bl.fromBufferAttribute(t, r),
                wl.fromBufferAttribute(t, r + 1),
                n[r] = r === 0 ? 0 : n[r - 1],
                n[r + 1] = n[r] + bl.distanceTo(wl);
            e.setAttribute("lineDistance", new gt(n,1))
        } else
            console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
        return this
    }
}
class _g {
    constructor() {
        this.type = "Curve",
        this.arcLengthDivisions = 200
    }
    getPoint() {
        return console.warn("THREE.Curve: .getPoint() not implemented."),
        null
    }
    getPointAt(e, t) {
        const n = this.getUtoTmapping(e);
        return this.getPoint(n, t)
    }
    getPoints(e=5) {
        const t = [];
        for (let n = 0; n <= e; n++)
            t.push(this.getPoint(n / e));
        return t
    }
    getSpacedPoints(e=5) {
        const t = [];
        for (let n = 0; n <= e; n++)
            t.push(this.getPointAt(n / e));
        return t
    }
    getLength() {
        const e = this.getLengths();
        return e[e.length - 1]
    }
    getLengths(e=this.arcLengthDivisions) {
        if (this.cacheArcLengths && this.cacheArcLengths.length === e + 1 && !this.needsUpdate)
            return this.cacheArcLengths;
        this.needsUpdate = !1;
        const t = [];
        let n, r = this.getPoint(0), s = 0;
        t.push(0);
        for (let a = 1; a <= e; a++)
            n = this.getPoint(a / e),
            s += n.distanceTo(r),
            t.push(s),
            r = n;
        return this.cacheArcLengths = t,
        t
    }
    updateArcLengths() {
        this.needsUpdate = !0,
        this.getLengths()
    }
    getUtoTmapping(e, t) {
        const n = this.getLengths();
        let r = 0;
        const s = n.length;
        let a;
        t ? a = t : a = e * n[s - 1];
        let o = 0, l = s - 1, c;
        for (; o <= l; )
            if (r = Math.floor(o + (l - o) / 2),
            c = n[r] - a,
            c < 0)
                o = r + 1;
            else if (c > 0)
                l = r - 1;
            else {
                l = r;
                break
            }
        if (r = l,
        n[r] === a)
            return r / (s - 1);
        const h = n[r]
          , f = n[r + 1] - h
          , d = (a - h) / f;
        return (r + d) / (s - 1)
    }
    getTangent(e, t) {
        let r = e - 1e-4
          , s = e + 1e-4;
        r < 0 && (r = 0),
        s > 1 && (s = 1);
        const a = this.getPoint(r)
          , o = this.getPoint(s)
          , l = t || (a.isVector2 ? new Ie : new R);
        return l.copy(o).sub(a).normalize(),
        l
    }
    getTangentAt(e, t) {
        const n = this.getUtoTmapping(e);
        return this.getTangent(n, t)
    }
    computeFrenetFrames(e, t) {
        const n = new R
          , r = []
          , s = []
          , a = []
          , o = new R
          , l = new pe;
        for (let d = 0; d <= e; d++) {
            const g = d / e;
            r[d] = this.getTangentAt(g, new R)
        }
        s[0] = new R,
        a[0] = new R;
        let c = Number.MAX_VALUE;
        const h = Math.abs(r[0].x)
          , u = Math.abs(r[0].y)
          , f = Math.abs(r[0].z);
        h <= c && (c = h,
        n.set(1, 0, 0)),
        u <= c && (c = u,
        n.set(0, 1, 0)),
        f <= c && n.set(0, 0, 1),
        o.crossVectors(r[0], n).normalize(),
        s[0].crossVectors(r[0], o),
        a[0].crossVectors(r[0], s[0]);
        for (let d = 1; d <= e; d++) {
            if (s[d] = s[d - 1].clone(),
            a[d] = a[d - 1].clone(),
            o.crossVectors(r[d - 1], r[d]),
            o.length() > Number.EPSILON) {
                o.normalize();
                const g = Math.acos(mt(r[d - 1].dot(r[d]), -1, 1));
                s[d].applyMatrix4(l.makeRotationAxis(o, g))
            }
            a[d].crossVectors(r[d], s[d])
        }
        if (t === !0) {
            let d = Math.acos(mt(s[0].dot(s[e]), -1, 1));
            d /= e,
            r[0].dot(o.crossVectors(s[0], s[e])) > 0 && (d = -d);
            for (let g = 1; g <= e; g++)
                s[g].applyMatrix4(l.makeRotationAxis(r[g], d * g)),
                a[g].crossVectors(r[g], s[g])
        }
        return {
            tangents: r,
            normals: s,
            binormals: a
        }
    }
    clone() {
        return new this.constructor().copy(this)
    }
    copy(e) {
        return this.arcLengthDivisions = e.arcLengthDivisions,
        this
    }
    toJSON() {
        const e = {
            metadata: {
                version: 4.6,
                type: "Curve",
                generator: "Curve.toJSON"
            }
        };
        return e.arcLengthDivisions = this.arcLengthDivisions,
        e.type = this.type,
        e
    }
    fromJSON(e) {
        return this.arcLengthDivisions = e.arcLengthDivisions,
        this
    }
}
const vg = {
    triangulate: function(i, e, t=2) {
        const n = e && e.length
          , r = n ? e[0] * t : i.length;
        let s = hc(i, 0, r, t, !0);
        const a = [];
        if (!s || s.next === s.prev)
            return a;
        let o, l, c, h, u, f, d;
        if (n && (s = Eg(i, e, s, t)),
        i.length > 80 * t) {
            o = c = i[0],
            l = h = i[1];
            for (let g = t; g < r; g += t)
                u = i[g],
                f = i[g + 1],
                u < o && (o = u),
                f < l && (l = f),
                u > c && (c = u),
                f > h && (h = f);
            d = Math.max(c - o, h - l),
            d = d !== 0 ? 32767 / d : 0
        }
        return or(s, a, t, o, l, d, 0),
        a
    }
};
function hc(i, e, t, n, r) {
    let s, a;
    if (r === Ug(i, e, t, n) > 0)
        for (s = e; s < t; s += n)
            a = Rl(s, i[s], i[s + 1], a);
    else
        for (s = t - n; s >= e; s -= n)
            a = Rl(s, i[s], i[s + 1], a);
    return a && hs(a, a.next) && (cr(a),
    a = a.next),
    a
}
function ei(i, e) {
    if (!i)
        return i;
    e || (e = i);
    let t = i, n;
    do
        if (n = !1,
        !t.steiner && (hs(t, t.next) || tt(t.prev, t, t.next) === 0)) {
            if (cr(t),
            t = e = t.prev,
            t === t.next)
                break;
            n = !0
        } else
            t = t.next;
    while (n || t !== e);
    return e
}
function or(i, e, t, n, r, s, a) {
    if (!i)
        return;
    !a && s && Rg(i, n, r, s);
    let o = i, l, c;
    for (; i.prev !== i.next; ) {
        if (l = i.prev,
        c = i.next,
        s ? Mg(i, n, r, s) : xg(i)) {
            e.push(l.i / t | 0),
            e.push(i.i / t | 0),
            e.push(c.i / t | 0),
            cr(i),
            i = c.next,
            o = c.next;
            continue
        }
        if (i = c,
        i === o) {
            a ? a === 1 ? (i = yg(ei(i), e, t),
            or(i, e, t, n, r, s, 2)) : a === 2 && Sg(i, e, t, n, r, s) : or(ei(i), e, t, n, r, s, 1);
            break
        }
    }
}
function xg(i) {
    const e = i.prev
      , t = i
      , n = i.next;
    if (tt(e, t, n) >= 0)
        return !1;
    const r = e.x
      , s = t.x
      , a = n.x
      , o = e.y
      , l = t.y
      , c = n.y
      , h = r < s ? r < a ? r : a : s < a ? s : a
      , u = o < l ? o < c ? o : c : l < c ? l : c
      , f = r > s ? r > a ? r : a : s > a ? s : a
      , d = o > l ? o > c ? o : c : l > c ? l : c;
    let g = n.next;
    for (; g !== e; ) {
        if (g.x >= h && g.x <= f && g.y >= u && g.y <= d && Ai(r, o, s, l, a, c, g.x, g.y) && tt(g.prev, g, g.next) >= 0)
            return !1;
        g = g.next
    }
    return !0
}
function Mg(i, e, t, n) {
    const r = i.prev
      , s = i
      , a = i.next;
    if (tt(r, s, a) >= 0)
        return !1;
    const o = r.x
      , l = s.x
      , c = a.x
      , h = r.y
      , u = s.y
      , f = a.y
      , d = o < l ? o < c ? o : c : l < c ? l : c
      , g = h < u ? h < f ? h : f : u < f ? u : f
      , _ = o > l ? o > c ? o : c : l > c ? l : c
      , p = h > u ? h > f ? h : f : u > f ? u : f
      , m = fa(d, g, e, t, n)
      , T = fa(_, p, e, t, n);
    let v = i.prevZ
      , S = i.nextZ;
    for (; v && v.z >= m && S && S.z <= T; ) {
        if (v.x >= d && v.x <= _ && v.y >= g && v.y <= p && v !== r && v !== a && Ai(o, h, l, u, c, f, v.x, v.y) && tt(v.prev, v, v.next) >= 0 || (v = v.prevZ,
        S.x >= d && S.x <= _ && S.y >= g && S.y <= p && S !== r && S !== a && Ai(o, h, l, u, c, f, S.x, S.y) && tt(S.prev, S, S.next) >= 0))
            return !1;
        S = S.nextZ
    }
    for (; v && v.z >= m; ) {
        if (v.x >= d && v.x <= _ && v.y >= g && v.y <= p && v !== r && v !== a && Ai(o, h, l, u, c, f, v.x, v.y) && tt(v.prev, v, v.next) >= 0)
            return !1;
        v = v.prevZ
    }
    for (; S && S.z <= T; ) {
        if (S.x >= d && S.x <= _ && S.y >= g && S.y <= p && S !== r && S !== a && Ai(o, h, l, u, c, f, S.x, S.y) && tt(S.prev, S, S.next) >= 0)
            return !1;
        S = S.nextZ
    }
    return !0
}
function yg(i, e, t) {
    let n = i;
    do {
        const r = n.prev
          , s = n.next.next;
        !hs(r, s) && uc(r, n, n.next, s) && lr(r, s) && lr(s, r) && (e.push(r.i / t | 0),
        e.push(n.i / t | 0),
        e.push(s.i / t | 0),
        cr(n),
        cr(n.next),
        n = i = s),
        n = n.next
    } while (n !== i);
    return ei(n)
}
function Sg(i, e, t, n, r, s) {
    let a = i;
    do {
        let o = a.next.next;
        for (; o !== a.prev; ) {
            if (a.i !== o.i && Lg(a, o)) {
                let l = fc(a, o);
                a = ei(a, a.next),
                l = ei(l, l.next),
                or(a, e, t, n, r, s, 0),
                or(l, e, t, n, r, s, 0);
                return
            }
            o = o.next
        }
        a = a.next
    } while (a !== i)
}
function Eg(i, e, t, n) {
    const r = [];
    let s, a, o, l, c;
    for (s = 0,
    a = e.length; s < a; s++)
        o = e[s] * n,
        l = s < a - 1 ? e[s + 1] * n : i.length,
        c = hc(i, o, l, n, !1),
        c === c.next && (c.steiner = !0),
        r.push(Pg(c));
    for (r.sort(Tg),
    s = 0; s < r.length; s++)
        t = Ag(r[s], t);
    return t
}
function Tg(i, e) {
    return i.x - e.x
}
function Ag(i, e) {
    const t = bg(i, e);
    if (!t)
        return e;
    const n = fc(t, i);
    return ei(n, n.next),
    ei(t, t.next)
}
function bg(i, e) {
    let t = e, n = -1 / 0, r;
    const s = i.x
      , a = i.y;
    do {
        if (a <= t.y && a >= t.next.y && t.next.y !== t.y) {
            const f = t.x + (a - t.y) * (t.next.x - t.x) / (t.next.y - t.y);
            if (f <= s && f > n && (n = f,
            r = t.x < t.next.x ? t : t.next,
            f === s))
                return r
        }
        t = t.next
    } while (t !== e);
    if (!r)
        return null;
    const o = r
      , l = r.x
      , c = r.y;
    let h = 1 / 0, u;
    t = r;
    do
        s >= t.x && t.x >= l && s !== t.x && Ai(a < c ? s : n, a, l, c, a < c ? n : s, a, t.x, t.y) && (u = Math.abs(a - t.y) / (s - t.x),
        lr(t, i) && (u < h || u === h && (t.x > r.x || t.x === r.x && wg(r, t))) && (r = t,
        h = u)),
        t = t.next;
    while (t !== o);
    return r
}
function wg(i, e) {
    return tt(i.prev, i, e.prev) < 0 && tt(e.next, i, i.next) < 0
}
function Rg(i, e, t, n) {
    let r = i;
    do
        r.z === 0 && (r.z = fa(r.x, r.y, e, t, n)),
        r.prevZ = r.prev,
        r.nextZ = r.next,
        r = r.next;
    while (r !== i);
    r.prevZ.nextZ = null,
    r.prevZ = null,
    Cg(r)
}
function Cg(i) {
    let e, t, n, r, s, a, o, l, c = 1;
    do {
        for (t = i,
        i = null,
        s = null,
        a = 0; t; ) {
            for (a++,
            n = t,
            o = 0,
            e = 0; e < c && (o++,
            n = n.nextZ,
            !!n); e++)
                ;
            for (l = c; o > 0 || l > 0 && n; )
                o !== 0 && (l === 0 || !n || t.z <= n.z) ? (r = t,
                t = t.nextZ,
                o--) : (r = n,
                n = n.nextZ,
                l--),
                s ? s.nextZ = r : i = r,
                r.prevZ = s,
                s = r;
            t = n
        }
        s.nextZ = null,
        c *= 2
    } while (a > 1);
    return i
}
function fa(i, e, t, n, r) {
    return i = (i - t) * r | 0,
    e = (e - n) * r | 0,
    i = (i | i << 8) & 16711935,
    i = (i | i << 4) & 252645135,
    i = (i | i << 2) & 858993459,
    i = (i | i << 1) & 1431655765,
    e = (e | e << 8) & 16711935,
    e = (e | e << 4) & 252645135,
    e = (e | e << 2) & 858993459,
    e = (e | e << 1) & 1431655765,
    i | e << 1
}
function Pg(i) {
    let e = i
      , t = i;
    do
        (e.x < t.x || e.x === t.x && e.y < t.y) && (t = e),
        e = e.next;
    while (e !== i);
    return t
}
function Ai(i, e, t, n, r, s, a, o) {
    return (r - a) * (e - o) >= (i - a) * (s - o) && (i - a) * (n - o) >= (t - a) * (e - o) && (t - a) * (s - o) >= (r - a) * (n - o)
}
function Lg(i, e) {
    return i.next.i !== e.i && i.prev.i !== e.i && !Ig(i, e) && (lr(i, e) && lr(e, i) && Dg(i, e) && (tt(i.prev, i, e.prev) || tt(i, e.prev, e)) || hs(i, e) && tt(i.prev, i, i.next) > 0 && tt(e.prev, e, e.next) > 0)
}
function tt(i, e, t) {
    return (e.y - i.y) * (t.x - e.x) - (e.x - i.x) * (t.y - e.y)
}
function hs(i, e) {
    return i.x === e.x && i.y === e.y
}
function uc(i, e, t, n) {
    const r = Hr(tt(i, e, t))
      , s = Hr(tt(i, e, n))
      , a = Hr(tt(t, n, i))
      , o = Hr(tt(t, n, e));
    return !!(r !== s && a !== o || r === 0 && kr(i, t, e) || s === 0 && kr(i, n, e) || a === 0 && kr(t, i, n) || o === 0 && kr(t, e, n))
}
function kr(i, e, t) {
    return e.x <= Math.max(i.x, t.x) && e.x >= Math.min(i.x, t.x) && e.y <= Math.max(i.y, t.y) && e.y >= Math.min(i.y, t.y)
}
function Hr(i) {
    return i > 0 ? 1 : i < 0 ? -1 : 0
}
function Ig(i, e) {
    let t = i;
    do {
        if (t.i !== i.i && t.next.i !== i.i && t.i !== e.i && t.next.i !== e.i && uc(t, t.next, i, e))
            return !0;
        t = t.next
    } while (t !== i);
    return !1
}
function lr(i, e) {
    return tt(i.prev, i, i.next) < 0 ? tt(i, e, i.next) >= 0 && tt(i, i.prev, e) >= 0 : tt(i, e, i.prev) < 0 || tt(i, i.next, e) < 0
}
function Dg(i, e) {
    let t = i
      , n = !1;
    const r = (i.x + e.x) / 2
      , s = (i.y + e.y) / 2;
    do
        t.y > s != t.next.y > s && t.next.y !== t.y && r < (t.next.x - t.x) * (s - t.y) / (t.next.y - t.y) + t.x && (n = !n),
        t = t.next;
    while (t !== i);
    return n
}
function fc(i, e) {
    const t = new da(i.i,i.x,i.y)
      , n = new da(e.i,e.x,e.y)
      , r = i.next
      , s = e.prev;
    return i.next = e,
    e.prev = i,
    t.next = r,
    r.prev = t,
    n.next = t,
    t.prev = n,
    s.next = n,
    n.prev = s,
    n
}
function Rl(i, e, t, n) {
    const r = new da(i,e,t);
    return n ? (r.next = n.next,
    r.prev = n,
    n.next.prev = r,
    n.next = r) : (r.prev = r,
    r.next = r),
    r
}
function cr(i) {
    i.next.prev = i.prev,
    i.prev.next = i.next,
    i.prevZ && (i.prevZ.nextZ = i.nextZ),
    i.nextZ && (i.nextZ.prevZ = i.prevZ)
}
function da(i, e, t) {
    this.i = i,
    this.x = e,
    this.y = t,
    this.prev = null,
    this.next = null,
    this.z = 0,
    this.prevZ = null,
    this.nextZ = null,
    this.steiner = !1
}
function Ug(i, e, t, n) {
    let r = 0;
    for (let s = e, a = t - n; s < t; s += n)
        r += (i[a] - i[s]) * (i[s + 1] + i[a + 1]),
        a = s;
    return r
}
class ba {
    static area(e) {
        const t = e.length;
        let n = 0;
        for (let r = t - 1, s = 0; s < t; r = s++)
            n += e[r].x * e[s].y - e[s].x * e[r].y;
        return n * .5
    }
    static isClockWise(e) {
        return ba.area(e) < 0
    }
    static triangulateShape(e, t) {
        const n = []
          , r = []
          , s = [];
        Cl(e),
        Pl(n, e);
        let a = e.length;
        t.forEach(Cl);
        for (let l = 0; l < t.length; l++)
            r.push(a),
            a += t[l].length,
            Pl(n, t[l]);
        const o = vg.triangulate(n, r);
        for (let l = 0; l < o.length; l += 3)
            s.push(o.slice(l, l + 3));
        return s
    }
}
function Cl(i) {
    const e = i.length;
    e > 2 && i[e - 1].equals(i[0]) && i.pop()
}
function Pl(i, e) {
    for (let t = 0; t < e.length; t++)
        i.push(e[t].x),
        i.push(e[t].y)
}
class Ng extends zn {
    constructor(e) {
        super(),
        this.isMeshStandardMaterial = !0,
        this.defines = {
            STANDARD: ""
        },
        this.type = "MeshStandardMaterial",
        this.color = new ve(16777215),
        this.roughness = 1,
        this.metalness = 0,
        this.map = null,
        this.lightMap = null,
        this.lightMapIntensity = 1,
        this.aoMap = null,
        this.aoMapIntensity = 1,
        this.emissive = new ve(0),
        this.emissiveIntensity = 1,
        this.emissiveMap = null,
        this.bumpMap = null,
        this.bumpScale = 1,
        this.normalMap = null,
        this.normalMapType = as,
        this.normalScale = new Ie(1,1),
        this.displacementMap = null,
        this.displacementScale = 1,
        this.displacementBias = 0,
        this.roughnessMap = null,
        this.metalnessMap = null,
        this.alphaMap = null,
        this.envMap = null,
        this.envMapRotation = new st,
        this.envMapIntensity = 1,
        this.wireframe = !1,
        this.wireframeLinewidth = 1,
        this.wireframeLinecap = "round",
        this.wireframeLinejoin = "round",
        this.flatShading = !1,
        this.fog = !0,
        this.setValues(e)
    }
    copy(e) {
        return super.copy(e),
        this.defines = {
            STANDARD: ""
        },
        this.color.copy(e.color),
        this.roughness = e.roughness,
        this.metalness = e.metalness,
        this.map = e.map,
        this.lightMap = e.lightMap,
        this.lightMapIntensity = e.lightMapIntensity,
        this.aoMap = e.aoMap,
        this.aoMapIntensity = e.aoMapIntensity,
        this.emissive.copy(e.emissive),
        this.emissiveMap = e.emissiveMap,
        this.emissiveIntensity = e.emissiveIntensity,
        this.bumpMap = e.bumpMap,
        this.bumpScale = e.bumpScale,
        this.normalMap = e.normalMap,
        this.normalMapType = e.normalMapType,
        this.normalScale.copy(e.normalScale),
        this.displacementMap = e.displacementMap,
        this.displacementScale = e.displacementScale,
        this.displacementBias = e.displacementBias,
        this.roughnessMap = e.roughnessMap,
        this.metalnessMap = e.metalnessMap,
        this.alphaMap = e.alphaMap,
        this.envMap = e.envMap,
        this.envMapRotation.copy(e.envMapRotation),
        this.envMapIntensity = e.envMapIntensity,
        this.wireframe = e.wireframe,
        this.wireframeLinewidth = e.wireframeLinewidth,
        this.wireframeLinecap = e.wireframeLinecap,
        this.wireframeLinejoin = e.wireframeLinejoin,
        this.flatShading = e.flatShading,
        this.fog = e.fog,
        this
    }
}
class tn extends Ng {
    constructor(e) {
        super(),
        this.isMeshPhysicalMaterial = !0,
        this.defines = {
            STANDARD: "",
            PHYSICAL: ""
        },
        this.type = "MeshPhysicalMaterial",
        this.anisotropyRotation = 0,
        this.anisotropyMap = null,
        this.clearcoatMap = null,
        this.clearcoatRoughness = 0,
        this.clearcoatRoughnessMap = null,
        this.clearcoatNormalScale = new Ie(1,1),
        this.clearcoatNormalMap = null,
        this.ior = 1.5,
        Object.defineProperty(this, "reflectivity", {
            get: function() {
                return mt(2.5 * (this.ior - 1) / (this.ior + 1), 0, 1)
            },
            set: function(t) {
                this.ior = (1 + .4 * t) / (1 - .4 * t)
            }
        }),
        this.iridescenceMap = null,
        this.iridescenceIOR = 1.3,
        this.iridescenceThicknessRange = [100, 400],
        this.iridescenceThicknessMap = null,
        this.sheenColor = new ve(0),
        this.sheenColorMap = null,
        this.sheenRoughness = 1,
        this.sheenRoughnessMap = null,
        this.transmissionMap = null,
        this.thickness = 0,
        this.thicknessMap = null,
        this.attenuationDistance = 1 / 0,
        this.attenuationColor = new ve(1,1,1),
        this.specularIntensity = 1,
        this.specularIntensityMap = null,
        this.specularColor = new ve(1,1,1),
        this.specularColorMap = null,
        this._anisotropy = 0,
        this._clearcoat = 0,
        this._dispersion = 0,
        this._iridescence = 0,
        this._sheen = 0,
        this._transmission = 0,
        this.setValues(e)
    }
    get anisotropy() {
        return this._anisotropy
    }
    set anisotropy(e) {
        this._anisotropy > 0 != e > 0 && this.version++,
        this._anisotropy = e
    }
    get clearcoat() {
        return this._clearcoat
    }
    set clearcoat(e) {
        this._clearcoat > 0 != e > 0 && this.version++,
        this._clearcoat = e
    }
    get iridescence() {
        return this._iridescence
    }
    set iridescence(e) {
        this._iridescence > 0 != e > 0 && this.version++,
        this._iridescence = e
    }
    get dispersion() {
        return this._dispersion
    }
    set dispersion(e) {
        this._dispersion > 0 != e > 0 && this.version++,
        this._dispersion = e
    }
    get sheen() {
        return this._sheen
    }
    set sheen(e) {
        this._sheen > 0 != e > 0 && this.version++,
        this._sheen = e
    }
    get transmission() {
        return this._transmission
    }
    set transmission(e) {
        this._transmission > 0 != e > 0 && this.version++,
        this._transmission = e
    }
    copy(e) {
        return super.copy(e),
        this.defines = {
            STANDARD: "",
            PHYSICAL: ""
        },
        this.anisotropy = e.anisotropy,
        this.anisotropyRotation = e.anisotropyRotation,
        this.anisotropyMap = e.anisotropyMap,
        this.clearcoat = e.clearcoat,
        this.clearcoatMap = e.clearcoatMap,
        this.clearcoatRoughness = e.clearcoatRoughness,
        this.clearcoatRoughnessMap = e.clearcoatRoughnessMap,
        this.clearcoatNormalMap = e.clearcoatNormalMap,
        this.clearcoatNormalScale.copy(e.clearcoatNormalScale),
        this.dispersion = e.dispersion,
        this.ior = e.ior,
        this.iridescence = e.iridescence,
        this.iridescenceMap = e.iridescenceMap,
        this.iridescenceIOR = e.iridescenceIOR,
        this.iridescenceThicknessRange = [...e.iridescenceThicknessRange],
        this.iridescenceThicknessMap = e.iridescenceThicknessMap,
        this.sheen = e.sheen,
        this.sheenColor.copy(e.sheenColor),
        this.sheenColorMap = e.sheenColorMap,
        this.sheenRoughness = e.sheenRoughness,
        this.sheenRoughnessMap = e.sheenRoughnessMap,
        this.transmission = e.transmission,
        this.transmissionMap = e.transmissionMap,
        this.thickness = e.thickness,
        this.thicknessMap = e.thicknessMap,
        this.attenuationDistance = e.attenuationDistance,
        this.attenuationColor.copy(e.attenuationColor),
        this.specularIntensity = e.specularIntensity,
        this.specularIntensityMap = e.specularIntensityMap,
        this.specularColor.copy(e.specularColor),
        this.specularColorMap = e.specularColorMap,
        this
    }
}
class Qs extends zn {
    constructor(e) {
        super(),
        this.isMeshPhongMaterial = !0,
        this.type = "MeshPhongMaterial",
        this.color = new ve(16777215),
        this.specular = new ve(1118481),
        this.shininess = 30,
        this.map = null,
        this.lightMap = null,
        this.lightMapIntensity = 1,
        this.aoMap = null,
        this.aoMapIntensity = 1,
        this.emissive = new ve(0),
        this.emissiveIntensity = 1,
        this.emissiveMap = null,
        this.bumpMap = null,
        this.bumpScale = 1,
        this.normalMap = null,
        this.normalMapType = as,
        this.normalScale = new Ie(1,1),
        this.displacementMap = null,
        this.displacementScale = 1,
        this.displacementBias = 0,
        this.specularMap = null,
        this.alphaMap = null,
        this.envMap = null,
        this.envMapRotation = new st,
        this.combine = is,
        this.reflectivity = 1,
        this.refractionRatio = .98,
        this.wireframe = !1,
        this.wireframeLinewidth = 1,
        this.wireframeLinecap = "round",
        this.wireframeLinejoin = "round",
        this.flatShading = !1,
        this.fog = !0,
        this.setValues(e)
    }
    copy(e) {
        return super.copy(e),
        this.color.copy(e.color),
        this.specular.copy(e.specular),
        this.shininess = e.shininess,
        this.map = e.map,
        this.lightMap = e.lightMap,
        this.lightMapIntensity = e.lightMapIntensity,
        this.aoMap = e.aoMap,
        this.aoMapIntensity = e.aoMapIntensity,
        this.emissive.copy(e.emissive),
        this.emissiveMap = e.emissiveMap,
        this.emissiveIntensity = e.emissiveIntensity,
        this.bumpMap = e.bumpMap,
        this.bumpScale = e.bumpScale,
        this.normalMap = e.normalMap,
        this.normalMapType = e.normalMapType,
        this.normalScale.copy(e.normalScale),
        this.displacementMap = e.displacementMap,
        this.displacementScale = e.displacementScale,
        this.displacementBias = e.displacementBias,
        this.specularMap = e.specularMap,
        this.alphaMap = e.alphaMap,
        this.envMap = e.envMap,
        this.envMapRotation.copy(e.envMapRotation),
        this.combine = e.combine,
        this.reflectivity = e.reflectivity,
        this.refractionRatio = e.refractionRatio,
        this.wireframe = e.wireframe,
        this.wireframeLinewidth = e.wireframeLinewidth,
        this.wireframeLinecap = e.wireframeLinecap,
        this.wireframeLinejoin = e.wireframeLinejoin,
        this.flatShading = e.flatShading,
        this.fog = e.fog,
        this
    }
}
class Fg extends zn {
    constructor(e) {
        super(),
        this.isMeshLambertMaterial = !0,
        this.type = "MeshLambertMaterial",
        this.color = new ve(16777215),
        this.map = null,
        this.lightMap = null,
        this.lightMapIntensity = 1,
        this.aoMap = null,
        this.aoMapIntensity = 1,
        this.emissive = new ve(0),
        this.emissiveIntensity = 1,
        this.emissiveMap = null,
        this.bumpMap = null,
        this.bumpScale = 1,
        this.normalMap = null,
        this.normalMapType = as,
        this.normalScale = new Ie(1,1),
        this.displacementMap = null,
        this.displacementScale = 1,
        this.displacementBias = 0,
        this.specularMap = null,
        this.alphaMap = null,
        this.envMap = null,
        this.envMapRotation = new st,
        this.combine = is,
        this.reflectivity = 1,
        this.refractionRatio = .98,
        this.wireframe = !1,
        this.wireframeLinewidth = 1,
        this.wireframeLinecap = "round",
        this.wireframeLinejoin = "round",
        this.flatShading = !1,
        this.fog = !0,
        this.setValues(e)
    }
    copy(e) {
        return super.copy(e),
        this.color.copy(e.color),
        this.map = e.map,
        this.lightMap = e.lightMap,
        this.lightMapIntensity = e.lightMapIntensity,
        this.aoMap = e.aoMap,
        this.aoMapIntensity = e.aoMapIntensity,
        this.emissive.copy(e.emissive),
        this.emissiveMap = e.emissiveMap,
        this.emissiveIntensity = e.emissiveIntensity,
        this.bumpMap = e.bumpMap,
        this.bumpScale = e.bumpScale,
        this.normalMap = e.normalMap,
        this.normalMapType = e.normalMapType,
        this.normalScale.copy(e.normalScale),
        this.displacementMap = e.displacementMap,
        this.displacementScale = e.displacementScale,
        this.displacementBias = e.displacementBias,
        this.specularMap = e.specularMap,
        this.alphaMap = e.alphaMap,
        this.envMap = e.envMap,
        this.envMapRotation.copy(e.envMapRotation),
        this.combine = e.combine,
        this.reflectivity = e.reflectivity,
        this.refractionRatio = e.refractionRatio,
        this.wireframe = e.wireframe,
        this.wireframeLinewidth = e.wireframeLinewidth,
        this.wireframeLinecap = e.wireframeLinecap,
        this.wireframeLinejoin = e.wireframeLinejoin,
        this.flatShading = e.flatShading,
        this.fog = e.fog,
        this
    }
}
function Gr(i, e, t) {
    return !i || !t && i.constructor === e ? i : typeof e.BYTES_PER_ELEMENT == "number" ? new e(i) : Array.prototype.slice.call(i)
}
function Og(i) {
    return ArrayBuffer.isView(i) && !(i instanceof DataView)
}
function Bg(i) {
    function e(r, s) {
        return i[r] - i[s]
    }
    const t = i.length
      , n = new Array(t);
    for (let r = 0; r !== t; ++r)
        n[r] = r;
    return n.sort(e),
    n
}
function Ll(i, e, t) {
    const n = i.length
      , r = new i.constructor(n);
    for (let s = 0, a = 0; a !== n; ++s) {
        const o = t[s] * e;
        for (let l = 0; l !== e; ++l)
            r[a++] = i[o + l]
    }
    return r
}
function dc(i, e, t, n) {
    let r = 1
      , s = i[0];
    for (; s !== void 0 && s[n] === void 0; )
        s = i[r++];
    if (s === void 0)
        return;
    let a = s[n];
    if (a !== void 0)
        if (Array.isArray(a))
            do
                a = s[n],
                a !== void 0 && (e.push(s.time),
                t.push.apply(t, a)),
                s = i[r++];
            while (s !== void 0);
        else if (a.toArray !== void 0)
            do
                a = s[n],
                a !== void 0 && (e.push(s.time),
                a.toArray(t, t.length)),
                s = i[r++];
            while (s !== void 0);
        else
            do
                a = s[n],
                a !== void 0 && (e.push(s.time),
                t.push(a)),
                s = i[r++];
            while (s !== void 0)
}
class us {
    constructor(e, t, n, r) {
        this.parameterPositions = e,
        this._cachedIndex = 0,
        this.resultBuffer = r !== void 0 ? r : new t.constructor(n),
        this.sampleValues = t,
        this.valueSize = n,
        this.settings = null,
        this.DefaultSettings_ = {}
    }
    evaluate(e) {
        const t = this.parameterPositions;
        let n = this._cachedIndex
          , r = t[n]
          , s = t[n - 1];
        n: {
            e: {
                let a;
                t: {
                    i: if (!(e < r)) {
                        for (let o = n + 2; ; ) {
                            if (r === void 0) {
                                if (e < s)
                                    break i;
                                return n = t.length,
                                this._cachedIndex = n,
                                this.copySampleValue_(n - 1)
                            }
                            if (n === o)
                                break;
                            if (s = r,
                            r = t[++n],
                            e < r)
                                break e
                        }
                        a = t.length;
                        break t
                    }
                    if (!(e >= s)) {
                        const o = t[1];
                        e < o && (n = 2,
                        s = o);
                        for (let l = n - 2; ; ) {
                            if (s === void 0)
                                return this._cachedIndex = 0,
                                this.copySampleValue_(0);
                            if (n === l)
                                break;
                            if (r = s,
                            s = t[--n - 1],
                            e >= s)
                                break e
                        }
                        a = n,
                        n = 0;
                        break t
                    }
                    break n
                }
                for (; n < a; ) {
                    const o = n + a >>> 1;
                    e < t[o] ? a = o : n = o + 1
                }
                if (r = t[n],
                s = t[n - 1],
                s === void 0)
                    return this._cachedIndex = 0,
                    this.copySampleValue_(0);
                if (r === void 0)
                    return n = t.length,
                    this._cachedIndex = n,
                    this.copySampleValue_(n - 1)
            }
            this._cachedIndex = n,
            this.intervalChanged_(n, s, r)
        }
        return this.interpolate_(n, s, e, r)
    }
    getSettings_() {
        return this.settings || this.DefaultSettings_
    }
    copySampleValue_(e) {
        const t = this.resultBuffer
          , n = this.sampleValues
          , r = this.valueSize
          , s = e * r;
        for (let a = 0; a !== r; ++a)
            t[a] = n[s + a];
        return t
    }
    interpolate_() {
        throw new Error("call to abstract method")
    }
    intervalChanged_() {}
}
class zg extends us {
    constructor(e, t, n, r) {
        super(e, t, n, r),
        this._weightPrev = -0,
        this._offsetPrev = -0,
        this._weightNext = -0,
        this._offsetNext = -0,
        this.DefaultSettings_ = {
            endingStart: To,
            endingEnd: To
        }
    }
    intervalChanged_(e, t, n) {
        const r = this.parameterPositions;
        let s = e - 2
          , a = e + 1
          , o = r[s]
          , l = r[a];
        if (o === void 0)
            switch (this.getSettings_().endingStart) {
            case Ao:
                s = e,
                o = 2 * t - n;
                break;
            case bo:
                s = r.length - 2,
                o = t + r[s] - r[s + 1];
                break;
            default:
                s = e,
                o = n
            }
        if (l === void 0)
            switch (this.getSettings_().endingEnd) {
            case Ao:
                a = e,
                l = 2 * n - t;
                break;
            case bo:
                a = 1,
                l = n + r[1] - r[0];
                break;
            default:
                a = e - 1,
                l = t
            }
        const c = (n - t) * .5
          , h = this.valueSize;
        this._weightPrev = c / (t - o),
        this._weightNext = c / (l - n),
        this._offsetPrev = s * h,
        this._offsetNext = a * h
    }
    interpolate_(e, t, n, r) {
        const s = this.resultBuffer
          , a = this.sampleValues
          , o = this.valueSize
          , l = e * o
          , c = l - o
          , h = this._offsetPrev
          , u = this._offsetNext
          , f = this._weightPrev
          , d = this._weightNext
          , g = (n - t) / (r - t)
          , _ = g * g
          , p = _ * g
          , m = -f * p + 2 * f * _ - f * g
          , T = (1 + f) * p + (-1.5 - 2 * f) * _ + (-.5 + f) * g + 1
          , v = (-1 - d) * p + (1.5 + d) * _ + .5 * g
          , S = d * p - d * _;
        for (let D = 0; D !== o; ++D)
            s[D] = m * a[h + D] + T * a[c + D] + v * a[l + D] + S * a[u + D];
        return s
    }
}
class Vg extends us {
    constructor(e, t, n, r) {
        super(e, t, n, r)
    }
    interpolate_(e, t, n, r) {
        const s = this.resultBuffer
          , a = this.sampleValues
          , o = this.valueSize
          , l = e * o
          , c = l - o
          , h = (n - t) / (r - t)
          , u = 1 - h;
        for (let f = 0; f !== o; ++f)
            s[f] = a[c + f] * u + a[l + f] * h;
        return s
    }
}
class kg extends us {
    constructor(e, t, n, r) {
        super(e, t, n, r)
    }
    interpolate_(e) {
        return this.copySampleValue_(e - 1)
    }
}
class nn {
    constructor(e, t, n, r) {
        if (e === void 0)
            throw new Error("THREE.KeyframeTrack: track name is undefined");
        if (t === void 0 || t.length === 0)
            throw new Error("THREE.KeyframeTrack: no keyframes in track named " + e);
        this.name = e,
        this.times = Gr(t, this.TimeBufferType),
        this.values = Gr(n, this.ValueBufferType),
        this.setInterpolation(r || this.DefaultInterpolation)
    }
    static toJSON(e) {
        const t = e.constructor;
        let n;
        if (t.toJSON !== this.toJSON)
            n = t.toJSON(e);
        else {
            n = {
                name: e.name,
                times: Gr(e.times, Array),
                values: Gr(e.values, Array)
            };
            const r = e.getInterpolation();
            r !== e.DefaultInterpolation && (n.interpolation = r)
        }
        return n.type = e.ValueTypeName,
        n
    }
    InterpolantFactoryMethodDiscrete(e) {
        return new kg(this.times,this.values,this.getValueSize(),e)
    }
    InterpolantFactoryMethodLinear(e) {
        return new Vg(this.times,this.values,this.getValueSize(),e)
    }
    InterpolantFactoryMethodSmooth(e) {
        return new zg(this.times,this.values,this.getValueSize(),e)
    }
    setInterpolation(e) {
        let t;
        switch (e) {
        case Kr:
            t = this.InterpolantFactoryMethodDiscrete;
            break;
        case Zr:
            t = this.InterpolantFactoryMethodLinear;
            break;
        case Ts:
            t = this.InterpolantFactoryMethodSmooth;
            break
        }
        if (t === void 0) {
            const n = "unsupported interpolation for " + this.ValueTypeName + " keyframe track named " + this.name;
            if (this.createInterpolant === void 0)
                if (e !== this.DefaultInterpolation)
                    this.setInterpolation(this.DefaultInterpolation);
                else
                    throw new Error(n);
            return console.warn("THREE.KeyframeTrack:", n),
            this
        }
        return this.createInterpolant = t,
        this
    }
    getInterpolation() {
        switch (this.createInterpolant) {
        case this.InterpolantFactoryMethodDiscrete:
            return Kr;
        case this.InterpolantFactoryMethodLinear:
            return Zr;
        case this.InterpolantFactoryMethodSmooth:
            return Ts
        }
    }
    getValueSize() {
        return this.values.length / this.times.length
    }
    shift(e) {
        if (e !== 0) {
            const t = this.times;
            for (let n = 0, r = t.length; n !== r; ++n)
                t[n] += e
        }
        return this
    }
    scale(e) {
        if (e !== 1) {
            const t = this.times;
            for (let n = 0, r = t.length; n !== r; ++n)
                t[n] *= e
        }
        return this
    }
    trim(e, t) {
        const n = this.times
          , r = n.length;
        let s = 0
          , a = r - 1;
        for (; s !== r && n[s] < e; )
            ++s;
        for (; a !== -1 && n[a] > t; )
            --a;
        if (++a,
        s !== 0 || a !== r) {
            s >= a && (a = Math.max(a, 1),
            s = a - 1);
            const o = this.getValueSize();
            this.times = n.slice(s, a),
            this.values = this.values.slice(s * o, a * o)
        }
        return this
    }
    validate() {
        let e = !0;
        const t = this.getValueSize();
        t - Math.floor(t) !== 0 && (console.error("THREE.KeyframeTrack: Invalid value size in track.", this),
        e = !1);
        const n = this.times
          , r = this.values
          , s = n.length;
        s === 0 && (console.error("THREE.KeyframeTrack: Track is empty.", this),
        e = !1);
        let a = null;
        for (let o = 0; o !== s; o++) {
            const l = n[o];
            if (typeof l == "number" && isNaN(l)) {
                console.error("THREE.KeyframeTrack: Time is not a valid number.", this, o, l),
                e = !1;
                break
            }
            if (a !== null && a > l) {
                console.error("THREE.KeyframeTrack: Out of order keys.", this, o, l, a),
                e = !1;
                break
            }
            a = l
        }
        if (r !== void 0 && Og(r))
            for (let o = 0, l = r.length; o !== l; ++o) {
                const c = r[o];
                if (isNaN(c)) {
                    console.error("THREE.KeyframeTrack: Value is not a valid number.", this, o, c),
                    e = !1;
                    break
                }
            }
        return e
    }
    optimize() {
        const e = this.times.slice()
          , t = this.values.slice()
          , n = this.getValueSize()
          , r = this.getInterpolation() === Ts
          , s = e.length - 1;
        let a = 1;
        for (let o = 1; o < s; ++o) {
            let l = !1;
            const c = e[o]
              , h = e[o + 1];
            if (c !== h && (o !== 1 || c !== e[0]))
                if (r)
                    l = !0;
                else {
                    const u = o * n
                      , f = u - n
                      , d = u + n;
                    for (let g = 0; g !== n; ++g) {
                        const _ = t[u + g];
                        if (_ !== t[f + g] || _ !== t[d + g]) {
                            l = !0;
                            break
                        }
                    }
                }
            if (l) {
                if (o !== a) {
                    e[a] = e[o];
                    const u = o * n
                      , f = a * n;
                    for (let d = 0; d !== n; ++d)
                        t[f + d] = t[u + d]
                }
                ++a
            }
        }
        if (s > 0) {
            e[a] = e[s];
            for (let o = s * n, l = a * n, c = 0; c !== n; ++c)
                t[l + c] = t[o + c];
            ++a
        }
        return a !== e.length ? (this.times = e.slice(0, a),
        this.values = t.slice(0, a * n)) : (this.times = e,
        this.values = t),
        this
    }
    clone() {
        const e = this.times.slice()
          , t = this.values.slice()
          , n = this.constructor
          , r = new n(this.name,e,t);
        return r.createInterpolant = this.createInterpolant,
        r
    }
}
nn.prototype.TimeBufferType = Float32Array;
nn.prototype.ValueBufferType = Float32Array;
nn.prototype.DefaultInterpolation = Zr;
class Vi extends nn {
}
Vi.prototype.ValueTypeName = "bool";
Vi.prototype.ValueBufferType = Array;
Vi.prototype.DefaultInterpolation = Kr;
Vi.prototype.InterpolantFactoryMethodLinear = void 0;
Vi.prototype.InterpolantFactoryMethodSmooth = void 0;
class pc extends nn {
}
pc.prototype.ValueTypeName = "color";
class hr extends nn {
}
hr.prototype.ValueTypeName = "number";
class Hg extends us {
    constructor(e, t, n, r) {
        super(e, t, n, r)
    }
    interpolate_(e, t, n, r) {
        const s = this.resultBuffer
          , a = this.sampleValues
          , o = this.valueSize
          , l = (n - t) / (r - t);
        let c = e * o;
        for (let h = c + o; c !== h; c += 4)
            Ct.slerpFlat(s, 0, a, c - o, a, c, l);
        return s
    }
}
class ti extends nn {
    InterpolantFactoryMethodLinear(e) {
        return new Hg(this.times,this.values,this.getValueSize(),e)
    }
}
ti.prototype.ValueTypeName = "quaternion";
ti.prototype.DefaultInterpolation = Zr;
ti.prototype.InterpolantFactoryMethodSmooth = void 0;
class ki extends nn {
}
ki.prototype.ValueTypeName = "string";
ki.prototype.ValueBufferType = Array;
ki.prototype.DefaultInterpolation = Kr;
ki.prototype.InterpolantFactoryMethodLinear = void 0;
ki.prototype.InterpolantFactoryMethodSmooth = void 0;
class ur extends nn {
}
ur.prototype.ValueTypeName = "vector";
class Gg {
    constructor(e="", t=-1, n=[], r=Rh) {
        this.name = e,
        this.tracks = n,
        this.duration = t,
        this.blendMode = r,
        this.uuid = Bn(),
        this.duration < 0 && this.resetDuration()
    }
    static parse(e) {
        const t = []
          , n = e.tracks
          , r = 1 / (e.fps || 1);
        for (let a = 0, o = n.length; a !== o; ++a)
            t.push(Xg(n[a]).scale(r));
        const s = new this(e.name,e.duration,t,e.blendMode);
        return s.uuid = e.uuid,
        s
    }
    static toJSON(e) {
        const t = []
          , n = e.tracks
          , r = {
            name: e.name,
            duration: e.duration,
            tracks: t,
            uuid: e.uuid,
            blendMode: e.blendMode
        };
        for (let s = 0, a = n.length; s !== a; ++s)
            t.push(nn.toJSON(n[s]));
        return r
    }
    static CreateFromMorphTargetSequence(e, t, n, r) {
        const s = t.length
          , a = [];
        for (let o = 0; o < s; o++) {
            let l = []
              , c = [];
            l.push((o + s - 1) % s, o, (o + 1) % s),
            c.push(0, 1, 0);
            const h = Bg(l);
            l = Ll(l, 1, h),
            c = Ll(c, 1, h),
            !r && l[0] === 0 && (l.push(s),
            c.push(c[0])),
            a.push(new hr(".morphTargetInfluences[" + t[o].name + "]",l,c).scale(1 / n))
        }
        return new this(e,-1,a)
    }
    static findByName(e, t) {
        let n = e;
        if (!Array.isArray(e)) {
            const r = e;
            n = r.geometry && r.geometry.animations || r.animations
        }
        for (let r = 0; r < n.length; r++)
            if (n[r].name === t)
                return n[r];
        return null
    }
    static CreateClipsFromMorphTargetSequences(e, t, n) {
        const r = {}
          , s = /^([\w-]*?)([\d]+)$/;
        for (let o = 0, l = e.length; o < l; o++) {
            const c = e[o]
              , h = c.name.match(s);
            if (h && h.length > 1) {
                const u = h[1];
                let f = r[u];
                f || (r[u] = f = []),
                f.push(c)
            }
        }
        const a = [];
        for (const o in r)
            a.push(this.CreateFromMorphTargetSequence(o, r[o], t, n));
        return a
    }
    static parseAnimation(e, t) {
        if (!e)
            return console.error("THREE.AnimationClip: No animation in JSONLoader data."),
            null;
        const n = function(u, f, d, g, _) {
            if (d.length !== 0) {
                const p = []
                  , m = [];
                dc(d, p, m, g),
                p.length !== 0 && _.push(new u(f,p,m))
            }
        }
          , r = []
          , s = e.name || "default"
          , a = e.fps || 30
          , o = e.blendMode;
        let l = e.length || -1;
        const c = e.hierarchy || [];
        for (let u = 0; u < c.length; u++) {
            const f = c[u].keys;
            if (!(!f || f.length === 0))
                if (f[0].morphTargets) {
                    const d = {};
                    let g;
                    for (g = 0; g < f.length; g++)
                        if (f[g].morphTargets)
                            for (let _ = 0; _ < f[g].morphTargets.length; _++)
                                d[f[g].morphTargets[_]] = -1;
                    for (const _ in d) {
                        const p = []
                          , m = [];
                        for (let T = 0; T !== f[g].morphTargets.length; ++T) {
                            const v = f[g];
                            p.push(v.time),
                            m.push(v.morphTarget === _ ? 1 : 0)
                        }
                        r.push(new hr(".morphTargetInfluence[" + _ + "]",p,m))
                    }
                    l = d.length * a
                } else {
                    const d = ".bones[" + t[u].name + "]";
                    n(ur, d + ".position", f, "pos", r),
                    n(ti, d + ".quaternion", f, "rot", r),
                    n(ur, d + ".scale", f, "scl", r)
                }
        }
        return r.length === 0 ? null : new this(s,l,r,o)
    }
    resetDuration() {
        const e = this.tracks;
        let t = 0;
        for (let n = 0, r = e.length; n !== r; ++n) {
            const s = this.tracks[n];
            t = Math.max(t, s.times[s.times.length - 1])
        }
        return this.duration = t,
        this
    }
    trim() {
        for (let e = 0; e < this.tracks.length; e++)
            this.tracks[e].trim(0, this.duration);
        return this
    }
    validate() {
        let e = !0;
        for (let t = 0; t < this.tracks.length; t++)
            e = e && this.tracks[t].validate();
        return e
    }
    optimize() {
        for (let e = 0; e < this.tracks.length; e++)
            this.tracks[e].optimize();
        return this
    }
    clone() {
        const e = [];
        for (let t = 0; t < this.tracks.length; t++)
            e.push(this.tracks[t].clone());
        return new this.constructor(this.name,this.duration,e,this.blendMode)
    }
    toJSON() {
        return this.constructor.toJSON(this)
    }
}
function Wg(i) {
    switch (i.toLowerCase()) {
    case "scalar":
    case "double":
    case "float":
    case "number":
    case "integer":
        return hr;
    case "vector":
    case "vector2":
    case "vector3":
    case "vector4":
        return ur;
    case "color":
        return pc;
    case "quaternion":
        return ti;
    case "bool":
    case "boolean":
        return Vi;
    case "string":
        return ki
    }
    throw new Error("THREE.KeyframeTrack: Unsupported typeName: " + i)
}
function Xg(i) {
    if (i.type === void 0)
        throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");
    const e = Wg(i.type);
    if (i.times === void 0) {
        const t = []
          , n = [];
        dc(i.keys, t, n, "value"),
        i.times = t,
        i.values = n
    }
    return e.parse !== void 0 ? e.parse(i) : new e(i.name,i.times,i.values,i.interpolation)
}
const ns = {
    enabled: !1,
    files: {},
    add: function(i, e) {
        this.enabled !== !1 && (this.files[i] = e)
    },
    get: function(i) {
        if (this.enabled !== !1)
            return this.files[i]
    },
    remove: function(i) {
        delete this.files[i]
    },
    clear: function() {
        this.files = {}
    }
};
class qg {
    constructor(e, t, n) {
        const r = this;
        let s = !1, a = 0, o = 0, l;
        const c = [];
        this.onStart = void 0,
        this.onLoad = e,
        this.onProgress = t,
        this.onError = n,
        this.itemStart = function(h) {
            o++,
            s === !1 && r.onStart !== void 0 && r.onStart(h, a, o),
            s = !0
        }
        ,
        this.itemEnd = function(h) {
            a++,
            r.onProgress !== void 0 && r.onProgress(h, a, o),
            a === o && (s = !1,
            r.onLoad !== void 0 && r.onLoad())
        }
        ,
        this.itemError = function(h) {
            r.onError !== void 0 && r.onError(h)
        }
        ,
        this.resolveURL = function(h) {
            return l ? l(h) : h
        }
        ,
        this.setURLModifier = function(h) {
            return l = h,
            this
        }
        ,
        this.addHandler = function(h, u) {
            return c.push(h, u),
            this
        }
        ,
        this.removeHandler = function(h) {
            const u = c.indexOf(h);
            return u !== -1 && c.splice(u, 2),
            this
        }
        ,
        this.getHandler = function(h) {
            for (let u = 0, f = c.length; u < f; u += 2) {
                const d = c[u]
                  , g = c[u + 1];
                if (d.global && (d.lastIndex = 0),
                d.test(h))
                    return g
            }
            return null
        }
    }
}
const Yg = new qg;
class ni {
    constructor(e) {
        this.manager = e !== void 0 ? e : Yg,
        this.crossOrigin = "anonymous",
        this.withCredentials = !1,
        this.path = "",
        this.resourcePath = "",
        this.requestHeader = {}
    }
    load() {}
    loadAsync(e, t) {
        const n = this;
        return new Promise(function(r, s) {
            n.load(e, r, t, s)
        }
        )
    }
    parse() {}
    setCrossOrigin(e) {
        return this.crossOrigin = e,
        this
    }
    setWithCredentials(e) {
        return this.withCredentials = e,
        this
    }
    setPath(e) {
        return this.path = e,
        this
    }
    setResourcePath(e) {
        return this.resourcePath = e,
        this
    }
    setRequestHeader(e) {
        return this.requestHeader = e,
        this
    }
}
ni.DEFAULT_MATERIAL_NAME = "__DEFAULT";
const mn = {};
class Kg extends Error {
    constructor(e, t) {
        super(e),
        this.response = t
    }
}
class Zg extends ni {
    constructor(e) {
        super(e)
    }
    load(e, t, n, r) {
        e === void 0 && (e = ""),
        this.path !== void 0 && (e = this.path + e),
        e = this.manager.resolveURL(e);
        const s = ns.get(e);
        if (s !== void 0)
            return this.manager.itemStart(e),
            setTimeout(()=>{
                t && t(s),
                this.manager.itemEnd(e)
            }
            , 0),
            s;
        if (mn[e] !== void 0) {
            mn[e].push({
                onLoad: t,
                onProgress: n,
                onError: r
            });
            return
        }
        mn[e] = [],
        mn[e].push({
            onLoad: t,
            onProgress: n,
            onError: r
        });
        const a = new Request(e,{
            headers: new Headers(this.requestHeader),
            credentials: this.withCredentials ? "include" : "same-origin"
        })
          , o = this.mimeType
          , l = this.responseType;
        fetch(a).then(c=>{
            if (c.status === 200 || c.status === 0) {
                if (c.status === 0 && console.warn("THREE.FileLoader: HTTP Status 0 received."),
                typeof ReadableStream > "u" || c.body === void 0 || c.body.getReader === void 0)
                    return c;
                const h = mn[e]
                  , u = c.body.getReader()
                  , f = c.headers.get("X-File-Size") || c.headers.get("Content-Length")
                  , d = f ? parseInt(f) : 0
                  , g = d !== 0;
                let _ = 0;
                const p = new ReadableStream({
                    start(m) {
                        T();
                        function T() {
                            u.read().then(({done: v, value: S})=>{
                                if (v)
                                    m.close();
                                else {
                                    _ += S.byteLength;
                                    const D = new ProgressEvent("progress",{
                                        lengthComputable: g,
                                        loaded: _,
                                        total: d
                                    });
                                    for (let b = 0, w = h.length; b < w; b++) {
                                        const B = h[b];
                                        B.onProgress && B.onProgress(D)
                                    }
                                    m.enqueue(S),
                                    T()
                                }
                            }
                            )
                        }
                    }
                });
                return new Response(p)
            } else
                throw new Kg(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)
        }
        ).then(c=>{
            switch (l) {
            case "arraybuffer":
                return c.arrayBuffer();
            case "blob":
                return c.blob();
            case "document":
                return c.text().then(h=>new DOMParser().parseFromString(h, o));
            case "json":
                return c.json();
            default:
                if (o === void 0)
                    return c.text();
                {
                    const u = /charset="?([^;"\s]*)"?/i.exec(o)
                      , f = u && u[1] ? u[1].toLowerCase() : void 0
                      , d = new TextDecoder(f);
                    return c.arrayBuffer().then(g=>d.decode(g))
                }
            }
        }
        ).then(c=>{
            ns.add(e, c);
            const h = mn[e];
            delete mn[e];
            for (let u = 0, f = h.length; u < f; u++) {
                const d = h[u];
                d.onLoad && d.onLoad(c)
            }
        }
        ).catch(c=>{
            const h = mn[e];
            if (h === void 0)
                throw this.manager.itemError(e),
                c;
            delete mn[e];
            for (let u = 0, f = h.length; u < f; u++) {
                const d = h[u];
                d.onError && d.onError(c)
            }
            this.manager.itemError(e)
        }
        ).finally(()=>{
            this.manager.itemEnd(e)
        }
        ),
        this.manager.itemStart(e)
    }
    setResponseType(e) {
        return this.responseType = e,
        this
    }
    setMimeType(e) {
        return this.mimeType = e,
        this
    }
}
class $g extends ni {
    constructor(e) {
        super(e)
    }
    load(e, t, n, r) {
        this.path !== void 0 && (e = this.path + e),
        e = this.manager.resolveURL(e);
        const s = this
          , a = ns.get(e);
        if (a !== void 0)
            return s.manager.itemStart(e),
            setTimeout(function() {
                t && t(a),
                s.manager.itemEnd(e)
            }, 0),
            a;
        const o = ar("img");
        function l() {
            h(),
            ns.add(e, this),
            t && t(this),
            s.manager.itemEnd(e)
        }
        function c(u) {
            h(),
            r && r(u),
            s.manager.itemError(e),
            s.manager.itemEnd(e)
        }
        function h() {
            o.removeEventListener("load", l, !1),
            o.removeEventListener("error", c, !1)
        }
        return o.addEventListener("load", l, !1),
        o.addEventListener("error", c, !1),
        e.slice(0, 5) !== "data:" && this.crossOrigin !== void 0 && (o.crossOrigin = this.crossOrigin),
        s.manager.itemStart(e),
        o.src = e,
        o
    }
}
class jg extends ni {
    constructor(e) {
        super(e)
    }
    load(e, t, n, r) {
        const s = new ut
          , a = new $g(this.manager);
        return a.setCrossOrigin(this.crossOrigin),
        a.setPath(this.path),
        a.load(e, function(o) {
            s.image = o,
            s.needsUpdate = !0,
            t !== void 0 && t(s)
        }, n, r),
        s
    }
}
class fs extends nt {
    constructor(e, t=1) {
        super(),
        this.isLight = !0,
        this.type = "Light",
        this.color = new ve(e),
        this.intensity = t
    }
    dispose() {}
    copy(e, t) {
        return super.copy(e, t),
        this.color.copy(e.color),
        this.intensity = e.intensity,
        this
    }
    toJSON(e) {
        const t = super.toJSON(e);
        return t.object.color = this.color.getHex(),
        t.object.intensity = this.intensity,
        this.groundColor !== void 0 && (t.object.groundColor = this.groundColor.getHex()),
        this.distance !== void 0 && (t.object.distance = this.distance),
        this.angle !== void 0 && (t.object.angle = this.angle),
        this.decay !== void 0 && (t.object.decay = this.decay),
        this.penumbra !== void 0 && (t.object.penumbra = this.penumbra),
        this.shadow !== void 0 && (t.object.shadow = this.shadow.toJSON()),
        t
    }
}
const ea = new pe
  , Il = new R
  , Dl = new R;
class wa {
    constructor(e) {
        this.camera = e,
        this.bias = 0,
        this.normalBias = 0,
        this.radius = 1,
        this.blurSamples = 8,
        this.mapSize = new Ie(512,512),
        this.map = null,
        this.mapPass = null,
        this.matrix = new pe,
        this.autoUpdate = !0,
        this.needsUpdate = !1,
        this._frustum = new ya,
        this._frameExtents = new Ie(1,1),
        this._viewportCount = 1,
        this._viewports = [new We(0,0,1,1)]
    }
    getViewportCount() {
        return this._viewportCount
    }
    getFrustum() {
        return this._frustum
    }
    updateMatrices(e) {
        const t = this.camera
          , n = this.matrix;
        Il.setFromMatrixPosition(e.matrixWorld),
        t.position.copy(Il),
        Dl.setFromMatrixPosition(e.target.matrixWorld),
        t.lookAt(Dl),
        t.updateMatrixWorld(),
        ea.multiplyMatrices(t.projectionMatrix, t.matrixWorldInverse),
        this._frustum.setFromProjectionMatrix(ea),
        n.set(.5, 0, 0, .5, 0, .5, 0, .5, 0, 0, .5, .5, 0, 0, 0, 1),
        n.multiply(ea)
    }
    getViewport(e) {
        return this._viewports[e]
    }
    getFrameExtents() {
        return this._frameExtents
    }
    dispose() {
        this.map && this.map.dispose(),
        this.mapPass && this.mapPass.dispose()
    }
    copy(e) {
        return this.camera = e.camera.clone(),
        this.bias = e.bias,
        this.radius = e.radius,
        this.mapSize.copy(e.mapSize),
        this
    }
    clone() {
        return new this.constructor().copy(this)
    }
    toJSON() {
        const e = {};
        return this.bias !== 0 && (e.bias = this.bias),
        this.normalBias !== 0 && (e.normalBias = this.normalBias),
        this.radius !== 1 && (e.radius = this.radius),
        (this.mapSize.x !== 512 || this.mapSize.y !== 512) && (e.mapSize = this.mapSize.toArray()),
        e.camera = this.camera.toJSON(!1).object,
        delete e.camera.matrix,
        e
    }
}
class Jg extends wa {
    constructor() {
        super(new wt(50,1,.5,500)),
        this.isSpotLightShadow = !0,
        this.focus = 1
    }
    updateMatrices(e) {
        const t = this.camera
          , n = Di * 2 * e.angle * this.focus
          , r = this.mapSize.width / this.mapSize.height
          , s = e.distance || t.far;
        (n !== t.fov || r !== t.aspect || s !== t.far) && (t.fov = n,
        t.aspect = r,
        t.far = s,
        t.updateProjectionMatrix()),
        super.updateMatrices(e)
    }
    copy(e) {
        return super.copy(e),
        this.focus = e.focus,
        this
    }
}
class Qg extends fs {
    constructor(e, t, n=0, r=Math.PI / 3, s=0, a=2) {
        super(e, t),
        this.isSpotLight = !0,
        this.type = "SpotLight",
        this.position.copy(nt.DEFAULT_UP),
        this.updateMatrix(),
        this.target = new nt,
        this.distance = n,
        this.angle = r,
        this.penumbra = s,
        this.decay = a,
        this.map = null,
        this.shadow = new Jg
    }
    get power() {
        return this.intensity * Math.PI
    }
    set power(e) {
        this.intensity = e / Math.PI
    }
    dispose() {
        this.shadow.dispose()
    }
    copy(e, t) {
        return super.copy(e, t),
        this.distance = e.distance,
        this.angle = e.angle,
        this.penumbra = e.penumbra,
        this.decay = e.decay,
        this.target = e.target.clone(),
        this.shadow = e.shadow.clone(),
        this
    }
}
const Ul = new pe
  , Qi = new R
  , ta = new R;
class e_ extends wa {
    constructor() {
        super(new wt(90,1,.5,500)),
        this.isPointLightShadow = !0,
        this._frameExtents = new Ie(4,2),
        this._viewportCount = 6,
        this._viewports = [new We(2,1,1,1), new We(0,1,1,1), new We(3,1,1,1), new We(1,1,1,1), new We(3,0,1,1), new We(1,0,1,1)],
        this._cubeDirections = [new R(1,0,0), new R(-1,0,0), new R(0,0,1), new R(0,0,-1), new R(0,1,0), new R(0,-1,0)],
        this._cubeUps = [new R(0,1,0), new R(0,1,0), new R(0,1,0), new R(0,1,0), new R(0,0,1), new R(0,0,-1)]
    }
    updateMatrices(e, t=0) {
        const n = this.camera
          , r = this.matrix
          , s = e.distance || n.far;
        s !== n.far && (n.far = s,
        n.updateProjectionMatrix()),
        Qi.setFromMatrixPosition(e.matrixWorld),
        n.position.copy(Qi),
        ta.copy(n.position),
        ta.add(this._cubeDirections[t]),
        n.up.copy(this._cubeUps[t]),
        n.lookAt(ta),
        n.updateMatrixWorld(),
        r.makeTranslation(-Qi.x, -Qi.y, -Qi.z),
        Ul.multiplyMatrices(n.projectionMatrix, n.matrixWorldInverse),
        this._frustum.setFromProjectionMatrix(Ul)
    }
}
class yn extends fs {
    constructor(e, t, n=0, r=2) {
        super(e, t),
        this.isPointLight = !0,
        this.type = "PointLight",
        this.distance = n,
        this.decay = r,
        this.shadow = new e_
    }
    get power() {
        return this.intensity * 4 * Math.PI
    }
    set power(e) {
        this.intensity = e / (4 * Math.PI)
    }
    dispose() {
        this.shadow.dispose()
    }
    copy(e, t) {
        return super.copy(e, t),
        this.distance = e.distance,
        this.decay = e.decay,
        this.shadow = e.shadow.clone(),
        this
    }
}
class t_ extends wa {
    constructor() {
        super(new Sa(-5,5,5,-5,.5,500)),
        this.isDirectionalLightShadow = !0
    }
}
class n_ extends fs {
    constructor(e, t) {
        super(e, t),
        this.isDirectionalLight = !0,
        this.type = "DirectionalLight",
        this.position.copy(nt.DEFAULT_UP),
        this.updateMatrix(),
        this.target = new nt,
        this.shadow = new t_
    }
    dispose() {
        this.shadow.dispose()
    }
    copy(e) {
        return super.copy(e),
        this.target = e.target.clone(),
        this.shadow = e.shadow.clone(),
        this
    }
}
class i_ extends fs {
    constructor(e, t) {
        super(e, t),
        this.isAmbientLight = !0,
        this.type = "AmbientLight"
    }
}
class r_ {
    static decodeText(e) {
        if (typeof TextDecoder < "u")
            return new TextDecoder().decode(e);
        let t = "";
        for (let n = 0, r = e.length; n < r; n++)
            t += String.fromCharCode(e[n]);
        try {
            return decodeURIComponent(escape(t))
        } catch {
            return t
        }
    }
    static extractUrlBase(e) {
        const t = e.lastIndexOf("/");
        return t === -1 ? "./" : e.slice(0, t + 1)
    }
    static resolveURL(e, t) {
        return typeof e != "string" || e === "" ? "" : (/^https?:\/\//i.test(t) && /^\//.test(e) && (t = t.replace(/(^https?:\/\/[^\/]+).*/i, "$1")),
        /^(https?:)?\/\//i.test(e) || /^data:.*,.*$/i.test(e) || /^blob:.*$/i.test(e) ? e : t + e)
    }
}
const Ra = "\\[\\]\\.:\\/"
  , s_ = new RegExp("[" + Ra + "]","g")
  , Ca = "[^" + Ra + "]"
  , a_ = "[^" + Ra.replace("\\.", "") + "]"
  , o_ = /((?:WC+[\/:])*)/.source.replace("WC", Ca)
  , l_ = /(WCOD+)?/.source.replace("WCOD", a_)
  , c_ = /(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC", Ca)
  , h_ = /\.(WC+)(?:\[(.+)\])?/.source.replace("WC", Ca)
  , u_ = new RegExp("^" + o_ + l_ + c_ + h_ + "$")
  , f_ = ["material", "materials", "bones", "map"];
class d_ {
    constructor(e, t, n) {
        const r = n || Ge.parseTrackName(t);
        this._targetGroup = e,
        this._bindings = e.subscribe_(t, r)
    }
    getValue(e, t) {
        this.bind();
        const n = this._targetGroup.nCachedObjects_
          , r = this._bindings[n];
        r !== void 0 && r.getValue(e, t)
    }
    setValue(e, t) {
        const n = this._bindings;
        for (let r = this._targetGroup.nCachedObjects_, s = n.length; r !== s; ++r)
            n[r].setValue(e, t)
    }
    bind() {
        const e = this._bindings;
        for (let t = this._targetGroup.nCachedObjects_, n = e.length; t !== n; ++t)
            e[t].bind()
    }
    unbind() {
        const e = this._bindings;
        for (let t = this._targetGroup.nCachedObjects_, n = e.length; t !== n; ++t)
            e[t].unbind()
    }
}
class Ge {
    constructor(e, t, n) {
        this.path = t,
        this.parsedPath = n || Ge.parseTrackName(t),
        this.node = Ge.findNode(e, this.parsedPath.nodeName),
        this.rootNode = e,
        this.getValue = this._getValue_unbound,
        this.setValue = this._setValue_unbound
    }
    static create(e, t, n) {
        return e && e.isAnimationObjectGroup ? new Ge.Composite(e,t,n) : new Ge(e,t,n)
    }
    static sanitizeNodeName(e) {
        return e.replace(/\s/g, "_").replace(s_, "")
    }
    static parseTrackName(e) {
        const t = u_.exec(e);
        if (t === null)
            throw new Error("PropertyBinding: Cannot parse trackName: " + e);
        const n = {
            nodeName: t[2],
            objectName: t[3],
            objectIndex: t[4],
            propertyName: t[5],
            propertyIndex: t[6]
        }
          , r = n.nodeName && n.nodeName.lastIndexOf(".");
        if (r !== void 0 && r !== -1) {
            const s = n.nodeName.substring(r + 1);
            f_.indexOf(s) !== -1 && (n.nodeName = n.nodeName.substring(0, r),
            n.objectName = s)
        }
        if (n.propertyName === null || n.propertyName.length === 0)
            throw new Error("PropertyBinding: can not parse propertyName from trackName: " + e);
        return n
    }
    static findNode(e, t) {
        if (t === void 0 || t === "" || t === "." || t === -1 || t === e.name || t === e.uuid)
            return e;
        if (e.skeleton) {
            const n = e.skeleton.getBoneByName(t);
            if (n !== void 0)
                return n
        }
        if (e.children) {
            const n = function(s) {
                for (let a = 0; a < s.length; a++) {
                    const o = s[a];
                    if (o.name === t || o.uuid === t)
                        return o;
                    const l = n(o.children);
                    if (l)
                        return l
                }
                return null
            }
              , r = n(e.children);
            if (r)
                return r
        }
        return null
    }
    _getValue_unavailable() {}
    _setValue_unavailable() {}
    _getValue_direct(e, t) {
        e[t] = this.targetObject[this.propertyName]
    }
    _getValue_array(e, t) {
        const n = this.resolvedProperty;
        for (let r = 0, s = n.length; r !== s; ++r)
            e[t++] = n[r]
    }
    _getValue_arrayElement(e, t) {
        e[t] = this.resolvedProperty[this.propertyIndex]
    }
    _getValue_toArray(e, t) {
        this.resolvedProperty.toArray(e, t)
    }
    _setValue_direct(e, t) {
        this.targetObject[this.propertyName] = e[t]
    }
    _setValue_direct_setNeedsUpdate(e, t) {
        this.targetObject[this.propertyName] = e[t],
        this.targetObject.needsUpdate = !0
    }
    _setValue_direct_setMatrixWorldNeedsUpdate(e, t) {
        this.targetObject[this.propertyName] = e[t],
        this.targetObject.matrixWorldNeedsUpdate = !0
    }
    _setValue_array(e, t) {
        const n = this.resolvedProperty;
        for (let r = 0, s = n.length; r !== s; ++r)
            n[r] = e[t++]
    }
    _setValue_array_setNeedsUpdate(e, t) {
        const n = this.resolvedProperty;
        for (let r = 0, s = n.length; r !== s; ++r)
            n[r] = e[t++];
        this.targetObject.needsUpdate = !0
    }
    _setValue_array_setMatrixWorldNeedsUpdate(e, t) {
        const n = this.resolvedProperty;
        for (let r = 0, s = n.length; r !== s; ++r)
            n[r] = e[t++];
        this.targetObject.matrixWorldNeedsUpdate = !0
    }
    _setValue_arrayElement(e, t) {
        this.resolvedProperty[this.propertyIndex] = e[t]
    }
    _setValue_arrayElement_setNeedsUpdate(e, t) {
        this.resolvedProperty[this.propertyIndex] = e[t],
        this.targetObject.needsUpdate = !0
    }
    _setValue_arrayElement_setMatrixWorldNeedsUpdate(e, t) {
        this.resolvedProperty[this.propertyIndex] = e[t],
        this.targetObject.matrixWorldNeedsUpdate = !0
    }
    _setValue_fromArray(e, t) {
        this.resolvedProperty.fromArray(e, t)
    }
    _setValue_fromArray_setNeedsUpdate(e, t) {
        this.resolvedProperty.fromArray(e, t),
        this.targetObject.needsUpdate = !0
    }
    _setValue_fromArray_setMatrixWorldNeedsUpdate(e, t) {
        this.resolvedProperty.fromArray(e, t),
        this.targetObject.matrixWorldNeedsUpdate = !0
    }
    _getValue_unbound(e, t) {
        this.bind(),
        this.getValue(e, t)
    }
    _setValue_unbound(e, t) {
        this.bind(),
        this.setValue(e, t)
    }
    bind() {
        let e = this.node;
        const t = this.parsedPath
          , n = t.objectName
          , r = t.propertyName;
        let s = t.propertyIndex;
        if (e || (e = Ge.findNode(this.rootNode, t.nodeName),
        this.node = e),
        this.getValue = this._getValue_unavailable,
        this.setValue = this._setValue_unavailable,
        !e) {
            console.warn("THREE.PropertyBinding: No target node found for track: " + this.path + ".");
            return
        }
        if (n) {
            let c = t.objectIndex;
            switch (n) {
            case "materials":
                if (!e.material) {
                    console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.", this);
                    return
                }
                if (!e.material.materials) {
                    console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.", this);
                    return
                }
                e = e.material.materials;
                break;
            case "bones":
                if (!e.skeleton) {
                    console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.", this);
                    return
                }
                e = e.skeleton.bones;
                for (let h = 0; h < e.length; h++)
                    if (e[h].name === c) {
                        c = h;
                        break
                    }
                break;
            case "map":
                if ("map"in e) {
                    e = e.map;
                    break
                }
                if (!e.material) {
                    console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.", this);
                    return
                }
                if (!e.material.map) {
                    console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.", this);
                    return
                }
                e = e.material.map;
                break;
            default:
                if (e[n] === void 0) {
                    console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.", this);
                    return
                }
                e = e[n]
            }
            if (c !== void 0) {
                if (e[c] === void 0) {
                    console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.", this, e);
                    return
                }
                e = e[c]
            }
        }
        const a = e[r];
        if (a === void 0) {
            const c = t.nodeName;
            console.error("THREE.PropertyBinding: Trying to update property for track: " + c + "." + r + " but it wasn't found.", e);
            return
        }
        let o = this.Versioning.None;
        this.targetObject = e,
        e.needsUpdate !== void 0 ? o = this.Versioning.NeedsUpdate : e.matrixWorldNeedsUpdate !== void 0 && (o = this.Versioning.MatrixWorldNeedsUpdate);
        let l = this.BindingType.Direct;
        if (s !== void 0) {
            if (r === "morphTargetInfluences") {
                if (!e.geometry) {
                    console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.", this);
                    return
                }
                if (!e.geometry.morphAttributes) {
                    console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.", this);
                    return
                }
                e.morphTargetDictionary[s] !== void 0 && (s = e.morphTargetDictionary[s])
            }
            l = this.BindingType.ArrayElement,
            this.resolvedProperty = a,
            this.propertyIndex = s
        } else
            a.fromArray !== void 0 && a.toArray !== void 0 ? (l = this.BindingType.HasFromToArray,
            this.resolvedProperty = a) : Array.isArray(a) ? (l = this.BindingType.EntireArray,
            this.resolvedProperty = a) : this.propertyName = r;
        this.getValue = this.GetterByBindingType[l],
        this.setValue = this.SetterByBindingTypeAndVersioning[l][o]
    }
    unbind() {
        this.node = null,
        this.getValue = this._getValue_unbound,
        this.setValue = this._setValue_unbound
    }
}
Ge.Composite = d_;
Ge.prototype.BindingType = {
    Direct: 0,
    EntireArray: 1,
    ArrayElement: 2,
    HasFromToArray: 3
};
Ge.prototype.Versioning = {
    None: 0,
    NeedsUpdate: 1,
    MatrixWorldNeedsUpdate: 2
};
Ge.prototype.GetterByBindingType = [Ge.prototype._getValue_direct, Ge.prototype._getValue_array, Ge.prototype._getValue_arrayElement, Ge.prototype._getValue_toArray];
Ge.prototype.SetterByBindingTypeAndVersioning = [[Ge.prototype._setValue_direct, Ge.prototype._setValue_direct_setNeedsUpdate, Ge.prototype._setValue_direct_setMatrixWorldNeedsUpdate], [Ge.prototype._setValue_array, Ge.prototype._setValue_array_setNeedsUpdate, Ge.prototype._setValue_array_setMatrixWorldNeedsUpdate], [Ge.prototype._setValue_arrayElement, Ge.prototype._setValue_arrayElement_setNeedsUpdate, Ge.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate], [Ge.prototype._setValue_fromArray, Ge.prototype._setValue_fromArray_setNeedsUpdate, Ge.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];
class p_ extends gg {
    constructor(e=10, t=10, n=4473924, r=8947848) {
        n = new ve(n),
        r = new ve(r);
        const s = t / 2
          , a = e / t
          , o = e / 2
          , l = []
          , c = [];
        for (let f = 0, d = 0, g = -o; f <= t; f++,
        g += a) {
            l.push(-o, 0, g, o, 0, g),
            l.push(g, 0, -o, g, 0, o);
            const _ = f === s ? n : r;
            _.toArray(c, d),
            d += 3,
            _.toArray(c, d),
            d += 3,
            _.toArray(c, d),
            d += 3,
            _.toArray(c, d),
            d += 3
        }
        const h = new Vt;
        h.setAttribute("position", new gt(l,3)),
        h.setAttribute("color", new gt(c,3));
        const u = new Aa({
            vertexColors: !0,
            toneMapped: !1
        });
        super(h, u),
        this.type = "GridHelper"
    }
    dispose() {
        this.geometry.dispose(),
        this.material.dispose()
    }
}
typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{
    detail: {
        revision: ma
    }
}));
typeof window < "u" && (window.__THREE__ ? console.warn("WARNING: Multiple instances of Three.js being imported.") : window.__THREE__ = ma);
/*!
fflate - fast JavaScript compression/decompression
<https://101arrowz.github.io/fflate>
Licensed under MIT. https://github.com/101arrowz/fflate/blob/master/LICENSE
version 0.8.2
// */
var Bt = Uint8Array
  , bi = Uint16Array
  , m_ = Int32Array
  , mc = new Bt([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0, 0])
  , gc = new Bt([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 0, 0])
  , g_ = new Bt([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15])
  , _c = function(i, e) {
    for (var t = new bi(31), n = 0; n < 31; ++n)
        t[n] = e += 1 << i[n - 1];
    for (var r = new m_(t[30]), n = 1; n < 30; ++n)
        for (var s = t[n]; s < t[n + 1]; ++s)
            r[s] = s - t[n] << 5 | n;
    return {
        b: t,
        r
    }
}
  , vc = _c(mc, 2)
  , xc = vc.b
  , __ = vc.r;
xc[28] = 258,
__[258] = 28;
var v_ = _c(gc, 0)
  , x_ = v_.b
  , pa = new bi(32768);
for (var Je = 0; Je < 32768; ++Je) {
    var Pn = (Je & 43690) >> 1 | (Je & 21845) << 1;
    Pn = (Pn & 52428) >> 2 | (Pn & 13107) << 2,
    Pn = (Pn & 61680) >> 4 | (Pn & 3855) << 4,
    pa[Je] = ((Pn & 65280) >> 8 | (Pn & 255) << 8) >> 1
}
var ir = function(i, e, t) {
    for (var n = i.length, r = 0, s = new bi(e); r < n; ++r)
        i[r] && ++s[i[r] - 1];
    var a = new bi(e);
    for (r = 1; r < e; ++r)
        a[r] = a[r - 1] + s[r - 1] << 1;
    var o;
    if (t) {
        o = new bi(1 << e);
        var l = 15 - e;
        for (r = 0; r < n; ++r)
            if (i[r])
                for (var c = r << 4 | i[r], h = e - i[r], u = a[i[r] - 1]++ << h, f = u | (1 << h) - 1; u <= f; ++u)
                    o[pa[u] >> l] = c
    } else
        for (o = new bi(n),
        r = 0; r < n; ++r)
            i[r] && (o[r] = pa[a[i[r] - 1]++] >> 15 - i[r]);
    return o
}
  , dr = new Bt(288);
for (var Je = 0; Je < 144; ++Je)
    dr[Je] = 8;
for (var Je = 144; Je < 256; ++Je)
    dr[Je] = 9;
for (var Je = 256; Je < 280; ++Je)
    dr[Je] = 7;
for (var Je = 280; Je < 288; ++Je)
    dr[Je] = 8;
var Mc = new Bt(32);
for (var Je = 0; Je < 32; ++Je)
    Mc[Je] = 5;
var M_ = ir(dr, 9, 1)
  , y_ = ir(Mc, 5, 1)
  , na = function(i) {
    for (var e = i[0], t = 1; t < i.length; ++t)
        i[t] > e && (e = i[t]);
    return e
}
  , Wt = function(i, e, t) {
    var n = e / 8 | 0;
    return (i[n] | i[n + 1] << 8) >> (e & 7) & t
}
  , ia = function(i, e) {
    var t = e / 8 | 0;
    return (i[t] | i[t + 1] << 8 | i[t + 2] << 16) >> (e & 7)
}
  , S_ = function(i) {
    return (i + 7) / 8 | 0
}
  , E_ = function(i, e, t) {
    return (t == null || t > i.length) && (t = i.length),
    new Bt(i.subarray(e, t))
}
  , T_ = ["unexpected EOF", "invalid block type", "invalid length/literal", "invalid distance", "stream finished", "no stream handler", , "no callback", "invalid UTF-8 data", "extra field too long", "date not in range 1980-2099", "filename too long", "stream finishing", "invalid zip data"]
  , Xt = function(i, e, t) {
    var n = new Error(e || T_[i]);
    if (n.code = i,
    Error.captureStackTrace && Error.captureStackTrace(n, Xt),
    !t)
        throw n;
    return n
}
  , A_ = function(i, e, t, n) {
    var r = i.length
      , s = 0;
    if (!r || e.f && !e.l)
        return t || new Bt(0);
    var a = !t
      , o = a || e.i != 2
      , l = e.i;
    a && (t = new Bt(r * 3));
    var c = function(Ke) {
        var ge = t.length;
        if (Ke > ge) {
            var qe = new Bt(Math.max(ge * 2, Ke));
            qe.set(t),
            t = qe
        }
    }
      , h = e.f || 0
      , u = e.p || 0
      , f = e.b || 0
      , d = e.l
      , g = e.d
      , _ = e.m
      , p = e.n
      , m = r * 8;
    do {
        if (!d) {
            h = Wt(i, u, 1);
            var T = Wt(i, u + 1, 3);
            if (u += 3,
            T)
                if (T == 1)
                    d = M_,
                    g = y_,
                    _ = 9,
                    p = 5;
                else if (T == 2) {
                    var b = Wt(i, u, 31) + 257
                      , w = Wt(i, u + 10, 15) + 4
                      , B = b + Wt(i, u + 5, 31) + 1;
                    u += 14;
                    for (var E = new Bt(B), x = new Bt(19), U = 0; U < w; ++U)
                        x[g_[U]] = Wt(i, u + U * 3, 7);
                    u += w * 3;
                    for (var G = na(x), P = (1 << G) - 1, H = ir(x, G, 1), U = 0; U < B; ) {
                        var q = H[Wt(i, u, P)];
                        u += q & 15;
                        var v = q >> 4;
                        if (v < 16)
                            E[U++] = v;
                        else {
                            var K = 0
                              , ne = 0;
                            for (v == 16 ? (ne = 3 + Wt(i, u, 3),
                            u += 2,
                            K = E[U - 1]) : v == 17 ? (ne = 3 + Wt(i, u, 7),
                            u += 3) : v == 18 && (ne = 11 + Wt(i, u, 127),
                            u += 7); ne--; )
                                E[U++] = K
                        }
                    }
                    var z = E.subarray(0, b)
                      , j = E.subarray(b);
                    _ = na(z),
                    p = na(j),
                    d = ir(z, _, 1),
                    g = ir(j, p, 1)
                } else
                    Xt(1);
            else {
                var v = S_(u) + 4
                  , S = i[v - 4] | i[v - 3] << 8
                  , D = v + S;
                if (D > r) {
                    l && Xt(0);
                    break
                }
                o && c(f + S),
                t.set(i.subarray(v, D), f),
                e.b = f += S,
                e.p = u = D * 8,
                e.f = h;
                continue
            }
            if (u > m) {
                l && Xt(0);
                break
            }
        }
        o && c(f + 131072);
        for (var Q = (1 << _) - 1, fe = (1 << p) - 1, we = u; ; we = u) {
            var K = d[ia(i, u) & Q]
              , Ve = K >> 4;
            if (u += K & 15,
            u > m) {
                l && Xt(0);
                break
            }
            if (K || Xt(2),
            Ve < 256)
                t[f++] = Ve;
            else if (Ve == 256) {
                we = u,
                d = null;
                break
            } else {
                var k = Ve - 254;
                if (Ve > 264) {
                    var U = Ve - 257
                      , J = mc[U];
                    k = Wt(i, u, (1 << J) - 1) + xc[U],
                    u += J
                }
                var ce = g[ia(i, u) & fe]
                  , te = ce >> 4;
                ce || Xt(3),
                u += ce & 15;
                var j = x_[te];
                if (te > 3) {
                    var J = gc[te];
                    j += ia(i, u) & (1 << J) - 1,
                    u += J
                }
                if (u > m) {
                    l && Xt(0);
                    break
                }
                o && c(f + 131072);
                var De = f + k;
                if (f < j) {
                    var Ue = s - j
                      , I = Math.min(j, De);
                    for (Ue + f < 0 && Xt(3); f < I; ++f)
                        t[f] = n[Ue + f]
                }
                for (; f < De; ++f)
                    t[f] = t[f - j]
            }
        }
        e.l = d,
        e.p = we,
        e.b = f,
        e.f = h,
        d && (h = 1,
        e.m = _,
        e.d = g,
        e.n = p)
    } while (!h);
    return f != t.length && a ? E_(t, 0, f) : t.subarray(0, f)
}
  , b_ = new Bt(0)
  , w_ = function(i, e) {
    return ((i[0] & 15) != 8 || i[0] >> 4 > 7 || (i[0] << 8 | i[1]) % 31) && Xt(6, "invalid zlib data"),
    (i[1] >> 5 & 1) == +!e && Xt(6, "invalid zlib data: " + (i[1] & 32 ? "need" : "unexpected") + " dictionary"),
    (i[1] >> 3 & 4) + 2
};
function R_(i, e) {
    return A_(i.subarray(w_(i, e), -4), {
        i: 2
    }, e, e)
}
var C_ = typeof TextDecoder < "u" && new TextDecoder
  , P_ = 0;
try {
    C_.decode(b_, {
        stream: !0
    }),
    P_ = 1
} catch {}
function yc(i, e, t) {
    const n = t.length - i - 1;
    if (e >= t[n])
        return n - 1;
    if (e <= t[i])
        return i;
    let r = i
      , s = n
      , a = Math.floor((r + s) / 2);
    for (; e < t[a] || e >= t[a + 1]; )
        e < t[a] ? s = a : r = a,
        a = Math.floor((r + s) / 2);
    return a
}
function L_(i, e, t, n) {
    const r = []
      , s = []
      , a = [];
    r[0] = 1;
    for (let o = 1; o <= t; ++o) {
        s[o] = e - n[i + 1 - o],
        a[o] = n[i + o] - e;
        let l = 0;
        for (let c = 0; c < o; ++c) {
            const h = a[c + 1]
              , u = s[o - c]
              , f = r[c] / (h + u);
            r[c] = l + h * f,
            l = u * f
        }
        r[o] = l
    }
    return r
}
function I_(i, e, t, n) {
    const r = yc(i, n, e)
      , s = L_(r, n, i, e)
      , a = new We(0,0,0,0);
    for (let o = 0; o <= i; ++o) {
        const l = t[r - i + o]
          , c = s[o]
          , h = l.w * c;
        a.x += l.x * h,
        a.y += l.y * h,
        a.z += l.z * h,
        a.w += l.w * c
    }
    return a
}
function D_(i, e, t, n, r) {
    const s = [];
    for (let u = 0; u <= t; ++u)
        s[u] = 0;
    const a = [];
    for (let u = 0; u <= n; ++u)
        a[u] = s.slice(0);
    const o = [];
    for (let u = 0; u <= t; ++u)
        o[u] = s.slice(0);
    o[0][0] = 1;
    const l = s.slice(0)
      , c = s.slice(0);
    for (let u = 1; u <= t; ++u) {
        l[u] = e - r[i + 1 - u],
        c[u] = r[i + u] - e;
        let f = 0;
        for (let d = 0; d < u; ++d) {
            const g = c[d + 1]
              , _ = l[u - d];
            o[u][d] = g + _;
            const p = o[d][u - 1] / o[u][d];
            o[d][u] = f + g * p,
            f = _ * p
        }
        o[u][u] = f
    }
    for (let u = 0; u <= t; ++u)
        a[0][u] = o[u][t];
    for (let u = 0; u <= t; ++u) {
        let f = 0
          , d = 1;
        const g = [];
        for (let _ = 0; _ <= t; ++_)
            g[_] = s.slice(0);
        g[0][0] = 1;
        for (let _ = 1; _ <= n; ++_) {
            let p = 0;
            const m = u - _
              , T = t - _;
            u >= _ && (g[d][0] = g[f][0] / o[T + 1][m],
            p = g[d][0] * o[m][T]);
            const v = m >= -1 ? 1 : -m
              , S = u - 1 <= T ? _ - 1 : t - u;
            for (let b = v; b <= S; ++b)
                g[d][b] = (g[f][b] - g[f][b - 1]) / o[T + 1][m + b],
                p += g[d][b] * o[m + b][T];
            u <= T && (g[d][_] = -g[f][_ - 1] / o[T + 1][u],
            p += g[d][_] * o[u][T]),
            a[_][u] = p;
            const D = f;
            f = d,
            d = D
        }
    }
    let h = t;
    for (let u = 1; u <= n; ++u) {
        for (let f = 0; f <= t; ++f)
            a[u][f] *= h;
        h *= t - u
    }
    return a
}
function U_(i, e, t, n, r) {
    const s = r < i ? r : i
      , a = []
      , o = yc(i, n, e)
      , l = D_(o, n, i, s, e)
      , c = [];
    for (let h = 0; h < t.length; ++h) {
        const u = t[h].clone()
          , f = u.w;
        u.x *= f,
        u.y *= f,
        u.z *= f,
        c[h] = u
    }
    for (let h = 0; h <= s; ++h) {
        const u = c[o - i].clone().multiplyScalar(l[h][0]);
        for (let f = 1; f <= i; ++f)
            u.add(c[o - i + f].clone().multiplyScalar(l[h][f]));
        a[h] = u
    }
    for (let h = s + 1; h <= r + 1; ++h)
        a[h] = new We(0,0,0);
    return a
}
function N_(i, e) {
    let t = 1;
    for (let r = 2; r <= i; ++r)
        t *= r;
    let n = 1;
    for (let r = 2; r <= e; ++r)
        n *= r;
    for (let r = 2; r <= i - e; ++r)
        n *= r;
    return t / n
}
function F_(i) {
    const e = i.length
      , t = []
      , n = [];
    for (let s = 0; s < e; ++s) {
        const a = i[s];
        t[s] = new R(a.x,a.y,a.z),
        n[s] = a.w
    }
    const r = [];
    for (let s = 0; s < e; ++s) {
        const a = t[s].clone();
        for (let o = 1; o <= s; ++o)
            a.sub(r[s - o].clone().multiplyScalar(N_(s, o) * n[o]));
        r[s] = a.divideScalar(n[0])
    }
    return r
}
function O_(i, e, t, n, r) {
    const s = U_(i, e, t, n, r);
    return F_(s)
}
class B_ extends _g {
    constructor(e, t, n, r, s) {
        super(),
        this.degree = e,
        this.knots = t,
        this.controlPoints = [],
        this.startKnot = r || 0,
        this.endKnot = s || this.knots.length - 1;
        for (let a = 0; a < n.length; ++a) {
            const o = n[a];
            this.controlPoints[a] = new We(o.x,o.y,o.z,o.w)
        }
    }
    getPoint(e, t=new R) {
        const n = t
          , r = this.knots[this.startKnot] + e * (this.knots[this.endKnot] - this.knots[this.startKnot])
          , s = I_(this.degree, this.knots, this.controlPoints, r);
        return s.w !== 1 && s.divideScalar(s.w),
        n.set(s.x, s.y, s.z)
    }
    getTangent(e, t=new R) {
        const n = t
          , r = this.knots[0] + e * (this.knots[this.knots.length - 1] - this.knots[0])
          , s = O_(this.degree, this.knots, this.controlPoints, r, 1);
        return n.copy(s[1]).normalize(),
        n
    }
}
let Le, ot, At;
class z_ extends ni {
    constructor(e) {
        super(e)
    }
    load(e, t, n, r) {
        const s = this
          , a = s.path === "" ? r_.extractUrlBase(e) : s.path
          , o = new Zg(this.manager);
        o.setPath(s.path),
        o.setResponseType("arraybuffer"),
        o.setRequestHeader(s.requestHeader),
        o.setWithCredentials(s.withCredentials),
        o.load(e, function(l) {
            try {
                t(s.parse(l, a))
            } catch (c) {
                r ? r(c) : console.error(c),
                s.manager.itemError(e)
            }
        }, n, r)
    }
    parse(e, t) {
        if (X_(e))
            Le = new W_().parse(e);
        else {
            const r = Ac(e);
            if (!q_(r))
                throw new Error("THREE.FBXLoader: Unknown format.");
            if (Fl(r) < 7e3)
                throw new Error("THREE.FBXLoader: FBX version not supported, FileVersion: " + Fl(r));
            Le = new G_().parse(r)
        }
        const n = new jg(this.manager).setPath(this.resourcePath || t).setCrossOrigin(this.crossOrigin);
        return new V_(n,this.manager).parse(Le)
    }
}
class V_ {
    constructor(e, t) {
        this.textureLoader = e,
        this.manager = t
    }
    parse() {
        ot = this.parseConnections();
        const e = this.parseImages()
          , t = this.parseTextures(e)
          , n = this.parseMaterials(t)
          , r = this.parseDeformers()
          , s = new k_().parse(r);
        return this.parseScene(r, s, n),
        At
    }
    parseConnections() {
        const e = new Map;
        return "Connections"in Le && Le.Connections.connections.forEach(function(n) {
            const r = n[0]
              , s = n[1]
              , a = n[2];
            e.has(r) || e.set(r, {
                parents: [],
                children: []
            });
            const o = {
                ID: s,
                relationship: a
            };
            e.get(r).parents.push(o),
            e.has(s) || e.set(s, {
                parents: [],
                children: []
            });
            const l = {
                ID: r,
                relationship: a
            };
            e.get(s).children.push(l)
        }),
        e
    }
    parseImages() {
        const e = {}
          , t = {};
        if ("Video"in Le.Objects) {
            const n = Le.Objects.Video;
            for (const r in n) {
                const s = n[r]
                  , a = parseInt(r);
                if (e[a] = s.RelativeFilename || s.Filename,
                "Content"in s) {
                    const o = s.Content instanceof ArrayBuffer && s.Content.byteLength > 0
                      , l = typeof s.Content == "string" && s.Content !== "";
                    if (o || l) {
                        const c = this.parseImage(n[r]);
                        t[s.RelativeFilename || s.Filename] = c
                    }
                }
            }
        }
        for (const n in e) {
            const r = e[n];
            t[r] !== void 0 ? e[n] = t[r] : e[n] = e[n].split("\\").pop()
        }
        return e
    }
    parseImage(e) {
        const t = e.Content
          , n = e.RelativeFilename || e.Filename
          , r = n.slice(n.lastIndexOf(".") + 1).toLowerCase();
        let s;
        switch (r) {
        case "bmp":
            s = "image/bmp";
            break;
        case "jpg":
        case "jpeg":
            s = "image/jpeg";
            break;
        case "png":
            s = "image/png";
            break;
        case "tif":
            s = "image/tiff";
            break;
        case "tga":
            this.manager.getHandler(".tga") === null && console.warn("FBXLoader: TGA loader not found, skipping ", n),
            s = "image/tga";
            break;
        default:
            console.warn('FBXLoader: Image type "' + r + '" is not supported.');
            return
        }
        if (typeof t == "string")
            return "data:" + s + ";base64," + t;
        {
            const a = new Uint8Array(t);
            return window.URL.createObjectURL(new Blob([a],{
                type: s
            }))
        }
    }
    parseTextures(e) {
        const t = new Map;
        if ("Texture"in Le.Objects) {
            const n = Le.Objects.Texture;
            for (const r in n) {
                const s = this.parseTexture(n[r], e);
                t.set(parseInt(r), s)
            }
        }
        return t
    }
    parseTexture(e, t) {
        const n = this.loadTexture(e, t);
        n.ID = e.id,
        n.name = e.attrName;
        const r = e.WrapModeU
          , s = e.WrapModeV
          , a = r !== void 0 ? r.value : 0
          , o = s !== void 0 ? s.value : 0;
        if (n.wrapS = a === 0 ? rr : vn,
        n.wrapT = o === 0 ? rr : vn,
        "Scaling"in e) {
            const l = e.Scaling.value;
            n.repeat.x = l[0],
            n.repeat.y = l[1]
        }
        if ("Translation"in e) {
            const l = e.Translation.value;
            n.offset.x = l[0],
            n.offset.y = l[1]
        }
        return n
    }
    loadTexture(e, t) {
        let n;
        const r = this.textureLoader.path
          , s = ot.get(e.id).children;
        s !== void 0 && s.length > 0 && t[s[0].ID] !== void 0 && (n = t[s[0].ID],
        (n.indexOf("blob:") === 0 || n.indexOf("data:") === 0) && this.textureLoader.setPath(void 0));
        let a;
        const o = e.FileName.slice(-3).toLowerCase();
        if (o === "tga") {
            const l = this.manager.getHandler(".tga");
            l === null ? (console.warn("FBXLoader: TGA loader not found, creating placeholder texture for", e.RelativeFilename),
            a = new ut) : (l.setPath(this.textureLoader.path),
            a = l.load(n))
        } else if (o === "dds") {
            const l = this.manager.getHandler(".dds");
            l === null ? (console.warn("FBXLoader: DDS loader not found, creating placeholder texture for", e.RelativeFilename),
            a = new ut) : (l.setPath(this.textureLoader.path),
            a = l.load(n))
        } else
            o === "psd" ? (console.warn("FBXLoader: PSD textures are not supported, creating placeholder texture for", e.RelativeFilename),
            a = new ut) : a = this.textureLoader.load(n);
        return this.textureLoader.setPath(r),
        a
    }
    parseMaterials(e) {
        const t = new Map;
        if ("Material"in Le.Objects) {
            const n = Le.Objects.Material;
            for (const r in n) {
                const s = this.parseMaterial(n[r], e);
                s !== null && t.set(parseInt(r), s)
            }
        }
        return t
    }
    parseMaterial(e, t) {
        const n = e.id
          , r = e.attrName;
        let s = e.ShadingModel;
        if (typeof s == "object" && (s = s.value),
        !ot.has(n))
            return null;
        const a = this.parseParameters(e, t, n);
        let o;
        switch (s.toLowerCase()) {
        case "phong":
            o = new Qs;
            break;
        case "lambert":
            o = new Fg;
            break;
        default:
            console.warn('THREE.FBXLoader: unknown material type "%s". Defaulting to MeshPhongMaterial.', s),
            o = new Qs;
            break
        }
        return o.setValues(a),
        o.name = r,
        o
    }
    parseParameters(e, t, n) {
        const r = {};
        e.BumpFactor && (r.bumpScale = e.BumpFactor.value),
        e.Diffuse ? r.color = new ve().fromArray(e.Diffuse.value).convertSRGBToLinear() : e.DiffuseColor && (e.DiffuseColor.type === "Color" || e.DiffuseColor.type === "ColorRGB") && (r.color = new ve().fromArray(e.DiffuseColor.value).convertSRGBToLinear()),
        e.DisplacementFactor && (r.displacementScale = e.DisplacementFactor.value),
        e.Emissive ? r.emissive = new ve().fromArray(e.Emissive.value).convertSRGBToLinear() : e.EmissiveColor && (e.EmissiveColor.type === "Color" || e.EmissiveColor.type === "ColorRGB") && (r.emissive = new ve().fromArray(e.EmissiveColor.value).convertSRGBToLinear()),
        e.EmissiveFactor && (r.emissiveIntensity = parseFloat(e.EmissiveFactor.value)),
        e.Opacity && (r.opacity = parseFloat(e.Opacity.value)),
        r.opacity < 1 && (r.transparent = !0),
        e.ReflectionFactor && (r.reflectivity = e.ReflectionFactor.value),
        e.Shininess && (r.shininess = e.Shininess.value),
        e.Specular ? r.specular = new ve().fromArray(e.Specular.value).convertSRGBToLinear() : e.SpecularColor && e.SpecularColor.type === "Color" && (r.specular = new ve().fromArray(e.SpecularColor.value).convertSRGBToLinear());
        const s = this;
        return ot.get(n).children.forEach(function(a) {
            const o = a.relationship;
            switch (o) {
            case "Bump":
                r.bumpMap = s.getTexture(t, a.ID);
                break;
            case "Maya|TEX_ao_map":
                r.aoMap = s.getTexture(t, a.ID);
                break;
            case "DiffuseColor":
            case "Maya|TEX_color_map":
                r.map = s.getTexture(t, a.ID),
                r.map !== void 0 && (r.map.colorSpace = Pt);
                break;
            case "DisplacementColor":
                r.displacementMap = s.getTexture(t, a.ID);
                break;
            case "EmissiveColor":
                r.emissiveMap = s.getTexture(t, a.ID),
                r.emissiveMap !== void 0 && (r.emissiveMap.colorSpace = Pt);
                break;
            case "NormalMap":
            case "Maya|TEX_normal_map":
                r.normalMap = s.getTexture(t, a.ID);
                break;
            case "ReflectionColor":
                r.envMap = s.getTexture(t, a.ID),
                r.envMap !== void 0 && (r.envMap.mapping = Yr,
                r.envMap.colorSpace = Pt);
                break;
            case "SpecularColor":
                r.specularMap = s.getTexture(t, a.ID),
                r.specularMap !== void 0 && (r.specularMap.colorSpace = Pt);
                break;
            case "TransparentColor":
            case "TransparencyFactor":
                r.alphaMap = s.getTexture(t, a.ID),
                r.transparent = !0;
                break;
            case "AmbientColor":
            case "ShininessExponent":
            case "SpecularFactor":
            case "VectorDisplacementColor":
            default:
                console.warn("THREE.FBXLoader: %s map is not supported in three.js, skipping texture.", o);
                break
            }
        }),
        r
    }
    getTexture(e, t) {
        return "LayeredTexture"in Le.Objects && t in Le.Objects.LayeredTexture && (console.warn("THREE.FBXLoader: layered textures are not supported in three.js. Discarding all but first layer."),
        t = ot.get(t).children[0].ID),
        e.get(t)
    }
    parseDeformers() {
        const e = {}
          , t = {};
        if ("Deformer"in Le.Objects) {
            const n = Le.Objects.Deformer;
            for (const r in n) {
                const s = n[r]
                  , a = ot.get(parseInt(r));
                if (s.attrType === "Skin") {
                    const o = this.parseSkeleton(a, n);
                    o.ID = r,
                    a.parents.length > 1 && console.warn("THREE.FBXLoader: skeleton attached to more than one geometry is not supported."),
                    o.geometryID = a.parents[0].ID,
                    e[r] = o
                } else if (s.attrType === "BlendShape") {
                    const o = {
                        id: r
                    };
                    o.rawTargets = this.parseMorphTargets(a, n),
                    o.id = r,
                    a.parents.length > 1 && console.warn("THREE.FBXLoader: morph target attached to more than one geometry is not supported."),
                    t[r] = o
                }
            }
        }
        return {
            skeletons: e,
            morphTargets: t
        }
    }
    parseSkeleton(e, t) {
        const n = [];
        return e.children.forEach(function(r) {
            const s = t[r.ID];
            if (s.attrType !== "Cluster")
                return;
            const a = {
                ID: r.ID,
                indices: [],
                weights: [],
                transformLink: new pe().fromArray(s.TransformLink.a)
            };
            "Indexes"in s && (a.indices = s.Indexes.a,
            a.weights = s.Weights.a),
            n.push(a)
        }),
        {
            rawBones: n,
            bones: []
        }
    }
    parseMorphTargets(e, t) {
        const n = [];
        for (let r = 0; r < e.children.length; r++) {
            const s = e.children[r]
              , a = t[s.ID]
              , o = {
                name: a.attrName,
                initialWeight: a.DeformPercent,
                id: a.id,
                fullWeights: a.FullWeights.a
            };
            if (a.attrType !== "BlendShapeChannel")
                return;
            o.geoID = ot.get(parseInt(s.ID)).children.filter(function(l) {
                return l.relationship === void 0
            })[0].ID,
            n.push(o)
        }
        return n
    }
    parseScene(e, t, n) {
        At = new Ti;
        const r = this.parseModels(e.skeletons, t, n)
          , s = Le.Objects.Model
          , a = this;
        r.forEach(function(l) {
            const c = s[l.ID];
            a.setLookAtProperties(l, c),
            ot.get(l.ID).parents.forEach(function(u) {
                const f = r.get(u.ID);
                f !== void 0 && f.add(l)
            }),
            l.parent === null && At.add(l)
        }),
        this.bindSkeleton(e.skeletons, t, r),
        this.addGlobalSceneSettings(),
        At.traverse(function(l) {
            if (l.userData.transformData) {
                l.parent && (l.userData.transformData.parentMatrix = l.parent.matrix,
                l.userData.transformData.parentMatrixWorld = l.parent.matrixWorld);
                const c = Ec(l.userData.transformData);
                l.applyMatrix4(c),
                l.updateWorldMatrix()
            }
        });
        const o = new H_().parse();
        At.children.length === 1 && At.children[0].isGroup && (At.children[0].animations = o,
        At = At.children[0]),
        At.animations = o
    }
    parseModels(e, t, n) {
        const r = new Map
          , s = Le.Objects.Model;
        for (const a in s) {
            const o = parseInt(a)
              , l = s[a]
              , c = ot.get(o);
            let h = this.buildSkeleton(c, e, o, l.attrName);
            if (!h) {
                switch (l.attrType) {
                case "Camera":
                    h = this.createCamera(c);
                    break;
                case "Light":
                    h = this.createLight(c);
                    break;
                case "Mesh":
                    h = this.createMesh(c, t, n);
                    break;
                case "NurbsCurve":
                    h = this.createCurve(c, t);
                    break;
                case "LimbNode":
                case "Root":
                    h = new ua;
                    break;
                case "Null":
                default:
                    h = new Ti;
                    break
                }
                h.name = l.attrName ? Ge.sanitizeNodeName(l.attrName) : "",
                h.userData.originalName = l.attrName,
                h.ID = o
            }
            this.getTransformData(h, l),
            r.set(o, h)
        }
        return r
    }
    buildSkeleton(e, t, n, r) {
        let s = null;
        return e.parents.forEach(function(a) {
            for (const o in t) {
                const l = t[o];
                l.rawBones.forEach(function(c, h) {
                    if (c.ID === a.ID) {
                        const u = s;
                        s = new ua,
                        s.matrixWorld.copy(c.transformLink),
                        s.name = r ? Ge.sanitizeNodeName(r) : "",
                        s.userData.originalName = r,
                        s.ID = n,
                        l.bones[h] = s,
                        u !== null && s.add(u)
                    }
                })
            }
        }),
        s
    }
    createCamera(e) {
        let t, n;
        if (e.children.forEach(function(r) {
            const s = Le.Objects.NodeAttribute[r.ID];
            s !== void 0 && (n = s)
        }),
        n === void 0)
            t = new nt;
        else {
            let r = 0;
            n.CameraProjectionType !== void 0 && n.CameraProjectionType.value === 1 && (r = 1);
            let s = 1;
            n.NearPlane !== void 0 && (s = n.NearPlane.value / 1e3);
            let a = 1e3;
            n.FarPlane !== void 0 && (a = n.FarPlane.value / 1e3);
            let o = window.innerWidth
              , l = window.innerHeight;
            n.AspectWidth !== void 0 && n.AspectHeight !== void 0 && (o = n.AspectWidth.value,
            l = n.AspectHeight.value);
            const c = o / l;
            let h = 45;
            n.FieldOfView !== void 0 && (h = n.FieldOfView.value);
            const u = n.FocalLength ? n.FocalLength.value : null;
            switch (r) {
            case 0:
                t = new wt(h,c,s,a),
                u !== null && t.setFocalLength(u);
                break;
            case 1:
                t = new Sa(-o / 2,o / 2,l / 2,-l / 2,s,a);
                break;
            default:
                console.warn("THREE.FBXLoader: Unknown camera type " + r + "."),
                t = new nt;
                break
            }
        }
        return t
    }
    createLight(e) {
        let t, n;
        if (e.children.forEach(function(r) {
            const s = Le.Objects.NodeAttribute[r.ID];
            s !== void 0 && (n = s)
        }),
        n === void 0)
            t = new nt;
        else {
            let r;
            n.LightType === void 0 ? r = 0 : r = n.LightType.value;
            let s = 16777215;
            n.Color !== void 0 && (s = new ve().fromArray(n.Color.value).convertSRGBToLinear());
            let a = n.Intensity === void 0 ? 1 : n.Intensity.value / 100;
            n.CastLightOnObject !== void 0 && n.CastLightOnObject.value === 0 && (a = 0);
            let o = 0;
            n.FarAttenuationEnd !== void 0 && (n.EnableFarAttenuation !== void 0 && n.EnableFarAttenuation.value === 0 ? o = 0 : o = n.FarAttenuationEnd.value);
            const l = 1;
            switch (r) {
            case 0:
                t = new yn(s,a,o,l);
                break;
            case 1:
                t = new n_(s,a);
                break;
            case 2:
                let c = Math.PI / 3;
                n.InnerAngle !== void 0 && (c = bt.degToRad(n.InnerAngle.value));
                let h = 0;
                n.OuterAngle !== void 0 && (h = bt.degToRad(n.OuterAngle.value),
                h = Math.max(h, 1)),
                t = new Qg(s,a,o,c,h,l);
                break;
            default:
                console.warn("THREE.FBXLoader: Unknown light type " + n.LightType.value + ", defaulting to a PointLight."),
                t = new yn(s,a);
                break
            }
            n.CastShadows !== void 0 && n.CastShadows.value === 1 && (t.castShadow = !0)
        }
        return t
    }
    createMesh(e, t, n) {
        let r, s = null, a = null;
        const o = [];
        return e.children.forEach(function(l) {
            t.has(l.ID) && (s = t.get(l.ID)),
            n.has(l.ID) && o.push(n.get(l.ID))
        }),
        o.length > 1 ? a = o : o.length > 0 ? a = o[0] : (a = new Qs({
            name: ni.DEFAULT_MATERIAL_NAME,
            color: 13421772
        }),
        o.push(a)),
        "color"in s.attributes && o.forEach(function(l) {
            l.vertexColors = !0
        }),
        s.FBX_Deformer ? (r = new dg(s,a),
        r.normalizeSkinWeights()) : r = new zt(s,a),
        r
    }
    createCurve(e, t) {
        const n = e.children.reduce(function(s, a) {
            return t.has(a.ID) && (s = t.get(a.ID)),
            s
        }, null)
          , r = new Aa({
            name: ni.DEFAULT_MATERIAL_NAME,
            color: 3342591,
            linewidth: 1
        });
        return new cc(n,r)
    }
    getTransformData(e, t) {
        const n = {};
        "InheritType"in t && (n.inheritType = parseInt(t.InheritType.value)),
        "RotationOrder"in t ? n.eulerOrder = Tc(t.RotationOrder.value) : n.eulerOrder = "ZYX",
        "Lcl_Translation"in t && (n.translation = t.Lcl_Translation.value),
        "PreRotation"in t && (n.preRotation = t.PreRotation.value),
        "Lcl_Rotation"in t && (n.rotation = t.Lcl_Rotation.value),
        "PostRotation"in t && (n.postRotation = t.PostRotation.value),
        "Lcl_Scaling"in t && (n.scale = t.Lcl_Scaling.value),
        "ScalingOffset"in t && (n.scalingOffset = t.ScalingOffset.value),
        "ScalingPivot"in t && (n.scalingPivot = t.ScalingPivot.value),
        "RotationOffset"in t && (n.rotationOffset = t.RotationOffset.value),
        "RotationPivot"in t && (n.rotationPivot = t.RotationPivot.value),
        e.userData.transformData = n
    }
    setLookAtProperties(e, t) {
        "LookAtProperty"in t && ot.get(e.ID).children.forEach(function(r) {
            if (r.relationship === "LookAtProperty") {
                const s = Le.Objects.Model[r.ID];
                if ("Lcl_Translation"in s) {
                    const a = s.Lcl_Translation.value;
                    e.target !== void 0 ? (e.target.position.fromArray(a),
                    At.add(e.target)) : e.lookAt(new R().fromArray(a))
                }
            }
        })
    }
    bindSkeleton(e, t, n) {
        const r = this.parsePoseNodes();
        for (const s in e) {
            const a = e[s];
            ot.get(parseInt(a.ID)).parents.forEach(function(l) {
                if (t.has(l.ID)) {
                    const c = l.ID;
                    ot.get(c).parents.forEach(function(u) {
                        n.has(u.ID) && n.get(u.ID).bind(new Ta(a.bones), r[u.ID])
                    })
                }
            })
        }
    }
    parsePoseNodes() {
        const e = {};
        if ("Pose"in Le.Objects) {
            const t = Le.Objects.Pose;
            for (const n in t)
                if (t[n].attrType === "BindPose" && t[n].NbPoseNodes > 0) {
                    const r = t[n].PoseNode;
                    Array.isArray(r) ? r.forEach(function(s) {
                        e[s.Node] = new pe().fromArray(s.Matrix.a)
                    }) : e[r.Node] = new pe().fromArray(r.Matrix.a)
                }
        }
        return e
    }
    addGlobalSceneSettings() {
        if ("GlobalSettings"in Le) {
            if ("AmbientColor"in Le.GlobalSettings) {
                const e = Le.GlobalSettings.AmbientColor.value
                  , t = e[0]
                  , n = e[1]
                  , r = e[2];
                if (t !== 0 || n !== 0 || r !== 0) {
                    const s = new ve(t,n,r).convertSRGBToLinear();
                    At.add(new i_(s,1))
                }
            }
            "UnitScaleFactor"in Le.GlobalSettings && (At.userData.unitScaleFactor = Le.GlobalSettings.UnitScaleFactor.value)
        }
    }
}
class k_ {
    constructor() {
        this.negativeMaterialIndices = !1
    }
    parse(e) {
        const t = new Map;
        if ("Geometry"in Le.Objects) {
            const n = Le.Objects.Geometry;
            for (const r in n) {
                const s = ot.get(parseInt(r))
                  , a = this.parseGeometry(s, n[r], e);
                t.set(parseInt(r), a)
            }
        }
        return this.negativeMaterialIndices === !0 && console.warn("THREE.FBXLoader: The FBX file contains invalid (negative) material indices. The asset might not render as expected."),
        t
    }
    parseGeometry(e, t, n) {
        switch (t.attrType) {
        case "Mesh":
            return this.parseMeshGeometry(e, t, n);
        case "NurbsCurve":
            return this.parseNurbsGeometry(t)
        }
    }
    parseMeshGeometry(e, t, n) {
        const r = n.skeletons
          , s = []
          , a = e.parents.map(function(u) {
            return Le.Objects.Model[u.ID]
        });
        if (a.length === 0)
            return;
        const o = e.children.reduce(function(u, f) {
            return r[f.ID] !== void 0 && (u = r[f.ID]),
            u
        }, null);
        e.children.forEach(function(u) {
            n.morphTargets[u.ID] !== void 0 && s.push(n.morphTargets[u.ID])
        });
        const l = a[0]
          , c = {};
        "RotationOrder"in l && (c.eulerOrder = Tc(l.RotationOrder.value)),
        "InheritType"in l && (c.inheritType = parseInt(l.InheritType.value)),
        "GeometricTranslation"in l && (c.translation = l.GeometricTranslation.value),
        "GeometricRotation"in l && (c.rotation = l.GeometricRotation.value),
        "GeometricScaling"in l && (c.scale = l.GeometricScaling.value);
        const h = Ec(c);
        return this.genGeometry(t, o, s, h)
    }
    genGeometry(e, t, n, r) {
        const s = new Vt;
        e.attrName && (s.name = e.attrName);
        const a = this.parseGeoNode(e, t)
          , o = this.genBuffers(a)
          , l = new gt(o.vertex,3);
        if (l.applyMatrix4(r),
        s.setAttribute("position", l),
        o.colors.length > 0 && s.setAttribute("color", new gt(o.colors,3)),
        t && (s.setAttribute("skinIndex", new Ma(o.weightsIndices,4)),
        s.setAttribute("skinWeight", new gt(o.vertexWeights,4)),
        s.FBX_Deformer = t),
        o.normal.length > 0) {
            const c = new Te().getNormalMatrix(r)
              , h = new gt(o.normal,3);
            h.applyNormalMatrix(c),
            s.setAttribute("normal", h)
        }
        if (o.uvs.forEach(function(c, h) {
            const u = h === 0 ? "uv" : `uv${h}`;
            s.setAttribute(u, new gt(o.uvs[h],2))
        }),
        a.material && a.material.mappingType !== "AllSame") {
            let c = o.materialIndex[0]
              , h = 0;
            if (o.materialIndex.forEach(function(u, f) {
                u !== c && (s.addGroup(h, f - h, c),
                c = u,
                h = f)
            }),
            s.groups.length > 0) {
                const u = s.groups[s.groups.length - 1]
                  , f = u.start + u.count;
                f !== o.materialIndex.length && s.addGroup(f, o.materialIndex.length - f, c)
            }
            s.groups.length === 0 && s.addGroup(0, o.materialIndex.length, o.materialIndex[0])
        }
        return this.addMorphTargets(s, e, n, r),
        s
    }
    parseGeoNode(e, t) {
        const n = {};
        if (n.vertexPositions = e.Vertices !== void 0 ? e.Vertices.a : [],
        n.vertexIndices = e.PolygonVertexIndex !== void 0 ? e.PolygonVertexIndex.a : [],
        e.LayerElementColor && (n.color = this.parseVertexColors(e.LayerElementColor[0])),
        e.LayerElementMaterial && (n.material = this.parseMaterialIndices(e.LayerElementMaterial[0])),
        e.LayerElementNormal && (n.normal = this.parseNormals(e.LayerElementNormal[0])),
        e.LayerElementUV) {
            n.uv = [];
            let r = 0;
            for (; e.LayerElementUV[r]; )
                e.LayerElementUV[r].UV && n.uv.push(this.parseUVs(e.LayerElementUV[r])),
                r++
        }
        return n.weightTable = {},
        t !== null && (n.skeleton = t,
        t.rawBones.forEach(function(r, s) {
            r.indices.forEach(function(a, o) {
                n.weightTable[a] === void 0 && (n.weightTable[a] = []),
                n.weightTable[a].push({
                    id: s,
                    weight: r.weights[o]
                })
            })
        })),
        n
    }
    genBuffers(e) {
        const t = {
            vertex: [],
            normal: [],
            colors: [],
            uvs: [],
            materialIndex: [],
            vertexWeights: [],
            weightsIndices: []
        };
        let n = 0
          , r = 0
          , s = !1
          , a = []
          , o = []
          , l = []
          , c = []
          , h = []
          , u = [];
        const f = this;
        return e.vertexIndices.forEach(function(d, g) {
            let _, p = !1;
            d < 0 && (d = d ^ -1,
            p = !0);
            let m = []
              , T = [];
            if (a.push(d * 3, d * 3 + 1, d * 3 + 2),
            e.color) {
                const v = Wr(g, n, d, e.color);
                l.push(v[0], v[1], v[2])
            }
            if (e.skeleton) {
                if (e.weightTable[d] !== void 0 && e.weightTable[d].forEach(function(v) {
                    T.push(v.weight),
                    m.push(v.id)
                }),
                T.length > 4) {
                    s || (console.warn("THREE.FBXLoader: Vertex has more than 4 skinning weights assigned to vertex. Deleting additional weights."),
                    s = !0);
                    const v = [0, 0, 0, 0]
                      , S = [0, 0, 0, 0];
                    T.forEach(function(D, b) {
                        let w = D
                          , B = m[b];
                        S.forEach(function(E, x, U) {
                            if (w > E) {
                                U[x] = w,
                                w = E;
                                const G = v[x];
                                v[x] = B,
                                B = G
                            }
                        })
                    }),
                    m = v,
                    T = S
                }
                for (; T.length < 4; )
                    T.push(0),
                    m.push(0);
                for (let v = 0; v < 4; ++v)
                    h.push(T[v]),
                    u.push(m[v])
            }
            if (e.normal) {
                const v = Wr(g, n, d, e.normal);
                o.push(v[0], v[1], v[2])
            }
            e.material && e.material.mappingType !== "AllSame" && (_ = Wr(g, n, d, e.material)[0],
            _ < 0 && (f.negativeMaterialIndices = !0,
            _ = 0)),
            e.uv && e.uv.forEach(function(v, S) {
                const D = Wr(g, n, d, v);
                c[S] === void 0 && (c[S] = []),
                c[S].push(D[0]),
                c[S].push(D[1])
            }),
            r++,
            p && (f.genFace(t, e, a, _, o, l, c, h, u, r),
            n++,
            r = 0,
            a = [],
            o = [],
            l = [],
            c = [],
            h = [],
            u = [])
        }),
        t
    }
    getNormalNewell(e) {
        const t = new R(0,0,0);
        for (let n = 0; n < e.length; n++) {
            const r = e[n]
              , s = e[(n + 1) % e.length];
            t.x += (r.y - s.y) * (r.z + s.z),
            t.y += (r.z - s.z) * (r.x + s.x),
            t.z += (r.x - s.x) * (r.y + s.y)
        }
        return t.normalize(),
        t
    }
    getNormalTangentAndBitangent(e) {
        const t = this.getNormalNewell(e)
          , r = (Math.abs(t.z) > .5 ? new R(0,1,0) : new R(0,0,1)).cross(t).normalize()
          , s = t.clone().cross(r).normalize();
        return {
            normal: t,
            tangent: r,
            bitangent: s
        }
    }
    flattenVertex(e, t, n) {
        return new Ie(e.dot(t),e.dot(n))
    }
    genFace(e, t, n, r, s, a, o, l, c, h) {
        let u;
        if (h > 3) {
            const f = [];
            for (let p = 0; p < n.length; p += 3)
                f.push(new R(t.vertexPositions[n[p]],t.vertexPositions[n[p + 1]],t.vertexPositions[n[p + 2]]));
            const {tangent: d, bitangent: g} = this.getNormalTangentAndBitangent(f)
              , _ = [];
            for (const p of f)
                _.push(this.flattenVertex(p, d, g));
            u = ba.triangulateShape(_, [])
        } else
            u = [[0, 1, 2]];
        for (const [f,d,g] of u)
            e.vertex.push(t.vertexPositions[n[f * 3]]),
            e.vertex.push(t.vertexPositions[n[f * 3 + 1]]),
            e.vertex.push(t.vertexPositions[n[f * 3 + 2]]),
            e.vertex.push(t.vertexPositions[n[d * 3]]),
            e.vertex.push(t.vertexPositions[n[d * 3 + 1]]),
            e.vertex.push(t.vertexPositions[n[d * 3 + 2]]),
            e.vertex.push(t.vertexPositions[n[g * 3]]),
            e.vertex.push(t.vertexPositions[n[g * 3 + 1]]),
            e.vertex.push(t.vertexPositions[n[g * 3 + 2]]),
            t.skeleton && (e.vertexWeights.push(l[f * 4]),
            e.vertexWeights.push(l[f * 4 + 1]),
            e.vertexWeights.push(l[f * 4 + 2]),
            e.vertexWeights.push(l[f * 4 + 3]),
            e.vertexWeights.push(l[d * 4]),
            e.vertexWeights.push(l[d * 4 + 1]),
            e.vertexWeights.push(l[d * 4 + 2]),
            e.vertexWeights.push(l[d * 4 + 3]),
            e.vertexWeights.push(l[g * 4]),
            e.vertexWeights.push(l[g * 4 + 1]),
            e.vertexWeights.push(l[g * 4 + 2]),
            e.vertexWeights.push(l[g * 4 + 3]),
            e.weightsIndices.push(c[f * 4]),
            e.weightsIndices.push(c[f * 4 + 1]),
            e.weightsIndices.push(c[f * 4 + 2]),
            e.weightsIndices.push(c[f * 4 + 3]),
            e.weightsIndices.push(c[d * 4]),
            e.weightsIndices.push(c[d * 4 + 1]),
            e.weightsIndices.push(c[d * 4 + 2]),
            e.weightsIndices.push(c[d * 4 + 3]),
            e.weightsIndices.push(c[g * 4]),
            e.weightsIndices.push(c[g * 4 + 1]),
            e.weightsIndices.push(c[g * 4 + 2]),
            e.weightsIndices.push(c[g * 4 + 3])),
            t.color && (e.colors.push(a[f * 3]),
            e.colors.push(a[f * 3 + 1]),
            e.colors.push(a[f * 3 + 2]),
            e.colors.push(a[d * 3]),
            e.colors.push(a[d * 3 + 1]),
            e.colors.push(a[d * 3 + 2]),
            e.colors.push(a[g * 3]),
            e.colors.push(a[g * 3 + 1]),
            e.colors.push(a[g * 3 + 2])),
            t.material && t.material.mappingType !== "AllSame" && (e.materialIndex.push(r),
            e.materialIndex.push(r),
            e.materialIndex.push(r)),
            t.normal && (e.normal.push(s[f * 3]),
            e.normal.push(s[f * 3 + 1]),
            e.normal.push(s[f * 3 + 2]),
            e.normal.push(s[d * 3]),
            e.normal.push(s[d * 3 + 1]),
            e.normal.push(s[d * 3 + 2]),
            e.normal.push(s[g * 3]),
            e.normal.push(s[g * 3 + 1]),
            e.normal.push(s[g * 3 + 2])),
            t.uv && t.uv.forEach(function(_, p) {
                e.uvs[p] === void 0 && (e.uvs[p] = []),
                e.uvs[p].push(o[p][f * 2]),
                e.uvs[p].push(o[p][f * 2 + 1]),
                e.uvs[p].push(o[p][d * 2]),
                e.uvs[p].push(o[p][d * 2 + 1]),
                e.uvs[p].push(o[p][g * 2]),
                e.uvs[p].push(o[p][g * 2 + 1])
            })
    }
    addMorphTargets(e, t, n, r) {
        if (n.length === 0)
            return;
        e.morphTargetsRelative = !0,
        e.morphAttributes.position = [];
        const s = this;
        n.forEach(function(a) {
            a.rawTargets.forEach(function(o) {
                const l = Le.Objects.Geometry[o.geoID];
                l !== void 0 && s.genMorphGeometry(e, t, l, r, o.name)
            })
        })
    }
    genMorphGeometry(e, t, n, r, s) {
        const a = t.PolygonVertexIndex !== void 0 ? t.PolygonVertexIndex.a : []
          , o = n.Vertices !== void 0 ? n.Vertices.a : []
          , l = n.Indexes !== void 0 ? n.Indexes.a : []
          , c = e.attributes.position.count * 3
          , h = new Float32Array(c);
        for (let g = 0; g < l.length; g++) {
            const _ = l[g] * 3;
            h[_] = o[g * 3],
            h[_ + 1] = o[g * 3 + 1],
            h[_ + 2] = o[g * 3 + 2]
        }
        const u = {
            vertexIndices: a,
            vertexPositions: h
        }
          , f = this.genBuffers(u)
          , d = new gt(f.vertex,3);
        d.name = s || n.attrName,
        d.applyMatrix4(r),
        e.morphAttributes.position.push(d)
    }
    parseNormals(e) {
        const t = e.MappingInformationType
          , n = e.ReferenceInformationType
          , r = e.Normals.a;
        let s = [];
        return n === "IndexToDirect" && ("NormalIndex"in e ? s = e.NormalIndex.a : "NormalsIndex"in e && (s = e.NormalsIndex.a)),
        {
            dataSize: 3,
            buffer: r,
            indices: s,
            mappingType: t,
            referenceType: n
        }
    }
    parseUVs(e) {
        const t = e.MappingInformationType
          , n = e.ReferenceInformationType
          , r = e.UV.a;
        let s = [];
        return n === "IndexToDirect" && (s = e.UVIndex.a),
        {
            dataSize: 2,
            buffer: r,
            indices: s,
            mappingType: t,
            referenceType: n
        }
    }
    parseVertexColors(e) {
        const t = e.MappingInformationType
          , n = e.ReferenceInformationType
          , r = e.Colors.a;
        let s = [];
        n === "IndexToDirect" && (s = e.ColorIndex.a);
        for (let a = 0, o = new ve; a < r.length; a += 4)
            o.fromArray(r, a).convertSRGBToLinear().toArray(r, a);
        return {
            dataSize: 4,
            buffer: r,
            indices: s,
            mappingType: t,
            referenceType: n
        }
    }
    parseMaterialIndices(e) {
        const t = e.MappingInformationType
          , n = e.ReferenceInformationType;
        if (t === "NoMappingInformation")
            return {
                dataSize: 1,
                buffer: [0],
                indices: [0],
                mappingType: "AllSame",
                referenceType: n
            };
        const r = e.Materials.a
          , s = [];
        for (let a = 0; a < r.length; ++a)
            s.push(a);
        return {
            dataSize: 1,
            buffer: r,
            indices: s,
            mappingType: t,
            referenceType: n
        }
    }
    parseNurbsGeometry(e) {
        const t = parseInt(e.Order);
        if (isNaN(t))
            return console.error("THREE.FBXLoader: Invalid Order %s given for geometry ID: %s", e.Order, e.id),
            new Vt;
        const n = t - 1
          , r = e.KnotVector.a
          , s = []
          , a = e.Points.a;
        for (let u = 0, f = a.length; u < f; u += 4)
            s.push(new We().fromArray(a, u));
        let o, l;
        if (e.Form === "Closed")
            s.push(s[0]);
        else if (e.Form === "Periodic") {
            o = n,
            l = r.length - 1 - o;
            for (let u = 0; u < n; ++u)
                s.push(s[u])
        }
        const h = new B_(n,r,s,o,l).getPoints(s.length * 12);
        return new Vt().setFromPoints(h)
    }
}
class H_ {
    parse() {
        const e = []
          , t = this.parseClips();
        if (t !== void 0)
            for (const n in t) {
                const r = t[n]
                  , s = this.addClip(r);
                e.push(s)
            }
        return e
    }
    parseClips() {
        if (Le.Objects.AnimationCurve === void 0)
            return;
        const e = this.parseAnimationCurveNodes();
        this.parseAnimationCurves(e);
        const t = this.parseAnimationLayers(e);
        return this.parseAnimStacks(t)
    }
    parseAnimationCurveNodes() {
        const e = Le.Objects.AnimationCurveNode
          , t = new Map;
        for (const n in e) {
            const r = e[n];
            if (r.attrName.match(/S|R|T|DeformPercent/) !== null) {
                const s = {
                    id: r.id,
                    attr: r.attrName,
                    curves: {}
                };
                t.set(s.id, s)
            }
        }
        return t
    }
    parseAnimationCurves(e) {
        const t = Le.Objects.AnimationCurve;
        for (const n in t) {
            const r = {
                id: t[n].id,
                times: t[n].KeyTime.a.map(Y_),
                values: t[n].KeyValueFloat.a
            }
              , s = ot.get(r.id);
            if (s !== void 0) {
                const a = s.parents[0].ID
                  , o = s.parents[0].relationship;
                o.match(/X/) ? e.get(a).curves.x = r : o.match(/Y/) ? e.get(a).curves.y = r : o.match(/Z/) ? e.get(a).curves.z = r : o.match(/DeformPercent/) && e.has(a) && (e.get(a).curves.morph = r)
            }
        }
    }
    parseAnimationLayers(e) {
        const t = Le.Objects.AnimationLayer
          , n = new Map;
        for (const r in t) {
            const s = []
              , a = ot.get(parseInt(r));
            a !== void 0 && (a.children.forEach(function(l, c) {
                if (e.has(l.ID)) {
                    const h = e.get(l.ID);
                    if (h.curves.x !== void 0 || h.curves.y !== void 0 || h.curves.z !== void 0) {
                        if (s[c] === void 0) {
                            const u = ot.get(l.ID).parents.filter(function(f) {
                                return f.relationship !== void 0
                            })[0].ID;
                            if (u !== void 0) {
                                const f = Le.Objects.Model[u.toString()];
                                if (f === void 0) {
                                    console.warn("THREE.FBXLoader: Encountered a unused curve.", l);
                                    return
                                }
                                const d = {
                                    modelName: f.attrName ? Ge.sanitizeNodeName(f.attrName) : "",
                                    ID: f.id,
                                    initialPosition: [0, 0, 0],
                                    initialRotation: [0, 0, 0],
                                    initialScale: [1, 1, 1]
                                };
                                At.traverse(function(g) {
                                    g.ID === f.id && (d.transform = g.matrix,
                                    g.userData.transformData && (d.eulerOrder = g.userData.transformData.eulerOrder))
                                }),
                                d.transform || (d.transform = new pe),
                                "PreRotation"in f && (d.preRotation = f.PreRotation.value),
                                "PostRotation"in f && (d.postRotation = f.PostRotation.value),
                                s[c] = d
                            }
                        }
                        s[c] && (s[c][h.attr] = h)
                    } else if (h.curves.morph !== void 0) {
                        if (s[c] === void 0) {
                            const u = ot.get(l.ID).parents.filter(function(m) {
                                return m.relationship !== void 0
                            })[0].ID
                              , f = ot.get(u).parents[0].ID
                              , d = ot.get(f).parents[0].ID
                              , g = ot.get(d).parents[0].ID
                              , _ = Le.Objects.Model[g]
                              , p = {
                                modelName: _.attrName ? Ge.sanitizeNodeName(_.attrName) : "",
                                morphName: Le.Objects.Deformer[u].attrName
                            };
                            s[c] = p
                        }
                        s[c][h.attr] = h
                    }
                }
            }),
            n.set(parseInt(r), s))
        }
        return n
    }
    parseAnimStacks(e) {
        const t = Le.Objects.AnimationStack
          , n = {};
        for (const r in t) {
            const s = ot.get(parseInt(r)).children;
            s.length > 1 && console.warn("THREE.FBXLoader: Encountered an animation stack with multiple layers, this is currently not supported. Ignoring subsequent layers.");
            const a = e.get(s[0].ID);
            n[r] = {
                name: t[r].attrName,
                layer: a
            }
        }
        return n
    }
    addClip(e) {
        let t = [];
        const n = this;
        return e.layer.forEach(function(r) {
            t = t.concat(n.generateTracks(r))
        }),
        new Gg(e.name,-1,t)
    }
    generateTracks(e) {
        const t = [];
        let n = new R
          , r = new R;
        if (e.transform && e.transform.decompose(n, new Ct, r),
        n = n.toArray(),
        r = r.toArray(),
        e.T !== void 0 && Object.keys(e.T.curves).length > 0) {
            const s = this.generateVectorTrack(e.modelName, e.T.curves, n, "position");
            s !== void 0 && t.push(s)
        }
        if (e.R !== void 0 && Object.keys(e.R.curves).length > 0) {
            const s = this.generateRotationTrack(e.modelName, e.R.curves, e.preRotation, e.postRotation, e.eulerOrder);
            s !== void 0 && t.push(s)
        }
        if (e.S !== void 0 && Object.keys(e.S.curves).length > 0) {
            const s = this.generateVectorTrack(e.modelName, e.S.curves, r, "scale");
            s !== void 0 && t.push(s)
        }
        if (e.DeformPercent !== void 0) {
            const s = this.generateMorphTrack(e);
            s !== void 0 && t.push(s)
        }
        return t
    }
    generateVectorTrack(e, t, n, r) {
        const s = this.getTimesForAllAxes(t)
          , a = this.getKeyframeTrackValues(s, t, n);
        return new ur(e + "." + r,s,a)
    }
    generateRotationTrack(e, t, n, r, s) {
        let a, o;
        if (t.x !== void 0 && t.y !== void 0 && t.z !== void 0) {
            const u = this.interpolateRotations(t.x, t.y, t.z, s);
            a = u[0],
            o = u[1]
        }
        n !== void 0 && (n = n.map(bt.degToRad),
        n.push(s),
        n = new st().fromArray(n),
        n = new Ct().setFromEuler(n)),
        r !== void 0 && (r = r.map(bt.degToRad),
        r.push(s),
        r = new st().fromArray(r),
        r = new Ct().setFromEuler(r).invert());
        const l = new Ct
          , c = new st
          , h = [];
        if (!o || !a)
            return new ti(e + ".quaternion",[0],[0]);
        for (let u = 0; u < o.length; u += 3)
            c.set(o[u], o[u + 1], o[u + 2], s),
            l.setFromEuler(c),
            n !== void 0 && l.premultiply(n),
            r !== void 0 && l.multiply(r),
            u > 2 && new Ct().fromArray(h, (u - 3) / 3 * 4).dot(l) < 0 && l.set(-l.x, -l.y, -l.z, -l.w),
            l.toArray(h, u / 3 * 4);
        return new ti(e + ".quaternion",a,h)
    }
    generateMorphTrack(e) {
        const t = e.DeformPercent.curves.morph
          , n = t.values.map(function(s) {
            return s / 100
        })
          , r = At.getObjectByName(e.modelName).morphTargetDictionary[e.morphName];
        return new hr(e.modelName + ".morphTargetInfluences[" + r + "]",t.times,n)
    }
    getTimesForAllAxes(e) {
        let t = [];
        if (e.x !== void 0 && (t = t.concat(e.x.times)),
        e.y !== void 0 && (t = t.concat(e.y.times)),
        e.z !== void 0 && (t = t.concat(e.z.times)),
        t = t.sort(function(n, r) {
            return n - r
        }),
        t.length > 1) {
            let n = 1
              , r = t[0];
            for (let s = 1; s < t.length; s++) {
                const a = t[s];
                a !== r && (t[n] = a,
                r = a,
                n++)
            }
            t = t.slice(0, n)
        }
        return t
    }
    getKeyframeTrackValues(e, t, n) {
        const r = n
          , s = [];
        let a = -1
          , o = -1
          , l = -1;
        return e.forEach(function(c) {
            if (t.x && (a = t.x.times.indexOf(c)),
            t.y && (o = t.y.times.indexOf(c)),
            t.z && (l = t.z.times.indexOf(c)),
            a !== -1) {
                const h = t.x.values[a];
                s.push(h),
                r[0] = h
            } else
                s.push(r[0]);
            if (o !== -1) {
                const h = t.y.values[o];
                s.push(h),
                r[1] = h
            } else
                s.push(r[1]);
            if (l !== -1) {
                const h = t.z.values[l];
                s.push(h),
                r[2] = h
            } else
                s.push(r[2])
        }),
        s
    }
    interpolateRotations(e, t, n, r) {
        const s = []
          , a = [];
        s.push(e.times[0]),
        a.push(bt.degToRad(e.values[0])),
        a.push(bt.degToRad(t.values[0])),
        a.push(bt.degToRad(n.values[0]));
        for (let o = 1; o < e.values.length; o++) {
            const l = [e.values[o - 1], t.values[o - 1], n.values[o - 1]];
            if (isNaN(l[0]) || isNaN(l[1]) || isNaN(l[2]))
                continue;
            const c = l.map(bt.degToRad)
              , h = [e.values[o], t.values[o], n.values[o]];
            if (isNaN(h[0]) || isNaN(h[1]) || isNaN(h[2]))
                continue;
            const u = h.map(bt.degToRad)
              , f = [h[0] - l[0], h[1] - l[1], h[2] - l[2]]
              , d = [Math.abs(f[0]), Math.abs(f[1]), Math.abs(f[2])];
            if (d[0] >= 180 || d[1] >= 180 || d[2] >= 180) {
                const _ = Math.max(...d) / 180
                  , p = new st(...c,r)
                  , m = new st(...u,r)
                  , T = new Ct().setFromEuler(p)
                  , v = new Ct().setFromEuler(m);
                T.dot(v) && v.set(-v.x, -v.y, -v.z, -v.w);
                const S = e.times[o - 1]
                  , D = e.times[o] - S
                  , b = new Ct
                  , w = new st;
                for (let B = 0; B < 1; B += 1 / _)
                    b.copy(T.clone().slerp(v.clone(), B)),
                    s.push(S + B * D),
                    w.setFromQuaternion(b, r),
                    a.push(w.x),
                    a.push(w.y),
                    a.push(w.z)
            } else
                s.push(e.times[o]),
                a.push(bt.degToRad(e.values[o])),
                a.push(bt.degToRad(t.values[o])),
                a.push(bt.degToRad(n.values[o]))
        }
        return [s, a]
    }
}
class G_ {
    getPrevNode() {
        return this.nodeStack[this.currentIndent - 2]
    }
    getCurrentNode() {
        return this.nodeStack[this.currentIndent - 1]
    }
    getCurrentProp() {
        return this.currentProp
    }
    pushStack(e) {
        this.nodeStack.push(e),
        this.currentIndent += 1
    }
    popStack() {
        this.nodeStack.pop(),
        this.currentIndent -= 1
    }
    setCurrentProp(e, t) {
        this.currentProp = e,
        this.currentPropName = t
    }
    parse(e) {
        this.currentIndent = 0,
        this.allNodes = new Sc,
        this.nodeStack = [],
        this.currentProp = [],
        this.currentPropName = "";
        const t = this
          , n = e.split(/[\r\n]+/);
        return n.forEach(function(r, s) {
            const a = r.match(/^[\s\t]*;/)
              , o = r.match(/^[\s\t]*$/);
            if (a || o)
                return;
            const l = r.match("^\\t{" + t.currentIndent + "}(\\w+):(.*){", "")
              , c = r.match("^\\t{" + t.currentIndent + "}(\\w+):[\\s\\t\\r\\n](.*)")
              , h = r.match("^\\t{" + (t.currentIndent - 1) + "}}");
            l ? t.parseNodeBegin(r, l) : c ? t.parseNodeProperty(r, c, n[++s]) : h ? t.popStack() : r.match(/^[^\s\t}]/) && t.parseNodePropertyContinued(r)
        }),
        this.allNodes
    }
    parseNodeBegin(e, t) {
        const n = t[1].trim().replace(/^"/, "").replace(/"$/, "")
          , r = t[2].split(",").map(function(l) {
            return l.trim().replace(/^"/, "").replace(/"$/, "")
        })
          , s = {
            name: n
        }
          , a = this.parseNodeAttr(r)
          , o = this.getCurrentNode();
        this.currentIndent === 0 ? this.allNodes.add(n, s) : n in o ? (n === "PoseNode" ? o.PoseNode.push(s) : o[n].id !== void 0 && (o[n] = {},
        o[n][o[n].id] = o[n]),
        a.id !== "" && (o[n][a.id] = s)) : typeof a.id == "number" ? (o[n] = {},
        o[n][a.id] = s) : n !== "Properties70" && (n === "PoseNode" ? o[n] = [s] : o[n] = s),
        typeof a.id == "number" && (s.id = a.id),
        a.name !== "" && (s.attrName = a.name),
        a.type !== "" && (s.attrType = a.type),
        this.pushStack(s)
    }
    parseNodeAttr(e) {
        let t = e[0];
        e[0] !== "" && (t = parseInt(e[0]),
        isNaN(t) && (t = e[0]));
        let n = ""
          , r = "";
        return e.length > 1 && (n = e[1].replace(/^(\w+)::/, ""),
        r = e[2]),
        {
            id: t,
            name: n,
            type: r
        }
    }
    parseNodeProperty(e, t, n) {
        let r = t[1].replace(/^"/, "").replace(/"$/, "").trim()
          , s = t[2].replace(/^"/, "").replace(/"$/, "").trim();
        r === "Content" && s === "," && (s = n.replace(/"/g, "").replace(/,$/, "").trim());
        const a = this.getCurrentNode();
        if (a.name === "Properties70") {
            this.parseNodeSpecialProperty(e, r, s);
            return
        }
        if (r === "C") {
            const l = s.split(",").slice(1)
              , c = parseInt(l[0])
              , h = parseInt(l[1]);
            let u = s.split(",").slice(3);
            u = u.map(function(f) {
                return f.trim().replace(/^"/, "")
            }),
            r = "connections",
            s = [c, h],
            Z_(s, u),
            a[r] === void 0 && (a[r] = [])
        }
        r === "Node" && (a.id = s),
        r in a && Array.isArray(a[r]) ? a[r].push(s) : r !== "a" ? a[r] = s : a.a = s,
        this.setCurrentProp(a, r),
        r === "a" && s.slice(-1) !== "," && (a.a = sa(s))
    }
    parseNodePropertyContinued(e) {
        const t = this.getCurrentNode();
        t.a += e,
        e.slice(-1) !== "," && (t.a = sa(t.a))
    }
    parseNodeSpecialProperty(e, t, n) {
        const r = n.split('",').map(function(h) {
            return h.trim().replace(/^\"/, "").replace(/\s/, "_")
        })
          , s = r[0]
          , a = r[1]
          , o = r[2]
          , l = r[3];
        let c = r[4];
        switch (a) {
        case "int":
        case "enum":
        case "bool":
        case "ULongLong":
        case "double":
        case "Number":
        case "FieldOfView":
            c = parseFloat(c);
            break;
        case "Color":
        case "ColorRGB":
        case "Vector3D":
        case "Lcl_Translation":
        case "Lcl_Rotation":
        case "Lcl_Scaling":
            c = sa(c);
            break
        }
        this.getPrevNode()[s] = {
            type: a,
            type2: o,
            flag: l,
            value: c
        },
        this.setCurrentProp(this.getPrevNode(), s)
    }
}
class W_ {
    parse(e) {
        const t = new Nl(e);
        t.skip(23);
        const n = t.getUint32();
        if (n < 6400)
            throw new Error("THREE.FBXLoader: FBX version not supported, FileVersion: " + n);
        const r = new Sc;
        for (; !this.endOfContent(t); ) {
            const s = this.parseNode(t, n);
            s !== null && r.add(s.name, s)
        }
        return r
    }
    endOfContent(e) {
        return e.size() % 16 === 0 ? (e.getOffset() + 160 + 16 & -16) >= e.size() : e.getOffset() + 160 + 16 >= e.size()
    }
    parseNode(e, t) {
        const n = {}
          , r = t >= 7500 ? e.getUint64() : e.getUint32()
          , s = t >= 7500 ? e.getUint64() : e.getUint32();
        t >= 7500 ? e.getUint64() : e.getUint32();
        const a = e.getUint8()
          , o = e.getString(a);
        if (r === 0)
            return null;
        const l = [];
        for (let f = 0; f < s; f++)
            l.push(this.parseProperty(e));
        const c = l.length > 0 ? l[0] : ""
          , h = l.length > 1 ? l[1] : ""
          , u = l.length > 2 ? l[2] : "";
        for (n.singleProperty = s === 1 && e.getOffset() === r; r > e.getOffset(); ) {
            const f = this.parseNode(e, t);
            f !== null && this.parseSubNode(o, n, f)
        }
        return n.propertyList = l,
        typeof c == "number" && (n.id = c),
        h !== "" && (n.attrName = h),
        u !== "" && (n.attrType = u),
        o !== "" && (n.name = o),
        n
    }
    parseSubNode(e, t, n) {
        if (n.singleProperty === !0) {
            const r = n.propertyList[0];
            Array.isArray(r) ? (t[n.name] = n,
            n.a = r) : t[n.name] = r
        } else if (e === "Connections" && n.name === "C") {
            const r = [];
            n.propertyList.forEach(function(s, a) {
                a !== 0 && r.push(s)
            }),
            t.connections === void 0 && (t.connections = []),
            t.connections.push(r)
        } else if (n.name === "Properties70")
            Object.keys(n).forEach(function(s) {
                t[s] = n[s]
            });
        else if (e === "Properties70" && n.name === "P") {
            let r = n.propertyList[0]
              , s = n.propertyList[1];
            const a = n.propertyList[2]
              , o = n.propertyList[3];
            let l;
            r.indexOf("Lcl ") === 0 && (r = r.replace("Lcl ", "Lcl_")),
            s.indexOf("Lcl ") === 0 && (s = s.replace("Lcl ", "Lcl_")),
            s === "Color" || s === "ColorRGB" || s === "Vector" || s === "Vector3D" || s.indexOf("Lcl_") === 0 ? l = [n.propertyList[4], n.propertyList[5], n.propertyList[6]] : l = n.propertyList[4],
            t[r] = {
                type: s,
                type2: a,
                flag: o,
                value: l
            }
        } else
            t[n.name] === void 0 ? typeof n.id == "number" ? (t[n.name] = {},
            t[n.name][n.id] = n) : t[n.name] = n : n.name === "PoseNode" ? (Array.isArray(t[n.name]) || (t[n.name] = [t[n.name]]),
            t[n.name].push(n)) : t[n.name][n.id] === void 0 && (t[n.name][n.id] = n)
    }
    parseProperty(e) {
        const t = e.getString(1);
        let n;
        switch (t) {
        case "C":
            return e.getBoolean();
        case "D":
            return e.getFloat64();
        case "F":
            return e.getFloat32();
        case "I":
            return e.getInt32();
        case "L":
            return e.getInt64();
        case "R":
            return n = e.getUint32(),
            e.getArrayBuffer(n);
        case "S":
            return n = e.getUint32(),
            e.getString(n);
        case "Y":
            return e.getInt16();
        case "b":
        case "c":
        case "d":
        case "f":
        case "i":
        case "l":
            const r = e.getUint32()
              , s = e.getUint32()
              , a = e.getUint32();
            if (s === 0)
                switch (t) {
                case "b":
                case "c":
                    return e.getBooleanArray(r);
                case "d":
                    return e.getFloat64Array(r);
                case "f":
                    return e.getFloat32Array(r);
                case "i":
                    return e.getInt32Array(r);
                case "l":
                    return e.getInt64Array(r)
                }
            const o = R_(new Uint8Array(e.getArrayBuffer(a)))
              , l = new Nl(o.buffer);
            switch (t) {
            case "b":
            case "c":
                return l.getBooleanArray(r);
            case "d":
                return l.getFloat64Array(r);
            case "f":
                return l.getFloat32Array(r);
            case "i":
                return l.getInt32Array(r);
            case "l":
                return l.getInt64Array(r)
            }
            break;
        default:
            throw new Error("THREE.FBXLoader: Unknown property type " + t)
        }
    }
}
class Nl {
    constructor(e, t) {
        this.dv = new DataView(e),
        this.offset = 0,
        this.littleEndian = t !== void 0 ? t : !0,
        this._textDecoder = new TextDecoder
    }
    getOffset() {
        return this.offset
    }
    size() {
        return this.dv.buffer.byteLength
    }
    skip(e) {
        this.offset += e
    }
    getBoolean() {
        return (this.getUint8() & 1) === 1
    }
    getBooleanArray(e) {
        const t = [];
        for (let n = 0; n < e; n++)
            t.push(this.getBoolean());
        return t
    }
    getUint8() {
        const e = this.dv.getUint8(this.offset);
        return this.offset += 1,
        e
    }
    getInt16() {
        const e = this.dv.getInt16(this.offset, this.littleEndian);
        return this.offset += 2,
        e
    }
    getInt32() {
        const e = this.dv.getInt32(this.offset, this.littleEndian);
        return this.offset += 4,
        e
    }
    getInt32Array(e) {
        const t = [];
        for (let n = 0; n < e; n++)
            t.push(this.getInt32());
        return t
    }
    getUint32() {
        const e = this.dv.getUint32(this.offset, this.littleEndian);
        return this.offset += 4,
        e
    }
    getInt64() {
        let e, t;
        return this.littleEndian ? (e = this.getUint32(),
        t = this.getUint32()) : (t = this.getUint32(),
        e = this.getUint32()),
        t & 2147483648 ? (t = ~t & 4294967295,
        e = ~e & 4294967295,
        e === 4294967295 && (t = t + 1 & 4294967295),
        e = e + 1 & 4294967295,
        -(t * 4294967296 + e)) : t * 4294967296 + e
    }
    getInt64Array(e) {
        const t = [];
        for (let n = 0; n < e; n++)
            t.push(this.getInt64());
        return t
    }
    getUint64() {
        let e, t;
        return this.littleEndian ? (e = this.getUint32(),
        t = this.getUint32()) : (t = this.getUint32(),
        e = this.getUint32()),
        t * 4294967296 + e
    }
    getFloat32() {
        const e = this.dv.getFloat32(this.offset, this.littleEndian);
        return this.offset += 4,
        e
    }
    getFloat32Array(e) {
        const t = [];
        for (let n = 0; n < e; n++)
            t.push(this.getFloat32());
        return t
    }
    getFloat64() {
        const e = this.dv.getFloat64(this.offset, this.littleEndian);
        return this.offset += 8,
        e
    }
    getFloat64Array(e) {
        const t = [];
        for (let n = 0; n < e; n++)
            t.push(this.getFloat64());
        return t
    }
    getArrayBuffer(e) {
        const t = this.dv.buffer.slice(this.offset, this.offset + e);
        return this.offset += e,
        t
    }
    getString(e) {
        const t = this.offset;
        let n = new Uint8Array(this.dv.buffer,t,e);
        this.skip(e);
        const r = n.indexOf(0);
        return r >= 0 && (n = new Uint8Array(this.dv.buffer,t,r)),
        this._textDecoder.decode(n)
    }
}
class Sc {
    add(e, t) {
        this[e] = t
    }
}
function X_(i) {
    const e = "Kaydara FBX Binary  \0";
    return i.byteLength >= e.length && e === Ac(i, 0, e.length)
}
function q_(i) {
    const e = ["K", "a", "y", "d", "a", "r", "a", "\\", "F", "B", "X", "\\", "B", "i", "n", "a", "r", "y", "\\", "\\"];
    let t = 0;
    function n(r) {
        const s = i[r - 1];
        return i = i.slice(t + r),
        t++,
        s
    }
    for (let r = 0; r < e.length; ++r)
        if (n(1) === e[r])
            return !1;
    return !0
}
function Fl(i) {
    const e = /FBXVersion: (\d+)/
      , t = i.match(e);
    if (t)
        return parseInt(t[1]);
    throw new Error("THREE.FBXLoader: Cannot find the version number for the file given.")
}
function Y_(i) {
    return i / 46186158e3
}
const K_ = [];
function Wr(i, e, t, n) {
    let r;
    switch (n.mappingType) {
    case "ByPolygonVertex":
        r = i;
        break;
    case "ByPolygon":
        r = e;
        break;
    case "ByVertice":
        r = t;
        break;
    case "AllSame":
        r = n.indices[0];
        break;
    default:
        console.warn("THREE.FBXLoader: unknown attribute mapping type " + n.mappingType)
    }
    n.referenceType === "IndexToDirect" && (r = n.indices[r]);
    const s = r * n.dataSize
      , a = s + n.dataSize;
    return $_(K_, n.buffer, s, a)
}
const ra = new st
  , yi = new R;
function Ec(i) {
    const e = new pe
      , t = new pe
      , n = new pe
      , r = new pe
      , s = new pe
      , a = new pe
      , o = new pe
      , l = new pe
      , c = new pe
      , h = new pe
      , u = new pe
      , f = new pe
      , d = i.inheritType ? i.inheritType : 0;
    if (i.translation && e.setPosition(yi.fromArray(i.translation)),
    i.preRotation) {
        const x = i.preRotation.map(bt.degToRad);
        x.push(i.eulerOrder || st.DEFAULT_ORDER),
        t.makeRotationFromEuler(ra.fromArray(x))
    }
    if (i.rotation) {
        const x = i.rotation.map(bt.degToRad);
        x.push(i.eulerOrder || st.DEFAULT_ORDER),
        n.makeRotationFromEuler(ra.fromArray(x))
    }
    if (i.postRotation) {
        const x = i.postRotation.map(bt.degToRad);
        x.push(i.eulerOrder || st.DEFAULT_ORDER),
        r.makeRotationFromEuler(ra.fromArray(x)),
        r.invert()
    }
    i.scale && s.scale(yi.fromArray(i.scale)),
    i.scalingOffset && o.setPosition(yi.fromArray(i.scalingOffset)),
    i.scalingPivot && a.setPosition(yi.fromArray(i.scalingPivot)),
    i.rotationOffset && l.setPosition(yi.fromArray(i.rotationOffset)),
    i.rotationPivot && c.setPosition(yi.fromArray(i.rotationPivot)),
    i.parentMatrixWorld && (u.copy(i.parentMatrix),
    h.copy(i.parentMatrixWorld));
    const g = t.clone().multiply(n).multiply(r)
      , _ = new pe;
    _.extractRotation(h);
    const p = new pe;
    p.copyPosition(h);
    const m = p.clone().invert().multiply(h)
      , T = _.clone().invert().multiply(m)
      , v = s
      , S = new pe;
    if (d === 0)
        S.copy(_).multiply(g).multiply(T).multiply(v);
    else if (d === 1)
        S.copy(_).multiply(T).multiply(g).multiply(v);
    else {
        const U = new pe().scale(new R().setFromMatrixScale(u)).clone().invert()
          , G = T.clone().multiply(U);
        S.copy(_).multiply(g).multiply(G).multiply(v)
    }
    const D = c.clone().invert()
      , b = a.clone().invert();
    let w = e.clone().multiply(l).multiply(c).multiply(t).multiply(n).multiply(r).multiply(D).multiply(o).multiply(a).multiply(s).multiply(b);
    const B = new pe().copyPosition(w)
      , E = h.clone().multiply(B);
    return f.copyPosition(E),
    w = f.clone().multiply(S),
    w.premultiply(h.invert()),
    w
}
function Tc(i) {
    i = i || 0;
    const e = ["ZYX", "YZX", "XZY", "ZXY", "YXZ", "XYZ"];
    return i === 6 ? (console.warn("THREE.FBXLoader: unsupported Euler Order: Spherical XYZ. Animations and rotations may be incorrect."),
    e[0]) : e[i]
}
function sa(i) {
    return i.split(",").map(function(t) {
        return parseFloat(t)
    })
}
function Ac(i, e, t) {
    return e === void 0 && (e = 0),
    t === void 0 && (t = i.byteLength),
    new TextDecoder().decode(new Uint8Array(i,e,t))
}
function Z_(i, e) {
    for (let t = 0, n = i.length, r = e.length; t < r; t++,
    n++)
        i[n] = e[t]
}
function $_(i, e, t, n) {
    for (let r = t, s = 0; r < n; r++,
    s++)
        i[s] = e[r];
    return i
}
function j_(i) {
    return i < 500 ? 40 : i >= 500 && i <= 1200 ? 60 : 12.5
}
const J_ = window.innerWidth
  , bc = j_(J_);
console.log("Adjusted FOV:", bc);
const ht = new ug
  , rn = new wt(bc,window.innerWidth / window.innerHeight,.1,5e3);
rn.position.set(700, 500, 800);
rn.lookAt(0, 0, 0);
const ds = new hg({
    antialias: !0,
    alpha: !0
});
ds.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(ds.domElement);
const Q_ = document.getElementById("model-container");
Q_.appendChild(ds.domElement);
const Pa = new yn(8103133,4e4);
Pa.position.set(0, 75, 0);
Pa.distance = 1e3;
ht.add(Pa);
const La = new yn(14692095,5e3);
La.position.set(0, 25, 20);
La.distance = 1e3;
ht.add(La);
const Ia = new yn(8103133,4e3);
Ia.position.set(15, 50, 55);
Ia.distance = 1e3;
ht.add(Ia);
const Da = new yn(8103133,4e3);
Da.position.set(-150, 50, -50);
Da.distance = 5e3;
ht.add(Da);
const Ua = new yn(8103133,4e3);
Ua.position.set(250, 75, -50);
Ua.distance = 1e3;
ht.add(Ua);
const Na = new yn(8103133,4e4);
Na.position.set(0, 150, 0);
Na.distance = 1e3;
ht.add(Na);
const Fa = new yn(38399,4e4);
Fa.position.set(100, 50, -100);
Fa.distance = 1e3;
ht.add(Fa);
const sn = new z_
  , Kt = 0
  , Zt = 0
  , $t = 50;
let Sn = 6768;
const Vn = .9
  , e0 = 8103133
  , wc = .5
  , t0 = .0172;
let n0 = 0
  , an = 0
  , on = n0 / t0
  , ln = 0;
sn.load("../assets/src/model/MainModels/Roads.fbx", function(i) {
    i.position.set(Kt, Zt, $t),
    i.scale.set(.1, .1, .1),
    i.rotation.set(an, on, ln),
    i.traverse(e=>{
        e.isMesh && (e.material = new tn({
            color: e0,
            roughness: wc
        }))
    }
    ),
    ht.add(i)
}, function(i) {
    console.log(i.loaded / i.total * 100 + "% loaded")
}, function(i) {
    console.error("Failed to load FBX model:", i)
});
sn.load("../assets/src/model/MainModels/FactoryArea.fbx", function(i) {
    i.position.set(Kt, Zt, $t),
    i.scale.set(.1, .1, .1),
    i.rotation.set(an, on, ln),
    i.traverse(e=>{
        e.isMesh && (e.material = new tn({
            color: Sn,
            roughness: Vn
        }))
    }
    ),
    ht.add(i)
}, function(i) {
    console.log(i.loaded / i.total * 100 + "% loaded")
}, function(i) {
    console.error("Failed to load FBX model:", i)
});
sn.load("../assets/src/model/MainModels/FairArea.fbx", function(i) {
    i.position.set(Kt, Zt, $t),
    i.scale.set(.1, .1, .1),
    i.rotation.set(an, on, ln),
    i.traverse(e=>{
        e.isMesh && (e.material = new tn({
            color: Sn,
            roughness: Vn
        }))
    }
    ),
    ht.add(i)
}, function(i) {
    console.log(i.loaded / i.total * 100 + "% loaded")
}, function(i) {
    console.error("Failed to load FBX model:", i)
});
sn.load("../assets/src/model/MainModels/FreeArea.fbx", function(i) {
    i.position.set(Kt, Zt, $t),
    i.scale.set(.1, .1, .1),
    i.rotation.set(an, on, ln),
    i.traverse(e=>{
        e.isMesh && (e.material = new tn({
            color: Sn,
            roughness: Vn
        }))
    }
    ),
    ht.add(i)
}, function(i) {
    console.log(i.loaded / i.total * 100 + "% loaded")
}, function(i) {
    console.error("Failed to load FBX model:", i)
});
sn.load("../assets/src/model/MainModels/GiaCenter.fbx", function(i) {
    i.position.set(Kt, Zt, $t),
    i.scale.set(.1, .1, .1),
    i.rotation.set(an, on, ln),
    i.traverse(e=>{
        e.isMesh && (e.material = new tn({
            color: Sn,
            roughness: Vn
        }))
    }
    ),
    ht.add(i)
}, function(i) {
    console.log(i.loaded / i.total * 100 + "% loaded")
}, function(i) {
    console.error("Failed to load FBX model:", i)
});
sn.load("../assets/src/model/MainModels/Greens.fbx", function(i) {
    i.position.set(Kt, Zt, $t),
    i.scale.set(.1, .1, .1),
    i.rotation.set(an, on, ln),
    i.traverse(e=>{
        e.isMesh && (e.material = new tn({
            color: Sn,
            roughness: Vn
        }))
    }
    ),
    ht.add(i)
}, function(i) {
    console.log(i.loaded / i.total * 100 + "% loaded")
}, function(i) {
    console.error("Failed to load FBX model:", i)
});
sn.load("../assets/src/model/MainModels/Houses.fbx", function(i) {
    i.position.set(Kt, Zt, $t),
    i.scale.set(.1, .1, .1),
    i.rotation.set(an, on, ln),
    i.traverse(e=>{
        e.isMesh && (e.material = new tn({
            color: Sn,
            roughness: Vn
        }))
    }
    ),
    ht.add(i)
}, function(i) {
    console.log(i.loaded / i.total * 100 + "% loaded")
}, function(i) {
    console.error("Failed to load FBX model:", i)
});
sn.load("../assets/src/model/MainModels/RestingArea.fbx", function(i) {
    i.position.set(Kt, Zt, $t),
    i.scale.set(.1, .1, .1),
    i.rotation.set(an, on, ln),
    i.traverse(e=>{
        e.isMesh && (e.material = new tn({
            color: Sn,
            roughness: Vn
        }))
    }
    ),
    ht.add(i)
}, function(i) {
    console.log(i.loaded / i.total * 100 + "% loaded")
}, function(i) {
    console.error("Failed to load FBX model:", i)
});
sn.load("../assets/src/model/MainModels/Trucks.fbx", function(i) {
    i.position.set(Kt, Zt, $t),
    i.scale.set(.1, .1, .1),
    i.rotation.set(an, on, ln),
    i.traverse(e=>{
        e.isMesh && (e.material = new tn({
            color: Sn,
            roughness: Vn
        }))
    }
    ),
    ht.add(i)
}, function(i) {
    console.log(i.loaded / i.total * 100 + "% loaded")
}, function(i) {
    console.error("Failed to load FBX model:", i)
});
sn.load("../assets/src/model/STARTING_MODEL_3.fbx", function(i) {
    i.position.set(Kt, Zt, $t),
    i.scale.set(.1, .1, .1),
    i.rotation.set(an, on, ln),
    i.traverse(e=>{
        e.isMesh && (e.material = new tn({
            color: Sn,
            roughness: wc
        }))
    }
    ),
    ht.add(i)
}, function(i) {
    console.log(i.loaded / i.total * 100 + "% loaded")
}, function(i) {
    console.error("Failed to load FBX model:", i)
});
const i0 = new Bi
  , r0 = new xa({
    color: 342937
})
  , Rt = new zt(i0,r0);
Rt.scale.set(.05);
ht.add(Rt);
const Oa = new p_(5e3,5e3,342937,342937);
Oa.scale.set(20, 20, 20);
Oa.position.set(Kt, Zt, $t);
ht.add(Oa);
const ii = []
  , et = document.getElementById("hebele")
  , ps = .0085;
ii.push({
    start: 0,
    end: 25,
    func: ()=>{
        rn.lookAt(Rt.position),
        Hi(new R(-50,500,800), .005),
        Gi(new R(0,0,0), .05),
        Rt.rotation.y = Wi(0, Math.PI, Xi(100, 120)),
        et.querySelector("h1").innerText = "GIA'yı Keşfetmek İçin Kaydır!",
        et.querySelector("p").innerText = "Tamamlandığında Türkiye'nin en büyük karma nitelikli özel endüstri şehri olacak olan GIA, ekonomik büyümeyi desteklemenin yanı sıra kapsayıcı ve sürdürülebilir bir sanayi modelini teşvik etmektedir.",
        et.querySelector("a").href = "../pages/gianedir.html",
        et.querySelector("#goToGalleryArea").innerText = "GIA Nedir?"
    }
});
ii.push({
    start: 25,
    end: 50,
    func: ()=>{
        rn.lookAt(Rt.position),
        Hi(new R(-50,150,250), ps),
        Gi(new R(0,0,0), .05),
        Rt.rotation.y = Wi(0, Math.PI, Xi(100, 200)),
        et.querySelector("h1").innerText = "Geleceğin Yatırım Merkezi!",
        et.querySelector("p").innerText = "GIA, ülke ekonomisini uluslararası düzeyde rekabetçi hale getirmeyi, teknoloji transferini desteklemeyi, yabancı sermaye girişini hızlandırmayı ve özellikle büyük ölçekli yatırımlar için uygun sanayi alanları oluşturmayı amaçlar.",
        et.querySelector("a").href = "../pages/yatirimfirsatlari.html",
        et.querySelector("#goToGalleryArea").innerText = "Daha Fazla Bilgi"
    }
});
ii.push({
    start: 50,
    end: 75,
    func: ()=>{
        rn.lookAt(Rt.position),
        Hi(new R(250,100,350), ps),
        Gi(new R(0,0,0), .05),
        Rt.rotation.y = Wi(0, Math.PI, Xi(100, 200)),
        et.querySelector("h1").innerText = "Fonksiyonel, Yenilikçi ve Erişilebilir!",
        et.querySelector("p").innerText = "Ulukışla bölgesi, konumu itibari ile, 4 farklı ulaşım imkanına da, rahatlıkla erişebilen stratejik bir kavşak noktasıdır. Ulaşım olanaklarındaki varyasyon, Endüstri bölgesi için ekonomik, sosyal ve çevresel olarak önemli katkılar sağlamaktadır.",
        et.querySelector("a").href = "../pages/konum.html",
        et.querySelector("#goToGalleryArea").innerText = "Konumu Keşfet"
    }
});
ii.push({
    start: 75,
    end: 100,
    func: ()=>{
        rn.lookAt(Rt.position),
        Hi(new R(50,100,150), .005),
        Gi(new R(0,0,0), .05),
        Rt.rotation.y = Wi(0, Math.PI, Xi(100, 120)),
        et.querySelector("h1").innerText = "Bir Endüstri Bölgesinden Daha Fazlası!",
        et.querySelector("p").innerText = "GIA, sadece endüstriyel faaliyetlerle sınırlı kalmayarak, insan ve çevre odaklı bir yaklaşımla tasarlanmış bir iş ve yaşam alanı sunar. Bölgenin temel amacı, sürdürülebilirlik ilkelerini benimseyerek, insana ve doğaya saygılı bir çevre oluşturmaktır.",
        et.querySelector("a").href = "../pages/sosyalimkanlar.html",
        et.querySelector("#goToGalleryArea").innerText = "Sosyal İmkanlar"
    }
});
function Hi(i, e) {
    rn.position.lerp(i, e)
}
function Gi(i, e) {
    Rt.position.lerp(i, e)
}
function Wi(i, e, t) {
    return (1 - t) * i + t * e
}
function Xi(i, e) {
    return (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight) * 100 - i) / (e - i)
}
function Rc() {
    requestAnimationFrame(Rc);
    const i = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight) * 100;
    for (const e of ii)
        if (i >= e.start && i <= e.end) {
            e.func();
            break
        }
    ds.render(ht, rn)
}
Rc();

//ii.push({start:50,end:75,func:()=>{rn.lookAt(Rt.position),Hi(new R(-350,75,10),ps),Gi(new R(0,0,0),.05),Rt.rotation.y=Wi(0,Math.PI,Xi(100,200)),et.querySelector("h1").innerText="Türkiye'nin En Stratejik Kuru Limanı!",et.querySelector("p").innerText="4-Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias magnam itaque earum exercitationem sunt. Necessitatibus vel perferendis ut reprehenderit nostrum corporis similique molestiae blanditiis officia.",et.querySelector("a").href="../pages/konum.html",et.querySelector("#goToGalleryArea").innerText="Konum Bilgileri"}});ii.push({start:75,end:95,func:()=>{rn.lookAt(Rt.position),Hi(new R(50,100,150),ps),Gi(new R(0,0,0),.05),Rt.rotation.y=Wi(0,Math.PI,Xi(100,120)),et.querySelector("h1").innerText="Fonksiyonel ve Yenilikçi!",et.querySelector("p").innerText="5-Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias magnam itaque earum exercitationem sunt. Necessitatibus vel perferendis ut reprehenderit nostrum corporis similique molestiae blanditiis officia.",et.querySelector("a").href="../pages/degerlerimiz.html",et.querySelector("#goToGalleryArea").innerText="Değerlerimiz"}});
