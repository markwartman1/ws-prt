

function miniMaxSum(arr) {

    let min = 9007199254740991;
    let max = -44444;
    let minIndex = -1;
    let maxIndex = -1;

    for(let i =0; i < arr.length; i++){

        if(min > arr[i]){
            min = arr[i];
            minIndex = i;
        }

        if(max < arr[i]){
            max = arr[i];
            maxIndex = i;
        }
    }
    min = 0;
    max = 0;
    for(let j =0; j < arr.length; j++){
        if(j != minIndex){
            max += arr[j];
        }

        if(j != maxIndex){
            min += arr[j];
        }
    }
    console.log(min + " " + max);
}

console.log(miniMaxSum([256741038, 623958417, 467905213, 714532089, 938071625]));