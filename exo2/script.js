"use strict";
//declaration d'un tableau "Etudiants" vu slide 40
const Etudiants=["Etudiant1","Etudiant2","Etudiant3"];
//declaration de l'objet "Etudiant" vu slide 40
const Etudiant= {
    nom:'John',
    prenom:'Doe',
    age:30
}
//declaration de tableau d'objet "tabEtud" vu slide 41
const tabEtud =[
{
    nom:'nom1',
    prenom:'prenom1',
    age:21
},
{
    nom:'nom2',
    prenom:'prenom2',
    age:22
},
{
    nom:'nom3',
    prenom:'prenom3',
    age:23
}

]
// declaration des fonction sans parametre F1,F2,F3 vu slide 46
function F1() {
    // on utilise la boucle "for"poue afficher les trois etudiant de tableau Etudiants vu slide 45
    for (let i = 0; i <=2; i++) {
        console.log(Etudiants[i]);
    }
}
function F2() {
     //affichage avec console.log vu slide 34
    console.log(Etudiant);
}
function F3() {
    // on utilise la boucle "for"poue afficher les trois etudiant de tableau tabEtud vu slide 45

    for (let i = 0; i <=2; i++) {
        console.log(tabEtud);
        
        
    }
    
}