package hybrid;

import java.util.HashMap;
import java.util.Map;

public class CountWordsLongString {

	public static void main(String[] args) {

		String sent = 
			"ok there. ok there. ok there miscelaneous";

		System.out.println(count(sent));

	}

//	public static Map<String, Integer> count(String strings) {
//
//		Map<String, Integer> map = new HashMap();
//		
////		String[] thestrings = strings.split("\\.");
//		String[] thestrings = strings.split(" ");
//		System.out.println(thestrings.length);
//
//		for (String s : thestrings) {
//			s = s.trim();
//			s = s.replace(".", "");
//			s = s.replace(",", "");
//			s = s.replace("\'", "");
//			String[] str = s.split(" ");
//
//			for(String i : str) {
//				
//				if (!map.containsKey(i)) {
//					map.put(i, 1);
//				} else {
//					int val = map.get(i);
//					val++;
//					map.put(i, val);
//				}
//			}
//		}
//		System.out.println("just printing map");
//		System.out.println(map);
//		return map;
//	}
	
	public static Map<String, Integer> count(String strings) {

		Map<String, Integer> map = new HashMap();
		
//		String[] thestrings = strings.split("\\.");
		String[] thestrings = strings.split(" ");
		System.out.println(thestrings.length);

		for (String s : thestrings) {
			s = s.trim();
			s = s.replace(".", "");
			s = s.replace(",", "");
			s = s.replace("\'", "");
			
				
			if (!map.containsKey(s)) {
				map.put(s, 1);
			} else {
				int val = map.get(s);
				val++;
				map.put(s, val);
			}
			
		}
		System.out.println("just printing map");
		System.out.println(map);
		return map;
	}

}
