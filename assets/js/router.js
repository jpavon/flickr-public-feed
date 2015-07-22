var Backbone = require('backbone');
var Marionette = require('backbone.marionette');

var LayoutView = require('./views/layout');
var ImagesCollection = require('./collections/images');



var Controller = Marionette.Object.extend({
	initialize: function() {
		var that = this;
		var collection = new ImagesCollection();

		collection.fetch().then(function() {
			var layout = new LayoutView({
				collection: collection
			});
			layout.render();
			that.options.layout = layout;

			Backbone.history.start();
		});
	},

	imagesIndex: function() {
		var layout = this.getOption('layout');
		layout.triggerMethod('images:index');
	},

	imagesShow: function(id) {
		var layout = this.getOption('layout');
		layout.triggerMethod('images:show', id);
	}
});

var Router = Marionette.AppRouter.extend({
	appRoutes: {
		'': 'imagesIndex',
		'images/:id': 'imagesShow'
	},

	controller: new Controller()
});

module.exports = Router;
