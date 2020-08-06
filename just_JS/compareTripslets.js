



function compareTriplets(a, b) {
    let arr = [];
    let aCount = 0;
    let bCount =0;
    for(let i=0; i < a.length; i++){
        if(a[i] > b[i]){
            aCount++;
        } else if (a[i] < b[i]){
            bCount++;
        }
    }
    arr.unshift(bCount);
    arr.unshift(aCount);
    return arr;

}


console.log("expect: 1 1: " + compareTriplets([5, 6, 7], [3, 6, 10]));