const s = readline();
const changeCount = parseInt(readline());
const manipulated = s.split(/\\n/);
const changes = [];

for (let i = 0; i < changeCount; i++) {
  const [line, col, newStr] = readline().split("|");
  changes.push({ line: parseInt(line), col: parseInt(col), newStr });
}

changes.sort((a, b) => {
  return a.line !== b.line ? b.line - a.line : b.col - a.col;
});

for (const { line, col, newStr } of changes) {
  manipulated[line] = manipulated[line].slice(0, col) + newStr + manipulated[line].slice(col);
}


const finalArr = manipulated.map(line => line.split(/\\n/).join("\n"));
console.log(finalArr.join("\n"));
