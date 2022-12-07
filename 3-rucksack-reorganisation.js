const sacks = document.body.innerText
    .split("\n").slice(0, -1);

const sumPriorities = a => a.reduce((a, n) => a + (n > 96 ? n - 96 : n - 38), 0);

console.log(sumPriorities(
    sacks.map(s => [...s.slice(0, s.length / 2)]
        .find(c => s.slice(s.length / 2).includes(c))
        .charCodeAt(0)
    )
));

console.log(sumPriorities(
    sacks.flatMap((_, i, a) => i % 3 === 0 ? [[a[i], a[i+1], a[i+2]]] : [])
    .map(g => [...g[0]]
        .find(c => g[1].includes(c) && g[2].includes(c))
        .charCodeAt(0)
    )
));
