// create a variable to store any name
let personName : string = "HaSSan AhMeD";

// making lower case with toLowerCase function
let lowerName : string = personName.toLowerCase();

// making upper case with toUpperCase function
let upperName : string = personName.toUpperCase();

// splitting lowername with space to separate the words
let words = lowerName.split(' ');

let modWords = words.map(word => word[0].toUpperCase() + word.substring(1));
/**
 * using map function to modify each word that we separated
 * then in map function using toUpperCase function to capitalise first
 * letter and using substring function from index 1 to get the rest of the word.
 */

// Now joining modified words array with space to make it a single string
let titleCaseWords = modWords.join(' ');

// Now printing each case (lower/upper/title)
console.log(lowerName);
console.log(upperName);
console.log(titleCaseWords);