// Q2.Return details of students who scored more than 60.


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

const studentsAbove60 = students.filter(student => student.marks > 60);
console.log(studentsAbove60);

// Output: [{ name: "emma", roll: 2, marks: 70 }, { name: "ava", roll: 4, marks: 80 }, { name: "sophia", roll: 16, marks: 90 }, { name: "jackson", roll: 18, marks: 75 }]