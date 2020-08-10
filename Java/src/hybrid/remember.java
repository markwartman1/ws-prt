package hybrid;

import java.util.HashMap;
import java.util.Map;

public class remember {

	public static void main(String[] args) {

		String sent = 
			"ok there. ok there. ok there miscelaneous. Unique sentences and count then."
				+"Any insertion order. Random random.";

		System.out.println(count(sent));

	}

	public static Map<String, Integer> count(String strings) {

		Map<String, Integer> map = new HashMap();
		
		String[] sentArr = strings.split("\\.");
		
		for(String s : sentArr) {
			
			s = s.trim();
			
			if( !map.containsKey(s)) {
				map.put(s, 1);
			} else {
				int val = map.get(s);
				val++;
				map.put(s, val);
			}
		}
		
		
//		System.out.println("Entire sentence as the Key");
//		System.out.println(map);
		return map;
	}

}
