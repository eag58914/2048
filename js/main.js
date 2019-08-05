/*----- constants -----*/
let boardSpots = document.querySelectorAll('div');
/*----- app's state (variables) -----*/
let grid, turn, winner;
/*----- cached element references -----*/

/*----- event listeners -----*/

/*----- functions -----*/
init();

function init() {
	grid = [ [ 0, 0, 0, 0 ], [ 0, 0, 0, 0 ], [ 0, 0, 2, 2 ], [ 0, 0, 0, 0 ] ];
	console.log(grid);
	turn = 1;
	winner = null;
	render();
}
function render() {
	grid.forEach(function(colIdx, rowIdx) {
		let div = document.getElementById(`c${colIdx}r${rowIdx}`);
	});
	//console.log(bordSpots);
	boardSpots.forEach((el) => {
		console.log(el);
		//el.innerText = `${}`;
	});
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
	row.forEach(function() {
		let arr = row.filter((val) => val);
		let missing = 4 - arr.length;
		let zeros = Array(missing).fill(0);
		arr = zeros.concat(arr);
		return arr;
	});
}

function combine(row) {
	for (let i = 3; i >= 0; i--) {
		let a = row[i];
		let b = row[i - 1];
		if (a == b) {
			row[i] = a + b;
			row[i - 1] = 0;
		}
	}
	return row;
}

document.addEventListener('keydown', function keyPress(event) {
	switch (event.keyCode) {
		case 38:
			alert('up key pressed');
			break;
		case 40:
			alert('down key pressed');
			break;
		case 37:
			alert('left key pressed');
			break;
		case 39:
			alert('right key pressed');
			break;
	}
});
