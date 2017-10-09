var testManager = {
	selectedTaskData: null
};
testManager.init = function() {
	var ctx = this;
	ctx.fillSelect();

	$('body').on('change', '#tests-list', function() {
		if($(this).val()) {
			var selectedTask = $(this).val().split(':');
			ctx.getSelectedTests(selectedTask);
		}
	});

	$('body').on('click', '#run-tests', function() {

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
	ctx.selectedTaskData = selectedLessonData.tasks.find(function(v) { return v.id == selectedTask[1]; });
};

testManager.runTests = function() {
	var result = '';
	var functionCode = $('#task-solution').val();
	eval(functionCode);
	this.selectedTaskData.tests.forEach(function(v) {
		var testResult = this.proxy(this.selectedTaskData.functionName, v.input);
		if(this.isSimilar(testResult, v.output)) {
			console.log('Ok');
		} else {
			console.log(':(');
		}
	});
};

testManager.isSimilar = function() {

};

$(document).ready(function() {
	testManager.init();
});