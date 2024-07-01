// Person Class

class Person {
  constructor(name, age, occupation) {
    this.name = name;
    this.age = age;
    this.occupation = occupation;
  }

  getAge() {
    return this.age;
  }

  getName() {
    return this.name;
  }

  getOccupation() {
    return this.occupation;
  }
}

// Example usage
let person = new Person("Rohan Zinzuvadiya", 19 , "Software Engineer");
console.log(person.getName()); // Output: Rohan Zinzuvadiya
console.log(person.getAge()); // Output: 19
console.log(person.getOccupation()); // Output: Software Engineer
