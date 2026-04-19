const calcularPrecioFinal = (monto, medioPago) => {
    let desc = 0;

    if (monto < 200) {
        desc = 0;
    } else if ( monto >= 200 && monto <= 400) {
        switch (medioPago.toUpperCase()){
            case "E": desc = 0.30; break;
            case "D": desc = 0.20; break;
            case "C": desc = 0.10; break;
            default: return "ERROR: Medio de pago inexistente";
        }
    } else {
        descuento = 0.40;
    }
    
    const precioFinal = monto * (1 - desc)
    return precioFinal
}

console.log("Test ejercicio");

let m, p, f;

m = 150; p = "E"; f = calcularPrecioFinal(m, p);
console.log(`Monto: $${m} | Pago: ${p} | Final: $${f}`);

m = 300; p = "e"; f = calcularPrecioFinal(m, p);
console.log(`Monto: $${m} | Pago: ${p} | Final: $${f}`);

m = 350; p = "D"; f = calcularPrecioFinal(m, p);
console.log(`Monto: $${m} | Pago: ${p} | Final: $${f}`);

m = 400; p = "C"; f = calcularPrecioFinal(m, p);
console.log(`Monto: $${m} | Pago: ${p} | Final: $${f}`);

m = 500; p = "E"; f = calcularPrecioFinal(m, p);
console.log(`Monto: $${m} | Pago: ${p} | Final: $${f}`);

console.log(`Monto: $300 | Pago: X | Final: $${calcularPrecioFinal(300, "X")}`);