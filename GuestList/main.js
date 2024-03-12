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
var len = guestList.unshift('Shahroz');
var middleIndex = Math.round(len / 2);
guestList.splice(middleIndex, 0, 'Asad');
guestList.push('Farhan');
console.log("I am inviting ".concat(guestList.length, " people to dinner."));
for (var _b = 0, guestList_3 = guestList; _b < guestList_3.length; _b++) {
    var guest = guestList_3[_b];
    console.log("Dear ".concat(guest, ",\nI would like to invite you on dinner tonight.\nIt would be great if you join me.\nThank you"));
}
console.log("I can invite only two people for dinner.");
for (var i = guestList.length - 1; i >= 2; i--) {
    console.log("Sorry ".concat(guestList[i], "! I can't invite you to dinner."));
    guestList.pop();
}
for (var _c = 0, guestList_4 = guestList; _c < guestList_4.length; _c++) {
    var guest = guestList_4[_c];
    console.log("Dear ".concat(guest, ",\nI would like to inform you that you are still invited.\nIt would be great if you join me for dinner.\nThank you"));
}
guestList.splice(0, 2);
console.log(guestList);
