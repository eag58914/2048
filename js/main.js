/*----- constants -----*/

/*----- app's state (variables) -----*/

/*----- cached element references -----*/
//scorebaord player 1 and players 2
/*----- event listeners -----*/
//keyboard up, down, left, and right arrows
/*----- functions -----*/

// function for generating random number between 2 or 4 on the board
function randomNumberBoard() {
	let number = Math.random() < 0.5 ? 2 : 4;

	return number;
}

//function add numbers when they pushed in a direction
