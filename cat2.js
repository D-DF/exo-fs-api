const fs       = require('fs');
let tableau    = process.argv;


if(tableau <= 2) {
    console.log(`Error: Il n'y a pas d'argument`)
    process.exit(1);
}


for(let i = 2; i < tableau.length; i++) {
  // check if file exists
  if (!fs.existsSync(tableau[i])) {
    console.log(`Error: ${tableau[i]} does not exist`)
    continue
  }

   let test = fs.readFileSync(tableau[i], 'utf-8')
   console.log(test)
}


