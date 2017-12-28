var walkers = []
var title;
var canvas;
var canvasMargin = 100
var fontPx = 50
var maxSq = 50

function setup() {
    canvas = createCanvas(windowWidth - canvasMargin, windowHeight - canvasMargin)
    canvas.position(canvasMargin / 2, canvasMargin / 2)
    background(10)
    rectMode(CENTER)
    textAlign(CENTER)
    noStroke()
    title = createP('a r t E m e r g e n t e')
    title.position(width - fontPx * 9.5, height - fontPx * 2)
    title.style('color', '#0a0a0a')
    title.style('font-weight', 'black')
    title.style('text-align', 'center')
    title.style('font-size', fontPx + 'px')
    title.style('font-family', 'Raleway')
    title.style('text-align-last', 'right') //text-align-last: right;
}

function draw() {
    for (var i = 0; i < 20; i++) {
        fill(250, 250, 250, 100)
        rect(random(0, width), random(0, height), 15, 15)
    }

}

class Walker {
    constructor() {
        this.x = random(0, width / 10) * 10
        this.y = random(0, height / 10) * 10
        this.r = 15
        this.vx = 0
        this.vy = 0
        this.ax = random(-1, 1)
        this.ay = random(-1, 1)
        this.dirBool = int(random(0, 1))
    }

    update() {
        if (random(0, 1000) > 950) {
            this.dirBool = !this.dirBool
        }
        this.ax = random(-2, 2)
        this.ay = random(-2, 2)

        if (this.dirBool) {
            this.vx += 2 * this.ax
            this.x += this.vx
        } else {
            this.vy += 2 * this.ay
            this.y += this.vy
        }

        if (this.x < this.r / 2) {
            this.x = width - this.r / 2
        }
        if (this.x > width - this.r / 2) {
            this.x = this.r / 2
        }
        if (this.y < this.r / 2) {
            this.y = height - this.r / 2
        }
        if (this.y > height - this.r / 2) {
            this.y = this.r / 2
        }
    }

    render() {
        fill(250, 250, 250, 100)
        rect(this.x, this.y, this.r, this.r)
        //ellipse(this.x, this.y, this.r)
        //ellipse(this.x, this.y, this.r)
        //ellipse(this.x, this.y, this.r)
    }
}

function windowResized() {
    resizeCanvas(windowWidth - canvasMargin, windowHeight - canvasMargin)
    title.position(width - fontPx * 10, height - fontPx * 2)
}
