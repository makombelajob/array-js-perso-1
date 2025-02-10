let nombres = [ 12, 45, 12, 34, 23, 23, 46, 87, 4, 6,];
let estPair = nombres.filter(nombre => nombre % 2 === 0);
let estImpair = nombres.filter(nombre => nombre % 2 !== 0);
console.log(`Est pair ${estPair} et est impair ${estImpair}`);