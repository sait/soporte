/**
 * Created by xerardoo on 7/1/16.
 */

App.Views.Open = Backbone.View.extend({

    htmlFile: 'views/open/template.html',

    initialize: function () {
    },

    render: function () {
        this.$el.html(this.html);
        return this;
    }
});