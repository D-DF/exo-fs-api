const fs             = require('fs');
const fichierACopier = process.argv[2]
const copieDuFichier = process.argv[3]

// Vérifier si le fichier existe
if (!fs.existsSync(fichierACopier)) {
    console.log(`Error: ${fichierACopier} does not exist`)
    process.exit(1)
}

// verifier le bon nombre d'argument
if (process.argv.length !== 4) {
    console.log(`usage: node cp.js fichier a copier fichier copier`)
    process.exit(1)
}



let test = fs.copyFileSync(fichierACopier, copieDuFichier)
console.log(test)