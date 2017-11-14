var librirary = {};

librirary.isLeap = function(year) {
	if(typeof year == 'string') {
		return;
	}
	return year%400 == 0 || year%100 != 0 && year%4 == 0;
};

librirary.isLessonToday = function(day) {
	return day == 2 || day == 4;
};


var SMath = {};

SMath.mult = function(a, b) {
	if(typeof a != 'number' || typeof b != 'number') {
		return;
	}
	return a * b;
};

SMath.sub = function(a, b) {
	if(typeof a != 'number' || typeof b != 'number') {
		var aString = a.toString();
		var bString = b.toString();
		var bPosition = aString.indexOf(bString);
		if(bPosition != -1) {
			return aString.substr(0, bPosition) +
			 aString.substr(bPosition+bString.length);
		}
		return aString;
	}
	return a - b;
};