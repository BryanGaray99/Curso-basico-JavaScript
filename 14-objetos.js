// Objetos
//----------------------------------------------
// Un objeto es una estructura de datos que permite almacenar valores mediante 
// propiedad - valor a través de la sintaxis de llaves ({}) y separados por comas.

// En programación orientada a objetos, un objeto es una representación de la realidad, 
// en el cual sus características propias se definen como atributos y sus acciones se definen como métodos.
// En otras palabras, los atributos son las variables y los métodos son las funciones propias de cada objeto.

var naveEstelar = {
    codigo: "NCC-1701-D",
    nombre: "Enterprise-D",
    clase: "Galaxia",
    
    // También existen métodos que son funciones que realiza el objeto
    // Dentro del contexto de la función se usa el método .this para llamar una propiedad del objeto
    identificacionNave: function() {
        console.log(`Nave: Código - ${this.codigo} | Nombre - ${this.nombre}`);
    }
}
console.log(naveEstelar);

// Cómo acceder a una propiedad del objeto?
console.log(naveEstelar.nombre);
naveEstelar.identificacionNave();

// Constructores de objetos
// Una función constructora sirve para crear varios objetos a partir de nueva información, esto es recibido argumentos.
function Nave(codigo, nombre, clase) {
    this.codigo = codigo,
    this.nombre = nombre,
    this.clase = clase
}

// Instanciación: El proceso en el que se genera una objeto a partir de la plantilla u objeto que posee un constructor.
// Se usa la palabra reservada New.
var nave1 = new Nave("NCC-18253", "USS Potemkin", "Excelsior");
var nave2 = new Nave("NCC-62043", "USS Melbourne", "Excelsior");
var nave3 = new Nave("NCC-71099", "USS Challenger", "Galaxy");
var nave4 = new Nave("NCC-1701-D", "Enterprise-Dr", "Galaxy");

console.log(nave4);


// Ejemplo con ciclos y listados de información
var marca = [
    "Abarth", "Alfa Romeo", "Aston Martin","Audi", "Bentley","BMW","Cadillac","Caterham","Chevrolet",
    "Dacia","Ferrari","Fiat","Ford","Honda","Infiniti","Isuzu","Iveco","Jaguar","Citroen",  	 	 
]

var modelo = [
    "C-Max","Fiesta","Focus","Mondeo","Ka","S-MA","B-MAX","Grand C-Max","Tourneo Custom","Kuga","Galaxy",
    "Grand Tourneo Connect","Tourneo Connect","EcoSport","Tourneo Courier","Mustang","Transit Connect","Edge", "Ka+"
]

var anio = [
    "1988","1989","1978","1989","1928","1989","1968","1989","1888","1989","1988","1989","1938","1989","1988","1999",
    "1983","1989","1918"
]


function auto(marca, modelo, anio){
    this.marca = marca;
    this.modelo = modelo;
    this.anio = anio
    this.toString = function() {
        return `marca: '${this.marca}', modelo: '${this.modelo}', anio: '${this.anio}'`;
      };
}

for(var i = 0; marca.length > i && modelo.length > i && anio.length > i; i++){
    var nuevoAuto = new auto(marca[i], modelo[i], anio[i]);
    console.log(`${i + 1}. ${nuevoAuto}`);
}

// Desafío Platzi: 
// En este desafío vas a recibir un objeto car como parámetro de la función solution.
// Este objeto puede contener diferentes propiedades. Debes asegurarte de que tenga la 
// propiedad licensePlate (la placa del auto). Si sí la tiene, devuelve el objeto original 
// con la propiedad drivingLicense como true. Si no la tiene, devuelve el objeto original 
// con la propiedad drivingLicense como false.

function Car(color, brand, licensePlate) {
    this.color = color;
    this.brand = brand;
    this.licensePlate = licensePlate;
    this.drivingLicense = false;
}

function solution(car) {
if (car.licensePlate !== undefined && car.licensePlate !== null) {
    car.drivingLicense = true;
}
return car;
}

// Prueba 1
console.log(solution(new Car('red', 'Kia', undefined)));
// Resultado: { color: 'red', brand: 'Kia', drivingLicense: false }

// Prueba 2
console.log(solution(new Car('gray', 'Chevrolet', 'AAA111')));
// Resultado: { color: 'gray', brand: 'Chevrolet', licensePlate: 'AAA111', drivingLicense: true }

// Prueba 3
console.log(solution(new Car(undefined, undefined, 'RGB255')));
// Resultado: { licensePlate: 'RGB255', drivingLicense: true }
  