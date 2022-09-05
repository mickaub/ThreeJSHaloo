const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 ) /* field of view, aspect ratio, near clipping, far clipping*/
const renderer = new THREE.WebGLRenderer({ antialias: true})

renderer.setSize(window.innerWidth, window.innerHeight)
renderer.setClearColor("#222222")
document.body.appendChild(renderer.domElement)
camera.position.z = 5

var geometry = new THREE.BoxGeometry(1, 1, 1)
var material = new THREE.MeshBasicMaterial({color: 0xff0051})
var cube = new THREE.Mesh (geometry, material)
scene.add(cube)

var geometry = new THREE.BoxGeometry( 3, 3, 3)
var material = new THREE.MeshBasicMaterial( {
 color: "#dadada", wireframe: true, transparent: true
})
var wireframeCube = new THREE.Mesh ( geometry, material )
scene.add( wireframeCube )

function animate() {
	requestAnimationFrame( animate )
	cube.rotation.x += 0.04;
	cube.rotation.y += 0.04;
	wireframeCube.rotation.x -= 0.01;
	wireframeCube.rotation.y -= 0.01;
	renderer.render(scene,camera)/*Renderer line needs to be at end of code to work, anything after this line will not be rendered.*/

}
animate()

