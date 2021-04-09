/*Ciclos (while)--- Mientras qué
los ciclos nos permite repertir la ejecución de un trozo de código varias veces

while (<condición>){
código que se ejecuta mientras se cumple la condición
}*/

// Ciclo infinito
while (true){
console.log("Ejecutando esta línea...") // Se ejecuta infinitamente
}

while (false){
console.log("Ejecutando esta línea...") // nunca se ejecuta
}

let frase = prompt("Ingresa una frase o 'salir'")
while (frase !== "salir") {
 console.log(frase)
  frase = prompt("Ingresa una frase o 'salir'")
}

//Ciclos
let i = 0  // inicializador
while (i < 10) {  // condición
console.log("Ejecutando: " + i)
i++  // incrementador
// i += 1
//i = i + 1
}

// FOR - un atajo para hacer los ciclos más cortos 
//Requiere una combinación de inicialización,
//condición e incremento
for(let i = 0; i<10; i++){
console.log("Ejecutando: " + i) //La misma información de arriba
}

//Para interrumpir una ejecución
let continuar = true
for (let = i = 0; i < 10 && continuar; i++) {
  console.log("Ejecutando: " + i)

if (i === 5) {
 continuar = false
 }
}

//Do... while
//Si queremos ejecutar al menos una vez el bloque de código
let frase;
do {
 frase = prompt("Ingresa una frase o 'Salir'")
   console.log(frase)
} while (frase !== "salir")


//Break y continue ---- Muy mala practica, hay una mejor aternativa