var walkers = []
var title;
var canvas;
var canvasMargin = 100
var fontPx = 40
var maxSq = 50
var sample = [];
var filter1;

function preload() {
    for (var i = 0; i < 50; i++) {
        sample[i] = loadSound('sample.wav')
    }

}

function setup() {
    frameRate(30)
    canvas = createCanvas(windowWidth - canvasMargin, windowHeight - canvasMargin)
    canvas.position(canvasMargin / 2, canvasMargin / 2)
    background(10)
    rectMode(CENTER)
    textAlign(CENTER)
    filter1 = new p5.LowPass();
    filter1.freq(1000)
    for (var i = 0; i < maxSq; i++) {

        var walker = new Walker(i)
        walkers.push(walker)

        walkers[i].sample.disconnect()
        walkers[i].sample.connect(filter1)
    }

    noStroke()
    title = createP('a r t E m e r g e n t e')
    title.position(width - fontPx * 10, height - fontPx * 2)
    title.style('color', '#0a0a0a')
    //title.style('font-weight', 'bold')
    title.style('text-align', 'center')
    title.style('font-size', fontPx + 'px')
    title.style('font-family', 'Josefin Sans')
    title.style('text-align-last', 'right') //text-align-last: right;
}

function draw() {
    walkers.forEach(function (walker) {
        walker.update()
        walker.render()
    })
    //fill(0)

}

class Walker {
    constructor(k) {
        this.x = random(0, width / 10) * 10
        this.y = random(0, height / 10) * 10
        this.r = 15
        this.vx = 0
        this.vy = 0
        this.ax = random(-1, 1)
        this.ay = random(-1, 1)
        this.dirBool = int(random(0, 1))
        this.sample = sample[k]
    }

    update() {
        if (random(0, 1000) > 950) {
            this.dirBool = !this.dirBool
        }
        this.ax = random(-3, 3)
        this.ay = random(-3, 3)

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
        if (!this.sample.isPlaying()) {
            this.sample.play(int(random(0, this.sample.duration())), 5)
        }
        this.sample.pan(random(-1, 1))
        if (frameCount > 30 * 30 && frameCount < 900 + 5 * 30) {
            var fr = map(frameCount, 900, 900 + 10 * 30, 1000, 300)
            filter1.freq(fr)
        }
        fill(250, 250, 250, 100)
        rect(this.x, this.y, this.r, this.r)
        //ellipse(this.x, this.y, this.r)
    }
}

function windowResized() {
    resizeCanvas(windowWidth - canvasMargin, windowHeight - canvasMargin)
    title.position(width - fontPx * 10, height - fontPx * 2)
}
