package codingBat;

public class isEverywhere {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

	}
	
	public static boolean isEverywhere(int[] nums, int val) {
		  
		  boolean past = true;
		  boolean present = true;
		  boolean future = true;
		  
		  for(int i =0; i < nums.length; i++){
		    
		    if(i > 0 && nums[--i] != val){
		      past = false;
		    }
		    
		    if(nums[i] != val){
		      present = false;
		    }
		    
		    if(i < nums.length && nums[++i] != val){
		      future = false;
		    }
		    
		    if(!past && !present && !future)  // not anywhere
		      return false;
		  }
		  
		  return true;
		}
	
	

}


