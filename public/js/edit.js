var syllable = require("syllable");

function isHaiku(string){

var phrases = string.split(",");
if(phrases[0]===syllable(5)&&phrases[1]===syllable(7)&&phrases[2]===syllable(5)){
    return true; 
}
else return false;

}