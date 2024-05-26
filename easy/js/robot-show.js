const L = parseInt(readline());
const N = parseInt(readline());
let inputs = readline().split(' ').map(Number);

inputs.sort((a, b) => a - b);

let min = Math.min(...inputs);
let max = Math.max(...inputs);


console.log(Math.max(max, L - min));
