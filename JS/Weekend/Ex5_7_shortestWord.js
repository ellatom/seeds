
// Ex5.7 - shortest words
// Simple, given a string of words, return the length of the shortest word(s).
// String will never be empty and you do not need to account for different data types.

const strWords="Always look on the brigth side of life";//option split +
const shortestWord=(strWords)=>
{
    let newStr=strWords.split(" ");
    let newMap= new Map();
    let i=0;

    newStr.forEach(element=>{
        if(!newMap.has(element))
            newMap.set(element,Number(element.length));
    });
    let min=Infinity;

    newMap.forEach((value,key)=>
    {
        if(min>=value)
            min=value;
    });
    return min;
}
console.log(shortestWord(strWords));