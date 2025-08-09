// Función declarativa - consumo mensual (rwh)
function consumoMensual(){
    return 410;
}

// Función declarativa - tarifa base (rwh)
function tarifaBase(){
    return 620;
}

// Función expresión - cargo fijo por servicio
let cargoFijoServicio = function(){
    return 3500;
}

// Función expresión - valor IVA (19%)
let valorIva = function(){
    return 19;
}

// Función flecha - calcularSubtotal
let calcularSubtotal = () =>{
    return consumoMensual() * tarifaBase();
}

// Función flecha - calcularIva
let calcularIva = () =>{
    return calcularSubtotal() * (valorIva() / 100);
}

// Función flecha - total
let total = () =>{
    return calcularSubtotal() + calcularIva() + cargoFijoServicio();
}

// Función declarativa - mostrar factura
function mostrarFactura(){
    console.log("FACTURA MENSUAL DE ENERGÍA");
    console.log("---------------------------");
    console.log("Consumo mensual (kwh): ", consumoMensual(), "kwh");
    console.log("Tarifa por kwh: ", tarifaBase(), "pesos");
    console.log("Subtotal: ", calcularSubtotal(), "pesos");
    console.log("IVA (" + valorIva() + "%):", calcularIva(), "pesos");
    console.log("Cargo fijo:", cargoFijoServicio(), "pesos");
    console.log("-------------------------------");
    console.log("TOTAL A PAGAR:", total(), "pesos");
}

mostrarFactura();