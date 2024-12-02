let numeroPositivo;

do {
  numeroPositivo = parseFloat(prompt("Ingresa un número positivo:"));
} while (numeroPositivo <= 0);

console.log("Ingresaste un número positivo:", numeroPositivo);
