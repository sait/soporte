/**
 * Created by xerardoo on 7/1/16.
 */

App.Views.Login = Backbone.View.extend({

    htmlFile: 'views/login/template.html',

    initialize: function () {
        this.a = 0;
    },

    render: function () {
        this.$el.html(this.html);
        this.form = this.$el.find("#formLogin");
        this.form.on("submit", this.submit);
        return this;
    },

    submit: function () {
        console.log("Se imprimio afortunadamente");
    }
});