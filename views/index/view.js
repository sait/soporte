/**
 * Created by xerardoo on 7/1/16.
 */
App.Views.Index = Backbone.View.extend({

    htmlFile: 'views/index/template.html',

    initialize: function () {
    },

    render: function () {
        this.$el.html(this.html);
        return this;
    }
});