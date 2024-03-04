var personName = "HaSSan AhMeD";
var lowerName = personName.toLowerCase();
var upperName = personName.toUpperCase();
var words = lowerName.split(' ');
var modWords = words.map(function (word) { return word[0].toUpperCase() + word.substring(1); });
var titleCaseWords = modWords.join(' ');
console.log(lowerName);
console.log(upperName);
console.log(titleCaseWords);
