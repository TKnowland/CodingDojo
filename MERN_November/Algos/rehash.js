/*          __                        __         
           /\ \                      /\ \        
 _ __    __\ \ \___      __      ____\ \ \___    
/\`'__\/'__`\ \  _ `\  /'__`\   /',__\\ \  _ `\  
\ \ \//\  __/\ \ \ \ \/\ \L\.\_/\__, `\\ \ \ \ \ 
 \ \_\\ \____\\ \_\ \_\ \__/.\_\/\____/ \ \_\ \_\
  \/_/ \/____/ \/_/\/_/\/__/\/_/\/___/   \/_/\/_/

    Given to a Coding Dojo alumni by Riot Games.
    Rehash an incorrectly hashed string by combining letter count occurrences
    and alphabetizing them.
*/
//                         v
const str1 = "b70a164c32a20c10";
const expected1 = "a184b70c42";
// isNaN
// parseInt()
// someObj.hasOwnProperty("key")


function rehash(str) { 
    //define empty object
    //define empty array
    //define return string
    //loop over the hashed string
    //at each alphanumeric in the string, split it and add the letter to an object
    //add the numbers following the letter as the value for a key value pair
    //if the letter is already in the object, then just add the numbers
    //join the the key-value pairs as chunks in an array
    //alphabetically order the array
    //push each chunk into an empty string
    //return 

    let sections = {};
    let chunks = [];
    let rehash = "";
    for(let i = 0; i < str.length; i++){
        if(isNaN(str[i])){
            let j = i + 1;
            let num = "";
            for(j; !isNaN(Number(str[j])); j++){
                num += str[j];
            }
            if(sections.hasOwnProperty(str[i])){
                sections[str[i]] += Number(num)
            }else {
                sections[str[i]] = Number(num)
            }
        }
    }
    for(let key in sections){
        let chunk = "";
        chunk += key + sections[key]
        chunks.push(chunk)
    }
    chunks.sort()
    for(let n of chunks){
        rehash += n;
    }
    return rehash;
}

console.log(rehash(str1));
console.log(rehash(str1) === expected1);