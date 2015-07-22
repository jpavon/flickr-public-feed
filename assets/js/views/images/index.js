var Backbone = require('backbone');
var Marionette = require('backbone.marionette');



var ImageIndexView = Marionette.ItemView.extend({
	tagName: 'li',
	className: 'image',
	template: require('../../templates/images/index.hbs')
});

var ImagesIndexCollectionView = Marionette.CollectionView.extend({
	tagName: 'ul',
	className: 'images',
	childView: ImageIndexView,
});

module.exports = ImagesIndexCollectionView;
