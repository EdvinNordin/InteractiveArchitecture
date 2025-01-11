import {GLTFLoader} from "three/addons/loaders/GLTFLoader.js";
import * as THREE from "three";
import {scene} from "./setup.js";
import {setObjectCells} from "./spatiParti.js";
import * as constant from "./constants.js";
import {Rhino3dmLoader} from "three/addons/loaders/3DMLoader.js";

export function loadModels(client, grid, wholeRobot)
{
    const GLTFloader = new GLTFLoader();

    GLTFloader.load("./robot.glb", function (gltf) {
            //console.log(gltf);
            let robot = gltf.scene;
            //animations = gltf.animations;
            robot.position.set(0, -10, 0);
            robot.scale.set(0.25, 0.25, 0.25);
            //scene.add(robot);
            wholeRobot.push(robot);
            robot.traverseVisible((child) => {
                if (child.name === "Head_1") {
                    wholeRobot.push(child);
                }
            })
            //console.log("robot loaded");
            client.emit('player ready');
        },
        function (xhr) {
            if (xhr.loaded / xhr.total * 100 === 100) {
                //console.log("xhr");
            }
        }, // called when loading has errors
        function (error) {
            console.log(error);
        }
    );


    let planeMesh = new THREE.Mesh();
    planeMesh.geometry = new THREE.PlaneGeometry(100, 100, 1, 1);
    planeMesh.rotation.x = -Math.PI / 2;

    const texture = new THREE.TextureLoader().load("/stacked-stones.jpg");
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(50, 50);
    planeMesh.material = new THREE.MeshStandardMaterial({
        map: texture,
        side: THREE.FrontSide,
    });

    planeMesh.name = "plane";
    scene.add(planeMesh);
    setObjectCells(planeMesh, grid);

    const loader = new Rhino3dmLoader().setLibraryPath("https://cdn.jsdelivr.net/npm/rhino3dm@8.4.0/");

    loader.load("/baken.3dm", function (object) {
            object.rotation.x = -Math.PI / 2; // rotate the model
            object.scale.set(constant.scale, constant.scale, constant.scale);
            object.position.z = -20;
            object.name = "baken";
            scene.add(object);
            let box = new THREE.Box3().setFromObject(object, false);
            let center = new THREE.Vector3();
            let boxSize = new THREE.Vector3();
            box.getCenter(center);
            box.getSize(boxSize);
            object.position.y = 0;//-boxSize.y / 4;
            object.traverse((child) => {
                if (child.isMesh) {
                    child.material.metalness = 0;
                    child.material.side = 0;
                    child.recieveShadow = true;
                    child.castShadow = true;
                    if (child.material.name === "Paint") {
                        child.name = "Stairs";
                        setObjectCells(child, grid, constant.cellSize);

                    } else {
                        child.name = "Wall";
                        setObjectCells(child, grid, constant.cellSize);
                    }

                }
            });
        },
        function (progress) {
            //console.log((progress.loaded / progress.total) * 100 + "%");
        },
        function (error) {
            console.log(error);
        }
    );

    /*
    loader.load("land.3dm", function (object) {
        //object.rotation.x = -Math.PI / 2; // rotate the model
        //object.position.y = 50;
        //object.scale.set(constant.scale, constant.scale, 0.008);
        let box = new THREE.Box3().setFromObject(object, false);
        let center = new THREE.Vector3();
        box.getCenter(center);
        let i = 1;
        object.traverse((child) => {
            if (child.isMesh) {
                child.material.metalness = 0;
                child.material.side = 0;
                child.recieveShadow = true;
                child.castShadow = true;
                child.material.wireframe = false;
                //console.log(child);
                if (i === 1) {
                    child.rotation.x = -Math.PI / 2; // rotate the model
                    child.position.y = 0;
                    child.scale.set(constant.scale, constant.scale, constant.scale);
                    scene.add(child);

                }
                i++;
            }
        });
    }, function (progress) {
        //console.log((progress.loaded / progress.total) * 100 + "%");
    }, function (error) {
        console.log(error);
    });
    */

    /*
    loader.load(
        "net.3dm",
        function (object) {
            object.rotation.x = -Math.PI / 2; // rotate the model

            object.scale.set(constant.scale);
            object.position.x = 150;
            let i = 0;
            scene.add(object);

            object.traverse((child) => {
                if (child.isMesh) {
                    i++;
                    child.material.metalness = 0;
                    child.material.side = 2;
                    child.recieveShadow = true;
                    child.castShadow = true;
                }
            });
            //console.log(i);
        },
        function (progress) {
            //console.log((progress.loaded / progress.total) * 100 + "%");
        },
        function (error) {
            console.log(error);
        }
    );
    */
    /*
    loader.load(
        "byReduced.3dm",
        function (object) {
            object.rotation.x = -Math.PI / 2; // rotate the model
            object.scale.set(constant.scale);
            object.position.x = -200;
            object.position.y = 0;
            scene.add(object);
            /*let box = new THREE.Box3().setFromObject(object, false);
            let center = new THREE.Vector3();
            box.getCenter(center);
            let i = 0;

            object.traverse((child) => {
                if (child.isMesh) {
                    child.material.metalness = 0;
                    child.material.side = 0;
                    child.recieveShadow = true;
                    child.castShadow = true;

                }
            });
            //console.log(i);
        },
        function (progress) {
            //console.log((progress.loaded / progress.total) * 100 + "%");
        },
        function (error) {
            console.log(error);
        }
    );*/
}