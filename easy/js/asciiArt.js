/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const L = parseInt(readline());
const H = parseInt(readline());
const T = readline().toUpperCase()

for (let i = 0; i < H; i++) {
    const ROW = readline()
    let str = ""
    for(let j = 0; j < T.length; j++) {
        let index = ((T[j].charCodeAt(0) - 65) * L) < 0 ? 26 * L : (T[j].charCodeAt(0) - 65) * L
        str += ROW.slice(index, index + L)
    }
    console.log(str)
}
// Write an answer using console.log()
// To debug: console.error('Debug messages...');


