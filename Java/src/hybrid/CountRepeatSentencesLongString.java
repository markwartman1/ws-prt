package hybrid;

import java.util.HashMap;
import java.util.Map;

public class CountRepeatSentencesLongString {

	public static void main(String[] args) {

		String sent = 
			"ok there. ok there. ok there miscelaneous. Unique sentences and count then."
				+"Any more in there to see insertion order. Random random.";

		System.out.println(count(sent));

	}

	public static Map<String, Integer> count(String strings) {

		Map<String, Integer> map = new HashMap();
		
		String[] thestrings = strings.split("\\.");

		for (String s : thestrings) {
			
			s = s.trim();
			
			if (!map.containsKey(s)) {
				map.put(s, 1);
			} else {
				int val = map.get(s);
				val++;
				map.put(s, val);
			}
			
			//s = s.replace(",", "");
			//s = s.replace("\'", "");
			//String[] str = s.split(" ");

//			for(int i=0; i < s.length(); i++) {
//				
//				
//			}
		}
		System.out.println("Entire sentence as the Key");
		System.out.println(map);
		return map;
	}

}
