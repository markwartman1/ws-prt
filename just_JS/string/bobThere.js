




function bobThere( str ) {
  
    for (let i=0; i <= str.length - 3; i++){
      if( str.substring(i, i + 1) == "b" &&
          str.substring(i + 2, i + 3) == "b"){
            return true;
          }
    }
    return false;
}





console.log("true: "+bobThere("b9b"));
console.log("true: "+bobThere("abcbob"));
console.log("true: "+bobThere("123abcbcdbabxyz")); // true