window.alert('épisode-8 : Ce programme vous demande votre nom et votre genre et vous les retourne');

//déclaration des variable nom et sexe
let nomDeFamille;
let genre;

nomDeFamille = window.prompt('Entrz votre nom');
genre = window.prompt('Entrz votre sexe');
//condition 
if (genre == 'masculin') {
    window.alert(`Bonjour monsieur ${nomDeFamille}`)
} else if (genre == 'feminin') {
    window.alert(`Bonjour madame ${nomDeFamille}`)
} else {
    window.alert("Enter masculin ou feminin")
}