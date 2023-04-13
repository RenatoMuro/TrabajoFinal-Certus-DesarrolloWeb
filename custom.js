
/* Obtener referia de los botones */
let botones = window.document.querySelectorAll("#catalogo > article > button");

/* Agregar el escuchar del evento click en los botones, ejecutar método */
botones.forEach(element => {
    element.addEventListener("click", agregarCarrito);
});

/* Método para agregar el producto al carrito */
function agregarCarrito(producto){
    /* Conseguir los datos de mi producto */
    let tituloProducto = producto.target.parentElement.querySelector("h3");
    let precioProducto = producto.target.parentElement.querySelector("p");
    let imagenProducto = producto.target.parentElement.querySelector("picture");

    /* Colocar en el modal */ 
    let modalCuerpo = document.querySelector("#ventanaCarrito > div > div > div.modal-body");

    /* Condicional para saber si está vacío */
    if(modalCuerpo.querySelector("p").innerHTML = "Su carrito está actualmente vacío. "){
        modalCuerpo.innerHTML = "";
    }
    modalCuerpo.innerHTML += '<h3>'+ tituloProducto.innerHTML+'</h3><p>'+precioProducto.innerHTML+'</p>'

    /* Avisar que se agregó al carrito */
    alert("Se agregó producto a su carrito.")
}