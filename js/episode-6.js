//renseigne l'utilasateur sur le programme

window.alert("épisode-6 : Ce programme permet de faire la moyenne de trois nombres")

// fonction calcul de la moyenne

let Moyenne = (x, y, z) => {
    if (isNaN(x) && isNaN(y) && isNaN(z)) {
        return window.alert("Entrer des nombres");
    } else {
        moyenne = Math.round((x + y + z)/3);
    }

    window.alert(`La moyenne est : ${moyenne}`);
}
// déclaration des variable
let note1 = parseInt(window.prompt("Entrez le premier nombre"), 10);
let note2 = parseInt(window.prompt("Entrez le deuxième nombre"), 10);
let note3 = parseInt(window.prompt("Entrez le troixième nombre"), 10);

Moyenne(note1, note2, note3);