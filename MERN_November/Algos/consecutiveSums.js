/* 
  You are given a list of integers. Find all the consecutive sets of 
  integers that adds up to the sum passed in as one of the inputs.
*/

const nums1 = [2, 5, 3, 6, 7, 23, 12];
const sum1 = 16;
const expected1 = [
  [2, 5, 3, 6],
  [3, 6, 7],
];

const nums2 = [];
const sum2 = 5;
const expected2 = [];

const nums3 = [10, 15, 20, 35, 30];
const sum3 = 5;
const expected3 = [];

// Bonus:
const nums4 = [2, 5, 3, 6, 7, 0, 0, 23, 13];
const sum4 = 16;
const expected4 = [
  [2, 5, 3, 6],
  [3, 6, 7],
  [3, 6, 7, 0],
  [3, 6, 7, 0, 0],
];

// Bonus:
const nums5 = [-2, -5, -3, -6, -7, -0, -0, -23, -12]; 
const sum5 = -16;
const expected5 = [
  [-2, -5, -3, -6],
  [-3, -6, -7],
  [-3, -6, -7, -0],
  [-3, -6, -7, -0, -0],
];

/**
 * Finds all the sets of consecutive numbers that sum to the given target sum.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums Unordered nums.
 * @param {number} targetSum
 * @returns {Array<Array<number>>} 2d array where each nested array is a set of
 *    consecutive numbers that add up to the given targetSum. Consecutive in
 *    this context means the numbers whose indexes are one after the other
 *    only.
 */
function findConsqSums(nums, targetSum) {
    //create a return array
    //create a nested for loop
    //check base case
    //first loop defines the starting point, second loop checks the sum
    //return a slice of the starting array if it meets the target condition
    //push that array into the return array
    let returnArr = [];
    if (nums.length == 0) {
        return returnArr;
    }
    for(let i = 0; i < nums.length; i++){
        let sum = 0;
        for(let j = i; j < nums.length; j++){
            sum += nums[j];
            if(sum === targetSum){
                returnArr.push(nums.slice(i, j + 1));
            }
            if(targetSum > 0){
                if (sum > targetSum) {
                    break;
                }
            }else {
                if(sum < targetSum) {
                    break;
                }
            }
        }
    }
    return returnArr;
}


console.log(findConsqSums(nums1, sum1));
console.log(findConsqSums(nums2, sum2));
console.log(findConsqSums(nums3, sum3));
console.log(findConsqSums(nums4, sum4));
console.log(findConsqSums(nums5, sum5));
