import * as THREE from "three";
import {cellSize} from "./constants.js";
//CELLS
export function getCellKey(position) {

    const x = cellStart(position.x, cellSize)/cellSize;//Math.floor(position.x / cellSize);
    const y = cellStart(position.y, cellSize)/cellSize;//Math.floor(position.y / cellSize);
    const z = cellStart(position.z, cellSize)/cellSize;//Math.floor(position.z / cellSize);
    return `${x},${y},${z}`; // Unique key for each grid cell
}
export function cellStart(value) {
    return value - (value % cellSize);
}
function cellEnd(value) {
    return value - (value % cellSize) + cellSize;
}
function createCell(pos) {
    let cellMinX = cellStart(pos.x, cellSize);
    let cellMaxX = cellEnd(pos.x, cellSize);
    let cellMinY = cellStart(pos.y, cellSize);
    let cellMaxY = cellEnd(pos.y, cellSize);
    let cellMinZ = cellStart(pos.z, cellSize);
    let cellMaxZ = cellEnd(pos.z, cellSize);

    let cellMin = new THREE.Vector3(cellMinX, cellMinY, cellMinZ);
    let cellMax = new THREE.Vector3(cellMaxX, cellMaxY, cellMaxZ);

    return new THREE.Box3(cellMin, cellMax);
}

//Check what cells the object created is in.
export function setObjectCells(object, grid) {
//Create Cell for each gridSize step

    let boundingBox = new THREE.Box3().setFromObject(object);
    let objectMinX = boundingBox.min.x;
    let objectMaxX = boundingBox.max.x;
    let objectMinY = boundingBox.min.y;
    let objectMaxY = boundingBox.max.y;
    let objectMinZ = boundingBox.min.z;
    let objectMaxZ = boundingBox.max.z;

    for (let x = cellStart(objectMinX, cellSize); x < cellEnd(objectMaxX, cellSize); x = x + cellSize) {
        for (let y = cellStart(objectMinY, cellSize); y < cellEnd(objectMaxY, cellSize); y = y + cellSize) {
            for (let z = cellStart(objectMinZ, cellSize); z < cellEnd(objectMaxZ, cellSize); z = z + cellSize) {

                //store the object in that cell to later check the what is in that cell
                const cellKey = `${x},${y},${z}`;

                if (!grid[cellKey]) grid[cellKey] = [];
                grid[cellKey].push(object);
            }
        }
    }
}

export function getObjectsInCell(position, grid){
    //find player position cell
    let x = cellStart(position.x, cellSize);
    let y = cellStart(position.y, cellSize);
    let z = cellStart(position.z, cellSize);

    let cellKey = `${x},${y},${z}`;
    if(!grid[cellKey]) grid[cellKey] = [];
    return grid[cellKey];
}
