//Data types
/*
Data types can include the following:
1. Numbers(integers and decimals (floats))--> 1, 2, 3.25, 12, 19.123
2. Strings--> Characters and letters combined into one using quotes--> "Welome to web fundementals"
3. Booleans--> True or false
//camelCase
//snake_case
//PascalCase
*/

var name = "Tre Knowland";
var age = 17;
var gasPrice = 6.23;
var wellRested = false;

var twiceMyAge = age * 2;

console.log("I am", age, "years old");


/*
Data strucures are things were we can put on or many data types inside of (we can group data types into one thing)

1. Array
*/

var artists = ["Anupt Sastry", "Weezer", "Lit", "Another Cynthia", "Sevendust", "Billie Eyelash"];
//indexes-->    0               1           2       3                   4               5      

//A for loop is a way for us to repeat code a number of times

for(i = 0; i < artists.length; i++){
    console.log(artists[i])
}