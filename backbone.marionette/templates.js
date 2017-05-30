
App.Views.Index = Mn.View.extend({

    htmlFile: 'views/index.html',

    el: $("#views"),

    initialize: function () {
    },

    render: function(){
        this.$el.html(this.html);
        return this;
    }
});

App.Views.Login = Mn.View.extend({
    htmlFile: 'views/login.html',

    el: $("#views"),

    initialize: function () {
    },

    render: function () {
        this.$el.html(this.html);
        return this;
    }
});

App.Views.Create = Mn.View.extend({
    htmlFile: 'views/create.html',

    el: $("#views"),

    initialize: function () {

    },

    render: function () {
        this.$el.html(this.html);
        return this;
    }
});

App.Views.LoginAgente = Mn.View.extend({
    htmlFile: 'views/loginAgente.html',

    el: $("#views"),

    initialize: function () {

    },

    render: function() {
        this.$el.html(this.html);
        return this;
    }
});

App.Views.Open = Mn.View.extend({
    htmlFile: 'views/open.html',

    el: $("#views"),

    initialize: function () {

    },

    render: function () {
        this.$el.html(this.html);
        return this;
    }
});

App.Views.Vista = Mn.View.extend({
    htmlFile: 'views/vista.html',

    el: $("#views"),

    initialize: function () {

    },

    render: function () {
        this.$el.html(this.html);
        return this;
    }
});