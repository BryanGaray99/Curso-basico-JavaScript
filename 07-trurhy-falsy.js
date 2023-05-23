// Valores: Truthy y Falsy
//-----------------------------------

// Los valores truthy y falsy son valores verdaderos y falsos cuando se realiza una coerción 
// de cualquier tipo a booleano, respectivamente.

// Un valor falsy es aquel que es falso en un contexto booleano, estos son: 0, "" (string vacío), false, 
// NaN (Not a Number), undefined o null.
console.log(Boolean(0)); 
console.log(Boolean(null)); 
console.log(Boolean(NaN)); 
console.log(Boolean(undefined)); 
console.log(Boolean(false)); 
console.log(Boolean("")); 
//output: false

// Un valor truthy es aquel que es verdadero en un contexto booleano, son todos los valores que no sean falsy, 
// que especificamos en la anterior sección.
console.log(Boolean(1)); // 1 o cualquier número diferente de cero (0)
console.log(Boolean("a")); // cualquier caracter o espacio en blanco en el string
console.log(Boolean([])); // true aunque el array esté vacío
console.log(Boolean({})); // true aunque el objeto esté vacío
console.log(Boolean(function(){})); // Cualquier función es verdadera también
// output: true