var server = {
	init: function() {
		var data = this.getData();
		//* транслируем событие "данные готовы"
		var e = new Event('dataReady');
		e.data = data;
		document.body.dispatchEvent(e);
	},
	getData: function() { return 'data'; } 
};


var ui = {
	init: function() {
		// * подписываемся на событие "данные готовы"
		document.body.addEventListener('dataReady', function (event) {
			ui.render(event.data);
		});
	},
	render: function(data) {
		document.querySelector('div').innerText = data;
	}
};

ui.init();
server.init();