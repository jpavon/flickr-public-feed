var Marionette = require('backbone.marionette');

var Router = require('./router');



/**
 * Marionette Application
 */
var App = new Marionette.Application();

/**
 * Initialize Application
 */
App.on('start', function() {
	new Router();
});

/**
 * Start Application
 */
App.start();
