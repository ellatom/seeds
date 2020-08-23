// Ex6.4 - isogram

// An isogram is a word that has no repeating letters, consecutive or non-consecutive.
// Implement a function that determines whether a string that contains only letters
//is an isogram. Assume the empty string is an isogram. Ignore letter case.
// isIsogram("Dermatoglyphics") == true
// isIsogram("aba") == false
// isIsogram("moOse") == false // -- ignore letter case
// Implement Functionality
const word1="moOse";
const isIsogram=(word1)=>
{
    let arrIso=word1.toLowerCase().split("").sort();

    for (let index = 0; index < arrIso.length-1; index++) {
        if(arrIso[index]==arrIso[index+1])
            return false;
    }
    return true;
}
console.log(isIsogram(word1));