let myMap = new Map();
// myMap=[{id: "1",text:"go shopping",markedDone:true},
//         {id: "3",text:"go nails",markedDone:false}];
        // {id: "2",text:"go a",markedDone:false}];
    function getMap()
    {
        return myMap;
    }
    
    function addItem(item) {
        if(item)
        {
            
            if( typeof item.markedDone != 'boolean')
                return false;
            const newItem = {
                //create object
                id:item.id,
                text: item.text, 
                markedDone: item.markedDone,//true or false
                createdAt: new Date(),
            };
            if(item.text==="")
                return false;

            myMap.set(newItem.id, newItem);
            console.log(myMap);
            return true;
        }
        else{
            return false;
        }
    }


    function deleteItem(item) {
        if(item.id)
        {
            if(myMap.get(item.id))
            {
                myMap.delete(item.id);
                return true;
            }
        }
        return false;
    }

    function markAsDone(item)
    {
        if(item.id)
        {
            //console.log(myMap.size);
            if(myMap.get(item.id))
            {

                if(!item.markedDone===true)
                {    
                    myMap.get(item.id).markedDone=true;
                    return true;
                }
            }
        }
        return false;
    }

    function unmarkAsDone(item)
    {
        if(item.id)
        {
            if(item.markedDone===true)
            {
                myMap.get(item.id).markedDone=false;
                return true;
            }
        }
        return false;
    }

    function returnAllItemsDescByMark(myMap)
    {
        if(myMap)
        {
            let sortedMap = Array.from(myMap.values());

            sortedMap.sort(function (a, b) {
                return a.markedDone - b.markedDone;
            });

            return sortedMap;
        }    
        else 
            return false;   
    }

    //   //add item console
    //   addItem({id: "1",text:"go shopping",markedDone:true});
    //   addItem({id: "3",text:"go nails",markedDone:false});
      addItem({id: "2",text:"go a",markedDone:true});

      console.log(myMap);
    //   markAsDone("2");
    //   console.log(myMap);
    // console.log(returnAllItemsDescByMark(myMap));

    //   returnAllItemsDescByMark(myMap);
  
    //   console.log(myMap);
    //   console.log(myMap.get("1"));
    //   deleteItem("1");
    //   // console.log(myMap);
    //   console.log(myMap.has("1"));

    module.exports = {
        getMap,
        addItem,
        deleteItem,
        unmarkAsDone,
        markAsDone,
        returnAllItemsDescByMark,
    };