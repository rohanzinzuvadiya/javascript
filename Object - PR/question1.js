function findHighScoringStudents(students) {
    let highScoringStudents = [];
  
    for (let i = 0; i < students.length; i++) {
      if (students[i].score > 90) {
        highScoringStudents.push(students[i].name);
      }
    }
  
    console.log("High-scoring students:");
    console.log(highScoringStudents);
  }
  
  // Example usage:
  let students = [
    { name: "Alice", score: 85 },
    { name: "Bob", score: 92 },
    { name: "Charlie", score: 78 },
    { name: "David", score: 95 },
    { name: "Eve", score: 88 }
  ];
  
  findHighScoringStudents(students);