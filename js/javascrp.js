let nombre = prompt("Hola! soy tu asistente de ventas! de Trivium. podrias decirme tu nombre?")

alert( nombre + " en trivium tenemos 3 tipos de productos cada uno con sus descuentos")


let valorfinal = 0
let cantidad = 0
let costo = 0
let descuento = 0

let producto2="";
while (producto2 !== "axe" && producto2 !== "dove" && producto2 !== "rexona" ) {
    let producto = prompt("Los productos disponibles son Axe, Dove y Rexona. ¿Cuál quisieras cotizar? (Para salir escribe 'esc')")
    let producto2 = producto.toLowerCase();
    
if (producto2 === "axe") {
    let cantidad =  prompt( "para los productos de " + producto + " el valor base es de 20 pesos la unidad y tenemos descuentos del 15% a partir de 100 unidades, cuantas unidades deseas cotizar " + nombre +"?" )
    // cantidad minima para descuento 100 unidades, descuento 15%
    costo=20
    descuento=0.85

    if (cantidad < 100) {
        let valorfinal= cantidad*costo
        alert( nombre + " el costo final de tu compra sera " + valorfinal + " pesos! visualiza la consola para mas info")
        console.log("la cantidad seleccionada fue " + cantidad+" unidades, con un costo unidario de "+ costo +" pesos y el valor final sera de " + valorfinal)
         
     }   
     else {
        let valorfinal= cantidad*costo*descuento
        alert( nombre + " el costo final de tu compra sera " + valorfinal + " pesos! visualiza la consola para mas info")
        console.log("la cantidad seleccionada fue " + cantidad+" unidades, con un costo unidario de "+ costo +" pesos, accediste a un descuento del 15% y el valor final sera de " + valorfinal)
    }


} else if (producto2 == "dove") {
    let cantidad =  prompt( "para los productos de " + producto + " el valor base es de 25 pesos la unidad y tenemos descuentos del 20% a partir de 200 unidades, cuantas unidades deseas cotizar " + nombre +"?" )
    // cantidad minima para descuento 200 unidades, descuento 20%
    costo=25
    descuento=0.80

    if (cantidad < 199) {
        let valorfinal= cantidad*costo
        alert( nombre + " el costo final de tu compra sera " + valorfinal + " pesos! visualiza la consola para mas info")
        console.log("la cantidad seleccionada fue " + cantidad+" unidades, con un costo unidario de "+ costo +" pesos y el valor final sera de " + valorfinal)
     }   
     else {
        valorfinal= cantidad*costo*descuento
        alert( nombre + " el costo final de tu compra sera " + valorfinal + " pesos! visualiza la consola para mas info")
        console.log("la cantidad seleccionada fue " + cantidad+" unidades, con un costo unidario de "+ costo +" pesos, accediste a un descuento del 20% y el valor final sera de " + valorfinal)
    }


} else if (producto2 == "rexona") {
    let cantidad =  prompt( "para los productos de " + producto + " el valor base es de 30 pesos la unidad y tenemos descuentos del 12% a partir de 150 unidades, cuantas unidades deseas cotizar " + nombre +"?" )
    // cantidad minima para descuento 200 unidades, descuento 20%
    costo=30
    descuento=0.88

    if (cantidad < 149) {
        let valorfinal= cantidad*costo
        alert( nombre + " el costo final de tu compra sera " + valorfinal + " pesos! visualiza la consola para mas info")
        console.log("la cantidad seleccionada fue " + cantidad+" unidades, con un costo unidario de "+ costo +" pesos y el valor final sera de " + valorfinal)
     }   
     else {
        valorfinal= cantidad*costo*descuento
        alert( nombre + " el costo final de tu compra sera " + valorfinal + " pesos! visualiza la consola para mas info")
        console.log("la cantidad seleccionada fue " + cantidad+" unidades, con un costo unidario de "+ costo +" pesos, accediste a un descuento del 12% y el valor final sera de " + valorfinal)
    }
        
} else if (producto2.toLowerCase() == "esc") {
    break;
  };
}

