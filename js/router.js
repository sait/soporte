/**
 * Created by xerardoo on 7/1/16.
 */

App.Utils.loadTemplates(App.Views)
    .done(function () {

        var container = $('#views');

        var router = Backbone.Router.extend({

            routes: {
                "": "index",
                "login": "login",
                "create": "create",
                "open":"open",
                "loginAgente":"loginAgente",
                "vista":"vista"

            },

            index: function () {
                console.log("index");

                container.html(new App.Views.Index().render().el)
            },

            login: function () {
                console.log("login");
                container.html(new App.Views.Login().render().el)
            },

            create: function(){
                console.log("create");
                container.html(new App.Views.Create().render().el)
            },

            open: function(){
                console.log("open");
                container.html(new App.Views.Open().render().el)
            },

            loginAgente: function(){
                console.log("loginAgente");
                container.html(new App.Views.LoginAgente().render().el)
            },

            vista: function(){
                console.log("vista");
                container.html(new App.Views.Vista().render().el)
            }
        });


        new router();
        Backbone.history.start();
    });