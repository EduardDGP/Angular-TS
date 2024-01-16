//TypeScript es primo hermano de JS

//Se le puede ambos tipos de datos a una misma variable
let t: string|number = "Mi cara cuando";
t = 20;

let puntosVida: number|"MAX" = 10;

puntosVida = "MAX"

let carateristicas_frodo: carateristicas = {
    saltar: true,
    magia: "Bola de fuego",
    mochila: ["espada", "pico", "anillo"],
    nivel: 4

};

let carateristicas_bilbo: carateristicas = {
    saltar: true,
    magia: "",
    mochila: ["cota de malla"],
    nivel: 4

};

interface carateristicas {
    saltar: boolean,
    magia: string,
    mochila: string[],
    nivel: number

}

console.log(t);


//Ejercicios

//E1
let nombre1:string = "Manolo el del bombo";
var edad1:number = 23;

const PERSONAJE1 = {
    nombre: nombre1,
    edad: edad1,
};

console.log(nombre1);
console.log(edad1);
console.log(PERSONAJE1.nombre);
console.log(PERSONAJE1.edad);


//E2
"use strict";
// Uso de Let y Const
var nombre2:string = "Nestor Kauil";
var edad2 = 25;
var PERSONAJE2 = {
nombre: nombre2,
edad: edad2
};
console.log(PERSONAJE2);