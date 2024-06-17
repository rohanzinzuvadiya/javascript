// 6. Question: Write a function to print each key and its corresponding value from the 'student' object.
// Object Method

// Create a method inside the `student` object called `greet` that, when called, prints "Have a nice day!".

const student = { 
  name: 'Alice', 
  age: 20, 
  major: 'Computer Science', 
  greet: function() { 
    console.log('Have a nice day!'); 
  } 
}; 

function printStudentInfo() { 
  for (const key in student) { 
    console.log(`${key}: ${student[key]}`); 
  } 
} 
printStudentInfo(); 

// Output: 
// name: Alice 
// age: 20 
// major: Computer Science 
// greet: function() { console.log('Have a nice day!'); }

student.greet(); // Output: Have a nice day!