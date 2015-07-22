var Backbone = require('backbone');
var Marionette = require('backbone.marionette');



ImagesShowView = Marionette.ItemView.extend({
	className: 'image',
	template: require('../../templates/images/show.hbs'),
});

module.exports = ImagesShowView;
