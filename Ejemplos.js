//Ejemplo 1
let number1 = prompt("Ingresa el primer número: ")
let number2 = prompt("Ingresa el segundo número: ")
numbers = parseInt(number1)+parseInt(number2)
console.log(numbers)

//Ejemplo2
let year = prompt("Cuál es tu año de nacimiento")
let edad = (2021 - parseInt(year))
console.log("Tienes " + edad + " años")

//Ejemplo3
let peso = prompt("Ingrese su peso: ")
let altura = prompt("ingrese su altura: ")
let bmi = peso /(altura ** 2)
console.log("Tu BMI es " + bmi)

let altura = prompt("ingrese su altura: ")
let altura = Number(altura)
console.log(altura)

//Ejemplo4
let num = prompt("Ingresa tu número")
num = Number(num)
if (num <= 10){
  console.log("El número es menor a 10")
} else {
  console.log("El número es mayor igual a 10")
}

//Ejemplo5
let random = Math.floor(Math.random() * 10) + 1
let entry = Number(prompt("Adivina el número: "))
if (entry === random){
  console.log("Felicitaciones, ese era!")
} else {
  console.log("Lo siento, intenta nuevamente!")
}

//Ejemplo6
let numero = prompt("Ingresa el número: ")
 numero = Number(numero)
if (numero % 5 === 0){
  console.log("Si, el número " + numero  +  " es múltiplo 5")
} else {
  console.log("No, el número " + numero + " no es múltiplo de 5")
}