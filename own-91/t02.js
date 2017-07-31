'use strict'
let d = 10;
let x = 5;
let i = 0;
let i1, i2, i3;
let fnSum = function () {
    x += 1;
    i += 1;
}
let fnMultiply = function () {

    if (i >= 30) {
        x *= 2;
        i = 0;
    }

}
let fnAlert = function () {
    if (x%10 == 0) {
        console.log(x);

    }
}
let fnClose = function () {
    clearTimeout(i1);
    clearTimeout(i2);
    clearTimeout(i3);
    console.log('done asyncs');
}

/* perform actions */
i1 = setInterval(fnSum, 2000);
i2 = setInterval(fnMultiply, 2000);
i3 = setInterval(fnAlert, 1000);
setTimeout(fnClose, 100000000);

console.log('done main');