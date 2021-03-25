const fs = require('fs');
const tableau = process.argv
let fichierAcopier = ""
let copieDuFichier = tableau.pop(); 
let test = ""

for(let i = 2; i < tableau.length; i++) {
    fichierAcopier += tableau[i] + ' ';
    console.log(fichierAcopier)
    
    test = fs.appendFileSync(copieDuFichier, fichierAcopier)
}

console.log(test)





