const fs = require('fs');


if(process.argv[2] !== "-l" && process.argv[2] !== "-w" && process.argv[2] !== "-c") {

    console.log(`Error: node wc.js -l ou -w ou -c nom du fichier`)

} else {
    if(process.argv[2] === "-l") {
        if (!fs.existsSync(process.argv[3])) {
            console.log(`Désoler ${process.argv[3]} n\'existe pas`)
            process.exit(1)
          }
          
        if(process.argv.length !== 4) {
            console.log(`Error: node wc.js -l nom du fichier`)
            process.exit(1);
        }
    
        let lireFichie = fs.readFileSync(process.argv[3], 'utf-8')
        let tableauLign = lireFichie.split('\n');
        let countLign = tableauLign.length;
        console.log(countLign + ' ' + process.argv[3])
    }
    
    if(process.argv[2] === "-w") {
        if (!fs.existsSync(process.argv[3])) {
            console.log(`Désoler ${process.argv[3]} n\'existe pas`)
            process.exit(1)
          }

        if(process.argv.length !== 4) {
            console.log(`Error: node wc.js -w nom du fichier`)
            process.exit(1);
        }
    
        let lireFichie = fs.readFileSync(process.argv[3], 'utf-8')
        let tableauLigne = lireFichie.split('\n');
        let countMot   = 0
    
        for(let i = 0; i < tableauLigne.length; i ++) {
            countMot += i;
        }
    
        console.log(countMot + ' ' + process.argv[3])
    }
    
    if(process.argv[2] === "-c") {

        if (!fs.existsSync(process.argv[3])) {
            console.log(`Désoler ${process.argv[3]} n\'existe pas`)
            process.exit(1)
          }

        if(process.argv.length !== 4) {
            console.log(`Error: node wc.js -c nom du fichier`)
            process.exit(1);
        }
    
        let lireFichie = fs.readFileSync(process.argv[3], 'utf-8')
        const tableau = lireFichie.split('');
        let caractere = tableau.length;
    
        console.log(caractere + ' ' + process.argv[3])
    }
}









