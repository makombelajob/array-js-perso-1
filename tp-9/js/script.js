/**
 * Crée deux tableaux groupeA et groupeB contenant des prénoms.
2. Fusionne-les dans un nouveau tableau tousLesEleves.
3. Affiche le tableau final dans la console
 */

const groupeA = [ "pc", "raspi", "keys", "mouse"];
const groupeB = ["apache", "kali", "parrot", "ubuntu", "12"];
const valeurA = [...groupeA.values()];// Convertir l'itérateur en tableau
const valeurB = [...groupeB.values()];
console.log(valeurA.concat(valeurB));
const full = valeurA.concat(valeurB);
full.values();
for ( let one of full) {
    console.log(one);
    if ( one === "kali") {
        alert("Hacking Tool");
    }
}