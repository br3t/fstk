var  i = 0;

function print() {
	if(i > 0) {
		i--;
		self.postMessage(i); // отправка данных в основное окно
		setTimeout(print, 1000);
	}
}

self.addEventListener('message', function(e) {
	// получили данные из основного окна
	i = e.data;
	// начинаем работу
	print();
});

