



function diagonalDifference(arr) {
    let ans = 0;
    let primary = 0;
    let secondary = arr[0][0] - 1;
    let pSum = 0;
    let sSum = 0;
    console.log("this is secondary: " + secondary);

    for(let i=1; i < arr.length; i++){
        for(let j=0; j < arr[i].length; j++){
            if(primary == j){
                pSum += arr[i][j];
                console.log("primary: " + arr[i][j]);
            }
            if(secondary == j){
                sSum += arr[i][j];
                console.log("secondary: " + arr[i][j]);
            }
        }
        primary++;
        secondary--;
    }
    return Math.abs(pSum - sSum);
}


// second test
console.log("supposed to be 15: " + diagonalDifference([[3],[11,2,4],[4,5,6],[10,8,-12]]));

//console.log("negative: " + (Math.abs(19 - 4)));