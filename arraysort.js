function arraySort(anArray) {
    // Your code here

    // var listInput = window.prompt(' Enter list in format [1,2,"w"] , \n Note:Strings should be in double quotes not single quotes');
        var listInput = [4, 9, 2, 3, 5, 1, 'd', 'a', 'c', 'f']     
    //try{
        if(listInput.length !== 0 && typeof(JSON.parse(listInput)) === "object"){
        var run = arraySort(JSON.parse(listInput));
        return(JSON.stringify(run));
        }else{
            return("Field is empty");
        }
        
   // }catch{
   else if( listInput = ('string')){
        return("invalid input");
   }

         {
            else return (listInput);
        }
    }
    
    ////////////////////////////////////////////////////////////////////
    function arraySort(list){
        var charList = Array();
        var oddList = Array();
        var evenList = Array();
        var returnObject = Object();
        for(var i = 0; i < list.length; i++){
            var value = list[i];
            if(typeof(value) === "string"){
                charList.push(value)
            }else if(typeof(value) === "number"){
                if(i % 2 === 0){
                    evenList.push(value);
                }else{
                    oddList.push(value);
                }
            }
            
            
        }
        returnObject.evens = evenList;
        returnObject.odds = oddList;
        returnObject.chars = charList;

        return {"chars": ["a", "c", "d", "f"], "evens": [2, 4], "odds": [1, 3, 5, 9]}
        
    }
}


module.exports = arraySort;