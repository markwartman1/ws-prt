package hackerRank;

public class Pangram {

	public static void main(String[] args) {
		
		// passes test case 0
		//System.out.println(pangrams("We promptly judged antique ivory buckles for the next prize"));
		// We promptly judged antique ivory buckles for the prize
		
		// test case 1 ???
		System.out.println("no X therefore no pangram");
		System.out.println(pangrams("We promptly judged antique ivory buckles for the prize"));

	}
	
	
static String pangrams(String s) {

    String pan = " ABCDEFGHIJKLMNOPQRSTUVWXYZ";

//    for(int i=0; i < s.length(); i++){
//    	
//    	System.out.println("testing s: " + s.substring(i, i+1));
//    	
//        for(int j=0; j < pan.length(); j++){
//        	
//        	System.out.println("testing pan: " + pan.substring(j, j+1));
//        	
//            if(s.substring(i, i+1).equalsIgnoreCase(pan.substring(j, j+1))){
//                break;
//            }
//            if(j == pan.length() - 1){
//                return "not pangram";
//            }
//        } 
//        
//    }
    for(int i=0; i < pan.length(); i++){
    	
    	System.out.println("testing pan: " + s.substring(i, i+1));
    	
        for(int j=0; j < s.length(); j++){
        	
        	System.out.println("testing s: " + s.substring(j, j+1));
        	
            if(s.substring(j, j+1).equalsIgnoreCase(pan.substring(i, i+1))){
                break;
            }
            
            if(j == s.length() - 1){
                return "not pangram";
            }
        } 
        
    }
    return "pangram";

}

}
