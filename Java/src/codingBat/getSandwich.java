package codingBat;

public class getSandwich {

	public static void main(String[] args) {
		
		System.out.println(getSandwich("breadjambread"));
	}

	public static String getSandwich(String str) {

		boolean one = false;
		boolean two = false;
		boolean record = false;
		int start = -1;
		int end = -1;

		for (int i = 0; i < str.length() - 4; i++) {
			if (!one && str.substring(i, i + 5).equals("bread")) {
				System.out.println("ran 1 true");
				one = true;
				record = true;
				start = i + 5;
				continue;
			}

			if (one && record && str.substring(i, i + 5).equals("bread")) {
				System.out.println("ran 2 true");
				end = i;
				two = true;
			}
		}
		if (one && two)
			return str.substring(start, end);

		return "";
	}

}
