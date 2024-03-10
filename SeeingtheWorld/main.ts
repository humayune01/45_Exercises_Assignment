let locations : string[] = ['Norway', 'Greece', 'Maldives', 'New Zealand', 'North Korea'];

console.log('original ', locations);

console.log('alphabetical ', [...locations].sort());

console.log('original ', locations);

console.log('reverse alphabetical ', [...locations].sort().reverse());

console.log('original ', locations);

locations.reverse();
console.log('original reverse', locations);

locations.reverse();
console.log('original reverse reverted back to original', locations);

locations.sort();
console.log('alphabetical ', locations);

locations.reverse();
console.log('reverse alphabetical ', locations);