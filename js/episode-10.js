// affiche l'utilité du programme
window.alert('épisode-10 : Ce programme calcule le montant d’une facture et affiche le total à payer après avoir appliqué une remise de 10% si le montant de la facture dépasse 40.000 F.');
//déclaration des variables prix de l'utisateur et de la constante pour l'application de la remise

let prix;

// fonction qui calcule le montant de la facture après remise
let calculeFacture = (x=0) => {
    // remise
    const remise = 10 / 100;
    //prix pour le droit à la remise
    const prixMoyenne = 40000;
    let calcuPrix;
    if (x > 0 && !(isNaN(x))) {
        // calcule de la remise si le montant est supérieur à 40 000
        if (x > prixMoyenne) {
            calcuPrix = x * (1 - remise);
            window.alert(`Votre facture après remise est : ${calcuPrix}.Fcfa`)
        } else {
            window.alert(`Le montant de Votre facture est ${x}.Fcfa vous n'avez pas droit à la remise`)
        }
    } else {
        window.alert(`${x} : le montant de votre facture n'est pas valide`)
}
}

prix = parseInt(window.prompt('Entrez le montant de votre facture'), 10);
//arrondi sur le resultat
prix = Math.round(prix);

//appel de la fonction pour le calcule de la facture
calculeFacture(prix);
