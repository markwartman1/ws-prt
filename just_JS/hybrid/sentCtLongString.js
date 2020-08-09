
function count(string) {

    let map = new Map();

    let arr = string.split(".");

    for (let i of arr) {
        console.log("sentence: " + i);
        i = i.trim();
        //let str = s.split(" ");
        //let arrayDelimitedByPeriod = s.split("."); //\\./g
        //let arrayDelimitedByPeriod = s.match( /[^\.!\?]+[\.!\?]+/g ); // from stackoverflow
        // str.match( /[^\.!\?]+[\.!\?]+/g );
        
        //let arrayDelimitedByPeriod = s.match( /[\.]+/g );
        
        if (!map.has(i)) {
            map.set(i, 1);
        } else {
            let val = map.get(i);
            val++;
            map.set(i, val);
        }
    }
    return map;
}


function start() {
    let oneLongSentence = 
        "Hi there. how are you. I'm ok. how about another.Here is another. I hope this does it. Gets the accureate count."
        +"ok there."
        +"ok there."
        +"ok there."
        +"And, if your unsure just test a little more."
    ;

    console.log(count(oneLongSentence));

}

start();