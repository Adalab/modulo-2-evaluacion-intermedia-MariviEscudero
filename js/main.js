'use strict';

const randomNumber = getRandomNumber();

//nuemro aleatorio

function getRandomNumber(max) {
  max = 100;
  return Math.ceil(Math.random() * max);
}

console.log(`Numero aleatorio = ${randomNumber}`);

//funcion para pintar resultados

const attemptButton = document.querySelector('.js_attemptbutton');
const userNumber = document.querySelector('.js_usernumber');
console.log(userNumber.value);

function paintClues() {
  const parseUserNumber = parseInt(userNumber.value);
  if (parseUserNumber < 1) {
    document.getElementById('clue').value =
      'El número debe estar entre 1 y 100';
  } else if (parseUserNumber > 100) {
    document.getElementById('clue').value =
      'El número debe estar entre 1 y 100';
  } else if (parseUserNumber > randomNumber) {
    document.getElementById('clue').value = 'Demasiado alto';
  } else if (parseUserNumber < randomNumber) {
    document.getElementById('clue').value = 'Demasiado bajo';
  } else if (parseUserNumber === '') {
    document.getElementById('clue').value =
      'El número debe estar entre 1 y 100';
  } else document.getElementById('clue').value = 'Has ganado campeona!!!';
}

function handlePlayClues() {
  console.log('Numero del usuario = ' + userNumber.value);

  paintClues();
}

attemptButton.addEventListener('click', handlePlayClues);
