/*Crea un programa a partir de las siguientes instrucciones:
Crea una variable llamada nombres con un arreglo que tenga los siguientes elementos: "Pedro", "Pablo", "María", "Juan", "Diana".
Pídele al usuario que ingrese un nombre e insértalo al final del arreglo que creaste en el paso 1.
Pídele al usuario que ingrese otro nombre y reemplaza la tercera posición del arreglo con este valor.
Recorre el arreglo e imprímelo.
Un ejemplo de cómo se comportaría el programa en la consola sería el siguiente:
Ingresa un nombre> Camilo
Ingresa otro nombre> Ariel
Pedro
Pablo
Ariel
Juan
Diana*/

let array =["Pedro", "Pablo", "María", "Juan", "Diana"]
const nombre1 = prompt("Por favor ingresa un nombre: ")
array.push(nombre1)

const nombre2 = prompt("Por favor ingresa otro nombre: ")
array.splice(2,1,nombre2)

for(let i = 0; i < array.length; i++) {
  console.log(array[i])
}

/*Escribe un programa que:
Le pida al usuario un número y cree un arreglo de números empezando en el 1 hasta el número que el usuario ingrese (incluyéndolo)
Elimine el segundo elemento.
Recorra e imprima el arreglo.
Ejemplo:
Ingresa un número> 5
1
3
4
5*/


