function obtenerPedido() {
    let pedido ={
        conchudo:"",
        talla:"",
        color:""
    }

    let colores = document.getElementsByClassName("color");

    for (let i = 0; i < colores.length; i++) {
        if (colores[i].checked) {
            pedido.color = colores[i].value
        }
    }
    console.log(pedido)
}