var usernames = ['admin', 'humayune', 'fahad', 'hassan_01', 'faizah'];
for (var _i = 0, usernames_1 = usernames; _i < usernames_1.length; _i++) {
    var name_1 = usernames_1[_i];
    if (name_1 === 'admin') {
        console.log("Hello ".concat(name_1, ", would you like to see a status report?"));
    }
    else {
        console.log("Hello ".concat(name_1, ", thank you for logging in again."));
    }
}
usernames = [];
if (usernames.length < 1) {
    console.log("We need to find some users!");
}
