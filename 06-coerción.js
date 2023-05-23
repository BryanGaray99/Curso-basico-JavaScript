// Coerción
//-----------------------------------
// La coerción consiste en transformar de un tipo de dato a otro de una variable. 
// Existen dos tipos de coerción: implícita y explícita.

// La coerción implícita consiste en la transformación de tipos mediante la ayuda de JavaScript. 
// La coerción explícita es la transformación de tipos de datos que nosotros hacemos para controlar el resultado. 

// Ejemplos:
// Coerción implícita
var a = 4 + '7';
console.log(`El resultado es ${a} y el tipo de dato es ${typeof(a)}`);
// output: El resultado es 47 y el tipo de dato es string

var b = 4 * '7';
console.log(`El resultado es ${b} y el tipo de dato es ${typeof(b)}`);
// output: El resultado es 28 y el tipo de dato es number

// Coerción explícita
var c = Number('4') + Number('7');
console.log(`El resultado es ${c} y el tipo de dato es ${typeof(c)}`);
// output: El resultado es 11 y el tipo de dato es number

var d = String(b) + String(c);
console.log(`El resultado es ${d} y el tipo de dato es ${typeof(d)}`);
// output: El resultado es 47 y el tipo de dato es string
