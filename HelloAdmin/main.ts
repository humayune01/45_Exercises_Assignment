let usernames : string[] = ['admin', 'humayune', 'fahad', 'hassan_01', 'faizah'];

for (let name of usernames)
{
    if (name === 'admin')
    {
        console.log(`Hello ${name}, would you like to see a status report?`);
    } else {
        console.log(`Hello ${name}, thank you for logging in again.`);
    }
}

usernames = [];

if (usernames.length < 1) {
    console.log("We need to find some users!");
}