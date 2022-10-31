function insertionSort(arr){
    if(arr.length <= 1){
        return arr;
    }
    for(let i = 1; i < arr.length; i++){
        let temp = arr[i];
        let j;
        for(j = i-1; j >= 0; j--){
            if(arr[j] > temp){
                arr[j + 1] = arr[j];
            }else {
                break;
            }
        }
        arr[j + 1] = temp;
    }
    console.log(arr);
}

insertionSort([3, 5, 2, 1, 0])
insertionSort([3, 0])
insertionSort([0])
insertionSort([])
insertionSort([1, 2, 3, 4, 5])
insertionSort([5, 4, 3, 2, 1])
insertionSort([5, 4, 0, 2, 1])