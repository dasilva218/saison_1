// déclaration des variables
let age;
// initialisation d'une constante majeur
const majeur = 18;

age = parseInt(window.prompt('épisode-7 : Entrez votre âge pour savoir si vous êtes majeur ou mineur :'), 10);
// condition sur l'âge

if (age > 0) {
    if (age >= majeur) {
        window.alert('Vous êtes majeur')    
    } else {
        window.alert('Vous êtes mineur')
    }
} else {
    window.alert('Entez un nombre positif')
}