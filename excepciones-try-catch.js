function dividirPorCien(numero) {
    try {
      if (numero === 0) {
        throw new Error("No se puede dividir entre cero.");
      }
      let resultado = 100 / numero;
      console.log("Resultado:", resultado);
    } catch (error) {
      console.log("Error:", error.message);
    }
  }
  
  // Llamar a la función con un número de ejemplo
  dividirPorCien(parseFloat(prompt("Ingresa un número para dividir 100 entre él:")));
  