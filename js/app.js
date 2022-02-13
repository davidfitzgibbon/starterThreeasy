import * as THREE from "three";
import Threeasy from "threeasy";

const app = new Threeasy(THREE);

const mat = new THREE.MeshBasicMaterial({ color: "white" });
const geo = new THREE.BoxGeometry();

const mesh = new THREE.Mesh(geo, mat);

app.scene.add(mesh);
