bubbles=[];

function bubble(){
    this.x=mouseX;
    this.y=mouseY;
    this.r = random(5, 50);
    this.display = function() {
        noStroke();
        fill(200);
        ellipse(this.x, this.y, this.r, this.r);
    }
    this.change = function() {
        this.r = this.r + random(-5, 5);
    }
}
function setup() {
    createCanvas(500, 500);
    for (var i = 0; i < 10; i++) {
        bubbles[i] = new bubble();
    }
}

function draw(){

    
}