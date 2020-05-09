//déclaration de variable pour la somme
let premierNombre;
let deuxiemeNombre;
let sommes = 0;
//message pour l'utilisateur
window.alert("épisode-3 : Ce programme permet de faire la somme de deux nombre.")
//fonction pour automatiser la tache
function Somme(x, y) {
    // condition pour éviter les lettres
    if (isNaN(x) && isNaN(y)) {
        return window.alert("Entrer des nombres");
    } else {
        sommes = x + y;
    }

    window.alert(`La somme de ${x} + ${y} est : ${sommes}`);
}
// initialisation des variables pour le calcule
premierNombre = parseInt(window.prompt('Entrer le premier nombre'));
deuxiemeNombre = parseInt(window.prompt('Entrer le deuxième nombre'));

Somme(premierNombre, deuxiemeNombre);