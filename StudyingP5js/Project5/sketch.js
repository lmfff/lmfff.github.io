function setup() {
    createCanvas(500,500,WEBGL);
    background(30,100,100);
}

function draw(){
    background(30,100,100);
    translate(-270,-210,0);
    if (mouseX<500 & mouseY<500) {
        for(var x=25; x<=mouseX; x+=60){
        translate(60, 0, 0); 
        box(50);
            for(var y=80; y<=mouseY; y+=60){
            translate(0, 60, 0);
            box(50);    
            } 
            translate(0,-y +80,0);            
        }        
    }    
}