

function count(strings) {

    let map = new Map();

    for (let s of strings) {
        console.log("sentence: " + s);
        let str = s.split(" ");
        //let arrayDelimitedByPeriod = s.split("."); //\\./g
        //let arrayDelimitedByPeriod = s.match( /[^\.!\?]+[\.!\?]+/g ); // from stackoverflow
        let arrayDelimitedByPeriod = s.match( /[\.]+/g );
        // str.match( /[^\.!\?]+[\.!\?]+/g );

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
        "oh yeah."
    ];

    console.log(count(sent));

}

start();