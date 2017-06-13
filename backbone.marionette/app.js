
$(document).ready(function () {

    $.ajaxSetup({
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
                },
                403: function () {
                    console.log("Autenticación Requerida");
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