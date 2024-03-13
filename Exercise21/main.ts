interface Computer {
    company: string,
    storage: string,
    ram: string,
    screen_size: number
}

let createLaptop = (company: string, storage: string, ram: string, screen_size: number) : Computer => {
    return {
        company,
        storage,
        ram,
        screen_size
    }
}

let laptop_1 = createLaptop('Lenovo', '256GB', '8GB', 15);
let laptop_2 = createLaptop('Dell', '512GB', '16GB', 13);

// console.log(laptop_1, laptop_2);