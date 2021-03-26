const fs = require('fs');

if(process.argv[2] === "-l") {
    let lireFichie = fs.readFileSync(process.argv[3], 'utf-8')
    let tableauLign = lireFichie.split('\n');
    let countLign = tableauLign.length;
    console.log(countLign + ' ' + process.argv[3])
}

if(process.argv[2] === "-w") {
    let lireFichie = fs.readFileSync(process.argv[3], 'utf-8')
    let tableauLigne = lireFichie.split('\n');
    let countMot   = 0

    for(let i = 0; i < tableauLigne.length; i ++) {
        countMot += i;
    }

    console.log(countMot + ' ' + process.argv[3])
}

if(process.argv[2] === "-c") {
    let lireFichie = fs.readFileSync(process.argv[3], 'utf-8')
    const tableau = lireFichie.split('');
    let caractere = tableau.length;

    console.log(caractere + ' ' + process.argv[3])
}


if(process.argv.length === 3) {
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
}



