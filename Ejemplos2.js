/*Escribe un programa que le pida un número al usuario e imprima en la consola si el número es mayor o menor/igual a 10.
Si es mayor debe imprimir "El número es mayor a 10".
Si es menor debe imprimir "El número es menor o igual a 10".*/

let num = prompt("Ingresa tu número")
num = Number(num)
if (num <= 10){
  console.log("El número es menor a 10")
} else {
  console.log("El número es mayor igual a 10")
}


/*Escribe un programa que piense un número de forma aleatoria del 1 al 10 y le pida al usuario que lo trate de adivinar. Si el número es correcto debe imprimir en la consola "Felicitaciones, ese era!", de lo contrario debe imprimir "Lo siento, intenta nuevamente!"*/

let random = Math.floor(Math.random() * 10) + 1
let entry = Number(prompt("Adivina el número: "))
if (entry === random){
  console.log("Felicitaciones, ese era!")
} else {
  console.log("Lo siento, intenta nuevamente!")
}


/*Un múltiplo de 5 es aquel que dividido por 5 da por resultado un número entero (sin residuo). Por ejemplo 10, 15, 20, etc. son múltiplos de 5. 11 no es múltiplo de 5 porque quedaría un residuo de 1.
Escribe un programa que le pida al usuario un número e imprima si es un múltiplo de 5 o no.
Si es múltiplo debe imprimir "Si, el número x es múltiplo 5", de lo contrario debe imprimir "No, el número x no es múltiplo de 5".*/

let numero = prompt("Ingresa el número: ")
 numero = Number(numero)
if (numero % 5 === 0){
  console.log("Si, el número " + numero  +  " es múltiplo 5")
} else {
  console.log("No, el número " + numero + " no es múltiplo de 5")
}


/*Escribe un programa que le pida un número al usuario e imprima en la consola si el número si es mayor, menor o igual que 10.
Si el número es menor a 10 debe imprimir "El número es menor que 10".
Si el número es mayor a 10 debe imprimir "El número es mayor que 10".
Si el número es igual a 10 debe imprimir "El número es igual a 10".*/

let num = Number(prompt("Ingresa tu número: "))
if (num === 10) {
  console.log("El número es igual que 10")
 } else if (num > 10){
   console.log("El número es mayor que 10")
 } else {
   console.log("El número es menor a 10")
 }


/*El índice de masa corporal (IMC), o BMI por sus siglas en inglés, es un valor que determina la cantidad de grasa de una persona.
El BMI se calcula con la siguiente formula:
peso / altura^2
Escribe un programa que le pida al usuario su peso y altura. El programa deberá calcular el BMI e imprimir:
"Bajo de peso" si el BMI < 18.5
"Normal" si está entre 18.5 y 24.9
"Sobrepeso" si está entre 25 y 29.9
"Obeso" si es igual o mayor a 30*/

const peso = Number(prompt("Ingrese su peso: "))
const altura = Number(prompt("Ingrese su altura: "))
let BMI = peso /(altura ** 2)

if (BMI < 18.5) {
 console.log("Bajo de peso")
} else if ( BMI >= 18.5 && BMI < 25) {
 console.log("Peso normal")
} else if ( 25 <= BMI < 30) {
 console.log("Sobrepeso")
} else {
  console.log("Obeso")
}

/*Escribe un programa que le pida al usuario ingresar un número.
Si el número es múltiplo de 3 debe imprimir en la consola "bing".
Si el número es múltiplo de 5 debe imprimir en la consola "bong".
Si el número es múltiplo tanto de 3 como de 5 debe imprimir en la consola "bingbong".
Si no cumple ninguna de las condiciones anteriores debe imprimir el mismo número.*/

const num = Number(prompt("Ingrese un número: "))
if (num % 3 === 0 && num % 5 === 0) {
  console.log("Bingbong")
 } else if (num % 3 === 0) {
  console.log("Bing")
 } else if (num % 5 === 0) {
  console.log("Bong")
 } else {
 console.log(num)
}