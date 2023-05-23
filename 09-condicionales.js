// Condicionales
//-----------------------------------

// Los condicionales son estructuras de control que te permiten evaluar diferentes expresiones 
// y realizar determinadas acciones en JavasScript.

// Condicional if - else (if - si, else - si no) 
// Lo que va dentro del if tiene que ser true para que se ejecute su bloque de código
if (true) {
    console.log("Bienvenido");
} else {
    console.log("No puede ingresar");
}

// Else if permite evaluar otra condición aparte de la que evalua if
// Este proceso se llama anidar condicionales y se puede concatenar cualquier cantidad de else if
var edad = 75;
if (edad < 17) {
    console.log("Menor de edad");
} else if (x > 65){
    console.log("Tercera edad");
} else {
    console.log("Mayor de edad");
}

// Operador ternario: Permite evaluar una condición con la siguiente estructura:
// condición ? Acción-True : Acción-False;
var país = 'CO';

(país == 'EC') 
    ? console.log("Eres ecuatoriano, bienvenido!")
    : console.log("Eres extranjero, bienvenido!");

// Juego piedra papel o tijera con los conceptos hasta el tema 9
var usuarioElige = "Piedra";
var pcElige = "Tijera";

var juegoPPT = function (usuarioElige, pcElige) {
    if (usuarioElige === "Piedra" && pcElige === "Piedra"
        || usuarioElige === "Papel" && pcElige === "Papel"
        || usuarioElige === "Tijera" && pcElige === "Tijera"){
        console.log("Empate!")
    }
    else if (usuarioElige === "Piedra" && pcElige === "Tijera"
        || usuarioElige === "Papel" && pcElige === "Piedra"
        || usuarioElige === "Tijera" && pcElige === "Papel"){
        console.log("Has ganado!");
    }
    else {
        console.log("Has perdido");
    }
}
juegoPPT(usuarioElige, pcElige);