function reverse(arr) {
    var newArray = [];
    for (let i = arr.length -1; i >= 0; i--) {
        newArray.push(arr[i]);
    }
    return newArray;
}

var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); // we expect back ["e", "d", "c", "b", "a"]
