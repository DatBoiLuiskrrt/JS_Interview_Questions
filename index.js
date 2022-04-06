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

/**
 * typeof operator
 * will check the type of the data you are passing,
 *
 * For arrays use Array.isArray([])
 *
 *
 */
console.log(typeof [1, 2, 3] === "object");
console.log(Array.isArray([2, 3, 4, 5, 6]));
console.log(Array.isArray({}));

/**
 * delete
 * Allows us to delete a property of an object
 * Should be avoided using the delete keyboard because it could crash the application you should know what kind of data you have in your data model. You end up creating a very fragile application and often times you will see lint setting typically telling you to avoid it.
 *
 */

const user = {
  firstName: "Luis",
  middleName: "Angel",
  lastName: "Hernandez",
  nickname: "Coding God",
};
delete user.firstName;
//if you want to deleter instead of deleting entire property just set the value to an empty string
//like this user.fistName = ''
console.log(user.hasOwnProperty("firstName"));
console.log(user);

/**
 *
 * Object Notations
 * Describe both dot notation and bracket notation
 *
 */

const user2 = {
  firstName: "Luis",
  middleName: "Angel",
  lastName: "Hernandez",
  nickname: "Coding God",
};

console.log(user2.firstName);
console.log(user2["firstName"]);

//you may use bracket notation when using For Loops as a way to interact with the values of an object
for (let property in user2) {
  console.log(user2[property]);
  console.log(property);
}

/**
 *
 *
 * Anonymous functions
 *
 *
 */
//standard function
function add(num1, num2) {
  return num1 + num2;
}

console.log(add(5, 5));

const add2 = function (num1, num2) {
  return num1 + num2;
};

console.log(add2(5, 5));

/**
 *
 * Callbacks
 * also called higher order functions
 * functions we are passing that are later on being called
 *A functions that is passed into another function that we are able to later on call upon it
 */
const arr = [1, 2, 3, 4, 5];
const arr2 = arr.map((val) => val + 5);

console.log(arr2);

function add5(val) {
  return val + 5;
}

/**
 *
 * Closure
 * A functions that returns a function for the purpose of hiding a private variable
 *
 */
function add1() {
  let counter = 0;

  counter++;

  return counter;
}

const ad1 = (function () {
  let counter = 0;
  return function () {
    counter++;
    return counter;
  };
})();

console.log(add1());
console.log(add1());
console.log(add1());

console.log(ad1());
console.log(ad1());
console.log(ad1());
/**
 *  The difference is that with the iffy the cariable counter is able to stored in memory
 *
 *
 *  */
