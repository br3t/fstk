var testManager = {
	selectedTests: null
};
testManager.init = function() {
	var ctx = this;
	ctx.fillSelect();

	$('body').on('change', '#tests-list', function() {
		if($(this).val()) {
			var selectedTask = $(this).val().split(':');
			var url = '../' + selectedTask[0] + '/index.html #task-' + selectedTask[1];
			$( "#task-info" ).load(url);

			var selectedLessonData = testsData.find(function(v) { return v.folder == selectedTask[0]; });
			var selectedTaskData = selectedLessonData.tasks.find(function(v) { return v.id == selectedTask[1]; });
			ctx.selectedTests = selectedTaskData.tests;
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

$(document).ready(function() {
	testManager.init();
});