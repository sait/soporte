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
            "vista":"vista"
        }
    });

    new SupportRouter();
    Backbone.history.start();
});


