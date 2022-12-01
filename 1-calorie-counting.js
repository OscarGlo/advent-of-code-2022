const elves = document.body.textContent
  .split("\n\n")
  .map(str => 
    str.split("\n")
       .reduce((a, b) => a + (+b), 0)
  ).sort((a, b) => b - a);

console.log(elves[0]);

console.log(elves.slice(3).reduce((a, b) => a + b);
