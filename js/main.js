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

function handlePlayClues(){  
    console.log('Numero del usuario = ' + userNumber.value);
    if (parseInt(userNumber.value) < 1){
        document.getElementById('clue').value = 'El número debe estar entre 1 y 100'; 
    }else if (parseInt(userNumber.value) >100){
        document.getElementById('clue').value = 'El número debe estar entre 1 y 100';
    }else if (parseInt(userNumber.value)> randomNumber){
        document.getElementById('clue').value = 'Demasiado alto';
    }else if (parseInt(userNumber.value) < randomNumber){
        document.getElementById('clue').value = 'Demasiado bajo';
    }else 
        document.getElementById('clue').value = 'Has ganado campeona!!!';    
    }
    
    
attemptButton.addEventListener('click', handlePlayClues);

function userNumberCounter(ev);{ 
    const eventCounter = ev.currentTarget;
}

   