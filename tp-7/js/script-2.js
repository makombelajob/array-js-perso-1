/**
 * 1. Crée un tableau fruits contenant des noms de fruits.
2. Demande à l’utilisateur d’entrer un fruit avec prompt().
3. Vérifie si le fruit est dans le tableau avec includes().
4. Affiche un message indiquant s’il est présent ou non.
 */

const tables = ["pc", "clavier", "écran", "souris", "cable", "pc"];
const userEntry = prompt("Enter un mots").toLowerCase();
let comptMot = 0;

tables.forEach( mot => {
    if ( mot.toLowerCase() === userEntry) {
        comptMot++;
    }
});
console.log(`${userEntry} : ${comptMot} fois`)
