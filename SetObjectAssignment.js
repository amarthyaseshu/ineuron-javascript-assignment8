/* 1. Can we put duplicate values in the set object ? */
//Answer
console.log("1: "+"We can put duplicate values in set object, but it wont take");

/* 2. Write the syntax for */

/* 2a Creating new set object */
let newSetObj=new Set();
console.log("2a: "+Array.from(newSetObj));

/* 2b Adding new element to set object */
newSetObj.add("A");
console.log("2b: "+Array.from(newSetObj));

/* 2c Deleting element from set object */
newSetObj.delete("A");
console.log("2c: "+Array.from(newSetObj));

/* 3 Create a set object with four random numbers from 0 to 10. Check if this
newly created set object has 8 in it. Use set object methods. */

//Input
let randomNumSet=new Set([1,8,3,5]);
//Output
console.log("3: "+randomNumSet.has(8));

