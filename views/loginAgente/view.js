/**
 * Created by xerardoo on 7/1/16.
 */

App.Views.LoginAgente = Backbone.View.extend({

    htmlFile: 'views/loginAgente/template.html',

    initialize: function () {
    },

    render: function () {
        this.$el.html(this.html);
        return this;
    }
});