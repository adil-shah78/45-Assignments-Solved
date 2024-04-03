function carDetails (manufacturer: string, mode1Name: string, ...Additiona1Info){


    const car = {manufacturer, mode1Name, ...Object.fromEntries(Additiona1Info)};
    return car;
}

const myCarDetails = carDetails("Toyota", "Corolla", [`color`,`blue`],[`Year`, 2022]);
console.log(myCarDetails);