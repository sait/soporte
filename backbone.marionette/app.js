
$(document).ready(function () {

    if(localStorage.length > 0) {
        $.ajaxSetup({
            contentType: "application/json",
            beforeSend: function (xhr) {
                console.log("TOKEN ESTABLECIDO");
                var token = localStorage.getItem("tokenAgente");
                token ? xhr.setRequestHeader("X-Token", token) : null;
                //console.log(xhr);
                //console.log(token);
            },
            statusCode: {
                200: function () {
                    console.log("200");
                },
                401: function () {
                    console.log("401");
                },
                403: function () {
                    console.log("403");
                }
            }
        });
    }
    else {
        console.log("NO HAY SESIONES ABIERTAS");
    }

    if(localStorage.getItem("userAgente") != null){
        $("#nombreUsuario").html(localStorage.getItem("userAgente"));
    }
    else{
        $("#nombreUsuario").html("Usuario Invitado");
    }
});

