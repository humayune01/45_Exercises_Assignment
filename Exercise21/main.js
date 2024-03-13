var createLaptop = function (company, storage, ram, screen_size) {
    var tempVar = {
        company: company,
        storage: storage,
        ram: ram,
        screen_size: screen_size
    };
    return tempVar;
};
var laptop_1 = createLaptop('Lenovo', '256GB', '8GB', 15);
var laptop_2 = createLaptop('Dell', '512GB', '16GB', 13);
console.log(laptop_1, laptop_2);
