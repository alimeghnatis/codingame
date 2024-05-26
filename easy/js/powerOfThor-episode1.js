/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 * ---
 * Hint: You can use the debug stream to print initialTX and initialTY, if Thor seems not follow your orders.
 **/

var inputs = readline().split(' ');
const lightX = +inputs[0]; // the X position of the light of power
const lightY = +inputs[1]; // the Y position of the light of power
const initialTx = +inputs[2]; // Thor's starting X position
const initialTy = +inputs[3]; // Thor's starting Y position

let currentX = initialTx
let currentY = initialTy
// game loop
while (true) {

    // Write an action using console.log()
    // To debug: console.error('Debug messages...');
 const E = +readline();
    let move = '';

    if (currentY > lightY && currentY > 0) {
        move += 'N';
        currentY--;
    } else if (currentY < lightY && currentY < 17) {
        move += 'S';
        currentY++;
    }
    if (currentX > lightX && currentX > 0) {
        move += 'W';
        currentX--;
    } else if (currentX < lightX && currentX < 39) {
        move += 'E';
        currentX++;
    }

    // A single line providing the move to be made: N NE E SE S SW W or NW
    console.log(move);
}

