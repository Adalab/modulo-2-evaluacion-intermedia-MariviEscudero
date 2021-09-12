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

//funcion que pinta las pistas

function writeValue(message){
  document.getElementById('clue').value = message;
}

function paintClues() {
  const parseUserNumber = parseInt(userNumber.value);
  if (isNaN(parseUserNumber)) {
    writeValue('Tienes que escribir un número entre 1 y 100');
  }else if(parseUserNumber < 1 || parseUserNumber > 100 ){
    writeValue('El número debe estar entre 1 y 100');
  } else if (parseUserNumber > randomNumber) {
    writeValue('Demasiado alto');
  } else if (parseUserNumber < randomNumber) {
    writeValue('Demasiado bajo');
  } else writeValue('Has ganado campeona!!!');
}

//listener click sobre el boton

function handlePlayClues() {
  const userValue = userNumber.value;
  console.log(`Numero del usuario = ${userValue}`);
  paintClues();
}

attemptButton.addEventListener('click', handlePlayClues);
