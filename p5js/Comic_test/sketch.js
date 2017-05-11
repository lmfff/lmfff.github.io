var main_canvas;
var k_alph;
var slid1;
var stars_num = 30;

//beginPalette
var col = [];
col[0] = { r: 185, g: 223, b: 255 }
col[1] = { r: 168, g: 232, b: 194 }
col[2] = { r: 245, g: 255, b: 198 }
col[3] = { r: 232, g: 211, b: 169 }
col[4] = { r: 255, g: 195, b: 185 }
//endPalette

var stars = [];

var flr = {
    render: function () {
        push();
        rect_grd(3 * main_canvas.height / 4, main_canvas.height, col[1].r, col[1].g, col[1].b, col[3].r, col[3].g, col[3].b, 5);
        pop();
    }
};

var sun = {
    update: function () {
        this.h = map(mouseX, 0, main_canvas.width / 2, main_canvas.height, main_canvas.height / 4)
    }, 
    render: function () {
        push();
        noStroke();
        fill(245, 255, 198);
        ellipse(main_canvas.width / 2, this.h, 100, 100);
        pop();
    }
};

var moon = {
    update: function () {
        this.h = map(mouseX, 4*main_canvas.width / 5, main_canvas.width, main_canvas.height, main_canvas.height / 4)
    }, 
    render: function () {
        push();
        noStroke();
        fill(255);
        ellipse(main_canvas.width / 2, this.h, 100, 100);
        pop();
    },
    
    render2: function() {
        this.alph = map(mouseX, 7.1*main_canvas.width/8, main_canvas.width, 0, 210);
        push();
        noStroke();
        fill(255, 255, 255, this.alph);
        ellipse(main_canvas.width / 2, this.h, 100, 100);
        /*textSize(32);
        fill(0, 0, 0, this.alph);
        textAlign(CENTER);
        text("DIO BESTIA", main_canvas.width /2, this.h);*/
        pop();
    }
};

var blend_layer = {
    update: function(){
        //notte -> aurora
        if (mouseX>=0 && mouseX<0.4*main_canvas.width/5){
            this.r = map(mouseX, 0, 0.4*main_canvas.width/5, 18, 186);
            this.g = map(mouseX, 0, 0.4*main_canvas.width/5, 17, 72);
            this.b = map(mouseX, 0, 0.4*main_canvas.width/5, 66, 140);
            this.alph = 200;
        }
        //aurora -> giorno
        if (mouseX>=0.4*main_canvas.width/5 && mouseX<2*main_canvas.width/5){
            this.alph = map(mouseX, 0.4*main_canvas.width/5, 2*main_canvas.width/5, 200, 0);
        }
        //giorno -> crepuscolo
        if (mouseX>=3*main_canvas.width/5 && mouseX<4.2*main_canvas.width/5){
            this.r = map(mouseX, 3*main_canvas.width/5, 4.2*main_canvas.width/5, 186, 186);
            this.g = map(mouseX, 3*main_canvas.width/5, 4.2*main_canvas.width/5, 72, 30);
            this.b = map(mouseX, 3*main_canvas.width/5, 4.2*main_canvas.width/5, 140, 14);
            this.alph = map(mouseX, 3*main_canvas.width/5, 4.2*main_canvas.width/5, 0, 150);
        }
        //crepuscolo -> notte
        if (mouseX>=4.2*main_canvas.width/5 && mouseX<=main_canvas.width){
            this.r = map(mouseX, 4.2*main_canvas.width/5, main_canvas.width, 186, 18);
            this.g = map(mouseX, 4.2*main_canvas.width/5, main_canvas.width, 30, 17);
            this.b = map(mouseX, 4.2*main_canvas.width/5, main_canvas.width, 14, 66);
            this.alph = map(mouseX, 4.2*main_canvas.width/5, main_canvas.width, 150, 200);
        }
        //blending mode
        this.bmode = MULTIPLY; 
    },
    
    render: function () {
        push();
        blendMode(this.bmode);
        fill(this.r, this.g, this.b, this.alph);
        rect(0, 0, main_canvas.width, main_canvas.height);
        pop();
    }
}

function setup() {
    main_canvas = createCanvas(500, 500);
    slid1 = createSlider(0, 100, 30, 1);
    slid1.position(main_canvas.width + 20, 20);
    for (var i = 0; i < stars_num; i++){
        var star = new Star(round(random(20, main_canvas.width - 20)), round(random(20, 3*main_canvas.height/5)), round(random(1, 3)), round(random(50, 230)));
        stars.push(star);
    };
    console.log(stars);
}

function draw() {
    //brutalBg
    main_canvas.background(205, 245, 255);
    //grad_bg
    rect_grd(0, 3*main_canvas.height/4, 155, 195, 205, 205, 245, 255, 1);
    //starsRepop
    for (var i = stars.length; i < slid1.value(); i++){
        var star = new Star(round(random(20, (main_canvas.width - 20)), round(random(20, 3*main_canvas.height/5)), round(random(5, 10)), round(random(50, 230))));
        stars.push(star);
    }
    k_alph_up();
    //stars
    for (var i = 0; i < stars.length; i++){
        stars[i].update;
        stars[i].render;
        if (stars[i].alph = 0){
            stars.splice(i, 1);
        }
    }
    console.log(stars.length);
    
    //sun
    sun.update();
    sun.render();
    //moon
    moon.update();
    moon.render();
    //floor
    flr.render();
    //blend
    blend_layer.update();
    blend_layer.render();
    //moon2
    moon.render2();
}

function rect_grd(y1, y2, r1, g1, b1, r2, g2, b2, recthi) {
    var dur = (y2 - y1) / recthi;
    for (var i = 0; i < dur; i++) {
        push();
        noStroke();
        fill(r1 + i * ((r2 - r1) / dur), g1 + i * ((g2 - g1) / dur), b1 + i * ((b2 - b1) / dur));
        rect(0, y1 + i * recthi, main_canvas.width, recthi)
        pop();
    }
}

function Star(x, y, r, alph) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.alph = alph;
    
    this.update = function(){
        this.alph = this.alph + round(random(-5, 5)) - k_alph;
    };
    
    this.render = function(){
        push();
        fill(255, 255, 255, this.alph);
        ellipse(this.x, this.y, this.r, this.r);
        pop();
    }
}

function k_alph_up(){
    //notte -> aurora
        if (mouseX>=0 && mouseX<0.4*main_canvas.width/5){
            k_alph = map(mouseX, 0, 0.4*main_canvas.width/5, 0, 255);
        }
    //crepuscolo -> notte
        if (mouseX>=4.2*main_canvas.width/5 && mouseX<=main_canvas.width){
            k_alph = map(mouseX, 4.2*main_canvas.width/5, main_canvas.width, 255, 0);
        }
}