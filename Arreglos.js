/*Arreglos
un arrego es una lista ordenada de elementos
los elementos pueden ser de cualquier tipo:
números, booleanos, strings, otros arreglos u objetos*/
const arr =[1, "Mileidy", true, [1, "Felipe"]] //También se le llaman vectores

//Obtener la longitud del arreglo
console.log("Longitud"arr.length)

//Obtener el valor de una posición --- Empieza de 0
console.log(arr[0])
console.log(arr[1])
console.log(arr[2])
console.log(arr[3]) // [1, "Felipe"]
console.log(arr[3][1]) // Felipe

//Recorrer un arreglo (ciclos)
const arr =[1, "Mileidy", true, [1, "Felipe"]]
for (let i=0; i < arr.length; i++){
 console.log(i + ": + arr[i])
}

//Reemplazar un elementos
const arr =[1, "Mileidy", true, [1, "Felipe"]]
arr[0] = 200
console.log(arr) //El 1 se cambio a 200

//Insertar nuevos elementos
//Agregar un elemento al final de la lista .push 
const arr =[1, "Mileidy", true, [1, "Felipe"]]
arr.push("Samuel")  //Va al final
arr.splice(1, 0, 333) //Otra posición 
console.log(arr)

//Eliminar elementos
const arr =[1, "Mileidy", true, [1, "Felipe"]]
arr.splice(1, 1) //Eliminar un elementos y la cantidad
console.log(arr)

//Unir los elementos en un string
const arr =[1, "Mileidy", true, [1, "Felipe"]]
console.log(arr.join(" ")) //se le puede agregar separadores - / 

//Separar los elementos del string
const str = "¿Hola cómo están?"
console.log(str.split(" ")) //Contar el número de palabras

const nums = [1, 2, 3, 4, 5, 6, 7, 8] //imprimir número pares
for (let i=0; i < nums.length; i++) {
 if (nums[i] % 2 ===0) {
  console.log(nums[i])
 }
}