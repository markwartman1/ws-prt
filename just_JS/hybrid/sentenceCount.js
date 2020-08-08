

function count(strings) {

    let map = new Map();

    for (let s of strings) {
        console.log("sentence: " + s);
        let str = s.split(" ");
        //let arrayDelimitedByPeriod = s.split("."); //\\./g
        //let arrayDelimitedByPeriod = s.match( /[^\.!\?]+[\.!\?]+/g ); // from stackoverflow
        let arrayDelimitedByPeriod = s.match( /[\.]+/g );
        // str.match( /[^\.!\?]+[\.!\?]+/g );
        console.log("here is the for loop");
        for (const a in arrayDelimitedByPeriod) {
            console.log(a);
        }

        if (!map.has(str[0])) {
            map.set(str[0], arrayDelimitedByPeriod.length);
        } else {
            let val = map.get(str[0]);
            val += arrayDelimitedByPeriod.length;
            map.set(str[0], val);
        }
    }
    return map;
}


function start() {
    let sent = [
        "Hi there. how are you. I'm ok. how about another.",
        "Here is another. I hope this does it. Gets the accureate count.",
        "oh yeah.",
        "oh yeah.",
        "oh yeah.",
        "And, if your unsure just test a little more."
    ];

    console.log(count(sent));

}

start();