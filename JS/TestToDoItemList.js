let myMap = new Map();

//in case there are no more than 1M items
    function addItem(item) {

        const newItem = {
            //create object
            id:item.id,//Math.floor(Math.random() * 1000000),
            text: item.itemText, 
            markedDone: item.markedDone,//true or false
            createdAt: new Date(),
        };
        myMap.set(newItem.id, newItem);
    }


    function deleteItem(id) {
        myMap.delete(id);
    }

    function markAsDone(id)
    {
        if(id)
        {
            myMap.get(id).markedDone=true;
            return true;
        }
        return false;
    }

    function unmarkAsDone(item)
    {
        if(item)
        {
            myMap.get(item.id).markedDone=false;
            return true;
        }
        return false;
    }
    function returnAllItemsDescByMark(myMap)
    {
        let sortedMap = Array.from(myMap.values());

        sortedMap.sort(function (a, b) {
            return a.markedDone - b.markedDone;
        });

        return sortedMap;
    }

      //add item console
      addItem({id: "1",text:"go shopping",markedDone:true});
      addItem({id: "3",text:"go nails",markedDone:false});
      addItem({id: "2",text:"go a",markedDone:false});

    //   console.log(myMap);
    //   markAsDone("2");
    //   console.log(myMap);
    // console.log(returnAllItemsDescByMark(myMap));

    //   returnAllItemsDescByMark(myMap);
  
    //   console.log(myMap);
    //   console.log(myMap.get("1"));
    //   deleteItem("1");
    //   // console.log(myMap);
    //   console.log(myMap.has("1"));