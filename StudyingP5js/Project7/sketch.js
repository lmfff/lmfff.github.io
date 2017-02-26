var eye;
var cls;
var dfromeye;
var bgcol;

function setup() {
    createCanvas(500, 500);
    background(100);
    eye = new Eye();
}

function draw() {
    dfromeye = dist(width / 2, height / 2, mouseX, mouseY);
    cls = map(dfromeye, 0, 250, 250, 300);
    background(200);
    eye.update(cls, height - cls);
}