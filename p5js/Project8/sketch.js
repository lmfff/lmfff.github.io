var main_canv;
var tam;
//229 232 169
function setup() {
    main_canv = createCanvas(500, 500)
    main_canv.background(172, 212, 115, 230)
    strokeWeight(30)
    stroke(144, 199, 61, 230)
    line(width - 15, 0, width - 15, height)
    line(width, height - 15, 0, height - 15)
    main_canv.position((windowWidth / 2) - ((main_canv.width) / 2), 0)
    tam = new Tam(0, 0, 50, 100)
}
var q = 15

function draw() {
    refr()
    translate(width / 2, height - 30)
    stroke(0, 0, 0, 100)
    strokeWeight(3)
    noFill()
    tam.update()
    tam.display()
}

function windowResized() {
    main_canv.position((windowWidth / 2) - ((main_canv.width) / 2), 0)
}

function Tam(x, y, width, height) {
    this.state = 1;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.update = function () {
        switch (this.state) {
        case 0:
            tam.height = 100
            q = 15
            break;
        case 1:
            if (!(frameCount % 15)) {
                tam.height += q
                tam.x = constrain(tam.x + random(-20, 20), -4 * width - 15, 4 * width - 15)
                q = -q
            }
            break;
        }
    }
    this.display = function () {
        rect(this.x - this.width / 2, this.y - this.height, width, height)
        fill(229, 232, 169, 200)
        rect(this.x - this.width / 2, this.y - this.height, width, height)
        fill(0)
        rect(this.x - this.width / 2 + this.width / 5, this.y - this.height + 20, 5, 5)
        rect(this.x - this.width / 2 + (3.5 * this.width) / 5, this.y - this.height + 20, 5, 5)
    }
}

function mousePressed() {
    if (tam.state === 0) {
        tam.state = 1
    } else {
        tam.state = 0
    }
    console.log(tam.state)
}

function refr() {
    main_canv = createCanvas(500, 500)
    main_canv.background(172, 212, 115, 230)
    strokeWeight(30)
    stroke(144, 199, 61, 230)
    line(width - 15, 0, width - 15, height)
    line(width, height - 15, 0, height - 15)
    main_canv.position((windowWidth / 2) - ((main_canv.width) / 2), 0)
}