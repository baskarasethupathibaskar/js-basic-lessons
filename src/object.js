/* eslint-disable no-undef */
/* eslint-disable space-infix-ops */
/* eslint-disable no-unused-vars */
/* eslint-disable semi */
/* #object

js is fundamental DT is the Object

An object is an unordered collection of properties,
each of which has a name ans a  value
properties name are SVGStringList,hecce objects map strings to values */

// properties   first last age
const person = {
  first: 'baskar',
  last: 'sethupathi',
  age: 20
}
console.log(person.first);
console.log(person.last);
console.log(person.age);
person.first = 'tom';
person.last = 'jerry';
console.log(person.first);
console.log(person.last);
person.last = null;
console.log(person.last);

// ----

const empty = {};
const point = { x: 10, y: 50 };
const point2 = { x: point.x, y: point.y + 1 };
console.log(point2);

const book = {
  'main title': 'Java Script',
  'sub-title': 'Guide to Java Script for beginners',
  // eslint-disable-next-line quote-props
  'for': 'students',
  author: {
    first: 'baskar',
    last: 'sethupathi'
  }
};
console.log(book['main title']);
console.log(book['sub-title']);
// eslint-disable-next-line dot-notation
console.log(book['for']);
console.log(book.author.first);
console.log(book.author.last);
// console.log(book.sub-title);
console.log(book.for);
