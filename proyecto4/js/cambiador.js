function resaltar(clase) {
    console.log(" Resaltando familia:" + clase);
    todos();
    //let familias = document.getElementsByClassName(clase);
    let familias = document.querySelectorAll("."+clase);
    for (let i = 0; i < familias.length; i++) {
        familias[i].style.opacity = 1;
        console.log(i);
    }
}

function todos() {
    var imagenes = document.querySelectorAll("#divprincipal>img");
    for (i=0;i<imagenes.length;i++){
        imagenes[i].style.opacity="1";
    }
    
}
