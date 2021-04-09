let numeros []
let numero = prompt("Por favor digita un número")

for(let i = 0;  i < numero; i++) {
 numeros.push(i)
}
 numeros.splice(1,1)

for(let i = 0; i <numeros.length; i++) {
  console.log(numeros[i])
}