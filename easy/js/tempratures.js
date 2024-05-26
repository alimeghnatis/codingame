/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const n = parseInt(readline()); // the number of temperatures to analyse
var inputs = readline().split(' ').map(item => parseInt(item)).sort((a, b) => a - b)
let temp = inputs[0] 

for (let i = 1; i < inputs.length; i++) {
    if(temp > 0 && inputs[i] < temp) temp = inputs[i]
    if(temp < 0 && temp < inputs[i]) temp = inputs[i]
}

// Write an answer using console.log()
// To debug: console.error('Debug messages...');

console.log(temp || 0);

