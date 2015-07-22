var Backbone = require('backbone');

var uuid = require('node-uuid');



var id = 1;

var ImageModel = Backbone.Model.extend({
	defaults: function() {
		return {
			id: id++
		};
	}
});

 module.exports = ImageModel;
