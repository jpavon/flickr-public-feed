var Backbone = require('backbone');

var ImageModel = require('../models/image');



 var ImagesCollection = Backbone.Collection.extend({

	model: ImageModel,

	url: 'https://api.flickr.com/services/feeds/photos_public.gne?tags=potato&tagmode=all&format=json&jsoncallback=?',

	parse: function(response) {
		return response.items;
	},
});

 module.exports = ImagesCollection;
