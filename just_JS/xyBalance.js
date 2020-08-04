



function xyBalance( str ) {
  
    //int xCount = 0;
    //int yCount = 0;
    let xCountIndex = 100;
    partial = false;
    noX = true;
    
    if( str.length == 1 && str.substring(0,1) == "y") return true;
    if( str.length == 0 ) return true;
    
    for(let i=0; i < str.length; i++){
      if(str.substring(i, i + 1) == "x"){
        xCountIndex = i;
        //xCount++;
        partial = false;
        noX = false;
      }
      if(str.substring(i, i + 1) == "y" && i > xCountIndex){
        if(i == str.length){
          return true;
        }
        partial= true;
      }
    }
    if(noX) return true;
    return partial ? true: false;
  }




  console.log("true: "+ xyBalance("aaxbby"));
  console.log("true: " + xyBalance("12xabxxydxyxyzz"));