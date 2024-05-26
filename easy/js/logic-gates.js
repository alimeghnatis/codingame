/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const n = parseInt(readline())
const m = parseInt(readline())

let obj = {}
let list = []

for (let i = 0; i < n; i++) {
    var inputs = readline().split(' ');
    const inputName = inputs[0]
    const inputSignal = inputs[1]
    obj[inputName] = inputSignal.split("")
}

for (let i = 0; i < m; i++) {
    var inputs = readline().split(' ');
    const outputName = inputs[0];
    const type = inputs[1];
    const inputName1 = inputs[2]
    const inputName2 = inputs[3]

    let a = obj[inputName1]
    let b = obj[inputName2]
    let signal = ""

    for(let j = 0; j < a.length; j++){
        if(type === "AND") {    
            signal += a[j] === "-" && b[j] === "-" ? "-" : "_"
        } else if(type === "OR") {
            signal += a[j] === "-" || b[j] === "-" ? "-" : "_"
        } else if(type === "XOR") {
            signal += (a[j] === "-" && b[j] !== "-") ^ (a[j] !== "-" && b[j] === "-") ? "-" : "_"
        } else if(type === "NAND") {
            signal += !(a[j] === "-" && b[j] === "-") ? "-" : "_"
        } else if(type === "NOR") {
            signal += a[j] === "-" || b[j] === "-" ? "_" : "-"
        } else if(type === "NXOR") {
            signal += !((a[j] === "-" && b[j] !== "-") ^ (a[j] !== "-" && b[j] === "-")) ? "-" : "_"
        }
    }
    console.log(outputName.concat(" " + signal))
}
