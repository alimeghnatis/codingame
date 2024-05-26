/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const BEGIN = readline().split(".")
const END = readline().split(".")
// Write an answer using console.log()
// To debug: console.error('Debug messages...');

let beginDate = new Date(BEGIN[2], BEGIN[1] -1, BEGIN[0])
let endDate = new Date(END[2], END[1] -1, END[0])

let months = (endDate.getFullYear() - beginDate.getFullYear())*12 - beginDate.getMonth() + endDate.getMonth() - (beginDate.getDate() > endDate.getDate())
let years = Math.trunc(months/12)
months = months%12
let days = (endDate - beginDate) / (1000*60*60*24)

let str = []
if ( years === 1 ) str.push('1 year')
if ( years > 1 ) str.push(years + ' years')

if (months === 1 ) str.push('1 month')
if (months > 1 ) str.push(months + ' months')

str.push('total ' + days + ' days')
// Write an answer using console.log()
// To debug: c onsole.error('Debug messages...');

console.log(str.join(', '))
