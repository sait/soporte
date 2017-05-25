/**
 * Created by Ammi on 20/05/2017.
 */
App.Views.Create = Backbone.View.extend({

    htmlFile: 'views/create/template.html',

    initialize: function () {
    },

    render: function () {
        this.$el.html(this.html);
        return this;
    }
});