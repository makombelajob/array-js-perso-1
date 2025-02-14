/**
 *  Objectif : Utiliser map() pour modifier les valeurs d’un tableau.
1. Crée un tableau temperatures contenant des valeurs en Celsius.
2. Convertis ces valeurs en Fahrenheit avec la formule : F=C×95+32F = C \times \frac{9}{5}
+ 32F=C×59+32
3. Affiche le tableau des températures converties dans la console.
 */

const userChoice = Number(prompt("Choisissez 1 (°C => °F) ou 2 (°F => °C)"));
const temp = Number(prompt("Entrez la température"));

if (isNaN(userChoice) || isNaN(temp) || userChoice < 1 || userChoice > 2 || !Number.isInteger(userChoice)) {
    alert("Entrée non valide !");
} else {
    let result;
    switch (userChoice) {
        case 1:
            result = (temp * 9 / 5) + 32;
            alert(`${temp} °C vaut ${result.toFixed(2)} °F`);
            break;
        case 2:
            result = (temp - 32) * 5 / 9;
            alert(`${temp} °F vaut ${result.toFixed(2)} °C`);
            break;
        default:
            alert("Réessayez !");
    }
}
