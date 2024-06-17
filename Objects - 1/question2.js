// 2. Question: Write a function to print all the values of the 'car' object.

const car = {
    brand: 'Toyota',
    model: 'Camry', 
    year: 2015 
};

function printCarValues() {
    for (const value of Object.values(car)) {
      console.log(value);
    }
  }
  printCarValues(); // Output: Toyota, Camry, 2015

