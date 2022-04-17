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

/**
 *
 * Empty Arrays
 * How might you empty an array in javascript?
 *
 */

let array1 = [1, 2, 3];
const array2 = [1, 2, 3];
const array3 = [1, 2, 3];
const array4 = [1, 2, 3];
const array5 = [1, 2, 3];

array1 = [];
array2.length = 0;
array3.splice(0);

while (array4.length > 0) {
  array4.pop();
}

while (array5.length > 0) {
  array5.shift();
}

console.log(array1);
console.log(array2);
console.log(array3);
console.log(array4);
console.log(array5);

function solution(numbers) {
  let solution = [];
  for (let i = 0; i < numbers.length - 2; i++) {
    console.log(numbers[i], numbers[i + 1], numbers[i + 2], i);
    let f = numbers[i];
    let s = numbers[i + 1];
    let t = numbers[i + 2];
    if (f < s && s > t) {
      solution.push(1);
      // console.log(numbers[i])
    } else {
      solution.push(0);
      // console.log(numbers[i])
      // console.log(numbers[i])
      // solution.push('fuck')
    }
  }
  return solution;
}

/**
 * 
 * You are given an array of non-negative integers numbers. You are allowed to choose any number from this array and swap any two digits in it. If after the swap operation the number contains leading zeros, they can be omitted and not considered (eg: 010 will be considered just 10).

Your task is to check whether it is possible to apply the swap operation at most once, so that the elements of the resulting array are strictly increasing.

Example

    For numbers = [1, 5, 10, 20], the output should be solution(numbers) = true.

    The initial array is already strictly increasing, so no actions are required.

    For numbers = [1, 3, 900, 10], the output should be solution(numbers) = true.

    By choosing numbers[2] = 900 and swapping its first and third digits, the resulting number 009 is considered to be just 9. So the updated array will look like [1, 3, 9, 10], which is strictly increasing.

    For numbers = [13, 31, 30], the output should be solution(numbers) = false.
        The initial array elements are not increasing.
        By swapping the digits of numbers[0] = 13, the array becomes [31, 31, 30] which is not strictly increasing;
        By swapping the digits of numbers[1] = 31, the array becomes [13, 13, 30] which is not strictly increasing;
        By swapping the digits of numbers[2] = 30, the array becomes [13, 31, 3] which is not strictly increasing;

    So, it's not possible to obtain a strictly increasing array, and the answer is false.

Input/Output

    [execution time limit] 4 seconds (js)

    [input] array.integer numbers

    An array of non-negative integers.

    Guaranteed constraints:
    1 ≤ numbers.length ≤ 103,
    0 ≤ numbers[i] ≤ 103.

    [output] boolean

    Return true if it is possible to obtain a strictly increasing array by applying the digit-swap operation at most once, and false otherwise.

[JavaScript] Syntax Tips

Contiguous Subarray


Given a matrix of integers, we'd like to consider the sum of the elements within the area of a 45° rotated rectangle. More formally, the area is bounded by two diagonals parallel to the main diagonal and two diagonals parallel to the secondary diagonal. The dimensions of the rotated rectangle are defined by the number of elements along the borders of the rectangle.

dimensions

Given integers a and b representing the dimensions of the rotated rectangle, and matrix (a matrix of integers), your task is to find the greatest sum of integers contained within an a x b rotated rectangle.

Note: The order of the dimensions is not important - consider all a x b and b x a rectangles.

Example

    For

    matrix = [[1, 2, 3, 4, 0],
              [5, 6, 7, 8, 1],
              [3, 2, 4, 1, 4],
              [4, 3, 5, 1, 6]]

    a = 2, and b = 3, the output should be solution(matrix, a, b) = 36.

    example 1

    For

    matrix = [[-2, 3, 5, -1],
              [4, 3, -10, 10]]

    a = 1, and b = 1, the output should be solution(matrix, a, b) = 10.

    example 2

    The rotated rectangle with dimensions 1x1 is just one element, so the answer is the maximal element in matrix.

    For

    matrix = [[-2, 3],
              [4, 3]]

    a = 1, and b = 2, the output should be solution(matrix, a, b) = 7.

    example 3

Input/Output

    [execution time limit] 4 seconds (js)

    [input] array.array.integer matrix

    A matrix of integers.

    Guaranteed constraints:
    1 ≤ matrix.length, matrix[i].length ≤ 50,
    -103 ≤ matrix[i][j] ≤ 103.

    [input] integer a

    The first rotated rectangle dimension.

    Guaranteed constraints:
    1 ≤ a ≤ 25.

    [input] integer b

    The second rotated rectangle dimension.
    It's guaranteed that at least one rotated rectangle will fit in the given matrix.

    Guaranteed constraints:
    a ≤ b ≤ 25.

    [output] integer

    The maximal sum of elements of a rotated rectangle with dimensions a and b.

[JavaScript] Syntax Tips

Given an array of integers a, your task is to find how many of its contiguous subarrays of length m contain a pair of integers with a sum equal to k.

More formally, given the array a, your task is to count the number of indices 0 ≤ i ≤ a.length - m such that a subarray [a[i], a[i + 1], ..., a[i + m - 1]] contains at least one pair (a[s], a[t]), where:

    s ≠ t
    a[s] + a[t] = k

Example

    For a = [2, 4, 7, 5, 3, 5, 8, 5, 1, 7], m = 4, and k = 10, the output should be solution(a, m, k) = 5.

    Let's consider all subarrays of length m = 4 and see which fit the description conditions:
        Subarray a[0..3] = [2, 4, 7, 5] doesn't contain any pair of integers with a sum of k = 10. Note that although the pair (a[3], a[3]) has the sum 5 + 5 = 10, it doesn't fit the requirement s ≠ t.
        Subarray a[1..4] = [4, 7, 5, 3] contains the pair (a[2], a[4]), where a[2] + a[4] = 7 + 3 = 10.
        Subarray a[2..5] = [7, 5, 3, 5] contains two pairs (a[2], a[4]) and (a[3], a[5]), both with a sum of k = 10.
        Subarray a[3..6] = [5, 3, 5, 8] contains the pair (a[3], a[5]), where a[3] + a[5] = 5 + 5 = 10.
        Subarray a[4..7] = [3, 5, 8, 5] contains the pair (a[5], a[7]), where a[5] + a[7] = 5 + 5 = 10.
        Subarray a[5..8] = [5, 8, 5, 1] contains the pair (a[5], a[7]), where a[5] + a[7] = 5 + 5 = 10.
        Subarray a[6..9] = [8, 5, 1, 7] doesn't contain any pair with a sum of k = 10.

    So the answer is 5, because there are 5 contiguous subarrays that contain a pair with a sum of k = 10.

    For a = [15, 8, 8, 2, 6, 4, 1, 7], m = 2, and k = 8, the output should be solution(a, m, k) = 2.

    There are 2 subarrays satisfying the description conditions:
        a[3..4] = [2, 6], where 2 + 6 = 8
        a[6..7] = [1, 7], where 1 + 7 = 8

Input/Output

    [execution time limit] 4 seconds (js)

    [input] array.integer a

    The given array of integers.

    Guaranteed constraints:
    2 ≤ a.length ≤ 105,
    0 ≤ a[i] ≤ 109.

    [input] integer m

    An integer representing the length of the contiguous subarrays being considered.

    Guaranteed constraints:
    2 ≤ m ≤ a.length.

    [input] integer k

    An non-negative integer value representing the sum of the pairs we're trying to find within each subarray.

    Guaranteed constraints:
    0 ≤ k ≤ 109.

    [output] integer

    An integer representing the number of subarrays that contain a pair of integers with a sum of k.


 */
