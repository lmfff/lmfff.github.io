//circle object
var circle = {
  	x : 20,
	y : 20
};

function setup() {
  createCanvas(windowWidth, windowHeight); 
  background(100);  
} 

function draw() {
  background(100, 100, 100, 100);
  //when mouse is pressed = growth
  if (mouseIsPressed) {
  	circle.x = circle.x + 5;
  	circle.y = circle.y + 5;
    noStroke();
    smooth();
  	ellipse(mouseX, mouseY, circle.x, circle.y);
  }
  //else = decay
  else {
    circle.x = circle.x - 5;
    circle.y = circle.y - 5;
  	noStroke();
    smooth();
  	ellipse(mouseX, mouseY, circle.x, circle.y);
  }
  //if x reaches 20 stops the decay process
  if (circle.x < 20){
    circle.x = 20;
    circle.y = 20;
  	noStroke();
  	smooth();
  	ellipse(mouseX, mouseY, circle.x, circle.y);  
  }
}