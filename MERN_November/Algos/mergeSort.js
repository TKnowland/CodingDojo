var testArr = [88, 22, 44, 12, 99, 111, 9, 15, 49];

var mergeArr2 = [55,66];
var mergeArr1 = [33,44];

var mergeArrA = [33,44,55];
var mergeArrB = [11,66];

var arrLeft = [22];
var arrRight = [11,33];


function mergeSort(arr){
    if(arr.length == 1){
        return arr
    }
    let half = Math.floor(arr.length/2)
    let arrLeft = arr.slice(0, half)
    let arrRight = arr.slice(half)


    return combine(arrRight, arrLeft)
}



function combine(arr1, arr2) {
    let newArr = [];
    let i = 0;
    let j = 0;
    while(i < arr1.length || j < arr2.length){
        if(arr1[i] < arr2[j]){
            newArr.push(arr1[i])
            i++;
        }else{
            newArr.push(arr2[j])
            j++;
        }
    }
    if(i == arr1.length){
        let remainder = arr2.slice(j)
        console.log("blah blah")
        newArr.concat(remainder)
    }else{
        let remainder = arr1.slice(i)
        console.log("blah blah")
        newArr.concat(remainder)
    }

    return newArr;
}

console.log(combine(mergeArrB, mergeArrA))
// console.log(mergeSort(testArr))

