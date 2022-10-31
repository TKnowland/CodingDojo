var arr1 = [1, 3, 3, 5, 8, 10,];

var arr2 = [1, 3, 3, 5, 8, 10, 10, 10];

var arrA = [1, 3, 4, 5];
var arrB = [1, 3, 3, 5, 8, 10,];

function mergeDedupe(arr, arr2) {
    let i = 0;
    let j = 0;
    let newArr = [];
    while(i < arr.length && j < arr2.length) {
        if(arr[i] <= arr2[j]){
            if(newArr[newArr.length - 1] != arr[i]) {
                newArr.push(arr[i])
            }
            i++
        }else if(arr2[j] <= arr[i]) {
            if(newArr[newArr.length - 1] != arr2[j]) {
                newArr.push(arr2[j])
            }
            j++
        }
    }
    //loop remainder of longer array
    let temp;
    let h = 0;
    if(i < arr.length) {
        temp = arr.slice(i)
    }else if(j < arr2.length) {
        temp = arr2.slice(j)
    }
    while(h < temp.length){
        if(newArr[newArr.length - 1] != temp[h]){
            newArr.push(temp[h])
        }
        h++
    }
    console.log(newArr);
}



mergeDedupe([1, 3, 3, 5, 8, 10, 10], [1, 3, 4, 5]) 
mergeDedupe([2,3,3,5,8,10,12], [1,3,4,6])
