const fs = require('fs')

if (process.argv.length === 3) {
    if (!fs.existsSync(process.argv[2])) {
        console.log(`Désoler ${process.argv[2]} n\'existe pas`)
        process.exit(1)
      }
    
    const lireFichier = fs.readFileSync(process.argv[2], 'utf-8')

    let tableauLigne = lireFichier.split('\n');
    let countLigne = tableauLigne.length;
    let countMot   = 0

    for(let i = 0; i < tableauLigne.length; i ++) {
        countMot += i;
    }

    const tableau = lireFichier.split('');
    let caractere = tableau.length;

    let final = `${countLigne} ${countMot} ${caractere} ${process.argv[2]}`

    console.log(final)

} else {
    console.log(`Error: node wc1.js nom du fichier`)
    process.exit(1);
}