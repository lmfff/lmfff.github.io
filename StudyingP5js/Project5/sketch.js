/* function setup() {
    createCanvas(480, 480, WEBGL);
    background(200, 200, 20);
}

var k;

function draw(){
    
    background(200, 200, 20);
    translate(-width/2 - 20, -height/2 -20, 0);
    box(20);
    for(var x=20; x<=mouseX; x+=40){
        translate(40, 0, 0);
        box(20);
        for(var y=0; y<=mouseY; y+=40){
          translate(0, 40, 0);
          box(20);
          
     
        }
        
        translate(0, -y, 0);
      
    }
    
} */

function setup() {
    createCanvas(500,500,WEBGL);
    background(30,100,100);
}

function draw(){
    background(30,100,100);
    translate(-210,-210,0);
    if (mouseX<500) {
        for(var x=40; x<=mouseX; x+=60){
        box(50);
        translate(60, 0, 0);    
        }
    }
    
    
    
}