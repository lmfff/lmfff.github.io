var debugMode = false

var score = {
    txt: ['Caroline began to pack her things.', 'She heard loud noises coming from outside her room,', 'again,', 'choice', 'She stops to listen.', 'She leaves'],
    a: { 
         txt: ['loud enough to make her stop and listen;', 'Caroline found her neighbours\' arguments entertaining.', 'There were days when they could go on for hours and HOURS', 'about the smallest things.', 'They could never seem to just let go.', 'And Caroline could never seem to stop listening', 'to their lengthy arguments.', /* newscene */ 'She ran to find a cab,', 'water splashing on her shoes and dripping down her coat.', 'Caroline has lost far too much time inside.', 'Now it was pouring and she lost her train.', 'There were many miles ahead.', 'Caroline tried to lay her head down', 'even though the driver\'s glances through the mirror made her feel uncofortable.' ],
        a: { 
             txt: ['Fino ad ora hai scelto She stops to listen e a'],
            a: { 
                
            },
            b: { 

            }
        },
        b: { 
             txt: ['Fino ad ora hai scelto She stops to listen e b'],
            a: { 

            },
            b: { 

            }
        }
    },
    b: { 
         txt: ['but time was running, so Caroline grabbed her notes', 'and left.', /* new scene */ 'Her train was right on time.', 'As soon as she took her seat she started drifting:', 'Caroline looked forward to that moment everyday,', 'when she could abandon herself to the sensantions,', 'of her memories,', 'moved uncontrollably,', 'yet so delicate'],
        a: { 
             txt: ['Fino ad ora hai scelto She leaves e c'],
            a: { 

            },
            b: { 

            }
        },
        b: { 
             txt: ['Fino ad ora hai scelto She leaves e d'],
            a: { 

            },
            b: { 

            }
        }
    }
} 

var restScore = {
        rest: [0, 0, 0],
        a: {
            rest: [],
            a: {},
            b: {}
        },
        b: { 
            rest: [],
            a: {},
            b: {}
        }
    }

function loadRestScore(){
    restScore = {
        rest: [luggage.duration()*1000 - 2000, 1000, 100],
        a: {
            rest: [/*choice*/100, 1000, 700, 500, 700, 1000, 100, /*newscene*/ 5000, 1000, 1000, 500, 100 ],
            a: {},
            b: {}
        },
        b: { 
            rest: [0, 0],
            a: {},
            b: {}
        }
    }
}
    

    


function soundScore() {
    var q = globalCharCount
    console.log(q)
    switch (true) {
        case (q === 0):
            var roomVol = ( (globalCharCount + 1) / title.length )
            roomTone1.loop(0, 1, roomVol, 10, 60)
            break;
        case (q < title.length - 1):
            var roomVol = ( (globalCharCount + 1) / title.length ) * 2.5
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
            foley1.setVolume(0, 1)
            foley1.stop(1)
            luggage.play(0, 1, 0.5)
            break;
                           }
    
    
}

