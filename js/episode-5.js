// fonction permettant de calculer le double
let Double = (x) => {
    // initialisation de la variable double
    let double = 0;
    if (isNaN(x)) {
        return window.alert("Entrer des nombres");
    } else {
        double = x * 2;
    }

    window.alert(`Le double ${x} est : ${double}`);
}
// initialisation de la variable nombre
let nombre = parseInt(window.prompt("épisode-5: Entrez le nombre pour lequel vous souhaitez obtenir le double !"));
// appel de la fonction double
Double(nombre);