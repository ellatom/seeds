//this code will work if the file isn't really large, otherwise another function should be added 
//which split to chunks the file
//example csv
let csv= "Name, Age, Country \n Omri, 35, Israel \n Yamada, 23, Japan \n Roger, 44, https://personal.psu.edu/xqz5228/jpg.jpg";
let parsedCsv=[{name:'omri',age:35,country:'israel'}];

// console.log(csvFile);
console.log(csvToJSON(csv));

function csvToJSON(csv){

    try{
        let lines=csv.split("\n");
    
        let result = [];
    
        let headers=lines[0].split(",");
        //complexity O(n^2)
        for(var i=1;i<lines.length;i++)
        {
    
            let obj = {};
            let currentline=lines[i].split(",");
    
            for(var j=0;j<headers.length;j++){
                if(currentline[j].trim().startsWith('https://'|| 'http://'))
                {
                    obj[headers[j]] = new URL(currentline[j].trim());
                    // console.log(Boolean(obj[headers[j]])) check if url added
                }
                if(!isNaN(currentline[j].trim())) 
                    obj[headers[j]] = parseInt(currentline[j].trim());
                else
                    obj[headers[j]] = currentline[j];
            }
    
            result.push(obj);
        }
        jsonFormat=JSON.parse(JSON.stringify(result));
        return jsonFormat; //JSON
    }
    catch(e)
    {
        console.log("Error:"+e);
    }
  }

