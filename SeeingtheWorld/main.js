var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var locations = ['Norway', 'Greece', 'Maldives', 'New Zealand', 'North Korea'];
console.log('original ', locations);
console.log('alphabetical ', __spreadArray([], locations, true).sort());
console.log('original ', locations);
console.log('reverse alphabetical ', __spreadArray([], locations, true).sort().reverse());
console.log('original ', locations);
locations.reverse();
console.log('original reverse', locations);
locations.reverse();
console.log('original reverse reverted back to original', locations);
locations.sort();
console.log('alphabetical ', locations);
locations.reverse();
console.log('reverse ', locations);
