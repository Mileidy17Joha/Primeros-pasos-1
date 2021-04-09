/*Condicionales 
Las condicionales nos permite tomar diferentes caminos en la ejecucion de código
de acuerdo con los criterios que definimos
la sintaxis más simple es un condicional es la siguiente
if (<condición>){
}*/

if (<true>){
console.log("se cumple la condición") // siempre se va a cumplir
console.log("otra línea")
}

if (<false>){
console.log("se cumple la condición") // no se va a cumplir
console.log("otra línea")
}

let edad = prompt("¿Cuál es tu edad?")
edad = Number(edad)
if (edad >= 18 && 5 ===5) {
console.log("eres mayor de edad")
}

if (edad < 18){
console.log("Eres menor de edad")
}

//El number también sirva para decimal
//también se puede utilizar el triple igual o !==