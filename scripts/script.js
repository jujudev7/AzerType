/*********************************************************************************
 *
 * Ce fichier contient toutes les fonctions nécessaires au fonctionnement du jeu.
 *
 *********************************************************************************/

/**
 * Cette fonction affiche dans la console le score de l'utilisateur
 * @param {number} score : le score de l'utilisateur
 * @param {number} nbMotsProposes : le nombre de mots proposés à l'utilisateur
 */
// function afficherResultat(score, nbMotsProposes) {
function afficherResultat(score, i) {
  // Récupération de la zone dans laquelle on va écrire le score
  let spanScore = document.querySelector(".zoneScore span");
  // Ecriture du texte
//   let affichageScore = `${score} / ${nbMotsProposes}`;
  let affichageScore = `${score} / ${i}`;
  // On place le texte à l'intérieur du span.
  spanScore.innerText = affichageScore;
}

/**
 * Cette fonction demande à l'utilisateur de choisir entre "mots" et "phrases" et retourne le choix de l'utilisateur
 * @return {string} : le choix de l'utilisateur, ce choix est nécessairement "mots" ou "phrases
 */
// function choisirPhrasesOuMots() {
//     // Tant que l'utilisateur n'a pas saisi "mots" ou "phrases", on lui redemande de saisir un choix
//     let choix = prompt("Avec quelle liste désirez-vous jouer : 'mots' ou 'phrases' ?")
//     while (choix !== "mots" && choix !== "phrases") {
//         choix = prompt("Avec quelle liste désirez-vous jouer : 'mots' ou 'phrases' ?")
//     }
//     return choix
// }

/**
 * Cette fonction lance la boucle de jeu, c'est à dire qu'elle demande à l'utilisateur de saisir tous les mots
 * contenus dans le tableau listePropositions. A chaque mot saisi, on incrémente le score de l'utilisateur
 *
 * @param {array[string]} listePropositions
 * @return {number} : le score de l'utilisateur
 */
// function lancerBoucleDeJeu(listePropositions) {
//     let score = 0
//     for (let i = 0; i < listePropositions.length; i++) {
//         // On demande à l'utilisateur de saisir le mot correspondant à l'indice i
//         let motUtilisateur = prompt("Entrez le mot : " + listePropositions[i])
//         if (motUtilisateur === listePropositions[i]) {
//             // Si le mot saisi par l'utilisateur est correct, on incrémente le score
//             score++
//         }
//     }
//     return score
// }

function afficherProposition(proposition) {
  let zoneProposition = document.querySelector(".zoneProposition");
  zoneProposition.innerText = proposition;
}

/**
 * Cette fonction lance le jeu.
 * Elle demande à l'utilisateur de choisir entre "mots" et "phrases" et lance la boucle de jeu correspondante
 */
function lancerJeu() {
  // Initialisations
  // let choix = choisirPhrasesOuMots()
  let score = 0;
  // let nbMotsProposes = 0

  // On détermine la liste des mots ou des phrases à proposer à l'utilisateur
  // if (choix === "mots") {
  //     score = lancerBoucleDeJeu(listeMots)
  //     nbMotsProposes = listeMots.length
  // } else {
  //     score = lancerBoucleDeJeu(listePhrases)
  //     nbMotsProposes = listePhrases.length
  // }

  let btnValiderMot = document.getElementById("btnValiderMot"); // Ne pas oublier les guillemets dans les parenthèses !
  let inputEcriture = document.getElementById("inputEcriture");
  let i = 0;

  afficherProposition(listeMots[i]);

  btnValiderMot.addEventListener("click", () => {
    // console.log("J'ai cliqué")
    if (inputEcriture.value === listeMots[i]) { // si le mot écrit par l'utilisateur correspond bien au mot proposé, on augmente le score
      score++;
    }
    console.log(inputEcriture.value); // On récupère la valeur de l'input inputEcriture
    i++;
    afficherResultat(score, i);

    inputEcriture.value = ""; // on vide le champ d'écriture une fois validé
    if (listeMots[i] === undefined) {
      afficherProposition("Le jeu est fini !"); // si il n'y a plus de mot (= undefined), le jeu est fini
      btnValiderMot.disabled = true; // on désactive le bouton Valider
    } else {
      afficherProposition(listeMots[i]);
    }
  });

  // afficherResultat(score, nbMotsProposes)
  afficherResultat(score, i);
}