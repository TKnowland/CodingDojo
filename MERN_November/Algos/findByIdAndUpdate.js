/* 
findByIdAndUpdate(id, updateObject, arr)
Given an id, an object that has keys with corresponding updated values, and an array of objects
Find the object by "id" key that matches the given id value and then update that object's
keys with the provided new values.
Return the updated object, or null if no object was found

check 
someObj.hasOwnProperty("key")
Object.keys(someObj) // returns [an array of "keys"]
*/

const students = [
    {
        id: 1,
        name: "student1",
        isLateToday: false,
        lateCount: 15,
        redBeltStatus: false
    },
    {
        id: 2,
        name: "student2",
        isLateToday: false,
        lateCount: 1,
        redBeltStatus: false
    },
    {
        id: 3,
        name: "student3",
        isLateToday: false,
        lateCount: 0,
        redBeltStatus: false
    }
];

function findByIdAndUpdate(id, updatedVals, collection) {
    //variable to hold an array of the keys that will be updated
    let keysToUpdate = Object.keys(updatedVals);

    //ogIDX is the index of the object in the original collection
    for(let currentObj of collection){
        //check if the id of the current object matches the one we are updating
        if(currentObj.id == id){
            //for each key in the array of keys we are updating, update that key in the current object
            for(let key of keysToUpdate){
                //if the object has the key already, update it
                if(currentObj.hasOwnProperty(key)){
                    currentObj[key] = updatedVals[key];
                }
            }
            //return the updated object
            return currentObj;
        }
    }
    //if no object found return null
    return null;
}

console.log(findByIdAndUpdate(3, { redBeltStatus: true }, students));
console.log(findByIdAndUpdate(1, { isLateToday: true, lateCount: 16, randomKey: "randomValue"  }, students));
console.log(findByIdAndUpdate(5, {}, students));