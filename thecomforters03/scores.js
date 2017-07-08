var debugMode = false
var score = {
    pos: 'root'
    , txt: ['Caroline began to pack her things.', 'She heard loud noises coming from outside her room,', 'again,', 'choice', 'She stops to listen.', 'She leaves']
    , a: {
        pos: 'a'
        , txt: ['loud enough to make her stop and listen.', 'Caroline found her neighbours\' arguments entertaining.', 'There were days when they could go on for hours,', 'about the most insignificant things.', 'They could never seem to just let go.', /* newscene */ 'Caroline ran to find a cab,', 'water splashing on her shoes and dripping down her coat.', 'She had lost far too much time inside.', 'Now it was pouring and she lost her train.', 'There were many miles ahead.', 'Caroline tried to lay her head down', 'even though the driver\'s glances through the mirror made her feel uncofortable.']
        , a: {
            pos: 'aa'
            , txt: ['Fino ad ora hai scelto She stops to listen e a']
            , a: {}
            , b: {}
        }
        , b: {
            pos: 'ab'
            , txt: ['Fino ad ora hai scelto She stops to listen e b']
            , a: {}
            , b: {}
        }
    }
    , b: {
        pos: 'b'
        , txt: ['but time was running, so Caroline grabbed her notes', 'and left.', /* new scene */ 'Her train was right on time.', 'As soon as she took her seat she started drifting:', 'Caroline looked forward to that moment everyday,', 'when she could abandon herself to the sensantions,', 'of her memories,', 'moved uncontrollably,', 'yet so delicate']
        , a: {
            pos: 'ba'
            , txt: ['Fino ad ora hai scelto She leaves e c']
            , a: {}
            , b: {}
        }
        , b: {
            pos: 'bb'
            , txt: ['Fino ad ora hai scelto She leaves e d']
            , a: {}
            , b: {}
        }
    }
}
var restScore = {
    rest: [0, 0, 0]
    , a: {
        rest: []
        , a: {}
        , b: {}
    }
    , b: {
        rest: []
        , a: {}
        , b: {}
    }
}

function loadRestScore() {
    restScore = {
        rest: [luggage.duration() * 1000 - 2000, 1000, 100]
        , a: {
            rest: [ /*choice*/ 100, 1000, 700, 500, 700, 2000, /*newscene*/ 5000, 1000, 1000, 500, 100]
            , a: {}
            , b: {}
        }
        , b: {
            rest: [0, 0, 2000, 5000, 1000, 1000, 500, 100]
            , a: {}
            , b: {}
        }
    }
}

var argumentVol = 0
var iter = 0
var autoKey;

function soundScore() {
    var q = globalCharCount
        //console.log(q)
    if (pointer.pos === 'root') {
        switch (true) {
        case (q === 0):
            var roomVol = ((globalCharCount + 1) / title.length)
            roomTone1.loop(0, 1, roomVol, 10, 60)
            break;
        case (q < title.length - 1):
            var roomVol = ((globalCharCount + 1) / title.length) * 2.5
            roomTone1.setVolume(roomVol, 0.10)
            typeSingle.setVolume(random(0.1, 0.8))
            typeSingle.pan(random(-0.8, 0.8))
            break;
        case (q === 14):
            typeSingle.setVolume(0)
            typeBell.setVolume(1)
            typeBell.play()
            foley1.play(0, 1, 0.3)
            break;
        case (q === 48):
            foley1.setVolume(0, 3)
            foley1.pause(3)
            luggage.play(0, 1, 0.4)
            setTimeout(function () {
                foley1.play(0, 1, 0.3)
            }, luggage.duration() * 1000)
            break;
        case (q === 49):
            console.log(pointer.txt[scoreCount])
            var filter = new p5.LowPass()
            filter.freq(500)
            argumentVol = 0
            argument.pan(0.7)
            argument.disconnect()
            argument.connect(filter)
            argument.play(0, 1, argumentVol)
            break;
        case (q > 49 && q < 49 + pointer.txt[scoreCount].length):
            argumentVol = ((globalCharCount - 49) / pointer.txt[scoreCount].length)
            argumentVol = Math.min(Math.max(argumentVol, 0), 0.7)
            argument.setVolume(argumentVol, 0.10)
            break;
        }
    }
    if (pointer.pos === 'a') {
        switch (true) {
        case (q >= (55 + score.txt[1].length + score.a.txt[0].length + score.a.txt[1].length + score.a.txt[2].length + score.a.txt[3].length) && q < (55 + score.txt[1].length + score.a.txt[0].length + score.a.txt[1].length + score.a.txt[2].length + score.a.txt[3].length + score.a.txt[4].length - 1)):
            if (q === (55 + score.txt[1].length + score.a.txt[0].length + score.a.txt[1].length + score.a.txt[2].length + score.a.txt[3].length + score.a.txt[4].length - 20)) {
                autoKey = setInterval(function() {
                    console.log('done')
                    simKeyPressed()
                }, 150)
                rainScene.play(0, 1, 1)
            }
            if (q === (55 + score.txt[1].length + score.a.txt[0].length + score.a.txt[1].length + score.a.txt[2].length + score.a.txt[3].length + score.a.txt[4].length - 5)) {
                argument.setVolume(0, 3)
                foley1.setVolume(0, 3)
                roomTone1.setVolume(0, 3)
                console.log('0.3')
            }
            iter += 1
            argumentVol += 0.015 * iter
            argument.setVolume(argumentVol, 0.10)
            break;
                
        case (q === (55 + score.txt[1].length + score.a.txt[0].length + score.a.txt[1].length + score.a.txt[2].length + score.a.txt[3].length + score.a.txt[4].length - 1)):
            console.log('case3')
            argument.setVolume(0, 3)
            clearInterval(autoKey)
            break;
        }
    }
    else if (pointer.pos === 'b') {
        switch (true) {
            case (q === 106):
                console.log('culo')
                argument.setVolume(0, 5)
                foley1.setVolume(0, 5)
                roomTone1.setVolume(0, 5)
                doorClose.play(4, 1, 1)
                trainScene.play(1, 1, 1)
                break;
                    }
    }
}