import * as THREE from "three";

export const modelHeight: number = 0.9;
export const cellSize: number = 500;
export const scale: number = 0.0013;
export const movementDir: THREE.Vector3[] = [
  new THREE.Vector3(0, 0, -1),
  new THREE.Vector3(0, 0, 1),
  new THREE.Vector3(-1, 0, 0),
  new THREE.Vector3(1, 0, 0),
];
