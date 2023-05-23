// For y For...of
//-----------------------------------------

// Un bucle (loop) o ciclo repetitivo es una estructura de control que te permite realizar 
// una o varias instrucciones mientras una condición sea verdadera.
// Para el ciclo for conocemos la cantidad de veces que la estructura repetirá una o varias instrucciones.

// La condición consta de tres partes:
// Inicio: se debe inicializar una variable que será evaluada en la expresión a comparar. 
//          Esta variable puede ser declarada dentro o fuera de la condición.
// Comparación: es una expresión que debe cumplir la variable inicial, cuando no se cumpla, el ciclo termina.
// Pasos: son los intervalos que cambiará la variable inicial, mientras cumpla con la expresión de comparación.

var galaxies = ["Milky-Way", "Andromeda", "Whirpool", "Sombrero"]

var imprimirGalaxies = function (array) {
    for (var i = 0; i < array.length; i++) {
        console.log(`Galaxia ${i}: ${array[i]}`);
    }
}
imprimirGalaxies(galaxies);

// El ciclo for ... of es una variación del ciclo for que se utiliza para recorrer los valores de los elementos de un array.
// Con este ciclo no podemos acceder al índice de la misma manera que con una variable para iterar i
var galaxies2 = ["Triangulum ", "Centaurus-A", "Pinwheel", "Sculptor"]
var imprimirGalaxies2 = function (array) {
    for (var elemento of array) {
        console.log(`Galaxia: ${elemento}`);
    }
}
imprimirGalaxies2(galaxies2);

// Limitaciones del ciclo for … of
// El ciclo for ... of solo accede al valor de cada uno de los elementos del array. Por consiguiente, 
// si quieres cambiar el array original, no podrás, porque necesitas su índice para acceder y cambiar su valor.
var numbers = [5, 4, 3, 2, 1]

// No cambia el array original
for (var number of numbers) {
  number = number * 2
}

console.log(numbers) // [5, 4, 3, 2, 1]

// Cambia el array original
for(var i=0; i < numbers.length; i++){
    numbers[i] = numbers[i] * 2
}

console.log(numbers) // [ 10, 8, 6, 4, 2 ]