var scene = new THREE.Scene()

//PerspectiveCamera( fov, aspect ratio, near clipping, far clipping )
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 )

var renderer = new THREE.WebGLRenderer()
renderer.setSize( window.innerWidth, window.innerHeight )
document.body.appendChild( renderer.domElement )

var geometry = new THREE.BoxGeometry( 20, 20, 20 )
var material = new THREE.MeshLambertMaterial( { color: 0xffffff })

var cube = new THREE.Mesh( geometry, material )

scene.add( cube )
cube.k = 0
cube.color = 0xffffff
cube.reset = function() {
    this.geometry = new THREE.BoxGeometry( 20, 20, 20 )
    this.k = 0
    this.material = new THREE.MeshLambertMaterial( { color: 0xffffff })
}


var light = new THREE.PointLight(0xFFFFFF);
light.position.set(0, 0, 100)

scene.add(light)

camera.position.z = 100


function update() { 
    cube.geometry.vertices.dynamic = true
    cube.geometry.verticesNeedUpdate = true;
    for (var i = 0, l = geometry.vertices.length; i<l; i++) {
        //move the x & y position of each vertice by a random amount
        cube.geometry.vertices[i].x += (Math.random() / 10) * cube.k;
        cube.geometry.vertices[i].x -= (Math.random() / 10) * cube.k;
        cube.geometry.vertices[i].y += (Math.random() / 10) * cube.k;
        cube.geometry.vertices[i].y -= (Math.random() / 10) * cube.k;
    }
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
}

function render() {
    renderer.render( scene, camera )
}

function renderLoop() {
    //creates loop called 60 times per second
    requestAnimationFrame( renderLoop )
    update( )
    render( )
}

renderLoop()

var gui = new dat.GUI()
var cubeGui = gui.addFolder("Cube distortion")
cubeGui.add(cube, 'k', -10, 10)
var controller = cubeGui.addColor(cube, 'color')
cubeGui.add(cube, 'reset')

cubeGui.open()

var cameraGui = gui.addFolder("Camera position")
cameraGui.add(camera.position, 'z', 20, 1000)

controller.onChange(function(value) {
    cube.material = new THREE.MeshLambertMaterial( { color: value })
})