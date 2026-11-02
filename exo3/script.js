"use strict";
//declaration B avec un seul parametre et retourn booleen vu slide 46
function B(resultat) {
    return resultat >= 10
    
}
//declaration tableau d'objet vu slide 41
const Students=[
    {num:1000,prenom:John,Nom:Doe,resultat:14,c:5},
    {num:2000,prenom:BOB,Nom:CARLTON,resultat:7,c:1},
    {num:3000,prenom:RAYANE,Nom:SMITH,resultat:13,c:3}
]
//declaration function Appel B vu slide 46
function A() {
//boucle for pour afficher la decision vu slide 45
    for (let i = 0; i <=2; i++) {
        const decision =B(Students[i].resultat)?"admis":"ajourne";
        console.log(Students[0].num + ":"+decision);
        
        
    }
    
}

