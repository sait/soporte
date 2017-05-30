
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
    console.log("Tema:\n",$("#txtTema").val());
    console.log("Producto:\n",$("#txtProducto").val());
    console.log("Correo:\n",$("#txtEmail").val());
    console.log("Nombre:\n",$("#txtNombre").val());
    console.log("Telefono:\n",$("#txtTelefono").val());
    console.log("EXT:\n",$("#txtExt").val());
    console.log("Titulo:\n",$("#txtTitulo").val());
    console.log("Detalle:\n",$("#txtDetalle").val());
  });

  $("#formView").on("submit",function(e){
    e.preventDefault();
    console.log("Email:\n",$("#txtEmail").val());
    console.log("Ticket:\n",$("#txtTicket").val());
  });

  $("#formCreate").on("submit",function(e){
    e.preventDefault();
    console.log("Email:\n",$("#txtEmail").val());
    console.log("Nombre:\n",$("#txtNombre").val());
    console.log("Télefono:\n",$("#txtTelefono").val());
    console.log("EXT:\n",$("#txtExt").val());
    console.log("Zona Horaria:\n",$("#txtZona").val());
    console.log("Horario de Verano\n",$("#txtVerano").is(":checked"));
    console.log("Contraseña 1:\n",$("#txtPass1").val());
    console.log("Contraseña 2:\n",$("#txtPass2").val());
  });
});
