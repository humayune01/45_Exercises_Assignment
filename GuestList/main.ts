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

let len : number = guestList.unshift('Shahroz');

let middleIndex = Math.round(len / 2);

guestList.splice(middleIndex, 0, 'Asad');

guestList.push('Farhan');

console.log(`I am inviting ${guestList.length} people to dinner.`);

for (let guest of guestList) {
    console.log(`Dear ${guest},\nI would like to invite you on dinner tonight.\nIt would be great if you join me.\nThank you`);
}

console.log("I can invite only two people for dinner.");

for (let i = guestList.length-1; i >= 2; i--) {
    console.log(`Sorry ${guestList[i]}! I can't invite you to dinner.`);
    guestList.pop();
}

for (let guest of guestList) {
    console.log(`Dear ${guest},\nI would like to inform you that you are still invited.\nIt would be great if you join me for dinner.\nThank you`);
}

guestList.splice(0, 2);

console.log(guestList);