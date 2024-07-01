// Calculator Class

class Calculator {
  Sum(a, b) {
    return a + b;
  }

  Sub(a, b) {
    return a - b;
  }
}

let calculator = new Calculator();
console.log(calculator.Sum(5, 3)); // Output: 8
console.log(calculator.Sub(5, 3)); // Output: 2
