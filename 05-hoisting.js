// Hoisting
//-----------------------------------

// Hoisting es un término para describir que las declaraciones de variables y funciones son desplazadas 
// a la parte superior del scope más cercano, scope global o de función. Esto sucede solamente con las 
// declaraciones y no con las asignaciones.

// El código permanece igual, solo es una interpretación del motor de JavaScript. 
// El hoisting solo sucede con function y var.

// Ejemplo con Variables
console.log(miNombre);
var miNombre = "Mano";
// output: undefined
// Por interno lo que sucede es que el JIT compiler del motor de compilación de Javascript toma la 
// variable no definida y le asigna el valor undefined de la siguiente manera: var miNombre = undefined;


// Ejemplo con funciones
saludar();

function saludar() {
    console.log("Hola!");
}
// output: Hola! 
// De igual manera por el hoisting la funcion declarada va a la parte superior para la compilación, por 
// tanto todo funciona correctamente


// Las buenas prácticas indican que las funciones se declaran al inicio del programa