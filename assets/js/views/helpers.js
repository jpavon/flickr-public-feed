var $ = require('jquery');
var Handlebars = require('hbsfy/runtime');
var moment = require('moment');
var trim = require('trim');



Handlebars.registerHelper('dateFormat', function(context, block) {
	return moment(context).format('[Published:] Do MMMM YYYY [at] HH:mm');
});

Handlebars.registerHelper('authorUrl', function(context, block) {
	return 'https://www.flickr.com/photos/' + context;
});

Handlebars.registerHelper('tagsLinks', function(context, block) {
	var output = '';
	var arr = context.split(' ');
	arr.forEach(function(tag) {
		output += '<a href="https://www.flickr.com/search/?tags=' + tag + '" target="_blank">' + tag + '</a>';
	});
	return new Handlebars.SafeString(output);
});

Handlebars.registerHelper('cleanDescription', function(context, block) {
	var $html = $('<div></div>').append($.parseHTML(context));
	$html.find('p:nth-child(1), p:nth-child(2)').remove();
	var output = trim($html.text());
	return new Handlebars.SafeString(output || 'No description available.');
});
