// Ex5.6 - Mask
// Usually when you buy something, you're asked whether your credit card number,
//phone number or answer to your most secret question is still correct. However,
//since someone could look over your shoulder, you don't want that shown on your
//screen. Instead, we mask it.
// Your task is to write a function maskify, which changes all but the last four characters into '#'.
// Examples
// maskify("4556364607935616") == "############5616"
// maskify(     "64607935616") ==      "#######5616"
// maskify(               "1") ==                "1"
// maskify(                "") ==                 ""
// // "What was the name of your first pet?"
// maskify("Skippy")                                   == "##ippy"
// maskify("Nananananananananananananananana Batman!") == "####################################man!"

const strToMusk = "Nananananananananananananananana Batman!";
const muskify = (strToMusk) => {
    let newStr = strToMusk;
    let len=newStr.length;
    if (strToMusk.length <= 3)
        return newStr;
    else {
        newStr="#".repeat(len-4)+strToMusk.substring(len-4,len);
    }
    return newStr;
}
console.log(muskify(strToMusk));

