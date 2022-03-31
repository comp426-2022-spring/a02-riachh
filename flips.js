// Import the coinFlip function from your coin.mjs file
import {coinFlips, countFlips} from "./modules/coin.mjs";

// Ask for user flips, Call the coinFlips function and put the return into STDOUT


/*import { createRequire } from "module";
const require = createRequire(import.meta.url);
const number = require("minimist")(process.argv.slice(2))*/

var number = process.argv.slice(2); //user input 

if (number == null | isNaN(number) | number <= 0){
    number = 1; 
}

var flips = coinFlips(number);
console.log(flips);
console.log(countFlips(flips)); 