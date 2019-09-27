//function arraySort(anArray) {
    // Your code here

    // var anArray = window.prompt(' Enter anArray in format [1,2,"w"] , \n Note:Strings should be in double quotes not single quotes');
      // var anArray = [4, 9, 2, 3, 5, 1, 'd', 'a', 'c', 'f']   
      
      


     /* 
    try{
        if(anArray.length !== 0 && typeof(JSON.parse(anArray)) === "object"){
        var run = arraySort(JSON.parse(anArray));
        return(JSON.stringify(run));
        }else{
            console.log('yeah')
            return("Field is empty");
        }
        
   }
   catch {
       console.log(anArray)
    if( anArray = ('string')){
        console.log('Yeah')
        return("invalid input");
   }

         
            else return (anArray);
        
    }*/
    
    ////////////////////////////////////////////////////////////////////
    function arraySort(anArray){
        var charanArray = Array();
        var oddanArray = Array();
        var evenanArray = Array();
        var returnObject = Object();
        var anArray = [4, 9, 2, 3, 5, 1, 'd', 'a', 'c', 'f'] 
        
        if(typeof(anArray) == 'string' ||  typeof(anArray) == 'number'){
           console.log('Yeah')
            return("invalid input");}

        for(var i = 0; i < anArray.length; i++){
            var value = anArray[i];

           if(typeof(value) === "string") {
            console.log[i]    
            charanArray.push(value)
            }
            else if(typeof(value) === "number"){
                if(anArray[i] % 2 === 0){
                    console.log[i]
                    evenanArray.push(value);
                }else{
                    console.log[i]
                    oddanArray.push(value);
                }
            }
            
            
        }
        returnObject.evens = evenanArray.sort();
        returnObject.odds = oddanArray.sort();
        returnObject.chars = charanArray.sort();
        console.log(returnObject);
        return returnObject;

        
    }

    arraySort([4, 9, 2, 3, 5, 1, 'd', 'a', 'c', 'f']);

module.exports = arraySort;