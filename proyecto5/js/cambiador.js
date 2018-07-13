function seleccionar(clase) {
    console.log(" Seleccionando:" + clase);

    todos("0.2");
    let seleccionados = document.getElementsByClassName(clase);
    let seleccion = document.querySelectorAll("."+clase);
    for (let i = 0; i < seleccion.length; i++) {
        seleccion[i].style.opacity="1";
        console.log(i);
    }
}


function todos(opacidad) {
    var imagenes = document.querySelectorAll("#juegos>img");
    for (i=0;i<imagenes.length;i++){
        imagenes[i].style.opacity=opacidad;
    }
    
}