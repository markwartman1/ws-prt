package codingBat;

import java.awt.List;
import java.util.ArrayList;

public class MiddleAverage {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		int[] tryThis = {100, 0, 5, 3, 4};
		System.out.println("ans: " + centeredAverage(tryThis));
	}
	
	public static int centeredAverage(int[] nums) {
		  
		  int largest = nums[0];
		  int smallest = nums[0];
		  //int count_Lg = 0;
		  //int count_Sm = 0;
		  //int[] myNums = new int[nums.length - 1];
		  ArrayList<Integer> myNums = new ArrayList<>();
		  int indexSm = 99;
		  int indexLg = 99;
		  
		  for(int i =0; i < nums.length; i++){
		    
		    if(largest <= nums[i]){
		      largest = nums[i];
		      indexLg = i;            // record index
		    }
		    if(smallest >= nums[i]){
		      smallest = nums[i];
		      indexSm = i;            // record index
		    }
		  }
		  System.out.println("largest: " + indexLg);
		  System.out.println("smallest: " + indexSm);
		  
		  //int index = 0;
		  for(int j = 0; j < nums.length; j++){
		    if(indexLg == j || indexSm == j){
		      continue;
		    }
		    myNums.add(nums[j]);
		    //index++;
		  }
		  
		  int sum = 0;
		  for(int k = 0; k < myNums.size(); k++){
		    sum += myNums.get(k);
		    
		  }
		  System.out.println("myNums: " +myNums);
		  
		  return sum / myNums.size();
		}


}
