"use strict";

let button = document.getElementById(`gioca`);
button.addEventListener(`click`, function(){

let utente = Math.floor(Math.random() * 6) + 1;
console.log(`Utente: ${utente}`)

let computer = Math.floor(Math.random() * 6) + 1;
console.log(`Computer: ${computer}`)

let winner = ``;

if(utente > computer){
    winner = `L'utente ha vinto !` 
}else if(utente < computer){
    winner = `Il computer ha vinto !` 
}else if(utente = computer){
    winner = `Pareggio !` 
}

document.getElementById(`utente_numero`).innerHTML = utente;
document.getElementById(`computer_numero`).innerHTML = computer;
document.getElementById(`vincitore`).innerHTML = winner;


let button = document.getElementById(`reset`);
button.addEventListener(`click`, function(){

document.getElementById(`utente_numero`).innerHTML = ``;
document.getElementById(`computer_numero`).innerHTML = ``;
document.getElementById(`vincitore`).innerHTML = ``;
})

})

