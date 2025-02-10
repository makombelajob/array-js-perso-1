let mots = [ "lion", "leopard", "lièvre", "lion", "ours", "guepard", "leopard", "lion"];
let userChoix = prompt("Entrer un mots").toLowerCase();
let compt = 0;
mots.forEach( mot => {
    if (mot.toLowerCase() === userChoix ) {
        compt++;
    }
});
console.log(userChoix , compt);
