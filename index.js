//pass by value or pass by reference
//this questions wants to know how much your work with data
/**When you are working with primitive data types data is always passed by value. */
//Passing by value primitive data types
let ex1 = 1;
let ex2 = ex1;
ex2++;

console.log(ex1, " - ", ex2);
//Reference non-primitive data types. Basically with non-primitive you are referencing to a location that is why both values will change whereas in primitive they don't do referneces since they are not objects.
const example3 = [];
const example4 = example3;
example4.push("ref");

console.log(example3, " ---- ", example4);
/** with non-primitive data types you are passing values by reference. The only way around this is to use the spread operator so that you are actually just making a copy of that value instead of doing a direct reference.  */

//map filter reduce also called higher order functions
const prices = [1, 2, 3, 10];
