/**
 * Don't let the machines win. You are humanity's last hope...
 **/

const width = parseInt(readline()); // the number of cells on the X axis
const height = parseInt(readline()); // the number of cells on the Y axis
let m = []
for (let i = 0; i < height; i++) {
    const line = readline(); // width characters, each either 0 or .
    m.push(line.toString().split("").map(e => e === "." ? -1 : Number(e)))
}

let cord = ''

for(let i = 0; i < height; i++){
    for(let j = 0; j < width; j++){
        if(m[i][j] !== -1) {
            let x1 = j
            let y1 = i
            let x2 = y2 = x3 = y3 = -1

            for(let k = j + 1; k < width; k++){
                if(m[i][k] !== -1) {
                    x2 = k
                    y2 = i
                    break
                }
            }
            for(let k = i + 1; k < height; k++){
                if(m[k][j] !== -1){
                    x3 = j
                    y3 = k
                    break
                }
            }
            cord += `${x1} ${y1} ${x2} ${y2} ${x3} ${y3}\n`
        }
    }
}
console.log(cord.trim())
