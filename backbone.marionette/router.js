/**
 * Created by Ammi on 27/05/2017.
 */

App.Utils.loadTemplates(App.Views).done(function () {

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
            console.log("Panel de Control");
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
            console.log("Usuarios");
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
            console.log("Tickets");
            if(localStorage.getItem("tokenAgente") != null){
                window.location.href = "#scp/tickets/open"
            }
            else {
                window.location.href = "#loginAgente";
            }
        },

            openedTickets: function () {
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
            },

            answeredTickets: function () {
                scp.render();
                $("#liTickets").addClass("active");
                var tituloTickets = new App.Views.tituloTickets();
                tituloTickets.render();
                var layoutSCP = new App.Views.layoutSCP();
                layoutSCP.render();
                var opcionesTicket = new App.Views.opcionesTicket();
                opcionesTicket.render();
                $("#liTicketRespondido").addClass("active");
            },

            overdueTickets: function () {
                scp.render();
                $("#liTickets").addClass("active");
                var tituloTickets = new App.Views.tituloTickets();
                tituloTickets.render();
                var layoutSCP = new App.Views.layoutSCP();
                layoutSCP.render();
                var opcionesTicket = new App.Views.opcionesTicket();
                opcionesTicket.render();
                $("#liTicketAtrasado").addClass("active");
            },

            closedTickets: function () {
                scp.render();
                $("#liTickets").addClass("active");
                var tituloTickets = new App.Views.tituloTickets();
                tituloTickets.render();
                var layoutSCP = new App.Views.layoutSCP();
                layoutSCP.render();
                var opcionesTicket = new App.Views.opcionesTicket();
                opcionesTicket.render();
                $("#liTicketCerrado").addClass("active");
            },

            newTicket: function () {
                scp.render();
                $("#liTickets").addClass("active");
                var tituloTickets = new App.Views.tituloTickets();
                tituloTickets.render();
                var layoutSCP = new App.Views.layoutSCP();
                layoutSCP.render();
                var opcionesTicket = new App.Views.opcionesTicket();
                opcionesTicket.render();
                $("#liTicketNuevo").addClass("active");
            },

        reportes: function () {
            console.log("Reportes");
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
            console.log("Conocimiento");
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
        }
    });

    new SupportRouter();
    Backbone.history.start();
});


