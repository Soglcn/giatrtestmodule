import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';


export default class SET_SCENE {
  constructor(canvasId) {

    // SCENE PARAMS
    this.scene = undefined;
    this.camera = undefined;
    this.renderer = undefined;

    // CAM PARAMS
    this.fov = 25;
    this.nearPlane = 1;
    this.farPlane = 5000;
    this.canvasId = canvasId;

    // CONTROLLER
    this.controls = undefined;

    // LIGHT
    this.ambientLight = undefined;
  }

  initialize() {

    //SET SCENE 
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0xffffff); 
    

    //SET CAMERA
    this.camera = new THREE.PerspectiveCamera(
      this.fov,
      window.innerWidth / window.innerHeight,
      this.nearPlane,
      this.farPlane
    );
    this.camera.position.set(-500, 1000, 1000);
    this.camera.lookAt(0, 0, 0);

    // SET CANVAS
    const canvas = document.getElementById(this.canvasId);
    this.renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
    });

    this.renderer.setSize(window.innerWidth / 1.25, window.innerHeight / 1.25);
    document.body.appendChild(this.renderer.domElement);


    //CONTROLLER
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.maxPolarAngle = Math.PI / 2.5; 
    this.controls.minDistance = 200;
    this.controls.maxDistance = 2000;


    // LIGHTS
    this.ambientLight = new THREE.AmbientLight(0xffffff, 1.5);
    this.ambientLight.castShadow = true;
    this.scene.add(this.ambientLight);


    // RESIZE
    window.addEventListener('resize', () => this.onWindowResize(), false);
  }

  animate() {
    window.requestAnimationFrame(this.animate.bind(this));
    this.render();
    this.controls.update();
  }

  render() {
    this.renderer.render(this.scene, this.camera);
  }

  onWindowResize() {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }
}