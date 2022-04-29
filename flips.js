// Import the coinFlip function from your coin.mjs file
import {coinFlips, countFlips} from "./modules/coin.mjs";

// Ask for user flips, Call the coinFlips function and put the return into STDOUT

import minimist from 'minimist'; 

const args = minimist(process.argv.slice(2)); 
const number = args.number || 1; 

//var number = process.argv.slice(2); //user input 

/*if (number == null | isNaN(number) | number <= 0){
    number = 1; 
}this comment is so i can push again*/ 

const flips = coinFlips(number);
console.log(flips);
console.log(countFlips(flips)); 

//Change for commit 