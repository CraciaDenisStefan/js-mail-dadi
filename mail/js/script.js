"use strict";
let email = [`stanlee@email.com`, `denis@email.com`, `peterparker@email.com`, `tonystark@email.com`, `nickfury@email.com`, `steverogers@email.com`, `scottlang@email.com`, `brucebanner@email.com`, `thor@email.com`]
let avengers = prompt(`Ciao Avenger, inserisci la tua email :`)
let flag = false;
for( let i = 0; i < email.length; i++ ){
    if(email[i] === avengers){
        flag = true;

    } 
}        
if(flag === true){
        console.log(`Benvenuto Avenger !`)
    }else{
        console.log(`Non sei un Avenger`)
    }
