/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const MESSAGE = readline().split("").map(item => item.length < 7 ? item.charCodeAt(0).toString(2).padStart(7, "0") : item.charCodeAt(0).toString(2))


let output = ""
let prev = ""
let curr = ""



for(let i = 0; i < MESSAGE.length; i++) {
    for(let j = 0; j < MESSAGE[i].length; j++){
        let curr = MESSAGE[i][j]
        if(prev === "" || prev !== curr) {
            if(output !== "") {
                output += " "
            }
            if(MESSAGE[i][j] === "1") {
                output += "0 0"
            } else {
                output += "00 0"
            }
        } else {
            output += "0"
        }
        prev = curr
    }
}

console.log(output)

