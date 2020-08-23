
// Ex2.1 - Sum of lowest numbers
// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers.
//No floats or non-positive integers will be passed.
// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.
// [10, 343445353, 3453445, 3453545353453] should return 3453455.
const arr1 = [19, 5, 42, 2, 77];
const arr2 = [10, 343445353, 3453445, 3453545353453];
let arr3 = [];

const getSumLowestNumbers = (arr2) => {
    arr3 = arr2.sort(function (a, b) {
        return a - b;
    });
    return arr3[0] + arr3[1];
}
// console.log(getSumLowestNumbers(arr1));
console.log(getSumLowestNumbers(arr2));