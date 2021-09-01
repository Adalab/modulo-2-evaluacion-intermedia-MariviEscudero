'use strict';

const randomNumber = getRandomNumber();
function getRandomNumber(max) {
    max = 100;
    return Math.ceil(Math.random() * max);
   }

console.log(`el numero es ${randomNumber}`);
