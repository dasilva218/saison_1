window.alert('épisode-9 : Ce programme vous renvois une appreciation parraport à votre moyenne');
// déclaration de la variable moyenne
let moyen;

moyen = parseInt(window.prompt('Entrez votre moyenne'), 10);
//condition

if (moyen >= 0 && moyen <= 20) {
    if (moyen === 10) {
        window.alert('Passable');
    } else if (moyen > 10 && moyen <= 13) {
        window.alert('Assez-bien')
    } else if (moyen > 13 && moyen <= 15) {
        window.alert('bien')
    } else if (moyen > 15 && moyen <= 19) {
        window.alert('Très bien')
    } else if (moyen === 20) {
        window.alert('Excellent')
    } else {
        window.alert('Vous avez pas la moyenne')
    }
} else {
    window.alert('La moyenne varie entre 0 et 20.')
}
