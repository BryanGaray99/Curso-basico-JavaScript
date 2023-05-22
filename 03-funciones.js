// Funciones
//-----------------------------------

// Función: Las funciones son bloques de código que solucionan un problema específico 
// para ser reutilizados. Existen dos tipos de funciones: declarativas y expresivas.

// Dentro de las funciones se pueden pasar parámetros. Luego al llamar la función 
// en el espacio o posición de los parámetros ubicamos los argumentos que son los valores
// con los que deseamos que trabaje la función.

// Declarativas: Se hace usando la palabra resevada function
function declarativa() {
    // Bloque de código
}

// Expresión: Primero generamos una variable que guarda una función 
// En este caso la función es anónima ya que no le estamos dando un nombre. 
var expresiva = function() {
    // Bloque de código
}

//Ejemplos con parámetros y argumentos
function saludar(persona) {
    console.log("Hola " + persona);
    console.log(`Hola ${persona}`);
}
saludar("Mano");

function calcular(a, b, c) {
    var resultado = a * b / c;
    return resultado;
}
console.log(calcular(5, 4, 10));


// Hoisting: las declaraciones de variables y funciones son desplazadas 
// a la parte superior del scope más cercano, scope global o de función.
// Esto sucede solamente con las declaraciones y no con las asignaciones.

// Función declarativa
sumar(8, 9);
function sumar(a, b) {
    console.log( a + b );
}
// output: 17
// Podemos ubicar el llamado de la función arriba o abajo de la función.

// Función expresiva
restar(4, 3);
var restar = function(c, d) {
    console.log( c - d );
}
// output: TypeError: restar is not a function
// El llamado de la función expresiva tiene que ir abajo de la función.