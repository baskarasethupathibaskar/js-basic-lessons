/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */
/* eslint-disable no-multi-spaces */
/* eslint-disable semi */
/* eslint-disable quotes */

const age = 100
const money = 1000.50
console.log(typeof age) // number
console.log(typeof money) // number

// `typeof ` is used to find out the 'type' of a  variable

console.log("10" + "10");
console.log("10" -  "3");

// the above works with multiplication , division and sub
// but not with add(+)
// because the + sign is also used for **concatenation**
// ---------
// math helper methods:
console.log(Math.round(2.2));
console.log(Math.floor(2.6));
console.log(Math.ceil(7.4));
console.log(Math.random());

const sweets = 20;
const kids = 3;
const eachKidGets = Math.floor(sweets / kids);
console.log(eachKidGets);
const leftsweets = sweets % kids;
console.log(leftsweets);

// -----
let x = 2 ** 3;
console.log(x);
x = Math.pow(2, 3);
console.log(x);

// ------
console.log(0.1 + 0.2);
// let costOfProduct = 100.95;
const costOfProduct = 10095; // in paise

/* so when working them as (rupees.paise) or
(dollors.cents).dont store of the money in
(paise/cents) as you wont have to deal with
fraction only whole nos.
when need to display to user ,
 just convert them back. */

console.log(typeof Infinity);
console.log(typeof -Infinity);
let result = 10 / 'helo';
console.log(result);
console.log(typeof NaN);

// -----------
// check the datatypes of a value

let x1 = 100;
let result1 = Number.isInteger(x1);
console.log(` Is x a number: ${result1}`);

let y1 = "abcd";
result1 = Number.isInteger(y1);
console.log(` Is y a number: ${result1}`);
result1 = (typeof y1 === 'string');
console.log(` Is y a string: ${result1}`);
let flag = true;
result1 = (typeof flag === 'boolean');
console.log(`Is flag a boolean:${result1}`);
let nos = [1, 2, 3, 4, 5];
result1 = (typeof nos === 'object');
console.log(`Is nos an object:${result1}`);
