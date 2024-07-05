class ElectricVehicle {
    constructor(make, model, year) {
      this.make = make;
      this.model = model;
      this.year = year;
    }
    
    startEngine() {
      console.log("Starting engine...");
    }
  }
  
  class Automobile {
    constructor(make, model, year, range) {
      this.make = make;
      this.model = model;
      this.year = year;
      this.range = range;
    }
    
    drive(distance) {
      console.log(`Drived ${distance} miles...`);
      this.range -= distance;
    }
    
    checkRange() {
      console.log(`Range remaining: ${this.range} miles`);
    }
    
    startEngine() {
      console.log("Starting engine...");
    }
  }
  
  let myCar = new Automobile("Tesla", "Model S", 2022, 300);
  
  myCar.drive(100);
  myCar.checkRange();
  myCar.startEngine();