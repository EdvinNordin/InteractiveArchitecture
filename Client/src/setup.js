import * as THREE from "three"; //"https://cdnjs.cloudflare.com/ajax/libs/three.js/0.164.1/three.module.js";

import { Sky } from "./sky.js";

import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { SAOPass } from "three/examples/jsm/postprocessing/SAOPass.js";
import { OutputPass } from "three/examples/jsm/postprocessing/OutputPass.js";import {randInt} from "three/src/math/MathUtils.js";

let randX = randInt(0, 5);
let randZ = randInt(0, 5);

let sky, sun, composer, renderPass, saoPass;

const scene = new THREE.Scene();

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
//renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

let camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  100
);
camera.position.set(randX, 0.9, randZ);

let dirLight = new THREE.DirectionalLight(0xffffff, 1);
dirLight.castShadow = true;
dirLight.shadow.camera.top = 50;
dirLight.shadow.camera.bottom = -50;
dirLight.shadow.camera.left = -50;
dirLight.shadow.camera.right = 50;
dirLight.shadow.bias = -0.0001;
scene.add(dirLight);
//const helper = new THREE.DirectionalLightHelper(dirLight, 1);
//scene.add(helper);

const hemiLight = new THREE.HemisphereLight(0xffffff, 0xffffff, 0.2);
hemiLight.color.setHSL(0.6, 1, 0.6);
hemiLight.groundColor.setHSL(0.095, 1, 0.85);
//hemiLight.groundColor.setRGB(0.85, 0.85, 0.71);
scene.add(hemiLight);

let ambientLight = new THREE.AmbientLight(0x404040);
//scene.add(ambientLight);

window.addEventListener("resize", onWindowResize);

//Sky shader and sun light
initSky();

//Scalable Ambient Occlusion (SAO)
//initSAO();

function initSky() {
  sky = new Sky();
  sky.scale.setScalar(450000);
  scene.add(sky);

  sun = new THREE.Vector3();

  const effectController = {
    turbidity: 0,
    rayleigh: 0.2,
    mieCoefficient: 0.005,
    mieDirectionalG: 0.7,
    elevation: 30,
    azimuth: 80,
    exposure: renderer.toneMappingExposure,
  };

  const uniforms = sky.material.uniforms;
  uniforms["turbidity"].value = effectController.turbidity;
  uniforms["rayleigh"].value = effectController.rayleigh;
  uniforms["mieCoefficient"].value = effectController.mieCoefficient;
  uniforms["mieDirectionalG"].value = effectController.mieDirectionalG;

  const phi = THREE.MathUtils.degToRad(90 - effectController.elevation);
  const theta = THREE.MathUtils.degToRad(effectController.azimuth);

  sun.setFromSphericalCoords(1, phi, theta);

  uniforms["sunPosition"].value.copy(sun);
  dirLight.position.copy(sun).multiplyScalar(100);

  renderer.toneMappingExposure = effectController.exposure;
  //renderer.render(scene, camera);
}

function initSAO() {
  composer = new EffectComposer(renderer);
  renderPass = new RenderPass(scene, camera);
  composer.addPass(renderPass);
  saoPass = new SAOPass(scene, camera);
  composer.addPass(saoPass);
  const outputPass = new OutputPass();
  composer.addPass(outputPass);

  saoPass.params.saoBias = 0.5;
  saoPass.params.saoIntensity = 0.18;
  saoPass.params.saoScale = 5;
  saoPass.params.saoKernelRadius = 100;
  saoPass.params.saoMinResolution = 0;
  saoPass.params.saoBlur = true;
  saoPass.params.saoBlurRadius = 8;
  saoPass.params.saoBlurStdDev = 4;
  saoPass.params.saoBlurDepthCutoff = 0.01;
  saoPass.enabled = false;
}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

export { camera, scene, renderer, composer };
