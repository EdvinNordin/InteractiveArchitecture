import * as THREE from "three"; //""https://cdnjs.cloudflare.com/ajax/libs/three.js/0.164.1/three.module.js";
import * as CANNON from "cannon-es"; //https://cdn.jsdelivr.net/npm/cannon-es@0.20.0/+esm";

import { camera } from "./Inputs.js";
import { Sky } from "./Sky.js";

/*import { EffectComposer } from "three/addons/postprocessing/EffectComposer.js"; //"../node_modules/three/examples/jsm/postprocessing/EffectComposer.js";
import { RenderPass } from "../node_modules/three/examples/jsm/postprocessing/RenderPass.js";
import { SAOPass } from "../node_modules/three/examples/jsm/postprocessing/SAOPass.js";
import { OutputPass } from "../node_modules/three/examples/jsm/postprocessing/OutputPass.js";
*/
let sky, sun, composer, renderPass, saoPass;

const scene = new THREE.Scene();

const world = new CANNON.World({ gravity: new CANNON.Vec3(0, -9.82, 0) });

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

let dirLight = new THREE.DirectionalLight(0xffffff, 1);
dirLight.castShadow = true;
dirLight.shadow.mapSize.width = 2048;
dirLight.shadow.mapSize.height = 2048;
dirLight.shadow.camera.top = 50;
dirLight.shadow.camera.bottom = -50;
dirLight.shadow.camera.left = -50;
dirLight.shadow.camera.right = 50;
scene.add(dirLight);
//const helper = new THREE.DirectionalLightHelper(dirLight, 1);
//scene.add(helper);

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
    elevation: 15,
    azimuth: 100,
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
  dirLight.position.copy(sun); //.multiplyScalar(100);

  renderer.toneMappingExposure = effectController.exposure;
  //renderer.render(scene, camera);
}
/*
function initSAO() {
  composer = new EffectComposer(renderer);
  renderPass = new RenderPass(scene, camera);
  composer.addPass(renderPass);
  saoPass = new SAOPass(scene, camera);
  composer.addPass(saoPass);
  const outputPass = new OutputPass();
  composer.addPass(outputPass);

  saoPass.params.saoBias = 0.5;
  saoPass.params.saoIntensity = 0.02;
  saoPass.params.saoScale = 1;
  saoPass.params.saoKernelRadius = 100;
  saoPass.params.saoMinResolution = 0;
  saoPass.params.saoBlur = true;
  saoPass.params.saoBlurRadius = 8;
  saoPass.params.saoBlurStdDev = 4;
  saoPass.params.saoBlurDepthCutoff = 0.01;
  saoPass.enabled = true;
} */

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

export { camera, scene, renderer, world, composer };
