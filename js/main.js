require.config({
    paths: {
        jquery: 'backbone.marionette/jquery.js',
        underscore: 'backbone.marionette/underscore.js',
        backbone: 'backbone.marionette/backbone.js',
        marionette: 'backbone.marionette/backbone.marionette.js'
    }

});

require([

    // Load our app module and pass it to our definition function
    'app',
], function(App){
    // The "app" dependency is passed in as "App"
    App.initialize();
});