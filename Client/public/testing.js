import * as THREE from "three";

const gridSize = 10;
let grid = {};

//CELLS
function getCellKey(position, cellSize) {

    const x = Math.floor(position.x / cellSize);
    const y = Math.floor(position.y / cellSize);
    const z = Math.floor(position.z / cellSize);
    return `${x},${y},${z}`; // Unique key for each grid cell
}
function cellStart(value, gridSize) {
    return value - (value % gridSize);
}
function cellEnd(value, gridSize) {
    return value - (value % gridSize) + gridSize;
}
function createCell(pos, gridSize) {
    let cellMinX = cellStart(pos.x, gridSize);
    let cellMaxX = cellEnd(pos.x, gridSize);
    let cellMinY = cellStart(pos.y, gridSize);
    let cellMaxY = cellEnd(pos.y, gridSize);
    let cellMinZ = cellStart(pos.z, gridSize);
    let cellMaxZ = cellEnd(pos.z, gridSize);

    let cellMin = new THREE.Vector3(cellMinX, cellMinY, cellMinZ);
    let cellMax = new THREE.Vector3(cellMaxX, cellMaxY, cellMaxZ);

    let cellBox = new THREE.Box3(cellMin, cellMax);
    return cellBox;
}


let cellsToCheck = [];
let geometry = new THREE.BoxGeometry(99, 10, 10);
let material = new THREE.MeshBasicMaterial(); // Add a basic material
let object = new THREE.Mesh(geometry, material);
object.position.set(0, 0, 0);

const sgeometry = new THREE.SphereGeometry( 15, 32, 16 );
const smaterial = new THREE.MeshBasicMaterial( { color: 0xffff00 } );
const sphere = new THREE.Mesh( sgeometry, smaterial );
sphere.position.set(0, 0, 0)

//Check what cells the object created is in.
function objectCells(object) {
//Create Cell for each gridSize step

    let boundingBox = new THREE.Box3().setFromObject(object);
    let objectMinX = boundingBox.min.x;
    let objectMaxX = boundingBox.max.x;
    let objectMinY = boundingBox.min.y;
    let objectMaxY = boundingBox.max.y;
    let objectMinZ = boundingBox.min.z;
    let objectMaxZ = boundingBox.max.z;

    for (let x = cellStart(objectMinX, gridSize); x < cellEnd(objectMaxX, gridSize); x = x + gridSize) {
        for (let y = cellStart(objectMinY, gridSize); y < cellEnd(objectMaxY, gridSize); y = y + gridSize) {
            for (let z = cellStart(objectMinZ, gridSize); z < cellEnd(objectMaxZ, gridSize); z = z + gridSize) {

                //store the object in that cell to later check the what is in that cell
                const cellKey = `${x},${y},${z}`;

                if (!grid[cellKey]) grid[cellKey] = [];
                grid[cellKey].push(object);
            }
        }
    }
}

function getObjectsInCell(position){

    //find player position cell
    let x = cellStart(position.x, gridSize);
    let y = cellStart(position.y, gridSize);
    let z = cellStart(position.z, gridSize);

    let cellKey = `${x},${y},${z}`;

    return grid[cellKey];
}

objectCells(object);
objectCells(sphere);

let objectList=getObjectsInCell(new THREE.Vector3(0,0,0));

console.log(objectList);