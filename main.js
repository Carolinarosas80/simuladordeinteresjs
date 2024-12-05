function calcularInteresCuotas(precioProducto, cantidad, numeroCuotas) {
    // Validar entradas
    if (precioProducto <= 0 || cantidad <= 0 || numeroCuotas <= 0) {
        return "Error: Todos los valores deben ser mayores a 0.";
    }

    // Calcular el costo total sin interés
    const costoTotal = precioProducto * cantidad;

    // Determinar la tasa de interés según el costo total
    let interesRate = 0;
    if (costoTotal < 500) {
        interesRate = 0.05; // 5% de interés
    } else if (costoTotal >= 500 && costoTotal <= 1000) {
        interesRate = 0.10; // 10% de interés
    } else {
        interesRate = 0.15; // 15% de interés
    }

    // Calcular el interés y el costo total con interés
    const interes = costoTotal * interesRate;
    const costoConInteres = costoTotal + interes;

    // Calcular el valor de cada cuota
    const valorCuota = costoConInteres / numeroCuotas;

    // Retornar los resultados
    return {
        costoTotalSinInteres: costoTotal.toFixed(2),
        tasaInteres: (interesRate * 100).toFixed(2) + "%",
        costoConInteres: costoConInteres.toFixed(2),
        valorCuota: valorCuota.toFixed(2),
    };
}

// Solicitar datos al usuario con prompt
const precioProducto = parseFloat(prompt("Ingrese el precio unitario del producto:"));
const cantidad = parseInt(prompt("Ingrese la cantidad de productos:"));
const numeroCuotas = parseInt(prompt("Ingrese el número de cuotas (por ejemplo, 3, 6, 12):"));

// Llamar a la función y manejar el resultado
const resultado = calcularInteresCuotas(precioProducto, cantidad, numeroCuotas);

// Mostrar resultados al usuario
if (typeof resultado === "string") {
    alert(resultado); // Mostrar error si hay datos inválidos
} else {
    alert(`
      Resumen del cálculo:
      - Costo total sin interés: $${resultado.costoTotalSinInteres}
      - Tasa de interés aplicada: ${resultado.tasaInteres}
      - Total con interés: $${resultado.costoConInteres}
      - Pago por cuota (${numeroCuotas} cuotas): $${resultado.valorCuota}
    `);
}

