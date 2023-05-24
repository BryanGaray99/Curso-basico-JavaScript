// Ciclo While
//-------------------------------------------

// El bucle while recorre un bloque de código siempre que una condición especificada sea verdadera.
// Para el ciclo while no conocemos la cantidad de veces que la estructura repetirá una o varias instrucciones. 
// Aunque también se puede acoplar para que realice un determinado número de repeticiones.

var galaxies = ["Milky-Way", "Andromeda", "Whirpool", "Sombrero"];

function imprimirElemento(elemento) {
    console.log(`Galaxia ${elemento}`);
}

while(galaxies.length > 0) {
    console.log(galaxies);
    var elemento = galaxies.shift();
    imprimirElemento(elemento);
}

// Reto platzi
// En este desafío tu función solution recibirá 3 parámetros:
// estudiantes: un array de strings con varios nombres de estudiantes.
// deathCount: un número entero.
// nuevo: un string con el nombre de un nuevo estudiante (que no aparecía antes en el array).
// Tu función debe retornar un array de elementos con las siguientes indicaciones:

// Si el parámetro deathCount es igual a 0, debes retornar un array con los mismos elementos que tenía 
// el array de estudiantes y agregando el elemento nuevo al final.

// Si el parámetro deathCount es mayor a 0, debes retornar un array con los mismos elementos del array 
// estudiantes pero eliminando la cantidad de estudiantes que indica el número deathCount y agregando 
// el elemento nuevo al final.
function solution(estudiantes, deathCount, nuevo) {
    while (deathCount > 0) {
      estudiantes.pop();
      deathCount--;
    }
    estudiantes.push(nuevo);
    return estudiantes;
  }
  
solution(["Nico", "Zule"], 0, "Santi");
solution(["Juan", "Juanita", "Daniela"], 1, "Julian");
solution(["Nath", "Luisa", "Noru"], 2, "Cami");
