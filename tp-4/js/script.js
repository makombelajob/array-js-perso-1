let nombres = [ 12, 3, 5, 7, 89];
console.log(`Initial : ${nombres}`)
let doubler = nombres.map(nombre => nombre * 2);
let tripler = nombres.map(nombre => nombre * 3);
console.log(`Doubler : ${doubler} et les tripler ${tripler}`);