function sumarNumeros(a, b) {
    let suma = a + b; // Variable local
    console.log("Suma dentro de la función:", suma);
    return suma;
  }
  
  let resultado = sumarNumeros(5, 7);
  console.log("Resultado fuera de la función:", resultado);
  
  // Intentar imprimir la variable 'suma' fuera de la función
  try {
    console.log(suma); // Esto dará error
  } catch (error) {
    console.log("Error: La variable 'suma' no está definida fuera de la función.");
  }
  