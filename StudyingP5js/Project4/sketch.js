function setup() {
  createCanvas(500, 500, WEBGL); 
  background(100);  
} 

function draw() {
    var diag = 50 * 1.41;
    var a = int(dist(mouseX, mouseY, 350, 250));
    var az = map(a, 0, diag, 150, 0);
    var b = int(dist(mouseX, mouseY, 150, 250));
    var bz = map(b, 0, diag, 150, 0);
    var c = int(dist(mouseX, mouseY, 150, 350));
    var cz = map(c, 0, diag, 150, 0);
    var d = int(dist(mouseX, mouseY, 250, 350));
    var dz = map(d, 0, diag, 150, 0);
    var e = int(dist(mouseX, mouseY, 350, 350));
    var ez = map(e, 0, diag, 150, 0);
    var f = int(dist(mouseX, mouseY, 350, 150));
    var fz = map(f, 0, diag, 150, 0);
    var g = int(dist(mouseX, mouseY, 250, 150));
    var gz = map(g, 0, diag, 150, 0);
    var h = int(dist(mouseX, mouseY, 150, 150));
    var hz = map(h, 0, diag, 150, 0);
    
    translate(100,0,az);
    box(100);
    translate(-200,0,-az + bz);
    box(100);
    translate(0,100,-bz + cz);
    box(100);
    translate(100,0,-cz + dz);
    box(100);
    translate(100,0,-dz + ez);
    box(100);
    translate(0,-200,-ez + fz);
    box(100);
    translate(-100,0,-fz + gz);
    box(100);
    translate(-100,0,-gz + hz);
    box(100);
    }