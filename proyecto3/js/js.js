var nombre;
var apellidos;
var dni;
var fechancto;
var hoy;
var telefon_o;
var e_mail;
var correo_postal
var seleccionado;
var precio;
var price1;
var price2;
var price3;
var price4;
var price5;
var price6;
var price7;

function validar() {
    console.log("Checking");

    nombre = document.getElementById("name").value;
    apellidos = document.getElementById("surname").value;
    dni = document.getElementById("id").value;


    if (nombre.trim() == "") {
        alert("DEBE INTRODUCIR SU NOMBRE");

    } else if (apellidos.trim() == "") {
        alert("DEBE INTRODUCIR SUS APELLIDOS");
    } else {
        console.log(nombre, apellidos);
    }
    mayorDeEdad();
}

function mayorDeEdad() {
    console.log("Calculating age");

    hoy = new Date();
    var anyoActual = hoy.getFullYear();
    console.log(anyoActual);
    anyoNacimiento = document.getElementById("date").value;
    console.log(anyoNacimiento);
    var edad = anyoActual - anyoNacimiento;
    console.log(edad);

    if (edad < 18) {
        alert(" LA EDAD MINÍMA DEBE SER DE 18 AÑOS, TIENES " + edad + " AÑOS ");
    }
    seleccionarcontacto();
}

function seleccionarcontacto() {
    console.log("Checking contact");

    telefon_o = document.getElementById("telefono").checked;
    e_mail = document.getElementById("email").checked;
    correo_postal = document.getElementById("correopostal").checked;

    if (telefon_o == false && e_mail == false && correo_postal == false) {
        alert("DEBE MARCAR AL MENOS UNO");
    }
    calcularprecio();
}

function calcularprecio() {

    seleccionado = false;
    precio = 0;
    price1 = 300;
    price2 = 200;
    price3 = 500;
    price4 = 400;
    price5 = 200;
    price6 = 300;
    price7 = 5800;

    var precio1 = document.getElementById("curso1").checked;
    var precio2 = document.getElementById("curso2").checked;
    var precio3 = document.getElementById("curso3").checked;
    var precio4 = document.getElementById("curso4").checked;
    var precio5 = document.getElementById("curso5").checked;
    var precio6 = document.getElementById("curso6").checked;
    var precio7 = document.getElementById("curso7").checked;

    if (precio1) {
        precio = precio + price1;
        seleccionado = true;
    }
    if (precio2) {
        precio += price2;
        seleccionado = true;
    }
    if (precio3) {
        precio += price3;
        seleccionado = true;
    }

    if (precio4) {
        precio += price4;
        seleccionado = true;
    }
    if (precio5) {
        precio += price5;
        seleccionado = true;
    }
    if (precio6) {
        precio += price6;
        seleccionado = true;
    }

    if (precio7) {
        precio += price7;
        seleccionado = true;
    }
    if (precio == 0) {
        alert(" DEBE SELECCIONAR UN CURSO ")
    } else {
        alert(" EL USUARIO " + nombre + "HA CONTRATADO CURSOS POR VALOR DE: " + precio);
    }
}

