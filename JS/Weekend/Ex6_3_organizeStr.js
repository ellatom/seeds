// Ex6.3 - organize strings
// Take 2 strings s1 and s2 including only letters from a to z.
//Return a new sorted string, the longest possible, containing distinct letters,
// each taken only once - coming from s1 or s2.
// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"
// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

let a ="xyaabbbccccdefww";//check edge case
let b ="xxxxyyyyabklmopq";

const longest=(a,b)=>
{
    let arrDup=(a + b).split("").sort();
    let result = [];

    for (let index = 0; index < arrDup.length-1; index++) {
        if(arrDup[index]!=arrDup[index+1])
            result.push(arrDup[index]);
    }
    return result.sort().join("");
