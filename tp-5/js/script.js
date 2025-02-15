let fruits = ["pomme", "banane", "orange", "kiwi", "mangue"];
let fruitRecherche = prompt("Entrez le nom d'un fruit :").toLowerCase();

if (fruits.includes(fruitRecherche)) {
    let indexFruit = fruits.indexOf(fruitRecherche); // index du fruit
    console.log(`✅ Le fruit "${fruitRecherche}" est présent à l'index ${indexFruit} dans la liste est => ${fruits[indexFruit]} from list;`);
} else {
    console.log(`❌ Le fruit "${fruitRecherche}" n'est pas dans la liste.`);
}
 