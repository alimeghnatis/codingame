/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const r1 = parseInt(readline());
const r2 = parseInt(readline());

// Write an answer using console.log()
// To debug: console.error('Debug messages...');
let riv1 = r1
let riv2 = r2

function next(val) {
    let temp = val.toString().split("").map(Number)
    for(let i = 0; i < temp.length; i++){
        val += temp[i]
    }
    return val
}

while (riv1 !== riv2){
    if(riv1 < riv2){
        riv1 = next(riv1)
    } else {
        riv2 = next(riv2)
    }
}


console.log(riv1);

