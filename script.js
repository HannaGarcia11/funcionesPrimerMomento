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