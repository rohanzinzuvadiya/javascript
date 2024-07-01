// Car Class
class Car {
  constructor(name, color, price) {
    this.name = name;
    this.color = color;
    this.price = price;
  }

  getColor() {
    return this.color;
  }

  getPrice() {
    return this.price;
  }

  getName() {
    return this.name;
  }
}

let car = new Car("Toyota", "Red", 20000);
console.log(car.getName()); // Output: Toyota
console.log(car.getColor()); // Output: Red
console.log(car.getPrice()); // Output: 20000
