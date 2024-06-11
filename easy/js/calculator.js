const n = parseInt(readline());
let val = 0; //Premiere valeur de l'opération
let val2 = 0; //Seconde valeur de l'opération
let scr = ""; //Affichage
let op = ""; //Opération
function update() {
    if(op == "+") {
        val += val2
    } else if(op == "-") {
        val -= val2
    } else if(op == "x") {
        val *= val2
    } else if(op == "/") {
        val /= val2
    } else {
        val = val2
    }
    val = Math.round(val * 1000) / 1000
}
for (let i = 0; i < n; i++) {
    const key = readline()
    if(op.length == 2 && key == "=") {
        op = op[0]
    } else if (op.length == 2) {
        op = ""
    }
    if(key == "+" || key == "-" || key == "x" || key == "/") {
        if(scr != "") {
            update()
        }
        op = key
        scr = val.toString()
    } else if (key == "AC") {
        val = 0
        val2 = 0
        scr = "0"
        op = ""
    } else if (key == "=") {
        update()
        scr = val.toString()
        op += "="
    } else {
        scr += key
        val2 = parseInt(scr)
    }
    console.log(scr)
    if(key == "+" || key == "-" || key == "x" || key == "/" || key == "AC" || key == "=") {
        scr = ""
    }
}
