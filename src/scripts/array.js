const names = ["jhon", "sam", "peter"];

console.log(names[0]);
console.log(names.length);
console.log(names[names.length - 1]);

/*
what is the out put for the above
names is an array of strings 
leangth is a property of array
it returns a number
the lower bound of an array is 0 (ZERO)
the upper bound of an array is length - 1;
the index for jho is 0
the index for sam is 1
the index for peter is 2
*/

names.push("suresh");
console.log("After push: " + names);
// push will add the item at the end

//........is called as the spread operator
// it represents the entire items in the array

const names2 = [...names, "Raj"];
console.log("names2: " + names2);
// does names2 contain suresh ???

names.unshift("poppy");
console.log("unshift:" + names);
// what does unshift do. How is it diff
// is adds data to the beginning
// spo the index no of the res of the values will change now

const names3 = ["raj", ...names];
console.log(names3);
// this will ads data at the beiginnig
// now next method slice()
// create a new array

const bikes = ["bianchi", "miele", "panasonic", "miyata", "RE"];
const b1 = [...bikes.slice(0, 2)];
console.log(b1);

//slice takes 2 parameters
// fro m, to
// it has copied 2 values from index 0 and assigned to bl

const b2 = [...bikes.slice(2)];
console.log(b2); //last 2

const newBikes = [...bikes.slice(0, 2), "benotto", ...bikes.slice(2)];
console.log("newBikes:" + newBikes);

const newBikes2 = [...newBikes.slice(0, 3), ...newBikes.slice(4)];
console.log("newBikes2:" + newBikes2);
console.log("names:" + names);

const indexOfSam = names.findIndex((name) => name === "sam");
console.log("indexOfSAM :" + indexOfSam);

function deleteName(nametodelete,names) {
    const indexOfname = names.findIndex(names => names === nametodelete);
    console.log('indexOf name to delete:' + indexOfname);
    const newArray = [
        ...names.slice(0,indexOfname),
        ...names.slice(indexOfname+1)
    ];
    return newArray;
};
const deletedNames = deleteName('suresh',names);
console.log('After Delete: ' + deletedNames);
console.log('Before Delete: ' +names);
/*

console.log(numbers);
numbers.splice(3,2);// from the 3rd index delete the next 2 values
console.log(numbers);

const pizzaSlice = numbers.slice(2, 4); // start and end index
console.log('pizzaSlice:'+pizzaSlice);
console.log('Original Numbers:' +numbers);
*/

const numbers = [1,2,3,4,5,6,7,8,9];
numbers.reverse();
console.log(numbers); 
const numbersReversed = [...numbers].reverse();
console.log(numbersReversed);