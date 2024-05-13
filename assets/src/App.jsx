import React, { useState, useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';

function App() {
  const [isLoading, setIsLoading] = useState(true); // Yükleme durumu
  const [showLoading, setShowLoading] = useState(true); // Loading gösterme durumu

  const raycaster = useRef(new THREE.Raycaster());
  const mouse = useRef(new THREE.Vector2());

  useEffect(() => {
    let selectedObject = null;
    
    // SCENE, CANVAS, AND CAMERA
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xffffff); 

    const camera = new THREE.PerspectiveCamera(
      30,
      window.innerWidth / window.innerHeight,
      5,
      5000
    );
    camera.position.set(-500, 1000, 1000);
    camera.lookAt(0, 0, 0);

    const canvas = document.getElementById('stageViewer');
    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);

    // LIGHTS
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.5);
    ambientLight.castShadow = true;
    scene.add(ambientLight);

    // ORBIT
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.maxPolarAngle = Math.PI / 2.5; 
    controls.minDistance = 200;
    controls.maxDistance = 2000;


    // FBX MODELS
    const models = [
      '/src/model/STG_1.fbx',
      '/src/model/OTHERS_FOR_STAGE_2.fbx',
      '/src/model/rd.fbx',
    ];

    const loader = new FBXLoader();
    const interactableModels = [];

    const loadModel = (modelPath) => {
      loader.load(modelPath, function (object) {
        // start color
        object.traverse(child => {
          if (child.isMesh) {
            if (modelPath === '/src/model/rd.fbx' || modelPath === '') {
              child.material.color.set(0x000000); // Siyah

            } else if (modelPath === '/src/model/STG_1.fbx') {
              child.material.color.set(0x3d79d9); // Mavi

            } else {
              child.material.color.set(0xffffff); // Gray
            }
          }
        });
        scene.add(object);
        object.scale.set(0.32, 0.32, 0.32);
        object.position.set(70, -100, 60);
        
        // Add the model to the interactable models array if it's not rd or M1
        if (modelPath !== '/src/model/rd.fbx' && modelPath !== '/src/model/OTHERS_FOR_STAGE_2.fbx') {
          interactableModels.push(object);
        }

        // Yükleme tamamlandığında loading durumunu false olarak ayarla
        setIsLoading(false);
        // 5 saniye sonra loading gösterimini kapat
        setTimeout(() => {
          setShowLoading(false);
        }, 3500);
      });
    };

    models.forEach((modelPath) => {
      loadModel(modelPath);
    });

    const onMouseMove = (event) => {
      const rect = canvas.getBoundingClientRect();
      mouse.current.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.current.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
    
      raycaster.current.setFromCamera(mouse.current, camera);
    
      const intersects = raycaster.current.intersectObjects(interactableModels, true);
      if (intersects.length > 0) {
        if (selectedObject !== intersects[0].object) {
          if (selectedObject) {
            selectedObject.material = selectedObject.userData.originalMaterial;
          }
          selectedObject = intersects[0].object;
          // Orijinal malzemeyi sakla
          if (!selectedObject.userData.originalMaterial) {
            selectedObject.userData.originalMaterial = selectedObject.material;
          }
          selectedObject.material = new THREE.MeshBasicMaterial({ color: 0x00ffcc });
          canvas.style.cursor = 'pointer';
        }
      } else {
        if (selectedObject) {
          selectedObject.material = selectedObject.userData.originalMaterial;
        }
        selectedObject = null;
        canvas.style.cursor = 'auto';
      }
    };
    


    // ANIMATE
    const animate = () => {
      renderer.render(scene, camera);
      window.requestAnimationFrame(animate);
    };

    animate();

    // Event listeners
    window.addEventListener('mousemove', onMouseMove);

    // clear event listener
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, []);


  const screenWidth = window.innerWidth;

  return (
    <>
    {showLoading && (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'rgba(255, 255, 255, 0.85)', // Beyaz arkaplan
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '24px',
        fontFamily: 'Arial',
        fontWeight: 'bold',
        color: '#0d0259',
      }}
  >
    Harita Yükleniyor...
  </div>
)}


      <canvas id="stageViewer" style={{
        height: '80vh',
        width: screenWidth < 1000 ? '80vw' : '100vw'
      }} />
      
      <div style={{ 
        position: 'absolute', 
        bottom: '2%', 
        width: '100%', 
        textAlign: 'center',
        fontFamily: 'Arial',
        color: '#0d0259', 
        fontSize: '15px', 
        fontWeight: 'bold'
      }}>GIA_WebGL_Version 0.0.4</div>

      <div style={{ 
        position: 'absolute', 
        top: '5%', 
        width: '100%', 
        textAlign: 'center',
        fontFamily: 'Arial',
        color: '#0d0259', 
        fontSize: '30px', 
        fontWeight: 'bold'
      }}>1. ETAP</div>

      <div className='logo' style={{ 
        position: 'absolute', 
        width: '10%', 
        height: '10%', 
        top: '2%', 
        left: '5%',
      }}>
        <a href="/index.html">
          <img src='/media/Logo.png' alt='Logo' style={{ 
            position: 'absolute', 
            width: 'auto', 
            height: '10vh' 
          }} />
        </a>
      </div>
    </>
  );
}

export default App;
