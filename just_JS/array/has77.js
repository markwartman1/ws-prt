function has77( nums) {
  
    if(nums.length == 3 &&
      ((nums[0] == 7 &&  (nums[1] == 7 || nums[2] == 7)) ||
      ( nums[1] == 7 && nums[2] == 7 ))){
        return true;
      }
  
  if(nums.length > 3){
    for(let i=0; i <= nums.length - 2; i++){
      
      if(nums[i] == 7 && nums[i + 1] == 7) return true;
      
      if( i < nums.length - 2 &&
        nums[i] == 7 && ( nums[i + 1] == 7 || nums[i + 2] == 7  )){
        return true;
      }
    }    
  }

  return false;
}



console.log("true: " + has77([1, 7, 7]));
console.log("false: " + has77([7, 2, 6, 2, 2, 7]));