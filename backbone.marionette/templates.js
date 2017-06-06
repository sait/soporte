
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