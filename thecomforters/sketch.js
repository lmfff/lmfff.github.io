var mainCnv

var typeSingle
var typeSpace

var score = ['Testa testa tanto non funge mai un cazzo', 'La vita è un culo', 'eddajelow mostro', "Ma quanto è troia?"]

var scoreCount = 0
var txt = score[scoreCount]
var txtOver = []
var charCount = -1
var alph = 0

function setup(){
    typeSingle = loadSound('/thecomforters/src/typeSingle.mp3')
    typeSpace = loadSound('/thecomforters/src/typeSpace.mp3')
    typeBell = loadSound('/thecomforters/src/typeBell.mp3')
    mainCnv = createCanvas(windowWidth, windowHeight)
    mainCnv.background(10)
}

function draw(){
    if (typeSingle.isLoaded() && typeSpace.isLoaded() && typeBell.isLoaded()){
        //initial formatting
        background(10)
        translate(25, windowHeight/2)
        if (alph < 70) {
            alph += 0.5
        }
        fill(250, 250, 250, alph)
        textSize(70)
        textAlign(LEFT)
        //grey text
        text(txt, 0, 0)
        //overlaying text
        if (charCount >= 0){
            for (var i = 0; i <= charCount; i++){
                txtOver[i] = txt[i]
            }
            fill(250)
            txtOver_string = txtOver.join("")
            textAlign(LEFT)
            text(txtOver_string, 0, 0)
        }
        //next in score
        if (txt.length === txtOver.length) {
            if (scoreCount < score.length - 1){
                scoreCount++
                charCount = -1
                alph = 0
                txt = score[scoreCount]
                txtOver = []
                typeBell.play()
            } else {
                //prevent from looping if reached last entry in score array + last bell sound c:
                var lastBell = setInterval(function() { typeBell.play() }, 300)
                setTimeout(function() { clearInterval(lastBell) }, 1000)
                noLoop()
            }

        }
    }
    else {
        background(10)
        translate(25, windowHeight/2)
        fill(250, 250, 250, 100)
        textSize(70)
        textAlign(LEFT)
        text('Loading...', 0, 0)
    }
}

function keyPressed(){
    //typewriter sounds AND check for corrispondence
    if (keyCode === txt.charCodeAt(charCount+1) || keyCode === (txt.charCodeAt(charCount+1) - 32)) {
        if (keyCode !== 32) {
            typeSingle.pan(random(-1, 1))
            typeSingle.setVolume(random(0, 1))
            typeSingle.play()
        } else {
            typeSpace.play()
        }
        charCount++
        } else if (keyCode === 186 && (txt.charCodeAt(charCount+1) === 232)){
            typeSingle.pan(random(-1, 1))
            typeSingle.setVolume(random(0, 1))
            typeSingle.play()
            charCount++
        } else if (keyCode === 219 && (txt.charCodeAt(charCount+1) === 63)){
            typeSingle.pan(random(-1, 1))
            typeSingle.setVolume(random(0, 1))
            typeSingle.play()
            charCount++
        } else {
            console.log("The char is: " + txt.charCodeAt(charCount+1) + ", you typed: " + keyCode)
        }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
