// @author Johannes Tomasoni
// @author LS Tomasoni

let startMenu = true
let modus = 0
let aufnahme: number[] = []
let naechsterTonNachC: number[] = []
let letzterTon = 0
let naechsterTonNachA: number[] = []
let naechsterTonNachG: number[] = []
let naechsterTonNachF: number[] = []
let naechsterTonNachE: number[] = []
let naechsterTonNachD: number[] = []

basic.showString("P")

function modusDisp(modus: number) {
    switch (modus) {
        case 0:
            basic.showString("P")
            break;
        case 1:
            basic.showString("M")
            break;
        case 2:
            basic.showString("B")
    }
}

input.onButtonPressed(Button.A, () => {
    if (startMenu) {
        if (modus > 0) {
            modus = modus - 1
            modusDisp(modus)
        }
    }
    else {
        music.playTone(262, music.beat(BeatFraction.Whole))
        aufnahme.push(262)
        naechstenTonSpeichern(262)
    }
})
input.onPinPressed(TouchPin.P0, () => {
    music.playTone(294, music.beat(BeatFraction.Whole))
    aufnahme.push(294)
    naechstenTonSpeichern(294)
})
input.onButtonPressed(Button.B, () => {
    if (startMenu) {
        if (modus < 2) {
            modus = modus + 1
            modusDisp(modus)
        }
    }
    else {
        music.playTone(440, music.beat(BeatFraction.Whole))
        aufnahme.push(440)
        naechstenTonSpeichern(440)
    }
})
input.onPinPressed(TouchPin.P3, () => {
    music.playTone(392, music.beat(BeatFraction.Whole))
    aufnahme.push(392)
    naechstenTonSpeichern(392)
})
input.onPinPressed(TouchPin.P1, () => {
    music.playTone(330, music.beat(BeatFraction.Whole))
    aufnahme.push(330)
    naechstenTonSpeichern(330)
})
input.onPinPressed(TouchPin.P2, () => {
    music.playTone(349, music.beat(BeatFraction.Whole))
    aufnahme.push(349)
    naechstenTonSpeichern(349)
})
input.onButtonPressed(Button.AB, () => {
    if (startMenu) {
        startMenu = false
        basic.showString("o")
    }
    else {
        basic.showString(">")
        switch (modus) {
            case 0:
                abspielen();
                break;
            case 1:
                monteCarloAbspielen();
                break;
            case 2:
                bayesAbspielen();
                break;
        }

    }
})

function abspielen() {
    for (let aufnahmeElement of aufnahme) {
        music.playTone(aufnahmeElement, music.beat(BeatFraction.Whole))
        music.rest(music.beat(BeatFraction.Quarter))
    }
}

function monteCarloAbspielen() {
    for (let i = 0; i < 20; i++) {
        music.playTone(aufnahme[Math.random(aufnahme.length + 1)], music.beat(BeatFraction.Whole))
        music.rest(music.beat(BeatFraction.Quarter))
    }
}

function bayesAbspielen() {
    for (let i = 0; i < 20; i++) {
        letzterTon = naechstenTonSpielen(letzterTon)
        music.playTone(letzterTon, music.beat(BeatFraction.Whole))
        music.rest(music.beat(BeatFraction.Quarter))
    }
}

function naechstenTonSpeichern(naechsterTon: number) {

    switch (letzterTon) {
        case 262:
            naechsterTonNachC.push(naechsterTon)
            break;
        case 294:
            naechsterTonNachD.push(naechsterTon)
            break;
        case 330:
            naechsterTonNachE.push(naechsterTon)
            break;
        case 349:
            naechsterTonNachF.push(naechsterTon)
            break;
        case 392:
            naechsterTonNachG.push(naechsterTon)
            break;
        case 440:
            naechsterTonNachA.push(naechsterTon)
            break;
    }
    letzterTon = naechsterTon;
}
function naechstenTonSpielen(gespielterTon: number): number {
    let naechsterTon: number;
    switch (gespielterTon) {
        case 262:
            naechsterTon = naechsterTonNachC[Math.random(naechsterTonNachC.length + 1)]
            break;
        case 294:
            naechsterTon = naechsterTonNachD[Math.random(naechsterTonNachD.length + 1)]
            break;
        case 330:
            naechsterTon = naechsterTonNachE[Math.random(naechsterTonNachE.length + 1)]
            break;
        case 349:
            naechsterTon = naechsterTonNachF[Math.random(naechsterTonNachF.length + 1)]
            break;
        case 392:
            naechsterTon = naechsterTonNachG[Math.random(naechsterTonNachG.length + 1)]
            break;
        case 440:
            naechsterTon = naechsterTonNachA[Math.random(naechsterTonNachA.length + 1)]
            break;
        default:
            aufnahme[Math.random(aufnahme.length + 1)]
            break;
    }
    if (naechsterTon == 0) {
        naechsterTon = aufnahme[Math.random(aufnahme.length + 1)]
    }
    return naechsterTon;
}
