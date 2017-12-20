//
$.ajax({
	type: "GET",
	method: "GET",
	url: "http://example.com",
	async: true,
	contentType: 'application/x-www-form-urlencoded',

	username: "user",
	password: "1111",

	data: {
		a: 1,
		b: 2
	},
	headers: {
		"X-Requested-With": "not a XMLHttpRequest"
	},
	crossDomain: false,
	dataType: 'html',
	timeout: 1000,

	complete: function (jqXHR, textStatus) {
		
	},
	success: function(respond, textStatus, jqXHR) {

	},
	error: function(jqXHR, textStatus, e) {

	}
});

// Использование callback-методов
$.ajax({})
	.done(function(respond, textStatus, jqXHR){})
	.fail(function(jqXHR, textStatus, e) {}).
	.always(function( data, textStatus, jqXHR) { }) // on success
	.always(function( jqXHR, textStatus, errorThrown ) { }); // on error

// Alias for GET-request
$.get(
	"http://example.com",
	{a: 1},
	function(respond) {},
	'text');

// Alias for POST-request
$.post(
	"http://example.com",
	{a: 1},
	function(respond) {},
	'text');

// Alias for dataType: "json"
$.getJSON(
	"http://example.com/data.json",
	{a: 1},
	function(respond) {});

// Alias for dataType: "script"
$.getScript(
	"http://example.com/script.js",
	function(respond) {});	