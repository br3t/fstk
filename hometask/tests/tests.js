var testManager = {
	selectedTaskData: null
};
testManager.init = function() {
	var ctx = this;
	ctx.fillSelect();

	$('body').on('change', '#tests-list', function() {
		ctx.clearMessages();
		if($(this).val()) {
			var selectedTask = $(this).val().split(':');
			ctx.getSelectedTests(selectedTask);
		}
	});

	$('body').on('click', '#run-tests', function() {
		ctx.runTests();
	});
};

testManager.fillSelect = function() {
	var select = $('#tests-list');
	testsData.forEach(function(lesson) {
		var lessonHtml = '<optgroup label="' + lesson.title + '">';
		lesson.tasks.forEach(function(task) {
			lessonHtml += '<option value="' + lesson.folder + ':' + task.id + '">' + task.title + '</option>';
		});
		lessonHtml += '</optgroup>';
		select.append(lessonHtml);
	});
};

testManager.getSelectedTests = function(selectedTask) {
	var url = '../' + selectedTask[0] + '/index.html #task-' + selectedTask[1];
	$( "#task-info" ).load(url);

	var selectedLessonData = testsData.find(function(v) { return v.folder == selectedTask[0]; });
	this.selectedTaskData = selectedLessonData.tasks.find(function(v) { return v.id == selectedTask[1]; });
};

testManager.runTests = function() {
	var ctx = this;
	var result = '';
	var counter = 1;
	var functionCode = $('#task-solution').val();
	ctx.clearMessages();
	if(functionCode == '' || functionCode.indexOf('function') == -1) {
		ctx.addMessage('error', 'Добавьте код функции');
		return;
	}
	try {
		window[ctx.selectedTaskData.functionName] = eval('(' + functionCode + ')');
	} catch(e) {
		ctx.addMessage('error', e.message);
		return;
	}
	
	ctx.selectedTaskData.tests.forEach(function(v) {
		var testResult = ctx.proxy(ctx.selectedTaskData.functionName, v.input);
		switch(ctx.isSimilar(testResult, v.output)) {
			case 2:
				ctx.addMessage('ok', 'Тест ' + counter + ' пройден');
			break;
			case 1:
				ctx.addMessage('error', 'Тест ' + counter + ' пройден, но имеется ошибка в типе результата' +
					'<div><b>Ввод:</b> ' + v.input + '<br />' +
					'<b>Вывод:</b> ' + testResult + '<br />' +
					'<b>Ожидаемый вывод:</b> ' + v.output);
			break;
			default:
				ctx.addMessage('error', 'Тест ' + counter + ' провален' +
					'<div><b>Ввод:</b> ' + v.input + '<br />' +
					'<b>Вывод:</b> ' + testResult + '<br />' +
					'<b>Ожидаемый вывод:</b> ' + v.output);
			break;
		}
		counter++;
	});
};

testManager.proxy = function(functionName, input) {
	var result = null;
	if(functionName in window) {
		switch(input.length) {
			case 0:
				result = window[functionName]();
			break;
			case 1:
				result = window[functionName](input[0]);
			break;
			case 2:
				result = window[functionName](input[0], input[1]);
			break;
			case 3:
				result = window[functionName](input[0], input[1], input[2]);
			break;
			case 4:
				result = window[functionName](input[0], input[1], input[2], input[3]);
			break;
		}
		return result;
	}
	return undefined;
};

testManager.isSimilar = function(a, b) {
	if(a == b) {
		if(a === b) {
			return 2;
		} else {
			return 1;
		}
	} else {
		if(typeof a == 'object' && typeof b == 'object') {
			for(var i in a) {
				if(i in b && a[i] === b[i]) {
					continue;
				}
				return 0;
			}
			for(var j in b) {
				if(j in a && a[j] === b[j]) {
					continue;
				}
				return 0;
			}
			return 2;
		}
	}
	return 0;
};
testManager.addMessage = function(type, code) {
	$('#test-results').append('<div class="message-wrap ' + type + '">' + code + '</div>');
};

testManager.clearMessages = function() {
	$('#test-results').html('');
};

$(document).ready(function() {
	testManager.init();
});