// Linear Search
// Problem: Given an array arr[] of n elements, write a function to search a given element x in arr[].
// Examples :
// Input : arr[] = {10, 20, 80, 30, 60, 50, 
//                      110, 100, 130, 170}
// x = 110;
// Output : 6
// Element x is present at index 6
// Input : arr[] = {10, 20, 80, 30, 60, 50, 
//                      110, 100, 130, 170}
// x = 175;
// Output : -1
// Element x is not present in arr[].
const linearSearch =(arr,x)=>
{
    for(let index=0;index<arr.length;index++)
        if(arr[index]==x)    
            return index;
    return -1;
}

function test()
{
    arr1= [10, 20, 80, 30, 60, 50, 110, 100, 130, 170];
    arr2= [10, 20, 80, 30, 60, 50, 110, 100, 130, 170];
    linearSearch(arr1,110)==-1? console.log("Element x is not present in arr"):console.log(linearSearch(arr1,110));
    linearSearch(arr2,175)==-1? console.log("Element x is not present in arr"):console.log(linearSearch(arr2,175));
}
test();