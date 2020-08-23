// Ex7 - Implement The Following JS Methods -
// Implement the following methods -
//     • Filter
//     • ForEach
//     • Map
// Using only for(), array and objects (without other js methods)

// Filter

let arraFilter=["ella","red"];

function bFilter(item)//can add until 3 params
{
    return item == "ella" ;
}
function myFilter(array, callback)
{
    const results = [];

    for (let i = 0; i < array.length; i++) {
        if (callback(array[i],i,array))
            results.push(array[i]);
    }

    return results;
}

console.log(myFilter(arraFilter, bFilter));


//forEach
let arraForEach=["ella","red"];

function bForEach(item)
{
    console.log(item);
}
function myForEach(array, callback)
{
    for (let i = 0; i < array.length; i++) {
        callback(array[i],i);
    }
}

myForEach(arraForEach, bForEach);

//Map
let arraMap=["ella","red"];

function bMap(item)
{
    return item.toUpperCase();
}
function myMap(array, callback)
{
    const results = [];

    for (let i = 0; i < array.length; i++) {
        results.push(callback(array[i]));
    }
    return results;
}

console.log(myMap(arraMap, bMap));

