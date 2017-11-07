var animal = {
    head: 1
};
var animalType2 = {
	hands: 2,
	head: 2
};


var Dog = function() {
    this.legs = 4;
};
Dog.prototype = animal;

for(var prop in animalType2) {
	// свойства с одинаковыми именами будут перезаписаны
	Dog.prototype[prop] = animalType2[prop];
}


var myDog = new Dog();