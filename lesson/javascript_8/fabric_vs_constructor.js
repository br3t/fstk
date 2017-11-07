// функция-"фабрика" объектов
function Fabric(name) {
	var user = {};
	user.name = name;
	return user;
}

// функция-конструктор
function Constructor(name) {
	this.name = name;
}


var alice = new Fabric("Alice");
// т.к. Fabric - не функция конструктор, то ее можно вызывать без new
alice = Fabric("Alice");

var bob = new Constructor("Bob");

console.log(alice instanceof Fabric); // false
console.log(bob instanceof Constructor); // true

// объекты, созданные с помощью функции-"фабрики" никак не связаны между собой и с функцией, которая их создала