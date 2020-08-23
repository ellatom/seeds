
// Ex6.2 - Counting Duplicates
// Count the number of Duplicates
// Write a function that will return the count of distinct case-insensitive alphabetic
//characters and numeric digits that occur more than once in the input string.
//The input string can be assumed to contain only alphabets (both uppercase and lowercase)
//and numeric digits.
// Example
// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice

let word="ABBA";

const countDup=(word)=>{
let wordArr=word.toLowerCase().split("");
let newMap= new Map();
let arrDup=[];

wordArr.forEach(element=>{
    if(!newMap.has(element))
        newMap.set(element,Number(1));
    else
        newMap.set(element,Number(newMap.get(element))+1);
});

newMap.forEach((value,key)=>
{
    if(value>1)
        arrDup.push([key,value]);
});
return arrDup.length>0? arrDup: "no characters repeats more than once";
}

console.log(countDup(word));
