// Ex5.3 - To Camel Case
// Complete the method/function so that it converts dash/underscore delimited ???
//words into camel casing. The first word within the output should be capitalized
//only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).
// Examples
// toCamelCase("the-stealth-warrior") // returns "theStealthWarrior"
// toCamelCase("The_Stealth_Warrior") // returns "TheStealthWarrior"
function getStrWithCamelCase(str)
{
    let camelStr="";

    for(let i=0; i <str.length; i++)
    {
        let char = str[i];

        if( char== '-' || char == '_')
        {
            i++;
            camelStr += str[i].toUpperCase();
        }
        else
            camelStr += char;
    }
    return camelStr;
}

console.log(getStrWithCamelCase("the-stealth-warrior"));

