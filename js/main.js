(function() {
	"use strict"
	
	/* TODO: 
		Grab url
		Parse URL into new learning objects
		https://developer.mozilla.org/en-US/docs/Web/API/DOMParser -- compare to jquery
		Display learning objects
		Allow user to edit learning objects
		Render learning objects in 3 UI methods
	*/
	
	function getHTML(url) {
		var html = 'some html';
		return html;
	}
	
	function parseHTML(html) {
		// do something
		return html;
	}
	
	$("#try-it").click(function() {
		var url = $("#url").val();
		console.log(url);
		var html = getHTML(url);
		$("#html").html(html);
		var parsed = parseHTML(html);
		console.log("parsed: ", parsed);
	});
})()