const N = parseInt(readline())
let ps = []
let sensors = []
for (let i = 0; i < N; i++) {
    const sensorData = readline()
    sensors.push(sensorData.split(""))
}

let vehicle = 1

for(let i = 0; i < sensors.length; i++) {
    if(sensors[i][0] == 0) {
        let j = i
        while(sensors[j][3] != 0) {
            vehicle++
            j++
        }
        break
    }
}

for(let i = 0; i < sensors.length; i++){
    if(sensors[i][0] == 0){
        let park = 0
        let j = i
        while(j < sensors.length && sensors[j][0] == 0) {
            park++
            if(park >= vehicle) {
                ps.push(j + vehicle - 1 + "L")
            }
            j++
        }
        i = j
    }
}

for(let i = 0; i < sensors.length; i++){
    if(sensors[i][1] == 0){
        let park = 0
        let j = i
        while(j < sensors.length && sensors[j][1] == 0) {
            park++
            if(park >= vehicle) {
                ps.push(j + vehicle - 1 + "R")
            }
            j++
        }
        i = j
    }
}

ps = ps.sort((a, b) => parseInt(a.split(/\D+/)) - parseInt(b.split(/\D+/)))

const final = [vehicle, ...ps]
final.map(item => console.log(item))
