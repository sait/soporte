
$(document).ready(function(){


  $("#formLogin").on("submit",function(e){
    e.preventDefault();
    var sesion;
      $.ajax({
          url: "http://localhost:5555/login",
          type: "POST",
          dataType: "json",
          data: JSON.stringify({
              "email":$("#txtEmail").val(),
              "passwd":$("#txtPass").val()
          }),
          success: function (data){
              console.log("SESION INICIADA");
              console.log(data);
              sesion = new App.Views.sesionCorrecta();
              sesion.render();
          },
          error: function (error) {
              console.log("CONTRASEÑA O CORREO INCORRECTO");
              console.log(error);
              sesion = new App.Views.sesionIncorrecta();
              sesion.render();
          }
      });
  });

  $("#formLoginAgente").on("submit",function(e){
    e.preventDefault();
    var sesion;
    $.ajax({
        url: "http://localhost:5555/login",
        type: "POST",
        dataType: "json",
        data: JSON.stringify({
            "email":$("#txtEmail").val(),
            "passwd":$("#txtPass").val()
        }),
        success: function (data){
            console.log("SESION INICIADA");
            localStorage.clear();
            localStorage.setItem("tokenAgente", data.token);
            localStorage.setItem("userAgente", data.name);
            sesion = new App.Views.sesionCorrecta();
            sesion.render();
            $("#nombreUsuario").html(data.name);
            window.location.hash = "#scp";
        },
        error: function (error) {
            console.log("CONTRASEÑA O CORREO INCORRECTO");
            localStorage.clear();
            sesion = new App.Views.sesionIncorrecta();
            sesion.render();
        }
    });
  });

  $("#FormOpen").on("submit",function(e){
    e.preventDefault();
      var respuesta;
    if($("#txtTema")[0].selectedIndex == 0 || $("#txtProducto")[0].selectedIndex == 0 || $("#txtTitulo").val() == "" || $("#txtDetalle").val() == ""){
        console.log("Asegurate de seleccionar tema, producto y no dejar cuadros sin llenar");
        respuesta = new App.Views.abrirTicketIncorrecto();
        respuesta.render();
        return;
    }
    var noCont = 0;
    $.ajax({
        async: false,
        url: "http://localhost:5555/api/contacts?search="+$("#txtEmail").val(),
        type: "GET",
        success: function (data) {
            if(data.rows.length == 1) {
                noCont = data.rows[0].idcont;
            }
        },
        error: function () {
            console.log("no hay conexion al server");
        }
    });
    if(noCont > 0){
        $.ajax({
            url: "http://localhost:5555/api/orders",
            type: "POST",
            dataType: "json",
            data: JSON.stringify({
                "idcont": noCont,
                "obs": $("#txtTitulo").val(),
                "duracion": 15,
                "mensaje": $("#txtDetalle").val(),
                "idclas": $("#txtTema")[0].selectedIndex,
                "idprod": $("#txtProducto")[0].selectedIndex
            }),
            success: function (data) {
                console.log("Se registró el ticket con el ID: "+data.data);
                respuesta = new App.Views.abrirTicketCorrecto();
                respuesta.render();
            },
            error: function (error) {
                console.log(error);
                respuesta = new App.Views.abrirTicketIncorrecto();
                respuesta.render();
            }
        });
    }
    else{
        console.log("El correo no esta registrado");
        respuesta = new App.Views.abrirTicketIncorrecto();
        respuesta.render();
    }
  });

  $("#formView").on("submit",function(e){
    e.preventDefault();
    var ticket;
      $.ajax({
          url : "http://localhost:5555/api/orders/"+$("#txtTicket").val(),
          type: "GET",
          success: function(data, textStatus, jqXHR)
          {
              if($("#txtEmail").val() == data.email)
              {
                  ticket = new App.Views.vistaTicketCorrecto();
                  ticket.render();
                  console.log("EMAIL CORRECTO");
              }
              else
              {
                  ticket = new App.Views.vistaTicketIncorrecto();
                  ticket.render();
                  console.log("EMAIL NO COINCIDE");
                  console.log(data);
              }
          },
          error: function (jqXHR, textStatus, errorThrown)
          {
              ticket = new App.Views.vistaTicketIncorrecto();
              ticket.render();
              console.log("NO ENCONTRADO");
          }
      });
  });

  $("#formCreate").on("submit",function(e){
    e.preventDefault();
    var registro;
    if($("#txtNombre").val() == "" || $("#txtEmpresa").val() == "" || $("#txtEmail").val()== "" || $("#txtTelefono").val() == "" || $("#txtPass1").val() == "" || $("#txtPass2").val() == ""){
        console.log("Asegurate de llenar los campos");
        registro = new App.Views.registroIncorrecto();
        registro.render();
        return;
    }
    var caEmail;
    $.ajax({
        url: "http://localhost:5555/api/contacts?search="+$("#txtEmail").val(),
        type: "GET",
        success: function (data) {
            caEmail = data.rows.length;
        },
        error: function (error) {
            console.log(error);
            registro = new App.Views.registroIncorrecto();
            registro.render();
        }
    });
    switch (caEmail){
        case 0:
            console.log("Correo sin registrar");
            break;
        case 1:
            console.log("Correo registrado");
            registro = new App.Views.registroAnterior();
            registro.render();
            return; break;
        default:
            console.log("Asegurate de escribir tu correo");
            registro = new App.Views.registroIncorrecto();
            registro.render();
            return; break;
    }
    if($("#txtPass1").val() != $("#txtPass2").val()){
        console.log("Las contraseñas no coinciden");
        registro = new App.Views.registroIncorrecto();
        registro.render();
        return;
    }
    $.ajax({
        url: "http://localhost:5555/api/contacts",
        type: "POST",
        dataType: "json",
        data: JSON.stringify({
            "nombre": $("#txtNombre").val(),
            "empresa": $("#txtEmpresa").val(),
            "email": $("#txtEmail").val(),
            "telefono": $("#txtTelefono").val(),
            "ext": $("#txtExt").val(),
            "pswd": $("#txtPass1").val()
        }),
        success: function (data) {
            console.log("Registrado con el ID: "+data.data);
            registro = new App.Views.registroCorrecto();
            registro.render();
        },
        error: function (error) {
            console.log(error);
            registro = new App.Views.registroIncorrecto();
            registro.render();
        }
    });
  });
});
