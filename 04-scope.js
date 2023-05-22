// Scope
//-----------------------------------

// Scope: El scope es cada uno de los entornos donde las variables tienen 
// alcance dentro del código de JavaScript. En otras palabras, determina que valor 
// tendrá la variable dependiendo dónde se encuentre.

// Un bloque es toda porción de código que está encerrada entre llaves {}, 
// estos pueden ser los bloques: función, if, else, while, y for

// Existen dos tipos de scope: global y local.

// Scope Global: Las variables globales son aquellas que se encuentran declaradas fuera de 
// los bloques de código o funciones. El scope global es el entorno donde las variables globales 
// pueden ser accedidas desde cualquier lugar de nuestro programa.

// Scope Local: Las variables locales son aquellas que se encuentran declaradas dentro de los 
// bloques de código o funciones. El scope local es el entorno donde las variables locales solo 
// se pueden acceder desde una función o bloque del programa.

// Ejemplo:

var nombre = "Bryan"; // var global

function nombreCompleto() {
    var apellido = "Garay"; // var local
    console.log(`${nombre} ${apellido}`); // Accedo a la var global en el scope local
}

nombreCompleto(); // output: Bryan Garay 

console.log(apellido); // output: apellido is not define. 
// En el scope global no se puede acceder a la var local
