var dashboard = {};

dashboard.init = function() {
	// fix dates
	var dates = document.querySelectorAll('.date');
	for(var i = 0; i < dates.length; i++) {
		var timestamp = dates[i].innerText;
		dates[i].setAttribute('title', 'Loading...');
		dates[i].innerText = timestamp;
	}
	// add date additional info
	var times = document.querySelectorAll('.time');
	for(var j = 0; j < times.length; j++) {
		var result = times[j].innerText;
		times[j].innerText = '>' + result;
	}
	//
	var leadZero = function(num) {
		return num > 9 ? num : "0" + num;
	};
};