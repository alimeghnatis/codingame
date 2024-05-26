/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

var inputs = readline().split(' ');
const w = parseInt(inputs[0]);
const h = parseInt(inputs[1]);
const countX = parseInt(inputs[2]);
const countY = parseInt(inputs[3]);
var inputs = readline().split(' ');

let xAxe = [0]
let yAxe = [0]
for (let i = 0; i < countX; i++) {
    const x = parseInt(inputs[i]);
    xAxe.push(x)
}
xAxe.push(w)
var inputs = readline().split(' ');
for (let i = 0; i < countY; i++) {
    const y = parseInt(inputs[i]);
    yAxe.push(y)
}
yAxe.push(h)

let rectangles = []

for (let i = 0; i < xAxe.length; ++i) {
    for (let j = 0; j < yAxe.length; ++j) {
        rectangles.push({ xAxe: xAxe[i], yAxe: yAxe[j] })
    }
}

let count = 0

for (let i = 0; i < rectangles.length; ++i) {
    for (let j = i + 1; j < rectangles.length; j++) {
        let a = rectangles[i].xAxe - rectangles[j].xAxe
        let b = rectangles[i].yAxe - rectangles[j].yAxe
        if(a === b) {
            count++
            //console.error(a,b)
        }
    }
}

console.log(count)
