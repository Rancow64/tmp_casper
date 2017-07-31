'use strict';
let a = 2;
let c = 0;
function plus() {
    while (c < 10) {
        a += 2;
        console.log(a);

        c += 1

    }
}

function minus() {
    a -= 1

}

function multiply() {
    a *= 3

}

function dividend() {
    const rand = randomInteger(0, 10);
    if (a % rand == 0) {
        console.log('yes');
    } else {
        console.log('no');
    }
}

function divide() {
    a /= 2
}

function randomInteger(min, max) {
    var rand = min - 0.5 + Math.random() * (max - min + 1)
    rand = Math.round(rand);
    return rand;
}

setTimeout(plus, randomInteger(1000, 5000));
