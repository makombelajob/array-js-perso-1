/**
 * Utiliser Set() pour enlever les valeurs en double.
1. Crée un tableau valeurs contenant des nombres, avec des doublons.
2. Utilise new Set() pour supprimer les valeurs en double.
3. Affiche le tableau filtré dans la console.

 */

const table = ["pc", "raspi", "keys", "mouse", "apache", "kali", "pc", "ubuntu", "keys" , 12, "12"];
console.log(table);
let tableSet = [... new Set(table)];
console.log(tableSet);