"use strict";

let utente = Math.floor(Math.random() * 6) + 1;
console.log(`Utente: ${utente}`)

let computer = Math.floor(Math.random() * 6) + 1;
console.log(`Computer: ${computer}`)

if(utente > computer){
    console.log(`L'utente ha vinto !`)
}else if(utente < computer){
    console.log(`Il computer ha vinto !`)
}else if(utente = computer){
    console.log(`Pareggio`)
}