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

const prices = [1, 2, 3, 10, 20, 30];

//map example
const mapExample = prices.map((value) => value + 1);
//filter example
const filterExample = prices.filter((value) => value < 10);
//reduce example
const reduceExample = prices.reduce((total, current) => {
  return (total += current);
}, 0);
//map + filter using reduce example
const reduceArrayExample = prices.reduce((accumulator, value) => {
  const newValue = value + 1;
  if (newValue <= 20) {
    accumulator.push(newValue);
  }
  return accumulator;
}, []);

console.log(prices);
console.log(mapExample);
console.log(filterExample);
console.log(reduceExample);
console.log(reduceArrayExample);

//Falsey Values
/** Bolean false
 *
 * undefined
 * false
 * empty string ''
 * zero number 0
 *
 *
 */

const ejemplo1 = undefined;
const ejemplo2 = null;
const ejemplo3 = NaN;
const ejemplo4 = 0;
const ejemplo5 = "";
const ejemplo6 = false;
const ejemplo7 = 1;

console.log(!!ejemplo1);
console.log(!!ejemplo2);
console.log(!!ejemplo3);
console.log(!!ejemplo4);
console.log(!!ejemplo5);
console.log(!!ejemplo6);
console.log(!!ejemplo7);

/**
 *  The THIS keywords
 * In the global execution context (outside of any function), this refers to the global object whether in strict mode or not.
 *
 *
 *  */
// In web browsers, the window object is also the global object:
//console.log(this === window); // true

a = 37;
//console.log(window.a); // 37

this.b = "MDN";
//console.log(window.b); // "MDN"
//console.log(b); // "MDN"

// == vs ===
/**
 * == checks for value only  "loosly equals"
 * === checks for type and value "strictly equals"
 */
const loosly = "5";
const strict = 5;
//Only checking for value so they are equal
console.log(loosly == strict);
//Checking for both value and data type so they are not equal
console.log(loosly === strict);
//The reason we want to always use triple equals is to aviod bugs

/** Coercion
 *
 * Take some numbers and add a string, what happens?
 *Nubers get concatenated to strings
 */
//Implicit coercion
const total = 2 + 3 + "7";
console.log(total);
console.log(typeof total);

//Explicit coercion
console.log(typeof String(5));
console.log(typeof Boolean(0));
console.log(typeof Number("5"));
