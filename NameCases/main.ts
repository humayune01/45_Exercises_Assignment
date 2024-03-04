let personName : string = "HaSSan AhMeD";

let lowerName : string = personName.toLowerCase();

let upperName : string = personName.toUpperCase();

let words = lowerName.split(' ');

let modWords = words.map(word => word[0].toUpperCase() + word.substring(1));

let titleCaseWords = modWords.join(' ');

console.log(lowerName);
console.log(upperName);
console.log(titleCaseWords);