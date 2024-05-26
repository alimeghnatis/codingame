let [W, H] = readline().split` `.map(Number); 
const maze = []; // Maze

while (H--) {
    // Represents a line in the grid and contains W integers.
    // Each integer represents one room of a given type.
    maze.push(readline());
}
// The coordinate along the X axis of the exit
// (not useful for this first mission, but must be read).
const EX = +readline();

// game loop
while (true) {
    inputs = readline().split` `;
    const [XI, YI, POS] = [+inputs[0], +inputs[1], inputs[2]];
    const currentLevel = maze[YI].split` `;
    let [XT, YT] = [XI, YI];
    
    switch(currentLevel[XI]) {
        case '1':
        case '3':
        case '7':
        case '8':
        case '9':
        case '12':
        case '13':
            YT += 1;
            break;
        case '2':
            XT += POS === 'LEFT' ? 1 : -1;
            break;
        case '4':
            (POS === 'TOP') ? XT -= 1 : YT +=1;
            break;
        case '5':
            (POS === 'TOP') ? XT += 1 : YT +=1;
            break;
        case '6':
            XT += (POS === 'TOP' && EX > XI) || POS === 'LEFT' ? 1 : -1;
            break;
        case '10':
            XT -= 1;
            break;
        case '11':
            XT += 1;
            break;
        default:
            break;
    }

    // One line containing the X Y coordinates of the room 
    // in which you believe Indy will be on the next turn.
    print(`${XT} ${YT}`);
}
