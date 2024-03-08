var guestList = ['Azeem', 'Hassan', 'Naved'];
for (var _i = 0, guestList_1 = guestList; _i < guestList_1.length; _i++) {
    var guest = guestList_1[_i];
    console.log("Dear ".concat(guest, ",\nI would like to invite you on dinner tonight.\nIt would be great if you join me.\nThank you"));
}
var notAttending = 'Hassan';
var newGuest = 'Zohaib';
console.log("".concat(notAttending, " is not coming, He got some urgency."));
var indexMissingGuest = guestList.indexOf(notAttending);
guestList[indexMissingGuest] = newGuest;
for (var _a = 0, guestList_2 = guestList; _a < guestList_2.length; _a++) {
    var guest = guestList_2[_a];
    console.log("Dear ".concat(guest, ",\nI would like to invite you on dinner tonight.\nIt would be great if you join me.\nThank you"));
}
console.log("Hey Everyone! I've found a bigger dinner table.");
guestList.unshift('Shahroz');
var middleIndex = Math.floor(guestList.length / 2);
guestList.splice(middleIndex, 0, 'Asad');
guestList.push('Farhan');
for (var _b = 0, guestList_3 = guestList; _b < guestList_3.length; _b++) {
    var guest = guestList_3[_b];
    console.log("Dear ".concat(guest, ",\nI would like to invite you on dinner tonight.\nIt would be great if you join me.\nThank you"));
}
