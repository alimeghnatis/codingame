const N = parseInt(readline());

for (let i = 0; i < N; i++) {
    const line = readline();
    let stacks = []; // Initialize stacks outside the loop
        for(let j = 0; j < line.length; j++){
            let placed = false;
            for(let k = 0; k < stacks.length; k++) {
                if(line[j] <= stacks[k][stacks[k].length - 1]) {
                    stacks[k].push(line[j]);
                    placed = true;
                    break;
                }
            }
            if (!placed) {
                stacks.push([line[j]]);
            }
        }
    console.log(stacks.length);
}

