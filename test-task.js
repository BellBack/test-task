function loadGrain(levels) {
    let rightMaxValue = 0;
    let leftMaxValue = 0;
    let right = levels.length - 1;
    let left = 0;
    let result = 0;

    while (left <= right) {
        if (levels[left] > leftMaxValue) {
            leftMaxValue = levels[left];
        }
        if (levels[right] > rightMaxValue) {
            rightMaxValue = levels[right];
        }
        if (leftMaxValue >= rightMaxValue) {
            result += rightMaxValue - levels[right];
            right--;
        } else {
            result += leftMaxValue - levels[left];
            left++;
        }
    }
    return result;
}

function tests(){
    console.log(`1) test result — ${loadGrain([4, 1, 3])==2}`)
    console.log(`2) test result — ${loadGrain([2, 1, 5, 2, 7, 4, 10])==7}`)
    console.log(`3) test result — ${loadGrain([2, 0, 1, 5, 2, 7])==6}`) 
    console.log(`4) test result — ${loadGrain([2, 4, 2])==0}`) 
    console.log(`5) test result — ${loadGrain([7, 4])==0}`)
    console.log(`6) test result — ${loadGrain([])==0}`)  
}

tests();