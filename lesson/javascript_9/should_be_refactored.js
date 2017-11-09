var arr = [1, 0, 3, 2, 5, 4, 7, 6];


function sort() {
	var temp;
	for (var i = 0; i < arr.length; i++) {
		for (var j = 1; j < arr.length; j++) {
			if(arr[j] < arr[j-1]) {
				temp = arr[j];
				arr[j] = arr[j-1];
				arr[j-1] = temp;
			}
		}
	}
}

sort();
console.log(arr);