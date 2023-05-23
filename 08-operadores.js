// Operadores
//-----------------------------------

// Operadores matemáticos u operadores binarios
console.log( 3 + 2 ); // Suma
console.log( 6 - 4 ); // Resta
console.log( 12 * 8 ); // División
console.log( 48 / 32 ); // Multiplicación

// Operador de concatenación +
console.log("20"+"23")

// Operador de negación !
console.log(!false);

// Operador de asignación  =
var a = 10;
console.log(a);

// Operador de comparación lógica "==", "===", "<", "<=",  ">", ">=",   
var a = 5;
var b = 10;
var c = "5";

console.log( a == b );
// output: false. 5 es diferente a 10, entonces es false

console.log( a == c );
// output: true. Se hace una coerción implicita y no se compara el tipo de valor (String o Number) sino el valor.

// Operador de comparación estricta === 
console.log ( a === c );
// output: false. Con === el valor y el tipo deben de ser iguales para ser true.

console.log( 5 < 10 ); // true
console.log( 10 <= 10 ); // true
console.log( 5 > 10 ); // false
console.log( 50 >= 100 ); // false

// Operadores logicos: ! equivalente a NOT, && equivalente a AND y || equivalente a OR
var e = 8;
var f = 16;
var g = 24;

console.log( e != f ); // true
console.log( f && g < e ); // false
console.log( e || f ) // 8

//  Operador de incremento y decremento
var edad = 23;
edad++; // aumenta en 1
edad--; // disminuye en 1
console.log(edad);

// Asignación combinada
var tareas = 5;
tareas += 3;
tareas -= 4;
tareas *= 2;
tareas /= 2;
console.log(tareas);
