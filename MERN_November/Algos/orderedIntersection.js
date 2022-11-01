const arrA1 = [0, 1, 2, 2, 2, 7];
const arrB1 = [2, 2, 6, 6, 7];
const expected1 = [2, 7];

const arrA2 = [0, 1, 2, 2, 2, 7];
const arrB2 = [2, 2];
const expected2 = [2];

const arrA3 = [0, 1, 2, 2, 2, 7];
const arrB3 = [10];
const expected3 = [];


/**
 * Venn Diagram Visualization (bottom):
 * https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg
 * - Time: O(n) linear, n = max(sortedA.length, sortedB.length) when there are
 *    dupes we may end up looping over all items of longer arr.
 * - Space: O(n) linear, n = shorter array length.
 * @param {Array<number>} sortedA
 * @param {Array<number>} sortedB Both sets are multisets
 *    (multi in that it can contain multiple dupes).
 * @returns {Array<number>} returns The sorted set intersection: a new array that is
 *    sorted and contains only the shared values between the two arrays
 *    deduped.
 */

function orderedIntersection(arr1, arr2) {
    //1. instantiate indices 
    let i = 0;
    let j = 0;
    //2. instantiate return value
    let newArr = [];
    //3. loop through both arrays, checking for and pushing matching values, incrementing otherwise
    while(i < arr1.length && j < arr2.length) {
        if(arr1[i] < arr2[j]){
            i++
        }else if(arr2[j] < arr1[i]) {
            j++
        }else{
            if(newArr[newArr.length - 1] != arr1[i]){
                newArr.push(arr1[i])
            }
            i++
            j++
        }
    }
    //4. return combined array
    return newArr;
}



console.log(orderedIntersection(arrB1, arrA1))
console.log(orderedIntersection(arrB2, arrA2))
console.log(orderedIntersection(arrB3, arrA3))
