package hybrid;

import java.util.HashMap;
import java.util.Map;

public class CountSentences {

	public static void main(String[] args) {

		String[] sent = { 
			"hi there. how are you. I'm ok. how about another",
			"here is another. I hope this does it. Gets the accureate count.",
			"oh yeah.",
			"oh yeah.",
			"oh yeah."
		};

		System.out.println(count(sent));

	}

	public static Map<String, Integer> count(String[] strings) {

		Map<String, Integer> map = new HashMap();

		for (String s : strings) {
			
			String[] str = s.split(" ");
			String[] strBySent = s.split("\\.");

			if (!map.containsKey(str[0])) {
				map.put(str[0], strBySent.length);
			} else {
				int val = map.get(str[0]);
				val += strBySent.length;
				map.put(str[0], val);
			}
		}
		System.out.println("The very first word in the sentence is put in as the key");
		System.out.println("Sentence count is the value");
		System.out.println(map);
		return map;
	}

}
