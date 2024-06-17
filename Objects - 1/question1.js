// 1. Question: Write a function to print all the keys of the 'person' object.


const person = {
    name: 'rohan',
    age: 18,
    occupation: 'Developer' 
};

function printPersonKeys() {
    for (const key in person) {
      console.log(key);
    }
  }
  printPersonKeys(); // Output: name, age, occupation