
$(document).ready(function () {

    $.ajaxSetup({
            async: true,
            contentType: "application/json",
            beforeSend: function (xhr) {
                if(localStorage.getItem("tokenAgente") != null){
                    console.log("TOKEN ESTABLECIDO CON SESION");
                    var token = localStorage.getItem("tokenAgente");
                    token ? xhr.setRequestHeader("X-Token", token) : null;
                }
                else{
                    console.log("SIN SESION");
                }
                if(localStorage.getItem("userAgente") != null){
                    $("#nombreUsuario").html(localStorage.getItem("userAgente"));
                }
                else {
                    $("#nombreUsuario").html("Usuario Invitado");
                }
            },
            statusCode: {
                401: function () {
                    console.log("401");
                    console.log("Inicio de sesion incorrecta");
                },
                403: function () {
                    console.log("Autenticación Requerida");
                    $("#nombreUsuario").html("Usuario Invitado");
                    localStorage.clear();
                    window.location.href = "#loginAgente";
                }
            }
    });

    if(localStorage.getItem("userAgente") != null){
        $("#nombreUsuario").html(localStorage.getItem("userAgente"));
    }
    else {
        $("#nombreUsuario").html("Usuario Invitado");
    }
});
