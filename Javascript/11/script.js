// Base class
class Vehicle {
    constructor(makeYear) {
        this.makeYear = makeYear;
    }

    getCarAge(currentYear) {
        return currentYear - this.makeYear;
    }
}

// Derived class
class Car extends Vehicle {
    constructor(model, makeYear) {
        super(makeYear); // Call the constructor of Vehicle
        this.model = model;
    }

    displayCarInfo() {
        console.log(`Model: ${this.model}, Make Year: ${this.makeYear}`);
    }
}

// Create a new car instance
const myCar = new Car('Tesla Model S', 2018);
myCar.displayCarInfo(); // Model: Tesla Model S, Make Year: 2018

// Calculate the car's age
const currentYear = new Date().getFullYear();
console.log(`Car Age: ${myCar.getCarAge(currentYear)} years`); // Car Age: X years
