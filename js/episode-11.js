//fonction auto-invoqué sur la table de multiplication
(function multiplication() {
    window.alert('épisode-11 : Ce programme demande un nombre à l’utilisateur et affiche la table de multiplication de ce nombre jusqu’à 10.')
    let nombreAMultiplier;
    nombreAMultiplier = parseInt(window.prompt('Entrez un nombre à multiplier'), 10);
    nombreAMultiplier = Math.round(nombreAMultiplier);
    let resul;
    if (nombreAMultiplier > 0 && !(isNaN(nombreAMultiplier))) {
        for (let i = 0; i <= 10; i++) {
            resul = nombreAMultiplier * i;
            window.alert(`${nombreAMultiplier} * ${i} = ${resul}`);

        }
    }
})()