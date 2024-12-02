// Declaración de variables
var variableVar = 5;
let variableLet = "cosa";
const variableConst = 15;

// Imprimir el tipo de cada variable
console.log(typeof variableVar); // "number"
console.log(typeof variableLet); // "number"
console.log(typeof variableConst); // "number"

// Intentar reasignar una nueva variable al const
try {
  variableConst = 20; // Esto dará error
} catch (error) {
  console.log("Error: No se puede reasignar un valor a una variable const.");
}
