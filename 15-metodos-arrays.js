// // Métodos de arrays
// //-------------------------------------
// Existen métodos de arrays para recorrerlos, y devolver un valor o un array con nuevos resultados. 
// Entre estos están dos muy importantes: map y filter.
var nombre = ["Sirius", "Canopus", "Arcturus", "Alpha Centauri", "Vega", "Capella", "Rigel", "Procyon", "Achernar", 
                "Betelgeuse", "Hadar", "Altair", "Aldebaran", "Spica", "Antares", "Pollux", "Fomalhaut", "Deneb", "Regulus", "Adhara", 
                "Castor", "Gacrux", "Bellatrix", "Elnath", "Miaplacidus", "Alnilam", "Alphard", "Mirfak", "Wezen", "Menkalinan"];
var luminosidad = [-1.46, -0.72, -0.04, -0.01, 0.03, 0.08, 0.12, 0.37, 0.46, 0.50, 0.61, 0.76, 0.85, 0.97, 0.96, 1.14, 1.16, 1.16, 
                    1.35, 1.50, 1.58, 1.63, 1.63, 1.68, 1.70, 1.77, 1.85, 1.87, 1.97, 1.98];
var distancia = [8.6, 310.0, 36.7, 4.37, 25.0, 42.2, 860.0, 11.4, 139.0, 643.0, 490.0, 17.0, 65.1, 250.0, 550.0, 34.0, 25.0, 1000.0, 
                    79.0, 430.0, 52.7, 88.6, 240.0, 131.0, 110.0, 1350.0, 177.0, 3000.0, 1800.0, 81.0]; // En años luz

var listStars = [];

function star(nombre, luminosidad, distancia){
    this.nombre = nombre;
    this.luminosidad = luminosidad;
    this.distancia = distancia;
} 
for (var i = 0; i<30; i++){   
    var newStar = new star(nombre[i],luminosidad[i],distancia[i]);
    listStars.push(newStar);
}
// El método filter consiste en crear un nuevo array a partir de los elementos originales filtrados mediante una función 
// (callback) que indica la condición a cumplir y es inmutable. Si la condición se cumple, retorna el elemento completo.

// El método filter recibe dos argumentos:
    // La función que itera y evalúa si cada elemento del array si cumple con la condición especificada (obligatorio).
    // Un objeto al que puede hacer referencia el contexto this en la función. Si se lo omite, será undefined. 

// La función, que recibe como argumento el método filter, utiliza tres parámetros:
    // El valor actual del elemento iterado. Es decir, si es la primera iteración, será el primer elemento, y así sucesivamente.
    // El índice del elemento iterado. Es decir, si es la primera iteración, será el índice 0, y así sucesivamente.
    // El array que está iterando.

var brightestStars = listStars.filter( function (star) {
    return star.luminosidad < 0;
});
console.log(brightestStars);

// El método map es inmutable y consiste en crear un nuevo array a partir de los elementos originales transformados 
// mediante una función (callback).

// El método map recibe dos argumentos:
    // La función que itera y transforma cada elemento del array (obligatorio).
    // Un objeto al que puede hacer referencia el contexto this en la función. Si se lo omite, será undefined. 

// La función, que recibe como argumento el método map, utiliza tres parámetros opcionales:
    // El valor actual del elemento iterado. Es decir, si es la primera iteración, será el primer elemento, y así sucesivamente.
    // El índice del elemento iterado. Es decir, si es la primera iteración, será el índice 0, y así sucesivamente.
    // El array que está iterando.
console.log("Nombres de estrellas");
var nombresEstrellas = listStars.map( function(star) {
    return star.nombre;
});
console.log(nombresEstrellas);

// El método find () devuelve el primer valor que coincide de la colección. Una vez que coincida con el valor en los resultados, 
// no verificará los valores restantes en la colección de matriz. Si ningún elemento cumpla con la condición, retornará undefined.
console.log("Estrella buscada:")
var findStars = listStars.find( function(star) {
    return star.nombre === "Sirius";
});
console.log(findStars)

// El método forEach de los arrays consiste en ejecutar una función (callback) para cada uno de los elementos iterados. 
// Iterar significa repetir una acción varias veces. Este método no retorna ningún valor.
console.log("Listado de luminosidades")
var forEachStar = listStars.forEach( function(star) {
    console.log(star.luminosidad);
});

// El método some es inmutable y consiste retornar un valor lógico verdadero si existe al menos un elemento que cumpla 
// la condición establecida en la función (callback).
dist = 10
console.log(`Hay estrellas a menos de ${dist} años luz?`);
var distStars = listStars.some( function (star) {
    return star.distancia <= dist;
}); 
console.log(distStars);