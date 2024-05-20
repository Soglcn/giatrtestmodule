import {S as z, P as N, W as Q, a as A, F as R, M, V as m, b as E, R as h} from "./FBXLoader-CkEVmeCW.js";
let P = !1;

const fov = calculateFOV();
const w = new z;
const s = new N(fov,window.innerWidth / window.innerHeight,.1,5e3);
s.position.set(125, 450, 900);

function calculateFOV() {
    const screenWidth = window.innerWidth;
    let calculatedFOV;
    if (screenWidth < 768) {
        calculatedFOV = 75;
    } else if (screenWidth >= 768 && screenWidth < 1200) {
        calculatedFOV = 50;
    } else if (screenWidth >= 1200 && screenWidth < 1440) {
        calculatedFOV = 35;
    } else {
        calculatedFOV = 20;
    }

    return calculatedFOV;
}

s.lookAt(0, 0, 0);
const l = new Q({
    antialias: !0,
    alpha: !0
});
document.body.appendChild(l.domElement);

const modelContainer = document.getElementById('model-container');
modelContainer.appendChild(l.domElement);

const G = window.innerWidth
  , V = window.innerHeight
  , K = G
  , J = V;
l.setSize(K, J);

//const T=new A(16777215,7e4);T.position.set(0,150,0); T.distance=1e3;w.add(T); // Kuzey-Batı

const H = new A(0x7BA4DD,4e4);
H.position.set(275, 150, 0);
H.distance = 1e3;
w.add(H);
//Kuzey-Doğu

const C = new A(0xac7bdd,7e4);
C.position.set(15, 125, 75);
C.distance = 2e4;
w.add(C);
//Merkez

const AB = new A(0x7BA4DD,1e5);
AB.position.set(15, 300, 75);
AB.distance = 2e4;
w.add(AB);
//Merkez2

const W = new A(0x7BA4DD,4e4);
W.position.set(175, 150, 150);
W.distance = 1e3;
w.add(W);
//Mavi - TSK

const I = new A(0x7BA4DD,20e4);
I.position.set(0, 100, -500);
I.distance = 1e3;
w.add(I);
//Kuzey

const B = new A(0x7BA4DD,10e4);
B.position.set(-250, 150, -175);
B.distance = 1e3;
w.add(B);
// Serbest Bölge 

