function setup() {
  createCanvas(500, 500); 
  background(100);  
} 

function draw() {
    var ellipsecol = map(mouseX, 0, 500, 100, 255);
    var rectrad = map(mouseX, 500, 0, 0, 100);
    if (mouseX > 500) {
        rectrad = 0;
    }
    background(100);
    
    if (mouseX <= 250) {
        fill(ellipsecol);
        noStroke();
        ellipse(250, 250, 100, 100);
    }
    else if (mouseX > 250) {
        noStroke();
        rect(200, 200, 100, 100, rectrad); //add map to round corners
    }
}