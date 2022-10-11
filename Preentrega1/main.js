//==========================  VARIABLES Y CONSTANTES
const comisionClasica = 0.13;
const comisionPremium = 0.28;
const iibb = 0.05;
const iva = 0.21;
let textoCalculadoras = "Calculadoras de Ecommerce disponibles (Ingresa un Número): \n1. Calculadora de margen (ganancia). \n2. Calculadora de comisión plataforma. \n3. Calculadora de Impuestos. \nIngresa salir para finalizar."

let calculadora = prompt(`${textoCalculadoras}`);

while(calculadora != "salir"){
    switch(calculadora){

    case "1": //CALCULADORA DE MARGEN
        alert("Vamos a calcular el margen de un producto en función de su costo y precio de venta. Enter para continuar");

        let cantidadProductosMargen = prompt("Cuantos productos quiere calcular el margen? (Ingrese un número)");

        for(i=1; i <= cantidadProductosMargen; i++){
            console.log(`Producto ${i}: ${calculadoraMargen()}`);
            };

        alert(`Los margenes de los productos (${cantidadProductosMargen}) se encuentran en el console log. Por favor, verificar.`);

        calculadora = prompt(`${textoCalculadoras}`);
      
    break;

    case "2": //CALCULADORA DE COMISIÓN PLATAFORMA
        alert("Vamos a calcular la comisión de la plataforma en función del tipo de publicación. Enter para continuar.");

        let cantidadPublicaciones = prompt("Cuantas publicaciones quiere calcular su comision? (Ingrese un número)");

        for(i=1; i <= cantidadPublicaciones; i++){
            console.log(`Publicación ${i}: ${calculadoraComision()}`);
        };

        alert(`La comisión de las publicaciones (${cantidadPublicaciones}) se encuentran en el console log. Por favor, verificar.`);

        calculadora = prompt(`${textoCalculadoras}`);
    
    break;

    case "3": //CALCULADORA DE IMPUESTOS
        alert("Vamos a calcular el IVA y el IIBB en función del precio de venta de su producto. Enter para continuar.");

        let cantidadProductosImpuestos = prompt("Cuantos productos quiere calcular sus impuestos? (Ingrese un número)"); 

        for(i=1; i<=cantidadProductosImpuestos; i++){
            console.log(`Producto ${i}: ${calculadoraImpuestos()}`);
        };

        alert(`Los impuestos de los productos (${cantidadProductosImpuestos}) se encuentran en el console log. Por favor, verificar.`);

        calculadora = prompt(`${textoCalculadoras}`);

    default:
        alert("No es una opción valida."); 
        calculadora = prompt(`${textoCalculadoras}`);
    }
}

alert("Gracias por utilizar la calculadora de ecommerce. Presione F5 para repetir.")


//========================== FUNCIONES

function calculadoraMargen(){
    let costo = prompt(`Indique el costo del producto ${i}`);
    let pvp = prompt(`Indique el precio de venta del producto ${i}`);
    let margen = ((pvp - costo)/ pvp ) * 100;
    return (`Costo: $${costo}, Pvp: $${pvp}, Margen: ${margen}%, Margen en pesos: $${pvp - costo}.`);
}

function calculadoraComision(){
    let tipoPublicacion = prompt(`¿Que tipo de publicación es su producto ${i}, Clasica o Premium?`);
    if(tipoPublicacion=="clasica"){
        let pvp = prompt(`Indique el precio de venta de la publicación ${i}`);
        let comision =  pvp * comisionClasica;
        return (`Tipo: Clasica, $${comision} de comisión, en porcentaje un 13% de $${pvp}.`);
    }else if(tipoPublicacion=="premium"){
        let pvp = prompt(`Indique el precio de venta de la publicación ${i}`);
        let comision =  pvp * comisionPremium;
        return (`Tipo: Premium, $${comision} de comisión, en porcentaje un 28% de $${pvp}.`);
    }else{
        return "No es un tipo de publicación valida. Intente nuevamente";
    };
}

function calculadoraImpuestos(){
    let pb = parseInt(prompt(`Indique el precio bruto del producto ${i}`));
    let ivaCalculado = pb*iva;
    let iibbCalculado = pb*iibb;
    let pvp = pb+ivaCalculado+iibbCalculado;
    return (`Precio Bruto $${pb} + IVA $${ivaCalculado} + IIBB $${iibbCalculado} = $${pvp} (Precio de venta).`)
}


