const fs       = require('fs');
const fichier  = process.argv[2];
const longueur = process.argv.length;
const stats    = fs.statSync(fichier);

// Vérifier qu'il entre qu'un seul fichier.
if(longueur > 3 || longueur <= 2) {
    console.log(`Error: Merci de spécifier un seul ou un fichier.`)
    process.exit(1);
}

// Vérifier que c'est bien un fichier 
if (!stats.isFile()) {
  console.log(`Error: ${fichier} is not a file`)
  process.exit(1)
}

// Vérifier si le fichier existe
if (!fs.existsSync(fichier)) {
    console.log(`Error: ${fichier} does not exist`)
    process.exit(1)
}

let test = fs.readFileSync(fichier, 'utf-8')
console.log(test);

