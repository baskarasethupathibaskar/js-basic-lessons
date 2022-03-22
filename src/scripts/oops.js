/* eslint-disable no-undef-init */
/* eslint-disable quotes */
/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */
/* eslint-disable semi */
/* eslint-disable no-const-assign */

function getChild (parent) {
  if (parent == null) throw TypeError();
  return Object.create(parent);
}

let o4 = { x: "don't change this value" };
// console.log(o4.x);
let p = getChild(o4);/// / Object.create(o4);
// console.log(p);

/*
o4 = null;
p = getChild(o4); // Object.create(null);
console.log(p);
*/

Object.prototype = 0; // zero
// console.log(Object);
// The prototype properties of built in are read-only
// object.prototype unchanged

let o5 = {};
// console.log(o5);
o5.x = 100;
p = getChild(o5);
// console.log(p);
p.y = 200;
let q = getChild(p);
q.z = 300;
// console.log(q);
// console.log("q.x + q.y + q.z" + (q.x + q.y + q.z));
// console.log("p.x + p.y + p.z" + (p.x + p.y + p.z));
// console.log("o5.x + p.y + o5.z" + (o5.x + p.y + q.z));
// console.log("o5.x " + o5.x);

let book = {
  'main title': 'javascript',
  subtitle: ' the definitive guide',
  for: 'all audiences',
  author: {
    firstname: 'Donald',
    surname: 'Duck'
  }
};

let len = undefined;
/* book = null;
if (book) {
  if (book["sub-titles"]) {
    len = book["sub-title"].length;
    console.log(len);
  } else { console.log("book.subtitle undefined:"); }
} else { console.log("book is null"); } */

len = book && book.subtitle && book.subtitle.length;
if (len) console.log(len);

// -------

console.log(book.author);
delete book.author;
console.log(book.author);

console.log(book["main title"]);
delete book["main title"];
console.log(book["main title"]);

let o6 = { x: 100 };
console.log(o6.x);
delete o6.x;
console.log(o6.x);
console.log(o6.toString);
delete o6.toString;
console.log(o6.toString);

// can not delete
delete Object.prototype;
let a = 1;
delete this.a;
function f1 () {}
delete this.f1();
