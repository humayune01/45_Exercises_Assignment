let guestList : string[] = ['Azeem', 'Hassan', 'Naved'];

for (let guest of guestList) {
    console.log(`Dear ${guest},\nI would like to invite you on dinner tonight.\nIt would be great if you join me.\nThank you`);
}

let notAttending : string = 'Hassan';
let newGuest : string = 'Zohaib';

console.log(`${notAttending} is not coming, He got some urgency.`);

let indexMissingGuest : number = guestList.indexOf(notAttending);

guestList[indexMissingGuest] = newGuest;

for (let guest of guestList) {
    console.log(`Dear ${guest},\nI would like to invite you on dinner tonight.\nIt would be great if you join me.\nThank you`);
}

console.log("Hey Everyone! I've found a bigger dinner table.");

guestList.unshift('Shahroz');

let middleIndex : number = Math.floor(guestList.length / 2);

guestList.splice(middleIndex, 0, 'Asad');

guestList.push('Farhan');

for (let guest of guestList) {
    console.log(`Dear ${guest},\nI would like to invite you on dinner tonight.\nIt would be great if you join me.\nThank you`);
}