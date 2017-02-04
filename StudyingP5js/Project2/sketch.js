//circle object
var circle = {
  	x : 20,
	y : 20,    
};



function setup() {
  createCanvas(500, 500); 
  background(100);  
} 

function draw() {
  var colx = map(mouseX, 0, 500, 0, 255);
  var coly = map(mouseY, 0, 500, 0, 255);
  background(100, 100, 100, 100);
  //when mouse is pressed = growth
  if (mouseIsPressed) {
  	circle.x = circle.x + 5;
  	circle.y = circle.y + 5;
    noStroke();
    smooth();
    fill(colx, 100, coly);
  	ellipse(mouseX, mouseY, circle.x, circle.y);
  }
  //else = decay
  else {
    circle.x = circle.x - 5;
    circle.y = circle.y - 5;
  	noStroke();
    smooth();
    fill(colx, 100, coly);
  	ellipse(mouseX, mouseY, circle.x, circle.y);
  }
  //if x reaches 20 stops the decay process
  if (circle.x < 20){
    circle.x = 20;
    circle.y = 20;
  	noStroke();
  	smooth();
    fill(colx, 100, coly);
  	ellipse(mouseX, mouseY, circle.x, circle.y);  
  }
}