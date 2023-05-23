// Arrays 
//---------------------------------------

// Un array es una estructura de datos que permite almacenar una serie de datos localizados por 
// índices y separados por comas.

var brightestStars = ["Betelguese", "Vega", "Canopus", "AlfaCentauri", "Sirius"];
console.log(brightestStars);
console.log(typeof(brightestStars)); //Output: objet

// Tamaño del array
console.log(brightestStars.length);

// El índice es la forma en que accedemos a los elementos de los arrays. En JavaScript, los índices 
// empiezan desde 0, es decir, la primera posición es el índice 0. Un array se inicia mediante la 
// sintaxis de corchetes [] y es tipo de dato objeto.
console.log(brightestStars[0]);
console.log(brightestStars[4]);

// La mutabilidad hace referencia a la capacidad de una estructura de datos a cambiar.
// Métodos de arrays:
// El método push agrega uno o varios elementos al final del array original. 
brightestStars.push("Arcturus", "Polaris");
console.log(brightestStars);

// El método pop extrae el elemento del final del array original.
brightestStars.pop("Polaris");
console.log(brightestStars);

// El método unshift agrega uno o varios elementos al inicio del array original.
brightestStars.unshift("Procyon");
console.log(brightestStars);

// El método shift extrae el elemento del inicio del array original.
brightestStars.shift("Procyon");
console.log(brightestStars);

// El método indexOf muestra el índice del elemento especificado como argumento.
var indiceEstrella = "Vega";
console.log(`Posición de ${indiceEstrella}:`);
console.log(brightestStars.indexOf(indiceEstrella));

// Reto
// En este desafío vas a recibir un parámetro arraySecreto en la función solution. 
// Debes retornar true si el primer elemento del arraySecreto es de tipo string y 
// debes retornar false si es de cualquier otro tipo.

// Input
// solution(["Huevo", "Gallina", "Vaca"])
// solution([1, "Gallina", "Vaca"])

// Output
// true
// false

// Propuestas:
function solution(arraySecreto) {
    var tipoElemento = typeof (arraySecreto[0]);
    if (tipoElemento === "string") {
      return true;
    } else {
      return false;
    }
  }
console.log(solution(["Huevo", "Gallina", "Vaca"]));
console.log(solution([1, "Gallina", "Vaca"]));

function solution2(arraySecreto) {
    return(typeof arraySecreto[0] === "string"? true : false)
  }
console.log(solution2(["Huevo", "Gallina", "Vaca"]));
console.log(solution2([1, "Gallina", "Vaca"]));

function solution3(arraySecreto) {
    return(typeof arraySecreto[0] == "string")
  }
console.log(solution3(["Huevo", "Gallina", "Vaca"]));
console.log(solution3([1, "Gallina", "Vaca"]));