import * as THREE from "three";
import * as CANNON from "cannon-es";
import { Sky } from "./Sky.js";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { EffectComposer } from "three/addons/postprocessing/EffectComposer.js";
import { RenderPass } from "three/addons/postprocessing/RenderPass.js";
import { SAOPass } from "three/addons/postprocessing/SAOPass.js";
import { OutputPass } from "three/addons/postprocessing/OutputPass.js";

const scene = new THREE.Scene();

const world = new CANNON.World({ gravity: new CANNON.Vec3(0, -9.82, 0) });

window.addEventListener("resize", onWindowResize);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  1,
  100
);
camera.position.z = 30;
camera.position.y = 6;

//document.addEventListener("mousedown", (e) => onMouseDown_(e), false);
document.addEventListener("mousemove", (e) => onMouseMove_(e), false);
//document.addEventListener("mouseup", (e) => onMouseUp_(e), false);
//document.addEventListener("keydown", (e) => onKeyDown_(e), false);
//document.addEventListener("keyup", (e) => onKeyUp_(e), false);

let previousMouseX = 0;
let previousMouseY = 0;

let mouseXDelta = 0;
let mouseYDelta = 0;

let phi_ = 0;
let theta_ = 0;

function onMouseMove_(e) {
  let mouseX = e.pageX - window.innerWidth / 2;
  let mouseY = e.pageY - window.innerHeight / 2;

  mouseXDelta = mouseX - previousMouseX;
  mouseYDelta = mouseY - previousMouseY;

  //camera.rotation.x -= mouseYDelta * 0.01;
  //camera.rotation.y -= mouseXDelta * 0.01;

  const xh = mouseXDelta / window.innerWidth;
  const yh = mouseYDelta / window.innerHeight;

  phi_ += -xh * 8;
  theta_ = clamp(theta_ + -yh * 5, -Math.PI / 3, Math.PI / 3);

  const qx = new THREE.Quaternion();
  qx.setFromAxisAngle(new THREE.Vector3(0, 1, 0), phi_);
  const qz = new THREE.Quaternion();
  qz.setFromAxisAngle(new THREE.Vector3(1, 0, 0), theta_);

  const q = new THREE.Quaternion();
  q.multiply(qx);
  q.multiply(qz);

  camera.quaternion.copy(q);

  previousMouseX = mouseX;
  previousMouseY = mouseY;
}
//controls.update();

let dirLight = new THREE.DirectionalLight(0xffffff, 1);
dirLight.castShadow = true;
scene.add(dirLight);
const helper = new THREE.DirectionalLightHelper(dirLight, 1);
scene.add(helper);

let sky, sun;
initSky();

//Scalable Ambient Occlusion (SAO)
let composer, renderPass, saoPass;
initSAO();

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
    elevation: 20,
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
  dirLight.position.copy(sun).multiplyScalar(100);

  renderer.toneMappingExposure = effectController.exposure;
  renderer.render(scene, camera);
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
  saoPass.params.saoIntensity = 0.02;
  saoPass.params.saoScale = 1;
  saoPass.params.saoKernelRadius = 100;
  saoPass.params.saoMinResolution = 0;
  saoPass.params.saoBlur = true;
  saoPass.params.saoBlurRadius = 8;
  saoPass.params.saoBlurStdDev = 4;
  saoPass.params.saoBlurDepthCutoff = 0.01;
  saoPass.enabled = true;
}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

function clamp(x, a, b) {
  return Math.min(Math.max(x, a), b);
}

export { camera, scene, renderer, world, composer };
