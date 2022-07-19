/* 
Given an array of ints representing a line of people where the space between
indexes is 1 foot, with 0 meaning no one is there and 1 meaning someone is in
that space,
return whether or not there is at least 6 feet separating every person.
Bonus: O(n) linear time (avoid nested loops that cause re-visiting indexes).
*/

const queue1 = [0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1];
const expected1 = false;

const queue2 = [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1];
const expected2 = true;

const queue3 = [1, 0, 0, 0, 0, 0, 0, 0, 1];
const expected3 = true;

const queue4 = [];
const expected4 = true;

/**
 * Determines whether each occupied space in the line of people is separated by
 * 6 empty spaces.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<0|1>} queue
 * @returns {Boolean}
 */
function socialDistancingEnforcer(queue) {
    if (!queue.includes(1)) {
        return true;
    }
    let person_seen = false;
    let distance_count = 0;
    for (i in queue) {
        if (queue[i] == 1) {
            if (!person_seen) {
                person_seen = true;
                distance_count = 0;
            }else{
                if (distance_count < 6) {
                    return false;
                }
                distance_count = 0;
            }
        }else {
            distance_count++;
        }
    }
}

console.log(socialDistancingEnforcer(queue1)) // false
console.log(socialDistancingEnforcer(queue2)) // true
console.log(socialDistancingEnforcer(queue3)) // true
console.log(socialDistancingEnforcer(queue4)) // true

/* 
  Balance Index
  Here, a balance point is ON an index, not between indices.
  Return the balance index where sums are equal on either side
  (exclude its own value).
  
  Return -1 if none exist.
  
*/
            // 0   1  2  3  4
const numsA = [-2, 5, 7, 0, 3];
const expectedA = 2;

const numsB = [9, 9];
const expectedB = -1;

/**
 * Finds the balance index in the given array where the sum to the left of the
 *    index is equal to the sum to the right of the index.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums
 * @returns {number} The balance index or -1 if there is none.
 */
function balanceIndex(nums) {
    let count1 = 0;
    let count2 = 0;
    let start = 0;
    let end = nums.length - 1;
    while (start < end) {
        count1 += nums[start];
        count2 += nums[end];
        start ++;
        end --;
    }
    console.log(count1)
    console.log(count2)
    if (count1 == count2) {
        return start
    }else {
        return -1;
    }
}

console.log(balanceIndex(numsA)) // 2
console.log(balanceIndex(numsB)) // -1

const balancedIndex = (array) => {
    let total = array.reduce((a,b) => a + b);
    let sumLeft = 0;
    
    for (let i = 0; i < array.length; i++) {
      total = total - array[i];
      //compares the sum to the left of current index against total
       if (sumLeft === total) {
         // if the sums match, the current index will be returned
         return i;
      }
      sumLeft += array[i];
    }
     return -1;
   };
   balancedIndex([1, 2, 5, 3]); 
   // output: 2
   