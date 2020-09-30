
let typeProviders = [
    function(value) { return value.match(/^(true|false)$/i) ? new Boolean(value) : null },
    function(value){ value.match(/^-?\d*\.\d+$/) ? parseFloat(value) : null},
    function(value){ value.match(/^-?\d+$/) ? parseInt(value) : null},
    function(value){ value.match(new RegExp("^https?://")) ? new URL(value) : null},
    // value => value.startsWith('https://' || 'http://') ? new URL(value) : null,
];


let result = 
    parseCsvFile('/home/ellatom/Desktop/HTMLSENDBOX/JS/CSVParser/csvFile.csv');

console.log(result);


function parseCsvFile(filename) {
    try {

        let fs = require('fs');
        let data = fs.readFileSync(filename, 'utf8');

        return parseCsvText(data);

    } catch (error) {
        console.error(error);
    }
}

function parseCsvText(data) {
    
    try {
        let lines = data.split("\n");

        let header = readHeader(lines[0]);
        let result = readLines(header, lines);

        return result;

    } catch (error) {
        console.error(error);
    }
}
function readHeader(line)
{
    return splitLine(line);
}
function readLines(header, lines)
{
    let result = [];

    // skip the first line as it's header
    for (var i = 1; i < lines.length; i++) {
        let line = lines[i];

        if (line.length === 0)
            break;
        
        let fields = splitLine(line);
        let obj = buildObjectFromFields(header, fields);
        result.push(obj);    
    } 

    return result;
}
function splitLine(line)
{
    let fields = 
        line.split(",").map(o => o.trim());   

    return fields;
}
function  buildObjectFromFields(header, fields)
{
    let result = {};

    for (var j = 0; j < header.length; j++) {
        result[header[j]] = convetFieldToType(fields[j]);   
    }

    return result;
}

function convetFieldToType(fieldValue)
{
    for (let n = 0; n < typeProviders.length; n++)
    {
        let result = 
            typeProviders[n](fieldValue);

        if (result)
            return result;
    }

    return fieldValue;
}