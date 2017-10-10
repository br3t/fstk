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
			}
		]
	},{
		id: 4,
		title: 'Задача №4. Максимум из минимумов',
		functionName: 'minimax',
		tests: [{
				input: [[3100, 890, 1120, 740, 2100,550, 540, 3200,1570, 250]],
				output: 890
			},
			{
				input: [[1500, 500, 100, 6000, 70]],
				output: 500
			}
		]
	},{
		id: 5,
		title: 'Задача №5. Поиск квадратов',
		functionName: 'getSquares',
		tests: [{
				input: [[1, 2, 3, 4, 8, 9, 15, 16,34, 36, 38, 24, 25, 26]],
				output: [1,4,9,16,36,25]
			},
			{
				input: [[121,120,49,48,50]],
				output: [121,49]
			}
		]
	},{
		id: 6,
		title: 'Задача №6. Только уникальные',
		functionName: 'getSquares',
		tests: [{
				input: [['Mike', 'Peter', 'Alex', 'Sonya','Mike', 'Mary', 'Like', 'Alex', 'Abraham', 'Mary']],
				output: ['Mike','Peter','Alex','Sonya','Mary','Like','Abraham']
			},
			{
				input: [[1,2,2,3,2,3,4,1,4]],
				output: [1,2,3,4]
			}
		]
	}]
}
];