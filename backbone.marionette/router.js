/**
 * Created by Ammi on 27/05/2017.
 */

App.Utils.loadTemplates(App.Views).done(function () {

    var views = $("#vistaSCP");


    var index = new App.Views.Index();
    var login = new App.Views.Login();
    var create = new App.Views.Create();
    var open = new App.Views.Open();
    var loginAgente = new App.Views.LoginAgente();
    var vista = new App.Views.Vista();
    var scp = new App.Views.SCP();

    var SupportController = {
        index: function(){
            console.log("index");
            index.render();
        },

        login: function () {
            console.log("login");
            login.render();
        },

        create: function() {
            console.log("create");
            create.render();
        },

        open: function () {
            console.log("open");
            open.render();
        },

        loginAgente: function(){
            console.log("loginAgente");
            loginAgente.render();
        },

        vista: function(){
            console.log("vista");
            vista.render();
        },

        scp: function(){
            console.log("scp");
            if(localStorage.getItem("tokenAgente") != null) {
                window.location.href = "#scp/control";
            }
            else{
                window.location.href = "#loginAgente";
            }
        },

            control: function(){
                if(localStorage.getItem("tokenAgente") != null){
                    scp.render();
                    $("#liControl").addClass("active");
                    var tituloControl = new App.Views.tituloControl();
                    tituloControl.render();
                    var layoutSCP = new App.Views.layoutSCP();
                    layoutSCP.render();
                    var opcionesControl = new App.Views.opcionesControl();
                    opcionesControl.render();
                }
                else{
                    window.location.href = "#loginAgente";
                }
            },

            usuarios: function () {
                if(localStorage.getItem("tokenAgente") != null){
                    scp.render();
                    $("#liUser").addClass("active");
                    var tituloUsuarios = new App.Views.tituloUsuarios();
                    tituloUsuarios.render();
                }
                else{
                    window.location.href = "#loginAgente";
                }
            },

            tickets: function () {
                if(localStorage.getItem("tokenAgente") != null){
                    window.location.href = "#scp/tickets/open"
                }
                else {
                    window.location.href = "#loginAgente";
                }
            },

                openedTickets: function () {
                    if(localStorage.getItem("tokenAgente") != null) {
                        scp.render();
                        $("#liTickets").addClass("active");
                        var tituloTickets = new App.Views.tituloTickets();
                        tituloTickets.render();
                        var layoutSCP = new App.Views.layoutSCP();
                        layoutSCP.render();
                        var opcionesTicket = new App.Views.opcionesTicket();
                        opcionesTicket.render();
                        $("#liTicketAbierto").addClass("active");
                        var contenidoTicketAbierto = new App.Views.contenidoTicketAbierto();
                        contenidoTicketAbierto.render();

                    }
                    else{
                        window.location.href = "#loginAgente";
                    }
                },

                answeredTickets: function () {
                    if(localStorage.getItem("tokenAgente") != null) {
                        scp.render();
                        $("#liTickets").addClass("active");
                        var tituloTickets = new App.Views.tituloTickets();
                        tituloTickets.render();
                        var layoutSCP = new App.Views.layoutSCP();
                        layoutSCP.render();
                        var opcionesTicket = new App.Views.opcionesTicket();
                        opcionesTicket.render();
                        $("#liTicketRespondido").addClass("active");
                        var contenidoTicketRespondido = new App.Views.contenidoTicketRespondido();
                        contenidoTicketRespondido.render();
                    }
                    else{
                        window.location.href = "#loginAgente";
                    }
                },

                overdueTickets: function () {
                    if(localStorage.getItem("tokenAgente") != null) {
                        scp.render();
                        $("#liTickets").addClass("active");
                        var tituloTickets = new App.Views.tituloTickets();
                        tituloTickets.render();
                        var layoutSCP = new App.Views.layoutSCP();
                        layoutSCP.render();
                        var opcionesTicket = new App.Views.opcionesTicket();
                        opcionesTicket.render();
                        $("#liTicketAtrasado").addClass("active");
                        var contenidoTicketAtrasado = new App.Views.contenidoTicketAtrasado();
                        contenidoTicketAtrasado.render();
                    }
                    else{
                        window.location.href = "#loginAgente";
                    }
                },

                closedTickets: function () {
                    if(localStorage.getItem("tokenAgente") != null) {
                        scp.render();
                        $("#liTickets").addClass("active");
                        var tituloTickets = new App.Views.tituloTickets();
                        tituloTickets.render();
                        var layoutSCP = new App.Views.layoutSCP();
                        layoutSCP.render();
                        var opcionesTicket = new App.Views.opcionesTicket();
                        opcionesTicket.render();
                        $("#liTicketCerrado").addClass("active");
                        var contenidoTicketCerrado = new App.Views.contenidoTicketCerrado();
                        contenidoTicketCerrado.render();
                    }
                    else{
                        window.location.href = "#loginAgente";
                    }
                },

                newTicket: function () {
                    if(localStorage.getItem("tokenAgente") != null) {
                        scp.render();
                        $("#liTickets").addClass("active");
                        var tituloTickets = new App.Views.tituloTickets();
                        tituloTickets.render();
                        var layoutSCP = new App.Views.layoutSCP();
                        layoutSCP.render();
                        var opcionesTicket = new App.Views.opcionesTicket();
                        opcionesTicket.render();
                        $("#liTicketNuevo").addClass("active");
                        var contenidoTicketNuevo = new App.Views.contenidoTicketNuevo();
                        contenidoTicketNuevo.render();
                    }
                    else{
                        window.location.href = "#loginAgente";
                    }
                },

            reportes: function () {
                if(localStorage.getItem("tokenAgente") != null){
                    scp.render();
                    $("#liReportes").addClass("active");
                    var tituloReportes = new App.Views.titoloReportes();
                    tituloReportes.render();
                }
                else{
                    window.location.href = "#loginAgente";
                }
            },

            conocimiento: function () {
                if(localStorage.getItem("tokenAgente") != null){
                    scp.render();
                    $("#liBase").addClass("active");
                    var tituloConocimiento = new App.Views.titoloConcimiento();
                    tituloConocimiento.render();
                }
                else{
                    window.location.href = "#loginAgente";
                }
            }
    };

    var SupportRouter = Mn.AppRouter.extend({
        controller: SupportController,

        appRoutes:{
            "": "index",
            "login": "login",
            "create": "create",
            "open":"open",
            "loginAgente":"loginAgente",
            "vista":"vista",
            "scp": "scp",
                "scp/control": "control",
                "scp/users": "usuarios",
                "scp/tickets": "tickets",
                    "scp/tickets/open": "openedTickets",
                    "scp/tickets/answered": "answeredTickets",
                    "scp/tickets/overdue": "overdueTickets",
                    "scp/tickets/closed": "closedTickets",
                    "scp/tickets/new": "newTicket",
                "scp/reports": "reportes",
                "scp/knowledge": "conocimiento"
        },

        onRoute: function(name, path, args){
            /*console.log(name);
            console.log(path);
            console.log(args);*/
        }
    });

    new SupportRouter();
    Backbone.history.start();
});


