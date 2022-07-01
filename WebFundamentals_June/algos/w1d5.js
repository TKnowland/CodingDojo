var array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


function reverse(arr) {
    var newArray = [];
    for (let i = arr.length -1; i >= 0; i--) {
        newArray.push(arr[i]);
    }
    console.log(newArray)
}

reverse(array)