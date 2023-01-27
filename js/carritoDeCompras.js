//Funciones para el almacenamiento y traer los datos que se almacenan
function guardarAlmacenamientoLocal(llave, valor_a_guardar) {
    localStorage.setItem(llave, JSON.stringify(valor_a_guardar))
}
function obtenerAlmacenamientoLocal(llave) {
    const datos = JSON.parse(localStorage.getItem(llave))
    return datos
}
let productos = obtenerAlmacenamientoLocal('productos') || [];

//Variables que traemos de nuestro HTML
const informacionCompra = document.getElementById('informacionCompra');
const contenedorCompra = document.getElementById('contenedorCompra');
const productosCompra = document.getElementById('productosCompra');
const contenedor = document.getElementById('contendor');
const carrito = document.getElementById('carrito');
const numero = document.getElementById('numero');
const header = document.getElemenById('header');
const total = document.getElementById('total');
const body = document.getElementById('body');
const x = document.getElementById('x');

//Variables que usaremos en nuestro proyecto
let lista = []
let valortotal = 0

/*
//Scroll de nuestra pagina
window.addEventListener("scroll", funcion () {
    if (contenedor.getBoundingClientRect().top < 10) {
        header.classList.add("scroll")
    }
    else {
        header.classList.remove("scroll")
    }
})
*/

window.addEventListener('load', () =>{
    
})