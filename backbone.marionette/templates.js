
App.Views.Index = Mn.View.extend({

    htmlFile: 'views/index.html',

    el: "#views",

    initialize: function () {
    },

    render: function(){
        this.$el.html(this.html);
        return this;
    }
});

App.Views.Login = Mn.View.extend({
    htmlFile: 'views/login.html',

    el: "#views",

    initialize: function () {
    },

    render: function () {
        this.$el.html(this.html);
        return this;
    }
});

App.Views.Create = Mn.View.extend({
    htmlFile: 'views/create.html',

    el: "#views",

    initialize: function () {

    },

    render: function () {
        this.$el.html(this.html);
        return this;
    }
});

App.Views.LoginAgente = Mn.View.extend({
    htmlFile: 'views/loginAgente.html',

    el: "#views",

    initialize: function () {

    },

    render: function() {
        this.$el.html(this.html);
        return this;
    }
});

App.Views.Open = Mn.View.extend({
    htmlFile: 'views/open.html',

    el: "#views",

    initialize: function () {

    },

    render: function () {
        this.$el.html(this.html);
        return this;
    }
});

App.Views.Vista = Mn.View.extend({
    htmlFile: 'views/vista.html',

    el: "#views",

    initialize: function () {

    },

    render: function () {
        this.$el.html(this.html);
        return this;
    }
});

App.Views.vistaTicketCorrecto = Mn.View.extend({
    htmlFile: 'views/alertas/emailCorrecto.html',

    el: "#alertaVista",

    initialize: function () {

    },

    render: function(){
        this.$el.html(this.html);
        return this;
    }
});

App.Views.vistaTicketIncorrecto = Mn.View.extend({
    htmlFile: 'views/alertas/emailIncorrecto.html',

    el: "#alertaVista",

    initialize: function () {

    },

    render: function(){
        this.$el.html(this.html);
        return this;
    }
});

App.Views.abrirTicketCorrecto = Mn.View.extend({
    htmlFile: 'views/alertas/abrirTicketCorrecto.html',

    el: "#alertaAbrir",

    initialize: function () {

    },

    render: function(){
        this.$el.html(this.html);
        return this;
    }
});

App.Views.abrirTicketIncorrecto = Mn.View.extend({
    htmlFile: 'views/alertas/abrirTicketIncorrecto.html',

    el: "#alertaAbrir",

    initialize: function () {

    },

    render: function(){
        this.$el.html(this.html);
        return this;
    }
});

App.Views.sesionCorrecta = Mn.View.extend({
    htmlFile: 'views/alertas/sesionCorrecta.html',

    el: "#alertaLogin",

    initialize: function () {

    },

    render: function(){
        this.$el.html(this.html);
        return this;
    }
});

App.Views.sesionIncorrecta = Mn.View.extend({
    htmlFile: 'views/alertas/sesionIncorrecta.html',

    el: "#alertaLogin",

    initialize: function () {

    },

    render: function(){
        this.$el.html(this.html);
        return this;
    }
});

App.Views.registroAnterior = Mn.View.extend({
    htmlFile: 'views/alertas/registroAnterior.html',

    el: "#alertaRegistro",

    initialize: function () {

    },

    render: function(){
        this.$el.html(this.html);
        return this;
    }
});

App.Views.registroCorrecto = Mn.View.extend({
    htmlFile: 'views/alertas/registroCorrecto.html',

    el: "#alertaRegistro",

    initialize: function () {

    },

    render: function(){
        this.$el.html(this.html);
        return this;
    }
});

App.Views.registroIncorrecto = Mn.View.extend({
    htmlFile: 'views/alertas/registroIncorrecto.html',

    el: "#alertaRegistro",

    initialize: function () {

    },

    render: function(){
        this.$el.html(this.html);
        return this;
    }
});

App.Views.SCP = Mn.View.extend({
    htmlFile: 'views/scp.html',

    el: "#views",

    initialize: function () {

    },

    render: function(){
        this.$el.html(this.html);
        return this;
    }
});

App.Views.tituloControl = Mn.View.extend({
    htmlFile: 'views/encabezados/tituloControl.html',

    el: "#encabezadoSCP",

    initialize: function () {

    },

    render: function(){
        this.$el.html(this.html);
        return this;
    }
});

App.Views.tituloUsuarios = Mn.View.extend({
    htmlFile: 'views/encabezados/tituloUsuarios.html',

    el: "#encabezadoSCP",

    initialize: function () {

    },

    render: function(){
        this.$el.html(this.html);
        return this;
    }
});

App.Views.tituloTickets = Mn.View.extend({
    htmlFile: 'views/encabezados/tituloTickets.html',

    el: "#encabezadoSCP",

    initialize: function () {

    },

    render: function(){
        this.$el.html(this.html);
        return this;
    }
});

App.Views.titoloReportes = Mn.View.extend({
    htmlFile: 'views/encabezados/tituloReportes.html',

    el: "#encabezadoSCP",

    initialize: function () {

    },

    render: function(){
        this.$el.html(this.html);
        return this;
    }
});

App.Views.titoloConcimiento = Mn.View.extend({
    htmlFile: 'views/encabezados/tituloConocimiento.html',

    el: "#encabezadoSCP",

    initialize: function () {

    },

    render: function(){
        this.$el.html(this.html);
        return this;
    }
});

App.Views.layoutSCP = Mn.View.extend({
    htmlFile: 'views/layouts/layoutSCP.html',

    el: "#contenidoSCP",

    initialize: function () {

    },

    render: function(){
        this.$el.html(this.html);
        return this;
    }
});

App.Views.opcionesControl = Mn.View.extend({
    htmlFile: 'views/opciones/opcionesControl.html',

    el: "#opcionesSCP",

    initialize: function () {

    },

    render: function(){
        this.$el.html(this.html);
        return this;
    }
});

App.Views.opcionesTicket = Mn.View.extend({
    htmlFile: 'views/opciones/opcionesTickets.html',

    el: "#opcionesSCP",

    initialize: function () {

    },

    render: function(){
        this.$el.html(this.html);
        return this;
    }
});

App.Views.contenidoTicketAbierto = Mn.View.extend({
    htmlFile: 'views/contenidos/contenidoTicketAbierto.html',

    el: "#vistaSCP",

    initialize: function () {

    },

    render: function(){
        this.$el.html(this.html);
        return this;
    }
});