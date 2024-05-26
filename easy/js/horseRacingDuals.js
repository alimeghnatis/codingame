/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const N = parseInt(readline());
let list = []

for (let i = 0; i < N; i++) {
    const pi = parseInt(readline());
    list.push(pi)
}
let diff = list.sort((a, b) => a - b)[list.length - 1]

for(let i = 1; i < list.length; i++) {
    if(diff > list[i] - list[i - 1]){
        diff = list[i] - list[i - 1]
    }
}
// Write an answer using console.log()
// To debug: console.error('Debug messages...');

console.log(diff);