window.addEventListener("resize", ()=>{
    s.aspect = window.innerWidth / window.innerHeight,
    s.updateProjectionMatrix()
}
);
function L(e) {
    const o = document.getElementById("stageImage");
    o.src = e
}
const F = new R;
F.load("./assets/src/model/MainModels/Roads.fbx", function(e) {
    e.position.set(0, 0, 100),
    e.scale.set(.2, .2, .2),
    e.traverse(o=>{
        o.isMesh && (o.material = new M({
            color: 0x7BA4DD,
            roughness: 0.5
        }))
    }
    ),
    w.add(e)
}, function(e) {
    console.log(e.loaded / e.total * 100 + "% loaded")
}, function(e) {
    console.error("Failed to load FBX model:", e)
});
F.load("./assets/src/model/STARTING_MODEL_4.fbx", function(e) {
    e.position.set(0, 0, 100),
    e.scale.set(.2, .2, .2),
    e.traverse(o=>{
        o.isMesh && (o.material = new M({
            color: 0x001a70,
            roughness: 0.5
        }))
    }
    ),
    w.add(e)
}, function(e) {
    console.log(e.loaded / e.total * 100 + "% loaded")
}, function(e) {
    console.error("Failed to load FBX model:", e)
});
F.load("./assets/src/model/MainModels/Greens.fbx", function(e) {
    e.position.set(0, 0, 100),
    e.scale.set(.2, .2, .2),
    e.traverse(o=>{
        o.isMesh && (o.material = new M({
            color: 0x001a70,
            roughness: 0.9
        }))
    }
    ),
    w.add(e)
}, function(e) {
    console.log(e.loaded / e.total * 100 + "% loaded")
}, function(e) {
    console.error("Failed to load FBX model:", e)
});
F.load("./assets/src/model/MainModels/FactoryArea.fbx", function(e) {
    e.position.set(0, 0, 100),
    e.scale.set(.2, .2, .2);
    const o = new m().copy(e.scale);
    e.traverse(n=>{
        n.isMesh && (n.material = new M({
            color: 0x001a70,
            roughness: 0.9
        }))
    }
    ),
    w.add(e);
    function c(n) {
        const r = new E(n.clientX / window.innerWidth * 2 - 1,-(n.clientY / window.innerHeight) * 2 + 1)
          , t = new h;
        t.setFromCamera(r, s),
        t.intersectObject(e, !0).length > 0 && (Z(),
        x("Factories Zone", "GIA is designed as a mixed-use private industrial zone to support investments in various sectors with sustainable modern industrial facilities.", "factories.html"),
        frontPanel.style.display = "flex",
        L("./images/detailed-gallery/lq/BÜYÜK_FABRİKA (3).jpg"))
        
    }
    function d(n) {
        const r = new E(n.clientX / window.innerWidth * 2 - 1,-(n.clientY / window.innerHeight) * 2 + 1)
          , t = new h;
        t.setFromCamera(r, s);
        const i = t.intersectObject(e, !0);
        i.length > 0 ? (l.domElement.style.cursor = "pointer",
        e.scale.set(o.x * 1, o.y * 1, o.z * 1),
        i[0].object.material.color.setHex(0xb7c9c5)) : (l.domElement.style.cursor = "auto",
        e.scale.copy(o),
        e.traverse(a=>{
            a.isMesh && a.material.color.setHex(0x001a70)
        }
        ))
    }
    l.domElement.addEventListener("click", c),
    l.domElement.addEventListener("mousemove", d)
}, function(e) {
    console.log(e.loaded / e.total * 100 + "% loaded")
}, function(e) {
    console.error("Failed to load FBX model:", e)
});
F.load("./assets/src/model/MainModels/GiaCenter.fbx", function(e) {
    e.position.set(0, 0, 100),
    e.scale.set(.2, .2, .2);
    const o = new m().copy(e.scale);
    e.traverse(n=>{
        n.isMesh && (n.material = new M({
            color: 0x001a70,
            roughness: 0.9
        }))
    }
    ),
    w.add(e);
    function c(n) {
        const r = new E(n.clientX / window.innerWidth * 2 - 1,-(n.clientY / window.innerHeight) * 2 + 1)
          , t = new h;
        t.setFromCamera(r, s),
        t.intersectObject(e, !0).length > 0 && ($(),
        x("GIA Center", "GIA aims to bring together production and life; supporting value-added production with its modern urban identity and integration into Industry 5.0.", "center.html"),
        frontPanel.style.display = "flex",
        L("./images/detailed-gallery/lq/ÇARŞI (2) kopya.jpg"))        
    }
    function d(n) {
        const r = new E(n.clientX / window.innerWidth * 2 - 1,-(n.clientY / window.innerHeight) * 2 + 1)
          , t = new h;
        t.setFromCamera(r, s);
        const i = t.intersectObject(e, !0);
        i.length > 0 ? (l.domElement.style.cursor = "pointer",
        e.scale.set(o.x * 1, o.y * 1, o.z * 1),
        i[0].object.material.color.setHex(0xb7c9c5)) : (l.domElement.style.cursor = "auto",
        e.scale.copy(o),
        e.traverse(a=>{
            a.isMesh && a.material.color.setHex(0x001a70)
        }
        ))
    }
    l.domElement.addEventListener("click", c),
    l.domElement.addEventListener("mousemove", d)
}, function(e) {
    console.log(e.loaded / e.total * 100 + "% loaded")
}, function(e) {
    console.error("Failed to load FBX model:", e)
});
F.load("./assets/src/model/MainModels/FairArea.fbx", function(e) {
    e.position.set(0, 0, 100),
    e.scale.set(.2, .2, .2);
    const o = new m().copy(e.scale);
    e.traverse(n=>{
        n.isMesh && (n.material = new M({
            color: 0x001a70,
            roughness: 0.9
        }))
    }
    ),
    w.add(e);
    function c(n) {
        const r = new E(n.clientX / window.innerWidth * 2 - 1,-(n.clientY / window.innerHeight) * 2 + 1)
          , t = new h;
        t.setFromCamera(r, s),
        t.intersectObject(e, !0).length > 0 && (b(),
        x("Social Amenities", "GIA shapes economic and social life with its education, health, tourism, and management complexes.", "socialamenities.html"),
        frontPanel.style.display = "flex",
        L("./images/detailed-gallery/lq/EĞİTİM_KAMPÜSÜ (4) kopya.jpg"))
        
    }
    function d(n) {
        const r = new E(n.clientX / window.innerWidth * 2 - 1,-(n.clientY / window.innerHeight) * 2 + 1)
          , t = new h;
        t.setFromCamera(r, s);
        const i = t.intersectObject(e, !0);
        i.length > 0 ? (l.domElement.style.cursor = "pointer",
        e.scale.set(o.x * 1, o.y * 1, o.z * 1),
        i[0].object.material.color.setHex(0xb7c9c5)) : (l.domElement.style.cursor = "auto",
        e.scale.copy(o),
        e.traverse(a=>{
            a.isMesh && a.material.color.setHex(0x001a70)
        }
        ))
    }
    l.domElement.addEventListener("click", c),
    l.domElement.addEventListener("mousemove", d)
}, function(e) {
    console.log(e.loaded / e.total * 100 + "% loaded")
}, function(e) {
    console.error("Failed to load FBX model:", e)
});
F.load("./assets/src/model/MainModels/Houses.fbx", function(e) {
    e.position.set(0, 0, 100),
    e.scale.set(.2, .2, .2);
    const o = new m().copy(e.scale);
    e.traverse(n=>{
        n.isMesh && (n.material = new M({
            color: 0x001a70,
            roughness: 0.9
        }))
    }
    ),
    w.add(e);
    function c(n) {
        const r = new E(n.clientX / window.innerWidth * 2 - 1,-(n.clientY / window.innerHeight) * 2 + 1)
          , t = new h;
        t.setFromCamera(r, s),
        t.intersectObject(e, !0).length > 0 && (j(),
        x("Housing Area", "With a housing area for 50,000 people, it aims to minimize time and energy loss by integrating production and living.", "lodging.html"),
        frontPanel.style.display = "flex",
        L("./images/detailed-gallery/lq/LOJMAN (4) Copy.jpg"))        
    }
    function d(n) {
        const r = new E(n.clientX / window.innerWidth * 2 - 1,-(n.clientY / window.innerHeight) * 2 + 1)
          , t = new h;
        t.setFromCamera(r, s);
        const i = t.intersectObject(e, !0);
        i.length > 0 ? (l.domElement.style.cursor = "pointer",
        e.scale.set(o.x * 1, o.y * 1, o.z * 1),
        i[0].object.material.color.setHex(0xb7c9c5)) : (l.domElement.style.cursor = "auto",
        e.scale.copy(o),
        e.traverse(a=>{
            a.isMesh && a.material.color.setHex(0x001a70)
        }
        ))
    }
    l.domElement.addEventListener("click", c),
    l.domElement.addEventListener("mousemove", d)
}, function(e) {
    console.log(e.loaded / e.total * 100 + "% loaded")
}, function(e) {
    console.error("Failed to load FBX model:", e)
});
F.load("./assets/src/model/MainModels/Trucks.fbx", function(e) {
    e.position.set(0, 0, 100),
    e.scale.set(.2, .2, .2);
    const o = new m().copy(e.scale);
    e.traverse(n=>{
        n.isMesh && (n.material = new M({
            color: 0x001a70,
            roughness: 0.9
        }))
    }
    ),
    w.add(e);
    function c(n) {
        const r = new E(n.clientX / window.innerWidth * 2 - 1,-(n.clientY / window.innerHeight) * 2 + 1)
          , t = new h;
        t.setFromCamera(r, s),
        t.intersectObject(e, !0).length > 0 && (D(),
        x("Dry Port and Truck Park", "The Dry Port and Truck Park will be the logistics hub of the region; producers will have quick and easy access to the market and raw materials.", "logistic.html"),
        frontPanel.style.display = "flex",
        L("./images/detailed-gallery/lq/KURU_LİMAN.jpg"))
        
    }
    function d(n) {
        const r = new E(n.clientX / window.innerWidth * 2 - 1,-(n.clientY / window.innerHeight) * 2 + 1)
          , t = new h;
        t.setFromCamera(r, s);
        const i = t.intersectObject(e, !0);
        i.length > 0 ? (l.domElement.style.cursor = "pointer",
        e.scale.set(o.x * 1, o.y * 1, o.z * 1),
        i[0].object.material.color.setHex(0xb7c9c5)) : (l.domElement.style.cursor = "auto",
        e.scale.copy(o),
        e.traverse(a=>{
            a.isMesh && a.material.color.setHex(0x001a70)
        }
        ))
    }
    l.domElement.addEventListener("click", c),
    l.domElement.addEventListener("mousemove", d)
}, function(e) {
    console.log(e.loaded / e.total * 100 + "% loaded")
}, function(e) {
    console.error("Failed to load FBX model:", e)
});
F.load("./assets/src/model/MainModels/RestingArea.fbx", function(e) {
    e.position.set(0, 0, 100),
    e.scale.set(.2, .2, .2);
    const o = new m().copy(e.scale);
    e.traverse(n=>{
        n.isMesh && (n.material = new M({
            color: 0x001a70,
            roughness: 0.9
        }))
    }
    ),
    w.add(e);
    function c(n) {
        const r = new E(n.clientX / window.innerWidth * 2 - 1,-(n.clientY / window.innerHeight) * 2 + 1)
          , t = new h;
        t.setFromCamera(r, s),
        t.intersectObject(e, !0).length > 0 && (D(),
        x("Rest Area", "The rest facility, with its outlet stores, will serve as a comfortable rest and shopping point for employees, travelers, and producers.", "socialamenities.html"),
        frontPanel.style.display = "flex",
        L("./images/detailed-gallery/lq/DİNLENME_TESİS (2).jpg"))
        
    }
    function d(n) {
        const r = new E(n.clientX / window.innerWidth * 2 - 1,-(n.clientY / window.innerHeight) * 2 + 1)
          , t = new h;
        t.setFromCamera(r, s);
        const i = t.intersectObject(e, !0);
        i.length > 0 ? (l.domElement.style.cursor = "pointer",
        e.scale.set(o.x * 1, o.y * 1, o.z * 1),
        i[0].object.material.color.setHex(0xb7c9c5)) : (l.domElement.style.cursor = "auto",
        e.scale.copy(o),
        e.traverse(a=>{
            a.isMesh && a.material.color.setHex(0x001a70)
        }
        ))
    }
    l.domElement.addEventListener("click", c),
    l.domElement.addEventListener("mousemove", d)
}, function(e) {
    console.log(e.loaded / e.total * 100 + "% loaded")
}, function(e) {
    console.error("Failed to load FBX model:", e)
});
F.load("./assets/src/model/MainModels/FreeArea.fbx", function(e) {
    e.position.set(0, 0, 100),
    e.scale.set(.2, .2, .2);
    const o = new m().copy(e.scale);
    e.traverse(n=>{
        n.isMesh && (n.material = new M({
            color: 0x001a70,
            roughness: 0.9
        }))
    }
    ),
    w.add(e);
    function c(n) {
        const r = new E(n.clientX / window.innerWidth * 2 - 1,-(n.clientY / window.innerHeight) * 2 + 1)
          , t = new h;
        t.setFromCamera(r, s),
        t.intersectObject(e, !0).length > 0 && (ee(),
        x("Free Zone", "GIA Free Zone will be a special economic area with tax advantages for imports and exports, and where trade is liberalized.", "port.html"),
        frontPanel.style.display = "flex",
        L("./images/detailed-gallery/lq/TAG (1).jpg"))
        
    }
    function d(n) {
        const r = new E(n.clientX / window.innerWidth * 2 - 1,-(n.clientY / window.innerHeight) * 2 + 1)
          , t = new h;
        t.setFromCamera(r, s);
        const i = t.intersectObject(e, !0);
        i.length > 0 ? (l.domElement.style.cursor = "pointer",
        e.scale.set(o.x * 1, o.y * 1, o.z * 1),
        i[0].object.material.color.setHex(0xb7c9c5)) : (l.domElement.style.cursor = "auto",
        e.scale.copy(o),
        e.traverse(a=>{
            a.isMesh && a.material.color.setHex(0x001a70)
        }
        ))
    }
    l.domElement.addEventListener("click", c),
    l.domElement.addEventListener("mousemove", d)
}, function(e) {
    console.log(e.loaded / e.total * 100 + "% loaded")
}, function(e) {
    console.error("Failed to load FBX model:", e)
});
function U(e) {
    e.clientX / window.innerWidth * 2 - 1
}
function X() {
    requestAnimationFrame(X),
    l.render(w, s)
}
function Z() {
    const e = new m(-350,125,0)
      , o = new m(0,0,0)
      , c = 2e3
      , d = TWEEN.Easing.Quadratic.InOut
      , n = s.position.clone()
      , r = s.getWorldDirection(new m).clone();
    let t = null;
    function i(a) {
        t === null && (t = a);
        const g = a - t
          , u = Math.min(g / c, 1)
          , f = d(u)
          , p = n.clone().lerp(e, f)
          , y = r.clone().lerp(o, f);
        s.position.copy(p),
        s.lookAt(y),
        u < 1 && requestAnimationFrame(i)
    }
    requestAnimationFrame(i),
    k()
}
function $() {
    const e = new m(50,150,250)
      , o = new m(0,0,0)
      , c = 2e3
      , d = TWEEN.Easing.Quadratic.InOut
      , n = s.position.clone()
      , r = s.getWorldDirection(new m).clone();
    let t = null;
    function i(a) {
        t === null && (t = a);
        const g = a - t
          , u = Math.min(g / c, 1)
          , f = d(u)
          , p = n.clone().lerp(e, f)
          , y = r.clone().lerp(o, f);
        s.position.copy(p),
        s.lookAt(y),
        u < 1 && requestAnimationFrame(i)
    }
    requestAnimationFrame(i),
    k()
}
function b() {
    const e = new m(60,125,450)
      , o = new m(0,0,0)
      , c = 2e3
      , d = TWEEN.Easing.Quadratic.InOut
      , n = s.position.clone()
      , r = s.getWorldDirection(new m).clone();
    let t = null;
    function i(a) {
        t === null && (t = a);
        const g = a - t
          , u = Math.min(g / c, 1)
          , f = d(u)
          , p = n.clone().lerp(e, f)
          , y = r.clone().lerp(o, f);
        s.position.copy(p),
        s.lookAt(y),
        u < 1 && requestAnimationFrame(i)
    }
    requestAnimationFrame(i),
    k()
}
function j() {
    const e = new m(275,175,550)
      , o = new m(0,0,0)
      , c = 2e3
      , d = TWEEN.Easing.Quadratic.InOut
      , n = s.position.clone()
      , r = s.getWorldDirection(new m).clone();
    let t = null;
    function i(a) {
        t === null && (t = a);
        const g = a - t
          , u = Math.min(g / c, 1)
          , f = d(u)
          , p = n.clone().lerp(e, f)
          , y = r.clone().lerp(o, f);
        s.position.copy(p),
        s.lookAt(y),
        u < 1 && requestAnimationFrame(i)
    }
    requestAnimationFrame(i),
    k()
}
function D() {
    const e = new m(-500,125,20)
      , o = new m(0,0,0)
      , c = 2e3
      , d = TWEEN.Easing.Quadratic.InOut
      , n = s.position.clone()
      , r = s.getWorldDirection(new m).clone();
    let t = null;
    function i(a) {
        t === null && (t = a);
        const g = a - t
          , u = Math.min(g / c, 1)
          , f = d(u)
          , p = n.clone().lerp(e, f)
          , y = r.clone().lerp(o, f);
        s.position.copy(p),
        s.lookAt(y),
        u < 1 && requestAnimationFrame(i)
    }
    requestAnimationFrame(i),
    k()
}
function ee() {
    const e = new m(-750,125,0)
      , o = new m(0,0,0)
      , c = 2e3
      , d = TWEEN.Easing.Quadratic.InOut
      , n = s.position.clone()
      , r = s.getWorldDirection(new m).clone();
    let t = null;
    function i(a) {
        t === null && (t = a);
        const g = a - t
          , u = Math.min(g / c, 1)
          , f = d(u)
          , p = n.clone().lerp(e, f)
          , y = r.clone().lerp(o, f);
        s.position.copy(p),
        s.lookAt(y),
        u < 1 && requestAnimationFrame(i)
    }
    requestAnimationFrame(i),
    k()
}
document.addEventListener("mousemove", U);
X();
function ne() {
    const e = new m(0,450,900)
      , o = new m(0,0,0)
      , c = e.clone()
      , d = o.clone()
      , n = 2e3
      , r = TWEEN.Easing.Quadratic.InOut
      , t = s.position.clone()
      , i = s.getWorldDirection(new m).clone();
    let a = null;
    function g(u) {
        a === null && (a = u);
        const f = u - a
          , p = Math.min(f / n, 1)
          , y = r(p)
          , q = t.clone().lerp(c, y)
          , Y = i.clone().lerp(d, y);
        s.position.copy(q),
        s.lookAt(Y),
        p < 1 && requestAnimationFrame(g)
    }
    requestAnimationFrame(g),
    te()
}
const S = document.getElementById("backButton");
S.addEventListener("click", ne);
function k() {
    setTimeout(()=>{
        S.style.display = "block",
        stageInfoArea.style.display = "block",
        stageInfoArea.style.animation = "growIn 0.5s ease forwards"
    }
    , 500)
}
function te() {
    S.style.display = "none",
    stageInfoArea.style.animation = "shrinkOut 0.5s ease forwards",
    setTimeout(()=>{
        stageInfoArea.style.display = "none",
        frontPanel.style.display = "none"
    }
    , 500)
}
const oe = document.getElementById("title").textContent
  , ie = document.getElementById("description").textContent;
function x(t, d, l, l2) {
    const e = document.getElementById("title")
      , n = document.getElementById("description")
      , r = document.querySelector("#stageInfoArea a")
      , r2 = document.querySelector("#frontPanel a");
    e.textContent = t,
    n.textContent = d,
    r.href = l,
    r2.href = l
}
