/*----- constants -----*/
const PLAYERS = {
	'0': 'white',
	'1': 'blue',
	'-1': 'red'
};
/*----- app's state (variables) -----*/
let grid, turn, winner;
/*----- cached element references -----*/

/*----- event listeners -----*/

/*----- functions -----*/
init();
function init() {
	grid = [ [ 0, 0, 0, 0 ], [ 0, 0, 0, 0 ], [ 0, 0, 0, 0 ], [ 0, 0, 0, 0 ] ];
	console.table(grid);
	addTwoOrFour();
	addTwoOrFour();
	console.table(grid);
	turn = 1;
	winner = null;
	render();
}
function render() {
	//render through the board
	// grid.forEach(function(arr) {
	// 	arr.forEach(function(cell) {
	// 		let div = document.getElementById('cell');
	// 		console.log(div);
	// 	});
	// });
}

function addTwoOrFour() {
	let options = [];
	for (let i = 0; i < 4; i++) {
		for (let j = 0; j < 4; j++) {
			if (grid[i][j] === 0) {
				options.push({ x: i, y: j });
			}
		}
	}
	if (options.length > 0);
	let randomSpot = options[Math.floor(Math.random() * options.length)];
	let number = Math.random() < 0.5 ? 2 : 4;
	grid[randomSpot.x][randomSpot.y] = number;
}
function slide(row) {
	let arr = row.filter((val) => val);
	let missing = 4 - arr.length;
	let zeros = Array(missing).fill(0);
	arr = arr.concat(zeros);
	return arr;
}
