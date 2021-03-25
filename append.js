const fs      = require('fs');
const tableau = process.argv;
let nouveauFichier;

if (tableau.length <= 3) {
    console.log(`Error: Il n'y a pas assez d'argument.`)
    process.exit(1)
}

for(let i = 2; i < tableau.length; i++) {
    const stats = fs.statSync(tableau[i])

    if (!stats.isFile(tableau[i])) {
    console.log(`Error: Ceci n'est pas un fichier`)
    process.exit(1)
    }

    nouveauFichier = fs.readFileSync(tableau[i], 'utf-8')
    fs.appendFileSync(tableau[tableau.length - 1], nouveauFichier)
}

console.log(nouveauFichier)
