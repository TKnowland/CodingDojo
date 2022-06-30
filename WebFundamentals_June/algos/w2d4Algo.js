var nums = [22, 12, 0, 14, 1, 17];
var nums2 = [2,4,6,8,10];

function serchForNum(arr, numToFind) {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] == numToFind) {
            console.log("This array contains the number " + numToFind);
            return arr[i];
        }
    }

    console.log("This array does not contain the number " + numToFind);
    return -1;
}


// console.log(serchForNum(nums, 18));

var nestedArr = [
    [4,8,12],
    [2,4,6],
    [3,6,9,12]

]

function searchNestedArray(arr, numToFind) {
    for(let i = 0; i < arr.length; i++) {
        let subArray = arr[i];
        for(let j = 0; j < subArray.length; j++){
            if(subArray[j] == numToFind) {
                console.log(subArray[j]);
                // return subArray[j];
            }
        }
    }
}

searchNestedArray(nestedArr, 12)