
function validar(){
    console.log ("entrando a validar");
    var respuesta1 = document.getElementById("chk3").checked;
    if( respuesta1==true){
       var ok =document.getElementById("ok");
       ok.src = "./img/Ok.png"
    } else{
        var ok =document.getElementById("ok");
        ok.src = "./img/NO.png"
    }
}
