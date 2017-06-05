
$(document).ready(function(){
  $("#formLogin").on("submit",function(e){
    e.preventDefault();
    console.log("Email:\n",$("#txtEmail").val());
    console.log("Pass:\n",$("#txtPass").val());
  });

  $("#formLoginAgente").on("submit",function(e){
    e.preventDefault();
    console.log("Email:\n",$("#txtEmail").val());
    console.log("Pass:\n",$("#txtPass").val());
  });

  $("#FormOpen").on("submit",function(e){
    e.preventDefault();
    if($("#txtTema")[0].selectedIndex == 0 || $("#txtProducto")[0].selectedIndex == 0 || $("#txtTitulo").val() == "" || $("#txtDetalle").val() == ""){
        console.log("Asegurate de seleccionar tema, producto y no dejar cuadros sin llenar");
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
                "idclas": $("#txtTema").val(),
                "idprod": $("#txtProducto").val()
            }),
            success: function (data) {
                console.log("Se registró el ticket con el ID: "+data.data);
            },
            error: function (error) {
                console.log(error);
            }
        });
    }
    else{
        console.log("El correo no esta registrado");
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
              if($("#txtEmail").val().toLowerCase() == data.email.toLowerCase())
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
    if($("#txtNombre").val() == "" || $("#txtEmpresa") == "" || $("#txtEmail").val()== "" || $("#txtTelefono").val() == "" || $("#txtPass1").val() == "" || $("#txtPass2").val() == ""){
        console.log("Asegurate de llenar los campos");
        return;
    }
    var caEmail;
    $.ajax({
        async: false,
        url: "http://localhost:5555/api/contacts?search="+$("#txtEmail").val(),
        type: "GET",
        success: function (data) {
            caEmail = data.rows.length;
        },
        error: function (error) {
            console.log(error);
        }
    });
    switch (caEmail){
        case 0:
            console.log("Correo sin registrar");
            break;
        case 1:
            console.log("Correo registrado");
            return; break;
        default:
            console.log("Asegurate de escribir tu correo");
            return; break;
    }
    if($("#txtPass1").val() != $("#txtPass2").val()){
        console.log("Las contraseñas no coinciden");
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
        },
        error: function (error) {
            console.log(error);
        }
    });
  });
});
