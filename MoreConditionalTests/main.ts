// • Tests for equality and inequality with strings

let _name : string = 'zara';

console.log("Is _name == 'zara'? I predict True.")

console.log(_name == 'zara');

console.log("Is _name != 'zara'? I predict False.")

console.log(_name != 'zara');

// • Tests using the lower case function

console.log("Is _name == _name.toLowerCase()? I predict True.");

console.log(_name == _name.toLowerCase());

_name = "Tara";

console.log("Is _name == _name.toLowerCase()? I predict False.");

console.log(_name == _name.toLowerCase());

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

let _num : number = 4;

console.log("Is _num == 3? I predict False.");

console.log(_num == 3);

console.log("Is _num != 3? I predict True.");

console.log(_num != 3);

console.log("Is _num > 3? I predict True.");

console.log(_num > 3);

console.log("Is _num < 3? I predict False.");

console.log(_num < 3);

console.log("Is _num >= 3? I predict True.");

console.log(_num >= 3);

console.log("Is _num <= 3? I predict False.");

console.log(_num <= 3);

// • Tests using "and" and "or" operators

console.log("Is _num <= 3 || _num > 3? I predict True.");

console.log(_num <= 3 || _num > 3);

console.log("Is _num <= 3 && _num > 3? I predict False.");

console.log(_num <= 3 && _num > 3);

// • Test whether an item is in an array

let numbers_array : number[] = [12, 43, 62, 90, 21];

console.log("Is numbers_array.includes(43)? I predict True.");

console.log(numbers_array.includes(43));

// • Test whether an item is not in a array

console.log("Is numbers_array.includes(31)? I predict False.");

console.log(numbers_array.includes(31));