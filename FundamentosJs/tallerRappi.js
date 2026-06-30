//Parte 1 — Los datos del cliente

//Crea variables para guardar: el nombre del cliente y la ciudad
let nombreCliente = " Camila ";
let ciudad=" Bogota ";
//Rappi Prime o no (un valor de verdadero/falso).
let RappiPrime= false;
let subtotal="20000";
let valorDelDomicilio=3500;
let total=0;
const propinaSugerida=0.10


console.log(`Hola ${nombreCliente} tu pedido a domicilio en ${ciudad}`);

//Parte 2 — Los productos del pedido

//Crea una estructura de datos que guarde la lista de productos del pedido.
let pedidoProductos=["Hamburguesa", "Papas", "Gaseosa"];
//Imprime la lista completa de productos.
console.log(pedidoProductos);
//Imprime SOLO el primer producto de la lista.
console.log(pedidoProductos[0]);
//El cliente llama para agregar un producto más (un Postre).
//  Agrégalo a la lista e imprime la lista actualizada
pedidoProductos.push("Postre");
console.log(pedidoProductos)
//El cliente se arrepiente del último producto que agregó. Quítalo e imprime la lista de nuevo
pedidoProductos.pop();
console.log(pedidoProductos);
//Imprime cuántos productos tiene el pedido en total.
console.log(pedidoProductos.length);

//Parte 3 — El pedido completo como una ficha
const pedidoCompleto={
    nombreCliente:nombreCliente,
    ciudad:ciudad,
    productos:pedidoProductos,
    estado:"En preparación"
}

//Imprime el pedido completo
console.log(pedidoCompleto);
//Imprime solo el nombre del cliente, accediendo a él desde el pedido.
console.log(pedidoCompleto.nombreCliente);
//El pedido avanza: cambia el estado a En camino e imprime el pedido de nuevo.
pedidoCompleto.estado="En camino";
console.log(pedidoCompleto);

//Parte 4 — El cobro
//valor del domicilio

//total incorrecto
total=subtotal +valorDelDomicilio;
console.log("total incorrecto seria :"+ total);

//total correcto
total=Number(subtotal)+valorDelDomicilio;
console.log("total correcto seria :"+ total);

console.log(`Total a pagar por el pedido de  ${pedidoCompleto.nombreCliente} es ${total}`);
