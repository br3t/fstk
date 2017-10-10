var testsData = [
{
	title: 'ДЗ по теме JS 2. Массивы',
	folder: 'task_6',
	tasks: [{
		id: 2,
		title: 'Задача №2. Поломанный reverse',
		functionName: 'reverse',
		tests: [
			{
				input: [[1,2,3]],
				output: [3,2,1]
			},{
				input: [['!','world','Hello']],
				output: ['Hello','world','!']
			}
		]
	},{
		id: 3,
		title: 'Задача №3. Поломанный sort',
		functionName: 'sortSalaries',
		tests: [{
				input: [[3100, 890, 1120, 740, 2100,550, 540, 3200,1570, 250]],
				output: [250,540,550,740,890, 1120, 1570, 2100,3100, 3200]
			},
			{
				input: [[100, 20, 3, 4000]],
				output: [3,20,100,4000]
			}]
		}]
}
];