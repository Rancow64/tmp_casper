
'use strict';
const counter = 'oi';
console.time(counter);
let a =0;
for (var i = 0; i < 1000000; i++) {
     a*=2;
    // console.log(i)
}

console.timeEnd(counter);