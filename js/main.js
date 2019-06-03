(function() {
	"use strict"
	
	/* TODO: 
		Grab url
		Parse URL into new learning objects
		Display learning objects
		Allow user to edit learning objects
		Render learning objects in 3 UI methods
	*/
	
	function parseURL(url) {
		var html = 'parsed html';
		return html;
	}
	
	$("#try-it").click(function() {
		var url = $("#url").val();
		console.log(url);
		var parsed = parseURL(url);
		console.log("parsed: ", parsed);
	});
})()