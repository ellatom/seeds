
// Ex6.1 - Mumbling
// This time no story, no theory. The examples below show you how to write function accum:
// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.


const mumbling=(mumbStr)=>
{
    let arrMumb =mumbStr.split("");
    let len=arrMumb.length;
    let i=1;
    let temp="";
    arrMumb.forEach(element=>
    {
        while(i<=arrMumb.indexOf(element)+1)
        {
                temp += element.repeat(1).toUpperCase()+element.repeat(i-1)+"-";
                i++;
        }
    });
    return temp.slice(0,-1);//from o not including the end.[0,end)]
};

console.log(mumbling("abcd"));