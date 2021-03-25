let tableau = process.argv;
let phrase  = '';

for(let i = 2 ; i < tableau.length; i++) {
    phrase += tableau[i] + ' ';
}

  console.log(phrase)


