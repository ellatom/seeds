// Binary Search 
// Binary Search is searching technique which works on Divide and Conquer approach. 
//It used to search any element in a sorted array.
// As compared to linear, binary search is much faster with Time Complexity of O(logN) 
//whereas linear search algorithm works in O(N) time complexity.
// Given a sorted array of numbers. The task is to search a given element  in the array using Binary search.

// Examples : 
// Input : arr[] = {1, 3, 5, 7, 8, 9}
//         x = 5
// Output : Element found!

// Input : arr[] = {1, 3, 5, 7, 8, 9}
//         x = 6
// Output : Element not found!

const binarySearch=(sortedArr,x)=>
{
    let start=0;
    let end=sortedArr.length-1;

   while(start<=end)
   {
       let mid=Math.floor((start + end)/2); 
   
       if (sortedArr[mid]===x) return true; 

       else if (sortedArr[mid] < x)  
            start = mid + 1; 
       else
            end = mid - 1; 
   }
   return false;
}

function test(){
arr1= [1, 3, 5, 7, 8, 9];
arr2= [1, 3, 5, 7, 8, 9];
binarySearch(arr1,5)==false? console.log("Element not Found"):console.log("Element found!");
binarySearch(arr2,6)==false? console.log("Element not Found"):console.log("Element found!");
}
test();