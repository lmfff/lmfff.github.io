var score = [
    
    ['Caroline began to pack her things.', 'She heard loud noises coming from outside her room,', 'again,', 'choice'],
    /* choice1 */ ['so loud she decides to stop and listen;', 'she found her neighbours\' arguments entairtaining.'],
    /* choice2 */ ['but time was running, so she grabbed her notes', 'and left.']
    
]

var choiceScore = ['She stops to listen.', 'She leaves.']
var restScore = [
    [3000, 2000, 100],
    /* choice1 */ [1000, 10000000],
    /* choice2 */ [1000, 10000000]
]

var debugMode = false
if (debugMode) {
    var restScore = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
}

var choiceFillR = 100
var choiceFillL = 100
var choice1
var choice2
var choiceMade

var choiceCount = -1
var scoreLine = 0
var scoreCount = 0
var charCount = -1
var hCount = 0

var stopBar = '|'
var stopBarIsLoading = false
var inputAllowed = true

var trsX = 0
var trsY = 0
var yTarget = 0
var textRend = ''
var title = 'THE COMFORTERS'
var titleFill = 0

function setup() {
    createCanvas(windowWidth, windowHeight)
    background(10)
    textSize(20)
    textFont("Courier")
    textAlign(CENTER)
    fill(200)
}

function draw() {
    background(10)
    stopBarAnim()
    if (score[scoreLine][scoreCount] === 'choice') {
        inputAllowed = false
        stopBarIsLoading = true
        choice1 = choiceScore[choiceCount]
        choice2 = choiceScore[choiceCount + 1]
    } else {
        choice1 = ''
        choice2 = ''
    }
    fill(250)
    textSize(40)
    if (frameCount < 240) {
        inputAllowed = false
        titleFill += 1
        fill(titleFill)
        text(title, width/2, height - 80 - (25 * (hCount + 1)))
    } else if (frameCount === 240) {
        inputAllowed = true
    } else {
        text(title, width/2, height - 80 - (25 * (hCount + 1)))
        textSize(20)
        text(textRend + stopBar, width/2, height - 50 - (25 * hCount))
        choiceRender()
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight)
}


function keyPressed() {
    if (inputAllowed) {
        charCount++
        textRend += score[scoreLine][scoreCount].charAt(charCount)
        if (charCount === score[scoreLine][scoreCount].length - 1) {
            textRend += '\n'
            charCount = -1
            inputAllowed = false
            stopBarIsLoading = true
            setTimeout(function() { 
                inputAllowed = true
                stopBarIsLoading = false
            }, restScore[scoreLine][scoreCount])
            scoreCount++
            hCount++
            if (score[scoreLine][scoreCount] === 'choice') {
                inputAllowed = false
                choiceCount++
            }
        }
    }
    if (score[scoreLine][scoreCount] === 'choice') {
        if (keyCode === RIGHT_ARROW) {
            choiceMade = 'right'
            choiceFillR = 250
            choiceFillL = 100
        }
        if (keyCode === LEFT_ARROW) {
            choiceMade = 'left'
            choiceFillL = 250
            choiceFillR = 100
        }
        if (choiceMade != undefined && keyCode === ENTER) {
            if (choiceMade === 'right') {
                scoreLine += 2
                scoreCount = 0
                inputAllowed = true
                stopBarIsLoading = false
            } else {
                scoreLine++
                scoreCount = 0
                inputAllowed = true
                stopBarIsLoading = false
            }
        }
    }
}

function choiceRender() {
    if (choice1 != undefined && choice2 != undefined) {
        if (score[scoreLine][scoreCount] === 'choice') {
            fill(choiceFillL)
            text(choice1, width/3, height - 25)
            fill(choiceFillR)
            text(choice2, 2*width/3, height - 25)
        }
    }
}

function stopBarAnim() {
    if (stopBarIsLoading) {
        stopBarLoad()
    } else {
        stopBarFlash()
    }
}

function stopBarFlash() {
    if (frameCount % 20 < 10) {
        stopBar = '|'
    } else {
        stopBar = ' '
    }
}

function stopBarLoad() {
    if (frameCount % 20 === 5) {
       stopBar = "\\"
    } else if (frameCount % 20 === 10) {
       stopBar = '|' 
    } else if (frameCount % 20 === 15) {
       stopBar = '/' 
    }else if (frameCount % 20 === 19) {
       stopBar = '-' 
    }
}