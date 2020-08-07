package hackerRank;

public class symetric {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		staircase(6);
	}
	
    static void staircase(int n) {
        int count = n - 1;
        for(int i=0; i < n; i++){
            
            for(int j=0; j < n; j++){
                if(j < count){
                    System.out.print(" ");
                } else if(j <= n - 2) {
                    System.out.print("#");
                } else {
                    System.out.print("#\n");
                }
                
            }
            count--;
            
            
        }



    }

}
