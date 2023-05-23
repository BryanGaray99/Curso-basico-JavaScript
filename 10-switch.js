// Switch
//-----------------------------------------

// La estructura switch es otra manera de evaluar condiciones, la diferencia con if es
// que las condiciones deben ser iguales a un caso o algo específico.

// En la estructura tenemos:

// Switch (condición) { 
//      case 1: 
//          bloque de código;
//          break;
//      case 2: 
//          bloque de código;
//          break;
//      ...
//      case n: 
//          bloque de código;
//          break; 
//      default:
//          bloque de código cuando no es ningun caso;
// }
// Si no ponemos el break no se pausa el switch y se ejecutan todos los otros casos hasta que haya un break

// Ejemplo:
var diaSemana = "Juercoles";
switch (true) {
    case diaSemana === "Lunes":
        console.log("Hoy es Lunes!");
        break;
    case diaSemana === "Martes":
        console.log("Hoy es Martes!");
        break;
    case diaSemana === "Miércoles":
        console.log("Hoy es Miércoles!");
        break;
    case diaSemana === "Jueves":
        console.log("Hoy es Jueves!");
        break;
    case diaSemana === "Viernes":
        console.log("Hoy es Viernes!");
        break;
    case diaSemana === "Sábado":
        console.log("Hoy es Sábado!");
        break;
    case diaSemana === "Domingo":
        console.log("Hoy es Domingo!");
        break;
    default:
        console.log("Hoy no es ningún día de la semana, lo que crea una paradoja espacio temporal que destruye el universo...")
}

// Ejemplo platzi 
// En el siguiente ejemplo dentro del condicional del switch(article) estamos escribiendo una palabra y si el caso tiene 
// un resultado igual a la palabra, entonces se considera true.
function solution(article) {
    switch (article) {
      case "computadora":
        return"Con mi computadora puedo programar usando JavaScript";
      case "celular":
        return"En mi celular puedo aprender usando la app de Platzi";
      case "cable":
        return"¡Hay un cable en mi bota!";
      default:
        return "Artículo no encontrado";
    }
}

console.log(solution("computadora"));
console.log(solution("celular"));
console.log(solution("cable"));