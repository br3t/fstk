// before
Array.prototype.add = function(number) {
	for(var index = 0; index < this.length; index++) {
		if(number > 0 && this[index] > 0) {
			this[index] += number;
		}	
	}
};

// after