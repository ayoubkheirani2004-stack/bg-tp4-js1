"use strict";
function f1(nom,prix,quantite){
    console.log(quantite*prix);
}
const produit =[
    {nom:produit1,prix:14,quantite:16},
    {nom:produit2,prix:33,quantite:10},
    {nom:produit3,prix:67,quantite:12},
    {nom:produit4,prix:78,quantite:9},
    {nom:produit5,prix:10,quantite:23}
];
const PrixMoyen=produit.reduce((t,p)=>t+p.prix,0);
console.log("prix Moyen=",PrixMoyen);

  const nbrTotal =produit.reduce((t,p)=>t+p.quantite,0);
  console.log("le nombre total des produit est:",nbrTotal);

  const valeurStock=produit.reduce((t,p)=>t+p.prix*p.quantite,0);
console.log("valeur de Stock=",valeurStock);
  
function valeurStock(prix,quantite){
    return produit.prix*produit.quantite;

}
console.log("valeur de stock=",valeurStock(produit));

function Traitement(catalogue,callback){
    for (const p of catalogue) {
        callback(p);
    }

}
function affichernom(p){
    console.log(p.nom);
    
}
function afficherprix(p){
    console.log(p.prix);
    
}