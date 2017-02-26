function Eye() {
    this.update = function (upperCls, lowerCls) {
        if(upperCls > 250){
            this.shakeminmax=map(dfromeye, 100, 500, 0, 2);
            upperCls+= random(-this.shakeminmax, this.shakeminmax);
            lowerCls+= random(-this.shakeminmax, this.shakeminmax);
            this.innercol=map(dfromeye, 300, 500, 0, 150);
        }  
        //inside
        noStroke();
        fill(255, 255- this.innercol, 255- this.innercol, 100);
        beginShape();
        vertex(100, width / 2);
        bezierVertex(150, upperCls, 350, upperCls, 400, width / 2);
        endShape();
        beginShape();
        vertex(100, width / 2);
        bezierVertex(150, lowerCls, 350, lowerCls, 400, width / 2);
        endShape();
        
        
        
        //pupil
        fill(0, 200, 0);
        ellipse(width/2, height/2, 20, 20);
        
        //upperlid
        noFill();
        stroke(0);
        strokeWeight(5);
        beginShape();
        vertex(100, width / 2);
        bezierVertex(150, upperCls, 350, upperCls, 400, width / 2);
        endShape();
        
        //lowerlid
        beginShape();
        vertex(100, width / 2);
        bezierVertex(150, lowerCls, 350, lowerCls, 400, width / 2);
        endShape();
        
              
    }
}