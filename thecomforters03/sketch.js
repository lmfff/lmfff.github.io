var pointer = score
var restPointer = restScore

var choiceScore = ['She stops to listen.', 'She leaves.', /*'Test Left'*/ , /*'Test Right'*/ ]

var choiceFillR = 100
var choiceFillL = 100
var choice1
var choice2
var choiceMade

var choiceCount = -1
var scoreLine = 0
var scoreCount = 0
var restOff = 0
var restCount = scoreCount + restOff
var charCount = -1
var hCount = 0
var globalCharCount = 0

var stopBar = '|'
var stopBarIsLoading = false
var inputAllowed = true

var trsX = 0
var trsY = 0
var yTarget = 0
var textRend = ''
var titleRend = ''
var titleState = 1
var title = 'THE COMFORTERS'
var titleFill = 0
var exKeyCode
var exExKeyCode
var typeGate = false
var typeMaxV = 50
var fired = false

function setup() {
    createCanvas(windowWidth, windowHeight)
    background(10)
    textSize(20)
    textFont("Courier")
    textAlign(CENTER)
    fill(200)
    loadRestScore()
    restPointer = restScore
    soundScore()
}

function preload() {
    typeSingle = loadSound('/src/typeSingle.mp3')
    typeSpace = loadSound('/src/typeSpace.mp3')
    typeBell = loadSound('/src/typeBell.mp3')
    roomTone1 = loadSound('/src/roomTone1.mp3')
    luggage = loadSound('/src/luggage.wav')
    foley1 = loadSound('/src/foley1.wav')
    argument = loadSound('/src/argument.wav')

}

function draw() {
    background(10)
    stopBarAnim()
    if (pointer.txt[scoreCount] === 'choice') {
        inputAllowed = false
        stopBarIsLoading = true
        choice1 = pointer.txt[scoreCount + 1]
        choice2 = pointer.txt[scoreCount + 2]
    } else {
        choice1 = ''
        choice2 = ''
    }
    fill(250)
    textAlign(CENTER)
    textSize(50)
    if (titleState) {
        inputAllowed = true
        text(titleRend + stopBar, width / 2, height - 80 - (25 * (hCount + 1)))
    } else {
        text(title, width / 2, height - 80 - (25 * (hCount + 1)))
        textSize(20)
        text(textRend + stopBar, width / 2, height - 50 - (25 * hCount))
        choiceRender()
    }

}



function windowResized() {
    resizeCanvas(windowWidth, windowHeight)
}


function keyPressed() {
    if (pointer.txt[scoreCount] === 'choice') {
        inputAllowed = false
    }
    if (titleState && keyCode != exKeyCode && keyCode != exExKeyCode && !typeGate) {
        typeGate = true
        setTimeout(function () {
            typeGate = false
        }, typeMaxV)
        globalCharCount++
        soundScore()
        charCount++
        if (title.charAt(charCount) === ' ') {
            typeSpace.play()
        } else {
            typeSingle.play()
        }
        exExKeyCode = exKeyCode
        exKeyCode = keyCode
        titleRend += title.charAt(charCount)
        if (charCount === title.length - 1) {
            titleState = 0
            charCount = -1
            inputAllowed = false
            stopBarIsLoading = true
            setTimeout(function () {
                inputAllowed = true
                stopBarIsLoading = false

            }, 1500)
        }
    }
    if (inputAllowed && keyCode != exKeyCode && keyCode != exExKeyCode && !titleState && !typeGate) {
        typeGate = true
        setTimeout(function () {
            typeGate = false
        }, typeMaxV)
        globalCharCount++
        soundScore()
        charCount++
        exExKeyCode = exKeyCode
        exKeyCode = keyCode
        textRend += pointer.txt[scoreCount].charAt(charCount)
        if (charCount === pointer.txt[scoreCount].length - 1) {
            textRend += '\n'
            charCount = -1
            inputAllowed = false
            stopBarIsLoading = true
            setTimeout(function () {
                inputAllowed = true
                stopBarIsLoading = false
            }, restPointer.rest[restCount])
            if (pointer.txt[scoreCount] === 'choice') {
                inputAllowed = false
            }
            scoreCount++
            hCount++
            restCount = scoreCount + restOff
        }
    }
    if (pointer.txt[scoreCount] === 'choice') {
        if (pointer.pos === 'root' && !fired) {
            fired = true
            setTimeout(function () {
                choiceMade = 'a'
                choiceFillL = 250
                choiceFillR = 100
                typeSingle.play()
            }, 5000)
            setTimeout(function () {
                typeSpace.play()
                pointer = pointer.a
                restPointer = restPointer.a
                scoreCount = 0
                restOff = 0
                restCount = 0
                choiceMade = undefined
                choiceFillL = 100
                choiceFillR = 100
                restOff += 1
                restCount = scoreCount + restOff
                setTimeout(function () {
                    inputAllowed = true
                    stopBarIsLoading = false
                }, restPointer.rest[restCount])
            }, 6000)
        }

        if (keyCode === RIGHT_ARROW) {
            choiceMade = 'b'
            choiceFillR = 250
            choiceFillL = 100
        }
        if (keyCode === LEFT_ARROW) {
            choiceMade = 'a'
            choiceFillL = 250
            choiceFillR = 100
        }
        if (choiceMade != undefined && keyCode === ENTER) {
            if (choiceMade === 'a') {
                pointer = pointer.a
                restPointer = restPointer.a
                scoreCount = 0
                restOff = 0
                restCount = 0
                setTimeout(function () {
                    inputAllowed = true
                    stopBarIsLoading = false
                }, restPointer.rest[restCount])
            } else {
                pointer = pointer.b
                restPointer = restPointer.b
                scoreCount = 0
                restOff = 0
                restCount = 0
                setTimeout(function () {
                    inputAllowed = true
                    stopBarIsLoading = false
                }, restPointer.rest[restCount])
            }
            choiceMade = undefined
            choiceFillL = 100
            choiceFillR = 100
            restOff += 1
            restCount = scoreCount + restOff
        }
    }
}

function choiceRender() {
    if (choice1 != undefined && choice2 != undefined) {
        if (pointer.txt[scoreCount] === 'choice') {
            textAlign(RIGHT)
            fill(choiceFillL)
            text(choice1, width / 2 - 10, height - 50)
            textAlign(LEFT)
            fill(choiceFillR)
            text(choice2, width / 2 + 10, height - 50)
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
    } else if (frameCount % 20 === 19) {
        stopBar = '-'
    }
}
