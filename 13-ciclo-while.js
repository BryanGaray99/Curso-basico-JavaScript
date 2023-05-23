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