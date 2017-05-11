var r = 100
var maxVer = 6
var k = false
var qw = 0
var qh = 0

function setup(){
    createCanvas(500, 500)
    background(200)
}

function draw(){
    background(250)
    noStroke()
    translate(width/2, height/2)
    beginShape()
    for(var i = 0; i <= maxVer; i++){
        let ang = map(i, 0, maxVer, 0, TAU)
        vertex(sin(ang) * r, cos(ang) * r)
    }
    endShape()
    
    if (k) {
        if(qw < (mouseX - width/2) && qh < (mouseY - height/2)){
            var incQ = setInterval(function(){ 
                if (mouseX > width/2 && mouseY > height/2){
                    qw += (mouseX - width/2)/20 
                    qh += (mouseY - height/2)/20
                } else if (mouseX > width/2 && mouseY < height/2){
                    qw += (mouseX - width/2)/20 
                    qh -= (mouseY - height/2)/20
                } else if (mouseX < width/2 && mouseY > height/2){
                    qw -= (mouseX - width/2)/20 
                    qh += (mouseY - height/2)/20
                } else if (mouseX < width/2 && mouseY < height/2){
                    qw -= (mouseX - width/2)/20 
                    qh -= (mouseY - height/2)/20
                }
            }, 10)
            setTimeout(function(){clearInterval(incQ)}, 200)
        } else {
            qw = (mouseX - width/2)
            qh = (mouseY - height/2)
        }  
    } else {
        qw = 0
        qh = 0
    }
    
    push()
    fill(200)
    quad(sin(0) * r, cos(0) * r, sin(TAU/6) * r, cos(TAU/6) * r, sin(TAU/3) * r, cos(TAU/3) * r, qw, qh)
    pop()
    
    push()
    fill(240)
    quad(qw, qh, sin(TAU/3) * r, cos(TAU/3) * r, sin(TAU/2) * r, cos(TAU/2) * r, sin(2*(TAU/3)) * r, cos(2*(TAU/3)) * r)
    pop()
    
    push()
    fill(230)
    quad(qw, qh, sin(2*(TAU/3)) * r, cos(2*(TAU/3)) * r, sin(5*(TAU/6)) * r, cos(5*(TAU/6)) * r, sin(0) * r, cos(0) * r)
    pop()
}

function keyPressed(){
    if (keyCode === CONTROL){
        k = !k
    }
}