
function exampleMap() {
    let recipeMap = new Map([
        ['cucumber', 500],
        ['tomatoes', 350],
        ['onion', 50]
    ]);

    console.log("searching for cucumber:500?: "+recipeMap.get('cucumber'));
    // iterate over keys (vegetables)
    for (let vegetable of recipeMap.keys()) {
        console.log(vegetable); // cucumber, tomatoes, onion
    }

    // iterate over values (amounts)
    for (let amount of recipeMap.values()) {
        console.log(amount); // 500, 350, 50
    }

    // iterate over [key, value] entries
    for (let entry of recipeMap) { // the same as of recipeMap.entries()
        console.log(entry); // cucumber,500 (and so on)
    }

}

console.log("this would return undefined: " + exampleMap());
