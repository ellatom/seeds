const baseEndpoint = "https://swapi.dev/api/";
//const fetch = require("node-fetch");

let myPeopleArr = [];
let myPeoplePlanetsArr = [];

async function fetchCharacters(query, maxItems = 100) {

    let results = [];
    let nextQuery = null;//next page

    do {
        let url = nextQuery || `${baseEndpoint}${query}`;
        const res = await fetch(url);//take 
        const data = await res.json();
        nextQuery = data.next;

        for (const item of data.results) {
            results.push(item);
        }
        
    } while (nextQuery && results.length < maxItems);

    return results;
}

async function fetchAndDisplay(query, maxItems) {
    const characters = await fetchCharacters(query, maxItems);
    let results = characters;

    results.forEach((el) => {
        if (query === "people/") {
            myPeopleArr.push({
                name: el.name,
                height: el.height,
                hair_color: el.hair_color,
                homeworld: el.homeworld,
            });
        }
        if (query == "planets/") {
            myPeopleArr.forEach((elArr, index) => {//for each people looking matching planet
                if (elArr.homeworld === el.url) {
                    elArr.homeworld = {
                        population: el.population,
                        homeworldName: el.name,
                    };
                    myPeoplePlanetsArr.push(elArr);
                }
            });
        }
    });
}

async function createDynamicallyTable(myPeoplePlanetsArr) {

    let body = document.querySelector("body");

    if (myPeoplePlanetsArr.length === 0) {
        body.innerText = "No Data was fetched";
        return;
    }
    let h2 = body.appendChild(document.createElement("h2"));
    h2.innerText="Star Wars API Data";
    let div = body.appendChild(document.createElement("div"));
    div.classList.add("tablePeoplePlanets");

    let table = div.appendChild(document.createElement("table"));
    let thead = table.appendChild(document.createElement("thead"));

    createRow(thead, ["#", "Name", "Height", "Hair Color", "Population", "Homeworld"], "th");

    ////////////////////////////////////////////////

    let tbody = document.createElement("tbody");
    table.appendChild(tbody);

    myPeoplePlanetsArr.forEach((el, i) => {
        createRow(tbody, [
            i + 1,
            myPeoplePlanetsArr[i].name,
            myPeoplePlanetsArr[i].height,
            myPeoplePlanetsArr[i].hair_color,
            myPeoplePlanetsArr[i].homeworld.population,
            myPeoplePlanetsArr[i].homeworld.homeworldName
        ], "td");
    });

}

function createRow(parent, items, tag) {
    let tr = parent.appendChild(document.createElement("tr"));

    for (const item of items) {
        let th_td = tr.appendChild(document.createElement(tag));
        let text = th_td.appendChild(document.createTextNode(item));
    }
}

try {
    fetchAndDisplay(`people/`, 10)
        .then(response => {
            fetchAndDisplay(`planets/`)
                .then(response => {
                    console.log(myPeoplePlanetsArr);
                    console.table(myPeoplePlanetsArr);
                    createDynamicallyTable(myPeoplePlanetsArr);
                });
        });

} catch (error) {
    console.log(error);
}
