/* Condiciones (else)
Existen atajos que te van a permitir escribir código más corto: else y else if
if (<condición>){
} else {
}*/

let edad = prompt("¿Cuál es tu edad?")
edad = Number(edad)
if (edad >= 18) {
console.log("eres mayor de edad")
} else {
console.log("Eres menor de edad")
}

// Condiciones anidados
var num = 8
if (num <10){
  console. log("El número es menos a 10")
} else {
  if (num> 10) {
    console.log("El número es mayor a 10")
  } else {
   console.log("El número es igual a 10")
  }
}

let edad = prompt("¿Cuál es tu edad?")
edad = Number(edad) 
 if (edad === 10){
  console.log("La edad es 10")
 } else {
   if (edad >10) {
     console.log("La edad es mayor a 10")
  } else {
     console.log("La edad es menor a 10")
  }
 }

//Condicionales (else if)
// Existen dos atajos que te van a permitir escribir código más corto 
//else y else if

if (edad === 10){
 console.log("La edad es 10")
} else if (edad > 10){
 console.log("La era es mayor a 10")
} else {
 console.log("La edad es menor a 10")
}

//Operador ternario
//Nos permite escribir condiciones en una sola línea


let edad = prompt("¿Cuál es tu edad?")
edad = Number(edad) 

let color;
if (edad >20) {
  color = "rojo"
} else {
  color = "amarillo"
}

console.log("El color es: " + color)

//Se recomienda utilizarlo únicamente en condicionales cortos.

let edad = prompt("¿Cuál es tu edad?")
edad = Number(edad) 

const color = color >20 ? "rojo" : "amarillo"
console.log("El color es: " + color)