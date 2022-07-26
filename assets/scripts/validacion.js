function validarForm() {
    let nombre = document.querySelector(".formcontacto__input__nombre").value;
    let email = document.querySelector(".formcontacto__input__email").value;
    let asunto = document.querySelector(".formcontacto__input")
    let mensaje = document.querySelector(".formcontacto__textarea").value;
    let expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (nombre == "" || email == "" || mensaje == "" || asunto == "") { //si hay campos vacíos
        alert("Favor de completar todos los campos");
        formularioCompleto = false;
        return;
    } else if (!expr.test(email)) { //compruebo formato cuenta de email
        alert("ERROR: " + email + "' no es una dirección de correo válida");
        formularioCompleto = false;
        return;
    } else {
        formularioCompleto = true;
    };
}