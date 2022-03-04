/* eslint-disable no-control-regex */
/* eslint-disable prefer-regex-literals */
/* eslint-disable no-new-func */
/* eslint-disable no-array-constructor */
/* eslint-disable new-cap */
/* eslint-disable no-unused-vars */
/* eslint-disable no-new-wrappers */
/* eslint-disable no-new-object */
/* eslint-disable semi */
const cody = new Object();
cody.living = true;
cody.age = 33;
cody.gender = 'male';
cody.getGender = function () { return cody.gender };
console.log(cody.getGender());
console.log(cody);

/// ---------------------------

const myObject = new Object();
myObject['0'] = 'f';
myObject['1'] = 'o';
myObject['2'] = 'o';
console.log(myObject);

const myString = new String('foo');
console.log(myString);

// ------------------------------

const person = function (living, age, gender) {
  this.living = living;
  this.age = age;
  this.gender = gender;
  this.getGender = function () { return this.gender; };
};

const smith = new person(true, 33, 'male');
console.log(smith);

// -----------------------------------

const myNumber = new Number(23);
const myString1 = new String('male');
const myBoolean = new Boolean(false);
const myObject1 = new Object();
const myArray = new Array('foo', 'bar');
const myFuction1 = new Function('x', 'y', 'return x*Y');
const myDate = new Date();
const myRegExp = new RegExp('\bL[a-z]+\b');
const myError = new Error(' Sorry!');

console.log(myNumber.constructor); // logs number()
console.log(myString1.constructor); // logs string ()
console.log(myBoolean.constructor); // logs boolean()
console.log(myObject1.constructor);
console.log(myArray.constructor);
console.log(myFuction1.constructor);
console.log(myDate.constructor);
console.log(myRegExp.constructor);
console.log(myError.constructor);
