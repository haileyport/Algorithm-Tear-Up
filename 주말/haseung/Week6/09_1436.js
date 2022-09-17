let inputs = require("fs").readFileSync(0, "utf-8").toString().trim();

let theNumberAtTheEnd = 665;

while (inputs > 0) {
  theNumberAtTheEnd++;

  if (theNumberAtTheEnd.toString().includes("666")) {
    inputs--;
  }
}

console.log(theNumberAtTheEnd);
