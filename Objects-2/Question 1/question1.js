// Q1. Return name of students with Capital Letters.


const students = [
    { name: "john", roll: 1, marks: 40 },
    { name: "emma", roll: 2, marks: 70 },
    { name: "oliver", roll: 3, marks: 50 },
    { name: "ava", roll: 4, marks: 80 },
    { name: "liam", roll: 5, marks: 30 },
    { name: "sophia", roll: 16, marks: 90 },
    { name: "mia", roll: 17, marks: 60 },
    { name: "jackson", roll: 18, marks: 75 },
  ];

  const capitalizedNames = students.map(student => student.name.toUpperCase());
  console.log(capitalizedNames);

 // Output: ["JOHN", "EMMA", "OLIVER", "AVA", "LIAM", "SOPHIA", "MIA", "JACKSON"]