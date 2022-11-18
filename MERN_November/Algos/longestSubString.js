// https://leetcode.com/problems/longest-substring-without-repeating-characters/

/* 
  Given a string, find the length of the longest substring without repeating characters.
*/
//                 👇
const str1 = "abcabcbb";
const expected1 = 3;
// Explanation: The answer is "abc", with the length of 3.
//              v
const str2 = "bbbbb";
const expected2 = 1;
// Explanation: The answer is "b", with the length of 1.

//                👀
const str3 = "pwwkew";
const expected3 = 3;
/* Explanation: The answer is "wke", with the length of 3. 
  Note that the answer must be a substring, "pwke" is a subsequence and not a substring. */
//              v
const str4 = "dvadf";
const expected4 = 4;
// Explanation: "vadf"

function lengthOfLongestSubString(str) {
    //create an array to hold the unique values
    //create a temp to hold the length of the sub string
    //loop over the string
    //check if the array already has the current index of the string
    //if not, push into the array
    //if it has that value, then set the temp to the new length of the array if its longer
    //clear array
    //push current value
    //repeat until done
    //return temp
    let uniqueVals = [];
    let uniqueLength = 0;

    for(let i in str) {
        for(let j = i; j < str.length; j++){
            if(!uniqueVals.includes(str[j])){ //checking if the value is unique
                uniqueVals.push(str[j]); // if the value is unique then push it into the unique values array
            }else{
                //if the value is NOT unique
                if(uniqueVals.length > uniqueLength){ //if the new array length is larger than the previous
                    uniqueLength = uniqueVals.length; //set the new longest substring to that length
                }
                uniqueVals = []; // reset the array
                uniqueVals.push(str[j]); // push the duplicate value as the new starting point
            }
        }
    }
    return uniqueLength;
}

console.log(lengthOfLongestSubString(str1));
console.log(lengthOfLongestSubString(str2));
console.log(lengthOfLongestSubString(str3));
console.log(lengthOfLongestSubString(str4));