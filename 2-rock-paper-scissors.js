const rounds = document.body.textContent.split("\n")
    .slice(0, -1)
    .map(s => [s.charCodeAt(0) - 64, s.charCodeAt(2) - 87]);

const sumWith = f => rounds.map(f).reduce((a, b) => a + b);

console.log(sumWith(r => r[1] + (r[1] - r[0] + 4) % 3 * 3));

console.log(sumWith(r => (r[0] + r[1]) % 3 + 1 + (r[1] - 1) * 3));
