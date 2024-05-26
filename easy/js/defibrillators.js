/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const LON = parseFloat(readline().replace(",", "."))
const LAT = parseFloat(readline().replace(",", "."))
const N = parseInt(readline())
let defibs = []
let dist = []

for (let i = 0; i < N; i++) {
    const DEFIB = readline().split(";")
    defibs.push({
        number: DEFIB[0], 
        name: DEFIB[1], 
        address: DEFIB[2], 
        long: parseFloat(DEFIB[4].replace(',', '.')),
        lat: parseFloat(DEFIB[5].replace(',', '.'))
    })
}

defibs.map( x => {
    const long = (x.long - LON) * Math.cos((x.lat + LAT) / 2)
    const lat = x.lat - LAT
    dist.push(Math.sqrt(Math.pow(long, 2) + Math.pow(lat, 2)) * 6371)
})
let temp = [...dist].sort((a, b) => a - b)

console.log(defibs[dist.indexOf(temp[0])].name)
    // Write an answer using console.log()
// To debug: console.error('Debug messages...');

//console.log(dist)

