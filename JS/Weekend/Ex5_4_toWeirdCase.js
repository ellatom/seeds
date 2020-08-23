// Ex5.4 - To Weird Case
// Write a function toWeirdCase (weirdcase in Ruby) that accepts a
//string, and returns the same string with all even indexed characters
//in each word upper cased, and all odd indexed characters in each word ???
//lower cased. The indexing just explained is zero based, so the zero-ith
//index is even, therefore that character should be upper cased.
// The passed in string will only consist of alphabetical characters and spaces(' ').
//Spaces will only be present if there are multiple words. Words will be separated by a single space(' ').
// Examples:
// toWeirdCase( "String" );//=> returns "StRiNg"
// toWeirdCase( "Weird string case" );//=> returns "WeIrD StRiNg CaSe"

const toWeirdCase = (str1) => {

    let s1= str1.split(" ");
    let strImmutable="";
    for(let j=0;j<s1.length;j++)
    {
        for(let i=0;i<s1[j].length;i++)
        {
            if(i%2 === 0)
                strImmutable +=s1[j].charAt(i).toUpperCase();
            else
                strImmutable +=s1[j].charAt(i);
        }
        strImmutable += " ";
    }
    return strImmutable;
};
console.log(toWeirdCase("Weird string case"));
