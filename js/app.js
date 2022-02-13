import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import Threeasy from "threeasy";

const app = new Threeasy(THREE);

new OrbitControls(app.camera, app.renderer.domElement);

const mat = new THREE.MeshBasicMaterial();
const geo = new THREE.BoxGeometry();

const mesh = new THREE.Mesh(geo, mat);

app.scene.add(mesh);
