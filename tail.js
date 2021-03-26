
const fs = require('fs');

if (process.argv[2] !== "-n") {
    const stats = fs.statSync(process.argv[2])

    if (process.argv.length !== 3) {
        console.log(`Error: node tail.js nom de votre fichier`)
        process.exit(1)
    }

    if (!stats.isFile(process.argv[2])) {
        console.log(`${process.argv[2]} n\'est pas un fichier`)
        process.exit(1)
    }

    // Lire le fichier
    const lireFichier = fs.readFileSync(process.argv[2], 'utf-8');

    // Récupérer chaque phrase du fichier, sous forme de tableau
    const tableauFichier = lireFichier.split('\n');
    let resultat = ""

    // Récupération des 10dernières lignes du texte.
    for(let i = tableauFichier.length - 10; i < tableauFichier.length; i ++) {
            resultat += tableauFichier[i]
    }

    console.log(resultat)
}

if(process.argv[2] === "-n") {
    const lire = fs.readFileSync(process.argv[4], 'utf-8');
    const tableau = lire.split('\n')
    const recupLigne = process.argv[3];
    let resul = ""

    for(let i = tableau.length - recupLigne; i < tableau.length; i ++) {
        resul += tableau[i];
    }

    console.log(resul)
}
