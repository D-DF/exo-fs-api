let tableau = process.argv;
let phrase  = '';

if(tableau.length < 3) {
    console.log(`Error: Il n'y a pas de message a afficher`);
    process.exit(1);
}

for(let i = 2 ; i < tableau.length; i++) {
    phrase += tableau[i] + ' ';
}

  console.log(phrase)


