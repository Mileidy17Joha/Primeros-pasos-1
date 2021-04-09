/*Obtener información del usuario
En el navegador podemos usar el comando prompt para pedirle información al usuario*/

var nombre = prompt("¿Cuál es tu nombre?")
console.log("Hola "  + nombre )

/*Convertir un string a un número
promprt siempre nos devuelve un string. Si queremos convertir el string a un número debemos usar parseInt*/

var edad = prompt("¿Cuál es tu edad")
edad = parseInt(edad)
console.log(edad + 2021)