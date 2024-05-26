/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const N = parseInt(readline());
let argArr = []
let obj = {}

function calc(op, ar1, ar2) {
    const a1 = parseInt(ar1)
    const a2 = parseInt(ar2)
    switch(op){
        case "MULT":
            return a1 * a2
        break
        case "ADD":
            return a1 + a2
        break
        case "SUB":
            return a1 - a2
        break
        default:
            return a1
        break
    }
}

function evaluate(arg) {
    if(isNaN(arg)) {
        let ref = Number(arg.split("").slice(1).join(""))
        if(!obj.hasOwnProperty(ref)) {
            const value = calc(argArr[ref].operation, evaluate(argArr[ref].arg1), evaluate(argArr[ref].arg2))
            obj[ref] = value
            return value
        }
        return obj[ref]
    }
    return (Number(arg))
}

