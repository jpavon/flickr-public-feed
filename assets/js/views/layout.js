var Marionette = require('backbone.marionette');

require('./helpers');

var ImagesIndexCollectionView = require('./images/index');
var ImagesShowView = require('./images/show');



var LayoutView = Marionette.LayoutView.extend({

	template: require('../templates/layout.hbs'),

	el: '#app',

	regions: {
		main: '#main'
	},

	onImagesIndex: function() {
		this.showChildView('main', new ImagesIndexCollectionView({
			collection: this.collection
		}));
	},

	onImagesShow: function(id) {
		var model = this.collection.get(id);

		this.showChildView('main', new ImagesShowView({
			model: model
		}));
	}
});

module.exports = LayoutView;
