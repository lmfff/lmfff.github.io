var bubbles=[];
var click = false;

function setup(){
    createCanvas(600, 600);
    background(0);
    
}

function mousePressed(){
    click = true;
    for (var i = 0; i < 2500; i++){
        bubbles[i]={
            x: mouseX,
            y: mouseY,
            display: function(){
                noStroke();
                fill(random(0,200),random(0,200),random(0,200),25);
                ellipse(this.x, this.y, 10, 10);
            },
            move: function(){
                this.x = this.x + random(-4, 4);
                this.y = this.y + random(-4, 4);
            }
        }
    }
}

function draw(){
    background(0);
    if (click == false) {
        fill(20, 20, 20);
    }
    rect(100, 100, 400, 400);
    for (var i = 0; i < bubbles.length; i++) {
        
        bubbles[i].display();
        
        bubbles[i].move();
        
        if (bubbles[i].x > 500) {
            bubbles[i].x = 500;
        }
        
        if (bubbles[i].x < 100) {
            bubbles[i].x = 100;
        }
        
        if (bubbles[i].y > 500) {
            bubbles[i].y = 500;
        }
        
        if (bubbles[i].y < 100) {
            bubbles[i].y = 100;
        }
    }
}    