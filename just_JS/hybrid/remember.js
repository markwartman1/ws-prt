
function count(string) {

    let map = new Map();

    let sentArr = string.split(".");

    for(let sent of sentArr){

        sent = sent.trim();

        if( !map.has(sent)){
            map.set(sent, 1);
        } else {
            let val = map.get(sent);
            val++;
            map.set(sent, val);
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