/* 
Recursive Sigma
Input: integer
Output: sum of integers from 1 to Input integer
*/

const num1 = 5;
const expected1 = 15;
// Explanation: (1+2+3+4+5)

const num2 = 2.5;
const expected2 = 3;
// Explanation: (1+2)

const num3 = -1;
const expected3 = 0;

/**
 * Recursively sum the given int and every previous positive int.
 * - Time: O(?).
 * - Space: O(?).
 * @param {number} num
 * @returns {number}
 */
function recursiveSigma(num, i=1) {
    if (typeof num != "number") {
        return ("INVALID DATA TYPE: " + typeof num)
    }else if (i > num) {
        return 0;
    }
    return i + recursiveSigma(num, i+1)
}

console.log(recursiveSigma(num1)); // 15
console.log(recursiveSigma(num2)); // 3
console.log(recursiveSigma(num3)); // 0