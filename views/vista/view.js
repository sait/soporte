/**
 * Created by xerardoo on 7/1/16.
 */

App.Views.Vista = Backbone.View.extend({

    htmlFile: 'views/vista/template.html',

    initialize: function () {
    },

    render: function () {
        this.$el.html(this.html);
        return this;
    }
});