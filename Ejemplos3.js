/*Escribe un programa que le pida al usuario ingresar una frase. El programa debe imprimir la frase en la consola 10 veces.
Nota: utiliza un ciclo para imprimir la frase las 10 veces.*/

let frase = prompt("Ingresa una frase: ")
for(let i = 0; i < 10; i++) {
  console.log(frase)
}


/*Escribe un programa que le pida al usuario una frase y un número. El programa debe imprimir la frase en la consola el número de veces que ingresó el usuario.
Por ejemplo, si el usuario ingresó la frase "Hola Mundo" y el número 5, el programa debe imprimir "Hola Mundo" 5 veces:
Hola Mundo
Hola Mundo
Hola Mundo
Hola Mundo
Hola Mundo*/

let frase = prompt("Por favor ingresa una frase: ")
let numero = Number(prompt("Por favor ingrese un número: "))

for(let i = 0; i < numero; i++) {
  console.log("La frase es: " + frase)
}

/*Escribe un programa para la consola que le pida al usuario un número e imprima los números desde 1 hasta el número.
Por ejemplo, si el usuario ingresa el número 5, el programa de be imprimir:
1
2
3
4
5*/

let numero = Number(prompt("Por favor ingrese un número: "))
for(let i = 1; i < numero; i++) {
  console.log(i)
}


/*Escribe un programa para la consola que le pida al usuario un número y sume todos los números desde 1 hasta ese número.
Por ejemplo, si el usuario ingresa el número 5, el programa debe imprimir 15 (1+2+3+4+5). Si el usuario ingresa el número 10, el programa debe imprimir 55.*/

let numero = Number(prompt("Por favor ingrese un número: "))
let suma = 0
for(let i = 1; i <= numero; i++) {
  suma = suma + i
}
 console.log(suma)

/*Escribe un programa para la consola que le pida al usuario dos números e imprima en la consola los números en ese rango. Por ejemplo, si el usuario ingresa 5 como primer número y 10 como segundo número, el programa debe imprimir:
5
6
7
8
9
10
Nota 1: Puedes asumir que el primer número siempre va a ser menor o igual que el segundo.
Nota 2: Fíjate que se imprimen también los números en los límites, en el ejemplo el 5 y el 10.*/

let num1 = Number(prompt("Por favor ingrese un número: "))
let num2 = Number(prompt("Por favor ingrese otro número: "))

for(i = num1; i <= num2; i++) {
 console.log(i)
}


/*Escribe un programa que piense un número de forma aleatoria y le pida al usuario que lo trate de adivinar (como en uno de los ejercicios anteriores). La diferencia es que esta vez el usuario puede intentar indefinidamente hasta que encuentre el número*/

let num = Math.floor(Math.random() * 10) + 1
let user = parseInt(prompt("Intenta adivinar un número del 1 al 10: "))

while (user !== num) {
 user = parseInt(prompt("No, intenta nuevamente"))
 }
   console.log("Sí, el número es correcto")