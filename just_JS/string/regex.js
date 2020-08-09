

function potatoes(str) {
	let arr = str.match(/(potato)/gi);
	console.log(arr.length);
	//return arr.length;
}

console.log(potatoes("Here is a Potato with potato"));