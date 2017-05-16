var mainCnv
var typeSingle
var typeSpace
var typeBell
var roomTone1
var luggage
var typeFont
var femsrcArr = []
var femArr = []
var femCount = 0
var femMult = 0

var score = ['The Comforters', 'Caroline began to pack her things', 'Forming words in her mind to keep other words from crowding in', 'work in progress']

var scoreCount = 0
var txt = score[scoreCount]
var txtOver = []
var charCount = -1
var alph = 0
var alphInstr = 0
var alphCred = 0

    //variabili relative alle sezioni riprodotte

var useraudioOn = true
var allowNext = true
var allowInput = true
var allowRender = true
var rest = 0
var txtSize
var txtsizeMult = 1
    ///////////////////////////////////////////////////////////////////////////////////////

function setup() {
    for (let q = 1; q <= 16; q++){
        femsrcArr[q] = loadSound( '/thecomforters*/'/src/fem/(' + q.toString() + ').mp3')
    }
    typeFont = loadFont( '/thecomforters/src/Olivetti.ttf')
    typeSingle = loadSound( '/thecomforters/src/typeSingle.mp3')
    typeSpace = loadSound( '/thecomforters/src/typeSpace.mp3')
    typeBell = loadSound( '/thecomforters/src/typeBell.mp3')
    roomTone1 = loadSound( '/thecomforters/src/roomTone1.mp3')
    luggage = loadSound( '/thecomforters/src/luggage.wav')
    foley1 = loadSound( '/thecomforters/src/foley1.wav')
    
    
    mainCnv = createCanvas(windowWidth, windowHeight)
    mainCnv.background(10)
    txtSize = ((100 * height) / 1080) - 1920/(width/4) * txtsizeMult
}

function draw() {
    //if assets are loaded ..TO DO ADD FEMSRCARR AND FONT TO LOAD
    if (typeSingle.isLoaded() && typeSpace.isLoaded() && typeBell.isLoaded() && roomTone1.isLoaded() && luggage.isLoaded() && foley1.isLoaded()) {
        if(allowRender) {
            renderText()
        }
            //next in score
        if (txt.length === txtOver.length) {
            //allowNext bool var avoid the function being triggerd each frame
            if(allowNext){
                setTimeout(function() { nextScore() }, 500)
                allowNext = false
            }
            
        }
    }
    //if assets are still loading
    else {
        background(10)
        translate(25, windowHeight / 2)
        fill(250, 250, 250, 100)
        textSize(70)
        textAlign(LEFT)
        text('Loading...', 0, 0)
    }
}
//////////////////////////////////////////////////////////////////////////////////////
function keyPressed() {
    if(allowInput){
        //typewriter sounds AND check for corrispondence
        if (keyCode === txt.charCodeAt(charCount + 1) || keyCode === (txt.charCodeAt(charCount + 1) - 32)) {
            if (keyCode !== 32) {
                //audio
                if (useraudioOn) {
                    typeSingle.play()
                    typeSingle.setVolume(random(0.1, 0.8))
                    typeSingle.pan(random(-0.8, 0.8))
                }
            }
            else {
                //audio
                if (useraudioOn) {
                    typeSpace.play()
                }
            }
            charCount++
        }
        else if (keyCode === 186 && (txt.charCodeAt(charCount + 1) === 232)) {
            //audio
            if (useraudioOn) {
                typeSingle.pan(random(-0.8, 0.8))
                typeSingle.setVolume(random(0.1, 0.8))
                typeSingle.play()
            }
            charCount++
        }
        else if (keyCode === 219 && (txt.charCodeAt(charCount + 1) === 63)) {
            //audio
            if (useraudioOn) {
                typeSingle.pan(random(-0.8, 0.8))
                typeSingle.setVolume(random(0.1, 0.8))
                typeSingle.play()
            }
            charCount++
        }
        else {
            console.log("The char is: " + txt.charCodeAt(charCount + 1) + ", you typed: " + keyCode)
        }
        switch (scoreCount) {
        case 0:
            var roomVol = ( (charCount + 1) / txt.length ) * 2.5
            if (charCount === 0) {
                roomTone1.loop(0, 1, roomVol, 10, 60)
            }
            roomTone1.setVolume(roomVol, 0.10)
            break;
        case 1:

            break;
        case 2:
            femCount++
            var rndFem = round(random(1, 16))
            femArr[femCount] = femsrcArr[rndFem]
                femMult  = ( femCount / txt.length ) * (femCount/3)
            femArr[femCount].loop(0, 1, 1/10 * femMult, 0, femArr[femCount].duration())
            
            break;
        }
    } 
}
/////////////////////////////////////////////////////////////////////////////////////
function renderText() {
        //initial formatting
        background(10)
        translate(25, windowHeight / 2)
        if (alph < 70) {
            alph += 1
        }
        fill(250, 250, 250, alph)
        textSize(txtSize * txtsizeMult)
        textAlign(LEFT)
        textFont(typeFont)
        if (scoreCount === 0) {
            if (alphInstr < 70) {
                alphInstr += 0.25
            }
            push()
            translate(0, 45)
            fill(250, 250, 250, alphInstr)
            textSize(txtSize / 3.5)
            textAlign(LEFT)
            textFont(typeFont)
            text('Use your keyboard to type the text displayed.', 0, 0)
            translate(0, -45)
            textSize(txtSize / 4)
            fill(250, 250, 250, 70)
            text('An interactive audio experiment by Lorenzo Micozzi Ferri.', -25, height/2 - 10)
            text("Based on Muriel Spark s novel.", -25, height/2 - 30)
            pop()
        }
            //grey text
        text(txt, 0, 0)
            //overlaying text
        if (charCount >= 0) {
            for (var i = 0; i <= charCount; i++) {
                txtOver[i] = txt[i]
            }
            fill(230)
            txtOver_string = txtOver.join("")
            textAlign(LEFT)
            text(txtOver_string, 0, 0)
        }
    }
///////////////////////////////////////////////////////////////////////////////////
function nextScore() {
    //if its not the last section goes to the next one
    if (scoreCount < score.length - 1) {
        scoreCount++
        charCount = -1
        alph = 0
        txt = score[scoreCount]
        txtOver = []
            //audio
        if (useraudioOn) {
            typeBell.play()
        }
        switch (scoreCount) {
            case 0:
                break;
            case 1:
                
                foley1.play(0, 1, 0.3)
                useraudioOn = false
                txtsizeMult = 0.5
                break;
            case 2:
                foley1.setVolume(0, 1)
                foley1.stop(1)
                rest = luggage.duration() * 1000
                luggage.play(0, 1, 0.5)
                allowInput = false
                allowRender = false
                setTimeout(function() { 
                    allowInput = true 
                    allowRender = true
                    foley1.play(0, 1, 0.3)
                                      }, rest)
                break;
            case 3:
                console.log(femCount)
                for(var k = 1; k < femCount; k++){
                    femArr[k].stop()
                }
                break;
        }
        allowNext = true
    }
    else {
        //prevent from looping if reached last entry in score array + last bell sound
        var lastBell = setInterval(function () {
            //audio
            if (useraudioOn) {
                typeBell.play()
            }
        }, 300)
        setTimeout(function () {
            clearInterval(lastBell)
        }, 1000)
        noLoop()
    }
}
///////////////////////////////////////////////////////////////////////////////////
//stems
function foley(state) {}

function ambience(state) {}

function voices(state) {}
///////////////////////////////////////////////////////////////////////////////////
    
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    txtSize = ((100 * height) / 1080) - 1920/(width/4)
}