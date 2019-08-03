/*----- constants -----*/

/*----- app's state (variables) -----*/
let grid;
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
