import {flipACoin} from "./modules/coin.mjs";

var call = process.argv.slice(2); //user input 

if (call == "heads" | call == "tails"){
    console.log(flipACoin(call)); 
}
else { 
    console.log("Error: wrong input.");
    console.log("Usage: node guess-flip --call=[heads|tails]");
}