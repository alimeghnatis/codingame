var inputs = readline().split(' ');
const w = parseInt(inputs[0]);
const h = parseInt(inputs[1]);
let maze = []
let start = {}
let counter = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'
for (let i = 0; i < h; i++) {
    const ROW = readline()
    maze.push(ROW.split(""))
}
for(let i = 0; i < h; i++){
    for(let j = 0; j < w; j++){
        if(maze[i][j] === "S"){
            maze[i][j] = counter[0]
            start.x = i
            start.y = j
        }
    }
}

// BFS Initialization
let queue = [[start.x, start.y, 0]]; // Add the start position and distance 0
let directions = [
    [0, 1],  // Right
    [0, -1], // Left
    [1, 0],  // Down
    [-1, 0]  // Up
];

while (queue.length > 0) {
    let [x, y, dist] = queue.shift(); // Dequeue current position

    for (let [dx, dy] of directions) {
        // Calculate new positions considering periodic boundaries
        let newX = (x + dx + h) % h;
        let newY = (y + dy + w) % w;

        // If the new position is free and not visited yet
        if (maze[newX][newY] === '.') {
            maze[newX][newY] = counter[dist + 1]; // Mark with the next distance
            queue.push([newX, newY, dist + 1]); // Enqueue the new position with incremented distance
        }
    }
}

// Output the updated maze
for (let i = 0; i < h; i++) {
    console.log(maze[i].join(''));
}

