import * as THREE from "three";
import { cellSize } from "./constants.js";

export const floorGrid: { [key: string]: THREE.Object3D[] } = {};
export const wallGrid: { [key: string]: THREE.Object3D[] } = {};
//CELLS
export function getCellKey(position: THREE.Vector3) {
  const x = cellStart(position.x) / cellSize; //Math.floor(position.x / cellSize);
  const y = cellStart(position.y) / cellSize; //Math.floor(position.y / cellSize);
  const z = cellStart(position.z) / cellSize; //Math.floor(position.z / cellSize);
  return `${x},${y},${z}`; // Unique key for each grid cell
}
export function cellStart(value: number) {
  return value - (value % cellSize);
}
function cellEnd(value: number) {
  return value - (value % cellSize) + cellSize;
}
function createCell(pos: THREE.Vector3) {
  let cellMinX = cellStart(pos.x);
  let cellMaxX = cellEnd(pos.x);
  let cellMinY = cellStart(pos.y);
  let cellMaxY = cellEnd(pos.y);
  let cellMinZ = cellStart(pos.z);
  let cellMaxZ = cellEnd(pos.z);

  let cellMin = new THREE.Vector3(cellMinX, cellMinY, cellMinZ);
  let cellMax = new THREE.Vector3(cellMaxX, cellMaxY, cellMaxZ);

  return new THREE.Box3(cellMin, cellMax);
}

//Check what cells the object created is in.
export function setObjectCells(object: THREE.Object3D, grid: any) {
  //Create Cell for each gridSize step

  let boundingBox = new THREE.Box3().setFromObject(object);
  let objectMinX = boundingBox.min.x;
  let objectMinY = boundingBox.min.y;
  let objectMinZ = boundingBox.min.z;
  let objectMaxX = boundingBox.max.x;
  let objectMaxY = boundingBox.max.y;
  let objectMaxZ = boundingBox.max.z;

  for (
    let x = cellStart(objectMinX);
    x < cellEnd(objectMaxX);
    x = x + cellSize
  ) {
    for (
      let y = cellStart(objectMinY);
      y < cellEnd(objectMaxY);
      y = y + cellSize
    ) {
      for (
        let z = cellStart(objectMinZ);
        z < cellEnd(objectMaxZ);
        z = z + cellSize
      ) {
        //store the object in that cell to later check the what is in that cell
        const cellKey = `${x},${y},${z}`;

        if (!grid[cellKey]) grid[cellKey] = [];
        grid[cellKey].push(object);
      }
    }
  }
}

export function getObjectsInCell(
  position: THREE.Vector3,
  grid: { [key: string]: THREE.Object3D[] }
) {
  //find player position cell
  let x = cellStart(position.x);
  let y = cellStart(position.y);
  let z = cellStart(position.z);

  let cellKey = `${x},${y},${z}`;
  if (!grid[cellKey]) grid[cellKey] = [];
  return grid[cellKey];
}
