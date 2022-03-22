/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable semi */
/* eslint-disable camelcase */
// 3 ways to create strings variables
// 1.using single quotes:
// 2.using douple quotes:
// 3.using back ticks:
// eslint-disable-next-line semi

const my_name = 'NamefieldEmpty' // single quote
const middle = 'gabbar' // douple quote
const last = 'singh' // back tick

console.log(my_name);
console.log(middle);
console.log(last);

const sentence1 = 'shes\'s so "cool"';
console.log(sentence1);
const sentence2 = 'she\'s so "cool"';
console.log(sentence2);
const sentence3 = '\'she\'s so cool\'';
console.log(sentence3);
const sentence4 = "she's so \"cool\"";
console.log(sentence4);

// multi line string using quote doesn't work
const song1 = `i like 
ARR songs and 
Aniruth Songs`;
console.log(song1);

const hello3 = ' hello my name is' + my_name + '.nice to meet you';
console.log(hello3);

const hello4 = `hello my name is ${my_name}.nice to meet you.i am 
${1 + 100} years old`
console.log(hello4);

const html = `<div>
    <h2>${my_name}</h2>
    <p>${hello3}</p>
    </div>
    `;
console.log(html);
// document.body.innerHTML = html;
