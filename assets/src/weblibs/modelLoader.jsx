import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
import * as THREE from 'three';
import handleMeshClick from './showDesc.jsx';
import { assignColor } from './colorAssigner.jsx'; 
import '/styles/viewer.css';

export default class LOAD_MODEL {
    constructor() {
        this.loader = new FBXLoader();
        this.interactableModels = [];
    }

    loadModel(modelPath, scene) {
        this.loader.load(modelPath, (object) => {
            object.traverse(child => {
                if (child.isMesh) {
                    // Mesh yüklendikten sonra başlangıç renklerini belirle
                    assignColor(child);
                }
            });
            scene.add(object);
            object.scale.set(0.32, 0.32, 0.32);
            object.position.set(70, -100, 60);

            // INTERACTIVE MODEL CONTROL
            scene.add(object);
            object.scale.set(0.32, 0.32, 0.32);
            object.position.set(70, -100, 60);
      
            // INTERACTIVE MODEL CONTROL
            if (modelPath !== '/src/model/OTHER_MODELS_FBX/GIA_ROAD.fbx' 
                && modelPath !== '/src/model/OTHER_MODELS_FBX/GIA_SIGN.fbx'
                && modelPath !== '/src/model/STAGE_ONE_FBX/STAGE_ONE_GREEN.fbx'
                && modelPath !== '/src/model/STAGE_ONE_FBX/STAGE_ONE_OTHERS.fbx'
                && modelPath !== '/src/model/STAGE_TWO_FBX/STAGE_TWO_PASSIVE.fbx'
                && modelPath !== '/src/model/STAGE_TWO_FBX/STAGE_TWO_GREEN.fbx'
                && modelPath !== '/src/model/STAGE_THREE_FBX/STAGE_THREE_GREEN.fbx'
                && modelPath !== '/src/model/STAGE_THREE_FBX/STAGE_THREE_PASSIVE.fbx'
                && modelPath !== '/src/model/STAGE_FOUR_FBX/STAGE_FOUR_PASSIVE.fbx'
                && modelPath !== '/src/model/STAGE_FIVE_FBX/STAGE_FIVE_PASSIVE.fbx'
                && modelPath !== '/src/model/STAGE_FIVE_FBX/STAGE_FIVE_GREEN.fbx'
                ) {
                    this.interactableModels.push(object);
                }
            },
            function (xhr) {
                console.log((xhr.loaded / xhr.total) * 100 + '% loaded');
            },
            function (error) {
                console.error('Failed to load FBX model:', error);
            }
        );
    }
      

    // HIGHLIGHT FUNCTIONS
    addRaycastListeners(scene, camera, canvas) {
        const raycaster = new THREE.Raycaster();
        const mouse = new THREE.Vector2();
        const interactableModels = this.interactableModels;

        let selectedObject = null;

        const footerElement = document.getElementById('footer');

        const onMouseMove = (event) => {
            const rect = canvas.getBoundingClientRect();
            mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
            mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

            raycaster.setFromCamera(mouse, camera);

            const intersects = raycaster.intersectObjects(interactableModels, true);
            if (intersects.length > 0) {
                // Objeye mouse ile temas edildiğinde footer metnini güncelle
                footerElement.textContent = intersects[0].object.name;

                if (selectedObject !== intersects[0].object) {
                    if (selectedObject) {
                        // Eğer önceki seçili bir nesne varsa, onun rengini orijinal rengine döndür
                        assignColor(selectedObject);
                    }
                    // Yeni seçili nesneyi belirle
                    selectedObject = intersects[0].object;

                    // CHANGE COLOR TO BLUE
                    selectedObject.material = new THREE.MeshBasicMaterial({ color: 0xa8d2f0 });
                    canvas.style.cursor = 'pointer';
                    document.getElementById('showDetailsOnScreen').style.display = 'none';
                }
            } else {
                // Eğer hiçbir nesneyle etkileşim yoksa footer metnini orijinal değerine geri döndür
                footerElement.textContent = 'GIA_OOP_WebGL_Version_0.1.1';
                document.getElementById('showDetailsOnScreen').style.display = 'none';

                if (selectedObject && intersects.length === 0) {
                    // Seçili bir nesne varsa, onun rengini orijinal rengine döndür
                    assignColor(selectedObject);
                    selectedObject = null;
                }
                canvas.style.cursor = 'auto';
                // Fare nesnenin üzerinden ayrıldığında detayları gizle
            }
        };

        const onMouseClick = (event) => {
            // Mouse pozisyonunu al
            const rect = canvas.getBoundingClientRect();
            mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
            mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

            // Raycaster kullanarak objeleri kontrol et
            raycaster.setFromCamera(mouse, camera);

            // Objeler arasında kesişme var mı kontrol et
            const intersects = raycaster.intersectObjects(interactableModels, true);
            if (intersects.length > 0) {
                // Tıklanan objenin adını al
                const meshName = intersects[0].object.name;

                // Mesh adına göre işlem yap
                handleMeshClick(meshName);
                document.getElementById('showDetailsOnScreen').style.display = 'block';
            }
        };

        canvas.addEventListener('click', onMouseClick);
        canvas.addEventListener('mousemove', onMouseMove);

        // CLEAR EVENT
        return () => {
            canvas.removeEventListener('mousemove', onMouseMove);
            canvas.removeEventListener('click', onMouseClick);
        };
    }  
}
